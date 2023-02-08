/*
 * Tencent is pleased to support the open source community by making Hippy
 * available.
 * Copyright (C) 2018 THL A29 Limited, a Tencent company. All rights reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.tencent.mtt.hippy;

import android.content.Context;
import android.os.Handler;
import android.os.Looper;
import android.os.Message;
import android.text.TextUtils;
import android.view.View;
import android.view.ViewGroup;
import androidx.annotation.MainThread;
import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import com.openhippy.connector.DomManager;
import com.openhippy.connector.JsDriver;
import com.openhippy.connector.NativeRenderer;
import com.openhippy.framework.BuildConfig;
import com.tencent.devtools.DevtoolsManager;
import com.tencent.mtt.hippy.adapter.device.HippyDeviceAdapter;
import com.tencent.mtt.hippy.adapter.executor.HippyExecutorSupplierAdapter;
import com.tencent.mtt.hippy.adapter.monitor.HippyEngineMonitorAdapter;
import com.tencent.mtt.hippy.adapter.thirdparty.HippyThirdPartyAdapter;
import com.tencent.mtt.hippy.bridge.HippyBridgeManager;
import com.tencent.mtt.hippy.bridge.HippyBridgeManagerImpl;
import com.tencent.mtt.hippy.bridge.bundleloader.HippyAssetBundleLoader;
import com.tencent.mtt.hippy.bridge.bundleloader.HippyBundleLoader;
import com.tencent.mtt.hippy.bridge.bundleloader.HippyFileBundleLoader;
import com.tencent.mtt.hippy.bridge.bundleloader.HippyRemoteBundleLoader;
import com.tencent.mtt.hippy.common.Callback;
import com.tencent.mtt.hippy.common.HippyJsException;
import com.tencent.mtt.hippy.common.HippyMap;
import com.tencent.mtt.hippy.common.ThreadExecutor;
import com.tencent.mtt.hippy.devsupport.DevServerCallBack;
import com.tencent.mtt.hippy.devsupport.DevSupportManager;
import com.tencent.mtt.hippy.modules.HippyModuleManager;
import com.tencent.mtt.hippy.modules.HippyModuleManagerImpl;
import com.tencent.mtt.hippy.modules.HippyModulePromise.BridgeTransferType;
import com.tencent.mtt.hippy.modules.javascriptmodules.Dimensions;
import com.tencent.mtt.hippy.modules.javascriptmodules.EventDispatcher;
import com.tencent.mtt.hippy.modules.nativemodules.deviceevent.DeviceEventModule;
import com.tencent.mtt.hippy.uimanager.HippyCustomViewCreator;
import com.tencent.mtt.hippy.utils.DimensionsUtil;
import com.tencent.mtt.hippy.utils.LogUtils;
import com.tencent.mtt.hippy.utils.TimeMonitor;
import com.tencent.mtt.hippy.utils.UIThreadUtils;
import com.tencent.renderer.ControllerProvider;
import com.tencent.renderer.FrameworkProxy;
import com.tencent.renderer.component.image.ImageDecoderAdapter;
import com.tencent.renderer.component.text.FontAdapter;
import com.tencent.vfs.DefaultProcessor;
import com.tencent.devtools.vfs.DevtoolsProcessor;
import com.tencent.vfs.Processor;
import com.tencent.vfs.VfsManager;
import com.openhippy.connector.JsDriver.V8InitParams;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.CopyOnWriteArrayList;
import java.util.concurrent.Executor;

@SuppressWarnings({"deprecation", "unused"})
public abstract class HippyEngineManagerImpl extends HippyEngineManager implements
        DevServerCallBack, FrameworkProxy, ThreadExecutor.UncaughtExceptionHandler {

    static final String TAG = "HippyEngineManagerImpl";

    static final int MSG_ENGINE_INIT_TIMEOUT = 100;

    /**
     * global configuration
     */
    @NonNull
    final HippyGlobalConfigs mGlobalConfigs;
    /**
     * core bundle loader
     */
    HippyBundleLoader mCoreBundleLoader;
    /**
     * preload bundle loader
     */
    final HippyBundleLoader mPreloadBundleLoader;
    /**
     * providers
     */
    final List<HippyAPIProvider> mModuleProviders;
    final List<ControllerProvider> mControllerProviders;
    List<Processor> mProcessors;
    /**
     * Dev support manager
     */
    DevSupportManager mDevSupportManager;
    HippyEngineContextImpl mEngineContext;
    private ModuleLoadParams moduleLoadParams;
    private HippyBundleLoader jsBundleLoader;
    // 从网络上加载jsbundle
    final boolean mDebugMode;
    // Hippy Server的jsbundle名字，调试模式下有效
    final String mServerBundleName;
    // Hippy Server的host，调试模式下有效
    private final String mServerHost;
    // Hippy Server url using remote debug in no usb，only take effect in debugMode = true
    private final String mRemoteServerUrl;
    private ViewGroup mRootView;
    final boolean enableV8Serialization;

    final TimeMonitor mStartTimeMonitor;
    boolean mHasReportEngineLoadResult = false;
    private final HippyThirdPartyAdapter mThirdPartyAdapter;
    private final V8InitParams v8InitParams;
    private HashMap<String, Object> mNativeParams;
    @Nullable
    private HashMap<Integer, Callback<Boolean>> mDestroyModuleListeners;

    final Handler mHandler = new Handler(Looper.getMainLooper()) {
        @Override
        public void handleMessage(Message msg) {
            if (msg.what
                    == MSG_ENGINE_INIT_TIMEOUT) {
                reportEngineLoadResult(
                        HippyEngineMonitorAdapter.ENGINE_LOAD_RESULE_TIMEOUT,
                        null);
            }
            super.handleMessage(msg);
        }
    };

    HippyEngineManagerImpl(EngineInitParams params, HippyBundleLoader preloadBundleLoader) {
        super();
        // create core bundle loader
        HippyBundleLoader coreBundleLoader = null;
        if (!TextUtils.isEmpty(params.coreJSAssetsPath)) {
            coreBundleLoader = new HippyAssetBundleLoader(params.context, params.coreJSAssetsPath,
                    !TextUtils.isEmpty(params.codeCacheTag), params.codeCacheTag);
        } else if (!TextUtils.isEmpty(params.coreJSFilePath)) {
            coreBundleLoader = new HippyFileBundleLoader(params.coreJSFilePath,
                    !TextUtils.isEmpty(params.codeCacheTag), params.codeCacheTag);
        }
        mGlobalConfigs = new HippyGlobalConfigs(params);
        mCoreBundleLoader = coreBundleLoader;
        mPreloadBundleLoader = preloadBundleLoader;
        mModuleProviders = params.moduleProviders;
        mControllerProviders = params.controllerProviders;
        mProcessors = params.processors;
        mDebugMode = params.debugMode;
        mServerBundleName = params.debugMode ? params.debugBundleName : "";
        mStartTimeMonitor = new TimeMonitor(!params.debugMode);
        enableV8Serialization = params.enableV8Serialization;
        mServerHost = params.debugServerHost;
        mRemoteServerUrl = params.remoteServerUrl;
        mGroupId = params.groupId;
        mThirdPartyAdapter = params.thirdPartyAdapter;
        v8InitParams = params.v8InitParams;
    }

    @Override
    public void initEngine(EngineListener listener) {
        if (mCurrentState != EngineState.UNINIT) {
            if (listener != null) {
                listen(listener);
            }
            return;
        }

        mCurrentState = EngineState.INITING;
        if (listener != null) {
            mEventListeners.add(listener);
        }

        mGlobalConfigs.getEngineMonitorAdapter().reportEngineLoadStart();
        mHandler.removeMessages(MSG_ENGINE_INIT_TIMEOUT);

        try {
            mDevSupportManager = new DevSupportManager(mGlobalConfigs, mDebugMode, mServerHost,
                    mServerBundleName, mRemoteServerUrl);
            mDevSupportManager.setDevCallback(this);

            if (mDebugMode) {
                String url = mDevSupportManager.createResourceUrl(mServerBundleName);
                mCoreBundleLoader = new HippyRemoteBundleLoader(url);
                ((HippyRemoteBundleLoader) mCoreBundleLoader).setIsDebugMode(true);
            }

            LogUtils.d(TAG, "start restartEngineInBackground...");
            restartEngineInBackground(false);
        } catch (Throwable e) {
            mCurrentState = EngineState.INITERRORED;
            notifyEngineInitialized(EngineInitStatus.STATUS_INIT_EXCEPTION, e);
        }
    }

    @Override
    public void destroyEngine() {
        if (mEngineContext != null) {
            mEngineContext.destroyBridge(false);
        }
    }

    protected void onDestroyEngine() {
        mCurrentState = EngineState.DESTROYED;
        if (mEngineContext != null) {
            mEngineContext.destroy(false);
        }
        if (moduleLoadParams != null && moduleLoadParams.nativeParams != null) {
            moduleLoadParams.nativeParams.clear();
            moduleLoadParams = null;
        }
        if (mDestroyModuleListeners != null) {
            mDestroyModuleListeners.clear();
            mDestroyModuleListeners = null;
        }
        if (mModuleProviders != null) {
            mModuleProviders.clear();
        }
        if (mControllerProviders != null) {
            mControllerProviders.clear();
        }
        if (mProcessors != null) {
            mProcessors.clear();
        }
        if (mNativeParams != null) {
            mNativeParams.clear();
        }
        mGlobalConfigs.destroyIfNeed();
        moduleListener = null;
        mRootView = null;
        mExtendDatas.clear();
        mEventListeners.clear();
    }

    @Override
    public void onFirstViewAdded() {
        if (moduleListener != null) {
            moduleListener.onFirstViewAdded();
        }
    }

    @Override
    public void updateDimension(int width, int height, boolean shouldUseScreenDisplay,
            boolean systemUiVisibilityChanged) {
        if (mEngineContext == null) {
            return;
        }
        Context context = mEngineContext.getGlobalConfigs().getContext();
        HippyMap dimensionMap = DimensionsUtil
                .getDimensions(width, height, context, shouldUseScreenDisplay);
        int dimensionW = 0;
        int dimensionH = 0;
        if (dimensionMap != null) {
            HippyMap windowMap = dimensionMap.getMap("windowPhysicalPixels");
            dimensionW = windowMap.getInt("width");
            dimensionH = windowMap.getInt("height");
        }
        if (height < 0 || dimensionW == dimensionH) {
            HippyDeviceAdapter deviceAdapter = mEngineContext.getGlobalConfigs().getDeviceAdapter();
            if (deviceAdapter != null) {
                deviceAdapter.reviseDimensionIfNeed(context, dimensionMap, shouldUseScreenDisplay,
                        systemUiVisibilityChanged);
            }
        }
        if (mEngineContext.getModuleManager() != null) {
            mEngineContext.getModuleManager().getJavaScriptModule(Dimensions.class)
                    .set(dimensionMap);
        }
    }

    @Override
    public FontAdapter getFontAdapter() {
        return mEngineContext.getGlobalConfigs().getFontScaleAdapter();
    }

    @Override
    public ImageDecoderAdapter getImageDecoderAdapter() {
        return mEngineContext.getGlobalConfigs().getImageDecoderAdapter();
    }

    @NonNull
    public VfsManager getVfsManager() {
        return mEngineContext.getVfsManager();
    }

    @Nullable
    public Executor getBackgroundExecutor() {
        HippyExecutorSupplierAdapter adapter = mEngineContext.getGlobalConfigs().getExecutorSupplierAdapter();
        return (adapter != null) ? adapter.getBackgroundTaskExecutor() : null;
    }

    @Override
    public Object getCustomViewCreator() {
        if (moduleLoadParams != null && moduleLoadParams.nativeParams != null) {
            return moduleLoadParams.nativeParams
                    .get(HippyCustomViewCreator.HIPPY_CUSTOM_VIEW_CREATOR);
        }

        return null;
    }

    @Override
    public String getBundlePath() {
        if (jsBundleLoader != null) {
            return jsBundleLoader.getPath();
        }
        return null;
    }

    @Override
    public void handleNativeException(Exception exception) {
        mGlobalConfigs.getExceptionHandler().handleNativeException(exception, true);
    }

    public void recordSnapshot(@NonNull View rootView, @NonNull final Callback<byte[]> callback) {
        if (mEngineContext != null && mEngineContext.getNativeRenderer() != null) {
            mEngineContext.getNativeRenderer().recordSnapshot(rootView, callback);
        }
    }

    public View replaySnapshot(@NonNull Context context, @NonNull byte[] buffer) {
        if (mEngineContext != null && mEngineContext.getNativeRenderer() != null) {
            mEngineContext.getNativeRenderer().replaySnapshot(context, buffer);
        }
        return null;
    }

    public View replaySnapshot(@NonNull Context context, @NonNull Map<String, Object> snapshotMap) {
        if (mEngineContext != null && mEngineContext.getNativeRenderer() != null) {
            mEngineContext.getNativeRenderer().replaySnapshot(context, snapshotMap);
        }
        return null;
    }

    private void checkModuleLoadParams(ModuleLoadParams loadParams) {
        if (loadParams == null) {
            throw new RuntimeException("Hippy: loadModule loadParams must no be null");
        }
        if (loadParams.context == null) {
            throw new RuntimeException("Hippy: loadModule loadParams.context must no be null");
        }
        if (!mDebugMode && TextUtils.isEmpty(loadParams.jsAssetsPath) && TextUtils
                .isEmpty(loadParams.jsFilePath)) {
            throw new RuntimeException(
                    "Hippy: loadModule debugMode=true, loadParams.jsAssetsPath and jsFilePath both null!");
        }
        if (mEngineContext != null) {
            mEngineContext.setComponentName(loadParams.componentName);
            mNativeParams = loadParams.nativeParams;
        }
        if (loadParams.jsParams == null) {
            loadParams.jsParams = new HippyMap();
        }
        if (!TextUtils.isEmpty(loadParams.jsAssetsPath)) {
            loadParams.jsParams.pushString("sourcePath", loadParams.jsAssetsPath);
        } else {
            loadParams.jsParams.pushString("sourcePath", loadParams.jsFilePath);
        }
    }

    @Override
    public ViewGroup loadModule(ModuleLoadParams loadParams) {
        return loadModule(loadParams, null);
    }

    @Override
    public ViewGroup loadModule(ModuleLoadParams loadParams, ModuleListener listener) {
        moduleListener = listener;
        moduleLoadParams = loadParams;
        checkModuleLoadParams(loadParams);
        if (loadParams.bundleLoader != null) {
            jsBundleLoader = loadParams.bundleLoader;
        } else {
            if (!TextUtils.isEmpty(loadParams.jsAssetsPath)) {
                jsBundleLoader = new HippyAssetBundleLoader(loadParams.context,
                        loadParams.jsAssetsPath,
                        !TextUtils.isEmpty(loadParams.codeCacheTag), loadParams.codeCacheTag);
            } else if (!TextUtils.isEmpty(loadParams.jsFilePath)) {
                jsBundleLoader = new HippyFileBundleLoader(loadParams.jsFilePath,
                        !TextUtils.isEmpty(loadParams.codeCacheTag), loadParams.codeCacheTag);
            }
        }
        mRootView = (ViewGroup) mEngineContext.createRootView(loadParams.context);
        if (mCurrentState == EngineState.DESTROYED || mRootView == null) {
            notifyModuleLoaded(ModuleLoadStatus.STATUS_ENGINE_UNINIT,
                    "load module error wrong state, Engine destroyed");
            return null;
        }
        mDevSupportManager.attachToHost(loadParams.context, mRootView.getId());
        LogUtils.d(TAG, "internalLoadInstance start...");
        if (mCurrentState == EngineState.INITED) {
            loadJsModule();
        } else {
            notifyModuleLoaded(ModuleLoadStatus.STATUS_ENGINE_UNINIT,
                    "error wrong state, Engine state not INITED, state:" + mCurrentState);
        }
        return mRootView;
    }

    @MainThread
    @Override
    public void destroyModule(@NonNull ViewGroup rootView, @NonNull Callback<Boolean> callback) {
        int rootId = rootView.getId();
        if (mDestroyModuleListeners == null) {
            mDestroyModuleListeners = new HashMap<>();
        }
        mDestroyModuleListeners.put(rootId, callback);
        if (mEngineContext != null && mEngineContext.getBridgeManager() != null) {
            mEngineContext.getBridgeManager().destroyInstance(rootId);
        }
    }

    @Deprecated
    public HippyEngineContextImpl getCurrentEngineContext() {
        return getEngineContext();
    }

    public HippyEngineContextImpl getEngineContext() {
        return mEngineContext;
    }

    @Override
    public void onEnginePause() {
        if (mEngineContext != null) {
            if (mEngineContext.mEngineLifecycleEventListeners != null) {
                for (HippyEngineLifecycleEventListener listener : mEngineContext.mEngineLifecycleEventListeners) {
                    if (listener != null) {
                        listener.onEnginePause();
                    }
                }
            }
            mEngineContext.onInstancePause();
        }
    }

    @Override
    public void onEngineResume() {
        if (mEngineContext != null) {
            if (mEngineContext.mEngineLifecycleEventListeners != null) {
                for (HippyEngineLifecycleEventListener listener : mEngineContext.mEngineLifecycleEventListeners) {
                    if (listener != null) {
                        listener.onEngineResume();
                    }
                }
            }
            mEngineContext.onInstanceResume();
        }
    }

    @Override
    public void sendEvent(String event, Object params, BridgeTransferType transferType) {
        if (mEngineContext != null && mEngineContext.getModuleManager() != null) {
            mEngineContext.getModuleManager().getJavaScriptModule(EventDispatcher.class)
                    .receiveNativeEvent(event, params, transferType);
        }
    }

    @Override
    public void sendEvent(String event, Object params) {
        sendEvent(event, params, BridgeTransferType.BRIDGE_TRANSFER_TYPE_NORMAL);
    }

    @Override
    public void preloadModule(HippyBundleLoader loader) {
        if (mEngineContext != null && mEngineContext.getBridgeManager() != null) {
            mEngineContext.getBridgeManager().runBundle(-1, loader, null);
        }
    }

    @Override
    public boolean onBackPressed(BackPressHandler handler) {
        if (mEngineContext != null
                && mEngineContext.getModuleManager().getNativeModule(DeviceEventModule.class)
                != null) {
            return mEngineContext.getModuleManager().getNativeModule(DeviceEventModule.class)
                    .onBackPressed(handler);
        } else {
            return false;
        }
    }

    @Override
    public boolean onBackPress(final DeviceEventModule.InvokeDefaultBackPress invokeImp) {
        BackPressHandler handler = new BackPressHandler() {
            @Override
            public void handleBackPress() {
                if (invokeImp != null) {
                    invokeImp.callSuperOnBackPress();
                }
            }
        };
        return onBackPressed(handler);
    }

    @Override
    public boolean isDebugMode() {
        return mDebugMode;
    }

    private void notifyModuleLoaded(final ModuleLoadStatus statusCode, final String msg) {
        if (moduleListener != null) {
            if (UIThreadUtils.isOnUiThread()) {
                if (moduleListener != null) {
                    moduleListener.onLoadCompleted(statusCode, msg);
                }
            } else {
                UIThreadUtils.runOnUiThread(new Runnable() {
                    @Override
                    public void run() {
                        if (moduleListener != null) {
                            moduleListener.onLoadCompleted(statusCode, msg);
                        }
                    }
                });
            }
        }
    }

    void notifyEngineInitialized(EngineInitStatus statusCode, Throwable e) {
        mHandler.removeMessages(MSG_ENGINE_INIT_TIMEOUT);
        if (mPreloadBundleLoader != null) {
            LogUtils.d(TAG, "preload bundle loader");
            preloadModule(mPreloadBundleLoader);
        }

        if (UIThreadUtils.isOnUiThread()) {
            mStartTimeMonitor.end();
            reportEngineLoadResult(
                    mCurrentState == EngineState.INITED
                            ? HippyEngineMonitorAdapter.ENGINE_LOAD_RESULT_SUCCESS
                            : HippyEngineMonitorAdapter.ENGINE_LOAD_RESULT_ERROR, e);
            for (EngineListener listener : mEventListeners) {
                listener.onInitialized(statusCode, e == null ? null : e.toString());
            }
            mEventListeners.clear();
        } else {
            final EngineInitStatus code = statusCode;
            final Throwable error = e;
            UIThreadUtils.runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    if (mCurrentState != EngineState.DESTROYED) {
                        mStartTimeMonitor.end();
                        reportEngineLoadResult(mCurrentState == EngineState.INITED
                                ? HippyEngineMonitorAdapter.ENGINE_LOAD_RESULT_SUCCESS
                                : HippyEngineMonitorAdapter.ENGINE_LOAD_RESULT_ERROR, error);
                    }

                    for (EngineListener listener : mEventListeners) {
                        listener.onInitialized(code, error == null ? null : error.toString());
                    }
                    mEventListeners.clear();
                }
            });
        }
    }

    private void reportEngineLoadResult(int code, Throwable e) {
        mHandler.removeMessages(MSG_ENGINE_INIT_TIMEOUT);
        if (!mDebugMode && !mHasReportEngineLoadResult) {
            mHasReportEngineLoadResult = true;
            mGlobalConfigs.getEngineMonitorAdapter()
                    .reportEngineLoadResult(code, mStartTimeMonitor.getTotalTime(),
                            mStartTimeMonitor.getEvents(), e);
        }
    }

    private synchronized void restartEngineInBackground(boolean onReLoad) {
        if (mCurrentState == EngineState.DESTROYED) {
            String errorMsg =
                    "restartEngineInBackground... error STATUS_WRONG_STATE, state=" + mCurrentState;
            notifyEngineInitialized(EngineInitStatus.STATUS_WRONG_STATE, new Throwable(errorMsg));
            return;
        }
        if (mCurrentState != EngineState.INITING) {
            mCurrentState = EngineState.ONRESTART;
        }
        DomManager domManager = null;
        if (onReLoad && mEngineContext != null) {
            if (mDebugMode) {
                domManager = mEngineContext.getDomManager();
                mEngineContext.destroy(true);
            } else {
                mEngineContext.destroy(false);
            }
        }
        try {
            mEngineContext = new HippyEngineContextImpl(domManager);
        } catch (RuntimeException e) {
            LogUtils.e(TAG, "new HippyEngineContextImpl(): " + e.getMessage());
            notifyEngineInitialized(EngineInitStatus.STATUS_INIT_EXCEPTION, e);
            return;
        }
        mEngineContext.getBridgeManager().initBridge(new Callback<Boolean>() {
            @Override
            public void callback(Boolean result, Throwable e) {
                if (mCurrentState != EngineState.INITING
                        && mCurrentState != EngineState.ONRESTART) {
                    LogUtils.e(TAG,
                            "initBridge callback error STATUS_WRONG_STATE, state=" + mCurrentState);
                    notifyEngineInitialized(EngineInitStatus.STATUS_WRONG_STATE, e);
                    return;
                }

                if (mCurrentState == EngineState.ONRESTART) {
                    loadJsModule();
                }

                EngineState state = mCurrentState;
                mCurrentState = result ? EngineState.INITED : EngineState.INITERRORED;
                if (state != EngineState.ONRESTART) {
                    notifyEngineInitialized(
                            result ? EngineInitStatus.STATUS_OK : EngineInitStatus.STATUS_ERR_BRIDGE,
                            e);
                } else {
                    LogUtils.e(TAG,
                            "initBridge callback error STATUS_WRONG_STATE, state=" + mCurrentState);
                    notifyEngineInitialized(EngineInitStatus.STATUS_WRONG_STATE, e);
                }
            }
        });
    }

    /**
     * After init engine callback, send load instance message to js invoke render If debug mode js
     * bundle load with common bundle after init engine
     */
    private void loadJsModule() {
        if (mEngineContext == null || mRootView == null || moduleLoadParams == null) {
            notifyModuleLoaded(ModuleLoadStatus.STATUS_VARIABLE_NULL,
                    "load module error. mEngineContext=" + mEngineContext
                            + ", rootView=" + mRootView
                            + ", moduleLoadParams=" + moduleLoadParams);
            return;
        }
        if (!mDebugMode) {
            if (jsBundleLoader != null) {
                mEngineContext.getBridgeManager()
                        .runBundle(mRootView.getId(), jsBundleLoader, moduleListener);
            } else {
                notifyModuleLoaded(ModuleLoadStatus.STATUS_VARIABLE_NULL,
                        "load module error. jsBundleLoader==null");
                return;
            }
        }
        mEngineContext.getBridgeManager()
                .loadInstance(moduleLoadParams.componentName, mRootView.getId(),
                        moduleLoadParams.jsParams);
        if (mDebugMode) {
            notifyModuleLoaded(ModuleLoadStatus.STATUS_OK, null);
        }
    }

    @Override
    public void onDebugReLoad() {
        destroyModule(mRootView, new Callback<Boolean>() {
            @Override
            public void callback(@Nullable Boolean result, @Nullable Throwable e) {
                mEngineContext.destroyBridge(true);
            }
        });
    }

    @Override
    public void onInitDevError(Throwable e) {
        mCurrentState = EngineState.INITED;
        notifyEngineInitialized(EngineInitStatus.STATUS_ERR_DEVSERVER, e);
    }

    public abstract ThreadExecutor getThreadExecutor();

    public abstract int getBridgeType();

    @Override
    public void handleThreadUncaughtException(Thread t, Throwable e, Integer groupId) {
        if (mDebugMode && mDevSupportManager != null) {
            mDevSupportManager.handleException(e);
        } else {
            mGlobalConfigs.getExceptionHandler()
                    .handleNativeException(new RuntimeException(e), false);
        }
    }

    @Deprecated
    public ViewGroup loadInstance(HippyRootViewParams params) {
        return loadInstance(params, null);
    }

    @Deprecated
    public ViewGroup loadInstance(HippyRootViewParams params, ModuleListener listener) {
        ModuleLoadParams loadParams = new ModuleLoadParams();
        loadParams.context = params.getActivity();
        loadParams.componentName = params.getName();
        // getBundleLoader可能为空，debugMode = false的时候
        HippyBundleLoader loader = params.getBundleLoader();
        if (loader instanceof HippyAssetBundleLoader) {
            loadParams.jsAssetsPath = params.getBundleLoader().getRawPath();
        } else if (loader instanceof HippyFileBundleLoader) {
            loadParams.jsFilePath = params.getBundleLoader().getRawPath();
        }
        loadParams.jsParams = params.getLaunchParams();
        loadParams.nativeParams = params.getNativeParams();
        loadParams.bundleLoader = params.getBundleLoader();
        return loadModule(loadParams, listener);
    }

    public class HippyEngineContextImpl implements HippyEngineContext,
            HippyInstanceLifecycleEventListener {

        private String componentName;
        @NonNull
        private final HippyModuleManager mModuleManager;
        @NonNull
        private final HippyBridgeManager mBridgeManager;
        @NonNull
        private final NativeRenderer mNativeRenderer;
        @NonNull
        private final DomManager mDomManager;
        @NonNull
        private final JsDriver mJsDriver;
        @NonNull
        private final VfsManager mVfsManager;
        @Nullable
        private DevtoolsManager mDevtoolsManager;
        @Nullable
        volatile CopyOnWriteArrayList<HippyEngineLifecycleEventListener> mEngineLifecycleEventListeners;

        public HippyEngineContextImpl(@Nullable DomManager domManager) throws RuntimeException {
            mVfsManager = (mProcessors != null) ? new VfsManager(mProcessors) : new VfsManager();
            mVfsManager.setId(onCreateVfs(mVfsManager));
            DefaultProcessor processor = new DefaultProcessor(new HippyResourceLoader(this));
            mVfsManager.addProcessorAtLast(processor);
            if (mDebugMode) {
                mDevtoolsManager = new DevtoolsManager(true);
                String localCachePath = getGlobalConfigs().getContext().getCacheDir()
                        .getAbsolutePath();
                mDevtoolsManager.create(localCachePath,
                        getDevSupportManager().createDebugUrl(mServerHost));
                //mVfsManager.addProcessorAtFirst(new DevtoolsProcessor(mDevtoolsManager.getId()));
            }
            mModuleManager = new HippyModuleManagerImpl(this, mModuleProviders,
                    enableV8Serialization);
            mJsDriver = new JsDriver();
            mBridgeManager = new HippyBridgeManagerImpl(this, mCoreBundleLoader,
                    getBridgeType(), enableV8Serialization, mDebugMode,
                    mServerHost, mGroupId, mThirdPartyAdapter, v8InitParams, mJsDriver);
            mDomManager = (domManager != null) ? domManager : new DomManager();
            mNativeRenderer = new NativeRenderer();
            mDomManager.attachToRenderer(mNativeRenderer);
            mNativeRenderer.attachToDom(mDomManager);
            mNativeRenderer.setFrameworkProxy(HippyEngineManagerImpl.this);
            List<Class<?>> controllers = null;
            if (mControllerProviders != null) {
                for (ControllerProvider provider : mControllerProviders) {
                    if (controllers == null) {
                        controllers = provider.getControllers();
                    } else {
                        controllers.addAll(provider.getControllers());
                    }
                }
            }
            mNativeRenderer.init(controllers, mRootView);
        }

        @Override
        public void onRuntimeInitialized() {
            mJsDriver.attachToDom(mDomManager);
            if (mRootView != null && (mDebugMode || BuildConfig.DEBUG)) {
                mDomManager.createRoot(mRootView);
                mDomManager.attachToRoot(mRootView);
                mJsDriver.attachToRoot(mRootView);
                if (mDevtoolsManager != null) {
                    mDevtoolsManager.attachToRoot(mRootView);
                }
                mNativeRenderer.onRuntimeInitialized(mRootView);
            }
            if (mDevtoolsManager != null) {
                mDevtoolsManager.bind(mJsDriver, mDomManager, mNativeRenderer);
            }
        }

        @NonNull
        DomManager getDomManager() {
            return mDomManager;
        }

        @NonNull
        NativeRenderer getNativeRenderer() {
            return mNativeRenderer;
        }

        public void setComponentName(String componentName) {
            this.componentName = componentName;
        }

        @Override
        public String getComponentName() {
            return componentName;
        }

        @Override
        @Nullable
        public HashMap<String, Object> getNativeParams() {
            return mNativeParams;
        }

        @Override
        public HippyGlobalConfigs getGlobalConfigs() {
            return mGlobalConfigs;
        }

        @Override
        @NonNull
        public VfsManager getVfsManager() {
            return mVfsManager;
        }

        @Override
        public HippyModuleManager getModuleManager() {
            return mModuleManager;
        }

        @Override
        public DevSupportManager getDevSupportManager() {
            return mDevSupportManager;
        }

        @Override
        public DevtoolsManager getDevtoolsManager() {
            return mDevtoolsManager;
        }

        @Override
        public ThreadExecutor getThreadExecutor() {
            return HippyEngineManagerImpl.this.getThreadExecutor();
        }

        @Override
        public HippyBridgeManager getBridgeManager() {
            return mBridgeManager;
        }

        @Override
        public void addEngineLifecycleEventListener(HippyEngineLifecycleEventListener listener) {
            if (mEngineLifecycleEventListeners == null) {
                synchronized (HippyEngineContextImpl.class) {
                    if (mEngineLifecycleEventListeners == null) {
                        mEngineLifecycleEventListeners = new CopyOnWriteArrayList<>();
                    }
                }
            }
            mEngineLifecycleEventListeners.add(listener);
        }

        @Override
        public void removeEngineLifecycleEventListener(HippyEngineLifecycleEventListener listener) {
            if (mEngineLifecycleEventListeners != null) {
                mEngineLifecycleEventListeners.remove(listener);
            }
        }

        @Override
        public void onInstanceLoad(int rootId) {

        }

        @Override
        public void onInstanceResume() {
            mNativeRenderer.onResume();
            if (getBridgeManager() != null && mRootView != null) {
                getBridgeManager().resumeInstance(mRootView.getId());
            }
        }

        @Override
        public void onInstancePause() {
            mNativeRenderer.onPause();
            if (getBridgeManager() != null && mRootView != null) {
                getBridgeManager().pauseInstance(mRootView.getId());
            }
        }

        @Override
        public void onInstanceDestroy(int rootId) {
            if (mDestroyModuleListeners != null) {
                Callback<Boolean> callback = mDestroyModuleListeners.get(rootId);
                if (callback != null) {
                    callback.callback(true, null);
                }
                mDestroyModuleListeners.remove(rootId);
            }
            mDomManager.destroyRoot(rootId);
            mNativeRenderer.destroyRoot(rootId);
        }

        @Override
        public void handleException(Throwable throwable) {
            if (mDebugMode && mDevSupportManager != null) {
                mDevSupportManager.handleException(throwable);
            } else {
                if (throwable instanceof HippyJsException) {
                    mGlobalConfigs.getExceptionHandler()
                            .handleJsException((HippyJsException) throwable);
                    mEngineContext.getBridgeManager()
                            .notifyModuleJsException((HippyJsException) throwable);
                } else {
                    mGlobalConfigs.getExceptionHandler()
                            .handleNativeException(new RuntimeException(throwable), true);
                }
            }
        }

        @Override
        public int getEngineId() {
            return HippyEngineManagerImpl.this.getEngineId();
        }

        @Override
        public int getDomManagerId() {
            return mDomManager.getInstanceId();
        }

        @Override
        public int getVfsId() {
            return mVfsManager.getId();
        }

        public int getDevtoolsId() {
            return mDevtoolsManager != null ? mDevtoolsManager.getId() : -1;
        }

        @Override
        public ViewGroup getRootView() {
            return mRootView;
        }

        @Nullable
        public View createRootView(@NonNull Context context) {
            View rootView = mNativeRenderer.createRootView(context);
            if (rootView != null) {
                mDomManager.createRoot(rootView);
                mDomManager.attachToRoot(rootView);
                mJsDriver.attachToRoot(rootView);
                if (mDevtoolsManager != null) {
                    mDevtoolsManager.attachToRoot(rootView);
                }
            }
            return rootView;
        }

        @Override
        public void onBridgeDestroyed(final boolean isReload, Throwable e) {
            UIThreadUtils.runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    if (isReload) {
                        restartEngineInBackground(true);
                    } else {
                        onDestroyEngine();
                    }
                }
            });
        }

        public void destroyBridge(boolean isReload) {
            mBridgeManager.destroyBridge(isReload);
        }

        public void destroy(boolean isReload) {
            if (mDevtoolsManager != null) {
                mDevtoolsManager.destroy(isReload);
            }
            mNativeRenderer.destroy();
            if (!isReload) {
                mDomManager.destroy();
            }
            mBridgeManager.destroy();
            mModuleManager.destroy();
            mVfsManager.destroy();
            onDestroyVfs(mVfsManager.getId());
            if (mEngineLifecycleEventListeners != null) {
                mEngineLifecycleEventListeners.clear();
            }
        }
    }

    @SuppressWarnings("JavaJniMissingFunction")
    private native int onCreateVfs(VfsManager vfsManager);

    @SuppressWarnings("JavaJniMissingFunction")
    private native void onDestroyVfs(int id);
}
!(function (e) {
  function t(t) {
    for (var n, r, i = t[0], a = t[1], l = 0, c = [];l < i.length;l++)r = i[l], Object.prototype.hasOwnProperty.call(o, r) && o[r] && c.push(o[r][0]), o[r] = 0;for (n in a)Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);for (s && s(t);c.length;)c.shift()();
  } const n = {}; var o = { 2: 0 };function r(t) {
    if (n[t]) return n[t].exports;const o = n[t] = { i: t, l: !1, exports: {} };return e[t].call(o.exports, o, o.exports, r), o.l = !0, o.exports;
  }r.e = function (e) {
    const t = []; let n = o[e];if (0 !== n) if (n)t.push(n[2]);else {
      const i = new Promise(((t, r) => {
        n = o[e] = [t, r];
      }));if (t.push(n[2] = i), !global.__DYNAMIC_LOAD_CUSTOM_PATH_MAP__) try {
        const a = JSON.parse('{"asyncComponentFromHttp":"https://raw.githubusercontent.com/Tencent/Hippy/master/static/hippy-react/"}');global.__DYNAMIC_LOAD_CUSTOM_PATH_MAP__ = a;
      } catch (e) {
        console.error('parse __DYNAMIC_LOAD_CUSTOM_PATH_MAP__ error', e);
      } let l = (function (e) {
        return `${r.p}${{ 0: 'asyncComponentFromHttp', 1: 'asyncComponentFromLocal' }[e] || e}.android.js`;
      }(e));if (l && global.__DYNAMIC_LOAD_CUSTOM_PATH_MAP__) if (['https://', 'http://', '//'].some(e => 0 === l.indexOf(e))) {
        const s = l.split('/'); const c = s[s.length - 1]; var h = c.split('.')[0];(u = global.__DYNAMIC_LOAD_CUSTOM_PATH_MAP__[h]) && (l = u + c);
      } else {
        var u;h = l.split('.')[0];(u = global.__DYNAMIC_LOAD_CUSTOM_PATH_MAP__[h]) && (l = u + l);
      }onScriptComplete = function (t) {
        if (t instanceof Error) {
          t.message += `, load chunk ${e} failed, path is ${l}`;const n = o[e];0 !== n && n && n[1](t), o[e] = void 0;
        }
      }, global.dynamicLoad(l, onScriptComplete);
    } return Promise.all(t);
  }, r.m = e, r.c = n, r.d = function (e, t, n) {
    r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
  }, r.r = function (e) {
    'undefined' !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(e, '__esModule', { value: !0 });
  }, r.t = function (e, t) {
    if (1 & t && (e = r(e)), 8 & t) return e;if (4 & t && 'object' === typeof e && e && e.__esModule) return e;const n = Object.create(null);if (r.r(n), Object.defineProperty(n, 'default', { enumerable: !0, value: e }), 2 & t && 'string' !== typeof e) for (const o in e)r.d(n, o, (t => e[t]).bind(null, o));return n;
  }, r.n = function (e) {
    const t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };return r.d(t, 'a', t), t;
  }, r.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, r.p = '', r.oe = function (e) {
    throw console.error(e), e;
  };let i = (0, eval)('this').webpackJsonp = (0, eval)('this').webpackJsonp || []; const a = i.push.bind(i);i.push = t, i = i.slice();for (let l = 0;l < i.length;l++)t(i[l]);var s = a;r(r.s = 0);
}({ '../../packages/hippy-react/dist/index.js'(e, t, n) {
  e.exports = n('dll-reference hippyReactBase')('../../packages/hippy-react/dist/index.js');
}, './node_modules/@babel/runtime/helpers/defineProperty.js'(e, t, n) {
  const o = n('./node_modules/@babel/runtime/helpers/toPropertyKey.js');e.exports = function (e, t, n) {
    return (t = o(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
  }, e.exports.__esModule = !0, e.exports.default = e.exports;
}, './node_modules/@babel/runtime/helpers/esm/inheritsLoose.js'(e, t, n) {
  'use strict';function o(e, t) {
    return (o = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
      return e.__proto__ = t, e;
    })(e, t);
  } function r(e, t) {
    e.prototype = Object.create(t.prototype), e.prototype.constructor = e, o(e, t);
  }n.d(t, 'a', (() => r));
}, './node_modules/@babel/runtime/helpers/extends.js'(e, t) {
  function n() {
    return e.exports = n = Object.assign ? Object.assign.bind() : function (e) {
      for (let t = 1;t < arguments.length;t++) {
        const n = arguments[t];for (const o in n)Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
      } return e;
    }, e.exports.__esModule = !0, e.exports.default = e.exports, n.apply(this, arguments);
  }e.exports = n, e.exports.__esModule = !0, e.exports.default = e.exports;
}, './node_modules/@babel/runtime/helpers/toPrimitive.js'(e, t, n) {
  const o = n('./node_modules/@babel/runtime/helpers/typeof.js').default;e.exports = function (e, t) {
    if ('object' !== o(e) || null === e) return e;const n = e[Symbol.toPrimitive];if (void 0 !== n) {
      const r = n.call(e, t || 'default');if ('object' !== o(r)) return r;throw new TypeError('@@toPrimitive must return a primitive value.');
    } return ('string' === t ? String : Number)(e);
  }, e.exports.__esModule = !0, e.exports.default = e.exports;
}, './node_modules/@babel/runtime/helpers/toPropertyKey.js'(e, t, n) {
  const o = n('./node_modules/@babel/runtime/helpers/typeof.js').default; const r = n('./node_modules/@babel/runtime/helpers/toPrimitive.js');e.exports = function (e) {
    const t = r(e, 'string');return 'symbol' === o(t) ? t : String(t);
  }, e.exports.__esModule = !0, e.exports.default = e.exports;
}, './node_modules/@babel/runtime/helpers/typeof.js'(e, t) {
  function n(t) {
    return e.exports = n = 'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator ? function (e) {
      return typeof e;
    } : function (e) {
      return e && 'function' === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
    }, e.exports.__esModule = !0, e.exports.default = e.exports, n(t);
  }e.exports = n, e.exports.__esModule = !0, e.exports.default = e.exports;
}, './node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js'(e, t, n) {
  'use strict';const o = n('./node_modules/react-is/index.js'); const r = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }; const i = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }; const a = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }; const l = {};function s(e) {
    return o.isMemo(e) ? a : l[e.$$typeof] || r;
  }l[o.ForwardRef] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, l[o.Memo] = a;const c = Object.defineProperty; const h = Object.getOwnPropertyNames; const u = Object.getOwnPropertySymbols; const d = Object.getOwnPropertyDescriptor; const m = Object.getPrototypeOf; const g = Object.prototype;e.exports = function e(t, n, o) {
    if ('string' !== typeof n) {
      if (g) {
        const r = m(n);r && r !== g && e(t, r, o);
      } let a = h(n);u && (a = a.concat(u(n)));for (let l = s(t), f = s(n), y = 0;y < a.length;++y) {
        const p = a[y];if (!(i[p] || o && o[p] || f && f[p] || l && l[p])) {
          const b = d(n, p);try {
            c(t, p, b);
          } catch (e) {}
        }
      }
    } return t;
  };
}, './node_modules/isarray/index.js'(e, t) {
  e.exports = Array.isArray || function (e) {
    return '[object Array]' == Object.prototype.toString.call(e);
  };
}, './node_modules/mini-create-react-context/dist/esm/index.js'(e, t, n) {
  'use strict';(function (e) {
    const o = n('./node_modules/react/index.js'); const r = n.n(o); const i = n('./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js'); const a = n('./node_modules/prop-types/index.js'); const l = n.n(a); const s = 'undefined' !== typeof globalThis ? globalThis : 'undefined' !== typeof window ? window : void 0 !== e ? e : {};function c(e) {
      let t = [];return { on(e) {
        t.push(e);
      }, off(e) {
        t = t.filter((t => t !== e));
      }, get() {
        return e;
      }, set(n, o) {
        e = n, t.forEach((t => t(e, o)));
      } };
    } const h = r.a.createContext || function (e, t) {
      let n; let r; let a; const h = `__create-react-context-${s[a = '__global_unique_id__'] = (s[a] || 0) + 1}__`; const u = (function (e) {
        function n() {
          let t;return (t = e.apply(this, arguments) || this).emitter = c(t.props.value), t;
        }Object(i.a)(n, e);const o = n.prototype;return o.getChildContext = function () {
          let e;return (e = {})[h] = this.emitter, e;
        }, o.componentWillReceiveProps = function (e) {
          if (this.props.value !== e.value) {
            let n; const o = this.props.value; const r = e.value;((i = o) === (a = r) ? 0 !== i || 1 / i == 1 / a : i != i && a != a) ? n = 0 : (n = 'function' === typeof t ? t(o, r) : 1073741823, 0 !== (n |= 0) && this.emitter.set(e.value, n));
          } let i; let a;
        }, o.render = function () {
          return this.props.children;
        }, n;
      }(o.Component));u.childContextTypes = ((n = {})[h] = l.a.object.isRequired, n);const d = (function (t) {
        function n() {
          let e;return (e = t.apply(this, arguments) || this).state = { value: e.getValue() }, e.onUpdate = function (t, n) {
            0 != ((0 | e.observedBits) & n) && e.setState({ value: e.getValue() });
          }, e;
        }Object(i.a)(n, t);const o = n.prototype;return o.componentWillReceiveProps = function (e) {
          const t = e.observedBits;this.observedBits = null == t ? 1073741823 : t;
        }, o.componentDidMount = function () {
          this.context[h] && this.context[h].on(this.onUpdate);const e = this.props.observedBits;this.observedBits = null == e ? 1073741823 : e;
        }, o.componentWillUnmount = function () {
          this.context[h] && this.context[h].off(this.onUpdate);
        }, o.getValue = function () {
          return this.context[h] ? this.context[h].get() : e;
        }, o.render = function () {
          return (e = this.props.children, Array.isArray(e) ? e[0] : e)(this.state.value);let e;
        }, n;
      }(o.Component));return d.contextTypes = ((r = {})[h] = l.a.object, r), { Provider: u, Consumer: d };
    };t.a = h;
  }).call(this, n('./node_modules/webpack/buildin/global.js'));
}, './node_modules/path-to-regexp/index.js'(e, t, n) {
  const o = n('./node_modules/isarray/index.js');e.exports = m, e.exports.parse = i, e.exports.compile = function (e, t) {
    return l(i(e, t), t);
  }, e.exports.tokensToFunction = l, e.exports.tokensToRegExp = d;const r = new RegExp(['(\\\\.)', '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');function i(e, t) {
    for (var n, o = [], i = 0, a = 0, l = '', h = t && t.delimiter || '/';null != (n = r.exec(e));) {
      const u = n[0]; const d = n[1]; const m = n.index;if (l += e.slice(a, m), a = m + u.length, d)l += d[1];else {
        const g = e[a]; const f = n[2]; const y = n[3]; const p = n[4]; const b = n[5]; const w = n[6]; const x = n[7];l && (o.push(l), l = '');const S = null != f && null != g && g !== f; const E = '+' === w || '*' === w; const T = '?' === w || '*' === w; const C = n[2] || h; const A = p || b;o.push({ name: y || i++, prefix: f || '', delimiter: C, optional: T, repeat: E, partial: S, asterisk: !!x, pattern: A ? c(A) : x ? '.*' : `[^${s(C)}]+?` });
      }
    } return a < e.length && (l += e.substr(a)), l && o.push(l), o;
  } function a(e) {
    return encodeURI(e).replace(/[\/?#]/g, (e => `%${e.charCodeAt(0).toString(16)
      .toUpperCase()}`));
  } function l(e, t) {
    for (var n = new Array(e.length), r = 0;r < e.length;r++)'object' === typeof e[r] && (n[r] = new RegExp(`^(?:${e[r].pattern})$`, u(t)));return function (t, r) {
      for (var i = '', l = t || {}, s = (r || {}).pretty ? a : encodeURIComponent, c = 0;c < e.length;c++) {
        const h = e[c];if ('string' !== typeof h) {
          var u; const d = l[h.name];if (null == d) {
            if (h.optional) {
              h.partial && (i += h.prefix);continue;
            } throw new TypeError(`Expected "${h.name}" to be defined`);
          } if (o(d)) {
            if (!h.repeat) throw new TypeError(`Expected "${h.name}" to not repeat, but received \`${JSON.stringify(d)}\``);if (0 === d.length) {
              if (h.optional) continue;throw new TypeError(`Expected "${h.name}" to not be empty`);
            } for (let m = 0;m < d.length;m++) {
              if (u = s(d[m]), !n[c].test(u)) throw new TypeError(`Expected all "${h.name}" to match "${h.pattern}", but received \`${JSON.stringify(u)}\``);i += (0 === m ? h.prefix : h.delimiter) + u;
            }
          } else {
            if (u = h.asterisk ? encodeURI(d).replace(/[?#]/g, (e => `%${e.charCodeAt(0).toString(16)
              .toUpperCase()}`)) : s(d), !n[c].test(u)) throw new TypeError(`Expected "${h.name}" to match "${h.pattern}", but received "${u}"`);i += h.prefix + u;
          }
        } else i += h;
      } return i;
    };
  } function s(e) {
    return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1');
  } function c(e) {
    return e.replace(/([=!:$\/()])/g, '\\$1');
  } function h(e, t) {
    return e.keys = t, e;
  } function u(e) {
    return e && e.sensitive ? '' : 'i';
  } function d(e, t, n) {
    o(t) || (n = t || n, t = []);for (var r = (n = n || {}).strict, i = !1 !== n.end, a = '', l = 0;l < e.length;l++) {
      const c = e[l];if ('string' === typeof c)a += s(c);else {
        const d = s(c.prefix); let m = `(?:${c.pattern})`;t.push(c), c.repeat && (m += `(?:${d}${m})*`), a += m = c.optional ? c.partial ? `${d}(${m})?` : `(?:${d}(${m}))?` : `${d}(${m})`;
      }
    } const g = s(n.delimiter || '/'); const f = a.slice(-g.length) === g;return r || (a = `${f ? a.slice(0, -g.length) : a}(?:${g}(?=$))?`), a += i ? '$' : r && f ? '' : `(?=${g}|$)`, h(new RegExp(`^${a}`, u(n)), t);
  } function m(e, t, n) {
    return o(t) || (n = t || n, t = []), n = n || {}, e instanceof RegExp ? (function (e, t) {
      const n = e.source.match(/\((?!\?)/g);if (n) for (let o = 0;o < n.length;o++)t.push({ name: o, prefix: null, delimiter: null, optional: !1, repeat: !1, partial: !1, asterisk: !1, pattern: null });return h(e, t);
    }(e, t)) : o(e) ? (function (e, t, n) {
      for (var o = [], r = 0;r < e.length;r++)o.push(m(e[r], t, n).source);return h(new RegExp(`(?:${o.join('|')})`, u(n)), t);
    }(e, t, n)) : (function (e, t, n) {
      return d(i(e, n), t, n);
    }(e, t, n));
  }
}, './node_modules/prop-types/factoryWithThrowingShims.js'(e, t, n) {
  'use strict';const o = n('./node_modules/prop-types/lib/ReactPropTypesSecret.js');function r() {} function i() {}i.resetWarningCache = r, e.exports = function () {
    function e(e, t, n, r, i, a) {
      if (a !== o) {
        const l = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types');throw l.name = 'Invariant Violation', l;
      }
    } function t() {
      return e;
    }e.isRequired = e;const n = { array: e, bigint: e, bool: e, func: e, number: e, object: e, string: e, symbol: e, any: e, arrayOf: t, element: e, elementType: e, instanceOf: t, node: e, objectOf: t, oneOf: t, oneOfType: t, shape: t, exact: t, checkPropTypes: i, resetWarningCache: r };return n.PropTypes = n, n;
  };
}, './node_modules/prop-types/index.js'(e, t, n) {
  e.exports = n('./node_modules/prop-types/factoryWithThrowingShims.js')();
}, './node_modules/prop-types/lib/ReactPropTypesSecret.js'(e, t, n) {
  'use strict';e.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
}, './node_modules/react-is/cjs/react-is.production.min.js'(e, t, n) {
  'use strict';
  /** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const o = 'function' === typeof Symbol && Symbol.for; const r = o ? Symbol.for('react.element') : 60103; const i = o ? Symbol.for('react.portal') : 60106; const a = o ? Symbol.for('react.fragment') : 60107; const l = o ? Symbol.for('react.strict_mode') : 60108; const s = o ? Symbol.for('react.profiler') : 60114; const c = o ? Symbol.for('react.provider') : 60109; const h = o ? Symbol.for('react.context') : 60110; const u = o ? Symbol.for('react.async_mode') : 60111; const d = o ? Symbol.for('react.concurrent_mode') : 60111; const m = o ? Symbol.for('react.forward_ref') : 60112; const g = o ? Symbol.for('react.suspense') : 60113; const f = o ? Symbol.for('react.suspense_list') : 60120; const y = o ? Symbol.for('react.memo') : 60115; const p = o ? Symbol.for('react.lazy') : 60116; const b = o ? Symbol.for('react.block') : 60121; const w = o ? Symbol.for('react.fundamental') : 60117; const x = o ? Symbol.for('react.responder') : 60118; const S = o ? Symbol.for('react.scope') : 60119;function E(e) {
    if ('object' === typeof e && null !== e) {
      const t = e.$$typeof;switch (t) {
        case r:switch (e = e.type) {
          case u:case d:case a:case s:case l:case g:return e;default:switch (e = e && e.$$typeof) {
            case h:case m:case p:case y:case c:return e;default:return t;
          }
        } case i:return t;
      }
    }
  } function A(e) {
    return E(e) === d;
  }t.AsyncMode = u, t.ConcurrentMode = d, t.ContextConsumer = h, t.ContextProvider = c, t.Element = r, t.ForwardRef = m, t.Fragment = a, t.Lazy = p, t.Memo = y, t.Portal = i, t.Profiler = s, t.StrictMode = l, t.Suspense = g, t.isAsyncMode = function (e) {
    return A(e) || E(e) === u;
  }, t.isConcurrentMode = A, t.isContextConsumer = function (e) {
    return E(e) === h;
  }, t.isContextProvider = function (e) {
    return E(e) === c;
  }, t.isElement = function (e) {
    return 'object' === typeof e && null !== e && e.$$typeof === r;
  }, t.isForwardRef = function (e) {
    return E(e) === m;
  }, t.isFragment = function (e) {
    return E(e) === a;
  }, t.isLazy = function (e) {
    return E(e) === p;
  }, t.isMemo = function (e) {
    return E(e) === y;
  }, t.isPortal = function (e) {
    return E(e) === i;
  }, t.isProfiler = function (e) {
    return E(e) === s;
  }, t.isStrictMode = function (e) {
    return E(e) === l;
  }, t.isSuspense = function (e) {
    return E(e) === g;
  }, t.isValidElementType = function (e) {
    return 'string' === typeof e || 'function' === typeof e || e === a || e === d || e === s || e === l || e === g || e === f || 'object' === typeof e && null !== e && (e.$$typeof === p || e.$$typeof === y || e.$$typeof === c || e.$$typeof === h || e.$$typeof === m || e.$$typeof === w || e.$$typeof === x || e.$$typeof === S || e.$$typeof === b);
  }, t.typeOf = E;
}, './node_modules/react-is/index.js'(e, t, n) {
  'use strict';e.exports = n('./node_modules/react-is/cjs/react-is.production.min.js');
}, './node_modules/react/index.js'(e, t, n) {
  e.exports = n('dll-reference hippyReactBase')('./node_modules/react/index.js');
}, './node_modules/regenerator-runtime/runtime.js'(e, t, n) {
  const o = (function (e) {
    'use strict';const t = Object.prototype; const n = t.hasOwnProperty; const o = 'function' === typeof Symbol ? Symbol : {}; const r = o.iterator || '@@iterator'; const i = o.asyncIterator || '@@asyncIterator'; const a = o.toStringTag || '@@toStringTag';function l(e, t, n) {
      return Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }), e[t];
    } try {
      l({}, '');
    } catch (e) {
      l = function (e, t, n) {
        return e[t] = n;
      };
    } function s(e, t, n, o) {
      const r = t && t.prototype instanceof u ? t : u; const i = Object.create(r.prototype); const a = new A(o || []);return i._invoke = (function (e, t, n) {
        let o = 'suspendedStart';return function (r, i) {
          if ('executing' === o) throw new Error('Generator is already running');if ('completed' === o) {
            if ('throw' === r) throw i;return C();
          } for (n.method = r, n.arg = i;;) {
            const a = n.delegate;if (a) {
              const l = x(a, n);if (l) {
                if (l === h) continue;return l;
              }
            } if ('next' === n.method)n.sent = n._sent = n.arg;else if ('throw' === n.method) {
              if ('suspendedStart' === o) throw o = 'completed', n.arg;n.dispatchException(n.arg);
            } else 'return' === n.method && n.abrupt('return', n.arg);o = 'executing';const s = c(e, t, n);if ('normal' === s.type) {
              if (o = n.done ? 'completed' : 'suspendedYield', s.arg === h) continue;return { value: s.arg, done: n.done };
            }'throw' === s.type && (o = 'completed', n.method = 'throw', n.arg = s.arg);
          }
        };
      }(e, n, a)), i;
    } function c(e, t, n) {
      try {
        return { type: 'normal', arg: e.call(t, n) };
      } catch (e) {
        return { type: 'throw', arg: e };
      }
    }e.wrap = s;var h = {};function u() {} function d() {} function m() {} let g = {};l(g, r, (function () {
      return this;
    }));const f = Object.getPrototypeOf; const y = f && f(f(T([])));y && y !== t && n.call(y, r) && (g = y);const p = m.prototype = u.prototype = Object.create(g);function b(e) {
      ['next', 'throw', 'return'].forEach(((t) => {
        l(e, t, (function (e) {
          return this._invoke(t, e);
        }));
      }));
    } function w(e, t) {
      let o;this._invoke = function (r, i) {
        function a() {
          return new t(((o, a) => {
            !(function o(r, i, a, l) {
              const s = c(e[r], e, i);if ('throw' !== s.type) {
                const h = s.arg; const u = h.value;return u && 'object' === typeof u && n.call(u, '__await') ? t.resolve(u.__await).then(((e) => {
                  o('next', e, a, l);
                }), ((e) => {
                  o('throw', e, a, l);
                })) : t.resolve(u).then(((e) => {
                  h.value = e, a(h);
                }), (e => o('throw', e, a, l)));
              }l(s.arg);
            }(r, i, o, a));
          }));
        } return o = o ? o.then(a, a) : a();
      };
    } function x(e, t) {
      const n = e.iterator[t.method];if (void 0 === n) {
        if (t.delegate = null, 'throw' === t.method) {
          if (e.iterator.return && (t.method = 'return', t.arg = void 0, x(e, t), 'throw' === t.method)) return h;t.method = 'throw', t.arg = new TypeError('The iterator does not provide a \'throw\' method');
        } return h;
      } const o = c(n, e.iterator, t.arg);if ('throw' === o.type) return t.method = 'throw', t.arg = o.arg, t.delegate = null, h;const r = o.arg;return r ? r.done ? (t[e.resultName] = r.value, t.next = e.nextLoc, 'return' !== t.method && (t.method = 'next', t.arg = void 0), t.delegate = null, h) : r : (t.method = 'throw', t.arg = new TypeError('iterator result is not an object'), t.delegate = null, h);
    } function S(e) {
      const t = { tryLoc: e[0] };1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t);
    } function E(e) {
      const t = e.completion || {};t.type = 'normal', delete t.arg, e.completion = t;
    } function A(e) {
      this.tryEntries = [{ tryLoc: 'root' }], e.forEach(S, this), this.reset(!0);
    } function T(e) {
      if (e) {
        const t = e[r];if (t) return t.call(e);if ('function' === typeof e.next) return e;if (!isNaN(e.length)) {
          let o = -1; const i = function t() {
            for (;++o < e.length;) if (n.call(e, o)) return t.value = e[o], t.done = !1, t;return t.value = void 0, t.done = !0, t;
          };return i.next = i;
        }
      } return { next: C };
    } function C() {
      return { value: void 0, done: !0 };
    } return d.prototype = m, l(p, 'constructor', m), l(m, 'constructor', d), d.displayName = l(m, a, 'GeneratorFunction'), e.isGeneratorFunction = function (e) {
      const t = 'function' === typeof e && e.constructor;return !!t && (t === d || 'GeneratorFunction' === (t.displayName || t.name));
    }, e.mark = function (e) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(e, m) : (e.__proto__ = m, l(e, a, 'GeneratorFunction')), e.prototype = Object.create(p), e;
    }, e.awrap = function (e) {
      return { __await: e };
    }, b(w.prototype), l(w.prototype, i, (function () {
      return this;
    })), e.AsyncIterator = w, e.async = function (t, n, o, r, i) {
      void 0 === i && (i = Promise);const a = new w(s(t, n, o, r), i);return e.isGeneratorFunction(n) ? a : a.next().then((e => (e.done ? e.value : a.next())));
    }, b(p), l(p, a, 'Generator'), l(p, r, (function () {
      return this;
    })), l(p, 'toString', (() => '[object Generator]')), e.keys = function (e) {
      const t = [];for (const n in e)t.push(n);return t.reverse(), function n() {
        for (;t.length;) {
          const o = t.pop();if (o in e) return n.value = o, n.done = !1, n;
        } return n.done = !0, n;
      };
    }, e.values = T, A.prototype = { constructor: A, reset(e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = 'next', this.arg = void 0, this.tryEntries.forEach(E), !e) for (const t in this)'t' === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0);
    }, stop() {
      this.done = !0;const e = this.tryEntries[0].completion;if ('throw' === e.type) throw e.arg;return this.rval;
    }, dispatchException(e) {
      if (this.done) throw e;const t = this;function o(n, o) {
        return a.type = 'throw', a.arg = e, t.next = n, o && (t.method = 'next', t.arg = void 0), !!o;
      } for (let r = this.tryEntries.length - 1;r >= 0;--r) {
        const i = this.tryEntries[r]; var a = i.completion;if ('root' === i.tryLoc) return o('end');if (i.tryLoc <= this.prev) {
          const l = n.call(i, 'catchLoc'); const s = n.call(i, 'finallyLoc');if (l && s) {
            if (this.prev < i.catchLoc) return o(i.catchLoc, !0);if (this.prev < i.finallyLoc) return o(i.finallyLoc);
          } else if (l) {
            if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
          } else {
            if (!s) throw new Error('try statement without catch or finally');if (this.prev < i.finallyLoc) return o(i.finallyLoc);
          }
        }
      }
    }, abrupt(e, t) {
      for (let o = this.tryEntries.length - 1;o >= 0;--o) {
        const r = this.tryEntries[o];if (r.tryLoc <= this.prev && n.call(r, 'finallyLoc') && this.prev < r.finallyLoc) {
          var i = r;break;
        }
      }i && ('break' === e || 'continue' === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);const a = i ? i.completion : {};return a.type = e, a.arg = t, i ? (this.method = 'next', this.next = i.finallyLoc, h) : this.complete(a);
    }, complete(e, t) {
      if ('throw' === e.type) throw e.arg;return 'break' === e.type || 'continue' === e.type ? this.next = e.arg : 'return' === e.type ? (this.rval = this.arg = e.arg, this.method = 'return', this.next = 'end') : 'normal' === e.type && t && (this.next = t), h;
    }, finish(e) {
      for (let t = this.tryEntries.length - 1;t >= 0;--t) {
        const n = this.tryEntries[t];if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), E(n), h;
      }
    }, catch(e) {
      for (let t = this.tryEntries.length - 1;t >= 0;--t) {
        const n = this.tryEntries[t];if (n.tryLoc === e) {
          const o = n.completion;if ('throw' === o.type) {
            var r = o.arg;E(n);
          } return r;
        }
      } throw new Error('illegal catch attempt');
    }, delegateYield(e, t, n) {
      return this.delegate = { iterator: T(e), resultName: t, nextLoc: n }, 'next' === this.method && (this.arg = void 0), h;
    } }, e;
  }(e.exports));try {
    regeneratorRuntime = o;
  } catch (e) {
    'object' === typeof globalThis ? globalThis.regeneratorRuntime = o : Function('r', 'regeneratorRuntime = r')(o);
  }
}, './node_modules/webpack/buildin/global.js'(e, t, n) {
  e.exports = n('dll-reference hippyReactBase')('./node_modules/webpack/buildin/global.js');
}, './src/app.jsx'(e, t, n) {
  'use strict';n.d(t, 'a', (() => pn));const o = {};n.r(o), n.d(o, 'Focusable', (() => W)), n.d(o, 'Image', (() => q)), n.d(o, 'ListView', (() => $)), n.d(o, 'Modal', (() => re)), n.d(o, 'RefreshWrapper', (() => ke)), n.d(o, 'PullHeaderFooter', (() => Re)), n.d(o, 'ScrollView', (() => De)), n.d(o, 'Text', (() => Fe)), n.d(o, 'TextInput', (() => Be)), n.d(o, 'View', (() => He)), n.d(o, 'ViewPager', (() => Je)), n.d(o, 'WebView', (() => $e)), n.d(o, 'BoxShadow', (() => nt)), n.d(o, 'WaterfallView', (() => it)), n.d(o, 'RippleViewAndroid', (() => dt));const r = {};n.r(r), n.d(r, 'Animation', (() => yt)), n.d(r, 'AsyncStorage', (() => bt)), n.d(r, 'NetInfo', (() => xt)), n.d(r, 'WebSocket', (() => Ct)), n.d(r, 'UIManagerModule', (() => It));const i = {};n.r(i), n.d(i, 'Slider', (() => Ft)), n.d(i, 'TabHost', (() => Bt)), n.d(i, 'SetNativeProps', (() => Ht)), n.d(i, 'DynamicImport', (() => Nt)), n.d(i, 'Localization', (() => Ut)), n.d(i, 'Turbo', (() => Qt)), n.d(i, 'NestedScroll', (() => Xt));const a = n('./node_modules/react/index.js'); const l = n.n(a); const s = n('../../packages/hippy-react/dist/index.js'); const c = n('./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js');function h() {
    return (h = Object.assign ? Object.assign.bind() : function (e) {
      for (let t = 1;t < arguments.length;t++) {
        const n = arguments[t];for (const o in n)Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
      } return e;
    }).apply(this, arguments);
  } function u(e) {
    return '/' === e.charAt(0);
  } function d(e, t) {
    for (let n = t, o = n + 1, r = e.length;o < r;n += 1, o += 1)e[n] = e[o];e.pop();
  } const m = function (e, t) {
    void 0 === t && (t = '');let n; const o = e && e.split('/') || []; let r = t && t.split('/') || []; const i = e && u(e); const a = t && u(t); const l = i || a;if (e && u(e) ? r = o : o.length && (r.pop(), r = r.concat(o)), !r.length) return '/';if (r.length) {
      const s = r[r.length - 1];n = '.' === s || '..' === s || '' === s;
    } else n = !1;for (var c = 0, h = r.length;h >= 0;h--) {
      const m = r[h];'.' === m ? d(r, h) : '..' === m ? (d(r, h), c++) : c && (d(r, h), c--);
    } if (!l) for (;c--;c)r.unshift('..');!l || '' === r[0] || r[0] && u(r[0]) || r.unshift('');let g = r.join('/');return n && '/' !== g.substr(-1) && (g += '/'), g;
  };const g = 'Invariant failed';function f(e, t) {
    if (!e) throw new Error(g);
  } function y(e) {
    const t = e.pathname; const n = e.search; const o = e.hash; let r = t || '/';return n && '?' !== n && (r += '?' === n.charAt(0) ? n : `?${n}`), o && '#' !== o && (r += '#' === o.charAt(0) ? o : `#${o}`), r;
  } function p(e, t, n, o) {
    let r;'string' === typeof e ? (r = (function (e) {
      let t = e || '/'; let n = ''; let o = ''; const r = t.indexOf('#');-1 !== r && (o = t.substr(r), t = t.substr(0, r));const i = t.indexOf('?');return -1 !== i && (n = t.substr(i), t = t.substr(0, i)), { pathname: t, search: '?' === n ? '' : n, hash: '#' === o ? '' : o };
    }(e))).state = t : (void 0 === (r = h({}, e)).pathname && (r.pathname = ''), r.search ? '?' !== r.search.charAt(0) && (r.search = `?${r.search}`) : r.search = '', r.hash ? '#' !== r.hash.charAt(0) && (r.hash = `#${r.hash}`) : r.hash = '', void 0 !== t && void 0 === r.state && (r.state = t));try {
      r.pathname = decodeURI(r.pathname);
    } catch (e) {
      throw e instanceof URIError ? new URIError(`Pathname "${r.pathname}" could not be decoded. This is likely caused by an invalid percent-encoding.`) : e;
    } return n && (r.key = n), o ? r.pathname ? '/' !== r.pathname.charAt(0) && (r.pathname = m(r.pathname, o.pathname)) : r.pathname = o.pathname : r.pathname || (r.pathname = '/'), r;
  } function b() {
    let e = null;let t = [];return { setPrompt(t) {
      return e = t, function () {
        e === t && (e = null);
      };
    }, confirmTransitionTo(t, n, o, r) {
      if (null != e) {
        const i = 'function' === typeof e ? e(t, n) : e;'string' === typeof i ? 'function' === typeof o ? o(i, r) : r(!0) : r(!1 !== i);
      } else r(!0);
    }, appendListener(e) {
      let n = !0;function o() {
        n && e.apply(void 0, arguments);
      } return t.push(o), function () {
        n = !1, t = t.filter((e => e !== o));
      };
    }, notifyListeners() {
      for (var e = arguments.length, n = new Array(e), o = 0;o < e;o++)n[o] = arguments[o];t.forEach((e => e.apply(void 0, n)));
    } };
  }'undefined' === typeof window || !window.document || window.document.createElement;function w(e, t, n) {
    return Math.min(Math.max(e, t), n);
  } function x(e) {
    void 0 === e && (e = {});const t = e; const n = t.getUserConfirmation; const o = t.initialEntries; const r = void 0 === o ? ['/'] : o; const i = t.initialIndex; const a = void 0 === i ? 0 : i; const l = t.keyLength; const s = void 0 === l ? 6 : l; const c = b();function u(e) {
      h(S, e), S.length = S.entries.length, c.notifyListeners(S.location, S.action);
    } function d() {
      return Math.random().toString(36)
        .substr(2, s);
    } const m = w(a, 0, r.length - 1); const g = r.map((e => p(e, void 0, 'string' === typeof e ? d() : e.key || d()))); const f = y;function x(e) {
      const t = w(S.index + e, 0, S.entries.length - 1); const o = S.entries[t];c.confirmTransitionTo(o, 'POP', n, ((e) => {
        e ? u({ action: 'POP', location: o, index: t }) : u();
      }));
    } var S = { length: g.length, action: 'POP', location: g[m], index: m, entries: g, createHref: f, push(e, t) {
      const o = p(e, t, d(), S.location);c.confirmTransitionTo(o, 'PUSH', n, ((e) => {
        if (e) {
          const t = S.index + 1; const n = S.entries.slice(0);n.length > t ? n.splice(t, n.length - t, o) : n.push(o), u({ action: 'PUSH', location: o, index: t, entries: n });
        }
      }));
    }, replace(e, t) {
      const o = p(e, t, d(), S.location);c.confirmTransitionTo(o, 'REPLACE', n, ((e) => {
        e && (S.entries[S.index] = o, u({ action: 'REPLACE', location: o }));
      }));
    }, go: x, goBack() {
      x(-1);
    }, goForward() {
      x(1);
    }, canGo(e) {
      const t = S.index + e;return t >= 0 && t < S.entries.length;
    }, block(e) {
      return void 0 === e && (e = !1), c.setPrompt(e);
    }, listen(e) {
      return c.appendListener(e);
    } };return S;
  } const S = n('./node_modules/mini-create-react-context/dist/esm/index.js'); const E = n('./node_modules/path-to-regexp/index.js'); const A = n.n(E);n('./node_modules/react-is/index.js');function T(e, t) {
    if (null == e) return {};let n; let o; const r = {}; const i = Object.keys(e);for (o = 0;o < i.length;o++)n = i[o], t.indexOf(n) >= 0 || (r[n] = e[n]);return r;
  } const C = n('./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js'); const v = n.n(C); const k = (function (e) {
    const t = Object(S.a)();return t.displayName = e, t;
  }('Router')); const V = (function (e) {
    function t(t) {
      let n;return (n = e.call(this, t) || this).state = { location: t.history.location }, n._isMounted = !1, n._pendingLocation = null, t.staticContext || (n.unlisten = t.history.listen(((e) => {
        n._isMounted ? n.setState({ location: e }) : n._pendingLocation = e;
      }))), n;
    }Object(c.a)(t, e), t.computeRootMatch = function (e) {
      return { path: '/', url: '/', params: {}, isExact: '/' === e };
    };const n = t.prototype;return n.componentDidMount = function () {
      this._isMounted = !0, this._pendingLocation && this.setState({ location: this._pendingLocation });
    }, n.componentWillUnmount = function () {
      this.unlisten && this.unlisten();
    }, n.render = function () {
      return l.a.createElement(k.Provider, { children: this.props.children || null, value: { history: this.props.history, location: this.state.location, match: t.computeRootMatch(this.state.location.pathname), staticContext: this.props.staticContext } });
    }, t;
  }(l.a.Component));const R = (function (e) {
    function t() {
      for (var t, n = arguments.length, o = new Array(n), r = 0;r < n;r++)o[r] = arguments[r];return (t = e.call.apply(e, [this].concat(o)) || this).history = x(t.props), t;
    } return Object(c.a)(t, e), t.prototype.render = function () {
      return l.a.createElement(V, { history: this.history, children: this.props.children });
    }, t;
  }(l.a.Component));l.a.Component;const I = {}; let D = 0;function O(e, t) {
    void 0 === t && (t = {}), ('string' === typeof t || Array.isArray(t)) && (t = { path: t });const n = t; const o = n.path; const r = n.exact; const i = void 0 !== r && r; const a = n.strict; const l = void 0 !== a && a; const s = n.sensitive; const c = void 0 !== s && s;return [].concat(o).reduce(((t, n) => {
      if (!n && '' !== n) return null;if (t) return t;const o = (function (e, t) {
        const n = `${t.end}${t.strict}${t.sensitive}`; const o = I[n] || (I[n] = {});if (o[e]) return o[e];const r = []; const i = { regexp: A()(e, r, t), keys: r };return D < 1e4 && (o[e] = i, D++), i;
      }(n, { end: i, strict: l, sensitive: c })); const r = o.regexp; const a = o.keys; const s = r.exec(e);if (!s) return null;const h = s[0]; const u = s.slice(1); const d = e === h;return i && !d ? null : { path: n, url: '/' === n && '' === h ? '/' : h, isExact: d, params: a.reduce(((e, t, n) => (e[t.name] = u[n], e)), {}) };
    }), null);
  } const P = (function (e) {
    function t() {
      return e.apply(this, arguments) || this;
    } return Object(c.a)(t, e), t.prototype.render = function () {
      const e = this;return l.a.createElement(k.Consumer, null, ((t) => {
        t || f(!1);const n = e.props.location || t.location; const o = h({}, t, { location: n, match: e.props.computedMatch ? e.props.computedMatch : e.props.path ? O(n.pathname, e.props) : t.match }); const r = e.props; let i = r.children; const a = r.component; const s = r.render;return Array.isArray(i) && 0 === i.length && (i = null), l.a.createElement(k.Provider, { value: o }, o.match ? i ? 'function' === typeof i ? i(o) : i : a ? l.a.createElement(a, o) : s ? s(o) : null : 'function' === typeof i ? i(o) : null);
      }));
    }, t;
  }(l.a.Component));function L(e) {
    return '/' === e.charAt(0) ? e : `/${e}`;
  } function j(e, t) {
    if (!e) return t;const n = L(e);return 0 !== t.pathname.indexOf(n) ? t : h({}, t, { pathname: t.pathname.substr(n.length) });
  } function F(e) {
    return 'string' === typeof e ? e : y(e);
  } function z(e) {
    return function () {
      f(!1);
    };
  } function B() {}l.a.Component;l.a.Component;function M(e) {
    const t = `withRouter(${e.displayName || e.name})`; const n = function (t) {
      const n = t.wrappedComponentRef; const o = T(t, ['wrappedComponentRef']);return l.a.createElement(k.Consumer, null, (t => (t || f(!1), l.a.createElement(e, h({}, o, t, { ref: n })))));
    };return n.displayName = t, n.WrappedComponent = e, v()(n, e);
  }l.a.useContext;const _ = n('./node_modules/@babel/runtime/helpers/defineProperty.js'); const H = n.n(_);class W extends l.a.Component {
    constructor(e) {
      super(e), this.state = { clickindex: 0 };
    }onClick(e) {
      this.setState({ clickindex: e });
    }getRenderRow(e) {
      const { clickindex: t } = this.state;return l.a.createElement(s.View, null, l.a.createElement(s.Focusable, { style: { height: 80 }, onClick: () => this.onClick(e), requestFocus: 0 === e, focusStyle: { backgroundColor: 'red' }, noFocusStyle: { backgroundColor: 'blue' } }, l.a.createElement(s.Text, { style: { color: 'white' } }, t === e ? `我被点击了${e}` : `没有被点击${e}`)));
    }render() {
      return l.a.createElement(s.ScrollView, null, this.getRenderRow(0), this.getRenderRow(1), this.getRenderRow(2), this.getRenderRow(3), this.getRenderRow(4), this.getRenderRow(5), this.getRenderRow(6), this.getRenderRow(7), this.getRenderRow(8), this.getRenderRow(9), this.getRenderRow(10), this.getRenderRow(11), this.getRenderRow(12), this.getRenderRow(13), this.getRenderRow(14), this.getRenderRow(15), this.getRenderRow(16), this.getRenderRow(17), this.getRenderRow(18));
    }
  } const N = `${n.p}assets/defaultSource.jpg`; const K = `${n.p}assets/hippyLogoWhite.png`;const U = 'https://user-images.githubusercontent.com/12878546/148736102-7cd9525b-aceb-41c6-a905-d3156219ef16.png'; const G = s.StyleSheet.create({ container_style: { alignItems: 'center' }, image_style: { width: 300, height: 180, margin: 16, borderColor: '#4c9afa', borderWidth: 1, borderStyle: 'solid', borderRadius: 4 }, info_style: { marginTop: 15, marginLeft: 16, fontSize: 16, color: '#4c9afa' }, img_result: { width: 300, marginTop: -15, marginLeft: 16, fontSize: 16, color: '#4c9afa', borderColor: '#4c9afa', borderWidth: 1, borderStyle: 'solid', borderRadius: 4 } });class q extends l.a.Component {
    constructor(e) {
      super(e), this.state = { gifLoadResult: {} };
    }render() {
      const { width: e, height: t, url: n } = this.state.gifLoadResult;return l.a.createElement(s.ScrollView, { style: G.container_style }, l.a.createElement(s.Text, { style: G.info_style }, 'Contain:'), l.a.createElement(s.Image, { style: [G.image_style], resizeMode: s.Image.resizeMode.contain, defaultSource: N, source: { uri: U }, onProgress: (e) => {
        console.log('onProgress', e);
      }, onLoadStart: () => {
        console.log('image onloadStart');
      }, onLoad: () => {
        console.log('image onLoad');
      }, onError: (e) => {
        console.log('image onError', e);
      }, onLoadEnd: () => {
        console.log('image onLoadEnd');
      } }), l.a.createElement(s.Text, { style: G.info_style }, 'Cover:'), l.a.createElement(s.Image, { style: [G.image_style], defaultSource: N, source: { uri: U }, resizeMode: s.Image.resizeMode.cover }), l.a.createElement(s.Text, { style: G.info_style }, 'Center:'), l.a.createElement(s.Image, { style: [G.image_style], defaultSource: N, source: { uri: U }, resizeMode: s.Image.resizeMode.center }), l.a.createElement(s.Text, { style: G.info_style }, 'CapInsets:'), l.a.createElement(s.Image, { style: [G.image_style], defaultSource: N, source: { uri: U }, capInsets: { top: 50, left: 50, bottom: 50, right: 50 }, resizeMode: s.Image.resizeMode.cover }), l.a.createElement(s.Text, { style: G.info_style }, 'TintColor:'), l.a.createElement(s.Image, { style: [G.image_style, { tintColor: '#4c9afa99' }], defaultSource: N, source: { uri: K }, resizeMode: s.Image.resizeMode.center }), l.a.createElement(s.Text, { style: G.info_style }, 'Cover GIF:'), l.a.createElement(s.Image, { style: [G.image_style], resizeMode: s.Image.resizeMode.cover, defaultSource: N, source: { uri: 'https://user-images.githubusercontent.com/12878546/148736255-7193f89e-9caf-49c0-86b0-548209506bd6.gif' }, onLoad: (e) => {
        console.log(`gif onLoad result: ${e}`);const { width: t, height: n, url: o } = e;this.setState({ gifLoadResult: { width: t, height: n, url: o } });
      } }), l.a.createElement(s.Text, { style: G.img_result }, `gifLoadResult: { width: ${e}, height: ${t}, url: ${n} }`));
    }
  } const Q = [{ style: 1 }, { style: 2 }, { style: 5 }, { style: 1 }, { style: 2 }, { style: 5 }, { style: 1 }, { style: 2 }, { style: 5 }, { style: 1 }, { style: 2 }, { style: 5 }, { style: 1 }, { style: 2 }, { style: 5 }, { style: 1 }, { style: 2 }, { style: 5 }, { style: 1 }, { style: 2 }, { style: 5 }, { style: 1 }, { style: 2 }, { style: 5 }, { style: 1 }, { style: 2 }, { style: 5 }, { style: 1 }, { style: 2 }, { style: 5 }]; const Y = s.StyleSheet.create({ container: { backgroundColor: '#fff', collapsable: !1 }, itemContainer: { padding: 12 }, separatorLine: { marginLeft: 12, marginRight: 12, height: 1, backgroundColor: '#e5e5e5' }, loading: { fontSize: 11, color: '#aaaaaa', alignSelf: 'center' } });function X({ index: e }) {
    return l.a.createElement(s.View, { style: Y.container, onClickCapture: (e) => {
      console.log('onClickCapture style1', e.target.nodeId, e.currentTarget.nodeId);
    }, onTouchDown: e => (e.stopPropagation(), console.log('onTouchDown style1', e.target.nodeId, e.currentTarget.nodeId), !1), onClick: e => (console.log('click style1', e.target.nodeId, e.currentTarget.nodeId), !1) }, l.a.createElement(s.Text, { numberOfLines: 1 }, `${e}: Style 1 UI`));
  } function J({ index: e }) {
    return l.a.createElement(s.View, { style: Y.container }, l.a.createElement(s.Text, { numberOfLines: 1 }, `${e}: Style 2 UI`));
  } function Z({ index: e }) {
    return l.a.createElement(s.View, { style: Y.container }, l.a.createElement(s.Text, { numberOfLines: 1 }, `${e}: Style 5 UI`));
  } class $ extends l.a.Component {
    constructor(e) {
      super(e), this.state = { dataSource: Q, fetchingDataFlag: !1, horizontal: void 0 }, this.delText = 'Delete', this.mockFetchData = this.mockFetchData.bind(this), this.getRenderRow = this.getRenderRow.bind(this), this.onEndReached = this.onEndReached.bind(this), this.getRowType = this.getRowType.bind(this), this.getRowKey = this.getRowKey.bind(this), this.getRowStyle = this.getRowStyle.bind(this), this.onDelete = this.onDelete.bind(this), this.onAppear = this.onAppear.bind(this), this.onDisappear = this.onDisappear.bind(this), this.onWillAppear = this.onWillAppear.bind(this), this.onWillDisappear = this.onWillDisappear.bind(this), this.rowShouldSticky = this.rowShouldSticky.bind(this), this.onScroll = this.onScroll.bind(this);
    }onDelete({ index: e }) {
      const { dataSource: t } = this.state; const n = t.filter((t, n) => e !== n);this.setState({ dataSource: n });
    } async onEndReached() {
      const { dataSource: e, fetchingDataFlag: t } = this.state;if (t) return;this.setState({ fetchingDataFlag: !0, dataSource: e.concat([{ style: 100 }]) });const n = await this.mockFetchData(); const o = e.concat(n);this.setState({ dataSource: o, fetchingDataFlag: !1 });
    }onAppear(e) {
      console.log('onAppear', e);
    }onScroll(e) {
      console.log('onScroll', e.contentOffset.y), e.contentOffset.y <= 0 ? this.topReached || (this.topReached = !0, console.log('onTopReached')) : this.topReached = !1;
    }onDisappear(e) {
      console.log('onDisappear', e);
    }onWillAppear(e) {
      console.log('onWillAppear', e);
    }onWillDisappear(e) {
      console.log('onWillDisappear', e);
    }rowShouldSticky(e) {
      return 2 === e;
    }getRowType(e) {
      return this.state.dataSource[e].style;
    }getRowStyle() {
      const { horizontal: e } = this.state;return e ? { width: 100, height: 50 } : {};
    }getRowKey(e) {
      return `row-${e}`;
    }getRenderRow(e) {
      const { dataSource: t } = this.state;let n = null;const o = t[e]; const r = t.length === e + 1;switch (o.style) {
        case 1:n = l.a.createElement(X, { index: e });break;case 2:n = l.a.createElement(J, { index: e });break;case 5:n = l.a.createElement(Z, { index: e });break;case 100:n = l.a.createElement(s.Text, { style: Y.loading }, 'Loading now...');
      } return l.a.createElement(s.View, { style: Y.container, onClickCapture: (e) => {
        console.log('onClickCapture style outer', e.target.nodeId, e.currentTarget.nodeId);
      }, onTouchDown: e => (console.log('onTouchDown style outer', e.target.nodeId, e.currentTarget.nodeId), !1), onClick: e => (console.log('click style outer', e.target.nodeId, e.currentTarget.nodeId), !1) }, l.a.createElement(s.View, { style: Y.itemContainer }, n), r ? null : l.a.createElement(s.View, { style: Y.separatorLine }));
    }mockFetchData() {
      return new Promise((e) => {
        setTimeout(() => e(Q), 600);
      });
    }changeDirection() {
      this.setState({ horizontal: void 0 === this.state.horizontal || void 0 });
    }render() {
      const { dataSource: e, horizontal: t } = this.state;return l.a.createElement(s.View, { style: { flex: 1, collapsable: !1 } }, l.a.createElement(s.ListView, { onTouchDown: (e) => {
        console.log('onTouchDown ListView', e.target.nodeId, e.currentTarget.nodeId);
      }, onClickCapture: (e) => {
        console.log('onClickCapture listview', e.target.nodeId, e.currentTarget.nodeId);
      }, onClick: e => (console.log('click listview', e.target.nodeId, e.currentTarget.nodeId), !0), bounces: !0, horizontal: t, style: [{ backgroundColor: '#ffffff' }, t ? { height: 50 } : { flex: 1 }], numberOfRows: e.length, renderRow: this.getRenderRow, onEndReached: this.onEndReached, getRowType: this.getRowType, onDelete: this.onDelete, onMomentumScrollBegin: e => console.log('onMomentumScrollBegin', e), onMomentumScrollEnd: e => console.log('onMomentumScrollEnd', e), onScrollBeginDrag: e => console.log('onScrollBeginDrag', e), onScrollEndDrag: e => console.log('onScrollEndDrag', e), delText: this.delText, editable: !0, getRowStyle: this.getRowStyle, getRowKey: this.getRowKey, initialListSize: 15, rowShouldSticky: this.rowShouldSticky, onAppear: this.onAppear, onDisappear: this.onDisappear, onWillAppear: this.onWillAppear, onWillDisappear: this.onWillDisappear, onScroll: this.onScroll, scrollEventThrottle: 1e3 }), 'android' === s.Platform.OS ? l.a.createElement(s.View, { onClick: () => this.changeDirection(), style: { position: 'absolute', right: 20, bottom: 20, width: 67, height: 67, borderRadius: 30, boxShadowOpacity: .6, boxShadowRadius: 5, boxShadowOffsetX: 3, boxShadowOffsetY: 3, boxShadowColor: '#4c9afa' } }, l.a.createElement(s.View, { style: { width: 60, height: 60, borderRadius: 30, backgroundColor: '#4c9afa', display: 'flex', justifyContent: 'center', alignItems: 'center' } }, l.a.createElement(s.Text, { style: { color: 'white' } }, '切换方向'))) : null);
    }
  } const ee = '#4c9afa'; const te = '#4c9afa'; const ne = 'white'; const oe = s.StyleSheet.create({ container: { flex: 1, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' }, buttonView: { borderColor: ee, borderWidth: 2, borderStyle: 'solid', borderRadius: 8, justifyContent: 'center', alignItems: 'center', width: 250, height: 50, marginTop: 30 }, buttonText: { fontSize: 20, color: ee, textAlign: 'center', textAlignVertical: 'center' }, selectionText: { fontSize: 20, color: ee, textAlign: 'center', textAlignVertical: 'center', marginLeft: 10, marginRight: 10 } });class re extends l.a.Component {
    constructor(e) {
      super(e), this.state = { visible: !1, press: !1, animationType: 'fade' }, this.show = this.show.bind(this), this.hide = this.hide.bind(this);
    }feedback(e) {
      this.setState({ press: 'in' === e });
    }show() {
      this.setState({ visible: !0 });
    }hide() {
      this.setState({ visible: !1 });
    }render() {
      const { press: e, visible: t } = this.state;return l.a.createElement(s.ScrollView, null, l.a.createElement(s.View, { style: oe.container }, l.a.createElement(s.View, { onPressIn: () => this.feedback('in'), onPressOut: () => this.feedback('out'), onClick: this.show, style: [oe.buttonView, { borderColor: ee, opacity: e ? .5 : 1 }] }, l.a.createElement(s.Text, { style: [oe.buttonText, { color: ee }] }, '点击弹出浮层'))), l.a.createElement(s.View, { style: { flexDirection: 'row', justifyContent: 'center', marginTop: 20 } }, l.a.createElement(s.Text, { onClick: () => {
        this.setState({ animationType: 'fade' });
      }, style: [oe.selectionText, { backgroundColor: 'fade' === this.state.animationType ? 'rgba(255, 0, 0, 0.5)' : '#FFFFFF' }] }, 'fade'), l.a.createElement(s.Text, { onClick: () => {
        this.setState({ animationType: 'slide' });
      }, style: [oe.selectionText, { backgroundColor: 'slide' === this.state.animationType ? 'rgba(255, 0, 0, 0.5)' : '#FFFFFF' }] }, 'slide'), l.a.createElement(s.Text, { onClick: () => {
        this.setState({ animationType: 'slide_fade' });
      }, style: [oe.selectionText, { backgroundColor: 'slide_fade' === this.state.animationType ? 'rgba(255, 0, 0, 0.5)' : '#FFFFFF' }] }, 'slide_fade')), l.a.createElement(s.Modal, { transparent: !0, animationType: this.state.animationType, visible: t, onRequestClose: () => {}, supportedOrientations: ['portrait'], immersionStatusBar: !0 }, l.a.createElement(s.View, { style: { flex: 1, flexDirection: 'row', justifyContent: 'center', backgroundColor: '#4c9afa88' } }, l.a.createElement(s.View, { onClick: this.hide, style: { width: 200, height: 200, backgroundColor: te, marginTop: 300, flexDirection: 'row', justifyContent: 'center' } }, l.a.createElement(s.Text, { style: { color: ne, fontSize: 22, marginTop: 80 } }, '点击关闭浮层')))));
    }
  } const ie = 'https://user-images.githubusercontent.com/12878546/148736841-59ce5d1c-8010-46dc-8632-01c380159237.jpg'; const ae = { style: 1, itemBean: { title: '非洲总统出行真大牌，美制武装直升机和中国潜艇为其保驾', picList: [ie, ie, ie], subInfo: ['三图评论', '11评'] } }; const le = { style: 2, itemBean: { title: '彼得·泰尔：认知未来是投资人的谋生之道', picUrl: 'https://user-images.githubusercontent.com/12878546/148736850-4fc13304-25d4-4b6a-ada3-cbf0745666f5.jpg', subInfo: ['左文右图'] } }; const se = { style: 5, itemBean: { title: '愤怒！美官员扬言：“不让中国拿走南海的岛屿，南海岛礁不属于中国”？', picUrl: 'https://user-images.githubusercontent.com/12878546/148736859-29e3a5b2-612a-4fdd-ad21-dc5d29fa538f.jpg', subInfo: ['六眼神魔  5234播放'] } };const ce = [se, ae, le, ae, le, ae, le, se, ae]; const he = n('./node_modules/@babel/runtime/helpers/extends.js'); const ue = n.n(he);const de = { getScreenWidth() {
    const e = s.Dimensions.get('screen').width; const t = s.Dimensions.get('screen').height; const n = e > t ? t : e;return Math.floor(n);
  }, uniqueArray(e) {
    const t = [];for (let n = 0;n < e.length;n += 1)-1 === t.indexOf(e[n]) && t.push(e[n]);return t;
  }, isiPhoneX() {
    let e = !1;if ('android' === s.Platform.OS) return e;const { height: t } = s.Dimensions.get('window');return t >= 812 && s.PixelRatio.get() >= 2 && (e = !0), e;
  } };const me = (de.getScreenWidth() - 24 - 12) / 3; const ge = Math.floor(me / 1.35); const fe = s.StyleSheet.create({ imageContainer: { flexDirection: 'row', justifyContent: 'center', height: ge, marginTop: 8 }, normalText: { fontSize: 11, color: '#aaaaaa', alignSelf: 'center' }, image: { width: me, height: ge }, title: { fontSize: 'android' === s.Platform.OS ? 17 : 18, lineHeight: 24, color: '#242424' }, tagLine: { marginTop: 8, height: 20, flexDirection: 'row', justifyContent: 'flex-start' } });function ye(e) {
    const { itemBean: { title: t, picList: n } } = e;let { itemBean: { subInfo: o } } = e; let r = null;if (o && o.length) {
      o = de.uniqueArray(o);const e = o.join(' ');r = l.a.createElement(s.Text, { style: fe.normalText, numberOfLines: 1 }, e);
    } return l.a.createElement(s.View, ue()({}, e, { style: { collapsable: !1 } }), l.a.createElement(s.Text, { style: [fe.title], numberOfLines: 2, enableScale: !0 }, t), l.a.createElement(s.View, { style: fe.imageContainer }, l.a.createElement(s.Image, { style: fe.image, source: { uri: n[0] }, resizeMode: s.Image.resizeMode.cover }), l.a.createElement(s.Image, { style: [fe.image, { marginLeft: 6, marginRight: 6 }], source: { uri: n[1] }, resizeMode: s.Image.resizeMode.cover }), l.a.createElement(s.Image, { style: fe.image, source: { uri: n[2] }, resizeMode: s.Image.resizeMode.cover })), r ? l.a.createElement(s.View, { style: fe.tagLine }, r) : null);
  } const pe = de.getScreenWidth() - 24; const be = Math.floor(pe - 12) / 3; const we = Math.floor(be / 1.35); const xe = s.StyleSheet.create({ container: { flexDirection: 'row', justifyContent: 'space-between', height: we }, leftContainer: { flex: 1, flexDirection: 'column', justifyContent: 'center', marginRight: 8 }, imageContainer: { width: be, height: we }, image: { width: be, height: we }, title: { fontSize: 'android' === s.Platform.OS ? 17 : 18, lineHeight: 24 }, tagLine: { marginTop: 8, height: 20, flexDirection: 'row', justifyContent: 'flex-start' }, normalText: { fontSize: 11, color: '#aaaaaa', alignSelf: 'center' } });function Se(e) {
    if ('undefined' === e) return null;const { itemBean: t } = e;if (!t) return null;let n = null;const { title: o, picUrl: r } = t;let { subInfo: i } = t;if (i && i.length) {
      i = de.uniqueArray(i);const e = i.join(' ');n = l.a.createElement(s.Text, { style: xe.normalText, numberOfLines: 1 }, e);
    } return l.a.createElement(s.View, ue()({}, e, { style: xe.container }), l.a.createElement(s.View, { style: xe.leftContainer }, l.a.createElement(s.Text, { style: xe.title, numberOfLines: 2, enableScale: !0 }, o), n ? l.a.createElement(s.View, { style: xe.tagLine }, n) : null), l.a.createElement(s.View, { style: xe.imageContainer }, l.a.createElement(s.Image, { resizeMode: s.Image.resizeMode.cover, style: xe.image, source: { uri: r } })));
  } const Ee = de.getScreenWidth() - 24; const Ae = Math.floor(188 * Ee / 336); const Te = s.StyleSheet.create({ text: { fontSize: 'android' === s.Platform.OS ? 17 : 18, lineHeight: 24, color: '#242424' }, playerView: { marginTop: 8, alignItems: 'center', width: Ee, height: Ae, alignSelf: 'center' }, image: { width: Ee, height: Ae }, normalText: { fontSize: 11, color: '#aaaaaa', alignSelf: 'center' }, tagLine: { marginTop: 8, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' } });function Ce(e) {
    if ('undefined' === e) return null;const { itemBean: t } = e;if (!t) return null;const { title: n, picUrl: o } = t;let { subInfo: r } = t; let i = null;if (r && r.length) {
      r = de.uniqueArray(r);const e = r.join(' ');i = l.a.createElement(s.Text, { style: Te.normalText, numberOfLines: 1 }, e);
    } return l.a.createElement(s.View, e, l.a.createElement(s.Text, { style: Te.text, numberOfLines: 2, enableScale: !0 }, n), l.a.createElement(s.View, { style: Te.playerView }, l.a.createElement(s.Image, { style: Te.image, source: { uri: o }, resizeMode: s.Image.resizeMode.cover })), i ? l.a.createElement(s.View, { style: Te.tagLine }, i) : null);
  } const ve = s.StyleSheet.create({ container: { backgroundColor: '#ffffff' }, itemContainer: { padding: 12 }, spliter: { marginLeft: 12, marginRight: 12, height: .5, backgroundColor: '#e5e5e5' }, loading: { fontSize: 11, color: '#aaaaaa', alignSelf: 'center' } });class ke extends l.a.Component {
    constructor(e) {
      super(e), this.state = { dataSource: [], loadingState: '正在加载...' }, this.fetchTimes = 0, this.mockFetchData = this.mockFetchData.bind(this), this.onRefresh = this.onRefresh.bind(this), this.getRefresh = this.getRefresh.bind(this), this.getRenderRow = this.getRenderRow.bind(this), this.onEndReached = this.onEndReached.bind(this), this.getRowType = this.getRowType.bind(this), this.getRowKey = this.getRowKey.bind(this);
    } async componentDidMount() {
      const e = await this.mockFetchData();this.setState({ dataSource: e });
    } async onEndReached() {
      const { dataSource: e, fetchingDataFlag: t } = this.state;if (t) return;this.setState({ fetchingDataFlag: !0, dataSource: e.concat([{ style: 100 }]) });const n = await this.mockFetchData(); const o = e[e.length - 1];o && 100 === o.style && e.pop();const r = e.concat(n);this.setState({ dataSource: r });
    }onRefresh() {
      setTimeout(async () => {
        const e = await this.mockFetchData();this.setState({ dataSource: e }), this.refresh.refreshComplected();
      }, 1e3);
    }onClickItem(e) {
      console.log(`item: ${e} is clicked..`);
    }getRenderRow(e) {
      const { dataSource: t, loadingState: n } = this.state;let o = null;const r = t[e]; const i = t.length === e + 1;switch (r.style) {
        case 1:o = l.a.createElement(ye, { itemBean: r.itemBean, onClick: () => this.onClickItem(e) });break;case 2:o = l.a.createElement(Se, { itemBean: r.itemBean, onClick: () => this.onClickItem(e) });break;case 5:o = l.a.createElement(Ce, { itemBean: r.itemBean, onClick: () => this.onClickItem(e) });break;case 100:o = l.a.createElement(s.Text, { style: ve.loading }, n);
      } return l.a.createElement(s.View, { style: ve.container }, l.a.createElement(s.View, { style: ve.itemContainer }, o), i ? null : l.a.createElement(s.View, { style: ve.spliter }));
    }getRowType(e) {
      return this.state.dataSource[e].style;
    }getRowKey(e) {
      return `row-${e}`;
    }getRefresh() {
      return l.a.createElement(s.View, { style: { flex: 1, height: 30 } }, l.a.createElement(s.Text, { style: { flex: 1, textAlign: 'center' } }, '下拉刷新中...'));
    }mockFetchData() {
      return new Promise((e) => {
        setTimeout(() => (this.setState({ fetchingDataFlag: !1 }), this.fetchTimes += 1, this.fetchTimes >= 50 ? e([]) : e(ce)), 600);
      });
    }render() {
      const { dataSource: e } = this.state;return l.a.createElement(s.RefreshWrapper, { ref: (e) => {
        this.refresh = e;
      }, style: { flex: 1 }, onRefresh: this.onRefresh, bounceTime: 100, getRefresh: this.getRefresh }, l.a.createElement(s.ListView, { style: { flex: 1, backgroundColor: '#ffffff' }, numberOfRows: e.length, renderRow: this.getRenderRow, onEndReached: this.onEndReached, getRowType: this.getRowType, getRowKey: this.getRowKey }));
    }
  } const Ve = s.StyleSheet.create({ container: { backgroundColor: '#ffffff' }, itemContainer: { padding: 12 }, splitter: { marginLeft: 12, marginRight: 12, height: .5, backgroundColor: '#e5e5e5' }, loading: { fontSize: 11, color: '#aaaaaa', alignSelf: 'center' }, pullContainer: { flex: 1, height: 50, backgroundColor: '#4c9afa' }, pullContent: { lineHeight: 50, color: 'white', height: 50, textAlign: 'center' }, pullFooter: { height: 40, flex: 1, backgroundColor: '#4c9afa', justifyContent: 'center', alignItems: 'center' } });class Re extends l.a.Component {
    constructor(e) {
      super(e), this.state = { dataSource: [], headerRefreshText: '继续下拉触发刷新', footerRefreshText: '正在加载...', horizontal: void 0 }, this.loadMoreDataFlag = !1, this.fetchingDataFlag = !1, this.mockFetchData = this.mockFetchData.bind(this), this.renderRow = this.renderRow.bind(this), this.getRowType = this.getRowType.bind(this), this.getRowKey = this.getRowKey.bind(this), this.getHeaderStyle = this.getHeaderStyle.bind(this), this.getFooterStyle = this.getFooterStyle.bind(this), this.getRowStyle = this.getRowStyle.bind(this), this.renderPullHeader = this.renderPullHeader.bind(this), this.renderPullFooter = this.renderPullFooter.bind(this), this.onEndReached = this.onEndReached.bind(this), this.onHeaderReleased = this.onHeaderReleased.bind(this), this.onHeaderPulling = this.onHeaderPulling.bind(this), this.onFooterPulling = this.onFooterPulling.bind(this);
    } async componentDidMount() {
      const e = await this.mockFetchData();this.setState({ dataSource: e }), this.listView.collapsePullHeader();
    }mockFetchData() {
      return new Promise((e) => {
        setTimeout(() => e(ce), 800);
      });
    } async onEndReached() {
      const { dataSource: e } = this.state;if (this.loadMoreDataFlag) return;this.loadMoreDataFlag = !0, this.setState({ footerRefreshText: '加载更多...' });let t = [];try {
        t = await this.mockFetchData();
      } catch (e) {}0 === t.length && this.setState({ footerRefreshText: '没有更多数据' });const n = [...e, ...t];this.setState({ dataSource: n }), this.loadMoreDataFlag = !1, this.listView.collapsePullFooter();
    } async onHeaderReleased() {
      if (this.fetchingDataFlag) return;this.fetchingDataFlag = !0, console.log('onHeaderReleased'), this.setState({ headerRefreshText: '刷新数据中，请稍等' });let e = [];try {
        e = await this.mockFetchData(), e = e.reverse();
      } catch (e) {} this.fetchingDataFlag = !1, this.setState({ dataSource: e, headerRefreshText: '2秒后收起' }, () => {
        this.listView.collapsePullHeader({ time: 2e3 });
      });
    }onHeaderPulling(e) {
      this.fetchingDataFlag || (console.log('onHeaderPulling', e.contentOffset), e.contentOffset > Ve.pullContent.height ? this.setState({ headerRefreshText: '松手，即可触发刷新' }) : this.setState({ headerRefreshText: '继续下拉，触发刷新' }));
    }onFooterPulling(e) {
      console.log('onFooterPulling', e);
    }onClickItem(e, t) {
      console.log(`item: ${e} is clicked..`, t.target.nodeId, t.currentTarget.nodeId);
    }getRowType(e) {
      return this.state.dataSource[e].style;
    }getRowKey(e) {
      return `row-${e}`;
    }getHeaderStyle() {
      const { horizontal: e } = this.state;return e ? { width: 50 } : {};
    }renderPullHeader() {
      const { headerRefreshText: e, horizontal: t } = this.state;return t ? l.a.createElement(s.View, { style: { width: 40, height: 300, backgroundColor: '#4c9afa', justifyContent: 'center', alignItems: 'center' } }, l.a.createElement(s.Text, { style: { lineHeight: 25, color: 'white', width: 40, paddingHorizontal: 15 } }, e)) : l.a.createElement(s.View, { style: Ve.pullContainer }, l.a.createElement(s.Text, { style: Ve.pullContent }, e));
    }getFooterStyle() {
      const { horizontal: e } = this.state;return e ? { width: 40 } : {};
    }renderPullFooter() {
      const { horizontal: e } = this.state;return e ? l.a.createElement(s.View, { style: { width: 40, height: 300, backgroundColor: '#4c9afa', justifyContent: 'center', alignItems: 'center' } }, l.a.createElement(s.Text, { style: { color: 'white', lineHeight: 25, width: 40, paddingHorizontal: 15 } }, this.state.footerRefreshText)) : l.a.createElement(s.View, { style: Ve.pullFooter }, l.a.createElement(s.Text, { style: { color: 'white' } }, this.state.footerRefreshText));
    }renderRow(e) {
      const { dataSource: t } = this.state;let n = null;const o = t[e]; const r = t.length === e + 1;switch (o.style) {
        case 1:n = l.a.createElement(ye, { itemBean: o.itemBean, onClick: t => this.onClickItem(e, t) });break;case 2:n = l.a.createElement(Se, { itemBean: o.itemBean, onClick: t => this.onClickItem(e, t) });break;case 5:n = l.a.createElement(Ce, { itemBean: o.itemBean, onClick: t => this.onClickItem(e, t) });
      } return l.a.createElement(s.View, { style: Ve.container }, l.a.createElement(s.View, { style: Ve.itemContainer }, n), r ? null : l.a.createElement(s.View, { style: Ve.splitter }));
    }getRowStyle() {
      const { horizontal: e } = this.state;return e ? { height: 300, justifyContent: 'center', alignItems: 'center' } : {};
    }changeDirection() {
      this.setState({ horizontal: void 0 === this.state.horizontal || void 0 });
    }render() {
      const { dataSource: e, horizontal: t } = this.state;return l.a.createElement(s.View, { style: { flex: 1, collapsable: !1 } }, l.a.createElement(s.ListView, { horizontal: t, onClick: e => console.log('ListView', e.target.nodeId, e.currentTarget.nodeId), ref: (e) => {
        this.listView = e;
      }, style: [{ backgroundColor: '#ffffff' }, t ? { height: 300 } : { flex: 1 }], numberOfRows: e.length, getRowType: this.getRowType, getRowKey: this.getRowKey, getHeaderStyle: this.getHeaderStyle, getFooterStyle: this.getFooterStyle, getRowStyle: this.getRowStyle, renderRow: this.renderRow, renderPullHeader: this.renderPullHeader, renderPullFooter: this.renderPullFooter, onHeaderReleased: this.onHeaderReleased, onHeaderPulling: this.onHeaderPulling, onFooterReleased: this.onEndReached, onFooterPulling: this.onFooterPulling, rowShouldSticky: e => 0 === e }), 'android' === s.Platform.OS ? l.a.createElement(s.View, { onClick: () => this.changeDirection(), style: { position: 'absolute', right: 20, bottom: 20, width: 67, height: 67, borderRadius: 30, boxShadowOpacity: .6, boxShadowRadius: 5, boxShadowOffsetX: 3, boxShadowOffsetY: 3, boxShadowColor: '#4c9afa' } }, l.a.createElement(s.View, { style: { width: 60, height: 60, borderRadius: 30, backgroundColor: '#4c9afa', display: 'flex', justifyContent: 'center', alignItems: 'center' } }, l.a.createElement(s.Text, { style: { color: 'white' } }, '切换方向'))) : null);
    }
  } const Ie = s.StyleSheet.create({ itemStyle: { width: 100, height: 100, lineHeight: 100, borderWidth: 1, borderStyle: 'solid', borderColor: '#4c9afa', fontSize: 80, margin: 20, color: '#4c9afa', textAlign: 'center' }, verticalScrollView: { height: 300, width: 140, margin: 20, borderColor: '#eee', borderWidth: 1, borderStyle: 'solid' }, itemTitle: { alignItems: 'flex-start', justifyContent: 'center', height: 40, borderWidth: 1, borderStyle: 'solid', borderColor: '#e0e0e0', borderRadius: 2, backgroundColor: '#fafafa', padding: 10, marginTop: 10 } });function De() {
    return l.a.createElement(s.ScrollView, null, l.a.createElement(s.View, { style: Ie.itemTitle }, l.a.createElement(s.Text, null, 'Horizontal ScrollView')), l.a.createElement(s.View, null, l.a.createElement(s.ScrollView, { horizontal: !0, bounces: !0, showsHorizontalScrollIndicator: !1, showScrollIndicator: !1, onScroll: e => console.log('onScroll', e), onMomentumScrollBegin: e => console.log('onMomentumScrollBegin', e), onMomentumScrollEnd: e => console.log('onMomentumScrollEnd', e), onScrollBeginDrag: e => console.log('onScrollBeginDrag', e), onScrollEndDrag: e => console.log('onScrollEndDrag', e) }, l.a.createElement(s.Text, { style: Ie.itemStyle }, 'A'), l.a.createElement(s.Text, { style: Ie.itemStyle }, 'B'), l.a.createElement(s.Text, { style: Ie.itemStyle }, 'C'), l.a.createElement(s.Text, { style: Ie.itemStyle }, 'D'), l.a.createElement(s.Text, { style: Ie.itemStyle }, 'E'), l.a.createElement(s.Text, { style: Ie.itemStyle }, 'F'), l.a.createElement(s.Text, { style: Ie.itemStyle }, 'A'))), l.a.createElement(s.View, { style: Ie.itemTitle }, l.a.createElement(s.Text, null, 'Vertical ScrollView')), l.a.createElement(s.ScrollView, { bounces: !0, horizontal: !1, style: Ie.verticalScrollView, showScrollIndicator: !1, showsVerticalScrollIndicator: !1 }, l.a.createElement(s.Text, { style: Ie.itemStyle }, 'A'), l.a.createElement(s.Text, { style: Ie.itemStyle }, 'B'), l.a.createElement(s.Text, { style: Ie.itemStyle }, 'C'), l.a.createElement(s.Text, { style: Ie.itemStyle }, 'D'), l.a.createElement(s.Text, { style: Ie.itemStyle }, 'E'), l.a.createElement(s.Text, { style: Ie.itemStyle }, 'F'), l.a.createElement(s.Text, { style: Ie.itemStyle }, 'A')));
  } const Oe = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAANlBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC3dmhyAAAAEXRSTlMA9QlZEMPc2Mmmj2VkLEJ4Rsx+pEgAAAChSURBVCjPjVLtEsMgCDOAdbbaNu//sttVPes+zvGD8wgQCLp/TORbUGMAQtQ3UBeSAMlF7/GV9Cmb5eTJ9R7H1t4bOqLE3rN2UCvvwpLfarhILfDjJL6WRKaXfzxc84nxAgLzCGSGiwKwsZUB8hPorZwUV1s1cnGKw+yAOrnI+7hatNIybl9Q3OkBfzopCw6SmDVJJiJ+yD451OS0/TNM7QnuAAbvCG0TSAAAAABJRU5ErkJggg=='; const Pe = 'https://user-images.githubusercontent.com/12878546/148736255-7193f89e-9caf-49c0-86b0-548209506bd6.gif'; const Le = s.StyleSheet.create({ itemTitle: { alignItems: 'flex-start', justifyContent: 'center', height: 40, borderWidth: 1, borderStyle: 'solid', borderColor: '#e0e0e0', borderRadius: 2, backgroundColor: '#fafafa', padding: 10, marginTop: 10 }, itemContent: { alignItems: 'flex-start', justifyContent: 'center', borderWidth: 1, borderStyle: 'solid', borderRadius: 2, borderColor: '#e0e0e0', backgroundColor: '#ffffff', padding: 10 }, normalText: { fontSize: 14, lineHeight: 18, color: 'black' }, buttonBar: { flexDirection: 'row', marginTop: 10, flexGrow: 1 }, button: { height: 24, borderColor: '#4c9afa', borderWidth: 1, borderStyle: 'solid', flexGrow: 1, flexShrink: 1 }, buttonText: { lineHeight: 24, textAlign: 'center', paddingHorizontal: 20 }, customFont: { color: '#0052d9', fontSize: 32, fontFamily: 'TTTGB' } });let je = 0;class Fe extends l.a.Component {
    constructor(e) {
      super(e), this.state = { fontSize: 16, textShadowColor: 'grey', textShadowOffset: { x: 1, y: 1 }, numberOfLines: 2, ellipsizeMode: void 0 }, this.incrementFontSize = this.incrementFontSize.bind(this), this.decrementFontSize = this.decrementFontSize.bind(this), this.incrementLine = this.incrementLine.bind(this), this.decrementLine = this.decrementLine.bind(this), this.changeMode = this.changeMode.bind(this);
    }incrementFontSize() {
      const { fontSize: e } = this.state;24 !== e && this.setState({ fontSize: e + 1 });
    }decrementFontSize() {
      const { fontSize: e } = this.state;6 !== e && this.setState({ fontSize: e - 1 });
    }incrementLine() {
      const { numberOfLines: e } = this.state;e < 6 && this.setState({ numberOfLines: e + 1 });
    }decrementLine() {
      const { numberOfLines: e } = this.state;e > 1 && this.setState({ numberOfLines: e - 1 });
    }changeMode(e) {
      this.setState({ ellipsizeMode: e });
    }changeBreakStrategy(e) {
      this.setState({ breakStrategy: e });
    }render() {
      const { fontSize: e, textShadowColor: t, textShadowOffset: n, numberOfLines: o, ellipsizeMode: r, breakStrategy: i } = this.state; const a = e => l.a.createElement(s.View, { style: Le.itemTitle }, l.a.createElement(s.Text, { style: !0 }, e));return l.a.createElement(s.ScrollView, { style: { paddingHorizontal: 10 } }, a('shadow'), l.a.createElement(s.View, { style: [Le.itemContent, { height: 60 }], onClick: () => {
        let e = 'red'; let t = { x: 10, y: 1 };je % 2 == 1 && (e = 'grey', t = { x: 1, y: 1 }), je += 1, this.setState({ textShadowColor: e, textShadowOffset: t });
      } }, l.a.createElement(s.Text, { style: [Le.normalText, { color: '#242424', textShadowOffset: n, textShadowRadius: 3, textShadowColor: t }] }, 'Text shadow is grey with radius 3 and offset 1')), a('color'), l.a.createElement(s.View, { style: [Le.itemContent, { height: 80 }] }, l.a.createElement(s.Text, { style: [Le.normalText, { color: '#242424' }] }, 'Text color is black'), l.a.createElement(s.Text, { style: [Le.normalText, { color: 'blue' }] }, 'Text color is blue'), l.a.createElement(s.Text, { style: [Le.normalText, { color: 'rgb(228,61,36)' }] }, 'This is red')), a('fontSize'), l.a.createElement(s.View, { style: [Le.itemContent, { height: 100 }] }, l.a.createElement(s.Text, { style: [Le.normalText, { fontSize: e }] }, `Text fontSize is ${e}`), l.a.createElement(s.View, { style: Le.button, onClick: this.incrementFontSize }, l.a.createElement(s.Text, { style: Le.buttonText }, '放大字体')), l.a.createElement(s.View, { style: Le.button, onClick: this.decrementFontSize }, l.a.createElement(s.Text, { style: Le.buttonText }, '缩小字体'))), a('fontStyle'), l.a.createElement(s.View, { style: [Le.itemContent, { height: 100 }] }, l.a.createElement(s.Text, { style: [Le.normalText, { fontStyle: 'normal' }] }, 'Text fontStyle is normal'), l.a.createElement(s.Text, { style: [Le.normalText, { fontStyle: 'italic' }] }, 'Text fontStyle is italic')), a('numberOfLines and ellipsizeMode'), l.a.createElement(s.View, { style: [Le.itemContent] }, l.a.createElement(s.Text, { style: [Le.normalText, { marginBottom: 10 }] }, `numberOfLines=${o} | ellipsizeMode=${r}`), l.a.createElement(s.Text, { numberOfLines: o, ellipsizeMode: r, style: [Le.normalText, { lineHeight: void 0, backgroundColor: '#4c9afa', marginBottom: 10, paddingHorizontal: 10, paddingVertical: 5 }] }, l.a.createElement(s.Text, { style: { fontSize: 19, color: 'white' } }, '先帝创业未半而中道崩殂，今天下三分，益州疲弊，此诚危急存亡之秋也。'), l.a.createElement(s.Text, null, '然侍卫之臣不懈于内，忠志之士忘身于外者，盖追先帝之殊遇，欲报之于陛下也。')), l.a.createElement(s.Text, { numberOfLines: o, ellipsizeMode: r, style: [Le.normalText, { backgroundColor: '#4c9afa', marginBottom: 10, color: 'white', paddingHorizontal: 10, paddingVertical: 5 }] }, 'line 1\n\nline 3\n\nline 5'), l.a.createElement(s.Text, { numberOfLines: o, ellipsizeMode: r, style: [Le.normalText, { lineHeight: void 0, backgroundColor: '#4c9afa', marginBottom: 10, paddingHorizontal: 10, paddingVertical: 5, verticalAlign: 'middle' }] }, l.a.createElement(s.Image, { style: { width: 24, height: 24 }, source: { uri: Oe } }), l.a.createElement(s.Image, { style: { width: 24, height: 24 }, source: { uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAANlBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC3dmhyAAAAEnRSTlMA/QpX7WQU2m27pi3Ej9KEQXaD5HhjAAAAqklEQVQoz41SWxLDIAh0RcFXTHL/yzZSO01LMpP9WJEVUNA9gfdXTioCSKE/kQQTQmf/ArRYva+xAcuPP37seFII2L7FN4BmXdHzlEPIpDHiZ0A7eIViPcw2QwqipkvMSdNEFBUE1bmMNOyE7FyFaIkAP4jHhhG80lvgkzBODTKpwhRMcexuR7fXzcp08UDq6GRbootp4oRtO3NNpd4NKtnR9hB6oaefweIFQU0EfnGDRoQAAAAASUVORK5CYII=' } }), l.a.createElement(s.Text, null, 'Text + Attachment')), l.a.createElement(s.View, { style: Le.buttonBar }, l.a.createElement(s.View, { style: Le.button, onClick: this.incrementLine }, l.a.createElement(s.Text, { style: Le.buttonText }, '加一行')), l.a.createElement(s.View, { style: Le.button, onClick: this.decrementLine }, l.a.createElement(s.Text, { style: Le.buttonText }, '减一行'))), l.a.createElement(s.View, { style: Le.buttonBar }, l.a.createElement(s.View, { style: Le.button, onClick: () => this.changeMode('clip') }, l.a.createElement(s.Text, { style: Le.buttonText }, 'clip')), l.a.createElement(s.View, { style: Le.button, onClick: () => this.changeMode('head') }, l.a.createElement(s.Text, { style: Le.buttonText }, 'head')), l.a.createElement(s.View, { style: Le.button, onClick: () => this.changeMode('middle') }, l.a.createElement(s.Text, { style: Le.buttonText }, 'middle')), l.a.createElement(s.View, { style: Le.button, onClick: () => this.changeMode('tail') }, l.a.createElement(s.Text, { style: Le.buttonText }, 'tail')))), a('textDecoration'), l.a.createElement(s.View, { style: [Le.itemContent, { height: 100 }] }, l.a.createElement(s.Text, { numberOfLines: 1, style: [Le.normalText, { textDecorationLine: 'underline', textDecorationStyle: 'dotted' }] }, 'underline'), l.a.createElement(s.Text, { numberOfLines: 1, style: [Le.normalText, { textDecorationLine: 'line-through', textDecorationColor: 'red' }] }, 'line-through')), a('LetterSpacing'), l.a.createElement(s.View, { style: [Le.itemContent, { height: 100 }] }, l.a.createElement(s.Text, { numberOfLines: 1, style: [Le.normalText, { letterSpacing: -1 }] }, 'Text width letter-spacing -1'), l.a.createElement(s.Text, { numberOfLines: 1, style: [Le.normalText, { letterSpacing: 5 }] }, 'Text width letter-spacing 5')), a('Nest Text'), l.a.createElement(s.View, { style: [Le.itemContent, { height: 100 }] }, l.a.createElement(s.Text, { numberOfLines: 3 }, l.a.createElement(s.Text, { numberOfLines: 3, style: [Le.normalText, { color: '#4c9afa' }] }, '#SpiderMan#'), l.a.createElement(s.Text, { numberOfLines: 3, style: Le.normalText }, 'Hello world, I am a spider man and I have five friends in other universe.'))), a('Custom font'), l.a.createElement(s.View, { style: [Le.itemContent, { height: 100 }] }, l.a.createElement(s.Text, { numberOfLines: 1, style: Le.customFont }, 'Hippy 跨端框架')), l.a.createElement(s.View, { style: [Le.itemContent, { height: 100 }] }, l.a.createElement(s.Text, { numberOfLines: 1, style: [Le.customFont, { fontWeight: 'bold' }] }, 'Hippy 跨端框架 粗体')), l.a.createElement(s.View, { style: [Le.itemContent, { height: 100 }] }, l.a.createElement(s.Text, { numberOfLines: 1, style: [Le.customFont, { fontStyle: 'italic' }] }, 'Hippy 跨端框架 斜体')), l.a.createElement(s.View, { style: [Le.itemContent, { height: 100 }] }, l.a.createElement(s.Text, { numberOfLines: 1, style: [Le.customFont, { fontWeight: 'bold', fontStyle: 'italic' }] }, 'Hippy 跨端框架 粗斜体')), a('Text Nested'), l.a.createElement(s.View, { style: [Le.itemContent, { height: 150 }] }, l.a.createElement(s.Text, { style: { height: 100, lineHeight: 50 } }, l.a.createElement(s.Text, { numberOfLines: 1, style: Le.normalText }, '后面有张图片'), l.a.createElement(s.Image, { style: { width: 70, height: 35 }, source: { uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAAtCAMAAABmgJ64AAAAOVBMVEX/Rx8AAAD/QiL/Tif/QyH/RR//QiH/QiP/RCD/QSL/Qxz/QyH/QiL/QiD/QyL/QiL/QiH/QyH/QiLwirLUAAAAEnRSTlMZAF4OTC7DrWzjI4iietrRk0EEv/0YAAAB0UlEQVRYw72Y0Y6sIAxAKwUFlFH7/x97izNXF2lN1pU5D800jD2hJAJCdwYZuAUyVbmToKh903IhQHgErAVH+ccV0KI+G2oBPMxJgPA4WAigAT8F0IRDgNAE3ARyfeMFDGSc3YHVFkTBAHKDAgkEyHjacae/GTjxFqAo8NbakXrL9DRy9B+BCQwRcXR9OBKmEuAmAFFgcy0agBnIc1xZsMPOI5loAoUsQFmQjDEL9YbpaeGYBMGRKKAuqFEFL/JXApCw/zFEZk9qgbLGBx0gXLISxT25IUBREEgh1II1fph/IViGnZnCcDDVAgfgVg6gCy6ZaClySbDQpAl04vCGaB4+xGcFRK8CLvW0IBb5bQGqAlNwU4C6oEIVTLTcmoEr0AWcpKsZ/H0NAtkLQffnFjkOqiC/TTWBL9AFCwXQBHgI7rXImMgjCZwFa50s6DRBXyALmIECuMASiWNPFgRTgSJwM+XW8PDCmbwndzdaNL8FMYXPNjASDVChnIvWlBI/MKadPV952HszbmXtRERhhQ0vGFA52SVSSVt7MjHvxfRK8cdTpqovn02dUcltMrwiKf+wQ1FxXKCk9en6e/eDNnP44h2thQEb35O/etNv/q3iHza+KuhqqhZAAAAAAElFTkSuQmCC' } }), l.a.createElement(s.Text, { numberOfLines: 1, style: Le.customFont }, '前面有张图片')), l.a.createElement(s.View, { style: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 10, paddingVertical: 5, backgroundColor: '#4c9afa' } }, l.a.createElement(s.Image, { style: { width: 24, height: 24, alignSelf: 'center' }, source: { uri: Oe } }), l.a.createElement(s.Text, { style: { fontSize: 15, alignItems: 'center', justifyContent: 'center' } }, 'Image+Text'))), 'android' === s.Platform.OS && a('breakStrategy'), 'android' === s.Platform.OS && l.a.createElement(s.View, { style: Le.itemContent }, l.a.createElement(s.Text, { style: [Le.normalText, { borderWidth: 1, borderColor: 'gray' }], breakStrategy: i }, 'The 58-letter name Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch is the name of a town on Anglesey, an island of Wales.'), l.a.createElement(s.Text, { style: Le.normalText }, `breakStrategy: ${i}`), l.a.createElement(s.View, { style: Le.buttonBar }, l.a.createElement(s.View, { style: Le.button, onClick: () => this.changeBreakStrategy('simple') }, l.a.createElement(s.Text, { style: Le.buttonText }, 'simple')), l.a.createElement(s.View, { style: Le.button, onClick: () => this.changeBreakStrategy('high_quality') }, l.a.createElement(s.Text, { style: Le.buttonText }, 'high_quality')), l.a.createElement(s.View, { style: Le.button, onClick: () => this.changeBreakStrategy('balanced') }, l.a.createElement(s.Text, { style: Le.buttonText }, 'balanced')))), a('verticalAlign'), l.a.createElement(s.View, { style: [Le.itemContent, { height: 'android' === s.Platform.OS ? 160 : 70 }] }, l.a.createElement(s.Text, { style: [Le.normalText, { lineHeight: 50, backgroundColor: '#4c9afa', paddingHorizontal: 10, paddingVertical: 5 }] }, l.a.createElement(s.Image, { style: { width: 24, height: 24, verticalAlign: 'top' }, source: { uri: Oe } }), l.a.createElement(s.Image, { style: { width: 18, height: 12, verticalAlign: 'middle' }, source: { uri: Oe } }), l.a.createElement(s.Image, { style: { width: 24, height: 12, verticalAlign: 'baseline' }, source: { uri: Oe } }), l.a.createElement(s.Image, { style: { width: 36, height: 24, verticalAlign: 'bottom' }, source: { uri: Oe } }), l.a.createElement(s.Image, { style: { width: 24, height: 24, verticalAlign: 'top' }, source: { uri: Pe } }), l.a.createElement(s.Image, { style: { width: 18, height: 12, verticalAlign: 'middle' }, source: { uri: Pe } }), l.a.createElement(s.Image, { style: { width: 24, height: 12, verticalAlign: 'baseline' }, source: { uri: Pe } }), l.a.createElement(s.Image, { style: { width: 36, height: 24, verticalAlign: 'bottom' }, source: { uri: Pe } }), l.a.createElement(s.Text, { style: { fontSize: 16, verticalAlign: 'top' } }, '字'), l.a.createElement(s.Text, { style: { fontSize: 16, verticalAlign: 'middle' } }, '字'), l.a.createElement(s.Text, { style: { fontSize: 16, verticalAlign: 'baseline' } }, '字'), l.a.createElement(s.Text, { style: { fontSize: 16, verticalAlign: 'bottom' } }, '字')), 'android' === s.Platform.OS && l.a.createElement(l.a.Fragment, null, l.a.createElement(s.Text, null, 'legacy mode:'), l.a.createElement(s.Text, { style: [Le.normalText, { lineHeight: 50, backgroundColor: '#4c9afa', marginBottom: 10, paddingHorizontal: 10, paddingVertical: 5 }] }, l.a.createElement(s.Image, { style: { width: 24, height: 24, verticalAlignment: 0 }, source: { uri: Oe } }), l.a.createElement(s.Image, { style: { width: 18, height: 12, verticalAlignment: 1 }, source: { uri: Oe } }), l.a.createElement(s.Image, { style: { width: 24, height: 12, verticalAlignment: 2 }, source: { uri: Oe } }), l.a.createElement(s.Image, { style: { width: 36, height: 24, verticalAlignment: 3 }, source: { uri: Oe } }), l.a.createElement(s.Image, { style: { width: 24, height: 24, top: -10 }, source: { uri: Pe } }), l.a.createElement(s.Image, { style: { width: 18, height: 12, top: -5 }, source: { uri: Pe } }), l.a.createElement(s.Image, { style: { width: 24, height: 12 }, source: { uri: Pe } }), l.a.createElement(s.Image, { style: { width: 36, height: 24, top: 3 }, source: { uri: Pe } }), l.a.createElement(s.Text, { style: { fontSize: 16 } }, '字'), l.a.createElement(s.Text, { style: { fontSize: 16 } }, '字'), l.a.createElement(s.Text, { style: { fontSize: 16 } }, '字'), l.a.createElement(s.Text, { style: { fontSize: 16 } }, '字')))), a('tintColor & backgroundColor'), l.a.createElement(s.View, { style: [Le.itemContent] }, l.a.createElement(s.Text, { style: [Le.normalText, { lineHeight: 30, backgroundColor: '#4c9afa', paddingHorizontal: 10, paddingVertical: 5 }] }, l.a.createElement(s.Image, { style: { width: 24, height: 24, verticalAlign: 'middle', tintColor: 'orange' }, source: { uri: Oe } }), l.a.createElement(s.Image, { style: { width: 24, height: 24, verticalAlign: 'middle', tintColor: 'orange', backgroundColor: '#ccc' }, source: { uri: Oe } }), l.a.createElement(s.Image, { style: { width: 24, height: 24, verticalAlign: 'middle', backgroundColor: '#ccc' }, source: { uri: Oe } }), l.a.createElement(s.Text, { style: { verticalAlign: 'middle', backgroundColor: '#090' } }, 'text')), 'android' === s.Platform.OS && l.a.createElement(l.a.Fragment, null, l.a.createElement(s.Text, null, 'legacy mode:'), l.a.createElement(s.Text, { style: [Le.normalText, { lineHeight: 30, backgroundColor: '#4c9afa', marginBottom: 10, paddingHorizontal: 10, paddingVertical: 5 }] }, l.a.createElement(s.Image, { style: { width: 24, height: 24, tintColor: 'orange' }, source: { uri: Oe } }), l.a.createElement(s.Image, { style: { width: 24, height: 24, tintColor: 'orange', backgroundColor: '#ccc' }, source: { uri: Oe } }), l.a.createElement(s.Image, { style: { width: 24, height: 24, backgroundColor: '#ccc' }, source: { uri: Oe } })))), a('margin'), l.a.createElement(s.View, { style: [Le.itemContent] }, l.a.createElement(s.Text, { style: [{ lineHeight: 50, backgroundColor: '#4c9afa', marginBottom: 5 }] }, l.a.createElement(s.Image, { style: { width: 24, height: 24, verticalAlign: 'top', backgroundColor: '#ccc', margin: 5 }, source: { uri: Oe } }), l.a.createElement(s.Image, { style: { width: 24, height: 24, verticalAlign: 'middle', backgroundColor: '#ccc', margin: 5 }, source: { uri: Oe } }), l.a.createElement(s.Image, { style: { width: 24, height: 24, verticalAlign: 'baseline', backgroundColor: '#ccc', margin: 5 }, source: { uri: Oe } }), l.a.createElement(s.Image, { style: { width: 24, height: 24, verticalAlign: 'bottom', backgroundColor: '#ccc', margin: 5 }, source: { uri: Oe } })), 'android' === s.Platform.OS && l.a.createElement(l.a.Fragment, null, l.a.createElement(s.Text, null, 'legacy mode:'), l.a.createElement(s.Text, { style: [Le.normalText, { lineHeight: 50, backgroundColor: '#4c9afa', marginBottom: 10, paddingHorizontal: 10, paddingVertical: 5 }] }, l.a.createElement(s.Image, { style: { width: 24, height: 24, verticalAlignment: 0, backgroundColor: '#ccc', margin: 5 }, source: { uri: Oe } }), l.a.createElement(s.Image, { style: { width: 24, height: 24, verticalAlignment: 1, backgroundColor: '#ccc', margin: 5 }, source: { uri: Oe } }), l.a.createElement(s.Image, { style: { width: 24, height: 24, verticalAlignment: 2, backgroundColor: '#ccc', margin: 5 }, source: { uri: Oe } }), l.a.createElement(s.Image, { style: { width: 24, height: 24, verticalAlignment: 3, backgroundColor: '#ccc', margin: 5 }, source: { uri: Oe } })))));
    }
  } const ze = s.StyleSheet.create({ container_style: { padding: 10 }, input_style: { width: 300, marginVertical: 10, fontSize: 16, color: '#242424', height: 30, lineHeight: 30 }, input_style_block: { height: 100, lineHeight: 20, fontSize: 15, borderWidth: 1, borderColor: 'gray', underlineColorAndroid: 'transparent' }, itemTitle: { alignItems: 'flex-start', justifyContent: 'center', height: 40, borderWidth: 1, borderStyle: 'solid', borderColor: '#e0e0e0', borderRadius: 2, backgroundColor: '#fafafa', padding: 10, marginTop: 10 }, itemContent: { marginTop: 10 }, buttonBar: { flexDirection: 'row', marginTop: 10, flexGrow: 1 }, button: { width: 200, height: 24, borderColor: '#4c9afa', borderWidth: 1, borderStyle: 'solid', marginTop: 5, marginBottom: 5, flexGrow: 1, flexShrink: 1 } });class Be extends a.Component {
    constructor(e) {
      super(e), this.state = { textContent: '' }, this.changeInputContent = this.changeInputContent.bind(this), this.focus = this.focus.bind(this), this.blur = this.blur.bind(this);
    }changeInputContent() {
      this.setState({ textContent: `当前时间毫秒：${Date.now()}` });
    }focus() {
      this.input.focus();
    }blur() {
      this.input.blur();
    } async onFocus() {
      const e = await this.input.isFocused();this.setState({ event: 'onFocus', isFocused: e });
    } async onBlur() {
      const e = await this.input.isFocused();this.setState({ event: 'onBlur', isFocused: e });
    }changeBreakStrategy(e) {
      this.setState({ breakStrategy: e });
    }render() {
      const { textContent: e, event: t, isFocused: n, breakStrategy: o } = this.state; const r = e => l.a.createElement(s.View, { style: ze.itemTitle }, l.a.createElement(s.Text, null, e));return l.a.createElement(s.ScrollView, { style: ze.container_style }, r('text'), l.a.createElement(s.TextInput, { ref: (e) => {
        this.input = e;
      }, style: ze.input_style, caretColor: 'yellow', underlineColorAndroid: 'grey', placeholderTextColor: '#4c9afa', placeholder: 'text', defaultValue: e, onBlur: () => this.onBlur(), onFocus: () => this.onFocus() }), l.a.createElement(s.Text, { style: ze.itemContent }, `事件: ${t} | isFocused: ${n}`), l.a.createElement(s.View, { style: ze.button, onClick: this.changeInputContent }, l.a.createElement(s.Text, null, '点击改变输入框内容')), l.a.createElement(s.View, { style: ze.button, onClick: this.focus }, l.a.createElement(s.Text, null, 'Focus')), l.a.createElement(s.View, { style: ze.button, onClick: this.blur }, l.a.createElement(s.Text, null, 'Blur')), r('numeric'), l.a.createElement(s.TextInput, { style: ze.input_style, keyboardType: 'numeric', placeholder: 'numeric' }), r('phone-pad'), l.a.createElement(s.TextInput, { style: ze.input_style, keyboardType: 'phone-pad', placeholder: 'phone-pad' }), r('password'), l.a.createElement(s.TextInput, { style: ze.input_style, keyboardType: 'password', placeholder: 'Password', multiline: !1 }), r('maxLength'), l.a.createElement(s.TextInput, { caretColor: 'yellow', style: ze.input_style, placeholder: 'maxLength=5', maxLength: 5 }), 'android' === s.Platform.OS && r('breakStrategy'), 'android' === s.Platform.OS && l.a.createElement(l.a.Fragment, null, l.a.createElement(s.TextInput, { style: ze.input_style_block, breakStrategy: o, defaultValue: 'The 58-letter name Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch is the name of a town on Anglesey, an island of Wales.' }), l.a.createElement(s.Text, { style: {} }, `breakStrategy: ${o}`), l.a.createElement(s.View, { style: ze.buttonBar }, l.a.createElement(s.View, { style: ze.button, onClick: () => this.changeBreakStrategy('simple') }, l.a.createElement(s.Text, { style: ze.buttonText }, 'simple')), l.a.createElement(s.View, { style: ze.button, onClick: () => this.changeBreakStrategy('high_quality') }, l.a.createElement(s.Text, { style: ze.buttonText }, 'high_quality')), l.a.createElement(s.View, { style: ze.button, onClick: () => this.changeBreakStrategy('balanced') }, l.a.createElement(s.Text, { style: ze.buttonText }, 'balanced')))));
    }
  } const Me = `${n.p}assets/defaultSource.jpg`;const _e = s.StyleSheet.create({ itemTitle: { alignItems: 'flex-start', justifyContent: 'center', height: 40, borderWidth: 1, borderStyle: 'solid', borderColor: '#e0e0e0', borderRadius: 2, backgroundColor: '#fafafa', padding: 10, marginTop: 10 }, rectangle: { width: 160, height: 80, marginVertical: 10 }, bigRectangle: { width: 200, height: 100, borderColor: '#eee', borderWidth: 1, borderStyle: 'solid', padding: 10, marginVertical: 10 }, smallRectangle: { width: 40, height: 40, borderRadius: 10 } });function He() {
    const e = e => l.a.createElement(s.View, { style: _e.itemTitle }, l.a.createElement(s.Text, null, e));return l.a.createElement(s.ScrollView, { style: { paddingHorizontal: 10 } }, e('backgroundColor'), l.a.createElement(s.View, { style: [_e.rectangle, { backgroundColor: '#4c9afa' }] }), e('backgroundImage'), l.a.createElement(s.View, { style: [_e.rectangle, { alignItems: 'center', justifyContent: 'center', marginTop: 20, backgroundImage: Me }], accessible: !0, accessibilityLabel: '背景图', accessibilityRole: 'image', accessibilityState: { disabled: !1, selected: !0, checked: !1, expanded: !1, busy: !0 }, accessibilityValue: { min: 1, max: 10, now: 5, text: 'middle' } }, l.a.createElement(s.Text, { style: { color: 'white' } }, '背景图')), e('backgroundImage linear-gradient'), l.a.createElement(s.View, { style: [_e.rectangle, { alignItems: 'center', justifyContent: 'center', marginTop: 20, borderWidth: 2, borderStyle: 'solid', borderColor: 'black', borderRadius: 2, backgroundImage: 'linear-gradient(30deg, blue 10%, yellow 40%, red 50%);' }] }, l.a.createElement(s.Text, { style: { color: 'white' } }, '渐变色')), e('border props'), l.a.createElement(s.View, { style: [_e.rectangle, { borderColor: '#242424', borderRadius: 4, borderWidth: 1, borderStyle: 'solid' }] }), e('flex props'), l.a.createElement(s.View, { style: [_e.bigRectangle, { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }] }, l.a.createElement(s.View, { style: [_e.smallRectangle, { backgroundColor: 'yellow' }] }), l.a.createElement(s.View, { style: [_e.smallRectangle, { backgroundColor: 'blue' }] }), l.a.createElement(s.View, { style: [_e.smallRectangle, { backgroundColor: 'green' }] })));
  } const We = s.StyleSheet.create({ pageContainer: { alignItems: 'center', justifyContent: 'center', flex: 1, paddingTop: 20 }, mainRec: { backgroundColor: '#4c9afaAA', width: 256, height: 48, marginBottom: 10, marginTop: 156 }, title: { verticalAlign: 'middle', lineHeight: 48, height: 48, fontSize: 16, color: 'white', alignSelf: 'center' }, shapeBase: { width: 128, height: 128, backgroundColor: '#4c9afa' }, square: {}, circle: { borderRadius: 64 }, triangle: { borderStyle: 'solid', borderTopWidth: 0, borderRightWidth: 70, borderBottomWidth: 128, borderLeftWidth: 70, borderTopColor: 'transparent', borderRightColor: 'transparent', borderLeftColor: 'transparent', borderBottomColor: '#4c9afa', backgroundColor: 'transparent', width: 140 } }); const Ne = 'SquarePagerView'; const Ke = 'TrianglePagerView'; const Ue = 'CirclePagerView';function Ge(e, t) {
    const n = t => l.a.createElement(s.View, { style: We.pageContainer, key: t }, l.a.createElement(s.View, { style: [We.shapeBase, e], key: 'shape' }), l.a.createElement(s.View, { style: We.mainRec, key: 'title' }, t ? l.a.createElement(s.Text, { style: We.title }, t) : null));return n.displayName = t, n;
  } const qe = Ge(We.square, Ne); const Qe = Ge(We.triangle, Ke); const Ye = Ge(We.circle, Ue); const Xe = s.StyleSheet.create({ dotContainer: { position: 'absolute', bottom: 10, left: 0, right: 0, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }, dot: { width: 6, height: 6, borderRadius: 3, margin: 3, backgroundColor: '#BBBBBB' }, selectDot: { backgroundColor: '#000000' }, container: { height: 500 }, buttonContainer: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 12 }, button: { width: 120, height: 36, backgroundColor: '#4c9afa', borderRadius: 18, alignItems: 'center', justifyContent: 'center' }, buttonText: { fontSize: 16, color: '#fff' } });class Je extends l.a.Component {
    constructor(e) {
      super(e), H()(this, 'state', { selectedIndex: 0 }), this.onPageSelected = this.onPageSelected.bind(this), this.onPageScrollStateChanged = this.onPageScrollStateChanged.bind(this);
    }onPageSelected(e) {
      console.log('onPageSelected', e.position), this.setState({ selectedIndex: e.position });
    }onPageScrollStateChanged(e) {
      console.log('onPageScrollStateChanged', e);
    }onPageScroll({ offset: e, position: t }) {
      console.log('onPageScroll', e, t);
    }render() {
      const { selectedIndex: e } = this.state;return l.a.createElement(s.View, { style: { flex: 1, backgroundColor: '#ffffff' } }, l.a.createElement(s.View, { style: Xe.buttonContainer }, l.a.createElement(s.View, { style: Xe.button, onClick: () => {
        this.viewpager.setPage(2);
      } }, l.a.createElement(s.Text, { style: Xe.buttonText }, '动效滑到第3页')), l.a.createElement(s.View, { style: Xe.button, onClick: () => this.viewpager.setPageWithoutAnimation(0) }, l.a.createElement(s.Text, { style: Xe.buttonText }, '直接滑到第1页'))), l.a.createElement(s.ViewPager, { ref: (e) => {
        this.viewpager = e;
      }, style: Xe.container, initialPage: 0, keyboardDismissMode: 'none', scrollEnabled: !0, onPageSelected: this.onPageSelected, onPageScrollStateChanged: this.onPageScrollStateChanged, onPageScroll: this.onPageScroll }, [qe('squarePager'), Qe('TrianglePager'), Ye('CirclePager')]), l.a.createElement(s.View, { style: Xe.dotContainer }, new Array(3).fill(0)
        .map((t, n) => {
          const o = n === e;return l.a.createElement(s.View, { style: [Xe.dot, o ? Xe.selectDot : null], key: `dot_${n}` });
        })));
    }
  } const Ze = s.StyleSheet.create({ itemTitle: { alignItems: 'flex-start', justifyContent: 'center', height: 40, borderWidth: 1, borderStyle: 'solid', borderColor: '#e0e0e0', borderRadius: 2, backgroundColor: '#fafafa', padding: 10, marginTop: 10 }, webViewStyle: { padding: 10, flex: 1, flexGrow: 1, borderRadius: 10 } });function $e() {
    return l.a.createElement(s.View, { style: { paddingHorizontal: 10, flex: 1 } }, l.a.createElement(s.View, { style: Ze.itemTitle }, l.a.createElement(s.Text, null, 'WebView 示例')), l.a.createElement(s.WebView, { source: { uri: 'https://hippyjs.org' }, method: 'get', userAgent: 'Mozilla/5.0 (Linux; U; Android 5.1.1; zh-cn; vivo X7 Build/LMY47V) AppleWebKit/537.36 (KHTML, like Gecko)Version/4.0 Chrome/37.0.0.0 MQQBrowser/8.2 Mobile Safari/537.36', style: Ze.webViewStyle, onLoad: ({ url: e }) => console.log('webview onload', e), onLoadStart: ({ url: e }) => console.log('webview onLoadStart', e), onLoadEnd: ({ url: e, success: t, error: n }) => console.log('webview onLoadEnd', e, t, n) }));
  } const et = s.StyleSheet.create({ shadowDemo: { flex: 1, overflowY: 'scroll' }, shadowDemoCubeAndroid: { position: 'absolute', left: 50, top: 50, width: 170, height: 170, boxShadowOpacity: .6, boxShadowRadius: 5, boxShadowColor: '#4c9afa', borderRadius: 5 }, shadowDemoContentAndroid: { position: 'absolute', left: 5, top: 5, width: 160, height: 160, backgroundColor: 'grey', borderRadius: 5, display: 'flex', justifyContent: 'center', alignItems: 'center' }, shadowDemoCubeIos: { position: 'absolute', left: 50, top: 50, width: 160, height: 160, boxShadowOpacity: .6, boxShadowRadius: 5, boxShadowSpread: 1, boxShadowColor: '#4c9afa', borderRadius: 5 }, shadowDemoContentIos: { width: 160, height: 160, backgroundColor: 'grey', borderRadius: 5, display: 'flex', justifyContent: 'center', alignItems: 'center' }, text: { color: 'white' } }); const tt = s.StyleSheet.create({ shadowDemoCubeAndroid: { position: 'absolute', left: 50, top: 300, width: 175, height: 175, boxShadowOpacity: .6, boxShadowRadius: 5, boxShadowOffsetX: 15, boxShadowOffsetY: 15, boxShadowColor: '#4c9afa' }, shadowDemoContentAndroid: { width: 160, height: 160, backgroundColor: 'grey', display: 'flex', justifyContent: 'center', alignItems: 'center' }, shadowDemoCubeIos: { position: 'absolute', left: 50, top: 300, width: 160, height: 160, boxShadowOpacity: .6, boxShadowRadius: 5, boxShadowOffsetX: 10, boxShadowOffsetY: 10, boxShadowSpread: 1, boxShadowColor: '#4c9afa' }, shadowDemoContentIos: { width: 160, height: 160, backgroundColor: 'grey', display: 'flex', justifyContent: 'center', alignItems: 'center' }, text: { color: 'white' } });function nt() {
    return l.a.createElement(s.View, { style: et.shadowDemo }, 'android' === s.Platform.OS ? l.a.createElement(s.View, { style: et.shadowDemoCubeAndroid }, l.a.createElement(s.View, { style: et.shadowDemoContentAndroid }, l.a.createElement(s.Text, { style: et.text }, '没有偏移阴影样式'))) : l.a.createElement(s.View, { style: et.shadowDemoCubeIos }, l.a.createElement(s.View, { style: et.shadowDemoContentIos }, l.a.createElement(s.Text, { style: et.text }, '没有偏移阴影样式'))), 'android' === s.Platform.OS ? l.a.createElement(s.View, { style: tt.shadowDemoCubeAndroid }, l.a.createElement(s.View, { style: tt.shadowDemoContentAndroid }, l.a.createElement(s.Text, { style: tt.text }, '偏移阴影样式'))) : l.a.createElement(s.View, { style: tt.shadowDemoCubeIos }, l.a.createElement(s.View, { style: tt.shadowDemoContentIos }, l.a.createElement(s.Text, { style: tt.text }, '偏移阴影样式'))));
  } const ot = ce.filter(e => 2 !== e.style); const rt = s.StyleSheet.create({ container: { backgroundColor: '#ffffff' }, itemContainer: { padding: 12 }, splitter: { marginLeft: 12, marginRight: 12, height: .5, backgroundColor: '#e5e5e5' }, loading: { fontSize: 11, color: '#aaaaaa', alignSelf: 'center' }, pullContainer: { height: 50, backgroundColor: '#4c9afa' }, pullContent: { lineHeight: 50, color: 'white', height: 50, textAlign: 'center' }, pullFooter: { flex: 1, height: 40, backgroundColor: '#4c9afa', justifyContent: 'center', alignItems: 'center' } });class it extends l.a.Component {
    constructor(e) {
      super(e), this.state = { dataSource: [], pullingText: '继续下拉触发刷新', loadingState: '正在加载...' }, this.numberOfColumns = 2, this.columnSpacing = 6, this.interItemSpacing = 6, this.mockFetchData = this.mockFetchData.bind(this), this.renderItem = this.renderItem.bind(this), this.getItemType = this.getItemType.bind(this), this.getItemKey = this.getItemKey.bind(this), this.onEndReached = this.onEndReached.bind(this), this.onRefresh = this.onRefresh.bind(this), this.getRefresh = this.getRefresh.bind(this), this.renderPullFooter = this.renderPullFooter.bind(this), this.renderBanner = this.renderBanner.bind(this), this.getItemStyle = this.getItemStyle.bind(this);
    } async componentDidMount() {
      const e = await this.mockFetchData();this.setState({ dataSource: e });
    } async onEndReached() {
      const { dataSource: e } = this.state;if (this.loadMoreDataFlag) return;this.loadMoreDataFlag = !0, this.setState({ loadingState: '加载更多...' });let t = [];try {
        t = await this.mockFetchData();
      } catch (e) {}0 === t.length && this.setState({ loadingState: '没有更多数据' });const n = [...e, ...t];this.setState({ dataSource: n }), this.loadMoreDataFlag = !1;
    }renderPullFooter() {
      return 0 === this.state.dataSource.length ? null : l.a.createElement(s.View, { style: rt.pullFooter }, l.a.createElement(s.Text, { style: { color: 'white' } }, this.state.loadingState));
    } async onRefresh() {
      setTimeout(async () => {
        const e = await this.mockFetchData();this.setState({ dataSource: e }), this.refresh.refreshComplected();
      }, 1e3);
    }getRefresh() {
      return l.a.createElement(s.View, { style: { flex: 1, height: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: '#4c9afa' } }, l.a.createElement(s.Text, { style: { height: 40, lineHeight: 40, textAlign: 'center', color: 'white' } }, '下拉刷新中...'));
    }onClickItem(e) {
      console.log(`item: ${e} is clicked..`);
    }getItemType(e) {
      return this.state.dataSource[e].style;
    }getItemKey(e) {
      return `row-${e}`;
    }onItemClick(e) {
      console.log('onItemClick', e), this.listView.scrollToIndex({ index: e, animation: !0 });
    }renderBanner() {
      return 0 === this.state.dataSource.length ? null : l.a.createElement(s.View, { style: { backgroundColor: 'grey', height: 100, justifyContent: 'center', alignItems: 'center' } }, l.a.createElement(s.Text, { style: { fontSize: 20, color: 'white', lineHeight: 100, height: 100 } }, 'Banner View'));
    }renderItem(e) {
      const { dataSource: t } = this.state;let n = null;const o = t[e];switch (o.style) {
        case 1:n = l.a.createElement(ye, { itemBean: o.itemBean });break;case 2:n = l.a.createElement(Se, { itemBean: o.itemBean });break;case 5:n = l.a.createElement(Ce, { itemBean: o.itemBean });
      } return l.a.createElement(s.View, { onClick: () => this.onItemClick(e), style: rt.container }, l.a.createElement(s.View, { style: rt.itemContainer }, n), l.a.createElement(s.View, { style: rt.splitter }));
    }mockFetchData() {
      return new Promise((e) => {
        setTimeout(() => {
          const t = [...ot, ...ot];return e(t);
        }, 600);
      });
    }getWaterfallContentInset() {
      return { top: 0, left: 5, bottom: 0, right: 5 };
    }getItemStyle() {
      const { numberOfColumns: e, columnSpacing: t } = this; const n = s.Dimensions.get('screen').width; const o = this.getWaterfallContentInset();return { width: (n - o.left - o.right - (e - 1) * t) / e };
    }render() {
      const { dataSource: e } = this.state; const { numberOfColumns: t, columnSpacing: n, interItemSpacing: o } = this; const r = this.getWaterfallContentInset();return l.a.createElement(s.RefreshWrapper, { ref: (e) => {
        this.refresh = e;
      }, style: { flex: 1 }, onRefresh: this.onRefresh, bounceTime: 100, getRefresh: this.getRefresh }, l.a.createElement(s.WaterfallView, { ref: (e) => {
        this.listView = e;
      }, renderBanner: this.renderBanner, numberOfColumns: t, columnSpacing: n, interItemSpacing: o, numberOfItems: e.length, style: { flex: 1 }, renderItem: this.renderItem, onEndReached: this.onEndReached, getItemType: this.getItemType, getItemKey: this.getItemKey, contentInset: r, getItemStyle: this.getItemStyle, containPullFooter: !0, renderPullFooter: this.renderPullFooter }));
    }
  } const at = `${n.p}assets/defaultSource.jpg`;function lt(e, t) {
    const n = Object.keys(e);if (Object.getOwnPropertySymbols) {
      let o = Object.getOwnPropertySymbols(e);t && (o = o.filter((t => Object.getOwnPropertyDescriptor(e, t).enumerable))), n.push.apply(n, o);
    } return n;
  } function st(e) {
    for (let t = 1;t < arguments.length;t++) {
      var n = null != arguments[t] ? arguments[t] : {};t % 2 ? lt(Object(n), !0).forEach(((t) => {
        H()(e, t, n[t]);
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : lt(Object(n)).forEach(((t) => {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      }));
    } return e;
  } const ct = { borderless: !1 };function ht(e) {
    const [t, n] = Object(a.useState)(0); const [o, r] = Object(a.useState)(0); const i = Object(a.useRef)(null); const c = () => {
      i.current.setPressed(!1);
    }; const { nativeBackgroundAndroid: h, style: u } = e;return l.a.createElement(s.View, { onLayout: () => {
      s.UIManagerModule.measureInAppWindow(i.current, (e) => {
        n(e.x), r(e.y);
      });
    }, style: u, onTouchDown: (e) => {
      i.current.setHotspot(e.page_x - t, e.page_y - o), i.current.setPressed(!0);
    }, onTouchEnd: c, onTouchCancel: c, ref: i, nativeBackgroundAndroid: st(st({}, ct), h) }, e.children);
  } const ut = s.StyleSheet.create({ imgRectangle: { width: 260, height: 56, alignItems: 'center', justifyContent: 'center' }, circleRipple: { marginTop: 30, width: 150, height: 56, alignItems: 'center', justifyContent: 'center', borderWidth: 3, borderStyle: 'solid', borderColor: '#4c9afa' }, squareRipple: { alignItems: 'center', justifyContent: 'center', width: 150, height: 150, backgroundColor: '#4c9afa', marginTop: 30, borderRadius: 12, overflow: 'hidden' }, squareRippleWrapper: { alignItems: 'flex-start', justifyContent: 'center', height: 150, marginTop: 30 }, squareRipple1: { alignItems: 'center', justifyContent: 'center', width: 150, height: 150, borderWidth: 5, borderStyle: 'solid', backgroundSize: 'cover', borderColor: '#4c9afa', backgroundImage: at, paddingHorizontal: 10 }, squareRipple2: { alignItems: 'center', justifyContent: 'center', width: 150, height: 150, paddingHorizontal: 10, backgroundSize: 'cover', backgroundImage: 'https://user-images.githubusercontent.com/12878546/148736102-7cd9525b-aceb-41c6-a905-d3156219ef16.png' } });function dt() {
    return 'ios' === s.Platform.OS ? l.a.createElement(s.Text, null, 'iOS暂未支持水波纹效果') : l.a.createElement(s.ScrollView, { style: { margin: 10, flex: 1 } }, l.a.createElement(s.View, { style: [ut.imgRectangle, { marginTop: 20, backgroundImage: at, backgroundSize: 'cover' }] }, l.a.createElement(ht, { style: [ut.imgRectangle], nativeBackgroundAndroid: { borderless: !0, color: '#666666' } }, l.a.createElement(s.Text, { style: { color: 'white', maxWidth: 200 } }, '外层背景图，内层无边框水波纹，受外层影响始终有边框'))), l.a.createElement(ht, { style: [ut.circleRipple], nativeBackgroundAndroid: { borderless: !0, color: '#666666', rippleRadius: 100 } }, l.a.createElement(s.Text, { style: { color: 'black', textAlign: 'center' } }, '无边框圆形水波纹')), l.a.createElement(ht, { style: [ut.squareRipple], nativeBackgroundAndroid: { borderless: !1, color: '#666666' } }, l.a.createElement(s.Text, { style: { color: '#fff' } }, '带背景色水波纹')), l.a.createElement(s.View, { style: [ut.squareRippleWrapper] }, l.a.createElement(ht, { style: [ut.squareRipple1], nativeBackgroundAndroid: { borderless: !1, color: '#666666' } }, l.a.createElement(s.Text, { style: { color: 'white' } }, '有边框水波纹，带本地底图效果'))), l.a.createElement(s.View, { style: [ut.squareRippleWrapper] }, l.a.createElement(ht, { style: [ut.squareRipple2], nativeBackgroundAndroid: { borderless: !1, color: '#666666' } }, l.a.createElement(s.Text, { style: { color: 'black' } }, '有边框水波纹，带网络底图效果'))));
  } const mt = '#4c9afa'; const gt = '#f44837'; const ft = s.StyleSheet.create({ container: { paddingHorizontal: 10 }, square: { width: 80, height: 80, backgroundColor: gt }, showArea: { height: 150, marginVertical: 10 }, button: { borderColor: mt, borderWidth: 2, borderStyle: 'solid', justifyContent: 'center', alignItems: 'center', width: 70, borderRadius: 8, height: 50, marginTop: 20, marginRight: 8 }, buttonText: { fontSize: 20, color: mt, textAlign: 'center', textAlignVertical: 'center' }, colorText: { fontSize: 14, color: 'white', textAlign: 'center', textAlignVertical: 'center' }, buttonContainer: { flexDirection: 'row', alignItems: 'center' }, title: { fontSize: 24, marginTop: 8 } });class yt extends l.a.Component {
    constructor(e) {
      super(e), this.state = {};
    }componentWillMount() {
      this.horizonAnimation = new s.Animation({ startValue: 150, toValue: 20, duration: 1e3, delay: 500, mode: 'timing', timingFunction: 'linear', repeatCount: 'loop' }), this.verticalAnimation = new s.Animation({ startValue: 80, toValue: 40, duration: 1e3, delay: 0, mode: 'timing', timingFunction: 'linear', repeatCount: 'loop' }), this.scaleAnimationSet = new s.AnimationSet({ children: [{ animation: new s.Animation({ startValue: 1, toValue: 1.2, duration: 1e3, delay: 0, mode: 'timing', timingFunction: 'linear' }), follow: !1 }, { animation: new s.Animation({ startValue: 1.2, toValue: .2, duration: 1e3, delay: 0, mode: 'timing', timingFunction: 'linear' }), follow: !0 }], repeatCount: 'loop' }), this.rotateAnimationSet = new s.AnimationSet({ children: [{ animation: new s.Animation({ startValue: 0, toValue: 180, duration: 2e3, delay: 0, valueType: 'deg', mode: 'timing', timingFunction: 'linear' }), follow: !1 }, { animation: new s.Animation({ startValue: 180, toValue: 360, duration: 2e3, delay: 0, valueType: 'deg', mode: 'timing', timingFunction: 'linear' }), follow: !0 }], repeatCount: 'loop' }), this.skewXAnimationSet = new s.AnimationSet({ children: [{ animation: new s.Animation({ startValue: 0, toValue: 20, duration: 2e3, delay: 0, mode: 'timing', timingFunction: 'linear' }), follow: !1 }, { animation: new s.Animation({ startValue: 20, toValue: 0, duration: 2e3, delay: 0, mode: 'timing', timingFunction: 'linear' }), follow: !0 }], repeatCount: 'loop' }), this.skewYAnimationSet = new s.AnimationSet({ children: [{ animation: new s.Animation({ startValue: 0, toValue: 20, duration: 2e3, delay: 0, mode: 'timing', timingFunction: 'linear' }), follow: !1 }, { animation: new s.Animation({ startValue: 20, toValue: 0, duration: 2e3, delay: 0, mode: 'timing', timingFunction: 'linear' }), follow: !0 }], repeatCount: 'loop' }), this.bgColorAnimationSet = new s.AnimationSet({ children: [{ animation: new s.Animation({ startValue: 'red', toValue: 'yellow', valueType: 'color', duration: 1e3, delay: 0, mode: 'timing', timingFunction: 'linear' }), follow: !1 }, { animation: new s.Animation({ startValue: 'yellow', toValue: 'blue', duration: 1e3, valueType: 'color', delay: 0, mode: 'timing', timingFunction: 'linear' }), follow: !0 }], repeatCount: 'loop' }), this.txtColorAnimationSet = new s.AnimationSet({ children: [{ animation: new s.Animation({ startValue: 'white', toValue: 'yellow', valueType: 'color', duration: 1e3, delay: 0, mode: 'timing', timingFunction: 'linear' }), follow: !1 }, { animation: new s.Animation({ startValue: 'yellow', toValue: 'white', duration: 1e3, valueType: 'color', delay: 0, mode: 'timing', timingFunction: 'linear' }), follow: !0 }], repeatCount: 'loop' }), this.cubicBezierScaleAnimationSet = new s.AnimationSet({ children: [{ animation: new s.Animation({ startValue: 0, toValue: 1, duration: 1e3, delay: 0, mode: 'timing', timingFunction: 'cubic-bezier(.45,2.84,.38,.5)' }), follow: !1 }, { animation: new s.Animation({ startValue: 1, toValue: 0, duration: 1e3, mode: 'timing', timingFunction: 'cubic-bezier(.17,1.45,.78,.14)' }), follow: !0 }], repeatCount: 'loop' });
    }componentDidMount() {
      'web' === s.Platform.OS && (this.verticalAnimation.setRef(this.verticalRef), this.horizonAnimation.setRef(this.horizonRef), this.scaleAnimationSet.setRef(this.scaleRef), this.bgColorAnimationSet.setRef(this.bgColorRef), this.txtColorAnimationSet.setRef(this.textColorRef), this.txtColorAnimationSet.setRef(this.textColorRef), this.cubicBezierScaleAnimationSet.setRef(this.cubicBezierScaleRef), this.rotateAnimationSet.setRef(this.rotateRef), this.skewXAnimationSet.setRef(this.skewRef), this.skewYAnimationSet.setRef(this.skewRef)), this.horizonAnimation.onAnimationStart(() => {
        console.log('on animation start!!!');
      }), this.horizonAnimation.onAnimationEnd(() => {
        console.log('on animation end!!!');
      }), this.horizonAnimation.onAnimationCancel(() => {
        console.log('on animation cancel!!!');
      }), this.horizonAnimation.onAnimationRepeat(() => {
        console.log('on animation repeat!!!');
      });
    }componentWillUnmount() {
      this.horizonAnimation && this.horizonAnimation.destroy(), this.verticalAnimation && this.verticalAnimation.destroy(), this.scaleAnimationSet && this.scaleAnimationSet.destroy(), this.bgColorAnimationSet && this.bgColorAnimationSet.destroy(), this.txtColorAnimationSet && this.txtColorAnimationSet.destroy(), this.cubicBezierScaleAnimationSet && this.cubicBezierScaleAnimationSet.destroy(), this.rotateAnimationSet && this.rotateAnimationSet.destroy(), this.skewXAnimationSet && this.skewXAnimationSet.destroy(), this.skewYAnimationSet && this.skewYAnimationSet.destroy();
    }render() {
      return l.a.createElement(s.ScrollView, { style: ft.container }, l.a.createElement(s.Text, { style: ft.title }, '水平位移动画'), l.a.createElement(s.View, { style: ft.buttonContainer }, l.a.createElement(s.View, { style: ft.button, onClick: () => {
        this.horizonAnimation.start();
      } }, l.a.createElement(s.Text, { style: ft.buttonText }, '开始')), l.a.createElement(s.View, { style: [ft.button], onClick: () => {
        this.horizonAnimation.pause();
      } }, l.a.createElement(s.Text, { style: ft.buttonText }, '暂停')), l.a.createElement(s.View, { style: ft.button, onClick: () => {
        this.horizonAnimation.resume();
      } }, l.a.createElement(s.Text, { style: ft.buttonText }, '继续')), l.a.createElement(s.View, { style: ft.button, onClick: () => {
        this.horizonAnimation.updateAnimation({ startValue: 50, toValue: 100 });
      } }, l.a.createElement(s.Text, { style: ft.buttonText }, '更新'))), l.a.createElement(s.View, { style: ft.showArea }, l.a.createElement(s.View, { ref: (e) => {
        this.horizonRef = e;
      }, style: [ft.square, { transform: [{ translateX: this.horizonAnimation }] }] })), l.a.createElement(s.Text, { style: ft.title }, '高度形变动画'), l.a.createElement(s.View, { style: ft.buttonContainer }, l.a.createElement(s.View, { style: ft.button, onClick: () => {
        this.verticalAnimation.start();
      } }, l.a.createElement(s.Text, { style: ft.buttonText }, '开始')), l.a.createElement(s.View, { style: [ft.button], onClick: () => {
        this.verticalAnimation.pause();
      } }, l.a.createElement(s.Text, { style: ft.buttonText }, '暂停')), l.a.createElement(s.View, { style: ft.button, onClick: () => {
        this.verticalAnimation.resume();
      } }, l.a.createElement(s.Text, { style: ft.buttonText }, '继续'))), l.a.createElement(s.View, { style: ft.showArea }, l.a.createElement(s.View, { ref: (e) => {
        this.verticalRef = e;
      }, style: [ft.square, { height: this.verticalAnimation }] })), l.a.createElement(s.Text, { style: ft.title }, '旋转动画'), l.a.createElement(s.View, { style: ft.buttonContainer }, l.a.createElement(s.View, { style: ft.button, onClick: () => {
        this.rotateAnimationSet.start();
      } }, l.a.createElement(s.Text, { style: ft.buttonText }, '开始')), l.a.createElement(s.View, { style: [ft.button], onClick: () => {
        this.rotateAnimationSet.pause();
      } }, l.a.createElement(s.Text, { style: ft.buttonText }, '暂停')), l.a.createElement(s.View, { style: ft.button, onClick: () => {
        this.rotateAnimationSet.resume();
      } }, l.a.createElement(s.Text, { style: ft.buttonText }, '继续'))), l.a.createElement(s.View, { style: ft.showArea }, l.a.createElement(s.View, { ref: (e) => {
        this.rotateRef = e;
      }, style: [ft.square, { transform: [{ rotate: this.rotateAnimationSet }] }] })), l.a.createElement(s.Text, { style: ft.title }, '倾斜动画'), l.a.createElement(s.View, { style: ft.buttonContainer }, l.a.createElement(s.View, { style: ft.button, onClick: () => {
        this.skewXAnimationSet.start(), this.skewYAnimationSet.start();
      } }, l.a.createElement(s.Text, { style: ft.buttonText }, '开始')), l.a.createElement(s.View, { style: [ft.button], onClick: () => {
        this.skewXAnimationSet.pause(), this.skewYAnimationSet.pause();
      } }, l.a.createElement(s.Text, { style: ft.buttonText }, '暂停')), l.a.createElement(s.View, { style: ft.button, onClick: () => {
        this.skewXAnimationSet.resume(), this.skewYAnimationSet.resume();
      } }, l.a.createElement(s.Text, { style: ft.buttonText }, '继续'))), l.a.createElement(s.View, { style: ft.showArea }, l.a.createElement(s.View, { ref: (e) => {
        this.skewRef = e;
      }, style: [ft.square, { transform: [{ skewX: this.skewXAnimationSet }, { skewY: this.skewYAnimationSet }] }] })), l.a.createElement(s.Text, { style: ft.title }, '缩放动画'), l.a.createElement(s.View, { style: ft.buttonContainer }, l.a.createElement(s.View, { style: ft.button, onClick: () => {
        this.scaleAnimationSet.start();
      } }, l.a.createElement(s.Text, { style: ft.buttonText }, '开始')), l.a.createElement(s.View, { style: [ft.button], onClick: () => {
        this.scaleAnimationSet.pause();
      } }, l.a.createElement(s.Text, { style: ft.buttonText }, '暂停')), l.a.createElement(s.View, { style: ft.button, onClick: () => {
        this.scaleAnimationSet.resume();
      } }, l.a.createElement(s.Text, { style: ft.buttonText }, '继续'))), l.a.createElement(s.View, { style: [ft.showArea, { marginVertical: 20 }] }, l.a.createElement(s.View, { ref: (e) => {
        this.scaleRef = e;
      }, style: [ft.square, { transform: [{ scale: this.scaleAnimationSet }] }] })), l.a.createElement(s.Text, { style: ft.title }, '颜色渐变动画（文字渐变仅Android支持）'), l.a.createElement(s.View, { style: ft.buttonContainer }, l.a.createElement(s.View, { style: ft.button, onClick: () => {
        this.bgColorAnimationSet.start(), this.txtColorAnimationSet.start();
      } }, l.a.createElement(s.Text, { style: ft.buttonText }, '开始')), l.a.createElement(s.View, { style: [ft.button], onClick: () => {
        this.bgColorAnimationSet.pause(), this.txtColorAnimationSet.pause();
      } }, l.a.createElement(s.Text, { style: ft.buttonText }, '暂停')), l.a.createElement(s.View, { style: ft.button, onClick: () => {
        this.bgColorAnimationSet.resume(), this.txtColorAnimationSet.resume();
      } }, l.a.createElement(s.Text, { style: ft.buttonText }, '继续'))), l.a.createElement(s.View, { style: [ft.showArea, { marginVertical: 20 }] }, l.a.createElement(s.View, { ref: (e) => {
        this.bgColorRef = e;
      }, style: [ft.square, { justifyContent: 'center', alignItems: 'center' }, { backgroundColor: this.bgColorAnimationSet }] }, l.a.createElement(s.Text, { ref: (e) => {
        this.textColorRef = e;
      }, style: [ft.colorText, { color: 'android' === s.Platform.OS ? this.txtColorAnimationSet : 'white' }] }, '颜色渐变背景和文字'))), l.a.createElement(s.Text, { style: ft.title }, '贝塞尔曲线动画'), l.a.createElement(s.View, { style: ft.buttonContainer }, l.a.createElement(s.View, { style: ft.button, onClick: () => {
        this.cubicBezierScaleAnimationSet.start();
      } }, l.a.createElement(s.Text, { style: ft.buttonText }, '开始')), l.a.createElement(s.View, { style: [ft.button], onClick: () => {
        this.cubicBezierScaleAnimationSet.pause();
      } }, l.a.createElement(s.Text, { style: ft.buttonText }, '暂停')), l.a.createElement(s.View, { style: ft.button, onClick: () => {
        this.cubicBezierScaleAnimationSet.resume();
      } }, l.a.createElement(s.Text, { style: ft.buttonText }, '继续'))), l.a.createElement(s.View, { style: [ft.showArea, { marginVertical: 20 }] }, l.a.createElement(s.View, { ref: (e) => {
        this.cubicBezierScaleRef = e;
      }, style: [ft.square, { transform: [{ scale: this.cubicBezierScaleAnimationSet }] }] })));
    }
  } const pt = s.StyleSheet.create({ containerStyle: { margin: 20, alignItems: 'center', flexDirection: 'column' }, itemGroupStyle: { flexDirection: 'row', marginTop: 10, borderColor: '#4c9afa', borderWidth: 1, borderStyle: 'solid', width: 100, height: 40, justifyContent: 'center', alignItems: 'center' }, viewGroupStyle: { flexDirection: 'row', marginTop: 10 }, infoStyle: { width: 60, height: 40, fontSize: 16, color: '#4c9afa', textAlign: 'center' }, inputStyle: { width: 200, height: 40, placeholderTextColor: '#aaaaaa', underlineColorAndroid: '#4c9afa', fontSize: 16, color: '#242424', textAlign: 'left' }, buttonStyle: { textAlign: 'center', fontSize: 16, color: '#4c9afa', backgroundColor: '#4c9afa11', marginLeft: 10, marginRight: 10 } });class bt extends l.a.Component {
    constructor(e) {
      super(e), this.state = { result: '' }, this.onTextChangeKey = this.onTextChangeKey.bind(this), this.onTextChangeValue = this.onTextChangeValue.bind(this), this.onClickSet = this.onClickSet.bind(this), this.onTextChangeKey = this.onTextChangeKey.bind(this), this.onClickGet = this.onClickGet.bind(this);
    }onClickSet() {
      const { key: e, value: t } = this.state;e && s.AsyncStorage.setItem(e, t);
    }onClickGet() {
      const { key: e } = this.state;e && s.AsyncStorage.getItem(e).then((e) => {
        this.setState({ result: e });
      });
    }onTextChangeKey(e) {
      this.setState({ key: e });
    }onTextChangeValue(e) {
      this.setState({ value: e });
    }render() {
      const { result: e } = this.state;return l.a.createElement(s.ScrollView, { style: pt.containerStyle }, l.a.createElement(s.View, { style: pt.viewGroupStyle }, l.a.createElement(s.Text, { style: pt.infoStyle }, 'Key:'), l.a.createElement(s.TextInput, { style: pt.inputStyle, onChangeText: this.onTextChangeKey })), l.a.createElement(s.View, { style: pt.viewGroupStyle }, l.a.createElement(s.Text, { style: pt.infoStyle }, 'Value:'), l.a.createElement(s.TextInput, { style: pt.inputStyle, onChangeText: this.onTextChangeValue })), l.a.createElement(s.View, { style: pt.itemGroupStyle, onClick: this.onClickSet }, l.a.createElement(s.Text, { style: pt.buttonStyle }, 'Set')), l.a.createElement(s.View, { style: [pt.viewGroupStyle, { marginTop: 60 }] }, l.a.createElement(s.Text, { style: pt.infoStyle }, 'Key:'), l.a.createElement(s.TextInput, { style: pt.inputStyle, onChangeText: this.onTextChangeKey })), l.a.createElement(s.View, { style: [pt.viewGroupStyle, { display: 'none' }] }, l.a.createElement(s.Text, { style: pt.infoStyle }, 'Value:'), l.a.createElement(s.Text, { style: [pt.infoStyle, { width: 200 }] }, e)), l.a.createElement(s.View, { style: pt.itemGroupStyle, onClick: this.onClickGet }, l.a.createElement(s.Text, { style: pt.buttonStyle }, 'Get')));
    }
  } const wt = s.StyleSheet.create({ itemTitle: { alignItems: 'flex-start', justifyContent: 'center', height: 40, borderWidth: 1, borderStyle: 'solid', borderColor: '#e0e0e0', borderRadius: 2, backgroundColor: '#fafafa', padding: 10, marginTop: 10 }, wrapper: { borderColor: '#eee', borderWidth: 1, borderStyle: 'solid', paddingHorizontal: 10, paddingVertical: 5, marginVertical: 10, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' }, infoContainer: { display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginTop: 5, marginBottom: 5, flexWrap: 'wrap' }, infoText: { collapsable: !1, marginVertical: 5 } });class xt extends l.a.Component {
    constructor(e) {
      super(e), this.state = { netInfoStatusTxt: '', netInfoChangeTxt: '', fetchInfoTxt: '', cookies: '' }, this.listener = null;
    } async fetchNetInfoStatus() {
      this.setState({ netInfoStatusTxt: await s.NetInfo.fetch() });
    }fetchUrl() {
      fetch('https://hippyjs.org', { mode: 'no-cors' }).then(e => (this.setState({ fetchInfoTxt: `成功状态: ${e.status}` }), e))
        .catch((e) => {
          this.setState({ fetchInfoTxt: `收到错误: ${e}` });
        });
    }setCookies() {
      s.NetworkModule.setCookie('https://hippyjs.org', 'name=hippy;network=mobile');
    }getCookies() {
      s.NetworkModule.getCookies('https://hippyjs.org').then((e) => {
        this.setState({ cookies: e });
      });
    } async componentWillMount() {
      const e = this;this.listener = s.NetInfo.addEventListener('change', (t) => {
        e.setState({ netInfoChangeTxt: `${t.network_info}` });
      });
    }componentWillUnmount() {
      this.listener && s.NetInfo.removeEventListener('change', this.listener);
    }componentDidMount() {
      this.fetchUrl(), this.fetchNetInfoStatus();
    }render() {
      const { netInfoStatusTxt: e, fetchInfoTxt: t, netInfoChangeTxt: n, cookies: o } = this.state; const r = e => l.a.createElement(s.View, { style: wt.itemTitle }, l.a.createElement(s.Text, null, e));return l.a.createElement(s.ScrollView, { style: { paddingHorizontal: 10 } }, r('Fetch'), l.a.createElement(s.View, { style: [wt.wrapper] }, l.a.createElement(s.View, { style: [wt.infoContainer] }, l.a.createElement(s.View, { style: { backgroundColor: 'grey', padding: 10, borderRadius: 10, marginRight: 10 }, onClick: () => this.fetchUrl() }, l.a.createElement(s.Text, { style: { color: 'white' } }, '请求 hippy 网址:')), l.a.createElement(s.Text, { style: wt.infoText }, t))), r('NetInfo'), l.a.createElement(s.View, { style: [wt.wrapper] }, l.a.createElement(s.View, { style: [wt.infoContainer] }, l.a.createElement(s.View, { style: { backgroundColor: 'grey', padding: 10, borderRadius: 10, marginRight: 10 }, onClick: () => this.fetchNetInfoStatus() }, l.a.createElement(s.Text, { style: { color: 'white' } }, '获取网络状态:')), l.a.createElement(s.Text, { style: wt.infoText }, e)), l.a.createElement(s.View, { style: [wt.infoContainer] }, l.a.createElement(s.View, { style: { backgroundColor: 'grey', padding: 10, borderRadius: 10, marginRight: 10 } }, l.a.createElement(s.Text, { style: { color: 'white' } }, '监听网络变化:')), l.a.createElement(s.Text, { style: wt.infoText }, n))), r('NetworkModule'), l.a.createElement(s.View, { style: [wt.wrapper] }, l.a.createElement(s.View, { style: [wt.infoContainer] }, l.a.createElement(s.View, { style: { backgroundColor: 'grey', padding: 10, borderRadius: 10, marginRight: 10 }, onClick: () => this.setCookies() }, l.a.createElement(s.Text, { style: { color: 'white' } }, '设置Cookies：')), l.a.createElement(s.Text, { style: wt.infoText }, 'name=hippy;network=mobile')), l.a.createElement(s.View, { style: [wt.infoContainer] }, l.a.createElement(s.View, { style: { backgroundColor: 'grey', padding: 10, borderRadius: 10, marginRight: 10 }, onClick: () => this.getCookies() }, l.a.createElement(s.Text, { style: { color: 'white' } }, '获取Cookies：')), l.a.createElement(s.Text, { style: wt.infoText }, o))));
    }
  } const St = s.StyleSheet.create({ fullScreen: { flex: 1 }, row: { flexDirection: 'row' }, title: { color: '#ccc' }, button: { height: 56, backgroundColor: '#4c9afa', borderColor: '#5dabfb', borderStyle: 'solid', borderWidth: 1, paddingHorizontal: 20, fontSize: 16, textAlign: 'center', lineHeight: 56, color: '#fff', margin: 10 }, input: { color: 'black', flex: 1, height: 36, lineHeight: 36, fontSize: 14, borderBottomColor: '#4c9afa', borderBottomStyle: 'solid', borderBottomWidth: 1, padding: 0 }, output: { color: 'black' } }); const Et = 'wss://echo.websocket.org'; const At = 'Rock it with Hippy WebSocket';let Tt;var Ct = function () {
    const e = Object(a.useRef)(null); const t = Object(a.useRef)(null); const [n, o] = Object(a.useState)([]); const r = (e) => {
      o(t => [e, ...t]);
    };return l.a.createElement(s.View, { style: St.fullScreen }, l.a.createElement(s.View, null, l.a.createElement(s.Text, { style: St.title }, 'Url:'), l.a.createElement(s.TextInput, { ref: e, value: Et, style: St.input }), l.a.createElement(s.View, { style: St.row }, l.a.createElement(s.Text, { onClick: () => {
      e.current.getValue().then((e) => {
        Tt && 1 === Tt.readyState && Tt.close(), Tt = new WebSocket(e), Tt.onopen = () => r(`[Opened] ${Tt.url}`), Tt.onclose = () => r(`[Closed] ${Tt.url}`), Tt.onerror = e => r(`[Error] ${e.reason}`), Tt.onmessage = e => r(`[Received] ${e.data}`);
      });
    }, style: St.button }, 'Connect'), l.a.createElement(s.Text, { onClick: () => Tt.close(), style: St.button }, 'Disconnect'))), l.a.createElement(s.View, null, l.a.createElement(s.Text, { style: St.title }, 'Message:'), l.a.createElement(s.TextInput, { ref: t, value: At, style: St.input }), l.a.createElement(s.Text, { onClick: () => t.current.getValue().then((e) => {
      r(`[Sent] ${e}`), Tt.send(e);
    }), style: St.button }, 'Send')), l.a.createElement(s.View, null, l.a.createElement(s.Text, { style: St.title }, 'Log:'), l.a.createElement(s.ScrollView, { style: St.fullScreen }, n.map((e, t) => l.a.createElement(s.Text, { key: t, style: St.output }, e)))));
  };function vt(e, t) {
    const n = Object.keys(e);if (Object.getOwnPropertySymbols) {
      let o = Object.getOwnPropertySymbols(e);t && (o = o.filter((t => Object.getOwnPropertyDescriptor(e, t).enumerable))), n.push.apply(n, o);
    } return n;
  } function kt(e) {
    for (let t = 1;t < arguments.length;t++) {
      var n = null != arguments[t] ? arguments[t] : {};t % 2 ? vt(Object(n), !0).forEach(((t) => {
        H()(e, t, n[t]);
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : vt(Object(n)).forEach(((t) => {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      }));
    } return e;
  } const Vt = s.StyleSheet.create({ full: { flex: 1 }, demoContent: { flex: 1, height: 500 }, box: { position: 'absolute', width: 100, height: 100, backgroundColor: '#4c9afa', justifyContent: 'center', alignItem: 'center', borderRadius: 5 }, text: { color: 'white', textAlign: 'center', textAlignVertical: 'middle' }, buttonContainer: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around', marginVertical: 5 }, button: { height: 55, borderColor: '#4c9afa', borderWidth: 2, borderStyle: 'solid', borderRadius: 8, justifyContent: 'center', alignItem: 'center', flexShrink: 1, marginHorizontal: 4, paddingHorizontal: 1 }, buttonText: { fontSize: 14, color: '#4c9afa', textAlign: 'center', textAlignVertical: 'center' }, row: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around', marginVertical: 5 }, black: { color: 'black' } }); const Rt = function (e, t) {
    const n = Math.ceil(e); const o = Math.floor(t);return Math.floor(Math.random() * (o - n + 1)) + n;
  };var It = function () {
    const e = Object(a.useRef)(null);let t; let n;Object(a.useEffect)(() => {
      const e = s.Dimensions.get('screen');({ width: t, height: n } = e);
    });const [o, r] = Object(a.useState)({ width: 100, height: 100, top: 10, left: 10 }); const [i, c] = Object(a.useState)({ width: 0, height: 0, x: 0, y: 0 }); const h = async (t = !1) => {
      try {
        const n = await s.UIManagerModule.getBoundingClientRect(e.current, { relToContainer: t });c(n);
      } catch (e) {
        console.error('getBoxPosition error', e);
      }
    }; const u = kt(kt({}, Vt.box), o);return l.a.createElement(s.View, { style: Vt.full }, l.a.createElement(s.View, { style: Vt.demoContent }, l.a.createElement(s.View, { ref: e, style: u }, l.a.createElement(s.Text, { style: Vt.text, numberOfLines: 2 }, 'I am the box'))), l.a.createElement(s.View, { style: Vt.buttonContainer }, l.a.createElement(s.View, { onClick: () => {
      const e = Rt(0, t - 100); const o = Rt(0, n - 450); const i = Rt(80, 120);r({ left: e, top: o, width: i, height: i });
    }, style: Vt.button }, l.a.createElement(s.Text, { style: Vt.buttonText }, 'Move position')), l.a.createElement(s.View, { onClick: () => h(!1), style: Vt.button }, l.a.createElement(s.Text, { style: Vt.buttonText }, 'Measure in App Window')), l.a.createElement(s.View, { onClick: () => h(!0), style: Vt.button }, l.a.createElement(s.Text, { style: Vt.buttonText }, 'Measure in Container(RootView)'))), l.a.createElement(s.View, { style: Vt.row }, l.a.createElement(s.View, null, l.a.createElement(s.Text, null, 'Box style:'), l.a.createElement(s.Text, { style: Vt.black }, `Width: ${u.width}`), l.a.createElement(s.Text, { style: Vt.black }, `Height: ${u.height}`), l.a.createElement(s.Text, { style: Vt.black }, `Left: ${u.left}`), l.a.createElement(s.Text, { style: Vt.black }, `Top: ${u.top}`)), l.a.createElement(s.View, null, l.a.createElement(s.Text, null, 'getBoundingClientRect output:'), l.a.createElement(s.Text, { style: Vt.black }, `Width: ${i.width}`), l.a.createElement(s.Text, { style: Vt.black }, `Height: ${i.height}`), l.a.createElement(s.Text, { style: Vt.black }, `X: ${i.x}`), l.a.createElement(s.Text, { style: Vt.black }, `Y: ${i.y}`))));
  };const Dt = s.StyleSheet.create({ style_indicator_item: { width: 4, height: 4, marginLeft: 2.5, marginRight: 2.5, borderRadius: 2 }, style_indicator: { position: 'absolute', bottom: 6, left: 0, right: 0, marginLeft: 0, marginRight: 0, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' } });class Ot extends l.a.Component {
    constructor(e) {
      super(e), this.state = { current: e.current || 0 };
    }update(e) {
      const { current: t } = this.state;t !== e && this.setState({ current: e });
    }render() {
      const { count: e } = this.props; const { current: t } = this.state; const n = [];for (let o = 0;o < e;o += 1)t === o ? n.push(l.a.createElement(s.View, { style: [Dt.style_indicator_item, { backgroundColor: '#2424244c' }], key: o })) : n.push(l.a.createElement(s.View, { style: [Dt.style_indicator_item, { backgroundColor: '#ffffffaa' }], key: o }));return l.a.createElement(s.View, { style: Dt.style_indicator }, n);
    }
  } class Pt extends l.a.Component {
    constructor(e) {
      super(e), this.imgWidth = e.style.width, this.imgHeight = e.style.height, this.itemCount = e.images.length, this.duration = e.duration, this.touchStartOffset = 0, this.touchEndOffset = 0, this.scrollOffset = 0, this.interval = null, this.currentIndex = 0, this.width = 0, this.onLayout = this.onLayout.bind(this), this.onScroll = this.onScroll.bind(this), this.onScrollBeginDrag = this.onScrollBeginDrag.bind(this), this.onScrollEndDrag = this.onScrollEndDrag.bind(this);
    }componentDidMount() {
      this.duration = this.props.duration, this.doCreateTimer();
    }componentDidUpdate() {
      this.duration = this.props.duration, this.doCreateTimer();
    }componentWillUnmount() {
      this.doClearTimer();
    }onScroll(e) {
      const { images: t } = this.props;if (0 === this.width) return;const n = e.contentOffset.x;this.scrollOffset = n;const o = Math.round(n / this.width); const r = t ? l.a.Children.count(t) : 0;o < 0 || o >= r || (this.indicator && this.indicator.update(o), this.currentIndex = o);
    }onScrollBeginDrag() {
      this.touchStartOffset = this.scrollOffset, this.doClearTimer();
    }onScrollEndDrag() {
      this.doCreateTimer();
    }onLayout(e) {
      this.width = e.layout.width;
    }doSwitchPage(e) {
      this.scrollView.scrollTo({ x: this.imgWidth * e, y: 0, animated: !0 });
    }doCreateTimer() {
      this.doClearTimer(), this.duration <= 0 || (this.interval = setInterval(() => {
        this.doSwitchPage((this.currentIndex + 1) % this.itemCount);
      }, this.duration));
    }doClearTimer() {
      this.interval && clearInterval(this.interval), this.interval = null;
    }render() {
      const { images: e } = this.props; const t = [];for (let n = 0;n < this.itemCount;n += 1)t.push(l.a.createElement(s.Image, { source: { uri: e[n] }, style: { width: this.imgWidth, height: this.imgHeight }, key: n }));return l.a.createElement(s.View, null, l.a.createElement(s.ScrollView, { horizontal: !0, pagingEnabled: !0, style: { width: this.imgWidth, height: this.imgHeight }, onLayout: this.onLayout, onScroll: this.onScroll, onScrollBeginDrag: this.onScrollBeginDrag, onScrollEndDrag: this.onScrollEndDrag, ref: (e) => {
        this.scrollView = e;
      } }, t), l.a.createElement(Ot, { ref: (e) => {
        this.indicator = e;
      }, count: this.itemCount }));
    }
  }H()(Pt, 'defaultProps', { duration: 0, currentPage: 0, images: [] });const Lt = ['https://user-images.githubusercontent.com/12878546/148736627-bca54707-6939-45b3-84f7-74e6c2c09c88.jpg', 'https://user-images.githubusercontent.com/12878546/148736679-0521fdff-09f5-40e3-a36a-55c8f714be16.jpg', 'https://user-images.githubusercontent.com/12878546/148736685-a4c226ad-f64a-4fe0-b3df-ce0d8fcd7a01.jpg']; const jt = s.StyleSheet.create({ sliderStyle: { width: 400, height: 180 }, infoStyle: { height: 40, fontSize: 16, color: '#4c9afa', marginTop: 15 } });function Ft() {
    return l.a.createElement(s.ScrollView, null, l.a.createElement(s.Text, { style: jt.infoStyle }, 'Auto:'), l.a.createElement(Pt, { style: jt.sliderStyle, images: Lt, duration: 1e3 }), l.a.createElement(s.Text, { style: jt.infoStyle }, 'Manual:'), l.a.createElement(Pt, { style: jt.sliderStyle, images: Lt, duration: 0 }));
  } const zt = s.StyleSheet.create({ container: { height: 45, paddingLeft: 4, flexDirection: 'row', backgroundColor: '#ffffff', borderBottomColor: '#E5E5E5', borderBottomWidth: 1, borderStyle: 'solid' }, scroll: { flex: 1, height: 44 }, navItem: { width: 60, height: 44, paddingTop: 13 }, navItemText: { fontSize: 16, lineHeight: 17, textAlign: 'center', backgroundColor: '#ffffff' }, navItemTextNormal: { color: '#666666' }, navItemTextBlue: { color: '#2D73FF' } });class Bt extends l.a.Component {
    constructor(e) {
      super(e), this.state = { curIndex: 0, navList: ['头条', '推荐', '圈子', 'NBA', '中超', '英超', '西甲', 'CBA', '澳网', '电影', '本地', '娱乐', '小说', '生活', '直播', '游戏'] }, this.navScrollView = null, this.viewPager = null, this.onViewPagerChange = this.onViewPagerChange.bind(this), this.pressNavItem = this.pressNavItem.bind(this), this.scrollSV = this.scrollSV.bind(this);
    } static getPage(e, t) {
      switch (t % 3) {
        case 0:return qe(e);case 1:return Ye(e);case 2:return Qe(e);default:return null;
      }
    }componentDidUpdate() {
      this.scrollSV();
    }onViewPagerChange({ position: e }) {
      this.setState({ curIndex: e });
    }scrollSV() {
      if (this.navScrollView) {
        const { curIndex: e, navList: t } = this.state; const n = t.length; const o = de.getScreenWidth(); const r = o / 2 / 60; const i = 60 * n < o;let a;a = e <= r || i ? 0 : e > n - r ? 60 * n - o : 60 * e - 60 * r + 30, this.navScrollView.scrollTo({ x: a, y: 0, animated: !0 });
      }
    }pressNavItem(e) {
      this.setState({ curIndex: e }), this.viewPager && this.viewPager.setPage(e);
    }renderNav() {
      const { navList: e, curIndex: t } = this.state;return l.a.createElement(s.View, { style: zt.container }, l.a.createElement(s.ScrollView, { style: zt.scroll, horizontal: !0, showsHorizontalScrollIndicator: !1, ref: (e) => {
        this.navScrollView = e;
      } }, e.map((e, n) => l.a.createElement(s.View, { style: zt.navItem, key: `nav_${e}`, activeOpacity: .5, onClick: () => this.pressNavItem(n) }, l.a.createElement(s.Text, { style: [zt.navItemText, t === n ? zt.navItemTextBlue : zt.navItemTextNormal], numberOfLines: 1 }, e)))));
    }render() {
      const { navList: e } = this.state;return l.a.createElement(s.View, { style: { flex: 1, backgroundColor: '#ffffff' } }, this.renderNav(), l.a.createElement(s.ViewPager, { ref: (e) => {
        this.viewPager = e;
      }, style: { flex: 1 }, initialPage: 0, onPageSelected: this.onViewPagerChange }, e.map((e, t) => Bt.getPage(e, t))));
    }
  } const { width: Mt } = s.Dimensions.get('window'); const _t = s.StyleSheet.create({ setNativePropsDemo: { display: 'flex', alignItems: 'center', position: 'relative' }, nativeDemo1Drag: { height: 80, width: Mt, backgroundColor: '#4c9afa', position: 'relative', marginTop: 10 }, nativeDemo1Point: { height: 80, width: 80, color: '#4cccfa', backgroundColor: '#4cccfa', position: 'absolute', left: 0 }, nativeDemo2Drag: { height: 80, width: Mt, backgroundColor: '#4c9afa', position: 'relative', marginTop: 10 }, nativeDemo2Point: { height: 80, width: 80, color: '#4cccfa', backgroundColor: '#4cccfa', position: 'absolute', left: 0 }, splitter: { marginTop: 50 } });class Ht extends l.a.Component {
    constructor(e) {
      super(e), this.demon1Point = l.a.createRef(), this.demo1PointDom = null, this.state = { demo2Left: 0 }, this.isDemon1Layouted = !1, this.idDemon2Layouted = !1, this.onTouchDown1 = this.onTouchDown1.bind(this), this.onDemon1Layout = this.onDemon1Layout.bind(this), this.onTouchMove1 = this.onTouchMove1.bind(this), this.onTouchDown2 = this.onTouchDown2.bind(this), this.onTouchMove2 = this.onTouchMove2.bind(this);
    }componentDidMount() {}onDemon1Layout() {
      this.isDemon1Layouted || (this.isDemon1Layouted = !0, this.demo1PointDom = s.UIManagerModule.getElementFromFiberRef(this.demon1Point.current));
    }onTouchDown1(e) {
      const { page_x: t } = e; const n = t - 40;console.log('touchdown x', t, n, Mt), this.demo1PointDom && this.demo1PointDom.setNativeProps({ style: { left: n } });
    }onTouchMove1(e) {
      const { page_x: t } = e; const n = t - 40;console.log('touchmove x', t, n, Mt), this.demo1PointDom && this.demo1PointDom.setNativeProps({ style: { left: n } });
    }onTouchDown2(e) {
      const { page_x: t } = e; const n = t - 40;console.log('touchdown x', t, n, Mt), this.setState({ demo2Left: n });
    }onTouchMove2(e) {
      const { page_x: t } = e; const n = t - 40;console.log('touchmove x', t, n, Mt), this.setState({ demo2Left: n });
    }render() {
      const { demo2Left: e } = this.state;return l.a.createElement(s.View, { style: _t.setNativePropsDemo }, l.a.createElement(s.Text, null, 'setNativeProps实现拖动效果'), l.a.createElement(s.View, { style: _t.nativeDemo1Drag, onTouchDown: this.onTouchDown1, onTouchMove: this.onTouchMove1 }, l.a.createElement(s.View, { onLayout: this.onDemon1Layout, style: _t.nativeDemo1Point, ref: this.demon1Point })), l.a.createElement(s.View, { style: _t.splitter }), l.a.createElement(s.Text, null, '普通渲染实现拖动效果'), l.a.createElement(s.View, { style: _t.nativeDemo2Drag, onTouchDown: this.onTouchDown2, onTouchMove: this.onTouchMove2 }, l.a.createElement(s.View, { style: [_t.nativeDemo2Point, { left: e }] })));
    }
  } const Wt = s.StyleSheet.create({ dynamicImportDemo: { marginTop: 20, display: 'flex', flex: 1, alignItems: 'center', position: 'relative', flexDirection: 'column' } });class Nt extends l.a.Component {
    constructor(e) {
      super(e), this.state = { AsyncComponentFromLocal: null, AsyncComponentFromHttp: null }, this.onAsyncComponentLoad = this.onAsyncComponentLoad.bind(this);
    }onAsyncComponentLoad() {
      console.log('load async component'), n.e(1).then(n.bind(null, './src/externals/DyanmicImport/AsyncComponentLocal.jsx'))
        .then((e) => {
          this.setState({ AsyncComponentFromLocal: e.default || e });
        })
        .catch(e => console.error('import async local component error', e)), n.e(0).then(n.bind(null, './src/externals/DyanmicImport/AsyncComponentHttp.jsx'))
        .then((e) => {
          this.setState({ AsyncComponentFromHttp: e.default || e });
        })
        .catch(e => console.error('import async remote component error', e));
    }render() {
      const { AsyncComponentFromLocal: e, AsyncComponentFromHttp: t } = this.state;return l.a.createElement(s.View, { style: Wt.dynamicImportDemo }, l.a.createElement(s.View, { style: { width: 130, height: 40, textAlign: 'center', backgroundColor: '#4c9afa', borderRadius: 5 }, onTouchDown: this.onAsyncComponentLoad }, l.a.createElement(s.Text, { style: { height: 40, lineHeight: 40, textAlign: 'center' } }, '点我异步加载')), l.a.createElement(s.View, { style: { marginTop: 20 } }, e ? l.a.createElement(e, null) : null, t ? l.a.createElement(t, null) : null));
    }
  } const Kt = s.StyleSheet.create({ LocalizationDemo: { marginTop: 20, display: 'flex', flex: 1, alignItems: 'center', position: 'relative', flexDirection: 'column' } });class Ut extends l.a.Component {
    render() {
      const { country: e, language: t, direction: n } = s.Platform.Localization || {};return l.a.createElement(s.View, { style: Kt.LocalizationDemo }, l.a.createElement(s.View, { style: { height: 40, textAlign: 'center', backgroundColor: '#4c9afa', borderRadius: 5 }, onTouchDown: this.onAsyncComponentLoad }, l.a.createElement(s.Text, { style: { color: 'white', marginHorizontal: 30, height: 40, lineHeight: 40, textAlign: 'center' } }, `国际化相关信息：国家 ${e} | 语言 ${t} | 方向 ${1 === n ? 'RTL' : 'LTR'}`)));
    }
  } const Gt = () => getTurboModule('demoTurbo').getTurboConfig(); const qt = s.StyleSheet.create({ container: { flex: 1 }, cellContentView: { flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#ccc', marginBottom: 1 }, funcInfo: { justifyContent: 'center', paddingLeft: 15, paddingRight: 15 }, actionButton: { backgroundColor: '#4c9afa', color: '#fff', height: 44, lineHeight: 44, textAlign: 'center', width: 80, borderRadius: 6 }, resultView: { backgroundColor: 'darkseagreen', minHeight: 150, padding: 15 } });class Qt extends l.a.Component {
    constructor(e) {
      super(e), this.state = { config: null, result: '', funList: ['getString', 'getNum', 'getBoolean', 'getMap', 'getObject', 'getArray', 'nativeWithPromise', 'getTurboConfig', 'printTurboConfig', 'getInfo', 'setInfo'] }, this.onTurboFunc = this.onTurboFunc.bind(this), this.getRenderRow = this.getRenderRow.bind(this), this.getRowKey = this.getRowKey.bind(this);
    } async onTurboFunc(e) {
      let t;if ('nativeWithPromise' === e)t = await(async e => turboPromise(getTurboModule('demoTurbo').nativeWithPromise)(e))('aaa');else if ('getTurboConfig' === e) this.config = Gt(), t = '获取到config对象';else if ('printTurboConfig' === e)n = this.config || Gt(), t = getTurboModule('demoTurbo').printTurboConfig(n);else if ('getInfo' === e)t = (this.config || Gt()).getInfo();else if ('setInfo' === e)(this.config || Gt()).setInfo('Hello World'), t = '设置config信息成功';else {
        t = { getString: () => {
          return e = '123', getTurboModule('demoTurbo').getString(e);let e;
        }, getNum: () => {
          return e = 1024, getTurboModule('demoTurbo').getNum(e);let e;
        }, getBoolean: () => {
          return e = !0, getTurboModule('demoTurbo').getBoolean(e);let e;
        }, getMap: () => {
          return e = new Map([['a', '1'], ['b', 2]]), getTurboModule('demoTurbo').getMap(e);let e;
        }, getObject: () => {
          return e = { c: '3', d: '4' }, getTurboModule('demoTurbo').getObject(e);let e;
        }, getArray: () => {
          return e = ['a', 'b', 'c'], getTurboModule('demoTurbo').getArray(e);let e;
        } }[e]();
      } let n;this.setState({ result: t });
    }renderResultView() {
      return l.a.createElement(s.View, { style: qt.resultView }, l.a.createElement(s.Text, { style: { backgroundColor: 'darkseagreen' } }, `${this.state.result}`));
    }getRenderRow(e) {
      const { funList: t } = this.state;return l.a.createElement(s.View, { style: qt.cellContentView }, l.a.createElement(s.View, { style: qt.funcInfo }, l.a.createElement(s.Text, { numberofLines: 0 }, '函数名：', t[e])), l.a.createElement(s.Text, { style: qt.actionButton, onClick: () => this.onTurboFunc(t[e]) }, '执行'));
    }getRowKey(e) {
      const { funList: t } = this.state;return t[e];
    }render() {
      const { funList: e } = this.state;return l.a.createElement(s.View, { style: qt.container }, this.renderResultView(), l.a.createElement(s.ListView, { numberOfRows: e.length, renderRow: this.getRenderRow, getRowKey: this.getRowKey, style: { flex: 1 } }));
    }
  } const Yt = s.StyleSheet.create({ demoWrap: { horizontal: !1, flex: 1, flexDirection: 'column' }, banner: { backgroundImage: 'https://user-images.githubusercontent.com/12878546/148736102-7cd9525b-aceb-41c6-a905-d3156219ef16.png', backgroundSize: 'cover', height: 150, justifyContent: 'flex-end' }, bannerText: { color: 'coral', textAlign: 'center' }, tabs: { flexDirection: 'row', height: 30 }, tabText: { flex: 1, textAlign: 'center', backgroundColor: '#eee', color: '#999' }, tabSelected: { flex: 1, textAlign: 'center', color: '#4c9afa' }, itemEven: { height: 40, backgroundColor: 'gray' }, itemEvenText: { lineHeight: 40, color: 'white', fontSize: 20, textAlign: 'center' }, itemOdd: { height: 40 }, itemOddText: { lineHeight: 40, fontSize: 20, textAlign: 'center' } });class Xt extends l.a.Component {
    constructor(e) {
      super(e), this.state = { layoutHeight: 0, currentSlide: 0 };
    }selectPage(e) {
      let t;this.setState({ currentSlide: e }), null === (t = this.viewPager) || void 0 === t || t.setPage(e);
    }render() {
      const { layoutHeight: e, currentSlide: t } = this.state;return l.a.createElement(s.ScrollView, { style: Yt.demoWrap, scrollEventThrottle: 50, onLayout: e => this.setState({ layoutHeight: e.layout.height }) }, l.a.createElement(s.View, { style: Yt.banner }), l.a.createElement(s.View, { style: Yt.tabs }, l.a.createElement(s.Text, { key: 'tab1', style: 0 === t ? Yt.tabSelected : Yt.tabText, onClick: () => this.selectPage(0) }, 'tab 1 (parent first)'), l.a.createElement(s.Text, { key: 'tab2', style: 1 === t ? Yt.tabSelected : Yt.tabText, onClick: () => this.selectPage(1) }, 'tab 2 (self first)')), l.a.createElement(s.ViewPager, { ref: e => this.viewPager = e, initialPage: t, style: { height: e - 80 }, onPageSelected: e => this.setState({ currentSlide: e.position }) }, l.a.createElement(s.ListView, { nestedScrollTopPriority: 'parent', key: 'slide1', numberOfRows: 30, getRowKey: e => `item${e}`, initialListSize: 30, renderRow: e => l.a.createElement(s.Text, { style: e % 2 ? Yt.itemEvenText : Yt.itemOddText }, 'Item ', e), getRowStyle: e => (e % 2 ? Yt.itemEven : Yt.itemOdd) }), l.a.createElement(s.ListView, { nestedScrollTopPriority: 'self', key: 'slide2', numberOfRows: 30, getRowKey: e => `item${e}`, initialListSize: 30, renderRow: e => l.a.createElement(s.Text, { style: e % 2 ? Yt.itemEvenText : Yt.itemOddText }, 'Item ', e), getRowStyle: e => (e % 2 ? Yt.itemEven : Yt.itemOdd) })));
    }
  } function Jt(e, t) {
    const n = Object.keys(e);if (Object.getOwnPropertySymbols) {
      let o = Object.getOwnPropertySymbols(e);t && (o = o.filter((t => Object.getOwnPropertyDescriptor(e, t).enumerable))), n.push.apply(n, o);
    } return n;
  } function Zt(e) {
    for (let t = 1;t < arguments.length;t++) {
      var n = null != arguments[t] ? arguments[t] : {};t % 2 ? Jt(Object(n), !0).forEach(((t) => {
        H()(e, t, n[t]);
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Jt(Object(n)).forEach(((t) => {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      }));
    } return e;
  } const $t = Zt(Zt(Zt({}, o), r), i);const en = [{ path: '/View', name: 'View 组件', component: $t.View, meta: { style: 1 } }, { path: '/BoxShadow', name: 'BoxShadow 范例', component: $t.BoxShadow, meta: { style: 1 } }, { path: '/Text', name: 'Text 组件', component: $t.Text, meta: { style: 1 } }, { path: '/Image', name: 'Image 组件', component: $t.Image, meta: { style: 1 } }, { path: '/ListView', name: 'ListView 组件', component: $t.ListView, meta: { style: 1 } }, { path: '/WaterfallView', name: 'WaterfallView 组件', component: $t.WaterfallView, meta: { style: 1 } }, { path: '/PullHeader', name: 'PullHeader/Footer组件', component: $t.PullHeaderFooter, meta: { style: 1 } }, { path: '/RefreshWrapper', name: 'RefreshWrapper 组件', component: $t.RefreshWrapper, meta: { style: 1 } }, { path: '/ScrollView', name: 'ScrollView 组件', component: $t.ScrollView, meta: { style: 1 } }, { path: '/ViewPager', name: 'ViewPager 组件', component: $t.ViewPager, meta: { style: 1 } }, { path: '/TextInput', name: 'TextInput 组件', component: $t.TextInput, meta: { style: 1 } }, { path: '/Modal', name: 'Modal 组件', component: $t.Modal, meta: { style: 1 } }, { path: '/Slider', name: 'Slider 组件', component: $t.Slider, meta: { style: 1 } }, { path: '/TabHost', name: 'TabHost 组件', component: $t.TabHost, meta: { style: 1 } }, { path: '/NestedScroll', name: 'Nested Scroll 示例', component: $t.NestedScroll, meta: { style: 1 } }, { path: '/WebView', name: 'WebView 组件', component: $t.WebView, meta: { style: 1 } }, { path: '/RippleViewAndroid', name: 'RippleViewAndroid 组件', component: $t.RippleViewAndroid, meta: { style: 1 } }, { path: '/WebSocket', name: 'WebSocket 模块', component: $t.WebSocket, meta: { style: 2 } }, { path: '/Animation', name: 'Animation 组件', component: $t.Animation, meta: { style: 2 } }, { path: '/NetInfo', name: 'Network 能力', component: $t.NetInfo, meta: { style: 2 } }, { path: '/UIManagerModule', name: 'UIManagerModule 模块', component: $t.UIManagerModule, meta: { style: 2 } }, { path: '/SetNativeProps', name: 'setNativeProps能力', component: $t.SetNativeProps, meta: { style: 2 } }, { path: '/DynamicImport', name: 'DynamicImport 能力', component: $t.DynamicImport, meta: { style: 2 } }, { path: '/Localization', name: 'Localization 信息', component: $t.Localization, meta: { style: 2 } }, { path: '/Turbo', name: 'Turbo', component: $t.Turbo, meta: { style: 2 } }];const tn = '#4c9afa'; const nn = '#fff'; const on = s.StyleSheet.create({ container: { height: 56, backgroundColor: tn, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }, backIcon: { width: 24, height: 24 }, headerButton: { height: 64, paddingHorizontal: 24, alignItems: 'center', justifyContent: 'center' }, title: { fontSize: 20, color: nn, lineHeight: 24 } });const rn = M(({ history: e, route: t }) => (0 === e.index ? l.a.createElement(s.View, { style: [on.container] }, l.a.createElement(s.View, { style: { backgroundColor: on.title.backgroundColor, marginLeft: 12 } }, l.a.createElement(s.Text, { numberOfLines: 1, style: [on.title, { fontWeight: 'bold' }] }, t.name)), l.a.createElement(s.View, { style: on.headerButton }, l.a.createElement(s.Text, { numberOfLines: 1, style: on.title }, 'ver: ', 'unspecified' !== s.default.version ? `${s.default.version}` : 'master'))) : l.a.createElement(s.View, { style: [on.container] }, l.a.createElement(s.View, { onClick: () => e.goBack(), style: [on.headerButton, 'ios' === s.Platform.OS ? null : { marginLeft: 20 }] }, l.a.createElement(s.Image, { style: on.backIcon, source: { uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAIPUlEQVR4Xu2dT8xeQxTGn1O0GiWEaEJCWJCwQLBo/WnRSqhEJUQT0W60G+1Ku1SS2mlXaqM2KqJSSUlajVb9TViwYEHCQmlCQghRgqKPTHLK7Zfvfd97Zt5535l7z91+58zce57fnfe7d+Y+I/Cj1xWQXl+9XzwcgJ5D4AA4AD2vQM8v30cAB6DnFZjA5ZO8VUTenEBX5i58BDCXzJZA8ikA6wFsFpEttuz80Q5AxhqTfAbA2kYXW0VkU8YuzU07AOaStUsg+RyA1bNEFwWBA9BOz9ZRJOcAeAHAqiFJ20VkQ+tGMwY6AGMsLslTAOwGcE+LZneIyLoWcVlDHIAxlVfFfxXACkOTO0VkjSF+7KEOwJhKSnIfgDuNzf0M4BoR+cqYN7ZwByCxlCTnAtgLYLmxqR8ALBGRz4x5Yw13ABLKSfJ0APsBLDU28x2Am0XkC2Pe2MMdgMiSkjwDwAEAi41NBPEXichhY16WcAcgoqwkzwRwCMD1xvRvANxUivjh3B0Ao4IkzwbwFoCrjalf67B/xJiXNdwBMJSX5LkA3gFwpSEthH6pd/63xrzs4Q5AyxKTPB/AuwAub5lyIuxzvfO/N+ZNJNwBaFFmkhcAeA/ApS3CmyGf6qPej8a8iYU7ACNKTfIivfMvNqryMYBbRCS87Cn2cACGSKPivw/gQqOCQfzwnH/UmDfxcAdgQMlJXqLDvlX8DwHcVoP4/hg4WPzLdNhfaLwlw2hxu4j8ZsybWriPADNKT/IKfdQ7z6jK2wDuEJE/jHlTDXcAGuUneZW+5DnHqMpBAHeJyDFj3tTDHQCVgOR1+nr3LKMqYRp4pYj8bcwrItwBAEBykU7sLDCqsgfAfSLyjzGvmPDeA0ByiU7pzjeqEsS/V0SOG/OKCu81ACSX6WKOeUZVdgF4oHbxe/0YSDIs33oFwGlG8ae+js94vkPDezkCkFypq3dPNRaziJW8xnN2AJoVIHm/rtsPS7gtRzFr+S0nPSq2VyOAiv9ixEKYor7mGSWq5e+9AYDkgwDC51rWa94iIpstRa0p1lqMmq7tv3Ml+RCA8KGm9Xo3isi2Ki+65UlbC9Ky2XLCSD4MYHvEGXVe/M4/BpJ8BMDWCPHXi8jTEXnVpXR2BCD5OIDHjIoQwDoRedaYV214JwEg+SSAjUZVgvhrROR5Y17V4Z0DoGHJYhEmTOaEV7svWZK6ENspAGaxZGmjUZjGDTN64bVw747OADDEkmWYqEH8u0Xktd4prxdcPQAtLVlm0/cvXcjRW/GrfwxU8V9uacnShOBPXcL1Rl/v/BPXXe0IYPTjaer8uy7eDN/49f6oEgCSYRo3/NNm8eMJYv+qy7Y/6L3ytf4PkGDJ8ot+sPGRi/9/BaoaARIsWX7S7/Q+cfFPrkA1ACRYsgTxb5y2GVOp4FUBQIIlSxFOXKWKX8VjYIIlSzFOXA5AZAUSLFmKM2OKLEH2tGJ/AhIsWYo0Y8quZGQHRQKQYMlSrBlTpD7Z04oDIMGSpWgzpuxKRnZQFACJ4t8gIsWaMUXqkz2tGAASLFmKd+LKrmJCB0UAQDLWkqUKJ64EfbKnTh2ABEuWqsyYsisZ2cFUAUiwZKnOjClSn+xpUwMgwZKlSjOm7EpGdlAjAOHuDz58VblxReqTPW1qAIQr85+A7PqO7GCqACgEsb58/k/gSHlHB0wdAIXAHwNHa5UloggAFIJYb15/EZSARjEAKASx1uw+DxAJQVEAKASxmzP4TGAEBMUBoBCE7VnC0m3rDh1hLcBiESlub54IbSaSUiQADQhi9ujxBSEGdIoFQCGI3aXLl4S1hKBoABSC2H36fFFoCwiKB0AhiN2p05eFj4CgCgAUgti9ev2roCEQVAOAQhC7W3f4LjDs4uWfhs2AoSoAFIK5avG+vMVPXDPEPw6dpWDVAaAQ+OfhRvoHhVcJgEIQ3L53R7iDuEFEg4ZqAVAI5qj1+yrjDeEWMVqwqgE4ITrJYAFvhcBNoiLcs4032uTCE2zieusRGNTpxAjQGAmCJfxaI3bBJTTs/uVGkcbCFRnuVrE2WTo1AjRGAjeLbslBJwHQJ4RgFR8s4y2H28VbqlV6rG8YMVqhzo4AjZ8D3zJmCAedB0B/DnzTqAEQ9AIAhSB227gnROTR0YNpnRG9AUAhCLuG+saRXZkLiLnnfOvYk6vWqxGg8Y+hbx7dpcmgyJHAt4/v2lyAFQSSy3R10Txj7i7dZey4Ma+48F7+BDRVILkEwH4A843q7NFJpKoh6D0A+nSwCMABAAsiIAjTyWFGscrDAVDZEjyL9unuY2ELuuoOB6AhWYJlzUHdhexYbQQ4ADMUS/AtrNK9zAGY5ZZNcC6tzr/QARgwZqt3cfAoWGgc1qsyr3IAhqibYGAdPIzDp2hHjfBMPNwBGFHyBAv7KoysHYAW91zCDibFO5g5AC0A0JdFwbcoxrKmaAczB6AlAApBrGVNsQ5mDoABAIUg1rKmSPMqB8AIgEIQa1kTzKuCjd2RiG6zpDgAkWVN2Mu4KAczByASAB0JYi1rinEwcwASAFAIgmXN6wCWGpsqwsHMATCqNiic5F4AK4zNBQeza0XksDFvbOEOwJhKSTLGt2iniKwZ0ylENeMARJVt9iSSFt+iHSKybozdRzXlAESVbXASyTa+RdtFZMOYu45qzgGIKtvopCGWNVtFZNPoFiYT4QBkrDPJmZY1W0Rkc8YuzU07AOaS2RIaljUbRWSbLTt/tAOQv8Zhf8Sw0eWhCXRl7sIBMJesWwkOQLf0NF+NA2AuWbcSHIBu6Wm+GgfAXLJuJTgA3dLTfDX/AlSTmJ/JwwOoAAAAAElFTkSuQmCC' } })), l.a.createElement(s.View, { style: on.headerButton }, l.a.createElement(s.Text, { numberOfLines: 1, style: on.title }, t.name)))));const an = '#4c9afa'; const ln = '#f44837'; const sn = s.StyleSheet.create({ rowContainer: { alignItems: 'center' }, buttonView: { borderColor: an, borderWidth: 2, borderRadius: 8, justifyContent: 'center', alignItems: 'center', width: 250, height: 50, marginTop: 30, borderStyle: 'solid' }, buttonText: { fontSize: 20, color: an, textAlign: 'center', textAlignVertical: 'center' } });class cn extends a.Component {
    constructor(e) {
      super(e), this.state = { pressItem: '', dataSource: [...en] }, this.renderRow = this.renderRow.bind(this), this.getRowType = this.getRowType.bind(this), this.getRowKey = this.getRowKey.bind(this), this.clickTo = this.clickTo.bind(this);
    }componentDidMount() {
      const { history: e } = this.props;'android' === s.Platform.OS && s.BackAndroid.addListener(() => (console.log('BackAndroid'), 0 !== e.index && (e.goBack(), !0)));
    }getRowType(e) {
      const { dataSource: t } = this.state;return t[e].meta.style;
    }getRowKey(e) {
      const { dataSource: t } = this.state;return t[e].path || `${e}`;
    }feedback(e) {
      const t = e || '';this.setState({ pressItem: t });
    }clickTo(e) {
      const { history: t } = this.props;t.push(e);
    }renderRow(e) {
      const { dataSource: t, pressItem: n } = this.state; const o = t[e]; const { style: r } = o.meta;return l.a.createElement(s.View, { style: sn.rowContainer }, l.a.createElement(s.View, { onPressIn: () => this.feedback(o.path), onPressOut: () => this.feedback(), onClick: () => this.clickTo(o.path), style: [sn.buttonView, { borderColor: 1 === r ? an : ln, opacity: n === o.path ? .5 : 1 }] }, l.a.createElement(s.Text, { style: [sn.buttonText, { color: 1 === r ? an : ln }] }, o.name)));
    }render() {
      const { dataSource: e } = this.state;return l.a.createElement(s.ListView, { style: { flex: 1, backgroundColor: '#ffffff' }, numberOfRows: e.length, renderRow: this.renderRow, getRowType: this.getRowType, getRowKey: this.getRowKey });
    }
  } const hn = [{ path: '/Gallery', name: 'Hippy React', component: M(cn), meta: { style: 1 } }, ...en];const un = () => l.a.createElement(s.View, { style: { flex: 1, backgroundColor: '#fff' } }, l.a.createElement(R, { initialEntries: ['/Gallery'] }, hn.map((e) => {
    const t = e.component;return l.a.createElement(P, { key: e.path, exact: !0, path: `${e.path}` }, l.a.createElement(s.View, { style: { flex: 1, backgroundColor: '#fff' } }, l.a.createElement(rn, { route: e }), l.a.createElement(t, { meta: e.meta || {} })));
  })));const dn = s.StyleSheet.create({ stepText: { color: '#242424', marginBottom: 12 }, container: { flex: 1, backgroundColor: '#fff', justifyContent: 'center', flexDirection: 'column', padding: 20 }, button: { width: 140, height: 40, borderRadius: 8, backgroundColor: '#4c9afa', alignItems: 'center', justifyContent: 'center' }, buttonText: { fontSize: 16, textAlign: 'center', lineHeight: 40, color: '#fff' }, buttonContainer: { alignItems: 'center', marginTop: 12, justifyContent: 'center' }, inputStyle: { width: 350, marginTop: 30, marginBottom: 10, placeholderTextColor: '#aaaaaa', fontSize: 16, color: '#242424', height: 80, lineHeight: 30, borderColor: '#eee', borderWidth: 1, borderStyle: 'solid' } });function mn({ instanceId: e }) {
    const t = Object(a.useRef)(null); const n = () => {
      t.current.blur();
    };return l.a.createElement(s.ScrollView, { style: dn.container, onClick: n }, ['安装远程调试依赖： npm i -D @hippy/debug-server-next@latest', '修改 webpack 配置，添加远程调试地址', '运行 npm run hippy:dev 开始编译，编译结束后打印出 bundleUrl 及调试首页地址', '粘贴 bundleUrl 并点击开始按钮', '访问调试首页开始远程调试，远程调试支持热更新（HMR）'].map((e, t) => l.a.createElement(s.Text, { style: dn.stepText, key: `steps-${t}` }, t + 1, '. ', e)), l.a.createElement(s.TextInput, { ref: t, style: dn.inputStyle, placeholder: 'please input bundleUrl', multiline: !0, numberOfLines: 4, defaultValue: 'http://127.0.0.1:38989/index.bundle?debugUrl=ws%3A%2F%2F127.0.0.1%3A38989%2Fdebugger-proxy' }), l.a.createElement(s.View, { style: dn.buttonContainer }, l.a.createElement(s.View, { style: dn.button, onClick: () => {
      n(), t.current.getValue().then((t) => {
        t && Object(s.callNative)('TestModule', 'remoteDebug', e, t);
      });
    } }, l.a.createElement(s.Text, { style: dn.buttonText, numberOfLines: 1 }, '开始'))));
  } const gn = s.StyleSheet.create({ container: { flex: 1 } });class fn extends a.Component {
    constructor(e) {
      super(e);const { width: t, height: n } = s.Dimensions.get('screen');this.state = { isVertical: t < n }, this.onLayout = this.onLayout.bind(this);
    }renderIPhoneStatusBar(e) {
      const { isVertical: t } = this.state;return 'ios' === s.Platform.OS && t ? l.a.createElement(s.View, { style: [{ backgroundColor: e || '#fff' }, { height: s.Dimensions.get('screen').statusBarHeight }] }) : null;
    }onLayout(e) {
      const { width: t, height: n } = e.layout;this.setState({ isVertical: t < n });
    }render() {
      const { children: e, statusBarColor: t } = this.props; const { isVertical: n } = this.state;let o = null;return n || (o = { paddingHorizontal: de.isiPhoneX() ? 32 : 0 }), l.a.createElement(s.View, { style: [gn.container, o], onLayout: this.onLayout }, this.renderIPhoneStatusBar(t), l.a.createElement(s.View, { style: { flex: 1 } }, e));
    }
  } const yn = s.StyleSheet.create({ buttonContainer: { height: 48, backgroundColor: 'white', flexDirection: 'row' }, button: { height: 48, flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', borderTopWidth: 1, borderStyle: 'solid', borderTopColor: '#eee' }, buttonText: { color: '#242424', fontSize: 16 }, blankPage: { flex: 1, backgroundColor: 'white' } });class pn extends a.Component {
    constructor(e) {
      super(e), this.state = { pageIndex: 0 };
    }componentDidMount() {
      s.ConsoleModule.log('~~~~~~~~~~~~~~~~~ This is a log from ConsoleModule ~~~~~~~~~~~~~~~~~');
    }render() {
      const { pageIndex: e } = this.state; const { __instanceId__: t } = this.props;return l.a.createElement(fn, { statusBarColor: '#4c9afa' }, (() => {
        switch (e) {
          case 0:return l.a.createElement(un, null);case 1:return l.a.createElement(mn, { instanceId: t });default:return l.a.createElement(s.View, { style: yn.blankPage });
        }
      })(), l.a.createElement(s.View, { style: yn.buttonContainer }, (() => ['API', '调试'].map((t, n) => l.a.createElement(s.View, { key: `button_${n}`, style: yn.button, onClick: () => this.setState({ pageIndex: n }) }, l.a.createElement(s.Text, { style: [yn.buttonText, n === e ? { color: '#4c9afa' } : null], numberOfLines: 1 }, t))))()));
    }
  }
}, './src/main.js'(e, t, n) {
  'use strict';n.r(t), function (e) {
    const t = n('../../packages/hippy-react/dist/index.js'); const o = n('./src/app.jsx');e.Hippy.on('uncaughtException', (e) => {
      console.error('uncaughtException error', e.stack, e.message);
    }), e.Hippy.on('unhandledRejection', (e) => {
      console.error('unhandledRejection reason', e);
    }), new t.Hippy({ appName: 'Demo', entryPage: o.a, bubbles: !1, silent: !1 }).start();
  }.call(this, n('./node_modules/webpack/buildin/global.js'));
}, 0(e, t, n) {
  n('./node_modules/regenerator-runtime/runtime.js'), e.exports = n('./src/main.js');
}, 'dll-reference hippyReactBase'(e, t) {
  e.exports = hippyReactBase;
} }));

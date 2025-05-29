import te, { useRef as ne, useEffect as ae } from "react";
var _ = { exports: {} }, b = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $;
function oe() {
  if ($) return b;
  $ = 1;
  var n = Symbol.for("react.transitional.element"), o = Symbol.for("react.fragment");
  function u(d, s, i) {
    var m = null;
    if (i !== void 0 && (m = "" + i), s.key !== void 0 && (m = "" + s.key), "key" in s) {
      i = {};
      for (var p in s)
        p !== "key" && (i[p] = s[p]);
    } else i = s;
    return s = i.ref, {
      $$typeof: n,
      type: d,
      key: m,
      ref: s !== void 0 ? s : null,
      props: i
    };
  }
  return b.Fragment = o, b.jsx = u, b.jsxs = u, b;
}
var R = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var D;
function se() {
  return D || (D = 1, process.env.NODE_ENV !== "production" && function() {
    function n(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === K ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case T:
          return "Fragment";
        case J:
          return "Profiler";
        case z:
          return "StrictMode";
        case B:
          return "Suspense";
        case H:
          return "SuspenseList";
        case Q:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case q:
            return "Portal";
          case V:
            return (e.displayName || "Context") + ".Provider";
          case G:
            return (e._context.displayName || "Context") + ".Consumer";
          case X:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case Z:
            return r = e.displayName || null, r !== null ? r : n(e.type) || "Memo";
          case S:
            r = e._payload, e = e._init;
            try {
              return n(e(r));
            } catch {
            }
        }
      return null;
    }
    function o(e) {
      return "" + e;
    }
    function u(e) {
      try {
        o(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var t = r.error, l = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          l
        ), o(e);
      }
    }
    function d(e) {
      if (e === T) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === S)
        return "<...>";
      try {
        var r = n(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var e = j.A;
      return e === null ? null : e.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function m(e) {
      if (P.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function p(e, r) {
      function t() {
        N || (N = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      t.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: t,
        configurable: !0
      });
    }
    function W() {
      var e = n(this.type);
      return C[e] || (C[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function U(e, r, t, l, E, f, k, h) {
      return t = f.ref, e = {
        $$typeof: A,
        type: e,
        key: r,
        props: f,
        _owner: E
      }, (t !== void 0 ? t : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: W
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: k
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: h
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function O(e, r, t, l, E, f, k, h) {
      var c = r.children;
      if (c !== void 0)
        if (l)
          if (ee(c)) {
            for (l = 0; l < c.length; l++)
              w(c[l]);
            Object.freeze && Object.freeze(c);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else w(c);
      if (P.call(r, "key")) {
        c = n(e);
        var v = Object.keys(r).filter(function(re) {
          return re !== "key";
        });
        l = 0 < v.length ? "{key: someKey, " + v.join(": ..., ") + ": ...}" : "{key: someKey}", F[c + l] || (v = 0 < v.length ? "{" + v.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          l,
          c,
          v,
          c
        ), F[c + l] = !0);
      }
      if (c = null, t !== void 0 && (u(t), c = "" + t), m(r) && (u(r.key), c = "" + r.key), "key" in r) {
        t = {};
        for (var y in r)
          y !== "key" && (t[y] = r[y]);
      } else t = r;
      return c && p(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), U(
        e,
        c,
        f,
        E,
        s(),
        t,
        k,
        h
      );
    }
    function w(e) {
      typeof e == "object" && e !== null && e.$$typeof === A && e._store && (e._store.validated = 1);
    }
    var x = te, A = Symbol.for("react.transitional.element"), q = Symbol.for("react.portal"), T = Symbol.for("react.fragment"), z = Symbol.for("react.strict_mode"), J = Symbol.for("react.profiler"), G = Symbol.for("react.consumer"), V = Symbol.for("react.context"), X = Symbol.for("react.forward_ref"), B = Symbol.for("react.suspense"), H = Symbol.for("react.suspense_list"), Z = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), Q = Symbol.for("react.activity"), K = Symbol.for("react.client.reference"), j = x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, P = Object.prototype.hasOwnProperty, ee = Array.isArray, g = console.createTask ? console.createTask : function() {
      return null;
    };
    x = {
      "react-stack-bottom-frame": function(e) {
        return e();
      }
    };
    var N, C = {}, Y = x["react-stack-bottom-frame"].bind(
      x,
      i
    )(), I = g(d(i)), F = {};
    R.Fragment = T, R.jsx = function(e, r, t, l, E) {
      var f = 1e4 > j.recentlyCreatedOwnerStacks++;
      return O(
        e,
        r,
        t,
        !1,
        l,
        E,
        f ? Error("react-stack-top-frame") : Y,
        f ? g(d(e)) : I
      );
    }, R.jsxs = function(e, r, t, l, E) {
      var f = 1e4 > j.recentlyCreatedOwnerStacks++;
      return O(
        e,
        r,
        t,
        !0,
        l,
        E,
        f ? Error("react-stack-top-frame") : Y,
        f ? g(d(e)) : I
      );
    };
  }()), R;
}
var L;
function le() {
  return L || (L = 1, process.env.NODE_ENV === "production" ? _.exports = oe() : _.exports = se()), _.exports;
}
var a = le();
const ce = ({ label: n, onClick: o }) => /* @__PURE__ */ a.jsx("button", { onClick: o, style: {
  padding: "0.5rem 1rem",
  cursor: "pointer",
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "4px"
}, children: n }), M = ({ buttons: n }) => /* @__PURE__ */ a.jsx("div", { style: { display: "flex", gap: "0.5rem" }, children: n == null ? void 0 : n.map((o, u) => /* @__PURE__ */ a.jsx(ce, { label: o.label, onClick: o.onClick }, u)) }), ie = ({ icon: n, title: o, buttons: u }) => /* @__PURE__ */ a.jsxs("div", { style: {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
}, children: [
  /* @__PURE__ */ a.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "1rem" }, children: [
    /* @__PURE__ */ a.jsx("div", { children: n }),
    /* @__PURE__ */ a.jsx("h2", { children: o })
  ] }),
  /* @__PURE__ */ a.jsx(M, { buttons: u })
] }), ue = ({ children: n }) => /* @__PURE__ */ a.jsx("div", { style: {
  minHeight: "120px",
  border: "1px dashed #ccc",
  padding: "1rem"
}, children: n }), fe = ({ buttons: n, info: o }) => /* @__PURE__ */ a.jsxs("div", { style: {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: "1rem"
}, children: [
  o && /* @__PURE__ */ a.jsx("div", { style: {
    flex: 1,
    border: "1px dashed #aaa",
    padding: "0.5rem",
    fontSize: "0.9rem"
  }, children: o }),
  /* @__PURE__ */ a.jsx(M, { buttons: n })
] }), me = ({
  headerProps: n,
  contentProps: o,
  footerProps: u,
  closeOnOutsideClick: d = !0,
  onClose: s
}) => {
  const i = ne(null);
  return ae(() => {
    const m = (p) => {
      d && i.current && !i.current.contains(p.target) && (s == null || s());
    };
    return document.addEventListener("mousedown", m), () => document.removeEventListener("mousedown", m);
  }, [d, s]), /* @__PURE__ */ a.jsx("div", { className: "dialog-overlay", children: /* @__PURE__ */ a.jsxs("div", { className: "dialog-container", ref: i, children: [
    /* @__PURE__ */ a.jsx(ie, { ...n }),
    /* @__PURE__ */ a.jsx(ue, { children: o }),
    /* @__PURE__ */ a.jsx(fe, { ...u })
  ] }) });
};
export {
  me as default
};

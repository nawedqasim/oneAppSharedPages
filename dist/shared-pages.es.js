import ne, { useState as p } from "react";
import { useNavigate as ae } from "react-router-dom";
var j = { exports: {} }, h = {};
var M;
function se() {
  if (M) return h;
  M = 1;
  var a = /* @__PURE__ */ Symbol.for("react.transitional.element"), u = /* @__PURE__ */ Symbol.for("react.fragment");
  function d(_, i, l) {
    var m = null;
    if (l !== void 0 && (m = "" + l), i.key !== void 0 && (m = "" + i.key), "key" in i) {
      l = {};
      for (var f in i)
        f !== "key" && (l[f] = i[f]);
    } else l = i;
    return i = l.ref, {
      $$typeof: a,
      type: _,
      key: m,
      ref: i !== void 0 ? i : null,
      props: l
    };
  }
  return h.Fragment = u, h.jsx = d, h.jsxs = d, h;
}
var b = {};
var L;
function oe() {
  return L || (L = 1, process.env.NODE_ENV !== "production" && (function() {
    function a(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === ee ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case N:
          return "Fragment";
        case q:
          return "Profiler";
        case U:
          return "StrictMode";
        case X:
          return "Suspense";
        case Z:
          return "SuspenseList";
        case K:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case B:
            return "Portal";
          case V:
            return e.displayName || "Context";
          case J:
            return (e._context.displayName || "Context") + ".Consumer";
          case G:
            var n = e.render;
            return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case Q:
            return n = e.displayName || null, n !== null ? n : a(e.type) || "Memo";
          case E:
            n = e._payload, e = e._init;
            try {
              return a(e(n));
            } catch {
            }
        }
      return null;
    }
    function u(e) {
      return "" + e;
    }
    function d(e) {
      try {
        u(e);
        var n = !1;
      } catch {
        n = !0;
      }
      if (n) {
        n = console;
        var s = n.error, o = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return s.call(
          n,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          o
        ), u(e);
      }
    }
    function _(e) {
      if (e === N) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === E)
        return "<...>";
      try {
        var n = a(e);
        return n ? "<" + n + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var e = k.A;
      return e === null ? null : e.getOwner();
    }
    function l() {
      return Error("react-stack-top-frame");
    }
    function m(e) {
      if (A.call(e, "key")) {
        var n = Object.getOwnPropertyDescriptor(e, "key").get;
        if (n && n.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function f(e, n) {
      function s() {
        C || (C = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          n
        ));
      }
      s.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: s,
        configurable: !0
      });
    }
    function W() {
      var e = a(this.type);
      return $[e] || ($[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function H(e, n, s, o, g, T) {
      var c = s.ref;
      return e = {
        $$typeof: P,
        type: e,
        key: n,
        props: s,
        _owner: o
      }, (c !== void 0 ? c : null) !== null ? Object.defineProperty(e, "ref", {
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
        value: g
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: T
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function O(e, n, s, o, g, T) {
      var c = n.children;
      if (c !== void 0)
        if (o)
          if (re(c)) {
            for (o = 0; o < c.length; o++)
              y(c[o]);
            Object.freeze && Object.freeze(c);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else y(c);
      if (A.call(n, "key")) {
        c = a(e);
        var v = Object.keys(n).filter(function(te) {
          return te !== "key";
        });
        o = 0 < v.length ? "{key: someKey, " + v.join(": ..., ") + ": ...}" : "{key: someKey}", F[c + o] || (v = 0 < v.length ? "{" + v.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          o,
          c,
          v,
          c
        ), F[c + o] = !0);
      }
      if (c = null, s !== void 0 && (d(s), c = "" + s), m(n) && (d(n.key), c = "" + n.key), "key" in n) {
        s = {};
        for (var S in n)
          S !== "key" && (s[S] = n[S]);
      } else s = n;
      return c && f(
        s,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), H(
        e,
        c,
        s,
        i(),
        g,
        T
      );
    }
    function y(e) {
      z(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === E && (e._payload.status === "fulfilled" ? z(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function z(e) {
      return typeof e == "object" && e !== null && e.$$typeof === P;
    }
    var x = ne, P = /* @__PURE__ */ Symbol.for("react.transitional.element"), B = /* @__PURE__ */ Symbol.for("react.portal"), N = /* @__PURE__ */ Symbol.for("react.fragment"), U = /* @__PURE__ */ Symbol.for("react.strict_mode"), q = /* @__PURE__ */ Symbol.for("react.profiler"), J = /* @__PURE__ */ Symbol.for("react.consumer"), V = /* @__PURE__ */ Symbol.for("react.context"), G = /* @__PURE__ */ Symbol.for("react.forward_ref"), X = /* @__PURE__ */ Symbol.for("react.suspense"), Z = /* @__PURE__ */ Symbol.for("react.suspense_list"), Q = /* @__PURE__ */ Symbol.for("react.memo"), E = /* @__PURE__ */ Symbol.for("react.lazy"), K = /* @__PURE__ */ Symbol.for("react.activity"), ee = /* @__PURE__ */ Symbol.for("react.client.reference"), k = x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, A = Object.prototype.hasOwnProperty, re = Array.isArray, R = console.createTask ? console.createTask : function() {
      return null;
    };
    x = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var C, $ = {}, I = x.react_stack_bottom_frame.bind(
      x,
      l
    )(), Y = R(_(l)), F = {};
    b.Fragment = N, b.jsx = function(e, n, s) {
      var o = 1e4 > k.recentlyCreatedOwnerStacks++;
      return O(
        e,
        n,
        s,
        !1,
        o ? Error("react-stack-top-frame") : I,
        o ? R(_(e)) : Y
      );
    }, b.jsxs = function(e, n, s) {
      var o = 1e4 > k.recentlyCreatedOwnerStacks++;
      return O(
        e,
        n,
        s,
        !0,
        o ? Error("react-stack-top-frame") : I,
        o ? R(_(e)) : Y
      );
    };
  })()), b;
}
var D;
function ce() {
  return D || (D = 1, process.env.NODE_ENV === "production" ? j.exports = se() : j.exports = oe()), j.exports;
}
var r = ce();
const ie = "_oneappRoot_cl4tz_1", le = "_navbar_cl4tz_73", ue = "_logo_cl4tz_109", de = "_container_cl4tz_241", _e = "_hero_cl4tz_263", fe = "_footer_cl4tz_1161", me = "_active_cl4tz_1395", ve = "_heroHeadingWrapper_cl4tz_1597", he = "_editButton_cl4tz_1607", be = "_heroInput_cl4tz_1629", t = {
  oneappRoot: ie,
  "page-wrapper": "_page-wrapper_cl4tz_57",
  navbar: le,
  "navbar-content": "_navbar-content_cl4tz_91",
  logo: ue,
  "logo-icon": "_logo-icon_cl4tz_127",
  "nav-menu": "_nav-menu_cl4tz_151",
  "nav-link": "_nav-link_cl4tz_163",
  "book-now-btn": "_book-now-btn_cl4tz_187",
  "mobile-menu-btn": "_mobile-menu-btn_cl4tz_221",
  container: de,
  hero: _e,
  "hero-subtitle": "_hero-subtitle_cl4tz_297",
  "hero-description": "_hero-description_cl4tz_313",
  "hero-cta": "_hero-cta_cl4tz_331",
  "cta-btn": "_cta-btn_cl4tz_347",
  "cta-primary": "_cta-primary_cl4tz_371",
  "cta-secondary": "_cta-secondary_cl4tz_391",
  "content-section": "_content-section_cl4tz_437",
  "section-title": "_section-title_cl4tz_445",
  "section-subtitle": "_section-subtitle_cl4tz_461",
  "services-grid": "_services-grid_cl4tz_589",
  "service-card": "_service-card_cl4tz_603",
  "service-icon": "_service-icon_cl4tz_631",
  "service-title": "_service-title_cl4tz_641",
  "service-description": "_service-description_cl4tz_655",
  "service-price": "_service-price_cl4tz_669",
  "service-price-label": "_service-price-label_cl4tz_681",
  footer: fe,
  "footer-content": "_footer-content_cl4tz_1177",
  "social-links": "_social-links_cl4tz_1207",
  "social-link": "_social-link_cl4tz_1207",
  active: me,
  heroHeadingWrapper: ve,
  editButton: he,
  heroInput: be
};
function pe(a) {
  const u = ae();
  function d() {
    console.log("Business Name:", a.businessName), u(`/${a.businessName}/Login`);
  }
  return /* @__PURE__ */ r.jsx("nav", { className: t.navbar, children: /* @__PURE__ */ r.jsxs("div", { className: t["navbar-content"], children: [
    /* @__PURE__ */ r.jsxs("div", { className: t.logo, children: [
      /* @__PURE__ */ r.jsx("div", { className: t["logo-icon"], children: "🏆" }),
      /* @__PURE__ */ r.jsx("span", { children: "Elite Sports" })
    ] }),
    /* @__PURE__ */ r.jsx(
      "button",
      {
        className: t["mobile-menu-btn"],
        onClick: a.toggleMenu,
        children: "☰"
      }
    ),
    /* @__PURE__ */ r.jsxs("div", { className: `${t["nav-menu"]} ${a.isMenuOpen ? t.active : ""}`, children: [
      /* @__PURE__ */ r.jsx("a", { href: "#home", className: t["nav-link"], children: "Home" }),
      /* @__PURE__ */ r.jsx("a", { href: "#services", className: t["nav-link"], children: "Services" }),
      /* @__PURE__ */ r.jsx("a", { href: "#about", className: t["nav-link"], children: "About" }),
      /* @__PURE__ */ r.jsx("a", { href: "#contact", className: t["nav-link"], children: "Contact" }),
      /* @__PURE__ */ r.jsx("button", { className: t["book-now-btn"], onClick: d, children: "Book Now" })
    ] })
  ] }) });
}
function xe(a) {
  const [u, d] = p(!1), [_, i] = p(a.hero?.heading || ""), [l, m] = p(a.hero?.subheading || "");
  return /* @__PURE__ */ r.jsxs("div", { className: t.hero, id: "home", children: [
    /* @__PURE__ */ r.jsxs("div", { className: t.heroHeadingWrapper, children: [
      u ? /* @__PURE__ */ r.jsx(
        "input",
        {
          className: t.heroInput,
          value: _,
          onChange: (f) => i(f.target.value)
        }
      ) : /* @__PURE__ */ r.jsx("h1", { className: t.heroHeading, children: _ }),
      a.mode === "edit" && /* @__PURE__ */ r.jsx(
        "button",
        {
          className: t.editButton,
          onClick: () => d(!u),
          children: "✏️"
        }
      )
    ] }),
    /* @__PURE__ */ r.jsx("div", { className: t["hero-subtitle"], children: "Your Premier Sports & Recreation Destination" }),
    /* @__PURE__ */ r.jsxs("div", { className: t["hero-description"], children: [
      "Experience the thrill of sports and recreation at ",
      a.businessName,
      "."
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: t["hero-cta"], children: [
      /* @__PURE__ */ r.jsx(
        "a",
        {
          href: "#services",
          className: `${t["cta-btn"]} ${t["cta-primary"]}`,
          children: "Explore Services"
        }
      ),
      /* @__PURE__ */ r.jsx(
        "a",
        {
          href: "#contact",
          className: `${t["cta-btn"]} ${t["cta-secondary"]}`,
          children: "Contact Us"
        }
      )
    ] })
  ] });
}
function ge() {
  return /* @__PURE__ */ r.jsx("footer", { className: t.footer, children: /* @__PURE__ */ r.jsxs("div", { className: t["footer-content"], children: [
    /* @__PURE__ */ r.jsx("p", { children: "© 2025 Elite Sports Complex. All rights reserved." }),
    /* @__PURE__ */ r.jsxs("div", { className: t["social-links"], children: [
      /* @__PURE__ */ r.jsx("a", { href: "#", className: t["social-link"], title: "Facebook", children: "📘" }),
      /* @__PURE__ */ r.jsx("a", { href: "#", className: t["social-link"], title: "Instagram", children: "📷" }),
      /* @__PURE__ */ r.jsx("a", { href: "#", className: t["social-link"], title: "Twitter", children: "🐦" }),
      /* @__PURE__ */ r.jsx("a", { href: "#", className: t["social-link"], title: "YouTube", children: "📺" })
    ] })
  ] }) });
}
function w(a) {
  return /* @__PURE__ */ r.jsxs("div", { className: t["service-card"], children: [
    /* @__PURE__ */ r.jsx("div", { className: t["service-icon"], children: a.icon }),
    /* @__PURE__ */ r.jsx("div", { className: t["service-title"], children: a.title }),
    /* @__PURE__ */ r.jsx("div", { className: t["service-description"], children: a.description }),
    /* @__PURE__ */ r.jsx("div", { className: t["service-price"], children: a.price }),
    /* @__PURE__ */ r.jsx("div", { className: t["service-price-label"], children: a.priceLabel })
  ] });
}
function je() {
  return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsx("h2", { className: t["section-title"], id: "services", children: "Our Services" }),
    /* @__PURE__ */ r.jsx("p", { className: t["section-subtitle"], children: "Choose from our wide range of sports activities and training programs" }),
    /* @__PURE__ */ r.jsxs("div", { className: t["services-grid"], children: [
      /* @__PURE__ */ r.jsx(
        w,
        {
          title: "Tennis Courts",
          description: "8 professional-grade tennis courts with clay and hard surfaces. Perfect for players of all skill levels.",
          price: "$25/hour",
          priceLabel: "Per Court",
          icon: "🎾"
        }
      ),
      /* @__PURE__ */ r.jsx(
        w,
        {
          title: "Basketball Courts",
          description: "Indoor courts with professional flooring and lighting. Ideal for training and competitive games.",
          price: "$30/hour",
          priceLabel: "Per Court",
          icon: "🏀"
        }
      ),
      /* @__PURE__ */ r.jsx(
        w,
        {
          title: "Soccer Field",
          description: "Full-size artificial turf field with modern facilities for practices and matches.",
          price: "$50/hour",
          priceLabel: "Full Field",
          icon: "⚽"
        }
      )
    ] })
  ] });
}
function ke({ data: a, mode: u }) {
  const [d, _] = p(!0), [i, l] = p(!0);
  function m() {
    _(!d), l(!i);
  }
  const f = a.businessName || "Business Name";
  return /* @__PURE__ */ r.jsxs("div", { className: t.oneappRoot, children: [
    /* @__PURE__ */ r.jsxs("div", { className: t["page-wrapper"], children: [
      /* @__PURE__ */ r.jsx(pe, { toggleMenu: m, isMenuOpen: i, businessName: f }),
      /* @__PURE__ */ r.jsxs("div", { className: t.container, children: [
        /* @__PURE__ */ r.jsx(
          xe,
          {
            businessName: f,
            hero: a?.hero,
            mode: u
          }
        ),
        /* @__PURE__ */ r.jsx("div", { className: t["content-section"], children: /* @__PURE__ */ r.jsx(je, {}) })
      ] })
    ] }),
    /* @__PURE__ */ r.jsx(ge, {})
  ] });
}
export {
  ke as SharedDashboardPage
};

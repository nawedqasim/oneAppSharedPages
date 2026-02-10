import ne, { useState as v } from "react";
import { useNavigate as ae } from "react-router-dom";
var k = { exports: {} }, g = {};
var M;
function se() {
  if (M) return g;
  M = 1;
  var a = /* @__PURE__ */ Symbol.for("react.transitional.element"), u = /* @__PURE__ */ Symbol.for("react.fragment");
  function d(_, c, l) {
    var m = null;
    if (l !== void 0 && (m = "" + l), c.key !== void 0 && (m = "" + c.key), "key" in c) {
      l = {};
      for (var h in c)
        h !== "key" && (l[h] = c[h]);
    } else l = c;
    return c = l.ref, {
      $$typeof: a,
      type: _,
      key: m,
      ref: c !== void 0 ? c : null,
      props: l
    };
  }
  return g.Fragment = u, g.jsx = d, g.jsxs = d, g;
}
var x = {};
var L;
function oe() {
  return L || (L = 1, process.env.NODE_ENV !== "production" && (function() {
    function a(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === ee ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case S:
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
          case H:
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
          case w:
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
      if (e === S) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === w)
        return "<...>";
      try {
        var n = a(e);
        return n ? "<" + n + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function c() {
      var e = z.A;
      return e === null ? null : e.getOwner();
    }
    function l() {
      return Error("react-stack-top-frame");
    }
    function m(e) {
      if (I.call(e, "key")) {
        var n = Object.getOwnPropertyDescriptor(e, "key").get;
        if (n && n.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function h(e, n) {
      function s() {
        $ || ($ = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          n
        ));
      }
      s.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: s,
        configurable: !0
      });
    }
    function R() {
      var e = a(this.type);
      return W[e] || (W[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function j(e, n, s, o, T, y) {
      var i = s.ref;
      return e = {
        $$typeof: C,
        type: e,
        key: n,
        props: s,
        _owner: o
      }, (i !== void 0 ? i : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: R
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
        value: T
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: y
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function N(e, n, s, o, T, y) {
      var i = n.children;
      if (i !== void 0)
        if (o)
          if (re(i)) {
            for (o = 0; o < i.length; o++)
              p(i[o]);
            Object.freeze && Object.freeze(i);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else p(i);
      if (I.call(n, "key")) {
        i = a(e);
        var b = Object.keys(n).filter(function(te) {
          return te !== "key";
        });
        o = 0 < b.length ? "{key: someKey, " + b.join(": ..., ") + ": ...}" : "{key: someKey}", B[i + o] || (b = 0 < b.length ? "{" + b.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          o,
          i,
          b,
          i
        ), B[i + o] = !0);
      }
      if (i = null, s !== void 0 && (d(s), i = "" + s), m(n) && (d(n.key), i = "" + n.key), "key" in n) {
        s = {};
        for (var A in n)
          A !== "key" && (s[A] = n[A]);
      } else s = n;
      return i && h(
        s,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), j(
        e,
        i,
        s,
        c(),
        T,
        y
      );
    }
    function p(e) {
      E(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === w && (e._payload.status === "fulfilled" ? E(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function E(e) {
      return typeof e == "object" && e !== null && e.$$typeof === C;
    }
    var f = ne, C = /* @__PURE__ */ Symbol.for("react.transitional.element"), H = /* @__PURE__ */ Symbol.for("react.portal"), S = /* @__PURE__ */ Symbol.for("react.fragment"), U = /* @__PURE__ */ Symbol.for("react.strict_mode"), q = /* @__PURE__ */ Symbol.for("react.profiler"), J = /* @__PURE__ */ Symbol.for("react.consumer"), V = /* @__PURE__ */ Symbol.for("react.context"), G = /* @__PURE__ */ Symbol.for("react.forward_ref"), X = /* @__PURE__ */ Symbol.for("react.suspense"), Z = /* @__PURE__ */ Symbol.for("react.suspense_list"), Q = /* @__PURE__ */ Symbol.for("react.memo"), w = /* @__PURE__ */ Symbol.for("react.lazy"), K = /* @__PURE__ */ Symbol.for("react.activity"), ee = /* @__PURE__ */ Symbol.for("react.client.reference"), z = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, I = Object.prototype.hasOwnProperty, re = Array.isArray, O = console.createTask ? console.createTask : function() {
      return null;
    };
    f = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var $, W = {}, F = f.react_stack_bottom_frame.bind(
      f,
      l
    )(), Y = O(_(l)), B = {};
    x.Fragment = S, x.jsx = function(e, n, s) {
      var o = 1e4 > z.recentlyCreatedOwnerStacks++;
      return N(
        e,
        n,
        s,
        !1,
        o ? Error("react-stack-top-frame") : F,
        o ? O(_(e)) : Y
      );
    }, x.jsxs = function(e, n, s) {
      var o = 1e4 > z.recentlyCreatedOwnerStacks++;
      return N(
        e,
        n,
        s,
        !0,
        o ? Error("react-stack-top-frame") : F,
        o ? O(_(e)) : Y
      );
    };
  })()), x;
}
var D;
function ie() {
  return D || (D = 1, process.env.NODE_ENV === "production" ? k.exports = se() : k.exports = oe()), k.exports;
}
var r = ie();
const ce = "_oneappRoot_1hetz_1", le = "_navbar_1hetz_73", ue = "_logo_1hetz_109", de = "_container_1hetz_241", he = "_hero_1hetz_263", _e = "_footer_1hetz_1161", fe = "_active_1hetz_1395", me = "_heroHeadingWrapper_1hetz_1597", ve = "_editButton_1hetz_1607", be = "_heroInput_1hetz_1629", pe = "_heroSubWrapper_1hetz_1641", ge = "_editButtonSub_1hetz_1653", xe = "_heroSubInput_1hetz_1673", je = "_heroTaglineWrapper_1hetz_1687", Ne = "_heroTaglineInner_1hetz_1697", Ee = "_editButtonTagline_1hetz_1707", t = {
  oneappRoot: ce,
  "page-wrapper": "_page-wrapper_1hetz_57",
  navbar: le,
  "navbar-content": "_navbar-content_1hetz_91",
  logo: ue,
  "logo-icon": "_logo-icon_1hetz_127",
  "nav-menu": "_nav-menu_1hetz_151",
  "nav-link": "_nav-link_1hetz_163",
  "book-now-btn": "_book-now-btn_1hetz_187",
  "mobile-menu-btn": "_mobile-menu-btn_1hetz_221",
  container: de,
  hero: he,
  "hero-subtitle": "_hero-subtitle_1hetz_297",
  "hero-cta": "_hero-cta_1hetz_331",
  "cta-btn": "_cta-btn_1hetz_347",
  "cta-primary": "_cta-primary_1hetz_371",
  "cta-secondary": "_cta-secondary_1hetz_391",
  "content-section": "_content-section_1hetz_437",
  "section-title": "_section-title_1hetz_445",
  "section-subtitle": "_section-subtitle_1hetz_461",
  "services-grid": "_services-grid_1hetz_589",
  "service-card": "_service-card_1hetz_603",
  "service-icon": "_service-icon_1hetz_631",
  "service-title": "_service-title_1hetz_641",
  "service-description": "_service-description_1hetz_655",
  "service-price": "_service-price_1hetz_669",
  "service-price-label": "_service-price-label_1hetz_681",
  footer: _e,
  "footer-content": "_footer-content_1hetz_1177",
  "social-links": "_social-links_1hetz_1207",
  "social-link": "_social-link_1hetz_1207",
  active: fe,
  heroHeadingWrapper: me,
  editButton: ve,
  heroInput: be,
  heroSubWrapper: pe,
  editButtonSub: ge,
  heroSubInput: xe,
  heroTaglineWrapper: je,
  heroTaglineInner: Ne,
  editButtonTagline: Ee
};
function Te(a) {
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
function ke(a) {
  const [u, d] = v(!1), [_, c] = v(!1), [l, m] = v(!1), [h, R] = v(a.hero?.heading || ""), [j, N] = v(a.hero?.subheading || ""), [p, E] = v(a.hero?.tagline || "");
  return /* @__PURE__ */ r.jsxs("div", { className: t.hero, id: "home", children: [
    /* @__PURE__ */ r.jsxs("div", { className: t.heroHeadingWrapper, children: [
      u ? /* @__PURE__ */ r.jsx(
        "input",
        {
          className: t.heroInput,
          value: h,
          onChange: (f) => R(f.target.value)
        }
      ) : /* @__PURE__ */ r.jsx("h1", { className: t.heroHeading, children: h }),
      a.mode === "edit" && /* @__PURE__ */ r.jsx(
        "button",
        {
          className: t.editButton,
          onClick: () => d(!u),
          children: "✏️"
        }
      )
    ] }),
    /* @__PURE__ */ r.jsx("div", { className: t["hero-subtitle"], children: /* @__PURE__ */ r.jsxs("div", { className: t.heroSubWrapper, children: [
      _ ? /* @__PURE__ */ r.jsx(
        "input",
        {
          className: t.heroSubInput,
          value: j,
          onChange: (f) => N(f.target.value)
        }
      ) : /* @__PURE__ */ r.jsx("p", { className: t.heroSubheading, children: j }),
      a.mode === "edit" && /* @__PURE__ */ r.jsx(
        "button",
        {
          className: t.editButtonSub,
          onClick: () => c(!_),
          children: "✏️"
        }
      )
    ] }) }),
    /* @__PURE__ */ r.jsx("div", { className: t.heroTaglineWrapper, children: /* @__PURE__ */ r.jsxs("div", { className: t.heroTaglineInner, children: [
      l ? /* @__PURE__ */ r.jsx(
        "input",
        {
          className: t.heroTaglineInput,
          value: p,
          onChange: (f) => E(f.target.value)
        }
      ) : /* @__PURE__ */ r.jsx("p", { className: t.heroTagline, children: p }),
      a.mode === "edit" && /* @__PURE__ */ r.jsx(
        "button",
        {
          className: t.editButtonTagline,
          onClick: () => m(!l),
          children: "✏️"
        }
      )
    ] }) }),
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
function Re() {
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
function P(a) {
  return /* @__PURE__ */ r.jsxs("div", { className: t["service-card"], children: [
    /* @__PURE__ */ r.jsx("div", { className: t["service-icon"], children: a.icon }),
    /* @__PURE__ */ r.jsx("div", { className: t["service-title"], children: a.title }),
    /* @__PURE__ */ r.jsx("div", { className: t["service-description"], children: a.description }),
    /* @__PURE__ */ r.jsx("div", { className: t["service-price"], children: a.price }),
    /* @__PURE__ */ r.jsx("div", { className: t["service-price-label"], children: a.priceLabel })
  ] });
}
function Se() {
  return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsx("h2", { className: t["section-title"], id: "services", children: "Our Services" }),
    /* @__PURE__ */ r.jsx("p", { className: t["section-subtitle"], children: "Choose from our wide range of sports activities and training programs" }),
    /* @__PURE__ */ r.jsxs("div", { className: t["services-grid"], children: [
      /* @__PURE__ */ r.jsx(
        P,
        {
          title: "Tennis Courts",
          description: "8 professional-grade tennis courts with clay and hard surfaces. Perfect for players of all skill levels.",
          price: "$25/hour",
          priceLabel: "Per Court",
          icon: "🎾"
        }
      ),
      /* @__PURE__ */ r.jsx(
        P,
        {
          title: "Basketball Courts",
          description: "Indoor courts with professional flooring and lighting. Ideal for training and competitive games.",
          price: "$30/hour",
          priceLabel: "Per Court",
          icon: "🏀"
        }
      ),
      /* @__PURE__ */ r.jsx(
        P,
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
function Oe({ data: a, mode: u }) {
  const [d, _] = v(!0), [c, l] = v(!0);
  function m() {
    _(!d), l(!c);
  }
  const h = a.businessName || "Business Name";
  return /* @__PURE__ */ r.jsxs("div", { className: t.oneappRoot, children: [
    /* @__PURE__ */ r.jsxs("div", { className: t["page-wrapper"], children: [
      /* @__PURE__ */ r.jsx(Te, { toggleMenu: m, isMenuOpen: c, businessName: h }),
      /* @__PURE__ */ r.jsxs("div", { className: t.container, children: [
        /* @__PURE__ */ r.jsx(
          ke,
          {
            businessName: h,
            hero: a?.hero,
            mode: u
          }
        ),
        /* @__PURE__ */ r.jsx("div", { className: t["content-section"], children: /* @__PURE__ */ r.jsx(Se, {}) })
      ] })
    ] }),
    /* @__PURE__ */ r.jsx(Re, {})
  ] });
}
export {
  Oe as SharedDashboardPage
};

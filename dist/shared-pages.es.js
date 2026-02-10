import ne, { useState as v } from "react";
import { useNavigate as ae } from "react-router-dom";
var T = { exports: {} }, g = {};
var M;
function se() {
  if (M) return g;
  M = 1;
  var a = /* @__PURE__ */ Symbol.for("react.transitional.element"), u = /* @__PURE__ */ Symbol.for("react.fragment");
  function d(f, i, l) {
    var h = null;
    if (l !== void 0 && (h = "" + l), i.key !== void 0 && (h = "" + i.key), "key" in i) {
      l = {};
      for (var _ in i)
        _ !== "key" && (l[_] = i[_]);
    } else l = i;
    return i = l.ref, {
      $$typeof: a,
      type: f,
      key: h,
      ref: i !== void 0 ? i : null,
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
          case z:
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
    function f(e) {
      if (e === S) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === z)
        return "<...>";
      try {
        var n = a(e);
        return n ? "<" + n + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var e = w.A;
      return e === null ? null : e.getOwner();
    }
    function l() {
      return Error("react-stack-top-frame");
    }
    function h(e) {
      if (I.call(e, "key")) {
        var n = Object.getOwnPropertyDescriptor(e, "key").get;
        if (n && n.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function _(e, n) {
      function s() {
        B || (B = !0, console.error(
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
      return $[e] || ($[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function j(e, n, s, o, k, O) {
      var c = s.ref;
      return e = {
        $$typeof: P,
        type: e,
        key: n,
        props: s,
        _owner: o
      }, (c !== void 0 ? c : null) !== null ? Object.defineProperty(e, "ref", {
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
        value: k
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: O
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function N(e, n, s, o, k, O) {
      var c = n.children;
      if (c !== void 0)
        if (o)
          if (te(c)) {
            for (o = 0; o < c.length; o++)
              p(c[o]);
            Object.freeze && Object.freeze(c);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else p(c);
      if (I.call(n, "key")) {
        c = a(e);
        var b = Object.keys(n).filter(function(re) {
          return re !== "key";
        });
        o = 0 < b.length ? "{key: someKey, " + b.join(": ..., ") + ": ...}" : "{key: someKey}", Y[c + o] || (b = 0 < b.length ? "{" + b.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          o,
          c,
          b,
          c
        ), Y[c + o] = !0);
      }
      if (c = null, s !== void 0 && (d(s), c = "" + s), h(n) && (d(n.key), c = "" + n.key), "key" in n) {
        s = {};
        for (var y in n)
          y !== "key" && (s[y] = n[y]);
      } else s = n;
      return c && _(
        s,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), j(
        e,
        c,
        s,
        i(),
        k,
        O
      );
    }
    function p(e) {
      E(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === z && (e._payload.status === "fulfilled" ? E(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function E(e) {
      return typeof e == "object" && e !== null && e.$$typeof === P;
    }
    var m = ne, P = /* @__PURE__ */ Symbol.for("react.transitional.element"), H = /* @__PURE__ */ Symbol.for("react.portal"), S = /* @__PURE__ */ Symbol.for("react.fragment"), U = /* @__PURE__ */ Symbol.for("react.strict_mode"), q = /* @__PURE__ */ Symbol.for("react.profiler"), J = /* @__PURE__ */ Symbol.for("react.consumer"), V = /* @__PURE__ */ Symbol.for("react.context"), G = /* @__PURE__ */ Symbol.for("react.forward_ref"), X = /* @__PURE__ */ Symbol.for("react.suspense"), Z = /* @__PURE__ */ Symbol.for("react.suspense_list"), Q = /* @__PURE__ */ Symbol.for("react.memo"), z = /* @__PURE__ */ Symbol.for("react.lazy"), K = /* @__PURE__ */ Symbol.for("react.activity"), ee = /* @__PURE__ */ Symbol.for("react.client.reference"), w = m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, I = Object.prototype.hasOwnProperty, te = Array.isArray, C = console.createTask ? console.createTask : function() {
      return null;
    };
    m = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var B, $ = {}, W = m.react_stack_bottom_frame.bind(
      m,
      l
    )(), F = C(f(l)), Y = {};
    x.Fragment = S, x.jsx = function(e, n, s) {
      var o = 1e4 > w.recentlyCreatedOwnerStacks++;
      return N(
        e,
        n,
        s,
        !1,
        o ? Error("react-stack-top-frame") : W,
        o ? C(f(e)) : F
      );
    }, x.jsxs = function(e, n, s) {
      var o = 1e4 > w.recentlyCreatedOwnerStacks++;
      return N(
        e,
        n,
        s,
        !0,
        o ? Error("react-stack-top-frame") : W,
        o ? C(f(e)) : F
      );
    };
  })()), x;
}
var D;
function ce() {
  return D || (D = 1, process.env.NODE_ENV === "production" ? T.exports = se() : T.exports = oe()), T.exports;
}
var t = ce();
const ie = "_oneappRoot_1ctzt_1", le = "_navbar_1ctzt_73", ue = "_logo_1ctzt_109", de = "_container_1ctzt_241", _e = "_hero_1ctzt_263", fe = "_footer_1ctzt_1161", me = "_active_1ctzt_1395", he = "_heroHeadingWrapper_1ctzt_1597", ve = "_editButton_1ctzt_1607", be = "_heroInput_1ctzt_1629", pe = "_heroSubWrapper_1ctzt_1641", ge = "_editButtonSub_1ctzt_1653", xe = "_heroSubInput_1ctzt_1673", je = "_heroTaglineWrapper_1ctzt_1687", Ne = "_heroTaglineInner_1ctzt_1697", Ee = "_editButtonTagline_1ctzt_1707", ke = "_headerControls_1ctzt_1737", Te = "_backButton_1ctzt_1759", Re = "_saveButton_1ctzt_1787", r = {
  oneappRoot: ie,
  "page-wrapper": "_page-wrapper_1ctzt_57",
  navbar: le,
  "navbar-content": "_navbar-content_1ctzt_91",
  logo: ue,
  "logo-icon": "_logo-icon_1ctzt_127",
  "nav-menu": "_nav-menu_1ctzt_151",
  "nav-link": "_nav-link_1ctzt_163",
  "book-now-btn": "_book-now-btn_1ctzt_187",
  "mobile-menu-btn": "_mobile-menu-btn_1ctzt_221",
  container: de,
  hero: _e,
  "hero-subtitle": "_hero-subtitle_1ctzt_297",
  "hero-cta": "_hero-cta_1ctzt_331",
  "cta-btn": "_cta-btn_1ctzt_347",
  "cta-primary": "_cta-primary_1ctzt_371",
  "cta-secondary": "_cta-secondary_1ctzt_391",
  "content-section": "_content-section_1ctzt_437",
  "section-title": "_section-title_1ctzt_445",
  "section-subtitle": "_section-subtitle_1ctzt_461",
  "services-grid": "_services-grid_1ctzt_589",
  "service-card": "_service-card_1ctzt_603",
  "service-icon": "_service-icon_1ctzt_631",
  "service-title": "_service-title_1ctzt_641",
  "service-description": "_service-description_1ctzt_655",
  "service-price": "_service-price_1ctzt_669",
  "service-price-label": "_service-price-label_1ctzt_681",
  footer: fe,
  "footer-content": "_footer-content_1ctzt_1177",
  "social-links": "_social-links_1ctzt_1207",
  "social-link": "_social-link_1ctzt_1207",
  active: me,
  heroHeadingWrapper: he,
  editButton: ve,
  heroInput: be,
  heroSubWrapper: pe,
  editButtonSub: ge,
  heroSubInput: xe,
  heroTaglineWrapper: je,
  heroTaglineInner: Ne,
  editButtonTagline: Ee,
  headerControls: ke,
  backButton: Te,
  saveButton: Re
};
function Se(a) {
  const u = ae();
  function d() {
    console.log("Business Name:", a.businessName), u(`/${a.businessName}/Login`);
  }
  return /* @__PURE__ */ t.jsx("nav", { className: r.navbar, children: /* @__PURE__ */ t.jsxs("div", { className: r["navbar-content"], children: [
    /* @__PURE__ */ t.jsxs("div", { className: r.logo, children: [
      /* @__PURE__ */ t.jsx("div", { className: r["logo-icon"], children: "🏆" }),
      /* @__PURE__ */ t.jsx("span", { children: "Elite Sports" })
    ] }),
    /* @__PURE__ */ t.jsx(
      "button",
      {
        className: r["mobile-menu-btn"],
        onClick: a.toggleMenu,
        children: "☰"
      }
    ),
    /* @__PURE__ */ t.jsxs("div", { className: `${r["nav-menu"]} ${a.isMenuOpen ? r.active : ""}`, children: [
      /* @__PURE__ */ t.jsx("a", { href: "#home", className: r["nav-link"], children: "Home" }),
      /* @__PURE__ */ t.jsx("a", { href: "#services", className: r["nav-link"], children: "Services" }),
      /* @__PURE__ */ t.jsx("a", { href: "#about", className: r["nav-link"], children: "About" }),
      /* @__PURE__ */ t.jsx("a", { href: "#contact", className: r["nav-link"], children: "Contact" }),
      /* @__PURE__ */ t.jsx("button", { className: r["book-now-btn"], onClick: d, children: "Book Now" })
    ] })
  ] }) });
}
function ze(a) {
  const [u, d] = v(!1), [f, i] = v(!1), [l, h] = v(!1), [_, R] = v(a.hero?.heading || ""), [j, N] = v(a.hero?.subheading || ""), [p, E] = v(a.hero?.tagline || "");
  return /* @__PURE__ */ t.jsxs("div", { className: r.hero, id: "home", children: [
    /* @__PURE__ */ t.jsxs("div", { className: r.headerControls, children: [
      a.mode === "edit" && /* @__PURE__ */ t.jsx("button", { className: r.backButton, onClick: () => console.log("Go back"), children: "← Back" }),
      a.mode === "edit" && /* @__PURE__ */ t.jsx("button", { className: r.saveButton, onClick: () => console.log("Save"), children: "Save" })
    ] }),
    /* @__PURE__ */ t.jsxs("div", { className: r.heroHeadingWrapper, children: [
      u ? /* @__PURE__ */ t.jsx(
        "input",
        {
          className: r.heroInput,
          value: _,
          onChange: (m) => R(m.target.value)
        }
      ) : /* @__PURE__ */ t.jsx("h1", { className: r.heroHeading, children: _ }),
      a.mode === "edit" && /* @__PURE__ */ t.jsx(
        "button",
        {
          className: r.editButton,
          onClick: () => d(!u),
          children: "✏️"
        }
      )
    ] }),
    /* @__PURE__ */ t.jsx("div", { className: r["hero-subtitle"], children: /* @__PURE__ */ t.jsxs("div", { className: r.heroSubWrapper, children: [
      f ? /* @__PURE__ */ t.jsx(
        "input",
        {
          className: r.heroSubInput,
          value: j,
          onChange: (m) => N(m.target.value)
        }
      ) : /* @__PURE__ */ t.jsx("p", { className: r.heroSubheading, children: j }),
      a.mode === "edit" && /* @__PURE__ */ t.jsx(
        "button",
        {
          className: r.editButtonSub,
          onClick: () => i(!f),
          children: "✏️"
        }
      )
    ] }) }),
    /* @__PURE__ */ t.jsx("div", { className: r.heroTaglineWrapper, children: /* @__PURE__ */ t.jsxs("div", { className: r.heroTaglineInner, children: [
      l ? /* @__PURE__ */ t.jsx(
        "input",
        {
          className: r.heroTaglineInput,
          value: p,
          onChange: (m) => E(m.target.value)
        }
      ) : /* @__PURE__ */ t.jsx("p", { className: r.heroTagline, children: p }),
      a.mode === "edit" && /* @__PURE__ */ t.jsx(
        "button",
        {
          className: r.editButtonTagline,
          onClick: () => h(!l),
          children: "✏️"
        }
      )
    ] }) }),
    /* @__PURE__ */ t.jsxs("div", { className: r["hero-cta"], children: [
      /* @__PURE__ */ t.jsx(
        "a",
        {
          href: "#services",
          className: `${r["cta-btn"]} ${r["cta-primary"]}`,
          children: "Explore Services"
        }
      ),
      /* @__PURE__ */ t.jsx(
        "a",
        {
          href: "#contact",
          className: `${r["cta-btn"]} ${r["cta-secondary"]}`,
          children: "Contact Us"
        }
      )
    ] })
  ] });
}
function we() {
  return /* @__PURE__ */ t.jsx("footer", { className: r.footer, children: /* @__PURE__ */ t.jsxs("div", { className: r["footer-content"], children: [
    /* @__PURE__ */ t.jsx("p", { children: "© 2025 Elite Sports Complex. All rights reserved." }),
    /* @__PURE__ */ t.jsxs("div", { className: r["social-links"], children: [
      /* @__PURE__ */ t.jsx("a", { href: "#", className: r["social-link"], title: "Facebook", children: "📘" }),
      /* @__PURE__ */ t.jsx("a", { href: "#", className: r["social-link"], title: "Instagram", children: "📷" }),
      /* @__PURE__ */ t.jsx("a", { href: "#", className: r["social-link"], title: "Twitter", children: "🐦" }),
      /* @__PURE__ */ t.jsx("a", { href: "#", className: r["social-link"], title: "YouTube", children: "📺" })
    ] })
  ] }) });
}
function A(a) {
  return /* @__PURE__ */ t.jsxs("div", { className: r["service-card"], children: [
    /* @__PURE__ */ t.jsx("div", { className: r["service-icon"], children: a.icon }),
    /* @__PURE__ */ t.jsx("div", { className: r["service-title"], children: a.title }),
    /* @__PURE__ */ t.jsx("div", { className: r["service-description"], children: a.description }),
    /* @__PURE__ */ t.jsx("div", { className: r["service-price"], children: a.price }),
    /* @__PURE__ */ t.jsx("div", { className: r["service-price-label"], children: a.priceLabel })
  ] });
}
function Ce() {
  return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsx("h2", { className: r["section-title"], id: "services", children: "Our Services" }),
    /* @__PURE__ */ t.jsx("p", { className: r["section-subtitle"], children: "Choose from our wide range of sports activities and training programs" }),
    /* @__PURE__ */ t.jsxs("div", { className: r["services-grid"], children: [
      /* @__PURE__ */ t.jsx(
        A,
        {
          title: "Tennis Courts",
          description: "8 professional-grade tennis courts with clay and hard surfaces. Perfect for players of all skill levels.",
          price: "$25/hour",
          priceLabel: "Per Court",
          icon: "🎾"
        }
      ),
      /* @__PURE__ */ t.jsx(
        A,
        {
          title: "Basketball Courts",
          description: "Indoor courts with professional flooring and lighting. Ideal for training and competitive games.",
          price: "$30/hour",
          priceLabel: "Per Court",
          icon: "🏀"
        }
      ),
      /* @__PURE__ */ t.jsx(
        A,
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
function Ae({ data: a, mode: u }) {
  const [d, f] = v(!0), [i, l] = v(!0);
  function h() {
    f(!d), l(!i);
  }
  const _ = a.businessName || "Business Name";
  return /* @__PURE__ */ t.jsxs("div", { className: r.oneappRoot, children: [
    /* @__PURE__ */ t.jsxs("div", { className: r["page-wrapper"], children: [
      /* @__PURE__ */ t.jsx(Se, { toggleMenu: h, isMenuOpen: i, businessName: _ }),
      /* @__PURE__ */ t.jsxs("div", { className: r.container, children: [
        /* @__PURE__ */ t.jsx(
          ze,
          {
            businessName: _,
            hero: a?.hero,
            mode: u
          }
        ),
        /* @__PURE__ */ t.jsx("div", { className: r["content-section"], children: /* @__PURE__ */ t.jsx(Ce, {}) })
      ] })
    ] }),
    /* @__PURE__ */ t.jsx(we, {})
  ] });
}
export {
  Ae as SharedDashboardPage
};

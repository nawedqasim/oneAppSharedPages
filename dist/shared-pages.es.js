import te, { useState as h } from "react";
import { useNavigate as ae } from "react-router-dom";
var N = { exports: {} }, p = {};
var B;
function se() {
  if (B) return p;
  B = 1;
  var a = /* @__PURE__ */ Symbol.for("react.transitional.element"), u = /* @__PURE__ */ Symbol.for("react.fragment");
  function d(v, c, l) {
    var f = null;
    if (l !== void 0 && (f = "" + l), c.key !== void 0 && (f = "" + c.key), "key" in c) {
      l = {};
      for (var _ in c)
        _ !== "key" && (l[_] = c[_]);
    } else l = c;
    return c = l.ref, {
      $$typeof: a,
      type: v,
      key: f,
      ref: c !== void 0 ? c : null,
      props: l
    };
  }
  return p.Fragment = u, p.jsx = d, p.jsxs = d, p;
}
var g = {};
var D;
function oe() {
  return D || (D = 1, process.env.NODE_ENV !== "production" && (function() {
    function a(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === ee ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case k:
          return "Fragment";
        case z:
          return "Profiler";
        case q:
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
          case U:
            return "Portal";
          case V:
            return e.displayName || "Context";
          case J:
            return (e._context.displayName || "Context") + ".Consumer";
          case G:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case Q:
            return t = e.displayName || null, t !== null ? t : a(e.type) || "Memo";
          case R:
            t = e._payload, e = e._init;
            try {
              return a(e(t));
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
        var t = !1;
      } catch {
        t = !0;
      }
      if (t) {
        t = console;
        var s = t.error, o = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return s.call(
          t,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          o
        ), u(e);
      }
    }
    function v(e) {
      if (e === k) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === R)
        return "<...>";
      try {
        var t = a(e);
        return t ? "<" + t + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function c() {
      var e = S.A;
      return e === null ? null : e.getOwner();
    }
    function l() {
      return Error("react-stack-top-frame");
    }
    function f(e) {
      if ($.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function _(e, t) {
      function s() {
        F || (F = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          t
        ));
      }
      s.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: s,
        configurable: !0
      });
    }
    function E() {
      var e = a(this.type);
      return Y[e] || (Y[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function b(e, t, s, o, j, w) {
      var i = s.ref;
      return e = {
        $$typeof: I,
        type: e,
        key: t,
        props: s,
        _owner: o
      }, (i !== void 0 ? i : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: E
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
        value: j
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: w
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function A(e, t, s, o, j, w) {
      var i = t.children;
      if (i !== void 0)
        if (o)
          if (re(i)) {
            for (o = 0; o < i.length; o++)
              P(i[o]);
            Object.freeze && Object.freeze(i);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else P(i);
      if ($.call(t, "key")) {
        i = a(e);
        var m = Object.keys(t).filter(function(ne) {
          return ne !== "key";
        });
        o = 0 < m.length ? "{key: someKey, " + m.join(": ..., ") + ": ...}" : "{key: someKey}", L[i + o] || (m = 0 < m.length ? "{" + m.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          o,
          i,
          m,
          i
        ), L[i + o] = !0);
      }
      if (i = null, s !== void 0 && (d(s), i = "" + s), f(t) && (d(t.key), i = "" + t.key), "key" in t) {
        s = {};
        for (var O in t)
          O !== "key" && (s[O] = t[O]);
      } else s = t;
      return i && _(
        s,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), b(
        e,
        i,
        s,
        c(),
        j,
        w
      );
    }
    function P(e) {
      C(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === R && (e._payload.status === "fulfilled" ? C(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function C(e) {
      return typeof e == "object" && e !== null && e.$$typeof === I;
    }
    var x = te, I = /* @__PURE__ */ Symbol.for("react.transitional.element"), U = /* @__PURE__ */ Symbol.for("react.portal"), k = /* @__PURE__ */ Symbol.for("react.fragment"), q = /* @__PURE__ */ Symbol.for("react.strict_mode"), z = /* @__PURE__ */ Symbol.for("react.profiler"), J = /* @__PURE__ */ Symbol.for("react.consumer"), V = /* @__PURE__ */ Symbol.for("react.context"), G = /* @__PURE__ */ Symbol.for("react.forward_ref"), X = /* @__PURE__ */ Symbol.for("react.suspense"), Z = /* @__PURE__ */ Symbol.for("react.suspense_list"), Q = /* @__PURE__ */ Symbol.for("react.memo"), R = /* @__PURE__ */ Symbol.for("react.lazy"), K = /* @__PURE__ */ Symbol.for("react.activity"), ee = /* @__PURE__ */ Symbol.for("react.client.reference"), S = x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, $ = Object.prototype.hasOwnProperty, re = Array.isArray, T = console.createTask ? console.createTask : function() {
      return null;
    };
    x = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var F, Y = {}, M = x.react_stack_bottom_frame.bind(
      x,
      l
    )(), W = T(v(l)), L = {};
    g.Fragment = k, g.jsx = function(e, t, s) {
      var o = 1e4 > S.recentlyCreatedOwnerStacks++;
      return A(
        e,
        t,
        s,
        !1,
        o ? Error("react-stack-top-frame") : M,
        o ? T(v(e)) : W
      );
    }, g.jsxs = function(e, t, s) {
      var o = 1e4 > S.recentlyCreatedOwnerStacks++;
      return A(
        e,
        t,
        s,
        !0,
        o ? Error("react-stack-top-frame") : M,
        o ? T(v(e)) : W
      );
    };
  })()), g;
}
var H;
function ie() {
  return H || (H = 1, process.env.NODE_ENV === "production" ? N.exports = se() : N.exports = oe()), N.exports;
}
var r = ie();
const ce = "_oneappRoot_vl9n9_1", le = "_navbar_vl9n9_73", ue = "_logo_vl9n9_109", de = "_container_vl9n9_241", _e = "_hero_vl9n9_263", ve = "_footer_vl9n9_1161", fe = "_active_vl9n9_1395", me = "_heroHeadingWrapper_vl9n9_1597", he = "_editButton_vl9n9_1607", be = "_heroInput_vl9n9_1629", pe = "_heroSubWrapper_vl9n9_1641", ge = "_editButtonSub_vl9n9_1653", xe = "_heroSubInput_vl9n9_1673", n = {
  oneappRoot: ce,
  "page-wrapper": "_page-wrapper_vl9n9_57",
  navbar: le,
  "navbar-content": "_navbar-content_vl9n9_91",
  logo: ue,
  "logo-icon": "_logo-icon_vl9n9_127",
  "nav-menu": "_nav-menu_vl9n9_151",
  "nav-link": "_nav-link_vl9n9_163",
  "book-now-btn": "_book-now-btn_vl9n9_187",
  "mobile-menu-btn": "_mobile-menu-btn_vl9n9_221",
  container: de,
  hero: _e,
  "hero-subtitle": "_hero-subtitle_vl9n9_297",
  "hero-description": "_hero-description_vl9n9_313",
  "hero-cta": "_hero-cta_vl9n9_331",
  "cta-btn": "_cta-btn_vl9n9_347",
  "cta-primary": "_cta-primary_vl9n9_371",
  "cta-secondary": "_cta-secondary_vl9n9_391",
  "content-section": "_content-section_vl9n9_437",
  "section-title": "_section-title_vl9n9_445",
  "section-subtitle": "_section-subtitle_vl9n9_461",
  "services-grid": "_services-grid_vl9n9_589",
  "service-card": "_service-card_vl9n9_603",
  "service-icon": "_service-icon_vl9n9_631",
  "service-title": "_service-title_vl9n9_641",
  "service-description": "_service-description_vl9n9_655",
  "service-price": "_service-price_vl9n9_669",
  "service-price-label": "_service-price-label_vl9n9_681",
  footer: ve,
  "footer-content": "_footer-content_vl9n9_1177",
  "social-links": "_social-links_vl9n9_1207",
  "social-link": "_social-link_vl9n9_1207",
  active: fe,
  heroHeadingWrapper: me,
  editButton: he,
  heroInput: be,
  heroSubWrapper: pe,
  editButtonSub: ge,
  heroSubInput: xe
};
function je(a) {
  const u = ae();
  function d() {
    console.log("Business Name:", a.businessName), u(`/${a.businessName}/Login`);
  }
  return /* @__PURE__ */ r.jsx("nav", { className: n.navbar, children: /* @__PURE__ */ r.jsxs("div", { className: n["navbar-content"], children: [
    /* @__PURE__ */ r.jsxs("div", { className: n.logo, children: [
      /* @__PURE__ */ r.jsx("div", { className: n["logo-icon"], children: "🏆" }),
      /* @__PURE__ */ r.jsx("span", { children: "Elite Sports" })
    ] }),
    /* @__PURE__ */ r.jsx(
      "button",
      {
        className: n["mobile-menu-btn"],
        onClick: a.toggleMenu,
        children: "☰"
      }
    ),
    /* @__PURE__ */ r.jsxs("div", { className: `${n["nav-menu"]} ${a.isMenuOpen ? n.active : ""}`, children: [
      /* @__PURE__ */ r.jsx("a", { href: "#home", className: n["nav-link"], children: "Home" }),
      /* @__PURE__ */ r.jsx("a", { href: "#services", className: n["nav-link"], children: "Services" }),
      /* @__PURE__ */ r.jsx("a", { href: "#about", className: n["nav-link"], children: "About" }),
      /* @__PURE__ */ r.jsx("a", { href: "#contact", className: n["nav-link"], children: "Contact" }),
      /* @__PURE__ */ r.jsx("button", { className: n["book-now-btn"], onClick: d, children: "Book Now" })
    ] })
  ] }) });
}
function Ne(a) {
  const [u, d] = h(!1), [v, c] = h(a.hero?.heading || ""), [l, f] = h(a.hero?.subheading || ""), [_, E] = h(!1);
  return /* @__PURE__ */ r.jsxs("div", { className: n.hero, id: "home", children: [
    /* @__PURE__ */ r.jsxs("div", { className: n.heroHeadingWrapper, children: [
      u ? /* @__PURE__ */ r.jsx(
        "input",
        {
          className: n.heroInput,
          value: v,
          onChange: (b) => c(b.target.value)
        }
      ) : /* @__PURE__ */ r.jsx("h1", { className: n.heroHeading, children: v }),
      a.mode === "edit" && /* @__PURE__ */ r.jsx(
        "button",
        {
          className: n.editButton,
          onClick: () => d(!u),
          children: "✏️"
        }
      )
    ] }),
    /* @__PURE__ */ r.jsx("div", { className: n["hero-subtitle"], children: /* @__PURE__ */ r.jsxs("div", { className: n.heroSubWrapper, children: [
      _ ? /* @__PURE__ */ r.jsx(
        "input",
        {
          className: n.heroSubInput,
          value: l,
          onChange: (b) => f(b.target.value)
        }
      ) : /* @__PURE__ */ r.jsx("p", { className: n.heroSubheading, children: l }),
      a.mode === "edit" && /* @__PURE__ */ r.jsx(
        "button",
        {
          className: n.editButtonSub,
          onClick: () => E(!_),
          children: "✏️"
        }
      )
    ] }) }),
    /* @__PURE__ */ r.jsxs("div", { className: n["hero-description"], children: [
      "Experience the thrill of sports and recreation at ",
      a.businessName,
      "."
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: n["hero-cta"], children: [
      /* @__PURE__ */ r.jsx(
        "a",
        {
          href: "#services",
          className: `${n["cta-btn"]} ${n["cta-primary"]}`,
          children: "Explore Services"
        }
      ),
      /* @__PURE__ */ r.jsx(
        "a",
        {
          href: "#contact",
          className: `${n["cta-btn"]} ${n["cta-secondary"]}`,
          children: "Contact Us"
        }
      )
    ] })
  ] });
}
function Ee() {
  return /* @__PURE__ */ r.jsx("footer", { className: n.footer, children: /* @__PURE__ */ r.jsxs("div", { className: n["footer-content"], children: [
    /* @__PURE__ */ r.jsx("p", { children: "© 2025 Elite Sports Complex. All rights reserved." }),
    /* @__PURE__ */ r.jsxs("div", { className: n["social-links"], children: [
      /* @__PURE__ */ r.jsx("a", { href: "#", className: n["social-link"], title: "Facebook", children: "📘" }),
      /* @__PURE__ */ r.jsx("a", { href: "#", className: n["social-link"], title: "Instagram", children: "📷" }),
      /* @__PURE__ */ r.jsx("a", { href: "#", className: n["social-link"], title: "Twitter", children: "🐦" }),
      /* @__PURE__ */ r.jsx("a", { href: "#", className: n["social-link"], title: "YouTube", children: "📺" })
    ] })
  ] }) });
}
function y(a) {
  return /* @__PURE__ */ r.jsxs("div", { className: n["service-card"], children: [
    /* @__PURE__ */ r.jsx("div", { className: n["service-icon"], children: a.icon }),
    /* @__PURE__ */ r.jsx("div", { className: n["service-title"], children: a.title }),
    /* @__PURE__ */ r.jsx("div", { className: n["service-description"], children: a.description }),
    /* @__PURE__ */ r.jsx("div", { className: n["service-price"], children: a.price }),
    /* @__PURE__ */ r.jsx("div", { className: n["service-price-label"], children: a.priceLabel })
  ] });
}
function ke() {
  return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsx("h2", { className: n["section-title"], id: "services", children: "Our Services" }),
    /* @__PURE__ */ r.jsx("p", { className: n["section-subtitle"], children: "Choose from our wide range of sports activities and training programs" }),
    /* @__PURE__ */ r.jsxs("div", { className: n["services-grid"], children: [
      /* @__PURE__ */ r.jsx(
        y,
        {
          title: "Tennis Courts",
          description: "8 professional-grade tennis courts with clay and hard surfaces. Perfect for players of all skill levels.",
          price: "$25/hour",
          priceLabel: "Per Court",
          icon: "🎾"
        }
      ),
      /* @__PURE__ */ r.jsx(
        y,
        {
          title: "Basketball Courts",
          description: "Indoor courts with professional flooring and lighting. Ideal for training and competitive games.",
          price: "$30/hour",
          priceLabel: "Per Court",
          icon: "🏀"
        }
      ),
      /* @__PURE__ */ r.jsx(
        y,
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
function Te({ data: a, mode: u }) {
  const [d, v] = h(!0), [c, l] = h(!0);
  function f() {
    v(!d), l(!c);
  }
  const _ = a.businessName || "Business Name";
  return /* @__PURE__ */ r.jsxs("div", { className: n.oneappRoot, children: [
    /* @__PURE__ */ r.jsxs("div", { className: n["page-wrapper"], children: [
      /* @__PURE__ */ r.jsx(je, { toggleMenu: f, isMenuOpen: c, businessName: _ }),
      /* @__PURE__ */ r.jsxs("div", { className: n.container, children: [
        /* @__PURE__ */ r.jsx(
          Ne,
          {
            businessName: _,
            hero: a?.hero,
            mode: u
          }
        ),
        /* @__PURE__ */ r.jsx("div", { className: n["content-section"], children: /* @__PURE__ */ r.jsx(ke, {}) })
      ] })
    ] }),
    /* @__PURE__ */ r.jsx(Ee, {})
  ] });
}
export {
  Te as SharedDashboardPage
};

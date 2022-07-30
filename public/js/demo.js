!(function () {
    "use strict";
    function t() {}
    const n = (t) => t;
    function e(t, n) {
        for (const e in n) t[e] = n[e];
        return t;
    }
    function o(t) {
        return t();
    }
    function i(t) {
        t.forEach(o);
    }
    function r(t) {
        return "function" == typeof t;
    }
    let s;
    function l(t, n) {
        return (
            s || (s = document.createElement("a")), (s.href = n), t === s.href
        );
    }
    function c(t, n) {
        return t != t ? n == n : t !== n;
    }
    function u(n, e, o) {
        n.$$.on_destroy.push(
            ((n, ...e) => {
                if (null == n) return t;
                const o = n.subscribe(...e);
                return o.unsubscribe ? () => o.unsubscribe() : o;
            })(e, o)
        );
    }
    function a(t, n, e) {
        return t.set(e), n;
    }
    function p(n) {
        return n && r(n.destroy) ? n.destroy : t;
    }
    let f = () => globalThis.performance.now(),
        d = (t) => requestAnimationFrame(t);
    const m = new Set();
    function h(t) {
        m.forEach((n) => {
            n.c(t) || (m.delete(n), n.f());
        }),
            0 !== m.size && d(h);
    }
    function g(t) {
        let n;
        return (
            0 === m.size && d(h),
            {
                promise: new Promise((e) => {
                    m.add((n = { c: t, f: e }));
                }),
                abort() {
                    m.delete(n);
                },
            }
        );
    }
    function b(t, n) {
        t.appendChild(n);
    }
    function w(t) {
        const n = x("style");
        return (
            ((t, n) => {
                b(t.head || t, n);
            })(document, n),
            n.sheet
        );
    }
    function y(t, n, e) {
        t.insertBefore(n, e || null);
    }
    function v(t) {
        t.parentNode.removeChild(t);
    }
    function x(t) {
        return document.createElement(t);
    }
    function k(t) {
        return document.createTextNode(t);
    }
    function $() {
        return k("");
    }
    function T(t, n, e, o) {
        return (
            t.addEventListener(n, e, o), () => t.removeEventListener(n, e, o)
        );
    }
    function C(t, n, e) {
        null == e
            ? t.removeAttribute(n)
            : t.getAttribute(n) !== e && t.setAttribute(n, e);
    }
    function M(t, n, e, o) {
        null === e ? t.style.removeProperty(n) : t.style.setProperty(n, e);
    }
    function _(t, n, e) {
        t.classList[e ? "add" : "remove"](n);
    }
    const S = new Map();
    let A,
        O = 0;
    function z(t, n, e, o, i, r, s, l = 0) {
        const c = 16.666 / o;
        let u = "{\n";
        for (let t = 0; 1 >= t; t += c) {
            const o = n + (e - n) * r(t);
            u += 100 * t + `%{${s(o, 1 - o)}}\n`;
        }
        const a = u + `100% {${s(e, 1 - e)}}\n}`,
            p = `_bp_${((t) => {
                let n = 5381,
                    e = t.length;
                for (; e--; ) n = ((n << 5) - n) ^ t.charCodeAt(e);
                return n >>> 0;
            })(a)}_${l}`,
            f = document,
            { stylesheet: d, rules: m } =
                S.get(f) ||
                ((t, n) => {
                    const e = { stylesheet: w(), rules: {} };
                    return S.set(t, e), e;
                })(f);
        m[p] ||
            ((m[p] = 1),
            d.insertRule(`@keyframes ${p} ${a}`, d.cssRules.length));
        const h = t.style.animation || "";
        return (
            (t.style.animation = `${
                h ? h + ", " : ""
            }${p} ${o}ms linear ${i}ms 1 both`),
            (O += 1),
            p
        );
    }
    function P(t, n) {
        const e = (t.style.animation || "").split(", "),
            o = e.filter(
                n ? (t) => 0 > t.indexOf(n) : (t) => -1 === t.indexOf("_bp")
            ),
            i = e.length - o.length;
        i &&
            ((t.style.animation = o.join(", ")),
            (O -= i),
            O ||
                d(() => {
                    O ||
                        (S.forEach((t) => {
                            const { stylesheet: n } = t;
                            let e = n.cssRules.length;
                            for (; e--; ) n.deleteRule(e);
                            t.rules = {};
                        }),
                        S.clear());
                }));
    }
    function I(t) {
        A = t;
    }
    const j = [],
        N = [],
        R = [],
        F = [],
        E = Promise.resolve();
    let L = 0;
    function Z(t) {
        R.push(t);
    }
    const q = new Set();
    let B,
        H = 0;
    function J() {
        const t = A;
        do {
            for (; j.length > H; ) {
                const t = j[H];
                H++, I(t), U(t.$$);
            }
            for (I(null), j.length = 0, H = 0; N.length; ) N.pop()();
            for (let t = 0; R.length > t; t += 1) {
                const n = R[t];
                q.has(n) || (q.add(n), n());
            }
            R.length = 0;
        } while (j.length);
        for (; F.length; ) F.pop()();
        (L = 0), q.clear(), I(t);
    }
    function U(t) {
        if (null !== t.t) {
            t.update(), i(t.before_update);
            const n = t.l;
            (t.l = [-1]), t.t && t.t.p(t.ctx, n), t.after_update.forEach(Z);
        }
    }
    function X() {
        return (
            B ||
                ((B = Promise.resolve()),
                B.then(() => {
                    B = null;
                })),
            B
        );
    }
    function W(t, n, e) {
        t.dispatchEvent(
            ((t, n, { bubbles: e = 0, cancelable: o = 0 } = {}) => {
                const i = document.createEvent("CustomEvent");
                return i.initCustomEvent(t, e, o, n), i;
            })(`${n ? "intro" : "outro"}${e}`)
        );
    }
    const Y = new Set();
    let K;
    function D() {
        K = { r: 0, c: [], p: K };
    }
    function Q() {
        K.r || i(K.c), (K = K.p);
    }
    function G(t, n) {
        t && t.i && (Y.delete(t), t.i(n));
    }
    function V(t, n, e, o) {
        if (t && t.o) {
            if (Y.has(t)) return;
            Y.add(t),
                K.c.push(() => {
                    Y.delete(t), o && (e && t.d(1), o());
                }),
                t.o(n);
        } else o && o();
    }
    const tt = { duration: 0 };
    function nt(e, o, i) {
        let s,
            l,
            c = o(e, i),
            u = 0,
            a = 0;
        function p() {
            s && P(e, s);
        }
        function d() {
            const {
                delay: o = 0,
                duration: i = 300,
                g: r = n,
                v: d = t,
                css: m,
            } = c || tt;
            m && (s = z(e, 0, 1, i, o, r, m, a++)), d(0, 1);
            const h = f() + o,
                b = h + i;
            l && l.abort(),
                (u = 1),
                Z(() => W(e, 1, "start")),
                (l = g((t) => {
                    if (u) {
                        if (t >= b)
                            return d(1, 0), W(e, 1, "end"), p(), (u = 0);
                        if (t >= h) {
                            const n = r((t - h) / i);
                            d(n, 1 - n);
                        }
                    }
                    return u;
                }));
        }
        let m = 0;
        return {
            start() {
                m || ((m = 1), P(e), r(c) ? ((c = c()), X().then(d)) : d());
            },
            invalidate() {
                m = 0;
            },
            end() {
                u && (p(), (u = 0));
            },
        };
    }
    function et(e, o, s) {
        let l,
            c = o(e, s),
            u = 1;
        const a = K;
        function p() {
            const {
                delay: o = 0,
                duration: r = 300,
                g: s = n,
                v: p = t,
                css: d,
            } = c || tt;
            d && (l = z(e, 1, 0, r, o, s, d));
            const m = f() + o,
                h = m + r;
            Z(() => W(e, 0, "start")),
                g((t) => {
                    if (u) {
                        if (t >= h)
                            return p(0, 1), W(e, 0, "end"), --a.r || i(a.c), 0;
                        if (t >= m) {
                            const n = s((t - m) / r);
                            p(1 - n, n);
                        }
                    }
                    return u;
                });
        }
        return (
            (a.r += 1),
            r(c)
                ? X().then(() => {
                      (c = c()), p();
                  })
                : p(),
            {
                end(t) {
                    t && c.v && c.v(1, 0), u && (l && P(e, l), (u = 0));
                },
            }
        );
    }
    function ot(t, n) {
        t.d(1), n.delete(t.key);
    }
    function it(t) {
        t && t.c();
    }
    function rt(t, n, e, s) {
        const { t: l, on_mount: c, on_destroy: u, after_update: a } = t.$$;
        l && l.m(n, e),
            s ||
                Z(() => {
                    const n = c.map(o).filter(r);
                    u ? u.push(...n) : i(n), (t.$$.on_mount = []);
                }),
            a.forEach(Z);
    }
    function st(t, n) {
        const e = t.$$;
        null !== e.t &&
            (i(e.on_destroy),
            e.t && e.t.d(n),
            (e.on_destroy = e.t = null),
            (e.ctx = []));
    }
    function lt(n, e, o, r, s, l, c, u = [-1]) {
        const a = A;
        I(n);
        const p = (n.$$ = {
            t: null,
            ctx: null,
            k: l,
            update: t,
            not_equal: s,
            bound: {},
            on_mount: [],
            on_destroy: [],
            on_disconnect: [],
            before_update: [],
            after_update: [],
            context: new Map(e.context || (a ? a.$$.context : [])),
            callbacks: {},
            l: u,
            skip_bound: 0,
            root: e.target || a.$$.root,
        });
        c && c(p.root);
        let f = 0;
        (p.ctx = o
            ? o(n, e.k || {}, (t, e, ...o) => {
                  const i = o.length ? o[0] : e;
                  return (
                      p.ctx &&
                          s(p.ctx[t], (p.ctx[t] = i)) &&
                          (!p.skip_bound && p.bound[t] && p.bound[t](i),
                          f &&
                              ((t, n) => {
                                  -1 === t.$$.l[0] &&
                                      (j.push(t),
                                      L || ((L = 1), E.then(J)),
                                      t.$$.l.fill(0)),
                                      (t.$$.l[(n / 31) | 0] |= 1 << n % 31);
                              })(n, t)),
                      e
                  );
              })
            : []),
            p.update(),
            (f = 1),
            i(p.before_update),
            (p.t = r ? r(p.ctx) : 0),
            e.target &&
                (p.t && p.t.c(),
                rt(n, e.target, e.anchor, e.customElement),
                J()),
            I(a);
    }
    class ct {
        $destroy() {
            st(this, 1), (this.$destroy = t);
        }
        $on(t, n) {
            const e = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
            return (
                e.push(n),
                () => {
                    const t = e.indexOf(n);
                    -1 !== t && e.splice(t, 1);
                }
            );
        }
        $set(t) {
            this.$$set &&
                0 !== Object.keys(t).length &&
                ((this.$$.skip_bound = 1),
                this.$$set(t),
                (this.$$.skip_bound = 0));
        }
    }
    function ut(t) {
        const n = t - 1;
        return n * n * n + 1;
    }
    function at(t, { delay: e = 0, duration: o = 400, g: i = n } = {}) {
        const r = +getComputedStyle(t).opacity;
        return {
            delay: e,
            duration: o,
            g: i,
            css(t) {
                return "opacity: " + t * r;
            },
        };
    }
    function pt(
        t,
        {
            delay: n = 0,
            duration: e = 400,
            g: o = ut,
            x: i = 0,
            y: r = 0,
            opacity: s = 0,
        } = {}
    ) {
        const l = getComputedStyle(t),
            c = +l.opacity,
            u = "none" === l.transform ? "" : l.transform,
            a = c * (1 - s);
        return {
            delay: n,
            duration: e,
            g: o,
            css(t, n) {
                return `\n\t\t\ttransform: ${u} translate(${(1 - t) * i}px, ${
                    (1 - t) * r
                }px);\n\t\t\topacity: ${c - a * n}`;
            },
        };
    }
    const ft = [];
    function dt(n, e = t) {
        let o;
        const i = new Set();
        function r(t) {
            if (
                ((r = t),
                ((e = n) != e
                    ? r == r
                    : e !== r ||
                      (e && "object" == typeof e) ||
                      "function" == typeof e) && ((n = t), o))
            ) {
                const t = !ft.length;
                for (const t of i) t[1](), ft.push(t, n);
                if (t) {
                    for (let t = 0; ft.length > t; t += 2) ft[t][0](ft[t + 1]);
                    ft.length = 0;
                }
            }
            var e, r;
        }
        return {
            set: r,
            update(t) {
                r(t(n));
            },
            subscribe(s, l = t) {
                const c = [s, l];
                return (
                    i.add(c),
                    1 === i.size && (o = e(r) || t),
                    s(n),
                    () => {
                        i.delete(c), 0 === i.size && (o(), (o = null));
                    }
                );
            },
        };
    }
    function mt(t, n) {
        if (t === n || t != t) return () => t;
        const e = typeof t;
        if (Array.isArray(t)) {
            const e = n.map((n, e) => mt(t[e], n));
            return (t) => e.map((n) => n(t));
        }
        if ("number" === e) {
            const e = n - t;
            return (n) => t + n * e;
        }
    }
    function ht(t, o = {}) {
        const i = dt(t);
        let r,
            s = t;
        function l(l, c) {
            if (null == t) return i.set((t = l)), Promise.resolve();
            s = l;
            let u = r,
                a = 0,
                {
                    delay: p = 0,
                    duration: d = 400,
                    g: m = n,
                    interpolate: h = mt,
                } = e(e({}, o), c);
            if (0 === d)
                return (
                    u && (u.abort(), (u = null)),
                    i.set((t = s)),
                    Promise.resolve()
                );
            const b = f() + p;
            let w;
            return (
                (r = g((n) => {
                    if (b > n) return 1;
                    a ||
                        ((w = h(t, l)),
                        "function" == typeof d && (d = d(t, l)),
                        (a = 1)),
                        u && (u.abort(), (u = null));
                    const e = n - b;
                    return e > d
                        ? (i.set((t = l)), 0)
                        : (i.set((t = w(m(e / d)))), 1);
                })),
                r.promise
            );
        }
        return {
            set: l,
            update(n, e) {
                return l(n(s, t), e);
            },
            subscribe: i.subscribe,
        };
    }
    const gt = dt(0),
        bt = globalThis.matchMedia?.(
            "(prefers-reduced-motion: reduce)"
        ).matches,
        wt = (t) => ({ g: ut, duration: bt ? 0 : t });
    function yt(t) {
        let n,
            e,
            o,
            i,
            r = !t[2] && vt();
        return {
            c() {
                (n = x("div")),
                    r && r.c(),
                    C(n, "class", "bp-load"),
                    M(n, "background-image", "url(" + t[0] + ")");
            },
            m(t, e) {
                y(t, n, e), r && r.m(n, null), (i = 1);
            },
            p(e, o) {
                (t = e)[2]
                    ? r && (r.d(1), (r = null))
                    : r || ((r = vt()), r.c(), r.m(n, null)),
                    (!i || 1 & o) &&
                        M(n, "background-image", "url(" + t[0] + ")");
            },
            i(r) {
                i ||
                    (Z(() => {
                        o && o.end(1),
                            (e = nt(n, pt, { duration: t[1] ? 400 : 0 })),
                            e.start();
                    }),
                    (i = 1));
            },
            o(t) {
                e && e.invalidate(),
                    t && (o = et(n, pt, { duration: 480 })),
                    (i = 0);
            },
            d(t) {
                t && v(n), r && r.d(), t && o && o.end();
            },
        };
    }
    function vt(t) {
        let n, e;
        return {
            c() {
                (n = x("span")),
                    (e = x("span")),
                    C(n, "class", "bp-bar"),
                    C(e, "class", "bp-o");
            },
            m(t, o) {
                y(t, n, o), y(t, e, o);
            },
            d(t) {
                t && v(n), t && v(e);
            },
        };
    }
    function xt(t) {
        let n,
            e = (!t[1] || t[2]) && yt(t);
        return {
            c() {
                e && e.c(), (n = $());
            },
            m(t, o) {
                e && e.m(t, o), y(t, n, o);
            },
            p(t, [o]) {
                !t[1] || t[2]
                    ? e
                        ? (e.p(t, o), 6 & o && G(e, 1))
                        : ((e = yt(t)), e.c(), G(e, 1), e.m(n.parentNode, n))
                    : e &&
                      (D(),
                      V(e, 1, 1, () => {
                          e = null;
                      }),
                      Q());
            },
            i(t) {
                G(e);
            },
            o(t) {
                V(e);
            },
            d(t) {
                e && e.d(t), t && v(n);
            },
        };
    }
    function kt(t, n, e) {
        let o;
        u(t, gt, (t) => e(2, (o = t)));
        let { thumb: i } = n,
            { loaded: r } = n;
        return (
            (t.$$set = (t) => {
                "thumb" in t && e(0, (i = t.thumb)),
                    "loaded" in t && e(1, (r = t.loaded));
            }),
            [i, r, o]
        );
    }
    class $t extends ct {
        constructor(t) {
            super(), lt(this, t, kt, xt, c, { thumb: 0, loaded: 1 });
        }
    }
    function Tt(t) {
        let n, e, o, i;
        return {
            c() {
                (n = x("img")),
                    C(n, "srcset", t[7].img),
                    C(n, "sizes", (e = t[8].sizes || t[1] + "px")),
                    C(n, "alt", t[7].alt);
            },
            m(t, e) {
                y(t, n, e), (i = 1);
            },
            p(t, o) {
                (!i || (2 & o[0] && e !== (e = t[8].sizes || t[1] + "px"))) &&
                    C(n, "sizes", e);
            },
            i(t) {
                i || (o && o.end(1), (i = 1));
            },
            o(t) {
                (o = et(n, pt, {})), (i = 0);
            },
            d(t) {
                t && v(n), t && o && o.end();
            },
        };
    }
    function Ct(t) {
        let n, e;
        return (
            (n = new $t({ k: { thumb: t[7].thumb, loaded: t[2] } })),
            {
                c() {
                    it(n.$$.t);
                },
                m(t, o) {
                    rt(n, t, o), (e = 1);
                },
                p(t, e) {
                    const o = {};
                    4 & e[0] && (o.loaded = t[2]), n.$set(o);
                },
                i(t) {
                    e || (G(n.$$.t, t), (e = 1));
                },
                o(t) {
                    V(n.$$.t, t), (e = 0);
                },
                d(t) {
                    st(n, t);
                },
            }
        );
    }
    function Mt(t) {
        let n,
            e,
            o,
            r,
            s,
            l,
            c = t[2] && Tt(t),
            u = t[3] && Ct(t);
        return {
            c() {
                (n = x("div")),
                    (e = x("div")),
                    c && c.c(),
                    (o = $()),
                    u && u.c(),
                    C(e, "class", "bp-img"),
                    M(e, "background-image", "url(" + t[7].thumb + ")"),
                    M(e, "width", t[0][0] + "px"),
                    M(e, "height", t[0][1] + "px"),
                    M(
                        e,
                        "transform",
                        "translate3d(" +
                            (t[0][0] / -2 + t[6][0]) +
                            "px, " +
                            (t[0][1] / -2 + t[6][1]) +
                            "px, 0)"
                    ),
                    C(n, "class", "bp-img-wrap"),
                    _(n, "bp-drag", t[4]),
                    _(n, "bp-close", t[5]);
            },
            m(i, a) {
                y(i, n, a),
                    b(n, e),
                    c && c.m(e, null),
                    b(e, o),
                    u && u.m(e, null),
                    (r = 1),
                    s ||
                        ((l = [
                            p(t[17].call(null, e)),
                            T(n, "wheel", t[12]),
                            T(n, "pointerdown", t[13]),
                            T(n, "pointermove", t[14]),
                            T(n, "pointerup", t[16]),
                            T(n, "pointercancel", t[15]),
                        ]),
                        (s = 1));
            },
            p(t, i) {
                t[2]
                    ? c
                        ? (c.p(t, i), 4 & i[0] && G(c, 1))
                        : ((c = Tt(t)), c.c(), G(c, 1), c.m(e, o))
                    : c &&
                      (D(),
                      V(c, 1, 1, () => {
                          c = null;
                      }),
                      Q()),
                    t[3]
                        ? u
                            ? (u.p(t, i), 8 & i[0] && G(u, 1))
                            : ((u = Ct(t)), u.c(), G(u, 1), u.m(e, null))
                        : u &&
                          (D(),
                          V(u, 1, 1, () => {
                              u = null;
                          }),
                          Q()),
                    (!r || 1 & i[0]) && M(e, "width", t[0][0] + "px"),
                    (!r || 1 & i[0]) && M(e, "height", t[0][1] + "px"),
                    (!r || 65 & i[0]) &&
                        M(
                            e,
                            "transform",
                            "translate3d(" +
                                (t[0][0] / -2 + t[6][0]) +
                                "px, " +
                                (t[0][1] / -2 + t[6][1]) +
                                "px, 0)"
                        ),
                    16 & i[0] && _(n, "bp-drag", t[4]),
                    32 & i[0] && _(n, "bp-close", t[5]);
            },
            i(t) {
                r || (G(c), G(u), (r = 1));
            },
            o(t) {
                V(c), V(u), (r = 0);
            },
            d(t) {
                t && v(n), c && c.d(), u && u.d(), (s = 0), i(l);
            },
        };
    }
    function _t(t, n, e) {
        let o, i, r, s;
        u(t, gt, (t) => e(22, (r = t)));
        let { k: l } = n,
            { $: c } = n,
            { T: a, C: p, M: f, next: d, zoomed: m, container: h } = l;
        u(t, m, (t) => e(21, (o = t)));
        let g,
            b,
            w,
            y,
            v,
            x,
            k,
            $,
            T,
            C,
            M,
            _ = a.maxZoom || p.maxZoom || 10,
            S = l._(a),
            A = S[0],
            O = 0;
        const z = +a.width,
            P = [],
            I = new Map(),
            j = ht(S, wt(400));
        u(t, j, (t) => e(0, (s = t)));
        const N = ht([0, 0], wt(400));
        u(t, N, (t) => e(6, (i = t)));
        const R = ([t, n], o = s) => {
                const i = (o[0] - h.w) / 2,
                    r = (o[1] - h.h) / 2;
                return (
                    0 > i
                        ? (t = 0)
                        : t > i
                        ? c
                            ? (t = v ? i + (t - i) / 10 : i) > i + 20 &&
                              e(4, (v = f()))
                            : (t = i)
                        : -i > t &&
                          (c
                              ? -i - 20 > (t = v ? -i - (-i - t) / 10 : -i) &&
                                e(4, (v = d()))
                              : (t = -i)),
                    0 > r ? (n = 0) : n > r ? (n = r) : -r > n && (n = -r),
                    [t, n]
                );
            },
            F = (t, n = _) => {
                if (r) return;
                const o = S[0] * _,
                    [l, c] = s;
                let u = l + l * n,
                    p = c + c * n;
                if (n > 0)
                    u > o && ((u = o), (p = S[1] * _)),
                        u > z && ((u = z), (p = +a.height));
                else if (S[0] > u) return j.set(S), N.set([0, 0]);
                let {
                    x: f,
                    y: d,
                    width: m,
                    height: h,
                } = y.getBoundingClientRect();
                const g = t.clientX - f - m / 2,
                    b = t.clientY - d - h / 2;
                (f = (u / m) * -g + g), (d = (p / h) * -b + b);
                const w = [u, p];
                j.set(w).then(() => {
                    e(1, (A = Math.round(Math.max(A, u))));
                }),
                    N.set(R([i[0] + f, i[1] + d], w));
            },
            E = (t) => I.delete(t.pointerId);
        return (
            (t.$$set = (t) => {
                "$" in t && e(19, (c = t.$));
            }),
            (t.$$.update = () => {
                if (
                    (1048577 & t.$$.l[0] && m.set(s[0] - 10 > S[0]),
                    7340032 & t.$$.l[0] && r && o && !p.intro)
                ) {
                    const t = wt(480);
                    N.set([0, 0], t), j.set(S, t), e(5, (M = 1));
                }
            }),
            [
                s,
                A,
                g,
                b,
                v,
                M,
                i,
                a,
                p,
                m,
                j,
                N,
                (t) => {
                    (p.inline && !o) ||
                        (t.preventDefault(), F(t, t.deltaY / -300));
                },
                (t) => {
                    2 !== t.button &&
                        (t.preventDefault(),
                        e(4, (v = 1)),
                        I.set(t.pointerId, t),
                        (k = t.clientX),
                        ($ = t.clientY),
                        (T = i[0]),
                        (C = i[1]));
                },
                (t) => {
                    if (I.size > 1)
                        return (
                            e(4, (v = 0)),
                            p.noPinch?.(h.el) ||
                                ((t) => {
                                    const [n, e] = I.set(
                                            t.pointerId,
                                            t
                                        ).values(),
                                        o = Math.hypot(
                                            n.clientX - e.clientX,
                                            n.clientY - e.clientY
                                        );
                                    (w = w || {
                                        clientX: (n.clientX + e.clientX) / 2,
                                        clientY: (n.clientY + e.clientY) / 2,
                                    }),
                                        F(w, ((O || o) - o) / -35),
                                        (O = o);
                                })(t)
                        );
                    if (!v) return;
                    let n = t.clientX,
                        i = t.clientY;
                    (x = P.push({ x: n, y: i }) > 2),
                        (n -= k),
                        (i -= $),
                        o ||
                            (-90 > i && e(4, (v = !p.noClose && l.close())),
                            30 > Math.abs(i) &&
                                (n > 40 && e(4, (v = f())),
                                -40 > n && e(4, (v = d())))),
                        o &&
                            x &&
                            !r &&
                            N.set(R([T + n, C + i]), { duration: 0 });
                },
                E,
                function (t) {
                    if (
                        (E(t),
                        w && (e(4, (v = O = 0)), (w = I.size ? w : null)),
                        v)
                    ) {
                        if ((e(4, (v = 0)), t.target === this && !p.noClose))
                            return l.close();
                        if (x) {
                            const [t, n, e] = P.slice(-3);
                            Math.hypot(n.x - e.x, n.y - e.y) > 5 &&
                                N.set(
                                    R([
                                        i[0] - 5 * (t.x - e.x),
                                        i[1] - 5 * (t.y - e.y),
                                    ])
                                );
                        } else p.onImageClick?.(h.el, a) || F(t, o ? -_ : _);
                        (x = 0), (P.length = 0);
                    }
                },
                (t) => {
                    (y = t),
                        l.S(() => {
                            e(20, (S = l._(a))),
                                (!p.inline && c) || (j.set(S), N.set([0, 0]));
                        }),
                        l.A(a).then(() => {
                            e(2, (g = 1)), l.O();
                        }),
                        setTimeout(() => {
                            e(3, (b = !g));
                        }, 250);
                },
                l,
                c,
                S,
                o,
                r,
            ]
        );
    }
    class St extends ct {
        constructor(t) {
            super(), lt(this, t, _t, Mt, c, { k: 18, $: 19 }, null, [-1, -1]);
        }
    }
    function At(t) {
        let n, e, o, r, s, l;
        return (
            (o = new $t({ k: { thumb: t[2].thumb, loaded: t[0] } })),
            {
                c() {
                    (n = x("div")),
                        (e = x("iframe")),
                        it(o.$$.t),
                        C(e, "allow", "autoplay; fullscreen"),
                        C(e, "title", t[2].title),
                        C(n, "class", "bp-if"),
                        M(n, "width", t[1][0] + "px"),
                        M(n, "height", t[1][1] + "px");
                },
                m(i, c) {
                    y(i, n, c),
                        b(n, e),
                        rt(o, n, null),
                        (r = 1),
                        s ||
                            ((l = [p(t[3].call(null, e)), T(e, "load", t[5])]),
                            (s = 1));
                },
                p(t, [e]) {
                    const i = {};
                    1 & e && (i.loaded = t[0]),
                        o.$set(i),
                        (!r || 2 & e) && M(n, "width", t[1][0] + "px"),
                        (!r || 2 & e) && M(n, "height", t[1][1] + "px");
                },
                i(t) {
                    r || (G(o.$$.t, t), (r = 1));
                },
                o(t) {
                    V(o.$$.t, t), (r = 0);
                },
                d(t) {
                    t && v(n), st(o), (s = 0), i(l);
                },
            }
        );
    }
    function Ot(t, n, e) {
        let o,
            i,
            { k: r } = n;
        const { T: s } = r,
            l = () => e(1, (i = r._(s)));
        return (
            l(),
            r.S(l),
            [o, i, s, (t) => (t.src = s.iframe), r, () => e(0, (o = 1))]
        );
    }
    class zt extends ct {
        constructor(t) {
            super(), lt(this, t, Ot, At, c, { k: 4 });
        }
    }
    function Pt(t) {
        let n, e, o, i, r;
        return (
            (e = new $t({ k: { thumb: t[2].thumb, loaded: t[0] } })),
            {
                c() {
                    (n = x("div")),
                        it(e.$$.t),
                        C(n, "class", "bp-vid"),
                        M(n, "width", t[1][0] + "px"),
                        M(n, "height", t[1][1] + "px"),
                        M(n, "background-image", "url(" + t[2].thumb + ")");
                },
                m(s, l) {
                    y(s, n, l),
                        rt(e, n, null),
                        (o = 1),
                        i || ((r = p(t[3].call(null, n))), (i = 1));
                },
                p(t, [i]) {
                    const r = {};
                    1 & i && (r.loaded = t[0]),
                        e.$set(r),
                        (!o || 2 & i) && M(n, "width", t[1][0] + "px"),
                        (!o || 2 & i) && M(n, "height", t[1][1] + "px");
                },
                i(t) {
                    o || (G(e.$$.t, t), (o = 1));
                },
                o(t) {
                    V(e.$$.t, t), (o = 0);
                },
                d(t) {
                    t && v(n), st(e), (i = 0), r();
                },
            }
        );
    }
    function It(t, n, e) {
        let o,
            i,
            { k: r } = n;
        const { T: s } = r,
            l = () => e(1, (i = r._(s)));
        l(), r.S(l);
        const c = (t, n) => {
            for (const e in n) C(t, e, n[e]);
        };
        return [
            o,
            i,
            s,
            (t) => {
                let n;
                const i = (t, e) => {
                    Array.isArray(e) || (e = JSON.parse(e));
                    for (const o of e) {
                        n ||
                            ((n = x(
                                o.type?.includes("audio") ? "audio" : "video"
                            )),
                            c(n, {
                                controls: 1,
                                autoplay: 1,
                                playsinline: 1,
                                tabindex: "0",
                            }));
                        const e = x(t);
                        c(e, o), b(n, e);
                    }
                };
                i("source", s.sources),
                    i("track", s.tracks || []),
                    T(n, "canplay", () => e(0, (o = 1))),
                    b(t, n);
            },
            r,
        ];
    }
    class jt extends ct {
        constructor(t) {
            super(), lt(this, t, It, Pt, c, { k: 4 });
        }
    }
    function Nt(n) {
        let e,
            o,
            r,
            s,
            l,
            u,
            a,
            f,
            d,
            m = n[6].i,
            h = qt(n),
            g = n[0].length > 1 && Bt(n);
        return {
            c() {
                (e = x("div")),
                    (o = x("div")),
                    h.c(),
                    (s = x("div")),
                    (l = x("button")),
                    g && g.c(),
                    C(l, "class", "bp-x"),
                    C(l, "title", "Close"),
                    C(l, "aria-label", "Close"),
                    C(s, "class", "bp-controls"),
                    C(e, "class", "bp-wrap"),
                    _(e, "bp-zoomed", n[10]),
                    _(e, "bp-inline", n[8]),
                    _(e, "bp-small", n[7]),
                    _(e, "bp-noclose", n[5].noClose);
            },
            m(t, i) {
                y(t, e, i),
                    b(e, o),
                    h.m(e, null),
                    b(e, s),
                    b(s, l),
                    g && g.m(s, null),
                    (a = 1),
                    f ||
                        ((d = [T(l, "click", n[1]), p(n[14].call(null, e))]),
                        (f = 1));
            },
            p(n, o) {
                64 & o[0] && c(m, (m = n[6].i))
                    ? (D(),
                      V(h, 1, 1, t),
                      Q(),
                      (h = qt(n)),
                      h.c(),
                      G(h, 1),
                      h.m(e, s))
                    : h.p(n, o),
                    n[0].length > 1
                        ? g
                            ? g.p(n, o)
                            : ((g = Bt(n)), g.c(), g.m(s, null))
                        : g && (g.d(1), (g = null)),
                    1024 & o[0] && _(e, "bp-zoomed", n[10]),
                    256 & o[0] && _(e, "bp-inline", n[8]),
                    128 & o[0] && _(e, "bp-small", n[7]),
                    32 & o[0] && _(e, "bp-noclose", n[5].noClose);
            },
            i(t) {
                a || (r && r.end(1), G(h), u && u.end(1), (a = 1));
            },
            o(t) {
                (r = et(o, pt, { duration: 480 })),
                    V(h),
                    (u = et(s, pt, {})),
                    (a = 0);
            },
            d(t) {
                t && v(e),
                    t && r && r.end(),
                    h.d(t),
                    g && g.d(),
                    t && u && u.end(),
                    (f = 0),
                    i(d);
            },
        };
    }
    function Rt(n) {
        let e,
            o = n[6].html + "";
        return {
            c() {
                (e = x("div")), C(e, "class", "bp-html");
            },
            m(t, n) {
                y(t, e, n), (e.innerHTML = o);
            },
            p(t, n) {
                64 & n[0] && o !== (o = t[6].html + "") && (e.innerHTML = o);
            },
            i: t,
            o: t,
            d(t) {
                t && v(e);
            },
        };
    }
    function Ft(n) {
        let e, o;
        return (
            (e = new zt({ k: { k: n[13]() } })),
            {
                c() {
                    it(e.$$.t);
                },
                m(t, n) {
                    rt(e, t, n), (o = 1);
                },
                p: t,
                i(t) {
                    o || (G(e.$$.t, t), (o = 1));
                },
                o(t) {
                    V(e.$$.t, t), (o = 0);
                },
                d(t) {
                    st(e, t);
                },
            }
        );
    }
    function Et(n) {
        let e, o;
        return (
            (e = new jt({ k: { k: n[13]() } })),
            {
                c() {
                    it(e.$$.t);
                },
                m(t, n) {
                    rt(e, t, n), (o = 1);
                },
                p: t,
                i(t) {
                    o || (G(e.$$.t, t), (o = 1));
                },
                o(t) {
                    V(e.$$.t, t), (o = 0);
                },
                d(t) {
                    st(e, t);
                },
            }
        );
    }
    function Lt(t) {
        let n, e;
        return (
            (n = new St({ k: { k: t[13](), $: t[7] } })),
            {
                c() {
                    it(n.$$.t);
                },
                m(t, o) {
                    rt(n, t, o), (e = 1);
                },
                p(t, e) {
                    const o = {};
                    128 & e[0] && (o.$ = t[7]), n.$set(o);
                },
                i(t) {
                    e || (G(n.$$.t, t), (e = 1));
                },
                o(t) {
                    V(n.$$.t, t), (e = 0);
                },
                d(t) {
                    st(n, t);
                },
            }
        );
    }
    function Zt(t) {
        let n,
            e,
            o,
            i = t[6].caption + "";
        return {
            c() {
                (n = x("div")), C(n, "class", "bp-cap"), C(n, "tabindex", "0");
            },
            m(t, e) {
                y(t, n, e), (n.innerHTML = i), (o = 1);
            },
            p(t, e) {
                (!o || 64 & e[0]) &&
                    i !== (i = t[6].caption + "") &&
                    (n.innerHTML = i);
            },
            i(t) {
                o || (e && e.end(1), (o = 1));
            },
            o(t) {
                (e = et(n, pt, { duration: 200 })), (o = 0);
            },
            d(t) {
                t && v(n), t && e && e.end();
            },
        };
    }
    function qt(t) {
        let n, e, o, r, s, l, c, u, a;
        const p = [Lt, Et, Ft, Rt],
            f = [];
        function d(t, n) {
            return t[6].img ? 0 : t[6].sources ? 1 : t[6].iframe ? 2 : 3;
        }
        (e = d(t)), (o = f[e] = p[e](t));
        let m = t[6].caption && Zt(t);
        return {
            c() {
                (n = x("div")),
                    o.c(),
                    m && m.c(),
                    (l = $()),
                    C(n, "class", "bp-inner");
            },
            m(o, i) {
                y(o, n, i),
                    f[e].m(n, null),
                    m && m.m(o, i),
                    y(o, l, i),
                    (c = 1),
                    u ||
                        ((a = [
                            T(n, "pointerdown", t[21]),
                            T(n, "pointerup", t[22]),
                        ]),
                        (u = 1));
            },
            p(t, i) {
                let r = e;
                (e = d(t)),
                    e === r
                        ? f[e].p(t, i)
                        : (D(),
                          V(f[r], 1, 1, () => {
                              f[r] = null;
                          }),
                          Q(),
                          (o = f[e]),
                          o ? o.p(t, i) : ((o = f[e] = p[e](t)), o.c()),
                          G(o, 1),
                          o.m(n, null)),
                    t[6].caption
                        ? m
                            ? (m.p(t, i), 64 & i[0] && G(m, 1))
                            : ((m = Zt(t)),
                              m.c(),
                              G(m, 1),
                              m.m(l.parentNode, l))
                        : m &&
                          (D(),
                          V(m, 1, 1, () => {
                              m = null;
                          }),
                          Q());
            },
            i(e) {
                c ||
                    (G(o),
                    Z(() => {
                        s && s.end(1), (r = nt(n, t[12], 1)), r.start();
                    }),
                    G(m),
                    (c = 1));
            },
            o(e) {
                V(o), r && r.invalidate(), (s = et(n, t[12], 0)), V(m), (c = 0);
            },
            d(t) {
                t && v(n),
                    f[e].d(),
                    t && s && s.end(),
                    m && m.d(t),
                    t && v(l),
                    (u = 0),
                    i(a);
            },
        };
    }
    function Bt(t) {
        let n,
            e,
            o,
            r,
            s,
            l = `${t[4] + 1} / ${t[0].length}`;
        return {
            c() {
                (n = x("div")),
                    (e = x("button")),
                    (o = x("button")),
                    C(n, "class", "bp-count"),
                    C(e, "class", "bp-prev"),
                    C(e, "title", "Previous"),
                    C(e, "aria-label", "Previous"),
                    C(o, "class", "bp-next"),
                    C(o, "title", "Next"),
                    C(o, "aria-label", "Next");
            },
            m(i, c) {
                y(i, n, c),
                    (n.innerHTML = l),
                    y(i, e, c),
                    y(i, o, c),
                    r ||
                        ((s = [T(e, "click", t[2]), T(o, "click", t[3])]),
                        (r = 1));
            },
            p(t, e) {
                17 & e[0] &&
                    l !== (l = `${t[4] + 1} / ${t[0].length}`) &&
                    (n.innerHTML = l);
            },
            d(t) {
                t && v(n), t && v(e), t && v(o), (r = 0), i(s);
            },
        };
    }
    function Ht(t) {
        let n,
            e,
            o = t[0] && Nt(t);
        return {
            c() {
                o && o.c(), (n = $());
            },
            m(t, i) {
                o && o.m(t, i), y(t, n, i), (e = 1);
            },
            p(t, e) {
                t[0]
                    ? o
                        ? (o.p(t, e), 1 & e[0] && G(o, 1))
                        : ((o = Nt(t)), o.c(), G(o, 1), o.m(n.parentNode, n))
                    : o &&
                      (D(),
                      V(o, 1, 1, () => {
                          o = null;
                      }),
                      Q());
            },
            i(t) {
                e || (G(o), (e = 1));
            },
            o(t) {
                V(o), (e = 0);
            },
            d(t) {
                o && o.d(t), t && v(n);
            },
        };
    }
    function Jt(t, n, e) {
        let o,
            { items: i } = n,
            { target: r } = n;
        const s = document.documentElement;
        let l, c, a, p, f, d, m, h, g, b, w;
        const y = (t) => (w = t),
            v = {},
            k = dt(0);
        u(t, k, (t) => e(10, (o = t)));
        const $ = () => {
                c.onClose?.(v.el, g),
                    gt.set(1),
                    e(0, (i = null)),
                    p?.focus({ preventScroll: 1 });
            },
            C = () => _(l - 1),
            M = () => _(l + 1),
            _ = (t) => {
                (m = t - l), e(4, (l = S(t)));
            },
            S = (t) => (t + i.length) % i.length,
            A = (t) => {
                const { key: n, shiftKey: e } = t;
                if ("Escape" === n) !c.noClose && $();
                else if ("ArrowRight" === n) M();
                else if ("ArrowLeft" === n) C();
                else if ("Tab" === n) {
                    const { activeElement: n } = document;
                    if (e || !n.controls) {
                        t.preventDefault();
                        const { focusWrap: o = v.el } = c,
                            i = [...o.querySelectorAll("*")].filter(
                                (t) => t.tabIndex >= 0
                            );
                        let r = i.indexOf(n);
                        (r += i.length + (e ? -1 : 1)), i[r % i.length].focus();
                    }
                }
            },
            O = ({ width: t = 1920, height: n = 1080 }) => {
                const { scale: e = 0.99 } = c,
                    o = Math.min(1, (v.w / t) * e, (v.h / n) * e);
                return [Math.round(t * o), Math.round(n * o)];
            },
            z = () => {
                if (i) {
                    const t = i[S(l + 1)],
                        n = i[S(l - 1)];
                    !t.preload && P(t), !n.preload && P(n);
                }
            },
            P = (t) => {
                if (t.img) {
                    const n = x("img");
                    return (
                        (n.sizes = c.sizes || O(t)[0] + "px"),
                        (n.srcset = t.img),
                        (t.preload = 1),
                        n.decode()
                    );
                }
            };
        return (
            (t.$$set = (t) => {
                "items" in t && e(0, (i = t.items)),
                    "target" in t && e(15, (r = t.target));
            }),
            (t.$$.update = () => {
                1835121 & t.$$.l[0] &&
                    i &&
                    (e(6, (g = i[l])),
                    e(19, (b = g.hasOwnProperty("html"))),
                    a && (b && y(null), c.onUpdate?.(v.el, g)));
            }),
            [
                i,
                $,
                C,
                M,
                l,
                c,
                g,
                f,
                d,
                h,
                o,
                k,
                (t, n) =>
                    a && i
                        ? pt(t, {
                              x: (m > 0 ? 20 : -20) * (n ? 1 : -1),
                              duration: 250,
                          })
                        : (e(18, (a = n)),
                          c.intro
                              ? pt(t, { y: n ? 10 : -10 })
                              : ((t) => {
                                    let n;
                                    if (b) {
                                        const e = t.firstChild.firstChild;
                                        n = [e.clientWidth, e.clientHeight];
                                    } else n = O(g);
                                    const e = (
                                            g.element || p
                                        ).getBoundingClientRect(),
                                        o = e.left - (v.w - e.width) / 2,
                                        i = e.top - (v.h - e.height) / 2,
                                        r = e.width / n[0],
                                        s = e.height / n[1];
                                    return {
                                        duration: 480,
                                        g: ut,
                                        css: (t, n) =>
                                            `transform:translate3d(${
                                                o * n
                                            }px, ${i * n}px, 0) scale3d(${
                                                r + t * (1 - r)
                                            }, ${s + t * (1 - s)}, 1)`,
                                    };
                                })(t)),
                () => ({
                    T: g,
                    _: O,
                    A: P,
                    O: z,
                    C: c,
                    M: C,
                    next: M,
                    close: $,
                    S: y,
                    zoomed: k,
                    container: v,
                }),
                (t) => {
                    let n, o;
                    e(20, (v.el = t), v),
                        c.onOpen?.(v.el, g),
                        d || (n = T(globalThis, "keydown", A));
                    const i = new ResizeObserver((t) => {
                        o &&
                            (e(20, (v.w = t[0].contentRect.width), v),
                            e(20, (v.h = t[0].contentRect.height), v),
                            e(7, (f = 769 > v.w)),
                            w?.(),
                            c.onResize?.(v.el, g)),
                            (o = 1);
                    });
                    return (
                        i.observe(t),
                        {
                            destroy() {
                                i.disconnect(),
                                    n?.(),
                                    gt.set(0),
                                    s.classList.remove("bp-lock"),
                                    c.onClosed?.();
                            },
                        }
                    );
                },
                r,
                (t) => {
                    e(5, (c = t)), e(8, (d = c.inline));
                    const n = c.items;
                    !d &&
                        s.scrollHeight > s.clientHeight &&
                        s.classList.add("bp-lock"),
                        (p = document.activeElement),
                        e(20, (v.w = r.offsetWidth), v),
                        e(
                            20,
                            (v.h =
                                r === document.body
                                    ? globalThis.innerHeight
                                    : r.clientHeight),
                            v
                        ),
                        e(7, (f = 769 > v.w)),
                        e(4, (l = c.position || 0)),
                        e(
                            0,
                            (i = Array.isArray(n)
                                ? n.map(
                                      (t, n) => (
                                          c.el &&
                                              c.el === t.element &&
                                              e(4, (l = n)),
                                          { i: n, ...t }
                                      )
                                  )
                                : (n.length ? [...n] : [n]).map(
                                      (t, n) => (
                                          c.el === t && e(4, (l = n)),
                                          { element: t, i: n, ...t.dataset }
                                      )
                                  ))
                        );
                },
                _,
                a,
                b,
                v,
                (t) => e(9, (h = t.target)),
                function (t) {
                    2 !== t.button &&
                        t.target === this &&
                        h === this &&
                        !c.noClose &&
                        $();
                },
            ]
        );
    }
    class Ut extends ct {
        constructor(t) {
            super(),
                lt(
                    this,
                    t,
                    Jt,
                    Ht,
                    c,
                    {
                        items: 0,
                        target: 15,
                        open: 16,
                        close: 1,
                        M: 2,
                        next: 3,
                        setPosition: 17,
                    },
                    null,
                    [-1, -1]
                );
        }
        get items() {
            return this.$$.ctx[0];
        }
        set items(t) {
            this.$$set({ items: t }), J();
        }
        get target() {
            return this.$$.ctx[15];
        }
        set target(t) {
            this.$$set({ target: t }), J();
        }
        get open() {
            return this.$$.ctx[16];
        }
        get close() {
            return this.$$.ctx[1];
        }
        get M() {
            return this.$$.ctx[2];
        }
        get next() {
            return this.$$.ctx[3];
        }
        get setPosition() {
            return this.$$.ctx[17];
        }
    }
    function Xt(t) {
        return new Ut({ ...t, k: t });
    }
    function Wt(t, n, e) {
        const o = t.slice();
        return (o[4] = n[e]), (o[6] = e), o;
    }
    function Yt(t) {
        let n, e;
        return {
            c() {
                (n = x("img")),
                    M(
                        n,
                        "transform",
                        "translate(0," +
                            (-t[1] * t[6]) / (t[2].length - 1) +
                            "px)"
                    ),
                    l(
                        n.src,
                        (e =
                            "https://www.firewatchgame.com/images/parallax/parallax" +
                            t[6] +
                            ".png")
                    ) || C(n, "src", e),
                    C(n, "alt", "parallax layer " + t[4]),
                    C(n, "decoding", "async");
            },
            m(t, e) {
                y(t, n, e);
            },
            p(t, e) {
                2 & e &&
                    M(
                        n,
                        "transform",
                        "translate(0," +
                            (-t[1] * t[6]) / (t[2].length - 1) +
                            "px)"
                    );
            },
            d(t) {
                t && v(n);
            },
        };
    }
    function Kt(n) {
        let e, o, i;
        return {
            c() {
                (e = x("img")),
                    l(
                        e.src,
                        (o =
                            "https://assets.henrygd.me/bp/images/firewatch-2.png")
                    ) ||
                        C(
                            e,
                            "src",
                            "https://assets.henrygd.me/bp/images/firewatch-2.png"
                        ),
                    C(e, "decoding", "async"),
                    C(e, "alt", "");
            },
            m(t, n) {
                y(t, e, n);
            },
            i(t) {
                i ||
                    Z(() => {
                        (i = nt(e, at, {})), i.start();
                    });
            },
            o: t,
            d(t) {
                t && v(e);
            },
        };
    }
    function Dt(n) {
        let e,
            o,
            i,
            r,
            s,
            l,
            c,
            u,
            a,
            p,
            f,
            d = Math.round(n[1]) + "",
            m = n[2],
            h = [];
        for (let t = 0; m.length > t; t += 1) h[t] = Yt(Wt(n, m, t));
        let g = n[0] && Kt();
        return {
            c() {
                (e = x("div")), (o = x("div"));
                for (let t = 0; h.length > t; t += 1) h[t].c();
                (i = x("span")),
                    (r = k("scroll down ")),
                    (s = x("div")),
                    (l = x("div")),
                    (c = k("You have scrolled ")),
                    (u = k(d)),
                    (a = k(" pixels\n\t\t")),
                    g && g.c(),
                    C(o, "class", "parallax-container"),
                    M(i, "opacity", 1 - Math.max(0, n[1] / 50)),
                    C(l, "class", "foreground"),
                    C(s, "class", "firewatch-scroll"),
                    C(e, "class", "firewatch");
            },
            m(t, d) {
                y(t, e, d), b(e, o);
                for (let t = 0; h.length > t; t += 1) h[t].m(o, null);
                b(e, i),
                    b(i, r),
                    b(e, s),
                    b(s, l),
                    b(l, c),
                    b(l, u),
                    b(l, a),
                    g && g.m(e, null),
                    p || ((f = T(s, "scroll", n[3])), (p = 1));
            },
            p(t, [n]) {
                if (6 & n) {
                    let e;
                    for (m = t[2], e = 0; m.length > e; e += 1) {
                        const i = Wt(t, m, e);
                        h[e]
                            ? h[e].p(i, n)
                            : ((h[e] = Yt(i)), h[e].c(), h[e].m(o, null));
                    }
                    for (; h.length > e; e += 1) h[e].d(1);
                    h.length = m.length;
                }
                2 & n && M(i, "opacity", 1 - Math.max(0, t[1] / 50)),
                    2 & n &&
                        d !== (d = Math.round(t[1]) + "") &&
                        ((t, n) => {
                            t.wholeText !== (n = "" + n) && (t.data = n);
                        })(u, d),
                    t[0]
                        ? g
                            ? 1 & n && G(g, 1)
                            : ((g = Kt()), g.c(), G(g, 1), g.m(e, null))
                        : g && (g.d(1), (g = null));
            },
            i(t) {
                G(g);
            },
            o: t,
            d(t) {
                t && v(e),
                    ((t, n) => {
                        for (let e = 0; t.length > e; e += 1) t[e] && t[e].d(n);
                    })(h, t),
                    g && g.d(),
                    (p = 0),
                    f();
            },
        };
    }
    function Qt(t, n, e) {
        let o,
            { isClosing: i = 0 } = n;
        return (
            (t.$$set = (t) => {
                "isClosing" in t && e(0, (i = t.isClosing));
            }),
            [i, o, [, , , , , , , , ,], (t) => e(1, (o = t.target.scrollTop))]
        );
    }
    class Gt extends ct {
        constructor(t) {
            super(), lt(this, t, Qt, Dt, c, { isClosing: 0 });
        }
        get isClosing() {
            return this.$$.ctx[0];
        }
        set isClosing(t) {
            this.$$set({ isClosing: t }), J();
        }
    }
    function Vt(n) {
        let e, o, s, l, c, u, a, p, f;
        return {
            c() {
                (e = x("div")),
                    (o = x("span")),
                    (s = x("h2")),
                    (s.textContent = "Use location services?"),
                    (l = x("p")),
                    (l.textContent =
                        "In order to give directional instructions, we kindly ask you to turn on the\n\t\tlocation services.\n\t"),
                    (c = x("div")),
                    (u = x("button")),
                    (u.textContent = "Close"),
                    (a = x("button")),
                    (a.textContent = "Confirm"),
                    C(a, "class", "cta"),
                    C(e, "class", "dialog");
            },
            m(t, i) {
                y(t, e, i),
                    b(e, o),
                    b(e, s),
                    b(e, l),
                    b(e, c),
                    b(c, u),
                    b(c, a),
                    p ||
                        ((f = [
                            T(u, "click", function () {
                                r(n[0].close) &&
                                    n[0].close.apply(this, arguments);
                            }),
                            T(a, "click", function () {
                                r(n[0].close) &&
                                    n[0].close.apply(this, arguments);
                            }),
                        ]),
                        (p = 1));
            },
            p(t, [e]) {
                n = t;
            },
            i: t,
            o: t,
            d(t) {
                t && v(e), (p = 0), i(f);
            },
        };
    }
    function tn(t, n, e) {
        let { bp: o } = n;
        return (
            (t.$$set = (t) => {
                "bp" in t && e(0, (o = t.bp));
            }),
            [o]
        );
    }
    class nn extends ct {
        constructor(t) {
            super(), lt(this, t, tn, Vt, c, { bp: 0 });
        }
    }
    let en;
    function on(t) {
        return (
            en ||
                (en = new ResizeObserver((t) => {
                    for (const n of t)
                        n.target.dispatchEvent(
                            new CustomEvent("bp:resize", {
                                detail: { cr: n.contentRect },
                            })
                        );
                })),
            en.observe(t),
            {
                destroy() {
                    en.unobserve(t);
                },
            }
        );
    }
    function rn(t, n, e) {
        const o = t.slice();
        return (o[28] = n[e]), o;
    }
    function sn(t) {
        let n,
            e,
            o,
            r,
            s,
            l,
            c,
            u,
            a,
            f,
            d = [],
            m = new Map(),
            h = t[3];
        const g = (t) => t[28].i;
        for (let n = 0; h.length > n; n += 1) {
            let e = rn(t, h, n),
                o = g(e);
            m.set(o, (d[n] = ln(o, e)));
        }
        return {
            c() {
                (n = x("div")),
                    (e = x("div")),
                    (o = x("div")),
                    (r = x("div")),
                    (s = x("div"));
                for (let t = 0; d.length > t; t += 1) d[t].c();
                C(e, "class", "thumbnail-bp"),
                    M(r, "transform", "translatex(" + t[8] + "px)"),
                    C(o, "class", "thumbnails"),
                    C(n, "class", "thumbnail-wrap");
            },
            m(i, l) {
                y(i, n, l), b(n, e), b(n, o), b(o, r), b(r, s);
                for (let t = 0; d.length > t; t += 1) d[t].m(s, null);
                t[20](n),
                    (u = 1),
                    a ||
                        ((f = [
                            p(t[14].call(null, e)),
                            T(r, "pointerdown", t[11]),
                            p(on(r)),
                            T(r, "bp:resize", t[19]),
                            T(n, "pointermove", t[12]),
                            T(n, "pointerup", t[13]),
                            T(n, "pointercancel", t[13]),
                            p(on(n)),
                            T(n, "bp:resize", t[21]),
                        ]),
                        (a = 1));
            },
            p(n, e) {
                (t = n),
                    1101 & e &&
                        ((h = t[3]),
                        (d = ((t, n, e, o, i, r, s, l, c, u, a, p) => {
                            let f = t.length,
                                d = r.length,
                                m = f;
                            const h = {};
                            for (; m--; ) h[t[m].key] = m;
                            const g = [],
                                b = new Map(),
                                w = new Map();
                            for (m = d; m--; ) {
                                const t = p(i, r, m),
                                    o = e(t);
                                let l = s.get(o);
                                l ? l.p(t, n) : ((l = u(o, t)), l.c()),
                                    b.set(o, (g[m] = l)),
                                    o in h && w.set(o, Math.abs(m - h[o]));
                            }
                            const y = new Set(),
                                v = new Set();
                            function x(t) {
                                G(t, 1),
                                    t.m(l, a),
                                    s.set(t.key, t),
                                    (a = t.first),
                                    d--;
                            }
                            for (; f && d; ) {
                                const n = g[d - 1],
                                    e = t[f - 1],
                                    o = n.key,
                                    i = e.key;
                                n === e
                                    ? ((a = n.first), f--, d--)
                                    : b.has(i)
                                    ? !s.has(o) || y.has(o)
                                        ? x(n)
                                        : v.has(i)
                                        ? f--
                                        : w.get(o) > w.get(i)
                                        ? (v.add(o), x(n))
                                        : (y.add(i), f--)
                                    : (c(e, s), f--);
                            }
                            for (; f--; ) {
                                const n = t[f];
                                b.has(n.key) || c(n, s);
                            }
                            for (; d; ) x(g[d - 1]);
                            return g;
                        })(d, e, g, 0, t, h, m, s, ot, ln, null, rn))),
                    (!u || 256 & e) &&
                        M(r, "transform", "translatex(" + t[8] + "px)");
            },
            i(t) {
                u ||
                    (Z(() => {
                        c && c.end(1),
                            (l = nt(o, at, { g: ut, duration: bt ? 0 : 480 })),
                            l.start();
                    }),
                    (u = 1));
            },
            o(t) {
                l && l.invalidate(),
                    (c = et(o, at, { g: ut, duration: bt ? 0 : 480 })),
                    (u = 0);
            },
            d(e) {
                e && v(n);
                for (let t = 0; d.length > t; t += 1) d[t].d();
                e && c && c.end(), t[20](null), (a = 0), i(f);
            },
        };
    }
    function ln(t, n) {
        let e, o, r, s, l;
        function c() {
            return n[17](n[28]);
        }
        function u(...t) {
            return n[18](n[28], ...t);
        }
        return {
            key: t,
            first: null,
            c() {
                (e = x("button")),
                    C(e, "title", (o = n[28].alt)),
                    C(e, "aria-label", (r = n[28].alt)),
                    M(e, "background-image", "url(" + n[28].thumb + ")"),
                    _(e, "active", n[28].i === n[0]),
                    (this.first = e);
            },
            m(t, o) {
                y(t, e, o),
                    s ||
                        ((l = [
                            T(e, "focus", n[16]),
                            T(e, "pointerup", c),
                            T(e, "keyup", u),
                        ]),
                        (s = 1));
            },
            p(t, i) {
                (n = t),
                    8 & i && o !== (o = n[28].alt) && C(e, "title", o),
                    8 & i && r !== (r = n[28].alt) && C(e, "aria-label", r),
                    8 & i &&
                        M(e, "background-image", "url(" + n[28].thumb + ")"),
                    9 & i && _(e, "active", n[28].i === n[0]);
            },
            d(t) {
                t && v(e), (s = 0), i(l);
            },
        };
    }
    function cn(t) {
        let n,
            e,
            o = t[1] && sn(t);
        return {
            c() {
                o && o.c(), (n = $());
            },
            m(t, i) {
                o && o.m(t, i), y(t, n, i), (e = 1);
            },
            p(t, [e]) {
                t[1]
                    ? o
                        ? (o.p(t, e), 2 & e && G(o, 1))
                        : ((o = sn(t)), o.c(), G(o, 1), o.m(n.parentNode, n))
                    : o &&
                      (D(),
                      V(o, 1, 1, () => {
                          o = null;
                      }),
                      Q());
            },
            i(t) {
                e || (G(o), (e = 1));
            },
            o(t) {
                V(o), (e = 0);
            },
            d(t) {
                o && o.d(t), t && v(n);
            },
        };
    }
    function un(t, n, e) {
        let o,
            i,
            r,
            s,
            l,
            c,
            p,
            f,
            d,
            m,
            h,
            g = [],
            b = 0,
            w = [],
            y = ht(0, { g: ut, duration: bt ? 0 : 250 });
        function v(t) {
            return 0 > t ? c - l - 1 > t && (t = c - l - 1) : (t = 0), t;
        }
        function x(t) {
            let n = t || m.querySelector(".active"),
                { left: e, right: i, width: r } = n.getBoundingClientRect(),
                { offsetLeft: s } = n;
            e + r > c
                ? a(y, (o = v(-s - r + c - 3)), o)
                : 0 > i - r && a(y, (o = v(3 - s)), o);
        }
        return (
            u(t, y, (t) => e(8, (o = t))),
            (t.$$.update = () => {
                1 & t.$$.l && void 0 !== s && setTimeout(x, 0);
            }),
            [
                s,
                i,
                r,
                g,
                l,
                c,
                d,
                m,
                o,
                y,
                x,
                (t) => {
                    if (c > l) return;
                    let { clientX: n } = t;
                    (p = 1), (f = n);
                },
                (t) => {
                    if (p) {
                        let { clientX: n } = t,
                            o = -(f - n);
                        d
                            ? (y.set(v(b + o), { duration: 0 }), w.push(n))
                            : e(6, (d = Math.abs(o) > 5));
                    }
                },
                () => {
                    if (d) {
                        w = w.slice(-3);
                        let t = w[1] - w[2];
                        (t = w[0] - w[2]),
                            Math.abs(t) > 5 && a(y, (o = v(o - 5 * t)), o);
                    }
                    (w = []), (p = e(6, (d = 0))), (b = o);
                },
                (t) => {
                    e(2, (r = new Xt({ target: t }))),
                        r.open({
                            ...i,
                            focusWrap: m,
                            onOpen() {
                                return e(3, (g = r.items));
                            },
                            onUpdate(t, n) {
                                e(0, (s = n.i));
                            },
                            onClose() {
                                (h = 1), e(1, (i = null));
                            },
                            onClosed() {
                                return (h = 0);
                            },
                        });
                },
                (t) => {
                    e(1, (i = h ? null : t));
                },
                (t) => x(t.target),
                (t) => !d && r.setPosition(t.i),
                (t, n) => "Enter" === n.key && r.setPosition(t.i),
                ({ detail: t }) => {
                    e(4, (l = t.cr.width));
                },
                (t) => {
                    N[t ? "unshift" : "push"](() => {
                        (m = t), e(7, m);
                    });
                },
                ({ detail: t }) => {
                    e(5, (c = t.cr.width)), a(y, (o = 0), o);
                },
            ]
        );
    }
    class an extends ct {
        constructor(t) {
            super(), lt(this, t, un, cn, c, { open: 15 });
        }
        get open() {
            return this.$$.ctx[15];
        }
    }
    const pn = {
        responsive: 1,
        breakpointCols: {
            "min-width: 1500px": 6,
            "min-width: 1200px": 5,
            "min-width: 992px": 4,
            "min-width: 768px": 3,
            "min-width: 576px": 2,
        },
        numCols: 4,
    };
    let fn = null,
        dn = {},
        mn = [];
    function hn() {
        mn.forEach((t) => {
            bn(t);
        });
    }
    function gn() {
        fn && globalThis.cancelAnimationFrame(fn),
            (fn = globalThis.requestAnimationFrame(() => {
                kn();
            }));
    }
    function bn(t) {
        if (2 > vn()) return void t.style.removeProperty("height");
        let n = [];
        Array.from(t.children).forEach((t) => {
            if (t.classList.contains("flexmasonry-break")) return;
            const e = globalThis.getComputedStyle(t),
                o = e.getPropertyValue("order"),
                i = e.getPropertyValue("height");
            n[o - 1] || (n[o - 1] = 0), (n[o - 1] += Math.ceil(parseFloat(i)));
        });
        const e = Math.max(...n);
        t.style.height = e + "px";
    }
    function wn(t) {
        const n = t.querySelectorAll(".flexmasonry-break");
        if (Array.from(n).length !== vn() - 1)
            for (let n = 1; n < vn(); n++) {
                const e = document.createElement("div");
                e.classList.add("flexmasonry-break"),
                    e.classList.add("flexmasonry-break-" + n),
                    t.appendChild(e);
            }
    }
    function yn(t) {
        t.classList.contains("flexmasonry-cols-" + vn()) ||
            ((t.className = t.className.replace(/(flexmasonry-cols-\d+)/, "")),
            t.classList.add("flexmasonry-cols-" + vn()));
    }
    function vn() {
        if (!dn.responsive) return dn.numCols;
        const t = Object.keys(dn.breakpointCols);
        for (const n of t)
            if (globalThis.matchMedia("(" + n + ")").matches)
                return dn.breakpointCols[n];
        return 1;
    }
    function xn(t, n = {}) {
        return (
            (dn = Object.assign(pn, n)),
            yn(t),
            ((t) => {
                const n = t.querySelectorAll(".flexmasonry-break");
                Array.from(n).length !== vn() - 1 &&
                    Array.from(n).forEach((t) => {
                        t.parentNode.removeChild(t);
                    });
            })(t),
            wn(t),
            bn(t),
            this
        );
    }
    function kn(t = {}) {
        return (
            mn.forEach((n) => {
                xn(n, t);
            }),
            this
        );
    }
    var $n = {
        init(t, n = {}) {
            return (
                (mn = "string" == typeof t ? document.querySelectorAll(t) : t),
                (dn = Object.assign(pn, n)),
                mn.forEach((t) => {
                    ((t) => {
                        t.classList.add("flexmasonry"),
                            dn.responsive &&
                                t.classList.add("flexmasonry-responsive"),
                            yn(t),
                            Array.from(t.children).forEach((t) => {
                                t.classList.add("flexmasonry-item");
                            }),
                            wn(t);
                    })(t),
                        bn(t);
                }),
                globalThis.addEventListener("load", hn),
                globalThis.addEventListener("resize", gn),
                this
            );
        },
        refresh: xn,
        refreshAll: kn,
        destroyAll() {
            globalThis.removeEventListener("load", hn),
                globalThis.removeEventListener("resize", gn);
        },
    };
    let Tn,
        { body: Cn } = document,
        Mn = Xt({ target: document.body }),
        _n = document.querySelectorAll("#images a"),
        Sn = document.querySelectorAll("#vids a"),
        An = document.querySelectorAll("[data-html]"),
        On = document.querySelectorAll("#captions a"),
        zn = document.getElementById("inline_gallery"),
        Pn = document.getElementById("firewatch"),
        In = document.querySelectorAll("#thumbnails a"),
        jn = document.querySelectorAll("#responsive_example");
    function Nn(t) {
        for (let n of t) n.addEventListener("click", Rn.bind(null, t));
    }
    function Rn(t, n) {
        n.preventDefault(),
            Mn.open({ el: n.currentTarget, items: t, maxZoom: 3 });
    }
    function Fn(t) {
        t.preventDefault();
        let { currentTarget: n } = t;
        Mn.open({
            el: n,
            items: n,
            onOpen(t, e) {
                if ((n.classList.add("hide-icon"), e.thumb.includes("327")))
                    t.querySelector("video").volume = 0.5;
                else if (e.sources?.includes("audio")) {
                    t.classList.add("bp-audio");
                    const n = t.querySelector("audio");
                    T(
                        n.parentNode,
                        "click",
                        ((o = () => {
                            n[n.paused ? "play" : "pause"]();
                        }),
                        function (t) {
                            t.target === this && o();
                        })
                    );
                }
                var o;
            },
            onClosed() {
                return n.classList.remove("hide-icon");
            },
        });
    }
    function En(t) {
        t.preventDefault(),
            Tn || (Tn = new an({ target: Cn })),
            Tn.open({ el: t.currentTarget, items: In, maxZoom: 4 });
    }
    function Ln(t) {
        let n = t.querySelectorAll(".bp-img");
        return n[n.length - 1];
    }
    function Zn(t, n) {
        t.preventDefault(),
            Mn.open({
                el: n,
                items: [
                    {
                        html: document.getElementById(n.dataset.html).outerHTML,
                        element: n,
                    },
                ],
                intro: "fadeup",
            });
    }
    function qn(t, n, e, o) {
        return `<div class="tweet"><div class="t-head"><img height="48" width="48" src="https://pbs.twimg.com/profile_images/${e}" alt="avatar"/><a href="https://twitter.com/${n}" target="_blank"><span>${t}</span><span>@${n}</span></a><svg viewBox="0 0 24 24"><path d="M23.6 5c-.8.3-1.7.6-2.6.7 1-.6 1.7-1.5 2-2.6-.9.5-1.9 1-3 1.1a4.7 4.7 0 0 0-7.9 4.3 13 13 0 0 1-9.6-4.9A4.7 4.7 0 0 0 4 9.8c-.8 0-1.5-.2-2.2-.6v.1c0 2.3 1.7 4.1 3.8 4.6a4.7 4.7 0 0 1-2.1 0 4.7 4.7 0 0 0 4.3 3.3 9.3 9.3 0 0 1-6.9 2c2.1 1.2 4.5 2 7.2 2A13.2 13.2 0 0 0 21.3 7.4c1-.7 1.7-1.5 2.3-2.5z"/></svg></div>${o}</div>`;
    }
    var Bn;
    (Bn = document.querySelectorAll(".masonry")),
        $n.init(Bn, {
            breakpointCols: { "min-width: 801px": 3, "min-width: 0px": 2 },
        }),
        Nn(_n),
        Nn(On),
        Nn(jn),
        ((t) => {
            for (let n of t) n.addEventListener("click", Fn);
        })(Sn);
    for (let t of An) t.addEventListener("click", (n) => Zn(n, t));
    Pn.addEventListener("click", (t) => {
        let n;
        t.preventDefault(),
            Mn.open({
                onClose() {
                    n.isClosing = 1;
                },
                items: [{ element: t.currentTarget, html: "" }],
                onOpen(t) {
                    n = new Gt({ target: t.querySelector(".bp-html") });
                },
            });
    }),
        document.getElementById("dialog").addEventListener("click", (t) => {
            t.preventDefault(),
                Mn.open({
                    intro: "fadeup",
                    items: [{ html: "" }],
                    onOpen(t) {
                        t.querySelector(".bp-controls").remove(),
                            t.classList.add("blur"),
                            new nn({
                                target: t.querySelector(".bp-html"),
                                k: { bp: Mn },
                            });
                    },
                });
        }),
        document.getElementById("tweet").addEventListener("click", (t) => {
            t.preventDefault();
            let n = [
                {
                    html: qn(
                        "The Baller of the First Sin",
                        "ByYourLogic",
                        "1477900291475484674/FHyfowH4_normal.jpg",
                        '<p>this picture is so fucking iconic. this was when Barney was in the studio for 16 hour sessions perfecting "Clean Up." believe it or not, people were writing him off because he hadn\'t had a hit in a while. little did they know he was about to change everything<a href="https://t.co/AFwh7OkKvn" target="_blank"><img src="https://assets.henrygd.me/bp/images/barney.jpg" alt="barney at desk"/></a></p>'
                    ),
                },
                {
                    html: qn(
                        "Human Mel",
                        "melhuman",
                        "1329824596288299011/m6MLoRZA_normal.jpg",
                        '<p>"There was no place like it, in the whole world, like Coney Island when I was a youngster. No place in the world like it, and it was so fabulous. Now it\'s shrunk down to almost nothing."<a href="https://t.co/f4qRyQ1y0W" target="_blank" style="width:100%"><img src="https://assets.henrygd.me/bp/images/bernie.jpg" style="aspect-ratio:1/1" alt="bernie sanders against backdrop of godspeed you black emperor album"/></a></p>'
                    ),
                },
            ];
            Mn.open({
                intro: "fadeup",
                items: globalThis.innerWidth > 680 ? n : [n[0]],
            });
        });
    for (let t of In) t.addEventListener("click", En);
    (() => {
        let t;
        (t = new IntersectionObserver(
            (n) => {
                n[0].isIntersecting &&
                    (t.disconnect(),
                    (() => {
                        let t = Xt({ target: zn }),
                            n = Array.from(_n).map((t) => ({ ...t.dataset }));
                        t.open({
                            items: n,
                            position: 2,
                            scale: 1,
                            intro: "fadeup",
                            noClose: 1,
                            inline: 1,
                            maxZoom: 4,
                            noPinch: (t) => 800 > t.clientWidth,
                            onImageClick(e, o) {
                                if (e.clientWidth >= 800) return;
                                const i = Ln(e);
                                return (
                                    Mn.open({
                                        items: n.map((t) => ({
                                            ...t,
                                            element: i,
                                        })),
                                        position: o.i,
                                        maxZoom: 3,
                                        onUpdate(n, o) {
                                            t.setPosition(o.i),
                                                setTimeout(() => {
                                                    o.element = Ln(e);
                                                }, 0);
                                        },
                                        onClose(t, n) {
                                            let o =
                                                Ln(e).firstChild?.currentSrc ??
                                                n.img;
                                            Ln(
                                                t
                                            ).style.backgroundImage = `url(${o})`;
                                        },
                                        onOpen: () =>
                                            e.classList.add("hide-controls"),
                                        onClosed: () =>
                                            e.classList.remove("hide-controls"),
                                    }),
                                    1
                                );
                            },
                        });
                    })());
            },
            { root: null, rootMargin: "0px", threshold: 0 }
        )),
            t.observe(zn);
    })(),
        (function () {
            var t = globalThis.location,
                n = globalThis.document,
                e = globalThis.localStorage,
                o = e && e.plausible_ignore;
            function i(e, i) {
                if (
                    !/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(
                        t.hostname
                    ) &&
                    "file:" !== t.protocol &&
                    !(
                        globalThis._phantom ||
                        globalThis.__nightmare ||
                        globalThis.navigator.webdriver ||
                        globalThis.Cypress
                    )
                ) {
                    if ("true" == o) return;
                    var r = {};
                    (r.n = e),
                        (r.u = t.href),
                        (r.d = "biggerpicture.henrygd.me"),
                        (r.r = n.referrer || null),
                        (r.w = globalThis.innerWidth),
                        i && i.meta && (r.m = JSON.stringify(i.meta)),
                        i && i.k && (r.p = JSON.stringify(i.k));
                    var s = new XMLHttpRequest();
                    s.open(
                        "POST",
                        "https://plaus.ftlwebservices.com/api/event",
                        1
                    ),
                        s.setRequestHeader("Content-Type", "text/plain"),
                        s.send(JSON.stringify(r)),
                        (s.onreadystatechange = () => {
                            4 == s.readyState &&
                                i &&
                                i.callback &&
                                i.callback();
                        });
                }
            }
            var r = (globalThis.plausible && globalThis.plausible.q) || [];
            globalThis.plausible = i;
            for (var s, l = 0; r.length > l; l++) i.apply(this, r[l]);
            function c() {
                s !== t.pathname && ((s = t.pathname), i("pageview"));
            }
            var u,
                a = globalThis.history;
            a.pushState &&
                ((u = a.pushState),
                (a.pushState = function () {
                    u.apply(this, arguments), c();
                }),
                globalThis.addEventListener("popstate", c)),
                "prerender" === n.visibilityState
                    ? n.addEventListener("visibilitychange", () => {
                          s || "visible" !== n.visibilityState || c();
                      })
                    : c();
        })(),
        Cn.addEventListener("mousedown", () => Cn.classList.add("using-mouse")),
        Cn.addEventListener("keydown", () =>
            Cn.classList.remove("using-mouse")
        );
})();

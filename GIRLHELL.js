<html lang="en" class="js">

<head>
    <meta charset="utf-8">
    <meta name="theme-color" content="#101122">
    <title>Transactions - VectorStock</title>
    <link rel="preconnect" href="https://cdn.vectorstock.com">
    <link rel="preconnect" href="https://www.googletagmanager.com">
    <link rel="preconnect" href="https://www.google-analytics.com">
    <link rel="alternate" hreflang="en" href="https://www.vectorstock.com/transactions/downloads">
    <link rel="alternate" hreflang="de" href="https://www.vectorstock.com/de/transactions/downloads">
    <link rel="alternate" hreflang="x-default" href="https://www.vectorstock.com/transactions/downloads">
    <script type="text/javascript" async="" src="https://www.googletagmanager.com/gtag/js?id=AW-1056033416&amp;l=dataLayer&amp;cx=c&amp;gtm=45He4bc0v841670343za200" nonce="cveoSZFL+cxNks0R+aEvB4fIbMumTHINQZPrqVA6c2Y="></script>
    <script type="text/javascript" async="" src="https://www.google-analytics.com/analytics.js" nonce="cveoSZFL+cxNks0R+aEvB4fIbMumTHINQZPrqVA6c2Y="></script>
    <script type="text/javascript" async="" src="https://www.googletagmanager.com/gtag/js?id=G-QBXWNL4G7Q&amp;l=dataLayer&amp;cx=c&amp;gtm=45He4bc0v841670343za200" nonce="cveoSZFL+cxNks0R+aEvB4fIbMumTHINQZPrqVA6c2Y="></script>
    <script async="" src="https://public.profitwell.com/js/profitwell.js?auth=1051055e2c0cbe1da2ab7ca0abe9bc55"></script>
    <script defer="" src="https://www.googletagmanager.com/gtm.js?id=GTM-NL6HLLR" nonce="cveoSZFL+cxNks0R+aEvB4fIbMumTHINQZPrqVA6c2Y="></script>
    <script type="text/javascript" nonce="cveoSZFL+cxNks0R+aEvB4fIbMumTHINQZPrqVA6c2Y=">
        (window.NREUM || (NREUM = {})).init = {
            ajax: {
                deny_list: ["bam.nr-data.net"]
            }
        };
        (window.NREUM || (NREUM = {})).loader_config = {
            licenseKey: "02e09611df"
            , applicationID: "156179534"
        };; /*! For license information please see nr-loader-rum-1.272.0.min.js.LICENSE.txt */
        (() => {
            var e, t, r = {
                    8122: (e, t, r) => {
                        "use strict";
                        r.d(t, {
                            a: () => i
                        });
                        var n = r(944);

                        function i(e, t) {
                            try {
                                if (!e || "object" != typeof e) return (0, n.R)(3);
                                if (!t || "object" != typeof t) return (0, n.R)(4);
                                const r = Object.create(Object.getPrototypeOf(t), Object.getOwnPropertyDescriptors(t))
                                    , o = 0 === Object.keys(r).length ? e : r;
                                for (let a in o)
                                    if (void 0 !== e[a]) try {
                                        if (null === e[a]) {
                                            r[a] = null;
                                            continue
                                        }
                                        Array.isArray(e[a]) && Array.isArray(t[a]) ? r[a] = Array.from(new Set([...e[a], ...t[a]])) : "object" == typeof e[a] && "object" == typeof t[a] ? r[a] = i(e[a], t[a]) : r[a] = e[a]
                                    } catch (e) {
                                        (0, n.R)(1, e)
                                    }
                                return r
                            } catch (e) {
                                (0, n.R)(2, e)
                            }
                        }
                    }
                    , 2555: (e, t, r) => {
                        "use strict";
                        r.d(t, {
                            Vp: () => c
                            , fn: () => s
                            , x1: () => u
                        });
                        var n = r(384)
                            , i = r(8122);
                        const o = {
                                beacon: n.NT.beacon
                                , errorBeacon: n.NT.errorBeacon
                                , licenseKey: void 0
                                , applicationID: void 0
                                , sa: void 0
                                , queueTime: void 0
                                , applicationTime: void 0
                                , ttGuid: void 0
                                , user: void 0
                                , account: void 0
                                , product: void 0
                                , extra: void 0
                                , jsAttributes: {}
                                , userAttributes: void 0
                                , atts: void 0
                                , transactionName: void 0
                                , tNamePlain: void 0
                            }
                            , a = {};

                        function s(e) {
                            try {
                                const t = c(e);
                                return !!t.licenseKey && !!t.errorBeacon && !!t.applicationID
                            } catch (e) {
                                return !1
                            }
                        }

                        function c(e) {
                            if (!e) throw new Error("All info objects require an agent identifier!");
                            if (!a[e]) throw new Error("Info for ".concat(e, " was never set"));
                            return a[e]
                        }

                        function u(e, t) {
                            if (!e) throw new Error("All info objects require an agent identifier!");
                            a[e] = (0, i.a)(t, o);
                            const r = (0, n.nY)(e);
                            r && (r.info = a[e])
                        }
                    }
                    , 9417: (e, t, r) => {
                        "use strict";
                        r.d(t, {
                            D0: () => g
                            , gD: () => h
                            , xN: () => p
                        });
                        var n = r(993);
                        const i = e => {
                            if (!e || "string" != typeof e) return !1;
                            try {
                                document.createDocumentFragment().querySelector(e)
                            } catch {
                                return !1
                            }
                            return !0
                        };
                        var o = r(2614)
                            , a = r(944)
                            , s = r(384)
                            , c = r(8122);
                        const u = "[data-nr-mask]"
                            , d = () => {
                                const e = {
                                    mask_selector: "*"
                                    , block_selector: "[data-nr-block]"
                                    , mask_input_options: {
                                        color: !1
                                        , date: !1
                                        , "datetime-local": !1
                                        , email: !1
                                        , month: !1
                                        , number: !1
                                        , range: !1
                                        , search: !1
                                        , tel: !1
                                        , text: !1
                                        , time: !1
                                        , url: !1
                                        , week: !1
                                        , textarea: !1
                                        , select: !1
                                        , password: !0
                                    }
                                };
                                return {
                                    ajax: {
                                        deny_list: void 0
                                        , block_internal: !0
                                        , enabled: !0
                                        , harvestTimeSeconds: 10
                                        , autoStart: !0
                                    }
                                    , distributed_tracing: {
                                        enabled: void 0
                                        , exclude_newrelic_header: void 0
                                        , cors_use_newrelic_header: void 0
                                        , cors_use_tracecontext_headers: void 0
                                        , allowed_origins: void 0
                                    }
                                    , feature_flags: []
                                    , generic_events: {
                                        enabled: !0
                                        , harvestTimeSeconds: 30
                                        , autoStart: !0
                                    }
                                    , harvest: {
                                        tooManyRequestsDelay: 60
                                    }
                                    , jserrors: {
                                        enabled: !0
                                        , harvestTimeSeconds: 10
                                        , autoStart: !0
                                    }
                                    , logging: {
                                        enabled: !0
                                        , harvestTimeSeconds: 10
                                        , autoStart: !0
                                        , level: n.p_.INFO
                                    }
                                    , metrics: {
                                        enabled: !0
                                        , autoStart: !0
                                    }
                                    , obfuscate: void 0
                                    , page_action: {
                                        enabled: !0
                                    }
                                    , page_view_event: {
                                        enabled: !0
                                        , autoStart: !0
                                    }
                                    , page_view_timing: {
                                        enabled: !0
                                        , harvestTimeSeconds: 30
                                        , autoStart: !0
                                    }
                                    , performance: {
                                        capture_marks: !1
                                        , capture_measures: !1
                                    }
                                    , privacy: {
                                        cookies_enabled: !0
                                    }
                                    , proxy: {
                                        assets: void 0
                                        , beacon: void 0
                                    }
                                    , session: {
                                        expiresMs: o.wk
                                        , inactiveMs: o.BB
                                    }
                                    , session_replay: {
                                        autoStart: !0
                                        , enabled: !1
                                        , harvestTimeSeconds: 60
                                        , preload: !1
                                        , sampling_rate: 10
                                        , error_sampling_rate: 100
                                        , collect_fonts: !1
                                        , inline_images: !1
                                        , fix_stylesheets: !0
                                        , mask_all_inputs: !0
                                        , get mask_text_selector() {
                                            return e.mask_selector
                                        }
                                        , set mask_text_selector(t) {
                                            i(t) ? e.mask_selector = "".concat(t, ",").concat(u) : "" === t || null === t ? e.mask_selector = u : (0, a.R)(5, t)
                                        }
                                        , get block_class() {
                                            return "nr-block"
                                        }
                                        , get ignore_class() {
                                            return "nr-ignore"
                                        }
                                        , get mask_text_class() {
                                            return "nr-mask"
                                        }
                                        , get block_selector() {
                                            return e.block_selector
                                        }
                                        , set block_selector(t) {
                                            i(t) ? e.block_selector += ",".concat(t) : "" !== t && (0, a.R)(6, t)
                                        }
                                        , get mask_input_options() {
                                            return e.mask_input_options
                                        }
                                        , set mask_input_options(t) {
                                            t && "object" == typeof t ? e.mask_input_options = {
                                                ...t
                                                , password: !0
                                            } : (0, a.R)(7, t)
                                        }
                                    }
                                    , session_trace: {
                                        enabled: !0
                                        , harvestTimeSeconds: 10
                                        , autoStart: !0
                                    }
                                    , soft_navigations: {
                                        enabled: !0
                                        , harvestTimeSeconds: 10
                                        , autoStart: !0
                                    }
                                    , spa: {
                                        enabled: !0
                                        , harvestTimeSeconds: 10
                                        , autoStart: !0
                                    }
                                    , ssl: void 0
                                    , user_actions: {
                                        enabled: !0
                                    }
                                }
                            }
                            , l = {}
                            , f = "All configuration objects require an agent identifier!";

                        function g(e) {
                            if (!e) throw new Error(f);
                            if (!l[e]) throw new Error("Configuration for ".concat(e, " was never set"));
                            return l[e]
                        }

                        function p(e, t) {
                            if (!e) throw new Error(f);
                            l[e] = (0, c.a)(t, d());
                            const r = (0, s.nY)(e);
                            r && (r.init = l[e])
                        }

                        function h(e, t) {
                            if (!e) throw new Error(f);
                            var r = g(e);
                            if (r) {
                                for (var n = t.split("."), i = 0; i < n.length - 1; i++)
                                    if ("object" != typeof(r = r[n[i]])) return;
                                r = r[n[n.length - 1]]
                            }
                            return r
                        }
                    }
                    , 3371: (e, t, r) => {
                        "use strict";
                        r.d(t, {
                            V: () => f
                            , f: () => l
                        });
                        var n = r(8122)
                            , i = r(384)
                            , o = r(6154)
                            , a = r(9324);
                        let s = 0;
                        const c = {
                                buildEnv: a.F3
                                , distMethod: a.Xs
                                , version: a.xv
                                , originTime: o.WN
                            }
                            , u = {
                                customTransaction: void 0
                                , disabled: !1
                                , isolatedBacklog: !1
                                , loaderType: void 0
                                , maxBytes: 3e4
                                , onerror: void 0
                                , ptid: void 0
                                , releaseIds: {}
                                , appMetadata: {}
                                , session: void 0
                                , denyList: void 0
                                , timeKeeper: void 0
                                , obfuscator: void 0
                            }
                            , d = {};

                        function l(e) {
                            if (!e) throw new Error("All runtime objects require an agent identifier!");
                            if (!d[e]) throw new Error("Runtime for ".concat(e, " was never set"));
                            return d[e]
                        }

                        function f(e, t) {
                            if (!e) throw new Error("All runtime objects require an agent identifier!");
                            d[e] = {
                                ...(0, n.a)(t, u)
                                , ...c
                            }, Object.hasOwnProperty.call(d[e], "harvestCount") || Object.defineProperty(d[e], "harvestCount", {
                                get: () => ++s
                            });
                            const r = (0, i.nY)(e);
                            r && (r.runtime = d[e])
                        }
                    }
                    , 9324: (e, t, r) => {
                        "use strict";
                        r.d(t, {
                            F3: () => i
                            , Xs: () => o
                            , xv: () => n
                        });
                        const n = "1.272.0"
                            , i = "PROD"
                            , o = "CDN"
                    }
                    , 6154: (e, t, r) => {
                        "use strict";
                        r.d(t, {
                            OF: () => c
                            , RI: () => i
                            , WN: () => d
                            , bv: () => o
                            , gm: () => a
                            , mw: () => s
                            , sb: () => u
                        });
                        var n = r(1863);
                        const i = "undefined" != typeof window && !!window.document
                            , o = "undefined" != typeof WorkerGlobalScope && ("undefined" != typeof self && self instanceof WorkerGlobalScope && self.navigator instanceof WorkerNavigator || "undefined" != typeof globalThis && globalThis instanceof WorkerGlobalScope && globalThis.navigator instanceof WorkerNavigator)
                            , a = i ? window : "undefined" != typeof WorkerGlobalScope && ("undefined" != typeof self && self instanceof WorkerGlobalScope && self || "undefined" != typeof globalThis && globalThis instanceof WorkerGlobalScope && globalThis)
                            , s = Boolean("hidden" === a?.document?.visibilityState)
                            , c = /iPad|iPhone|iPod/.test(a.navigator?.userAgent)
                            , u = c && "undefined" == typeof SharedWorker
                            , d = ((() => {
                                const e = a.navigator?.userAgent?.match(/Firefox[/\s](\d+\.\d+)/);
                                Array.isArray(e) && e.length >= 2 && e[1]
                            })(), Date.now() - (0, n.t)())
                    }
                    , 1687: (e, t, r) => {
                        "use strict";
                        r.d(t, {
                            Ak: () => c
                            , Ze: () => l
                            , x3: () => u
                        });
                        var n = r(7836)
                            , i = r(3606)
                            , o = r(860)
                            , a = r(2646);
                        const s = {};

                        function c(e, t) {
                            const r = {
                                staged: !1
                                , priority: o.P[t] || 0
                            };
                            d(e), s[e].get(t) || s[e].set(t, r)
                        }

                        function u(e, t) {
                            e && s[e] && (s[e].get(t) && s[e].delete(t), g(e, t, !1), s[e].size && f(e))
                        }

                        function d(e) {
                            if (!e) throw new Error("agentIdentifier required");
                            s[e] || (s[e] = new Map)
                        }

                        function l(e = "", t = "feature", r = !1) {
                            if (d(e), !e || !s[e].get(t) || r) return g(e, t);
                            s[e].get(t).staged = !0, f(e)
                        }

                        function f(e) {
                            const t = Array.from(s[e]);
                            t.every((([e, t]) => t.staged)) && (t.sort(((e, t) => e[1].priority - t[1].priority)), t.forEach((([t]) => {
                                s[e].delete(t), g(e, t)
                            })))
                        }

                        function g(e, t, r = !0) {
                            const o = e ? n.ee.get(e) : n.ee
                                , s = i.i.handlers;
                            if (!o.aborted && o.backlog && s) {
                                if (r) {
                                    const e = o.backlog[t]
                                        , r = s[t];
                                    if (r) {
                                        for (let t = 0; e && t < e.length; ++t) p(e[t], r);
                                        Object.entries(r).forEach((([e, t]) => {
                                            Object.values(t || {}).forEach((t => {
                                                t[0]?.on && t[0]?.context() instanceof a.y && t[0].on(e, t[1])
                                            }))
                                        }))
                                    }
                                }
                                o.isolatedBacklog || delete s[t], o.backlog[t] = null, o.emit("drain-" + t, [])
                            }
                        }

                        function p(e, t) {
                            var r = e[1];
                            Object.values(t[r] || {}).forEach((t => {
                                var r = e[0];
                                if (t[0] === r) {
                                    var n = t[1]
                                        , i = e[3]
                                        , o = e[2];
                                    n.apply(i, o)
                                }
                            }))
                        }
                    }
                    , 7836: (e, t, r) => {
                        "use strict";
                        r.d(t, {
                            P: () => c
                            , ee: () => u
                        });
                        var n = r(384)
                            , i = r(8990)
                            , o = r(3371)
                            , a = r(2646)
                            , s = r(5607);
                        const c = "nr@context:".concat(s.W)
                            , u = function e(t, r) {
                                var n = {}
                                    , s = {}
                                    , d = {}
                                    , l = !1;
                                try {
                                    l = 16 === r.length && (0, o.f)(r).isolatedBacklog
                                } catch (e) {}
                                var f = {
                                    on: p
                                    , addEventListener: p
                                    , removeEventListener: function(e, t) {
                                        var r = n[e];
                                        if (!r) return;
                                        for (var i = 0; i < r.length; i++) r[i] === t && r.splice(i, 1)
                                    }
                                    , emit: function(e, r, n, i, o) {
                                        !1 !== o && (o = !0);
                                        if (u.aborted && !i) return;
                                        t && o && t.emit(e, r, n);
                                        for (var a = g(n), c = h(e), d = c.length, l = 0; l < d; l++) c[l].apply(a, r);
                                        var p = v()[s[e]];
                                        p && p.push([f, e, r, a]);
                                        return a
                                    }
                                    , get: m
                                    , listeners: h
                                    , context: g
                                    , buffer: function(e, t) {
                                        const r = v();
                                        if (t = t || "feature", f.aborted) return;
                                        Object.entries(e || {}).forEach((([e, n]) => {
                                            s[n] = t, t in r || (r[t] = [])
                                        }))
                                    }
                                    , abort: function() {
                                        f._aborted = !0, Object.keys(f.backlog).forEach((e => {
                                            delete f.backlog[e]
                                        }))
                                    }
                                    , isBuffering: function(e) {
                                        return !!v()[s[e]]
                                    }
                                    , debugId: r
                                    , backlog: l ? {} : t && "object" == typeof t.backlog ? t.backlog : {}
                                    , isolatedBacklog: l
                                };
                                return Object.defineProperty(f, "aborted", {
                                    get: () => {
                                        let e = f._aborted || !1;
                                        return e || (t && (e = t.aborted), e)
                                    }
                                }), f;

                                function g(e) {
                                    return e && e instanceof a.y ? e : e ? (0, i.I)(e, c, (() => new a.y(c))) : new a.y(c)
                                }

                                function p(e, t) {
                                    n[e] = h(e).concat(t)
                                }

                                function h(e) {
                                    return n[e] || []
                                }

                                function m(t) {
                                    return d[t] = d[t] || e(f, t)
                                }

                                function v() {
                                    return f.backlog
                                }
                            }(void 0, "globalEE")
                            , d = (0, n.Zm)();
                        d.ee || (d.ee = u)
                    }
                    , 2646: (e, t, r) => {
                        "use strict";
                        r.d(t, {
                            y: () => n
                        });
                        class n {
                            constructor(e) {
                                this.contextId = e
                            }
                        }
                    }
                    , 9908: (e, t, r) => {
                        "use strict";
                        r.d(t, {
                            d: () => n
                            , p: () => i
                        });
                        var n = r(7836).ee.get("handle");

                        function i(e, t, r, i, o) {
                            o ? (o.buffer([e], i), o.emit(e, t, r)) : (n.buffer([e], i), n.emit(e, t, r))
                        }
                    }
                    , 3606: (e, t, r) => {
                        "use strict";
                        r.d(t, {
                            i: () => o
                        });
                        var n = r(9908);
                        o.on = a;
                        var i = o.handlers = {};

                        function o(e, t, r, o) {
                            a(o || n.d, i, e, t, r)
                        }

                        function a(e, t, r, i, o) {
                            o || (o = "feature"), e || (e = n.d);
                            var a = t[o] = t[o] || {};
                            (a[r] = a[r] || []).push([e, i])
                        }
                    }
                    , 3878: (e, t, r) => {
                        "use strict";

                        function n(e, t) {
                            return {
                                capture: e
                                , passive: !1
                                , signal: t
                            }
                        }

                        function i(e, t, r = !1, i) {
                            window.addEventListener(e, t, n(r, i))
                        }

                        function o(e, t, r = !1, i) {
                            document.addEventListener(e, t, n(r, i))
                        }
                        r.d(t, {
                            DD: () => o
                            , jT: () => n
                            , sp: () => i
                        })
                    }
                    , 5607: (e, t, r) => {
                        "use strict";
                        r.d(t, {
                            W: () => n
                        });
                        const n = (0, r(9566).bz)()
                    }
                    , 9566: (e, t, r) => {
                        "use strict";
                        r.d(t, {
                            LA: () => s
                            , bz: () => a
                        });
                        var n = r(6154);
                        const i = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";

                        function o(e, t) {
                            return e ? 15 & e[t] : 16 * Math.random() | 0
                        }

                        function a() {
                            const e = n.gm?.crypto || n.gm?.msCrypto;
                            let t, r = 0;
                            return e && e.getRandomValues && (t = e.getRandomValues(new Uint8Array(30))), i.split("").map((e => "x" === e ? o(t, r++).toString(16) : "y" === e ? (3 & o() | 8).toString(16) : e)).join("")
                        }

                        function s(e) {
                            const t = n.gm?.crypto || n.gm?.msCrypto;
                            let r, i = 0;
                            t && t.getRandomValues && (r = t.getRandomValues(new Uint8Array(e)));
                            const a = [];
                            for (var s = 0; s < e; s++) a.push(o(r, i++).toString(16));
                            return a.join("")
                        }
                    }
                    , 2614: (e, t, r) => {
                        "use strict";
                        r.d(t, {
                            BB: () => a
                            , H3: () => n
                            , g: () => u
                            , iL: () => c
                            , tS: () => s
                            , uh: () => i
                            , wk: () => o
                        });
                        const n = "NRBA"
                            , i = "SESSION"
                            , o = 144e5
                            , a = 18e5
                            , s = {
                                STARTED: "session-started"
                                , PAUSE: "session-pause"
                                , RESET: "session-reset"
                                , RESUME: "session-resume"
                                , UPDATE: "session-update"
                            }
                            , c = {
                                SAME_TAB: "same-tab"
                                , CROSS_TAB: "cross-tab"
                            }
                            , u = {
                                OFF: 0
                                , FULL: 1
                                , ERROR: 2
                            }
                    }
                    , 1863: (e, t, r) => {
                        "use strict";

                        function n() {
                            return Math.floor(performance.now())
                        }
                        r.d(t, {
                            t: () => n
                        })
                    }
                    , 944: (e, t, r) => {
                        "use strict";

                        function n(e, t) {
                            "function" == typeof console.debug && console.debug("New Relic Warning: https://github.com/newrelic/newrelic-browser-agent/blob/main/docs/warning-codes.md#".concat(e), t)
                        }
                        r.d(t, {
                            R: () => n
                        })
                    }
                    , 5284: (e, t, r) => {
                        "use strict";
                        r.d(t, {
                            t: () => c
                            , B: () => s
                        });
                        var n = r(7836)
                            , i = r(6154);
                        const o = "newrelic";
                        const a = new Set
                            , s = {};

                        function c(e, t) {
                            const r = n.ee.get(t);
                            s[t] ??= {}, e && "object" == typeof e && (a.has(t) || (r.emit("rumresp", [e]), s[t] = e, a.add(t), function(e = {}) {
                                try {
                                    i.gm.dispatchEvent(new CustomEvent(o, {
                                        detail: e
                                    }))
                                } catch (e) {}
                            }({
                                loaded: !0
                            })))
                        }
                    }
                    , 8990: (e, t, r) => {
                        "use strict";
                        r.d(t, {
                            I: () => i
                        });
                        var n = Object.prototype.hasOwnProperty;

                        function i(e, t, r) {
                            if (n.call(e, t)) return e[t];
                            var i = r();
                            if (Object.defineProperty && Object.keys) try {
                                return Object.defineProperty(e, t, {
                                    value: i
                                    , writable: !0
                                    , enumerable: !1
                                }), i
                            } catch (e) {}
                            return e[t] = i, i
                        }
                    }
                    , 6389: (e, t, r) => {
                        "use strict";

                        function n(e, t = 500, r = {}) {
                            const n = r?.leading || !1;
                            let i;
                            return (...r) => {
                                n && void 0 === i && (e.apply(this, r), i = setTimeout((() => {
                                    i = clearTimeout(i)
                                }), t)), n || (clearTimeout(i), i = setTimeout((() => {
                                    e.apply(this, r)
                                }), t))
                            }
                        }

                        function i(e) {
                            let t = !1;
                            return (...r) => {
                                t || (t = !0, e.apply(this, r))
                            }
                        }
                        r.d(t, {
                            J: () => i
                            , s: () => n
                        })
                    }
                    , 5289: (e, t, r) => {
                        "use strict";
                        r.d(t, {
                            GG: () => o
                            , sB: () => a
                        });
                        var n = r(3878);

                        function i() {
                            return "undefined" == typeof document || "complete" === document.readyState
                        }

                        function o(e, t) {
                            if (i()) return e();
                            (0, n.sp)("load", e, t)
                        }

                        function a(e) {
                            if (i()) return e();
                            (0, n.DD)("DOMContentLoaded", e)
                        }
                    }
                    , 384: (e, t, r) => {
                        "use strict";
                        r.d(t, {
                            NT: () => o
                            , US: () => d
                            , Zm: () => a
                            , bQ: () => c
                            , dV: () => s
                            , nY: () => u
                            , pV: () => l
                        });
                        var n = r(6154)
                            , i = r(1863);
                        const o = {
                            beacon: "bam.nr-data.net"
                            , errorBeacon: "bam.nr-data.net"
                        };

                        function a() {
                            return n.gm.NREUM || (n.gm.NREUM = {}), void 0 === n.gm.newrelic && (n.gm.newrelic = n.gm.NREUM), n.gm.NREUM
                        }

                        function s() {
                            let e = a();
                            return e.o || (e.o = {
                                ST: n.gm.setTimeout
                                , SI: n.gm.setImmediate
                                , CT: n.gm.clearTimeout
                                , XHR: n.gm.XMLHttpRequest
                                , REQ: n.gm.Request
                                , EV: n.gm.Event
                                , PR: n.gm.Promise
                                , MO: n.gm.MutationObserver
                                , FETCH: n.gm.fetch
                                , WS: n.gm.WebSocket
                            }), e
                        }

                        function c(e, t) {
                            let r = a();
                            r.initializedAgents ??= {}, t.initializedAt = {
                                ms: (0, i.t)()
                                , date: new Date
                            }, r.initializedAgents[e] = t
                        }

                        function u(e) {
                            let t = a();
                            return t.initializedAgents?.[e]
                        }

                        function d(e, t) {
                            a()[e] = t
                        }

                        function l() {
                            return function() {
                                    let e = a();
                                    const t = e.info || {};
                                    e.info = {
                                        beacon: o.beacon
                                        , errorBeacon: o.errorBeacon
                                        , ...t
                                    }
                                }()
                                , function() {
                                    let e = a();
                                    const t = e.init || {};
                                    e.init = {
                                        ...t
                                    }
                                }(), s()
                                , function() {
                                    let e = a();
                                    const t = e.loader_config || {};
                                    e.loader_config = {
                                        ...t
                                    }
                                }(), a()
                        }
                    }
                    , 2843: (e, t, r) => {
                        "use strict";
                        r.d(t, {
                            u: () => i
                        });
                        var n = r(3878);

                        function i(e, t = !1, r, i) {
                            (0, n.DD)("visibilitychange", (function() {
                                if (t) return void("hidden" === document.visibilityState && e());
                                e(document.visibilityState)
                            }), r, i)
                        }
                    }
                    , 3434: (e, t, r) => {
                        "use strict";
                        r.d(t, {
                            YM: () => c
                        });
                        var n = r(7836)
                            , i = r(5607);
                        const o = "nr@original:".concat(i.W);
                        var a = Object.prototype.hasOwnProperty
                            , s = !1;

                        function c(e, t) {
                            return e || (e = n.ee), r.inPlace = function(e, t, n, i, o) {
                                n || (n = "");
                                const a = "-" === n.charAt(0);
                                for (let s = 0; s < t.length; s++) {
                                    const c = t[s]
                                        , u = e[c];
                                    d(u) || (e[c] = r(u, a ? c + n : n, i, c, o))
                                }
                            }, r.flag = o, r;

                            function r(t, r, n, s, c) {
                                return d(t) ? t : (r || (r = ""), nrWrapper[o] = t, function(e, t, r) {
                                    if (Object.defineProperty && Object.keys) try {
                                        return Object.keys(e).forEach((function(r) {
                                            Object.defineProperty(t, r, {
                                                get: function() {
                                                    return e[r]
                                                }
                                                , set: function(t) {
                                                    return e[r] = t, t
                                                }
                                            })
                                        })), t
                                    } catch (e) {
                                        u([e], r)
                                    }
                                    for (var n in e) a.call(e, n) && (t[n] = e[n])
                                }(t, nrWrapper, e), nrWrapper);

                                function nrWrapper() {
                                    var o, a, d, l;
                                    try {
                                        a = this, o = [...arguments], d = "function" == typeof n ? n(o, a) : n || {}
                                    } catch (t) {
                                        u([t, "", [o, a, s], d], e)
                                    }
                                    i(r + "start", [o, a, s], d, c);
                                    try {
                                        return l = t.apply(a, o)
                                    } catch (e) {
                                        throw i(r + "err", [o, a, e], d, c), e
                                    } finally {
                                        i(r + "end", [o, a, l], d, c)
                                    }
                                }
                            }

                            function i(r, n, i, o) {
                                if (!s || t) {
                                    var a = s;
                                    s = !0;
                                    try {
                                        e.emit(r, n, i, t, o)
                                    } catch (t) {
                                        u([t, r, n, i], e)
                                    }
                                    s = a
                                }
                            }
                        }

                        function u(e, t) {
                            t || (t = n.ee);
                            try {
                                t.emit("internal-error", e)
                            } catch (e) {}
                        }

                        function d(e) {
                            return !(e && "function" == typeof e && e.apply && !e[o])
                        }
                    }
                    , 993: (e, t, r) => {
                        "use strict";
                        r.d(t, {
                            ET: () => o
                            , p_: () => i
                        });
                        var n = r(860);
                        const i = {
                                ERROR: "ERROR"
                                , WARN: "WARN"
                                , INFO: "INFO"
                                , DEBUG: "DEBUG"
                                , TRACE: "TRACE"
                            }
                            , o = "log";
                        n.K.logging
                    }
                    , 3969: (e, t, r) => {
                        "use strict";
                        r.d(t, {
                            TZ: () => n
                            , XG: () => s
                            , rs: () => i
                            , xV: () => a
                            , z_: () => o
                        });
                        const n = r(860).K.metrics
                            , i = "sm"
                            , o = "cm"
                            , a = "storeSupportabilityMetrics"
                            , s = "storeEventMetrics"
                    }
                    , 6630: (e, t, r) => {
                        "use strict";
                        r.d(t, {
                            T: () => n
                        });
                        const n = r(860).K.pageViewEvent
                    }
                    , 782: (e, t, r) => {
                        "use strict";
                        r.d(t, {
                            T: () => n
                        });
                        const n = r(860).K.pageViewTiming
                    }
                    , 6344: (e, t, r) => {
                        "use strict";
                        r.d(t, {
                            G4: () => i
                        });
                        var n = r(2614);
                        r(860).K.sessionReplay;
                        const i = {
                            RECORD: "recordReplay"
                            , PAUSE: "pauseReplay"
                            , REPLAY_RUNNING: "replayRunning"
                            , ERROR_DURING_REPLAY: "errorDuringReplay"
                        };
                        n.g.ERROR, n.g.FULL, n.g.OFF
                    }
                    , 4234: (e, t, r) => {
                        "use strict";
                        r.d(t, {
                            W: () => o
                        });
                        var n = r(7836)
                            , i = r(1687);
                        class o {
                            constructor(e, t) {
                                this.agentIdentifier = e, this.ee = n.ee.get(e), this.featureName = t, this.blocked = !1
                            }
                            deregisterDrain() {
                                (0, i.x3)(this.agentIdentifier, this.featureName)
                            }
                        }
                    }
                    , 7603: (e, t, r) => {
                        "use strict";
                        r.d(t, {
                            j: () => P
                        });
                        var n = r(860)
                            , i = r(2555)
                            , o = r(3371)
                            , a = r(9908)
                            , s = r(7836)
                            , c = r(1687)
                            , u = r(5289)
                            , d = r(6154)
                            , l = r(944)
                            , f = r(3969)
                            , g = r(384)
                            , p = r(6344);
                        const h = ["setErrorHandler", "finished", "addToTrace", "addRelease", "addPageAction", "setCurrentRouteName", "setPageViewName", "setCustomAttribute", "interaction", "noticeError", "setUserId", "setApplicationVersion", "start", p.G4.RECORD, p.G4.PAUSE, "log", "wrapLogger"]
                            , m = ["setErrorHandler", "finished", "addToTrace", "addRelease"];
                        var v = r(1863)
                            , b = r(2614)
                            , y = r(993);
                        var w = r(2646)
                            , A = r(3434);

                        function R(e, t, r, n) {
                            if ("object" != typeof t || !t || "string" != typeof r || !r || "function" != typeof t[r]) return (0, l.R)(29);
                            const i = function(e) {
                                    return (e || s.ee).get("logger")
                                }(e)
                                , o = (0, A.YM)(i)
                                , a = new w.y(s.P);
                            return a.level = n.level, a.customAttributes = n.customAttributes, o.inPlace(t, [r], "wrap-logger-", a), i
                        }

                        function E() {
                            const e = (0, g.pV)();
                            h.forEach((t => {
                                e[t] = (...r) => function(t, ...r) {
                                    let n = [];
                                    return Object.values(e.initializedAgents).forEach((e => {
                                        e && e.api ? e.exposed && e.api[t] && n.push(e.api[t](...r)) : (0, l.R)(38, t)
                                    })), n.length > 1 ? n : n[0]
                                }(t, ...r)
                            }))
                        }
                        const _ = {};

                        function x(e, t, g = !1) {
                            t || (0, c.Ak)(e, "api");
                            const h = {};
                            var w = s.ee.get(e)
                                , A = w.get("tracer");
                            _[e] = b.g.OFF, w.on(p.G4.REPLAY_RUNNING, (t => {
                                _[e] = t
                            }));
                            var E = "api-"
                                , x = E + "ixn-";

                            function N(t, r, n, o) {
                                const a = (0, i.Vp)(e);
                                return null === r ? delete a.jsAttributes[t] : (0, i.x1)(e, {
                                    ...a
                                    , jsAttributes: {
                                        ...a.jsAttributes
                                        , [t]: r
                                    }
                                }), k(E, n, !0, o || null === r ? "session" : void 0)(t, r)
                            }

                            function T() {}
                            h.log = function(e, {
                                customAttributes: t = {}
                                , level: r = y.p_.INFO
                            } = {}) {
                                (0, a.p)(f.xV, ["API/log/called"], void 0, n.K.metrics, w)
                                , function(e, t, r = {}, i = y.p_.INFO) {
                                    (0, a.p)(f.xV, ["API/logging/".concat(i.toLowerCase(), "/called")], void 0, n.K.metrics, e), (0, a.p)(y.ET, [(0, v.t)(), t, r, i], void 0, n.K.logging, e)
                                }(w, e, t, r)
                            }, h.wrapLogger = (e, t, {
                                customAttributes: r = {}
                                , level: i = y.p_.INFO
                            } = {}) => {
                                (0, a.p)(f.xV, ["API/wrapLogger/called"], void 0, n.K.metrics, w), R(w, e, t, {
                                    customAttributes: r
                                    , level: i
                                })
                            }, m.forEach((e => {
                                h[e] = k(E, e, !0, "api")
                            })), h.addPageAction = k(E, "addPageAction", !0, n.K.genericEvents), h.setPageViewName = function(t, r) {
                                if ("string" == typeof t) return "/" !== t.charAt(0) && (t = "/" + t), (0, o.f)(e).customTransaction = (r || "http://custom.transaction") + t, k(E, "setPageViewName", !0)()
                            }, h.setCustomAttribute = function(e, t, r = !1) {
                                if ("string" == typeof e) {
                                    if (["string", "number", "boolean"].includes(typeof t) || null === t) return N(e, t, "setCustomAttribute", r);
                                    (0, l.R)(40, typeof t)
                                } else(0, l.R)(39, typeof e)
                            }, h.setUserId = function(e) {
                                if ("string" == typeof e || null === e) return N("enduser.id", e, "setUserId", !0);
                                (0, l.R)(41, typeof e)
                            }, h.setApplicationVersion = function(e) {
                                if ("string" == typeof e || null === e) return N("application.version", e, "setApplicationVersion", !1);
                                (0, l.R)(42, typeof e)
                            }, h.start = () => {
                                try {
                                    (0, a.p)(f.xV, ["API/start/called"], void 0, n.K.metrics, w), w.emit("manual-start-all")
                                } catch (e) {
                                    (0, l.R)(23, e)
                                }
                            }, h[p.G4.RECORD] = function() {
                                (0, a.p)(f.xV, ["API/recordReplay/called"], void 0, n.K.metrics, w), (0, a.p)(p.G4.RECORD, [], void 0, n.K.sessionReplay, w)
                            }, h[p.G4.PAUSE] = function() {
                                (0, a.p)(f.xV, ["API/pauseReplay/called"], void 0, n.K.metrics, w), (0, a.p)(p.G4.PAUSE, [], void 0, n.K.sessionReplay, w)
                            }, h.interaction = function(e) {
                                return (new T).get("object" == typeof e ? e : {})
                            };
                            const S = T.prototype = {
                                createTracer: function(e, t) {
                                    var r = {}
                                        , i = this
                                        , o = "function" == typeof t;
                                    return (0, a.p)(f.xV, ["API/createTracer/called"], void 0, n.K.metrics, w), g || (0, a.p)(x + "tracer", [(0, v.t)(), e, r], i, n.K.spa, w)
                                        , function() {
                                            if (A.emit((o ? "" : "no-") + "fn-start", [(0, v.t)(), i, o], r), o) try {
                                                return t.apply(this, arguments)
                                            } catch (e) {
                                                const t = "string" == typeof e ? new Error(e) : e;
                                                throw A.emit("fn-err", [arguments, this, t], r), t
                                            } finally {
                                                A.emit("fn-end", [(0, v.t)()], r)
                                            }
                                        }
                                }
                            };

                            function k(e, t, r, i) {
                                return function() {
                                    return (0, a.p)(f.xV, ["API/" + t + "/called"], void 0, n.K.metrics, w), i && (0, a.p)(e + t, [(0, v.t)(), ...arguments], r ? null : this, i, w), r ? void 0 : this
                                }
                            }

                            function I() {
                                r.e(296).then(r.bind(r, 8778)).then((({
                                    setAPI: t
                                }) => {
                                    t(e), (0, c.Ze)(e, "api")
                                })).catch((e => {
                                    (0, l.R)(27, e), w.abort()
                                }))
                            }
                            return ["actionText", "setName", "setAttribute", "save", "ignore", "onEnd", "getContext", "end", "get"].forEach((e => {
                                S[e] = k(x, e, void 0, g ? n.K.softNav : n.K.spa)
                            })), h.setCurrentRouteName = g ? k(x, "routeName", void 0, n.K.softNav) : k(E, "routeName", !0, n.K.spa), h.noticeError = function(t, r) {
                                "string" == typeof t && (t = new Error(t)), (0, a.p)(f.xV, ["API/noticeError/called"], void 0, n.K.metrics, w), (0, a.p)("err", [t, (0, v.t)(), !1, r, !!_[e]], void 0, n.K.jserrors, w)
                            }, d.RI ? (0, u.GG)((() => I()), !0) : I(), h
                        }
                        var N = r(9417)
                            , T = r(8122);
                        const S = {
                                accountID: void 0
                                , trustKey: void 0
                                , agentID: void 0
                                , licenseKey: void 0
                                , applicationID: void 0
                                , xpid: void 0
                            }
                            , k = {};
                        var I = r(5284);
                        const j = e => {
                            const t = e.startsWith("http");
                            e += "/", r.p = t ? e : "https://" + e
                        };
                        let O = !1;

                        function P(e, t = {}, r, n) {
                            let {
                                init: a
                                , info: c
                                , loader_config: u
                                , runtime: l = {}
                                , exposed: f = !0
                            } = t;
                            l.loaderType = r;
                            const p = (0, g.pV)();
                            c || (a = p.init, c = p.info, u = p.loader_config), (0, N.xN)(e.agentIdentifier, a || {})
                                , function(e, t) {
                                    if (!e) throw new Error("All loader-config objects require an agent identifier!");
                                    k[e] = (0, T.a)(t, S);
                                    const r = (0, g.nY)(e);
                                    r && (r.loader_config = k[e])
                                }(e.agentIdentifier, u || {}), c.jsAttributes ??= {}, d.bv && (c.jsAttributes.isWorker = !0), (0, i.x1)(e.agentIdentifier, c);
                            const h = (0, N.D0)(e.agentIdentifier)
                                , m = [c.beacon, c.errorBeacon];
                            O || (h.proxy.assets && (j(h.proxy.assets), m.push(h.proxy.assets)), h.proxy.beacon && m.push(h.proxy.beacon), E(), (0, g.US)("activatedFeatures", I.B), e.runSoftNavOverSpa &&= !0 === h.soft_navigations.enabled && h.feature_flags.includes("soft_nav")), l.denyList = [...h.ajax.deny_list || [], ...h.ajax.block_internal ? m : []], l.ptid = e.agentIdentifier, (0, o.V)(e.agentIdentifier, l), e.ee = s.ee.get(e.agentIdentifier), void 0 === e.api && (e.api = x(e.agentIdentifier, n, e.runSoftNavOverSpa)), void 0 === e.exposed && (e.exposed = f), O = !0
                        }
                    }
                    , 8374: (e, t, r) => {
                        r.nc = (() => {
                            try {
                                return document?.currentScript?.nonce
                            } catch (e) {}
                            return ""
                        })()
                    }
                    , 860: (e, t, r) => {
                        "use strict";
                        r.d(t, {
                            K: () => n
                            , P: () => i
                        });
                        const n = {
                                ajax: "ajax"
                                , genericEvents: "generic_events"
                                , jserrors: "jserrors"
                                , logging: "logging"
                                , metrics: "metrics"
                                , pageAction: "page_action"
                                , pageViewEvent: "page_view_event"
                                , pageViewTiming: "page_view_timing"
                                , sessionReplay: "session_replay"
                                , sessionTrace: "session_trace"
                                , softNav: "soft_navigations"
                                , spa: "spa"
                            }
                            , i = {
                                [n.pageViewEvent]: 1
                                , [n.pageViewTiming]: 2
                                , [n.metrics]: 3
                                , [n.jserrors]: 4
                                , [n.spa]: 5
                                , [n.ajax]: 6
                                , [n.sessionTrace]: 7
                                , [n.softNav]: 8
                                , [n.sessionReplay]: 9
                                , [n.logging]: 10
                                , [n.genericEvents]: 11
                            }
                    }
                }
                , n = {};

            function i(e) {
                var t = n[e];
                if (void 0 !== t) return t.exports;
                var o = n[e] = {
                    exports: {}
                };
                return r[e](o, o.exports, i), o.exports
            }
            i.m = r, i.d = (e, t) => {
                for (var r in t) i.o(t, r) && !i.o(e, r) && Object.defineProperty(e, r, {
                    enumerable: !0
                    , get: t[r]
                })
            }, i.f = {}, i.e = e => Promise.all(Object.keys(i.f).reduce(((t, r) => (i.f[r](e, t), t)), [])), i.u = e => "nr-rum-1.272.0.min.js", i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), e = {}, t = "NRBA-1.272.0.PROD:", i.l = (r, n, o, a) => {
                if (e[r]) e[r].push(n);
                else {
                    var s, c;
                    if (void 0 !== o)
                        for (var u = document.getElementsByTagName("script"), d = 0; d < u.length; d++) {
                            var l = u[d];
                            if (l.getAttribute("src") == r || l.getAttribute("data-webpack") == t + o) {
                                s = l;
                                break
                            }
                        }
                    if (!s) {
                        c = !0;
                        var f = {
                            296: "sha512-NE5L6U4ZgJfOGpjZF+E0EXztZ1vc6w2JIS9wUCYCquEq3rLImu1YahAsci+BPNPSNqn15uREbCKjRYJaYAru2g=="
                        };
                        (s = document.createElement("script")).charset = "utf-8", s.timeout = 120, i.nc && s.setAttribute("nonce", i.nc), s.setAttribute("data-webpack", t + o), s.src = r, 0 !== s.src.indexOf(window.location.origin + "/") && (s.crossOrigin = "anonymous"), f[a] && (s.integrity = f[a])
                    }
                    e[r] = [n];
                    var g = (t, n) => {
                            s.onerror = s.onload = null, clearTimeout(p);
                            var i = e[r];
                            if (delete e[r], s.parentNode && s.parentNode.removeChild(s), i && i.forEach((e => e(n))), t) return t(n)
                        }
                        , p = setTimeout(g.bind(null, void 0, {
                            type: "timeout"
                            , target: s
                        }), 12e4);
                    s.onerror = g.bind(null, s.onerror), s.onload = g.bind(null, s.onload), c && document.head.appendChild(s)
                }
            }, i.r = e => {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }, i.p = "https://js-agent.newrelic.com/", (() => {
                var e = {
                    840: 0
                    , 374: 0
                };
                i.f.j = (t, r) => {
                    var n = i.o(e, t) ? e[t] : void 0;
                    if (0 !== n)
                        if (n) r.push(n[2]);
                        else {
                            var o = new Promise(((r, i) => n = e[t] = [r, i]));
                            r.push(n[2] = o);
                            var a = i.p + i.u(t)
                                , s = new Error;
                            i.l(a, (r => {
                                if (i.o(e, t) && (0 !== (n = e[t]) && (e[t] = void 0), n)) {
                                    var o = r && ("load" === r.type ? "missing" : r.type)
                                        , a = r && r.target && r.target.src;
                                    s.message = "Loading chunk " + t + " failed.\n(" + o + ": " + a + ")", s.name = "ChunkLoadError", s.type = o, s.request = a, n[1](s)
                                }
                            }), "chunk-" + t, t)
                        }
                };
                var t = (t, r) => {
                        var n, o, [a, s, c] = r
                            , u = 0;
                        if (a.some((t => 0 !== e[t]))) {
                            for (n in s) i.o(s, n) && (i.m[n] = s[n]);
                            if (c) c(i)
                        }
                        for (t && t(r); u < a.length; u++) o = a[u], i.o(e, o) && e[o] && e[o][0](), e[o] = 0
                    }
                    , r = self["webpackChunk:NRBA-1.272.0.PROD"] = self["webpackChunk:NRBA-1.272.0.PROD"] || [];
                r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
            })(), (() => {
                "use strict";
                i(8374);
                var e = i(944)
                    , t = i(6344)
                    , r = i(9566);
                class n {
                    agentIdentifier;
                    constructor(e = (0, r.LA)(16)) {
                        this.agentIdentifier = e
                    }
                    #e(t, ...r) {
                        if ("function" == typeof this.api?.[t]) return this.api[t](...r);
                        (0, e.R)(35, t)
                    }
                    addPageAction(e, t) {
                        return this.#e("addPageAction", e, t)
                    }
                    setPageViewName(e, t) {
                        return this.#e("setPageViewName", e, t)
                    }
                    setCustomAttribute(e, t, r) {
                        return this.#e("setCustomAttribute", e, t, r)
                    }
                    noticeError(e, t) {
                        return this.#e("noticeError", e, t)
                    }
                    setUserId(e) {
                        return this.#e("setUserId", e)
                    }
                    setApplicationVersion(e) {
                        return this.#e("setApplicationVersion", e)
                    }
                    setErrorHandler(e) {
                        return this.#e("setErrorHandler", e)
                    }
                    finished(e) {
                        return this.#e("finished", e)
                    }
                    addRelease(e, t) {
                        return this.#e("addRelease", e, t)
                    }
                    start(e) {
                        return this.#e("start", e)
                    }
                    recordReplay() {
                        return this.#e(t.G4.RECORD)
                    }
                    pauseReplay() {
                        return this.#e(t.G4.PAUSE)
                    }
                    addToTrace(e) {
                        return this.#e("addToTrace", e)
                    }
                    setCurrentRouteName(e) {
                        return this.#e("setCurrentRouteName", e)
                    }
                    interaction() {
                        return this.#e("interaction")
                    }
                    log(e, t) {
                        return this.#e("log", e, t)
                    }
                    wrapLogger(e, t, r) {
                        return this.#e("wrapLogger", e, t, r)
                    }
                }
                var o = i(860)
                    , a = i(9417);
                const s = Object.values(o.K);

                function c(e) {
                    const t = {};
                    return s.forEach((r => {
                        t[r] = function(e, t) {
                            return !0 === (0, a.gD)(t, "".concat(e, ".enabled"))
                        }(r, e)
                    })), t
                }
                var u = i(7603);
                var d = i(1687)
                    , l = i(4234)
                    , f = i(5289)
                    , g = i(6154)
                    , p = i(384);
                const h = e => g.RI && !0 === (0, a.gD)(e, "privacy.cookies_enabled");

                function m(e) {
                    return !!(0, p.dV)().o.MO && h(e) && !0 === (0, a.gD)(e, "session_trace.enabled")
                }
                var v = i(6389);
                class b extends l.W {
                    constructor(e, t, r = !0) {
                        super(e.agentIdentifier, t), this.auto = r, this.abortHandler = void 0, this.featAggregate = void 0, this.onAggregateImported = void 0, !1 === e.init[this.featureName].autoStart && (this.auto = !1), this.auto ? (0, d.Ak)(e.agentIdentifier, t) : this.ee.on("manual-start-all", (0, v.J)((() => {
                            (0, d.Ak)(e.agentIdentifier, this.featureName), this.auto = !0, this.importAggregator(e)
                        })))
                    }
                    importAggregator(t, r = {}) {
                        if (this.featAggregate || !this.auto) return;
                        let n;
                        this.onAggregateImported = new Promise((e => {
                            n = e
                        }));
                        const a = async () => {
                            let a;
                            try {
                                if (h(this.agentIdentifier)) {
                                    const {
                                        setupAgentSession: e
                                    } = await i.e(296).then(i.bind(i, 3861));
                                    a = e(this.agentIdentifier)
                                }
                            } catch (t) {
                                (0, e.R)(20, t), this.ee.emit("internal-error", [t]), this.featureName === o.K.sessionReplay && this.abortHandler?.()
                            }
                            try {
                                if (t.sharedAggregator) await t.sharedAggregator;
                                else {
                                    t.sharedAggregator = i.e(296).then(i.bind(i, 5987));
                                    const {
                                        Aggregator: e
                                    } = await t.sharedAggregator;
                                    t.sharedAggregator = new e
                                }
                                if (!this.#t(this.featureName, a)) return (0, d.Ze)(this.agentIdentifier, this.featureName), void n(!1);
                                const {
                                    lazyFeatureLoader: e
                                } = await i.e(296).then(i.bind(i, 6103)), {
                                    Aggregate: o
                                } = await e(this.featureName, "aggregate");
                                this.featAggregate = new o(t, r), n(!0)
                            } catch (t) {
                                (0, e.R)(34, t), this.abortHandler?.(), (0, d.Ze)(this.agentIdentifier, this.featureName, !0), n(!1), this.ee && this.ee.abort()
                            }
                        };
                        g.RI ? (0, f.GG)((() => a()), !0) : a()
                    }
                    #t(e, t) {
                        switch (e) {
                            case o.K.sessionReplay:
                                return m(this.agentIdentifier) && !!t;
                            case o.K.sessionTrace:
                                return !!t;
                            default:
                                return !0
                        }
                    }
                }
                var y = i(6630);
                class w extends b {
                    static featureName = y.T;
                    constructor(e, t = !0) {
                        super(e, y.T, t), this.importAggregator(e)
                    }
                }
                var A = i(9908)
                    , R = i(2843)
                    , E = i(3878)
                    , _ = i(782)
                    , x = i(1863);
                class N extends b {
                    static featureName = _.T;
                    constructor(e, t = !0) {
                        super(e, _.T, t), g.RI && ((0, R.u)((() => (0, A.p)("docHidden", [(0, x.t)()], void 0, _.T, this.ee)), !0), (0, E.sp)("pagehide", (() => (0, A.p)("winPagehide", [(0, x.t)()], void 0, _.T, this.ee))), this.importAggregator(e))
                    }
                }
                var T = i(3969);
                class S extends b {
                    static featureName = T.TZ;
                    constructor(e, t = !0) {
                        super(e, T.TZ, t), this.importAggregator(e)
                    }
                }
                new class extends n {
                    constructor(t, r) {
                        super(r), g.gm ? (this.features = {}, (0, p.bQ)(this.agentIdentifier, this), this.desiredFeatures = new Set(t.features || []), this.desiredFeatures.add(w), this.runSoftNavOverSpa = [...this.desiredFeatures].some((e => e.featureName === o.K.softNav)), (0, u.j)(this, t, t.loaderType || "agent"), this.run()) : (0, e.R)(21)
                    }
                    get config() {
                        return {
                            info: this.info
                            , init: this.init
                            , loader_config: this.loader_config
                            , runtime: this.runtime
                        }
                    }
                    run() {
                        try {
                            const t = c(this.agentIdentifier)
                                , r = [...this.desiredFeatures];
                            r.sort(((e, t) => o.P[e.featureName] - o.P[t.featureName])), r.forEach((r => {
                                if (!t[r.featureName] && r.featureName !== o.K.pageViewEvent) return;
                                if (this.runSoftNavOverSpa && r.featureName === o.K.spa) return;
                                if (!this.runSoftNavOverSpa && r.featureName === o.K.softNav) return;
                                const n = function(e) {
                                    switch (e) {
                                        case o.K.ajax:
                                            return [o.K.jserrors];
                                        case o.K.sessionTrace:
                                            return [o.K.ajax, o.K.pageViewEvent];
                                        case o.K.sessionReplay:
                                            return [o.K.sessionTrace];
                                        case o.K.pageViewTiming:
                                            return [o.K.pageViewEvent];
                                        default:
                                            return []
                                    }
                                }(r.featureName).filter((e => !(e in this.features)));
                                n.length > 0 && (0, e.R)(36, {
                                    targetFeature: r.featureName
                                    , missingDependencies: n
                                }), this.features[r.featureName] = new r(this)
                            }))
                        } catch (t) {
                            (0, e.R)(22, t);
                            for (const e in this.features) this.features[e].abortHandler?.();
                            const r = (0, p.Zm)();
                            delete r.initializedAgents[this.agentIdentifier]?.api, delete r.initializedAgents[this.agentIdentifier]?.features, delete this.sharedAggregator;
                            return r.ee.get(this.agentIdentifier).abort(), !1
                        }
                    }
                }({
                    features: [w, N, S]
                    , loaderType: "lite"
                })
            })()
        })();
    </script>
    <meta name="unlimited-subscription" content="1">

    <meta name="user-hash" content="c7ea3cc3d91dbb5ec470eb9cb21a36bc">
    <meta name="cart-hash" content="d751713988987e9331980363e24189ce">
    <meta name="live-settings" content="[]">
    <meta name="robots" content="noindex, nofollow">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta property="og:site_name" content="VectorStock">
    <meta property="fb:app_id" content="241100862642313">
    <meta name="mobile-browser" content="1">
    <link rel="icon" type="image/svg+xml" href="https://cdn.vectorstock.com/img/icons/favicon.svg">
    <link rel="icon" type="image/png" href="https://cdn.vectorstock.com/img/icons/favicon.png">
    <link rel="search" type="application/opensearchdescription+xml" title="VectorStock Search" href="//www.vectorstock.com/xml/searchbox.xml">
    <link rel="stylesheet" type="text/css" href="/cache/legacy1731028602.min.css">
    <link rel="stylesheet" type="text/css" href="/cache/transactions1731028602.min.css">
    <script nonce="cveoSZFL+cxNks0R+aEvB4fIbMumTHINQZPrqVA6c2Y=">
        window.dataLayer = window.dataLayer || [];
        (function(w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({
                'gtm.start': new Date().getTime()
                , event: 'gtm.js'
            });
            var f = d.getElementsByTagName(s)[0]
                , j = d.createElement(s)
                , dl = l != 'dataLayer' ? '&l=' + l : '';
            j.defer = true;
            j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
            var n = d.querySelector('[nonce]');
            n && j.setAttribute('nonce', n.nonce || n.getAttribute('nonce'));
            f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', 'GTM-NL6HLLR');
    </script>
    <script src="/cache/common1731031464.min.js"></script>
    <script src="/cache/transactions1731031464.min.js"></script>
    <script src="https://www.artfut.com/static/tagtag.min.js?campaign_code=69ba13f9ec" async=""></script>
    <script src="https://www.artfut.com/static/tracking.min.js?campaign_code=69ba13f9ec" defer="defer" onerror="ADMITAD.onError.call(this, &quot;3&quot;)"></script>
    <script src="https://www.artfut.com/static/crossdevice.min.js?campaign_code=69ba13f9ec" defer="defer" onerror="ADMITAD.onError.call(this, &quot;4&quot;)"></script>
    <script type="text/javascript" async="" src="https://googleads.g.doubleclick.net/pagead/viewthroughconversion/1056033416/?random=1731660415602&amp;cv=11&amp;fst=1731660415602&amp;bg=ffffff&amp;guid=ON&amp;async=1&amp;gtm=45be4bc0za200zb841670343&amp;gcd=13l3l3l3l1l1&amp;dma=0&amp;tag_exp=101925629~102067555~102067808~102077855&amp;u_w=428&amp;u_h=926&amp;url=https%3A%2F%2Fwww.vectorstock.com%2Ftransactions%2Fdownloads&amp;ref=https%3A%2F%2Fwww.vectorstock.com%2Ftransactions%2Fdownloads-page_9&amp;hn=www.googleadservices.com&amp;frm=0&amp;tiba=Transactions%20-%20VectorStock&amp;npa=0&amp;pscdl=noapi&amp;auid=1237473797.1731659132&amp;fdr=QA&amp;data=event%3Dgtag.config&amp;rfmt=3&amp;fmt=4" nonce="cveoSZFL+cxNks0R+aEvB4fIbMumTHINQZPrqVA6c2Y="></script>
</head>

<body id="vsTransactions" data-gear-dark="false" data-gear-shift="false" data-gear-deep="false"><noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NL6HLLR" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript> <!-- Top header -->
    <header>
        <!-- Primary -->
        <nav class="top">
            <figure><a href="/" title="VectorStock®">VectorStock®</a></figure>

            <div class="grid">

                <!-- Search area -->
                <form id="searchbox" class="empty">
                    <div class="wrap">
                        <fieldset>
                            <div class="contents">
                                <div class="tags">
                                    <ul></ul>
                                </div>
                                <div class="input">
                                    <input type="text" name="input" autocomplete="off" autocapitalize="none" spellcheck="true" value="" placeholder="Search…" maxlength="50" autofocus="">
                                    <button type="button" data-action="clear">×</button>
                                </div>

                                <input type="hidden" name="category" value="">
                                <input type="hidden" name="artist" value="">
                                <input type="hidden" name="similar" value="">
                            </div>
                            <div class="suggestions">
                                <div></div>
                            </div>
                        </fieldset>
                        <button type="button" data-action="searchbyimage" aria-label="Search images by uploading an image to match against">
                            <span class="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 29" role="img">
                                    <polyline points="17.7,24.9 6.1,24.9 6.1,4.1 18.4,4.1 22.9,8.6 22.9,17.1"></polyline>
                                    <polygon class="fill" points="17.7,4.1 17.7,9.4 22.9,9.4 22.9,8.6 18.4,4.1"></polygon>
                                    <circle class="fill" cx="11.4" cy="9.9" r="1.7"></circle>
                                    <polygon class="fill" points="12.9,13.3 15.9,17.3 17.6,14.9 20.6,19.1 8.8,19.1"></polygon>
                                    <polyline points="25.6,23.4 22.9,20.7 20.2,23.4 "></polyline>
                                    <line x1="22.9" y1="20.7" x2="22.9" y2="28.4"></line>
                                </svg>
                            </span>
                            <span class="tooltip">
                                <span>Try searching by image!</span>
                            </span>
                        </button>
                        <button type="submit"><span class="icon">Search</span></button>
                    </div>
                </form>
                <ul>
                    <li><a href="/royalty-free-vectors">All Vectors</a></li>
                    <li><a href="/free-vectors">Free Vectors</a></li>
                </ul>
            </div>

            <div class="aside">
                <ul>
                    <li><a href="/popular-categories" title="Popular Categories">Categories</a></li>
                    <li class="buy"><a href="/purchase">Buy Images</a></li>
                </ul>
            </div>
        </nav>
    </header>
    <!-- Account Menu Tabs -->
    <aside id="nav_sidebar" class="tabs tabsDark">
        <nav>
            <ul role="tablist">
                <li data-tab-id="account" class="selected" role="tab"><span><span>Account</span></span></li>
            </ul>
        </nav>

        <section id="sb_account" data-tab-id="account" class="selected">
            <form method="post" action="/auth/logout">
                <div class="profile">
                    <a href="/account"> <img src="https://cdn.vectorstock.com/img/avatar32x32.png" width="32" height="32" alt="Alena avatar"> <span class="title">User</span>
                        <span class="value">Alena</span>
                    </a>
                </div>
                <nav class="secondary">
                    <ul>
                        <li data-id="credits" class="empty">
                            <a href="/purchase">
                                <span class="alert"></span> <span class="title">Credits</span>
                                <span class="value"><var id="creditsVal" data-value="0">0</var><sup>CR</sup></span>
                                <span class="icon"></span>
                            </a>
                        </li>
                        <li data-id="subscription" class="empty">
                            <a href="/purchase/subscription">
                                <span class="title">Subscription</span>
                                <span class="value">
                                    <!--
                                <var data-value="0">0</var><sup>DL</sup>
                                -->
                                </span>
                                <span class="icon"></span>
                            </a>
                        </li>
                        <li data-id="myarchive">
                            <a href="/purchased">
                                <span class="title">My Purchases</span>
                                <span class="value"><var data-value="4172">4,172</var></span>
                                <span class="icon"></span>
                            </a>
                        </li>

                    </ul>
                </nav>
                <nav class="primary">
                    <ul>
                        <li data-id="account"><a href="/account">Account</a></li>
                        <li data-id="history"><a href="/history">History</a></li>
                        <li data-id="transactions" class="selected"><a href="/transactions">Transactions</a></li>
                    </ul>


                    <h6>Collections</h6>
                    <ul>
                        <li data-id="cart"><a href="/cart">
                                <span class="title">Cart</span> <span class="value"><var data-value="0">0</var></span>
                                <span class="icon"></span>
                            </a></li>
                        <li data-id="galleries"><a href="/galleries"> <span class="title">Galleries</span>
                                <span class="value"><var data-value="1">1</var></span>
                            </a></li>
                        <li data-id="likes"><a href="/likes"> <span class="title">Likes</span> <span class="value"><var data-value="0">0</var></span>
                            </a></li>
                        <li data-id="following"><a href="/following"> <span class="title">Following Artists</span>
                                <span class="value"><var data-value="0">0</var></span>
                            </a></li>
                        <li data-id="hidden-artists"><a href="/hidden-artists"> <span class="title">Hidden Artists</span>
                                <span class="value"><var data-value="0">0</var></span>
                            </a></li>
                    </ul>


                    <input type="hidden" name="logout" value="1">
                    <button type="button">Log Out</button>
                </nav>
            </form>
        </section>

    </aside>

    <!-- Main Content -->
    <article class="main">
        <header>
            <div class="title">
                <h2>Account</h2>
                <h1>Transactions</h1>
            </div>
        </header>

        <!-- Transaction tabs -->
        <div id="transactionTabs" class="tabs">
            <nav>
                <ul>
                    <!-- selected var to add 'selected'-->
                    <li data-tab-id="downloads" class="selected">
                        <span><span>Downloads</span></span>
                    </li>
                    <li data-tab-id="subscription" class="">
                        <span><span>Subscription Invoices</span></span>
                    </li>
                </ul>
            </nav>

            <!-- Downloads tab -->
            <section id="tabDownloads" data-tab-id="downloads" class="selected">

                <div id="myarchiveOption">


                    <div id="dlSubNav">
                        <a href="/pdf/my-purchases" title="View your transaction history in printable format" target="_blank">View your transaction history in printable format</a>
                        <a class="download-selected" style="display: none;">Download Selected</a>
                    </div>


                </div>

                <div class="wrap">
                    <table id="tableDownloads" cellpadding="0" cellspacing="0" border="0">
                        <thead>
                            <tr>
                                <th>Thumb</th>
                                <th>ID</th>
                                <th>Purchased With</th>
                                <th style="width:200px;">License</th>
                                <th>Date</th>
                                <th style="width:115px;">Download</th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr data-id="22859926">
                                <td class="thumb">
                                    <a href="/royalty-free-vector/hand-drawn-abstract-fun-merry-christmas-vector-22859926" rel="22859926" title="Hand drawn abstract fun merry christmas">
                                        <picture data-width="1129" data-height="750">
                                            <source type="image/avif" srcset="https://cdn.vectorstock.com/i/500p/99/26/hand-drawn-abstract-fun-merry-christmas-vector-22859926.avif">
                                            <source type="image/webp" srcset="https://cdn.vectorstock.com/i/500p/99/26/hand-drawn-abstract-fun-merry-christmas-vector-22859926.webp">
                                            <img loading="lazy" src="https://cdn.vectorstock.com/i/500p/99/26/hand-drawn-abstract-fun-merry-christmas-vector-22859926.jpg" title="Hand drawn abstract fun merry christmas" alt="Hand drawn abstract fun merry christmas vector image">
                                        </picture>
                                    </a>
                                </td>
                                <td class="preview">
                                    <a href="/royalty-free-vector/hand-drawn-abstract-fun-merry-christmas-vector-22859926" rel="22859926" title="Hand drawn abstract fun merry christmas">
                                        22859926 </a>
                                </td>
                                <td class="">Subscription</td>
                                <td class="">
                                    <div class="license">
                                        <p class="current">Standard</p>
                                        <div class="popout ready">
                                            <a href="#"><span class="po_icon">UPGRADE</span></a>
                                            <div class="po_panel">
                                                <div class="po_content">
                                                    <div class="licenseOptions">
                                                        <p>Not enough credits - <a href="/purchase/credits">purchase more...</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td class="">14 November 2024</td>
                                <td>
                                    <div class="download cdnClick"><a href="#" rel="22859926">Download</a></div>
                                </td>
                                <td></td>
                            </tr>
                            <tr data-id="39613596">
                                <td class="thumb">
                                    <a href="/royalty-free-vector/heraldic-coat-of-arms-big-set-vintage-antique-vector-39613596" rel="39613596" title="Heraldic coat of arms big set vintage antique">
                                        <picture data-width="1319" data-height="750">
                                            <source type="image/avif" srcset="https://cdn.vectorstock.com/i/500p/35/96/heraldic-coat-of-arms-big-set-vintage-antique-vector-39613596.avif">
                                            <source type="image/webp" srcset="https://cdn.vectorstock.com/i/500p/35/96/heraldic-coat-of-arms-big-set-vintage-antique-vector-39613596.webp">
                                            <img loading="lazy" src="https://cdn.vectorstock.com/i/500p/35/96/heraldic-coat-of-arms-big-set-vintage-antique-vector-39613596.jpg" title="Heraldic coat of arms big set vintage antique" alt="Heraldic coat of arms big set vintage antique vector image">
                                        </picture>
                                    </a>
                                </td>
                                <td class="preview">
                                    <a href="/royalty-free-vector/heraldic-coat-of-arms-big-set-vintage-antique-vector-39613596" rel="39613596" title="Heraldic coat of arms big set vintage antique">
                                        39613596 </a>
                                </td>
                                <td class="">Subscription</td>
                                <td class="">
                                    <div class="license">
                                        <p class="current">Standard</p>
                                        <div class="popout ready">
                                            <a href="#"><span class="po_icon">UPGRADE</span></a>
                                            <div class="po_panel">
                                                <div class="po_content">
                                                    <div class="licenseOptions">
                                                        <p>Not enough credits - <a href="/purchase/credits">purchase more...</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td class="">14 November 2024</td>
                                <td>
                                    <div class="download cdnClick"><a href="#" rel="39613596">Download</a></div>
                                </td>
                                <td></td>
                            </tr>
                            <tr data-id="26234252">
                                <td class="thumb">
                                    <a href="/royalty-free-vector/abstract-celebration-background-colorful-diagonal-vector-26234252" rel="26234252" title="Abstract celebration background colorful diagonal">
                                        <picture data-width="750" data-height="750">
                                            <source type="image/avif" srcset="https://cdn.vectorstock.com/i/500p/42/52/abstract-celebration-background-colorful-diagonal-vector-26234252.avif">
                                            <source type="image/webp" srcset="https://cdn.vectorstock.com/i/500p/42/52/abstract-celebration-background-colorful-diagonal-vector-26234252.webp">
                                            <img loading="lazy" src="https://cdn.vectorstock.com/i/500p/42/52/abstract-celebration-background-colorful-diagonal-vector-26234252.jpg" title="Abstract celebration background colorful diagonal" alt="Abstract celebration background colorful diagonal vector image">
                                        </picture>
                                    </a>
                                </td>
                                <td class="preview">
                                    <a href="/royalty-free-vector/abstract-celebration-background-colorful-diagonal-vector-26234252" rel="26234252" title="Abstract celebration background colorful diagonal">
                                        26234252 </a>
                                </td>
                                <td class="">Subscription</td>
                                <td class="">
                                    <div class="license">
                                        <p class="current">Standard</p>
                                    </div>
                                </td>
                                <td class="">14 November 2024</td>
                                <td>
                                    <div class="download cdnClick"><a href="#" rel="26234252">Download</a></div>
                                </td>
                                <td></td>
                            </tr>
                            <tr data-id="23274139">
                                <td class="thumb">
                                    <a href="/royalty-free-vector/colorful-brushstroke-design-element-vector-23274139" rel="23274139" title="Colorful brushstroke design element">
                                        <picture data-width="2250" data-height="634">
                                            <source type="image/avif" srcset="https://cdn.vectorstock.com/i/500p/41/39/colorful-brushstroke-design-element-vector-23274139.avif">
                                            <source type="image/webp" srcset="https://cdn.vectorstock.com/i/500p/41/39/colorful-brushstroke-design-element-vector-23274139.webp">
                                            <img loading="lazy" src="https://cdn.vectorstock.com/i/500p/41/39/colorful-brushstroke-design-element-vector-23274139.jpg" title="Colorful brushstroke design element" alt="Colorful brushstroke design element vector image">
                                        </picture>
                                    </a>
                                </td>
                                <td class="preview">
                                    <a href="/royalty-free-vector/colorful-brushstroke-design-element-vector-23274139" rel="23274139" title="Colorful brushstroke design element">
                                        23274139 </a>
                                </td>
                                <td class="">Subscription</td>
                                <td class="">
                                    <div class="license">
                                        <p class="current">Standard</p>
                                        <div class="popout ready">
                                            <a href="#"><span class="po_icon">UPGRADE</span></a>
                                            <div class="po_panel">
                                                <div class="po_content">
                                                    <div class="licenseOptions">
                                                        <p>Not enough credits - <a href="/purchase/credits">purchase more...</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td class="">14 November 2024</td>
                                <td>
                                    <div class="download cdnClick"><a href="#" rel="23274139">Download</a></div>
                                </td>
                                <td></td>
                            </tr>
                            <tr data-id="15413684">
                                <td class="thumb">
                                    <a href="/royalty-free-vector/set-of-engraved-hand-drawn-old-labels-or-badges-vector-15413684" rel="15413684" title="Set of engraved hand drawn old labels or badges">
                                        <picture data-width="706" data-height="750">
                                            <source type="image/avif" srcset="https://cdn.vectorstock.com/i/500p/36/84/set-of-engraved-hand-drawn-old-labels-or-badges-vector-15413684.avif">
                                            <source type="image/webp" srcset="https://cdn.vectorstock.com/i/500p/36/84/set-of-engraved-hand-drawn-old-labels-or-badges-vector-15413684.webp">
                                            <img loading="lazy" src="https://cdn.vectorstock.com/i/500p/36/84/set-of-engraved-hand-drawn-old-labels-or-badges-vector-15413684.jpg" title="Set of engraved hand drawn old labels or badges" alt="Set of engraved hand drawn old labels or badges vector image">
                                        </picture>
                                    </a>
                                </td>
                                <td class="preview">
                                    <a href="/royalty-free-vector/set-of-engraved-hand-drawn-old-labels-or-badges-vector-15413684" rel="15413684" title="Set of engraved hand drawn old labels or badges">
                                        15413684 </a>
                                </td>
                                <td class="">Subscription</td>
                                <td class="">
                                    <div class="license">
                                        <p class="current">Standard</p>
                                        <div class="popout ready">
                                            <a href="#"><span class="po_icon">UPGRADE</span></a>
                                            <div class="po_panel">
                                                <div class="po_content">
                                                    <div class="licenseOptions">
                                                        <p>Not enough credits - <a href="/purchase/credits">purchase more...</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td class="">14 November 2024</td>
                                <td>
                                    <div class="download cdnClick"><a href="#" rel="15413684">Download</a></div>
                                </td>
                                <td></td>
                            </tr>
                            <tr data-id="26155357">
                                <td class="thumb">
                                    <a href="/royalty-free-vector/abstract-geometric-design-elements-set-memphis-vector-26155357" rel="26155357" title="Abstract geometric design elements set memphis">
                                        <picture data-width="708" data-height="750">
                                            <source type="image/avif" srcset="https://cdn.vectorstock.com/i/500p/53/57/abstract-geometric-design-elements-set-memphis-vector-26155357.avif">
                                            <source type="image/webp" srcset="https://cdn.vectorstock.com/i/500p/53/57/abstract-geometric-design-elements-set-memphis-vector-26155357.webp">
                                            <img loading="lazy" src="https://cdn.vectorstock.com/i/500p/53/57/abstract-geometric-design-elements-set-memphis-vector-26155357.jpg" title="Abstract geometric design elements set memphis" alt="Abstract geometric design elements set memphis vector image">
                                        </picture>
                                    </a>
                                </td>
                                <td class="preview">
                                    <a href="/royalty-free-vector/abstract-geometric-design-elements-set-memphis-vector-26155357" rel="26155357" title="Abstract geometric design elements set memphis">
                                        26155357 </a>
                                </td>
                                <td class="">Subscription</td>
                                <td class="">
                                    <div class="license">
                                        <p class="current">Standard</p>
                                        <div class="popout ready">
                                            <a href="#"><span class="po_icon">UPGRADE</span></a>
                                            <div class="po_panel">
                                                <div class="po_content">
                                                    <div class="licenseOptions">
                                                        <p>Not enough credits - <a href="/purchase/credits">purchase more...</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td class="">14 November 2024</td>
                                <td>
                                    <div class="download cdnClick"><a href="#" rel="26155357">Download</a></div>
                                </td>
                                <td></td>
                            </tr>
                            <tr data-id="47887912">
                                <td class="thumb">
                                    <a href="/royalty-free-vector/school-concept-collection-of-education-items-vector-47887912" rel="47887912" title="School concept collection of education items">
                                        <picture data-width="1409" data-height="750">
                                            <source type="image/avif" srcset="https://cdn.vectorstock.com/i/500p/79/12/school-concept-collection-of-education-items-vector-47887912.avif">
                                            <source type="image/webp" srcset="https://cdn.vectorstock.com/i/500p/79/12/school-concept-collection-of-education-items-vector-47887912.webp">
                                            <img loading="lazy" src="https://cdn.vectorstock.com/i/500p/79/12/school-concept-collection-of-education-items-vector-47887912.jpg" title="School concept collection of education items" alt="School concept collection of education items vector image">
                                        </picture>
                                    </a>
                                </td>
                                <td class="preview">
                                    <a href="/royalty-free-vector/school-concept-collection-of-education-items-vector-47887912" rel="47887912" title="School concept collection of education items">
                                        47887912 </a>
                                </td>
                                <td class="">Subscription</td>
                                <td class="">
                                    <div class="license">
                                        <p class="current">Standard</p>
                                        <div class="popout ready">
                                            <a href="#"><span class="po_icon">UPGRADE</span></a>
                                            <div class="po_panel">
                                                <div class="po_content">
                                                    <div class="licenseOptions">
                                                        <p>Not enough credits - <a href="/purchase/credits">purchase more...</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td class="">14 November 2024</td>
                                <td>
                                    <div class="download cdnClick"><a href="#" rel="47887912">Download</a></div>
                                </td>
                                <td></td>
                            </tr>
                            <tr data-id="13666624">
                                <td class="thumb">
                                    <a href="/royalty-free-vector/make-love-no-war-label-hand-drawn-typography-vector-13666624" rel="13666624" title="Make love no war label hand drawn typography">
                                        <picture data-width="476" data-height="750">
                                            <source type="image/avif" srcset="https://cdn.vectorstock.com/i/500p/66/24/make-love-no-war-label-hand-drawn-typography-vector-13666624.avif">
                                            <source type="image/webp" srcset="https://cdn.vectorstock.com/i/500p/66/24/make-love-no-war-label-hand-drawn-typography-vector-13666624.webp">
                                            <img loading="lazy" src="https://cdn.vectorstock.com/i/500p/66/24/make-love-no-war-label-hand-drawn-typography-vector-13666624.jpg" title="Make love no war label hand drawn typography" alt="Make love no war label hand drawn typography vector image">
                                        </picture>
                                    </a>
                                </td>
                                <td class="preview">
                                    <a href="/royalty-free-vector/make-love-no-war-label-hand-drawn-typography-vector-13666624" rel="13666624" title="Make love no war label hand drawn typography">
                                        13666624 </a>
                                </td>
                                <td class="">Subscription</td>
                                <td class="">
                                    <div class="license">
                                        <p class="current">Standard</p>
                                    </div>
                                </td>
                                <td class="">14 November 2024</td>
                                <td>
                                    <div class="download cdnClick"><a href="#" rel="13666624">Download</a></div>
                                </td>
                                <td></td>
                            </tr>
                            <tr data-id="24429996">
                                <td class="thumb">
                                    <a href="/royalty-free-vector/grunge-rubber-stamp-2-vector-24429996" rel="24429996" title="Grunge rubber stamp 2">
                                        <picture data-width="713" data-height="750">
                                            <source type="image/avif" srcset="https://cdn.vectorstock.com/i/500p/99/96/grunge-rubber-stamp-2-vector-24429996.avif">
                                            <source type="image/webp" srcset="https://cdn.vectorstock.com/i/500p/99/96/grunge-rubber-stamp-2-vector-24429996.webp">
                                            <img loading="lazy" src="https://cdn.vectorstock.com/i/500p/99/96/grunge-rubber-stamp-2-vector-24429996.jpg" title="Grunge rubber stamp 2" alt="Grunge rubber stamp 2 vector image">
                                        </picture>
                                    </a>
                                </td>
                                <td class="preview">
                                    <a href="/royalty-free-vector/grunge-rubber-stamp-2-vector-24429996" rel="24429996" title="Grunge rubber stamp 2">
                                        24429996 </a>
                                </td>
                                <td class="">Subscription</td>
                                <td class="">
                                    <div class="license">
                                        <p class="current">Standard</p>
                                        <div class="popout ready">
                                            <a href="#"><span class="po_icon">UPGRADE</span></a>
                                            <div class="po_panel">
                                                <div class="po_content">
                                                    <div class="licenseOptions">
                                                        <p>Not enough credits - <a href="/purchase/credits">purchase more...</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td class="">14 November 2024</td>
                                <td>
                                    <div class="download cdnClick"><a href="#" rel="24429996">Download</a></div>
                                </td>
                                <td></td>
                            </tr>
                            <tr data-id="22936898">
                                <td class="thumb">
                                    <a href="/royalty-free-vector/beautiful-girl-looking-at-the-viewer-vector-22936898" rel="22936898" title="Beautiful girl looking at the viewer">
                                        <picture data-width="1051" data-height="750">
                                            <source type="image/avif" srcset="https://cdn.vectorstock.com/i/500p/68/98/beautiful-girl-looking-at-the-viewer-vector-22936898.avif">
                                            <source type="image/webp" srcset="https://cdn.vectorstock.com/i/500p/68/98/beautiful-girl-looking-at-the-viewer-vector-22936898.webp">
                                            <img loading="lazy" src="https://cdn.vectorstock.com/i/500p/68/98/beautiful-girl-looking-at-the-viewer-vector-22936898.jpg" title="Beautiful girl looking at the viewer" alt="Beautiful girl looking at the viewer vector image">
                                        </picture>
                                    </a>
                                </td>
                                <td class="preview">
                                    <a href="/royalty-free-vector/beautiful-girl-looking-at-the-viewer-vector-22936898" rel="22936898" title="Beautiful girl looking at the viewer">
                                        22936898 </a>
                                </td>
                                <td class="">Subscription</td>
                                <td class="">
                                    <div class="license">
                                        <p class="current">Standard</p>
                                        <div class="popout ready">
                                            <a href="#"><span class="po_icon">UPGRADE</span></a>
                                            <div class="po_panel">
                                                <div class="po_content">
                                                    <div class="licenseOptions">
                                                        <p>Not enough credits - <a href="/purchase/credits">purchase more...</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td class="">14 November 2024</td>
                                <td>
                                    <div class="download cdnClick"><a href="#" rel="22936898">Download</a></div>
                                </td>
                                <td></td>
                            </tr>
                            <tr data-id="24233029">
                                <td class="thumb">
                                    <a href="/royalty-free-vector/golden-inflatable-toy-balloons-font-3d-realistic-vector-24233029" rel="24233029" title="Golden inflatable toy balloons font 3d realistic">
                                        <picture data-width="1188" data-height="750">
                                            <source type="image/avif" srcset="https://cdn.vectorstock.com/i/500p/30/29/golden-inflatable-toy-balloons-font-3d-realistic-vector-24233029.avif">
                                            <source type="image/webp" srcset="https://cdn.vectorstock.com/i/500p/30/29/golden-inflatable-toy-balloons-font-3d-realistic-vector-24233029.webp">
                                            <img loading="lazy" src="https://cdn.vectorstock.com/i/500p/30/29/golden-inflatable-toy-balloons-font-3d-realistic-vector-24233029.jpg" title="Golden inflatable toy balloons font 3d realistic" alt="Golden inflatable toy balloons font 3d realistic vector image">
                                        </picture>
                                    </a>
                                </td>
                                <td class="preview">
                                    <a href="/royalty-free-vector/golden-inflatable-toy-balloons-font-3d-realistic-vector-24233029" rel="24233029" title="Golden inflatable toy balloons font 3d realistic">
                                        24233029 </a>
                                </td>
                                <td class="">Subscription</td>
                                <td class="">
                                    <div class="license">
                                        <p class="current">Standard</p>
                                        <div class="popout ready">
                                            <a href="#"><span class="po_icon">UPGRADE</span></a>
                                            <div class="po_panel">
                                                <div class="po_content">
                                                    <div class="licenseOptions">
                                                        <p>Not enough credits - <a href="/purchase/credits">purchase more...</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td class="">14 November 2024</td>
                                <td>
                                    <div class="download cdnClick"><a href="#" rel="24233029">Download</a></div>
                                </td>
                                <td></td>
                            </tr>
                            <tr data-id="4509606">
                                <td class="thumb">
                                    <a href="/royalty-free-vector/watercolor-flower-summer-vector-4509606" rel="4509606" title="Watercolor flower summer">
                                        <picture data-width="1125" data-height="750">
                                            <source type="image/avif" srcset="https://cdn.vectorstock.com/i/500p/96/06/watercolor-flower-summer-vector-4509606.avif">
                                            <source type="image/webp" srcset="https://cdn.vectorstock.com/i/500p/96/06/watercolor-flower-summer-vector-4509606.webp">
                                            <img loading="lazy" src="https://cdn.vectorstock.com/i/500p/96/06/watercolor-flower-summer-vector-4509606.jpg" title="Watercolor flower summer" alt="Watercolor flower summer vector image">
                                        </picture>
                                    </a>
                                </td>
                                <td class="preview">
                                    <a href="/royalty-free-vector/watercolor-flower-summer-vector-4509606" rel="4509606" title="Watercolor flower summer">
                                        4509606 </a>
                                </td>
                                <td class="">Subscription</td>
                                <td class="">
                                    <div class="license">
                                        <p class="current">Standard</p>
                                        <div class="popout ready">
                                            <a href="#"><span class="po_icon">UPGRADE</span></a>
                                            <div class="po_panel">
                                                <div class="po_content">
                                                    <div class="licenseOptions">
                                                        <p>Not enough credits - <a href="/purchase/credits">purchase more...</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td class="">14 November 2024</td>
                                <td>
                                    <div class="download cdnClick"><a href="#" rel="4509606">Download</a></div>
                                </td>
                                <td></td>
                            </tr>
                            <tr data-id="8930539">
                                <td class="thumb">
                                    <a href="/royalty-free-vector/seamless-succulent-and-peony-roses-vector-8930539" rel="8930539" title="Seamless succulent and peony roses">
                                        <picture data-width="750" data-height="750">
                                            <source type="image/avif" srcset="https://cdn.vectorstock.com/i/500p/05/39/seamless-succulent-and-peony-roses-vector-8930539.avif">
                                            <source type="image/webp" srcset="https://cdn.vectorstock.com/i/500p/05/39/seamless-succulent-and-peony-roses-vector-8930539.webp">
                                            <img loading="lazy" src="https://cdn.vectorstock.com/i/500p/05/39/seamless-succulent-and-peony-roses-vector-8930539.jpg" title="Seamless succulent and peony roses" alt="Seamless succulent and peony roses vector image">
                                        </picture>
                                    </a>
                                </td>
                                <td class="preview">
                                    <a href="/royalty-free-vector/seamless-succulent-and-peony-roses-vector-8930539" rel="8930539" title="Seamless succulent and peony roses">
                                        8930539 </a>
                                </td>
                                <td class="">Subscription</td>
                                <td class="">
                                    <div class="license">
                                        <p class="current">Standard</p>
                                    </div>
                                </td>
                                <td class="">14 November 2024</td>
                                <td>
                                    <div class="download cdnClick"><a href="#" rel="8930539">Download</a></div>
                                </td>
                                <td></td>
                            </tr>
                            <tr data-id="668048">
                                <td class="thumb">
                                    <a href="/royalty-free-vector/gift-certifcate-vector-668048" rel="668048" title="Gift certifcate">
                                        <picture data-width="907" data-height="750">
                                            <source type="image/avif" srcset="https://cdn.vectorstock.com/i/500p/80/48/gift-certifcate-vector-668048.avif">
                                            <source type="image/webp" srcset="https://cdn.vectorstock.com/i/500p/80/48/gift-certifcate-vector-668048.webp">
                                            <img loading="lazy" src="https://cdn.vectorstock.com/i/500p/80/48/gift-certifcate-vector-668048.jpg" title="Gift certifcate" alt="Gift certifcate vector image">
                                        </picture>
                                    </a>
                                </td>
                                <td class="preview">
                                    <a href="/royalty-free-vector/gift-certifcate-vector-668048" rel="668048" title="Gift certifcate">
                                        668048 </a>
                                </td>
                                <td class="">Subscription</td>
                                <td class="">
                                    <div class="license">
                                        <p class="current">Standard</p>
                                        <div class="popout ready">
                                            <a href="#"><span class="po_icon">UPGRADE</span></a>
                                            <div class="po_panel">
                                                <div class="po_content">
                                                    <div class="licenseOptions">
                                                        <p>Not enough credits - <a href="/purchase/credits">purchase more...</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td class="">14 November 2024</td>
                                <td>
                                    <div class="download cdnClick"><a href="#" rel="668048">Download</a></div>
                                </td>
                                <td></td>
                            </tr>
                            <tr data-id="1851979">
                                <td class="thumb">
                                    <a href="/royalty-free-vector/set-of-vintage-hipster-ribbon-arrow-alphabet-vector-1851979" rel="1851979" title="Set of vintage hipster ribbon arrow alphabet">
                                        <picture data-width="750" data-height="750">
                                            <source type="image/avif" srcset="https://cdn.vectorstock.com/i/500p/19/79/set-of-vintage-hipster-ribbon-arrow-alphabet-vector-1851979.avif">
                                            <source type="image/webp" srcset="https://cdn.vectorstock.com/i/500p/19/79/set-of-vintage-hipster-ribbon-arrow-alphabet-vector-1851979.webp">
                                            <img loading="lazy" src="https://cdn.vectorstock.com/i/500p/19/79/set-of-vintage-hipster-ribbon-arrow-alphabet-vector-1851979.jpg" title="Set of vintage hipster ribbon arrow alphabet" alt="Set of vintage hipster ribbon arrow alphabet vector image">
                                        </picture>
                                    </a>
                                </td>
                                <td class="preview">
                                    <a href="/royalty-free-vector/set-of-vintage-hipster-ribbon-arrow-alphabet-vector-1851979" rel="1851979" title="Set of vintage hipster ribbon arrow alphabet">
                                        1851979 </a>
                                </td>
                                <td class="">Subscription</td>
                                <td class="">
                                    <div class="license">
                                        <p class="current">Standard</p>
                                        <div class="popout ready">
                                            <a href="#"><span class="po_icon">UPGRADE</span></a>
                                            <div class="po_panel">
                                                <div class="po_content">
                                                    <div class="licenseOptions">
                                                        <p>Not enough credits - <a href="/purchase/credits">purchase more...</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td class="">14 November 2024</td>
                                <td>
                                    <div class="download cdnClick"><a href="#" rel="1851979">Download</a></div>
                                </td>
                                <td></td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colspan="2"><a class="download-selected" style="display: none;">Download Selected</a></td>
                                <td colspan="5">
                                    <footer>
                                        <input type="hidden" id="page_downloads" value="1">

                                        <nav class="pageControls">
                                            <ul class="pagination">

                                                <li>
                                                    <button type="button" disabled="disabled">Previous</button>
                                                </li>
                                                <li>
                                                    <button type="button" data-url="/transactions/downloads-page_2">Next</button>
                                                </li>
                                            </ul>
                                        </nav>
                                        <nav class="pageNumbers">
                                            <ul>
                                                <li class="selected"><span>1</span></li>
                                                <li><a href="/transactions/downloads-page_2">2</a></li>
                                                <li><a href="/transactions/downloads-page_3">3</a></li>
                                                <li><a href="/transactions/downloads-page_4">4</a></li>
                                                <li><a href="/transactions/downloads-page_5">5</a></li>
                                                <li><a href="/transactions/downloads-page_6">6</a></li>
                                                <li><span>...</span></li>
                                            </ul>
                                        </nav>
                                    </footer>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>

            </section>

            <!-- Invoices tab -->
            <section id="tabCredits" data-tab-id="invoices" class="">

                <div class="wrap">
                    <table id="tableCredits" cellpadding="0" cellspacing="0" border="0">
                        <thead>
                            <tr>
                                <th>Credits(CR)</th>
                                <th>Amount</th>
                                <th>Date</th>
                                <th style="width:106px;">Download</th>
                            </tr>
                        </thead>

                        <tbody>
                        </tbody>

                        <tfoot>
                            <tr>
                                <td colspan="5">
                                    <footer>
                                        <input type="hidden" id="page_invoices" value="1">
                                    </footer>
                                </td>
                            </tr>
                        </tfoot>

                    </table>
                </div>

            </section>

            <!-- Subscription tab -->
            <section id="tabSubscription" data-tab-id="subscription" class="">

                <div class="wrap">
                    <table id="tableCredits" cellpadding="0" cellspacing="0" border="0">
                        <thead>
                            <tr>
                                <th>Subscription Model</th>
                                <th>Amount</th>
                                <th>Renew Date</th>
                                <th style="width:106px;">Download</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td class="">Plan: Unlimited* downloads - monthly</td>
                                <td class="">$22.06 USD</td>
                                <td class="">14 November 2024</td>
                                <td class="">
                                    <div class="download"><a target="_blank" href="https://my.paddle.com/invoice/66850408-122750485/287882526-chre59600ff8273-784f75b725">PDF</a></div>
                                </td>
                            </tr>
                            <tr>
                                <td class="">Plan: Unlimited* downloads - monthly</td>
                                <td class="">$19.99 USD</td>
                                <td class="">12 July 2024</td>
                                <td class="">
                                    <div class="download"><a target="_blank" href="https://my.paddle.com/invoice/63339800-112166344/273606296-chre9c05f2e81bb-e78c5f72b0">PDF</a></div>
                                </td>
                            </tr>
                        </tbody>

                        <tfoot>
                            <tr>
                                <td colspan="5">
                                    <footer>
                                        <input type="hidden" id="page_subscription" value="1">
                                    </footer>
                                </td>
                            </tr>
                        </tfoot>

                    </table>
                </div>

            </section>





        </div>

    </article>


    <!-- Base menu and legals -->
    <footer class="main">

        <nav class="primary">
            <h2>VectorStock</h2>
            <ul>
                <li><a href="/contact" title="Contact">Contact</a></li>
                <li><a href="/faq" title="FAQ">FAQ</a></li>
                <li><a href="/account/sell-vectors" title="Become a Contributor">Become a Contributor</a></li>
                <li><a href="/account/affiliate" title="Affiliate">Affiliate</a></li>
                <li><a href="/what-is-a-vector" title="What is a Vector?">What is a Vector?</a></li>
            </ul>
        </nav>
        <nav class="secondary">
            <h2>Vector Images</h2>
            <ul>
                <li><a href="/royalty-free-vectors-order_latest" title="Latest Vectors">82,711 Vectors Just Added</a></li>
                <li><a href="/free-vectors" title="Free Vector Art">1,087,700 Free Vectors</a></li>
                <li><a href="/royalty-free-vectors" title="Browse Vectors">Most Popular Vectors</a></li>
                <li><a href="/purchase" title="Buy Vector Art">Buy Vector Art &amp; Graphics</a></li>
            </ul>
        </nav>
        <nav class="secondary">
            <h2><a href="/popular-categories" title="Popular Categories">Popular Categories</a></h2>
            <ul>
                <li><a href="/backgrounds-textures-vectors" title="Background &amp; Textures">Background &amp; Textures</a></li>
                <li><a href="/design-elements-vectors" title="Design elements">Design elements</a></li>
                <li><a href="/icons-emblems-(sets)-vectors" title="Icons &amp; Emblems (sets)">Icons &amp; Emblems (sets)</a></li>
                <li><a href="/floral-decorative-vectors" title="Floral &amp; Decorative">Floral &amp; Decorative</a></li>
                <li><a href="/borders-frames-vectors" title="Borders &amp; Frames">Borders &amp; Frames</a></li>
            </ul>
        </nav>
        <nav class="social">
            <h2>Social</h2>
            <ul>
                <li class="twitter"><a href="https://twitter.com/VectorStock" target="_blank" rel="noreferrer"><span class="icon"></span>twitter.com/vectorstock</a></li>
                <li class="facebook"><a href="https://www.facebook.com/VectorStock" target="_blank" rel="noreferrer"><span class="icon"></span>facebook.com/vectorstock</a></li>
                <li class="pinterest"><a href="https://pinterest.com/vectorstock/" target="_blank" rel="noreferrer"><span class="icon"></span>pinterest.com/vectorstock</a></li>
                <li class="youtube"><a href="https://www.youtube.com/vectorstock" target="_blank" rel="noreferrer"><span class="icon"></span>youtube.com/vectorstock</a></li>
            </ul>
        </nav>

        <div class="brand">
            <h4><a href="/">VectorStock</a></h4>

            <select id="legals" name="legals" style="display: none;">
                <option value="">VectorStock Terms &amp; Conditions</option>
                <option value="/faq/members/terms-of-use">Website Terms of Use</option>
                <option value="/contact">Contact for copyright infringement notices</option>
                <option value="/faq/members/take-down-policy">Take Down Policy (US DMCA)</option>
                <option value="/faq/members/membership-content-license-agreement">Membership and Content License Agreement</option>
                <option value="/faq/artists/artist-agreement">Artist Agreement</option>
            </select>
            <div class="dropdown dd_dark" style="width: 203px;">
                <div class="dd_button"><span class="dd_label">VectorStock Terms &amp; Conditions</span><span class="dd_icon"></span></div>
                <div class="dd_options">
                    <div class="dd_area">
                        <ul>
                            <li data-val="" class="selected">VectorStock Terms &amp; Conditions<span class="dd_icon"></span></li>
                            <li data-val="/faq/members/terms-of-use">Website Terms of Use</li>
                            <li data-val="/contact">Contact for copyright infringement notices</li>
                            <li data-val="/faq/members/take-down-policy">Take Down Policy (US DMCA)</li>
                            <li data-val="/faq/members/membership-content-license-agreement">Membership and Content License Agreement</li>
                            <li data-val="/faq/artists/artist-agreement">Artist Agreement</li>
                        </ul>
                    </div>
                </div>
            </div>

            <ul class="payments">
                <li class="visa">Pay with Visa</li>
                <li class="mcard">Pay with MasterCard</li>
                <li class="amex">Pay with American Express</li>
                <li class="paypal">Pay with PayPal</li>
                <li class="mbookers">Pay with Moneybookers</li>
                <li class="secure">Comodo Secure</li>
            </ul>
        </div>

        <p>VECTORSTOCK and the VectorStock logo are registered trademarks of VectorStock Media. Copyright © 2024. All Rights Reserved.</p>

    </footer>

    <script type="text/javascript" nonce="cveoSZFL+cxNks0R+aEvB4fIbMumTHINQZPrqVA6c2Y=">
        window.NREUM || (NREUM = {});
        NREUM.info = {
            "beacon": "bam.nr-data.net"
            , "licenseKey": "02e09611df"
            , "applicationID": "156179534"
            , "transactionName": "ZV0ENRYCC0RYAkVbDVwXJRQXFwpaFhVDUwxBWQUVDQwLRBYFXkUMXlcHBRc="
            , "queueTime": 0
            , "applicationTime": 128
            , "atts": "SRoHQ14YGEo="
            , "errorBeacon": "bam.nr-data.net"
            , "agent": ""
        }
    </script>
    <script id="_a_admitag" src="https://cdn.teleportapi.com/admitag.min.js?campaign_code=69ba13f9ec" defer=""></script>
    <script nonce="cveoSZFL+cxNks0R+aEvB4fIbMumTHINQZPrqVA6c2Y=" type="text/javascript">
        try {
            var cookie_name = "deduplication_cookie"
                , days_to_store = 90
                , deduplication_cookie_value = "admitad"
                , channel_name = "utm_source";
            getSourceParamFromUri = function() {
                return (new RegExp(channel_name + "=([^&]+)").exec(document.location.search) || [])[1] || ""
            }, getSourceCookie = function() {
                var e = document.cookie.match(new RegExp("(?:^|; )" + cookie_name.replace(/([\.$?*|{}\(\)\[\]\\/\+^])/g, "\$1") + "=([^;]*)"));
                return e ? decodeURIComponent(e[1]) : void 0
            }, setSourceCookie = function() {
                var e = getSourceParamFromUri()
                    , o = new URL(document.location).searchParams;
                if (!o.get(channel_name) && o.get("gclid")) e = "advAutoMarkup";
                else if (!e) return;
                var n = new Date(60 * days_to_store * 60 * 24 * 1e3 + +new Date)
                    , a = cookie_name + "=" + e + "; path=/; expires=" + n.toGMTString();
                document.cookie = a, document.cookie = a + "; domain=." + location.host
            }, setSourceCookie();
            ADMITAD = window.ADMITAD || {}, ADMITAD.Invoice = ADMITAD.Invoice || {}, ADMITAD.Invoice.accountId = "cicadaflux@gmail.com";
        } catch (e) {}
    </script>
    <script id="profitwell-js" data-pw-auth="1051055e2c0cbe1da2ab7ca0abe9bc55" nonce="cveoSZFL+cxNks0R+aEvB4fIbMumTHINQZPrqVA6c2Y=">
        $(document).ready(function() {
            (function(i, s, o, g, r, a, m) {
                i[o] = i[o] || function() {
                    (i[o].q = i[o].q || []).push(arguments)
                };
                a = s.createElement(g);
                m = s.getElementsByTagName(g)[0];
                a.async = 1;
                a.src = r + '?auth=' + s.getElementById(o + '-js').getAttribute('data-pw-auth');
                m.parentNode.insertBefore(a, m);
            })(window, document, 'profitwell', 'script', 'https://public.profitwell.com/js/profitwell.js');
            profitwell('start', {
                "user_email": "cicadaflux@gmail.com"
            });
        });
    </script><iframe height="0" width="0" style="display: none; visibility: hidden;"></iframe>


</body>
<style id="APP_PREFERS_STYLE" media="unknown"></style>
<style id="APP_DARKMODE_STYLE" media="all">
    body {
        background-image: none !important;
    }

    html {
        color: #fefefe;
        background-color: unset !important;
    }

    body {
        background-color: #050505 !important;
    }

    ul,
    ol,
    dl,
    table,
    tr,
    td,
    tbody,
    thead {
        text-shadow: none !important;
        box-shadow: none;
    }

    div,
    p,
    blockquote,
    article,
    summary,
    main {
        text-shadow: none !important;
        box-shadow: none;
    }

    li,
    time {
        color: #dcdcdc;
        text-shadow: none !important;
        box-shadow: none;
    }

    dt {
        color: #dcdcdc;
        text-shadow: none !important;
    }

    dd {
        color: #cacaca;
        text-shadow: none !important;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        color: #fefefe;
        text-shadow: none !important;
    }

    header,
    footer,
    nav,
    section,
    aside {
        text-shadow: none !important;
    }

    article h1,
    article h2,
    article h3,
    article h4,
    article h5,
    article h6,
    article p {
        color: #fefefe;
    }

    pre,
    xmp {
        color: #c6c6c6;
    }

    span {
        text-shadow: none !important;
    }

    input,
    textarea {
        outline: none !important;
        box-shadow: none;
    }

    input[type="text"],
    input[type="password"],
    input[type="search"],
    textarea,
    select {
        color-scheme: dark !important;
    }

    input[type="button"],
    input[type="submit"],
    button {
        text-shadow: none !important;
    }

    input:disabled,
    button:disabled {
        opacity: 0.6 !important;
    }

    a:only-child {
        text-shadow: none !important;
    }

    a {
        color: #0A84FF;
        fill: #9c9c9c;
    }

    [data-gear-loading] p,
    [data-gear-loading] ul,
    [data-gear-loading] header,
    [data-gear-loading] section,
    [data-gear-loading] aside,
    [data-gear-loading] main,
    [data-gear-loading] article {
        background-color: #050505 !important;
    }

    [data-gear-loading],
    [data-gear-loading] div {
        color: #bababa !important;
        fill: #bababa !important;
        background-color: #050505 !important;
    }

    [data-gear-deep$="true"] {
        background-color: #020202 !important;
    }

    [data-gear-shift$="true"] {
        background-color: #020200 !important;
    }

    #transactionsPromo {
        background-color: hsla(0, 0%, 0%, 0);
    }

    #transactionsPromo .content p {
        color: hsla(0, 0%, 73%, 1);
    }

    #transactionsPromo .actions button {
        color: hsla(202, 49%, 46%, 1);
    }

    #myarchiveOption .status strong {
        color: hsla(0, 0%, 73%, 1);
        background-color: hsla(236, 11%, 22.5%, 1);
    }

    #myarchiveOption .on .status strong {
        background-color: hsla(195, 40%, 32%, 1);
    }

    #myarchiveOption .summary {
        border-left-color: hsla(0, 0%, 15%, 1);
    }

    #myarchiveOption .summary p {
        color: hsla(235, 5%, 60%, 1);
    }

    #myarchiveOption .summary p a {
        color: hsla(195, 100%, 52%, 1);
    }

    #myarchiveOption .upgrade {
        background-color: hsla(240, 4%, 14.5%, 1);
    }

    #myarchiveOption .upgrade h4 {
        color: hsla(236, 7%, 74%, 1);
    }

    #myarchiveOption .upgrade li.option1 {
        border-bottom-color: hsla(0, 0%, 15%, 1);
    }

    #myarchiveOption p.years,
    #myarchiveOption p.credits {
        color: hsla(236, 7%, 74%, 1);
    }

    #myarchiveOption .upgrade .selected p {
        color: hsla(195, 100%, 52%, 1);
    }

    #myarchiveOption .popout {
        color: hsla(235, 5%, 60%, 1);
    }

    #tableDownloads td.newPurchase,
    #tableCredits td.newPurchase,
    #tableSingleImage td.newPurchase {
        color: hsla(125, 40%, 60%, 1);
    }

    #tableDownloads tbody td a.link {
        color: hsla(195, 100%, 52%, 1);
    }

    #tableDownloads tbody td a.link:hover {
        color: hsla(0, 0%, 60%, 1);
    }

    #dlSubNav {
        color: hsla(235, 5%, 60%, 1);
        border-top-color: hsla(0, 0%, 15%, 1);
    }

    #dlSubNav a,
    #dlSubNav a:visited {
        color: hsla(195, 100%, 52%, 1);
    }

    #dlSubNav a:hover {
        color: hsla(0, 0%, 60%, 1);
    }

    #IPNLoad {
        border-top-color: hsla(0, 0%, 15%, 1);
        border-right-color: hsla(0, 0%, 15%, 1);
        border-bottom-color: hsla(0, 0%, 15%, 1);
        border-left-color: hsla(0, 0%, 15%, 1);
    }

    #IPNLoad.confirmed {
        border-top-color: hsla(193, 68%, 58%, 1);
        border-right-color: hsla(193, 68%, 58%, 1);
        border-bottom-color: hsla(193, 68%, 58%, 1);
        border-left-color: hsla(193, 68%, 58%, 1);
    }

    #IPNLoad .header {
        background-color: hsla(240, 4%, 6%, 1);
    }

    #IPNLoad.confirmed .header {
        background-color: hsla(189, 54%, 6%, 1);
    }

    #IPNLoad.confirmed .icon {
        background-color: hsla(0, 0%, 0%, 0);
    }

    #IPNLoad h1 {
        color: hsla(0, 0%, 73%, 1);
    }

    #IPNLoad.confirmed h1 {
        color: hsla(197, 79%, 60%, 1);
    }

    #IPNLoad .message {
        border-top-color: hsla(0, 0%, 15%, 1);
    }

    #IPNLoad .message p {
        color: hsla(235, 5%, 60%, 1);
    }

    #IPNLoad .message p strong {
        color: hsla(236, 7%, 74%, 1);
    }

    #IPNLoad .message p a {
        color: hsla(195, 100%, 52%, 1);
    }

    #IPNLoad .message p a:hover {
        color: hsla(235, 59%, 60%, 1);
    }

    .download-selected,
    .download-loading {
        color: hsla(195, 100%, 52%, 1);
    }

    .resubscribe-btn {
        color: hsla(0, 0%, 100%, 1);
    }

    .resubscribe-btn:hover {
        border-top-color: hsla(195, 56%, 15%, 1);
        border-right-color: hsla(195, 56%, 15%, 1);
        border-bottom-color: hsla(195, 56%, 15%, 1);
        border-left-color: hsla(195, 56%, 15%, 1);
    }

    html,
    body,
    div,
    span,
    applet,
    object,
    iframe,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    pre,
    a,
    abbr,
    acronym,
    address,
    big,
    cite,
    code,
    del,
    dfn,
    em,
    font,
    img,
    ins,
    kbd,
    q,
    s,
    samp,
    small,
    strike,
    strong,
    sub,
    sup,
    tt,
    var,
    dl,
    dt,
    dd,
    ol,
    ul,
    li,
    fieldset,
    form,
    label,
    legend,
    figure,
    table,
    caption,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td {
        background: none;
    }

    body {
        color: hsla(237, 36%, 60%, 1);
        background-color: hsla(0, 0%, 6%, 1);
    }

    label {
        color: hsla(240, 3%, 78%, 1);
    }

    input.empty {
        color: hsla(210, 5%, 48%, 1);
    }

    input.focus {
        background-color: hsla(0, 0%, 6%, 1);
        color: hsla(0, 0%, 60%, 1);
    }

    input.error,
    .error {
        color: hsla(342, 84%, 72%, 1);
    }

    input::placeholder,
    textarea::placeholder {
        color: hsla(0, 0%, 73%, 1);
    }

    input:focus::placeholder,
    textarea:focus::placeholder {
        color: hsla(0, 0%, 73%, 1);
    }

    label.checkbox {
        color: hsla(0, 0%, 73%, 1);
    }

    label.checkbox:hover {
        color: hsla(0, 0%, 60%, 1);
    }

    label.checkbox:active {
        color: hsla(195, 100%, 52%, 1);
    }

    label.checkbox.checked {
        color: hsla(195, 100%, 52%, 1);
    }

    label.checkbox span {
        background-color: hsla(0, 0%, 6%, 1);
    }

    table th {
        color: hsla(235, 5%, 60%, 1);
        border-top-color: hsla(0, 0%, 15%, 1);
        border-bottom-color: hsla(0, 0%, 17%, 1);
    }

    table th.pad {
        background-color: hsla(0, 0%, 0%, 0);
    }

    table td {
        color: hsla(235, 5%, 60%, 1);
    }

    table tbody tr:nth-child(2n+1) td {
        background-color: hsla(240, 9%, 6%, 1);
    }

    table tbody tr.odd td {
        background-color: hsla(240, 9%, 6%, 1);
    }

    table tbody tr:hover td {
        background-color: hsla(0, 0%, 6%, 1);
    }

    table td.preview a {
        color: hsla(237, 36%, 60%, 1);
    }

    table td .download a {
        color: hsla(0, 0%, 73%, 1);
        background-color: hsla(0, 0%, 0%, 0);
    }

    table td em {
        color: hsla(342, 86%, 72%, 1);
    }

    table tfoot td {
        border-top-color: hsla(0, 0%, 15%, 1);
    }

    .tabs>section {
        background-color: hsla(0, 0%, 6%, 1);
        border-top-color: hsla(0, 0%, 15%, 1);
        border-right-color: hsla(0, 0%, 15%, 1);
        border-bottom-color: hsla(0, 0%, 15%, 1);
        border-left-color: hsla(0, 0%, 15%, 1);
    }

    .tabs>nav li a span,
    .tabs>nav li span span {
        color: hsla(240, 2%, 78%, 1);
    }

    .tabs>nav li a:hover span,
    .tabs>nav li span:hover span {
        color: hsla(240, 1%, 78%, 1);
    }

    .tabs>nav li.selected a span,
    .tabs>nav li.selected span span {
        color: hsla(236, 7%, 74%, 1);
    }

    .tabsDark {
        color: hsla(0, 0%, 73%, 1);
    }

    .tabsDark>section {
        background-color: hsla(235, 59%, 7.2%, 1);
    }

    .tabsDark>nav li a span,
    .tabsDark>nav li span span {
        color: hsla(236, 7%, 74%, 1);
    }

    .tabsDark>nav li a:hover span,
    .tabsDark>nav li>span:hover span {
        color: hsla(240, 1%, 78%, 1);
    }

    .tabsDark>nav li.selected a span,
    .tabsDark>nav li.selected span span {
        color: hsla(0, 0%, 73%, 1);
    }

    .tabsGrey {
        color: hsla(0, 0%, 73%, 1);
    }

    .tabsGrey>section {
        background-color: hsla(0, 0%, 8.1%, 1);
    }

    .tabsGrey>nav li a span,
    .tabsGrey>nav li span span {
        color: hsla(0, 0%, 73%, 1);
    }

    .tabsGrey>nav li a:hover span,
    .tabsGrey>nav li>span:hover span {
        color: hsla(0, 0%, 73%, 1);
    }

    .tabsGrey>nav li.selected a span,
    .tabsGrey>nav li.selected span span {
        color: hsla(0, 0%, 73%, 1);
    }

    .questionList .topic>h4 a {
        color: hsla(0, 0%, 60%, 1);
        border-bottom-color: hsla(0, 0%, 15%, 1);
    }

    .vsMessage,
    .vsErrorMessage {
        box-shadow: 0 0 1px hsla(0, 0%, 80%, 0.6);
    }

    .vsMessage p,
    .vsErrorMessage p {
        color: hsla(0, 0%, 73%, 1);
    }

    .vsMessage {
        background-color: hsla(195, 40%, 32%, 1);
    }

    .vsErrorMessage {
        background-color: hsla(343, 40.4%, 37%, 1);
    }

    button,
    #nav_sidebar form button {
        color: hsla(0, 0%, 20%, 1);
        border-bottom-color: hsla(0, 0%, 15%, 1);
    }

    button:hover,
    #nav_sidebar form button:hover {
        color: hsla(0, 0%, 100%, 1);
        border-top-color: hsla(195, 56%, 15%, 1);
        border-right-color: hsla(195, 56%, 15%, 1);
        border-bottom-color: hsla(195, 56%, 15%, 1);
        border-left-color: hsla(195, 56%, 15%, 1);
    }

    button.feature {
        color: hsla(0, 0%, 100%, 1);
        border-top-color: hsla(195, 100%, 30%, 1);
        border-right-color: hsla(195, 100%, 30%, 1);
        border-bottom-color: hsla(195, 100%, 30%, 1);
        border-left-color: hsla(195, 100%, 30%, 1);
    }

    button.feature:hover {
        border-top-color: hsla(195, 56%, 15%, 1);
        border-right-color: hsla(195, 56%, 15%, 1);
        border-bottom-color: hsla(195, 56%, 15%, 1);
        border-left-color: hsla(195, 56%, 15%, 1);
    }

    button[disabled],
    button[disabled]:hover {
        color: hsla(237, 36%, 10%, 0.3);
        border-top-color: hsla(0, 0%, 15%, 0.3);
        border-right-color: hsla(0, 0%, 15%, 0.3);
        border-bottom-color: hsla(0, 0%, 15%, 0.3);
        border-left-color: hsla(0, 0%, 15%, 0.3);
    }

    .buttonnext,
    .buttonmore,
    .buttonpublish,
    .buttonactivated,
    button.action {
        color: hsla(0, 0%, 100%, 1);
        background-color: hsla(0, 0%, 0%, 0);
    }

    button.master {
        color: hsla(0, 0%, 100%, 1);
        border-bottom-color: hsla(195, 100%, 30%, 1);
    }

    button.master:hover {
        border-top-color: hsla(195, 56%, 15%, 1);
        border-right-color: hsla(195, 56%, 15%, 1);
        border-bottom-color: hsla(195, 56%, 15%, 1);
        border-left-color: hsla(195, 56%, 15%, 1);
    }

    button.master .value {
        color: hsla(195, 100%, 48%, 1);
    }

    button.master:hover .value {
        color: hsla(195, 85%, 60%, 1);
    }

    button.master .value .loading {
        background-color: hsla(0, 0%, 0%, 0);
    }

    button.master[disabled],
    button.master[disabled]:hover {
        color: hsla(0, 0%, 100%, 1);
        border-top-color: hsla(216, 3%, 15%, 1);
        border-right-color: hsla(216, 3%, 15%, 1);
        border-bottom-color: hsla(216, 3%, 15%, 1);
        border-left-color: hsla(216, 3%, 15%, 1);
    }

    button.master[disabled] .value {
        color: hsla(216, 3%, 66%, 1);
    }

    .pageNumbers li a {
        color: hsla(237, 36%, 75%, 1);
    }

    .pageNumbers li a:hover {
        color: hsla(195, 100%, 52%, 1);
    }

    .pageNumbers li.selected span {
        color: hsla(195, 100%, 52%, 1);
        border-top-color: hsla(195, 100%, 30%, 1);
        border-right-color: hsla(195, 100%, 30%, 1);
        border-bottom-color: hsla(195, 100%, 30%, 1);
        border-left-color: hsla(195, 100%, 30%, 1);
    }

    ul.pagination li:first-child {
        border-right-color: hsla(0, 0%, 15%, 1);
    }

    ul.pagination button,
    ul.pagination button:hover[disabled] {
        border-bottom-color: hsla(0, 0%, 15%, 1);
    }

    ul.pagination button:hover {
        border-top-color: hsla(195, 100%, 30%, 1);
        border-right-color: hsla(195, 100%, 30%, 1);
        border-bottom-color: hsla(195, 100%, 30%, 1);
        border-left-color: hsla(195, 100%, 30%, 1);
    }

    article.main div.overlay {
        background-color: hsla(0, 0%, 10%, 1);
    }

    .devAlert {
        background-color: hsla(0, 40%, 35%, 1);
    }

    ul.radiobuttons li label:active .radio {
        border-top-color: hsla(195, 100%, 30%, 1);
        border-right-color: hsla(195, 100%, 30%, 1);
        border-bottom-color: hsla(195, 100%, 30%, 1);
        border-left-color: hsla(195, 100%, 30%, 1);
    }

    ul.radiobuttons li label .radio {
        border-top-color: hsla(216, 3%, 15%, 1);
        border-right-color: hsla(216, 3%, 15%, 1);
        border-bottom-color: hsla(216, 3%, 15%, 1);
        border-left-color: hsla(216, 3%, 15%, 1);
    }

    ul.radiobuttons li.selected label .radio {
        border-top-color: hsla(195, 100%, 30%, 1);
        border-right-color: hsla(195, 100%, 30%, 1);
        border-bottom-color: hsla(195, 100%, 30%, 1);
        border-left-color: hsla(195, 100%, 30%, 1);
    }

    label.checkbox {
        color: hsla(0, 0%, 73%, 1);
    }

    label.checkbox.checked {
        color: hsla(237, 36%, 60%, 1);
    }

    label.checkbox .box {
        background-color: hsla(0, 0%, 0%, 0);
    }

    .eq-ie8 label.checkbox .box {
        background-color: hsla(0, 0%, 0%, 0);
    }

    #nav_sidebar {
        color: hsla(0, 0%, 73%, 1);
    }

    #sb_account li a .alert {
        background-color: hsla(342, 43.2%, 44%, 1);
    }

    #sb_signup .primary {
        border-bottom-color: hsla(240, 15%, 15%, 1);
    }

    #sb_signup .primary p em {
        color: hsla(195, 100%, 52%, 1);
    }

    #sb_signup .secondary {
        border-bottom-color: hsla(240, 15%, 15%, 1);
    }

    #sb_signup .secondary p {
        color: hsla(231, 5%, 60%, 1);
    }

    #sb_signup .secondary p a {
        color: hsla(0, 0%, 73%, 1);
    }

    #sb_login label {
        color: hsla(240, 3%, 78%, 1);
    }

    #sb_login .textfield {
        background-color: hsla(237, 33%, 10.8%, 1);
        border-top-color: hsla(235, 5%, 15%, 1);
        border-right-color: hsla(235, 5%, 15%, 1);
        border-bottom-color: hsla(235, 5%, 15%, 1);
        border-left-color: hsla(235, 5%, 15%, 1);
    }

    #sb_login .focus .textfield {
        background-color: hsla(235, 8%, 25.2%, 1);
        border-top-color: hsla(235, 8%, 15%, 1);
        border-right-color: hsla(235, 8%, 15%, 1);
        border-bottom-color: hsla(235, 8%, 15%, 1);
        border-left-color: hsla(235, 8%, 15%, 1);
    }

    #sb_login .textfield input {
        color: hsla(0, 0%, 73%, 1);
        background: none;
    }

    #sb_login .error label,
    #sb_login .error input {
        color: hsla(344, 100%, 72%, 1);
    }

    #sb_login .error .textfield {
        background: none;
        border-top-color: hsla(344, 100%, 35%, 1);
        border-right-color: hsla(344, 100%, 35%, 1);
        border-bottom-color: hsla(344, 100%, 35%, 1);
        border-left-color: hsla(344, 100%, 35%, 1);
    }

    #sb_login .message .wrap1 {
        background-color: hsla(235, 11%, 19.8%, 1);
    }

    #sb_login .message .wrap2 {
        background-color: hsla(0, 0%, 0%, 0);
    }

    #sb_login .message p {
        color: hsla(0, 0%, 73%, 1);
    }

    #sb_login .message p a {
        color: hsla(195, 100%, 52%, 1);
    }

    #sb_login form>button[disabled] {
        color: hsla(0, 0%, 53%, 1);
        background: none;
        border-top-color: hsla(232, 8%, 15%, 1);
        border-right-color: hsla(232, 8%, 15%, 1);
        border-bottom-color: hsla(232, 8%, 15%, 1);
        border-left-color: hsla(232, 8%, 15%, 1);
    }

    #sb_login .alternatives h6 {
        color: hsla(240, 3%, 78%, 1);
        border-bottom-color: hsla(240, 15%, 15%, 1);
    }

    #sb_login .alternatives li a {
        color: hsla(0, 0%, 73%, 1);
    }

    #sb_login .alternatives li.loading a {
        color: hsla(0, 0%, 60%, 1);
    }

    #sb_login .alternatives li .icon {
        background-color: hsla(236, 11%, 37.900000000000006%, 1);
    }

    #sb_login .alternatives li a:hover .icon {
        background-color: hsla(0, 0%, 11.700000000000001%, 1);
    }

    #sb_login .alternatives li.loading a .icon {
        background: none;
        border-top-color: hsla(232, 8%, 15%, 1);
        border-right-color: hsla(232, 8%, 15%, 1);
        border-bottom-color: hsla(232, 8%, 15%, 1);
        border-left-color: hsla(232, 8%, 15%, 1);
    }

    #sb_login .extras h6 {
        color: hsla(240, 3%, 78%, 1);
        border-bottom-color: hsla(240, 15%, 15%, 1);
    }

    #nav_sidebar .prompt {
        background-color: hsla(0, 0%, 10%, 1);
        border-top-color: hsla(200, 3%, 15%, 1);
        border-right-color: hsla(200, 3%, 15%, 1);
        border-bottom-color: hsla(200, 3%, 15%, 1);
        border-left-color: hsla(200, 3%, 15%, 1);
        box-shadow: 0 0 1px hsla(0, 0%, 80%, 0.6);
    }

    #nav_sidebar .prompt p {
        color: hsla(0, 0%, 60%, 1);
    }

    #nav_sidebar .prompt button {
        color: hsla(0, 0%, 100%, 1);
        border-bottom-color: hsla(0, 0%, 15%, 1);
    }

    #nav_sidebar .prompt button:hover {
        border-bottom-color: hsla(0, 0%, 15%, 1);
    }

    #nav_sidebar .prompt::after {
        background-color: hsla(0, 0%, 0%, 0);
    }

    #sb_account .profile img {
        border-top-color: hsla(240, 3%, 15%, 1);
        border-right-color: hsla(240, 3%, 15%, 1);
        border-bottom-color: hsla(240, 3%, 15%, 1);
        border-left-color: hsla(240, 3%, 15%, 1);
    }

    #sb_account .profile .title {
        color: hsla(240, 3%, 78%, 1);
    }

    #sb_account .profile .value {
        color: hsla(0, 0%, 73%, 1);
    }

    #sb_account .secondary li a {
        color: hsla(240, 3%, 78%, 1);
    }

    #sb_account .secondary li[data-id="credits"] a,
    #sb_account .secondary li[data-id="subscription"] a,
    #sb_account .secondary li[data-id="freeunlimited"] a {
        color: hsla(126, 40%, 60%, 1);
    }

    #sb_account .secondary li[data-id="subscription"].empty a {
        color: hsla(342, 84%, 72%, 1);
    }

    #sb_account .secondary li[data-id="credits"].empty a {
        color: hsla(342, 84%, 72%, 1);
    }

    #nav_sidebar #sb_account .secondary li a:hover {
        color: hsla(0, 0%, 73%, 1);
    }

    #sb_account .secondary li[data-id="credits"].empty a:hover .alert {
        background-color: hsla(0, 0%, 6%, 1);
    }

    #sb_account .secondary li .icon {
        background-color: hsla(233, 4%, 45.1%, 1);
    }

    #sb_account .secondary .credits .icon {
        background-color: hsla(126, 40%, 43.2%, 1);
    }

    #sb_account .secondary li a:hover .icon {
        background-color: hsla(0, 0%, 6%, 1);
    }

    #sb_account .primary h6 {
        color: hsla(233, 4%, 71%, 1);
        border-bottom-color: hsla(240, 15%, 15%, 1);
    }

    #sb_account .primary li a,
    #sb_login .extras li a {
        color: hsla(0, 0%, 73%, 1);
    }

    #sb_account .primary li a:hover,
    #sb_login .extras li a:hover {
        color: hsla(195, 100%, 52%, 1);
    }

    #sb_account .primary li.selected a,
    #sb_login .extras li.selected a {
        color: hsla(235, 59%, 60%, 1);
        background-color: hsla(195, 40%, 32%, 1);
    }

    #sb_account .primary li .value,
    #sb_login .extras li .value {
        background-color: hsla(235, 11%, 29.8%, 1);
        border-top-color: hsla(235, 11%, 15%, 1);
        border-right-color: hsla(235, 11%, 15%, 1);
        border-bottom-color: hsla(235, 11%, 15%, 1);
        border-left-color: hsla(235, 11%, 15%, 1);
    }

    #sb_account .primary li[data-id="customizations"]:not(.selected) a.unread {
        color: hsla(342, 84%, 72%, 1);
    }

    #sb_account .primary li[data-id="customizations"]:not(.selected) a.unread:hover {
        color: hsla(0, 0%, 73%, 1);
    }

    #sb_account .primary li[data-id="customizations"] a:hover .alert {
        background-color: hsla(0, 0%, 6%, 1);
    }

    #sb_account .primary li.empty .value,
    #sb_login .extras li.empty .value {
        background: none;
        border-top-color: hsla(240, 15%, 15%, 1);
        border-right-color: hsla(240, 15%, 15%, 1);
        border-bottom-color: hsla(240, 15%, 15%, 1);
        border-left-color: hsla(240, 15%, 15%, 1);
    }

    #sb_account .primary li.empty var,
    #sb_login .extras li.empty var {
        color: hsla(233, 4%, 71%, 1);
    }

    #sb_account .primary li.highlight .value,
    #sb_login .extras li.highlight .value {
        background-color: hsla(233, 4%, 35.1%, 1);
        border-top-color: hsla(233, 4%, 15%, 1);
        border-right-color: hsla(233, 4%, 15%, 1);
        border-bottom-color: hsla(233, 4%, 15%, 1);
        border-left-color: hsla(233, 4%, 15%, 1);
    }

    #sb_account .primary li.highlight .value var,
    #sb_login .extras li.highlight .value var {
        color: hsla(0, 0%, 73%, 1);
    }

    #sb_account .primary li a:hover .value var,
    #sb_login .extras li a:hover .value var {
        color: hsla(195, 100%, 52%, 1);
    }

    #sb_account .primary li.selected .value,
    #sb_login .extras li.selected .value {
        background: none;
        border-top-color: hsla(195, 100%, 30%, 1);
        border-right-color: hsla(195, 100%, 30%, 1);
        border-bottom-color: hsla(195, 100%, 30%, 1);
        border-left-color: hsla(195, 100%, 30%, 1);
    }

    #sb_account .primary li.selected a .value var,
    #sb_login .extras li.selected a .value var {
        color: hsla(235, 59%, 60%, 1);
    }

    #navSocial li {
        background-color: hsla(0, 0%, 6%, 1);
        border-top-color: hsla(0, 0%, 17%, 1);
        border-right-color: hsla(0, 0%, 17%, 1);
        border-bottom-color: hsla(0, 0%, 17%, 1);
        border-left-color: hsla(0, 0%, 17%, 1);
    }

    #related-searches {
        background-color: hsla(210, 4%, 8.1%, 1);
        border-top-color: hsla(240, 6%, 15%, 1);
        border-right-color: hsla(240, 6%, 15%, 1);
        border-bottom-color: hsla(240, 6%, 15%, 1);
        border-left-color: hsla(240, 6%, 15%, 1);
    }

    #related-searches p {
        color: hsla(225, 2%, 60%, 1);
    }

    #related-searches ul li a {
        color: hsla(225, 2%, 63%, 1);
    }

    #related-searches ul li.highlighted a {
        color: hsla(0, 0%, 73%, 1);
        background-color: hsla(0, 0%, 6%, 0.1);
    }

    #related-searches .preview {
        background-color: hsla(237, 36%, 19%, 1);
        box-shadow: 0 0 1px hsla(0, 0%, 80%, 0.6);
    }

    #related-searches .preview ul li {
        border-top-color: hsla(0, 0%, 30%, 0.2);
        border-right-color: hsla(0, 0%, 30%, 0.2);
        border-bottom-color: hsla(0, 0%, 30%, 0.2);
    }

    #related-searches .preview ul li:first-child {
        border-left-color: hsla(0, 0%, 30%, 0.2);
    }

    #related-searches .preview ul li .image {
        background-color: hsla(0, 0%, 6%, 1);
    }

    body>.promo {
        background-color: hsla(126, 40%, 43.2%, 1);
    }

    body>.promo .message a {
        color: hsla(0, 0%, 73%, 1);
    }

    body>.promo .message a .title strong {
        color: hsla(0, 0%, 73%, 1);
    }

    body>.promo .message a .ticker {
        color: hsla(0, 0%, 73%, 1);
        border-top-color: hsla(0, 0%, 30%, 0.8);
        border-right-color: hsla(0, 0%, 30%, 0.8);
        border-bottom-color: hsla(0, 0%, 30%, 0.8);
        border-left-color: hsla(0, 0%, 30%, 0.8);
    }

    body>.promo .message a .button {
        color: hsla(126, 40%, 48%, 1);
    }

    body>.promo button[data-action="close"] {
        color: hsla(126, 40%, 48%, 1);
    }

    body>.promo .bg div span {
        background-color: hsla(0, 0%, 0%, 0);
    }

    body>.promo:hover {
        background-color: hsla(126, 39%, 28.8%, 1);
    }

    body>.promo:hover button[data-action="close"] {
        color: hsla(126, 39%, 32%, 1);
    }

    body>div.alert {
        background-color: hsla(195, 40%, 32%, 1);
    }

    body>.alert-banner {
        background-color: hsla(308, 46.4%, 16%, 1);
    }

    body>.alert-banner .inner p {
        color: hsla(0, 0%, 73%, 1);
    }

    body>.alert-banner .inner button {
        color: hsla(283, 75%, 22%, 1);
        box-shadow: 0 0 1px hsla(0, 0%, 80%, 0.6);
    }

    body>.alert-banner#banner-lang-switch {
        background-color: hsla(195, 40%, 32%, 1);
    }

    body>.alert-banner#banner-lang-switch .inner button {
        color: hsla(237, 36%, 10%, 1);
    }

    body>.alert-banner#banner-lang-switch .inner button[data-action="remain"] {
        color: hsla(0, 0%, 100%, 1);
        border-top-color: hsla(0, 0%, 30%, 1);
        border-right-color: hsla(0, 0%, 30%, 1);
        border-bottom-color: hsla(0, 0%, 30%, 1);
        border-left-color: hsla(0, 0%, 30%, 1);
    }

    .overlay #box-email-issue {
        box-shadow: 0 0 1px hsla(0, 0%, 80%, 0.6);
    }

    .overlay #box-email-issue .wrap .header {
        background-color: hsla(308, 46.4%, 16%, 1);
    }

    .overlay #box-email-issue .wrap .header h4 {
        color: hsla(0, 0%, 73%, 1);
    }

    .overlay #box-email-issue .wrap .body {
        background-color: hsla(0, 0%, 6%, 1);
    }

    .overlay #box-email-issue .wrap .body p {
        color: hsla(0, 0%, 73%, 1);
    }

    .overlay #box-email-issue .wrap .body form fieldset input[type="email"] {
        color: hsla(0, 0%, 73%, 1);
        border-top-color: hsla(200, 3%, 15%, 1);
        border-right-color: hsla(200, 3%, 15%, 1);
        border-bottom-color: hsla(200, 3%, 15%, 1);
        border-left-color: hsla(200, 3%, 15%, 1);
    }

    .overlay #box-email-issue .wrap .body form fieldset.error input[type="email"] {
        color: hsla(340, 87%, 72%, 1);
        border-top-color: hsla(340, 87%, 31%, 1);
        border-right-color: hsla(340, 87%, 31%, 1);
        border-bottom-color: hsla(340, 87%, 31%, 1);
        border-left-color: hsla(340, 87%, 31%, 1);
    }

    .overlay #box-email-issue .wrap .body form fieldset.error p {
        color: hsla(0, 0%, 73%, 1);
        background-color: hsla(340, 42.599999999999994%, 36%, 1);
    }

    .overlay #box-email-issue .wrap .body form button {
        border-bottom-color: hsla(0, 0%, 15%, 1);
    }

    .overlay #box-email-issue .wrap .body form button .label {
        color: hsla(0, 0%, 100%, 1);
    }

    body>.browser {
        background-color: hsla(340, 42.599999999999994%, 36%, 1);
    }

    body>.browser h1 {
        color: hsla(0, 0%, 73%, 1);
    }

    body>.browser p {
        color: hsla(0, 0%, 73%, 1);
    }

    body>.browser ul li a {
        background-color: hsla(0, 0%, 0%, 0);
    }

    header nav.top {
        background-color: hsla(237, 36%, 9%, 1);
        border-top-color: hsla(195, 100%, 30%, 1);
    }

    header nav.top figure a {
        background-color: hsla(0, 0%, 0%, 0);
    }

    header nav.top .grid>ul li a {
        color: hsla(240, 4%, 78%, 1);
        border-top-color: hsla(235, 6%, 15%, 1);
        border-right-color: hsla(235, 6%, 15%, 1);
        border-bottom-color: hsla(235, 6%, 15%, 1);
        border-left-color: hsla(235, 6%, 15%, 1);
    }

    header nav.top .grid>ul li a:hover {
        color: hsla(0, 0%, 73%, 1);
        background-color: hsla(0, 0%, 6%, 0.15);
    }

    header nav.top .grid>ul li.selected a {
        color: hsla(0, 0%, 73%, 1);
        background-color: hsla(235, 6%, 36%, 1);
    }

    header nav.top .aside ul li a {
        color: hsla(0, 0%, 73%, 1);
    }

    header nav.top .aside ul li a:hover {
        color: hsla(0, 0%, 73%, 1);
    }

    header nav.top .aside ul li.buy a {
        color: hsla(0, 0%, 73%, 1);
        background-color: hsla(126, 40%, 43.2%, 1);
    }

    header nav.top .aside ul li.buy a:hover {
        color: hsla(237, 36%, 75%, 1);
        background-color: hsla(0, 0%, 6%, 1);
    }

    header nav.top .aside ul li.account button {
        color: hsla(0, 0%, 25%, 1);
    }

    header nav.top .aside ul li.account button:hover {
        color: hsla(237, 36%, 10%, 1);
    }

    body>article div.title {
        border-bottom-color: hsla(0, 0%, 15%, 1);
    }

    body>article h2 {
        color: hsla(235, 5%, 60%, 1);
    }

    body>article h2 a {
        color: hsla(195, 100%, 52%, 1);
    }

    body>article h2 a:hover {
        color: hsla(0, 0%, 60%, 1);
    }

    #vectorHeader li h1 a {
        color: hsla(237, 36%, 75%, 1);
    }

    #vectorHeader .loading {
        background-color: hsla(0, 0%, 0%, 0);
    }

    #vectorHeader .cspace a,
    #vectorHeader .cnode a {
        color: hsla(195, 100%, 52%, 1);
    }

    #vectorHeader .cspace a:hover,
    #vectorHeader .cnode a:hover {
        color: hsla(0, 0%, 60%, 1);
    }

    #searchFilter {
        border-bottom-color: hsla(0, 0%, 15%, 1);
    }

    #searchFilter .list ul a {
        color: hsla(237, 36%, 75%, 1);
    }

    #searchSort,
    #galleryTools {
        border-bottom-color: hsla(0, 0%, 15%, 1);
    }

    #searchSort ul li a {
        color: hsla(237, 36%, 75%, 1);
        border-top-color: hsla(0, 0%, 30%, 1);
        border-right-color: hsla(0, 0%, 30%, 1);
        border-bottom-color: hsla(0, 0%, 30%, 1);
        border-left-color: hsla(0, 0%, 30%, 1);
    }

    #searchSort ul li a span {
        background-color: hsla(0, 0%, 6%, 1);
    }

    #searchSort ul li a:hover {
        color: hsla(195, 100%, 52%, 1);
    }

    #searchSort ul li.selected a {
        color: hsla(195, 100%, 52%, 1);
        border-top-color: hsla(195, 100%, 30%, 1);
        border-right-color: hsla(195, 100%, 30%, 1);
        border-bottom-color: hsla(195, 100%, 30%, 1);
        border-left-color: hsla(195, 100%, 30%, 1);
    }

    .browse .previews>li {
        background-color: hsla(0, 0%, 6%, 1);
        border-top-color: hsla(0, 0%, 30%, 1);
        border-right-color: hsla(0, 0%, 30%, 1);
        border-bottom-color: hsla(0, 0%, 30%, 1);
        border-left-color: hsla(0, 0%, 30%, 1);
    }

    .browse .previews>li.hover {
        border-top-color: hsla(196, 100%, 30%, 1);
        border-right-color: hsla(196, 100%, 30%, 1);
        border-bottom-color: hsla(196, 100%, 30%, 1);
        border-left-color: hsla(196, 100%, 30%, 1);
    }

    .browse .previews>li>a,
    #relatedVectors .range li {
        background-color: hsla(0, 0%, 0%, 0);
        border-top-color: hsla(200, 3%, 15%, 1);
        border-right-color: hsla(200, 3%, 15%, 1);
        border-bottom-color: hsla(200, 3%, 15%, 1);
        border-left-color: hsla(200, 3%, 15%, 1);
    }

    .browse li .titlebar>a {
        color: hsla(236, 11%, 74%, 1);
    }

    .browse li .titlebar>a.cart span {
        color: hsla(195, 100%, 52%, 1);
    }

    #browseBack,
    #browseNext {
        color: hsla(0, 0%, 73%, 1);
        background-color: hsla(0, 0%, 6%, 1);
        border-top-color: hsla(0, 0%, 30%, 1);
        border-right-color: hsla(0, 0%, 30%, 1);
        border-bottom-color: hsla(0, 0%, 30%, 1);
        border-left-color: hsla(0, 0%, 30%, 1);
    }

    #browseNext:hover {
        color: hsla(195, 100%, 52%, 1);
        background-color: hsla(0, 0%, 0%, 0);
    }

    #browseBack:hover {
        color: hsla(195, 100%, 52%, 1);
        background-color: hsla(0, 0%, 0%, 0);
    }

    .a2cart,
    .bsimilar,
    .details a.cart,
    .defaultGalleryItem,
    .removeGalleryItem,
    .galdetails span,
    .dgSelected,
    .deleteGallery {
        color: hsla(195, 100%, 52%, 1);
        background-color: hsla(0, 0%, 0%, 0);
    }

    .a2cart:hover,
    .bsimilar:hover,
    .details a.cart,
    .galdetails span,
    .defaultGalleryItem:hover,
    .removeGalleryItem:hover,
    .deleteGallery:hover {
        background-color: hsla(0, 0%, 6%, 1);
    }

    article.browse li .nobg span {
        background-color: hsla(0, 0%, 0%, 0);
    }

    #purchaseCartTotal,
    #purchaseCartTotal var {
        color: hsla(0, 0%, 60%, 1);
    }

    body>article>footer {
        border-top-color: hsla(0, 0%, 15%, 1);
    }

    body>footer {
        background-color: hsla(240, 16%, 18%, 1);
        background-image: linear-gradient(hsla(240, 10%, 24.3%, 1), hsla(237, 32%, 9.9%, 1));
        border-bottom-color: hsla(195, 100%, 30%, 1);
    }

    body>footer nav h2 {
        color: hsla(0, 0%, 73%, 1);
        background-color: hsla(235, 7%, 33.300000000000004%, 1);
    }

    body>footer nav h2 a {
        color: hsla(0, 0%, 73%, 1);
    }

    body>footer nav ul {
        border-top-color: hsla(240, 7%, 15%, 1);
        border-bottom-color: hsla(240, 7%, 15%, 1);
    }

    body>footer nav li a {
        color: hsla(216, 3%, 54%, 1);
    }

    body>footer nav li a:hover {
        color: hsla(0, 0%, 73%, 1);
    }

    body>footer .secondary li a {
        color: hsla(235, 5%, 73%, 1);
    }

    body>footer .brand {
        border-bottom-color: hsla(240, 7%, 15%, 1);
    }

    body>footer p {
        color: hsla(235, 5%, 60%, 1);
    }

    #shareButtons .addthis_button_email>span {
        background-color: hsla(0, 0%, 0%, 0) !important;
    }

    #shareButtons .ext_pinterest a {
        background-color: hsla(0, 0%, 0%, 0);
    }

    button.smedia {
        background: none;
    }

    button.smedia .tally {
        color: hsla(0, 0%, 60%, 1);
        border-top-color: hsla(0, 0%, 15%, 1);
        border-right-color: hsla(0, 0%, 15%, 1);
        border-bottom-color: hsla(0, 0%, 15%, 1);
    }

    button.smedia[data-tally="0"] .tally {
        color: hsla(0, 0%, 80%, 1);
    }

    button.smedia:hover .tally {
        color: hsla(235, 59%, 33%, 1);
        border-top-color: hsla(235, 59%, 15%, 1);
        border-right-color: hsla(235, 59%, 15%, 1);
        border-bottom-color: hsla(235, 59%, 15%, 1);
        border-left-color: hsla(235, 59%, 15%, 1);
    }

    .licenseOptions p a {
        color: hsla(235, 5%, 60%, 1);
    }

    .licenseOptions p a:hover {
        color: hsla(0, 0%, 60%, 1);
    }

    .licenseOptions .cancel a {
        color: hsla(195, 100%, 52%, 1);
    }

    .licenseOptions .cancel a:hover {
        color: hsla(0, 0%, 60%, 1);
    }

    .op_secondary {
        border-top-color: hsla(210, 4%, 21%, 1);
    }

    .mpo_cart .mpo_display a.added {
        background-color: hsla(0, 0%, 6%, 1);
    }

    .mpo_cart .op_primary .cart {
        color: hsla(0, 0%, 73%, 1);
    }

    .mpo_cart .op_primary .cart:hover {
        color: hsla(0, 0%, 60%, 1);
    }

    .mpo_cart .mpo_panel .op_primary a.added {
        color: hsla(195, 100%, 52%, 1);
    }

    .mpo_cart .op_secondary ul li label.checkbox {
        color: hsla(0, 0%, 73%, 1);
    }

    .mpo_cart .op_secondary ul li label.checkbox.checked {
        color: hsla(195, 100%, 52%, 1);
    }

    .mpo_cart .op_secondary ul .empty {
        color: hsla(0, 0%, 73%, 1);
    }

    .dd_button {
        border-top-color: hsla(240, 4%, 20%, 1);
        border-right-color: hsla(240, 4%, 20%, 1);
        border-left-color: hsla(240, 4%, 20%, 1);
        border-bottom-color: hsla(240, 2%, 15%, 1);
    }

    .dd_button:hover {
        border-top-color: hsla(240, 2%, 15%, 1);
        border-right-color: hsla(240, 2%, 15%, 1);
        border-left-color: hsla(240, 2%, 15%, 1);
        border-bottom-color: hsla(0, 0%, 15%, 1);
    }

    .dropdown.open .dd_button {
        border-top-color: hsla(0, 0%, 15%, 1);
        border-right-color: hsla(0, 0%, 15%, 1);
        border-left-color: hsla(0, 0%, 15%, 1);
        border-bottom-color: hsla(0, 0%, 22%, 1);
    }

    .dd_button .dd_label {
        color: hsla(0, 0%, 40%, 1);
    }

    .dd_button:hover .dd_label {
        color: hsla(195, 100%, 47%, 1);
    }

    .dropdown.open .dd_button .dd_label {
        color: hsla(240, 3%, 57%, 1);
    }

    .dd_button .dd_icon {
        background-color: hsla(0, 0%, 0%, 0);
        border-left-color: hsla(0, 0%, 23%, 1);
    }

    .dd_button:hover .dd_icon {
        border-top-color: hsla(0, 0%, 17%, 1);
        border-right-color: hsla(0, 0%, 17%, 1);
        border-bottom-color: hsla(0, 0%, 17%, 1);
        border-left-color: hsla(0, 0%, 17%, 1);
    }

    .dropdown.open .dd_button .dd_icon {
        border-top-color: hsla(0, 0%, 15%, 1);
        border-right-color: hsla(0, 0%, 15%, 1);
        border-bottom-color: hsla(0, 0%, 15%, 1);
        border-left-color: hsla(0, 0%, 15%, 1);
    }

    .dd_area {
        background-color: hsla(0, 0%, 6%, 1);
        border-right-color: hsla(0, 0%, 15%, 1);
        border-bottom-color: hsla(0, 0%, 15%, 1);
        border-left-color: hsla(0, 0%, 15%, 1);
    }

    .dd_area li {
        color: hsla(0, 0%, 73%, 1);
    }

    .dd_area li:hover {
        color: hsla(195, 100%, 52%, 1);
        background-color: hsla(0, 0%, 6%, 1);
    }

    .dd_area li.selected {
        color: hsla(195, 100%, 52%, 1);
    }

    .dd_area li .dd_icon {
        background-color: hsla(0, 0%, 0%, 0);
    }

    .dd_up.open .dd_button {
        border-top-color: hsla(0, 0%, 22%, 1);
        border-bottom-color: hsla(0, 0%, 15%, 1);
    }

    .dd_up .dd_area {
        border-top-color: hsla(0, 0%, 15%, 1);
    }

    .dd_dark.open {
        box-shadow: 0 0 1px hsla(0, 0%, 80%, 0.6);
    }

    .dd_dark .dd_button {
        border-top-color: hsla(240, 9%, 15%, 1);
        border-right-color: hsla(240, 9%, 15%, 1);
        border-bottom-color: hsla(240, 9%, 15%, 1);
        border-left-color: hsla(240, 9%, 15%, 1);
    }

    .dd_dark .dd_button:hover,
    .dd_dark.open .dd_button {
        border-top-color: hsla(240, 7%, 15%, 1);
        border-right-color: hsla(240, 7%, 15%, 1);
        border-bottom-color: hsla(240, 7%, 15%, 1);
        border-left-color: hsla(240, 7%, 15%, 1);
    }

    .dd_dark.open .dd_button {
        border-bottom-color: hsla(240, 5%, 15%, 1);
    }

    .dd_dark .dd_button .dd_label {
        color: hsla(240, 4%, 66%, 1);
    }

    .dd_dark .dd_button:hover .dd_label,
    .dd_dark.open .dd_button .dd_label {
        color: hsla(0, 0%, 100%, 1);
    }

    .dd_dark .dd_button .dd_icon {
        border-top-color: hsla(240, 6%, 15%, 1);
        border-right-color: hsla(240, 6%, 15%, 1);
        border-bottom-color: hsla(240, 6%, 15%, 1);
        border-left-color: hsla(240, 6%, 15%, 1);
    }

    .dd_dark .dd_button:hover .dd_icon,
    .dd_dark.open .dd_button .dd_icon {
        border-top-color: hsla(240, 4%, 15%, 1);
        border-right-color: hsla(240, 4%, 15%, 1);
        border-bottom-color: hsla(240, 4%, 15%, 1);
        border-left-color: hsla(240, 4%, 15%, 1);
    }

    .dd_dark .dd_options {
        box-shadow: 0 0 1px hsla(0, 0%, 80%, 0.6);
    }

    .dd_dark .dd_area {
        background-color: hsla(240, 9%, 28.8%, 1);
    }

    .dd_dark .dd_area li {
        color: hsla(240, 4%, 78%, 1);
    }

    .dd_dark .dd_area li:hover {
        color: hsla(0, 0%, 73%, 1);
        background-color: hsla(240, 7%, 35.1%, 1);
    }

    .dd_dark .dd_area li.selected {
        color: hsla(195, 100%, 52%, 1);
    }

    .dd_dark.dd_up.open .dd_button {
        border-top-color: hsla(240, 5%, 15%, 1);
    }

    .vs_loadicon.animate_fbf>span {
        background-color: hsla(0, 0%, 0%, 0);
    }

    .popout>a {
        color: hsla(0, 0%, 73%, 1);
        background-color: hsla(0, 0%, 6%, 1);
        background-image: linear-gradient(hsla(0, 0%, 6%, 1), hsla(0, 0%, 6%, 1));
        box-shadow: 0 0 1px hsla(0, 0%, 80%, 0.6);
    }

    .popout>a:hover {
        color: hsla(195, 100%, 52%, 1);
        background-color: hsla(0, 0%, 6%, 1);
    }

    .popout>a .po_icon {
        background-color: hsla(0, 0%, 0%, 0);
        border-top-color: hsla(240, 6%, 23%, 1);
        border-left-color: hsla(240, 3%, 15%, 1);
        border-right-color: hsla(240, 3%, 15%, 1);
        border-bottom-color: hsla(240, 2%, 15%, 1);
    }

    .popout>a:hover .po_icon {
        border-top-color: hsla(240, 1%, 15%, 1);
        border-left-color: hsla(0, 0%, 15%, 1);
        border-right-color: hsla(0, 0%, 15%, 1);
        border-bottom-color: hsla(0, 0%, 15%, 1);
    }

    .popout.open>a {
        background-color: hsla(0, 0%, 6%, 1);
    }

    .popout.open>a .po_icon {
        color: hsla(0, 0%, 73%, 1);
        border-top-color: hsla(0, 0%, 15%, 1);
        border-right-color: hsla(0, 0%, 15%, 1);
        border-bottom-color: hsla(0, 0%, 15%, 1);
        border-left-color: hsla(0, 0%, 15%, 1);
    }

    .popout .po_content {
        background-color: hsla(0, 0%, 10%, 1);
        border-top-color: hsla(0, 0%, 15%, 1);
        border-right-color: hsla(0, 0%, 15%, 1);
        border-bottom-color: hsla(0, 0%, 15%, 1);
        border-left-color: hsla(0, 0%, 15%, 1);
        box-shadow: 0 0 1px hsla(0, 0%, 80%, 0.6);
    }

    .popout .title,
    .mpopout .title {
        color: hsla(0, 0%, 73%, 1);
    }

    .popout li {
        color: hsla(0, 0%, 73%, 1);
    }

    .popout li a.cart.added {
        color: hsla(195, 100%, 52%, 1);
    }

    .popout li a span,
    .mpopout li a span {
        background-color: hsla(0, 0%, 6%, 1);
    }

    .popout .footer,
    .mpopout .footer {
        background-color: hsla(0, 0%, 6%, 1);
        border-top-color: hsla(0, 0%, 15%, 1);
    }

    .mpo_display {
        box-shadow: 0 0 1px hsla(0, 0%, 80%, 0.6);
    }

    .mpo_display a {
        background-color: hsla(0, 0%, 6%, 1);
        background-image: linear-gradient(hsla(0, 0%, 6%, 1), hsla(0, 0%, 6%, 1));
        border-top-color: hsla(240, 6%, 23%, 1);
        border-left-color: hsla(240, 3%, 15%, 1);
        border-right-color: hsla(240, 3%, 15%, 1);
        border-bottom-color: hsla(240, 2%, 15%, 1);
    }

    .mpo_display a:hover {
        background-image: linear-gradient(hsla(0, 0%, 6%, 1), hsla(0, 0%, 6%, 1));
    }

    .mpo_display a:active {
        background-image: linear-gradient(hsla(0, 0%, 6.3%, 1), hsla(0, 0%, 6%, 1));
    }

    .mpo_display .instant {
        border-right-color: hsla(0, 0%, 20%, 1);
    }

    .mpo_display .instant:active {
        border-top-color: hsla(0, 0%, 15%, 1);
        border-right-color: hsla(0, 0%, 15%, 1);
        border-bottom-color: hsla(0, 0%, 15%, 1);
        border-left-color: hsla(0, 0%, 15%, 1);
    }

    .open .mpo_display .instant {
        background-image: linear-gradient(hsla(0, 0%, 6%, 1), hsla(0, 0%, 9%, 1));
    }

    .open .mpo_display .toggle {
        background-color: hsla(0, 0%, 6%, 1);
    }

    .mpo_display a .mpo_icon_toggle {
        background-color: hsla(0, 0%, 0%, 0);
    }

    .mpo_panel {
        background-color: hsla(0, 0%, 10%, 1);
        border-top-color: hsla(240, 3%, 15%, 1);
        border-right-color: hsla(240, 3%, 15%, 1);
        border-bottom-color: hsla(240, 3%, 15%, 1);
        border-left-color: hsla(240, 3%, 15%, 1);
        box-shadow: 0 0 1px hsla(0, 0%, 80%, 0.6);
    }

    #previewpane {
        background-color: hsla(237, 36%, 19%, 1);
    }

    #previewpane .pp_grid {
        background-color: hsla(0, 0%, 0%, 0);
    }

    #previewpane .pp_error {
        outline-color: hsla(235, 6%, 15%, 1);
    }

    #previewpane .pp_error p {
        color: hsla(234, 4%, 60%, 1);
    }

    #previewpane .pp_title {
        color: hsla(0, 0%, 73%, 1);
    }

    #previewpane .pp_small {
        color: hsla(240, 3%, 60%, 1);
    }

    #newpreviewpane {
        background-color: hsla(237, 36%, 19%, 1);
    }

    #newpreviewpane .pp_title {
        color: hsla(0, 0%, 73%, 1);
    }

    #newpreviewpane .pp_small {
        color: hsla(240, 3%, 60%, 1);
    }

    #searchbox fieldset {
        background-color: hsla(240, 4%, 8.1%, 1);
    }

    #searchbox fieldset .contents .tags li {
        color: hsla(0, 0%, 73%, 1);
        background-color: hsla(225, 2%, 39.6%, 1);
    }

    #searchbox fieldset .contents .tags li button {
        background-color: hsla(0, 0%, 0%, 0);
    }

    #searchbox fieldset .contents .input input[type="text"] {
        color: hsla(0, 0%, 73%, 1);
        background: none;
    }

    #searchbox fieldset .contents .input input[type="text"]::placeholder {
        color: hsla(0, 0%, 60%, 0.33);
    }

    #searchbox fieldset .contents .input button[data-action="clear"] {
        background-color: hsla(0, 0%, 0%, 0);
    }

    #searchbox fieldset .suggestions>div {
        box-shadow: 0 0 1px hsla(0, 0%, 80%, 0.6);
    }

    #searchbox fieldset .suggestions .group {
        background-color: hsla(0, 0%, 6%, 1);
        border-top-color: hsla(0, 0%, 18%, 1);
    }

    #searchbox fieldset .suggestions .group h6 {
        color: hsla(210, 1%, 48%, 1);
    }

    #searchbox fieldset .suggestions .message {
        background-color: hsla(0, 0%, 6%, 1);
        border-top-color: hsla(0, 0%, 18%, 1);
    }

    #searchbox fieldset .suggestions .message h6 {
        color: hsla(0, 0%, 73%, 1);
    }

    #searchbox fieldset .suggestions .loading h6 {
        color: hsla(0, 0%, 73%, 1);
    }

    #searchbox fieldset .suggestions ul {
        background-color: hsla(0, 0%, 6%, 1);
        border-left-color: hsla(0, 0%, 21%, 1);
    }

    #searchbox fieldset .suggestions ul li {
        color: hsla(0, 0%, 73%, 1);
    }

    #searchbox fieldset .suggestions ul li em {
        color: hsla(195, 100%, 52%, 1);
    }

    #searchbox fieldset .suggestions ul li.highlight {
        color: hsla(0, 0%, 73%, 1);
        background-color: hsla(195, 40%, 32%, 1);
    }

    #searchbox fieldset .suggestions ul li.highlight em {
        color: hsla(0, 0%, 73%, 1);
    }

    #searchbox button[data-action="searchbyimage"] {
        background-color: hsla(0, 0%, 0%, 0);
    }

    #searchbox button[data-action="searchbyimage"] .icon svg .fill {
        fill: hsla(0, 0%, 47%, 1);
    }

    #searchbox button[data-action="searchbyimage"] .tooltip {
        border-top-color: hsla(200, 3%, 15%, 1);
        border-right-color: hsla(200, 3%, 15%, 1);
        border-bottom-color: hsla(200, 3%, 15%, 1);
        border-left-color: hsla(200, 3%, 15%, 1);
        box-shadow: 0 0 1px hsla(0, 0%, 80%, 0.6);
    }

    #searchbox button[data-action="searchbyimage"] .tooltip::before {
        background-color: hsla(0, 0%, 0%, 0);
    }

    #searchbox button[data-action="searchbyimage"] .tooltip span {
        color: hsla(0, 0%, 47%, 1);
    }

    #searchbox button[data-action="searchbyimage"]:hover .icon svg .fill {
        fill: hsla(0, 0%, 25%, 1);
    }

    #searchbox button[data-action="searchbyimage"]:active .icon svg .fill {
        fill: hsla(0, 0%, 60%, 1);
    }

    #searchbox button[type="submit"] {
        border-bottom-color: hsla(197, 77%, 30%, 1);
    }

    #searchbox button[type="submit"] .icon {
        background-color: hsla(0, 0%, 0%, 0);
    }

    #searchbox button[type="submit"][disabled] {
        border-top-color: hsla(0, 0%, 15%, 1);
        border-right-color: hsla(0, 0%, 15%, 1);
        border-bottom-color: hsla(0, 0%, 15%, 1);
        border-left-color: hsla(0, 0%, 15%, 1);
    }

    #searchbox button[type="submit"]:hover {
        border-top-color: hsla(197, 77%, 30%, 1);
        border-right-color: hsla(197, 77%, 30%, 1);
        border-bottom-color: hsla(197, 77%, 30%, 1);
        border-left-color: hsla(197, 77%, 30%, 1);
    }

    #searchbox.focused fieldset {
        background-color: hsla(0, 0%, 6%, 1);
    }

    @media only screen and (max-width: 640px) {
        #searchbox button[data-action="searchbyimage"] .icon svg .fill {
            fill: hsla(0, 0%, 47%, 1);
        }

        #searchbox button[data-action="searchbyimage"]:hover .icon svg .fill {
            fill: hsla(0, 0%, 100%, 1);
        }
    }

    #box-imagesearch .wrapper {
        background-color: hsla(0, 0%, 6%, 1);
        box-shadow: 0 0 1px hsla(0, 0%, 80%, 0.6);
    }

    #box-imagesearch .wrapper header h4 {
        color: hsla(237, 32%, 60%, 1);
    }

    #box-imagesearch .wrapper header p {
        color: hsla(235, 5%, 60%, 1);
    }

    #box-imagesearch .wrapper section {
        background-color: hsla(0, 0%, 6%, 1);
        border-top-color: hsla(0, 0%, 15%, 1);
        border-right-color: hsla(0, 0%, 15%, 1);
        border-bottom-color: hsla(0, 0%, 15%, 1);
        border-left-color: hsla(0, 0%, 15%, 1);
    }

    #box-imagesearch .wrapper section .file-image .title-image svg .fill {
        fill: hsla(0, 0%, 60%, 1);
    }

    #box-imagesearch .wrapper section .file-image .title-image .file p {
        color: hsla(237, 32%, 60%, 1);
    }

    #box-imagesearch .wrapper section .file-image .title-image .file p .link {
        color: hsla(195, 100%, 52%, 1);
    }

    #box-imagesearch .wrapper section .file-image .title-image .file:hover p .link {
        color: hsla(237, 32%, 60%, 1);
    }

    #box-imagesearch .wrapper section .file-image .title-loading p {
        color: hsla(195, 100%, 52%, 1);
    }

    #box-imagesearch .wrapper section .file-url p {
        color: hsla(237, 32%, 60%, 1);
    }

    #box-imagesearch .wrapper section .file-url p::before {
        border-top-color: hsla(0, 0%, 15%, 0.1);
    }

    #box-imagesearch .wrapper section .file-url p::after {
        border-top-color: hsla(0, 0%, 15%, 0.1);
    }

    #box-imagesearch .wrapper section .file-url input[type="url"] {
        color: hsla(0, 0%, 60%, 0.9);
        background-color: hsla(0, 0%, 6%, 1);
        border-top-color: hsla(198, 5%, 15%, 1);
        border-right-color: hsla(198, 5%, 15%, 1);
        border-bottom-color: hsla(198, 5%, 15%, 1);
        border-left-color: hsla(198, 5%, 15%, 1);
    }

    #box-imagesearch .wrapper section .file-url input[type="url"]::placeholder {
        color: hsla(0, 0%, 60%, 0.5);
    }

    #box-imagesearch .wrapper section .file-url input[type="url"]:focus {
        box-shadow: 0 0 1px hsla(0, 0%, 80%, 0.6);
    }

    #box-imagesearch .wrapper section.dragover {
        background-color: hsla(187, 74%, 11.700000000000001%, 1);
        border-top-color: hsla(195, 100%, 30%, 1);
        border-right-color: hsla(195, 100%, 30%, 1);
        border-bottom-color: hsla(195, 100%, 30%, 1);
        border-left-color: hsla(195, 100%, 30%, 1);
    }

    #box-imagesearch .wrapper section.loading {
        background-color: hsla(187, 74%, 11.700000000000001%, 1);
        border-top-color: hsla(195, 100%, 30%, 1);
        border-right-color: hsla(195, 100%, 30%, 1);
        border-bottom-color: hsla(195, 100%, 30%, 1);
        border-left-color: hsla(195, 100%, 30%, 1);
    }

    #box-imagesearch .wrapper button[data-action="close"] {
        background-color: hsla(0, 0%, 0%, 0);
    }

    #banner-cyber-monday a {
        background-color: hsla(0, 0%, 0%, 0);
    }

    #banner-cyber-monday a #banner-message .subtitle {
        color: hsla(0, 0%, 73%, 0.75);
    }

    #banner-cyber-monday a #banner-message .title {
        color: hsla(0, 0%, 73%, 1);
    }

    #banner-cyber-monday a #banner-message .button .label {
        color: hsla(324, 32%, 31%, 1);
    }

    #banner-cyber-monday button[name="but-close"] {
        background-color: hsla(0, 0%, 0%, 0);
    }

    body>.overlay.reveal {
        background-color: hsla(193, 35%, 9%, 0.8);
    }

    body>.overlay>.overlay-box {
        box-shadow: 0 0 1px hsla(0, 0%, 80%, 0.6);
    }

    #box-signup {
        background-color: hsla(240, 3%, 6%, 1);
    }

    #box-signup .sb-screens .screen .fields fieldset input,
    #box-signup .sb-screens .screen .fields fieldset textarea {
        color: hsla(237, 36%, 60%, 1);
        background-color: hsla(0, 0%, 6%, 1);
        border-top-color: hsla(300, 1%, 15%, 1);
        border-right-color: hsla(300, 1%, 15%, 1);
        border-bottom-color: hsla(300, 1%, 15%, 1);
        border-left-color: hsla(300, 1%, 15%, 1);
    }

    #box-signup .sb-screens .screen .fields fieldset input::placeholder,
    #box-signup .sb-screens .screen .fields fieldset textarea::placeholder {
        color: hsla(237, 36%, 60%, 0.3);
    }

    #box-signup .sb-screens .screen .fields fieldset input:focus,
    #box-signup .sb-screens .screen .fields fieldset textarea:focus {
        box-shadow: 0 0 1px hsla(0, 0%, 80%, 0.6);
    }

    #box-signup .sb-screens .screen .fields fieldset input[disabled],
    #box-signup .sb-screens .screen .fields fieldset textarea[disabled] {
        color: hsla(237, 36%, 60%, 0.5);
    }

    #box-signup .sb-screens .screen .fields fieldset.error input {
        color: hsla(340, 100%, 72%, 1);
        background-color: hsla(340, 50%, 6%, 1);
        border-top-color: hsla(340, 100%, 30%, 1);
        border-right-color: hsla(340, 100%, 30%, 1);
        border-bottom-color: hsla(340, 100%, 30%, 1);
        border-left-color: hsla(340, 100%, 30%, 1);
    }

    #box-signup .sb-screens .screen .fields fieldset.error input:focus {
        box-shadow: 0 0 1px hsla(0, 0%, 80%, 0.6);
    }

    #box-signup .sb-screens .screen .fields fieldset.error .message .icon {
        background-color: hsla(340, 40%, 42%, 1);
    }

    #box-signup .sb-screens .screen .fields fieldset.error .message .explanation p {
        color: hsla(0, 0%, 73%, 1);
        background-color: hsla(340, 40%, 32%, 1);
    }

    #box-signup .sb-screens .screen .fields fieldset.error .message .explanation p::after {
        border-left-color: hsla(0, 0%, 0%, 0);
        border-right-color: hsla(0, 0%, 0%, 0);
        border-bottom-color: hsla(340, 100%, 30%, 1);
    }

    #box-signup .sb-screens .screen table thead th {
        color: hsla(216, 2%, 60%, 1);
    }

    #box-signup .sb-screens .screen table tbody td {
        color: hsla(216, 2%, 60%, 1);
        background: none;
        border-top-color: hsla(0, 0%, 15%, 1);
    }

    #box-signup .sb-screens .screen table tbody td.title {
        color: hsla(237, 36%, 60%, 0.75);
    }

    #box-signup .sb-screens .screen button {
        color: hsla(0, 0%, 100%, 1);
        border-bottom-color: hsla(193, 100%, 30%, 1);
    }

    #box-signup .sb-screens .screen button .icon {
        background-color: hsla(0, 0%, 0%, 0);
    }

    #box-signup .sb-screens .screen button[disabled] {
        border-top-color: hsla(0, 0%, 15%, 1);
        border-right-color: hsla(0, 0%, 15%, 1);
        border-bottom-color: hsla(0, 0%, 15%, 1);
        border-left-color: hsla(0, 0%, 15%, 1);
    }

    #box-signup .sb-screens .screen button[data-action="close"] {
        background-color: hsla(0, 0%, 0%, 0);
    }

    #box-signup .sb-sidebar .sb-content {
        color: hsla(0, 0%, 73%, 1);
        background-color: hsla(0, 0%, 0%, 0);
    }

    #box-signup .sb-sidebar .sb-content h1 {
        background-color: hsla(0, 0%, 0%, 0);
    }

    #box-signup .sb-sidebar .sb-content .sb-features ul li {
        background-color: hsla(0, 0%, 0%, 0);
    }

    #box-signup .sb-sidebar .sb-content .sb-customers ul li {
        background-color: hsla(0, 0%, 0%, 0);
    }

    #box-signup .sb-sidebar .sb-background {
        background-color: hsla(196, 40%, 31%, 1);
    }

    #box-signup .sb-screens .screen[data-screen="select"] .header h1 {
        color: hsla(237, 36%, 60%, 0.75);
    }

    #box-signup .sb-screens .screen[data-screen="select"] .header button[data-method="google"] {
        border-top-color: hsla(3, 57%, 15%, 1);
        border-right-color: hsla(3, 57%, 15%, 1);
        border-bottom-color: hsla(3, 57%, 15%, 1);
        border-left-color: hsla(3, 57%, 15%, 1);
    }

    #box-signup .sb-screens .screen[data-screen="select"] .header button[data-method="google"] .icon {
        background-color: hsla(0, 0%, 0%, 0);
    }

    #box-signup .sb-screens .screen[data-screen="select"] .header button[data-method="google"] .icon>span {
        background: none;
    }

    #box-signup .sb-screens .screen[data-screen="select"] .header button[data-method="google"][disabled] {
        border-top-color: hsla(0, 0%, 15%, 1);
        border-right-color: hsla(0, 0%, 15%, 1);
        border-bottom-color: hsla(0, 0%, 15%, 1);
        border-left-color: hsla(0, 0%, 15%, 1);
    }

    #box-signup .sb-screens .screen[data-screen="select"] .header button[data-method="google"][disabled] .icon {
        background: none;
    }

    #box-signup .sb-screens .screen[data-screen="select"] .header button[data-method="facebook"] {
        border-top-color: hsla(220, 43%, 15%, 1);
        border-right-color: hsla(220, 43%, 15%, 1);
        border-bottom-color: hsla(220, 43%, 15%, 1);
        border-left-color: hsla(220, 43%, 15%, 1);
    }

    #box-signup .sb-screens .screen[data-screen="select"] .header button[data-method="facebook"] .icon {
        background-color: hsla(0, 0%, 0%, 0);
    }

    #box-signup .sb-screens .screen[data-screen="select"] .header button[data-method="facebook"] .icon>span {
        background: none;
    }

    #box-signup .sb-screens .screen[data-screen="select"] .header button[data-method="facebook"][disabled] {
        border-top-color: hsla(0, 0%, 15%, 1);
        border-right-color: hsla(0, 0%, 15%, 1);
        border-bottom-color: hsla(0, 0%, 15%, 1);
        border-left-color: hsla(0, 0%, 15%, 1);
    }

    #box-signup .sb-screens .screen[data-screen="select"] .header button[data-method="facebook"][disabled] .icon {
        background: none;
    }

    #box-signup .sb-screens .screen[data-screen="select"] .footer p {
        color: hsla(0, 0%, 73%, 1);
    }

    #box-signup .sb-screens .screen[data-screen="select"] .footer p a {
        color: hsla(196, 100%, 53%, 1);
    }

    #box-signup .sb-screens .screen[data-screen="select"] .footer p a:hover {
        color: hsla(0, 0%, 73%, 1);
    }

    #box-signup .sb-screens .screen[data-screen="signup"] h1 {
        color: hsla(237, 36%, 60%, 0.75);
    }

    #box-signup .sb-screens .screen[data-screen="signup"] .fields fieldset[data-field="type"] h6 {
        color: hsla(0, 0%, 73%, 1);
    }

    #box-signup .sb-screens .screen[data-screen="signup"] .fields fieldset[data-field="type"] ul li label {
        color: hsla(0, 0%, 73%, 1);
    }

    #box-signup .sb-screens .screen[data-screen="signup"] .fields fieldset[data-field="type"] ul li label .radio {
        border-top-color: hsla(0, 0%, 15%, 1);
        border-right-color: hsla(0, 0%, 15%, 1);
        border-bottom-color: hsla(0, 0%, 15%, 1);
        border-left-color: hsla(0, 0%, 15%, 1);
    }

    #box-signup .sb-screens .screen[data-screen="signup"] .fields fieldset[data-field="type"] ul li label .radio span {
        background-color: hsla(210, 3%, 33.400000000000006%, 1);
    }

    #box-signup .sb-screens .screen[data-screen="signup"] .fields fieldset[data-field="type"] ul li.checked label .radio span {
        background-color: hsla(0, 0%, 45%, 1);
    }

    #box-signup .sb-screens .screen[data-screen="signup"] .agreements li label {
        color: hsla(0, 0%, 73%, 1);
    }

    #box-signup .sb-screens .screen[data-screen="signup"] .agreements li label .checkbox {
        background-color: hsla(0, 0%, 0%, 0);
    }

    #box-signup .sb-screens .screen[data-screen="signup"] .agreements li label .title a {
        color: hsla(0, 0%, 73%, 1);
    }

    #box-signup .sb-screens .screen[data-screen="signup"] .agreements li label .title a:hover {
        color: hsla(0, 0%, 73%, 1);
    }

    #box-signup .sb-screens .screen[data-screen="signup"] .agreements li.error .message {
        background-color: hsla(340, 40%, 32%, 1);
    }

    #box-signup .sb-screens .screen[data-screen="signup"] .agreements li.error .message p {
        color: hsla(0, 0%, 73%, 1);
    }

    #box-signup .sb-screens .screen[data-screen="signup"] .footer p {
        color: hsla(0, 0%, 73%, 1);
    }

    #box-signup .sb-screens .screen[data-screen="signup"] .footer p a {
        color: hsla(196, 100%, 53%, 1);
    }

    #box-signup .sb-screens .screen[data-screen="signup"] .footer p a:hover {
        color: hsla(0, 0%, 73%, 1);
    }

    #signup-recaptcha.error iframe {
        background-color: hsla(340, 40%, 32%, 1);
    }

    #box-signup .sb-screens .screen[data-screen="login"] h1 {
        color: hsla(237, 36%, 60%, 0.75);
    }

    #box-signup .sb-screens .screen[data-screen="login"] form>p a {
        color: hsla(216, 3%, 54%, 1);
    }

    #box-signup .sb-screens .screen[data-screen="login"] form>p a:hover {
        color: hsla(0, 0%, 73%, 1);
    }

    #box-signup .sb-screens .screen[data-screen="login"] .footer .options button .icon>span {
        background: none;
    }

    #box-signup .sb-screens .screen[data-screen="login"] .footer .options button[data-method="google"] {
        border-top-color: hsla(3, 57%, 15%, 1);
        border-right-color: hsla(3, 57%, 15%, 1);
        border-bottom-color: hsla(3, 57%, 15%, 1);
        border-left-color: hsla(3, 57%, 15%, 1);
    }

    #box-signup .sb-screens .screen[data-screen="login"] .footer .options button[data-method="facebook"] {
        border-top-color: hsla(220, 43%, 15%, 1);
        border-right-color: hsla(220, 43%, 15%, 1);
        border-bottom-color: hsla(220, 43%, 15%, 1);
        border-left-color: hsla(220, 43%, 15%, 1);
    }

    #box-signup .sb-screens .screen[data-screen="login"] .footer .options button[disabled] {
        border-top-color: hsla(0, 0%, 15%, 1);
        border-right-color: hsla(0, 0%, 15%, 1);
        border-bottom-color: hsla(0, 0%, 15%, 1);
        border-left-color: hsla(0, 0%, 15%, 1);
    }

    #box-signup .sb-screens .screen[data-screen="login"] .footer .options button[disabled] .icon {
        background-color: hsla(0, 0%, 0%, 0);
    }

    #box-signup .sb-screens .screen[data-screen="login"] .footer p {
        color: hsla(0, 0%, 73%, 1);
    }

    #box-signup .sb-screens .screen[data-screen="login"] .footer p a {
        color: hsla(196, 100%, 53%, 1);
    }

    #box-signup .sb-screens .screen[data-screen="login"] .footer p a:hover {
        color: hsla(0, 0%, 73%, 1);
    }

    #box-signup .sb-screens .screen[data-screen="licenses"] h1 {
        color: hsla(237, 36%, 60%, 1);
    }

    #box-signup .sb-screens .screen[data-screen="licenses"] h2 {
        color: hsla(237, 36%, 60%, 0.66);
    }

    #box-signup .sb-screens .screen[data-screen="licenses"] table {
        border-bottom-color: hsla(0, 0%, 15%, 1);
    }

    #box-signup .sb-screens .screen[data-screen="licenses"] p.note {
        color: hsla(237, 36%, 60%, 0.66);
        background-color: hsla(0, 0%, 0%, 0);
    }

    #box-signup .sb-screens .screen[data-screen="pricing"] h1 {
        color: hsla(237, 36%, 60%, 1);
    }

    #box-signup .sb-screens .screen[data-screen="pricing"] h2 {
        color: hsla(237, 36%, 60%, 0.66);
    }

    @media only screen and (max-width: 800px) {
        #box-signup {
            background-color: hsla(0, 0%, 6%, 1);
        }

        #box-signup .sb-screens .screen .fields fieldset input,
        #box-signup .sb-screens .screen .fields fieldset textarea {
            background-color: hsla(0, 0%, 6%, 1);
            border-top-color: hsla(0, 0%, 15%, 1);
            border-right-color: hsla(0, 0%, 15%, 1);
            border-bottom-color: hsla(0, 0%, 15%, 1);
            border-left-color: hsla(0, 0%, 15%, 1);
        }
    }

    #box-gallery {
        background-color: hsla(240, 3%, 6%, 1);
    }

    #box-gallery .gb-screens fieldset input {
        color: hsla(237, 36%, 60%, 1);
        background-color: hsla(0, 0%, 6%, 1);
        border-top-color: hsla(300, 1%, 15%, 1);
        border-right-color: hsla(300, 1%, 15%, 1);
        border-bottom-color: hsla(300, 1%, 15%, 1);
        border-left-color: hsla(300, 1%, 15%, 1);
    }

    #box-gallery .gb-screens fieldset input::placeholder {
        color: hsla(237, 36%, 60%, 0.3);
    }

    #box-gallery .gb-screens fieldset input:focus {
        box-shadow: 0 0 1px hsla(0, 0%, 80%, 0.6);
    }

    #box-gallery .gb-screens fieldset input[disabled] {
        color: hsla(237, 36%, 60%, 0.5);
    }

    #box-gallery .gb-screens label .title {
        color: hsla(225, 2%, 60%, 1);
    }

    #box-gallery .gb-screens label:active .title {
        color: hsla(195, 100%, 52%, 1);
    }

    #box-gallery .gb-screens label.checked .title {
        color: hsla(195, 100%, 52%, 1);
    }

    #box-gallery .gb-screens label.checked:active .title {
        color: hsla(225, 2%, 60%, 1);
    }

    #box-gallery .gb-screens button {
        color: hsla(0, 0%, 20%, 1);
        border-bottom-color: hsla(0, 0%, 15%, 1);
    }

    #box-gallery .gb-screens button:hover {
        border-top-color: hsla(0, 0%, 15%, 1);
        border-right-color: hsla(0, 0%, 15%, 1);
        border-bottom-color: hsla(0, 0%, 15%, 1);
        border-left-color: hsla(0, 0%, 15%, 1);
    }

    #box-gallery .gb-screens button[data-action="close"] {
        background-color: hsla(0, 0%, 0%, 0);
    }

    #box-gallery .gb-sidebar {
        background-color: hsla(0, 0%, 0%, 0);
    }

    #box-gallery .gb-sidebar .gb-screen .gb-content {
        color: hsla(0, 0%, 73%, 1);
    }

    #box-gallery .gb-sidebar .gb-screen .gb-content .imageset figure {
        background-color: hsla(0, 0%, 10%, 1);
        box-shadow: 0 0 1px hsla(0, 0%, 80%, 0.6);
    }

    #box-gallery .gb-sidebar .gb-screen .gb-content .imageset figure .inner {
        box-shadow: 0 0 1px hsla(0, 0%, 80%, 0.6);
    }

    #box-gallery .gb-sidebar .gb-screen .gb-content h2 {
        background-color: hsla(0, 0%, 0%, 0);
    }

    #box-gallery .gb-sidebar .gb-screen .gb-background {
        background-color: hsla(196, 40%, 31%, 1);
    }

    #box-gallery .gb-screens .gb-screen .header {
        background-color: hsla(0, 0%, 6%, 1);
        border-bottom-color: hsla(200, 3%, 15%, 1);
    }

    #box-gallery .gb-screens .gb-screen .header>div h1 {
        color: hsla(237, 36%, 60%, 1);
    }

    #box-gallery .gb-screens .gb-screen .header>div .fieldgroup button .icon {
        background-color: hsla(0, 0%, 0%, 0);
    }

    #box-gallery .gb-screens .gb-screen .panel .pane ul li {
        border-bottom-color: hsla(200, 3%, 15%, 1);
    }

    #box-gallery .gb-screens .gb-screen .panel .pane ul li[data-status="private"] .subtitle {
        background-color: hsla(0, 0%, 0%, 0);
    }

    #box-gallery .gb-screens .gb-screen .panel .pane ul li label:active .title em {
        border-top-color: hsla(195, 100%, 30%, 1);
        border-right-color: hsla(195, 100%, 30%, 1);
        border-bottom-color: hsla(195, 100%, 30%, 1);
        border-left-color: hsla(195, 100%, 30%, 1);
    }

    #box-gallery .gb-screens .gb-screen .panel .pane ul li label.checked:active .title em {
        border-top-color: hsla(225, 2%, 15%, 1);
        border-right-color: hsla(225, 2%, 15%, 1);
        border-bottom-color: hsla(225, 2%, 15%, 1);
        border-left-color: hsla(225, 2%, 15%, 1);
    }

    #box-gallery .gb-screens .gb-screen .panel .pane ul li label.checked .title em {
        border-top-color: hsla(195, 100%, 30%, 1);
        border-right-color: hsla(195, 100%, 30%, 1);
        border-bottom-color: hsla(195, 100%, 30%, 1);
        border-left-color: hsla(195, 100%, 30%, 1);
    }

    #box-gallery .gb-screens .gb-screen .panel .pane ul li label .title em {
        border-bottom-color: hsla(225, 2%, 15%, 1);
    }

    #box-gallery .gb-screens .gb-screen .panel .pane ul li label .subtitle {
        color: hsla(0, 0%, 73%, 1);
    }

    #box-gallery .gb-screens .gb-screen .panel .pane ul li label .images .set figure {
        background-color: hsla(237, 36%, 19%, 0.07);
    }

    #box-gallery .gb-screens .gb-screen .panel .state p {
        color: hsla(225, 2%, 60%, 1);
    }

    #box-gallery .gb-screens .gb-screen[data-screen="list"] .header .header_browse h1 data {
        color: hsla(0, 0%, 73%, 1);
    }

    #box-gallery .gb-screens .gb-screen[data-screen="list"] .header .header_browse .fieldgroup fieldset .icon {
        background-color: hsla(0, 0%, 0%, 0);
    }

    #box-gallery .gb-screens .gb-screen[data-screen="list"] .header .header_create button[data-action="create"] {
        color: hsla(0, 0%, 100%, 1);
        border-top-color: hsla(197, 78%, 30%, 1);
        border-right-color: hsla(197, 78%, 30%, 1);
        border-bottom-color: hsla(197, 78%, 30%, 1);
        border-left-color: hsla(197, 78%, 30%, 1);
    }

    #box-gallery .gb-screens .gb-screen[data-screen="list"] .header .header_create button[data-action="create"]:hover {
        border-top-color: hsla(197, 78%, 30%, 1);
        border-right-color: hsla(197, 78%, 30%, 1);
        border-bottom-color: hsla(197, 78%, 30%, 1);
        border-left-color: hsla(197, 78%, 30%, 1);
    }

    #box-gallery .gb-screens .gb-screen[data-screen="list"] .header .header_create button[data-action="create"][disabled] {
        color: hsla(0, 0%, 20%, 1);
        border-top-color: hsla(0, 0%, 17%, 1);
        border-right-color: hsla(0, 0%, 17%, 1);
        border-bottom-color: hsla(0, 0%, 17%, 1);
        border-left-color: hsla(0, 0%, 17%, 1);
    }

    #box-gallery .gb-screens .gb-screen[data-screen="list"] .header .header_created .gallery {
        border-top-color: hsla(300, 1%, 15%, 1);
        border-right-color: hsla(300, 1%, 15%, 1);
        border-bottom-color: hsla(300, 1%, 15%, 1);
        border-left-color: hsla(300, 1%, 15%, 1);
    }

    #box-gallery .gb-screens .gb-screen[data-screen="list"] .header .header_created .gallery .title {
        color: hsla(225, 2%, 60%, 1);
    }

    #box-gallery .gb-screens .gb-screen[data-screen="list"] .header .header_created .gallery .subtitle {
        color: hsla(0, 0%, 60%, 1);
    }

    #box-gallery .gb-screens .gb-screen[data-screen="list"] .header .header_created .gallery .images .set figure {
        background-color: hsla(237, 36%, 19%, 0.07);
    }

    #box-payment .pb-wrap {
        background-color: hsla(240, 3%, 9.4%, 1);
        box-shadow: 0 0 1px hsla(0, 0%, 80%, 0.6);
    }

    #box-payment .pb-screens button[data-action="close"] {
        background-color: hsla(0, 0%, 0%, 0);
    }

    #box-payment .pb-screens ul.radiobuttons li label input[type="radio"] {
        background: none;
        border-top-color: hsla(0, 0%, 15%, 1);
        border-right-color: hsla(0, 0%, 15%, 1);
        border-bottom-color: hsla(0, 0%, 15%, 1);
        border-left-color: hsla(0, 0%, 15%, 1);
    }

    #box-payment .pb-screens ul.radiobuttons li label input[type="radio"]::after {
        border-top-color: hsla(0, 0%, 15%, 1);
        border-right-color: hsla(0, 0%, 15%, 1);
        border-bottom-color: hsla(0, 0%, 15%, 1);
        border-left-color: hsla(0, 0%, 15%, 1);
    }

    #box-payment .pb-screens ul.radiobuttons li label input[type="radio"]:checked {
        border-top-color: hsla(195, 100%, 30%, 1);
        border-right-color: hsla(195, 100%, 30%, 1);
        border-bottom-color: hsla(195, 100%, 30%, 1);
        border-left-color: hsla(195, 100%, 30%, 1);
    }

    #box-payment .pb-screens ul.radiobuttons li label .title {
        color: hsla(225, 2%, 44%, 1);
    }

    #box-payment .pb-screens ul.radiobuttons li.checked label .title {
        color: hsla(195, 100%, 47%, 1);
    }

    #box-payment .pb-sidebar {
        background-color: hsla(0, 0%, 0%, 0);
    }

    #box-payment .pb-sidebar .pb-screen .pb-content {
        color: hsla(0, 0%, 73%, 1);
    }

    #box-payment .pb-sidebar .pb-screen .pb-content .imageset picture {
        background-color: hsla(0, 0%, 6%, 1);
        box-shadow: 0 0 1px hsla(0, 0%, 80%, 0.6);
    }

    #box-payment .pb-sidebar .pb-screen .pb-content .imageset picture::after {
        box-shadow: 0 0 1px hsla(0, 0%, 80%, 0.6);
    }

    #box-payment .pb-sidebar .pb-screen .pb-content ul li {
        color: hsla(0, 0%, 73%, 1);
    }

    #box-payment .pb-sidebar .pb-screen .pb-content ul li.total {
        border-top-color: hsla(0, 0%, 30%, 0.33);
    }

    #box-payment .pb-sidebar .pb-screen .pb-background {
        background-color: hsla(196, 40%, 31%, 1);
    }

    #box-payment .pb-screens .pb-screen {
        background-color: hsla(240, 3%, 15.4%, 1);
    }

    #box-payment .pb-screens .pb-screen .header {
        background-color: hsla(0, 0%, 10%, 1);
        border-bottom-color: hsla(0, 0%, 15%, 1);
    }

    #box-payment .pb-screens .pb-screen .header h1 {
        color: hsla(237, 36%, 60%, 1);
    }

    #box-payment .pb-screens .pb-screen .panel .pane::-webkit-scrollbar-thumb {
        background-color: hsla(0, 0%, 6%, 0.5);
        box-shadow: 0 0 1px hsla(0, 0%, 80%, 0.6);
    }

    #box-payment .pb-screens .pb-screen .panel .pane .step h2 {
        color: hsla(0, 0%, 60%, 0.7);
    }

    #box-payment .pb-screens .pb-screen .panel .pane h4 {
        color: hsla(0, 0%, 60%, 0.7);
    }

    #box-payment .pb-screens .pb-screen .panel .pane fieldset>.icon {
        background-color: hsla(0, 0%, 0%, 0);
    }

    #box-payment .pb-screens .pb-screen .panel .pane fieldset input,
    #box-payment .pb-screens .pb-screen .panel .pane fieldset textarea {
        color: hsla(237, 36%, 60%, 1);
        background-color: hsla(0, 0%, 6%, 1);
        border-top-color: hsla(300, 1%, 15%, 1);
        border-right-color: hsla(300, 1%, 15%, 1);
        border-bottom-color: hsla(300, 1%, 15%, 1);
        border-left-color: hsla(300, 1%, 15%, 1);
    }

    #box-payment .pb-screens .pb-screen .panel .pane fieldset input::placeholder,
    #box-payment .pb-screens .pb-screen .panel .pane fieldset textarea::placeholder {
        color: hsla(237, 36%, 60%, 0.3);
    }

    #box-payment .pb-screens .pb-screen .panel .pane fieldset input:focus,
    #box-payment .pb-screens .pb-screen .panel .pane fieldset textarea:focus {
        box-shadow: 0 0 1px hsla(0, 0%, 80%, 0.6);
    }

    #box-payment .pb-screens .pb-screen .panel .pane fieldset input[disabled],
    #box-payment .pb-screens .pb-screen .panel .pane fieldset textarea[disabled] {
        color: hsla(237, 36%, 60%, 0.5);
    }

    #box-payment .pb-screens .pb-screen .panel .pane fieldset.disabled input,
    #box-payment .pb-screens .pb-screen .panel .pane fieldset.disabled textarea {
        background: none;
    }

    #box-payment .pb-screens .pb-screen .panel .pane fieldset.error input {
        color: hsla(340, 100%, 72%, 1);
        background-color: hsla(340, 50%, 6%, 1);
        border-top-color: hsla(340, 100%, 30%, 1);
        border-right-color: hsla(340, 100%, 30%, 1);
        border-bottom-color: hsla(340, 100%, 30%, 1);
        border-left-color: hsla(340, 100%, 30%, 1);
    }

    #box-payment .pb-screens .pb-screen .panel .pane fieldset.error input:focus {
        box-shadow: 0 0 1px hsla(0, 0%, 80%, 0.6);
    }

    #box-payment .pb-screens .pb-screen .panel .pane fieldset.error .message .icon {
        background-color: hsla(340, 40%, 42%, 1);
    }

    #box-payment .pb-screens .pb-screen .panel .pane fieldset.error .message .explanation p {
        color: hsla(0, 0%, 73%, 1);
        background-color: hsla(340, 40%, 36%, 1);
        box-shadow: 0 0 1px hsla(0, 0%, 80%, 0.6);
    }

    #box-payment .pb-screens .pb-screen .panel .pane fieldset.error .message .explanation p::after {
        border-left-color: hsla(0, 0%, 0%, 0);
        border-right-color: hsla(0, 0%, 0%, 0);
        border-bottom-color: hsla(340, 100%, 30%, 1);
    }

    #box-payment .pb-screens .pb-screen .panel .pane label.checkbox {
        color: hsla(225, 2%, 60%, 1);
    }

    #box-payment .pb-screens .pb-screen .panel .pane label.checkbox.checked {
        color: hsla(0, 0%, 73%, 1);
    }

    #box-payment .pb-screens .pb-screen .panel .pane .report {
        background-color: hsla(233, 4%, 47.2%, 1);
        box-shadow: 0 0 1px hsla(0, 0%, 80%, 0.6);
    }

    #box-payment .pb-screens .pb-screen .panel .pane .report h6 {
        color: hsla(0, 0%, 73%, 1);
    }

    #box-payment .pb-screens .pb-screen .panel .pane .report h6::before {
        background-color: hsla(0, 0%, 10%, 1);
    }

    #box-payment .pb-screens .pb-screen .panel .pane .report p {
        color: hsla(0, 0%, 73%, 1);
    }

    #box-payment .pb-screens .pb-screen .panel .pane .report.report_error {
        background-color: hsla(340, 40%, 32%, 1);
    }

    #box-payment .pb-screens .pb-screen .footer {
        border-top-color: hsla(0, 0%, 15%, 1);
    }

    #box-payment .pb-screens .pb-screen .footer button {
        color: hsla(0, 0%, 100%, 1);
        border-bottom-color: hsla(193, 100%, 30%, 1);
    }

    #box-payment .pb-screens .pb-screen .footer button[disabled] {
        color: hsla(0, 0%, 100%, 1);
        border-top-color: hsla(0, 0%, 15%, 1);
        border-right-color: hsla(0, 0%, 15%, 1);
        border-bottom-color: hsla(0, 0%, 15%, 1);
        border-left-color: hsla(0, 0%, 15%, 1);
    }

    #box-payment .pb-screens .pb-screen .footer button.buy .icon {
        background-color: hsla(0, 0%, 0%, 0);
    }

    #box-payment .pb-screens .pb-screen .footer .err_missing {
        color: hsla(225, 2%, 60%, 1);
        border-top-color: hsla(0, 0%, 15%, 1);
        border-right-color: hsla(0, 0%, 15%, 1);
        border-bottom-color: hsla(0, 0%, 15%, 1);
        border-left-color: hsla(0, 0%, 15%, 1);
    }

    #box-payment .pb-screens .pb-screen[data-screen="pay"] #pbox_details_card .radiobuttons li .expiry {
        border-top-color: hsla(0, 0%, 15%, 1);
        border-right-color: hsla(0, 0%, 15%, 1);
        border-bottom-color: hsla(0, 0%, 15%, 1);
        border-left-color: hsla(0, 0%, 15%, 1);
    }

    #box-payment .pb-screens .pb-screen[data-screen="pay"] #pbox_details_card .radiobuttons li.checked .expiry {
        border-top-color: hsla(195, 100%, 30%, 1);
        border-right-color: hsla(195, 100%, 30%, 1);
        border-bottom-color: hsla(195, 100%, 30%, 1);
        border-left-color: hsla(195, 100%, 30%, 1);
    }

    #box-payment .pb-screens .pb-screen[data-screen="pay"] #pbox_details_card fieldset[data-field="email"]>.icon {
        background-color: hsla(0, 0%, 0%, 0);
    }

    #box-payment .pb-screens .pb-screen[data-screen="pay"] #pbox_details_card label.checkbox {
        background: none;
    }

    #box-payment .pb-screens .pb-screen[data-screen="pay"] #pbox_details_card label.checkbox span {
        background-color: hsla(0, 0%, 0%, 0);
    }

    #box-payment .pb-screens .pb-screen[data-screen="success"] .header {
        background: none;
    }

    #box-payment .pb-screens .pb-screen[data-screen="success"] .panel .pane .feature {
        border-top-color: hsla(0, 0%, 15%, 1);
        border-right-color: hsla(0, 0%, 15%, 1);
        border-bottom-color: hsla(0, 0%, 15%, 1);
        border-left-color: hsla(0, 0%, 15%, 1);
    }

    #box-payment .pb-screens .pb-screen[data-screen="success"] .panel .pane .feature .notice {
        background-color: hsla(0, 0%, 39.7%, 1);
    }

    #box-payment .pb-screens .pb-screen[data-screen="success"] .panel .pane .feature .notice p {
        color: hsla(0, 0%, 73%, 1);
    }

    #box-payment .pb-screens .pb-screen[data-screen="success"] .panel .pane .feature .notice p .icon {
        background-color: hsla(0, 0%, 0%, 0);
    }

    #box-payment .pb-screens .pb-screen[data-screen="success"] .panel .pane .feature .notice p a {
        color: hsla(0, 0%, 73%, 1);
    }

    #box-payment .pb-screens .pb-screen[data-screen="success"] .panel .pane .feature button {
        border-bottom-color: hsla(198, 77%, 30%, 1);
    }

    #box-payment .pb-screens .pb-screen[data-screen="success"] .panel .pane .feature button .icon>span.icon_download {
        background-color: hsla(0, 0%, 0%, 0);
    }

    #box-payment .pb-screens .pb-screen[data-screen="success"] .panel .pane .feature button .label {
        color: hsla(0, 0%, 93%, 1);
    }

    #box-payment .pb-screens .pb-screen[data-screen="success"] .panel .pane .feature button[disabled] {
        border-bottom-color: hsla(235, 7%, 15%, 1);
    }

    #box-payment .pb-screens .pb-screen[data-screen="success"] .panel .pane .feature button[disabled].expired {
        border-bottom-color: hsla(240, 4%, 15%, 1);
    }

    #box-payment .pb-screens .pb-screen[data-screen="success"] .panel .pane .feature button[data-action="return"] {
        border-top-color: hsla(0, 0%, 15%, 1);
        border-right-color: hsla(0, 0%, 15%, 1);
        border-bottom-color: hsla(0, 0%, 15%, 1);
        border-left-color: hsla(0, 0%, 15%, 1);
    }

    #box-payment .pb-screens .pb-screen[data-screen="success"] .panel .pane .feature button[data-action="return"] .label {
        color: hsla(0, 0%, 50%, 1);
    }

    #box-payment .pb-screens .pb-screen[data-screen="success"] .panel .pane .feature p {
        color: hsla(225, 2%, 60%, 1);
    }

    #box-payment .pb-screens .pb-screen[data-screen="success"][data-type="login"] .panel .pane .feature .notice {
        background-color: hsla(0, 0%, 36%, 1);
    }

    #box-payment .pb-screens .pb-screen[data-screen="success"][data-type="login"] .panel .pane .feature form button[type="submit"] {
        border-bottom-color: hsla(193, 100%, 30%, 1);
    }

    #box-payment .pb-screens .pb-screen[data-screen="success"][data-type="login"] .panel .pane .feature form button[type="submit"] .label {
        color: hsla(0, 0%, 100%, 1);
    }

    #box-payment .pb-screens .pb-screen[data-screen="success"][data-type="login"] .panel .pane .feature form button[type="submit"][disabled] {
        border-top-color: hsla(0, 0%, 15%, 1);
        border-right-color: hsla(0, 0%, 15%, 1);
        border-bottom-color: hsla(0, 0%, 15%, 1);
        border-left-color: hsla(0, 0%, 15%, 1);
    }

    #box-payment .pb-screens .pb-screen[data-screen="success"][data-type="login"] .panel .pane .feature form>p a {
        color: hsla(216, 3%, 54%, 1);
    }

    #box-payment .pb-screens .pb-screen[data-screen="success"][data-type="login"] .panel .pane .feature form>p a:hover {
        color: hsla(0, 0%, 73%, 1);
    }

    #box-payment .pb-banner button {
        box-shadow: 0 0 1px hsla(0, 0%, 80%, 0.6);
    }

    #box-payment .pb-banner button .label {
        color: hsla(0, 0%, 100%, 0.75);
    }

    #box-payment .pb-banner button .label strong {
        color: hsla(0, 0%, 100%, 1);
    }

    #box-payment .pb-banner button .icon {
        background-color: hsla(0, 0%, 0%, 0);
        box-shadow: 0 0 1px hsla(0, 0%, 80%, 0.6);
    }

    #box-payment .pb-banner button:active {
        box-shadow: 0 0 1px hsla(0, 0%, 80%, 0.6);
    }

    #box-payment .pb-screens .pb-screen[data-screen="pay"][data-processor="braintree"] #pbox_form_braintree .braintree-heading {
        color: hsla(0, 0%, 60%, 0.7);
    }

    #box-payment .pb-screens .pb-screen[data-screen="pay"][data-processor="braintree"] #pbox_form_braintree .braintree-form__label {
        color: hsla(0, 0%, 60%, 1);
    }

    #box-payment .pb-screens .pb-screen[data-screen="pay"][data-processor="braintree"] #pbox_recaptcha.error {
        border-top-color: hsla(340, 100%, 30%, 1);
        border-right-color: hsla(340, 100%, 30%, 1);
        border-bottom-color: hsla(340, 100%, 30%, 1);
        border-left-color: hsla(340, 100%, 30%, 1);
    }
</style>

</html>
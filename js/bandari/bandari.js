;
window.Modernizr = function(a, b, c) {
    function D(a) {
        j.cssText = a
    }
    function E(a, b) {
        return D(n.join(a + ";") + (b || ""))
    }
    function F(a, b) {
        return typeof a === b
    }
    function G(a, b) {
        return !! ~ ("" + a).indexOf(b)
    }
    function H(a, b) {
        for (var d in a) {
            var e = a[d];
            if (!G(e, "-") && j[e] !== c) return b == "pfx" ? e: !0
        }
        return ! 1
    }
    function I(a, b, d) {
        for (var e in a) {
            var f = b[a[e]];
            if (f !== c) return d === !1 ? a[e] : F(f, "function") ? f.bind(d || b) : f
        }
        return ! 1
    }
    function J(a, b, c) {
        var d = a.charAt(0).toUpperCase() + a.slice(1),
        e = (a + " " + p.join(d + " ") + d).split(" ");
        return F(b, "string") || F(b, "undefined") ? H(e, b) : (e = (a + " " + q.join(d + " ") + d).split(" "), I(e, b, c))
    }
    function K() {
        e.input = function(c) {
            for (var d = 0,
            e = c.length; d < e; d++) u[c[d]] = c[d] in k;
            return u.list && (u.list = !!b.createElement("datalist") && !!a.HTMLDataListElement),
            u
        } ("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),
        e.inputtypes = function(a) {
            for (var d = 0,
            e, f, h, i = a.length; d < i; d++) k.setAttribute("type", f = a[d]),
            e = k.type !== "text",
            e && (k.value = l, k.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(f) && k.style.WebkitAppearance !== c ? (g.appendChild(k), h = b.defaultView, e = h.getComputedStyle && h.getComputedStyle(k, null).WebkitAppearance !== "textfield" && k.offsetHeight !== 0, g.removeChild(k)) : /^(search|tel)$/.test(f) || (/^(url|email)$/.test(f) ? e = k.checkValidity && k.checkValidity() === !1 : e = k.value != l)),
            t[a[d]] = !!e;
            return t
        } ("search tel url email datetime date month week time datetime-local number range color".split(" "))
    }
    var d = "2.6.2",
    e = {},
    f = !0,
    g = b.documentElement,
    h = "modernizr",
    i = b.createElement(h),
    j = i.style,
    k = b.createElement("input"),
    l = ":)",
    m = {}.toString,
    n = " -webkit- -moz- -o- -ms- ".split(" "),
    o = "Webkit Moz O ms",
    p = o.split(" "),
    q = o.toLowerCase().split(" "),
    r = {
        svg: "http://www.w3.org/2000/svg"
    },
    s = {},
    t = {},
    u = {},
    v = [],
    w = v.slice,
    x,
    y = function(a, c, d, e) {
        var f, i, j, k, l = b.createElement("div"),
        m = b.body,
        n = m || b.createElement("body");
        if (parseInt(d, 10)) while (d--) j = b.createElement("div"),
        j.id = e ? e[d] : h + (d + 1),
        l.appendChild(j);
        return f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join(""),
        l.id = h,
        (m ? l: n).innerHTML += f,
        n.appendChild(l),
        m || (n.style.background = "", n.style.overflow = "hidden", k = g.style.overflow, g.style.overflow = "hidden", g.appendChild(n)),
        i = c(l, a),
        m ? l.parentNode.removeChild(l) : (n.parentNode.removeChild(n), g.style.overflow = k),
        !!i
    },
    z = function(b) {
        var c = a.matchMedia || a.msMatchMedia;
        if (c) return c(b).matches;
        var d;
        return y("@media " + b + " { #" + h + " { position: absolute; } }",
        function(b) {
            d = (a.getComputedStyle ? getComputedStyle(b, null) : b.currentStyle)["position"] == "absolute"
        }),
        d
    },
    A = function() {
        function d(d, e) {
            e = e || b.createElement(a[d] || "div"),
            d = "on" + d;
            var f = d in e;
            return f || (e.setAttribute || (e = b.createElement("div")), e.setAttribute && e.removeAttribute && (e.setAttribute(d, ""), f = F(e[d], "function"), F(e[d], "undefined") || (e[d] = c), e.removeAttribute(d))),
            e = null,
            f
        }
        var a = {
            select: "input",
            change: "input",
            submit: "form",
            reset: "form",
            error: "img",
            load: "img",
            abort: "img"
        };
        return d
    } (),
    B = {}.hasOwnProperty,
    C; ! F(B, "undefined") && !F(B.call, "undefined") ? C = function(a, b) {
        return B.call(a, b)
    }: C = function(a, b) {
        return b in a && F(a.constructor.prototype[b], "undefined")
    },
    Function.prototype.bind || (Function.prototype.bind = function(b) {
        var c = this;
        if (typeof c != "function") throw new TypeError;
        var d = w.call(arguments, 1),
        e = function() {
            if (this instanceof e) {
                var a = function() {};
                a.prototype = c.prototype;
                var f = new a,
                g = c.apply(f, d.concat(w.call(arguments)));
                return Object(g) === g ? g: f
            }
            return c.apply(b, d.concat(w.call(arguments)))
        };
        return e
    }),
    s.flexbox = function() {
        return J("flexWrap")
    },
    s.canvas = function() {
        var a = b.createElement("canvas");
        return !! a.getContext && !!a.getContext("2d")
    },
    s.canvastext = function() {
        return !! e.canvas && !!F(b.createElement("canvas").getContext("2d").fillText, "function")
    },
    s.webgl = function() {
        return !! a.WebGLRenderingContext
    },
    s.touch = function() {
        var c;
        return "ontouchstart" in a || a.DocumentTouch && b instanceof DocumentTouch ? c = !0 : y(["@media (", n.join("touch-enabled),("), h, ")", "{#modernizr{top:9px;position:absolute}}"].join(""),
        function(a) {
            c = a.offsetTop === 9
        }),
        c
    },
    s.geolocation = function() {
        return "geolocation" in navigator
    },
    s.postmessage = function() {
        return !! a.postMessage
    },
    s.websqldatabase = function() {
        return !! a.openDatabase
    },
    s.indexedDB = function() {
        return !! J("indexedDB", a)
    },
    s.hashchange = function() {
        return A("hashchange", a) && (b.documentMode === c || b.documentMode > 7)
    },
    s.history = function() {
        return !! a.history && !!history.pushState
    },
    s.draganddrop = function() {
        var a = b.createElement("div");
        return "draggable" in a || "ondragstart" in a && "ondrop" in a
    },
    s.websockets = function() {
        return "WebSocket" in a || "MozWebSocket" in a
    },
    s.rgba = function() {
        return D("background-color:rgba(150,255,150,.5)"),
        G(j.backgroundColor, "rgba")
    },
    s.hsla = function() {
        return D("background-color:hsla(120,40%,100%,.5)"),
        G(j.backgroundColor, "rgba") || G(j.backgroundColor, "hsla")
    },
    s.multiplebgs = function() {
        return D("background:url(https://),url(https://),red url(https://)"),
        /(url\s*\(.*?){3}/.test(j.background)
    },
    s.backgroundsize = function() {
        return J("backgroundSize")
    },
    s.borderimage = function() {
        return J("borderImage")
    },
    s.borderradius = function() {
        return J("borderRadius")
    },
    s.boxshadow = function() {
        return J("boxShadow")
    },
    s.textshadow = function() {
        return b.createElement("div").style.textShadow === ""
    },
    s.opacity = function() {
        return E("opacity:.55"),
        /^0.55$/.test(j.opacity)
    },
    s.cssanimations = function() {
        return J("animationName")
    },
    s.csscolumns = function() {
        return J("columnCount")
    },
    s.cssgradients = function() {
        var a = "background-image:",
        b = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
        c = "linear-gradient(left top,#9f9, white);";
        return D((a + "-webkit- ".split(" ").join(b + a) + n.join(c + a)).slice(0, -a.length)),
        G(j.backgroundImage, "gradient")
    },
    s.cssreflections = function() {
        return J("boxReflect")
    },
    s.csstransforms = function() {
        return !! J("transform")
    },
    s.csstransforms3d = function() {
        var a = !!J("perspective");
        return a && "webkitPerspective" in g.style && y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",
        function(b, c) {
            a = b.offsetLeft === 9 && b.offsetHeight === 3
        }),
        a
    },
    s.csstransitions = function() {
        return J("transition")
    },
    s.fontface = function() {
        var a;
        return y('@font-face {font-family:"font";src:url("https://")}',
        function(c, d) {
            var e = b.getElementById("smodernizr"),
            f = e.sheet || e.styleSheet,
            g = f ? f.cssRules && f.cssRules[0] ? f.cssRules[0].cssText: f.cssText || "": "";
            a = /src/i.test(g) && g.indexOf(d.split(" ")[0]) === 0
        }),
        a
    },
    s.generatedcontent = function() {
        var a;
        return y(["#", h, "{font:0/0 a}#", h, ':after{content:"', l, '";visibility:hidden;font:3px/1 a}'].join(""),
        function(b) {
            a = b.offsetHeight >= 3
        }),
        a
    },
    s.video = function() {
        var a = b.createElement("video"),
        c = !1;
        try {
            if (c = !!a.canPlayType) c = new Boolean(c),
            c.ogg = a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""),
            c.h264 = a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""),
            c.webm = a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, "")
        } catch(d) {}
        return c
    },
    s.audio = function() {
        var a = b.createElement("audio"),
        c = !1;
        try {
            if (c = !!a.canPlayType) c = new Boolean(c),
            c.ogg = a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            c.mp3 = a.canPlayType("audio/mpeg;").replace(/^no$/, ""),
            c.wav = a.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
            c.m4a = (a.canPlayType("audio/x-m4a;") || a.canPlayType("audio/aac;")).replace(/^no$/, "")
        } catch(d) {}
        return c
    },
    s.localstorage = function() {
        try {
            return localStorage.setItem(h, h),
            localStorage.removeItem(h),
            !0
        } catch(a) {
            return ! 1
        }
    },
    s.sessionstorage = function() {
        try {
            return sessionStorage.setItem(h, h),
            sessionStorage.removeItem(h),
            !0
        } catch(a) {
            return ! 1
        }
    },
    s.webworkers = function() {
        return !! a.Worker
    },
    s.applicationcache = function() {
        return !! a.applicationCache
    },
    s.svg = function() {
        return !! b.createElementNS && !!b.createElementNS(r.svg, "svg").createSVGRect
    },
    s.inlinesvg = function() {
        var a = b.createElement("div");
        return a.innerHTML = "<svg/>",
        (a.firstChild && a.firstChild.namespaceURI) == r.svg
    },
    s.smil = function() {
        return !! b.createElementNS && /SVGAnimate/.test(m.call(b.createElementNS(r.svg, "animate")))
    },
    s.svgclippaths = function() {
        return !! b.createElementNS && /SVGClipPath/.test(m.call(b.createElementNS(r.svg, "clipPath")))
    };
    for (var L in s) C(s, L) && (x = L.toLowerCase(), e[x] = s[L](), v.push((e[x] ? "": "no-") + x));
    return e.input || K(),
    e.addTest = function(a, b) {
        if (typeof a == "object") for (var d in a) C(a, d) && e.addTest(d, a[d]);
        else {
            a = a.toLowerCase();
            if (e[a] !== c) return e;
            b = typeof b == "function" ? b() : b,
            typeof f != "undefined" && f && (g.className += " " + (b ? "": "no-") + a),
            e[a] = b
        }
        return e
    },
    D(""),
    i = k = null,
    function(a, b) {
        function k(a, b) {
            var c = a.createElement("p"),
            d = a.getElementsByTagName("head")[0] || a.documentElement;
            return c.innerHTML = "x<style>" + b + "</style>",
            d.insertBefore(c.lastChild, d.firstChild)
        }
        function l() {
            var a = r.elements;
            return typeof a == "string" ? a.split(" ") : a
        }
        function m(a) {
            var b = i[a[g]];
            return b || (b = {},
            h++, a[g] = h, i[h] = b),
            b
        }
        function n(a, c, f) {
            c || (c = b);
            if (j) return c.createElement(a);
            f || (f = m(c));
            var g;
            return f.cache[a] ? g = f.cache[a].cloneNode() : e.test(a) ? g = (f.cache[a] = f.createElem(a)).cloneNode() : g = f.createElem(a),
            g.canHaveChildren && !d.test(a) ? f.frag.appendChild(g) : g
        }
        function o(a, c) {
            a || (a = b);
            if (j) return a.createDocumentFragment();
            c = c || m(a);
            var d = c.frag.cloneNode(),
            e = 0,
            f = l(),
            g = f.length;
            for (; e < g; e++) d.createElement(f[e]);
            return d
        }
        function p(a, b) {
            b.cache || (b.cache = {},
            b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()),
            a.createElement = function(c) {
                return r.shivMethods ? n(c, a, b) : b.createElem(c)
            },
            a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + l().join().replace(/\w+/g,
            function(a) {
                return b.createElem(a),
                b.frag.createElement(a),
                'c("' + a + '")'
            }) + ");return n}")(r, b.frag)
        }
        function q(a) {
            a || (a = b);
            var c = m(a);
            return r.shivCSS && !f && !c.hasCSS && (c.hasCSS = !!k(a, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),
            j || p(a, c),
            a
        }
        var c = a.html5 || {},
        d = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
        e = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
        f, g = "_html5shiv",
        h = 0,
        i = {},
        j; (function() {
            try {
                var a = b.createElement("a");
                a.innerHTML = "<xyz></xyz>",
                f = "hidden" in a,
                j = a.childNodes.length == 1 ||
                function() {
                    b.createElement("a");
                    var a = b.createDocumentFragment();
                    return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined"
                } ()
            } catch(c) {
                f = !0,
                j = !0
            }
        })();
        var r = {
            elements: c.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
            shivCSS: c.shivCSS !== !1,
            supportsUnknownElements: j,
            shivMethods: c.shivMethods !== !1,
            type: "default",
            shivDocument: q,
            createElement: n,
            createDocumentFragment: o
        };
        a.html5 = r,
        q(b)
    } (this, b),
    e._version = d,
    e._prefixes = n,
    e._domPrefixes = q,
    e._cssomPrefixes = p,
    e.mq = z,
    e.hasEvent = A,
    e.testProp = function(a) {
        return H([a])
    },
    e.testAllProps = J,
    e.testStyles = y,
    e.prefixed = function(a, b, c) {
        return b ? J(a, b, c) : J(a, "pfx")
    },
    g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + v.join(" ") : ""),
    e
} (this, this.document),
function(a, b, c) {
    function d(a) {
        return "[object Function]" == o.call(a)
    }
    function e(a) {
        return "string" == typeof a
    }
    function f() {}
    function g(a) {
        return ! a || "loaded" == a || "complete" == a || "uninitialized" == a
    }
    function h() {
        var a = p.shift();
        q = 1,
        a ? a.t ? m(function() { ("c" == a.t ? B.injectCss: B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
        },
        0) : (a(), h()) : q = 0
    }
    function i(a, c, d, e, f, i, j) {
        function k(b) {
            if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
                "img" != a && m(function() {
                    t.removeChild(l)
                },
                50);
                for (var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload()
            }
        }
        var j = j || B.errorTimeout,
        l = b.createElement(a),
        o = 0,
        r = 0,
        u = {
            t: d,
            s: c,
            e: f,
            a: i,
            x: j
        };
        1 === y[c] && (r = 1, y[c] = []),
        "object" == a ? l.data = c: (l.src = c, l.type = a),
        l.width = l.height = "0",
        l.onerror = l.onload = l.onreadystatechange = function() {
            k.call(this, r)
        },
        p.splice(e, 0, u),
        "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null: n), m(k, j)) : y[c].push(l))
    }
    function j(a, b, c, d, f) {
        return q = 0,
        b = b || "j",
        e(a) ? i("c" == b ? v: u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()),
        this
    }
    function k() {
        var a = B;
        return a.loader = {
            load: j,
            i: 0
        },
        a
    }
    var l = b.documentElement,
    m = a.setTimeout,
    n = b.getElementsByTagName("script")[0],
    o = {}.toString,
    p = [],
    q = 0,
    r = "MozAppearance" in l.style,
    s = r && !!b.createRange().compareNode,
    t = s ? l: n.parentNode,
    l = a.opera && "[object Opera]" == o.call(a.opera),
    l = !!b.attachEvent && !l,
    u = r ? "object": l ? "script": "img",
    v = l ? "script": u,
    w = Array.isArray ||
    function(a) {
        return "[object Array]" == o.call(a)
    },
    x = [],
    y = {},
    z = {
        timeout: function(a, b) {
            return b.length && (a.timeout = b[0]),
            a
        }
    },
    A,
    B;
    B = function(a) {
        function b(a) {
            var a = a.split("!"),
            b = x.length,
            c = a.pop(),
            d = a.length,
            c = {
                url: c,
                origUrl: c,
                prefixes: a
            },
            e,
            f,
            g;
            for (f = 0; f < d; f++) g = a[f].split("="),
            (e = z[g.shift()]) && (c = e(c, g));
            for (f = 0; f < b; f++) c = x[f](c);
            return c
        }
        function g(a, e, f, g, h) {
            var i = b(a),
            j = i.autoCallback;
            i.url.split(".").pop().split("?").shift(),
            i.bypass || (e && (e = d(e) ? e: e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c": c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function() {
                k(),
                e && e(i.origUrl, h, g),
                j && j(i.origUrl, h, g),
                y[i.url] = 2
            })))
        }
        function h(a, b) {
            function c(a, c) {
                if (a) {
                    if (e(a)) c || (j = function() {
                        var a = [].slice.call(arguments);
                        k.apply(this, a),
                        l()
                    }),
                    g(a, j, b, 0, h);
                    else if (Object(a) === a) for (n in m = function() {
                        var b = 0,
                        c;
                        for (c in a) a.hasOwnProperty(c) && b++;
                        return b
                    } (), a) a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function() {
                        var a = [].slice.call(arguments);
                        k.apply(this, a),
                        l()
                    }: j[n] = function(a) {
                        return function() {
                            var b = [].slice.call(arguments);
                            a && a.apply(this, b),
                            l()
                        }
                    } (k[n])), g(a[n], j, b, n, h))
                } else ! c && l()
            }
            var h = !!a.test,
            i = a.load || a.both,
            j = a.callback || f,
            k = j,
            l = a.complete || f,
            m, n;
            c(h ? a.yep: a.nope, !!i),
            i && c(i)
        }
        var i, j, l = this.yepnope.loader;
        if (e(a)) g(a, 0, l, 0);
        else if (w(a)) for (i = 0; i < a.length; i++) j = a[i],
        e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l);
        else Object(a) === a && h(a, l)
    },
    B.addPrefix = function(a, b) {
        z[a] = b
    },
    B.addFilter = function(a) {
        x.push(a)
    },
    B.errorTimeout = 1e4,
    null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function() {
        b.removeEventListener("DOMContentLoaded", A, 0),
        b.readyState = "complete"
    },
    0)),
    a.yepnope = k(),
    a.yepnope.executeStack = h,
    a.yepnope.injectJs = function(a, c, d, e, i, j) {
        var k = b.createElement("script"),
        l,
        o,
        e = e || B.errorTimeout;
        k.src = a;
        for (o in d) k.setAttribute(o, d[o]);
        c = j ? h: c || f,
        k.onreadystatechange = k.onload = function() { ! l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null)
        },
        m(function() {
            l || (l = 1, c(1))
        },
        e),
        i ? k.onload() : n.parentNode.insertBefore(k, n)
    },
    a.yepnope.injectCss = function(a, c, d, e, g, i) {
        var e = b.createElement("link"),
        j,
        c = i ? h: c || f;
        e.href = a,
        e.rel = "stylesheet",
        e.type = "text/css";
        for (j in d) e.setAttribute(j, d[j]);
        g || (n.parentNode.insertBefore(e, n), m(c, 0))
    }
} (this, document),
Modernizr.load = function() {
    yepnope.apply(window, [].slice.call(arguments, 0))
};
/*! jQuery v1.9.0 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license */
(function(e, t) {
    "use strict";
    function n(e) {
        var t = e.length,
        n = st.type(e);
        return st.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    function r(e) {
        var t = Tt[e] = {};
        return st.each(e.match(lt) || [],
        function(e, n) {
            t[n] = !0
        }),
        t
    }
    function i(e, n, r, i) {
        if (st.acceptData(e)) {
            var o, a, s = st.expando,
            u = "string" == typeof n,
            l = e.nodeType,
            c = l ? st.cache: e,
            f = l ? e[s] : e[s] && s;
            if (f && c[f] && (i || c[f].data) || !u || r !== t) return f || (l ? e[s] = f = K.pop() || st.guid++:f = s),
            c[f] || (c[f] = {},
            l || (c[f].toJSON = st.noop)),
            ("object" == typeof n || "function" == typeof n) && (i ? c[f] = st.extend(c[f], n) : c[f].data = st.extend(c[f].data, n)),
            o = c[f],
            i || (o.data || (o.data = {}), o = o.data),
            r !== t && (o[st.camelCase(n)] = r),
            u ? (a = o[n], null == a && (a = o[st.camelCase(n)])) : a = o,
            a
        }
    }
    function o(e, t, n) {
        if (st.acceptData(e)) {
            var r, i, o, a = e.nodeType,
            u = a ? st.cache: e,
            l = a ? e[st.expando] : st.expando;
            if (u[l]) {
                if (t && (r = n ? u[l] : u[l].data)) {
                    st.isArray(t) ? t = t.concat(st.map(t, st.camelCase)) : t in r ? t = [t] : (t = st.camelCase(t), t = t in r ? [t] : t.split(" "));
                    for (i = 0, o = t.length; o > i; i++) delete r[t[i]];
                    if (! (n ? s: st.isEmptyObject)(r)) return
                } (n || (delete u[l].data, s(u[l]))) && (a ? st.cleanData([e], !0) : st.support.deleteExpando || u != u.window ? delete u[l] : u[l] = null)
            }
        }
    }
    function a(e, n, r) {
        if (r === t && 1 === e.nodeType) {
            var i = "data-" + n.replace(Nt, "-$1").toLowerCase();
            if (r = e.getAttribute(i), "string" == typeof r) {
                try {
                    r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null: +r + "" === r ? +r: wt.test(r) ? st.parseJSON(r) : r
                } catch(o) {}
                st.data(e, n, r)
            } else r = t
        }
        return r
    }
    function s(e) {
        var t;
        for (t in e) if (("data" !== t || !st.isEmptyObject(e[t])) && "toJSON" !== t) return ! 1;
        return ! 0
    }
    function u() {
        return ! 0
    }
    function l() {
        return ! 1
    }
    function c(e, t) {
        do e = e[t];
        while (e && 1 !== e.nodeType);
        return e
    }
    function f(e, t, n) {
        if (t = t || 0, st.isFunction(t)) return st.grep(e,
        function(e, r) {
            var i = !!t.call(e, r, e);
            return i === n
        });
        if (t.nodeType) return st.grep(e,
        function(e) {
            return e === t === n
        });
        if ("string" == typeof t) {
            var r = st.grep(e,
            function(e) {
                return 1 === e.nodeType
            });
            if (Wt.test(t)) return st.filter(t, r, !n);
            t = st.filter(t, r)
        }
        return st.grep(e,
        function(e) {
            return st.inArray(e, t) >= 0 === n
        })
    }
    function p(e) {
        var t = zt.split("|"),
        n = e.createDocumentFragment();
        if (n.createElement) for (; t.length;) n.createElement(t.pop());
        return n
    }
    function d(e, t) {
        return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
    }
    function h(e) {
        var t = e.getAttributeNode("type");
        return e.type = (t && t.specified) + "/" + e.type,
        e
    }
    function g(e) {
        var t = nn.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"),
        e
    }
    function m(e, t) {
        for (var n, r = 0; null != (n = e[r]); r++) st._data(n, "globalEval", !t || st._data(t[r], "globalEval"))
    }
    function y(e, t) {
        if (1 === t.nodeType && st.hasData(e)) {
            var n, r, i, o = st._data(e),
            a = st._data(t, o),
            s = o.events;
            if (s) {
                delete a.handle,
                a.events = {};
                for (n in s) for (r = 0, i = s[n].length; i > r; r++) st.event.add(t, n, s[n][r])
            }
            a.data && (a.data = st.extend({},
            a.data))
        }
    }
    function v(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !st.support.noCloneEvent && t[st.expando]) {
                r = st._data(t);
                for (i in r.events) st.removeEvent(t, i, r.handle);
                t.removeAttribute(st.expando)
            }
            "script" === n && t.text !== e.text ? (h(t).text = e.text, g(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), st.support.html5Clone && e.innerHTML && !st.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Zt.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected: ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }
    function b(e, n) {
        var r, i, o = 0,
        a = e.getElementsByTagName !== t ? e.getElementsByTagName(n || "*") : e.querySelectorAll !== t ? e.querySelectorAll(n || "*") : t;
        if (!a) for (a = [], r = e.childNodes || e; null != (i = r[o]); o++) ! n || st.nodeName(i, n) ? a.push(i) : st.merge(a, b(i, n));
        return n === t || n && st.nodeName(e, n) ? st.merge([e], a) : a
    }
    function x(e) {
        Zt.test(e.type) && (e.defaultChecked = e.checked)
    }
    function T(e, t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = Nn.length; i--;) if (t = Nn[i] + n, t in e) return t;
        return r
    }
    function w(e, t) {
        return e = t || e,
        "none" === st.css(e, "display") || !st.contains(e.ownerDocument, e)
    }
    function N(e, t) {
        for (var n, r = [], i = 0, o = e.length; o > i; i++) n = e[i],
        n.style && (r[i] = st._data(n, "olddisplay"), t ? (r[i] || "none" !== n.style.display || (n.style.display = ""), "" === n.style.display && w(n) && (r[i] = st._data(n, "olddisplay", S(n.nodeName)))) : r[i] || w(n) || st._data(n, "olddisplay", st.css(n, "display")));
        for (i = 0; o > i; i++) n = e[i],
        n.style && (t && "none" !== n.style.display && "" !== n.style.display || (n.style.display = t ? r[i] || "": "none"));
        return e
    }
    function C(e, t, n) {
        var r = mn.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }
    function k(e, t, n, r, i) {
        for (var o = n === (r ? "border": "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2)"margin" === n && (a += st.css(e, n + wn[o], !0, i)),
        r ? ("content" === n && (a -= st.css(e, "padding" + wn[o], !0, i)), "margin" !== n && (a -= st.css(e, "border" + wn[o] + "Width", !0, i))) : (a += st.css(e, "padding" + wn[o], !0, i), "padding" !== n && (a += st.css(e, "border" + wn[o] + "Width", !0, i)));
        return a
    }
    function E(e, t, n) {
        var r = !0,
        i = "width" === t ? e.offsetWidth: e.offsetHeight,
        o = ln(e),
        a = st.support.boxSizing && "border-box" === st.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = un(e, t, o), (0 > i || null == i) && (i = e.style[t]), yn.test(i)) return i;
            r = a && (st.support.boxSizingReliable || i === e.style[t]),
            i = parseFloat(i) || 0
        }
        return i + k(e, t, n || (a ? "border": "content"), r, o) + "px"
    }
    function S(e) {
        var t = V,
        n = bn[e];
        return n || (n = A(e, t), "none" !== n && n || (cn = (cn || st("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (cn[0].contentWindow || cn[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = A(e, t), cn.detach()), bn[e] = n),
        n
    }
    function A(e, t) {
        var n = st(t.createElement(e)).appendTo(t.body),
        r = st.css(n[0], "display");
        return n.remove(),
        r
    }
    function j(e, t, n, r) {
        var i;
        if (st.isArray(t)) st.each(t,
        function(t, i) {
            n || kn.test(e) ? r(e, i) : j(e + "[" + ("object" == typeof i ? t: "") + "]", i, n, r)
        });
        else if (n || "object" !== st.type(t)) r(e, t);
        else for (i in t) j(e + "[" + i + "]", t[i], n, r)
    }
    function D(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
            o = t.toLowerCase().match(lt) || [];
            if (st.isFunction(n)) for (; r = o[i++];)"+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }
    function L(e, n, r, i) {
        function o(u) {
            var l;
            return a[u] = !0,
            st.each(e[u] || [],
            function(e, u) {
                var c = u(n, r, i);
                return "string" != typeof c || s || a[c] ? s ? !(l = c) : t: (n.dataTypes.unshift(c), o(c), !1)
            }),
            l
        }
        var a = {},
        s = e === $n;
        return o(n.dataTypes[0]) || !a["*"] && o("*")
    }
    function H(e, n) {
        var r, i, o = st.ajaxSettings.flatOptions || {};
        for (r in n) n[r] !== t && ((o[r] ? e: i || (i = {}))[r] = n[r]);
        return i && st.extend(!0, e, i),
        e
    }
    function M(e, n, r) {
        var i, o, a, s, u = e.contents,
        l = e.dataTypes,
        c = e.responseFields;
        for (o in c) o in r && (n[c[o]] = r[o]);
        for (;
        "*" === l[0];) l.shift(),
        i === t && (i = e.mimeType || n.getResponseHeader("Content-Type"));
        if (i) for (o in u) if (u[o] && u[o].test(i)) {
            l.unshift(o);
            break
        }
        if (l[0] in r) a = l[0];
        else {
            for (o in r) {
                if (!l[0] || e.converters[o + " " + l[0]]) {
                    a = o;
                    break
                }
                s || (s = o)
            }
            a = a || s
        }
        return a ? (a !== l[0] && l.unshift(a), r[a]) : t
    }
    function q(e, t) {
        var n, r, i, o, a = {},
        s = 0,
        u = e.dataTypes.slice(),
        l = u[0];
        if (e.dataFilter && (t = e.dataFilter(t, e.dataType)), u[1]) for (n in e.converters) a[n.toLowerCase()] = e.converters[n];
        for (; i = u[++s];) if ("*" !== i) {
            if ("*" !== l && l !== i) {
                if (n = a[l + " " + i] || a["* " + i], !n) for (r in a) if (o = r.split(" "), o[1] === i && (n = a[l + " " + o[0]] || a["* " + o[0]])) {
                    n === !0 ? n = a[r] : a[r] !== !0 && (i = o[0], u.splice(s--, 0, i));
                    break
                }
                if (n !== !0) if (n && e["throws"]) t = n(t);
                else try {
                    t = n(t)
                } catch(c) {
                    return {
                        state: "parsererror",
                        error: n ? c: "No conversion from " + l + " to " + i
                    }
                }
            }
            l = i
        }
        return {
            state: "success",
            data: t
        }
    }
    function _() {
        try {
            return new e.XMLHttpRequest
        } catch(t) {}
    }
    function F() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch(t) {}
    }
    function O() {
        return setTimeout(function() {
            Qn = t
        }),
        Qn = st.now()
    }
    function B(e, t) {
        st.each(t,
        function(t, n) {
            for (var r = (rr[t] || []).concat(rr["*"]), i = 0, o = r.length; o > i; i++) if (r[i].call(e, t, n)) return
        })
    }
    function P(e, t, n) {
        var r, i, o = 0,
        a = nr.length,
        s = st.Deferred().always(function() {
            delete u.elem
        }),
        u = function() {
            if (i) return ! 1;
            for (var t = Qn || O(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, a = 0, u = l.tweens.length; u > a; a++) l.tweens[a].run(o);
            return s.notifyWith(e, [l, o, n]),
            1 > o && u ? n: (s.resolveWith(e, [l]), !1)
        },
        l = s.promise({
            elem: e,
            props: st.extend({},
            t),
            opts: st.extend(!0, {
                specialEasing: {}
            },
            n),
            originalProperties: t,
            originalOptions: n,
            startTime: Qn || O(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var r = st.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                return l.tweens.push(r),
                r
            },
            stop: function(t) {
                var n = 0,
                r = t ? l.tweens.length: 0;
                if (i) return this;
                for (i = !0; r > n; n++) l.tweens[n].run(1);
                return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]),
                this
            }
        }),
        c = l.props;
        for (R(c, l.opts.specialEasing); a > o; o++) if (r = nr[o].call(l, e, c, l.opts)) return r;
        return B(l, c),
        st.isFunction(l.opts.start) && l.opts.start.call(e, l),
        st.fx.timer(st.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })),
        l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }
    function R(e, t) {
        var n, r, i, o, a;
        for (n in e) if (r = st.camelCase(n), i = t[r], o = e[n], st.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = st.cssHooks[r], a && "expand" in a) {
            o = a.expand(o),
            delete e[r];
            for (n in o) n in e || (e[n] = o[n], t[n] = i)
        } else t[r] = i
    }
    function W(e, t, n) {
        var r, i, o, a, s, u, l, c, f, p = this,
        d = e.style,
        h = {},
        g = [],
        m = e.nodeType && w(e);
        n.queue || (c = st._queueHooks(e, "fx"), null == c.unqueued && (c.unqueued = 0, f = c.empty.fire, c.empty.fire = function() {
            c.unqueued || f()
        }), c.unqueued++, p.always(function() {
            p.always(function() {
                c.unqueued--,
                st.queue(e, "fx").length || c.empty.fire()
            })
        })),
        1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], "inline" === st.css(e, "display") && "none" === st.css(e, "float") && (st.support.inlineBlockNeedsLayout && "inline" !== S(e.nodeName) ? d.zoom = 1 : d.display = "inline-block")),
        n.overflow && (d.overflow = "hidden", st.support.shrinkWrapBlocks || p.done(function() {
            d.overflow = n.overflow[0],
            d.overflowX = n.overflow[1],
            d.overflowY = n.overflow[2]
        }));
        for (r in t) if (o = t[r], Zn.exec(o)) {
            if (delete t[r], u = u || "toggle" === o, o === (m ? "hide": "show")) continue;
            g.push(r)
        }
        if (a = g.length) {
            s = st._data(e, "fxshow") || st._data(e, "fxshow", {}),
            "hidden" in s && (m = s.hidden),
            u && (s.hidden = !m),
            m ? st(e).show() : p.done(function() {
                st(e).hide()
            }),
            p.done(function() {
                var t;
                st._removeData(e, "fxshow");
                for (t in h) st.style(e, t, h[t])
            });
            for (r = 0; a > r; r++) i = g[r],
            l = p.createTween(i, m ? s[i] : 0),
            h[i] = s[i] || st.style(e, i),
            i in s || (s[i] = l.start, m && (l.end = l.start, l.start = "width" === i || "height" === i ? 1 : 0))
        }
    }
    function $(e, t, n, r, i) {
        return new $.prototype.init(e, t, n, r, i)
    }
    function I(e, t) {
        var n, r = {
            height: e
        },
        i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = wn[i],
        r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e),
        r
    }
    function z(e) {
        return st.isWindow(e) ? e: 9 === e.nodeType ? e.defaultView || e.parentWindow: !1
    }
    var X, U, V = e.document,
    Y = e.location,
    J = e.jQuery,
    G = e.$,
    Q = {},
    K = [],
    Z = "1.9.0",
    et = K.concat,
    tt = K.push,
    nt = K.slice,
    rt = K.indexOf,
    it = Q.toString,
    ot = Q.hasOwnProperty,
    at = Z.trim,
    st = function(e, t) {
        return new st.fn.init(e, t, X)
    },
    ut = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    lt = /\S+/g,
    ct = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    ft = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    pt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    dt = /^[\],:{}\s]*$/,
    ht = /(?:^|:|,)(?:\s*\[)+/g,
    gt = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
    mt = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
    yt = /^-ms-/,
    vt = /-([\da-z])/gi,
    bt = function(e, t) {
        return t.toUpperCase()
    },
    xt = function() {
        V.addEventListener ? (V.removeEventListener("DOMContentLoaded", xt, !1), st.ready()) : "complete" === V.readyState && (V.detachEvent("onreadystatechange", xt), st.ready())
    };
    st.fn = st.prototype = {
        jquery: Z,
        constructor: st,
        init: function(e, n, r) {
            var i, o;
            if (!e) return this;
            if ("string" == typeof e) {
                if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : ft.exec(e), !i || !i[1] && n) return ! n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
                if (i[1]) {
                    if (n = n instanceof st ? n[0] : n, st.merge(this, st.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n: V, !0)), pt.test(i[1]) && st.isPlainObject(n)) for (i in n) st.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                    return this
                }
                if (o = V.getElementById(i[2]), o && o.parentNode) {
                    if (o.id !== i[2]) return r.find(e);
                    this.length = 1,
                    this[0] = o
                }
                return this.context = V,
                this.selector = e,
                this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : st.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), st.makeArray(e, this))
        },
        selector: "",
        length: 0,
        size: function() {
            return this.length
        },
        toArray: function() {
            return nt.call(this)
        },
        get: function(e) {
            return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
        },
        pushStack: function(e) {
            var t = st.merge(this.constructor(), e);
            return t.prevObject = this,
            t.context = this.context,
            t
        },
        each: function(e, t) {
            return st.each(this, e, t)
        },
        ready: function(e) {
            return st.ready.promise().done(e),
            this
        },
        slice: function() {
            return this.pushStack(nt.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq( - 1)
        },
        eq: function(e) {
            var t = this.length,
            n = +e + (0 > e ? t: 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        map: function(e) {
            return this.pushStack(st.map(this,
            function(t, n) {
                return e.call(t, n, t)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: tt,
        sort: [].sort,
        splice: [].splice
    },
    st.fn.init.prototype = st.fn,
    st.extend = st.fn.extend = function() {
        var e, n, r, i, o, a, s = arguments[0] || {},
        u = 1,
        l = arguments.length,
        c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[1] || {},
        u = 2), "object" == typeof s || st.isFunction(s) || (s = {}), l === u && (s = this, --u); l > u; u++) if (null != (e = arguments[u])) for (n in e) r = s[n],
        i = e[n],
        s !== i && (c && i && (st.isPlainObject(i) || (o = st.isArray(i))) ? (o ? (o = !1, a = r && st.isArray(r) ? r: []) : a = r && st.isPlainObject(r) ? r: {},
        s[n] = st.extend(c, a, i)) : i !== t && (s[n] = i));
        return s
    },
    st.extend({
        noConflict: function(t) {
            return e.$ === st && (e.$ = G),
            t && e.jQuery === st && (e.jQuery = J),
            st
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? st.readyWait++:st.ready(!0)
        },
        ready: function(e) {
            if (e === !0 ? !--st.readyWait: !st.isReady) {
                if (!V.body) return setTimeout(st.ready);
                st.isReady = !0,
                e !== !0 && --st.readyWait > 0 || (U.resolveWith(V, [st]), st.fn.trigger && st(V).trigger("ready").off("ready"))
            }
        },
        isFunction: function(e) {
            return "function" === st.type(e)
        },
        isArray: Array.isArray ||
        function(e) {
            return "array" === st.type(e)
        },
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            return ! isNaN(parseFloat(e)) && isFinite(e)
        },
        type: function(e) {
            return null == e ? e + "": "object" == typeof e || "function" == typeof e ? Q[it.call(e)] || "object": typeof e
        },
        isPlainObject: function(e) {
            if (!e || "object" !== st.type(e) || e.nodeType || st.isWindow(e)) return ! 1;
            try {
                if (e.constructor && !ot.call(e, "constructor") && !ot.call(e.constructor.prototype, "isPrototypeOf")) return ! 1
            } catch(n) {
                return ! 1
            }
            var r;
            for (r in e);
            return r === t || ot.call(e, r)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return ! 1;
            return ! 0
        },
        error: function(e) {
            throw Error(e)
        },
        parseHTML: function(e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1),
            t = t || V;
            var r = pt.exec(e),
            i = !n && [];
            return r ? [t.createElement(r[1])] : (r = st.buildFragment([e], t, i), i && st(i).remove(), st.merge([], r.childNodes))
        },
        parseJSON: function(n) {
            return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n: "string" == typeof n && (n = st.trim(n), n && dt.test(n.replace(gt, "@").replace(mt, "]").replace(ht, ""))) ? Function("return " + n)() : (st.error("Invalid JSON: " + n), t)
        },
        parseXML: function(n) {
            var r, i;
            if (!n || "string" != typeof n) return null;
            try {
                e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
            } catch(o) {
                r = t
            }
            return r && r.documentElement && !r.getElementsByTagName("parsererror").length || st.error("Invalid XML: " + n),
            r
        },
        noop: function() {},
        globalEval: function(t) {
            t && st.trim(t) && (e.execScript ||
            function(t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function(e) {
            return e.replace(yt, "ms-").replace(vt, bt)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, r) {
            var i, o = 0,
            a = e.length,
            s = n(e);
            if (r) {
                if (s) for (; a > o && (i = t.apply(e[o], r), i !== !1); o++);
                else for (o in e) if (i = t.apply(e[o], r), i === !1) break
            } else if (s) for (; a > o && (i = t.call(e[o], o, e[o]), i !== !1); o++);
            else for (o in e) if (i = t.call(e[o], o, e[o]), i === !1) break;
            return e
        },
        trim: at && !at.call("\ufeff\u00a0") ?
        function(e) {
            return null == e ? "": at.call(e)
        }: function(e) {
            return null == e ? "": (e + "").replace(ct, "")
        },
        makeArray: function(e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? st.merge(r, "string" == typeof e ? [e] : e) : tt.call(r, e)),
            r
        },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (rt) return rt.call(t, e, n);
                for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n: 0; r > n; n++) if (n in t && t[n] === e) return n
            }
            return - 1
        },
        merge: function(e, n) {
            var r = n.length,
            i = e.length,
            o = 0;
            if ("number" == typeof r) for (; r > o; o++) e[i++] = n[o];
            else for (; n[o] !== t;) e[i++] = n[o++];
            return e.length = i,
            e
        },
        grep: function(e, t, n) {
            var r, i = [],
            o = 0,
            a = e.length;
            for (n = !!n; a > o; o++) r = !!t(e[o], o),
            n !== r && i.push(e[o]);
            return i
        },
        map: function(e, t, r) {
            var i, o = 0,
            a = e.length,
            s = n(e),
            u = [];
            if (s) for (; a > o; o++) i = t(e[o], o, r),
            null != i && (u[u.length] = i);
            else for (o in e) i = t(e[o], o, r),
            null != i && (u[u.length] = i);
            return et.apply([], u)
        },
        guid: 1,
        proxy: function(e, n) {
            var r, i, o;
            return "string" == typeof n && (r = e[n], n = e, e = r),
            st.isFunction(e) ? (i = nt.call(arguments, 2), o = function() {
                return e.apply(n || this, i.concat(nt.call(arguments)))
            },
            o.guid = e.guid = e.guid || st.guid++, o) : t
        },
        access: function(e, n, r, i, o, a, s) {
            var u = 0,
            l = e.length,
            c = null == r;
            if ("object" === st.type(r)) {
                o = !0;
                for (u in r) st.access(e, n, u, r[u], !0, a, s)
            } else if (i !== t && (o = !0, st.isFunction(i) || (s = !0), c && (s ? (n.call(e, i), n = null) : (c = n, n = function(e, t, n) {
                return c.call(st(e), n)
            })), n)) for (; l > u; u++) n(e[u], r, s ? i: i.call(e[u], u, n(e[u], r)));
            return o ? e: c ? n.call(e) : l ? n(e[0], r) : a
        },
        now: function() {
            return (new Date).getTime()
        }
    }),
    st.ready.promise = function(t) {
        if (!U) if (U = st.Deferred(), "complete" === V.readyState) setTimeout(st.ready);
        else if (V.addEventListener) V.addEventListener("DOMContentLoaded", xt, !1),
        e.addEventListener("load", st.ready, !1);
        else {
            V.attachEvent("onreadystatechange", xt),
            e.attachEvent("onload", st.ready);
            var n = !1;
            try {
                n = null == e.frameElement && V.documentElement
            } catch(r) {}
            n && n.doScroll &&
            function i() {
                if (!st.isReady) {
                    try {
                        n.doScroll("left")
                    } catch(e) {
                        return setTimeout(i, 50)
                    }
                    st.ready()
                }
            } ()
        }
        return U.promise(t)
    },
    st.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),
    function(e, t) {
        Q["[object " + t + "]"] = t.toLowerCase()
    }),
    X = st(V);
    var Tt = {};
    st.Callbacks = function(e) {
        e = "string" == typeof e ? Tt[e] || r(e) : st.extend({},
        e);
        var n, i, o, a, s, u, l = [],
        c = !e.once && [],
        f = function(t) {
            for (n = e.memory && t, i = !0, u = a || 0, a = 0, s = l.length, o = !0; l && s > u; u++) if (l[u].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                n = !1;
                break
            }
            o = !1,
            l && (c ? c.length && f(c.shift()) : n ? l = [] : p.disable())
        },
        p = {
            add: function() {
                if (l) {
                    var t = l.length; (function r(t) {
                        st.each(t,
                        function(t, n) {
                            var i = st.type(n);
                            "function" === i ? e.unique && p.has(n) || l.push(n) : n && n.length && "string" !== i && r(n)
                        })
                    })(arguments),
                    o ? s = l.length: n && (a = t, f(n))
                }
                return this
            },
            remove: function() {
                return l && st.each(arguments,
                function(e, t) {
                    for (var n; (n = st.inArray(t, l, n)) > -1;) l.splice(n, 1),
                    o && (s >= n && s--, u >= n && u--)
                }),
                this
            },
            has: function(e) {
                return st.inArray(e, l) > -1
            },
            empty: function() {
                return l = [],
                this
            },
            disable: function() {
                return l = c = n = t,
                this
            },
            disabled: function() {
                return ! l
            },
            lock: function() {
                return c = t,
                n || p.disable(),
                this
            },
            locked: function() {
                return ! c
            },
            fireWith: function(e, t) {
                return t = t || [],
                t = [e, t.slice ? t.slice() : t],
                !l || i && !c || (o ? c.push(t) : f(t)),
                this
            },
            fire: function() {
                return p.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !! i
            }
        };
        return p
    },
    st.extend({
        Deferred: function(e) {
            var t = [["resolve", "done", st.Callbacks("once memory"), "resolved"], ["reject", "fail", st.Callbacks("once memory"), "rejected"], ["notify", "progress", st.Callbacks("memory")]],
            n = "pending",
            r = {
                state: function() {
                    return n
                },
                always: function() {
                    return i.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var e = arguments;
                    return st.Deferred(function(n) {
                        st.each(t,
                        function(t, o) {
                            var a = o[0],
                            s = st.isFunction(e[t]) && e[t];
                            i[o[1]](function() {
                                var e = s && s.apply(this, arguments);
                                e && st.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                            })
                        }),
                        e = null
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? st.extend(e, r) : r
                }
            },
            i = {};
            return r.pipe = r.then,
            st.each(t,
            function(e, o) {
                var a = o[2],
                s = o[3];
                r[o[1]] = a.add,
                s && a.add(function() {
                    n = s
                },
                t[1 ^ e][2].disable, t[2][2].lock),
                i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r: this, arguments),
                    this
                },
                i[o[0] + "With"] = a.fireWith
            }),
            r.promise(i),
            e && e.call(i, i),
            i
        },
        when: function(e) {
            var t, n, r, i = 0,
            o = nt.call(arguments),
            a = o.length,
            s = 1 !== a || e && st.isFunction(e.promise) ? a: 0,
            u = 1 === s ? e: st.Deferred(),
            l = function(e, n, r) {
                return function(i) {
                    n[e] = this,
                    r[e] = arguments.length > 1 ? nt.call(arguments) : i,
                    r === t ? u.notifyWith(n, r) : --s || u.resolveWith(n, r)
                }
            };
            if (a > 1) for (t = Array(a), n = Array(a), r = Array(a); a > i; i++) o[i] && st.isFunction(o[i].promise) ? o[i].promise().done(l(i, r, o)).fail(u.reject).progress(l(i, n, t)) : --s;
            return s || u.resolveWith(r, o),
            u.promise()
        }
    }),
    st.support = function() {
        var n, r, i, o, a, s, u, l, c, f, p = V.createElement("div");
        if (p.setAttribute("className", "t"), p.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", r = p.getElementsByTagName("*"), i = p.getElementsByTagName("a")[0], !r || !i || !r.length) return {};
        o = V.createElement("select"),
        a = o.appendChild(V.createElement("option")),
        s = p.getElementsByTagName("input")[0],
        i.style.cssText = "top:1px;float:left;opacity:.5",
        n = {
            getSetAttribute: "t" !== p.className,
            leadingWhitespace: 3 === p.firstChild.nodeType,
            tbody: !p.getElementsByTagName("tbody").length,
            htmlSerialize: !!p.getElementsByTagName("link").length,
            style: /top/.test(i.getAttribute("style")),
            hrefNormalized: "/a" === i.getAttribute("href"),
            opacity: /^0.5/.test(i.style.opacity),
            cssFloat: !!i.style.cssFloat,
            checkOn: !!s.value,
            optSelected: a.selected,
            enctype: !!V.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== V.createElement("nav").cloneNode(!0).outerHTML,
            boxModel: "CSS1Compat" === V.compatMode,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        },
        s.checked = !0,
        n.noCloneChecked = s.cloneNode(!0).checked,
        o.disabled = !0,
        n.optDisabled = !a.disabled;
        try {
            delete p.test
        } catch(d) {
            n.deleteExpando = !1
        }
        s = V.createElement("input"),
        s.setAttribute("value", ""),
        n.input = "" === s.getAttribute("value"),
        s.value = "t",
        s.setAttribute("type", "radio"),
        n.radioValue = "t" === s.value,
        s.setAttribute("checked", "t"),
        s.setAttribute("name", "t"),
        u = V.createDocumentFragment(),
        u.appendChild(s),
        n.appendChecked = s.checked,
        n.checkClone = u.cloneNode(!0).cloneNode(!0).lastChild.checked,
        p.attachEvent && (p.attachEvent("onclick",
        function() {
            n.noCloneEvent = !1
        }), p.cloneNode(!0).click());
        for (f in {
            submit: !0,
            change: !0,
            focusin: !0
        }) p.setAttribute(l = "on" + f, "t"),
        n[f + "Bubbles"] = l in e || p.attributes[l].expando === !1;
        return p.style.backgroundClip = "content-box",
        p.cloneNode(!0).style.backgroundClip = "",
        n.clearCloneStyle = "content-box" === p.style.backgroundClip,
        st(function() {
            var r, i, o, a = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
            s = V.getElementsByTagName("body")[0];
            s && (r = V.createElement("div"), r.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", s.appendChild(r).appendChild(p), p.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = p.getElementsByTagName("td"), o[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = 0 === o[0].offsetHeight, o[0].style.display = "", o[1].style.display = "none", n.reliableHiddenOffsets = c && 0 === o[0].offsetHeight, p.innerHTML = "", p.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", n.boxSizing = 4 === p.offsetWidth, n.doesNotIncludeMarginInBodyOffset = 1 !== s.offsetTop, e.getComputedStyle && (n.pixelPosition = "1%" !== (e.getComputedStyle(p, null) || {}).top, n.boxSizingReliable = "4px" === (e.getComputedStyle(p, null) || {
                width: "4px"
            }).width, i = p.appendChild(V.createElement("div")), i.style.cssText = p.style.cssText = a, i.style.marginRight = i.style.width = "0", p.style.width = "1px", n.reliableMarginRight = !parseFloat((e.getComputedStyle(i, null) || {}).marginRight)), p.style.zoom !== t && (p.innerHTML = "", p.style.cssText = a + "width:1px;padding:1px;display:inline;zoom:1", n.inlineBlockNeedsLayout = 3 === p.offsetWidth, p.style.display = "block", p.innerHTML = "<div></div>", p.firstChild.style.width = "5px", n.shrinkWrapBlocks = 3 !== p.offsetWidth, s.style.zoom = 1), s.removeChild(r), r = p = o = i = null)
        }),
        r = o = u = a = i = s = null,
        n
    } ();
    var wt = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
    Nt = /([A-Z])/g;
    st.extend({
        cache: {},
        expando: "jQuery" + (Z + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(e) {
            return e = e.nodeType ? st.cache[e[st.expando]] : e[st.expando],
            !!e && !s(e)
        },
        data: function(e, t, n) {
            return i(e, t, n, !1)
        },
        removeData: function(e, t) {
            return o(e, t, !1)
        },
        _data: function(e, t, n) {
            return i(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return o(e, t, !0)
        },
        acceptData: function(e) {
            var t = e.nodeName && st.noData[e.nodeName.toLowerCase()];
            return ! t || t !== !0 && e.getAttribute("classid") === t
        }
    }),
    st.fn.extend({
        data: function(e, n) {
            var r, i, o = this[0],
            s = 0,
            u = null;
            if (e === t) {
                if (this.length && (u = st.data(o), 1 === o.nodeType && !st._data(o, "parsedAttrs"))) {
                    for (r = o.attributes; r.length > s; s++) i = r[s].name,
                    i.indexOf("data-") || (i = st.camelCase(i.substring(5)), a(o, i, u[i]));
                    st._data(o, "parsedAttrs", !0)
                }
                return u
            }
            return "object" == typeof e ? this.each(function() {
                st.data(this, e)
            }) : st.access(this,
            function(n) {
                return n === t ? o ? a(o, e, st.data(o, e)) : null: (this.each(function() {
                    st.data(this, e, n)
                }), t)
            },
            null, n, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                st.removeData(this, e)
            })
        }
    }),
    st.extend({
        queue: function(e, n, r) {
            var i;
            return e ? (n = (n || "fx") + "queue", i = st._data(e, n), r && (!i || st.isArray(r) ? i = st._data(e, n, st.makeArray(r)) : i.push(r)), i || []) : t
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = st.queue(e, t),
            r = n.length,
            i = n.shift(),
            o = st._queueHooks(e, t),
            a = function() {
                st.dequeue(e, t)
            };
            "inprogress" === i && (i = n.shift(), r--),
            o.cur = i,
            i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)),
            !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return st._data(e, n) || st._data(e, n, {
                empty: st.Callbacks("once memory").add(function() {
                    st._removeData(e, t + "queue"),
                    st._removeData(e, n)
                })
            })
        }
    }),
    st.fn.extend({
        queue: function(e, n) {
            var r = 2;
            return "string" != typeof e && (n = e, e = "fx", r--),
            r > arguments.length ? st.queue(this[0], e) : n === t ? this: this.each(function() {
                var t = st.queue(this, e, n);
                st._queueHooks(this, e),
                "fx" === e && "inprogress" !== t[0] && st.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                st.dequeue(this, e)
            })
        },
        delay: function(e, t) {
            return e = st.fx ? st.fx.speeds[e] || e: e,
            t = t || "fx",
            this.queue(t,
            function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r)
                }
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, n) {
            var r, i = 1,
            o = st.Deferred(),
            a = this,
            s = this.length,
            u = function() {--i || o.resolveWith(a, [a])
            };
            for ("string" != typeof e && (n = e, e = t), e = e || "fx"; s--;) r = st._data(a[s], e + "queueHooks"),
            r && r.empty && (i++, r.empty.add(u));
            return u(),
            o.promise(n)
        }
    });
    var Ct, kt, Et = /[\t\r\n]/g,
    St = /\r/g,
    At = /^(?:input|select|textarea|button|object)$/i,
    jt = /^(?:a|area)$/i,
    Dt = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
    Lt = /^(?:checked|selected)$/i,
    Ht = st.support.getSetAttribute,
    Mt = st.support.input;
    st.fn.extend({
        attr: function(e, t) {
            return st.access(this, st.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                st.removeAttr(this, e)
            })
        },
        prop: function(e, t) {
            return st.access(this, st.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = st.propFix[e] || e,
            this.each(function() {
                try {
                    this[e] = t,
                    delete this[e]
                } catch(n) {}
            })
        },
        addClass: function(e) {
            var t, n, r, i, o, a = 0,
            s = this.length,
            u = "string" == typeof e && e;
            if (st.isFunction(e)) return this.each(function(t) {
                st(this).addClass(e.call(this, t, this.className))
            });
            if (u) for (t = (e || "").match(lt) || []; s > a; a++) if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Et, " ") : " ")) {
                for (o = 0; i = t[o++];) 0 > r.indexOf(" " + i + " ") && (r += i + " ");
                n.className = st.trim(r)
            }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a = 0,
            s = this.length,
            u = 0 === arguments.length || "string" == typeof e && e;
            if (st.isFunction(e)) return this.each(function(t) {
                st(this).removeClass(e.call(this, t, this.className))
            });
            if (u) for (t = (e || "").match(lt) || []; s > a; a++) if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Et, " ") : "")) {
                for (o = 0; i = t[o++];) for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
                n.className = e ? st.trim(r) : ""
            }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e,
            r = "boolean" == typeof t;
            return st.isFunction(e) ? this.each(function(n) {
                st(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function() {
                if ("string" === n) for (var i, o = 0,
                a = st(this), s = t, u = e.match(lt) || []; i = u[o++];) s = r ? s: !a.hasClass(i),
                a[s ? "addClass": "removeClass"](i);
                else("undefined" === n || "boolean" === n) && (this.className && st._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "": st._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ",
            n = 0,
            r = this.length; r > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Et, " ").indexOf(t) >= 0) return ! 0;
            return ! 1
        },
        val: function(e) {
            var n, r, i, o = this[0]; {
                if (arguments.length) return i = st.isFunction(e),
                this.each(function(r) {
                    var o, a = st(this);
                    1 === this.nodeType && (o = i ? e.call(this, r, a.val()) : e, null == o ? o = "": "number" == typeof o ? o += "": st.isArray(o) && (o = st.map(o,
                    function(e) {
                        return null == e ? "": e + ""
                    })), n = st.valHooks[this.type] || st.valHooks[this.nodeName.toLowerCase()], n && "set" in n && n.set(this, o, "value") !== t || (this.value = o))
                });
                if (o) return n = st.valHooks[o.type] || st.valHooks[o.nodeName.toLowerCase()],
                n && "get" in n && (r = n.get(o, "value")) !== t ? r: (r = o.value, "string" == typeof r ? r.replace(St, "") : null == r ? "": r)
            }
        }
    }),
    st.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = e.attributes.value;
                    return ! t || t.specified ? e.value: e.text
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options,
                    i = e.selectedIndex,
                    o = "select-one" === e.type || 0 > i,
                    a = o ? null: [], s = o ? i + 1 : r.length, u = 0 > i ? s: o ? i: 0; s > u; u++) if (n = r[u], !(!n.selected && u !== i || (st.support.optDisabled ? n.disabled: null !== n.getAttribute("disabled")) || n.parentNode.disabled && st.nodeName(n.parentNode, "optgroup"))) {
                        if (t = st(n).val(), o) return t;
                        a.push(t)
                    }
                    return a
                },
                set: function(e, t) {
                    var n = st.makeArray(t);
                    return st(e).find("option").each(function() {
                        this.selected = st.inArray(st(this).val(), n) >= 0
                    }),
                    n.length || (e.selectedIndex = -1),
                    n
                }
            }
        },
        attr: function(e, n, r) {
            var i, o, a, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) return e.getAttribute === t ? st.prop(e, n, r) : (a = 1 !== s || !st.isXMLDoc(e), a && (n = n.toLowerCase(), o = st.attrHooks[n] || (Dt.test(n) ? kt: Ct)), r === t ? o && a && "get" in o && null !== (i = o.get(e, n)) ? i: (e.getAttribute !== t && (i = e.getAttribute(n)), null == i ? t: i) : null !== r ? o && a && "set" in o && (i = o.set(e, r, n)) !== t ? i: (e.setAttribute(n, r + ""), r) : (st.removeAttr(e, n), t))
        },
        removeAttr: function(e, t) {
            var n, r, i = 0,
            o = t && t.match(lt);
            if (o && 1 === e.nodeType) for (; n = o[i++];) r = st.propFix[n] || n,
            Dt.test(n) ? !Ht && Lt.test(n) ? e[st.camelCase("default-" + n)] = e[r] = !1 : e[r] = !1 : st.attr(e, n, ""),
            e.removeAttribute(Ht ? n: r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!st.support.radioValue && "radio" === t && st.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(e, n, r) {
            var i, o, a, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) return a = 1 !== s || !st.isXMLDoc(e),
            a && (n = st.propFix[n] || n, o = st.propHooks[n]),
            r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i: e[n] = r: o && "get" in o && null !== (i = o.get(e, n)) ? i: e[n]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var n = e.getAttributeNode("tabindex");
                    return n && n.specified ? parseInt(n.value, 10) : At.test(e.nodeName) || jt.test(e.nodeName) && e.href ? 0 : t
                }
            }
        }
    }),
    kt = {
        get: function(e, n) {
            var r = st.prop(e, n),
            i = "boolean" == typeof r && e.getAttribute(n),
            o = "boolean" == typeof r ? Mt && Ht ? null != i: Lt.test(n) ? e[st.camelCase("default-" + n)] : !!i: e.getAttributeNode(n);
            return o && o.value !== !1 ? n.toLowerCase() : t
        },
        set: function(e, t, n) {
            return t === !1 ? st.removeAttr(e, n) : Mt && Ht || !Lt.test(n) ? e.setAttribute(!Ht && st.propFix[n] || n, n) : e[st.camelCase("default-" + n)] = e[n] = !0,
            n
        }
    },
    Mt && Ht || (st.attrHooks.value = {
        get: function(e, n) {
            var r = e.getAttributeNode(n);
            return st.nodeName(e, "input") ? e.defaultValue: r && r.specified ? r.value: t
        },
        set: function(e, n, r) {
            return st.nodeName(e, "input") ? (e.defaultValue = n, t) : Ct && Ct.set(e, n, r)
        }
    }),
    Ht || (Ct = st.valHooks.button = {
        get: function(e, n) {
            var r = e.getAttributeNode(n);
            return r && ("id" === n || "name" === n || "coords" === n ? "" !== r.value: r.specified) ? r.value: t
        },
        set: function(e, n, r) {
            var i = e.getAttributeNode(r);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)),
            i.value = n += "",
            "value" === r || n === e.getAttribute(r) ? n: t
        }
    },
    st.attrHooks.contenteditable = {
        get: Ct.get,
        set: function(e, t, n) {
            Ct.set(e, "" === t ? !1 : t, n)
        }
    },
    st.each(["width", "height"],
    function(e, n) {
        st.attrHooks[n] = st.extend(st.attrHooks[n], {
            set: function(e, r) {
                return "" === r ? (e.setAttribute(n, "auto"), r) : t
            }
        })
    })),
    st.support.hrefNormalized || (st.each(["href", "src", "width", "height"],
    function(e, n) {
        st.attrHooks[n] = st.extend(st.attrHooks[n], {
            get: function(e) {
                var r = e.getAttribute(n, 2);
                return null == r ? t: r
            }
        })
    }), st.each(["href", "src"],
    function(e, t) {
        st.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    })),
    st.support.style || (st.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || t
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    }),
    st.support.optSelected || (st.propHooks.selected = st.extend(st.propHooks.selected, {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex),
            null
        }
    })),
    st.support.enctype || (st.propFix.enctype = "encoding"),
    st.support.checkOn || st.each(["radio", "checkbox"],
    function() {
        st.valHooks[this] = {
            get: function(e) {
                return null === e.getAttribute("value") ? "on": e.value
            }
        }
    }),
    st.each(["radio", "checkbox"],
    function() {
        st.valHooks[this] = st.extend(st.valHooks[this], {
            set: function(e, n) {
                return st.isArray(n) ? e.checked = st.inArray(st(e).val(), n) >= 0 : t
            }
        })
    });
    var qt = /^(?:input|select|textarea)$/i,
    _t = /^key/,
    Ft = /^(?:mouse|contextmenu)|click/,
    Ot = /^(?:focusinfocus|focusoutblur)$/,
    Bt = /^([^.]*)(?:\.(.+)|)$/;
    st.event = {
        global: {},
        add: function(e, n, r, i, o) {
            var a, s, u, l, c, f, p, d, h, g, m, y = 3 !== e.nodeType && 8 !== e.nodeType && st._data(e);
            if (y) {
                for (r.handler && (a = r, r = a.handler, o = a.selector), r.guid || (r.guid = st.guid++), (l = y.events) || (l = y.events = {}), (s = y.handle) || (s = y.handle = function(e) {
                    return st === t || e && st.event.triggered === e.type ? t: st.event.dispatch.apply(s.elem, arguments)
                },
                s.elem = e), n = (n || "").match(lt) || [""], c = n.length; c--;) u = Bt.exec(n[c]) || [],
                h = m = u[1],
                g = (u[2] || "").split(".").sort(),
                p = st.event.special[h] || {},
                h = (o ? p.delegateType: p.bindType) || h,
                p = st.event.special[h] || {},
                f = st.extend({
                    type: h,
                    origType: m,
                    data: i,
                    handler: r,
                    guid: r.guid,
                    selector: o,
                    needsContext: o && st.expr.match.needsContext.test(o),
                    namespace: g.join(".")
                },
                a),
                (d = l[h]) || (d = l[h] = [], d.delegateCount = 0, p.setup && p.setup.call(e, i, g, s) !== !1 || (e.addEventListener ? e.addEventListener(h, s, !1) : e.attachEvent && e.attachEvent("on" + h, s))),
                p.add && (p.add.call(e, f), f.handler.guid || (f.handler.guid = r.guid)),
                o ? d.splice(d.delegateCount++, 0, f) : d.push(f),
                st.event.global[h] = !0;
                e = null
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, m = st.hasData(e) && st._data(e);
            if (m && (u = m.events)) {
                for (t = (t || "").match(lt) || [""], l = t.length; l--;) if (s = Bt.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
                    for (f = st.event.special[d] || {},
                    d = (r ? f.delegateType: f.bindType) || d, p = u[d] || [], s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; o--;) c = p[o],
                    !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                    a && !p.length && (f.teardown && f.teardown.call(e, h, m.handle) !== !1 || st.removeEvent(e, d, m.handle), delete u[d])
                } else for (d in u) st.event.remove(e, d + t[l], n, r, !0);
                st.isEmptyObject(u) && (delete m.handle, st._removeData(e, "events"))
            }
        },
        trigger: function(n, r, i, o) {
            var a, s, u, l, c, f, p, d = [i || V],
            h = n.type || n,
            g = n.namespace ? n.namespace.split(".") : [];
            if (s = u = i = i || V, 3 !== i.nodeType && 8 !== i.nodeType && !Ot.test(h + st.event.triggered) && (h.indexOf(".") >= 0 && (g = h.split("."), h = g.shift(), g.sort()), c = 0 > h.indexOf(":") && "on" + h, n = n[st.expando] ? n: new st.Event(h, "object" == typeof n && n), n.isTrigger = !0, n.namespace = g.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : st.makeArray(r, [n]), p = st.event.special[h] || {},
            o || !p.trigger || p.trigger.apply(i, r) !== !1)) {
                if (!o && !p.noBubble && !st.isWindow(i)) {
                    for (l = p.delegateType || h, Ot.test(l + h) || (s = s.parentNode); s; s = s.parentNode) d.push(s),
                    u = s;
                    u === (i.ownerDocument || V) && d.push(u.defaultView || u.parentWindow || e)
                }
                for (a = 0; (s = d[a++]) && !n.isPropagationStopped();) n.type = a > 1 ? l: p.bindType || h,
                f = (st._data(s, "events") || {})[n.type] && st._data(s, "handle"),
                f && f.apply(s, r),
                f = c && s[c],
                f && st.acceptData(s) && f.apply && f.apply(s, r) === !1 && n.preventDefault();
                if (n.type = h, !(o || n.isDefaultPrevented() || p._default && p._default.apply(i.ownerDocument, r) !== !1 || "click" === h && st.nodeName(i, "a") || !st.acceptData(i) || !c || !i[h] || st.isWindow(i))) {
                    u = i[c],
                    u && (i[c] = null),
                    st.event.triggered = h;
                    try {
                        i[h]()
                    } catch(m) {}
                    st.event.triggered = t,
                    u && (i[c] = u)
                }
                return n.result
            }
        },
        dispatch: function(e) {
            e = st.event.fix(e);
            var n, r, i, o, a, s = [],
            u = nt.call(arguments),
            l = (st._data(this, "events") || {})[e.type] || [],
            c = st.event.special[e.type] || {};
            if (u[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                for (s = st.event.handlers.call(this, e, l), n = 0; (o = s[n++]) && !e.isPropagationStopped();) for (e.currentTarget = o.elem, r = 0; (a = o.handlers[r++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(a.namespace)) && (e.handleObj = a, e.data = a.data, i = ((st.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, u), i !== t && (e.result = i) === !1 && (e.preventDefault(), e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e),
                e.result
            }
        },
        handlers: function(e, n) {
            var r, i, o, a, s = [],
            u = n.delegateCount,
            l = e.target;
            if (u && l.nodeType && (!e.button || "click" !== e.type)) for (; l != this; l = l.parentNode || this) if (l.disabled !== !0 || "click" !== e.type) {
                for (i = [], r = 0; u > r; r++) a = n[r],
                o = a.selector + " ",
                i[o] === t && (i[o] = a.needsContext ? st(o, this).index(l) >= 0 : st.find(o, this, null, [l]).length),
                i[o] && i.push(a);
                i.length && s.push({
                    elem: l,
                    handlers: i
                })
            }
            return n.length > u && s.push({
                elem: this,
                handlers: n.slice(u)
            }),
            s
        },
        fix: function(e) {
            if (e[st.expando]) return e;
            var t, n, r = e,
            i = st.event.fixHooks[e.type] || {},
            o = i.props ? this.props.concat(i.props) : this.props;
            for (e = new st.Event(r), t = o.length; t--;) n = o[t],
            e[n] = r[n];
            return e.target || (e.target = r.srcElement || V),
            3 === e.target.nodeType && (e.target = e.target.parentNode),
            e.metaKey = !!e.metaKey,
            i.filter ? i.filter(e, r) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode: t.keyCode),
                e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, n) {
                var r, i, o, a = n.button,
                s = n.fromElement;
                return null == e.pageX && null != n.clientX && (r = e.target.ownerDocument || V, i = r.documentElement, o = r.body, e.pageX = n.clientX + (i && i.scrollLeft || o && o.scrollLeft || 0) - (i && i.clientLeft || o && o.clientLeft || 0), e.pageY = n.clientY + (i && i.scrollTop || o && o.scrollTop || 0) - (i && i.clientTop || o && o.clientTop || 0)),
                !e.relatedTarget && s && (e.relatedTarget = s === e.target ? n.toElement: s),
                e.which || a === t || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0),
                e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                trigger: function() {
                    return st.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t
                }
            },
            focus: {
                trigger: function() {
                    if (this !== V.activeElement && this.focus) try {
                        return this.focus(),
                        !1
                    } catch(e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === V.activeElement && this.blur ? (this.blur(), !1) : t
                },
                delegateType: "focusout"
            },
            beforeunload: {
                postDispatch: function(e) {
                    e.result !== t && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = st.extend(new st.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? st.event.trigger(i, null, t) : st.event.dispatch.call(t, i),
            i.isDefaultPrevented() && n.preventDefault()
        }
    },
    st.removeEvent = V.removeEventListener ?
    function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }: function(e, n, r) {
        var i = "on" + n;
        e.detachEvent && (e[i] === t && (e[i] = null), e.detachEvent(i, r))
    },
    st.Event = function(e, n) {
        return this instanceof st.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? u: l) : this.type = e, n && st.extend(this, n), this.timeStamp = e && e.timeStamp || st.now(), this[st.expando] = !0, t) : new st.Event(e, n)
    },
    st.Event.prototype = {
        isDefaultPrevented: l,
        isPropagationStopped: l,
        isImmediatePropagationStopped: l,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = u,
            e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = u,
            e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = u,
            this.stopPropagation()
        }
    },
    st.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    },
    function(e, t) {
        st.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this,
                i = e.relatedTarget,
                o = e.handleObj;
                return (!i || i !== r && !st.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t),
                n
            }
        }
    }),
    st.support.submitBubbles || (st.event.special.submit = {
        setup: function() {
            return st.nodeName(this, "form") ? !1 : (st.event.add(this, "click._submit keypress._submit",
            function(e) {
                var n = e.target,
                r = st.nodeName(n, "input") || st.nodeName(n, "button") ? n.form: t;
                r && !st._data(r, "submitBubbles") && (st.event.add(r, "submit._submit",
                function(e) {
                    e._submit_bubble = !0
                }), st._data(r, "submitBubbles", !0))
            }), t)
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && st.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            return st.nodeName(this, "form") ? !1 : (st.event.remove(this, "._submit"), t)
        }
    }),
    st.support.changeBubbles || (st.event.special.change = {
        setup: function() {
            return qt.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (st.event.add(this, "propertychange._change",
            function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), st.event.add(this, "click._change",
            function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1),
                st.event.simulate("change", this, e, !0)
            })), !1) : (st.event.add(this, "beforeactivate._change",
            function(e) {
                var t = e.target;
                qt.test(t.nodeName) && !st._data(t, "changeBubbles") && (st.event.add(t, "change._change",
                function(e) { ! this.parentNode || e.isSimulated || e.isTrigger || st.event.simulate("change", this.parentNode, e, !0)
                }), st._data(t, "changeBubbles", !0))
            }), t)
        },
        handle: function(e) {
            var n = e.target;
            return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t
        },
        teardown: function() {
            return st.event.remove(this, "._change"),
            !qt.test(this.nodeName)
        }
    }),
    st.support.focusinBubbles || st.each({
        focus: "focusin",
        blur: "focusout"
    },
    function(e, t) {
        var n = 0,
        r = function(e) {
            st.event.simulate(t, e.target, st.event.fix(e), !0)
        };
        st.event.special[t] = {
            setup: function() {
                0 === n++&&V.addEventListener(e, r, !0)
            },
            teardown: function() {
                0 === --n && V.removeEventListener(e, r, !0)
            }
        }
    }),
    st.fn.extend({
        on: function(e, n, r, i, o) {
            var a, s;
            if ("object" == typeof e) {
                "string" != typeof n && (r = r || n, n = t);
                for (s in e) this.on(s, n, r, e[s], o);
                return this
            }
            if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) i = l;
            else if (!i) return this;
            return 1 === o && (a = i, i = function(e) {
                return st().off(e),
                a.apply(this, arguments)
            },
            i.guid = a.guid || (a.guid = st.guid++)),
            this.each(function() {
                st.event.add(this, e, i, r, n)
            })
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function(e, n, r) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj,
            st(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace: i.origType, i.selector, i.handler),
            this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, n, e[o]);
                return this
            }
            return (n === !1 || "function" == typeof n) && (r = n, n = t),
            r === !1 && (r = l),
            this.each(function() {
                st.event.remove(this, e, r, n)
            })
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        trigger: function(e, t) {
            return this.each(function() {
                st.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, n) {
            var r = this[0];
            return r ? st.event.trigger(e, n, r, !0) : t
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    st.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
    function(e, t) {
        st.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        },
        _t.test(t) && (st.event.fixHooks[t] = st.event.keyHooks),
        Ft.test(t) && (st.event.fixHooks[t] = st.event.mouseHooks)
    }),
    function(e, t) {
        function n(e) {
            return ht.test(e + "")
        }
        function r() {
            var e, t = [];
            return e = function(n, r) {
                return t.push(n += " ") > C.cacheLength && delete e[t.shift()],
                e[n] = r
            }
        }
        function i(e) {
            return e[P] = !0,
            e
        }
        function o(e) {
            var t = L.createElement("div");
            try {
                return e(t)
            } catch(n) {
                return ! 1
            } finally {
                t = null
            }
        }
        function a(e, t, n, r) {
            var i, o, a, s, u, l, c, d, h, g;
            if ((t ? t.ownerDocument || t: R) !== L && D(t), t = t || L, n = n || [], !e || "string" != typeof e) return n;
            if (1 !== (s = t.nodeType) && 9 !== s) return [];
            if (!M && !r) {
                if (i = gt.exec(e)) if (a = i[1]) {
                    if (9 === s) {
                        if (o = t.getElementById(a), !o || !o.parentNode) return n;
                        if (o.id === a) return n.push(o),
                        n
                    } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && O(t, o) && o.id === a) return n.push(o),
                    n
                } else {
                    if (i[2]) return Q.apply(n, K.call(t.getElementsByTagName(e), 0)),
                    n;
                    if ((a = i[3]) && W.getByClassName && t.getElementsByClassName) return Q.apply(n, K.call(t.getElementsByClassName(a), 0)),
                    n
                }
                if (W.qsa && !q.test(e)) {
                    if (c = !0, d = P, h = t, g = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                        for (l = f(e), (c = t.getAttribute("id")) ? d = c.replace(vt, "\\$&") : t.setAttribute("id", d), d = "[id='" + d + "'] ", u = l.length; u--;) l[u] = d + p(l[u]);
                        h = dt.test(e) && t.parentNode || t,
                        g = l.join(",")
                    }
                    if (g) try {
                        return Q.apply(n, K.call(h.querySelectorAll(g), 0)),
                        n
                    } catch(m) {} finally {
                        c || t.removeAttribute("id")
                    }
                }
            }
            return x(e.replace(at, "$1"), t, n, r)
        }
        function s(e, t) {
            for (var n = e && t && e.nextSibling; n; n = n.nextSibling) if (n === t) return - 1;
            return e ? 1 : -1
        }
        function u(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }
        function l(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function c(e) {
            return i(function(t) {
                return t = +t,
                i(function(n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }
        function f(e, t) {
            var n, r, i, o, s, u, l, c = X[e + " "];
            if (c) return t ? 0 : c.slice(0);
            for (s = e, u = [], l = C.preFilter; s;) { (!n || (r = ut.exec(s))) && (r && (s = s.slice(r[0].length) || s), u.push(i = [])),
                n = !1,
                (r = lt.exec(s)) && (n = r.shift(), i.push({
                    value: n,
                    type: r[0].replace(at, " ")
                }), s = s.slice(n.length));
                for (o in C.filter) ! (r = pt[o].exec(s)) || l[o] && !(r = l[o](r)) || (n = r.shift(), i.push({
                    value: n,
                    type: o,
                    matches: r
                }), s = s.slice(n.length));
                if (!n) break
            }
            return t ? s.length: s ? a.error(e) : X(e, u).slice(0)
        }
        function p(e) {
            for (var t = 0,
            n = e.length,
            r = ""; n > t; t++) r += e[t].value;
            return r
        }
        function d(e, t, n) {
            var r = t.dir,
            i = n && "parentNode" === t.dir,
            o = I++;
            return t.first ?
            function(t, n, o) {
                for (; t = t[r];) if (1 === t.nodeType || i) return e(t, n, o)
            }: function(t, n, a) {
                var s, u, l, c = $ + " " + o;
                if (a) {
                    for (; t = t[r];) if ((1 === t.nodeType || i) && e(t, n, a)) return ! 0
                } else for (; t = t[r];) if (1 === t.nodeType || i) if (l = t[P] || (t[P] = {}), (u = l[r]) && u[0] === c) {
                    if ((s = u[1]) === !0 || s === N) return s === !0
                } else if (u = l[r] = [c], u[1] = e(t, n, a) || N, u[1] === !0) return ! 0
            }
        }
        function h(e) {
            return e.length > 1 ?
            function(t, n, r) {
                for (var i = e.length; i--;) if (!e[i](t, n, r)) return ! 1;
                return ! 0
            }: e[0]
        }
        function g(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; u > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), l && t.push(s));
            return a
        }
        function m(e, t, n, r, o, a) {
            return r && !r[P] && (r = m(r)),
            o && !o[P] && (o = m(o, a)),
            i(function(i, a, s, u) {
                var l, c, f, p = [],
                d = [],
                h = a.length,
                m = i || b(t || "*", s.nodeType ? [s] : s, []),
                y = !e || !i && t ? m: g(m, p, e, s, u),
                v = n ? o || (i ? e: h || r) ? [] : a: y;
                if (n && n(y, v, s, u), r) for (l = g(v, d), r(l, [], s, u), c = l.length; c--;)(f = l[c]) && (v[d[c]] = !(y[d[c]] = f));
                if (i) {
                    if (o || e) {
                        if (o) {
                            for (l = [], c = v.length; c--;)(f = v[c]) && l.push(y[c] = f);
                            o(null, v = [], l, u)
                        }
                        for (c = v.length; c--;)(f = v[c]) && (l = o ? Z.call(i, f) : p[c]) > -1 && (i[l] = !(a[l] = f))
                    }
                } else v = g(v === a ? v.splice(h, v.length) : v),
                o ? o(null, a, v, u) : Q.apply(a, v)
            })
        }
        function y(e) {
            for (var t, n, r, i = e.length,
            o = C.relative[e[0].type], a = o || C.relative[" "], s = o ? 1 : 0, u = d(function(e) {
                return e === t
            },
            a, !0), l = d(function(e) {
                return Z.call(t, e) > -1
            },
            a, !0), c = [function(e, n, r) {
                return ! o && (r || n !== j) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r))
            }]; i > s; s++) if (n = C.relative[e[s].type]) c = [d(h(c), n)];
            else {
                if (n = C.filter[e[s].type].apply(null, e[s].matches), n[P]) {
                    for (r = ++s; i > r && !C.relative[e[r].type]; r++);
                    return m(s > 1 && h(c), s > 1 && p(e.slice(0, s - 1)).replace(at, "$1"), n, r > s && y(e.slice(s, r)), i > r && y(e = e.slice(r)), i > r && p(e))
                }
                c.push(n)
            }
            return h(c)
        }
        function v(e, t) {
            var n = 0,
            r = t.length > 0,
            o = e.length > 0,
            s = function(i, s, u, l, c) {
                var f, p, d, h = [],
                m = 0,
                y = "0",
                v = i && [],
                b = null != c,
                x = j,
                T = i || o && C.find.TAG("*", c && s.parentNode || s),
                w = $ += null == x ? 1 : Math.E;
                for (b && (j = s !== L && s, N = n); null != (f = T[y]); y++) {
                    if (o && f) {
                        for (p = 0; d = e[p]; p++) if (d(f, s, u)) {
                            l.push(f);
                            break
                        }
                        b && ($ = w, N = ++n)
                    }
                    r && ((f = !d && f) && m--, i && v.push(f))
                }
                if (m += y, r && y !== m) {
                    for (p = 0; d = t[p]; p++) d(v, h, s, u);
                    if (i) {
                        if (m > 0) for (; y--;) v[y] || h[y] || (h[y] = G.call(l));
                        h = g(h)
                    }
                    Q.apply(l, h),
                    b && !i && h.length > 0 && m + t.length > 1 && a.uniqueSort(l)
                }
                return b && ($ = w, j = x),
                v
            };
            return r ? i(s) : s
        }
        function b(e, t, n) {
            for (var r = 0,
            i = t.length; i > r; r++) a(e, t[r], n);
            return n
        }
        function x(e, t, n, r) {
            var i, o, a, s, u, l = f(e);
            if (!r && 1 === l.length) {
                if (o = l[0] = l[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && 9 === t.nodeType && !M && C.relative[o[1].type]) {
                    if (t = C.find.ID(a.matches[0].replace(xt, Tt), t)[0], !t) return n;
                    e = e.slice(o.shift().value.length)
                }
                for (i = pt.needsContext.test(e) ? -1 : o.length - 1; i >= 0 && (a = o[i], !C.relative[s = a.type]); i--) if ((u = C.find[s]) && (r = u(a.matches[0].replace(xt, Tt), dt.test(o[0].type) && t.parentNode || t))) {
                    if (o.splice(i, 1), e = r.length && p(o), !e) return Q.apply(n, K.call(r, 0)),
                    n;
                    break
                }
            }
            return S(e, l)(r, t, M, n, dt.test(e)),
            n
        }
        function T() {}
        var w, N, C, k, E, S, A, j, D, L, H, M, q, _, F, O, B, P = "sizzle" + -new Date,
        R = e.document,
        W = {},
        $ = 0,
        I = 0,
        z = r(),
        X = r(),
        U = r(),
        V = typeof t,
        Y = 1 << 31,
        J = [],
        G = J.pop,
        Q = J.push,
        K = J.slice,
        Z = J.indexOf ||
        function(e) {
            for (var t = 0,
            n = this.length; n > t; t++) if (this[t] === e) return t;
            return - 1
        },
        et = "[\\x20\\t\\r\\n\\f]",
        tt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        nt = tt.replace("w", "w#"),
        rt = "([*^$|!~]?=)",
        it = "\\[" + et + "*(" + tt + ")" + et + "*(?:" + rt + et + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + nt + ")|)|)" + et + "*\\]",
        ot = ":(" + tt + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + it.replace(3, 8) + ")*)|.*)\\)|)",
        at = RegExp("^" + et + "+|((?:^|[^\\\\])(?:\\\\.)*)" + et + "+$", "g"),
        ut = RegExp("^" + et + "*," + et + "*"),
        lt = RegExp("^" + et + "*([\\x20\\t\\r\\n\\f>+~])" + et + "*"),
        ct = RegExp(ot),
        ft = RegExp("^" + nt + "$"),
        pt = {
            ID: RegExp("^#(" + tt + ")"),
            CLASS: RegExp("^\\.(" + tt + ")"),
            NAME: RegExp("^\\[name=['\"]?(" + tt + ")['\"]?\\]"),
            TAG: RegExp("^(" + tt.replace("w", "w*") + ")"),
            ATTR: RegExp("^" + it),
            PSEUDO: RegExp("^" + ot),
            CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + et + "*(even|odd|(([+-]|)(\\d*)n|)" + et + "*(?:([+-]|)" + et + "*(\\d+)|))" + et + "*\\)|)", "i"),
            needsContext: RegExp("^" + et + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + et + "*((?:-\\d)?\\d*)" + et + "*\\)|)(?=[^-]|$)", "i")
        },
        dt = /[\x20\t\r\n\f]*[+~]/,
        ht = /\{\s*\[native code\]\s*\}/,
        gt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        mt = /^(?:input|select|textarea|button)$/i,
        yt = /^h\d$/i,
        vt = /'|\\/g,
        bt = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
        xt = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
        Tt = function(e, t) {
            var n = "0x" + t - 65536;
            return n !== n ? t: 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(55296 | n >> 10, 56320 | 1023 & n)
        };
        try {
            K.call(H.childNodes, 0)[0].nodeType
        } catch(wt) {
            K = function(e) {
                for (var t, n = []; t = this[e]; e++) n.push(t);
                return n
            }
        }
        E = a.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName: !1
        },
        D = a.setDocument = function(e) {
            var r = e ? e.ownerDocument || e: R;
            return r !== L && 9 === r.nodeType && r.documentElement ? (L = r, H = r.documentElement, M = E(r), W.tagNameNoComments = o(function(e) {
                return e.appendChild(r.createComment("")),
                !e.getElementsByTagName("*").length
            }), W.attributes = o(function(e) {
                e.innerHTML = "<select></select>";
                var t = typeof e.lastChild.getAttribute("multiple");
                return "boolean" !== t && "string" !== t
            }), W.getByClassName = o(function(e) {
                return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>",
                e.getElementsByClassName && e.getElementsByClassName("e").length ? (e.lastChild.className = "e", 2 === e.getElementsByClassName("e").length) : !1
            }), W.getByName = o(function(e) {
                e.id = P + 0,
                e.innerHTML = "<a name='" + P + "'></a><div name='" + P + "'></div>",
                H.insertBefore(e, H.firstChild);
                var t = r.getElementsByName && r.getElementsByName(P).length === 2 + r.getElementsByName(P + 0).length;
                return W.getIdNotName = !r.getElementById(P),
                H.removeChild(e),
                t
            }), C.attrHandle = o(function(e) {
                return e.innerHTML = "<a href='#'></a>",
                e.firstChild && typeof e.firstChild.getAttribute !== V && "#" === e.firstChild.getAttribute("href")
            }) ? {}: {
                href: function(e) {
                    return e.getAttribute("href", 2)
                },
                type: function(e) {
                    return e.getAttribute("type")
                }
            },
            W.getIdNotName ? (C.find.ID = function(e, t) {
                if (typeof t.getElementById !== V && !M) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            },
            C.filter.ID = function(e) {
                var t = e.replace(xt, Tt);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (C.find.ID = function(e, n) {
                if (typeof n.getElementById !== V && !M) {
                    var r = n.getElementById(e);
                    return r ? r.id === e || typeof r.getAttributeNode !== V && r.getAttributeNode("id").value === e ? [r] : t: []
                }
            },
            C.filter.ID = function(e) {
                var t = e.replace(xt, Tt);
                return function(e) {
                    var n = typeof e.getAttributeNode !== V && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), C.find.TAG = W.tagNameNoComments ?
            function(e, n) {
                return typeof n.getElementsByTagName !== V ? n.getElementsByTagName(e) : t
            }: function(e, t) {
                var n, r = [],
                i = 0,
                o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i]; i++) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            },
            C.find.NAME = W.getByName &&
            function(e, n) {
                return typeof n.getElementsByName !== V ? n.getElementsByName(name) : t
            },
            C.find.CLASS = W.getByClassName &&
            function(e, n) {
                return typeof n.getElementsByClassName === V || M ? t: n.getElementsByClassName(e)
            },
            _ = [], q = [":focus"], (W.qsa = n(r.querySelectorAll)) && (o(function(e) {
                e.innerHTML = "<select><option selected=''></option></select>",
                e.querySelectorAll("[selected]").length || q.push("\\[" + et + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),
                e.querySelectorAll(":checked").length || q.push(":checked")
            }), o(function(e) {
                e.innerHTML = "<input type='hidden' i=''/>",
                e.querySelectorAll("[i^='']").length && q.push("[*^$]=" + et + "*(?:\"\"|'')"),
                e.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                q.push(",.*:")
            })), (W.matchesSelector = n(F = H.matchesSelector || H.mozMatchesSelector || H.webkitMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && o(function(e) {
                W.disconnectedMatch = F.call(e, "div"),
                F.call(e, "[s!='']:x"),
                _.push("!=", ot)
            }), q = RegExp(q.join("|")), _ = RegExp(_.join("|")), O = n(H.contains) || H.compareDocumentPosition ?
            function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement: e,
                r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            }: function(e, t) {
                if (t) for (; t = t.parentNode;) if (t === e) return ! 0;
                return ! 1
            },
            B = H.compareDocumentPosition ?
            function(e, t) {
                var n;
                return e === t ? (A = !0, 0) : (n = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t)) ? 1 & n || e.parentNode && 11 === e.parentNode.nodeType ? e === r || O(R, e) ? -1 : t === r || O(R, t) ? 1 : 0 : 4 & n ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
            }: function(e, t) {
                var n, i = 0,
                o = e.parentNode,
                a = t.parentNode,
                u = [e],
                l = [t];
                if (e === t) return A = !0,
                0;
                if (e.sourceIndex && t.sourceIndex) return (~t.sourceIndex || Y) - (O(R, e) && ~e.sourceIndex || Y);
                if (!o || !a) return e === r ? -1 : t === r ? 1 : o ? -1 : a ? 1 : 0;
                if (o === a) return s(e, t);
                for (n = e; n = n.parentNode;) u.unshift(n);
                for (n = t; n = n.parentNode;) l.unshift(n);
                for (; u[i] === l[i];) i++;
                return i ? s(u[i], l[i]) : u[i] === R ? -1 : l[i] === R ? 1 : 0
            },
            A = !1, [0, 0].sort(B), W.detectDuplicates = A, L) : L
        },
        a.matches = function(e, t) {
            return a(e, null, null, t)
        },
        a.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== L && D(e), t = t.replace(bt, "='$1']"), !(!W.matchesSelector || M || _ && _.test(t) || q.test(t))) try {
                var n = F.call(e, t);
                if (n || W.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
            } catch(r) {}
            return a(t, L, null, [e]).length > 0
        },
        a.contains = function(e, t) {
            return (e.ownerDocument || e) !== L && D(e),
            O(e, t)
        },
        a.attr = function(e, t) {
            var n;
            return (e.ownerDocument || e) !== L && D(e),
            M || (t = t.toLowerCase()),
            (n = C.attrHandle[t]) ? n(e) : M || W.attributes ? e.getAttribute(t) : ((n = e.getAttributeNode(t)) || e.getAttribute(t)) && e[t] === !0 ? t: n && n.specified ? n.value: null
        },
        a.error = function(e) {
            throw Error("Syntax error, unrecognized expression: " + e)
        },
        a.uniqueSort = function(e) {
            var t, n = [],
            r = 1,
            i = 0;
            if (A = !W.detectDuplicates, e.sort(B), A) {
                for (; t = e[r]; r++) t === e[r - 1] && (i = n.push(r));
                for (; i--;) e.splice(n[i], 1)
            }
            return e
        },
        k = a.getText = function(e) {
            var t, n = "",
            r = 0,
            i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += k(e)
                } else if (3 === i || 4 === i) return e.nodeValue
            } else for (; t = e[r]; r++) n += k(t);
            return n
        },
        C = a.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: pt,
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(xt, Tt),
                    e[3] = (e[4] || e[5] || "").replace(xt, Tt),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || a.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && a.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[5] && e[2];
                    return pt.CHILD.test(e[0]) ? null: (e[4] ? e[2] = e[4] : n && ct.test(n) && (t = f(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    return "*" === e ?
                    function() {
                        return ! 0
                    }: (e = e.replace(xt, Tt).toLowerCase(),
                    function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    })
                },
                CLASS: function(e) {
                    var t = z[e + " "];
                    return t || (t = RegExp("(^|" + et + ")" + e + "(" + et + "|$)")) && z(e,
                    function(e) {
                        return t.test(e.className || typeof e.getAttribute !== V && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, t, n) {
                    return function(r) {
                        var i = a.attr(r, e);
                        return null == i ? "!=" === t: t ? (i += "", "=" === t ? i === n: "!=" === t ? i !== n: "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.substr(i.length - n.length) === n: "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.substr(0, n.length + 1) === n + "-": !1) : !0
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3),
                    a = "last" !== e.slice( - 4),
                    s = "of-type" === t;
                    return 1 === r && 0 === i ?
                    function(e) {
                        return !! e.parentNode
                    }: function(t, n, u) {
                        var l, c, f, p, d, h, g = o !== a ? "nextSibling": "previousSibling",
                        m = t.parentNode,
                        y = s && t.nodeName.toLowerCase(),
                        v = !u && !s;
                        if (m) {
                            if (o) {
                                for (; g;) {
                                    for (f = t; f = f[g];) if (s ? f.nodeName.toLowerCase() === y: 1 === f.nodeType) return ! 1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return ! 0
                            }
                            if (h = [a ? m.firstChild: m.lastChild], a && v) {
                                for (c = m[P] || (m[P] = {}), l = c[e] || [], d = l[0] === $ && l[1], p = l[0] === $ && l[2], f = d && m.childNodes[d]; f = ++d && f && f[g] || (p = d = 0) || h.pop();) if (1 === f.nodeType && ++p && f === t) {
                                    c[e] = [$, d, p];
                                    break
                                }
                            } else if (v && (l = (t[P] || (t[P] = {}))[e]) && l[0] === $) p = l[1];
                            else for (; (f = ++d && f && f[g] || (p = d = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== y: 1 !== f.nodeType) || !++p || (v && ((f[P] || (f[P] = {}))[e] = [$, p]), f !== t)););
                            return p -= i,
                            p === r || 0 === p % r && p / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, t) {
                    var n, r = C.pseudos[e] || C.setFilters[e.toLowerCase()] || a.error("unsupported pseudo: " + e);
                    return r[P] ? r(t) : r.length > 1 ? (n = [e, e, "", t], C.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, n) {
                        for (var i, o = r(e, t), a = o.length; a--;) i = Z.call(e, o[a]),
                        e[i] = !(n[i] = o[a])
                    }) : function(e) {
                        return r(e, 0, n)
                    }) : r
                }
            },
            pseudos: {
                not: i(function(e) {
                    var t = [],
                    n = [],
                    r = S(e.replace(at, "$1"));
                    return r[P] ? i(function(e, t, n, i) {
                        for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function(e, i, o) {
                        return t[0] = e,
                        r(t, null, o, n),
                        !n.pop()
                    }
                }),
                has: i(function(e) {
                    return function(t) {
                        return a(e, t).length > 0
                    }
                }),
                contains: i(function(e) {
                    return function(t) {
                        return (t.textContent || t.innerText || k(t)).indexOf(e) > -1
                    }
                }),
                lang: i(function(e) {
                    return ft.test(e || "") || a.error("unsupported lang: " + e),
                    e = e.replace(xt, Tt).toLowerCase(),
                    function(t) {
                        var n;
                        do
                        if (n = M ? t.getAttribute("xml:lang") || t.getAttribute("lang") : t.lang) return n = n.toLowerCase(),
                        n === e || 0 === n.indexOf(e + "-");
                        while ((t = t.parentNode) && 1 === t.nodeType);
                        return ! 1
                    }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === H
                },
                focus: function(e) {
                    return e === L.activeElement && (!L.hasFocus || L.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return ! 1;
                    return ! 0
                },
                parent: function(e) {
                    return ! C.pseudos.empty(e)
                },
                header: function(e) {
                    return yt.test(e.nodeName)
                },
                input: function(e) {
                    return mt.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                },
                first: c(function() {
                    return [0]
                }),
                last: c(function(e, t) {
                    return [t - 1]
                }),
                eq: c(function(e, t, n) {
                    return [0 > n ? n + t: n]
                }),
                even: c(function(e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: c(function(e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: c(function(e, t, n) {
                    for (var r = 0 > n ? n + t: n; --r >= 0;) e.push(r);
                    return e
                }),
                gt: c(function(e, t, n) {
                    for (var r = 0 > n ? n + t: n; t > ++r;) e.push(r);
                    return e
                })
            }
        };
        for (w in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) C.pseudos[w] = u(w);
        for (w in {
            submit: !0,
            reset: !0
        }) C.pseudos[w] = l(w);
        S = a.compile = function(e, t) {
            var n, r = [],
            i = [],
            o = U[e + " "];
            if (!o) {
                for (t || (t = f(e)), n = t.length; n--;) o = y(t[n]),
                o[P] ? r.push(o) : i.push(o);
                o = U(e, v(i, r))
            }
            return o
        },
        C.pseudos.nth = C.pseudos.eq,
        C.filters = T.prototype = C.pseudos,
        C.setFilters = new T,
        D(),
        a.attr = st.attr,
        st.find = a,
        st.expr = a.selectors,
        st.expr[":"] = st.expr.pseudos,
        st.unique = a.uniqueSort,
        st.text = a.getText,
        st.isXMLDoc = a.isXML,
        st.contains = a.contains
    } (e);
    var Pt = /Until$/,
    Rt = /^(?:parents|prev(?:Until|All))/,
    Wt = /^.[^:#\[\.,]*$/,
    $t = st.expr.match.needsContext,
    It = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    st.fn.extend({
        find: function(e) {
            var t, n, r;
            if ("string" != typeof e) return r = this,
            this.pushStack(st(e).filter(function() {
                for (t = 0; r.length > t; t++) if (st.contains(r[t], this)) return ! 0
            }));
            for (n = [], t = 0; this.length > t; t++) st.find(e, this[t], n);
            return n = this.pushStack(st.unique(n)),
            n.selector = (this.selector ? this.selector + " ": "") + e,
            n
        },
        has: function(e) {
            var t, n = st(e, this),
            r = n.length;
            return this.filter(function() {
                for (t = 0; r > t; t++) if (st.contains(this, n[t])) return ! 0
            })
        },
        not: function(e) {
            return this.pushStack(f(this, e, !1))
        },
        filter: function(e) {
            return this.pushStack(f(this, e, !0))
        },
        is: function(e) {
            return !! e && ("string" == typeof e ? $t.test(e) ? st(e, this.context).index(this[0]) >= 0 : st.filter(e, this).length > 0 : this.filter(e).length > 0)
        },
        closest: function(e, t) {
            for (var n, r = 0,
            i = this.length,
            o = [], a = $t.test(e) || "string" != typeof e ? st(e, t || this.context) : 0; i > r; r++) for (n = this[r]; n && n.ownerDocument && n !== t && 11 !== n.nodeType;) {
                if (a ? a.index(n) > -1 : st.find.matchesSelector(n, e)) {
                    o.push(n);
                    break
                }
                n = n.parentNode
            }
            return this.pushStack(o.length > 1 ? st.unique(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? st.inArray(this[0], st(e)) : st.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length: -1
        },
        add: function(e, t) {
            var n = "string" == typeof e ? st(e, t) : st.makeArray(e && e.nodeType ? [e] : e),
            r = st.merge(this.get(), n);
            return this.pushStack(st.unique(r))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject: this.prevObject.filter(e))
        }
    }),
    st.fn.andSelf = st.fn.addBack,
    st.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t: null
        },
        parents: function(e) {
            return st.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return st.dir(e, "parentNode", n)
        },
        next: function(e) {
            return c(e, "nextSibling")
        },
        prev: function(e) {
            return c(e, "previousSibling")
        },
        nextAll: function(e) {
            return st.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return st.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return st.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return st.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return st.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return st.sibling(e.firstChild)
        },
        contents: function(e) {
            return st.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document: st.merge([], e.childNodes)
        }
    },
    function(e, t) {
        st.fn[e] = function(n, r) {
            var i = st.map(this, t, n);
            return Pt.test(e) || (r = n),
            r && "string" == typeof r && (i = st.filter(r, i)),
            i = this.length > 1 && !It[e] ? st.unique(i) : i,
            this.length > 1 && Rt.test(e) && (i = i.reverse()),
            this.pushStack(i)
        }
    }),
    st.extend({
        filter: function(e, t, n) {
            return n && (e = ":not(" + e + ")"),
            1 === t.length ? st.find.matchesSelector(t[0], e) ? [t[0]] : [] : st.find.matches(e, t)
        },
        dir: function(e, n, r) {
            for (var i = [], o = e[n]; o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !st(o).is(r));) 1 === o.nodeType && i.push(o),
            o = o[n];
            return i
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    });
    var zt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    Xt = / jQuery\d+="(?:null|\d+)"/g,
    Ut = RegExp("<(?:" + zt + ")[\\s/>]", "i"),
    Vt = /^\s+/,
    Yt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    Jt = /<([\w:]+)/,
    Gt = /<tbody/i,
    Qt = /<|&#?\w+;/,
    Kt = /<(?:script|style|link)/i,
    Zt = /^(?:checkbox|radio)$/i,
    en = /checked\s*(?:[^=]|=\s*.checked.)/i,
    tn = /^$|\/(?:java|ecma)script/i,
    nn = /^true\/(.*)/,
    rn = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    on = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: st.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    },
    an = p(V),
    sn = an.appendChild(V.createElement("div"));
    on.optgroup = on.option,
    on.tbody = on.tfoot = on.colgroup = on.caption = on.thead,
    on.th = on.td,
    st.fn.extend({
        text: function(e) {
            return st.access(this,
            function(e) {
                return e === t ? st.text(this) : this.empty().append((this[0] && this[0].ownerDocument || V).createTextNode(e))
            },
            null, e, arguments.length)
        },
        wrapAll: function(e) {
            if (st.isFunction(e)) return this.each(function(t) {
                st(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = st(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]),
                t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return st.isFunction(e) ? this.each(function(t) {
                st(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = st(this),
                n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = st.isFunction(e);
            return this.each(function(n) {
                st(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                st.nodeName(this, "body") || st(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function() {
            return this.domManip(arguments, !0,
            function(e) { (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.appendChild(e)
            })
        },
        prepend: function() {
            return this.domManip(arguments, !0,
            function(e) { (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.insertBefore(e, this.firstChild)
            })
        },
        before: function() {
            return this.domManip(arguments, !1,
            function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, !1,
            function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var n, r = 0; null != (n = this[r]); r++)(!e || st.filter(e, [n]).length > 0) && (t || 1 !== n.nodeType || st.cleanData(b(n)), n.parentNode && (t && st.contains(n.ownerDocument, n) && m(b(n, "script")), n.parentNode.removeChild(n)));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && st.cleanData(b(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && st.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e,
            t = null == t ? e: t,
            this.map(function() {
                return st.clone(this, e, t)
            })
        },
        html: function(e) {
            return st.access(this,
            function(e) {
                var n = this[0] || {},
                r = 0,
                i = this.length;
                if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(Xt, "") : t;
                if (! ("string" != typeof e || Kt.test(e) || !st.support.htmlSerialize && Ut.test(e) || !st.support.leadingWhitespace && Vt.test(e) || on[(Jt.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(Yt, "<$1></$2>");
                    try {
                        for (; i > r; r++) n = this[r] || {},
                        1 === n.nodeType && (st.cleanData(b(n, !1)), n.innerHTML = e);
                        n = 0
                    } catch(o) {}
                }
                n && this.empty().append(e)
            },
            null, e, arguments.length)
        },
        replaceWith: function(e) {
            var t = st.isFunction(e);
            return t || "string" == typeof e || (e = st(e).not(this).detach()),
            this.domManip([e], !0,
            function(e) {
                var t = this.nextSibling,
                n = this.parentNode; (n && 1 === this.nodeType || 11 === this.nodeType) && (st(this).remove(), t ? t.parentNode.insertBefore(e, t) : n.appendChild(e))
            })
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, n, r) {
            e = et.apply([], e);
            var i, o, a, s, u, l, c = 0,
            f = this.length,
            p = this,
            m = f - 1,
            y = e[0],
            v = st.isFunction(y);
            if (v || !(1 >= f || "string" != typeof y || st.support.checkClone) && en.test(y)) return this.each(function(i) {
                var o = p.eq(i);
                v && (e[0] = y.call(this, i, n ? o.html() : t)),
                o.domManip(e, n, r)
            });
            if (f && (i = st.buildFragment(e, this[0].ownerDocument, !1, this), o = i.firstChild, 1 === i.childNodes.length && (i = o), o)) {
                for (n = n && st.nodeName(o, "tr"), a = st.map(b(i, "script"), h), s = a.length; f > c; c++) u = i,
                c !== m && (u = st.clone(u, !0, !0), s && st.merge(a, b(u, "script"))),
                r.call(n && st.nodeName(this[c], "table") ? d(this[c], "tbody") : this[c], u, c);
                if (s) for (l = a[a.length - 1].ownerDocument, st.map(a, g), c = 0; s > c; c++) u = a[c],
                tn.test(u.type || "") && !st._data(u, "globalEval") && st.contains(l, u) && (u.src ? st.ajax({
                    url: u.src,
                    type: "GET",
                    dataType: "script",
                    async: !1,
                    global: !1,
                    "throws": !0
                }) : st.globalEval((u.text || u.textContent || u.innerHTML || "").replace(rn, "")));
                i = o = null
            }
            return this
        }
    }),
    st.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    },
    function(e, t) {
        st.fn[e] = function(e) {
            for (var n, r = 0,
            i = [], o = st(e), a = o.length - 1; a >= r; r++) n = r === a ? this: this.clone(!0),
            st(o[r])[t](n),
            tt.apply(i, n.get());
            return this.pushStack(i)
        }
    }),
    st.extend({
        clone: function(e, t, n) {
            var r, i, o, a, s, u = st.contains(e.ownerDocument, e);
            if (st.support.html5Clone || st.isXMLDoc(e) || !Ut.test("<" + e.nodeName + ">") ? s = e.cloneNode(!0) : (sn.innerHTML = e.outerHTML, sn.removeChild(s = sn.firstChild)), !(st.support.noCloneEvent && st.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || st.isXMLDoc(e))) for (r = b(s), i = b(e), a = 0; null != (o = i[a]); ++a) r[a] && v(o, r[a]);
            if (t) if (n) for (i = i || b(e), r = r || b(s), a = 0; null != (o = i[a]); a++) y(o, r[a]);
            else y(e, s);
            return r = b(s, "script"),
            r.length > 0 && m(r, !u && b(e, "script")),
            r = i = o = null,
            s
        },
        buildFragment: function(e, t, n, r) {
            for (var i, o, a, s, u, l, c, f = e.length,
            d = p(t), h = [], g = 0; f > g; g++) if (o = e[g], o || 0 === o) if ("object" === st.type(o)) st.merge(h, o.nodeType ? [o] : o);
            else if (Qt.test(o)) {
                for (s = s || d.appendChild(t.createElement("div")), a = (Jt.exec(o) || ["", ""])[1].toLowerCase(), u = on[a] || on._default, s.innerHTML = u[1] + o.replace(Yt, "<$1></$2>") + u[2], c = u[0]; c--;) s = s.lastChild;
                if (!st.support.leadingWhitespace && Vt.test(o) && h.push(t.createTextNode(Vt.exec(o)[0])), !st.support.tbody) for (o = "table" !== a || Gt.test(o) ? "<table>" !== u[1] || Gt.test(o) ? 0 : s: s.firstChild, c = o && o.childNodes.length; c--;) st.nodeName(l = o.childNodes[c], "tbody") && !l.childNodes.length && o.removeChild(l);
                for (st.merge(h, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                s = d.lastChild
            } else h.push(t.createTextNode(o));
            for (s && d.removeChild(s), st.support.appendChecked || st.grep(b(h, "input"), x), g = 0; o = h[g++];) if ((!r || -1 === st.inArray(o, r)) && (i = st.contains(o.ownerDocument, o), s = b(d.appendChild(o), "script"), i && m(s), n)) for (c = 0; o = s[c++];) tn.test(o.type || "") && n.push(o);
            return s = null,
            d
        },
        cleanData: function(e, n) {
            for (var r, i, o, a, s = 0,
            u = st.expando,
            l = st.cache,
            c = st.support.deleteExpando,
            f = st.event.special; null != (o = e[s]); s++) if ((n || st.acceptData(o)) && (i = o[u], r = i && l[i])) {
                if (r.events) for (a in r.events) f[a] ? st.event.remove(o, a) : st.removeEvent(o, a, r.handle);
                l[i] && (delete l[i], c ? delete o[u] : o.removeAttribute !== t ? o.removeAttribute(u) : o[u] = null, K.push(i))
            }
        }
    });
    var un, ln, cn, fn = /alpha\([^)]*\)/i,
    pn = /opacity\s*=\s*([^)]*)/,
    dn = /^(top|right|bottom|left)$/,
    hn = /^(none|table(?!-c[ea]).+)/,
    gn = /^margin/,
    mn = RegExp("^(" + ut + ")(.*)$", "i"),
    yn = RegExp("^(" + ut + ")(?!px)[a-z%]+$", "i"),
    vn = RegExp("^([+-])=(" + ut + ")", "i"),
    bn = {
        BODY: "block"
    },
    xn = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    },
    Tn = {
        letterSpacing: 0,
        fontWeight: 400
    },
    wn = ["Top", "Right", "Bottom", "Left"],
    Nn = ["Webkit", "O", "Moz", "ms"];
    st.fn.extend({
        css: function(e, n) {
            return st.access(this,
            function(e, n, r) {
                var i, o, a = {},
                s = 0;
                if (st.isArray(n)) {
                    for (i = ln(e), o = n.length; o > s; s++) a[n[s]] = st.css(e, n[s], !1, i);
                    return a
                }
                return r !== t ? st.style(e, n, r) : st.css(e, n)
            },
            e, n, arguments.length > 1)
        },
        show: function() {
            return N(this, !0)
        },
        hide: function() {
            return N(this)
        },
        toggle: function(e) {
            var t = "boolean" == typeof e;
            return this.each(function() { (t ? e: w(this)) ? st(this).show() : st(this).hide()
            })
        }
    }),
    st.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = un(e, "opacity");
                        return "" === n ? "1": n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": st.support.cssFloat ? "cssFloat": "styleFloat"
        },
        style: function(e, n, r, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, a, s, u = st.camelCase(n),
                l = e.style;
                if (n = st.cssProps[u] || (st.cssProps[u] = T(l, u)), s = st.cssHooks[n] || st.cssHooks[u], r === t) return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o: l[n];
                if (a = typeof r, "string" === a && (o = vn.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(st.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || st.cssNumber[u] || (r += "px"), st.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (l[n] = "inherit"), s && "set" in s && (r = s.set(e, r, i)) === t))) try {
                    l[n] = r
                } catch(c) {}
            }
        },
        css: function(e, n, r, i) {
            var o, a, s, u = st.camelCase(n);
            return n = st.cssProps[u] || (st.cssProps[u] = T(e.style, u)),
            s = st.cssHooks[n] || st.cssHooks[u],
            s && "get" in s && (o = s.get(e, !0, r)),
            o === t && (o = un(e, n, i)),
            "normal" === o && n in Tn && (o = Tn[n]),
            r ? (a = parseFloat(o), r === !0 || st.isNumeric(a) ? a || 0 : o) : o
        },
        swap: function(e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o],
            e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = a[o];
            return i
        }
    }),
    e.getComputedStyle ? (ln = function(t) {
        return e.getComputedStyle(t, null)
    },
    un = function(e, n, r) {
        var i, o, a, s = r || ln(e),
        u = s ? s.getPropertyValue(n) || s[n] : t,
        l = e.style;
        return s && ("" !== u || st.contains(e.ownerDocument, e) || (u = st.style(e, n)), yn.test(u) && gn.test(n) && (i = l.width, o = l.minWidth, a = l.maxWidth, l.minWidth = l.maxWidth = l.width = u, u = s.width, l.width = i, l.minWidth = o, l.maxWidth = a)),
        u
    }) : V.documentElement.currentStyle && (ln = function(e) {
        return e.currentStyle
    },
    un = function(e, n, r) {
        var i, o, a, s = r || ln(e),
        u = s ? s[n] : t,
        l = e.style;
        return null == u && l && l[n] && (u = l[n]),
        yn.test(u) && !dn.test(n) && (i = l.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), l.left = "fontSize" === n ? "1em": u, u = l.pixelLeft + "px", l.left = i, a && (o.left = a)),
        "" === u ? "auto": u
    }),
    st.each(["height", "width"],
    function(e, n) {
        st.cssHooks[n] = {
            get: function(e, r, i) {
                return r ? 0 === e.offsetWidth && hn.test(st.css(e, "display")) ? st.swap(e, xn,
                function() {
                    return E(e, n, i)
                }) : E(e, n, i) : t
            },
            set: function(e, t, r) {
                var i = r && ln(e);
                return C(e, t, r ? k(e, n, r, st.support.boxSizing && "border-box" === st.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }),
    st.support.opacity || (st.cssHooks.opacity = {
        get: function(e, t) {
            return pn.test((t && e.currentStyle ? e.currentStyle.filter: e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "": t ? "1": ""
        },
        set: function(e, t) {
            var n = e.style,
            r = e.currentStyle,
            i = st.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")": "",
            o = r && r.filter || n.filter || "";
            n.zoom = 1,
            (t >= 1 || "" === t) && "" === st.trim(o.replace(fn, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = fn.test(o) ? o.replace(fn, i) : o + " " + i)
        }
    }),
    st(function() {
        st.support.reliableMarginRight || (st.cssHooks.marginRight = {
            get: function(e, n) {
                return n ? st.swap(e, {
                    display: "inline-block"
                },
                un, [e, "marginRight"]) : t
            }
        }),
        !st.support.pixelPosition && st.fn.position && st.each(["top", "left"],
        function(e, n) {
            st.cssHooks[n] = {
                get: function(e, r) {
                    return r ? (r = un(e, n), yn.test(r) ? st(e).position()[n] + "px": r) : t
                }
            }
        })
    }),
    st.expr && st.expr.filters && (st.expr.filters.hidden = function(e) {
        return 0 === e.offsetWidth && 0 === e.offsetHeight || !st.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || st.css(e, "display"))
    },
    st.expr.filters.visible = function(e) {
        return ! st.expr.filters.hidden(e)
    }),
    st.each({
        margin: "",
        padding: "",
        border: "Width"
    },
    function(e, t) {
        st.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0,
                i = {},
                o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + wn[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        },
        gn.test(e) || (st.cssHooks[e + t].set = C)
    });
    var Cn = /%20/g,
    kn = /\[\]$/,
    En = /\r?\n/g,
    Sn = /^(?:submit|button|image|reset)$/i,
    An = /^(?:input|select|textarea|keygen)/i;
    st.fn.extend({
        serialize: function() {
            return st.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = st.prop(this, "elements");
                return e ? st.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !st(this).is(":disabled") && An.test(this.nodeName) && !Sn.test(e) && (this.checked || !Zt.test(e))
            }).map(function(e, t) {
                var n = st(this).val();
                return null == n ? null: st.isArray(n) ? st.map(n,
                function(e) {
                    return {
                        name: t.name,
                        value: e.replace(En, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(En, "\r\n")
                }
            }).get()
        }
    }),
    st.param = function(e, n) {
        var r, i = [],
        o = function(e, t) {
            t = st.isFunction(t) ? t() : null == t ? "": t,
            i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (n === t && (n = st.ajaxSettings && st.ajaxSettings.traditional), st.isArray(e) || e.jquery && !st.isPlainObject(e)) st.each(e,
        function() {
            o(this.name, this.value)
        });
        else for (r in e) j(r, e[r], n, o);
        return i.join("&").replace(Cn, "+")
    };
    var jn, Dn, Ln = st.now(),
    Hn = /\?/,
    Mn = /#.*$/,
    qn = /([?&])_=[^&]*/,
    _n = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    Fn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    On = /^(?:GET|HEAD)$/,
    Bn = /^\/\//,
    Pn = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
    Rn = st.fn.load,
    Wn = {},
    $n = {},
    In = "*/".concat("*");
    try {
        Dn = Y.href
    } catch(zn) {
        Dn = V.createElement("a"),
        Dn.href = "",
        Dn = Dn.href
    }
    jn = Pn.exec(Dn.toLowerCase()) || [],
    st.fn.load = function(e, n, r) {
        if ("string" != typeof e && Rn) return Rn.apply(this, arguments);
        var i, o, a, s = this,
        u = e.indexOf(" ");
        return u >= 0 && (i = e.slice(u, e.length), e = e.slice(0, u)),
        st.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (o = "POST"),
        s.length > 0 && st.ajax({
            url: e,
            type: o,
            dataType: "html",
            data: n
        }).done(function(e) {
            a = arguments,
            s.html(i ? st("<div>").append(st.parseHTML(e)).find(i) : e)
        }).complete(r &&
        function(e, t) {
            s.each(r, a || [e.responseText, t, e])
        }),
        this
    },
    st.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"],
    function(e, t) {
        st.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    st.each(["get", "post"],
    function(e, n) {
        st[n] = function(e, r, i, o) {
            return st.isFunction(r) && (o = o || i, i = r, r = t),
            st.ajax({
                url: e,
                type: n,
                dataType: o,
                data: r,
                success: i
            })
        }
    }),
    st.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Dn,
            type: "GET",
            isLocal: Fn.test(jn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": In,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": e.String,
                "text html": !0,
                "text json": st.parseJSON,
                "text xml": st.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? H(H(e, st.ajaxSettings), t) : H(st.ajaxSettings, e)
        },
        ajaxPrefilter: D(Wn),
        ajaxTransport: D($n),
        ajax: function(e, n) {
            function r(e, n, r, s) {
                var l, f, v, b, T, N = n;
                2 !== x && (x = 2, u && clearTimeout(u), i = t, a = s || "", w.readyState = e > 0 ? 4 : 0, r && (b = M(p, w, r)), e >= 200 && 300 > e || 304 === e ? (p.ifModified && (T = w.getResponseHeader("Last-Modified"), T && (st.lastModified[o] = T), T = w.getResponseHeader("etag"), T && (st.etag[o] = T)), 304 === e ? (l = !0, N = "notmodified") : (l = q(p, b), N = l.state, f = l.data, v = l.error, l = !v)) : (v = N, (e || !N) && (N = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (n || N) + "", l ? g.resolveWith(d, [f, N, w]) : g.rejectWith(d, [w, N, v]), w.statusCode(y), y = t, c && h.trigger(l ? "ajaxSuccess": "ajaxError", [w, p, l ? f: v]), m.fireWith(d, [w, N]), c && (h.trigger("ajaxComplete", [w, p]), --st.active || st.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (n = e, e = t),
            n = n || {};
            var i, o, a, s, u, l, c, f, p = st.ajaxSetup({},
            n),
            d = p.context || p,
            h = p.context && (d.nodeType || d.jquery) ? st(d) : st.event,
            g = st.Deferred(),
            m = st.Callbacks("once memory"),
            y = p.statusCode || {},
            v = {},
            b = {},
            x = 0,
            T = "canceled",
            w = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (2 === x) {
                        if (!s) for (s = {}; t = _n.exec(a);) s[t[1].toLowerCase()] = t[2];
                        t = s[e.toLowerCase()]
                    }
                    return null == t ? null: t
                },
                getAllResponseHeaders: function() {
                    return 2 === x ? a: null
                },
                setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    return x || (e = b[n] = b[n] || e, v[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return x || (p.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e) if (2 > x) for (t in e) y[t] = [y[t], e[t]];
                    else w.always(e[w.status]);
                    return this
                },
                abort: function(e) {
                    var t = e || T;
                    return i && i.abort(t),
                    r(0, t),
                    this
                }
            };
            if (g.promise(w).complete = m.add, w.success = w.done, w.error = w.fail, p.url = ((e || p.url || Dn) + "").replace(Mn, "").replace(Bn, jn[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = st.trim(p.dataType || "*").toLowerCase().match(lt) || [""], null == p.crossDomain && (l = Pn.exec(p.url.toLowerCase()), p.crossDomain = !(!l || l[1] === jn[1] && l[2] === jn[2] && (l[3] || ("http:" === l[1] ? 80 : 443)) == (jn[3] || ("http:" === jn[1] ? 80 : 443)))), p.data && p.processData && "string" != typeof p.data && (p.data = st.param(p.data, p.traditional)), L(Wn, p, n, w), 2 === x) return w;
            c = p.global,
            c && 0 === st.active++&&st.event.trigger("ajaxStart"),
            p.type = p.type.toUpperCase(),
            p.hasContent = !On.test(p.type),
            o = p.url,
            p.hasContent || (p.data && (o = p.url += (Hn.test(o) ? "&": "?") + p.data, delete p.data), p.cache === !1 && (p.url = qn.test(o) ? o.replace(qn, "$1_=" + Ln++) : o + (Hn.test(o) ? "&": "?") + "_=" + Ln++)),
            p.ifModified && (st.lastModified[o] && w.setRequestHeader("If-Modified-Since", st.lastModified[o]), st.etag[o] && w.setRequestHeader("If-None-Match", st.etag[o])),
            (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && w.setRequestHeader("Content-Type", p.contentType),
            w.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + In + "; q=0.01": "") : p.accepts["*"]);
            for (f in p.headers) w.setRequestHeader(f, p.headers[f]);
            if (p.beforeSend && (p.beforeSend.call(d, w, p) === !1 || 2 === x)) return w.abort();
            T = "abort";
            for (f in {
                success: 1,
                error: 1,
                complete: 1
            }) w[f](p[f]);
            if (i = L($n, p, n, w)) {
                w.readyState = 1,
                c && h.trigger("ajaxSend", [w, p]),
                p.async && p.timeout > 0 && (u = setTimeout(function() {
                    w.abort("timeout")
                },
                p.timeout));
                try {
                    x = 1,
                    i.send(v, r)
                } catch(N) {
                    if (! (2 > x)) throw N;
                    r( - 1, N)
                }
            } else r( - 1, "No Transport");
            return w
        },
        getScript: function(e, n) {
            return st.get(e, t, n, "script")
        },
        getJSON: function(e, t, n) {
            return st.get(e, t, n, "json")
        }
    }),
    st.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return st.globalEval(e),
                e
            }
        }
    }),
    st.ajaxPrefilter("script",
    function(e) {
        e.cache === t && (e.cache = !1),
        e.crossDomain && (e.type = "GET", e.global = !1)
    }),
    st.ajaxTransport("script",
    function(e) {
        if (e.crossDomain) {
            var n, r = V.head || st("head")[0] || V.documentElement;
            return {
                send: function(t, i) {
                    n = V.createElement("script"),
                    n.async = !0,
                    e.scriptCharset && (n.charset = e.scriptCharset),
                    n.src = e.url,
                    n.onload = n.onreadystatechange = function(e, t) { (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"))
                    },
                    r.insertBefore(n, r.firstChild)
                },
                abort: function() {
                    n && n.onload(t, !0)
                }
            }
        }
    });
    var Xn = [],
    Un = /(=)\?(?=&|$)|\?\?/;
    st.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Xn.pop() || st.expando + "_" + Ln++;
            return this[e] = !0,
            e
        }
    }),
    st.ajaxPrefilter("json jsonp",
    function(n, r, i) {
        var o, a, s, u = n.jsonp !== !1 && (Un.test(n.url) ? "url": "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Un.test(n.data) && "data");
        return u || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = st.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, u ? n[u] = n[u].replace(Un, "$1" + o) : n.jsonp !== !1 && (n.url += (Hn.test(n.url) ? "&": "?") + n.jsonp + "=" + o), n.converters["script json"] = function() {
            return s || st.error(o + " was not called"),
            s[0]
        },
        n.dataTypes[0] = "json", a = e[o], e[o] = function() {
            s = arguments
        },
        i.always(function() {
            e[o] = a,
            n[o] && (n.jsonpCallback = r.jsonpCallback, Xn.push(o)),
            s && st.isFunction(a) && a(s[0]),
            s = a = t
        }), "script") : t
    });
    var Vn, Yn, Jn = 0,
    Gn = e.ActiveXObject &&
    function() {
        var e;
        for (e in Vn) Vn[e](t, !0)
    };
    st.ajaxSettings.xhr = e.ActiveXObject ?
    function() {
        return ! this.isLocal && _() || F()
    }: _,
    Yn = st.ajaxSettings.xhr(),
    st.support.cors = !!Yn && "withCredentials" in Yn,
    Yn = st.support.ajax = !!Yn,
    Yn && st.ajaxTransport(function(n) {
        if (!n.crossDomain || st.support.cors) {
            var r;
            return {
                send: function(i, o) {
                    var a, s, u = n.xhr();
                    if (n.username ? u.open(n.type, n.url, n.async, n.username, n.password) : u.open(n.type, n.url, n.async), n.xhrFields) for (s in n.xhrFields) u[s] = n.xhrFields[s];
                    n.mimeType && u.overrideMimeType && u.overrideMimeType(n.mimeType),
                    n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (s in i) u.setRequestHeader(s, i[s])
                    } catch(l) {}
                    u.send(n.hasContent && n.data || null),
                    r = function(e, i) {
                        var s, l, c, f, p;
                        try {
                            if (r && (i || 4 === u.readyState)) if (r = t, a && (u.onreadystatechange = st.noop, Gn && delete Vn[a]), i) 4 !== u.readyState && u.abort();
                            else {
                                f = {},
                                s = u.status,
                                p = u.responseXML,
                                c = u.getAllResponseHeaders(),
                                p && p.documentElement && (f.xml = p),
                                "string" == typeof u.responseText && (f.text = u.responseText);
                                try {
                                    l = u.statusText
                                } catch(d) {
                                    l = ""
                                }
                                s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = f.text ? 200 : 404
                            }
                        } catch(h) {
                            i || o( - 1, h)
                        }
                        f && o(s, l, f, c)
                    },
                    n.async ? 4 === u.readyState ? setTimeout(r) : (a = ++Jn, Gn && (Vn || (Vn = {},
                    st(e).unload(Gn)), Vn[a] = r), u.onreadystatechange = r) : r()
                },
                abort: function() {
                    r && r(t, !0)
                }
            }
        }
    });
    var Qn, Kn, Zn = /^(?:toggle|show|hide)$/,
    er = RegExp("^(?:([+-])=|)(" + ut + ")([a-z%]*)$", "i"),
    tr = /queueHooks$/,
    nr = [W],
    rr = {
        "*": [function(e, t) {
            var n, r, i = this.createTween(e, t),
            o = er.exec(t),
            a = i.cur(),
            s = +a || 0,
            u = 1,
            l = 20;
            if (o) {
                if (n = +o[2], r = o[3] || (st.cssNumber[e] ? "": "px"), "px" !== r && s) {
                    s = st.css(i.elem, e, !0) || n || 1;
                    do u = u || ".5",
                    s /= u,
                    st.style(i.elem, e, s + r);
                    while (u !== (u = i.cur() / a) && 1 !== u && --l)
                }
                i.unit = r,
                i.start = s,
                i.end = o[1] ? s + (o[1] + 1) * n: n
            }
            return i
        }]
    };
    st.Animation = st.extend(P, {
        tweener: function(e, t) {
            st.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            for (var n, r = 0,
            i = e.length; i > r; r++) n = e[r],
            rr[n] = rr[n] || [],
            rr[n].unshift(t)
        },
        prefilter: function(e, t) {
            t ? nr.unshift(e) : nr.push(e)
        }
    }),
    st.Tween = $,
    $.prototype = {
        constructor: $,
        init: function(e, t, n, r, i, o) {
            this.elem = e,
            this.prop = n,
            this.easing = i || "swing",
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = o || (st.cssNumber[n] ? "": "px")
        },
        cur: function() {
            var e = $.propHooks[this.prop];
            return e && e.get ? e.get(this) : $.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = $.propHooks[this.prop];
            return this.pos = t = this.options.duration ? st.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : $.propHooks._default.set(this),
            this
        }
    },
    $.prototype.init.prototype = $.prototype,
    $.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = st.css(e.elem, e.prop, "auto"), t && "auto" !== t ? t: 0) : e.elem[e.prop]
            },
            set: function(e) {
                st.fx.step[e.prop] ? st.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[st.cssProps[e.prop]] || st.cssHooks[e.prop]) ? st.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    },
    $.propHooks.scrollTop = $.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    st.each(["toggle", "show", "hide"],
    function(e, t) {
        var n = st.fn[t];
        st.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(I(t, !0), e, r, i)
        }
    }),
    st.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(w).css("opacity", 0).show().end().animate({
                opacity: t
            },
            e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = st.isEmptyObject(e),
            o = st.speed(t, n, r),
            a = function() {
                var t = P(this, st.extend({},
                e), o);
                a.finish = function() {
                    t.stop(!0)
                },
                (i || st._data(this, "finish")) && t.stop(!0)
            };
            return a.finish = a,
            i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(e, n, r) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop,
                t(r)
            };
            return "string" != typeof e && (r = n, n = e, e = t),
            n && e !== !1 && this.queue(e || "fx", []),
            this.each(function() {
                var t = !0,
                n = null != e && e + "queueHooks",
                o = st.timers,
                a = st._data(this);
                if (n) a[n] && a[n].stop && i(a[n]);
                else for (n in a) a[n] && a[n].stop && tr.test(n) && i(a[n]);
                for (n = o.length; n--;) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1)); (t || !r) && st.dequeue(this, e)
            })
        },
        finish: function(e) {
            return e !== !1 && (e = e || "fx"),
            this.each(function() {
                var t, n = st._data(this),
                r = n[e + "queue"],
                i = n[e + "queueHooks"],
                o = st.timers,
                a = r ? r.length: 0;
                for (n.finish = !0, st.queue(this, e, []), i && i.cur && i.cur.finish && i.cur.finish.call(this), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }),
    st.each({
        slideDown: I("show"),
        slideUp: I("hide"),
        slideToggle: I("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    },
    function(e, t) {
        st.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }),
    st.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? st.extend({},
        e) : {
            complete: n || !n && t || st.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !st.isFunction(t) && t
        };
        return r.duration = st.fx.off ? 0 : "number" == typeof r.duration ? r.duration: r.duration in st.fx.speeds ? st.fx.speeds[r.duration] : st.fx.speeds._default,
        (null == r.queue || r.queue === !0) && (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            st.isFunction(r.old) && r.old.call(this),
            r.queue && st.dequeue(this, r.queue)
        },
        r
    },
    st.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return.5 - Math.cos(e * Math.PI) / 2
        }
    },
    st.timers = [],
    st.fx = $.prototype.init,
    st.fx.tick = function() {
        var e, n = st.timers,
        r = 0;
        for (Qn = st.now(); n.length > r; r++) e = n[r],
        e() || n[r] !== e || n.splice(r--, 1);
        n.length || st.fx.stop(),
        Qn = t
    },
    st.fx.timer = function(e) {
        e() && st.timers.push(e) && st.fx.start()
    },
    st.fx.interval = 13,
    st.fx.start = function() {
        Kn || (Kn = setInterval(st.fx.tick, st.fx.interval))
    },
    st.fx.stop = function() {
        clearInterval(Kn),
        Kn = null
    },
    st.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    st.fx.step = {},
    st.expr && st.expr.filters && (st.expr.filters.animated = function(e) {
        return st.grep(st.timers,
        function(t) {
            return e === t.elem
        }).length
    }),
    st.fn.offset = function(e) {
        if (arguments.length) return e === t ? this: this.each(function(t) {
            st.offset.setOffset(this, e, t)
        });
        var n, r, i = {
            top: 0,
            left: 0
        },
        o = this[0],
        a = o && o.ownerDocument;
        if (a) return n = a.documentElement,
        st.contains(n, o) ? (o.getBoundingClientRect !== t && (i = o.getBoundingClientRect()), r = z(a), {
            top: i.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
            left: i.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
        }) : i
    },
    st.offset = {
        setOffset: function(e, t, n) {
            var r = st.css(e, "position");
            "static" === r && (e.style.position = "relative");
            var i, o, a = st(e),
            s = a.offset(),
            u = st.css(e, "top"),
            l = st.css(e, "left"),
            c = ("absolute" === r || "fixed" === r) && st.inArray("auto", [u, l]) > -1,
            f = {},
            p = {};
            c ? (p = a.position(), i = p.top, o = p.left) : (i = parseFloat(u) || 0, o = parseFloat(l) || 0),
            st.isFunction(t) && (t = t.call(e, n, s)),
            null != t.top && (f.top = t.top - s.top + i),
            null != t.left && (f.left = t.left - s.left + o),
            "using" in t ? t.using.call(e, f) : a.css(f)
        }
    },
    st.fn.extend({
        position: function() {
            if (this[0]) {
                var e, t, n = {
                    top: 0,
                    left: 0
                },
                r = this[0];
                return "fixed" === st.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), st.nodeName(e[0], "html") || (n = e.offset()), n.top += st.css(e[0], "borderTopWidth", !0), n.left += st.css(e[0], "borderLeftWidth", !0)),
                {
                    top: t.top - n.top - st.css(r, "marginTop", !0),
                    left: t.left - n.left - st.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || V.documentElement; e && !st.nodeName(e, "html") && "static" === st.css(e, "position");) e = e.offsetParent;
                return e || V.documentElement
            })
        }
    }),
    st.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    },
    function(e, n) {
        var r = /Y/.test(n);
        st.fn[e] = function(i) {
            return st.access(this,
            function(e, i, o) {
                var a = z(e);
                return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? st(a).scrollLeft() : o, r ? o: st(a).scrollTop()) : e[i] = o, t)
            },
            e, i, arguments.length, null)
        }
    }),
    st.each({
        Height: "height",
        Width: "width"
    },
    function(e, n) {
        st.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        },
        function(r, i) {
            st.fn[i] = function(i, o) {
                var a = arguments.length && (r || "boolean" != typeof i),
                s = r || (i === !0 || o === !0 ? "margin": "border");
                return st.access(this,
                function(n, r, i) {
                    var o;
                    return st.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? st.css(n, r, s) : st.style(n, r, i, s)
                },
                n, a ? i: t, a, null)
            }
        })
    }),
    e.jQuery = e.$ = st,
    "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [],
    function() {
        return st
    })
})(window);
/*!
 * Bootstrap v3.2.0 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); +
function(a) {
    "use strict";
    function b() {
        var a = document.createElement("bootstrap"),
        b = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var c in b) if (void 0 !== a.style[c]) return {
            end: b[c]
        };
        return ! 1
    }
    a.fn.emulateTransitionEnd = function(b) {
        var c = !1,
        d = this;
        a(this).one("bsTransitionEnd",
        function() {
            c = !0
        });
        var e = function() {
            c || a(d).trigger(a.support.transition.end)
        };
        return setTimeout(e, b),
        this
    },
    a(function() {
        a.support.transition = b(),
        a.support.transition && (a.event.special.bsTransitionEnd = {
            bindType: a.support.transition.end,
            delegateType: a.support.transition.end,
            handle: function(b) {
                return a(b.target).is(this) ? b.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
} (jQuery),
+
function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var c = a(this),
            e = c.data("bs.alert");
            e || c.data("bs.alert", e = new d(this)),
            "string" == typeof b && e[b].call(c)
        })
    }
    var c = '[data-dismiss="alert"]',
    d = function(b) {
        a(b).on("click", c, this.close)
    };
    d.VERSION = "3.2.0",
    d.prototype.close = function(b) {
        function c() {
            f.detach().trigger("closed.bs.alert").remove()
        }
        var d = a(this),
        e = d.attr("data-target");
        e || (e = d.attr("href"), e = e && e.replace(/.*(?=#[^\s]*$)/, ""));
        var f = a(e);
        b && b.preventDefault(),
        f.length || (f = d.hasClass("alert") ? d: d.parent()),
        f.trigger(b = a.Event("close.bs.alert")),
        b.isDefaultPrevented() || (f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", c).emulateTransitionEnd(150) : c())
    };
    var e = a.fn.alert;
    a.fn.alert = b,
    a.fn.alert.Constructor = d,
    a.fn.alert.noConflict = function() {
        return a.fn.alert = e,
        this
    },
    a(document).on("click.bs.alert.data-api", c, d.prototype.close)
} (jQuery),
+
function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var d = a(this),
            e = d.data("bs.button"),
            f = "object" == typeof b && b;
            e || d.data("bs.button", e = new c(this, f)),
            "toggle" == b ? e.toggle() : b && e.setState(b)
        })
    }
    var c = function(b, d) {
        this.$element = a(b),
        this.options = a.extend({},
        c.DEFAULTS, d),
        this.isLoading = !1
    };
    c.VERSION = "3.2.0",
    c.DEFAULTS = {
        loadingText: "loading..."
    },
    c.prototype.setState = function(b) {
        var c = "disabled",
        d = this.$element,
        e = d.is("input") ? "val": "html",
        f = d.data();
        b += "Text",
        null == f.resetText && d.data("resetText", d[e]()),
        d[e](null == f[b] ? this.options[b] : f[b]),
        setTimeout(a.proxy(function() {
            "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c))
        },
        this), 0)
    },
    c.prototype.toggle = function() {
        var a = !0,
        b = this.$element.closest('[data-toggle="buttons"]');
        if (b.length) {
            var c = this.$element.find("input");
            "radio" == c.prop("type") && (c.prop("checked") && this.$element.hasClass("active") ? a = !1 : b.find(".active").removeClass("active")),
            a && c.prop("checked", !this.$element.hasClass("active")).trigger("change")
        }
        a && this.$element.toggleClass("active")
    };
    var d = a.fn.button;
    a.fn.button = b,
    a.fn.button.Constructor = c,
    a.fn.button.noConflict = function() {
        return a.fn.button = d,
        this
    },
    a(document).on("click.bs.button.data-api", '[data-toggle^="button"]',
    function(c) {
        var d = a(c.target);
        d.hasClass("btn") || (d = d.closest(".btn")),
        b.call(d, "toggle"),
        c.preventDefault()
    })
} (jQuery),
+
function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var d = a(this),
            e = d.data("bs.carousel"),
            f = a.extend({},
            c.DEFAULTS, d.data(), "object" == typeof b && b),
            g = "string" == typeof b ? b: f.slide;
            e || d.data("bs.carousel", e = new c(this, f)),
            "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle()
        })
    }
    var c = function(b, c) {
        this.$element = a(b).on("keydown.bs.carousel", a.proxy(this.keydown, this)),
        this.$indicators = this.$element.find(".carousel-indicators"),
        this.options = c,
        this.paused = this.sliding = this.interval = this.$active = this.$items = null,
        "hover" == this.options.pause && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this))
    };
    c.VERSION = "3.2.0",
    c.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0
    },
    c.prototype.keydown = function(a) {
        switch (a.which) {
        case 37:
            this.prev();
            break;
        case 39:
            this.next();
            break;
        default:
            return
        }
        a.preventDefault()
    },
    c.prototype.cycle = function(b) {
        return b || (this.paused = !1),
        this.interval && clearInterval(this.interval),
        this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)),
        this
    },
    c.prototype.getItemIndex = function(a) {
        return this.$items = a.parent().children(".item"),
        this.$items.index(a || this.$active)
    },
    c.prototype.to = function(b) {
        var c = this,
        d = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return b > this.$items.length - 1 || 0 > b ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel",
        function() {
            c.to(b)
        }) : d == b ? this.pause().cycle() : this.slide(b > d ? "next": "prev", a(this.$items[b]))
    },
    c.prototype.pause = function(b) {
        return b || (this.paused = !0),
        this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)),
        this.interval = clearInterval(this.interval),
        this
    },
    c.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    },
    c.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    },
    c.prototype.slide = function(b, c) {
        var d = this.$element.find(".item.active"),
        e = c || d[b](),
        f = this.interval,
        g = "next" == b ? "left": "right",
        h = "next" == b ? "first": "last",
        i = this;
        if (!e.length) {
            if (!this.options.wrap) return;
            e = this.$element.find(".item")[h]()
        }
        if (e.hasClass("active")) return this.sliding = !1;
        var j = e[0],
        k = a.Event("slide.bs.carousel", {
            relatedTarget: j,
            direction: g
        });
        if (this.$element.trigger(k), !k.isDefaultPrevented()) {
            if (this.sliding = !0, f && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var l = a(this.$indicators.children()[this.getItemIndex(e)]);
                l && l.addClass("active")
            }
            var m = a.Event("slid.bs.carousel", {
                relatedTarget: j,
                direction: g
            });
            return a.support.transition && this.$element.hasClass("slide") ? (e.addClass(b), e[0].offsetWidth, d.addClass(g), e.addClass(g), d.one("bsTransitionEnd",
            function() {
                e.removeClass([b, g].join(" ")).addClass("active"),
                d.removeClass(["active", g].join(" ")),
                i.sliding = !1,
                setTimeout(function() {
                    i.$element.trigger(m)
                },
                0)
            }).emulateTransitionEnd(1e3 * d.css("transition-duration").slice(0, -1))) : (d.removeClass("active"), e.addClass("active"), this.sliding = !1, this.$element.trigger(m)),
            f && this.cycle(),
            this
        }
    };
    var d = a.fn.carousel;
    a.fn.carousel = b,
    a.fn.carousel.Constructor = c,
    a.fn.carousel.noConflict = function() {
        return a.fn.carousel = d,
        this
    },
    a(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]",
    function(c) {
        var d, e = a(this),
        f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));
        if (f.hasClass("carousel")) {
            var g = a.extend({},
            f.data(), e.data()),
            h = e.attr("data-slide-to");
            h && (g.interval = !1),
            b.call(f, g),
            h && f.data("bs.carousel").to(h),
            c.preventDefault()
        }
    }),
    a(window).on("load",
    function() {
        a('[data-ride="carousel"]').each(function() {
            var c = a(this);
            b.call(c, c.data())
        })
    })
} (jQuery),
+
function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var d = a(this),
            e = d.data("bs.collapse"),
            f = a.extend({},
            c.DEFAULTS, d.data(), "object" == typeof b && b); ! e && f.toggle && "show" == b && (b = !b),
            e || d.data("bs.collapse", e = new c(this, f)),
            "string" == typeof b && e[b]()
        })
    }
    var c = function(b, d) {
        this.$element = a(b),
        this.options = a.extend({},
        c.DEFAULTS, d),
        this.transitioning = null,
        this.options.parent && (this.$parent = a(this.options.parent)),
        this.options.toggle && this.toggle()
    };
    c.VERSION = "3.2.0",
    c.DEFAULTS = {
        toggle: !0
    },
    c.prototype.dimension = function() {
        var a = this.$element.hasClass("width");
        return a ? "width": "height"
    },
    c.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var c = a.Event("show.bs.collapse");
            if (this.$element.trigger(c), !c.isDefaultPrevented()) {
                var d = this.$parent && this.$parent.find("> .panel > .in");
                if (d && d.length) {
                    var e = d.data("bs.collapse");
                    if (e && e.transitioning) return;
                    b.call(d, "hide"),
                    e || d.data("bs.collapse", null)
                }
                var f = this.dimension();
                this.$element.removeClass("collapse").addClass("collapsing")[f](0),
                this.transitioning = 1;
                var g = function() {
                    this.$element.removeClass("collapsing").addClass("collapse in")[f](""),
                    this.transitioning = 0,
                    this.$element.trigger("shown.bs.collapse")
                };
                if (!a.support.transition) return g.call(this);
                var h = a.camelCase(["scroll", f].join("-"));
                this.$element.one("bsTransitionEnd", a.proxy(g, this)).emulateTransitionEnd(350)[f](this.$element[0][h])
            }
        }
    },
    c.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var b = a.Event("hide.bs.collapse");
            if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                var c = this.dimension();
                this.$element[c](this.$element[c]())[0].offsetHeight,
                this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),
                this.transitioning = 1;
                var d = function() {
                    this.transitioning = 0,
                    this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
                };
                return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(d, this)).emulateTransitionEnd(350) : d.call(this)
            }
        }
    },
    c.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide": "show"]()
    };
    var d = a.fn.collapse;
    a.fn.collapse = b,
    a.fn.collapse.Constructor = c,
    a.fn.collapse.noConflict = function() {
        return a.fn.collapse = d,
        this
    },
    a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]',
    function(c) {
        var d, e = a(this),
        f = e.attr("data-target") || c.preventDefault() || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""),
        g = a(f),
        h = g.data("bs.collapse"),
        i = h ? "toggle": e.data(),
        j = e.attr("data-parent"),
        k = j && a(j);
        h && h.transitioning || (k && k.find('[data-toggle="collapse"][data-parent="' + j + '"]').not(e).addClass("collapsed"), e[g.hasClass("in") ? "addClass": "removeClass"]("collapsed")),
        b.call(g, i)
    })
} (jQuery),
+
function(a) {
    "use strict";
    function b(b) {
        b && 3 === b.which || (a(e).remove(), a(f).each(function() {
            var d = c(a(this)),
            e = {
                relatedTarget: this
            };
            d.hasClass("open") && (d.trigger(b = a.Event("hide.bs.dropdown", e)), b.isDefaultPrevented() || d.removeClass("open").trigger("hidden.bs.dropdown", e))
        }))
    }
    function c(b) {
        var c = b.attr("data-target");
        c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
        var d = c && a(c);
        return d && d.length ? d: b.parent()
    }
    function d(b) {
        return this.each(function() {
            var c = a(this),
            d = c.data("bs.dropdown");
            d || c.data("bs.dropdown", d = new g(this)),
            "string" == typeof b && d[b].call(c)
        })
    }
    var e = ".dropdown-backdrop",
    f = '[data-toggle="dropdown"]',
    g = function(b) {
        a(b).on("click.bs.dropdown", this.toggle)
    };
    g.VERSION = "3.2.0",
    g.prototype.toggle = function(d) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
            var f = c(e),
            g = f.hasClass("open");
            if (b(), !g) {
                "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click", b);
                var h = {
                    relatedTarget: this
                };
                if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;
                e.trigger("focus"),
                f.toggleClass("open").trigger("shown.bs.dropdown", h)
            }
            return ! 1
        }
    },
    g.prototype.keydown = function(b) {
        if (/(38|40|27)/.test(b.keyCode)) {
            var d = a(this);
            if (b.preventDefault(), b.stopPropagation(), !d.is(".disabled, :disabled")) {
                var e = c(d),
                g = e.hasClass("open");
                if (!g || g && 27 == b.keyCode) return 27 == b.which && e.find(f).trigger("focus"),
                d.trigger("click");
                var h = " li:not(.divider):visible a",
                i = e.find('[role="menu"]' + h + ', [role="listbox"]' + h);
                if (i.length) {
                    var j = i.index(i.filter(":focus"));
                    38 == b.keyCode && j > 0 && j--,
                    40 == b.keyCode && j < i.length - 1 && j++,
                    ~j || (j = 0),
                    i.eq(j).trigger("focus")
                }
            }
        }
    };
    var h = a.fn.dropdown;
    a.fn.dropdown = d,
    a.fn.dropdown.Constructor = g,
    a.fn.dropdown.noConflict = function() {
        return a.fn.dropdown = h,
        this
    },
    a(document).on("click.bs.dropdown.data-api", b).on("click.bs.dropdown.data-api", ".dropdown form",
    function(a) {
        a.stopPropagation()
    }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f + ', [role="menu"], [role="listbox"]', g.prototype.keydown)
} (jQuery),
+
function(a) {
    "use strict";
    function b(b, d) {
        return this.each(function() {
            var e = a(this),
            f = e.data("bs.modal"),
            g = a.extend({},
            c.DEFAULTS, e.data(), "object" == typeof b && b);
            f || e.data("bs.modal", f = new c(this, g)),
            "string" == typeof b ? f[b](d) : g.show && f.show(d)
        })
    }
    var c = function(b, c) {
        this.options = c,
        this.$body = a(document.body),
        this.$element = a(b),
        this.$backdrop = this.isShown = null,
        this.scrollbarWidth = 0,
        this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        },
        this))
    };
    c.VERSION = "3.2.0",
    c.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    },
    c.prototype.toggle = function(a) {
        return this.isShown ? this.hide() : this.show(a)
    },
    c.prototype.show = function(b) {
        var c = this,
        d = a.Event("show.bs.modal", {
            relatedTarget: b
        });
        this.$element.trigger(d),
        this.isShown || d.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.$body.addClass("modal-open"), this.setScrollbar(), this.escape(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.backdrop(function() {
            var d = a.support.transition && c.$element.hasClass("fade");
            c.$element.parent().length || c.$element.appendTo(c.$body),
            c.$element.show().scrollTop(0),
            d && c.$element[0].offsetWidth,
            c.$element.addClass("in").attr("aria-hidden", !1),
            c.enforceFocus();
            var e = a.Event("shown.bs.modal", {
                relatedTarget: b
            });
            d ? c.$element.find(".modal-dialog").one("bsTransitionEnd",
            function() {
                c.$element.trigger("focus").trigger(e)
            }).emulateTransitionEnd(300) : c.$element.trigger("focus").trigger(e)
        }))
    },
    c.prototype.hide = function(b) {
        b && b.preventDefault(),
        b = a.Event("hide.bs.modal"),
        this.$element.trigger(b),
        this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.$body.removeClass("modal-open"), this.resetScrollbar(), this.escape(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal())
    },
    c.prototype.enforceFocus = function() {
        a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(a) {
            this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus")
        },
        this))
    },
    c.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", a.proxy(function(a) {
            27 == a.which && this.hide()
        },
        this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
    },
    c.prototype.hideModal = function() {
        var a = this;
        this.$element.hide(),
        this.backdrop(function() {
            a.$element.trigger("hidden.bs.modal")
        })
    },
    c.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(),
        this.$backdrop = null
    },
    c.prototype.backdrop = function(b) {
        var c = this,
        d = this.$element.hasClass("fade") ? "fade": "";
        if (this.isShown && this.options.backdrop) {
            var e = a.support.transition && d;
            if (this.$backdrop = a('<div class="modal-backdrop ' + d + '" />').appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function(a) {
                a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
            },
            this)), e && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
            e ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(150) : b()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var f = function() {
                c.removeBackdrop(),
                b && b()
            };
            a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", f).emulateTransitionEnd(150) : f()
        } else b && b()
    },
    c.prototype.checkScrollbar = function() {
        document.body.clientWidth >= window.innerWidth || (this.scrollbarWidth = this.scrollbarWidth || this.measureScrollbar())
    },
    c.prototype.setScrollbar = function() {
        var a = parseInt(this.$body.css("padding-right") || 0, 10);
        this.scrollbarWidth && this.$body.css("padding-right", a + this.scrollbarWidth)
    },
    c.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", "")
    },
    c.prototype.measureScrollbar = function() {
        var a = document.createElement("div");
        a.className = "modal-scrollbar-measure",
        this.$body.append(a);
        var b = a.offsetWidth - a.clientWidth;
        return this.$body[0].removeChild(a),
        b
    };
    var d = a.fn.modal;
    a.fn.modal = b,
    a.fn.modal.Constructor = c,
    a.fn.modal.noConflict = function() {
        return a.fn.modal = d,
        this
    },
    a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]',
    function(c) {
        var d = a(this),
        e = d.attr("href"),
        f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
        g = f.data("bs.modal") ? "toggle": a.extend({
            remote: !/#/.test(e) && e
        },
        f.data(), d.data());
        d.is("a") && c.preventDefault(),
        f.one("show.bs.modal",
        function(a) {
            a.isDefaultPrevented() || f.one("hidden.bs.modal",
            function() {
                d.is(":visible") && d.trigger("focus")
            })
        }),
        b.call(f, g, this)
    })
} (jQuery),
+
function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var d = a(this),
            e = d.data("bs.tooltip"),
            f = "object" == typeof b && b; (e || "destroy" != b) && (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]())
        })
    }
    var c = function(a, b) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null,
        this.init("tooltip", a, b)
    };
    c.VERSION = "3.2.0",
    c.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    },
    c.prototype.init = function(b, c, d) {
        this.enabled = !0,
        this.type = b,
        this.$element = a(c),
        this.options = this.getOptions(d),
        this.$viewport = this.options.viewport && a(this.options.viewport.selector || this.options.viewport);
        for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
            var g = e[f];
            if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
            else if ("manual" != g) {
                var h = "hover" == g ? "mouseenter": "focusin",
                i = "hover" == g ? "mouseleave": "focusout";
                this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)),
                this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = a.extend({},
        this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    },
    c.prototype.getDefaults = function() {
        return c.DEFAULTS
    },
    c.prototype.getOptions = function(b) {
        return b = a.extend({},
        this.getDefaults(), this.$element.data(), b),
        b.delay && "number" == typeof b.delay && (b.delay = {
            show: b.delay,
            hide: b.delay
        }),
        b
    },
    c.prototype.getDelegateOptions = function() {
        var b = {},
        c = this.getDefaults();
        return this._options && a.each(this._options,
        function(a, d) {
            c[a] != d && (b[a] = d)
        }),
        b
    },
    c.prototype.enter = function(b) {
        var c = b instanceof this.constructor ? b: a(b.currentTarget).data("bs." + this.type);
        return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)),
        clearTimeout(c.timeout),
        c.hoverState = "in",
        c.options.delay && c.options.delay.show ? void(c.timeout = setTimeout(function() {
            "in" == c.hoverState && c.show()
        },
        c.options.delay.show)) : c.show()
    },
    c.prototype.leave = function(b) {
        var c = b instanceof this.constructor ? b: a(b.currentTarget).data("bs." + this.type);
        return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)),
        clearTimeout(c.timeout),
        c.hoverState = "out",
        c.options.delay && c.options.delay.hide ? void(c.timeout = setTimeout(function() {
            "out" == c.hoverState && c.hide()
        },
        c.options.delay.hide)) : c.hide()
    },
    c.prototype.show = function() {
        var b = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(b);
            var c = a.contains(document.documentElement, this.$element[0]);
            if (b.isDefaultPrevented() || !c) return;
            var d = this,
            e = this.tip(),
            f = this.getUID(this.type);
            this.setContent(),
            e.attr("id", f),
            this.$element.attr("aria-describedby", f),
            this.options.animation && e.addClass("fade");
            var g = "function" == typeof this.options.placement ? this.options.placement.call(this, e[0], this.$element[0]) : this.options.placement,
            h = /\s?auto?\s?/i,
            i = h.test(g);
            i && (g = g.replace(h, "") || "top"),
            e.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(g).data("bs." + this.type, this),
            this.options.container ? e.appendTo(this.options.container) : e.insertAfter(this.$element);
            var j = this.getPosition(),
            k = e[0].offsetWidth,
            l = e[0].offsetHeight;
            if (i) {
                var m = g,
                n = this.$element.parent(),
                o = this.getPosition(n);
                g = "bottom" == g && j.top + j.height + l - o.scroll > o.height ? "top": "top" == g && j.top - o.scroll - l < 0 ? "bottom": "right" == g && j.right + k > o.width ? "left": "left" == g && j.left - k < o.left ? "right": g,
                e.removeClass(m).addClass(g)
            }
            var p = this.getCalculatedOffset(g, j, k, l);
            this.applyPlacement(p, g);
            var q = function() {
                d.$element.trigger("shown.bs." + d.type),
                d.hoverState = null
            };
            a.support.transition && this.$tip.hasClass("fade") ? e.one("bsTransitionEnd", q).emulateTransitionEnd(150) : q()
        }
    },
    c.prototype.applyPlacement = function(b, c) {
        var d = this.tip(),
        e = d[0].offsetWidth,
        f = d[0].offsetHeight,
        g = parseInt(d.css("margin-top"), 10),
        h = parseInt(d.css("margin-left"), 10);
        isNaN(g) && (g = 0),
        isNaN(h) && (h = 0),
        b.top = b.top + g,
        b.left = b.left + h,
        a.offset.setOffset(d[0], a.extend({
            using: function(a) {
                d.css({
                    top: Math.round(a.top),
                    left: Math.round(a.left)
                })
            }
        },
        b), 0),
        d.addClass("in");
        var i = d[0].offsetWidth,
        j = d[0].offsetHeight;
        "top" == c && j != f && (b.top = b.top + f - j);
        var k = this.getViewportAdjustedDelta(c, b, i, j);
        k.left ? b.left += k.left: b.top += k.top;
        var l = k.left ? 2 * k.left - e + i: 2 * k.top - f + j,
        m = k.left ? "left": "top",
        n = k.left ? "offsetWidth": "offsetHeight";
        d.offset(b),
        this.replaceArrow(l, d[0][n], m)
    },
    c.prototype.replaceArrow = function(a, b, c) {
        this.arrow().css(c, a ? 50 * (1 - a / b) + "%": "")
    },
    c.prototype.setContent = function() {
        var a = this.tip(),
        b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html": "text"](b),
        a.removeClass("fade in top bottom left right")
    },
    c.prototype.hide = function() {
        function b() {
            "in" != c.hoverState && d.detach(),
            c.$element.trigger("hidden.bs." + c.type)
        }
        var c = this,
        d = this.tip(),
        e = a.Event("hide.bs." + this.type);
        return this.$element.removeAttr("aria-describedby"),
        this.$element.trigger(e),
        e.isDefaultPrevented() ? void 0 : (d.removeClass("in"), a.support.transition && this.$tip.hasClass("fade") ? d.one("bsTransitionEnd", b).emulateTransitionEnd(150) : b(), this.hoverState = null, this)
    },
    c.prototype.fixTitle = function() {
        var a = this.$element; (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
    },
    c.prototype.hasContent = function() {
        return this.getTitle()
    },
    c.prototype.getPosition = function(b) {
        b = b || this.$element;
        var c = b[0],
        d = "BODY" == c.tagName;
        return a.extend({},
        "function" == typeof c.getBoundingClientRect ? c.getBoundingClientRect() : null, {
            scroll: d ? document.documentElement.scrollTop || document.body.scrollTop: b.scrollTop(),
            width: d ? a(window).width() : b.outerWidth(),
            height: d ? a(window).height() : b.outerHeight()
        },
        d ? {
            top: 0,
            left: 0
        }: b.offset())
    },
    c.prototype.getCalculatedOffset = function(a, b, c, d) {
        return "bottom" == a ? {
            top: b.top + b.height,
            left: b.left + b.width / 2 - c / 2
        }: "top" == a ? {
            top: b.top - d,
            left: b.left + b.width / 2 - c / 2
        }: "left" == a ? {
            top: b.top + b.height / 2 - d / 2,
            left: b.left - c
        }: {
            top: b.top + b.height / 2 - d / 2,
            left: b.left + b.width
        }
    },
    c.prototype.getViewportAdjustedDelta = function(a, b, c, d) {
        var e = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return e;
        var f = this.options.viewport && this.options.viewport.padding || 0,
        g = this.getPosition(this.$viewport);
        if (/right|left/.test(a)) {
            var h = b.top - f - g.scroll,
            i = b.top + f - g.scroll + d;
            h < g.top ? e.top = g.top - h: i > g.top + g.height && (e.top = g.top + g.height - i)
        } else {
            var j = b.left - f,
            k = b.left + f + c;
            j < g.left ? e.left = g.left - j: k > g.width && (e.left = g.left + g.width - k)
        }
        return e
    },
    c.prototype.getTitle = function() {
        var a, b = this.$element,
        c = this.options;
        return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
    },
    c.prototype.getUID = function(a) {
        do a += ~~ (1e6 * Math.random());
        while (document.getElementById(a));
        return a
    },
    c.prototype.tip = function() {
        return this.$tip = this.$tip || a(this.options.template)
    },
    c.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    },
    c.prototype.validate = function() {
        this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
    },
    c.prototype.enable = function() {
        this.enabled = !0
    },
    c.prototype.disable = function() {
        this.enabled = !1
    },
    c.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    },
    c.prototype.toggle = function(b) {
        var c = this;
        b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))),
        c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
    },
    c.prototype.destroy = function() {
        clearTimeout(this.timeout),
        this.hide().$element.off("." + this.type).removeData("bs." + this.type)
    };
    var d = a.fn.tooltip;
    a.fn.tooltip = b,
    a.fn.tooltip.Constructor = c,
    a.fn.tooltip.noConflict = function() {
        return a.fn.tooltip = d,
        this
    }
} (jQuery),
+
function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var d = a(this),
            e = d.data("bs.popover"),
            f = "object" == typeof b && b; (e || "destroy" != b) && (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]())
        })
    }
    var c = function(a, b) {
        this.init("popover", a, b)
    };
    if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
    c.VERSION = "3.2.0",
    c.DEFAULTS = a.extend({},
    a.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }),
    c.prototype = a.extend({},
    a.fn.tooltip.Constructor.prototype),
    c.prototype.constructor = c,
    c.prototype.getDefaults = function() {
        return c.DEFAULTS
    },
    c.prototype.setContent = function() {
        var a = this.tip(),
        b = this.getTitle(),
        c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html": "text"](b),
        a.find(".popover-content").empty()[this.options.html ? "string" == typeof c ? "html": "append": "text"](c),
        a.removeClass("fade top bottom left right in"),
        a.find(".popover-title").html() || a.find(".popover-title").hide()
    },
    c.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    },
    c.prototype.getContent = function() {
        var a = this.$element,
        b = this.options;
        return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
    },
    c.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    },
    c.prototype.tip = function() {
        return this.$tip || (this.$tip = a(this.options.template)),
        this.$tip
    };
    var d = a.fn.popover;
    a.fn.popover = b,
    a.fn.popover.Constructor = c,
    a.fn.popover.noConflict = function() {
        return a.fn.popover = d,
        this
    }
} (jQuery),
+
function(a) {
    "use strict";
    function b(c, d) {
        var e = a.proxy(this.process, this);
        this.$body = a("body"),
        this.$scrollElement = a(a(c).is("body") ? window: c),
        this.options = a.extend({},
        b.DEFAULTS, d),
        this.selector = (this.options.target || "") + " .nav li > a",
        this.offsets = [],
        this.targets = [],
        this.activeTarget = null,
        this.scrollHeight = 0,
        this.$scrollElement.on("scroll.bs.scrollspy", e),
        this.refresh(),
        this.process()
    }
    function c(c) {
        return this.each(function() {
            var d = a(this),
            e = d.data("bs.scrollspy"),
            f = "object" == typeof c && c;
            e || d.data("bs.scrollspy", e = new b(this, f)),
            "string" == typeof c && e[c]()
        })
    }
    b.VERSION = "3.2.0",
    b.DEFAULTS = {
        offset: 10
    },
    b.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    },
    b.prototype.refresh = function() {
        var b = "offset",
        c = 0;
        a.isWindow(this.$scrollElement[0]) || (b = "position", c = this.$scrollElement.scrollTop()),
        this.offsets = [],
        this.targets = [],
        this.scrollHeight = this.getScrollHeight();
        var d = this;
        this.$body.find(this.selector).map(function() {
            var d = a(this),
            e = d.data("target") || d.attr("href"),
            f = /^#./.test(e) && a(e);
            return f && f.length && f.is(":visible") && [[f[b]().top + c, e]] || null
        }).sort(function(a, b) {
            return a[0] - b[0]
        }).each(function() {
            d.offsets.push(this[0]),
            d.targets.push(this[1])
        })
    },
    b.prototype.process = function() {
        var a, b = this.$scrollElement.scrollTop() + this.options.offset,
        c = this.getScrollHeight(),
        d = this.options.offset + c - this.$scrollElement.height(),
        e = this.offsets,
        f = this.targets,
        g = this.activeTarget;
        if (this.scrollHeight != c && this.refresh(), b >= d) return g != (a = f[f.length - 1]) && this.activate(a);
        if (g && b <= e[0]) return g != (a = f[0]) && this.activate(a);
        for (a = e.length; a--;) g != f[a] && b >= e[a] && (!e[a + 1] || b <= e[a + 1]) && this.activate(f[a])
    },
    b.prototype.activate = function(b) {
        this.activeTarget = b,
        a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
        var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
        d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")),
        d.trigger("activate.bs.scrollspy")
    };
    var d = a.fn.scrollspy;
    a.fn.scrollspy = c,
    a.fn.scrollspy.Constructor = b,
    a.fn.scrollspy.noConflict = function() {
        return a.fn.scrollspy = d,
        this
    },
    a(window).on("load.bs.scrollspy.data-api",
    function() {
        a('[data-spy="scroll"]').each(function() {
            var b = a(this);
            c.call(b, b.data())
        })
    })
} (jQuery),
+
function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var d = a(this),
            e = d.data("bs.tab");
            e || d.data("bs.tab", e = new c(this)),
            "string" == typeof b && e[b]()
        })
    }
    var c = function(b) {
        this.element = a(b)
    };
    c.VERSION = "3.2.0",
    c.prototype.show = function() {
        var b = this.element,
        c = b.closest("ul:not(.dropdown-menu)"),
        d = b.data("target");
        if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
            var e = c.find(".active:last a")[0],
            f = a.Event("show.bs.tab", {
                relatedTarget: e
            });
            if (b.trigger(f), !f.isDefaultPrevented()) {
                var g = a(d);
                this.activate(b.closest("li"), c),
                this.activate(g, g.parent(),
                function() {
                    b.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: e
                    })
                })
            }
        }
    },
    c.prototype.activate = function(b, c, d) {
        function e() {
            f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),
            b.addClass("active"),
            g ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"),
            b.parent(".dropdown-menu") && b.closest("li.dropdown").addClass("active"),
            d && d()
        }
        var f = c.find("> .active"),
        g = d && a.support.transition && f.hasClass("fade");
        g ? f.one("bsTransitionEnd", e).emulateTransitionEnd(150) : e(),
        f.removeClass("in")
    };
    var d = a.fn.tab;
    a.fn.tab = b,
    a.fn.tab.Constructor = c,
    a.fn.tab.noConflict = function() {
        return a.fn.tab = d,
        this
    },
    a(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]',
    function(c) {
        c.preventDefault(),
        b.call(a(this), "show")
    })
} (jQuery),
+
function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var d = a(this),
            e = d.data("bs.affix"),
            f = "object" == typeof b && b;
            e || d.data("bs.affix", e = new c(this, f)),
            "string" == typeof b && e[b]()
        })
    }
    var c = function(b, d) {
        this.options = a.extend({},
        c.DEFAULTS, d),
        this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)),
        this.$element = a(b),
        this.affixed = this.unpin = this.pinnedOffset = null,
        this.checkPosition()
    };
    c.VERSION = "3.2.0",
    c.RESET = "affix affix-top affix-bottom",
    c.DEFAULTS = {
        offset: 0,
        target: window
    },
    c.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(c.RESET).addClass("affix");
        var a = this.$target.scrollTop(),
        b = this.$element.offset();
        return this.pinnedOffset = b.top - a
    },
    c.prototype.checkPositionWithEventLoop = function() {
        setTimeout(a.proxy(this.checkPosition, this), 1)
    },
    c.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var b = a(document).height(),
            d = this.$target.scrollTop(),
            e = this.$element.offset(),
            f = this.options.offset,
            g = f.top,
            h = f.bottom;
            "object" != typeof f && (h = g = f),
            "function" == typeof g && (g = f.top(this.$element)),
            "function" == typeof h && (h = f.bottom(this.$element));
            var i = null != this.unpin && d + this.unpin <= e.top ? !1 : null != h && e.top + this.$element.height() >= b - h ? "bottom": null != g && g >= d ? "top": !1;
            if (this.affixed !== i) {
                null != this.unpin && this.$element.css("top", "");
                var j = "affix" + (i ? "-" + i: ""),
                k = a.Event(j + ".bs.affix");
                this.$element.trigger(k),
                k.isDefaultPrevented() || (this.affixed = i, this.unpin = "bottom" == i ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(j).trigger(a.Event(j.replace("affix", "affixed"))), "bottom" == i && this.$element.offset({
                    top: b - this.$element.height() - h
                }))
            }
        }
    };
    var d = a.fn.affix;
    a.fn.affix = b,
    a.fn.affix.Constructor = c,
    a.fn.affix.noConflict = function() {
        return a.fn.affix = d,
        this
    },
    a(window).on("load",
    function() {
        a('[data-spy="affix"]').each(function() {
            var c = a(this),
            d = c.data();
            d.offset = d.offset || {},
            d.offsetBottom && (d.offset.bottom = d.offsetBottom),
            d.offsetTop && (d.offset.top = d.offsetTop),
            b.call(c, d)
        })
    })
} (jQuery);
/*! WOW - v0.1.9 - 2014-05-10
* Copyright (c) 2014 Matthieu Aussaguel; Licensed MIT */
(function() {
    var a, b, c = function(a, b) {
        return function() {
            return a.apply(b, arguments)
        }
    };
    a = function() {
        function a() {}
        return a.prototype.extend = function(a, b) {
            var c, d;
            for (c in a) d = a[c],
            null != d && (b[c] = d);
            return b
        },
        a.prototype.isMobile = function(a) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)
        },
        a
    } (),
    b = this.WeakMap || (b = function() {
        function a() {
            this.keys = [],
            this.values = []
        }
        return a.prototype.get = function(a) {
            var b, c, d, e, f;
            for (f = this.keys, b = d = 0, e = f.length; e > d; b = ++d) if (c = f[b], c === a) return this.values[b]
        },
        a.prototype.set = function(a, b) {
            var c, d, e, f, g;
            for (g = this.keys, c = e = 0, f = g.length; f > e; c = ++e) if (d = g[c], d === a) return void(this.values[c] = b);
            return this.keys.push(a),
            this.values.push(b)
        },
        a
    } ()),
    this.WOW = function() {
        function d(a) {
            null == a && (a = {}),
            this.scrollCallback = c(this.scrollCallback, this),
            this.scrollHandler = c(this.scrollHandler, this),
            this.start = c(this.start, this),
            this.scrolled = !0,
            this.config = this.util().extend(a, this.defaults),
            this.animationNameCache = new b
        }
        return d.prototype.defaults = {
            boxClass: "bdr-fade",
            animateClass: "animated",
            offset: 0,
            mobile: !0
        },
        d.prototype.init = function() {
            var a;
            return this.element = window.document.documentElement,
            "interactive" === (a = document.readyState) || "complete" === a ? this.start() : document.addEventListener("DOMContentLoaded", this.start)
        },
        d.prototype.start = function() {
            var a, b, c, d;
            if (this.boxes = this.element.getElementsByClassName(this.config.boxClass), this.boxes.length) {
                if (this.disabled()) return this.resetStyle();
                for (d = this.boxes, b = 0, c = d.length; c > b; b++) a = d[b],
                this.applyStyle(a, !0);
                return window.addEventListener("scroll", this.scrollHandler, !1),
                window.addEventListener("resize", this.scrollHandler, !1),
                this.interval = setInterval(this.scrollCallback, 50)
            }
        },
        d.prototype.stop = function() {
            return window.removeEventListener("scroll", this.scrollHandler, !1),
            window.removeEventListener("resize", this.scrollHandler, !1),
            null != this.interval ? clearInterval(this.interval) : void 0
        },
        d.prototype.show = function(a) {
            return this.applyStyle(a),
            a.className = "" + a.className + " " + this.config.animateClass
        },
        d.prototype.applyStyle = function(a, b) {
            var c, d, e;
            return d = a.getAttribute("data-wow-duration"),
            c = a.getAttribute("data-wow-delay"),
            e = a.getAttribute("data-wow-iteration"),
            this.animate(function(f) {
                return function() {
                    return f.customStyle(a, b, d, c, e)
                }
            } (this))
        },
        d.prototype.animate = function() {
            return "requestAnimationFrame" in window ?
            function(a) {
                return window.requestAnimationFrame(a)
            }: function(a) {
                return a()
            }
        } (),
        d.prototype.resetStyle = function() {
            var a, b, c, d, e;
            for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b],
            e.push(a.setAttribute("style", "visibility: visible;"));
            return e
        },
        d.prototype.customStyle = function(a, b, c, d, e) {
            return b && this.cacheAnimationName(a),
            a.style.visibility = b ? "hidden": "visible",
            c && this.vendorSet(a.style, {
                animationDuration: c
            }),
            d && this.vendorSet(a.style, {
                animationDelay: d
            }),
            e && this.vendorSet(a.style, {
                animationIterationCount: e
            }),
            this.vendorSet(a.style, {
                animationName: b ? "none": this.cachedAnimationName(a)
            }),
            a
        },
        d.prototype.vendors = ["moz", "webkit"],
        d.prototype.vendorSet = function(a, b) {
            var c, d, e, f;
            f = [];
            for (c in b) d = b[c],
            a["" + c] = d,
            f.push(function() {
                var b, f, g, h;
                for (g = this.vendors, h = [], b = 0, f = g.length; f > b; b++) e = g[b],
                h.push(a["" + e + c.charAt(0).toUpperCase() + c.substr(1)] = d);
                return h
            }.call(this));
            return f
        },
        d.prototype.vendorCSS = function(a, b) {
            var c, d, e, f, g, h;
            for (d = window.getComputedStyle(a), c = d.getPropertyCSSValue(b), h = this.vendors, f = 0, g = h.length; g > f; f++) e = h[f],
            c = c || d.getPropertyCSSValue("-" + e + "-" + b);
            return c
        },
        d.prototype.animationName = function(a) {
            var b;
            try {
                b = this.vendorCSS(a, "animation-name").cssText
            } catch(c) {
                b = window.getComputedStyle(a).getPropertyValue("animation-name")
            }
            return "none" === b ? "": b
        },
        d.prototype.cacheAnimationName = function(a) {
            return this.animationNameCache.set(a, this.animationName(a))
        },
        d.prototype.cachedAnimationName = function(a) {
            return this.animationNameCache.get(a)
        },
        d.prototype.scrollHandler = function() {
            return this.scrolled = !0
        },
        d.prototype.scrollCallback = function() {
            var a;
            return this.scrolled && (this.scrolled = !1, this.boxes = function() {
                var b, c, d, e;
                for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b],
                a && (this.isVisible(a) ? this.show(a) : e.push(a));
                return e
            }.call(this), !this.boxes.length) ? this.stop() : void 0
        },
        d.prototype.offsetTop = function(a) {
            for (var b; void 0 === a.offsetTop;) a = a.parentNode;
            for (b = a.offsetTop; a = a.offsetParent;) b += a.offsetTop;
            return b
        },
        d.prototype.isVisible = function(a) {
            var b, c, d, e, f;
            return c = a.getAttribute("data-wow-offset") || this.config.offset,
            f = window.pageYOffset,
            e = f + this.element.clientHeight - c,
            d = this.offsetTop(a),
            b = d + a.clientHeight,
            e >= d && b >= f
        },
        d.prototype.util = function() {
            return this._util || (this._util = new a)
        },
        d.prototype.disabled = function() {
            return ! this.config.mobile && this.util().isMobile(navigator.userAgent)
        },
        d
    } ()
}).call(this);; (function($, window, document, undefined) {
    var OnePageNav = function(elem, options) {
        this.elem = elem;
        this.$elem = $(elem);
        this.options = options;
        this.metadata = this.$elem.data('plugin-options');
        this.$win = $(window);
        this.sections = {};
        this.didScroll = false;
        this.$doc = $(document);
        this.docHeight = this.$doc.height();
    };
    OnePageNav.prototype = {
        defaults: {
            navItems: 'a',
            currentClass: 'current',
            changeHash: false,
            easing: 'swing',
            filter: '',
            scrollSpeed: 750,
            scrollThreshold: 0.5,
            begin: false,
            end: false,
            scrollChange: false
        },
        init: function() {
            this.config = $.extend({},
            this.defaults, this.options, this.metadata);
            this.$nav = this.$elem.find(this.config.navItems);
            if (this.config.filter !== '') {
                this.$nav = this.$nav.filter(this.config.filter);
            }
            this.$nav.on('click.onePageNav', $.proxy(this.handleClick, this));
            this.getPositions();
            this.bindInterval();
            this.$win.on('resize.onePageNav', $.proxy(this.getPositions, this));
            return this;
        },
        adjustNav: function(self, $parent) {
            self.$elem.find('.' + self.config.currentClass).removeClass(self.config.currentClass);
            $parent.addClass(self.config.currentClass);
        },
        bindInterval: function() {
            var self = this;
            var docHeight;
            self.$win.on('scroll.onePageNav',
            function() {
                self.didScroll = true;
            });
            self.t = setInterval(function() {
                docHeight = self.$doc.height();
                if (self.didScroll) {
                    self.didScroll = false;
                    self.scrollChange();
                }
                if (docHeight !== self.docHeight) {
                    self.docHeight = docHeight;
                    self.getPositions();
                }
            },
            250);
        },
        getHash: function($link) {
            return $link.attr('href').split('#')[1];
        },
        getPositions: function() {
            var self = this;
            var linkHref;
            var topPos;
            var $target;
            self.$nav.each(function() {
                linkHref = self.getHash($(this));
                $target = $('#' + linkHref);
                if ($target.length) {
                    topPos = $target.offset().top;
                    self.sections[linkHref] = Math.round(topPos);
                }
            });
        },
        getSection: function(windowPos) {
            var returnValue = null;
            var windowHeight = Math.round(this.$win.height() * this.config.scrollThreshold);
            for (var section in this.sections) {
                if ((this.sections[section] - windowHeight) < windowPos) {
                    returnValue = section;
                }
            }
            return returnValue;
        },
        handleClick: function(e) {
            var self = this;
            var $link = $(e.currentTarget);
            var $parent = $link.parent();
            var newLoc = '#' + self.getHash($link);
            if (!$parent.hasClass(self.config.currentClass)) {
                if (self.config.begin) {
                    self.config.begin();
                }
                self.adjustNav(self, $parent);
                self.unbindInterval();
                self.scrollTo(newLoc,
                function() {
                    if (self.config.changeHash) {
                        window.location.hash = newLoc;
                    }
                    self.bindInterval();
                    if (self.config.end) {
                        self.config.end();
                    }
                });
            }
            e.preventDefault();
        },
        scrollChange: function() {
            var windowTop = this.$win.scrollTop();
            var position = this.getSection(windowTop);
            var $parent;
            if (position !== null) {
                $parent = this.$elem.find('a[href$="#' + position + '"]').parent();
                if (!$parent.hasClass(this.config.currentClass)) {
                    this.adjustNav(this, $parent);
                    if (this.config.scrollChange) {
                        this.config.scrollChange($parent);
                    }
                }
            }
        },
        scrollTo: function(target, callback) {
            var offset = $(target).offset().top;
            $('html, body').animate({
                scrollTop: offset
            },
            this.config.scrollSpeed, this.config.easing, callback);
        },
        unbindInterval: function() {
            clearInterval(this.t);
            this.$win.unbind('scroll.onePageNav');
        }
    };
    OnePageNav.defaults = OnePageNav.prototype.defaults;
    $.fn.onePageNav = function(options) {
        return this.each(function() {
            new OnePageNav(this, options).init();
        });
    };
})(jQuery, window, document); (function($) {
    var $window = $(window);
    var windowHeight = $window.height();
    $window.resize(function() {
        windowHeight = $window.height();
    });
    $.fn.parallax = function(xpos, speedFactor, outerHeight) {
        var $this = $(this);
        var getHeight;
        var firstTop;
        var paddingTop = 0;
        $this.each(function() {
            firstTop = $this.offset().top;
        });
        if (outerHeight) {
            getHeight = function(jqo) {
                return jqo.outerHeight(true);
            };
        } else {
            getHeight = function(jqo) {
                return jqo.height();
            };
        }
        if (arguments.length < 1 || xpos === null) xpos = "50%";
        if (arguments.length < 2 || speedFactor === null) speedFactor = 0.1;
        if (arguments.length < 3 || outerHeight === null) outerHeight = true;
        function update() {
            var pos = $window.scrollTop();
            $this.each(function() {
                var $element = $(this);
                var top = $element.offset().top;
                var height = getHeight($element);
                if (top + height < pos || top > pos + windowHeight) {
                    return;
                }
                $this.css('backgroundPosition', xpos + " " + Math.round((firstTop - pos) * speedFactor) + "px");
            });
        }
        $window.bind('scroll', update).resize(update);
        update();
    };
})(jQuery); (function(e) {
    e.flexslider = function(t, n) {
        var r = e(t);
        r.vars = e.extend({},
        e.flexslider.defaults, n);
        var i = r.vars.namespace,
        s = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
        o = ("ontouchstart" in window || s || window.DocumentTouch && document instanceof DocumentTouch) && r.vars.touch,
        u = "click touchend MSPointerUp",
        a = "",
        f,
        l = r.vars.direction === "vertical",
        c = r.vars.reverse,
        h = r.vars.itemWidth > 0,
        p = r.vars.animation === "fade",
        d = r.vars.asNavFor !== "",
        v = {},
        m = !0;
        e.data(t, "flexslider", r);
        v = {
            init: function() {
                r.animating = !1;
                r.currentSlide = parseInt(r.vars.startAt ? r.vars.startAt: 0, 10);
                isNaN(r.currentSlide) && (r.currentSlide = 0);
                r.animatingTo = r.currentSlide;
                r.atEnd = r.currentSlide === 0 || r.currentSlide === r.last;
                r.containerSelector = r.vars.selector.substr(0, r.vars.selector.search(" "));
                r.slides = e(r.vars.selector, r);
                r.container = e(r.containerSelector, r);
                r.count = r.slides.length;
                r.syncExists = e(r.vars.sync).length > 0;
                r.vars.animation === "slide" && (r.vars.animation = "swing");
                r.prop = l ? "top": "marginLeft";
                r.args = {};
                r.manualPause = !1;
                r.stopped = !1;
                r.started = !1;
                r.startTimeout = null;
                r.transitions = !r.vars.video && !p && r.vars.useCSS &&
                function() {
                    var e = document.createElement("div"),
                    t = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                    for (var n in t) if (e.style[t[n]] !== undefined) {
                        r.pfx = t[n].replace("Perspective", "").toLowerCase();
                        r.prop = "-" + r.pfx + "-transform";
                        return ! 0
                    }
                    return ! 1
                } ();
                r.vars.controlsContainer !== "" && (r.controlsContainer = e(r.vars.controlsContainer).length > 0 && e(r.vars.controlsContainer));
                r.vars.manualControls !== "" && (r.manualControls = e(r.vars.manualControls).length > 0 && e(r.vars.manualControls));
                if (r.vars.randomize) {
                    r.slides.sort(function() {
                        return Math.round(Math.random()) - .5
                    });
                    r.container.empty().append(r.slides)
                }
                r.doMath();
                r.setup("init");
                r.vars.controlNav && v.controlNav.setup();
                r.vars.directionNav && v.directionNav.setup();
                r.vars.keyboard && (e(r.containerSelector).length === 1 || r.vars.multipleKeyboard) && e(document).bind("keyup",
                function(e) {
                    var t = e.keyCode;
                    if (!r.animating && (t === 39 || t === 37)) {
                        var n = t === 39 ? r.getTarget("next") : t === 37 ? r.getTarget("prev") : !1;
                        r.flexAnimate(n, r.vars.pauseOnAction)
                    }
                });
                r.vars.mousewheel && r.bind("mousewheel",
                function(e, t, n, i) {
                    e.preventDefault();
                    var s = t < 0 ? r.getTarget("next") : r.getTarget("prev");
                    r.flexAnimate(s, r.vars.pauseOnAction)
                });
                r.vars.pausePlay && v.pausePlay.setup();
                r.vars.slideshow && r.vars.pauseInvisible && v.pauseInvisible.init();
                if (r.vars.slideshow) {
                    r.vars.pauseOnHover && r.hover(function() { ! r.manualPlay && !r.manualPause && r.pause()
                    },
                    function() { ! r.manualPause && !r.manualPlay && !r.stopped && r.play()
                    });
                    if (!r.vars.pauseInvisible || !v.pauseInvisible.isHidden()) r.vars.initDelay > 0 ? r.startTimeout = setTimeout(r.play, r.vars.initDelay) : r.play()
                }
                d && v.asNav.setup();
                o && r.vars.touch && v.touch(); (!p || p && r.vars.smoothHeight) && e(window).bind("resize orientationchange focus", v.resize);
                r.find("img").attr("draggable", "false");
                setTimeout(function() {
                    r.vars.start(r)
                },
                200)
            },
            asNav: {
                setup: function() {
                    r.asNav = !0;
                    r.animatingTo = Math.floor(r.currentSlide / r.move);
                    r.currentItem = r.currentSlide;
                    r.slides.removeClass(i + "active-slide").eq(r.currentItem).addClass(i + "active-slide");
                    if (!s) r.slides.on(u,
                    function(t) {
                        t.preventDefault();
                        var n = e(this),
                        s = n.index(),
                        o = n.offset().left - e(r).scrollLeft();
                        if (o <= 0 && n.hasClass(i + "active-slide")) r.flexAnimate(r.getTarget("prev"), !0);
                        else if (!e(r.vars.asNavFor).data("flexslider").animating && !n.hasClass(i + "active-slide")) {
                            r.direction = r.currentItem < s ? "next": "prev";
                            r.flexAnimate(s, r.vars.pauseOnAction, !1, !0, !0)
                        }
                    });
                    else {
                        t._slider = r;
                        r.slides.each(function() {
                            var t = this;
                            t._gesture = new MSGesture;
                            t._gesture.target = t;
                            t.addEventListener("MSPointerDown",
                            function(e) {
                                e.preventDefault();
                                e.currentTarget._gesture && e.currentTarget._gesture.addPointer(e.pointerId)
                            },
                            !1);
                            t.addEventListener("MSGestureTap",
                            function(t) {
                                t.preventDefault();
                                var n = e(this),
                                i = n.index();
                                if (!e(r.vars.asNavFor).data("flexslider").animating && !n.hasClass("active")) {
                                    r.direction = r.currentItem < i ? "next": "prev";
                                    r.flexAnimate(i, r.vars.pauseOnAction, !1, !0, !0)
                                }
                            })
                        })
                    }
                }
            },
            controlNav: {
                setup: function() {
                    r.manualControls ? v.controlNav.setupManual() : v.controlNav.setupPaging()
                },
                setupPaging: function() {
                    var t = r.vars.controlNav === "thumbnails" ? "control-thumbs": "control-paging",
                    n = 1,
                    s,
                    o;
                    r.controlNavScaffold = e('<ol class="' + i + "control-nav " + i + t + '"></ol>');
                    if (r.pagingCount > 1) for (var f = 0; f < r.pagingCount; f++) {
                        o = r.slides.eq(f);
                        s = r.vars.controlNav === "thumbnails" ? '<img src="' + o.attr("data-thumb") + '"/>': "<a>" + n + "</a>";
                        if ("thumbnails" === r.vars.controlNav && !0 === r.vars.thumbCaptions) {
                            var l = o.attr("data-thumbcaption");
                            "" != l && undefined != l && (s += '<span class="' + i + 'caption">' + l + "</span>")
                        }
                        r.controlNavScaffold.append("<li>" + s + "</li>");
                        n++
                    }
                    r.controlsContainer ? e(r.controlsContainer).append(r.controlNavScaffold) : r.append(r.controlNavScaffold);
                    v.controlNav.set();
                    v.controlNav.active();
                    r.controlNavScaffold.delegate("a, img", u,
                    function(t) {
                        t.preventDefault();
                        if (a === "" || a === t.type) {
                            var n = e(this),
                            s = r.controlNav.index(n);
                            if (!n.hasClass(i + "active")) {
                                r.direction = s > r.currentSlide ? "next": "prev";
                                r.flexAnimate(s, r.vars.pauseOnAction)
                            }
                        }
                        a === "" && (a = t.type);
                        v.setToClearWatchedEvent()
                    })
                },
                setupManual: function() {
                    r.controlNav = r.manualControls;
                    v.controlNav.active();
                    r.controlNav.bind(u,
                    function(t) {
                        t.preventDefault();
                        if (a === "" || a === t.type) {
                            var n = e(this),
                            s = r.controlNav.index(n);
                            if (!n.hasClass(i + "active")) {
                                s > r.currentSlide ? r.direction = "next": r.direction = "prev";
                                r.flexAnimate(s, r.vars.pauseOnAction)
                            }
                        }
                        a === "" && (a = t.type);
                        v.setToClearWatchedEvent()
                    })
                },
                set: function() {
                    var t = r.vars.controlNav === "thumbnails" ? "img": "a";
                    r.controlNav = e("." + i + "control-nav li " + t, r.controlsContainer ? r.controlsContainer: r)
                },
                active: function() {
                    r.controlNav.removeClass(i + "active").eq(r.animatingTo).addClass(i + "active")
                },
                update: function(t, n) {
                    r.pagingCount > 1 && t === "add" ? r.controlNavScaffold.append(e("<li><a>" + r.count + "</a></li>")) : r.pagingCount === 1 ? r.controlNavScaffold.find("li").remove() : r.controlNav.eq(n).closest("li").remove();
                    v.controlNav.set();
                    r.pagingCount > 1 && r.pagingCount !== r.controlNav.length ? r.update(n, t) : v.controlNav.active()
                }
            },
            directionNav: {
                setup: function() {
                    var t = e('<ul class="' + i + 'direction-nav"><li><a class="' + i + 'prev" href="#">' + r.vars.prevText + '</a></li><li><a class="' + i + 'next" href="#">' + r.vars.nextText + "</a></li></ul>");
                    if (r.controlsContainer) {
                        e(r.controlsContainer).append(t);
                        r.directionNav = e("." + i + "direction-nav li a", r.controlsContainer)
                    } else {
                        r.append(t);
                        r.directionNav = e("." + i + "direction-nav li a", r)
                    }
                    v.directionNav.update();
                    r.directionNav.bind(u,
                    function(t) {
                        t.preventDefault();
                        var n;
                        if (a === "" || a === t.type) {
                            n = e(this).hasClass(i + "next") ? r.getTarget("next") : r.getTarget("prev");
                            r.flexAnimate(n, r.vars.pauseOnAction)
                        }
                        a === "" && (a = t.type);
                        v.setToClearWatchedEvent()
                    })
                },
                update: function() {
                    var e = i + "disabled";
                    r.pagingCount === 1 ? r.directionNav.addClass(e).attr("tabindex", "-1") : r.vars.animationLoop ? r.directionNav.removeClass(e).removeAttr("tabindex") : r.animatingTo === 0 ? r.directionNav.removeClass(e).filter("." + i + "prev").addClass(e).attr("tabindex", "-1") : r.animatingTo === r.last ? r.directionNav.removeClass(e).filter("." + i + "next").addClass(e).attr("tabindex", "-1") : r.directionNav.removeClass(e).removeAttr("tabindex")
                }
            },
            pausePlay: {
                setup: function() {
                    var t = e('<div class="' + i + 'pauseplay"><a></a></div>');
                    if (r.controlsContainer) {
                        r.controlsContainer.append(t);
                        r.pausePlay = e("." + i + "pauseplay a", r.controlsContainer)
                    } else {
                        r.append(t);
                        r.pausePlay = e("." + i + "pauseplay a", r)
                    }
                    v.pausePlay.update(r.vars.slideshow ? i + "pause": i + "play");
                    r.pausePlay.bind(u,
                    function(t) {
                        t.preventDefault();
                        if (a === "" || a === t.type) if (e(this).hasClass(i + "pause")) {
                            r.manualPause = !0;
                            r.manualPlay = !1;
                            r.pause()
                        } else {
                            r.manualPause = !1;
                            r.manualPlay = !0;
                            r.play()
                        }
                        a === "" && (a = t.type);
                        v.setToClearWatchedEvent()
                    })
                },
                update: function(e) {
                    e === "play" ? r.pausePlay.removeClass(i + "pause").addClass(i + "play").html(r.vars.playText) : r.pausePlay.removeClass(i + "play").addClass(i + "pause").html(r.vars.pauseText)
                }
            },
            touch: function() {
                var e, n, i, o, u, a, f = !1,
                d = 0,
                v = 0,
                m = 0;
                if (!s) {
                    t.addEventListener("touchstart", g, !1);
                    function g(s) {
                        if (r.animating) s.preventDefault();
                        else if (window.navigator.msPointerEnabled || s.touches.length === 1) {
                            r.pause();
                            o = l ? r.h: r.w;
                            a = Number(new Date);
                            d = s.touches[0].pageX;
                            v = s.touches[0].pageY;
                            i = h && c && r.animatingTo === r.last ? 0 : h && c ? r.limit - (r.itemW + r.vars.itemMargin) * r.move * r.animatingTo: h && r.currentSlide === r.last ? r.limit: h ? (r.itemW + r.vars.itemMargin) * r.move * r.currentSlide: c ? (r.last - r.currentSlide + r.cloneOffset) * o: (r.currentSlide + r.cloneOffset) * o;
                            e = l ? v: d;
                            n = l ? d: v;
                            t.addEventListener("touchmove", y, !1);
                            t.addEventListener("touchend", b, !1)
                        }
                    }
                    function y(t) {
                        d = t.touches[0].pageX;
                        v = t.touches[0].pageY;
                        u = l ? e - v: e - d;
                        f = l ? Math.abs(u) < Math.abs(d - n) : Math.abs(u) < Math.abs(v - n);
                        var s = 500;
                        if (!f || Number(new Date) - a > s) {
                            t.preventDefault();
                            if (!p && r.transitions) {
                                r.vars.animationLoop || (u /= r.currentSlide === 0 && u < 0 || r.currentSlide === r.last && u > 0 ? Math.abs(u) / o + 2 : 1);
                                r.setProps(i + u, "setTouch")
                            }
                        }
                    }
                    function b(s) {
                        t.removeEventListener("touchmove", y, !1);
                        if (r.animatingTo === r.currentSlide && !f && u !== null) {
                            var l = c ? -u: u,
                            h = l > 0 ? r.getTarget("next") : r.getTarget("prev");
                            r.canAdvance(h) && (Number(new Date) - a < 550 && Math.abs(l) > 50 || Math.abs(l) > o / 2) ? r.flexAnimate(h, r.vars.pauseOnAction) : p || r.flexAnimate(r.currentSlide, r.vars.pauseOnAction, !0)
                        }
                        t.removeEventListener("touchend", b, !1);
                        e = null;
                        n = null;
                        u = null;
                        i = null
                    }
                } else {
                    t.style.msTouchAction = "none";
                    t._gesture = new MSGesture;
                    t._gesture.target = t;
                    t.addEventListener("MSPointerDown", w, !1);
                    t._slider = r;
                    t.addEventListener("MSGestureChange", E, !1);
                    t.addEventListener("MSGestureEnd", S, !1);
                    function w(e) {
                        e.stopPropagation();
                        if (r.animating) e.preventDefault();
                        else {
                            r.pause();
                            t._gesture.addPointer(e.pointerId);
                            m = 0;
                            o = l ? r.h: r.w;
                            a = Number(new Date);
                            i = h && c && r.animatingTo === r.last ? 0 : h && c ? r.limit - (r.itemW + r.vars.itemMargin) * r.move * r.animatingTo: h && r.currentSlide === r.last ? r.limit: h ? (r.itemW + r.vars.itemMargin) * r.move * r.currentSlide: c ? (r.last - r.currentSlide + r.cloneOffset) * o: (r.currentSlide + r.cloneOffset) * o
                        }
                    }
                    function E(e) {
                        e.stopPropagation();
                        var n = e.target._slider;
                        if (!n) return;
                        var r = -e.translationX,
                        s = -e.translationY;
                        m += l ? s: r;
                        u = m;
                        f = l ? Math.abs(m) < Math.abs( - r) : Math.abs(m) < Math.abs( - s);
                        if (e.detail === e.MSGESTURE_FLAG_INERTIA) {
                            setImmediate(function() {
                                t._gesture.stop()
                            });
                            return
                        }
                        if (!f || Number(new Date) - a > 500) {
                            e.preventDefault();
                            if (!p && n.transitions) {
                                n.vars.animationLoop || (u = m / (n.currentSlide === 0 && m < 0 || n.currentSlide === n.last && m > 0 ? Math.abs(m) / o + 2 : 1));
                                n.setProps(i + u, "setTouch")
                            }
                        }
                    }
                    function S(t) {
                        t.stopPropagation();
                        var r = t.target._slider;
                        if (!r) return;
                        if (r.animatingTo === r.currentSlide && !f && u !== null) {
                            var s = c ? -u: u,
                            l = s > 0 ? r.getTarget("next") : r.getTarget("prev");
                            r.canAdvance(l) && (Number(new Date) - a < 550 && Math.abs(s) > 50 || Math.abs(s) > o / 2) ? r.flexAnimate(l, r.vars.pauseOnAction) : p || r.flexAnimate(r.currentSlide, r.vars.pauseOnAction, !0)
                        }
                        e = null;
                        n = null;
                        u = null;
                        i = null;
                        m = 0
                    }
                }
            },
            resize: function() {
                if (!r.animating && r.is(":visible")) {
                    h || r.doMath();
                    if (p) v.smoothHeight();
                    else if (h) {
                        r.slides.width(r.computedW);
                        r.update(r.pagingCount);
                        r.setProps()
                    } else if (l) {
                        r.viewport.height(r.h);
                        r.setProps(r.h, "setTotal")
                    } else {
                        r.vars.smoothHeight && v.smoothHeight();
                        r.newSlides.width(r.computedW);
                        r.setProps(r.computedW, "setTotal")
                    }
                }
            },
            smoothHeight: function(e) {
                if (!l || p) {
                    var t = p ? r: r.viewport;
                    e ? t.animate({
                        height: r.slides.eq(r.animatingTo).height()
                    },
                    e) : t.height(r.slides.eq(r.animatingTo).height())
                }
            },
            sync: function(t) {
                var n = e(r.vars.sync).data("flexslider"),
                i = r.animatingTo;
                switch (t) {
                case "animate":
                    n.flexAnimate(i, r.vars.pauseOnAction, !1, !0);
                    break;
                case "play":
                    !n.playing && !n.asNav && n.play();
                    break;
                case "pause":
                    n.pause()
                }
            },
            uniqueID: function(t) {
                t.find("[id]").each(function() {
                    var t = e(this);
                    t.attr("id", t.attr("id") + "_clone")
                });
                return t
            },
            pauseInvisible: {
                visProp: null,
                init: function() {
                    var e = ["webkit", "moz", "ms", "o"];
                    if ("hidden" in document) return "hidden";
                    for (var t = 0; t < e.length; t++) e[t] + "Hidden" in document && (v.pauseInvisible.visProp = e[t] + "Hidden");
                    if (v.pauseInvisible.visProp) {
                        var n = v.pauseInvisible.visProp.replace(/[H|h]idden/, "") + "visibilitychange";
                        document.addEventListener(n,
                        function() {
                            v.pauseInvisible.isHidden() ? r.startTimeout ? clearTimeout(r.startTimeout) : r.pause() : r.started ? r.play() : r.vars.initDelay > 0 ? setTimeout(r.play, r.vars.initDelay) : r.play()
                        })
                    }
                },
                isHidden: function() {
                    return document[v.pauseInvisible.visProp] || !1
                }
            },
            setToClearWatchedEvent: function() {
                clearTimeout(f);
                f = setTimeout(function() {
                    a = ""
                },
                3e3)
            }
        };
        r.flexAnimate = function(t, n, s, u, a) { ! r.vars.animationLoop && t !== r.currentSlide && (r.direction = t > r.currentSlide ? "next": "prev");
            d && r.pagingCount === 1 && (r.direction = r.currentItem < t ? "next": "prev");
            if (!r.animating && (r.canAdvance(t, a) || s) && r.is(":visible")) {
                if (d && u) {
                    var f = e(r.vars.asNavFor).data("flexslider");
                    r.atEnd = t === 0 || t === r.count - 1;
                    f.flexAnimate(t, !0, !1, !0, a);
                    r.direction = r.currentItem < t ? "next": "prev";
                    f.direction = r.direction;
                    if (Math.ceil((t + 1) / r.visible) - 1 === r.currentSlide || t === 0) {
                        r.currentItem = t;
                        r.slides.removeClass(i + "active-slide").eq(t).addClass(i + "active-slide");
                        return ! 1
                    }
                    r.currentItem = t;
                    r.slides.removeClass(i + "active-slide").eq(t).addClass(i + "active-slide");
                    t = Math.floor(t / r.visible)
                }
                r.animating = !0;
                r.animatingTo = t;
                n && r.pause();
                r.vars.before(r);
                r.syncExists && !a && v.sync("animate");
                r.vars.controlNav && v.controlNav.active();
                h || r.slides.removeClass(i + "active-slide").eq(t).addClass(i + "active-slide");
                r.atEnd = t === 0 || t === r.last;
                r.vars.directionNav && v.directionNav.update();
                if (t === r.last) {
                    r.vars.end(r);
                    r.vars.animationLoop || r.pause()
                }
                if (!p) {
                    var m = l ? r.slides.filter(":first").height() : r.computedW,
                    g,
                    y,
                    b;
                    if (h) {
                        g = r.vars.itemMargin;
                        b = (r.itemW + g) * r.move * r.animatingTo;
                        y = b > r.limit && r.visible !== 1 ? r.limit: b
                    } else r.currentSlide === 0 && t === r.count - 1 && r.vars.animationLoop && r.direction !== "next" ? y = c ? (r.count + r.cloneOffset) * m: 0 : r.currentSlide === r.last && t === 0 && r.vars.animationLoop && r.direction !== "prev" ? y = c ? 0 : (r.count + 1) * m: y = c ? (r.count - 1 - t + r.cloneOffset) * m: (t + r.cloneOffset) * m;
                    r.setProps(y, "", r.vars.animationSpeed);
                    if (r.transitions) {
                        if (!r.vars.animationLoop || !r.atEnd) {
                            r.animating = !1;
                            r.currentSlide = r.animatingTo
                        }
                        r.container.unbind("webkitTransitionEnd transitionend");
                        r.container.bind("webkitTransitionEnd transitionend",
                        function() {
                            r.wrapup(m)
                        })
                    } else r.container.animate(r.args, r.vars.animationSpeed, r.vars.easing,
                    function() {
                        r.wrapup(m)
                    })
                } else if (!o) {
                    r.slides.eq(r.currentSlide).css({
                        zIndex: 1
                    }).animate({
                        opacity: 0
                    },
                    r.vars.animationSpeed, r.vars.easing);
                    r.slides.eq(t).css({
                        zIndex: 2
                    }).animate({
                        opacity: 1
                    },
                    r.vars.animationSpeed, r.vars.easing, r.wrapup)
                } else {
                    r.slides.eq(r.currentSlide).css({
                        opacity: 0,
                        zIndex: 1
                    });
                    r.slides.eq(t).css({
                        opacity: 1,
                        zIndex: 2
                    });
                    r.wrapup(m)
                }
                r.vars.smoothHeight && v.smoothHeight(r.vars.animationSpeed)
            }
        };
        r.wrapup = function(e) { ! p && !h && (r.currentSlide === 0 && r.animatingTo === r.last && r.vars.animationLoop ? r.setProps(e, "jumpEnd") : r.currentSlide === r.last && r.animatingTo === 0 && r.vars.animationLoop && r.setProps(e, "jumpStart"));
            r.animating = !1;
            r.currentSlide = r.animatingTo;
            r.vars.after(r)
        };
        r.animateSlides = function() { ! r.animating && m && r.flexAnimate(r.getTarget("next"))
        };
        r.pause = function() {
            clearInterval(r.animatedSlides);
            r.animatedSlides = null;
            r.playing = !1;
            r.vars.pausePlay && v.pausePlay.update("play");
            r.syncExists && v.sync("pause")
        };
        r.play = function() {
            r.playing && clearInterval(r.animatedSlides);
            r.animatedSlides = r.animatedSlides || setInterval(r.animateSlides, r.vars.slideshowSpeed);
            r.started = r.playing = !0;
            r.vars.pausePlay && v.pausePlay.update("pause");
            r.syncExists && v.sync("play")
        };
        r.stop = function() {
            r.pause();
            r.stopped = !0
        };
        r.canAdvance = function(e, t) {
            var n = d ? r.pagingCount - 1 : r.last;
            return t ? !0 : d && r.currentItem === r.count - 1 && e === 0 && r.direction === "prev" ? !0 : d && r.currentItem === 0 && e === r.pagingCount - 1 && r.direction !== "next" ? !1 : e === r.currentSlide && !d ? !1 : r.vars.animationLoop ? !0 : r.atEnd && r.currentSlide === 0 && e === n && r.direction !== "next" ? !1 : r.atEnd && r.currentSlide === n && e === 0 && r.direction === "next" ? !1 : !0
        };
        r.getTarget = function(e) {
            r.direction = e;
            return e === "next" ? r.currentSlide === r.last ? 0 : r.currentSlide + 1 : r.currentSlide === 0 ? r.last: r.currentSlide - 1
        };
        r.setProps = function(e, t, n) {
            var i = function() {
                var n = e ? e: (r.itemW + r.vars.itemMargin) * r.move * r.animatingTo,
                i = function() {
                    if (h) return t === "setTouch" ? e: c && r.animatingTo === r.last ? 0 : c ? r.limit - (r.itemW + r.vars.itemMargin) * r.move * r.animatingTo: r.animatingTo === r.last ? r.limit: n;
                    switch (t) {
                    case "setTotal":
                        return c ? (r.count - 1 - r.currentSlide + r.cloneOffset) * e: (r.currentSlide + r.cloneOffset) * e;
                    case "setTouch":
                        return c ? e: e;
                    case "jumpEnd":
                        return c ? e: r.count * e;
                    case "jumpStart":
                        return c ? r.count * e: e;
                    default:
                        return e
                    }
                } ();
                return i * -1 + "px"
            } ();
            if (r.transitions) {
                i = l ? "translate3d(0," + i + ",0)": "translate3d(" + i + ",0,0)";
                n = n !== undefined ? n / 1e3 + "s": "0s";
                r.container.css("-" + r.pfx + "-transition-duration", n);
                r.container.css("transition-duration", n)
            }
            r.args[r.prop] = i; (r.transitions || n === undefined) && r.container.css(r.args);
            r.container.css("transform", i)
        };
        r.setup = function(t) {
            if (!p) {
                var n, s;
                if (t === "init") {
                    r.viewport = e('<div class="' + i + 'viewport"></div>').css({
                        overflow: "hidden",
                        position: "relative"
                    }).appendTo(r).append(r.container);
                    r.cloneCount = 0;
                    r.cloneOffset = 0;
                    if (c) {
                        s = e.makeArray(r.slides).reverse();
                        r.slides = e(s);
                        r.container.empty().append(r.slides)
                    }
                }
                if (r.vars.animationLoop && !h) {
                    r.cloneCount = 2;
                    r.cloneOffset = 1;
                    t !== "init" && r.container.find(".clone").remove();
                    r.container.append(r.slides.first().clone().addClass("clone").attr("aria-hidden", "true")).prepend(r.slides.last().clone().addClass("clone").attr("aria-hidden", "true"));
                    v.uniqueID(r.slides.first().clone().addClass("clone")).appendTo(r.container);
                    v.uniqueID(r.slides.last().clone().addClass("clone")).prependTo(r.container)
                }
                r.newSlides = e(r.vars.selector, r);
                n = c ? r.count - 1 - r.currentSlide + r.cloneOffset: r.currentSlide + r.cloneOffset;
                if (l && !h) {
                    r.container.height((r.count + r.cloneCount) * 200 + "%").css("position", "absolute").width("100%");
                    setTimeout(function() {
                        r.newSlides.css({
                            display: "block"
                        });
                        r.doMath();
                        r.viewport.height(r.h);
                        r.setProps(n * r.h, "init")
                    },
                    t === "init" ? 100 : 0)
                } else {
                    r.container.width((r.count + r.cloneCount) * 200 + "%");
                    r.setProps(n * r.computedW, "init");
                    setTimeout(function() {
                        r.doMath();
                        r.newSlides.css({
                            width: r.computedW,
                            "float": "left",
                            display: "block"
                        });
                        r.vars.smoothHeight && v.smoothHeight()
                    },
                    t === "init" ? 100 : 0)
                }
            } else {
                r.slides.css({
                    width: "100%",
                    "float": "left",
                    marginRight: "-100%",
                    position: "relative"
                });
                t === "init" && (o ? r.slides.css({
                    opacity: 0,
                    display: "block",
                    webkitTransition: "opacity " + r.vars.animationSpeed / 1e3 + "s ease",
                    zIndex: 1
                }).eq(r.currentSlide).css({
                    opacity: 1,
                    zIndex: 2
                }) : r.slides.css({
                    opacity: 0,
                    display: "block",
                    zIndex: 1
                }).eq(r.currentSlide).css({
                    zIndex: 2
                }).animate({
                    opacity: 1
                },
                r.vars.animationSpeed, r.vars.easing));
                r.vars.smoothHeight && v.smoothHeight()
            }
            h || r.slides.removeClass(i + "active-slide").eq(r.currentSlide).addClass(i + "active-slide");
            r.vars.init(r)
        };
        r.doMath = function() {
            var e = r.slides.first(),
            t = r.vars.itemMargin,
            n = r.vars.minItems,
            i = r.vars.maxItems;
            r.w = r.viewport === undefined ? r.width() : r.viewport.width();
            r.h = e.height();
            r.boxPadding = e.outerWidth() - e.width();
            if (h) {
                r.itemT = r.vars.itemWidth + t;
                r.minW = n ? n * r.itemT: r.w;
                r.maxW = i ? i * r.itemT - t: r.w;
                r.itemW = r.minW > r.w ? (r.w - t * (n - 1)) / n: r.maxW < r.w ? (r.w - t * (i - 1)) / i: r.vars.itemWidth > r.w ? r.w: r.vars.itemWidth;
                r.visible = Math.floor(r.w / r.itemW);
                r.move = r.vars.move > 0 && r.vars.move < r.visible ? r.vars.move: r.visible;
                r.pagingCount = Math.ceil((r.count - r.visible) / r.move + 1);
                r.last = r.pagingCount - 1;
                r.limit = r.pagingCount === 1 ? 0 : r.vars.itemWidth > r.w ? r.itemW * (r.count - 1) + t * (r.count - 1) : (r.itemW + t) * r.count - r.w - t
            } else {
                r.itemW = r.w;
                r.pagingCount = r.count;
                r.last = r.count - 1
            }
            r.computedW = r.itemW - r.boxPadding
        };
        r.update = function(e, t) {
            r.doMath();
            if (!h) {
                e < r.currentSlide ? r.currentSlide += 1 : e <= r.currentSlide && e !== 0 && (r.currentSlide -= 1);
                r.animatingTo = r.currentSlide
            }
            if (r.vars.controlNav && !r.manualControls) if (t === "add" && !h || r.pagingCount > r.controlNav.length) v.controlNav.update("add");
            else if (t === "remove" && !h || r.pagingCount < r.controlNav.length) {
                if (h && r.currentSlide > r.last) {
                    r.currentSlide -= 1;
                    r.animatingTo -= 1
                }
                v.controlNav.update("remove", r.last)
            }
            r.vars.directionNav && v.directionNav.update()
        };
        r.addSlide = function(t, n) {
            var i = e(t);
            r.count += 1;
            r.last = r.count - 1;
            l && c ? n !== undefined ? r.slides.eq(r.count - n).after(i) : r.container.prepend(i) : n !== undefined ? r.slides.eq(n).before(i) : r.container.append(i);
            r.update(n, "add");
            r.slides = e(r.vars.selector + ":not(.clone)", r);
            r.setup();
            r.vars.added(r)
        };
        r.removeSlide = function(t) {
            var n = isNaN(t) ? r.slides.index(e(t)) : t;
            r.count -= 1;
            r.last = r.count - 1;
            isNaN(t) ? e(t, r.slides).remove() : l && c ? r.slides.eq(r.last).remove() : r.slides.eq(t).remove();
            r.doMath();
            r.update(n, "remove");
            r.slides = e(r.vars.selector + ":not(.clone)", r);
            r.setup();
            r.vars.removed(r)
        };
        v.init()
    };
    e(window).blur(function(e) {
        focused = !1
    }).focus(function(e) {
        focused = !0
    });
    e.flexslider.defaults = {
        namespace: "flex-",
        selector: ".slides > li",
        animation: "fade",
        easing: "swing",
        direction: "horizontal",
        reverse: !1,
        animationLoop: !0,
        smoothHeight: !1,
        startAt: 0,
        slideshow: !0,
        slideshowSpeed: 7e3,
        animationSpeed: 600,
        initDelay: 0,
        randomize: !1,
        thumbCaptions: !1,
        pauseOnAction: !0,
        pauseOnHover: !1,
        pauseInvisible: !0,
        useCSS: !0,
        touch: !0,
        video: !1,
        controlNav: !0,
        directionNav: !0,
        prevText: "Previous",
        nextText: "Next",
        keyboard: !0,
        multipleKeyboard: !1,
        mousewheel: !1,
        pausePlay: !1,
        pauseText: "Pause",
        playText: "Play",
        controlsContainer: "",
        manualControls: "",
        sync: "",
        asNavFor: "",
        itemWidth: 0,
        itemMargin: 0,
        minItems: 1,
        maxItems: 0,
        move: 0,
        allowOneSlide: !0,
        start: function() {},
        before: function() {},
        after: function() {},
        end: function() {},
        added: function() {},
        removed: function() {},
        init: function() {}
    };
    e.fn.flexslider = function(t) {
        t === undefined && (t = {});
        if (typeof t == "object") return this.each(function() {
            var n = e(this),
            r = t.selector ? t.selector: ".slides > li",
            i = n.find(r);
            if (i.length === 1 && t.allowOneSlide === !0 || i.length === 0) {
                i.fadeIn(400);
                t.start && t.start(n)
            } else n.data("flexslider") === undefined && new e.flexslider(this, t)
        });
        var n = e(this).data("flexslider");
        switch (t) {
        case "play":
            n.play();
            break;
        case "pause":
            n.pause();
            break;
        case "stop":
            n.stop();
            break;
        case "next":
            n.flexAnimate(n.getTarget("next"), !0);
            break;
        case "prev":
        case "previous":
            n.flexAnimate(n.getTarget("prev"), !0);
            break;
        default:
            typeof t == "number" && n.flexAnimate(t, !0)
        }
    }
})(jQuery); (function(e) {
    e.flexslider = function(t, n) {
        var r = e(t);
        r.vars = e.extend({},
        e.flexslider.defaults, n);
        var i = r.vars.namespace,
        s = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
        o = ("ontouchstart" in window || s || window.DocumentTouch && document instanceof DocumentTouch) && r.vars.touch,
        u = "click touchend MSPointerUp",
        a = "",
        f,
        l = r.vars.direction === "vertical",
        c = r.vars.reverse,
        h = r.vars.itemWidth > 0,
        p = r.vars.animation === "fade",
        d = r.vars.asNavFor !== "",
        v = {},
        m = !0;
        e.data(t, "flexslider", r);
        v = {
            init: function() {
                r.animating = !1;
                r.currentSlide = parseInt(r.vars.startAt ? r.vars.startAt: 0, 10);
                isNaN(r.currentSlide) && (r.currentSlide = 0);
                r.animatingTo = r.currentSlide;
                r.atEnd = r.currentSlide === 0 || r.currentSlide === r.last;
                r.containerSelector = r.vars.selector.substr(0, r.vars.selector.search(" "));
                r.slides = e(r.vars.selector, r);
                r.container = e(r.containerSelector, r);
                r.count = r.slides.length;
                r.syncExists = e(r.vars.sync).length > 0;
                r.vars.animation === "slide" && (r.vars.animation = "swing");
                r.prop = l ? "top": "marginLeft";
                r.args = {};
                r.manualPause = !1;
                r.stopped = !1;
                r.started = !1;
                r.startTimeout = null;
                r.transitions = !r.vars.video && !p && r.vars.useCSS &&
                function() {
                    var e = document.createElement("div"),
                    t = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                    for (var n in t) if (e.style[t[n]] !== undefined) {
                        r.pfx = t[n].replace("Perspective", "").toLowerCase();
                        r.prop = "-" + r.pfx + "-transform";
                        return ! 0
                    }
                    return ! 1
                } ();
                r.vars.controlsContainer !== "" && (r.controlsContainer = e(r.vars.controlsContainer).length > 0 && e(r.vars.controlsContainer));
                r.vars.manualControls !== "" && (r.manualControls = e(r.vars.manualControls).length > 0 && e(r.vars.manualControls));
                if (r.vars.randomize) {
                    r.slides.sort(function() {
                        return Math.round(Math.random()) - .5
                    });
                    r.container.empty().append(r.slides)
                }
                r.doMath();
                r.setup("init");
                r.vars.controlNav && v.controlNav.setup();
                r.vars.directionNav && v.directionNav.setup();
                r.vars.keyboard && (e(r.containerSelector).length === 1 || r.vars.multipleKeyboard) && e(document).bind("keyup",
                function(e) {
                    var t = e.keyCode;
                    if (!r.animating && (t === 39 || t === 37)) {
                        var n = t === 39 ? r.getTarget("next") : t === 37 ? r.getTarget("prev") : !1;
                        r.flexAnimate(n, r.vars.pauseOnAction)
                    }
                });
                r.vars.mousewheel && r.bind("mousewheel",
                function(e, t, n, i) {
                    e.preventDefault();
                    var s = t < 0 ? r.getTarget("next") : r.getTarget("prev");
                    r.flexAnimate(s, r.vars.pauseOnAction)
                });
                r.vars.pausePlay && v.pausePlay.setup();
                r.vars.slideshow && r.vars.pauseInvisible && v.pauseInvisible.init();
                if (r.vars.slideshow) {
                    r.vars.pauseOnHover && r.hover(function() { ! r.manualPlay && !r.manualPause && r.pause()
                    },
                    function() { ! r.manualPause && !r.manualPlay && !r.stopped && r.play()
                    });
                    if (!r.vars.pauseInvisible || !v.pauseInvisible.isHidden()) r.vars.initDelay > 0 ? r.startTimeout = setTimeout(r.play, r.vars.initDelay) : r.play()
                }
                d && v.asNav.setup();
                o && r.vars.touch && v.touch(); (!p || p && r.vars.smoothHeight) && e(window).bind("resize orientationchange focus", v.resize);
                r.find("img").attr("draggable", "false");
                setTimeout(function() {
                    r.vars.start(r)
                },
                200)
            },
            asNav: {
                setup: function() {
                    r.asNav = !0;
                    r.animatingTo = Math.floor(r.currentSlide / r.move);
                    r.currentItem = r.currentSlide;
                    r.slides.removeClass(i + "active-slide").eq(r.currentItem).addClass(i + "active-slide");
                    if (!s) r.slides.on(u,
                    function(t) {
                        t.preventDefault();
                        var n = e(this),
                        s = n.index(),
                        o = n.offset().left - e(r).scrollLeft();
                        if (o <= 0 && n.hasClass(i + "active-slide")) r.flexAnimate(r.getTarget("prev"), !0);
                        else if (!e(r.vars.asNavFor).data("flexslider").animating && !n.hasClass(i + "active-slide")) {
                            r.direction = r.currentItem < s ? "next": "prev";
                            r.flexAnimate(s, r.vars.pauseOnAction, !1, !0, !0)
                        }
                    });
                    else {
                        t._slider = r;
                        r.slides.each(function() {
                            var t = this;
                            t._gesture = new MSGesture;
                            t._gesture.target = t;
                            t.addEventListener("MSPointerDown",
                            function(e) {
                                e.preventDefault();
                                e.currentTarget._gesture && e.currentTarget._gesture.addPointer(e.pointerId)
                            },
                            !1);
                            t.addEventListener("MSGestureTap",
                            function(t) {
                                t.preventDefault();
                                var n = e(this),
                                i = n.index();
                                if (!e(r.vars.asNavFor).data("flexslider").animating && !n.hasClass("active")) {
                                    r.direction = r.currentItem < i ? "next": "prev";
                                    r.flexAnimate(i, r.vars.pauseOnAction, !1, !0, !0)
                                }
                            })
                        })
                    }
                }
            },
            controlNav: {
                setup: function() {
                    r.manualControls ? v.controlNav.setupManual() : v.controlNav.setupPaging()
                },
                setupPaging: function() {
                    var t = r.vars.controlNav === "thumbnails" ? "control-thumbs": "control-paging",
                    n = 1,
                    s,
                    o;
                    r.controlNavScaffold = e('<ol class="' + i + "control-nav " + i + t + '"></ol>');
                    if (r.pagingCount > 1) for (var f = 0; f < r.pagingCount; f++) {
                        o = r.slides.eq(f);
                        s = r.vars.controlNav === "thumbnails" ? '<img src="' + o.attr("data-thumb") + '"/>': "<a>" + n + "</a>";
                        if ("thumbnails" === r.vars.controlNav && !0 === r.vars.thumbCaptions) {
                            var l = o.attr("data-thumbcaption");
                            "" != l && undefined != l && (s += '<span class="' + i + 'caption">' + l + "</span>")
                        }
                        r.controlNavScaffold.append("<li>" + s + "</li>");
                        n++
                    }
                    r.controlsContainer ? e(r.controlsContainer).append(r.controlNavScaffold) : r.append(r.controlNavScaffold);
                    v.controlNav.set();
                    v.controlNav.active();
                    r.controlNavScaffold.delegate("a, img", u,
                    function(t) {
                        t.preventDefault();
                        if (a === "" || a === t.type) {
                            var n = e(this),
                            s = r.controlNav.index(n);
                            if (!n.hasClass(i + "active")) {
                                r.direction = s > r.currentSlide ? "next": "prev";
                                r.flexAnimate(s, r.vars.pauseOnAction)
                            }
                        }
                        a === "" && (a = t.type);
                        v.setToClearWatchedEvent()
                    })
                },
                setupManual: function() {
                    r.controlNav = r.manualControls;
                    v.controlNav.active();
                    r.controlNav.bind(u,
                    function(t) {
                        t.preventDefault();
                        if (a === "" || a === t.type) {
                            var n = e(this),
                            s = r.controlNav.index(n);
                            if (!n.hasClass(i + "active")) {
                                s > r.currentSlide ? r.direction = "next": r.direction = "prev";
                                r.flexAnimate(s, r.vars.pauseOnAction)
                            }
                        }
                        a === "" && (a = t.type);
                        v.setToClearWatchedEvent()
                    })
                },
                set: function() {
                    var t = r.vars.controlNav === "thumbnails" ? "img": "a";
                    r.controlNav = e("." + i + "control-nav li " + t, r.controlsContainer ? r.controlsContainer: r)
                },
                active: function() {
                    r.controlNav.removeClass(i + "active").eq(r.animatingTo).addClass(i + "active")
                },
                update: function(t, n) {
                    r.pagingCount > 1 && t === "add" ? r.controlNavScaffold.append(e("<li><a>" + r.count + "</a></li>")) : r.pagingCount === 1 ? r.controlNavScaffold.find("li").remove() : r.controlNav.eq(n).closest("li").remove();
                    v.controlNav.set();
                    r.pagingCount > 1 && r.pagingCount !== r.controlNav.length ? r.update(n, t) : v.controlNav.active()
                }
            },
            directionNav: {
                setup: function() {
                    var t = e('<ul class="' + i + 'direction-nav"><li><a class="' + i + 'prev" href="#">' + r.vars.prevText + '</a></li><li><a class="' + i + 'next" href="#">' + r.vars.nextText + "</a></li></ul>");
                    if (r.controlsContainer) {
                        e(r.controlsContainer).append(t);
                        r.directionNav = e("." + i + "direction-nav li a", r.controlsContainer)
                    } else {
                        r.append(t);
                        r.directionNav = e("." + i + "direction-nav li a", r)
                    }
                    v.directionNav.update();
                    r.directionNav.bind(u,
                    function(t) {
                        t.preventDefault();
                        var n;
                        if (a === "" || a === t.type) {
                            n = e(this).hasClass(i + "next") ? r.getTarget("next") : r.getTarget("prev");
                            r.flexAnimate(n, r.vars.pauseOnAction)
                        }
                        a === "" && (a = t.type);
                        v.setToClearWatchedEvent()
                    })
                },
                update: function() {
                    var e = i + "disabled";
                    r.pagingCount === 1 ? r.directionNav.addClass(e).attr("tabindex", "-1") : r.vars.animationLoop ? r.directionNav.removeClass(e).removeAttr("tabindex") : r.animatingTo === 0 ? r.directionNav.removeClass(e).filter("." + i + "prev").addClass(e).attr("tabindex", "-1") : r.animatingTo === r.last ? r.directionNav.removeClass(e).filter("." + i + "next").addClass(e).attr("tabindex", "-1") : r.directionNav.removeClass(e).removeAttr("tabindex")
                }
            },
            pausePlay: {
                setup: function() {
                    var t = e('<div class="' + i + 'pauseplay"><a></a></div>');
                    if (r.controlsContainer) {
                        r.controlsContainer.append(t);
                        r.pausePlay = e("." + i + "pauseplay a", r.controlsContainer)
                    } else {
                        r.append(t);
                        r.pausePlay = e("." + i + "pauseplay a", r)
                    }
                    v.pausePlay.update(r.vars.slideshow ? i + "pause": i + "play");
                    r.pausePlay.bind(u,
                    function(t) {
                        t.preventDefault();
                        if (a === "" || a === t.type) if (e(this).hasClass(i + "pause")) {
                            r.manualPause = !0;
                            r.manualPlay = !1;
                            r.pause()
                        } else {
                            r.manualPause = !1;
                            r.manualPlay = !0;
                            r.play()
                        }
                        a === "" && (a = t.type);
                        v.setToClearWatchedEvent()
                    })
                },
                update: function(e) {
                    e === "play" ? r.pausePlay.removeClass(i + "pause").addClass(i + "play").html(r.vars.playText) : r.pausePlay.removeClass(i + "play").addClass(i + "pause").html(r.vars.pauseText)
                }
            },
            touch: function() {
                var e, n, i, o, u, a, f = !1,
                d = 0,
                v = 0,
                m = 0;
                if (!s) {
                    t.addEventListener("touchstart", g, !1);
                    function g(s) {
                        if (r.animating) s.preventDefault();
                        else if (window.navigator.msPointerEnabled || s.touches.length === 1) {
                            r.pause();
                            o = l ? r.h: r.w;
                            a = Number(new Date);
                            d = s.touches[0].pageX;
                            v = s.touches[0].pageY;
                            i = h && c && r.animatingTo === r.last ? 0 : h && c ? r.limit - (r.itemW + r.vars.itemMargin) * r.move * r.animatingTo: h && r.currentSlide === r.last ? r.limit: h ? (r.itemW + r.vars.itemMargin) * r.move * r.currentSlide: c ? (r.last - r.currentSlide + r.cloneOffset) * o: (r.currentSlide + r.cloneOffset) * o;
                            e = l ? v: d;
                            n = l ? d: v;
                            t.addEventListener("touchmove", y, !1);
                            t.addEventListener("touchend", b, !1)
                        }
                    }
                    function y(t) {
                        d = t.touches[0].pageX;
                        v = t.touches[0].pageY;
                        u = l ? e - v: e - d;
                        f = l ? Math.abs(u) < Math.abs(d - n) : Math.abs(u) < Math.abs(v - n);
                        var s = 500;
                        if (!f || Number(new Date) - a > s) {
                            t.preventDefault();
                            if (!p && r.transitions) {
                                r.vars.animationLoop || (u /= r.currentSlide === 0 && u < 0 || r.currentSlide === r.last && u > 0 ? Math.abs(u) / o + 2 : 1);
                                r.setProps(i + u, "setTouch")
                            }
                        }
                    }
                    function b(s) {
                        t.removeEventListener("touchmove", y, !1);
                        if (r.animatingTo === r.currentSlide && !f && u !== null) {
                            var l = c ? -u: u,
                            h = l > 0 ? r.getTarget("next") : r.getTarget("prev");
                            r.canAdvance(h) && (Number(new Date) - a < 550 && Math.abs(l) > 50 || Math.abs(l) > o / 2) ? r.flexAnimate(h, r.vars.pauseOnAction) : p || r.flexAnimate(r.currentSlide, r.vars.pauseOnAction, !0)
                        }
                        t.removeEventListener("touchend", b, !1);
                        e = null;
                        n = null;
                        u = null;
                        i = null
                    }
                } else {
                    t.style.msTouchAction = "none";
                    t._gesture = new MSGesture;
                    t._gesture.target = t;
                    t.addEventListener("MSPointerDown", w, !1);
                    t._slider = r;
                    t.addEventListener("MSGestureChange", E, !1);
                    t.addEventListener("MSGestureEnd", S, !1);
                    function w(e) {
                        e.stopPropagation();
                        if (r.animating) e.preventDefault();
                        else {
                            r.pause();
                            t._gesture.addPointer(e.pointerId);
                            m = 0;
                            o = l ? r.h: r.w;
                            a = Number(new Date);
                            i = h && c && r.animatingTo === r.last ? 0 : h && c ? r.limit - (r.itemW + r.vars.itemMargin) * r.move * r.animatingTo: h && r.currentSlide === r.last ? r.limit: h ? (r.itemW + r.vars.itemMargin) * r.move * r.currentSlide: c ? (r.last - r.currentSlide + r.cloneOffset) * o: (r.currentSlide + r.cloneOffset) * o
                        }
                    }
                    function E(e) {
                        e.stopPropagation();
                        var n = e.target._slider;
                        if (!n) return;
                        var r = -e.translationX,
                        s = -e.translationY;
                        m += l ? s: r;
                        u = m;
                        f = l ? Math.abs(m) < Math.abs( - r) : Math.abs(m) < Math.abs( - s);
                        if (e.detail === e.MSGESTURE_FLAG_INERTIA) {
                            setImmediate(function() {
                                t._gesture.stop()
                            });
                            return
                        }
                        if (!f || Number(new Date) - a > 500) {
                            e.preventDefault();
                            if (!p && n.transitions) {
                                n.vars.animationLoop || (u = m / (n.currentSlide === 0 && m < 0 || n.currentSlide === n.last && m > 0 ? Math.abs(m) / o + 2 : 1));
                                n.setProps(i + u, "setTouch")
                            }
                        }
                    }
                    function S(t) {
                        t.stopPropagation();
                        var r = t.target._slider;
                        if (!r) return;
                        if (r.animatingTo === r.currentSlide && !f && u !== null) {
                            var s = c ? -u: u,
                            l = s > 0 ? r.getTarget("next") : r.getTarget("prev");
                            r.canAdvance(l) && (Number(new Date) - a < 550 && Math.abs(s) > 50 || Math.abs(s) > o / 2) ? r.flexAnimate(l, r.vars.pauseOnAction) : p || r.flexAnimate(r.currentSlide, r.vars.pauseOnAction, !0)
                        }
                        e = null;
                        n = null;
                        u = null;
                        i = null;
                        m = 0
                    }
                }
            },
            resize: function() {
                if (!r.animating && r.is(":visible")) {
                    h || r.doMath();
                    if (p) v.smoothHeight();
                    else if (h) {
                        r.slides.width(r.computedW);
                        r.update(r.pagingCount);
                        r.setProps()
                    } else if (l) {
                        r.viewport.height(r.h);
                        r.setProps(r.h, "setTotal")
                    } else {
                        r.vars.smoothHeight && v.smoothHeight();
                        r.newSlides.width(r.computedW);
                        r.setProps(r.computedW, "setTotal")
                    }
                }
            },
            smoothHeight: function(e) {
                if (!l || p) {
                    var t = p ? r: r.viewport;
                    e ? t.animate({
                        height: r.slides.eq(r.animatingTo).height()
                    },
                    e) : t.height(r.slides.eq(r.animatingTo).height())
                }
            },
            sync: function(t) {
                var n = e(r.vars.sync).data("flexslider"),
                i = r.animatingTo;
                switch (t) {
                case "animate":
                    n.flexAnimate(i, r.vars.pauseOnAction, !1, !0);
                    break;
                case "play":
                    !n.playing && !n.asNav && n.play();
                    break;
                case "pause":
                    n.pause()
                }
            },
            uniqueID: function(t) {
                t.find("[id]").each(function() {
                    var t = e(this);
                    t.attr("id", t.attr("id") + "_clone")
                });
                return t
            },
            pauseInvisible: {
                visProp: null,
                init: function() {
                    var e = ["webkit", "moz", "ms", "o"];
                    if ("hidden" in document) return "hidden";
                    for (var t = 0; t < e.length; t++) e[t] + "Hidden" in document && (v.pauseInvisible.visProp = e[t] + "Hidden");
                    if (v.pauseInvisible.visProp) {
                        var n = v.pauseInvisible.visProp.replace(/[H|h]idden/, "") + "visibilitychange";
                        document.addEventListener(n,
                        function() {
                            v.pauseInvisible.isHidden() ? r.startTimeout ? clearTimeout(r.startTimeout) : r.pause() : r.started ? r.play() : r.vars.initDelay > 0 ? setTimeout(r.play, r.vars.initDelay) : r.play()
                        })
                    }
                },
                isHidden: function() {
                    return document[v.pauseInvisible.visProp] || !1
                }
            },
            setToClearWatchedEvent: function() {
                clearTimeout(f);
                f = setTimeout(function() {
                    a = ""
                },
                3e3)
            }
        };
        r.flexAnimate = function(t, n, s, u, a) { ! r.vars.animationLoop && t !== r.currentSlide && (r.direction = t > r.currentSlide ? "next": "prev");
            d && r.pagingCount === 1 && (r.direction = r.currentItem < t ? "next": "prev");
            if (!r.animating && (r.canAdvance(t, a) || s) && r.is(":visible")) {
                if (d && u) {
                    var f = e(r.vars.asNavFor).data("flexslider");
                    r.atEnd = t === 0 || t === r.count - 1;
                    f.flexAnimate(t, !0, !1, !0, a);
                    r.direction = r.currentItem < t ? "next": "prev";
                    f.direction = r.direction;
                    if (Math.ceil((t + 1) / r.visible) - 1 === r.currentSlide || t === 0) {
                        r.currentItem = t;
                        r.slides.removeClass(i + "active-slide").eq(t).addClass(i + "active-slide");
                        return ! 1
                    }
                    r.currentItem = t;
                    r.slides.removeClass(i + "active-slide").eq(t).addClass(i + "active-slide");
                    t = Math.floor(t / r.visible)
                }
                r.animating = !0;
                r.animatingTo = t;
                n && r.pause();
                r.vars.before(r);
                r.syncExists && !a && v.sync("animate");
                r.vars.controlNav && v.controlNav.active();
                h || r.slides.removeClass(i + "active-slide").eq(t).addClass(i + "active-slide");
                r.atEnd = t === 0 || t === r.last;
                r.vars.directionNav && v.directionNav.update();
                if (t === r.last) {
                    r.vars.end(r);
                    r.vars.animationLoop || r.pause()
                }
                if (!p) {
                    var m = l ? r.slides.filter(":first").height() : r.computedW,
                    g,
                    y,
                    b;
                    if (h) {
                        g = r.vars.itemMargin;
                        b = (r.itemW + g) * r.move * r.animatingTo;
                        y = b > r.limit && r.visible !== 1 ? r.limit: b
                    } else r.currentSlide === 0 && t === r.count - 1 && r.vars.animationLoop && r.direction !== "next" ? y = c ? (r.count + r.cloneOffset) * m: 0 : r.currentSlide === r.last && t === 0 && r.vars.animationLoop && r.direction !== "prev" ? y = c ? 0 : (r.count + 1) * m: y = c ? (r.count - 1 - t + r.cloneOffset) * m: (t + r.cloneOffset) * m;
                    r.setProps(y, "", r.vars.animationSpeed);
                    if (r.transitions) {
                        if (!r.vars.animationLoop || !r.atEnd) {
                            r.animating = !1;
                            r.currentSlide = r.animatingTo
                        }
                        r.container.unbind("webkitTransitionEnd transitionend");
                        r.container.bind("webkitTransitionEnd transitionend",
                        function() {
                            r.wrapup(m)
                        })
                    } else r.container.animate(r.args, r.vars.animationSpeed, r.vars.easing,
                    function() {
                        r.wrapup(m)
                    })
                } else if (!o) {
                    r.slides.eq(r.currentSlide).css({
                        zIndex: 1
                    }).animate({
                        opacity: 0
                    },
                    r.vars.animationSpeed, r.vars.easing);
                    r.slides.eq(t).css({
                        zIndex: 2
                    }).animate({
                        opacity: 1
                    },
                    r.vars.animationSpeed, r.vars.easing, r.wrapup)
                } else {
                    r.slides.eq(r.currentSlide).css({
                        opacity: 0,
                        zIndex: 1
                    });
                    r.slides.eq(t).css({
                        opacity: 1,
                        zIndex: 2
                    });
                    r.wrapup(m)
                }
                r.vars.smoothHeight && v.smoothHeight(r.vars.animationSpeed)
            }
        };
        r.wrapup = function(e) { ! p && !h && (r.currentSlide === 0 && r.animatingTo === r.last && r.vars.animationLoop ? r.setProps(e, "jumpEnd") : r.currentSlide === r.last && r.animatingTo === 0 && r.vars.animationLoop && r.setProps(e, "jumpStart"));
            r.animating = !1;
            r.currentSlide = r.animatingTo;
            r.vars.after(r)
        };
        r.animateSlides = function() { ! r.animating && m && r.flexAnimate(r.getTarget("next"))
        };
        r.pause = function() {
            clearInterval(r.animatedSlides);
            r.animatedSlides = null;
            r.playing = !1;
            r.vars.pausePlay && v.pausePlay.update("play");
            r.syncExists && v.sync("pause")
        };
        r.play = function() {
            r.playing && clearInterval(r.animatedSlides);
            r.animatedSlides = r.animatedSlides || setInterval(r.animateSlides, r.vars.slideshowSpeed);
            r.started = r.playing = !0;
            r.vars.pausePlay && v.pausePlay.update("pause");
            r.syncExists && v.sync("play")
        };
        r.stop = function() {
            r.pause();
            r.stopped = !0
        };
        r.canAdvance = function(e, t) {
            var n = d ? r.pagingCount - 1 : r.last;
            return t ? !0 : d && r.currentItem === r.count - 1 && e === 0 && r.direction === "prev" ? !0 : d && r.currentItem === 0 && e === r.pagingCount - 1 && r.direction !== "next" ? !1 : e === r.currentSlide && !d ? !1 : r.vars.animationLoop ? !0 : r.atEnd && r.currentSlide === 0 && e === n && r.direction !== "next" ? !1 : r.atEnd && r.currentSlide === n && e === 0 && r.direction === "next" ? !1 : !0
        };
        r.getTarget = function(e) {
            r.direction = e;
            return e === "next" ? r.currentSlide === r.last ? 0 : r.currentSlide + 1 : r.currentSlide === 0 ? r.last: r.currentSlide - 1
        };
        r.setProps = function(e, t, n) {
            var i = function() {
                var n = e ? e: (r.itemW + r.vars.itemMargin) * r.move * r.animatingTo,
                i = function() {
                    if (h) return t === "setTouch" ? e: c && r.animatingTo === r.last ? 0 : c ? r.limit - (r.itemW + r.vars.itemMargin) * r.move * r.animatingTo: r.animatingTo === r.last ? r.limit: n;
                    switch (t) {
                    case "setTotal":
                        return c ? (r.count - 1 - r.currentSlide + r.cloneOffset) * e: (r.currentSlide + r.cloneOffset) * e;
                    case "setTouch":
                        return c ? e: e;
                    case "jumpEnd":
                        return c ? e: r.count * e;
                    case "jumpStart":
                        return c ? r.count * e: e;
                    default:
                        return e
                    }
                } ();
                return i * -1 + "px"
            } ();
            if (r.transitions) {
                i = l ? "translate3d(0," + i + ",0)": "translate3d(" + i + ",0,0)";
                n = n !== undefined ? n / 1e3 + "s": "0s";
                r.container.css("-" + r.pfx + "-transition-duration", n);
                r.container.css("transition-duration", n)
            }
            r.args[r.prop] = i; (r.transitions || n === undefined) && r.container.css(r.args);
            r.container.css("transform", i)
        };
        r.setup = function(t) {
            if (!p) {
                var n, s;
                if (t === "init") {
                    r.viewport = e('<div class="' + i + 'viewport"></div>').css({
                        overflow: "hidden",
                        position: "relative"
                    }).appendTo(r).append(r.container);
                    r.cloneCount = 0;
                    r.cloneOffset = 0;
                    if (c) {
                        s = e.makeArray(r.slides).reverse();
                        r.slides = e(s);
                        r.container.empty().append(r.slides)
                    }
                }
                if (r.vars.animationLoop && !h) {
                    r.cloneCount = 2;
                    r.cloneOffset = 1;
                    t !== "init" && r.container.find(".clone").remove();
                    r.container.append(r.slides.first().clone().addClass("clone").attr("aria-hidden", "true")).prepend(r.slides.last().clone().addClass("clone").attr("aria-hidden", "true"));
                    v.uniqueID(r.slides.first().clone().addClass("clone")).appendTo(r.container);
                    v.uniqueID(r.slides.last().clone().addClass("clone")).prependTo(r.container)
                }
                r.newSlides = e(r.vars.selector, r);
                n = c ? r.count - 1 - r.currentSlide + r.cloneOffset: r.currentSlide + r.cloneOffset;
                if (l && !h) {
                    r.container.height((r.count + r.cloneCount) * 200 + "%").css("position", "absolute").width("100%");
                    setTimeout(function() {
                        r.newSlides.css({
                            display: "block"
                        });
                        r.doMath();
                        r.viewport.height(r.h);
                        r.setProps(n * r.h, "init")
                    },
                    t === "init" ? 100 : 0)
                } else {
                    r.container.width((r.count + r.cloneCount) * 200 + "%");
                    r.setProps(n * r.computedW, "init");
                    setTimeout(function() {
                        r.doMath();
                        r.newSlides.css({
                            width: r.computedW,
                            "float": "left",
                            display: "block"
                        });
                        r.vars.smoothHeight && v.smoothHeight()
                    },
                    t === "init" ? 100 : 0)
                }
            } else {
                r.slides.css({
                    width: "100%",
                    "float": "left",
                    marginRight: "-100%",
                    position: "relative"
                });
                t === "init" && (o ? r.slides.css({
                    opacity: 0,
                    display: "block",
                    webkitTransition: "opacity " + r.vars.animationSpeed / 1e3 + "s ease",
                    zIndex: 1
                }).eq(r.currentSlide).css({
                    opacity: 1,
                    zIndex: 2
                }) : r.slides.css({
                    opacity: 0,
                    display: "block",
                    zIndex: 1
                }).eq(r.currentSlide).css({
                    zIndex: 2
                }).animate({
                    opacity: 1
                },
                r.vars.animationSpeed, r.vars.easing));
                r.vars.smoothHeight && v.smoothHeight()
            }
            h || r.slides.removeClass(i + "active-slide").eq(r.currentSlide).addClass(i + "active-slide");
            r.vars.init(r)
        };
        r.doMath = function() {
            var e = r.slides.first(),
            t = r.vars.itemMargin,
            n = r.vars.minItems,
            i = r.vars.maxItems;
            r.w = r.viewport === undefined ? r.width() : r.viewport.width();
            r.h = e.height();
            r.boxPadding = e.outerWidth() - e.width();
            if (h) {
                r.itemT = r.vars.itemWidth + t;
                r.minW = n ? n * r.itemT: r.w;
                r.maxW = i ? i * r.itemT - t: r.w;
                r.itemW = r.minW > r.w ? (r.w - t * (n - 1)) / n: r.maxW < r.w ? (r.w - t * (i - 1)) / i: r.vars.itemWidth > r.w ? r.w: r.vars.itemWidth;
                r.visible = Math.floor(r.w / r.itemW);
                r.move = r.vars.move > 0 && r.vars.move < r.visible ? r.vars.move: r.visible;
                r.pagingCount = Math.ceil((r.count - r.visible) / r.move + 1);
                r.last = r.pagingCount - 1;
                r.limit = r.pagingCount === 1 ? 0 : r.vars.itemWidth > r.w ? r.itemW * (r.count - 1) + t * (r.count - 1) : (r.itemW + t) * r.count - r.w - t
            } else {
                r.itemW = r.w;
                r.pagingCount = r.count;
                r.last = r.count - 1
            }
            r.computedW = r.itemW - r.boxPadding
        };
        r.update = function(e, t) {
            r.doMath();
            if (!h) {
                e < r.currentSlide ? r.currentSlide += 1 : e <= r.currentSlide && e !== 0 && (r.currentSlide -= 1);
                r.animatingTo = r.currentSlide
            }
            if (r.vars.controlNav && !r.manualControls) if (t === "add" && !h || r.pagingCount > r.controlNav.length) v.controlNav.update("add");
            else if (t === "remove" && !h || r.pagingCount < r.controlNav.length) {
                if (h && r.currentSlide > r.last) {
                    r.currentSlide -= 1;
                    r.animatingTo -= 1
                }
                v.controlNav.update("remove", r.last)
            }
            r.vars.directionNav && v.directionNav.update()
        };
        r.addSlide = function(t, n) {
            var i = e(t);
            r.count += 1;
            r.last = r.count - 1;
            l && c ? n !== undefined ? r.slides.eq(r.count - n).after(i) : r.container.prepend(i) : n !== undefined ? r.slides.eq(n).before(i) : r.container.append(i);
            r.update(n, "add");
            r.slides = e(r.vars.selector + ":not(.clone)", r);
            r.setup();
            r.vars.added(r)
        };
        r.removeSlide = function(t) {
            var n = isNaN(t) ? r.slides.index(e(t)) : t;
            r.count -= 1;
            r.last = r.count - 1;
            isNaN(t) ? e(t, r.slides).remove() : l && c ? r.slides.eq(r.last).remove() : r.slides.eq(t).remove();
            r.doMath();
            r.update(n, "remove");
            r.slides = e(r.vars.selector + ":not(.clone)", r);
            r.setup();
            r.vars.removed(r)
        };
        v.init()
    };
    e(window).blur(function(e) {
        focused = !1
    }).focus(function(e) {
        focused = !0
    });
    e.flexslider.defaults = {
        namespace: "flex-",
        selector: ".slides > li",
        animation: "fade",
        easing: "swing",
        direction: "horizontal",
        reverse: !1,
        animationLoop: !0,
        smoothHeight: !1,
        startAt: 0,
        slideshow: !0,
        slideshowSpeed: 7e3,
        animationSpeed: 600,
        initDelay: 0,
        randomize: !1,
        thumbCaptions: !1,
        pauseOnAction: !0,
        pauseOnHover: !1,
        pauseInvisible: !0,
        useCSS: !0,
        touch: !0,
        video: !1,
        controlNav: !0,
        directionNav: !0,
        prevText: "Previous",
        nextText: "Next",
        keyboard: !0,
        multipleKeyboard: !1,
        mousewheel: !1,
        pausePlay: !1,
        pauseText: "Pause",
        playText: "Play",
        controlsContainer: "",
        manualControls: "",
        sync: "",
        asNavFor: "",
        itemWidth: 0,
        itemMargin: 0,
        minItems: 1,
        maxItems: 0,
        move: 0,
        allowOneSlide: !0,
        start: function() {},
        before: function() {},
        after: function() {},
        end: function() {},
        added: function() {},
        removed: function() {},
        init: function() {}
    };
    e.fn.flexslider = function(t) {
        t === undefined && (t = {});
        if (typeof t == "object") return this.each(function() {
            var n = e(this),
            r = t.selector ? t.selector: ".slides > li",
            i = n.find(r);
            if (i.length === 1 && t.allowOneSlide === !0 || i.length === 0) {
                i.fadeIn(400);
                t.start && t.start(n)
            } else n.data("flexslider") === undefined && new e.flexslider(this, t)
        });
        var n = e(this).data("flexslider");
        switch (t) {
        case "play":
            n.play();
            break;
        case "pause":
            n.pause();
            break;
        case "stop":
            n.stop();
            break;
        case "next":
            n.flexAnimate(n.getTarget("next"), !0);
            break;
        case "prev":
        case "previous":
            n.flexAnimate(n.getTarget("prev"), !0);
            break;
        default:
            typeof t == "number" && n.flexAnimate(t, !0)
        }
    }
})(jQuery);
/*! iCheck v1.0.2 by Damir Sultanov, http://git.io/arlzeA, MIT Licensed */
(function(f) {
    function A(a, b, d) {
        var c = a[0],
        g = /er/.test(d) ? _indeterminate: /bl/.test(d) ? n: k,
        e = d == _update ? {
            checked: c[k],
            disabled: c[n],
            indeterminate: "true" == a.attr(_indeterminate) || "false" == a.attr(_determinate)
        }: c[g];
        if (/^(ch|di|in)/.test(d) && !e) x(a, g);
        else if (/^(un|en|de)/.test(d) && e) q(a, g);
        else if (d == _update) for (var f in e) e[f] ? x(a, f, !0) : q(a, f, !0);
        else if (!b || "toggle" == d) {
            if (!b) a[_callback]("ifClicked");
            e ? c[_type] !== r && q(a, g) : x(a, g)
        }
    }
    function x(a, b, d) {
        var c = a[0],
        g = a.parent(),
        e = b == k,
        u = b == _indeterminate,
        v = b == n,
        s = u ? _determinate: e ? y: "enabled",
        F = l(a, s + t(c[_type])),
        B = l(a, b + t(c[_type]));
        if (!0 !== c[b]) {
            if (!d && b == k && c[_type] == r && c.name) {
                var w = a.closest("form"),
                p = 'input[name="' + c.name + '"]',
                p = w.length ? w.find(p) : f(p);
                p.each(function() {
                    this !== c && f(this).data(m) && q(f(this), b)
                })
            }
            u ? (c[b] = !0, c[k] && q(a, k, "force")) : (d || (c[b] = !0), e && c[_indeterminate] && q(a, _indeterminate, !1));
            D(a, e, b, d)
        }
        c[n] && l(a, _cursor, !0) && g.find("." + C).css(_cursor, "default");
        g[_add](B || l(a, b) || "");
        g.attr("role") && !u && g.attr("aria-" + (v ? n: k), "true");
        g[_remove](F || l(a, s) || "")
    }
    function q(a, b, d) {
        var c = a[0],
        g = a.parent(),
        e = b == k,
        f = b == _indeterminate,
        m = b == n,
        s = f ? _determinate: e ? y: "enabled",
        q = l(a, s + t(c[_type])),
        r = l(a, b + t(c[_type]));
        if (!1 !== c[b]) {
            if (f || !d || "force" == d) c[b] = !1;
            D(a, e, s, d)
        } ! c[n] && l(a, _cursor, !0) && g.find("." + C).css(_cursor, "pointer");
        g[_remove](r || l(a, b) || "");
        g.attr("role") && !f && g.attr("aria-" + (m ? n: k), "false");
        g[_add](q || l(a, s) || "")
    }
    function E(a, b) {
        if (a.data(m)) {
            a.parent().html(a.attr("style", a.data(m).s || ""));
            if (b) a[_callback](b);
            a.off(".i").unwrap();
            f(_label + '[for="' + a[0].id + '"]').add(a.closest(_label)).off(".i")
        }
    }
    function l(a, b, f) {
        if (a.data(m)) return a.data(m).o[b + (f ? "": "Class")]
    }
    function t(a) {
        return a.charAt(0).toUpperCase() + a.slice(1)
    }
    function D(a, b, f, c) {
        if (!c) {
            if (b) a[_callback]("ifToggled");
            a[_callback]("ifChanged")[_callback]("if" + t(f))
        }
    }
    var m = "iCheck",
    C = m + "-helper",
    r = "radio",
    k = "checked",
    y = "un" + k,
    n = "disabled";
    _determinate = "determinate";
    _indeterminate = "in" + _determinate;
    _update = "update";
    _type = "type";
    _click = "click";
    _touch = "touchbegin.i touchend.i";
    _add = "addClass";
    _remove = "removeClass";
    _callback = "trigger";
    _label = "label";
    _cursor = "cursor";
    _mobile = /ipad|iphone|ipod|android|blackberry|windows phone|opera mini|silk/i.test(navigator.userAgent);
    f.fn[m] = function(a, b) {
        var d = 'input[type="checkbox"], input[type="' + r + '"]',
        c = f(),
        g = function(a) {
            a.each(function() {
                var a = f(this);
                c = a.is(d) ? c.add(a) : c.add(a.find(d))
            })
        };
        if (/^(check|uncheck|toggle|indeterminate|determinate|disable|enable|update|destroy)$/i.test(a)) return a = a.toLowerCase(),
        g(this),
        c.each(function() {
            var c = f(this);
            "destroy" == a ? E(c, "ifDestroyed") : A(c, !0, a);
            f.isFunction(b) && b()
        });
        if ("object" != typeof a && a) return this;
        var e = f.extend({
            checkedClass: k,
            disabledClass: n,
            indeterminateClass: _indeterminate,
            labelHover: !0
        },
        a),
        l = e.handle,
        v = e.hoverClass || "hover",
        s = e.focusClass || "focus",
        t = e.activeClass || "active",
        B = !!e.labelHover,
        w = e.labelHoverClass || "hover",
        p = ("" + e.increaseArea).replace("%", "") | 0;
        if ("checkbox" == l || l == r) d = 'input[type="' + l + '"]'; - 50 > p && (p = -50);
        g(this);
        return c.each(function() {
            var a = f(this);
            E(a);
            var c = this,
            b = c.id,
            g = -p + "%",
            d = 100 + 2 * p + "%",
            d = {
                position: "absolute",
                top: g,
                left: g,
                display: "block",
                width: d,
                height: d,
                margin: 0,
                padding: 0,
                background: "#fff",
                border: 0,
                opacity: 0
            },
            g = _mobile ? {
                position: "absolute",
                visibility: "hidden"
            }: p ? d: {
                position: "absolute",
                opacity: 0
            },
            l = "checkbox" == c[_type] ? e.checkboxClass || "icheckbox": e.radioClass || "i" + r,
            z = f(_label + '[for="' + b + '"]').add(a.closest(_label)),
            u = !!e.aria,
            y = m + "-" + Math.random().toString(36).substr(2, 6),
            h = '<div class="' + l + '" ' + (u ? 'role="' + c[_type] + '" ': "");
            u && z.each(function() {
                h += 'aria-labelledby="';
                this.id ? h += this.id: (this.id = y, h += y);
                h += '"'
            });
            h = a.wrap(h + "/>")[_callback]("ifCreated").parent().append(e.insert);
            d = f('<ins class="' + C + '"/>').css(d).appendTo(h);
            a.data(m, {
                o: e,
                s: a.attr("style")
            }).css(g);
            e.inheritClass && h[_add](c.className || "");
            e.inheritID && b && h.attr("id", m + "-" + b);
            "static" == h.css("position") && h.css("position", "relative");
            A(a, !0, _update);
            if (z.length) z.on(_click + ".i mouseover.i mouseout.i " + _touch,
            function(b) {
                var d = b[_type],
                e = f(this);
                if (!c[n]) {
                    if (d == _click) {
                        if (f(b.target).is("a")) return;
                        A(a, !1, !0)
                    } else B && (/ut|nd/.test(d) ? (h[_remove](v), e[_remove](w)) : (h[_add](v), e[_add](w)));
                    if (_mobile) b.stopPropagation();
                    else return ! 1
                }
            });
            a.on(_click + ".i focus.i blur.i keyup.i keydown.i keypress.i",
            function(b) {
                var d = b[_type];
                b = b.keyCode;
                if (d == _click) return ! 1;
                if ("keydown" == d && 32 == b) return c[_type] == r && c[k] || (c[k] ? q(a, k) : x(a, k)),
                !1;
                if ("keyup" == d && c[_type] == r) ! c[k] && x(a, k);
                else if (/us|ur/.test(d)) h["blur" == d ? _remove: _add](s)
            });
            d.on(_click + " mousedown mouseup mouseover mouseout " + _touch,
            function(b) {
                var d = b[_type],
                e = /wn|up/.test(d) ? t: v;
                if (!c[n]) {
                    if (d == _click) A(a, !1, !0);
                    else {
                        if (/wn|er|in/.test(d)) h[_add](e);
                        else h[_remove](e + " " + t);
                        if (z.length && B && e == v) z[/ut|nd/.test(d) ? _remove: _add](w)
                    }
                    if (_mobile) b.stopPropagation();
                    else return ! 1
                }
            })
        })
    }
})(window.jQuery || window.Zepto); (function(b, f) {
    "function" === typeof define && define.amd ? define(["jquery"], f) : b.jQuery ? f(b.jQuery) : f(b.Zepto)
})(this,
function(b, f) {
    b.fn.jPlayer = function(a) {
        var c = "string" === typeof a,
        d = Array.prototype.slice.call(arguments, 1),
        e = this;
        a = !c && d.length ? b.extend.apply(null, [!0, a].concat(d)) : a;
        if (c && "_" === a.charAt(0)) return e;
        c ? this.each(function() {
            var c = b(this).data("jPlayer"),
            h = c && b.isFunction(c[a]) ? c[a].apply(c, d) : c;
            if (h !== c && h !== f) return e = h,
            !1
        }) : this.each(function() {
            var c = b(this).data("jPlayer");
            c ? c.option(a || {}) : b(this).data("jPlayer", new b.jPlayer(a, this))
        });
        return e
    };
    b.jPlayer = function(a, c) {
        if (arguments.length) {
            this.element = b(c);
            this.options = b.extend(!0, {},
            this.options, a);
            var d = this;
            this.element.bind("remove.jPlayer",
            function() {
                d.destroy()
            });
            this._init()
        }
    };
    "function" !== typeof b.fn.stop && (b.fn.stop = function() {});
    b.jPlayer.emulateMethods = "load play pause";
    b.jPlayer.emulateStatus = "src readyState networkState currentTime duration paused ended playbackRate";
    b.jPlayer.emulateOptions = "muted volume";
    b.jPlayer.reservedEvent = "ready flashreset resize repeat error warning";
    b.jPlayer.event = {};
    b.each("ready setmedia flashreset resize repeat click error warning loadstart progress suspend abort emptied stalled play pause loadedmetadata loadeddata waiting playing canplay canplaythrough seeking seeked timeupdate ended ratechange durationchange volumechange".split(" "),
    function() {
        b.jPlayer.event[this] = "jPlayer_" + this
    });
    b.jPlayer.htmlEvent = "loadstart abort emptied stalled loadedmetadata loadeddata canplay canplaythrough".split(" ");
    b.jPlayer.pause = function() {
        b.each(b.jPlayer.prototype.instances,
        function(a, c) {
            c.data("jPlayer").status.srcSet && c.jPlayer("pause")
        })
    };
    b.jPlayer.timeFormat = {
        showHour: !1,
        showMin: !0,
        showSec: !0,
        padHour: !1,
        padMin: !0,
        padSec: !0,
        sepHour: ":",
        sepMin: ":",
        sepSec: ""
    };
    var l = function() {
        this.init()
    };
    l.prototype = {
        init: function() {
            this.options = {
                timeFormat: b.jPlayer.timeFormat
            }
        },
        time: function(a) {
            var c = new Date(1E3 * (a && "number" === typeof a ? a: 0)),
            b = c.getUTCHours();
            a = this.options.timeFormat.showHour ? c.getUTCMinutes() : c.getUTCMinutes() + 60 * b;
            c = this.options.timeFormat.showMin ? c.getUTCSeconds() : c.getUTCSeconds() + 60 * a;
            b = this.options.timeFormat.padHour && 10 > b ? "0" + b: b;
            a = this.options.timeFormat.padMin && 10 > a ? "0" + a: a;
            c = this.options.timeFormat.padSec && 10 > c ? "0" + c: c;
            b = "" + (this.options.timeFormat.showHour ? b + this.options.timeFormat.sepHour: "");
            b += this.options.timeFormat.showMin ? a + this.options.timeFormat.sepMin: "";
            return b += this.options.timeFormat.showSec ? c + this.options.timeFormat.sepSec: ""
        }
    };
    var n = new l;
    b.jPlayer.convertTime = function(a) {
        return n.time(a)
    };
    b.jPlayer.uaBrowser = function(a) {
        a = a.toLowerCase();
        var c = /(opera)(?:.*version)?[ \/]([\w.]+)/,
        b = /(msie) ([\w.]+)/,
        e = /(mozilla)(?:.*? rv:([\w.]+))?/;
        a = /(webkit)[ \/]([\w.]+)/.exec(a) || c.exec(a) || b.exec(a) || 0 > a.indexOf("compatible") && e.exec(a) || [];
        return {
            browser: a[1] || "",
            version: a[2] || "0"
        }
    };
    b.jPlayer.uaPlatform = function(a) {
        var c = a.toLowerCase(),
        b = /(android)/,
        e = /(mobile)/;
        a = /(ipad|iphone|ipod|android|blackberry|playbook|windows ce|webos)/.exec(c) || [];
        c = /(ipad|playbook)/.exec(c) || !e.exec(c) && b.exec(c) || [];
        a[1] && (a[1] = a[1].replace(/\s/g, "_"));
        return {
            platform: a[1] || "",
            tablet: c[1] || ""
        }
    };
    b.jPlayer.browser = {};
    b.jPlayer.platform = {};
    var k = b.jPlayer.uaBrowser(navigator.userAgent);
    k.browser && (b.jPlayer.browser[k.browser] = !0, b.jPlayer.browser.version = k.version);
    k = b.jPlayer.uaPlatform(navigator.userAgent);
    k.platform && (b.jPlayer.platform[k.platform] = !0, b.jPlayer.platform.mobile = !k.tablet, b.jPlayer.platform.tablet = !!k.tablet);
    b.jPlayer.getDocMode = function() {
        var a;
        b.jPlayer.browser.msie && (document.documentMode ? a = document.documentMode: (a = 5, document.compatMode && "CSS1Compat" === document.compatMode && (a = 7)));
        return a
    };
    b.jPlayer.browser.documentMode = b.jPlayer.getDocMode();
    b.jPlayer.nativeFeatures = {
        init: function() {
            var a = document,
            c = a.createElement("video"),
            b = {
                w3c: "fullscreenEnabled fullscreenElement requestFullscreen exitFullscreen fullscreenchange fullscreenerror".split(" "),
                moz: "mozFullScreenEnabled mozFullScreenElement mozRequestFullScreen mozCancelFullScreen mozfullscreenchange mozfullscreenerror".split(" "),
                webkit: " webkitCurrentFullScreenElement webkitRequestFullScreen webkitCancelFullScreen webkitfullscreenchange ".split(" "),
                webkitVideo: "webkitSupportsFullscreen webkitDisplayingFullscreen webkitEnterFullscreen webkitExitFullscreen  ".split(" ")
            },
            e = ["w3c", "moz", "webkit", "webkitVideo"],
            g,
            h;
            this.fullscreen = c = {
                support: {
                    w3c: !!a[b.w3c[0]],
                    moz: !!a[b.moz[0]],
                    webkit: "function" === typeof a[b.webkit[3]],
                    webkitVideo: "function" === typeof c[b.webkitVideo[2]]
                },
                used: {}
            };
            g = 0;
            for (h = e.length; g < h; g++) {
                var f = e[g];
                if (c.support[f]) {
                    c.spec = f;
                    c.used[f] = !0;
                    break
                }
            }
            if (c.spec) {
                var m = b[c.spec];
                c.api = {
                    fullscreenEnabled: !0,
                    fullscreenElement: function(c) {
                        c = c ? c: a;
                        return c[m[1]]
                    },
                    requestFullscreen: function(a) {
                        return a[m[2]]()
                    },
                    exitFullscreen: function(c) {
                        c = c ? c: a;
                        return c[m[3]]()
                    }
                };
                c.event = {
                    fullscreenchange: m[4],
                    fullscreenerror: m[5]
                }
            } else c.api = {
                fullscreenEnabled: !1,
                fullscreenElement: function() {
                    return null
                },
                requestFullscreen: function() {},
                exitFullscreen: function() {}
            },
            c.event = {}
        }
    };
    b.jPlayer.nativeFeatures.init();
    b.jPlayer.focus = null;
    b.jPlayer.keyIgnoreElementNames = "INPUT TEXTAREA";
    var p = function(a) {
        var c = b.jPlayer.focus,
        d;
        c && (b.each(b.jPlayer.keyIgnoreElementNames.split(/\s+/g),
        function(c, b) {
            if (a.target.nodeName.toUpperCase() === b.toUpperCase()) return d = !0,
            !1
        }), d || b.each(c.options.keyBindings,
        function(d, g) {
            if (g && a.which === g.key && b.isFunction(g.fn)) return a.preventDefault(),
            g.fn(c),
            !1
        }))
    };
    b.jPlayer.keys = function(a) {
        b(document.documentElement).unbind("keydown.jPlayer");
        a && b(document.documentElement).bind("keydown.jPlayer", p)
    };
    b.jPlayer.keys(!0);
    b.jPlayer.prototype = {
        count: 0,
        version: {
            script: "2.6.0",
            needFlash: "2.6.0",
            flash: "unknown"
        },
        options: {
            swfPath: "js",
            solution: "html, flash",
            supplied: "mp3",
            preload: "metadata",
            volume: 0.8,
            muted: !1,
            remainingDuration: !1,
            toggleDuration: !1,
            playbackRate: 1,
            defaultPlaybackRate: 1,
            minPlaybackRate: 0.5,
            maxPlaybackRate: 4,
            wmode: "opaque",
            backgroundColor: "#000000",
            cssSelectorAncestor: "#jp_container_1",
            cssSelector: {
                videoPlay: ".jp-video-play",
                play: ".jp-play",
                pause: ".jp-pause",
                stop: ".jp-stop",
                seekBar: ".jp-seek-bar",
                playBar: ".jp-play-bar",
                mute: ".jp-mute",
                unmute: ".jp-unmute",
                volumeBar: ".jp-volume-bar",
                volumeBarValue: ".jp-volume-bar-value",
                volumeMax: ".jp-volume-max",
                playbackRateBar: ".jp-playback-rate-bar",
                playbackRateBarValue: ".jp-playback-rate-bar-value",
                currentTime: ".jp-current-time",
                duration: ".jp-duration",
                title: ".jp-title",
                fullScreen: ".jp-full-screen",
                restoreScreen: ".jp-restore-screen",
                repeat: ".jp-repeat",
                repeatOff: ".jp-repeat-off",
                gui: ".jp-gui",
                noSolution: ".jp-no-solution"
            },
            smoothPlayBar: !1,
            fullScreen: !1,
            fullWindow: !1,
            autohide: {
                restored: !1,
                full: !0,
                fadeIn: 200,
                fadeOut: 600,
                hold: 1E3
            },
            loop: !1,
            repeat: function(a) {
                a.jPlayer.options.loop ? b(this).unbind(".jPlayerRepeat").bind(b.jPlayer.event.ended + ".jPlayer.jPlayerRepeat",
                function() {
                    b(this).jPlayer("play")
                }) : b(this).unbind(".jPlayerRepeat")
            },
            nativeVideoControls: {},
            noFullWindow: {
                msie: /msie [0-6]\./,
                ipad: /ipad.*?os [0-4]\./,
                iphone: /iphone/,
                ipod: /ipod/,
                android_pad: /android [0-3]\.(?!.*?mobile)/,
                android_phone: /android.*?mobile/,
                blackberry: /blackberry/,
                windows_ce: /windows ce/,
                iemobile: /iemobile/,
                webos: /webos/
            },
            noVolume: {
                ipad: /ipad/,
                iphone: /iphone/,
                ipod: /ipod/,
                android_pad: /android(?!.*?mobile)/,
                android_phone: /android.*?mobile/,
                blackberry: /blackberry/,
                windows_ce: /windows ce/,
                iemobile: /iemobile/,
                webos: /webos/,
                playbook: /playbook/
            },
            timeFormat: {},
            keyEnabled: !1,
            audioFullScreen: !1,
            keyBindings: {
                play: {
                    key: 32,
                    fn: function(a) {
                        a.status.paused ? a.play() : a.pause()
                    }
                },
                fullScreen: {
                    key: 13,
                    fn: function(a) { (a.status.video || a.options.audioFullScreen) && a._setOption("fullScreen", !a.options.fullScreen)
                    }
                },
                muted: {
                    key: 8,
                    fn: function(a) {
                        a._muted(!a.options.muted)
                    }
                },
                volumeUp: {
                    key: 38,
                    fn: function(a) {
                        a.volume(a.options.volume + 0.1)
                    }
                },
                volumeDown: {
                    key: 40,
                    fn: function(a) {
                        a.volume(a.options.volume - 0.1)
                    }
                }
            },
            verticalVolume: !1,
            verticalPlaybackRate: !1,
            globalVolume: !1,
            idPrefix: "jp",
            noConflict: "jQuery",
            emulateHtml: !1,
            consoleAlerts: !0,
            errorAlerts: !1,
            warningAlerts: !1
        },
        optionsAudio: {
            size: {
                width: "0px",
                height: "0px",
                cssClass: ""
            },
            sizeFull: {
                width: "0px",
                height: "0px",
                cssClass: ""
            }
        },
        optionsVideo: {
            size: {
                width: "480px",
                height: "270px",
                cssClass: "jp-video-270p"
            },
            sizeFull: {
                width: "100%",
                height: "100%",
                cssClass: "jp-video-full"
            }
        },
        instances: {},
        status: {
            src: "",
            media: {},
            paused: !0,
            format: {},
            formatType: "",
            waitForPlay: !0,
            waitForLoad: !0,
            srcSet: !1,
            video: !1,
            seekPercent: 0,
            currentPercentRelative: 0,
            currentPercentAbsolute: 0,
            currentTime: 0,
            duration: 0,
            remaining: 0,
            videoWidth: 0,
            videoHeight: 0,
            readyState: 0,
            networkState: 0,
            playbackRate: 1,
            ended: 0
        },
        internal: {
            ready: !1
        },
        solution: {
            html: !0,
            flash: !0
        },
        format: {
            mp3: {
                codec: 'audio/mpeg; codecs="mp3"',
                flashCanPlay: !0,
                media: "audio"
            },
            m4a: {
                codec: 'audio/mp4; codecs="mp4a.40.2"',
                flashCanPlay: !0,
                media: "audio"
            },
            m3u8a: {
                codec: 'application/vnd.apple.mpegurl; codecs="mp4a.40.2"',
                flashCanPlay: !1,
                media: "audio"
            },
            m3ua: {
                codec: "audio/mpegurl",
                flashCanPlay: !1,
                media: "audio"
            },
            oga: {
                codec: 'audio/ogg; codecs="vorbis, opus"',
                flashCanPlay: !1,
                media: "audio"
            },
            flac: {
                codec: "audio/x-flac",
                flashCanPlay: !1,
                media: "audio"
            },
            wav: {
                codec: 'audio/wav; codecs="1"',
                flashCanPlay: !1,
                media: "audio"
            },
            webma: {
                codec: 'audio/webm; codecs="vorbis"',
                flashCanPlay: !1,
                media: "audio"
            },
            fla: {
                codec: "audio/x-flv",
                flashCanPlay: !0,
                media: "audio"
            },
            rtmpa: {
                codec: 'audio/rtmp; codecs="rtmp"',
                flashCanPlay: !0,
                media: "audio"
            },
            m4v: {
                codec: 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"',
                flashCanPlay: !0,
                media: "video"
            },
            m3u8v: {
                codec: 'application/vnd.apple.mpegurl; codecs="avc1.42E01E, mp4a.40.2"',
                flashCanPlay: !1,
                media: "video"
            },
            m3uv: {
                codec: "audio/mpegurl",
                flashCanPlay: !1,
                media: "video"
            },
            ogv: {
                codec: 'video/ogg; codecs="theora, vorbis"',
                flashCanPlay: !1,
                media: "video"
            },
            webmv: {
                codec: 'video/webm; codecs="vorbis, vp8"',
                flashCanPlay: !1,
                media: "video"
            },
            flv: {
                codec: "video/x-flv",
                flashCanPlay: !0,
                media: "video"
            },
            rtmpv: {
                codec: 'video/rtmp; codecs="rtmp"',
                flashCanPlay: !0,
                media: "video"
            }
        },
        _init: function() {
            var a = this;
            this.element.empty();
            this.status = b.extend({},
            this.status);
            this.internal = b.extend({},
            this.internal);
            this.options.timeFormat = b.extend({},
            b.jPlayer.timeFormat, this.options.timeFormat);
            this.internal.cmdsIgnored = b.jPlayer.platform.ipad || b.jPlayer.platform.iphone || b.jPlayer.platform.ipod;
            this.internal.domNode = this.element.get(0);
            this.options.keyEnabled && !b.jPlayer.focus && (b.jPlayer.focus = this);
            this.androidFix = {
                setMedia: !1,
                play: !1,
                pause: !1,
                time: NaN
            };
            b.jPlayer.platform.android && (this.options.preload = "auto" !== this.options.preload ? "metadata": "auto");
            this.formats = [];
            this.solutions = [];
            this.require = {};
            this.htmlElement = {};
            this.html = {};
            this.html.audio = {};
            this.html.video = {};
            this.flash = {};
            this.css = {};
            this.css.cs = {};
            this.css.jq = {};
            this.ancestorJq = [];
            this.options.volume = this._limitValue(this.options.volume, 0, 1);
            b.each(this.options.supplied.toLowerCase().split(","),
            function(c, d) {
                var e = d.replace(/^\s+|\s+$/g, "");
                if (a.format[e]) {
                    var f = !1;
                    b.each(a.formats,
                    function(a, c) {
                        if (e === c) return f = !0,
                        !1
                    });
                    f || a.formats.push(e)
                }
            });
            b.each(this.options.solution.toLowerCase().split(","),
            function(c, d) {
                var e = d.replace(/^\s+|\s+$/g, "");
                if (a.solution[e]) {
                    var f = !1;
                    b.each(a.solutions,
                    function(a, c) {
                        if (e === c) return f = !0,
                        !1
                    });
                    f || a.solutions.push(e)
                }
            });
            this.internal.instance = "jp_" + this.count;
            this.instances[this.internal.instance] = this.element;
            this.element.attr("id") || this.element.attr("id", this.options.idPrefix + "_jplayer_" + this.count);
            this.internal.self = b.extend({},
            {
                id: this.element.attr("id"),
                jq: this.element
            });
            this.internal.audio = b.extend({},
            {
                id: this.options.idPrefix + "_audio_" + this.count,
                jq: f
            });
            this.internal.video = b.extend({},
            {
                id: this.options.idPrefix + "_video_" + this.count,
                jq: f
            });
            this.internal.flash = b.extend({},
            {
                id: this.options.idPrefix + "_flash_" + this.count,
                jq: f,
                swf: this.options.swfPath + (".swf" !== this.options.swfPath.toLowerCase().slice( - 4) ? (this.options.swfPath && "/" !== this.options.swfPath.slice( - 1) ? "/": "") + "Jplayer.swf": "")
            });
            this.internal.poster = b.extend({},
            {
                id: this.options.idPrefix + "_poster_" + this.count,
                jq: f
            });
            b.each(b.jPlayer.event,
            function(c, b) {
                a.options[c] !== f && (a.element.bind(b + ".jPlayer", a.options[c]), a.options[c] = f)
            });
            this.require.audio = !1;
            this.require.video = !1;
            b.each(this.formats,
            function(c, b) {
                a.require[a.format[b].media] = !0
            });
            this.options = this.require.video ? b.extend(!0, {},
            this.optionsVideo, this.options) : b.extend(!0, {},
            this.optionsAudio, this.options);
            this._setSize();
            this.status.nativeVideoControls = this._uaBlocklist(this.options.nativeVideoControls);
            this.status.noFullWindow = this._uaBlocklist(this.options.noFullWindow);
            this.status.noVolume = this._uaBlocklist(this.options.noVolume);
            b.jPlayer.nativeFeatures.fullscreen.api.fullscreenEnabled && this._fullscreenAddEventListeners();
            this._restrictNativeVideoControls();
            this.htmlElement.poster = document.createElement("img");
            this.htmlElement.poster.id = this.internal.poster.id;
            this.htmlElement.poster.onload = function() {
                a.status.video && !a.status.waitForPlay || a.internal.poster.jq.show()
            };
            this.element.append(this.htmlElement.poster);
            this.internal.poster.jq = b("#" + this.internal.poster.id);
            this.internal.poster.jq.css({
                width: this.status.width,
                height: this.status.height
            });
            this.internal.poster.jq.hide();
            this.internal.poster.jq.bind("click.jPlayer",
            function() {
                a._trigger(b.jPlayer.event.click)
            });
            this.html.audio.available = !1;
            this.require.audio && (this.htmlElement.audio = document.createElement("audio"), this.htmlElement.audio.id = this.internal.audio.id, this.html.audio.available = !!this.htmlElement.audio.canPlayType && this._testCanPlayType(this.htmlElement.audio));
            this.html.video.available = !1;
            this.require.video && (this.htmlElement.video = document.createElement("video"), this.htmlElement.video.id = this.internal.video.id, this.html.video.available = !!this.htmlElement.video.canPlayType && this._testCanPlayType(this.htmlElement.video));
            this.flash.available = this._checkForFlash(10.1);
            this.html.canPlay = {};
            this.flash.canPlay = {};
            b.each(this.formats,
            function(c, b) {
                a.html.canPlay[b] = a.html[a.format[b].media].available && "" !== a.htmlElement[a.format[b].media].canPlayType(a.format[b].codec);
                a.flash.canPlay[b] = a.format[b].flashCanPlay && a.flash.available
            });
            this.html.desired = !1;
            this.flash.desired = !1;
            b.each(this.solutions,
            function(c, d) {
                if (0 === c) a[d].desired = !0;
                else {
                    var e = !1,
                    f = !1;
                    b.each(a.formats,
                    function(c, b) {
                        a[a.solutions[0]].canPlay[b] && ("video" === a.format[b].media ? f = !0 : e = !0)
                    });
                    a[d].desired = a.require.audio && !e || a.require.video && !f
                }
            });
            this.html.support = {};
            this.flash.support = {};
            b.each(this.formats,
            function(c, b) {
                a.html.support[b] = a.html.canPlay[b] && a.html.desired;
                a.flash.support[b] = a.flash.canPlay[b] && a.flash.desired
            });
            this.html.used = !1;
            this.flash.used = !1;
            b.each(this.solutions,
            function(c, d) {
                b.each(a.formats,
                function(c, b) {
                    if (a[d].support[b]) return a[d].used = !0,
                    !1
                })
            });
            this._resetActive();
            this._resetGate();
            this._cssSelectorAncestor(this.options.cssSelectorAncestor);
            this.html.used || this.flash.used ? this.css.jq.noSolution.length && this.css.jq.noSolution.hide() : (this._error({
                type: b.jPlayer.error.NO_SOLUTION,
                context: "{solution:'" + this.options.solution + "', supplied:'" + this.options.supplied + "'}",
                message: b.jPlayer.errorMsg.NO_SOLUTION,
                hint: b.jPlayer.errorHint.NO_SOLUTION
            }), this.css.jq.noSolution.length && this.css.jq.noSolution.show());
            if (this.flash.used) {
                var c, d = "jQuery=" + encodeURI(this.options.noConflict) + "&id=" + encodeURI(this.internal.self.id) + "&vol=" + this.options.volume + "&muted=" + this.options.muted;
                if (b.jPlayer.browser.msie && (9 > Number(b.jPlayer.browser.version) || 9 > b.jPlayer.browser.documentMode)) {
                    d = ['<param name="movie" value="' + this.internal.flash.swf + '" />', '<param name="FlashVars" value="' + d + '" />', '<param name="allowScriptAccess" value="always" />', '<param name="bgcolor" value="' + this.options.backgroundColor + '" />', '<param name="wmode" value="' + this.options.wmode + '" />'];
                    c = document.createElement('<object id="' + this.internal.flash.id + '" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="0" height="0" tabindex="-1"></object>');
                    for (var e = 0; e < d.length; e++) c.appendChild(document.createElement(d[e]))
                } else e = function(a, c, b) {
                    var d = document.createElement("param");
                    d.setAttribute("name", c);
                    d.setAttribute("value", b);
                    a.appendChild(d)
                },
                c = document.createElement("object"),
                c.setAttribute("id", this.internal.flash.id),
                c.setAttribute("name", this.internal.flash.id),
                c.setAttribute("data", this.internal.flash.swf),
                c.setAttribute("type", "application/x-shockwave-flash"),
                c.setAttribute("width", "1"),
                c.setAttribute("height", "1"),
                c.setAttribute("tabindex", "-1"),
                e(c, "flashvars", d),
                e(c, "allowscriptaccess", "always"),
                e(c, "bgcolor", this.options.backgroundColor),
                e(c, "wmode", this.options.wmode);
                this.element.append(c);
                this.internal.flash.jq = b(c)
            }
            this.status.playbackRateEnabled = this.html.used && !this.flash.used ? this._testPlaybackRate("audio") : !1;
            this._updatePlaybackRate();
            this.html.used && (this.html.audio.available && (this._addHtmlEventListeners(this.htmlElement.audio, this.html.audio), this.element.append(this.htmlElement.audio), this.internal.audio.jq = b("#" + this.internal.audio.id)), this.html.video.available && (this._addHtmlEventListeners(this.htmlElement.video, this.html.video), this.element.append(this.htmlElement.video), this.internal.video.jq = b("#" + this.internal.video.id), this.status.nativeVideoControls ? this.internal.video.jq.css({
                width: this.status.width,
                height: this.status.height
            }) : this.internal.video.jq.css({
                width: "0px",
                height: "0px"
            }), this.internal.video.jq.bind("click.jPlayer",
            function() {
                a._trigger(b.jPlayer.event.click)
            })));
            this.options.emulateHtml && this._emulateHtmlBridge();
            this.html.used && !this.flash.used && setTimeout(function() {
                a.internal.ready = !0;
                a.version.flash = "n/a";
                a._trigger(b.jPlayer.event.repeat);
                a._trigger(b.jPlayer.event.ready)
            },
            100);
            this._updateNativeVideoControls();
            this.css.jq.videoPlay.length && this.css.jq.videoPlay.hide();
            b.jPlayer.prototype.count++
        },
        destroy: function() {
            this.clearMedia();
            this._removeUiClass();
            this.css.jq.currentTime.length && this.css.jq.currentTime.text("");
            this.css.jq.duration.length && this.css.jq.duration.text("");
            b.each(this.css.jq,
            function(a, c) {
                c.length && c.unbind(".jPlayer")
            });
            this.internal.poster.jq.unbind(".jPlayer");
            this.internal.video.jq && this.internal.video.jq.unbind(".jPlayer");
            this._fullscreenRemoveEventListeners();
            this === b.jPlayer.focus && (b.jPlayer.focus = null);
            this.options.emulateHtml && this._destroyHtmlBridge();
            this.element.removeData("jPlayer");
            this.element.unbind(".jPlayer");
            this.element.empty();
            delete this.instances[this.internal.instance]
        },
        enable: function() {},
        disable: function() {},
        _testCanPlayType: function(a) {
            try {
                return a.canPlayType(this.format.mp3.codec),
                !0
            } catch(c) {
                return ! 1
            }
        },
        _testPlaybackRate: function(a) {
            a = document.createElement("string" === typeof a ? a: "audio");
            try {
                return "playbackRate" in a ? (a.playbackRate = 0.5, 0.5 === a.playbackRate) : !1
            } catch(c) {
                return ! 1
            }
        },
        _uaBlocklist: function(a) {
            var c = navigator.userAgent.toLowerCase(),
            d = !1;
            b.each(a,
            function(a, b) {
                if (b && b.test(c)) return d = !0,
                !1
            });
            return d
        },
        _restrictNativeVideoControls: function() {
            this.require.audio && this.status.nativeVideoControls && (this.status.nativeVideoControls = !1, this.status.noFullWindow = !0)
        },
        _updateNativeVideoControls: function() {
            this.html.video.available && this.html.used && (this.htmlElement.video.controls = this.status.nativeVideoControls, this._updateAutohide(), this.status.nativeVideoControls && this.require.video ? (this.internal.poster.jq.hide(), this.internal.video.jq.css({
                width: this.status.width,
                height: this.status.height
            })) : this.status.waitForPlay && this.status.video && (this.internal.poster.jq.show(), this.internal.video.jq.css({
                width: "0px",
                height: "0px"
            })))
        },
        _addHtmlEventListeners: function(a, c) {
            var d = this;
            a.preload = this.options.preload;
            a.muted = this.options.muted;
            a.volume = this.options.volume;
            this.status.playbackRateEnabled && (a.defaultPlaybackRate = this.options.defaultPlaybackRate, a.playbackRate = this.options.playbackRate);
            a.addEventListener("progress",
            function() {
                c.gate && (d.internal.cmdsIgnored && 0 < this.readyState && (d.internal.cmdsIgnored = !1), d.androidFix.setMedia = !1, d.androidFix.play && (d.androidFix.play = !1, d.play(d.androidFix.time)), d.androidFix.pause && (d.androidFix.pause = !1, d.pause(d.androidFix.time)), d._getHtmlStatus(a), d._updateInterface(), d._trigger(b.jPlayer.event.progress))
            },
            !1);
            a.addEventListener("timeupdate",
            function() {
                c.gate && (d._getHtmlStatus(a), d._updateInterface(), d._trigger(b.jPlayer.event.timeupdate))
            },
            !1);
            a.addEventListener("durationchange",
            function() {
                c.gate && (d._getHtmlStatus(a), d._updateInterface(), d._trigger(b.jPlayer.event.durationchange))
            },
            !1);
            a.addEventListener("play",
            function() {
                c.gate && (d._updateButtons(!0), d._html_checkWaitForPlay(), d._trigger(b.jPlayer.event.play))
            },
            !1);
            a.addEventListener("playing",
            function() {
                c.gate && (d._updateButtons(!0), d._seeked(), d._trigger(b.jPlayer.event.playing))
            },
            !1);
            a.addEventListener("pause",
            function() {
                c.gate && (d._updateButtons(!1), d._trigger(b.jPlayer.event.pause))
            },
            !1);
            a.addEventListener("waiting",
            function() {
                c.gate && (d._seeking(), d._trigger(b.jPlayer.event.waiting))
            },
            !1);
            a.addEventListener("seeking",
            function() {
                c.gate && (d._seeking(), d._trigger(b.jPlayer.event.seeking))
            },
            !1);
            a.addEventListener("seeked",
            function() {
                c.gate && (d._seeked(), d._trigger(b.jPlayer.event.seeked))
            },
            !1);
            a.addEventListener("volumechange",
            function() {
                c.gate && (d.options.volume = a.volume, d.options.muted = a.muted, d._updateMute(), d._updateVolume(), d._trigger(b.jPlayer.event.volumechange))
            },
            !1);
            a.addEventListener("ratechange",
            function() {
                c.gate && (d.options.defaultPlaybackRate = a.defaultPlaybackRate, d.options.playbackRate = a.playbackRate, d._updatePlaybackRate(), d._trigger(b.jPlayer.event.ratechange))
            },
            !1);
            a.addEventListener("suspend",
            function() {
                c.gate && (d._seeked(), d._trigger(b.jPlayer.event.suspend))
            },
            !1);
            a.addEventListener("ended",
            function() {
                c.gate && (b.jPlayer.browser.webkit || (d.htmlElement.media.currentTime = 0), d.htmlElement.media.pause(), d._updateButtons(!1), d._getHtmlStatus(a, !0), d._updateInterface(), d._trigger(b.jPlayer.event.ended))
            },
            !1);
            a.addEventListener("error",
            function() {
                c.gate && (d._updateButtons(!1), d._seeked(), d.status.srcSet && (clearTimeout(d.internal.htmlDlyCmdId), d.status.waitForLoad = !0, d.status.waitForPlay = !0, d.status.video && !d.status.nativeVideoControls && d.internal.video.jq.css({
                    width: "0px",
                    height: "0px"
                }), d._validString(d.status.media.poster) && !d.status.nativeVideoControls && d.internal.poster.jq.show(), d.css.jq.videoPlay.length && d.css.jq.videoPlay.show(), d._error({
                    type: b.jPlayer.error.URL,
                    context: d.status.src,
                    message: b.jPlayer.errorMsg.URL,
                    hint: b.jPlayer.errorHint.URL
                })))
            },
            !1);
            b.each(b.jPlayer.htmlEvent,
            function(e, g) {
                a.addEventListener(this,
                function() {
                    c.gate && d._trigger(b.jPlayer.event[g])
                },
                !1)
            })
        },
        _getHtmlStatus: function(a, c) {
            var b = 0,
            e = 0,
            g = 0,
            f = 0;
            isFinite(a.duration) && (this.status.duration = a.duration);
            b = a.currentTime;
            e = 0 < this.status.duration ? 100 * b / this.status.duration: 0;
            "object" === typeof a.seekable && 0 < a.seekable.length ? (g = 0 < this.status.duration ? 100 * a.seekable.end(a.seekable.length - 1) / this.status.duration: 100, f = 0 < this.status.duration ? 100 * a.currentTime / a.seekable.end(a.seekable.length - 1) : 0) : (g = 100, f = e);
            c && (e = f = b = 0);
            this.status.seekPercent = g;
            this.status.currentPercentRelative = f;
            this.status.currentPercentAbsolute = e;
            this.status.currentTime = b;
            this.status.remaining = this.status.duration - this.status.currentTime;
            this.status.videoWidth = a.videoWidth;
            this.status.videoHeight = a.videoHeight;
            this.status.readyState = a.readyState;
            this.status.networkState = a.networkState;
            this.status.playbackRate = a.playbackRate;
            this.status.ended = a.ended
        },
        _resetStatus: function() {
            this.status = b.extend({},
            this.status, b.jPlayer.prototype.status)
        },
        _trigger: function(a, c, d) {
            a = b.Event(a);
            a.jPlayer = {};
            a.jPlayer.version = b.extend({},
            this.version);
            a.jPlayer.options = b.extend(!0, {},
            this.options);
            a.jPlayer.status = b.extend(!0, {},
            this.status);
            a.jPlayer.html = b.extend(!0, {},
            this.html);
            a.jPlayer.flash = b.extend(!0, {},
            this.flash);
            c && (a.jPlayer.error = b.extend({},
            c));
            d && (a.jPlayer.warning = b.extend({},
            d));
            this.element.trigger(a)
        },
        jPlayerFlashEvent: function(a, c) {
            if (a === b.jPlayer.event.ready) if (!this.internal.ready) this.internal.ready = !0,
            this.internal.flash.jq.css({
                width: "0px",
                height: "0px"
            }),
            this.version.flash = c.version,
            this.version.needFlash !== this.version.flash && this._error({
                type: b.jPlayer.error.VERSION,
                context: this.version.flash,
                message: b.jPlayer.errorMsg.VERSION + this.version.flash,
                hint: b.jPlayer.errorHint.VERSION
            }),
            this._trigger(b.jPlayer.event.repeat),
            this._trigger(a);
            else if (this.flash.gate) {
                if (this.status.srcSet) {
                    var d = this.status.currentTime,
                    e = this.status.paused;
                    this.setMedia(this.status.media);
                    this.volumeWorker(this.options.volume);
                    0 < d && (e ? this.pause(d) : this.play(d))
                }
                this._trigger(b.jPlayer.event.flashreset)
            }
            if (this.flash.gate) switch (a) {
            case b.jPlayer.event.progress:
                this._getFlashStatus(c);
                this._updateInterface();
                this._trigger(a);
                break;
            case b.jPlayer.event.timeupdate:
                this._getFlashStatus(c);
                this._updateInterface();
                this._trigger(a);
                break;
            case b.jPlayer.event.play:
                this._seeked();
                this._updateButtons(!0);
                this._trigger(a);
                break;
            case b.jPlayer.event.pause:
                this._updateButtons(!1);
                this._trigger(a);
                break;
            case b.jPlayer.event.ended:
                this._updateButtons(!1);
                this._trigger(a);
                break;
            case b.jPlayer.event.click:
                this._trigger(a);
                break;
            case b.jPlayer.event.error:
                this.status.waitForLoad = !0;
                this.status.waitForPlay = !0;
                this.status.video && this.internal.flash.jq.css({
                    width: "0px",
                    height: "0px"
                });
                this._validString(this.status.media.poster) && this.internal.poster.jq.show();
                this.css.jq.videoPlay.length && this.status.video && this.css.jq.videoPlay.show();
                this.status.video ? this._flash_setVideo(this.status.media) : this._flash_setAudio(this.status.media);
                this._updateButtons(!1);
                this._error({
                    type: b.jPlayer.error.URL,
                    context: c.src,
                    message: b.jPlayer.errorMsg.URL,
                    hint: b.jPlayer.errorHint.URL
                });
                break;
            case b.jPlayer.event.seeking:
                this._seeking();
                this._trigger(a);
                break;
            case b.jPlayer.event.seeked:
                this._seeked();
                this._trigger(a);
                break;
            case b.jPlayer.event.ready:
                break;
            default:
                this._trigger(a)
            }
            return ! 1
        },
        _getFlashStatus: function(a) {
            this.status.seekPercent = a.seekPercent;
            this.status.currentPercentRelative = a.currentPercentRelative;
            this.status.currentPercentAbsolute = a.currentPercentAbsolute;
            this.status.currentTime = a.currentTime;
            this.status.duration = a.duration;
            this.status.remaining = a.duration - a.currentTime;
            this.status.videoWidth = a.videoWidth;
            this.status.videoHeight = a.videoHeight;
            this.status.readyState = 4;
            this.status.networkState = 0;
            this.status.playbackRate = 1;
            this.status.ended = !1
        },
        _updateButtons: function(a) {
            a === f ? a = !this.status.paused: this.status.paused = !a;
            this.css.jq.play.length && this.css.jq.pause.length && (a ? (this.css.jq.play.hide(), this.css.jq.pause.show()) : (this.css.jq.play.show(), this.css.jq.pause.hide()));
            this.css.jq.restoreScreen.length && this.css.jq.fullScreen.length && (this.status.noFullWindow ? (this.css.jq.fullScreen.hide(), this.css.jq.restoreScreen.hide()) : this.options.fullWindow ? (this.css.jq.fullScreen.hide(), this.css.jq.restoreScreen.show()) : (this.css.jq.fullScreen.show(), this.css.jq.restoreScreen.hide()));
            this.css.jq.repeat.length && this.css.jq.repeatOff.length && (this.options.loop ? (this.css.jq.repeat.hide(), this.css.jq.repeatOff.show()) : (this.css.jq.repeat.show(), this.css.jq.repeatOff.hide()))
        },
        _updateInterface: function() {
            this.css.jq.seekBar.length && this.css.jq.seekBar.width(this.status.seekPercent + "%");
            this.css.jq.playBar.length && (this.options.smoothPlayBar ? this.css.jq.playBar.stop().animate({
                width: this.status.currentPercentAbsolute + "%"
            },
            250, "linear") : this.css.jq.playBar.width(this.status.currentPercentRelative + "%"));
            var a = "";
            this.css.jq.currentTime.length && (a = this._convertTime(this.status.currentTime), a !== this.css.jq.currentTime.text() && this.css.jq.currentTime.text(this._convertTime(this.status.currentTime)));
            var a = "",
            a = this.status.duration,
            c = this.status.remaining;
            this.css.jq.duration.length && ("string" === typeof this.status.media.duration ? a = this.status.media.duration: ("number" === typeof this.status.media.duration && (a = this.status.media.duration, c = a - this.status.currentTime), a = this.options.remainingDuration ? (0 < c ? "-": "") + this._convertTime(c) : this._convertTime(a)), a !== this.css.jq.duration.text() && this.css.jq.duration.text(a))
        },
        _convertTime: l.prototype.time,
        _seeking: function() {
            this.css.jq.seekBar.length && this.css.jq.seekBar.addClass("jp-seeking-bg")
        },
        _seeked: function() {
            this.css.jq.seekBar.length && this.css.jq.seekBar.removeClass("jp-seeking-bg")
        },
        _resetGate: function() {
            this.html.audio.gate = !1;
            this.html.video.gate = !1;
            this.flash.gate = !1
        },
        _resetActive: function() {
            this.html.active = !1;
            this.flash.active = !1
        },
        _escapeHtml: function(a) {
            return a.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;").split('"').join("&quot;")
        },
        _qualifyURL: function(a) {
            var c = document.createElement("div");
            c.innerHTML = '<a href="' + this._escapeHtml(a) + '">x</a>';
            return c.firstChild.href
        },
        _absoluteMediaUrls: function(a) {
            var c = this;
            b.each(a,
            function(b, e) {
                e && c.format[b] && (a[b] = c._qualifyURL(e))
            });
            return a
        },
        setMedia: function(a) {
            var c = this,
            d = !1,
            e = this.status.media.poster !== a.poster;
            this._resetMedia();
            this._resetGate();
            this._resetActive();
            this.androidFix.setMedia = !1;
            this.androidFix.play = !1;
            this.androidFix.pause = !1;
            a = this._absoluteMediaUrls(a);
            b.each(this.formats,
            function(e, f) {
                var k = "video" === c.format[f].media;
                b.each(c.solutions,
                function(e, g) {
                    if (c[g].support[f] && c._validString(a[f])) {
                        var l = "html" === g;
                        k ? (l ? (c.html.video.gate = !0, c._html_setVideo(a), c.html.active = !0) : (c.flash.gate = !0, c._flash_setVideo(a), c.flash.active = !0), c.css.jq.videoPlay.length && c.css.jq.videoPlay.show(), c.status.video = !0) : (l ? (c.html.audio.gate = !0, c._html_setAudio(a), c.html.active = !0, b.jPlayer.platform.android && (c.androidFix.setMedia = !0)) : (c.flash.gate = !0, c._flash_setAudio(a), c.flash.active = !0), c.css.jq.videoPlay.length && c.css.jq.videoPlay.hide(), c.status.video = !1);
                        d = !0;
                        return ! 1
                    }
                });
                if (d) return ! 1
            });
            d ? (this.status.nativeVideoControls && this.html.video.gate || !this._validString(a.poster) || (e ? this.htmlElement.poster.src = a.poster: this.internal.poster.jq.show()), this.css.jq.title.length && "string" === typeof a.title && (this.css.jq.title.html(a.title), this.htmlElement.audio && this.htmlElement.audio.setAttribute("title", a.title), this.htmlElement.video && this.htmlElement.video.setAttribute("title", a.title)), this.status.srcSet = !0, this.status.media = b.extend({},
            a), this._updateButtons(!1), this._updateInterface(), this._trigger(b.jPlayer.event.setmedia)) : this._error({
                type: b.jPlayer.error.NO_SUPPORT,
                context: "{supplied:'" + this.options.supplied + "'}",
                message: b.jPlayer.errorMsg.NO_SUPPORT,
                hint: b.jPlayer.errorHint.NO_SUPPORT
            })
        },
        _resetMedia: function() {
            this._resetStatus();
            this._updateButtons(!1);
            this._updateInterface();
            this._seeked();
            this.internal.poster.jq.hide();
            clearTimeout(this.internal.htmlDlyCmdId);
            this.html.active ? this._html_resetMedia() : this.flash.active && this._flash_resetMedia()
        },
        clearMedia: function() {
            this._resetMedia();
            this.html.active ? this._html_clearMedia() : this.flash.active && this._flash_clearMedia();
            this._resetGate();
            this._resetActive()
        },
        load: function() {
            this.status.srcSet ? this.html.active ? this._html_load() : this.flash.active && this._flash_load() : this._urlNotSetError("load")
        },
        focus: function() {
            this.options.keyEnabled && (b.jPlayer.focus = this)
        },
        play: function(a) {
            a = "number" === typeof a ? a: NaN;
            this.status.srcSet ? (this.focus(), this.html.active ? this._html_play(a) : this.flash.active && this._flash_play(a)) : this._urlNotSetError("play")
        },
        videoPlay: function() {
            this.play()
        },
        pause: function(a) {
            a = "number" === typeof a ? a: NaN;
            this.status.srcSet ? this.html.active ? this._html_pause(a) : this.flash.active && this._flash_pause(a) : this._urlNotSetError("pause")
        },
        tellOthers: function(a, c) {
            var d = this,
            e = "function" === typeof c,
            g = Array.prototype.slice.call(arguments);
            "string" === typeof a && (e && g.splice(1, 1), b.each(this.instances,
            function() {
                d.element !== this && (e && !c.call(this.data("jPlayer"), d) || this.jPlayer.apply(this, g))
            }))
        },
        pauseOthers: function(a) {
            this.tellOthers("pause",
            function() {
                return this.status.srcSet
            },
            a)
        },
        stop: function() {
            this.status.srcSet ? this.html.active ? this._html_pause(0) : this.flash.active && this._flash_pause(0) : this._urlNotSetError("stop")
        },
        playHead: function(a) {
            a = this._limitValue(a, 0, 100);
            this.status.srcSet ? this.html.active ? this._html_playHead(a) : this.flash.active && this._flash_playHead(a) : this._urlNotSetError("playHead")
        },
        _muted: function(a) {
            this.mutedWorker(a);
            this.options.globalVolume && this.tellOthers("mutedWorker",
            function() {
                return this.options.globalVolume
            },
            a)
        },
        mutedWorker: function(a) {
            this.options.muted = a;
            this.html.used && this._html_setProperty("muted", a);
            this.flash.used && this._flash_mute(a);
            this.html.video.gate || this.html.audio.gate || (this._updateMute(a), this._updateVolume(this.options.volume), this._trigger(b.jPlayer.event.volumechange))
        },
        mute: function(a) {
            a = a === f ? !0 : !!a;
            this._muted(a)
        },
        unmute: function(a) {
            a = a === f ? !0 : !!a;
            this._muted(!a)
        },
        _updateMute: function(a) {
            a === f && (a = this.options.muted);
            this.css.jq.mute.length && this.css.jq.unmute.length && (this.status.noVolume ? (this.css.jq.mute.hide(), this.css.jq.unmute.hide()) : a ? (this.css.jq.mute.hide(), this.css.jq.unmute.show()) : (this.css.jq.mute.show(), this.css.jq.unmute.hide()))
        },
        volume: function(a) {
            this.volumeWorker(a);
            this.options.globalVolume && this.tellOthers("volumeWorker",
            function() {
                return this.options.globalVolume
            },
            a)
        },
        volumeWorker: function(a) {
            a = this._limitValue(a, 0, 1);
            this.options.volume = a;
            this.html.used && this._html_setProperty("volume", a);
            this.flash.used && this._flash_volume(a);
            this.html.video.gate || this.html.audio.gate || (this._updateVolume(a), this._trigger(b.jPlayer.event.volumechange))
        },
        volumeBar: function(a) {
            if (this.css.jq.volumeBar.length) {
                var c = b(a.currentTarget),
                d = c.offset(),
                e = a.pageX - d.left,
                g = c.width();
                a = c.height() - a.pageY + d.top;
                c = c.height();
                this.options.verticalVolume ? this.volume(a / c) : this.volume(e / g)
            }
            this.options.muted && this._muted(!1)
        },
        _updateVolume: function(a) {
            a === f && (a = this.options.volume);
            a = this.options.muted ? 0 : a;
            this.status.noVolume ? (this.css.jq.volumeBar.length && this.css.jq.volumeBar.hide(), this.css.jq.volumeBarValue.length && this.css.jq.volumeBarValue.hide(), this.css.jq.volumeMax.length && this.css.jq.volumeMax.hide()) : (this.css.jq.volumeBar.length && this.css.jq.volumeBar.show(), this.css.jq.volumeBarValue.length && (this.css.jq.volumeBarValue.show(), this.css.jq.volumeBarValue[this.options.verticalVolume ? "height": "width"](100 * a + "%")), this.css.jq.volumeMax.length && this.css.jq.volumeMax.show())
        },
        volumeMax: function() {
            this.volume(1);
            this.options.muted && this._muted(!1)
        },
        _cssSelectorAncestor: function(a) {
            var c = this;
            this.options.cssSelectorAncestor = a;
            this._removeUiClass();
            this.ancestorJq = a ? b(a) : [];
            a && 1 !== this.ancestorJq.length && this._warning({
                type: b.jPlayer.warning.CSS_SELECTOR_COUNT,
                context: a,
                message: b.jPlayer.warningMsg.CSS_SELECTOR_COUNT + this.ancestorJq.length + " found for cssSelectorAncestor.",
                hint: b.jPlayer.warningHint.CSS_SELECTOR_COUNT
            });
            this._addUiClass();
            b.each(this.options.cssSelector,
            function(a, b) {
                c._cssSelector(a, b)
            });
            this._updateInterface();
            this._updateButtons();
            this._updateAutohide();
            this._updateVolume();
            this._updateMute()
        },
        _cssSelector: function(a, c) {
            var d = this;
            "string" === typeof c ? b.jPlayer.prototype.options.cssSelector[a] ? (this.css.jq[a] && this.css.jq[a].length && this.css.jq[a].unbind(".jPlayer"), this.options.cssSelector[a] = c, this.css.cs[a] = this.options.cssSelectorAncestor + " " + c, this.css.jq[a] = c ? b(this.css.cs[a]) : [], this.css.jq[a].length && this[a] && this.css.jq[a].bind("click.jPlayer",
            function(c) {
                c.preventDefault();
                d[a](c);
                b(this).blur()
            }), c && 1 !== this.css.jq[a].length && this._warning({
                type: b.jPlayer.warning.CSS_SELECTOR_COUNT,
                context: this.css.cs[a],
                message: b.jPlayer.warningMsg.CSS_SELECTOR_COUNT + this.css.jq[a].length + " found for " + a + " method.",
                hint: b.jPlayer.warningHint.CSS_SELECTOR_COUNT
            })) : this._warning({
                type: b.jPlayer.warning.CSS_SELECTOR_METHOD,
                context: a,
                message: b.jPlayer.warningMsg.CSS_SELECTOR_METHOD,
                hint: b.jPlayer.warningHint.CSS_SELECTOR_METHOD
            }) : this._warning({
                type: b.jPlayer.warning.CSS_SELECTOR_STRING,
                context: c,
                message: b.jPlayer.warningMsg.CSS_SELECTOR_STRING,
                hint: b.jPlayer.warningHint.CSS_SELECTOR_STRING
            })
        },
        duration: function(a) {
            this.options.toggleDuration && this._setOption("remainingDuration", !this.options.remainingDuration)
        },
        seekBar: function(a) {
            if (this.css.jq.seekBar.length) {
                var c = b(a.currentTarget),
                d = c.offset();
                a = a.pageX - d.left;
                c = c.width();
                this.playHead(100 * a / c)
            }
        },
        playbackRate: function(a) {
            this._setOption("playbackRate", a)
        },
        playbackRateBar: function(a) {
            if (this.css.jq.playbackRateBar.length) {
                var c = b(a.currentTarget),
                d = c.offset(),
                e = a.pageX - d.left,
                g = c.width();
                a = c.height() - a.pageY + d.top;
                c = c.height();
                this.playbackRate((this.options.verticalPlaybackRate ? a / c: e / g) * (this.options.maxPlaybackRate - this.options.minPlaybackRate) + this.options.minPlaybackRate)
            }
        },
        _updatePlaybackRate: function() {
            var a = (this.options.playbackRate - this.options.minPlaybackRate) / (this.options.maxPlaybackRate - this.options.minPlaybackRate);
            this.status.playbackRateEnabled ? (this.css.jq.playbackRateBar.length && this.css.jq.playbackRateBar.show(), this.css.jq.playbackRateBarValue.length && (this.css.jq.playbackRateBarValue.show(), this.css.jq.playbackRateBarValue[this.options.verticalPlaybackRate ? "height": "width"](100 * a + "%"))) : (this.css.jq.playbackRateBar.length && this.css.jq.playbackRateBar.hide(), this.css.jq.playbackRateBarValue.length && this.css.jq.playbackRateBarValue.hide())
        },
        repeat: function() {
            this._loop(!0)
        },
        repeatOff: function() {
            this._loop(!1)
        },
        _loop: function(a) {
            this.options.loop !== a && (this.options.loop = a, this._updateButtons(), this._trigger(b.jPlayer.event.repeat))
        },
        option: function(a, c) {
            var d = a;
            if (0 === arguments.length) return b.extend(!0, {},
            this.options);
            if ("string" === typeof a) {
                var e = a.split(".");
                if (c === f) {
                    for (var d = b.extend(!0, {},
                    this.options), g = 0; g < e.length; g++) if (d[e[g]] !== f) d = d[e[g]];
                    else return this._warning({
                        type: b.jPlayer.warning.OPTION_KEY,
                        context: a,
                        message: b.jPlayer.warningMsg.OPTION_KEY,
                        hint: b.jPlayer.warningHint.OPTION_KEY
                    }),
                    f;
                    return d
                }
                for (var g = d = {},
                h = 0; h < e.length; h++) h < e.length - 1 ? (g[e[h]] = {},
                g = g[e[h]]) : g[e[h]] = c
            }
            this._setOptions(d);
            return this
        },
        _setOptions: function(a) {
            var c = this;
            b.each(a,
            function(a, b) {
                c._setOption(a, b)
            });
            return this
        },
        _setOption: function(a, c) {
            var d = this;
            switch (a) {
            case "volume":
                this.volume(c);
                break;
            case "muted":
                this._muted(c);
                break;
            case "globalVolume":
                this.options[a] = c;
                break;
            case "cssSelectorAncestor":
                this._cssSelectorAncestor(c);
                break;
            case "cssSelector":
                b.each(c,
                function(a, c) {
                    d._cssSelector(a, c)
                });
                break;
            case "playbackRate":
                this.options[a] = c = this._limitValue(c, this.options.minPlaybackRate, this.options.maxPlaybackRate);
                this.html.used && this._html_setProperty("playbackRate", c);
                this._updatePlaybackRate();
                break;
            case "defaultPlaybackRate":
                this.options[a] = c = this._limitValue(c, this.options.minPlaybackRate, this.options.maxPlaybackRate);
                this.html.used && this._html_setProperty("defaultPlaybackRate", c);
                this._updatePlaybackRate();
                break;
            case "minPlaybackRate":
                this.options[a] = c = this._limitValue(c, 0.1, this.options.maxPlaybackRate - 0.1);
                this._updatePlaybackRate();
                break;
            case "maxPlaybackRate":
                this.options[a] = c = this._limitValue(c, this.options.minPlaybackRate + 0.1, 16);
                this._updatePlaybackRate();
                break;
            case "fullScreen":
                if (this.options[a] !== c) {
                    var e = b.jPlayer.nativeFeatures.fullscreen.used.webkitVideo;
                    if (!e || e && !this.status.waitForPlay) e || (this.options[a] = c),
                    c ? this._requestFullscreen() : this._exitFullscreen(),
                    e || this._setOption("fullWindow", c)
                }
                break;
            case "fullWindow":
                this.options[a] !== c && (this._removeUiClass(), this.options[a] = c, this._refreshSize());
                break;
            case "size":
                this.options.fullWindow || this.options[a].cssClass === c.cssClass || this._removeUiClass();
                this.options[a] = b.extend({},
                this.options[a], c);
                this._refreshSize();
                break;
            case "sizeFull":
                this.options.fullWindow && this.options[a].cssClass !== c.cssClass && this._removeUiClass();
                this.options[a] = b.extend({},
                this.options[a], c);
                this._refreshSize();
                break;
            case "autohide":
                this.options[a] = b.extend({},
                this.options[a], c);
                this._updateAutohide();
                break;
            case "loop":
                this._loop(c);
                break;
            case "remainingDuration":
                this.options[a] = c;
                this._updateInterface();
                break;
            case "toggleDuration":
                this.options[a] = c;
                break;
            case "nativeVideoControls":
                this.options[a] = b.extend({},
                this.options[a], c);
                this.status.nativeVideoControls = this._uaBlocklist(this.options.nativeVideoControls);
                this._restrictNativeVideoControls();
                this._updateNativeVideoControls();
                break;
            case "noFullWindow":
                this.options[a] = b.extend({},
                this.options[a], c);
                this.status.nativeVideoControls = this._uaBlocklist(this.options.nativeVideoControls);
                this.status.noFullWindow = this._uaBlocklist(this.options.noFullWindow);
                this._restrictNativeVideoControls();
                this._updateButtons();
                break;
            case "noVolume":
                this.options[a] = b.extend({},
                this.options[a], c);
                this.status.noVolume = this._uaBlocklist(this.options.noVolume);
                this._updateVolume();
                this._updateMute();
                break;
            case "emulateHtml":
                this.options[a] !== c && ((this.options[a] = c) ? this._emulateHtmlBridge() : this._destroyHtmlBridge());
                break;
            case "timeFormat":
                this.options[a] = b.extend({},
                this.options[a], c);
                break;
            case "keyEnabled":
                this.options[a] = c;
                c || this !== b.jPlayer.focus || (b.jPlayer.focus = null);
                break;
            case "keyBindings":
                this.options[a] = b.extend(!0, {},
                this.options[a], c);
                break;
            case "audioFullScreen":
                this.options[a] = c
            }
            return this
        },
        _refreshSize: function() {
            this._setSize();
            this._addUiClass();
            this._updateSize();
            this._updateButtons();
            this._updateAutohide();
            this._trigger(b.jPlayer.event.resize)
        },
        _setSize: function() {
            this.options.fullWindow ? (this.status.width = this.options.sizeFull.width, this.status.height = this.options.sizeFull.height, this.status.cssClass = this.options.sizeFull.cssClass) : (this.status.width = this.options.size.width, this.status.height = this.options.size.height, this.status.cssClass = this.options.size.cssClass);
            this.element.css({
                width: this.status.width,
                height: this.status.height
            })
        },
        _addUiClass: function() {
            this.ancestorJq.length && this.ancestorJq.addClass(this.status.cssClass)
        },
        _removeUiClass: function() {
            this.ancestorJq.length && this.ancestorJq.removeClass(this.status.cssClass)
        },
        _updateSize: function() {
            this.internal.poster.jq.css({
                width: this.status.width,
                height: this.status.height
            }); ! this.status.waitForPlay && this.html.active && this.status.video || this.html.video.available && this.html.used && this.status.nativeVideoControls ? this.internal.video.jq.css({
                width: this.status.width,
                height: this.status.height
            }) : !this.status.waitForPlay && this.flash.active && this.status.video && this.internal.flash.jq.css({
                width: this.status.width,
                height: this.status.height
            })
        },
        _updateAutohide: function() {
            var a = this,
            c = function() {
                a.css.jq.gui.fadeIn(a.options.autohide.fadeIn,
                function() {
                    clearTimeout(a.internal.autohideId);
                    a.internal.autohideId = setTimeout(function() {
                        a.css.jq.gui.fadeOut(a.options.autohide.fadeOut)
                    },
                    a.options.autohide.hold)
                })
            };
            this.css.jq.gui.length && (this.css.jq.gui.stop(!0, !0), clearTimeout(this.internal.autohideId), this.element.unbind(".jPlayerAutohide"), this.css.jq.gui.unbind(".jPlayerAutohide"), this.status.nativeVideoControls ? this.css.jq.gui.hide() : this.options.fullWindow && this.options.autohide.full || !this.options.fullWindow && this.options.autohide.restored ? (this.element.bind("mousemove.jPlayer.jPlayerAutohide", c), this.css.jq.gui.bind("mousemove.jPlayer.jPlayerAutohide", c), this.css.jq.gui.hide()) : this.css.jq.gui.show())
        },
        fullScreen: function() {
            this._setOption("fullScreen", !0)
        },
        restoreScreen: function() {
            this._setOption("fullScreen", !1)
        },
        _fullscreenAddEventListeners: function() {
            var a = this,
            c = b.jPlayer.nativeFeatures.fullscreen;
            c.api.fullscreenEnabled && c.event.fullscreenchange && ("function" !== typeof this.internal.fullscreenchangeHandler && (this.internal.fullscreenchangeHandler = function() {
                a._fullscreenchange()
            }), document.addEventListener(c.event.fullscreenchange, this.internal.fullscreenchangeHandler, !1))
        },
        _fullscreenRemoveEventListeners: function() {
            var a = b.jPlayer.nativeFeatures.fullscreen;
            this.internal.fullscreenchangeHandler && document.removeEventListener(a.event.fullscreenchange, this.internal.fullscreenchangeHandler, !1)
        },
        _fullscreenchange: function() {
            this.options.fullScreen && !b.jPlayer.nativeFeatures.fullscreen.api.fullscreenElement() && this._setOption("fullScreen", !1)
        },
        _requestFullscreen: function() {
            var a = this.ancestorJq.length ? this.ancestorJq[0] : this.element[0],
            c = b.jPlayer.nativeFeatures.fullscreen;
            c.used.webkitVideo && (a = this.htmlElement.video);
            c.api.fullscreenEnabled && c.api.requestFullscreen(a)
        },
        _exitFullscreen: function() {
            var a = b.jPlayer.nativeFeatures.fullscreen,
            c;
            a.used.webkitVideo && (c = this.htmlElement.video);
            a.api.fullscreenEnabled && a.api.exitFullscreen(c)
        },
        _html_initMedia: function(a) {
            var c = b(this.htmlElement.media).empty();
            b.each(a.track || [],
            function(a, b) {
                var g = document.createElement("track");
                g.setAttribute("kind", b.kind ? b.kind: "");
                g.setAttribute("src", b.src ? b.src: "");
                g.setAttribute("srclang", b.srclang ? b.srclang: "");
                g.setAttribute("label", b.label ? b.label: "");
                b.def && g.setAttribute("default", b.def);
                c.append(g)
            });
            this.htmlElement.media.src = this.status.src;
            "none" !== this.options.preload && this._html_load();
            this._trigger(b.jPlayer.event.timeupdate)
        },
        _html_setFormat: function(a) {
            var c = this;
            b.each(this.formats,
            function(b, e) {
                if (c.html.support[e] && a[e]) return c.status.src = a[e],
                c.status.format[e] = !0,
                c.status.formatType = e,
                !1
            })
        },
        _html_setAudio: function(a) {
            this._html_setFormat(a);
            this.htmlElement.media = this.htmlElement.audio;
            this._html_initMedia(a)
        },
        _html_setVideo: function(a) {
            this._html_setFormat(a);
            this.status.nativeVideoControls && (this.htmlElement.video.poster = this._validString(a.poster) ? a.poster: "");
            this.htmlElement.media = this.htmlElement.video;
            this._html_initMedia(a)
        },
        _html_resetMedia: function() {
            this.htmlElement.media && (this.htmlElement.media.id !== this.internal.video.id || this.status.nativeVideoControls || this.internal.video.jq.css({
                width: "0px",
                height: "0px"
            }), this.htmlElement.media.pause())
        },
        _html_clearMedia: function() {
            this.htmlElement.media && (this.htmlElement.media.src = "about:blank", this.htmlElement.media.load())
        },
        _html_load: function() {
            this.status.waitForLoad && (this.status.waitForLoad = !1, this.htmlElement.media.load());
            clearTimeout(this.internal.htmlDlyCmdId)
        },
        _html_play: function(a) {
            var b = this,
            d = this.htmlElement.media;
            this.androidFix.pause = !1;
            this._html_load();
            if (this.androidFix.setMedia) this.androidFix.play = !0,
            this.androidFix.time = a;
            else if (isNaN(a)) d.play();
            else {
                this.internal.cmdsIgnored && d.play();
                try {
                    if (!d.seekable || "object" === typeof d.seekable && 0 < d.seekable.length) d.currentTime = a,
                    d.play();
                    else throw 1;
                } catch(e) {
                    this.internal.htmlDlyCmdId = setTimeout(function() {
                        b.play(a)
                    },
                    250);
                    return
                }
            }
            this._html_checkWaitForPlay()
        },
        _html_pause: function(a) {
            var b = this,
            d = this.htmlElement.media;
            this.androidFix.play = !1;
            0 < a ? this._html_load() : clearTimeout(this.internal.htmlDlyCmdId);
            d.pause();
            if (this.androidFix.setMedia) this.androidFix.pause = !0,
            this.androidFix.time = a;
            else if (!isNaN(a)) try {
                if (!d.seekable || "object" === typeof d.seekable && 0 < d.seekable.length) d.currentTime = a;
                else throw 1;
            } catch(e) {
                this.internal.htmlDlyCmdId = setTimeout(function() {
                    b.pause(a)
                },
                250);
                return
            }
            0 < a && this._html_checkWaitForPlay()
        },
        _html_playHead: function(a) {
            var b = this,
            d = this.htmlElement.media;
            this._html_load();
            try {
                if ("object" === typeof d.seekable && 0 < d.seekable.length) d.currentTime = a * d.seekable.end(d.seekable.length - 1) / 100;
                else if (0 < d.duration && !isNaN(d.duration)) d.currentTime = a * d.duration / 100;
                else throw "e";
            } catch(e) {
                this.internal.htmlDlyCmdId = setTimeout(function() {
                    b.playHead(a)
                },
                250);
                return
            }
            this.status.waitForLoad || this._html_checkWaitForPlay()
        },
        _html_checkWaitForPlay: function() {
            this.status.waitForPlay && (this.status.waitForPlay = !1, this.css.jq.videoPlay.length && this.css.jq.videoPlay.hide(), this.status.video && (this.internal.poster.jq.hide(), this.internal.video.jq.css({
                width: this.status.width,
                height: this.status.height
            })))
        },
        _html_setProperty: function(a, b) {
            this.html.audio.available && (this.htmlElement.audio[a] = b);
            this.html.video.available && (this.htmlElement.video[a] = b)
        },
        _flash_setAudio: function(a) {
            var c = this;
            try {
                b.each(this.formats,
                function(b, d) {
                    if (c.flash.support[d] && a[d]) {
                        switch (d) {
                        case "m4a":
                        case "fla":
                            c._getMovie().fl_setAudio_m4a(a[d]);
                            break;
                        case "mp3":
                            c._getMovie().fl_setAudio_mp3(a[d]);
                            break;
                        case "rtmpa":
                            c._getMovie().fl_setAudio_rtmp(a[d])
                        }
                        c.status.src = a[d];
                        c.status.format[d] = !0;
                        c.status.formatType = d;
                        return ! 1
                    }
                }),
                "auto" === this.options.preload && (this._flash_load(), this.status.waitForLoad = !1)
            } catch(d) {
                this._flashError(d)
            }
        },
        _flash_setVideo: function(a) {
            var c = this;
            try {
                b.each(this.formats,
                function(b, d) {
                    if (c.flash.support[d] && a[d]) {
                        switch (d) {
                        case "m4v":
                        case "flv":
                            c._getMovie().fl_setVideo_m4v(a[d]);
                            break;
                        case "rtmpv":
                            c._getMovie().fl_setVideo_rtmp(a[d])
                        }
                        c.status.src = a[d];
                        c.status.format[d] = !0;
                        c.status.formatType = d;
                        return ! 1
                    }
                }),
                "auto" === this.options.preload && (this._flash_load(), this.status.waitForLoad = !1)
            } catch(d) {
                this._flashError(d)
            }
        },
        _flash_resetMedia: function() {
            this.internal.flash.jq.css({
                width: "0px",
                height: "0px"
            });
            this._flash_pause(NaN)
        },
        _flash_clearMedia: function() {
            try {
                this._getMovie().fl_clearMedia()
            } catch(a) {
                this._flashError(a)
            }
        },
        _flash_load: function() {
            try {
                this._getMovie().fl_load()
            } catch(a) {
                this._flashError(a)
            }
            this.status.waitForLoad = !1
        },
        _flash_play: function(a) {
            try {
                this._getMovie().fl_play(a)
            } catch(b) {
                this._flashError(b)
            }
            this.status.waitForLoad = !1;
            this._flash_checkWaitForPlay()
        },
        _flash_pause: function(a) {
            try {
                this._getMovie().fl_pause(a)
            } catch(b) {
                this._flashError(b)
            }
            0 < a && (this.status.waitForLoad = !1, this._flash_checkWaitForPlay())
        },
        _flash_playHead: function(a) {
            try {
                this._getMovie().fl_play_head(a)
            } catch(b) {
                this._flashError(b)
            }
            this.status.waitForLoad || this._flash_checkWaitForPlay()
        },
        _flash_checkWaitForPlay: function() {
            this.status.waitForPlay && (this.status.waitForPlay = !1, this.css.jq.videoPlay.length && this.css.jq.videoPlay.hide(), this.status.video && (this.internal.poster.jq.hide(), this.internal.flash.jq.css({
                width: this.status.width,
                height: this.status.height
            })))
        },
        _flash_volume: function(a) {
            try {
                this._getMovie().fl_volume(a)
            } catch(b) {
                this._flashError(b)
            }
        },
        _flash_mute: function(a) {
            try {
                this._getMovie().fl_mute(a)
            } catch(b) {
                this._flashError(b)
            }
        },
        _getMovie: function() {
            return document[this.internal.flash.id]
        },
        _getFlashPluginVersion: function() {
            var a = 0,
            b;
            if (window.ActiveXObject) try {
                if (b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")) {
                    var d = b.GetVariable("$version");
                    d && (d = d.split(" ")[1].split(","), a = parseInt(d[0], 10) + "." + parseInt(d[1], 10))
                }
            } catch(e) {} else navigator.plugins && 0 < navigator.mimeTypes.length && (b = navigator.plugins["Shockwave Flash"]) && (a = navigator.plugins["Shockwave Flash"].description.replace(/.*\s(\d+\.\d+).*/, "$1"));
            return 1 * a
        },
        _checkForFlash: function(a) {
            var b = !1;
            this._getFlashPluginVersion() >= a && (b = !0);
            return b
        },
        _validString: function(a) {
            return a && "string" === typeof a
        },
        _limitValue: function(a, b, d) {
            return a < b ? b: a > d ? d: a
        },
        _urlNotSetError: function(a) {
            this._error({
                type: b.jPlayer.error.URL_NOT_SET,
                context: a,
                message: b.jPlayer.errorMsg.URL_NOT_SET,
                hint: b.jPlayer.errorHint.URL_NOT_SET
            })
        },
        _flashError: function(a) {
            var c;
            c = this.internal.ready ? "FLASH_DISABLED": "FLASH";
            this._error({
                type: b.jPlayer.error[c],
                context: this.internal.flash.swf,
                message: b.jPlayer.errorMsg[c] + a.message,
                hint: b.jPlayer.errorHint[c]
            });
            this.internal.flash.jq.css({
                width: "1px",
                height: "1px"
            })
        },
        _error: function(a) {
            this._trigger(b.jPlayer.event.error, a);
            this.options.errorAlerts && this._alert("Error!" + (a.message ? "\n" + a.message: "") + (a.hint ? "\n" + a.hint: "") + "\nContext: " + a.context)
        },
        _warning: function(a) {
            this._trigger(b.jPlayer.event.warning, f, a);
            this.options.warningAlerts && this._alert("Warning!" + (a.message ? "\n" + a.message: "") + (a.hint ? "\n" + a.hint: "") + "\nContext: " + a.context)
        },
        _alert: function(a) {
            a = "jPlayer " + this.version.script + " : id='" + this.internal.self.id + "' : " + a;
            this.options.consoleAlerts ? window.console && window.console.log && window.console.log(a) : alert(a)
        },
        _emulateHtmlBridge: function() {
            var a = this;
            b.each(b.jPlayer.emulateMethods.split(/\s+/g),
            function(b, d) {
                a.internal.domNode[d] = function(b) {
                    a[d](b)
                }
            });
            b.each(b.jPlayer.event,
            function(c, d) {
                var e = !0;
                b.each(b.jPlayer.reservedEvent.split(/\s+/g),
                function(a, b) {
                    if (b === c) return e = !1
                });
                e && a.element.bind(d + ".jPlayer.jPlayerHtml",
                function() {
                    a._emulateHtmlUpdate();
                    var b = document.createEvent("Event");
                    b.initEvent(c, !1, !0);
                    a.internal.domNode.dispatchEvent(b)
                })
            })
        },
        _emulateHtmlUpdate: function() {
            var a = this;
            b.each(b.jPlayer.emulateStatus.split(/\s+/g),
            function(b, d) {
                a.internal.domNode[d] = a.status[d]
            });
            b.each(b.jPlayer.emulateOptions.split(/\s+/g),
            function(b, d) {
                a.internal.domNode[d] = a.options[d]
            })
        },
        _destroyHtmlBridge: function() {
            var a = this;
            this.element.unbind(".jPlayerHtml");
            b.each((b.jPlayer.emulateMethods + " " + b.jPlayer.emulateStatus + " " + b.jPlayer.emulateOptions).split(/\s+/g),
            function(b, d) {
                delete a.internal.domNode[d]
            })
        }
    };
    b.jPlayer.error = {
        FLASH: "e_flash",
        FLASH_DISABLED: "e_flash_disabled",
        NO_SOLUTION: "e_no_solution",
        NO_SUPPORT: "e_no_support",
        URL: "e_url",
        URL_NOT_SET: "e_url_not_set",
        VERSION: "e_version"
    };
    b.jPlayer.errorMsg = {
        FLASH: "jPlayer's Flash fallback is not configured correctly, or a command was issued before the jPlayer Ready event. Details: ",
        FLASH_DISABLED: "jPlayer's Flash fallback has been disabled by the browser due to the CSS rules you have used. Details: ",
        NO_SOLUTION: "No solution can be found by jPlayer in this browser. Neither HTML nor Flash can be used.",
        NO_SUPPORT: "It is not possible to play any media format provided in setMedia() on this browser using your current options.",
        URL: "Media URL could not be loaded.",
        URL_NOT_SET: "Attempt to issue media playback commands, while no media url is set.",
        VERSION: "jPlayer " + b.jPlayer.prototype.version.script + " needs Jplayer.swf version " + b.jPlayer.prototype.version.needFlash + " but found "
    };
    b.jPlayer.errorHint = {
        FLASH: "Check your swfPath option and that Jplayer.swf is there.",
        FLASH_DISABLED: "Check that you have not display:none; the jPlayer entity or any ancestor.",
        NO_SOLUTION: "Review the jPlayer options: support and supplied.",
        NO_SUPPORT: "Video or audio formats defined in the supplied option are missing.",
        URL: "Check media URL is valid.",
        URL_NOT_SET: "Use setMedia() to set the media URL.",
        VERSION: "Update jPlayer files."
    };
    b.jPlayer.warning = {
        CSS_SELECTOR_COUNT: "e_css_selector_count",
        CSS_SELECTOR_METHOD: "e_css_selector_method",
        CSS_SELECTOR_STRING: "e_css_selector_string",
        OPTION_KEY: "e_option_key"
    };
    b.jPlayer.warningMsg = {
        CSS_SELECTOR_COUNT: "The number of css selectors found did not equal one: ",
        CSS_SELECTOR_METHOD: "The methodName given in jPlayer('cssSelector') is not a valid jPlayer method.",
        CSS_SELECTOR_STRING: "The methodCssSelector given in jPlayer('cssSelector') is not a String or is empty.",
        OPTION_KEY: "The option requested in jPlayer('option') is undefined."
    };
    b.jPlayer.warningHint = {
        CSS_SELECTOR_COUNT: "Check your css selector and the ancestor.",
        CSS_SELECTOR_METHOD: "Check your method name.",
        CSS_SELECTOR_STRING: "Check your css selector is a string.",
        OPTION_KEY: "Check your option name."
    }
}); (function(window, document) {
    var _DOMReady = false;
    if (document.readyState === "complete") {
        _DOMReady = true
    } else {
        window.addEventListener("load", loaded, false)
    }
    function loaded() {
        window.removeEventListener("load", loaded, false);
        _DOMReady = true
    }
    var _reSmartURL = /\/ath(\/)?$/;
    var _reQueryString = /([\?&]ath=[^&]*$|&ath=[^&]*(&))/;
    var _instance;
    function ath(options) {
        _instance = _instance || new ath.Class(options);
        return _instance
    }
    ath.intl = {
        de_de: {
            message: "Um diese Web-App zum Home-Bildschirm hinzuzufÃ¼gen, tippen Sie auf %icon und dann <strong>%action</strong>.",
            action: {
                ios: "Zum Home-Bildschirm",
                android: "Zum Startbildschirm hinzufÃ¼gen",
                windows: "Auf Startseite"
            }
        },
        en_us: {
            message: "To add this web app to the home screen: tap %icon and then <strong>%action</strong>.",
            action: {
                ios: "Add to Home Screen",
                android: "Add to homescreen",
                windows: "pin to start"
            }
        },
        es_es: {
            message: "Para aÃ±adir esta aplicaciÃ³n web a la pantalla de inicio: pulsa %icon y selecciona <strong>%action</strong>.",
            action: {
                ios: "AÃ±adir a pantalla de inicio",
                android: "AÃ±adir a pantalla de inicio",
                windows: "AÃ±adir a inicio"
            }
        },
        fr_fr: {
            message: "Pour ajouter cette application web sur l'Ã©cran d'accueil : Appuyez %icon et sÃ©lectionnez <strong>%action</strong>.",
            action: {
                ios: "Ajouter sur l'Ã©cran d'accueil",
                android: "Ajouter Ã  l'Ã©cran d'accueil",
                windows: "Ã‰pingler Ã  l'Ã©cran d'accueil"
            }
        },
        it_it: {
            message: "Per Aggiungere questa web app alla schermata iniziale: premi %icon e poi <strong>%action</strong>.",
            action: {
                ios: "Aggiungi a Home",
                android: "Aggiungi alla homescreen",
                windows: "aggiungi a start"
            }
        },
        nb_no: {
            message: "For Ã¥ installere denne appen pÃ¥ hjem-skjermen: trykk pÃ¥ %icon og deretter <strong>%action</strong>.",
            action: {
                ios: "Legg til pÃ¥ Hjem-skjerm",
                android: "Legg til pÃ¥ startsiden",
                windows: "fest til start"
            }
        },
        nl_nl: {
            message: "Om deze webapp op je telefoon te installeren, klik op %icon en dan <strong>%action</strong>.",
            action: {
                ios: "Voeg toe aan beginscherm",
                android: "Toevoegen aan startscherm",
                windows: "Aan startscherm vastmaken"
            }
        },
        sv_se: {
            message: "FÃ¶r att lÃ¤gga till denna webbapplikation pÃ¥ hemskÃ¤rmen: tryck pÃ¥ %icon och dÃ¤refter <strong>%action</strong>.",
            action: {
                ios: "LÃ¤gg till pÃ¥ hemskÃ¤rmen",
                android: "LÃ¤gg til pÃ¥ startskÃ¤rmen",
                windows: "fÃ¤st pÃ¥ startskÃ¤rmen"
            }
        },
        zh_cn: {
            message: "å¦‚è¦æŠŠåº”ç”¨ç¨‹å¼åŠ è‡³ä¸»å±å¹•,è¯·ç‚¹å‡»%icon, ç„¶åŽ<strong>%action</strong>",
            action: {
                ios: "åŠ è‡³ä¸»å±å¹•",
                android: "åŠ è‡³ä¸»å±å¹•",
                windows: "æŒ‰ä½å¯åŠ¨"
            }
        },
        zh_tw: {
            message: "å¦‚è¦æŠŠæ‡‰ç”¨ç¨‹å¼åŠ è‡³ä¸»å±å¹•, è«‹é»žæ“Š%icon, ç„¶å¾Œ<strong>%action</strong>.",
            action: {
                ios: "åŠ è‡³ä¸»å±å¹•",
                android: "åŠ è‡³ä¸»å±å¹•",
                windows: "æŒ‰ä½å•Ÿå‹•"
            }
        }
    };
    for (var lang in ath.intl) {
        ath.intl[lang.substr(0, 2)] = ath.intl[lang]
    }
    ath.defaults = {
        appID: "org.cubiq.addtohome",
        fontSize: 15,
        debug: false,
        modal: false,
        mandatory: false,
        autostart: true,
        skipFirstVisit: false,
        startDelay: 1,
        lifespan: 15,
        displayPace: 1440,
        maxDisplayCount: 0,
        icon: true,
        message: "",
        validLocation: [],
        onInit: null,
        onShow: null,
        onRemove: null,
        onAdd: null,
        onPrivate: null,
        detectHomescreen: false
    };
    var _ua = window.navigator.userAgent;
    var _nav = window.navigator;
    _extend(ath, {
        hasToken: document.location.hash == "#ath" || _reSmartURL.test(document.location.href) || _reQueryString.test(document.location.search),
        isRetina: window.devicePixelRatio && window.devicePixelRatio > 1,
        isIDevice: /iphone|ipod|ipad/i.test(_ua),
        isMobileChrome: _ua.indexOf("Android") > -1 && /Chrome\/[.0-9]*/.test(_ua),
        isMobileIE: _ua.indexOf("Windows Phone") > -1,
        language: _nav.language && _nav.language.toLowerCase().replace("-", "_") || ""
    });
    ath.language = ath.language && ath.language in ath.intl ? ath.language: "en_us";
    ath.isMobileSafari = ath.isIDevice && _ua.indexOf("Safari") > -1 && _ua.indexOf("CriOS") < 0;
    ath.OS = ath.isIDevice ? "ios": ath.isMobileChrome ? "android": ath.isMobileIE ? "windows": "unsupported";
    ath.OSVersion = _ua.match(/(OS|Android) (\d+[_\.]\d+)/);
    ath.OSVersion = ath.OSVersion && ath.OSVersion[2] ? +ath.OSVersion[2].replace("_", ".") : 0;
    ath.isStandalone = window.navigator.standalone || ath.isMobileChrome && screen.height - document.documentElement.clientHeight < 40;
    ath.isTablet = ath.isMobileSafari && _ua.indexOf("iPad") > -1 || ath.isMobileChrome && _ua.indexOf("Mobile") < 0;
    ath.isCompatible = ath.isMobileSafari && ath.OSVersion >= 6 || ath.isMobileChrome;
    var _defaultSession = {
        lastDisplayTime: 0,
        returningVisitor: false,
        displayCount: 0,
        optedout: false,
        added: false
    };
    ath.removeSession = function(appID) {
        try {
            localStorage.removeItem(appID || ath.defaults.appID)
        } catch(e) {}
    };
    ath.Class = function(options) {
        this.options = _extend({},
        ath.defaults);
        _extend(this.options, options);
        this.options.mandatory = this.options.mandatory && ("standalone" in window.navigator || this.options.debug);
        this.options.modal = this.options.modal || this.options.mandatory;
        if (this.options.mandatory) {
            this.options.startDelay = -.5
        }
        this.options.detectHomescreen = this.options.detectHomescreen === true ? "hash": this.options.detectHomescreen;
        if (this.options.debug) {
            ath.isCompatible = true;
            ath.OS = typeof this.options.debug == "string" ? this.options.debug: ath.OS == "unsupported" ? "android": ath.OS;
            ath.OSVersion = ath.OS == "ios" ? "7": "4"
        }
        this.container = document.documentElement;
        this.session = JSON.parse(localStorage.getItem(this.options.appID));
        if (ath.hasToken && (!ath.isCompatible || !this.session)) {
            ath.hasToken = false;
            _removeToken()
        }
        if (!ath.isCompatible) {
            return
        }
        this.session = this.session || _defaultSession;
        try {
            localStorage.setItem(this.options.appID, JSON.stringify(this.session));
            ath.hasLocalStorage = true
        } catch(e) {
            ath.hasLocalStorage = false;
            if (this.options.onPrivate) {
                this.options.onPrivate.call(this)
            }
        }
        var isValidLocation = !this.options.validLocation.length;
        for (var i = this.options.validLocation.length; i--;) {
            if (this.options.validLocation[i].test(document.location.href)) {
                isValidLocation = true;
                break
            }
        }
        if (localStorage.getItem("addToHome")) {
            this.optOut()
        }
        if (this.session.optedout || this.session.added || !isValidLocation) {
            return
        }
        if (ath.isStandalone) {
            if (!this.session.added) {
                this.session.added = true;
                this.updateSession();
                if (this.options.onAdd && ath.hasLocalStorage) {
                    this.options.onAdd.call(this)
                }
            }
            return
        }
        if (this.options.detectHomescreen) {
            if (ath.hasToken) {
                _removeToken();
                if (!this.session.added) {
                    this.session.added = true;
                    this.updateSession();
                    if (this.options.onAdd && ath.hasLocalStorage) {
                        this.options.onAdd.call(this)
                    }
                }
                return
            }
            if (this.options.detectHomescreen == "hash") {
                history.replaceState("", window.document.title, document.location.href + "#ath")
            } else if (this.options.detectHomescreen == "smartURL") {
                history.replaceState("", window.document.title, document.location.href.replace(/(\/)?$/, "/ath$1"))
            } else {
                history.replaceState("", window.document.title, document.location.href + (document.location.search ? "&": "?") + "ath=")
            }
        }
        if (!this.session.returningVisitor) {
            this.session.returningVisitor = true;
            this.updateSession();
            if (this.options.skipFirstVisit) {
                return
            }
        }
        if (!ath.hasLocalStorage) {
            return
        }
        this.ready = true;
        if (this.options.onInit) {
            this.options.onInit.call(this)
        }
        if (this.options.autostart) {
            this.show()
        }
    };
    ath.Class.prototype = {
        events: {
            load: "_delayedShow",
            error: "_delayedShow",
            orientationchange: "resize",
            resize: "resize",
            scroll: "resize",
            click: "remove",
            touchmove: "_preventDefault",
            transitionend: "_removeElements",
            webkitTransitionEnd: "_removeElements",
            MSTransitionEnd: "_removeElements"
        },
        handleEvent: function(e) {
            var type = this.events[e.type];
            if (type) {
                this[type](e)
            }
        },
        show: function(force) {
            if (this.options.autostart && !_DOMReady) {
                setTimeout(this.show.bind(this), 50);
                return
            }
            if (this.shown) {
                return
            }
            var now = Date.now();
            var lastDisplayTime = this.session.lastDisplayTime;
            if (force !== true) {
                if (!this.ready) {
                    return
                }
                if (now - lastDisplayTime < this.options.displayPace * 6e4) {
                    return
                }
                if (this.options.maxDisplayCount && this.session.displayCount >= this.options.maxDisplayCount) {
                    return
                }
            }
            this.shown = true;
            this.session.lastDisplayTime = now;
            this.session.displayCount++;
            this.updateSession();
            if (!this.applicationIcon) {
                if (ath.OS == "ios") {
                    this.applicationIcon = document.querySelector('head link[rel^=apple-touch-icon][sizes="152x152"],head link[rel^=apple-touch-icon][sizes="144x144"],head link[rel^=apple-touch-icon][sizes="120x120"],head link[rel^=apple-touch-icon][sizes="114x114"],head link[rel^=apple-touch-icon]')
                } else {
                    this.applicationIcon = document.querySelector('head link[rel^="shortcut icon"][sizes="196x196"],head link[rel^=apple-touch-icon]')
                }
            }
            var message = "";
            if (this.options.message in ath.intl) {
                message = ath.intl[this.options.message].message.replace("%action", ath.intl[this.options.message].action[ath.OS])
            } else if (this.options.message !== "") {
                message = this.options.message
            } else {
                message = ath.intl[ath.language].message.replace("%action", ath.intl[ath.language].action[ath.OS])
            }
            message = "<p>" + message.replace("%icon", '<span class="ath-action-icon">icon</span>') + "</p>";
            this.viewport = document.createElement("div");
            this.viewport.className = "ath-viewport";
            if (this.options.modal) {
                this.viewport.className += " ath-modal"
            }
            if (this.options.mandatory) {
                this.viewport.className += " ath-mandatory"
            }
            this.viewport.style.position = "absolute";
            this.element = document.createElement("div");
            this.element.className = "ath-container ath-" + ath.OS + " ath-" + ath.OS + (ath.OSVersion + "").substr(0, 1) + " ath-" + (ath.isTablet ? "tablet": "phone");
            this.element.style.cssText = "-webkit-transition-property:-webkit-transform,opacity;-webkit-transition-duration:0;-webkit-transform:translate3d(0,0,0);transition-property:transform,opacity;transition-duration:0;transform:translate3d(0,0,0);-webkit-transition-timing-function:ease-out";
            this.element.style.webkitTransform = "translate3d(0,-" + window.innerHeight + "px,0)";
            this.element.style.webkitTransitionDuration = "0s";
            if (this.options.icon && this.applicationIcon) {
                this.element.className += " ath-icon";
                this.img = document.createElement("img");
                this.img.className = "ath-application-icon";
                this.img.addEventListener("load", this, false);
                this.img.addEventListener("error", this, false);
                this.img.src = this.applicationIcon.href;
                this.element.appendChild(this.img)
            }
            this.element.innerHTML += message;
            this.viewport.style.left = "-99999em";
            this.viewport.appendChild(this.element);
            this.container.appendChild(this.viewport);
            if (!this.img) {
                this._delayedShow()
            }
        },
        _delayedShow: function(e) {
            setTimeout(this._show.bind(this), this.options.startDelay * 1e3 + 500)
        },
        _show: function() {
            var that = this;
            this.updateViewport();
            window.addEventListener("resize", this, false);
            window.addEventListener("scroll", this, false);
            window.addEventListener("orientationchange", this, false);
            if (this.options.modal) {
                document.addEventListener("touchmove", this, true)
            }
            if (!this.options.mandatory) {
                setTimeout(function() {
                    that.element.addEventListener("click", that, true)
                },
                1e3)
            }
            setTimeout(function() {
                that.element.style.webkitTransform = "translate3d(0,0,0)";
                that.element.style.webkitTransitionDuration = "1.2s"
            },
            0);
            if (this.options.lifespan) {
                this.removeTimer = setTimeout(this.remove.bind(this), this.options.lifespan * 1e3)
            }
            if (this.options.onShow) {
                this.options.onShow.call(this)
            }
        },
        remove: function() {
            clearTimeout(this.removeTimer);
            if (this.img) {
                this.img.removeEventListener("load", this, false);
                this.img.removeEventListener("error", this, false)
            }
            window.removeEventListener("resize", this, false);
            window.removeEventListener("scroll", this, false);
            window.removeEventListener("orientationchange", this, false);
            document.removeEventListener("touchmove", this, true);
            this.element.removeEventListener("click", this, true);
            this.element.addEventListener("transitionend", this, false);
            this.element.addEventListener("webkitTransitionEnd", this, false);
            this.element.addEventListener("MSTransitionEnd", this, false);
            this.element.style.webkitTransitionDuration = "0.3s";
            this.element.style.opacity = "0"
        },
        _removeElements: function() {
            this.element.removeEventListener("transitionend", this, false);
            this.element.removeEventListener("webkitTransitionEnd", this, false);
            this.element.removeEventListener("MSTransitionEnd", this, false);
            this.container.removeChild(this.viewport);
            this.shown = false;
            if (this.options.onRemove) {
                this.options.onRemove.call(this)
            }
        },
        updateViewport: function() {
            if (!this.shown) {
                return
            }
            this.viewport.style.width = window.innerWidth + "px";
            this.viewport.style.height = window.innerHeight + "px";
            this.viewport.style.left = window.scrollX + "px";
            this.viewport.style.top = window.scrollY + "px";
            var clientWidth = document.documentElement.clientWidth;
            this.orientation = clientWidth > document.documentElement.clientHeight ? "landscape": "portrait";
            var screenWidth = ath.OS == "ios" ? this.orientation == "portrait" ? screen.width: screen.height: screen.width;
            this.scale = screen.width > clientWidth ? 1 : screenWidth / window.innerWidth;
            this.element.style.fontSize = this.options.fontSize / this.scale + "px"
        },
        resize: function() {
            clearTimeout(this.resizeTimer);
            this.resizeTimer = setTimeout(this.updateViewport.bind(this), 100)
        },
        updateSession: function() {
            if (ath.hasLocalStorage === false) {
                return
            }
            localStorage.setItem(this.options.appID, JSON.stringify(this.session))
        },
        clearSession: function() {
            this.session = _defaultSession;
            this.updateSession()
        },
        optOut: function() {
            this.session.optedout = true;
            this.updateSession()
        },
        optIn: function() {
            this.session.optedout = false;
            this.updateSession()
        },
        clearDisplayCount: function() {
            this.session.displayCount = 0;
            this.updateSession()
        },
        _preventDefault: function(e) {
            e.preventDefault();
            e.stopPropagation()
        }
    };
    function _extend(target, obj) {
        for (var i in obj) {
            target[i] = obj[i]
        }
        return target
    }
    function _removeToken() {
        if (document.location.hash == "#ath") {
            history.replaceState("", window.document.title, document.location.href.split("#")[0])
        }
        if (_reSmartURL.test(document.location.href)) {
            history.replaceState("", window.document.title, document.location.href.replace(_reSmartURL, "$1"))
        }
        if (_reQueryString.test(document.location.search)) {
            history.replaceState("", window.document.title, document.location.href.replace(_reQueryString, "$2"))
        }
    }
    window.addToHomescreen = ath
})(window, document);
$(document).ready(function($) {
    $(window).on("scroll",
    function() {
        var c = jQuery(window).scrollTop();
        c > 0 ? $(".bdr_header").addClass("bdr_fixed") : $(".bdr_header").removeClass("bdr_fixed");
    });
    $(function($) {
        var $scroll_btm = $('html, body');
        $('a.scroll_link').click(function() {
            $scroll_btm.animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            },
            800);
            return false;
        });
    });
    $(function($) {
        bdrate = new WOW({
            animateClass: 'animated',
            offset: 100
        });
        bdrate.init();
    });
    $('.bdrinstro').flexslider({
        animation: "slide",
        directionNav: false,
        touch: true
    });
    $('.fealide').flexslider({
        slideshow: false,
        directionNav: false,
        touch: true
    });
    $('.shoplide').flexslider({
        animation: "slide",
        slideshow: false,
        controlNav: false,
        touch: true
    });
    $('input').iCheck({
        checkboxClass: 'icheckbox_minimal-aero',
        radioClass: 'iradio_minimal-aero',
        increaseArea: '20%'
    });
    $('.bdr_menu').onePageNav({
        scrollSpeed: 800,
        scrollThreshold: 0.5
    });
    $(".bdr_icon_menu").click(function() {
        $(".bdr_header").addClass("active");
    });
    $(".bdr_icon_menu_x").click(function() {
        $(".bdr_header").removeClass("active");
    });
    $('.btn_add,.btn_like').popover('hide');
    $('#bdr_home').parallax("50%", 0.5);
    $('.viper_pic').parallax("50%", 0.6);
});
$(document).ready(function() {
    $("#bdrbgm").jPlayer({
        ready: function(event) {
            $(this).jPlayer("setMedia", {
                title: "",
                mp3: "",
            }).jPlayer("play");
        },
        ended: function() {
            $(this).jPlayer("play");
        },
        swfPath: "",
        supplied: "mp3",
        cssSelectorAncestor: '#bdrplaying',
        wmode: "window",
        keyEnabled: true
    });
});;
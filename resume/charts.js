/* Static figures for the résumé PDFs: drawn once as SVG, then the page is printed.
   Journey (illustrative, #fig1), inside the candle (illustrative, #fig2), live vs backtest (real data, #fig3).
   A figure is drawn only if the page has its slot; the two-sheet résumé uses #fig3 alone. */
(function () {
  "use strict";
  var SERIES = {"live": [["2026-08-19 15:34", 1.107], ["2026-08-21 17:31", 0.462], ["2026-08-21 19:21", 0.929], ["2026-08-25 23:25", 0.608], ["2026-08-26 05:03", 0.286], ["2026-08-26 11:26", 0.071], ["2026-08-26 16:00", -0.141], ["2026-08-27 15:20", -0.565], ["2026-08-27 20:43", -1.203], ["2026-08-28 05:25", -1.539], ["2026-08-31 10:15", -1.958], ["2026-09-01 17:49", -2.479], ["2026-09-02 04:36", -3.006], ["2026-09-02 09:51", -3.212], ["2026-09-04 15:30", -3.826], ["2026-09-04 15:50", -4.444], ["2026-09-04 16:47", -2.905], ["2026-09-08 02:05", -3.114], ["2026-09-08 05:21", -3.423], ["2026-09-10 14:06", -4.041], ["2026-09-10 16:39", -3.712], ["2026-09-11 13:55", -4.123], ["2026-09-11 14:16", -4.737], ["2026-09-14 11:07", -4.939], ["2026-09-14 19:12", -3.646], ["2026-09-15 17:29", -3.952], ["2026-09-15 17:37", -4.466], ["2026-09-16 21:00", -4.672], ["2026-09-16 21:12", -5.192], ["2026-09-16 21:37", -5.379], ["2026-09-18 09:42", -4.373], ["2026-09-22 05:42", -3.602], ["2026-09-24 10:40", -4.125], ["2026-09-28 01:51", -2.846]], "old": [["2026-08-19 12:00", 1.276], ["2026-08-21 16:00", 1.807], ["2026-08-21 16:00", 2.088], ["2026-08-25 20:00", 1.735], ["2026-08-26 04:00", 1.378], ["2026-08-26 08:00", 1.143], ["2026-08-26 16:00", 1.357], ["2026-08-26 16:00", 1.14], ["2026-08-27 12:00", 1.318], ["2026-08-27 20:00", 1.578], ["2026-08-28 00:00", 2.6], ["2026-08-28 04:00", 2.253], ["2026-08-31 08:00", 1.796], ["2026-09-01 16:00", 1.982], ["2026-09-01 16:00", 1.322], ["2026-09-01 16:00", 2.626], ["2026-09-02 08:00", 2.393], ["2026-09-04 12:00", 1.735], ["2026-09-04 12:00", 1.07], ["2026-09-04 16:00", 2.409], ["2026-09-08 00:00", 2.187], ["2026-09-08 04:00", 1.852], ["2026-09-09 08:00", 2.9], ["2026-09-10 12:00", 2.157], ["2026-09-10 12:00", 3.642], ["2026-09-11 12:00", 3.198], ["2026-09-11 12:00", 2.471], ["2026-09-14 08:00", 2.205], ["2026-09-14 16:00", 3.523], ["2026-09-15 00:00", 3.037], ["2026-09-15 16:00", 2.695], ["2026-09-15 16:00", 2.114], ["2026-09-16 20:00", 2.331], ["2026-09-16 20:00", 2.108], ["2026-09-16 20:00", 1.889], ["2026-09-18 08:00", 2.943], ["2026-09-22 04:00", 3.741], ["2026-09-24 08:00", 3.974], ["2026-09-25 20:00", 4.828]], "real": [["2026-08-19 12:00", 1.328], ["2026-08-21 16:00", 1.859], ["2026-08-21 16:00", 1.213], ["2026-08-25 20:00", 0.891], ["2026-08-26 04:00", 0.569], ["2026-08-26 08:00", 0.354], ["2026-08-26 16:00", 0.569], ["2026-08-26 16:00", 0.356], ["2026-08-27 12:00", -0.071], ["2026-08-27 16:00", -0.708], ["2026-09-01 16:00", -1.235], ["2026-09-02 04:00", -1.76], ["2026-09-02 08:00", -1.969], ["2026-09-04 12:00", -2.594], ["2026-09-04 12:00", -3.214], ["2026-09-04 16:00", -1.929], ["2026-09-08 00:00", -2.137], ["2026-09-08 04:00", -2.449], ["2026-09-09 08:00", -1.404], ["2026-09-10 12:00", -2.032], ["2026-09-11 12:00", -2.447], ["2026-09-11 12:00", -3.069], ["2026-09-14 08:00", -3.275], ["2026-09-14 16:00", -1.989], ["2026-09-15 00:00", -2.405], ["2026-09-15 16:00", -2.922], ["2026-09-15 16:00", -3.233], ["2026-09-16 20:00", -3.75], ["2026-09-16 20:00", -3.955], ["2026-09-16 20:00", -4.16], ["2026-09-18 08:00", -3.124], ["2026-09-22 04:00", -2.351], ["2026-09-24 08:00", -2.87], ["2026-09-25 20:00", -2.023]]};
  var fa = document.documentElement.lang === "fa";
  var NS = "http://www.w3.org/2000/svg";
  var css = function (n) { return getComputedStyle(document.documentElement).getPropertyValue(n).trim(); };
  var faDigits = function (s) { return String(s).replace(/\d/g, function (d) { return "۰۱۲۳۴۵۶۷۸۹"[d]; }); };
  var num = function (s) { return fa ? faDigits(s) : String(s); };
  function el(name, attrs, parent) {
    var e = document.createElementNS(NS, name);
    for (var k in attrs) if (attrs[k] !== undefined) e.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(e);
    return e;
  }
  function txt(parent, x, y, s, o) {
    o = o || {};
    var t = el("text", { x: x, y: y, "text-anchor": o.anchor || "middle", "font-size": o.size || 11, "font-weight": o.weight || 500, fill: o.fill || css("--muted"), direction: o.dir || (fa ? "rtl" : "ltr"), "dominant-baseline": o.base }, parent);
    if (o.family) t.setAttribute("font-family", o.family);
    t.textContent = s;
    return t;
  }
  function pill(parent, x, y, s, bg, anchorLeft) {
    var w = s.length * (fa ? 6.2 : 6.1) + 14, h = 17;
    var bx = anchorLeft ? x : x - w;
    el("rect", { x: bx, y: y - h / 2, width: w, height: h, rx: 3, fill: bg }, parent);
    txt(parent, bx + w / 2, y + 4, s, { size: 10, weight: 700, fill: css("--pen-ink") });
  }
  function svgIn(id, w, h) {
    var host = document.getElementById(id);
    if (!host) return null;
    return el("svg", { viewBox: "0 0 " + w + " " + h, width: w, height: h, role: "img" }, host);
  }

  /* ---------- Fig. 1: journey (same generator as the site) ---------- */
  (function () {
    var W = 1000, H = 262, svg = svgIn("fig1", W, H);
    if (!svg) return;
    var kinds = [1, 1, -1, 1, 1, 1, -1, 1, -1, 1, 1], M = kinds.length, N = 124;
    var mIdx = kinds.map(function (_, k) { return Math.round(10 + k * (N - 16) / (M - 1)); });
    var seed = 20240320;
    var rnd = function () { seed = (seed * 1664525 + 1013904223) % 4294967296; return seed / 4294967296; };
    var gauss = function () { return (rnd() + rnd() + rnd() - 1.5) * 1.15; };
    var C = [], price = 100, mset = {};
    mIdx.forEach(function (i, k) { mset[i] = k; });
    for (var i = 0; i < N; i++) {
      var o = price, c, k = mset[i];
      if (k !== undefined) c = o + (kinds[k] < 0 ? -7.5 : 5.2);
      else if (i > 0 && mset[i - 1] !== undefined && kinds[mset[i - 1]] < 0) c = o - 1.6 + gauss() * 0.6;
      else c = o + 0.62 + gauss() * 1.35;
      var h = Math.max(o, c) + Math.abs(gauss()) * 0.9 + 0.25, l = Math.min(o, c) - Math.abs(gauss()) * 0.9 - 0.25;
      C.push({ o: o, h: h, l: l, c: c });
      price = c;
    }
    var lo = Infinity, hi = -Infinity;
    C.forEach(function (d) { lo = Math.min(lo, d.l); hi = Math.max(hi, d.h); });
    var pad = (hi - lo) * 0.06; lo -= pad; hi += pad;
    var L = 8, R = 8, T = 8, PH = 188, pw = W - L - R;
    var x = function (i) { return L + (i + 0.5) * pw / N; };
    var y = function (v) { return T + (hi - v) / (hi - lo) * PH; };
    for (var g = 1; g < 4; g++) el("line", { x1: L, x2: W - R, y1: T + g * PH / 4, y2: T + g * PH / 4, stroke: css("--rule"), "stroke-dasharray": "2 4" }, svg);
    var up = css("--up"), dn = css("--down"), pen = css("--pen"), bw = pw / N * 0.6;
    C.forEach(function (d, i) {
      var col = d.c >= d.o ? up : dn, cx = x(i);
      el("line", { x1: cx, x2: cx, y1: y(d.h), y2: y(d.l), stroke: col, "stroke-width": 1 }, svg);
      el("rect", { x: cx - bw / 2, y: y(Math.max(d.o, d.c)), width: bw, height: Math.max(1.2, Math.abs(y(d.o) - y(d.c))), fill: col }, svg);
    });
    var ema = [], a = 2 / 13, dpath = "";
    C.forEach(function (d, i) { ema.push(i ? ema[i - 1] + a * (d.c - ema[i - 1]) : d.c); dpath += (i ? " L" : "M") + x(i).toFixed(1) + " " + y(ema[i]).toFixed(1); });
    el("path", { d: dpath, fill: "none", stroke: pen, "stroke-width": 2, "stroke-linejoin": "round" }, svg);
    el("circle", { cx: x(N - 1), cy: y(ema[N - 1]), r: 4, fill: pen }, svg);
    var names = fa
      ? { 0: "نوروز ۱۴۰۳: شروع", 2: "خودکنترلی", 3: "جرقه‌ی هوش مصنوعی", 6: "اینترنت ملی", 8: "بکتست فریبنده", 10: "بازسازی" }
      : { 0: "Mar 2024: start", 2: "Self-control", 3: "The AI spark", 6: "Internet cut", 8: "Misleading backtest", 10: "Rebuild" };
    var rowY = T + PH + 40;
    Object.keys(names).forEach(function (ks) {
      var kk = +ks, d = C[mIdx[kk]], mx = x(mIdx[kk]), my = kinds[kk] < 0 ? y(d.l) + 8 : y(d.h) - 8;
      el("circle", { cx: mx, cy: my, r: 3.2, fill: css("--ink-2") }, svg);
      el("line", { x1: mx, x2: mx, y1: my + (kinds[kk] < 0 ? 4 : 4), y2: rowY - 16, stroke: css("--ink-2"), "stroke-width": .8, "stroke-dasharray": "2 3", opacity: .7 }, svg);
      el("circle", { cx: mx, cy: rowY - 14, r: 3.2, fill: kinds[kk] < 0 ? dn : up }, svg);
      var anchor = kk === 0 ? (fa ? "end" : "start") : kk === 10 ? (fa ? "start" : "end") : "middle";
      txt(svg, kk === 0 ? mx - 6 : kk === 10 ? mx + 6 : mx, rowY + 2, names[ks], { anchor: anchor, size: 11.5, weight: 700, fill: css("--ink") });
    });
  })();

  /* ---------- Fig. 2: inside the candle (same synthetic path as the site) ---------- */
  (function () {
    var W = 1000, H = 250, svg = svgIn("fig2", W, H);
    if (!svg) return;
    var N = 240, ENTRY = 99.0, STOP = 98.4, TARGET = 100.8, MS = [38, 151, 206];
    var WP = [[0, 100.0], [12, 100.42], [24, 100.28], [38, 101.02], [50, 100.7], [66, 100.96], [92, 100.18], [116, 99.72], [134, 99.96], [151, 99.12], [162, 99.3], [176, 99.08], [190, 99.36], [206, 98.44], [222, 98.6], [240, 98.7]];
    var seed = 1405;
    var rnd = function () { seed = (seed * 1664525 + 1013904223) % 4294967296; return seed / 4294967296; };
    var g = function () { return rnd() + rnd() + rnd() - 1.5; };
    var at = function (m) {
      for (var i = 1; i < WP.length; i++) if (m <= WP[i][0]) { var p = WP[i - 1], q = WP[i]; return p[1] + (q[1] - p[1]) * (m - p[0]) / (q[0] - p[0]); }
      return WP[WP.length - 1][1];
    };
    var B = [], prev = 100.0;
    for (var m = 0; m < N; m++) {
      var c = at(m + 1) + g() * 0.05;
      c = Math.min(c, 101.08);
      if (m < MS[1]) c = Math.max(c, 99.1);
      else if (m < MS[2]) c = Math.min(Math.max(c, 98.5), 99.55);
      else c = Math.max(c, 98.42);
      if (m === N - 1) c = 98.7;
      var o = prev;
      var h = Math.max(o, c) + Math.abs(g()) * 0.045 + 0.012, l = Math.min(o, c) - Math.abs(g()) * 0.045 - 0.012;
      if (m < MS[1]) l = Math.max(l, 99.06);
      else if (m > MS[1] && m < MS[2]) l = Math.max(l, 98.46);
      else if (m > MS[2]) l = Math.max(l, 98.36);
      if (m !== MS[0]) h = Math.min(h, 101.12);
      if (m > MS[1]) h = Math.min(h, 99.6);
      B.push({ o: o, h: h, l: l, c: c });
      prev = c;
    }
    B[MS[0]].h = 101.26; B[MS[1]].l = Math.min(B[MS[1]].l, 98.96); B[MS[2]].l = 98.3;
    var lo = 97.95, hi = 101.62, T = 40, PH = H - T - 26;
    var y = function (v) { return T + (hi - v) / (hi - lo) * PH; };
    var up = css("--up"), dn = css("--down"), pen = css("--pen"), ink = css("--ink"), rule = css("--rule");
    var oldW = 270, gap = 26, realW = W - oldW - gap;
    var ox = fa ? W - oldW : 0, rx = fa ? 0 : oldW + gap;
    function frame(x0, w, title, verdict, vcol) {
      el("rect", { x: x0 + .5, y: .5, width: w - 1, height: H - 1, rx: 4, fill: css("--sheet"), stroke: rule }, svg);
      txt(svg, fa ? x0 + w - 12 : x0 + 12, 22, title, { anchor: "start", size: 12, weight: 700, fill: ink });
      txt(svg, fa ? x0 + 14 : x0 + w - 14, 24, verdict, { anchor: "end", size: 17, weight: 800, fill: vcol, dir: "ltr", family: "'JetBrains Mono', monospace" });
      if (fa) svg.lastChild.setAttribute("text-anchor", "start");
      [[TARGET, up, [6, 4]], [ENTRY, pen, []], [STOP, dn, [6, 4]]].forEach(function (q) {
        el("line", { x1: x0 + 8, x2: x0 + w - 8, y1: y(q[0]), y2: y(q[0]), stroke: q[1], "stroke-width": 1.3, "stroke-dasharray": q[2].join(" ") }, svg);
      });
    }
    // old view: one 4-hour candle
    frame(ox, oldW, fa ? "آنچه بکتستر قدیم می‌دید" : "What the old backtester saw", "+3R", up);
    var cx = ox + oldW * (fa ? .58 : .42), C4 = B[N - 1].c, bw4 = 46;
    el("line", { x1: cx, x2: cx, y1: y(101.26), y2: y(98.3), stroke: dn, "stroke-width": 2.5 }, svg);
    el("rect", { x: cx - bw4 / 2, y: y(100.0), width: bw4, height: y(C4) - y(100.0), fill: dn }, svg);
    var ax = cx + (fa ? -1 : 1) * (bw4 / 2 + 20);
    el("line", { x1: ax, x2: ax, y1: y(ENTRY), y2: y(TARGET) + 9, stroke: pen, "stroke-width": 1.8, "stroke-dasharray": "5 4" }, svg);
    el("path", { d: "M" + ax + " " + (y(TARGET) + 1) + " l-5 9 h10 z", fill: pen }, svg);
    el("circle", { cx: ax, cy: y(ENTRY), r: 3.5, fill: pen }, svg);
    var tx = ax + (fa ? -8 : 8), ty = (y(ENTRY) + y(TARGET)) / 2;
    txt(svg, tx, ty - 6, fa ? "فرض قدیم:" : "Old assumption:", { anchor: "start", size: 10.5, weight: 700, fill: ink });
    txt(svg, tx, ty + 9, fa ? "اول ورود،" : "entry first,", { anchor: "start", size: 10.5, fill: css("--ink-2") });
    txt(svg, tx, ty + 23, fa ? "بعد سقف" : "high later", { anchor: "start", size: 10.5, fill: css("--ink-2") });
    // reality: the 240 one-minute candles
    frame(rx, realW, fa ? "در واقعیت، با داده‌ی یک‌دقیقه‌ای" : "What really happened, in 1-minute data", "−1R", dn);
    var L = rx + 14, pw = realW - 28, xm = function (i) { return L + (i + .5) * pw / N; }, bw = pw / N * .62;
    el("rect", { x: xm(MS[1]), y: T, width: xm(MS[2]) - xm(MS[1]), height: PH, fill: css("--pen-soft") }, svg);
    B.forEach(function (d, i) {
      var col = d.c >= d.o ? up : dn, X = xm(i);
      el("line", { x1: X, x2: X, y1: y(d.h), y2: y(d.l), stroke: col, "stroke-width": .9 }, svg);
      el("rect", { x: X - bw / 2, y: y(Math.max(d.o, d.c)), width: bw, height: Math.max(.9, Math.abs(y(d.o) - y(d.c))), fill: col }, svg);
    });
    [[MS[0], y(B[MS[0]].h) - 12], [MS[1], y(ENTRY)], [MS[2], y(STOP)]].forEach(function (s, k) {
      el("circle", { cx: xm(s[0]), cy: s[1], r: 9, fill: pen, stroke: css("--sheet"), "stroke-width": 2 }, svg);
      txt(svg, xm(s[0]), s[1] + 4, num(k + 1), { size: 10.5, weight: 800, fill: css("--pen-ink"), dir: "ltr" });
    });
    for (var hh = 0; hh <= 4; hh++) txt(svg, L + hh * 60 / N * pw, H - 8, num("0" + hh + ":00"), { anchor: hh === 0 ? "start" : hh === 4 ? "end" : "middle", size: 9.5, dir: "ltr" });
    var lab = fa ? ["حد سود (۳R)", "ورود", "حد ضرر"] : ["Target · 3R", "Entry", "Stop"];
    [[TARGET, up], [ENTRY, pen], [STOP, dn]].forEach(function (q, i) {
      if (fa) pill(svg, rx + realW - 12, y(q[0]), lab[i], q[1], false); else pill(svg, rx + 12, y(q[0]), lab[i], q[1], true);
    });
  })();

  /* ---------- Fig. 3: live vs backtest (real data) ---------- */
  (function () {
    var W = 1000, H = 176, svg = svgIn("fig3", W, H);
    if (!svg) return;
    var defs = [
      { key: "old", col: css("--old"), dash: "6 5", fa: "بکتست با روش قدیم", en: "Backtest, old method", w: 2 },
      { key: "real", col: css("--real"), dash: "", fa: "بکتست واقع‌بینانه", en: "Realistic backtest", w: 2 },
      { key: "live", col: css("--live"), dash: "", fa: "حساب زنده", en: "Live account", w: 2.6 }
    ];
    var parse = function (s) { return new Date(s.replace(" ", "T") + ":00Z").getTime(); };
    var t0 = parse("2026-08-17 00:00"), t1 = parse("2026-09-29 00:00");
    var L = 52, R = 132, T = 8, B = 26, pw = W - L - R, ph = H - T - B, y0 = -5.4, y1 = 5.6;
    var X = function (t) { return L + (t - t0) / (t1 - t0) * pw; };
    var Y = function (v) { return T + (y1 - v) / (y1 - y0) * ph; };
    var pct = function (v) { var s = (v > 0 ? "+" : v < 0 ? "−" : "") + Math.abs(v).toFixed(1) + "%"; return fa ? faDigits(s.replace(".", "٫").replace("%", "٪")) : s; };
    for (var gv = -5; gv <= 5; gv++) {
      el("line", { x1: L, x2: W - R, y1: Y(gv), y2: Y(gv), stroke: gv === 0 ? css("--muted") : css("--rule"), "stroke-dasharray": gv === 0 ? "" : "2 4", "stroke-width": 1 }, svg);
      if (gv % 2) txt(svg, L - 8, Y(gv) + 4, pct(gv), { anchor: "end", size: 10, dir: "ltr" });
    }
    var fmt = function (t) { try { return new Intl.DateTimeFormat(fa ? "fa-IR" : "en-US", { month: "short", day: "numeric", timeZone: "UTC" }).format(new Date(t)); } catch (e) { return ""; } };
    for (var t = t0; t <= t1; t += 14 * 86400000) txt(svg, X(t), H - 7, fmt(t), { size: 10 });
    var ends = [];
    defs.forEach(function (d) {
      var pts = [[t0, 0]]; SERIES[d.key].forEach(function (p) { pts.push([parse(p[0]), p[1]]); });
      var path = "M" + X(t0).toFixed(1) + " " + Y(0).toFixed(1);
      for (var i = 1; i < pts.length; i++) path += " H" + X(pts[i][0]).toFixed(1) + " V" + Y(pts[i][1]).toFixed(1);
      path += " H" + X(t1).toFixed(1);
      el("path", { d: path, fill: "none", stroke: css("--sheet"), "stroke-width": d.w + 3, "stroke-linejoin": "round" }, svg);
      el("path", { d: path, fill: "none", stroke: d.col, "stroke-width": d.w, "stroke-dasharray": d.dash, "stroke-linejoin": "round" }, svg);
      var last = pts[pts.length - 1][1];
      el("circle", { cx: X(t1), cy: Y(last), r: 4, fill: d.col, stroke: css("--sheet"), "stroke-width": 2 }, svg);
      ends.push({ y: Y(last), v: last, d: d });
    });
    ends.sort(function (a, b) { return a.y - b.y; });
    for (var e = 1; e < ends.length; e++) if (ends[e].y - ends[e - 1].y < 30) ends[e].y = ends[e - 1].y + 30;
    ends.forEach(function (en) {
      var ex = X(t1) + 10;
      txt(svg, ex, en.y + 3, pct(en.v), { anchor: "start", size: 12, weight: 800, fill: en.d.col, dir: "ltr" });
      txt(svg, ex, en.y + 17, en.d[fa ? "fa" : "en"], { anchor: fa ? "end" : "start", size: 10, fill: css("--ink-2") });
    });
  })();

  window.__chartsReady = true;
})();

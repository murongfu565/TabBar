!(function (e) {
  let t
  let n
  let o
  let i
  let s
  let a =
    '<svg><symbol id="icon-bussiness-man" viewBox="0 0 1024 1024"><path d="M644.8 581.568l160.64 187.456A64 64 0 0 1 756.842667 874.666667H267.157333a64 64 0 0 1-48.597333-105.642667l160.661333-187.434667c18.922667 11.52 39.466667 20.629333 61.205334 26.944L267.157333 810.666667H480v-128h64v128h212.842667l-173.269334-202.133334a254.613333 254.613333 0 0 0 61.226667-26.965333zM512 149.333333c117.824 0 213.333333 95.509333 213.333333 213.333334s-95.509333 213.333333-213.333333 213.333333-213.333333-95.509333-213.333333-213.333333S394.176 149.333333 512 149.333333z m0 64a149.333333 149.333333 0 1 0 0 298.666667 149.333333 149.333333 0 0 0 0-298.666667z"  ></path></symbol><symbol id="icon-suggest" viewBox="0 0 1024 1024"><path d="M830.784 489.301333l45.098667 45.397334-322.282667 320-14.656-14.762667 14.741333 14.890667h-45.013333v-45.376l-0.149333-0.149334 322.261333-320zM746.666667 170.666667a64 64 0 0 1 64 64v192l-64 64V234.666667H277.333333v554.666666h170.666667l-64 64h-106.666667a64 64 0 0 1-64-64V234.666667a64 64 0 0 1 64-64h469.333334zM533.333333 426.666667v64h-170.666666v-64h170.666666z m128-128v64H362.666667v-64h298.666666z"  ></path></symbol><symbol id="icon-search" viewBox="0 0 1024 1024"><path d="M469.333 192c153.174 0 277.334 124.16 277.334 277.333 0 68.054-24.534 130.411-65.216 178.688L846.336 818.24l-48.341 49.877L630.4 695.125a276.053 276.053 0 0 1-161.067 51.542C316.16 746.667 192 622.507 192 469.333S316.16 192 469.333 192z m0 64C351.51 256 256 351.51 256 469.333s95.51 213.334 213.333 213.334 213.334-95.51 213.334-213.334S587.157 256 469.333 256z"  ></path></symbol></svg>'
  var c = (c = document.getElementsByTagName('script'))[
    c.length - 1
  ].getAttribute('data-injectcss')
  const l = function (e, t) {
    t.parentNode.insertBefore(e, t)
  }
  if (c && !e.__iconfont__svg__cssinject__) {
    e.__iconfont__svg__cssinject__ = !0
    try {
      document.write(
        '<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>'
      )
    } catch (e) {
      console && console.log(e)
    }
  }
  function d() {
    s || ((s = !0), o())
  }
  function m() {
    try {
      i.documentElement.doScroll('left')
    } catch (e) {
      return void setTimeout(m, 50)
    }
    d()
  }
  ;(t = function () {
    let e
    let t = document.createElement('div')
    ;(t.innerHTML = a),
    (a = null),
    (t = t.getElementsByTagName('svg')[0]) &&
        (t.setAttribute('aria-hidden', 'true'),
        (t.style.position = 'absolute'),
        (t.style.width = 0),
        (t.style.height = 0),
        (t.style.overflow = 'hidden'),
        (t = t),
        (e = document.body).firstChild ? l(t, e.firstChild) : e.appendChild(t))
  }),
  document.addEventListener
    ? ~['complete', 'loaded', 'interactive'].indexOf(document.readyState)
        ? setTimeout(t, 0)
        : ((n = function () {
            document.removeEventListener('DOMContentLoaded', n, !1), t()
          }),
          document.addEventListener('DOMContentLoaded', n, !1))
    : document.attachEvent &&
        ((o = t),
        (i = e.document),
        (s = !1),
        m(),
        (i.onreadystatechange = function () {
          i.readyState == 'complete' && ((i.onreadystatechange = null), d())
        }))
})(window)

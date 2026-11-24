/* CRTC loading screen: logo in the centre, circular spinner, status message.
   CRTCLoader.show('Signing in...')  ...  CRTCLoader.hide()   (calls can overlap; it closes when the last one finishes)
   CRTCLoader.inline('Loading data...') returns small spinner HTML for use inside a panel. */
(function () {
  'use strict';
  var dlg, msg, sub, count = 0, tShow, tSlow, tLong, tHide;
  function build() {
    dlg = document.createElement('dialog'); dlg.className = 'crtc-loader'; dlg.setAttribute('aria-label', 'Loading');
    dlg.innerHTML = '<div class="cl-box" role="status" aria-live="polite"><div class="cl-ring"><i></i><b></b>' +
      '<img src="assets/crtc_logo.svg" alt="" onerror="this.replaceWith(Object.assign(document.createElement(\'span\'),{className:\'cl-text\',textContent:\'CRTC\'}))"></div>' +
      '<p class="cl-msg"></p><p class="cl-sub"></p><div class="cl-dots"><span></span><span></span><span></span></div></div>';
    document.body.appendChild(dlg);
    msg = dlg.querySelector('.cl-msg'); sub = dlg.querySelector('.cl-sub');
    dlg.addEventListener('cancel', function (e) { e.preventDefault(); });      // Esc must not close it
  }
  function open() {
    if (!dlg) build();
    if (!dlg.open) dlg.showModal();
    clearTimeout(tHide); dlg.classList.remove('out');
  }
  function show(text, opt) {
    count++; var t = text || 'Connecting to server...';
    var set = function () { if (msg) msg.textContent = t; if (sub) sub.textContent = ''; };
    if (count === 1) {
      clearTimeout(tShow); clearTimeout(tSlow); clearTimeout(tLong);
      var go = function () { open(); set(); };
      if (opt && opt.now) go(); else tShow = setTimeout(go, 180);          // quick requests never flash the screen
      tSlow = setTimeout(function () { if (sub) sub.textContent = 'Still connecting. The server may be waking up.'; }, 5000);
      tLong = setTimeout(function () { if (sub) sub.textContent = 'This is taking longer than usual. Please check your internet connection.'; }, 20000);
    } else { set(); }
  }
  function hide() {
    count = Math.max(0, count - 1); if (count) return;
    clearTimeout(tShow); clearTimeout(tSlow); clearTimeout(tLong);
    if (dlg && dlg.open) { dlg.classList.add('out'); tHide = setTimeout(function () { if (!count && dlg.open) dlg.close(); }, 220); }
  }
  function inline(text) { return '<div class="cl-inline" role="status"><span class="cl-mini"></span><span>' + (text || 'Loading...') + '</span></div>'; }
  window.CRTCLoader = {show: show, hide: hide, inline: inline};
})();

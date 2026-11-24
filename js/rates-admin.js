/* Inline rate management on the public rates page.
   Shows Add / Edit / Delete only to signed-in staff whose role allows it; the server (apps-script/Code.gs) enforces every rule. */
(function () {
  'use strict';
  var API = window.CRTC_API, tok = sessionStorage.getItem('crtc_token'), me = null, rows = [];
  var builtin = JSON.parse(JSON.stringify(testData));            // snapshot of js/rates-data.js, used for the one-time import
  var ROLES = {admin: 'Admin', faculty: 'Faculty', staff: 'Staff', ra: 'RA'};
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var esc = function (v) { return String(v == null ? '' : v).replace(/[&<>"']/g, function (c) { return {'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[c]; }); };
  var can = function (p) { return me && me.perms.indexOf(p) > -1; };

  function call(action, data) {
    var heavy = !/\.list$/.test(action) && window.CRTCLoader;
    if (heavy) CRTCLoader.show(action === 'me' ? 'Connecting to server...' : /\.delete$/.test(action) ? 'Deleting...' : /import/.test(action) ? 'Importing rates...' : 'Saving...', {now: action === 'me'});
    var done = function () { if (heavy) CRTCLoader.hide(); };
    return fetch(API, {method: 'POST', headers: {'Content-Type': 'text/plain;charset=utf-8'}, body: JSON.stringify(Object.assign({action: action, token: tok}, data || {}))})
      .then(function (r) { return r.json(); })
      .then(function (j) { if (j.status !== 'success') { if (j.code === 'auth') { sessionStorage.removeItem('crtc_token'); tok = null; me = null; bar(); } throw new Error(j.message || 'Request failed'); } return j.data; },
        function () { throw new Error('Cannot reach the server.'); })
      .then(function (v) { done(); return v; }, function (e) { done(); throw e; });
  }
  function toast(m, err) { var t = $('#admToast'); if (!t) { t = document.createElement('div'); t.id = 'admToast'; document.body.appendChild(t); } t.textContent = m; t.className = 'show' + (err ? ' err' : ''); clearTimeout(toast.t); toast.t = setTimeout(function () { t.className = ''; }, 3200); }

  /* ----- toolbar ----- */
  function mount() { var b = $('#admBar'); if (!b) { b = document.createElement('div'); b.id = 'admBar'; b.className = 'adm-bar'; var anchor = $('.search-bar'); anchor.parentNode.insertBefore(b, anchor); } return b; }
  function bar() {
    var b = mount();
    if (!me) { b.innerHTML = '<span><i class="fas fa-lock"></i> Management Portal:</span> <a class="adm-link" href="admin.html?next=rates">Sign in to manage rates</a>'; return; }
    var empty = rows.length === 0;
    b.innerHTML = '<span><i class="fas fa-user-shield"></i> <b>' + esc(me.name) + '</b> <em class="adm-role">' + ROLES[me.role] + '</em></span>' +
      (empty ? (can('rates.import') ? '<span class="adm-warn">The database has no rates yet.</span> <button class="adm-btn" id="admImport">Import current rates</button>' : '<span class="adm-warn">No rates in the database yet. Ask an administrator to import them.</span>')
        : (can('rates.edit') ? '<button class="adm-btn" id="admAdd"><i class="fas fa-plus"></i> Add test</button>' : '<span class="muted">Read-only access</span>')) +
      '<a class="adm-link" href="admin.html?next=rates" title="Users, notices and history">Open portal</a><button class="adm-link" id="admOut">Sign out</button>';
    if ($('#admAdd')) $('#admAdd').onclick = function () { form(null); };
    if ($('#admImport')) $('#admImport').onclick = function () {
      if (!confirm('Import ' + builtin.length + ' tests into the database?')) return;
      call('rates.import', {items: builtin}).then(function (d) { toast(d.message); reload(); }).catch(function (x) { toast(x.message, true); });
    };
    $('#admOut').onclick = function () { call('logout').catch(function () {}).then(function () { sessionStorage.removeItem('crtc_token'); location.reload(); }); };
  }

  /* ----- row buttons (added after every table render) ----- */
  var baseRender = window.renderTable;
  window.renderTable = function (d) {
    baseRender(d);
    if (!rows.length || !(can('rates.edit') || can('rates.delete'))) return;
    document.querySelectorAll('#ratesBody tr:not(.category-row)').forEach(function (tr) {
      var id = parseInt(tr.cells[0].textContent, 10), cell = tr.cells[tr.cells.length - 1], w = document.createElement('div'); w.className = 'adm-act';
      w.innerHTML = (can('rates.edit') ? '<button data-e="' + id + '" title="Edit"><i class="fas fa-pen"></i> Edit</button>' : '') + (can('rates.delete') ? '<button data-d="' + id + '" class="del" title="Delete"><i class="fas fa-trash"></i></button>' : '');
      cell.appendChild(w);
    });
  };
  $('#ratesBody').addEventListener('click', function (e) {
    var b = e.target.closest('.adm-act button'); if (!b) return;
    if (b.dataset.e) form(rows.filter(function (r) { return r.id == b.dataset.e; })[0]);
    if (b.dataset.d && confirm('Delete test ' + b.dataset.d + '? This is recorded in the history log.')) call('rates.delete', {id: Number(b.dataset.d)}).then(function () { toast('Test deleted.'); reload(); }).catch(function (x) { toast(x.message, true); });
  });

  /* ----- add / edit dialog ----- */
  function form(r) {
    var isNew = !r, cats = Array.from(new Set(rows.map(function (x) { return x.category; })));
    r = r || {id: '', category: '', name: '', std: '', material: '', unit: 'Per Sample', rate: '', hasInfo: false, active: true};
    var d = document.createElement('dialog'); d.className = 'adm-dlg';
    d.innerHTML = '<form class="adm-form"><h3>' + (isNew ? 'Add test' : 'Edit test ' + r.id) + '</h3>' +
      '<div class="adm-two"><label>Test code<input name="id" type="number" min="1" value="' + esc(r.id) + '" ' + (isNew ? '' : 'readonly') + ' required></label><label>Category<input name="category" list="admCats" value="' + esc(r.category) + '" required></label></div>' +
      '<datalist id="admCats">' + cats.map(function (c) { return '<option value="' + esc(c) + '">'; }).join('') + '</datalist>' +
      '<label>Test description<input name="name" value="' + esc(r.name) + '" required></label>' +
      '<div class="adm-two"><label>Standard<input name="std" value="' + esc(r.std) + '"></label><label>Required material<input name="material" value="' + esc(r.material) + '"></label></div>' +
      '<div class="adm-two"><label>Unit<input name="unit" value="' + esc(r.unit) + '"></label><label>Rate (BDT)<input name="rate" type="number" min="0" step="any" value="' + esc(r.rate) + '" required></label></div>' +
      '<label class="adm-chk"><input type="checkbox" name="hasInfo" ' + (r.hasInfo ? 'checked' : '') + '> Has detail popup (content is in js/rates-data.js)</label>' +
      '<label class="adm-chk"><input type="checkbox" name="active" ' + (r.active !== false ? 'checked' : '') + '> Visible on this page</label>' +
      '<p class="adm-err"></p><div class="adm-btns"><button type="button" class="adm-cancel">Cancel</button><button type="submit" class="adm-save">Save</button></div></form>';
    document.body.appendChild(d); var f = $('form', d);
    $('.adm-cancel', d).onclick = function () { d.close(); }; d.addEventListener('close', function () { d.remove(); });
    f.onsubmit = function (e) {
      e.preventDefault(); var s = $('.adm-save', d); s.disabled = true;
      call('rates.save', {isNew: isNew, rate: {id: f.id.value, category: f.category.value, name: f.name.value, std: f.std.value, material: f.material.value, unit: f.unit.value, rate: f.rate.value, hasInfo: f.hasInfo.checked, active: f.active.checked}})
        .then(function () { d.close(); toast('Saved.'); reload(); }).catch(function (x) { $('.adm-err', d).textContent = x.message; s.disabled = false; });
    };
    d.showModal();
  }

  /* ----- keep the public table in sync with the database ----- */
  function reload() {
    return call('rates.list').then(function (list) {
      rows = list.sort(function (a, b) { return a.id - b.id; });
      if (rows.length) {
        testData.length = 0;
        rows.filter(function (r) { return r.active; }).forEach(function (r) { testData.push({id: r.id, category: esc(r.category), name: esc(r.name), std: esc(r.std), material: esc(r.material), hasInfo: r.hasInfo, unit: esc(r.unit), rate: r.rate}); });
        var sel = $('#categoryFilter'); testData.forEach(function (t) { if (![].some.call(sel.options, function (o) { return o.value === t.category; })) sel.add(new Option(t.category, t.category)); });
      }
      bar(); filterTests();
    });
  }
  bar();
  if (tok) call('me').then(function (d) { me = d.user; return reload(); }).catch(function () { me = null; bar(); });
})();

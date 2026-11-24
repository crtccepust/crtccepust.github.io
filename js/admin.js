/* Management Portal: sign in, register and manage applications, reports, rates, notices, users and history.
   All security is enforced by apps-script/Code.gs; this file only drives the interface. */
(function () {
  'use strict';
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var esc = function (v) { return String(v == null ? '' : v).replace(/[&<>"']/g, function (c) { return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]; }); };
  var ROLES = {admin: 'Admin', faculty: 'Faculty', staff: 'Staff', ra: 'RA'};
  var S = {token: sessionStorage.getItem('crtc_token'), user: null, tab: 'rates', apps: [], statuses: [], reports: [], rates: [], users: []};
  var can = function (p) { return S.user && S.user.perms.indexOf(p) > -1; };
  var today = function () { return new Date().toISOString().slice(0, 10); };
  var opts = function (list, sel) { return list.map(function (s) { return '<option' + (s === sel ? ' selected' : '') + '>' + esc(s) + '</option>'; }).join(''); };

  /* ---------- API ---------- */
  var MSG = {me: 'Connecting to server...', login: 'Signing in...', register: 'Submitting your request...', logout: 'Signing out...', changePassword: 'Updating password...', 'rates.import': 'Importing rates...'};
  function api(action, data) {
    if (!/^https:\/\/script\.google\.com\//.test(window.CRTC_API || '')) return Promise.reject(new Error('The server address is not set. Paste your Web app URL into js/config.js.'));
    var heavy = !/\.list$/.test(action) && window.CRTCLoader;
    if (heavy) CRTCLoader.show(MSG[action] || (/\.(save|create|update)$/.test(action) ? 'Saving...' : /\.(delete)$/.test(action) ? 'Deleting...' : 'Connecting to server...'), {now: action === 'me' || action === 'login'});
    var done = function () { if (heavy) CRTCLoader.hide(); };
    return fetch(window.CRTC_API, {method: 'POST', headers: {'Content-Type': 'text/plain;charset=utf-8'}, body: JSON.stringify(Object.assign({action: action, token: S.token}, data || {}))})
      .then(function (r) { return r.json(); })
      .then(function (j) {
        if (j.status !== 'success') { if (j.code === 'auth' && S.user) signOut(j.message); throw new Error(j.message || 'Request failed'); }
        return j.data;
      }, function () { throw new Error('Cannot reach the server. Check your internet connection and the address in js/config.js.'); })
      .then(function (v) { done(); return v; }, function (e) { done(); throw e; });
  }
  function toast(m, err) { var t = $('#toast'); t.textContent = m; t.className = 'show' + (err ? ' err' : ''); clearTimeout(toast.t); toast.t = setTimeout(function () { t.className = ''; }, 3400); }
  function authMsg(m, ok) { var e = $('#authMsg'); e.textContent = m || ''; e.className = 'msg ' + (ok ? 'ok' : 'err'); }
  function busy(b, on) { b.disabled = on; }
  function fail(x) { toast(x.message, true); }

  /* ---------- sign in / register ---------- */
  document.querySelectorAll('[data-auth]').forEach(function (b) {
    b.onclick = function () {
      document.querySelectorAll('[data-auth]').forEach(function (x) { x.classList.toggle('on', x === b); });
      $('#loginForm').hidden = b.dataset.auth !== 'login'; $('#registerForm').hidden = b.dataset.auth !== 'register'; authMsg('');
    };
  });
  $('#loginForm').onsubmit = function (e) {
    e.preventDefault(); var f = e.target, btn = $('button', f); busy(btn, true); authMsg('');
    api('login', {username: f.username.value, password: f.password.value}).then(function (d) {
      S.token = d.token; sessionStorage.setItem('crtc_token', d.token); S.user = d.user; f.reset(); start();
    }).catch(function (x) { authMsg(x.message); }).then(function () { busy(btn, false); });
  };
  $('#registerForm').onsubmit = function (e) {
    e.preventDefault(); var f = e.target, btn = $('button', f); busy(btn, true); authMsg('');
    api('register', {name: f.name.value, email: f.email.value, username: f.username.value, role: f.role.value, password: f.password.value})
      .then(function (d) { f.reset(); authMsg(d.message, true); }).catch(function (x) { authMsg(x.message); }).then(function () { busy(btn, false); });
  };
  function signOut(msg) {
    if (S.token && !msg) api('logout').catch(function () {});
    S.token = null; S.user = null; sessionStorage.removeItem('crtc_token');
    $('#app').hidden = true; $('#auth').hidden = false; authMsg(msg || '', false);
  }
  $('#logoutBtn').onclick = function () { signOut(); };

  /* ---------- shell ---------- */
  function start() {
    if (/[?&]next=rates/.test(location.search)) { location.href = 'rates.html'; return; }
    $('#auth').hidden = true; $('#app').hidden = false;
    $('#uName').textContent = S.user.name; var r = $('#uRole'); r.textContent = ROLES[S.user.role]; r.className = 'badge ' + S.user.role;
    S.tab = can('apps.view') ? 'apps' : 'rates'; drawTabs(); show(S.tab);
  }
  function tabList() {
    var t = []; if (can('apps.view')) t.push(['apps', 'Applications']); if (can('reports.view')) t.push(['reports', 'Reports']);
    t.push(['rates', 'Test rates'], ['notices', 'Notices']); if (can('users.manage')) t.push(['users', 'Users']); if (can('audit.view')) t.push(['history', 'History']);
    t.push(['account', 'My account']); return t;
  }
  function drawTabs() {
    var pending = S.users.filter(function (u) { return u.status === 'pending'; }).length;
    $('#tabs').innerHTML = tabList().map(function (t) {
      return '<button data-tab="' + t[0] + '" class="' + (S.tab === t[0] ? 'on' : '') + '" role="tab">' + t[1] + (t[0] === 'users' && pending ? '<span class="count">' + pending + '</span>' : '') + '</button>';
    }).join('');
  }
  $('#tabs').onclick = function (e) { var b = e.target.closest('[data-tab]'); if (b) show(b.dataset.tab); };
  function show(tab) {
    S.tab = tab; drawTabs(); $('#view').onclick = $('#view').onchange = null; $('#view').innerHTML = CRTCLoader.inline('Loading data...');
    ({apps: viewApps, reports: viewReports, rates: viewRates, notices: viewNotices, users: viewUsers, history: viewHistory, account: viewAccount})[tab]()
      .catch(function (x) { $('#view').innerHTML = '<div class="panel msg err">' + esc(x.message) + '</div>'; });
  }
  function table(head, body, empty) {
    return '<div class="tbl-wrap"><table class="tbl"><thead><tr>' + head.map(function (h) { return '<th>' + h + '</th>'; }).join('') + '</tr></thead><tbody>' +
      (body || '<tr><td colspan="' + head.length + '" class="muted">' + empty + '</td></tr>') + '</tbody></table></div>';
  }
  function ask(html, onSubmit) {
    var d = $('#dlg'), f = $('#dlgForm'); f.innerHTML = html + '<p id="dlgMsg" class="msg err"></p><div class="row-btns"><button type="button" class="cancel">Cancel</button><button class="btn-main" type="submit">Save</button></div>';
    $('.cancel', f).onclick = function () { d.close(); };
    f.onsubmit = function (e) { e.preventDefault(); var b = $('.btn-main', f); busy(b, true);
      Promise.resolve(onSubmit(f)).then(function () { d.close(); }).catch(function (x) { $('#dlgMsg').textContent = x.message; }).then(function () { busy(b, false); }); };
    d.showModal();
  }
  function listView(o) {   /* shared search + filter + add layout */
    $('#view').innerHTML = '<div class="panel">' + (o.intro ? '<p class="muted" style="margin-bottom:12px">' + o.intro + '</p>' : '') + (o.note || '') +
      '<div class="bar"><input id="lq" type="search" placeholder="' + o.placeholder + '" aria-label="Search">' + (o.filter || '') + (o.add || '') + '</div><div id="lt"></div></div>';
  }

  /* ---------- applications (status tracking) ---------- */
  function viewApps() {
    return api('apps.list').then(function (d) {
      S.apps = d.rows; S.statuses = d.statuses; var canStatus = can('apps.status');
      listView({intro: 'Clients see these statuses when they enter their Application ID under <b>Track Application</b> on the home page.', placeholder: 'Search ID or client',
        note: canStatus ? '' : '<div class="note-ro">Your role cannot change application status.</div>',
        filter: '<select id="lf" aria-label="Status"><option value="">All statuses</option>' + opts(S.statuses) + '</select>',
        add: can('apps.create') ? '<button class="btn-main" id="addBtn"><i class="fas fa-plus"></i> New application</button>' : ''});
      var draw = function () {
        var q = $('#lq').value.toLowerCase(), st = $('#lf').value;
        $('#lt').innerHTML = table(['Application ID', 'Client', 'Date', 'Status', 'Note to client', 'Updated', ''], S.apps.filter(function (a) { return (!st || a.status === st) && (!q || (a.id + ' ' + a.client).toLowerCase().indexOf(q) > -1); }).map(function (a) {
          return '<tr><td><b>' + esc(a.id) + '</b></td><td>' + esc(a.client) + '</td><td>' + esc(a.date) + '</td><td>' +
            (canStatus ? '<select data-st="' + esc(a.id) + '" aria-label="Status of ' + esc(a.id) + '">' + opts(S.statuses, a.status) + '</select>' : '<span class="badge">' + esc(a.status) + '</span>') +
            '</td><td class="muted">' + esc(a.remarks) + '</td><td class="muted">' + esc(a.updatedBy) + '<br>' + esc(a.updatedAt) + '</td><td>' +
            ((can('apps.edit') || canStatus) ? '<button data-e="' + esc(a.id) + '">Edit</button>' : '') + (can('apps.delete') ? '<button class="danger" data-d="' + esc(a.id) + '">Delete</button>' : '') + '</td></tr>'; }).join(''), S.apps.length ? 'No matching applications.' : 'No applications yet.');
      };
      draw(); $('#lq').oninput = draw; $('#lf').onchange = draw; if ($('#addBtn')) $('#addBtn').onclick = function () { appForm(null); };
      $('#view').onchange = function (e) { var s = e.target.closest('[data-st]'); if (!s) return;
        api('apps.save', {isNew: false, app: {id: s.dataset.st, status: s.value}}).then(function (r) { S.apps = S.apps.map(function (a) { return a.id === r.id ? r : a; }); toast(r.id + ' is now "' + r.status + '".'); }).catch(function (x) { fail(x); show('apps'); }); };
      $('#view').onclick = function (e) { var b = e.target.closest('button'); if (!b) return;
        if (b.dataset.e) appForm(S.apps.filter(function (a) { return a.id === b.dataset.e; })[0]);
        if (b.dataset.d && confirm('Delete application ' + b.dataset.d + '? This is recorded in History.')) api('apps.delete', {id: b.dataset.d}).then(function () { toast('Application deleted.'); show('apps'); }).catch(fail); };
    });
  }
  function appForm(a) {
    var n = !a, full = n || can('apps.edit'); a = a || {id: '', client: '', date: today(), status: S.statuses[0], remarks: ''}; var ro = full ? '' : ' readonly';
    ask('<h2>' + (n ? 'New application' : 'Application ' + esc(a.id)) + '</h2><div class="two"><label>Application ID<input name="id" value="' + esc(a.id) + '" placeholder="12345678" ' + (n ? '' : 'readonly') + ' required></label><label>Date<input name="date" type="date" value="' + esc(a.date) + '"' + ro + '></label></div>' +
      '<label>Client / organisation<input name="client" value="' + esc(a.client) + '"' + ro + ' required></label><label>Status<select name="status">' + opts(S.statuses, a.status) + '</select></label>' +
      '<label>Note shown to the client (optional)<textarea name="remarks" rows="2" maxlength="300">' + esc(a.remarks) + '</textarea></label>',
      function (f) { return api('apps.save', {isNew: n, app: {id: f.id.value, date: f.date.value, client: f.client.value, status: f.status.value, remarks: f.remarks.value}}).then(function () { toast('Saved.'); show('apps'); }); });
  }

  /* ---------- reports (CRTC number + Drive PDF link) ---------- */
  function viewReports() {
    return api('reports.list').then(function (d) {
      S.reports = d.rows; S.rstat = d.statuses; var canEdit = can('reports.edit');
      listView({intro: 'Upload the report PDF to Google Drive (share: <i>Anyone with the link can view</i>), then add its link here. Clients check a report with its CRTC number under <b>Verify Report</b> on the home page.', placeholder: 'Search CRTC number, client or title',
        note: canEdit ? '' : '<div class="note-ro">Your role has read-only access to reports.</div>', add: canEdit ? '<button class="btn-main" id="addBtn"><i class="fas fa-plus"></i> Add report</button>' : ''});
      var draw = function () {
        var q = $('#lq').value.toLowerCase();
        $('#lt').innerHTML = table(['CRTC number', 'Client', 'Report', 'Date', 'Application', 'Status', 'PDF', ''], S.reports.filter(function (r) { return !q || (r.crtcNo + ' ' + r.client + ' ' + r.title).toLowerCase().indexOf(q) > -1; }).map(function (r) {
          return '<tr><td><b>' + esc(r.crtcNo) + '</b></td><td>' + esc(r.client) + '</td><td>' + esc(r.title) + '</td><td>' + esc(r.date) + '</td><td>' + esc(r.applicationId) + '</td><td><span class="badge ' + (r.status === 'Valid' ? 'active' : 'disabled') + '">' + esc(r.status) + '</span></td>' +
            '<td><a href="' + esc(r.link) + '" target="_blank" rel="noopener noreferrer"><i class="fas fa-file-pdf"></i> Open</a></td><td>' +
            (canEdit ? '<button data-e="' + esc(r.crtcNo) + '">Edit</button>' : '') + (can('reports.delete') ? '<button class="danger" data-d="' + esc(r.crtcNo) + '">Delete</button>' : '') + '</td></tr>'; }).join(''), S.reports.length ? 'No matching reports.' : 'No reports yet.');
      };
      draw(); $('#lq').oninput = draw; if ($('#addBtn')) $('#addBtn').onclick = function () { reportForm(null); };
      $('#view').onclick = function (e) { var b = e.target.closest('button'); if (!b) return;
        if (b.dataset.e) reportForm(S.reports.filter(function (r) { return r.crtcNo === b.dataset.e; })[0]);
        if (b.dataset.d && confirm('Delete report ' + b.dataset.d + '? Its verification link will stop working.')) api('reports.delete', {crtcNo: b.dataset.d}).then(function () { toast('Report deleted.'); show('reports'); }).catch(fail); };
    });
  }
  function reportForm(r) {
    var n = !r; r = r || {crtcNo: '', client: '', date: today(), title: '', applicationId: '', link: '', status: 'Valid'};
    ask('<h2>' + (n ? 'Add report' : 'Edit report') + '</h2><div class="two"><label>CRTC number<input name="crtcNo" value="' + esc(r.crtcNo) + '" placeholder="CRTC/2026/045" ' + (n ? '' : 'readonly') + ' required></label><label>Issue date<input name="date" type="date" value="' + esc(r.date) + '"></label></div>' +
      '<label>Client / organisation<input name="client" value="' + esc(r.client) + '" required></label><label>Report title / tests<input name="title" value="' + esc(r.title) + '" placeholder="e.g. Concrete cylinder compressive strength"></label>' +
      '<div class="two"><label>Application ID (optional)<input name="applicationId" value="' + esc(r.applicationId) + '" placeholder="12345678"></label><label>Status<select name="status">' + opts(S.rstat, r.status) + '</select></label></div>' +
      '<label>Google Drive link of the PDF<input name="link" value="' + esc(r.link) + '" placeholder="https://drive.google.com/file/d/..." required></label>' +
      '<p class="muted">If an Application ID is given, the client sees this report on the tracker once the status is <b>Report Ready</b> or <b>Delivered</b>.</p>',
      function (f) { return api('reports.save', {isNew: n, report: {crtcNo: f.crtcNo.value, date: f.date.value, client: f.client.value, title: f.title.value, applicationId: f.applicationId.value, link: f.link.value, status: f.status.value}}).then(function () { toast('Saved.'); show('reports'); }); });
  }

  /* ---------- rates ---------- */
  function viewRates() {
    return api('rates.list').then(function (rows) {
      S.rates = rows.sort(function (a, b) { return a.id - b.id; });
      var cats = Array.from(new Set(S.rates.map(function (r) { return r.category; }))).sort();
      listView({placeholder: 'Search code, test or standard', note: can('rates.edit') ? '' : '<div class="note-ro">Your role has read-only access to rates.</div>',
        filter: '<select id="lf" aria-label="Category"><option value="">All categories</option>' + opts(cats) + '</select>',
        add: (can('rates.edit') ? '<button class="btn-main" id="addBtn"><i class="fas fa-plus"></i> Add test</button>' : '') + (can('rates.import') ? '<button class="btn-outline act" id="impBtn" title="Load the rates built into js/rates-data.js">Import website rates</button>' : '')});
      var draw = function () {
        var q = $('#lq').value.toLowerCase(), c = $('#lf').value;
        $('#lt').innerHTML = table(['Code', 'Category', 'Test', 'Standard', 'Unit', 'Rate (BDT)', 'Updated', ''], S.rates.filter(function (r) { return (!c || r.category === c) && (!q || (r.id + ' ' + r.name + ' ' + r.std).toLowerCase().indexOf(q) > -1); }).map(function (r) {
          return '<tr class="' + (r.active ? '' : 'off') + '"><td>' + r.id + '</td><td>' + esc(r.category) + '</td><td>' + esc(r.name) + (r.active ? '' : ' <span class="badge disabled">hidden</span>') + '</td><td>' + esc(r.std) + '</td><td>' + esc(r.unit) + '</td><td class="num">' + Number(r.rate).toLocaleString() + '</td><td class="muted">' + esc(r.updatedBy) + '<br>' + esc(r.updatedAt) + '</td><td>' +
            (can('rates.edit') ? '<button data-e="' + r.id + '">Edit</button>' : '') + (can('rates.delete') ? '<button class="danger" data-d="' + r.id + '">Delete</button>' : '') + '</td></tr>'; }).join(''),
          S.rates.length ? 'No matching tests.' : 'No rates in the database yet.' + (can('rates.import') ? ' Click "Import website rates" to load the current list.' : ''));
      };
      draw(); $('#lq').oninput = draw; $('#lf').onchange = draw; if ($('#addBtn')) $('#addBtn').onclick = function () { rateForm(null, cats); };
      if ($('#impBtn')) $('#impBtn').onclick = function () { if (!confirm('Import ' + testData.length + ' tests from js/rates-data.js? Existing codes will be overwritten.')) return;
        api('rates.import', {items: testData}).then(function (d) { toast(d.message); show('rates'); }).catch(fail); };
      $('#view').onclick = function (e) { var b = e.target.closest('button'); if (!b) return;
        if (b.dataset.e) rateForm(S.rates.filter(function (r) { return r.id == b.dataset.e; })[0], cats);
        if (b.dataset.d && confirm('Delete test ' + b.dataset.d + '? This is recorded in History.')) api('rates.delete', {id: Number(b.dataset.d)}).then(function () { toast('Test deleted.'); show('rates'); }).catch(fail); };
    });
  }
  function rateForm(r, cats) {
    var n = !r; r = r || {id: '', category: '', name: '', std: '', material: '', unit: 'Per Sample', rate: '', hasInfo: false, active: true};
    ask('<h2>' + (n ? 'Add test' : 'Edit test ' + r.id) + '</h2><div class="two"><label>Test code<input name="id" type="number" min="1" value="' + esc(r.id) + '" ' + (n ? '' : 'readonly') + ' required></label>' +
      '<label>Category<input name="category" list="cats" value="' + esc(r.category) + '" placeholder="Pick or type a new one" required><datalist id="cats">' + cats.map(function (c) { return '<option value="' + esc(c) + '">'; }).join('') + '</datalist></label></div>' +
      '<label>Test description<input name="name" value="' + esc(r.name) + '" required></label><div class="two"><label>Standard<input name="std" value="' + esc(r.std) + '"></label><label>Required material<input name="material" value="' + esc(r.material) + '"></label></div>' +
      '<div class="two"><label>Unit<input name="unit" value="' + esc(r.unit) + '"></label><label>Rate (BDT)<input name="rate" type="number" min="0" step="any" value="' + esc(r.rate) + '" required></label></div>' +
      '<label class="chk"><input type="checkbox" name="hasInfo" ' + (r.hasInfo ? 'checked' : '') + '> Has detail popup (content is in js/rates-data.js)</label><label class="chk"><input type="checkbox" name="active" ' + (r.active ? 'checked' : '') + '> Visible on the public rates page</label>',
      function (f) { return api('rates.save', {isNew: n, rate: {id: f.id.value, category: f.category.value, name: f.name.value, std: f.std.value, material: f.material.value, unit: f.unit.value, rate: f.rate.value, hasInfo: f.hasInfo.checked, active: f.active.checked}}).then(function () { toast('Saved.'); show('rates'); }); });
  }

  /* ---------- notices ---------- */
  function viewNotices() {
    return api('notices.list').then(function (rows) {
      S.notices = rows;
      listView({placeholder: 'Search notices', note: can('notices.post') ? '' : '<div class="note-ro">Your role cannot publish notices.</div>', add: can('notices.post') ? '<button class="btn-main" id="addBtn"><i class="fas fa-plus"></i> New notice</button>' : ''});
      var draw = function () {
        var q = $('#lq').value.toLowerCase();
        $('#lt').innerHTML = table(['Date', 'Notice', 'Category', 'Posted by', ''], S.notices.filter(function (n) { return !q || (n.title + ' ' + n.description).toLowerCase().indexOf(q) > -1; }).map(function (n) {
          return '<tr><td>' + esc(n.date) + '</td><td><b>' + esc(n.title) + '</b><br><span class="muted">' + esc(n.description).slice(0, 140) + '</span></td><td>' + esc(n.category) + '</td><td>' + esc(n.createdBy) + '</td><td>' +
            (can('notices.post') ? '<button data-e="' + esc(n.id) + '">Edit</button>' : '') + (can('notices.delete') ? '<button class="danger" data-d="' + esc(n.id) + '">Delete</button>' : '') + '</td></tr>'; }).join(''), 'No notices yet.');
      };
      draw(); $('#lq').oninput = draw; if ($('#addBtn')) $('#addBtn').onclick = function () { noticeForm(null); };
      $('#view').onclick = function (e) { var b = e.target.closest('button'); if (!b) return;
        if (b.dataset.e) noticeForm(S.notices.filter(function (n) { return n.id === b.dataset.e; })[0]);
        if (b.dataset.d && confirm('Delete this notice?')) api('notices.delete', {id: b.dataset.d}).then(function () { toast('Notice deleted.'); show('notices'); }).catch(fail); };
    });
  }
  function noticeForm(n) {
    var isNew = !n; n = n || {id: '', title: '', category: 'General', description: '', link: ''};
    ask('<h2>' + (isNew ? 'New notice' : 'Edit notice') + '</h2><label>Title<input name="title" value="' + esc(n.title) + '" required></label><label>Category<select name="category">' + opts(['General', 'Urgent', 'Results', 'Maintenance'], n.category) + '</select></label>' +
      '<label>Description<textarea name="description" rows="4" required>' + esc(n.description) + '</textarea></label><label>Link (optional)<input name="link" value="' + esc(n.link) + '" placeholder="https://"></label>',
      function (f) { return api('notices.save', {notice: {id: n.id, title: f.title.value, category: f.category.value, description: f.description.value, link: f.link.value}}).then(function () { toast('Notice saved.'); show('notices'); }); });
  }

  /* ---------- users (admin) ---------- */
  function viewUsers() {
    return api('users.list').then(function (rows) {
      S.users = rows; drawTabs();
      rows.sort(function (a, b) { return (a.status === 'pending' ? 0 : 1) - (b.status === 'pending' ? 0 : 1); });
      $('#view').innerHTML = '<div class="panel"><div class="bar"><button class="btn-main" id="addBtn"><i class="fas fa-user-plus"></i> Add user</button></div>' + table(['Name', 'Username / email', 'Role', 'Status', 'Last sign-in', ''], rows.map(function (u) {
        var me = u.id === S.user.id;
        return '<tr><td><b>' + esc(u.name) + '</b></td><td>' + esc(u.username) + '<br><span class="muted">' + esc(u.email) + '</span></td><td>' +
          (me ? '<span class="badge admin">Admin</span>' : '<select data-role="' + u.id + '">' + Object.keys(ROLES).map(function (r) { return '<option value="' + r + '"' + (r === u.role ? ' selected' : '') + '>' + ROLES[r] + '</option>'; }).join('') + '</select>') +
          '</td><td><span class="badge ' + u.status + '">' + u.status + '</span></td><td class="muted">' + esc(u.lastLogin || 'never') + '</td><td>' + (me ? '<span class="muted">you</span>' :
          (u.status !== 'active' ? '<button data-st="' + u.id + '" data-v="active">' + (u.status === 'pending' ? 'Approve' : 'Enable') + '</button>' : '<button data-st="' + u.id + '" data-v="disabled">Disable</button>') +
          '<button data-pw="' + u.id + '">Reset password</button><button class="danger" data-del="' + u.id + '">Delete</button>') + '</td></tr>'; }).join(''), 'No users.') + '</div>';
      $('#addBtn').onclick = function () {
        ask('<h2>Add user</h2><div class="two"><label>Full name<input name="name" required></label><label>Role<select name="role"><option value="faculty">Faculty</option><option value="staff" selected>Staff</option><option value="ra">RA</option><option value="admin">Admin</option></select></label></div>' +
          '<div class="two"><label>Username<input name="username" pattern="[a-zA-Z0-9._]{3,24}" required></label><label>Email<input name="email" type="email" required></label></div>' +
          '<label>Temporary password<input name="password" minlength="10" autocomplete="off" required></label><p class="muted">At least 10 characters with letters and numbers. The account is active immediately.</p>',
          function (f) { return api('users.create', {name: f.name.value, role: f.role.value, username: f.username.value, email: f.email.value, password: f.password.value}).then(function () { toast('User created.'); show('users'); }); });
      };
      $('#view').onchange = function (e) { var s = e.target.closest('[data-role]'); if (s) api('users.update', {id: s.dataset.role, role: s.value}).then(function () { toast('Role updated.'); }).catch(function (x) { fail(x); show('users'); }); };
      $('#view').onclick = function (e) {
        var b = e.target.closest('button'); if (!b) return;
        if (b.dataset.st) api('users.update', {id: b.dataset.st, status: b.dataset.v}).then(function () { toast('User updated.'); show('users'); }).catch(fail);
        if (b.dataset.del && confirm('Delete this user permanently? Their past history entries stay in the log.')) api('users.delete', {id: b.dataset.del}).then(function () { toast('User deleted.'); show('users'); }).catch(fail);
        if (b.dataset.pw) ask('<h2>Reset password</h2><label>New temporary password<input name="p" minlength="10" required autocomplete="off"></label><p class="muted">At least 10 characters with letters and numbers. Share it securely.</p>',
          function (f) { return api('users.resetPassword', {id: b.dataset.pw, newPassword: f.p.value}).then(function (d) { toast(d.message); }); });
      };
    });
  }

  /* ---------- history (admin) ---------- */
  function parse(s) { try { return s ? JSON.parse(s) : null; } catch (e) { return null; } }
  function lines(o, tag) { return Object.keys(o).filter(function (k) { return o[k] !== '' && ['perms', 'id', 'updatedAt', 'updatedBy'].indexOf(k) < 0; }).slice(0, 8).map(function (k) { return '<b>' + esc(k) + '</b>: <' + tag + '>' + esc(o[k]) + '</' + tag + '>'; }).join('<br>'); }
  function diff(a) {
    var b = parse(a.before), n = parse(a.after), h = '';
    if (b && n) h = Object.keys(n).filter(function (k) { return JSON.stringify(b[k]) !== JSON.stringify(n[k]) && ['updatedAt', 'updatedBy', 'lastLogin'].indexOf(k) < 0; }).map(function (k) { return '<b>' + esc(k) + '</b>: <del>' + esc(b[k]) + '</del> &rarr; <ins>' + esc(n[k]) + '</ins>'; }).join('<br>');
    else if (n) h = lines(n, 'ins'); else if (b) h = lines(b, 'del');
    return '<div class="diff">' + (h || '<span class="muted">-</span>') + '</div>';
  }
  function viewHistory() {
    $('#view').innerHTML = '<div class="panel"><div class="bar"><input id="hq" type="search" placeholder="Search user, action or record" aria-label="Search history"><select id="he"><option value="">All records</option><option value="application">Applications</option><option value="report">Reports</option><option value="rate">Rates</option><option value="notice">Notices</option><option value="user">Users</option></select><button class="btn-main" id="hgo">Search</button></div><div id="ht"></div></div>';
    var load = function () {
      $('#ht').innerHTML = CRTCLoader.inline('Loading history...');
      return api('audit.list', {q: $('#hq').value, entity: $('#he').value}).then(function (rows) {
        $('#ht').innerHTML = table(['When', 'Who', 'Action', 'Record', 'Change'], rows.map(function (a) {
          return '<tr><td class="muted" style="white-space:nowrap">' + esc(a.time) + '</td><td><b>' + esc(a.username) + '</b><br><span class="badge ' + esc(a.role) + '">' + esc(ROLES[a.role] || a.role || '-') + '</span></td><td>' + esc(String(a.action).replace(/_/g, ' ')) + '</td><td>' + esc(a.entity) + ' ' + esc(a.entityId) + '</td><td>' + diff(a) + '</td></tr>'; }).join(''), 'No matching activity.');
      }).catch(function (x) { $('#ht').innerHTML = '<p class="msg err">' + esc(x.message) + '</p>'; });
    };
    $('#hgo').onclick = load; $('#hq').onkeydown = function (e) { if (e.key === 'Enter') load(); }; $('#he').onchange = load; return load();
  }

  /* ---------- account ---------- */
  function viewAccount() {
    $('#view').innerHTML = '<div class="panel" style="max-width:480px"><h2>Change password</h2><form id="pwForm" class="stack"><label>Current password<input name="o" type="password" autocomplete="current-password" required></label>' +
      '<label>New password<input name="n" type="password" minlength="10" autocomplete="new-password" required></label><button class="btn-main wide" type="submit">Update password</button></form><p id="pwMsg" class="msg"></p></div>';
    $('#pwForm').onsubmit = function (e) { e.preventDefault(); var f = e.target, m = $('#pwMsg');
      api('changePassword', {oldPassword: f.o.value, newPassword: f.n.value}).then(function (d) { f.reset(); m.className = 'msg ok'; m.textContent = d.message; }).catch(function (x) { m.className = 'msg err'; m.textContent = x.message; }); };
    return Promise.resolve();
  }

  /* ---------- boot ---------- */
  if (S.token) api('me').then(function (d) { S.user = d.user; start(); }).catch(function () { signOut(); }); else $('#auth').hidden = false;
})();

/* notice page scripts */
        const SCRIPT_URL = window.CRTC_API;
        const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
        const safeUrl = u => /^https?:\/\//i.test(String(u || '').trim()) ? esc(String(u).trim()) : '';
        let ALL = [];
        const list = document.getElementById('notice-list');

        function render() {
            const q = document.getElementById('nSearch').value.toLowerCase().trim();
            const cat = document.getElementById('nCat').value;
            const rows = ALL.filter(n => (!cat || n.category === cat) &&
                (!q || (n.title + ' ' + n.description).toLowerCase().includes(q)));
            if (!rows.length) { list.innerHTML = '<p style="text-align:center;padding:40px;color:#666">No matching notices.</p>'; return; }
            list.innerHTML = rows.map(n => {
                const u = safeUrl(n.link);
                return `<div class="notice-item"><div class="notice-date"><i class="far fa-calendar-alt"></i><div>${esc(n.date)}</div></div>
                <div class="notice-content"><h3>${esc(n.title)}</h3>
                <div class="notice-meta"><span><i class="fas fa-tag"></i> ${esc(n.category)}</span></div>
                <p>${esc(n.description)}</p>
                ${u ? `<a href="${u}" target="_blank" rel="noopener noreferrer" class="btn-link">Download / View <i class="fas fa-external-link-alt"></i></a>` : ''}
                </div></div>`;
            }).join('');
        }

        async function fetchNotices() {
            try {
                const json = await (await fetch(`${SCRIPT_URL}?action=getNotices`)).json();
                if (json.status !== 'success') throw new Error('bad status');
                ALL = json.data || [];
                const sel = document.getElementById('nCat');
                [...new Set(ALL.map(n => n.category).filter(Boolean))].forEach(c => sel.add(new Option(c, c)));
                if (!ALL.length) { list.innerHTML = '<p style="text-align:center">No active notices found.</p>'; return; }
                render();
            } catch (e) {
                console.error(e);
                list.innerHTML = '<p style="text-align:center;color:#c0392b">Could not load notices. <a href="" style="text-decoration:underline">Retry</a></p>';
            }
        }
        document.getElementById('nSearch').addEventListener('input', render);
        document.getElementById('nCat').addEventListener('change', render);
        fetchNotices();
    

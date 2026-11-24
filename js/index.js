/* index page scripts */
        // CONFIGURATION: Replace with your Google Apps Script URL
        const SCRIPT_URL = window.CRTC_API; 
        
        // Navigation
        

        // Ticker Logic
        async function updateTicker() {
            if(!SCRIPT_URL) return;
            try {
                const response = await fetch(`${SCRIPT_URL}?action=getNotices`);
                const json = await response.json();
                if (json.status === 'success' && json.data.length > 0) {
                    const latest = json.data[0];
                    document.getElementById('ticker-text').innerHTML = `<span style="margin-right:20px; color:#ffdd57;">New:</span> ${latest.title} - ${latest.description} <a href="notice.html" style="margin-left:10px;">Read More</a>`;
                }
            } catch (e) { console.error(e); }
        }
        updateTicker();

        // Modal Logic
        const modal = document.getElementById('unifiedModal');
        const devModal = document.getElementById('devModal');
        const trackInput = document.getElementById('trackInput');
        const verifyInput = document.getElementById('verifyInput');
        const resultArea = document.getElementById('result-area');

        function openModal(mode) {
            modal.style.display = 'flex';
            setTimeout(() => modal.classList.add('show'), 10);
            switchTab(mode);
        }

        function closeModal() {
            modal.classList.remove('show');
            setTimeout(() => { modal.style.display = 'none'; resultArea.innerHTML = ''; trackInput.value = ''; verifyInput.value = ''; }, 300);
        }

        function openDevModal() {
            devModal.style.display = 'flex';
            setTimeout(() => devModal.classList.add('show'), 10);
        }

        function closeDevModal() {
            devModal.classList.remove('show');
            setTimeout(() => { devModal.style.display = 'none'; }, 300);
        }

        window.onclick = (e) => { 
            if(e.target == modal) closeModal(); 
            if(e.target == devModal) closeDevModal();
        }

        function switchTab(tab) {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.getElementById(`tab-${tab}`).classList.add('active');
            document.getElementById('view-track').style.display = tab === 'track' ? 'block' : 'none';
            document.getElementById('view-verify').style.display = tab === 'verify' ? 'block' : 'none';
            resultArea.innerHTML = '';
        }

        async function handleSearch(type) {
            const inputVal = type === 'track' ? trackInput.value.trim() : verifyInput.value.trim();
            if(!inputVal) { resultArea.innerHTML = '<div class="result-card error"><h4>Error</h4>Please enter an ID.</div>'; return; }
            
            resultArea.innerHTML = '<div><i class="fas fa-spinner fa-spin"></i> Searching...</div>';

            if(!SCRIPT_URL) {
                // Mock Data for Demo
                setTimeout(() => {
                    const mockData = { client: 'LGED, Pabna', date: '2025-11-20', status: type === 'track' ? 'Pending' : 'Verified', link: type==='verify' ? '#' : '' };
                    showResult('success', 'Record Found', mockData);
                }, 1000);
                return;
            }

            try {
                const response = await fetch(`${SCRIPT_URL}?action=${type}&id=${encodeURIComponent(inputVal)}`);
                const json = await response.json();
                if(json.status === 'success') showResult('success', 'Record Found', json.data);
                else showResult('error', 'Record not found.');
            } catch (error) { showResult('error', 'Connection failed.'); }
        }

        function showResult(status, title, data) {
            const esc = v => String(v == null ? '' : v).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
            if (status === 'error') { resultArea.innerHTML = `<div class="result-card error"><h4>${esc(title)}</h4></div>`; return; }
            const steps = window.CRTC_STATUSES || [], at = steps.indexOf(data.status);
            const done = at >= steps.length - 2 || /^valid/i.test(data.status), bad = /hold|cancel|revoked/i.test(data.status);
            const color = bad ? '#c0392b' : (done ? '#1a9d5b' : '#e69a14');
            const tracker = at > -1 ? '<ol class="track-steps">' + steps.map((s, i) => `<li class="${i < at ? 'done' : (i === at ? 'now' : '')}"><span>${i < at ? '&#10003;' : i + 1}</span>${esc(s)}</li>`).join('') + '</ol>' : '';
            const link = /^https?:\/\//i.test(data.link || '') ? `<a href="${esc(data.link)}" target="_blank" rel="noopener noreferrer" class="btn-view-report"><i class="fas fa-file-pdf"></i> View Report</a>` : '';
            resultArea.innerHTML = `
                <div class="result-card success" style="border-left-color:${color}">
                    <h4 style="color:${color}"><i class="fas fa-check-circle"></i> ${esc(data.status)}</h4>
                    ${tracker}
                    ${data.reportNo ? `<div><strong>CRTC No:</strong> ${esc(data.reportNo)}</div>` : ''}
                    ${data.title ? `<div><strong>Report:</strong> ${esc(data.title)}</div>` : ''}
                    <div><strong>Client:</strong> ${esc(data.client)}</div>
                    <div><strong>Date:</strong> ${esc(data.date)}</div>
                    ${data.remarks && !data.title ? `<div><strong>Note:</strong> ${esc(data.remarks)}</div>` : ''}
                    ${data.updated ? `<div class="muted-s">Last updated: ${esc(data.updated)}</div>` : ''}
                    ${link}
                </div>`;
        }

    

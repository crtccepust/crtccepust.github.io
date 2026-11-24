/* rates page scripts */

        // Fallback generator for tests without detailed custom entries
        function getGenericInfo(item) {
            return {
                title: `${item.name} (${item.std})`,
                content: `
                    <p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
                        Standard laboratory test conducted according to <strong>${item.std}</strong> specifications under CRTC quality control protocols.
                    </p>
                    <div style="background:#f8f9fa; border-left:4px solid var(--primary-color); padding:12px 15px; border-radius:4px; margin-bottom:12px;">
                        <p style="margin:2px 0;"><strong>Test Category:</strong> ${item.category}</p>
                        <p style="margin:2px 0;"><strong>Required Sample Material:</strong> ${item.material}</p>
                        <p style="margin:2px 0;"><strong>Standard Billing Unit:</strong> ${item.unit}</p>
                        <p style="margin:2px 0;"><strong>Official Rate:</strong> BDT ${item.rate.toLocaleString()}</p>
                    </div>
                    <p style="font-size:0.88rem; color:#555; line-height:1.6;">
                        <strong>Sample Guidelines:</strong> Please ensure that submitted samples are representative, properly sealed in moisture-proof containers, and labeled with project memo details prior to handover at CRTC civil testing labs.
                    </p>`
            };
        }

        let cart = [];

        function renderTable(data) {
            const tbody = document.getElementById('ratesBody');
            tbody.innerHTML = '';
            
            let currentCategory = "";

            data.forEach(item => {
                if (item.category !== currentCategory) {
                    currentCategory = item.category;
                    tbody.innerHTML += `
                        <tr class="category-row">
                            <td colspan="7">${currentCategory}</td>
                        </tr>
                    `;
                }

                const inCart = cart.find(c => c.id === item.id);
                const btnClass = inCart ? 'btn-add added' : 'btn-add';
                const btnText = inCart ? '<i class="fas fa-check"></i> Selected' : '<i class="fas fa-plus"></i> Select';
                
                // Format material display with Info button
                let materialHtml = `<span class="mat-badge">${item.material}</span>`;
                if (item.hasInfo) {
                    materialHtml += `<button class="btn-more-info" onclick="openMaterialInfoModal(${item.id})"><i class="fas fa-info-circle"></i> Info</button>`;
                }

                tbody.innerHTML += `
                    <tr>
                        <td><strong>${item.id}</strong></td>
						<td><strong>${item.name}</strong></td>
                        <td style="color:#666;font-size:0.9em;">${item.std}</td>
                        <td><div class="mat-cell">${materialHtml}</div></td>
                        <td style="text-align:center;">${item.unit}</td>
                        <td class="price" style="text-align:right;">${item.rate.toLocaleString()}</td>
                        <td style="text-align:center;"><button class="${btnClass}" onclick="toggleCart(${item.id})">${btnText}</button></td>
                    </tr>
                `;
            });
        }

        function openMaterialInfoModal(testId) {
            const item = testData.find(t => t.id === testId);
            const info = testInfoMap[testId] || (item ? getGenericInfo(item) : null);
            
            if (info) {
                document.getElementById('infoModalTitle').innerText = info.title;
                const modalContainer = document.getElementById('infoModalContainer');
                modalContainer.innerHTML = info.content;
                document.getElementById('materialInfoModal').style.display = 'flex';

                // Re-render LaTeX formulas dynamically via MathJax
                if (window.MathJax && MathJax.typesetPromise) {
                    MathJax.typesetPromise([modalContainer]).catch(err => console.error("MathJax error:", err));
                }
            }
        }

        function closeMaterialInfoModal() {
            document.getElementById('materialInfoModal').style.display = 'none';
        }

        function openOrderModal() {
            document.getElementById('orderModal').style.display = 'flex';
            document.getElementById('applicationFormStep').style.display = 'block';
            document.getElementById('previewStep').style.display = 'none';
        }

        function closeOrderModal() { document.getElementById('orderModal').style.display = 'none'; }
        function backToForm() {
            document.getElementById('applicationFormStep').style.display = 'block';
            document.getElementById('previewStep').style.display = 'none';
        }

        // Phone Validation Logic
        function validatePhone(input) {
            const msg = document.getElementById('phoneMsg');
            const pattern = /^01[3-9]\d{8}$/;
            
            if (pattern.test(input.value)) {
                input.classList.remove('invalid');
                input.classList.add('valid');
                msg.textContent = "Valid Mobile Number";
                msg.className = "validation-msg success";
                return true;
            } else {
                input.classList.remove('valid');
                input.classList.add('invalid');
                msg.textContent = "Enter a valid 11-digit mobile number (e.g. 01712345678)";
                msg.className = "validation-msg error";
                return false;
            }
        }

        function generateLetter(e) {
            e.preventDefault();
            
            const phoneInput = document.getElementById('clientPhone');
            if(!validatePhone(phoneInput)) {
                phoneInput.focus();
                return;
            }

            document.getElementById('printDate').innerText = new Date().toLocaleDateString('en-GB');
            document.getElementById('printMemoNo').innerText = document.getElementById('memoNo').value || "__________________";
            document.getElementById('printClientName').innerText = document.getElementById('clientName').value;
            document.getElementById('printClientAddress').innerText = document.getElementById('clientAddress').value || 'N/A';
            document.getElementById('printProjectRef').innerText = document.getElementById('projectRep').value || 'N/A';
			document.getElementById('printProjectRep').innerText = document.getElementById('projectRef').value || 'N/A';
            document.getElementById('printContact').innerText = phoneInput.value;
			document.getElementById('printProjectNote').innerText = document.getElementById('projectNote').value || 'N/A';

            const tbody = document.getElementById('printTableBody');
            tbody.innerHTML = '';
            let subTotal = 0;

            cart.forEach((item, index) => {
                const amount = item.rate * item.qty;
                subTotal += amount;
                tbody.innerHTML += `
                    <tr>
                        <td style="text-align:center;">${index + 1}</td>
                        <td>${item.name}</td>
                        <td style="font-size:0.9em;">${item.material}</td>
                        <td style="text-align:center;">${item.unit}</td>
                        <td style="text-align:center;">${item.qty}</td>
                        <td style="text-align:right;">${item.rate.toLocaleString()}</td>
                        <td style="text-align:right;">${amount.toLocaleString()}</td>
                    </tr>`;
            });

            const total = subTotal;
            document.getElementById('printTotal').innerText = total.toLocaleString() + ' BDT';

            document.getElementById('previewContent').innerHTML = document.getElementById('pdfContent').innerHTML;
            document.getElementById('applicationFormStep').style.display = 'none';
            document.getElementById('previewStep').style.display = 'block';
        }

        function printApplication() { window.print(); }
        
        async function downloadPDF() {
            const btn = document.getElementById('downloadPdfBtn');
            const originalText = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating PDF...';
            btn.disabled = true;

            try {
                const printableArea = document.getElementById('printableArea');
                const sourceElement = document.getElementById('pdfContent');

                const origDisplay = printableArea.style.display;
                const origPos = printableArea.style.position;
                const origLeft = printableArea.style.left;
                const origTop = printableArea.style.top;
                const origZIndex = printableArea.style.zIndex;

                printableArea.style.display = 'block';
                printableArea.style.position = 'fixed';
                printableArea.style.left = '0';
                printableArea.style.top = '0';
                printableArea.style.zIndex = '-9999';

                const clientName = document.getElementById('clientName').value.replace(/[^a-z0-9]/gi, '_') || 'Application';
                const filename = `CRTC_Application_${clientName}.pdf`;

                const opt = {
                    margin:       [1, 0.4, 0.4, 0.4],
                    filename:     filename,
                    image:        { type: 'jpeg', quality: 1 },
                    html2canvas:  { 
                        scale: 2,
                        useCORS: true,
                        logging: false,
                        scrollX: 0,
                        scrollY: 0
                    },
                    jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
                };

                await html2pdf().set(opt).from(sourceElement).save();

                printableArea.style.display = origDisplay;
                printableArea.style.position = origPos;
                printableArea.style.left = origLeft;
                printableArea.style.top = origTop;
                printableArea.style.zIndex = origZIndex;
            } catch (err) {
                console.error("PDF generation failed:", err);
            } finally {
                btn.innerHTML = originalText;
                btn.disabled = false;
            }
        }

        function toggleCart(id) {
            const item = testData.find(t => t.id === id);
            if (!item) return;

            const existingIndex = cart.findIndex(c => c.id === id);
            if (existingIndex > -1) {
                cart.splice(existingIndex, 1);
            } else {
                cart.push({
                    id: item.id,
                    name: item.name,
                    material: item.material,
                    unit: item.unit,
                    rate: item.rate,
                    qty: 1
                });
            }
            updateCartUI();
            filterTests();
        }

        function removeFromCart(id) {
            cart = cart.filter(c => c.id !== id);
            updateCartUI();
            filterTests();
        }

        function updateQty(id, qty) {
            const parsedQty = parseInt(qty, 10);
            const item = cart.find(c => c.id === id);
            if (item) {
                item.qty = isNaN(parsedQty) || parsedQty < 1 ? 1 : parsedQty;
                updateCartUI();
            }
        }

        function updateCartUI() {
            const cartItemsEl = document.getElementById('cartItems');
            const cartCountEl = document.getElementById('cartCount');
            const grandTotalEl = document.getElementById('grandTotal');
            const checkoutBtn = document.getElementById('checkoutBtn');

            const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
            cartCountEl.innerText = `(${cart.length})`;

            if (cart.length === 0) {
                cartItemsEl.innerHTML = '<li style="padding:30px; text-align:center; color:#999; font-style:italic;">No tests selected</li>';
                grandTotalEl.innerText = '0 BDT';
                checkoutBtn.disabled = true;
                return;
            }

            let total = 0;
            cartItemsEl.innerHTML = '';

            cart.forEach(item => {
                const itemTotal = item.rate * item.qty;
                total += itemTotal;

                const li = document.createElement('li');
                li.className = 'cart-item';
                li.innerHTML = `
                    <div class="cart-item-header">
                        <span style="padding-right:10px;">${item.name}</span>
                        <i class="fas fa-times btn-remove" onclick="removeFromCart(${item.id})" title="Remove item"></i>
                    </div>
                    <div class="cart-controls">
                        <div>Rate: <strong>${item.rate.toLocaleString()}</strong> BDT</div>
                        <div>
                            Qty: <input type="number" class="qty-input" min="1" value="${item.qty}" onchange="updateQty(${item.id}, this.value)" onkeyup="updateQty(${item.value}, this.value)">
                        </div>
                    </div>
                `;
                cartItemsEl.appendChild(li);
            });

            grandTotalEl.innerText = `${total.toLocaleString()} BDT`;
            checkoutBtn.disabled = false;
        }

        function filterTests() {
            const searchVal = document.getElementById('searchInput').value.toLowerCase().trim();
            const catVal = document.getElementById('categoryFilter').value;

            const filtered = testData.filter(item => {
                const matchesSearch = item.name.toLowerCase().includes(searchVal) ||
                                      item.std.toLowerCase().includes(searchVal) ||
                                      item.category.toLowerCase().includes(searchVal);
                const matchesCat = (catVal === 'ALL') || (item.category === catVal);
                return matchesSearch && matchesCat;
            });

            renderTable(filtered);
        }

        function toggleMobileCart() { 
            if(window.innerWidth <= 900) {
                document.getElementById('cartSidebar').classList.toggle('open'); 
            }
        }
		function downloadRatesPDF() {
			const fileId = "1PBHxRNowCsEVNTvFtLMgo3Win0lVwAuS";
			const link = document.createElement('a');
			link.href = `https://drive.google.com/uc?export=download&id=${fileId}`;
			link.target = "_blank";
			link.click();
			}

        renderTable(testData);

/* Live rates: if the Apps Script backend answers, use its list instead of the built-in one (js/rates-data.js stays as an offline fallback). */
(function () {
    if (!window.CRTC_API || typeof testData === 'undefined') return;
    fetch(window.CRTC_API + '?action=getRates').then(function (r) { return r.json(); }).then(function (j) {
        if (j.status !== 'success' || !Array.isArray(j.data) || !j.data.length) return;
        testData.length = 0;
        j.data.sort(function (a, b) { return a.id - b.id; }).forEach(function (x) { testData.push(x); });
        var sel = document.getElementById('categoryFilter');
        if (sel) testData.forEach(function (t) { if (![].some.call(sel.options, function (o) { return o.value === t.category; })) sel.add(new Option(t.category, t.category)); });
        renderTable(testData);
    }).catch(function () {});
})();

/* contact page scripts */
        const PUST_COORDS = [24.012744222594687, 89.28075403741454];
        const DEFAULT_ZOOM = 17;
        let mapInstance = null;
        let customMarker = null;
        let currentModalScale = 1;
        let isPanDragging = false;
        let startPanX = 0, startPanY = 0;
        let currentPanX = 0, currentPanY = 0;
        let currentInquiryId = '';

        document.addEventListener("DOMContentLoaded", function() {
            initLeafletMap();
            generateInquiryId();
        });

        function generateInquiryId() {
            const now = new Date();
            const yyyy = now.getFullYear();
            const mm = String(now.getMonth() + 1).padStart(2, '0');
            const dd = String(now.getDate()).padStart(2, '0');
            
            // Random 4-digit ID suffix
            const randomNum = Math.floor(1000 + Math.random() * 9000);
            
            currentInquiryId = `FI_CRTC_${yyyy}${mm}${dd}_${randomNum}`;
            
            const displayEl = document.getElementById('inquiryIdDisplay');
            const hiddenEl = document.getElementById('inquiryIdHidden');
            const badgeEl = document.getElementById('inquiryIdBadge');

            if (displayEl) displayEl.textContent = currentInquiryId;
            if (hiddenEl) hiddenEl.value = currentInquiryId;
            if (badgeEl) badgeEl.textContent = currentInquiryId;
        }

        function initLeafletMap() {
            const mapContainer = document.getElementById('map');
            if (!mapContainer) return;

            // 1. Initialize map once
            mapInstance = L.map('map').setView(PUST_COORDS, DEFAULT_ZOOM);

            // 2. High-resolution Satellite Imagery + Place Labels (shows PUST campus buildings clearly)
            const satelliteImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
                attribution: 'Tiles &copy; Esri &mdash; Source: Esri, Maxar, Earthstar Geographics, and the GIS User Community',
                maxNativeZoom: 18,
                maxZoom: 20
            });

            const placeLabels = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}', {
                maxNativeZoom: 18,
                maxZoom: 20
            });

            const satelliteHybrid = L.layerGroup([satelliteImagery, placeLabels]);

            // 3. Detailed Campus Street Map (OpenStreetMap Humanitarian layer - no referer block or API key)
            const detailedStreetMap = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by Humanitarian OpenStreetMap Team',
                maxNativeZoom: 19,
                maxZoom: 20
            });

            // Add Satellite Hybrid by default for sharp campus visibility
            satelliteHybrid.addTo(mapInstance);

            // Add Layer Switcher control in top-right corner
            L.control.layers({
                "Satellite View (Clear Campus)": satelliteHybrid,
                "Detailed Street Map": detailedStreetMap
            }).addTo(mapInstance);

            // 4. Add single marker & popup
            customMarker = L.marker(PUST_COORDS).addTo(mapInstance);
            customMarker.bindPopup(`
                <div style="font-family:'Inter',sans-serif; padding:4px;">
                    <b style="color:#003366; font-size:1.05rem;">CRTC Office</b><br>
                    <span style="font-size:0.88rem; color:#555;">
                        R#316, Dept. of Civil Engineering<br>
                        Academic Building-3 (2nd Floor)<br>
                        PUST, Pabna-6600, BD
                    </span>
                </div>
            `).openPopup();

            // Ensure crisp tile rendering after container layout settles
            setTimeout(() => {
                mapInstance.invalidateSize();
            }, 200);
        }

        function resetMapCenter() {
            if (mapInstance && customMarker) {
                mapInstance.setView(PUST_COORDS, DEFAULT_ZOOM);
                customMarker.openPopup();
                showToast("Map Centered", "Recentered view on Academic Building-3 (2nd Floor).");
            }
        }

        function openModal() {
            openFloorModal();
        }

        function openFloorModal() {
            const modal = document.getElementById('imageModal');
            if (modal) {
                modal.style.display = 'flex';
                setTimeout(() => modal.classList.add('show'), 10);
            }
            resetModalZoom();
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            const modal = document.getElementById('imageModal');
            if (modal) {
                modal.classList.remove('show');
                setTimeout(() => {
                    modal.style.display = 'none';
                }, 300);
            }
            document.body.style.overflow = 'auto';
        }

        function applyModalTransform() {
            const container = document.getElementById('modalImgContainer');
            if (container) {
                container.style.transform = `translate(${currentPanX}px, ${currentPanY}px) scale(${currentModalScale})`;
            }
        }

        function zoomModalImg(factor) {
            currentModalScale *= factor;
            currentModalScale = Math.min(Math.max(0.6, currentModalScale), 3.5);
            applyModalTransform();
        }

        function resetModalZoom() {
            currentModalScale = 1;
            currentPanX = 0;
            currentPanY = 0;
            applyModalTransform();
        }

        // Mouse Drag / Pan logic inside Modal Body
        const modalBody = document.getElementById('modalBody');
        if (modalBody) {
            modalBody.addEventListener('mousedown', (e) => {
                if (e.target.closest('.modal-btn')) return;
                isPanDragging = true;
                startPanX = e.clientX - currentPanX;
                startPanY = e.clientY - currentPanY;
            });

            window.addEventListener('mousemove', (e) => {
                if (!isPanDragging) return;
                currentPanX = e.clientX - startPanX;
                currentPanY = e.clientY - startPanY;
                applyModalTransform();
            });

            window.addEventListener('mouseup', () => {
                isPanDragging = false;
            });
        }

        // Keyboard ESC key listener to close modal
        document.addEventListener('keydown', function(evt) {
            if (evt.key === 'Escape') {
                closeModal();
            }
        });

        // Close modal when clicking dark backdrop
        document.getElementById('imageModal').addEventListener('click', function(e) {
            if (e.target === this || e.target.id === 'modalBody') {
                closeModal();
            }
        });

        async function handleFormSubmit(event) {
            event.preventDefault();
            const form = document.getElementById('contactForm');
            const submitBtn = document.getElementById('submitBtn');
            const btnText = document.getElementById('btnText');
            const btnIcon = document.getElementById('btnIcon');
            const userSubject = document.getElementById('msgSubject').value;

            if (!currentInquiryId) {
                generateInquiryId();
            }

            // Set standard email subject with Reference ID
            const fullSubject = `[CRTC Inquiry] ${userSubject} (Ref: ${currentInquiryId})`;
            document.getElementById('subjectHidden').value = fullSubject;

            // Update UI to loading state
            submitBtn.disabled = true;
            btnText.textContent = "Sending Message...";
            btnIcon.className = "fas fa-spinner fa-spin";

            const formData = new FormData(form);

            try {
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    body: formData
                });

                const result = await response.json();

                if (result.success) {
                    showToast("Inquiry Sent Successfully!", `Reference ID: ${currentInquiryId}. We will get back to you soon.`);
                    form.reset();
                    generateInquiryId();
                } else {
                    showToast("Submission Failed", result.message || "Something went wrong. Please verify your access key and try again.");
                }
            } catch (error) {
                showToast("Submission Error", "Network error occurred. Please check your connection and try again.");
            } finally {
                submitBtn.disabled = false;
                btnText.textContent = "Send Message";
                btnIcon.className = "fas fa-paper-plane";
            }
        }

        function showToast(title, message) {
            const container = document.getElementById('toastContainer');
            const toast = document.createElement('div');
            toast.className = 'toast';
            toast.innerHTML = `
                <div class="toast-icon"><i class="fas fa-check"></i></div>
                <div class="toast-content">
                    <h6>${title}</h6>
                    <p>${message}</p>
                </div>
            `;
            container.appendChild(toast);

            setTimeout(() => toast.classList.add('show'), 50);

            setTimeout(() => {
                toast.classList.remove('show');
                setTimeout(() => toast.remove(), 400);
            }, 4000);
        }
    

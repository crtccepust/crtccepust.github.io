/* services page scripts */
        // --- 1. DATA SOURCE (Simulating External File) ---
        // Edit this object to update images and captions
        const serviceData = {
            "structural": [
                { src: "assets/services/structural/UTM2000.jpg", caption: "WAW-2000B: Microcomputer Controlled Electro-Hydraulic Servo Universal Testing Machine" },
				{ src: "assets/services/structural/PIT.jpg", caption: "P8000: Wireless Pile Integrity Tester" },
                { src: "assets/services/structural/R660.jpg", caption: "NOVASCAN R660: 3D integrated Rebar Scanner" },
                { src: "assets/services/structural/CTM2000.jpg", caption: "YES-2000 Digital Compression Testing Machine" }
            ],
            "transportation": [
                { src: "assets/services/transport/cbr.jpeg", caption: "California Bearing Ratio (CBR) Test apparatus" },
                { src: "assets/services/transport/laa.jpg", caption: "Los Angeles Abrasion Machine" },
				{ src: "assets/services/transport/aiv.jpg", caption: "Aggregate impact Value (Aiv) Apparatus" },
				{ src: "assets/services/transport/mst.jpg", caption: "Asphalt Marshall Stability Tester Test Apparatus" },
				{ src: "assets/services/transport/dt.jpg", caption: "Bitumen Ductility Testing Machine" },
                { src: "assets/services/transport/abp.jpg", caption: "Automatic Digital Standard Bitumen Penetrometer" }
            ],
            "geotechnical": [
                { src: "assets/services/geotech/dst.jpg", caption: "Direct Shear Testing Apparatus" },
                { src: "assets/services/geotech/uct.jpg", caption: "Unconfined Compression Apparatus" },
                { src: "assets/services/geotech/ct.jpg", caption: "Consolidation Test Apparatus" },
				{ src: "assets/services/geotech/spt.jpg", caption: "Soil Test (SPT)" }
            ],
            "environmental": [
                { src: "assets/services/env/sp.jpg", caption: "UV VIS Spectrophotometer" },
                { src: "assets/services/env/2.jpg", caption: "Environmental Impact Assessment" },
                { src: "assets/services/env/3.jpg", caption: "Waste Management Planning" }
            ],
            "water": [
                { src: "assets/services/water/oca.jpg", caption: "Open Channel Flow Apparatus" },
                { src: "assets/services/water/flume.png", caption: "Tilting Flow Channel" },
				{ src: "assets/services/water/oca.jpg", caption: "Open Channel Flow Apparatus" },
                { src: "assets/services/water/3.jpg", caption: "Flood Management System" }
            ],
            "construction": [
                { src: "assets/services/cm/1.jpg", caption: "Project Supervision" },
                { src: "assets/services/cm/2.jpg", caption: "Construction Planning" },
                { src: "assets/services/cm/3.jpg", caption: "Cost Estimation & Safety" }
            ]
        };

        // --- 2. Tab Logic ---
        function showService(serviceId, element) {
            const contents = document.querySelectorAll('.service-content');
            contents.forEach(content => content.classList.remove('active'));

            const navItems = document.querySelectorAll('.service-nav-item');
            navItems.forEach(item => item.classList.remove('active'));

            document.getElementById(serviceId).classList.add('active');
            element.classList.add('active');

            if(window.innerWidth < 992) {
                document.querySelector('.service-details').scrollIntoView({behavior: 'smooth'});
            }
        }

        // --- 3. Dynamic Carousel Builder ---
        function buildCarousels() {
            for (const [key, items] of Object.entries(serviceData)) {
                const container = document.getElementById(`carousel-${key}`);
                if (!container) continue;

                let html = '';
                items.forEach((item, index) => {
                    // Fallback to placeholder if local image fails loading
                    const fallback = `https://via.placeholder.com/1000x500?text=${key.toUpperCase()}+Image+${index+1}`;
                    
                    html += `
                        <div class="carousel-item ${index === 0 ? 'active' : ''}">
                            <img src="${item.src}" onerror="this.src='${fallback}'" alt="${item.caption}">
                            <div class="carousel-caption">${item.caption}</div>
                        </div>
                    `;
                });

                // Add Controls
                html += `
                    <button class="carousel-btn prev-btn" onclick="moveSlide('carousel-${key}', -1)"><i class="fas fa-chevron-left"></i></button>
                    <button class="carousel-btn next-btn" onclick="moveSlide('carousel-${key}', 1)"><i class="fas fa-chevron-right"></i></button>
                `;

                container.innerHTML = html;
                startAutoRotation(`carousel-${key}`);
            }
        }

        // --- 4. Carousel Logic ---
        const autoRotateIntervals = {};

        function startAutoRotation(carouselId) {
            if (autoRotateIntervals[carouselId]) clearInterval(autoRotateIntervals[carouselId]);
            
            autoRotateIntervals[carouselId] = setInterval(() => {
                moveSlide(carouselId, 1);
            }, 4000);
        }

        function moveSlide(carouselId, direction) {
            const carousel = document.getElementById(carouselId);
            if(!carousel) return;

            const items = carousel.querySelectorAll('.carousel-item');
            let activeIndex = Array.from(items).findIndex(item => item.classList.contains('active'));
            
            items[activeIndex].classList.remove('active');
            
            let newIndex = activeIndex + direction;
            if (newIndex >= items.length) newIndex = 0;
            if (newIndex < 0) newIndex = items.length - 1;
            
            items[newIndex].classList.add('active');
            
            // Reset timer on manual click
            startAutoRotation(carouselId);
        }

        // Initialize
        window.onload = function() {
            buildCarousels(); // Build HTML from Data

            // Handle URL Hash
            const hash = window.location.hash.substring(1);
            if(hash) {
                const targetNav = document.querySelector(`.service-nav-item[onclick*="'${hash}'"]`);
                if(targetNav) targetNav.click();
            }
        }
		
    

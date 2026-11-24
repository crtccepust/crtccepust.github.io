/* rates data: edit test names, prices and info popups here */
        // Standardized Test Data with Concise Required Material & Detailed Info Available
        const testData = [
            // AGGREGATES
            { id: 101, category: "AGGREGATES", name: "Sieve Analysis (Gradation/FM) of Coarse Aggregate (CA)", std: "ASTM C136", material: "20 kg", hasInfo: true, unit: "Per Sample", rate: 4500 },
            { id: 102, category: "AGGREGATES", name: "Sieve Analysis (Gradation/FM) of Fine Aggregate (FA)", std: "ASTM C136", material: "2 kg", hasInfo: true, unit: "Per Sample", rate: 3000 },
            { id: 103, category: "AGGREGATES", name: "Sieve Analysis (Gradation) of Base/Subbase", std: "ASTM C136/C117", material: "20 kg", hasInfo: true, unit: "Per Sample", rate: 8000 },
            { id: 104, category: "AGGREGATES", name: "Sieve Analysis (Gradation) of Ballast", std: "ASTM C136", material: "40 kg", hasInfo: true, unit: "Per Sample", rate: 7000 },
            { id: 105, category: "AGGREGATES", name: "% Finer than #200 sieve by washing/Fine Content/Silt Content", std: "ASTM C117", material: "5 kg", hasInfo: true, unit: "Per Sample", rate: 3500 },
            { id: 106, category: "AGGREGATES", name: "Aggregate Crushing Value (ACV)", std: "BS 812-110", material: "20 kg", hasInfo: true, unit: "Per Sample", rate: 6000 },
            { id: 107, category: "AGGREGATES", name: "Aggregate Impact Value (AIV)", std: "BS 812-112", material: "5 kg", hasInfo: true, unit: "Per Sample", rate: 6000 },
            { id: 108, category: "AGGREGATES", name: "Ten Percent Fine Value (TFV)", std: "BS 812-111", material: "25 kg", hasInfo: true, unit: "Per Sample", rate: 9000 },
            { id: 109, category: "AGGREGATES", name: "L.A. Abrasion of CA", std: "ASTM C131", material: "15 kg", hasInfo: true, unit: "Per Sample", rate: 7000 },
            { id: 110, category: "AGGREGATES", name: "L.A. Abrasion of Ballast", std: "ASTM C535", material: "30 kg", hasInfo: true, unit: "Per Sample", rate: 7500 },
            { id: 111, category: "AGGREGATES", name: "Unit Weight of CA", std: "ASTM C29", material: "30 kg", hasInfo: true, unit: "Per Sample", rate: 4500 },
            { id: 112, category: "AGGREGATES", name: "Unit Weight of FA", std: "ASTM C29", material: "15 kg", hasInfo: true, unit: "Per Sample", rate: 4000 },
            { id: 113, category: "AGGREGATES", name: "Specific Gravity/ Density and Absorption of CA", std: "ASTM C127", material: "20 kg", hasInfo: true, unit: "Per Sample", rate: 6500 },
            { id: 114, category: "AGGREGATES", name: "Specific Gravity/ Density and Absorption  of FA", std: "ASTM C128", material: "3 kg", hasInfo: true, unit: "Per Sample", rate: 6500 },
            { id: 115, category: "AGGREGATES", name: "Void Ratio / Porosity", std: "ASTM C29", material: "25 kg", hasInfo: true, unit: "Per Sample", rate: 6500 },
            { id: 116, category: "AGGREGATES", name: "Standard Proctor Test of Aggregate", std: "ASTM D698", material: "50 kg", hasInfo: true, unit: "Per Sample", rate: 20500 },
            { id: 117, category: "AGGREGATES", name: "Modified Proctor Test of Aggregate", std: "ASTM D1557", material: "60 kg", hasInfo: true, unit: "Per Sample", rate: 30500 },
            { id: 118, category: "AGGREGATES", name: "CBR of Base or Sub-Base Materials", std: "ASTM D1883", material: "50 kg", hasInfo: true, unit: "Per Sample", rate: 50000 },
            { id: 119, category: "AGGREGATES", name: "Moisture Content", std: "ASTM C566", material: "5 kg", hasInfo: true, unit: "Per Sample", rate: 2500 },
            { id: 120, category: "AGGREGATES", name: "Flakiness Index (FI)", std: "BS 812-105", material: "15 kg", hasInfo: true, unit: "Per Sample", rate: 7000 },
            { id: 121, category: "AGGREGATES", name: "Elongation Index (EI)", std: "BS 812-105", material: "15 kg", hasInfo: true, unit: "Per Sample", rate: 7000 },
            { id: 122, category: "AGGREGATES", name: "Soundness (with Na<sub>2</sub>SO<sub>4</sub>/MgSO<sub>4</sub>)", std: "ASTM C88", material: "15 kg", hasInfo: true, unit: "Per Sample", rate: 19000 },
            { id: 123, category: "AGGREGATES", name: "Clay Lumps and Friable Particles", std: "ASTM C142", material: "10 kg", hasInfo: true, unit: "Per Sample", rate: 5000 },  
			{ id: 124, category: "AGGREGATES", name: "Percentage of Fractured Coarse Aggregate Particles", std: "ASTM D5821", material: "10 kg", hasInfo: true, unit: "Per Sample", rate: 8000 },
            { id: 125, category: "AGGREGATES", name: "Bulking of Sand", std: "BS 812-2", material: "5 kg", hasInfo: true, unit: "Per Sample", rate: 5000 },

            // BRICKS
            { id: 201, category: "BRICKS", name: "Absorption (ASTM)", std: "ASTM C67", material: "5 Nos.", hasInfo: true, unit: "Set (5 Nos.)", rate: 2000 },
            { id: 202, category: "BRICKS", name: "Absorption (BS)", std: "EN 772-21", material: "10 Nos.", hasInfo: true, unit: "Set (10 Nos.)", rate: 3500 },
            { id: 203, category: "BRICKS", name: "Crushing Strength (ASTM)", std: "ASTM C67", material: "5 Nos.", hasInfo: true, unit: "Set (5 Nos.)", rate: 4500 },
            { id: 204, category: "BRICKS", name: "Crushing Strength (BS)", std: "EN 772-1", material: "10 Nos.", hasInfo: true, unit: "Set (10 Nos.)", rate: 7000 },
            { id: 205, category: "BRICKS", name: "Size and Shape (ASTM)", std: "ASTM C67", material: "5 Nos.", hasInfo: true, unit: "Set (5 Nos.)", rate: 2500 },
            { id: 206, category: "BRICKS", name: "Size and Shape (BS)", std: "EN 772-16", material: "10 Nos.", hasInfo: true, unit: "Set (10 Nos.)", rate: 2500 },
            { id: 207, category: "BRICKS", name: "Unit Weight (ASTM)", std: "ASTM C67", material: "5 Nos.", hasInfo: true, unit: "Set (5 Nos.)", rate: 4000 },
            { id: 208, category: "BRICKS", name: "Unit Weight (BS)", std: "EN 772-13", material: "10 Nos.", hasInfo: true, unit: "Set (10 Nos.)", rate: 5000 },
            { id: 209, category: "BRICKS", name: "Efflorescence (ASTM)", std: "ASTM C67", material: "5 Nos.", hasInfo: true, unit: "Set (5 Nos.)", rate: 4500 },
            { id: 210, category: "BRICKS", name: "Efflorescence (BS)", std: "EN 772-5", material: "10 Nos.", hasInfo: true, unit: "Set (10 Nos.)", rate: 5000 },

            // CEMENT CONCRETE
            { id: 301, category: "CEMENT CONCRETE", name: "Concrete Cylinders (100x200mm)", std: "ASTM C39", material: "3 Cylinders", hasInfo: true, unit: "Set (3 Cylinders)", rate: 2000 },
            { id: 302, category: "CEMENT CONCRETE", name: "Concrete Cylinders (150x300mm)", std: "ASTM C39", material: "3 Cylinders", hasInfo: true, unit: "Set (3 Cylinders)", rate: 3000 },
            { id: 303, category: "CEMENT CONCRETE", name: "Concrete Cubes (<200mm)", std: "BS EN 12390-3", material: "3 Cubes", hasInfo: true, unit: "Set (3 Cubes)", rate: 3000 },
            { id: 304, category: "CEMENT CONCRETE", name: "Concrete Cubes (200mm-300mm)", std: "BS EN 12390-3", material: "3 Cubes", hasInfo: true, unit: "Set (3 Cubes)", rate: 3500 },
            { id: 305, category: "CEMENT CONCRETE", name: "Concrete Cubes (>300mm), each core cutting & testing (300/- for fuel if needed)", std: "BS EN 12390-3", material: "3 Cubes", hasInfo: true, unit: "Set (3 Cubes)", rate: 6000 },
            { id: 306, category: "CEMENT CONCRETE", name: "Concrete Beam in Flexure", std: "ASTM C78", material: "3 Beams", hasInfo: true, unit: "Set (3 Beams)", rate: 7500 },
            { id: 307, category: "CEMENT CONCRETE", name: "Concrete Cylinders Casting & Testing", std: "ASTM C39", material: "Raw Materials", hasInfo: true, unit: "Set (3 Cylinders)", rate: 15000 },
            { id: 308, category: "CEMENT CONCRETE", name: "Concrete Slump Test", std: "ASTM C143", material: "0.05 m³", hasInfo: true, unit: "Per Test", rate: 3500 },
            { id: 309, category: "CEMENT CONCRETE", name: "Concrete Density (Dry)", std: "ASTM C642", material: "3 Specimen", hasInfo: true, unit: "Per Sample", rate: 2000 },
            { id: 310, category: "CEMENT CONCRETE", name: "Concrete Density (Wet)", std: "ASTM C138", material: "0.03 m³", hasInfo: true, unit: "Per Sample", rate: 3500 },
            { id: 311, category: "CEMENT CONCRETE", name: "Moisture Content", std: "ASTM C566", material: "2 kg", hasInfo: true, unit: "Per Sample", rate: 3500 },
            { id: 312, category: "CEMENT CONCRETE", name: "Temperature of Fresh Concrete", std: "ASTM C1064", material: "Fresh Mix", hasInfo: true, unit: "Per Test", rate: 2000 },
            { id: 313, category: "CEMENT CONCRETE", name: "Concrete Mix Design without Admixture [Cylinder; up to 25 MPa]", std: "ACI 211.1", material: "Raw Batch", hasInfo: true, unit: "Per Mix Design", rate: 55000 },
            { id: 314, category: "CEMENT CONCRETE", name: "Concrete Mix Design without Admixture [Cylinder; > 25 MPa]", std: "ACI 211.1", material: "Raw Batch", hasInfo: true, unit: "Per Mix Design", rate: 60000 },
            { id: 315, category: "CEMENT CONCRETE", name: "Concrete Mix Design with Admixture [Cylinder; up to 25 MPa]", std: "ACI 211.1", material: "Raw Batch", hasInfo: true, unit: "Per Mix Design", rate: 60000 },
            { id: 316, category: "CEMENT CONCRETE", name: "Concrete Mix Design with Admixture [Cylinder; > 25 MPa]", std: "ACI 211.1", material: "Raw Batch", hasInfo: true, unit: "Per Mix Design", rate: 65000 },

            // CEMENT
            { id: 401, category: "CEMENT", name: "Compressive Strength, 3, 7 & 28 days", std: "ASTM C109", material: "1 Bag", hasInfo: true, unit: "Per Sample", rate: 9500 },
            { id: 402, category: "CEMENT", name: "Compressive Strength, 3 & 7 days", std: "ASTM C109", material: "1 Bag", hasInfo: true, unit: "Per Sample", rate: 11500 },
            { id: 403, category: "CEMENT", name: "Setting time (Initial & Final)", std: "ASTM C191", material: "1 Bag", hasInfo: true, unit: "Per Sample", rate: 4000 },
            { id: 404, category: "CEMENT", name: "Fineness (Blaine Air Permeability Method)", std: "ASTM C204", material: "1 Bag", hasInfo: true, unit: "Per Sample", rate: 3000 },
            { id: 405, category: "CEMENT", name: "Fineness (Sieve Analysis Method)", std: "EN 196-6", material: "1 Bag", hasInfo: true, unit: "Per Sample", rate: 2500 },
            { id: 406, category: "CEMENT", name: "Normal Consistency (only)", std: "ASTM C187", material: "1 Bag", hasInfo: true, unit: "Per Sample", rate: 2500 },
            { id: 407, category: "CEMENT", name: "Density / Sp. Gr. / Unit Weight", std: "ASTM C188", material: "1 Bag", hasInfo: true, unit: "Per Sample", rate: 3500 },
            { id: 408, category: "CEMENT", name: "Soundness", std: "EN 196-3", material: "1 Bag", hasInfo: true, unit: "Per Sample", rate: 9000 },
            { id: 409, category: "CEMENT", name: "Weight of Cement Bag", std: "ASTM C150", material: "1 Bag", hasInfo: true, unit: "Per Bag", rate: 500 },

            // ROD / REBAR
            { id: 501, category: "ROD", name: "Tension incl. wt. & elongation (up to 25mm)", std: "ASTM A370", material: "3 Rebars (0.6m)", hasInfo: true, unit: "Per Sample", rate: 2200 },
            { id: 502, category: "ROD", name: "Tension incl. wt. & elongation (above 25mm & up to 32mm)", std: "ASTM A370", material: "3 Rebars (0.6m)", hasInfo: true, unit: "Per Sample", rate: 3000 },
            { id: 503, category: "ROD", name: "Bend (up to 25mm)", std: "ISO 10065", material: "2 Rebars (0.5m)", hasInfo: true, unit: "Per Sample", rate: 1000 },
            { id: 504, category: "ROD", name: "Bend (above 25mm)", std: "ISO 10065", material: "2 Rebars (0.5m)", hasInfo: true, unit: "Per Sample", rate: 1100 },
            { id: 505, category: "ROD", name: "Re-bend (up to 25mm)", std: "ISO 15630-1", material: "2 Rebars (0.5m)", hasInfo: true, unit: "Per Sample", rate: 1200 },
            { id: 506, category: "ROD", name: "Re-bend (above 25mm)", std: "ISO 15630-1", material: "2 Rebars (0.5m)", hasInfo: true, unit: "Per Sample", rate: 1300 },
            { id: 507, category: "ROD", name: "Stress-strain curves (Mod. of Elasticity)", std: "ASTM E8", material: "3 Rebars (0.6m)", hasInfo: true, unit: "Per Sample", rate: 8000 },
            { id: 508, category: "ROD", name: "Shear Test for Rod", std: "ASTM B769", material: "3 Rebars (0.3m)", hasInfo: true, unit: "Per Sample", rate: 2200 },

            // SOIL
            { id: 601, category: "SOIL", name: "Specific Gravity", std: "ASTM D854", material: "2 kg", hasInfo: true, unit: "Per Sample", rate: 2000 },
            { id: 602, category: "SOIL", name: "Density/Unit Weight", std: "ASTM D7263", material: "Core/Remolded Sample", hasInfo: true, unit: "Per Sample", rate: 2000 },
            { id: 603, category: "SOIL", name: "Void Ratio", std: "ASTM D7263", material: "Core/Remolded Sample", hasInfo: true, unit: "Per Sample", rate: 3000 },
            { id: 604, category: "SOIL", name: "Moisture Content", std: "ASTM D2216", material: "1 kg", hasInfo: true, unit: "Per Sample", rate: 1000 },
            { id: 605, category: "SOIL", name: "Liquid Limit, Plastic Limit and Plasticity Index", std: "ASTM D4318", material: "3 kg", hasInfo: true, unit: "Per Sample", rate: 4500 },
            { id: 606, category: "SOIL", name: "Particle-Size Analysis (Sieve)", std: "ASTM D422", material: "10 kg", hasInfo: true, unit: "Per Sample", rate: 3500 },
            { id: 607, category: "SOIL", name: "Particle-Size Analysis (Hydrometer & Sieve)", std: "ASTM D422", material: "10 kg", hasInfo: true, unit: "Per Sample", rate: 6000 },
            { id: 608, category: "SOIL", name: "Organic Matter Content", std: "ASTM D2974", material: "2 kg", hasInfo: true, unit: "Per Sample", rate: 3000 },
            { id: 609, category: "SOIL", name: "Max. and Min. Density of Cohesionless Soil", std: "ASTM D4253/D4254", material: "20 kg", hasInfo: true, unit: "Per Sample", rate: 8000 },
            { id: 610, category: "SOIL", name: "Standard Proctor Compaction", std: "ASTM D698", material: "25 kg", hasInfo: true, unit: "Per Sample", rate: 13000 },
            { id: 611, category: "SOIL", name: "Modified Proctor Compaction", std: "ASTM D1557", material: "30 kg", hasInfo: true, unit: "Per Sample", rate: 18000 },
            { id: 612, category: "SOIL", name: "Unconfined Compression", std: "ASTM D2166", material: "Tube Sample", hasInfo: true, unit: "Per Sample", rate: 7500 },
            { id: 613, category: "SOIL", name: "Laboratory California Bearing Ratio (CBR)", std: "ASTM D1883", material: "40 kg", hasInfo: true, unit: "Per Sample", rate: 25000 },
            { id: 614, category: "SOIL", name: "Direct Shear Test (Consolidated Drained Condition) for Sand", std: "D3080", material: "15 kg", hasInfo: true, unit: "Per Sample", rate: 15000 },
            { id: 615, category: "SOIL", name: "Direct Shear Test (Consolidated Drained Condition) for Clay", std: "D3080", material: "Core Sample", hasInfo: true, unit: "Per Sample", rate: 16000 },
            { id: 616, category: "SOIL", name: "Sub Soil Exploration (Including Relevant Tests & Report, Field Visit Fee Will be Added) - depth up to 60'", std: "BNBC", material: "Field Access", hasInfo: true, unit: "Per Borehole", rate: 30000 },
            { id: 617, category: "SOIL", name: "Sub Soil Exploration (Including Relevant Tests & Report, Field Visit Fee Will be Added) - depth up to 100'", std: "BNBC", material: "Field Access", hasInfo: true, unit: "Per Borehole", rate: 45000 },
            { id: 618, category: "SOIL", name: "Field Dry Density (FDD) (Field Visit Fee Will be Added)", std: "ASTM D1556", material: "Field Point", hasInfo: true, unit: "Per Point", rate: 5000 },

            // BITUMEN/ASPHALT PAVEMENT
            { id: 701, category: "BITUMEN/BITUMINOUS MATERIALS/ASPHALT", name: "Specific Gravity / Density of Bitumen", std: "AASHTO T228", material: "1 kg", hasInfo: true, unit: "Per Sample", rate: 5000 },
            { id: 702, category: "BITUMEN/BITUMINOUS MATERIALS/ASPHALT", name: "Penetration Test of Bitumen", std: "AASHTO T49", material: "1 kg", hasInfo: true, unit: "Per Sample", rate: 5000 },
            { id: 703, category: "BITUMEN/BITUMINOUS MATERIALS/ASPHALT", name: "Ductility Test of Bitumen", std: "AASHTO T51", material: "1 kg", hasInfo: true, unit: "Per Sample", rate: 4800 },
            { id: 704, category: "BITUMEN/BITUMINOUS MATERIALS/ASPHALT", name: "Marshall Stability and Flow Test", std: "AASHTO T245", material: "Marshall Specimen", hasInfo: true, unit: "Per Specimen", rate: 6500 },
            { id: 705, category: "BITUMEN/BITUMINOUS MATERIALS/ASPHALT", name: "Bitumen Content (Using Bitumen Extruder)", std: "AASHTO T 164", material: "4 kg", hasInfo: true, unit: "Per Sample", rate: 1800 },
            { id: 706, category: "BITUMEN/BITUMINOUS MATERIALS/ASPHALT", name: "Bitumen content (Using Automatic Asphalt Mix Analyzer)", std: "AASHTOT T30", material: "4 kg", hasInfo: true, unit: "Per Sample", rate: 24000 },
            { id: 707, category: "BITUMEN/BITUMINOUS MATERIALS/ASPHALT", name: "Aggregate Gradation of Asphalt Mix", std: "AASHTO T49", material: "4 kg", hasInfo: true, unit: "Per Sample", rate: 24000 },
            { id: 708, category: "BITUMEN/BITUMINOUS MATERIALS/ASPHALT", name: "Asphalt Core Thickness Measurement (Field Visit Fee will be Added)", std: "T 148", material: "Field Point", hasInfo: true, unit: "Per Sample", rate: 3000 },
            { id: 709, category: "BITUMEN/BITUMINOUS MATERIALS/ASPHALT", name: "Compressive Strength Test of Core Cutting Sample", std: "AASHTO T24", material: "Core Specimen", hasInfo: true, unit: "Per Core", rate: 4800 },
            { id: 710, category: "BITUMEN/BITUMINOUS MATERIALS/ASPHALT", name: "In-Situ Core Cutting and Compressive Strength Test (Field Visit Fee will be Added)", std: "AASHTO T24", material: "Field Point", hasInfo: true, unit: "Per Sample", rate: 5000 },
            { id: 711, category: "BITUMEN/BITUMINOUS MATERIALS/ASPHALT", name: "Pavement Surface Texture Test (Field Visit Fee will be Added)", std: "AASHTO T333", material: "Field Poin", hasInfo: true, unit: "Per Point", rate: 5000 },

            // NDT
            { id: 801, category: "NDT", name: "Rebound Hammer Test (Field Visit Fee will be Added)", std: "ASTM C805", material: "On-site Structure", hasInfo: true, unit: "Per Point", rate: 4800 },
            { id: 802, category: "NDT", name: "Concrete Cover (max & min.) (Field Visit Fee will be Added)", std: "BS 1881-204", material: "On-site Member", hasInfo: true, unit: "Per Point", rate: 1000 },
            { id: 803, category: "NDT", name: "Rebar Location (Field Visit Fee will be Added)", std: "BS 1881-204", material: "On-site Member", hasInfo: true, unit: "Per Point", rate: 5000 },
            { id: 804, category: "NDT", name: "Rebar Location, Diameter & Concrete Cover (Field Visit Fee will be Added)", std: "BS 1881-204", material: "On-site Member", hasInfo: true, unit: "Per Point", rate: 10000 },
            { id: 805, category: "NDT", name: "Pile Integrity Test (Field Visit Fee will be Added)", std: "ASTM D5882", material: "On-site Pile", hasInfo: true, unit: "Per Point", rate: 2500 },

            // ADMIXTURE PARAMETERS
            { id: 901, category: "ADMIXTURE PARAMETERS", name: "pH Value", std: "ASTM E70", material: "1 Liter", hasInfo: true, unit: "Per Sample", rate: 2500 },
            { id: 902, category: "ADMIXTURE PARAMETERS", name: "Temperature", std: "ASTM C1064", material: "1 Liter", hasInfo: true, unit: "Per Sample", rate: 1500 },
            { id: 903, category: "ADMIXTURE PARAMETERS", name: "Specific Gravity/ Density", std: "ASTM C494", material: "1 Liter", hasInfo: true, unit: "Per Sample", rate: 3500 },
            { id: 904, category: "ADMIXTURE PARAMETERS", name: "Dry Materials/ Solid Content", std: "ASTM C494", material: "1 Liter", hasInfo: true, unit: "Per Sample", rate: 4000 },
            { id: 905, category: "ADMIXTURE PARAMETERS", name: "Water-Reducing Capability", std: "ASTM C494", material: "1 Liter", hasInfo: true, unit: "Per Sample", rate: 10000 },
            { id: 906, category: "ADMIXTURE PARAMETERS", name: "Slump Retention/ Slump Loss", std: "---", material: "1 Liter", hasInfo: true, unit: "Per Sample", rate: 10000 },

            // CALIBRATION
            { id: 1001, category: "CALIBRATION", name: "Proving Ring Calibration (<100 kN)", std: "ASTM E74", material: "1 Ring", hasInfo: true, unit: "Per Calibration", rate: 6000 },
            { id: 1002, category: "CALIBRATION", name: "Proving Ring Calibration (100 kN to 500 kN)", std: "ASTM E74", material: "1 Ring", hasInfo: true, unit: "Per Calibration", rate: 6500 },
            { id: 1003, category: "CALIBRATION", name: "Proving Ring Calibration (>500 kN)", std: "ASTM E74", material: "1 Ring", hasInfo: true, unit: "Per Calibration", rate: 7000 },
            { id: 1004, category: "CALIBRATION", name: "Electronic Balance Calibration (up to 10kg)", std: "ASTM E898", material: "1 Balance", hasInfo: true, unit: "Per Calibration", rate: 7000 },
            { id: 1005, category: "CALIBRATION", name: "Rebound Hammer Calibration", std: "ASTM C805", material: "1 Hammer", hasInfo: true, unit: "Per Calibration", rate: 8000 },

            // CONSULTANCY
			{ id: 1101, category: "CONSULTANCY SERVICES (For consultancy rates, please contact CRTC)", name: "Structural Analysis and Design of Residential, Commercial, Industrial and Institutional Buildings", std: "BNBC 2020", material: "Related Documents", hasInfo: true, unit: "Per sft", rate: "D**" },
			{ id: 1102, category: "CONSULTANCY SERVICES (For consultancy rates, please contact CRTC)", name: "Building Design Vetting and Structural Safety Assessment", std: "BNBC 2020", material: "Related Documents", hasInfo: true, unit: "Per sft", rate: "D**" },
			{ id: 1103, category: "CONSULTANCY SERVICES (For consultancy rates, please contact CRTC)", name: "Cost Estimation, Rate Analysis and Preparation of Bills of Quantities (BOQ) for Civil Engineering Projects", std: "PWD Schedule of Rates", material: "Related Documents", hasInfo: true, unit: "Per project", rate: "D**" },
			{ id: 1104, category: "CONSULTANCY SERVICES (For consultancy rates, please contact CRTC)", name: "Land Surveying (Topographic, Planimetric and Contour Surveys) Using Total Station and GPS/GNSS", std: "Applicable Survey Standards", material: "Project Location and Survey Requirements", hasInfo: true, unit: "Per acre", rate: "D**" },
			{ id: 1105, category: "CONSULTANCY SERVICES (For consultancy rates, please contact CRTC)", name: "Geotechnical Analysis and Design of Shallow and Deep Foundations", std: "BNBC 2020", material: "Soil Investigation Report and Related Documents", hasInfo: true, unit: "Per project", rate: "D**" },
			{ id: 1106, category: "CONSULTANCY SERVICES (For consultancy rates, please contact CRTC)", name: "Structural Analysis and Design of Bridges, Culverts and Other Infrastructure Structures", std: "Applicable Design Codes and Standards", material: "Related Documents", hasInfo: true, unit: "Per project", rate: "D**" },
			{ id: 1107, category: "CONSULTANCY SERVICES (For consultancy rates, please contact CRTC)", name: "Geometric Design of Roads and Highways", std: "Applicable RHD Design Standards", material: "Survey Data and Related Documents", hasInfo: true, unit: "Per km", rate: "D**" },
			{ id: 1108, category: "CONSULTANCY SERVICES (For consultancy rates, please contact CRTC)", name: "Structural Design and Evaluation of Flexible and Rigid Pavements", std: "Applicable AASHTO / RHD Standards", material: "Traffic Data and Subgrade Investigation Report", hasInfo: true, unit: "Per project", rate: "D**" },
			{ id: 1109, category: "CONSULTANCY SERVICES (For consultancy rates, please contact CRTC)", name: "Vetting and Independent Review of Structural Designs and Drawings for Buildings, Roads, Bridges, Culverts, Towers and Runways", std: "Applicable Design Codes and Standards", material: "Design Calculations and Drawings", hasInfo: true, unit: "Per project", rate: "D**" },
			{ id: 1110, category: "CONSULTANCY SERVICES (For consultancy rates, please contact CRTC)", name: "Structural Health Monitoring (SHM) and Structural Condition Assessment of Existing Structures", std: "Applicable Assessment Standards", material: "Structural Drawings and Related Documents", hasInfo: true, unit: "Per structure", rate: "D**" },
			{ id: 1111, category: "CONSULTANCY SERVICES (For consultancy rates, please contact CRTC)", name: "Traffic Studies and Surveys (Traffic Volume, Origin-Destination, Speed, Travel Time, Delay and Parking Studies)", std: "Applicable Traffic Engineering Standards", material: "Project Location and Study Requirements", hasInfo: true, unit: "Per study", rate: "D**" },
			{ id: 1112, category: "CONSULTANCY SERVICES (For consultancy rates, please contact CRTC)", name: "Traffic Forecasting and Transportation Demand Analysis", std: "Applicable Transportation Planning Standards", material: "Traffic Survey Data and Related Documents", hasInfo: true, unit: "Per study", rate: "D**" },
			{ id: 1113, category: "CONSULTANCY SERVICES (For consultancy rates, please contact CRTC)", name: "Transportation Impact Assessment (TIA) of Development Projects", std: "Applicable TIA Guidelines", material: "Project Layout and Traffic Data", hasInfo: true, unit: "Per study", rate: "D**" },
			{ id: 1114, category: "CONSULTANCY SERVICES (For consultancy rates, please contact CRTC)", name: "Road Accident Investigation, Road Safety Assessment and Road Safety Auditing", std: "Applicable Road Safety Guidelines", material: "Accident Records and Project Documents", hasInfo: true, unit: "Per study", rate: "D**" },
			{ id: 1115, category: "CONSULTANCY SERVICES (For consultancy rates, please contact CRTC)", name: "Professional Training and Capacity Building in Traffic Studies, Traffic Management, Transportation Planning and Road Safety", std: "CRTC Training Programme", material: "Training Requirements", hasInfo: true, unit: "Per training programme", rate: "D**" },
		];

        // Dynamic Info Database
        const testInfoMap = {
            101: {
                title: "Sieve Analysis of Coarse Aggregate (ASTM C136)",
                content: `
                    <p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
                        Under <strong>ASTM C136</strong>, the required sample quantity varies with the <strong>Nominal Maximum Aggregate Size (NMS)</strong>. The table below lists the code minimum along with the <strong>Required Sample Mass</strong> ($2 \\times$ Minimum) recommended for laboratory testing, splitting, and reserve verification.
                    </p>
                    <table class="info-table">
                        <thead>
                            <tr>
                                <th>Nominal Maximum Size (NMS)</th>
                                <th>Minimum Test Sample Mass (ASTM C136)</th>
                                <th class="highlight-col">Required Sample Mass (2× Minimum)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>9.5 mm (3/8 in)</td><td>1.0 kg</td><td class="highlight-col">2.0 kg</td></tr>
                            <tr><td>12.5 mm (1/2 in)</td><td>2.0 kg</td><td class="highlight-col">4.0 kg</td></tr>
                            <tr><td>19.0 mm (3/4 in)</td><td>5.0 kg</td><td class="highlight-col">10.0 kg</td></tr>
                            <tr><td>25.0 mm (1 in)</td><td>10.0 kg</td><td class="highlight-col">20.0 kg</td></tr>
                            <tr><td>37.5 mm (1.5 in)</td><td>15.0 kg</td><td class="highlight-col">30.0 kg</td></tr>
                            <tr><td>50.0 mm (2 in)</td><td>20.0 kg</td><td class="highlight-col">40.0 kg</td></tr>
                            <tr><td>63.0 mm (2.5 in)</td><td>35.0 kg</td><td class="highlight-col">70.0 kg</td></tr>
                            <tr><td>75.0 mm (3 in)</td><td>60.0 kg</td><td class="highlight-col">120.0 kg</td></tr>
                            <tr><td>90.0 mm (3.5 in)</td><td>100.0 kg</td><td class="highlight-col">200.0 kg</td></tr>
                            <tr><td>100.0 mm (4 in)</td><td>150.0 kg</td><td class="highlight-col">300.0 kg</td></tr>
                            <tr><td>125.0 mm (5 in)</td><td>300.0 kg</td><td class="highlight-col">600.0 kg</td></tr>

                        </tbody>
                    </table>
                    <ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
                        <li><strong>Key Parameters Reported:</strong> Gradation Curve, Particle Size Distribution, Fineness Modulus (FM), and Compliance with ASTM C33 / BNBC specs.</li> 
                        <li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>  
                        <li><strong>Sample Guidelines:</strong> Please ensure that submitted samples are representative, properly sealed in moisture-proof containers, and labeled with project memo details prior to handover at CRTC testing labs.</li> 

                   </ul>`
            },

            102: {
                title: "Sieve Analysis of Fine Aggregate (ASTM C136)",
                content: `
                    <p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
                        Evaluates particle size distribution and calculates Fineness Modulus (FM) of sand per <strong>ASTM C136 / ASTM C33</strong>.
                    </p>
                    <ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
                        <li><strong>Minimum Sample:</strong> 2 kg </li>
                        <li><strong>Key Parameters Reported:</strong> Gradation Curve, Particle Size Distribution, Fineness Modulus (FM), and Compliance with ASTM C33 / BNBC specs.</li> 
                        <li><strong>Fineness Modulus Range:</strong> Concrete Sand (FM 2.3 – 3.1), Plastering Sand (FM 1.5 – 2.0).</li> 
                        <li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li> 
                        <li><strong>Sample Guidelines:</strong> Please ensure that submitted samples are representative, properly sealed in moisture-proof containers, and labeled with project memo details prior to handover at CRTC testing labs.</li> 
                    </ul>`
            },
 
            103: {
                title: "Sieve Analysis of Base/Subbase (ASTM C136/C117)",
                content: `
                    <p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
                        Under <strong>ASTM C136</strong>, the required sample quantity varies with the <strong>Nominal Maximum Aggregate Size (NMS)</strong>. The table below lists the code minimum along with the <strong>Required Sample Mass</strong> ($2 \\times$ Minimum) recommended for laboratory testing, splitting, and reserve verification.
                    </p>
                    <table class="info-table">
                        <thead>
                            <tr>
                                <th>Nominal Maximum Size (NMS)</th>
                                <th>Minimum Test Sample Mass (ASTM C136)</th>
                                <th class="highlight-col">Required Sample Mass (2× Minimum)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>9.5 mm (3/8 in)</td><td>1.0 kg</td><td class="highlight-col">2.0 kg</td></tr>
                            <tr><td>12.5 mm (1/2 in)</td><td>2.0 kg</td><td class="highlight-col">4.0 kg</td></tr>
                            <tr><td>19.0 mm (3/4 in)</td><td>5.0 kg</td><td class="highlight-col">10.0 kg</td></tr>
                            <tr><td>25.0 mm (1 in)</td><td>10.0 kg</td><td class="highlight-col">20.0 kg</td></tr>
                            <tr><td>37.5 mm (1.5 in)</td><td>15.0 kg</td><td class="highlight-col">30.0 kg</td></tr>
                            <tr><td>50.0 mm (2 in)</td><td>20.0 kg</td><td class="highlight-col">40.0 kg</td></tr>
                            <tr><td>63.0 mm (2.5 in)</td><td>35.0 kg</td><td class="highlight-col">70.0 kg</td></tr>
                            <tr><td>75.0 mm (3 in)</td><td>60.0 kg</td><td class="highlight-col">120.0 kg</td></tr>
                            <tr><td>90.0 mm (3.5 in)</td><td>100.0 kg</td><td class="highlight-col">200.0 kg</td></tr>
                            <tr><td>100.0 mm (4 in)</td><td>150.0 kg</td><td class="highlight-col">300.0 kg</td></tr>
                            <tr><td>125.0 mm (5 in)</td><td>300.0 kg</td><td class="highlight-col">600.0 kg</td></tr>
                        </tbody>
                    </table>
                    <ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
                        <li><strong>Key Parameters Reported:</strong> Gradation Curve, Particle Size Distribution,% of Material Finer than 75 µm (No. 200 Sieve) and Compliance with Applicable RHD / Project Specifications.</li>
                        <li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
                        <li><strong>Sample Guidelines:</strong> Please ensure that submitted samples are representative, properly sealed in moisture-proof containers, and labeled with project memo details prior to handover at CRTC testing labs.</li> 
                   </ul>`
            },
            104: {
                title: "Sieve Analysis of of Ballast (ASTM C136)",
                content: `
                    <p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
                        Under <strong>ASTM C136</strong>, the required sample quantity varies with the <strong>Nominal Maximum Aggregate Size (NMS)</strong>. The table below lists the code minimum along with the <strong>Required Sample Mass</strong> ($2 \\times$ Minimum) recommended for laboratory testing, splitting, and reserve verification.
                    </p>
                    <table class="info-table">
                        <thead>
                            <tr>
                                <th>Nominal Maximum Size (NMS)</th>
                                <th>Minimum Test Sample Mass (ASTM C136)</th>
                                <th class="highlight-col">Required Sample Mass (2× Minimum)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>37.5 mm (1.5 in)</td><td>15.0 kg</td><td class="highlight-col">30.0 kg</td></tr>
                            <tr><td>50.0 mm (2 in)</td><td>20.0 kg</td><td class="highlight-col">40.0 kg</td></tr>
                            <tr><td>63.0 mm (2.5 in)</td><td>35.0 kg</td><td class="highlight-col">70.0 kg</td></tr>
                            <tr><td>75.0 mm (3 in)</td><td>60.0 kg</td><td class="highlight-col">120.0 kg</td></tr>
                        </tbody>
                    </table>
                    <ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
                        <li><strong>Key Parameters Reported:</strong> Gradation Curve, Particle Size Distribution and Compliance with AREMA / Applicable Bangladesh Railway or Project Specifications.</li> 
                        <li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request. </li> 
                        <li><strong>Sample Guidelines:</strong> Please ensure that submitted samples are representative, properly sealed in moisture-proof containers, and labeled with project memo details prior to handover at CRTC testing labs.</li> 

                   </ul>`
            },
            105: {
                title: "% Finer than #200 sieve by washing/Fine Content/Silt Content (ASTM C117)",
                content: `
                    <p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
                        Under <strong>ASTM C117</strong>, the required sample quantity varies with the <strong>Nominal Maximum Aggregate Size (NMS)</strong>. The table below lists the code minimum along with the <strong>Required Sample Mass</strong> ($2 \\times$ Minimum) recommended for laboratory testing, splitting, and reserve verification.
                    </p>
                    <table class="info-table">
                        <thead>
                            <tr>
                                <th>Nominal Maximum Size (NMS)</th>
                                <th>Minimum Test Sample Mass (ASTM C117)</th>
                                <th class="highlight-col">Required Sample Mass (2× Minimum)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>≤4.75 mm</td><td>0.3 kg</td><td class="highlight-col">0.6 kg</td></tr>
                            <tr><td>4.75-9.5 mm</td><td>1.0 kg</td><td class="highlight-col">2.0 kg</td></tr>
                            <tr><td>9.5-19.0 mm</td><td>2.5 kg</td><td class="highlight-col">5.0 kg</td></tr>
                            <tr><td>19.0-37.5 mm</td><td>5.0 kg</td><td class="highlight-col">10.0 kg</td></tr>
                        </tbody>
                    </table>
                    <ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
                        <li><strong>Key Parameters Reported:</strong> Percentage Finer than No. 200 Sieve (%) and Compliance with Project Specifications.</li> 
                        <li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>  
                        <li><strong>Sample Guidelines:</strong> Please ensure that submitted samples are representative, properly sealed in moisture-proof containers, and labeled with project memo details prior to handover at CRTC testing labs.</li> 

                   </ul>`
            },			
          106: {
                title: "Aggregate Crushing Value - ACV (BS 812-110)",
                content: `
                    <p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						The aggregate crushing value (ACV) test measures how well an aggregate resists crushing under a slowly applied compressive load.                    </p>
                    <ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
                       <li><strong>Sample:</strong> About 6 kg of the 10-14 mm fraction (passing 14.0 mm, retained on 10.0 mm).</li> 
                        <li><strong>Field Sample:</strong> About 15-20 kg of the aggregate as received (typically 10-20 mm stone), which covers the 10-14 mm fraction with a margin for retests.</li> 
                        <li><strong>Key Parameters Reported:</strong> ACV and Compliance with Project Specifications.</li> 
                        <li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>  
                        <li><strong>Sample Guidelines:</strong> Please ensure that submitted samples are representative, properly sealed in moisture-proof containers, and labeled with project memo details prior to handover at CRTC testing labs.</li> 
                    </ul>`
            },
            
			107: {
                title: "Aggregate Impact Value (BS 812-112)",
                content: `
                    <p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						The aggregate impact value (AIV) test measures how well an aggregate resists sudden shock or impact.                    </p>              
                    <ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
                        <li><strong>Sample:</strong> About 1 kg of the aggregate as received (typically 10-20 mm stone), which covers the 10-14 mm fraction.</li> 
                        <li><strong>Field Sample:</strong> About 5 kg of the aggregate as received (typically 10-20 mm stone), which covers the 10-14 mm fraction.</li> 
                        <li><strong>Key Parameters Reported:</strong> AIV and Compliance with Project Specifications.</li> 
                        <li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>  
                        <li><strong>Sample Guidelines:</strong> Please ensure that submitted samples are representative, properly sealed in moisture-proof containers, and labeled with project memo details prior to handover at CRTC testing labs.</li> 

                   </ul>`
			},
			
			108: {
				title: "Ten Percent Fines Value - TFV (BS 812-111)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						The ten percent fines value (TFV) test measures the force needed to crush an aggregate so that 10% of it becomes fines, as a relative measure of its resistance to crushing under a gradually applied compressive load.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> About 10 kg of the 10-14 mm fraction (passing 14.0 mm, retained on 10.0 mm).</li>
						<li><strong>Field Sample:</strong> About 25-30 kg of the aggregate as received (typically 10-20 mm stone), which covers the 10-14 mm fraction with a margin for retests.</li>
						<li><strong>Key Parameters Reported:</strong> TFV (kN), Test Condition (Dry or Soaked), and Compliance with Project Specifications.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that submitted samples are representative, properly sealed in moisture-proof containers, and labeled with project memo details prior to handover at CRTC testing labs.</li>
					</ul>`
			},

			109: {
				title: "L.A. Abrasion of Coarse Aggregate (ASTM C131)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						The Los Angeles (L.A.) abrasion test measures how well a coarse aggregate resists degradation by abrasion and impact in a rotating steel drum.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> About 5 kg of washed, oven-dried aggregate, made up of the fractions for the grading that best matches the aggregate supplied:
							<ul style="padding-left:18px; margin-top:4px;">
								<li><strong>Grading A:</strong> 37.5-25.0, 25.0-19.0, 19.0-12.5 and 12.5-9.5 mm, 1,250 g each.</li>
								<li><strong>Grading B:</strong> 19.0-12.5 and 12.5-9.5 mm, 2,500 g each.</li>
								<li><strong>Grading C:</strong> 9.5-6.3 and 6.3-4.75 mm, 2,500 g each.</li>
								<li><strong>Grading D:</strong> 4.75-2.36 mm, 5,000 g.</li>
							</ul>
						</li>
						<li><strong>Field Sample:</strong> About 15-30 kg of the aggregate as received, depending on the grading (about 15-20 kg for 10-20 mm stone, more for Grading A, and for fine chips where the required fraction is a small part of the material).</li>
						<li><strong>Key Parameters Reported:</strong> Percentage Loss by Abrasion and Impact (500 revolutions), Grading Used, and Compliance with Project Specifications.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards (such as ASTM C535 for larger aggregate) may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that submitted samples are representative, properly sealed in moisture-proof containers, and labeled with project memo details prior to handover at CRTC testing labs.</li>
					</ul>`
			},
			110: {
				title: "L.A. Abrasion of Ballast (ASTM C535)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						The Los Angeles (L.A.) abrasion test for large-size aggregate measures how well ballast stone resists degradation by abrasion and impact in a rotating steel drum.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> About 10 kg of washed, oven-dried ballast, made up of the fractions for the grading that best matches the ballast supplied:
							<ul style="padding-left:18px; margin-top:4px;">
								<li><strong>Grading 1:</strong> 75-63 mm (2,500 g), 63-50 mm (2,500 g) and 50-37.5 mm (5,000 g).</li>
								<li><strong>Grading 2:</strong> 50-37.5 mm (5,000 g) and 37.5-25 mm (5,000 g).</li>
								<li><strong>Grading 3:</strong> 37.5-25 mm (5,000 g) and 25-19 mm (5,000 g).</li>
							</ul>
						</li>
						<li><strong>Field Sample:</strong> About 50 kg of the ballast as received, which allows for sieving into the required fractions and a retest.</li>
						<li><strong>Key Parameters Reported:</strong> Percentage Loss by Abrasion and Impact (1,000 revolutions), Grading Used, and Compliance with Project Specifications.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards (such as ASTM C131 for aggregate smaller than 37.5 mm) may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that submitted samples are representative, properly sealed in moisture-proof containers, and labeled with project memo details prior to handover at CRTC testing labs.</li>
					</ul>`
			},
			111: {
				title: "Unit Weight (Bulk Density) of Coarse Aggregate (ASTM C29)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						The unit weight (bulk density) test measures the mass of aggregate per unit volume in a compacted or loose condition, and the voids between the particles.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> Oven-dried aggregate, about 125-200% of the quantity needed to fill the measure for the nominal maximum size (NMAS):
							<ul style="padding-left:18px; margin-top:4px;">
								<li><strong>12.5 mm:</strong> 2.8 L measure, about 6-9 kg.</li>
								<li><strong>25.0 mm:</strong> 9.3 L measure, about 19-30 kg.</li>
								<li><strong>37.5 mm:</strong> 14 L measure, about 28-45 kg.</li>
								<li><strong>75 mm:</strong> 28 L measure, about 56-90 kg.</li>
							</ul>
						</li>
						<li><strong>Field Sample:</strong> About 2 times the sample size above, taken from the aggregate as received, which allows for sample reduction, drying and a retest.</li>
						<li><strong>Key Parameters Reported:</strong> Bulk Density (Unit Weight) in kg/m&sup3;, Test Condition (Compacted by Rodding or Jigging, or Loose by Shoveling), Voids (if requested), and Compliance with Project Specifications.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that submitted samples are representative, properly sealed in moisture-proof containers, and labeled with project memo details prior to handover at CRTC testing labs.</li>
					</ul>`
			},			
			112: {
				title: "Unit Weight (Bulk Density) of Fine Aggregate (ASTM C29)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						The unit weight (bulk density) test measures the mass of fine aggregate per unit volume in a compacted or loose condition, and the voids between the particles.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> About 6-9 kg of oven-dried fine aggregate, which is 125-200% of the quantity needed to fill the 2.8 L measure.</li>
						<li><strong>Field Sample:</strong> About 12-15 kg of the sand as received, which allows for sample reduction, drying and a retest.</li>
						<li><strong>Key Parameters Reported:</strong> Bulk Density (Unit Weight) in kg/m&sup3;, Test Condition (Compacted by Rodding or Loose by Shoveling), Voids (if requested), and Compliance with Project Specifications.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that submitted samples are representative, properly sealed in moisture-proof containers, and labeled with project memo details prior to handover at CRTC testing labs.</li>
					</ul>`
			},            

			113: {
				title: "Specific Gravity / Density and Absorption of Coarse Aggregate (ASTM C127)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						The density, relative density (specific gravity) and absorption test determines the average density of coarse aggregate particles (excluding the voids between them), and how much water the aggregate absorbs.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> Washed aggregate retained on the 4.75 mm sieve, with the minimum mass set by nominal maximum size (NMAS):
							<ul style="padding-left:18px; margin-top:4px;">
								<li><strong>12.5 mm or less:</strong> 2 kg.</li>
								<li><strong>19.0 mm:</strong> 3 kg.</li>
								<li><strong>25.0 mm:</strong> 4 kg.</li>
								<li><strong>37.5 mm:</strong> 5 kg.</li>
								<li><strong>50 mm:</strong> 8 kg.</li>
								<li><strong>63 mm:</strong> 12 kg.</li>
								<li><strong>75 mm:</strong> 18 kg.</li>
							</ul>
						</li>
						<li><strong>Field Sample:</strong> About 2 times the sample mass above, taken from the aggregate as received, which allows for removal of material finer than 4.75 mm and a retest.</li>
						<li><strong>Key Parameters Reported:</strong> Density (Oven-Dry and SSD), Relative Density / Specific Gravity (Oven-Dry, SSD and Apparent), Absorption (%), and Compliance with Project Specifications.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that submitted samples are representative, properly sealed in moisture-proof containers, and labeled with project memo details prior to handover at CRTC testing labs.</li>
					</ul>`
			},			
			
			114: {
				title: "Specific Gravity / Density and Absorption of Fine Aggregate (ASTM C128)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						The density, relative density (specific gravity) and absorption test determines the average density of fine aggregate particles (excluding the voids between them), and how much water the aggregate absorbs.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> About 1 kg of fine aggregate passing the 4.75 mm sieve, from which a 500 g saturated-surface-dry test portion is taken.</li>
						<li><strong>Field Sample:</strong> About 2-3 kg of the sand as received, which allows for sample reduction, removal of any material retained on the 4.75 mm sieve, and a retest.</li>
						<li><strong>Key Parameters Reported:</strong> Density (Oven-Dry and SSD), Relative Density / Specific Gravity (Oven-Dry, SSD and Apparent), Absorption (%), and Compliance with Project Specifications.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that submitted samples are representative, properly sealed in moisture-proof containers, and labeled with project memo details prior to handover at CRTC testing labs.</li>
					</ul>`
			},			
			115: {
				title: "Void Ratio / Porosity of Aggregate (ASTM C29)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						The voids test calculates the percentage of space between aggregate particles (void content, from which void ratio and porosity follow) from the bulk density and the relative density of the aggregate.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> The same oven-dried aggregate used for the Unit Weight test (ASTM C29), plus the sample for Relative Density (ASTM C127 for coarse aggregate or C128 for fine aggregate). Fine aggregate: about 6-9 kg for C29 and 1 kg for C128. Coarse aggregate: 19-30 kg (25 mm) or 28-45 kg (37.5 mm) for C29, and 4-5 kg for C127.</li>
						<li><strong>Field Sample:</strong> The combined field sample for both tests, about 2 times the quantities above, taken from the aggregate as received.</li>
						<li><strong>Key Parameters Reported:</strong> Voids Content (%) for the Compacted (Rodded or Jigged) or Loose Condition, Bulk Density (kg/m&sup3;), Relative Density (Oven-Dry), and Compliance with Project Specifications.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that submitted samples are representative, properly sealed in moisture-proof containers, and labeled with project memo details prior to handover at CRTC testing labs.</li>
					</ul>`
			},			
			116: {
				title: "Standard Proctor Test of Aggregate (ASTM D698)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						The Standard Proctor test determines the relationship between water content and dry density of an aggregate or soil, compacted at standard effort, to find its maximum dry density and optimum moisture content.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> Air-dried material, with the method chosen from the gradation of the aggregate supplied:
							<ul style="padding-left:18px; margin-top:4px;">
								<li><strong>Method A:</strong> 101.6 mm (4 in.) mold, material passing 4.75 mm. About 16 kg.</li>
								<li><strong>Method B:</strong> 101.6 mm (4 in.) mold, material passing 9.5 mm. About 16 kg.</li>
								<li><strong>Method C:</strong> 152.4 mm (6 in.) mold, material passing 19.0 mm. About 29 kg.</li>
							</ul>
						</li>
						<li><strong>Field Sample:</strong> About 50-60 kg of the aggregate as received (for Method C), which allows for sieving off the oversize fraction, a gradation check, and a retest. Smaller amounts suit Methods A and B.</li>
						<li><strong>Key Parameters Reported:</strong> Maximum Dry Density (kg/m&sup3;), Optimum Moisture Content (%), Method Used, Oversize Fraction (%), and Compliance with Project Specifications.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards (such as ASTM D1557 for Modified Proctor) may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that submitted samples are representative, properly sealed in moisture-proof containers, and labeled with project memo details prior to handover at CRTC testing labs.</li>
					</ul>`
			},			
			117: {
				title: "Modified Proctor Test of Aggregate (ASTM D1557)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						The Modified Proctor test determines the relationship between water content and dry density of an aggregate or soil, compacted at modified (higher) effort, to find its maximum dry density and optimum moisture content.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> Air-dried material, with the method chosen from the gradation of the aggregate supplied:
							<ul style="padding-left:18px; margin-top:4px;">
								<li><strong>Method A:</strong> 101.6 mm (4 in.) mold, material passing 4.75 mm. About 16 kg.</li>
								<li><strong>Method B:</strong> 101.6 mm (4 in.) mold, material passing 9.5 mm. About 16 kg.</li>
								<li><strong>Method C:</strong> 152.4 mm (6 in.) mold, material passing 19.0 mm. About 29 kg.</li>
							</ul>
						</li>
						<li><strong>Field Sample:</strong> About 50-60 kg of the aggregate as received (for Method C), which allows for sieving off the oversize fraction, a gradation check, and a retest. Smaller amounts suit Methods A and B.</li>
						<li><strong>Key Parameters Reported:</strong> Maximum Dry Density (kg/m&sup3;), Optimum Moisture Content (%), Method Used, Oversize Fraction (%), and Compliance with Project Specifications.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards (such as ASTM D698 for Standard Proctor) may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that submitted samples are representative, properly sealed in moisture-proof containers, and labeled with project memo details prior to handover at CRTC testing labs.</li>
					</ul>`
			},			
			118: {
				title: "CBR of Base or Sub-Base Materials (ASTM D1883)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						The California Bearing Ratio (CBR) test measures the bearing strength of a laboratory-compacted base or sub-base material, by forcing a piston into the soaked specimen at a constant rate and comparing the load with that for a standard crushed stone.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> At least 35 kg of material passing the 19.0 mm sieve (CBR at optimum water content). This covers one moisture-density test (about 11 kg) and three CBR specimens (about 6.8 kg each).</li>
						<li><strong>Field Sample:</strong> About 50 kg of the material as received, which allows for sieving off the oversize fraction and a retest. If the CBR is needed over a range of water contents, allow about 113 kg or more of material passing 19.0 mm.</li>
						<li><strong>Key Parameters Reported:</strong> CBR (%) at 2.5 mm and 5.0 mm Penetration (Soaked), Maximum Dry Density, Optimum Moisture Content, Swell (%), and Compliance with Project Specifications.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards (such as AASHTO T 193 or IS 2720 Part 16) may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that submitted samples are representative, properly sealed in moisture-proof containers, and labeled with project memo details prior to handover at CRTC testing labs.</li>
					</ul>`
			},
			119: {
				title: "Moisture Content of Aggregate (ASTM C566)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						The moisture content test determines the total evaporable moisture content of an aggregate (surface moisture plus moisture in the pores) by drying a sample to constant mass.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> Aggregate as received (not dried), with the minimum mass set by nominal maximum size (NMAS):
							<ul style="padding-left:18px; margin-top:4px;">
								<li><strong>4.75 mm (fine aggregate):</strong> 0.5 kg.</li>
								<li><strong>9.5 mm:</strong> 1.5 kg.</li>
								<li><strong>12.5 mm:</strong> 2 kg.</li>
								<li><strong>19.0 mm:</strong> 3 kg.</li>
								<li><strong>25.0 mm:</strong> 4 kg.</li>
								<li><strong>37.5 mm:</strong> 6 kg.</li>
								<li><strong>50 mm:</strong> 8 kg.</li>
							</ul>
						</li>
						<li><strong>Field Sample:</strong> The same quantity as the sample above (or slightly more), taken at the point where the moisture is to be known and sealed immediately in an airtight container, so that no moisture is lost before testing.</li>
						<li><strong>Key Parameters Reported:</strong> Total Evaporable Moisture Content (%), Surface Moisture (%) where absorption is known, and Compliance with Project Specifications.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards (such as AASHTO T 255) may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that submitted samples are representative, properly sealed in moisture-proof containers, and labeled with project memo details prior to handover at CRTC testing labs.</li>
					</ul>`
			},			
			120: {
				title: "Flakiness Index - FI (BS 812-105)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						The flakiness index (FI) test measures the percentage by mass of flaky particles in a coarse aggregate, meaning particles whose thickness is much smaller than their other dimensions, which are separated using a thickness gauge.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> Dry aggregate, with the minimum mass of the test portion set by nominal size (after removing oversize and undersize particles):
							<ul style="padding-left:18px; margin-top:4px;">
								<li><strong>10 mm:</strong> 0.5 kg.</li>
								<li><strong>14 mm:</strong> 1 kg.</li>
								<li><strong>20 mm:</strong> 2 kg.</li>
								<li><strong>28 mm:</strong> 5 kg.</li>
								<li><strong>40 mm:</strong> 15 kg.</li>
								<li><strong>50 mm:</strong> 35 kg.</li>
							</ul>
						</li>
						<li><strong>Field Sample:</strong> About 2 times the sample mass above (for example 5 kg for 20 mm stone), taken from the aggregate as received, which allows for rejecting oversize and undersize particles and fractions too small to test.</li>
						<li><strong>Key Parameters Reported:</strong> Flakiness Index (%), and Compliance with Project Specifications.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards (such as BS EN 933-3 or IS 2386 Part 1) may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that submitted samples are representative, properly sealed in moisture-proof containers, and labeled with project memo details prior to handover at CRTC testing labs.</li>
					</ul>`
			},			
			121: {
				title: "Elongation Index - EI (BS 812-105)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						The elongation index (EI) test measures the percentage by mass of elongated particles in a coarse aggregate, meaning particles whose length is much greater than their other dimensions, which are separated using a length gauge.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> Dry aggregate, with the minimum mass of the test portion set by nominal size (after removing oversize and undersize particles): 10 mm: 0.5 kg; 14 mm: 1 kg; 20 mm: 2 kg; 28 mm: 5 kg; 40 mm: 15 kg; 50 mm: 35 kg.</li>
						<li><strong>Field Sample:</strong> About 2 times the sample mass above (for example 5 kg for 20 mm stone). The same sample can also be used for the Flakiness Index test.</li>
						<li><strong>Key Parameters Reported:</strong> Elongation Index (%), and Compliance with Project Specifications.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards (such as BS EN 933-3 or IS 2386 Part 1) may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that submitted samples are representative, properly sealed in moisture-proof containers, and labeled with project memo details prior to handover at CRTC testing labs.</li>
					</ul>`
			},

			122: {
				title: "Soundness (with Na₂SO₄/MgSO₄); (ASTM C88)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						The soundness test measures the resistance of an aggregate to weathering by subjecting it to repeated cycles of immersion in a sodium sulfate or magnesium sulfate solution and oven drying.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> Washed, oven-dried aggregate separated into size fractions:
							<ul style="padding-left:18px; margin-top:4px;">
								<li><strong>Fine aggregate:</strong> 100 g of each fraction retained on the 4.75, 2.36, 1.18, 0.600 and 0.300 mm sieves.</li>
								<li><strong>Coarse 9.5-4.75 mm:</strong> 300 g.</li>
								<li><strong>Coarse 19.0-9.5 mm:</strong> 1,000 g (670 g of 19.0-12.5 mm and 330 g of 12.5-9.5 mm).</li>
								<li><strong>Coarse 37.5-19.0 mm:</strong> 1,500 g (1,000 g of 37.5-25.0 mm and 500 g of 25.0-19.0 mm).</li>
								<li><strong>Coarse 63-37.5 mm:</strong> 5,000 g (3,000 g of 63-50 mm and 2,000 g of 50-37.5 mm).</li>
							</ul>
						</li>
						<li><strong>Field Sample:</strong> About 3 kg of sand, or about 5 kg of 10-20 mm stone (10-15 kg for 40 mm stone), as received. This allows for fractions that are only a small part of the grading.</li>
						<li><strong>Key Parameters Reported:</strong> Weighted Percentage Loss After 5 Cycles, Solution Used (Sodium or Magnesium Sulfate), and Compliance with Project Specifications.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards (such as AASHTO T 104) may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that submitted samples are representative, properly sealed in moisture-proof containers, and labeled with project memo details prior to handover at CRTC testing labs.</li>
					</ul>`
			},

			123: {
				title: "Clay Lumps and Friable Particles (ASTM C142)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						The clay lumps and friable particles test determines the approximate percentage of particles in an aggregate that can be broken down by hand pressure after soaking, or removed by wet sieving.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> Oven-dried aggregate:
							<ul style="padding-left:18px; margin-top:4px;">
								<li><strong>Fine aggregate:</strong> at least 25 g of particles coarser than the 1.18 mm sieve.</li>
								<li><strong>Coarse 4.75-9.5 mm:</strong> 1,000 g.</li>
								<li><strong>Coarse 9.5-19.0 mm:</strong> 2,000 g.</li>
								<li><strong>Coarse 19.0-37.5 mm:</strong> 3,000 g.</li>
								<li><strong>Coarse over 37.5 mm:</strong> 5,000 g.</li>
							</ul>
						</li>
						<li><strong>Field Sample:</strong> About 1 kg of sand, or about 6 kg of 10-20 mm stone (enough for the 4.75-9.5 mm and 9.5-19.0 mm fractions), as received.</li>
						<li><strong>Key Parameters Reported:</strong> Percentage of Clay Lumps and Friable Particles, and Compliance with Project Specifications.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards (such as AASHTO T 112) may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that submitted samples are representative, properly sealed in moisture-proof containers, and labeled with project memo details prior to handover at CRTC testing labs.</li>
					</ul>`
			},

			124: {
				title: "Percentage of Fractured Coarse Aggregate Particles (ASTM D5821)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						The fractured particles test determines the percentage, by mass or by count, of a coarse aggregate sample that has the specified number of fractured faces (one or two or more).
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> Dry aggregate retained on the 4.75 mm sieve (or the sieve specified), with the minimum mass set by nominal maximum size (NMAS): 9.5 mm: 200 g; 12.5 mm: 500 g; 19.0 mm: 1,500 g; 25.0 mm: 3,000 g; 37.5 mm: 7,500 g; 50 mm: 15,000 g; 63 mm: 30,000 g.</li>
						<li><strong>Field Sample:</strong> About 2 times the sample mass above (for example 3 kg for 19.0 mm stone), as received, which allows for removal of material finer than 4.75 mm and a retest.</li>
						<li><strong>Key Parameters Reported:</strong> Percentage of Particles with One or More and Two or More Fractured Faces, Basis (Mass or Count), and Compliance with Project Specifications.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards (such as AASHTO TP 61) may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that submitted samples are representative, properly sealed in moisture-proof containers, and labeled with project memo details prior to handover at CRTC testing labs.</li>
					</ul>`
			},

			125: {
				title: "Bulking of Sand (BS 812-2)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						The bulking test determines the increase in volume of a fine aggregate caused by the moisture in it, so that batching by volume can be corrected.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> About 0.5 kg of sand as received for the single-point field method, or about 2-3 kg for a full laboratory bulking curve at several moisture contents.</li>
						<li><strong>Field Sample:</strong> About 3-5 kg of the sand as received, sealed in an airtight container so that the natural moisture is preserved.</li>
						<li><strong>Key Parameters Reported:</strong> Percentage Bulking (by Volume), Moisture Content (%), and the Moisture Content at Maximum Bulking (for the laboratory curve).</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that submitted samples are representative, properly sealed in moisture-proof containers, and labeled with project memo details prior to handover at CRTC testing labs.</li>
					</ul>`
			},			
			
			201: {
				title: "Absorption of Bricks (ASTM C67)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						The absorption test measures how much water a brick takes up, by 24-hour cold water immersion and 5-hour boiling, and gives the saturation coefficient.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> 5 full-size bricks, whole and undamaged.</li>
						<li><strong>Key Parameters Reported:</strong> 24-Hour Cold Water Absorption (%), 5-Hour Boil Absorption (%), Saturation Coefficient, and Compliance with Project Specifications.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards (such as IS 3495 Part 2 or BDS) may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that submitted samples are representative, properly sealed in moisture-proof containers, and labeled with project memo details prior to handover at CRTC testing labs.</li>
					</ul>`
			},

			202: {
				title: "Absorption of Bricks (EN 772-21)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						The cold water absorption test measures the water absorbed by a clay or calcium silicate masonry unit after immersion in water.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> 6 full-size bricks, whole and undamaged.</li>
						<li><strong>Key Parameters Reported:</strong> Cold Water Absorption (% by mass), and Compliance with Project Specifications.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that submitted samples are representative, properly sealed in moisture-proof containers, and labeled with project memo details prior to handover at CRTC testing labs.</li>
					</ul>`
			},

			203: {
				title: "Compressive (Crushing) Strength of Bricks (ASTM C67)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						The compressive strength test measures the load a full-size brick carries before failure, with the loaded faces capped and the load applied flatwise.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> 5 full-size bricks, whole and undamaged.</li>
						<li><strong>Key Parameters Reported:</strong> Compressive Strength of Each Brick and the Average (MPa), and Compliance with Project Specifications.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards (such as IS 3495 Part 1 or BDS) may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that submitted samples are representative, properly sealed in moisture-proof containers, and labeled with project memo details prior to handover at CRTC testing labs.</li>
					</ul>`
			},

			204: {
				title: "Compressive (Crushing) Strength of Bricks (EN 772-1)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						The compressive strength test determines the compressive strength of masonry units, and converts it to a normalised strength.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> 6 full-size bricks, whole and undamaged.</li>
						<li><strong>Key Parameters Reported:</strong> Compressive Strength of Each Brick, Mean Strength (MPa), Normalised Mean Strength, and Compliance with Project Specifications.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that submitted samples are representative, properly sealed in moisture-proof containers, and labeled with project memo details prior to handover at CRTC testing labs.</li>
					</ul>`
			},

			205: {
				title: "Size and Shape of Bricks (ASTM C67)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						The size and shape test measures the length, width and height of bricks, and their warpage, to check dimensional tolerances.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> 10 full-size bricks, whole and undamaged.</li>
						<li><strong>Key Parameters Reported:</strong> Length, Width and Height (mm) of Each Brick and Their Averages, Warpage, and Compliance with Project Specifications.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that submitted samples are representative, properly sealed in moisture-proof containers, and labeled with project memo details prior to handover at CRTC testing labs.</li>
					</ul>`
			},

			206: {
				title: "Size and Shape of Bricks (EN 772-16)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						The dimensions test measures the length, width and height of masonry units, the thickness of shells and webs, and the plane parallelism of the bed faces.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> 6 full-size bricks, whole and undamaged (3 are used for combined thickness and plane parallelism).</li>
						<li><strong>Key Parameters Reported:</strong> Length, Width and Height (mm) of Each Brick and Their Means, and Compliance with Project Specifications.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that submitted samples are representative, properly sealed in moisture-proof containers, and labeled with project memo details prior to handover at CRTC testing labs.</li>
					</ul>`
			},

			207: {
				title: "Unit Weight of Bricks (ASTM C67)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						The unit weight test determines the dry mass of full-size bricks, from which the weight per unit and the dry density are calculated.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> 5 full-size bricks, whole and undamaged, oven-dried before weighing.</li>
						<li><strong>Key Parameters Reported:</strong> Dry Mass of Each Brick (kg), Unit Weight / Dry Density (kg/m&sup3;), and Compliance with Project Specifications.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that submitted samples are representative, properly sealed in moisture-proof containers, and labeled with project memo details prior to handover at CRTC testing labs.</li>
					</ul>`
			},

			208: {
				title: "Unit Weight of Bricks (EN 772-13)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						The dry density test determines the net and gross dry density of masonry units from their oven-dry mass and volume.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> 10 full-size bricks, whole and undamaged, oven-dried before weighing.</li>
						<li><strong>Key Parameters Reported:</strong> Net and Gross Dry Density (kg/m&sup3;), and Compliance with Project Specifications.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that submitted samples are representative, properly sealed in moisture-proof containers, and labeled with project memo details prior to handover at CRTC testing labs.</li>
					</ul>`
			},

			209: {
				title: "Efflorescence of Bricks (ASTM C67)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						The efflorescence test determines whether a brick is likely to produce a white salt deposit on its surface, by partial immersion in distilled water and then drying.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> 5 full-size bricks, whole and undamaged.</li>
						<li><strong>Key Parameters Reported:</strong> Efflorescence Rating (Effloresced or Not Effloresced), and Compliance with Project Specifications.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards (such as IS 3495 Part 3) may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that submitted samples are representative, properly sealed in moisture-proof containers, and labeled with project memo details prior to handover at CRTC testing labs.</li>
					</ul>`
			},

			210: {
				title: "Efflorescence Potential of Bricks (EN 772-5, Active Soluble Salts)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						The active soluble salts test determines the content of soluble salts in clay masonry units, which indicates their potential to cause efflorescence.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> 6 full-size bricks, whole and undamaged.</li>
						<li><strong>Key Parameters Reported:</strong> Active Soluble Salts Content (% by mass), and Compliance with Project Specifications.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that submitted samples are representative, properly sealed in moisture-proof containers, and labeled with project memo details prior to handover at CRTC testing labs.</li>
					</ul>`
			},			
			301: {
				title: "Concrete Cylinders, 100x200mm (ASTM C39)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						This test determines the compressive strength of cylindrical concrete specimens by applying an axial compressive load until failure.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> Minimum 3 cylinders (100mm diameter x 200mm height) per age of testing, with plane ends and no visible damage.</li>
						<li><strong>Key Parameters Reported:</strong> Compressive Strength (MPa), Failure Type, Specimen Dimensions, Age at Testing, and Compliance with Project Specifications.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that submitted samples are representative, properly cured and labeled with project memo details (including casting date and age at testing) prior to handover at CRTC testing labs.</li>
					</ul>`
			},
			302: {
				title: "Concrete Cylinders, 150x300mm (ASTM C39)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						This test determines the compressive strength of standard cylindrical concrete specimens by applying an axial compressive load until failure.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> Minimum 3 cylinders (150mm diameter x 300mm height) per age of testing, with plane ends and no visible damage.</li>
						<li><strong>Key Parameters Reported:</strong> Compressive Strength (MPa), Failure Type, Specimen Dimensions, Age at Testing, and Compliance with Project Specifications.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that submitted samples are representative, properly cured and labeled with project memo details (including casting date and age at testing) prior to handover at CRTC testing labs.</li>
					</ul>`
			},
			303: {
				title: "Concrete Cubes, <200mm (BS EN 12390-3)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						This test determines the compressive strength of concrete cubes with a nominal size below 200mm (e.g., 100mm and 150mm cubes) by applying a compressive load until failure.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> Minimum 3 cubes per age of testing, with smooth, flat faces and no visible damage.</li>
						<li><strong>Key Parameters Reported:</strong> Compressive Strength (MPa), Cube Dimensions and, Failure Mode, Age at Testing, and Compliance with Project Specifications.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that submitted samples are representative, properly cured and labeled with project memo details (including casting date and age at testing) prior to handover at CRTC testing labs.</li>
					</ul>`
			},
			304: {
				title: "Concrete Cubes, 200mm-300mm (BS EN 12390-3)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						This test determines the compressive strength of larger concrete cubes with a nominal size between 200mm and 300mm by applying a compressive load until failure.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> Minimum 3 cubes per age of testing, with smooth, flat faces and no visible damage.</li>
						<li><strong>Key Parameters Reported:</strong> Compressive Strength (MPa), Cube Dimensions and Mass, Density, Failure Mode, Age at Testing, and Compliance with Project Specifications.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that submitted samples are representative, properly cured and labeled with project memo details (including casting date and age at testing) prior to handover at CRTC testing labs. Large cubes are heavy; please arrange suitable transport.</li>
					</ul>`
			},
			305: {
				title: "Concrete Cubes, >300mm (Core Cutting & Testing) (BS EN 12390-3)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						Concrete cubes or blocks larger than 300mm are too big for direct testing in the compression machine. Cores are cut from the specimen, prepared, and tested for compressive strength. The fee applies to each core cut and tested.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> Cube or block larger than 300mm, intact and large enough to yield the required number of cores.</li>
						<li><strong>Key Parameters Reported:</strong> Core Dimensions, Density, Compressive Strength (MPa), Failure Mode, and Compliance with Project Specifications.</li>
						<li><strong>Additional Charges:</strong> An additional charge of 300/- per core applies for fuel, if needed.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that submitted samples are representative, properly labeled with project memo details, and clearly marked with the orientation and the locations from which cores are to be cut, prior to handover at CRTC testing labs.</li>
					</ul>`
			},
			306: {
				title: "Concrete Beam in Flexure (ASTM C78)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						This test determines the flexural strength (modulus of rupture) of concrete using a simple beam with third-point loading.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> Minimum 3 beams per age of testing, typically 150x150x525mm, with a smooth, undamaged surface.</li>
						<li><strong>Key Parameters Reported:</strong> Modulus of Rupture (MPa), Beam Dimensions, Fracture Location, Age at Testing, and Compliance with Project Specifications.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that submitted samples are properly cured, kept moist until testing, handled carefully to avoid cracking, and labeled with project memo details prior to handover at CRTC testing labs.</li>
					</ul>`
			},
			307: {
				title: "Concrete Cylinders Casting & Testing (ASTM C39)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						This service covers casting cylindrical specimens from fresh concrete, curing them under standard conditions, and testing them for compressive strength at the specified ages.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> Fresh concrete representative of the batch, sufficient to cast a minimum of 3 cylinders per age of testing.</li>
						<li><strong>Key Parameters Reported:</strong> Compressive Strength (MPa), Failure Type, Specimen Dimensions and Mass, Age at Testing, and Compliance with Project Specifications.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that the fresh concrete is representative of the batch, is sampled and delivered promptly to avoid setting, and is accompanied by project memo details (mix ID, date and time of sampling, and ages of testing) at CRTC testing labs.</li>
					</ul>`
			},
			308: {
				title: "Concrete Slump Test (ASTM C143)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						The slump test measures the consistency (workability) of fresh concrete by determining the vertical settlement of a molded concrete cone after the mold is removed.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> Representative fresh concrete sample of sufficient volume to fill the slump cone (about 10 liters).</li>
						<li><strong>Key Parameters Reported:</strong> Slump (mm), Slump Type (true, shear, or collapse), and Compliance with Project Specifications.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that the test is carried out promptly after sampling, since slump changes with time, and that the sample is labeled with project memo details (mix ID, date and time of sampling).</li>
					</ul>`
			},
			309: {
				title: "Concrete Density, Dry (ASTM C642)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						This test determines the oven-dry density of hardened concrete, along with its absorption and volume of permeable voids.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> Minimum 3 specimens (cores, cut pieces, or cylinders), each with a volume of at least 350 cm³ or a mass of at least 800 g.</li>
						<li><strong>Key Parameters Reported:</strong> Oven-Dry Density (kg/m³), Absorption After Immersion (%), Volume of Permeable Voids (%), and Compliance with Project Specifications.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that submitted samples are representative, free of loose fragments or reinforcement steel, and labeled with project memo details prior to handover at CRTC testing labs.</li>
					</ul>`
			},
			310: {
				title: "Concrete Density, Wet (ASTM C138)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						This test determines the density (unit weight) of freshly mixed concrete, and from it the yield and gravimetric air content.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> Representative fresh concrete sufficient to fill the measure (about 7 to 14 liters, depending on aggregate size).</li>
						<li><strong>Key Parameters Reported:</strong> Density of Fresh Concrete (kg/m³), Yield, and Gravimetric Air Content (if mix proportions and material densities are provided).</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that the test is carried out promptly after sampling and that the sample is labeled with project memo details (mix ID, date and time of sampling).</li>
					</ul>`
			},
			311: {
				title: "Moisture Content of Aggregates (ASTM C566)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						This test determines the total evaporable moisture content of aggregate by drying a sample and measuring the loss in mass.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> Representative aggregate sample with a minimum mass depending on the nominal maximum aggregate size (about 1.5 kg for fine aggregate, up to 50 kg for larger sizes).</li>
						<li><strong>Field Sample:</strong> Aggregate taken from several locations in the stockpile and combined, which allows for a retest.</li>
						<li><strong>Key Parameters Reported:</strong> Total Evaporable Moisture Content (% by mass) and Compliance with Project Specifications.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that submitted samples are representative, sealed immediately in moisture-proof containers to prevent moisture loss, and labeled with project memo details prior to handover at CRTC testing labs.</li>
					</ul>`
			},
			312: {
				title: "Temperature of Fresh Concrete (ASTM C1064)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						This test measures the temperature of freshly mixed concrete, which affects setting time, strength development, and the risk of cracking in hot or cold weather.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> Representative fresh concrete in a container large enough to give at least 75mm of cover around the temperature sensor in every direction.</li>
						<li><strong>Field Sample:</strong> Fresh concrete taken at random from the batch, with enough extra for a repeat measurement.</li>
						<li><strong>Key Parameters Reported:</strong> Temperature of Fresh Concrete (°C) and Compliance with Project Specifications.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that the measurement is taken promptly after sampling, within 5 minutes of collecting the sample, and that the sample is protected from sun and wind. Label it with project memo details (mix ID, date and time of sampling).</li>
					</ul>`
			},
			313: {
				title: "Concrete Mix Design without Admixture, Cylinder up to 25 MPa (ACI 211.1)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						This service develops a concrete mix proportion for a target cylinder compressive strength of up to 25 MPa, without chemical admixtures, using the client's materials and ACI 211.1 procedures.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> Representative samples of cement, fine aggregate, and each size of coarse aggregate proposed for the project, in sufficient quantity for property testing and trial batches.</li>
						<li><strong>Field Sample:</strong> The following quantities are recommended as the minimum initial submission. Additional materials may be required depending on the mix design requirements and trial results:</li>
						<ul style="padding-left:18px; margin-top:4px;">
								<li><strong>Cement:</strong> 2 bags.</li>
								<li><strong>Fine aggregate</strong> (Sand): 60 kg.</li>
								<li><strong>Coarse aggregate</strong> (Stone chips): 90 kg.</li>
							</ul>
						<li><strong>Key Parameters Reported:</strong> Material Properties (specific gravity, absorption, fineness modulus, unit weight), Mix Proportions per m³, Water-Cement Ratio, Slump, and Compressive Strength of Trial Mixes.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that submitted materials are representative, properly sealed and labeled with project memo details. Please also provide the target strength, required slump, exposure conditions, and cement type prior to handover at CRTC testing labs.</li>
					</ul>`
			},
			314: {
				title: "Concrete Mix Design without Admixture, Cylinder >25 MPa (ACI 211.1)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						This service develops a concrete mix proportion for a target cylinder compressive strength above 25 MPa, without chemical admixtures, using the client's materials and ACI 211.1 procedures.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> Representative samples of cement, fine aggregate, and each size of coarse aggregate proposed for the project, in sufficient quantity for property testing and trial batches.</li>
						<li><strong>Field Sample:</strong> The following quantities are recommended as the minimum initial submission. Additional materials may be required depending on the mix design requirements and trial results:</li>
						<ul style="padding-left:18px; margin-top:4px;">
								<li><strong>Cement:</strong> 2 bags.</li>
								<li><strong>Fine aggregate</strong> (Sand): 60 kg.</li>
								<li><strong>Coarse aggregate</strong> (Stone chips): 90 kg.</li>
							</ul>
						<li><strong>Key Parameters Reported:</strong> Material Properties (specific gravity, absorption, fineness modulus, unit weight), Mix Proportions per m³, Water-Cement Ratio, Slump, and Compressive Strength of Trial Mixes.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that submitted materials are representative, properly sealed and labeled with project memo details. Please also provide the target strength, required slump, exposure conditions, and cement type prior to handover at CRTC testing labs.</li>
					</ul>`
			},
			315: {
				title: "Concrete Mix Design with Admixture, Cylinder up to 25 MPa (ACI 211.1)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						This service develops a concrete mix proportion for a target cylinder compressive strength of up to 25 MPa, including a chemical admixture, using the client's materials and ACI 211.1 procedures.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> Representative samples of cement, fine aggregate, each size of coarse aggregate, and the admixture proposed for the project, in sufficient quantity for property testing and trial batches.</li>
						<li><strong>Field Sample:</strong> The following quantities are recommended as the minimum initial submission. Additional materials may be required depending on the mix design requirements and trial results:</li>
						<ul style="padding-left:18px; margin-top:4px;">
								<li><strong>Cement:</strong> 2 bags.</li>
								<li><strong>Fine aggregate</strong> (Sand): 60 kg.</li>
								<li><strong>Coarse aggregate</strong> (Stone chips): 90 kg.</li>
								<li><strong>Admixture:</strong> 2 L.</li>
							</ul>
							<li><strong>Key Parameters Reported:</strong> Material Properties (specific gravity, absorption, fineness modulus, unit weight), Mix Proportions per m³ (including admixture dosage), Water-Cement Ratio, Slump, and Compressive Strength of Trial Mixes.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that submitted materials are representative, properly sealed and labeled with project memo details. Please also provide the admixture's technical data sheet, target strength, required slump, exposure conditions, and cement type prior to handover at CRTC testing labs.</li>
					</ul>`
			},
			316: {
				title: "Concrete Mix Design with Admixture, Cylinder >25 MPa (ACI 211.1)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						This service develops a concrete mix proportion for a target cylinder compressive strength above 25 MPa, including a chemical admixture, using the client's materials and ACI 211.1 procedures.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> Representative samples of cement, fine aggregate, each size of coarse aggregate, and the admixture proposed for the project, in sufficient quantity for property testing and trial batches.</li>
						<li><strong>Field Sample:</strong> The following quantities are recommended as the minimum initial submission. Additional materials may be required depending on the mix design requirements and trial results:</li>
						<ul style="padding-left:18px; margin-top:4px;">
								<li><strong>Cement:</strong> 2 bags.</li>
								<li><strong>Fine aggregate</strong> (Sand): 60 kg.</li>
								<li><strong>Coarse aggregate</strong> (Stone chips): 90 kg.</li>
								<li><strong>Admixture:</strong> 2 L.</li>
							</ul>
						<li><strong>Key Parameters Reported:</strong> Material Properties (specific gravity, absorption, fineness modulus, unit weight), Mix Proportions per m³ (including admixture dosage), Water-Cement Ratio, Slump, and Compressive Strength of Trial Mixes.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that submitted materials are representative, properly sealed and labeled with project memo details. Please also provide the admixture's technical data sheet, target strength, required slump, exposure conditions, and cement type prior to handover at CRTC testing labs.</li>
					</ul>`
			},			
			401: {
				title: "Cement Compressive Strength, 3, 7 & 28 Days (ASTM C109)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						This test determines the compressive strength of hydraulic cement using 50mm mortar cubes, tested at 3, 7 and 28 days of curing.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> 1 bag of cement (typically 50 kg), intact and sealed.</li>
						<li><strong>Field Sample:</strong> Cement taken from several randomly selected bags of the same lot and combined, which allows for a retest.</li>
						<li><strong>Key Parameters Reported:</strong> Compressive Strength (MPa) at 3, 7 and 28 Days, Mortar Flow, and Compliance with Project Specifications.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that submitted samples are representative, free of lumps, properly sealed in moisture-proof containers, and labeled with project memo details (brand, cement type, and batch or manufacturing date) prior to handover at CRTC testing labs. Results for the 28-day age are available only after the full curing period.</li>
					</ul>`
			},
			402: {
				title: "Cement Compressive Strength, 3 & 7 Days (ASTM C109)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						This test determines the early-age compressive strength of hydraulic cement using 50mm mortar cubes, tested at 3 and 7 days of curing.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> 1 bag of cement (typically 50 kg), intact and sealed.</li>
						<li><strong>Field Sample:</strong> Cement taken from several randomly selected bags of the same lot and combined, which allows for a retest.</li>
						<li><strong>Key Parameters Reported:</strong> Compressive Strength (MPa) at 3 and 7 Days, Mortar Flow, and Compliance with Project Specifications.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that submitted samples are representative, free of lumps, properly sealed in moisture-proof containers, and labeled with project memo details (brand, cement type, and batch or manufacturing date) prior to handover at CRTC testing labs.</li>
					</ul>`
			},
			403: {
				title: "Cement Setting Time, Initial & Final (ASTM C191)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						This test determines the initial and final setting times of hydraulic cement paste of normal consistency using the Vicat apparatus.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> 1 bag of cement (typically 50 kg), intact and sealed.</li>
						<li><strong>Field Sample:</strong> Cement taken from several randomly selected bags of the same lot and combined, which allows for a retest.</li>
						<li><strong>Key Parameters Reported:</strong> Initial Setting Time (minutes), Final Setting Time (minutes), Water Content for Normal Consistency (%), and Compliance with Project Specifications.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that submitted samples are representative, free of lumps, properly sealed in moisture-proof containers, and labeled with project memo details (brand, cement type, and batch or manufacturing date) prior to handover at CRTC testing labs.</li>
					</ul>`
			},
			404: {
				title: "Cement Fineness, Blaine Air Permeability Method (ASTM C204)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						This test determines the fineness of hydraulic cement, expressed as specific surface area, using the Blaine air permeability apparatus.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> 1 bag of cement (typically 50 kg), intact and sealed.</li>
						<li><strong>Field Sample:</strong> Cement taken from several randomly selected bags of the same lot and combined, which allows for a retest.</li>
						<li><strong>Key Parameters Reported:</strong> Specific Surface Area (m²/kg) and Compliance with Project Specifications.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that submitted samples are representative, free of lumps, properly sealed in moisture-proof containers, and labeled with project memo details (brand, cement type, and batch or manufacturing date) prior to handover at CRTC testing labs.</li>
					</ul>`
			},
			405: {
				title: "Cement Fineness, Sieve Analysis Method (EN 196-6)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						This test determines the fineness of cement by measuring the percentage of residue retained on a standard fine sieve.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> 1 bag of cement (typically 50 kg), intact and sealed.</li>
						<li><strong>Field Sample:</strong> Cement taken from several randomly selected bags of the same lot and combined, which allows for a retest.</li>
						<li><strong>Key Parameters Reported:</strong> Residue on Sieve (% by mass) and Compliance with Project Specifications.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that submitted samples are representative, free of lumps, properly sealed in moisture-proof containers, and labeled with project memo details (brand, cement type, and batch or manufacturing date) prior to handover at CRTC testing labs.</li>
					</ul>`
			},
			406: {
				title: "Cement Normal Consistency Only (ASTM C187)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						This test determines the amount of water required to prepare a hydraulic cement paste of standard (normal) consistency using the Vicat apparatus.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> 1 bag of cement (typically 50 kg), intact and sealed.</li>
						<li><strong>Field Sample:</strong> Cement taken from several randomly selected bags of the same lot and combined, which allows for a retest.</li>
						<li><strong>Key Parameters Reported:</strong> Water Content for Normal Consistency (% by mass of cement) and Compliance with Project Specifications.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that submitted samples are representative, free of lumps, properly sealed in moisture-proof containers, and labeled with project memo details (brand, cement type, and batch or manufacturing date) prior to handover at CRTC testing labs.</li>
					</ul>`
			},
			407: {
				title: "Cement Density / Specific Gravity / Unit Weight (ASTM C188)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						This test determines the density (specific gravity) of hydraulic cement using the Le Chatelier flask, which is needed for mix design and fineness calculations.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> 1 bag of cement (typically 50 kg), intact and sealed.</li>
						<li><strong>Field Sample:</strong> Cement taken from several randomly selected bags of the same lot and combined, which allows for a retest.</li>
						<li><strong>Key Parameters Reported:</strong> Density (g/cm³), Specific Gravity, Unit Weight (kg/m³), and Compliance with Project Specifications.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that submitted samples are representative, free of lumps, properly sealed in moisture-proof containers, and labeled with project memo details (brand, cement type, and batch or manufacturing date) prior to handover at CRTC testing labs.</li>
					</ul>`
			},
			408: {
				title: "Cement Soundness (EN 196-3)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						This test determines the soundness of cement, which is its ability to retain volume after setting, using the Le Chatelier method to detect expansion caused by free lime or magnesia.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> 1 bag of cement (typically 50 kg), intact and sealed.</li>
						<li><strong>Field Sample:</strong> Cement taken from several randomly selected bags of the same lot and combined, which allows for a retest.</li>
						<li><strong>Key Parameters Reported:</strong> Expansion (mm) and Compliance with Project Specifications.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that submitted samples are representative, free of lumps, properly sealed in moisture-proof containers, and labeled with project memo details (brand, cement type, and batch or manufacturing date) prior to handover at CRTC testing labs.</li>
					</ul>`
			},
			409: {
				title: "Weight of Cement Bag (ASTM C150)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						This test determines the net weight of packaged cement to verify that bags contain the quantity marked on the packaging.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> 1 bag of cement, intact and sealed, with its original packaging and markings.</li>
						<li><strong>Field Sample:</strong> Additional bags of the same lot, selected at random across the stack, if an average bag weight is required.</li>
						<li><strong>Key Parameters Reported:</strong> Net Weight of Bag (kg), Marked Weight, Deviation from Marked Weight, and Compliance with Project Specifications.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that bags are intact, undamaged, and not opened or partially emptied before handover, and that they are labeled with project memo details (brand, cement type, and batch or manufacturing date) at CRTC testing labs.</li>
					</ul>`
			}, 
         
			501: {
				title: "Steel Bar Tension incl. Weight & Elongation, up to 25mm (ASTM A370)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						This test determines the tensile properties of steel reinforcement bars up to 25mm in diameter, including yield strength, ultimate tensile strength, percentage elongation, and unit weight per meter.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> Minimum 3 bars per diameter and lot, each at least 750mm long, straight and free from kinks, damage, and heavy rust or scale.</li>
						<li><strong>Key Parameters Reported:</strong> Yield Strength (MPa), Ultimate Tensile Strength (MPa), Percentage Elongation (%), Unit Weight (kg/m), Nominal Diameter, and Compliance with Project Specifications.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that submitted samples are representative, cut cleanly without heating or damaging the ends, and labeled with project memo details (grade, diameter, brand, and heat or lot number) prior to handover at CRTC testing labs.</li>
					</ul>`
			},
			502: {
				title: "Steel Bar Tension incl. Weight & Elongation, above 25mm & up to 32mm (ASTM A370)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						This test determines the tensile properties of steel reinforcement bars above 25mm and up to 32mm in diameter, including yield strength, ultimate tensile strength, percentage elongation, and unit weight per meter.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> Minimum 3 bars per diameter and lot, each at least 750mm long, straight and free from kinks, damage, and heavy rust or scale.</li>
						<li><strong>Key Parameters Reported:</strong> Yield Strength (MPa), Ultimate Tensile Strength (MPa), Percentage Elongation (%), Unit Weight (kg/m), Nominal Diameter, and Compliance with Project Specifications.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that submitted samples are representative, cut cleanly without heating or damaging the ends, and labeled with project memo details (grade, diameter, brand, and heat or lot number) prior to handover at CRTC testing labs. Larger diameter bars are heavy; please arrange suitable transport.</li>
					</ul>`
			},
			503: {
				title: "Steel Bar Bend Test, up to 25mm (ISO 10065)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						This test assesses the ductility of steel reinforcement bars up to 25mm in diameter by bending them through a specified angle around a mandrel of specified diameter and checking for cracks.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> Minimum 3 bars per diameter and lot, each at least 500mm long, straight and free from kinks, damage, and heavy rust or scale.</li>
						<li><strong>Key Parameters Reported:</strong> Bend Angle, Mandrel Diameter, Presence or Absence of Cracks, and Compliance with Project Specifications.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that submitted samples are representative, cut cleanly without heating or damaging the ends, and labeled with project memo details (grade, diameter, brand, and heat or lot number) prior to handover at CRTC testing labs.</li>
					</ul>`
			},
			504: {
				title: "Steel Bar Bend Test, above 25mm (ISO 10065)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						This test assesses the ductility of steel reinforcement bars above 25mm in diameter by bending them through a specified angle around a mandrel of specified diameter and checking for cracks.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> Minimum 3 bars per diameter and lot, each at least 600mm long, straight and free from kinks, damage, and heavy rust or scale.</li>
						<li><strong>Key Parameters Reported:</strong> Bend Angle, Mandrel Diameter, Presence or Absence of Cracks, and Compliance with Project Specifications.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that submitted samples are representative, cut cleanly without heating or damaging the ends, and labeled with project memo details (grade, diameter, brand, and heat or lot number) prior to handover at CRTC testing labs.</li>
					</ul>`
			},
			505: {
				title: "Steel Bar Re-bend Test, up to 25mm (ISO 15630-1)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						This test assesses the strain-ageing resistance of steel reinforcement bars up to 25mm in diameter. The bar is bent, artificially aged, and then partially bent back to check for cracks.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> Minimum 3 bars per diameter and lot, each at least 500mm long, straight and free from kinks, damage, and heavy rust or scale.</li>
						<li><strong>Key Parameters Reported:</strong> Bend and Re-bend Angles, Mandrel Diameter, Presence or Absence of Cracks, and Compliance with Project Specifications.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that submitted samples are representative, cut cleanly without heating or damaging the ends, and labeled with project memo details (grade, diameter, brand, and heat or lot number) prior to handover at CRTC testing labs.</li>
					</ul>`
			},
			506: {
				title: "Steel Bar Re-bend Test, above 25mm (ISO 15630-1)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						This test assesses the strain-ageing resistance of steel reinforcement bars above 25mm in diameter. The bar is bent, artificially aged, and then partially bent back to check for cracks.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> Minimum 3 bars per diameter and lot, each at least 600mm long, straight and free from kinks, damage, and heavy rust or scale.</li>
						<li><strong>Key Parameters Reported:</strong> Bend and Re-bend Angles, Mandrel Diameter, Presence or Absence of Cracks, and Compliance with Project Specifications.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that submitted samples are representative, cut cleanly without heating or damaging the ends, and labeled with project memo details (grade, diameter, brand, and heat or lot number) prior to handover at CRTC testing labs.</li>
					</ul>`
			},
			507: {
				title: "Steel Stress-Strain Curve & Modulus of Elasticity (ASTM E8)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						This test records the full stress-strain curve of a steel specimen under tension and determines the modulus of elasticity, along with yield and ultimate strengths, using an extensometer.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> Minimum 3 bars or specimens per diameter and lot, each at least 750mm long, straight and free from kinks, damage, and heavy rust or scale.</li>
						<li><strong>Key Parameters Reported:</strong> Stress-Strain Curve, Modulus of Elasticity (GPa), Yield Strength (MPa), Ultimate Tensile Strength (MPa), Percentage Elongation (%), and Compliance with Project Specifications.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that submitted samples are representative, cut cleanly without heating or damaging the ends, and labeled with project memo details (grade, diameter, brand, and heat or lot number) prior to handover at CRTC testing labs.</li>
					</ul>`
			},
			508: {
				title: "Shear Test for Rod (ASTM B769)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						This test determines the shear strength of rod specimens by loading them in a shear fixture until failure.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> Minimum 3 rods per diameter and lot, each at least 300mm long, straight and free from kinks, damage, and heavy rust or scale.</li>
						<li><strong>Key Parameters Reported:</strong> Shear Load (kN), Shear Strength (MPa), Rod Diameter, and Compliance with Project Specifications.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that submitted samples are representative, cut cleanly without heating or damaging the ends, and labeled with project memo details (material, diameter, and lot number) prior to handover at CRTC testing labs.</li>
					</ul>`
			},            

			601: {
				title: "Specific Gravity of Soil (ASTM D854)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						This test determines the specific gravity of soil solids passing the 4.75mm sieve using the water pycnometer method.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> Minimum 500 g of representative soil, disturbed samples are acceptable.</li>
						<li><strong>Field Sample:</strong> About 1 kg of soil from the same location and depth, which allows for a retest.</li>
						<li><strong>Key Parameters Reported:</strong> Specific Gravity of Soil Solids (at 20°C) and Compliance with Project Specifications.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that submitted samples are representative, properly sealed in moisture-proof containers, and labeled with project memo details (location, borehole or pit number, and depth) prior to handover at CRTC testing labs.</li>
					</ul>`
			},
			602: {
				title: "Soil Density / Unit Weight (ASTM D7263)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						This test determines the total (bulk) density and unit weight of intact soil specimens by measuring their mass and volume.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> Undisturbed sample (thin-walled tube or block) large enough to trim at least 1 specimen. Disturbed samples do not give a valid density.</li>
						<li><strong>Field Sample:</strong> Undisturbed tube or block samples from the same location and depth, with spare material for a retest.</li>
						<li><strong>Key Parameters Reported:</strong> Bulk Density (kg/m³ or g/cm³), Dry Density, Unit Weight (kN/m³), Moisture Content, and Compliance with Project Specifications.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that undisturbed samples are sealed at both ends (for example with wax), kept upright, protected from shock and drying, and labeled with project memo details (location, borehole number, and depth) prior to handover at CRTC testing labs.</li>
					</ul>`
			},
			603: {
				title: "Soil Void Ratio (ASTM D7263)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						This test determines the void ratio of intact soil, calculated from the measured density and moisture content of the specimen together with the specific gravity of the soil solids.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> Undisturbed sample (thin-walled tube or block) large enough to trim at least 1 specimen, plus about 500 g of disturbed soil from the same location for specific gravity if it has not been tested.</li>
						<li><strong>Field Sample:</strong> Undisturbed tube or block samples from the same location and depth, with spare material for a retest.</li>
						<li><strong>Key Parameters Reported:</strong> Void Ratio, Porosity, Dry Density, Moisture Content, Degree of Saturation, and Compliance with Project Specifications.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that undisturbed samples are sealed at both ends, kept upright, protected from shock and drying, and labeled with project memo details (location, borehole number, and depth) prior to handover at CRTC testing labs.</li>
					</ul>`
			},
			604: {
				title: "Soil Moisture Content (ASTM D2216)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						This test determines the water content of soil by measuring the mass lost after oven drying at 110°C.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> Minimum 200 g of fine-grained soil, or more for coarse soil depending on the maximum particle size (up to several kilograms for gravelly soil).</li>
						<li><strong>Field Sample:</strong> Soil from the same location and depth in a full, tightly sealed container, which allows for a retest.</li>
						<li><strong>Key Parameters Reported:</strong> Moisture Content (% by dry mass) and Compliance with Project Specifications.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that submitted samples are sealed immediately in airtight containers to prevent moisture loss, kept out of direct sun, and labeled with project memo details (location, borehole or pit number, and depth) prior to handover at CRTC testing labs.</li>
					</ul>`
			},
			605: {
				title: "Liquid Limit, Plastic Limit & Plasticity Index (ASTM D4318)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						These tests determine the Atterberg limits of fine-grained soil: the liquid limit, the plastic limit, and the resulting plasticity index, which are used to classify soil and judge its behavior.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> Minimum 500 g of representative soil containing fine-grained material.</li>
						<li><strong>Field Sample:</strong> About 1 kg of soil from the same location and depth, which allows for a retest.</li>
						<li><strong>Key Parameters Reported:</strong> Liquid Limit (%), Plastic Limit (%), Plasticity Index (%), and Compliance with Project Specifications.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that submitted samples are representative, kept at natural moisture and not oven-dried, sealed in moisture-proof containers, and labeled with project memo details (location, borehole or pit number, and depth) prior to handover at CRTC testing labs.</li>
					</ul>`
			},
			606: {
				title: "Particle-Size Analysis, Sieve (ASTM D422)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						This test determines the particle-size distribution of coarse-grained soil by sieving the sample through a series of standard sieves.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> Minimum 1 kg of sand, or 5 kg or more for soil containing gravel, depending on the maximum particle size.</li>
						<li><strong>Field Sample:</strong> Soil from the same location and depth, with about 50% extra, which allows for a retest.</li>
						<li><strong>Key Parameters Reported:</strong> Percent Passing Each Sieve, Grain-Size Distribution Curve, Effective Size (D10), Uniformity Coefficient (Cu), Coefficient of Curvature (Cc), and Compliance with Project Specifications.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that submitted samples are representative, free of foreign material, kept in sealed bags, and labeled with project memo details (location, borehole or pit number, and depth) prior to handover at CRTC testing labs.</li>
					</ul>`
			},
			607: {
				title: "Particle-Size Analysis, Hydrometer & Sieve (ASTM D422)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						This test determines the full particle-size distribution of soil, using sieve analysis for the coarse fraction and the hydrometer method for the silt and clay fraction.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> Minimum 1 kg of soil, or 2 kg or more if the soil contains gravel.</li>
						<li><strong>Field Sample:</strong> Soil from the same location and depth, with about 50% extra, which allows for a retest.</li>
						<li><strong>Key Parameters Reported:</strong> Percent Passing Each Sieve, Percent Finer by Hydrometer, Grain-Size Distribution Curve, Gravel, Sand, Silt and Clay Fractions (%), and Compliance with Project Specifications.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that submitted samples are representative, kept in sealed bags, and labeled with project memo details (location, borehole or pit number, and depth) prior to handover at CRTC testing labs. The hydrometer test takes at least 24 hours to complete.</li>
					</ul>`
			},
			608: {
				title: "Organic Matter Content of Soil (ASTM D2974)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						This test determines the moisture, ash, and organic matter content of soil by measuring mass loss on drying and ignition.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> Minimum 300 g of representative soil.</li>
						<li><strong>Field Sample:</strong> About 500 g of soil from the same location and depth, which allows for a retest.</li>
						<li><strong>Key Parameters Reported:</strong> Moisture Content (%), Ash Content (%), Organic Matter Content (%), and Compliance with Project Specifications.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that submitted samples are representative, free of roots and large plant debris unless these are to be included, sealed in moisture-proof containers, and labeled with project memo details (location, borehole or pit number, and depth) prior to handover at CRTC testing labs.</li>
					</ul>`
			},
			609: {
				title: "Maximum & Minimum Density of Cohesionless Soil (ASTM D4253 / D4254)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						These tests determine the maximum index density (using a vibratory table) and the minimum index density of cohesionless, free-draining soils, which are used to calculate relative density.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> Minimum 15 kg of clean, free-draining sand or gravelly sand, with less than 15% fines.</li>
						<li><strong>Field Sample:</strong> About 25 kg of soil from the same location and depth, which allows for repeat determinations.</li>
						<li><strong>Key Parameters Reported:</strong> Maximum Index Density, Minimum Index Density, Maximum and Minimum Void Ratio, and Compliance with Project Specifications.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that submitted samples are representative, kept in sealed bags, and labeled with project memo details (location, borehole or pit number, and depth) prior to handover at CRTC testing labs.</li>
					</ul>`
			},
			610: {
				title: "Standard Proctor Compaction (ASTM D698)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						This test determines the relationship between moisture content and dry density of soil compacted with standard compaction effort, giving the maximum dry density and optimum moisture content.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> Minimum 25 kg of representative soil, air-dried or at natural moisture.</li>
						<li><strong>Field Sample:</strong> About 40 kg of soil from the same borrow source or location, which allows for a retest and for soil with gravel.</li>
						<li><strong>Key Parameters Reported:</strong> Maximum Dry Density (kg/m³), Optimum Moisture Content (%), Compaction Curve, and Compliance with Project Specifications.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that submitted samples are representative of the material to be used, kept in sealed bags, and labeled with project memo details (location, source, and depth) prior to handover at CRTC testing labs.</li>
					</ul>`
			},
			611: {
				title: "Modified Proctor Compaction (ASTM D1557)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						This test determines the relationship between moisture content and dry density of soil compacted with modified (higher) compaction effort, giving the maximum dry density and optimum moisture content.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> Minimum 25 kg of representative soil, or about 50 kg if the soil contains gravel.</li>
						<li><strong>Field Sample:</strong> About 40 to 60 kg of soil from the same borrow source or location, which allows for a retest.</li>
						<li><strong>Key Parameters Reported:</strong> Maximum Dry Density (kg/m³), Optimum Moisture Content (%), Compaction Curve, and Compliance with Project Specifications.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that submitted samples are representative of the material to be used, kept in sealed bags, and labeled with project memo details (location, source, and depth) prior to handover at CRTC testing labs.</li>
					</ul>`
			},
			612: {
				title: "Unconfined Compression Test of Cohesive Soil (ASTM D2166)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						This test determines the unconfined compressive strength of cohesive soil in intact, remolded, or compacted condition, from which undrained shear strength is estimated.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> Undisturbed cohesive soil sample (thin-walled tube or block) large enough to trim at least 3 specimens, typically 38mm to 75mm in diameter with a height-to-diameter ratio of about 2.</li>
						<li><strong>Field Sample:</strong> Undisturbed tube or block samples from the same location and depth, with spare material for a retest.</li>
						<li><strong>Key Parameters Reported:</strong> Unconfined Compressive Strength (kPa), Undrained Shear Strength (kPa), Strain at Failure (%), Moisture Content, Density, and Compliance with Project Specifications.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that undisturbed samples are sealed at both ends, kept upright, protected from shock and drying, and labeled with project memo details (location, borehole number, and depth) prior to handover at CRTC testing labs. This test is not suitable for sands, gravels, or fissured soils.</li>
					</ul>`
			},
			613: {
				title: "Laboratory California Bearing Ratio, CBR (ASTM D1883)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						This test determines the California Bearing Ratio of soil compacted in the laboratory, which is used to evaluate the strength of subgrade, subbase, and base materials for pavement design.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> Minimum 50 kg of representative soil, enough for the compaction test and for 3 molds at different compaction efforts.</li>
						<li><strong>Field Sample:</strong> About 70 kg of soil from the same borrow source or location, which allows for a retest.</li>
						<li><strong>Key Parameters Reported:</strong> CBR Value (%) at 2.5mm and 5.0mm Penetration, Maximum Dry Density, Optimum Moisture Content, Swell (%), and Compliance with Project Specifications.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that submitted samples are representative of the subgrade or fill material, kept in sealed bags, and labeled with project memo details (location, source, and depth) prior to handover at CRTC testing labs. Please also state whether soaked or unsoaked CBR is required. Soaked CBR needs at least 4 days of soaking.</li>
					</ul>`
			},
			614: {
				title: "Direct Shear Test, Consolidated Drained, for Sand (ASTM D3080)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						This test determines the drained shear strength parameters (cohesion and angle of internal friction) of sand by shearing specimens under different normal stresses in a direct shear apparatus.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> Minimum 3 kg of representative sand, which is remolded to the required density for testing, or undisturbed samples where available.</li>
						<li><strong>Field Sample:</strong> About 5 kg of sand from the same location and depth, with the in-situ density if available, which allows for a retest.</li>
						<li><strong>Key Parameters Reported:</strong> Angle of Internal Friction (degrees), Cohesion (kPa), Shear Stress vs Displacement Curves, Failure Envelope, and Compliance with Project Specifications.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that submitted samples are representative, kept in sealed bags, and labeled with project memo details (location, borehole or pit number, and depth) prior to handover at CRTC testing labs. Please also provide the density to which the sand should be prepared.</li>
					</ul>`
			},
			615: {
				title: "Direct Shear Test, Consolidated Drained, for Clay (ASTM D3080)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						This test determines the drained shear strength parameters (cohesion and angle of internal friction) of clay by consolidating specimens under different normal stresses and shearing them slowly enough for pore pressures to dissipate.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> Undisturbed clay sample (thin-walled tube or block) large enough to trim at least 3 specimens, or about 3 kg of soil if tested remolded.</li>
						<li><strong>Field Sample:</strong> Undisturbed tube or block samples from the same location and depth, with spare material for a retest.</li>
						<li><strong>Key Parameters Reported:</strong> Angle of Internal Friction (degrees), Cohesion (kPa), Shear Stress vs Displacement Curves, Failure Envelope, and Compliance with Project Specifications.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that undisturbed samples are sealed at both ends, kept upright, protected from shock and drying, and labeled with project memo details (location, borehole number, and depth) prior to handover at CRTC testing labs. Please note that consolidation and slow shearing of clay make this test take several days.</li>
					</ul>`
			},
			616: {
				title: "Sub Soil Exploration, Depth up to 60' (BNBC)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						This service covers subsurface investigation by boring to a depth of up to 60 feet, collecting soil samples, carrying out the relevant field and laboratory tests, and providing a geotechnical report in accordance with the Bangladesh National Building Code (BNBC).
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> No client samples are required. CRTC carries out the boring, sampling, and testing on site.</li>
						<li><strong>Field Sample:</strong> Disturbed and undisturbed soil samples collected from the boreholes at regular intervals and at each change of strata.</li>
						<li><strong>Key Parameters Reported:</strong> Borehole Logs, Soil Classification, SPT N-Values, Groundwater Level, Laboratory Test Results, Allowable Bearing Capacity, and Foundation Recommendations.</li>
						<li><strong>Additional Charges:</strong> A field visit fee will be added to the service charge.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please provide the site location, site plan, borehole locations, number of boreholes, and building details (type, number of stories, and expected loads) prior to the field visit, and ensure that the site is accessible to the drilling equipment.</li>
					</ul>`
			},
			617: {
				title: "Sub Soil Exploration, Depth up to 100' (BNBC)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						This service covers subsurface investigation by boring to a depth of up to 100 feet, collecting soil samples, carrying out the relevant field and laboratory tests, and providing a geotechnical report in accordance with the Bangladesh National Building Code (BNBC).
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> No client samples are required. CRTC carries out the boring, sampling, and testing on site.</li>
						<li><strong>Field Sample:</strong> Disturbed and undisturbed soil samples collected from the boreholes at regular intervals and at each change of strata.</li>
						<li><strong>Key Parameters Reported:</strong> Borehole Logs, Soil Classification, SPT N-Values, Groundwater Level, Laboratory Test Results, Allowable Bearing Capacity, and Foundation Recommendations.</li>
						<li><strong>Additional Charges:</strong> A field visit fee will be added to the service charge.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please provide the site location, site plan, borehole locations, number of boreholes, and building details (type, number of stories, and expected loads) prior to the field visit, and ensure that the site is accessible to the drilling equipment. Deeper boring takes longer, so please plan the schedule accordingly.</li>
					</ul>`
			},
			618: {
				title: "Field Dry Density, FDD (ASTM D1556)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						This field test determines the in-place density and dry density of compacted soil using the sand cone method, which is used to check the degree of compaction of fills, subgrades, and embankments.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> No client samples are required. CRTC carries out the test on site, and a small quantity of excavated soil is taken for moisture content determination.</li>
						<li><strong>Field Sample:</strong> Test locations selected at random, with the number of tests set by the project specification or the area and thickness of the fill.</li>
						<li><strong>Key Parameters Reported:</strong> In-Place Wet Density, Field Dry Density (kg/m³), Field Moisture Content (%), Degree of Compaction (%) when the laboratory maximum dry density is available, and Compliance with Project Specifications.</li>
						<li><strong>Additional Charges:</strong> A field visit fee will be added to the service charge.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that the test surface is accessible, level, and free of loose material, and provide the project memo details (location, layer, and date of compaction) and the laboratory Proctor result (maximum dry density and optimum moisture content) for the same soil.</li>
					</ul>`
			},			

			701: {
				title: "Specific Gravity / Density of Bitumen (AASHTO T228)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						This test determines the specific gravity and density of semi-solid bituminous materials using a pycnometer, which is needed to convert between mass and volume in mix design.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> Minimum 1 kg of bitumen in a clean, sealed metal container.</li>
						<li><strong>Field Sample:</strong> About 2 kg of bitumen taken from the drum or tanker, which allows for a retest.</li>
						<li><strong>Key Parameters Reported:</strong> Specific Gravity (at 25°C), Density (kg/m³), and Compliance with Project Specifications.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that submitted samples are representative, free of water and foreign matter, sealed in clean metal containers, and labeled with project memo details (grade, source, and batch number) prior to handover at CRTC testing labs.</li>
					</ul>`
			},
			702: {
				title: "Penetration Test of Bitumen (AASHTO T49)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						This test measures the consistency of bitumen as the depth, in tenths of a millimeter, to which a standard needle penetrates the sample under specified load, time, and temperature.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> Minimum 1 kg of bitumen in a clean, sealed metal container.</li>
						<li><strong>Field Sample:</strong> About 2 kg of bitumen taken from the drum or tanker, which allows for a retest.</li>
						<li><strong>Key Parameters Reported:</strong> Penetration (0.1 mm at 25°C, 100 g, 5 s), Penetration Grade, and Compliance with Project Specifications.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that submitted samples are representative, free of water and foreign matter, sealed in clean metal containers, and labeled with project memo details (grade, source, and batch number) prior to handover at CRTC testing labs.</li>
					</ul>`
			},
			703: {
				title: "Ductility Test of Bitumen (AASHTO T51)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						This test measures the ductility of bitumen as the distance to which a standard briquette can be stretched before the thread breaks, at a specified temperature and rate of pull.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> Minimum 1 kg of bitumen in a clean, sealed metal container.</li>
						<li><strong>Field Sample:</strong> About 2 kg of bitumen taken from the drum or tanker, which allows for a retest.</li>
						<li><strong>Key Parameters Reported:</strong> Ductility (cm at 25°C), and Compliance with Project Specifications.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that submitted samples are representative, free of water and foreign matter, sealed in clean metal containers, and labeled with project memo details (grade, source, and batch number) prior to handover at CRTC testing labs.</li>
					</ul>`
			},
			704: {
				title: "Marshall Stability and Flow Test (AASHTO T245)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						This test determines the Marshall stability and flow of compacted bituminous mix specimens, which are used to evaluate the strength and deformation resistance of asphalt mixes and in mix design.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> Minimum 3 compacted specimens (about 101.6mm diameter x 63.5mm height), or enough loose mix (about 4 to 5 kg per specimen) to prepare them.</li>
						<li><strong>Field Sample:</strong> About 20 kg of loose asphalt mix taken from the plant or paver, which allows for damaged specimens and a retest.</li>
						<li><strong>Key Parameters Reported:</strong> Marshall Stability (kN), Flow (mm), Bulk Density, Air Voids (%), Voids in Mineral Aggregate (%), Voids Filled with Asphalt (%), and Compliance with Project Specifications.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that loose mix is representative, delivered in sealed containers before it cools and hardens, and labeled with project memo details (mix type, bitumen grade, and date and time of sampling) prior to handover at CRTC testing labs.</li>
					</ul>`
			},
			705: {
				title: "Bitumen Content, Using Bitumen Extractor (AASHTO T164)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						This test determines the bitumen content of asphalt mix by solvent extraction, and recovers the aggregate for gradation analysis.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> Minimum 2 kg of loose asphalt mix, or core or cut pieces broken down to a loose state.</li>
						<li><strong>Field Sample:</strong> About 4 kg of loose mix from the plant, paver, or pavement, which allows for a retest.</li>
						<li><strong>Key Parameters Reported:</strong> Bitumen Content (% by mass of mix), and Compliance with Project Specifications.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that submitted samples are representative, kept in sealed containers, and labeled with project memo details (mix type, location, and date of sampling) prior to handover at CRTC testing labs.</li>
					</ul>`
			},
			706: {
				title: "Bitumen Content, Using Automatic Asphalt Mix Analyzer (AASHTO T30)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						This test determines the bitumen content of asphalt mix using an automatic asphalt mix analyzer, which gives a faster result than manual solvent extraction.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> Minimum 2 kg of loose asphalt mix, or core or cut pieces broken down to a loose state.</li>
						<li><strong>Field Sample:</strong> About 4 kg of loose mix from the plant, paver, or pavement, which allows for a retest.</li>
						<li><strong>Key Parameters Reported:</strong> Bitumen Content (% by mass of mix), and Compliance with Project Specifications.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that submitted samples are representative, kept in sealed containers, and labeled with project memo details (mix type, location, and date of sampling) prior to handover at CRTC testing labs.</li>
					</ul>`
			},
			707: {
				title: "Aggregate Gradation of Asphalt Mix (AASHTO T49)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						This test determines the particle-size distribution of the aggregate in an asphalt mix by sieving the aggregate recovered after bitumen extraction.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> Minimum 2 kg of loose asphalt mix, or core or cut pieces broken down to a loose state.</li>
						<li><strong>Field Sample:</strong> About 4 kg of loose mix from the plant, paver, or pavement, which allows for a retest.</li>
						<li><strong>Key Parameters Reported:</strong> Percent Passing Each Sieve, Gradation Curve, and Compliance with Project Specifications (job mix formula limits).</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that submitted samples are representative, kept in sealed containers, and labeled with project memo details (mix type, location, and date of sampling) prior to handover at CRTC testing labs.</li>
					</ul>`
			},
			708: {
				title: "Asphalt Core Thickness Measurement (AASHTO T148)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						This test measures the thickness of asphalt pavement layers from cores cut from the pavement, to check the as-built thickness against the design thickness.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> No client samples are required. CRTC cuts the cores on site and measures them, or measures cores supplied by the client.</li>
						<li><strong>Field Sample:</strong> Core locations selected at random, with the number of cores set by the project specification or the length and area of pavement.</li>
						<li><strong>Key Parameters Reported:</strong> Core Thickness (mm) at Several Positions, Average Thickness per Layer, and Compliance with Project Specifications.</li>
						<li><strong>Additional Charges:</strong> A field visit fee will be added to the service charge.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please provide the project memo details (road name, chainages or locations, and layer types) and ensure that the pavement is accessible and traffic can be managed during coring.</li>
					</ul>`
			},
			709: {
				title: "Compressive Strength Test of Core Cutting Sample (AASHTO T24)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						This test determines the compressive strength of cores that have been cut from a structure or pavement and delivered to the laboratory, after the cores are measured, prepared, and loaded to failure.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> Minimum 3 cores per location or lot, typically 100mm or 150mm in diameter, intact and free of cracks, with a length-to-diameter ratio of at least 1.</li>
						<li><strong>Field Sample:</strong> 4 to 5 cores per location or lot, which allows for damaged cores and a retest.</li>
						<li><strong>Key Parameters Reported:</strong> Core Dimensions, Density, Compressive Strength (MPa), Failure Mode, and Compliance with Project Specifications.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that submitted cores are intact, kept free of damage during transport, and labeled with project memo details (location, depth, and date of cutting) prior to handover at CRTC testing labs.</li>
					</ul>`
			},
			710: {
				title: "In-Situ Core Cutting and Compressive Strength Test (AASHTO T24)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						This service covers cutting cores from the structure or pavement on site, then preparing them and testing them for compressive strength in the laboratory.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> No client samples are required. CRTC cuts the cores on site and tests them in the laboratory.</li>
						<li><strong>Field Sample:</strong> Core locations selected at random or as directed by the engineer, with the number of cores set by the project specification.</li>
						<li><strong>Key Parameters Reported:</strong> Core Dimensions, Density, Compressive Strength (MPa), Failure Mode, and Compliance with Project Specifications.</li>
						<li><strong>Additional Charges:</strong> A field visit fee will be added to the service charge.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please provide the project memo details (location and element to be cored), mark the core locations if required, and ensure that the site is accessible and that water and power are available for the coring machine.</li>
					</ul>`
			},
			711: {
				title: "Pavement Surface Texture Test (AASHTO T333)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						This field test measures the surface texture (macrotexture depth) of pavement, which relates to skid resistance and drainage of the surface.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> No client samples are required. CRTC carries out the test on site.</li>
						<li><strong>Field Sample:</strong> Test locations selected at random along the pavement, with the number of tests set by the project specification or the length of the road.</li>
						<li><strong>Key Parameters Reported:</strong> Mean Texture Depth (mm) at Each Location, Average Texture Depth, and Compliance with Project Specifications.</li>
						<li><strong>Additional Charges:</strong> A field visit fee will be added to the service charge.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please provide the project memo details (road name and chainages) and ensure that the pavement surface is dry, clean, and free of loose material, and that traffic can be managed during testing.</li>
					</ul>`
			},
 
			801: {
				title: "Rebound Hammer Test (ASTM C805)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						This non-destructive field test measures the rebound number of hardened concrete using a spring-driven hammer, which gives an indication of surface hardness and the uniformity of concrete across a structure.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> No client samples are required. CRTC carries out the test on site on the existing structural element.</li>
						<li><strong>Field Sample:</strong> Test locations selected at random or as directed by the engineer, with at least 10 rebound readings taken per test area and the number of areas set by the project specification.</li>
						<li><strong>Key Parameters Reported:</strong> Individual and Average Rebound Number per Test Area, Hammer Orientation, Estimated Surface Hardness, and Compliance with Project Specifications.</li>
						<li><strong>Additional Charges:</strong> A field visit fee will be added to the service charge.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please provide the project memo details (structure, element, and age of concrete) and ensure that the test surfaces are accessible, dry, and free of plaster, paint, and loose material. Please note that the rebound number is an indication only and should not be used as a direct measure of compressive strength.</li>
					</ul>`
			},
			802: {
				title: "Concrete Cover, Max & Min (BS 1881-204)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						This non-destructive field test measures the depth of concrete cover over reinforcement using an electromagnetic cover meter, and reports the maximum and minimum cover found.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> No client samples are required. CRTC carries out the test on site on the existing structural element.</li>
						<li><strong>Field Sample:</strong> Test locations selected at random or as directed by the engineer, with the number of locations set by the project specification or the size of the element.</li>
						<li><strong>Key Parameters Reported:</strong> Maximum Cover (mm), Minimum Cover (mm), Average Cover (mm), and Compliance with Project Specifications.</li>
						<li><strong>Additional Charges:</strong> A field visit fee will be added to the service charge.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please provide the project memo details (structure, element, and required cover) and the reinforcement drawings if available, and ensure that the test surfaces are accessible and free of plaster, paint, and loose material.</li>
					</ul>`
			},
			803: {
				title: "Rebar Location (BS 1881-204)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						This non-destructive field test locates reinforcing bars within hardened concrete and determines their position and spacing using an electromagnetic cover meter or scanner.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> No client samples are required. CRTC carries out the test on site on the existing structural element.</li>
						<li><strong>Field Sample:</strong> Scan areas selected as directed by the engineer, with the number and size of areas set by the project requirement.</li>
						<li><strong>Key Parameters Reported:</strong> Bar Positions, Bar Spacing (mm), Bar Orientation, and Compliance with Drawings or Project Specifications.</li>
						<li><strong>Additional Charges:</strong> A field visit fee will be added to the service charge.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please provide the project memo details (structure and element) and the reinforcement drawings if available, and ensure that the test surfaces are accessible and free of plaster, paint, and loose material. Closely spaced or congested bars, or several layers of reinforcement, may limit the accuracy of the results.</li>
					</ul>`
			},
			804: {
				title: "Rebar Location, Diameter & Concrete Cover (BS 1881-204)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						This non-destructive field test locates reinforcing bars in hardened concrete and estimates their diameter and the concrete cover over them using an electromagnetic cover meter.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> No client samples are required. CRTC carries out the test on site on the existing structural element.</li>
						<li><strong>Field Sample:</strong> Test locations selected at random or as directed by the engineer, with the number and size of areas set by the project specification.</li>
						<li><strong>Key Parameters Reported:</strong> Bar Positions and Spacing (mm), Estimated Bar Diameter (mm), Concrete Cover (mm), and Compliance with Drawings or Project Specifications.</li>
						<li><strong>Additional Charges:</strong> A field visit fee will be added to the service charge.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please provide the project memo details (structure, element, expected bar sizes, and required cover) and the reinforcement drawings if available, and ensure that the test surfaces are accessible and free of plaster, paint, and loose material. Bar diameter is an estimate, and its accuracy depends on the cover depth and bar spacing.</li>
					</ul>`
			},
			805: {
				title: "Pile Integrity Test (ASTM D5882)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						This non-destructive low-strain test checks the structural integrity of deep foundation piles by sending a stress wave down the pile and analyzing the reflected signal to detect cracks, necking, voids, or changes in section.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> No client samples are required. CRTC carries out the test on site on the existing pile.</li>
						<li><strong>Field Sample:</strong> Piles selected by the engineer, with the number of piles set by the project specification.</li>
						<li><strong>Key Parameters Reported:</strong> Pile Length (m), Wave Speed (m/s), Reflection Signals (Velocity vs Time or Depth), Indicated Defects and Their Depths, and Compliance with Project Specifications.</li>
						<li><strong>Additional Charges:</strong> A field visit fee will be added to the service charge.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please provide the project memo details (pile number, length, diameter, and date of casting) and ensure that the pile head is exposed, cleaned of loose concrete and laitance, and accessible. The pile should normally be at least 7 days old before testing.</li>
					</ul>`
			}, 
			901: {
				title: "Admixture pH Value (ASTM E70)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						This test determines the pH of a chemical admixture using a calibrated pH meter and glass electrode, which helps verify the product type and consistency of a batch.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> Minimum 250 ml of liquid admixture in a clean, sealed container.</li>
						<li><strong>Field Sample:</strong> About 1 liter of admixture taken from the drum or tank after thorough mixing, which allows for a retest.</li>
						<li><strong>Key Parameters Reported:</strong> pH Value (at the test temperature) and Compliance with Manufacturer or Project Specifications.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that submitted samples are representative, free of contamination, tightly sealed, and labeled with project memo details (product name, type, manufacturer, and batch number) prior to handover at CRTC testing labs.</li>
					</ul>`
			},
			902: {
				title: "Admixture Temperature (ASTM C1064)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						This test measures the temperature of the admixture sample using a calibrated thermometer, following the temperature measurement practice of ASTM C1064.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> Minimum 250 ml of liquid admixture in a clean container.</li>
						<li><strong>Field Sample:</strong> About 1 liter of admixture taken from the drum or tank, with enough extra for a repeat measurement.</li>
						<li><strong>Key Parameters Reported:</strong> Temperature (°C) and Compliance with Manufacturer or Project Specifications.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that the measurement is taken promptly after sampling, that the sample is protected from sun and heat, and that it is labeled with project memo details (product name, manufacturer, batch number, and time of sampling).</li>
					</ul>`
			},
			903: {
				title: "Admixture Specific Gravity / Density (ASTM C494)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						This test determines the specific gravity and density of a liquid chemical admixture, which is used to convert dosage between mass and volume and to check batch uniformity.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> Minimum 500 ml of liquid admixture in a clean, sealed container.</li>
						<li><strong>Field Sample:</strong> About 1 liter of admixture taken from the drum or tank after thorough mixing, which allows for a retest.</li>
						<li><strong>Key Parameters Reported:</strong> Specific Gravity (at the test temperature), Density (kg/L), and Compliance with Manufacturer or Project Specifications.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that submitted samples are representative, free of contamination and sediment, tightly sealed, and labeled with project memo details (product name, type, manufacturer, and batch number) prior to handover at CRTC testing labs.</li>
					</ul>`
			},
			904: {
				title: "Admixture Dry Materials / Solid Content (ASTM C494)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						This test determines the percentage of dry (solid) material in a liquid admixture by evaporating the water and measuring the residue, which is used to check the concentration and uniformity of the product.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> Minimum 250 ml of liquid admixture in a clean, sealed container.</li>
						<li><strong>Field Sample:</strong> About 1 liter of admixture taken from the drum or tank after thorough mixing, which allows for a retest.</li>
						<li><strong>Key Parameters Reported:</strong> Dry Material / Solid Content (% by mass) and Compliance with Manufacturer or Project Specifications.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that submitted samples are representative, tightly sealed to prevent evaporation, and labeled with project memo details (product name, type, manufacturer, and batch number) prior to handover at CRTC testing labs.</li>
					</ul>`
			},
			905: {
				title: "Admixture Water-Reducing Capability (ASTM C494)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						This test determines how much mixing water a concrete mix with the admixture can save compared with a control mix of the same slump, which indicates the water-reducing performance of the admixture.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> Minimum 5 liters of admixture, together with representative samples of the cement, fine aggregate, and coarse aggregate to be used in the project.</li>
						<li><strong>Field Sample:</strong> Admixture and materials from the same source and lot intended for construction, with extra quantity for control and trial batches.</li>
						<li><strong>Key Parameters Reported:</strong> Water Content of Control and Admixture Mixes, Water Reduction (%), Slump, Air Content, and Compliance with Project Specifications.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that submitted materials are representative, properly sealed, and labeled with project memo details (admixture name, type, dosage, and manufacturer). Please also provide the admixture's technical data sheet and the target slump prior to handover at CRTC testing labs.</li>
					</ul>`
			},
			906: {
				title: "Admixture Slump Retention / Slump Loss",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						This test measures how the slump of concrete containing the admixture changes over time after mixing, which indicates how long the mix stays workable for transport and placement.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> Minimum 5 liters of admixture, together with representative samples of the cement, fine aggregate, and coarse aggregate to be used in the project.</li>
						<li><strong>Field Sample:</strong> Admixture and materials from the same source and lot intended for construction, with extra quantity for repeat batches.</li>
						<li><strong>Key Parameters Reported:</strong> Initial Slump (mm), Slump at Each Time Interval, Slump Loss (mm and %) over Time, and Concrete Temperature.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that submitted materials are representative, properly sealed, and labeled with project memo details (admixture name, type, dosage, and manufacturer). Please also state the time intervals required (for example 30, 60, and 90 minutes) and the target slump prior to handover at CRTC testing labs.</li>
					</ul>`
			},			
			
			1001: {
				title: "Proving Ring Calibration, <100 kN (ASTM E74)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						This service calibrates proving rings with a capacity below 100 kN by applying known forces through a reference force-measuring system and recording the dial or deflection reading at each force step.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> 1 proving ring with a capacity below 100 kN, complete with its dial gauge or deflection indicator, in working condition.</li>
						<li><strong>Field Sample:</strong> Not applicable. Please submit the ring with its accessories (loading caps, dial gauge, and carrying case) and its previous calibration certificate, if available.</li>
						<li><strong>Key Parameters Reported:</strong> Applied Force vs Dial Reading, Calibration Factor or Equation, Repeatability, Resolution, Measurement Uncertainty, and Calibration Date and Next Due Date.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that the ring is clean, undamaged, and free of loose or sticking dial parts, and labeled with its serial number, capacity, and owner details prior to handover at CRTC testing labs.</li>
					</ul>`
			},
			1002: {
				title: "Proving Ring Calibration, 100 kN to 500 kN (ASTM E74)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						This service calibrates proving rings with a capacity from 100 kN to 500 kN by applying known forces through a reference force-measuring system and recording the dial or deflection reading at each force step.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> 1 proving ring with a capacity from 100 kN to 500 kN, complete with its dial gauge or deflection indicator, in working condition.</li>
						<li><strong>Field Sample:</strong> Not applicable. Please submit the ring with its accessories (loading caps, dial gauge, and carrying case) and its previous calibration certificate, if available.</li>
						<li><strong>Key Parameters Reported:</strong> Applied Force vs Dial Reading, Calibration Factor or Equation, Repeatability, Resolution, Measurement Uncertainty, and Calibration Date and Next Due Date.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that the ring is clean, undamaged, and free of loose or sticking dial parts, and labeled with its serial number, capacity, and owner details prior to handover at CRTC testing labs. Rings in this range are heavy; please arrange suitable transport.</li>
					</ul>`
			},
			1003: {
				title: "Proving Ring Calibration, >500 kN (ASTM E74)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						This service calibrates proving rings with a capacity above 500 kN by applying known forces through a reference force-measuring system and recording the dial or deflection reading at each force step.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> 1 proving ring with a capacity above 500 kN, complete with its dial gauge or deflection indicator, in working condition.</li>
						<li><strong>Field Sample:</strong> Not applicable. Please submit the ring with its accessories (loading caps, dial gauge, and carrying case) and its previous calibration certificate, if available.</li>
						<li><strong>Key Parameters Reported:</strong> Applied Force vs Dial Reading, Calibration Factor or Equation, Repeatability, Resolution, Measurement Uncertainty, and Calibration Date and Next Due Date.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that the ring is clean, undamaged, and free of loose or sticking dial parts, and labeled with its serial number, capacity, and owner details prior to handover at CRTC testing labs. Rings in this range are very heavy; please arrange suitable lifting and transport, and contact the lab in advance to confirm that the capacity can be accommodated.</li>
					</ul>`
			},
			1004: {
				title: "Electronic Balance Calibration, up to 10kg (ASTM E898)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						This service calibrates electronic balances with a capacity of up to 10 kg by checking their readings against certified reference masses across the weighing range.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> 1 electronic balance with a capacity of up to 10 kg, in working condition, with its power supply and weighing pan.</li>
						<li><strong>Field Sample:</strong> Not applicable. Please submit the balance with its accessories (draft shield, if fitted) and its previous calibration certificate, if available.</li>
						<li><strong>Key Parameters Reported:</strong> Readings vs Reference Masses (Accuracy), Repeatability, Linearity, Eccentricity (Off-Center Loading) Error, Measurement Uncertainty, and Calibration Date and Next Due Date.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that the balance is clean, undamaged, and switched off during transport, and labeled with its make, model, serial number, capacity, readability, and owner details prior to handover at CRTC testing labs.</li>
					</ul>`
			},
			1005: {
				title: "Rebound Hammer Calibration (ASTM C805)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						This service verifies the performance of a rebound hammer by taking readings on a standard steel test anvil, and checks that the results fall within the accepted range for the instrument.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Sample:</strong> 1 rebound hammer in working condition, with its plunger and body intact.</li>
						<li><strong>Field Sample:</strong> Not applicable. Please submit the hammer with its carrying case, its manual, and its previous calibration record, if available.</li>
						<li><strong>Key Parameters Reported:</strong> Individual and Average Rebound Readings on the Test Anvil, Deviation from the Reference Value, Pass or Fail Against the Accepted Range, and Calibration Date and Next Due Date.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Sample Guidelines:</strong> Please ensure that the hammer is clean, the plunger moves freely, and the instrument has not been dropped or damaged, and labeled with its make, model, serial number, and owner details prior to handover at CRTC testing labs.</li>
					</ul>`
			},

			1101: {
				title: "Structural Analysis and Design of Buildings (BNBC 2020)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						This service covers the structural analysis and design of residential, commercial, industrial and institutional buildings in accordance with the Bangladesh National Building Code (BNBC 2020), including gravity, wind and seismic load effects.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Client Inputs:</strong> Architectural drawings, site location, intended use and number of stories, soil investigation report (if available), and any special client or authority requirements.</li>
						<li><strong>Site Work:</strong> A site visit may be arranged where needed to check site conditions, adjacent structures, and access.</li>
						<li><strong>Deliverables:</strong> Structural Analysis and Design Calculations, Structural Drawings (foundation, column, beam, slab, and detailing), Material and Design Specifications, and a Design Report.</li>
						<li><strong>Consultancy Rates:</strong> For consultancy rates, please contact CRTC.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Guidelines:</strong> Please provide complete and approved architectural drawings and the soil investigation report prior to the start of design, since changes to the layout or loads after design begins may affect the schedule and cost.</li>
					</ul>`
			},
			1102: {
				title: "Building Design Vetting and Structural Safety Assessment (BNBC 2020)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						This service covers independent review (vetting) of the structural design of a building, and assessment of its structural safety, against the requirements of the Bangladesh National Building Code (BNBC 2020).
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Client Inputs:</strong> Structural and architectural drawings, design calculations or analysis model files, soil investigation report, and as-built information and any test reports for existing buildings.</li>
						<li><strong>Site Work:</strong> For existing buildings, a site visit and inspection may be arranged to check the condition and compare the structure with the drawings.</li>
						<li><strong>Deliverables:</strong> Vetting Report with Observations and Comments, Check of Loads, Analysis and Member Design, Structural Safety Assessment, and Recommendations for Revision or Strengthening where needed.</li>
						<li><strong>Consultancy Rates:</strong> For consultancy rates, please contact CRTC.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Guidelines:</strong> Please provide complete drawings and calculations, since missing information may limit the scope of the review. Please also state whether the review is for a new design or for an existing building.</li>
					</ul>`
			},
			1103: {
				title: "Cost Estimation, Rate Analysis and BOQ Preparation (PWD Schedule of Rates)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						This service covers cost estimation, rate analysis and preparation of Bills of Quantities (BOQ) for civil engineering projects, using the PWD Schedule of Rates and current market rates where required.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Client Inputs:</strong> Architectural and structural drawings, specifications, project location, and any preferred rate schedule or special requirements.</li>
						<li><strong>Site Work:</strong> A site visit may be arranged where needed to check site conditions and access, which can affect cost.</li>
						<li><strong>Deliverables:</strong> Quantity Take-Off, Bill of Quantities (BOQ), Rate Analysis for Items, and Cost Estimate Summary.</li>
						<li><strong>Consultancy Rates:</strong> For consultancy rates, please contact CRTC.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Guidelines:</strong> Please provide complete drawings and specifications. Estimates depend on the quality of the information provided and on the schedule of rates and market prices at the time of preparation.</li>
					</ul>`
			},
			1104: {
				title: "Land Surveying: Topographic, Planimetric and Contour Surveys",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						This service covers topographic, planimetric and contour surveys of land using total station and GPS/GNSS equipment, to produce accurate maps and data for planning, design and construction.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Client Inputs:</strong> Site location and boundary, area to be surveyed, type of survey required, existing maps or control points if available, and the required scale and contour interval.</li>
						<li><strong>Site Work:</strong> CRTC carries out the field survey on site, including control establishment, measurement of ground features and levels, and data collection.</li>
						<li><strong>Deliverables:</strong> Survey Drawing (topographic, planimetric or contour map), Coordinates and Levels of Surveyed Points, Control Point Information, and Digital Files where required.</li>
						<li><strong>Consultancy Rates:</strong> For consultancy rates, please contact CRTC.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Guidelines:</strong> Please ensure that the site is accessible to the survey team, boundaries are identified, and permissions are arranged where required. Dense vegetation or restricted access may affect the schedule.</li>
					</ul>`
			},
			1105: {
				title: "Geotechnical Analysis and Design of Shallow and Deep Foundations (BNBC 2020)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						This service covers geotechnical analysis and design of shallow foundations (isolated, combined, and mat) and deep foundations (piles), based on the soil investigation data and the requirements of the Bangladesh National Building Code (BNBC 2020).
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Client Inputs:</strong> Soil investigation report, structural loads and column layout, site plan, and details of nearby structures or any known site constraints.</li>
						<li><strong>Site Work:</strong> A site visit may be arranged where needed to check site conditions. Subsoil exploration is available as a separate service (items 616 and 617).</li>
						<li><strong>Deliverables:</strong> Foundation Type Recommendation, Bearing Capacity and Settlement Analysis, Pile Capacity Analysis (where applicable), Foundation Design Calculations and Drawings, and a Geotechnical Design Report.</li>
						<li><strong>Consultancy Rates:</strong> For consultancy rates, please contact CRTC.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Guidelines:</strong> Please provide a reliable soil investigation report and structural loads prior to the start of design. If no soil data is available, a subsoil exploration will be needed first.</li>
					</ul>`
			},
			1106: {
				title: "Structural Analysis and Design of Bridges, Culverts and Infrastructure Structures",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						This service covers structural analysis and design of bridges, culverts and other infrastructure structures, in accordance with the applicable design codes and standards for the project.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Client Inputs:</strong> Site location and layout, topographic survey, hydrological or flood data, soil investigation report, traffic and loading requirements, and any authority or client requirements.</li>
						<li><strong>Site Work:</strong> A site visit may be arranged where needed to check site and river conditions, access, and existing structures.</li>
						<li><strong>Deliverables:</strong> Structural Analysis and Design Calculations, Design and Detailing Drawings, Material and Design Specifications, and a Design Report.</li>
						<li><strong>Consultancy Rates:</strong> For consultancy rates, please contact CRTC.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Guidelines:</strong> Please provide the survey, hydrological and soil data prior to the start of design, and state the design code and loading standard to be followed if specified by the client or authority.</li>
					</ul>`
			},
			1107: {
				title: "Geometric Design of Roads and Highways",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						This service covers geometric design of roads and highways, including horizontal and vertical alignment, cross-section, junctions, and drainage layout, in accordance with the applicable RHD design standards.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Client Inputs:</strong> Route or site location, topographic survey, traffic data, design speed and road class, and any authority or client requirements.</li>
						<li><strong>Site Work:</strong> A site visit may be arranged where needed to check the route, existing roads, and constraints.</li>
						<li><strong>Deliverables:</strong> Horizontal and Vertical Alignment Design, Typical Cross-Sections, Junction and Intersection Layouts, Design Drawings, and a Design Report.</li>
						<li><strong>Consultancy Rates:</strong> For consultancy rates, please contact CRTC.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Guidelines:</strong> Please provide the topographic survey and traffic information prior to the start of design. If a survey is not available, it can be arranged as a separate service (item 1104).</li>
					</ul>`
			},
			1108: {
				title: "Structural Design and Evaluation of Flexible and Rigid Pavements",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						This service covers structural design of new flexible and rigid pavements, and evaluation of existing pavements, in accordance with the applicable AASHTO and RHD standards.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Client Inputs:</strong> Road location and class, traffic data and projected growth, subgrade soil data (CBR), material properties, and, for evaluation, details of the existing pavement and any distress observed.</li>
						<li><strong>Site Work:</strong> For existing pavements, a site visit and condition survey may be arranged, with testing available through the relevant laboratory and field items.</li>
						<li><strong>Deliverables:</strong> Pavement Layer Thickness Design, Design Calculations, Pavement Evaluation Findings (for existing pavements), Recommendations for Rehabilitation or Overlay where needed, and a Design Report.</li>
						<li><strong>Consultancy Rates:</strong> For consultancy rates, please contact CRTC.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Guidelines:</strong> Please provide traffic and subgrade data prior to the start of design. If subgrade strength data is not available, it can be determined through CBR testing (item 613).</li>
					</ul>`
			},
			1109: {
				title: "Vetting and Independent Review of Structural Designs and Drawings",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						This service covers vetting and independent review of structural designs and drawings for buildings, roads, bridges, culverts, towers and runways, to check compliance with the applicable design codes and standards.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Client Inputs:</strong> Design drawings, calculations or analysis model files, soil investigation and other design data, specifications, and the design codes and standards followed.</li>
						<li><strong>Site Work:</strong> A site visit may be arranged where needed to check site conditions against the design.</li>
						<li><strong>Deliverables:</strong> Vetting Report with Observations and Comments, Check of Design Basis, Loads, Analysis and Member Design, and Recommendations for Revision where needed.</li>
						<li><strong>Consultancy Rates:</strong> For consultancy rates, please contact CRTC.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Guidelines:</strong> Please provide complete drawings and calculations, since missing information may limit the scope of the review. Please also state the type of structure and the design code followed.</li>
					</ul>`
			},
			1110: {
				title: "Structural Health Monitoring (SHM) and Condition Assessment of Existing Structures",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						This service covers structural health monitoring and condition assessment of existing structures, using visual inspection, non-destructive testing, and measurement or monitoring where needed, to judge the condition and remaining capacity of the structure.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Client Inputs:</strong> Available drawings and design or as-built records, age and use of the structure, history of repairs or damage, and the reason for the assessment.</li>
						<li><strong>Site Work:</strong> CRTC carries out the site inspection and testing, which may include visual survey, NDT (items 801-805), core sampling, and sensor-based monitoring where agreed.</li>
						<li><strong>Deliverables:</strong> Condition Survey Findings, Test and Monitoring Results, Assessment of Structural Condition and Safety, and Recommendations for Repair, Strengthening or Further Investigation.</li>
						<li><strong>Consultancy Rates:</strong> For consultancy rates, please contact CRTC.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Guidelines:</strong> Please ensure safe access to all areas to be inspected, and provide any drawings and records available. Please state if long-term monitoring is required, since this needs separate planning.</li>
					</ul>`
			},
			1111: {
				title: "Traffic Studies and Surveys",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						This service covers traffic studies and surveys, including traffic volume, origin-destination, speed, travel time, delay and parking studies, to provide the data needed for planning, design and traffic management.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Client Inputs:</strong> Study area or road sections, type of survey required, survey duration and time periods, and the purpose of the study.</li>
						<li><strong>Site Work:</strong> CRTC carries out the surveys in the field, with trained enumerators and equipment, for the agreed locations and periods.</li>
						<li><strong>Deliverables:</strong> Survey Data and Summary Tables, Traffic Volume and Composition, Speed, Delay and Travel Time Results, Origin-Destination or Parking Findings (as required), and a Survey Report.</li>
						<li><strong>Consultancy Rates:</strong> For consultancy rates, please contact CRTC.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Guidelines:</strong> Please provide the survey locations and time periods required, and arrange any permissions needed for survey work on site. Weather and special events may affect the schedule.</li>
					</ul>`
			},
			1112: {
				title: "Traffic Forecasting and Transportation Demand Analysis",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						This service covers traffic forecasting and transportation demand analysis, to estimate future traffic and travel demand for roads and transport projects over the design or planning period.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Client Inputs:</strong> Project description and study area, existing traffic data or survey results, socio-economic and land-use data, planned developments, and the forecast period required.</li>
						<li><strong>Site Work:</strong> A site visit may be arranged where needed, and traffic surveys are available as a separate service (item 1111).</li>
						<li><strong>Deliverables:</strong> Traffic Forecast for the Required Years, Demand Analysis and Growth Assumptions, Scenario Results (where agreed), and a Forecasting Report.</li>
						<li><strong>Consultancy Rates:</strong> For consultancy rates, please contact CRTC.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Guidelines:</strong> Please provide existing traffic and land-use data prior to the start of the study. Forecast results depend on the quality of the input data and the assumptions made.</li>
					</ul>`
			},
			1113: {
				title: "Transportation Impact Assessment (TIA) of Development Projects",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						This service covers Transportation Impact Assessment (TIA) of development projects, to assess the traffic generated by a development and its effect on the surrounding road network, and to recommend measures to reduce the impact.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Client Inputs:</strong> Development details (type, size, and use), site plan and access arrangement, parking provision, expected opening year, and any authority requirements.</li>
						<li><strong>Site Work:</strong> CRTC carries out site observation and the required traffic surveys on the surrounding road network and at nearby junctions.</li>
						<li><strong>Deliverables:</strong> Trip Generation and Distribution Estimates, Assessment of Impact on Road and Junction Performance, Access and Parking Review, Recommended Mitigation Measures, and a TIA Report.</li>
						<li><strong>Consultancy Rates:</strong> For consultancy rates, please contact CRTC.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Guidelines:</strong> Please provide the development details and site plan, and state any TIA guidelines or scope required by the approving authority prior to the start of the study.</li>
					</ul>`
			},
			1114: {
				title: "Road Accident Investigation, Road Safety Assessment and Road Safety Auditing",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						This service covers investigation of road accidents, assessment of road safety conditions, and road safety audits of existing roads and of designs for new roads, to identify hazards and recommend measures to improve safety.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Client Inputs:</strong> Road section or accident location, accident records or reports, design drawings (for audits of designs), traffic data if available, and the purpose and scope of the study.</li>
						<li><strong>Site Work:</strong> CRTC carries out the site inspection, which may include observation of traffic behavior, road and roadside conditions, signs, markings, lighting and junctions.</li>
						<li><strong>Deliverables:</strong> Accident Analysis and Contributing Factors, Identified Safety Issues and Hazards, Audit Findings, Recommended Safety Improvement Measures, and a Report.</li>
						<li><strong>Consultancy Rates:</strong> For consultancy rates, please contact CRTC.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Guidelines:</strong> Please provide accident records and any available drawings and data prior to the start of the study, and state whether the work is an investigation, an assessment, or an audit of a design stage or an existing road.</li>
					</ul>`
			},
			1115: {
				title: "Professional Training and Capacity Building (CRTC Training Programme)",
				content: `
					<p style="font-size:0.95rem; color:#444; margin-bottom:12px;">
						This service covers professional training and capacity building in traffic studies, traffic management, transportation planning and road safety, delivered through the CRTC training programme.
					</p>
					<ul style="padding-left:20px; font-size:0.9rem; color:#333; line-height:1.7;">
						<li><strong>Client Inputs:</strong> Training topics required, number and background of participants, preferred dates and duration, and the venue or mode of delivery.</li>
						<li><strong>Site Work:</strong> Training is delivered at CRTC or at a venue agreed with the client, and may include field exercises or demonstrations where relevant.</li>
						<li><strong>Deliverables:</strong> Training Sessions, Course Materials, and a Certificate of Participation for attendees.</li>
						<li><strong>Consultancy Rates:</strong> For consultancy rates, please contact CRTC.</li>
						<li><strong>Other Standards:</strong> Additional applicable standards may be used upon the client's request.</li>
						<li><strong>Guidelines:</strong> Please contact CRTC in advance to agree on the course content, schedule, and number of participants. Training can be tailored to the background of the participants.</li>
					</ul>`
			},
		
        };

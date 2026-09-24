// Konten demo untuk pratinjau hasil desain tiap template (bilingual).
export const PREVIEWS = {
    lumina: {
        profile: {
            name: "Sasha Mahendra",
            role: { id: "Desainer Grafis", en: "Graphic Designer" },
            quote: {
                id: "Desain yang baik tidak berteriak — ia mengangkat bicara lewat urutan, ruang, dan selera.",
                en: "Good design never shouts — it speaks through order, space, and taste.",
            },
            img: "https://images.unsplash.com/photo-1611241893603-3c359704e0ee?q=80&w=900&auto=format&fit=crop",
            stats: [
                { n: "8+", l: { id: "Tahun Berkarya", en: "Years of Practice" } },
                { n: "120+", l: { id: "Proyek Selesai", en: "Projects Done" } },
                { n: "6", l: { id: "Penghargaan", en: "Awards" } },
            ],
        },
        principles: {
            label: { id: "Filosofi Desain", en: "Design Philosophy" },
            items: [
                {
                    t: { id: "Kejujuran Bentuk", en: "Form Honesty" },
                    d: {
                        id: "Setiap elemen punya alasan kehadirannya; dekorasi tanpa makna kami tinggalkan.",
                        en: "Every element earns its place; decoration without meaning is left out.",
                    },
                },
                {
                    t: { id: "Hierarki yang Jelas", en: "Clear Hierarchy" },
                    d: {
                        id: "Mata pembaca dituntun dari hal paling penting ke detail pendukung.",
                        en: "The reader's eye is led from what matters most to supporting detail.",
                    },
                },
                {
                    t: { id: "Ruang untuk Bernapas", en: "Room to Breathe" },
                    d: {
                        id: "Kosong adalah elemen aktif — ia memberi makna pada yang penuh.",
                        en: "Emptiness is an active element — it gives meaning to the full.",
                    },
                },
            ],
        },
        works: {
            label: { id: "Proyek Terpilih", en: "Featured Projects" },
            sub: {
                id: "Sebagian karya desain untuk brand lokal dan nasional.",
                en: "A selection of design work for local and national brands.",
            },
            items: [
                {
                    title: { id: "Identitas Kopi Senja", en: "Kopi Senja Identity" },
                    meta: { id: "Identitas Visual", en: "Visual Identity" },
                    year: "2024",
                    img: "https://images.unsplash.com/photo-1611241893603-3c359704e0ee?q=80&w=1400&auto=format&fit=crop",
                },
                {
                    title: { id: "Poster Seri Monospace", en: "Monospace Poster Series" },
                    meta: { id: "Poster", en: "Poster" },
                    year: "2023",
                    img: "https://images.pexels.com/photos/2582933/pexels-photo-2582933.jpeg?auto=compress&cs=tinysrgb&w=1200",
                },
                {
                    title: { id: "Kemasan Rujak Uleg", en: "Rujak Uleg Packaging" },
                    meta: { id: "Kemasan", en: "Packaging" },
                    year: "2024",
                    img: "https://images.pexels.com/photos/30349399/pexels-photo-30349399.jpeg?auto=compress&cs=tinysrgb&w=1200",
                },
            ],
        },
        services: {
            label: { id: "Layanan", en: "Services" },
            items: [
                {
                    t: { id: "Identitas Visual", en: "Brand Identity" },
                    d: { id: "Logo, sistem warna, dan pedoman brand.", en: "Logo, color system, brand guidelines." },
                },
                {
                    t: { id: "Desain Kemasan", en: "Packaging" },
                    d: { id: "Kemasan yang menjual di rak dan di layar.", en: "Packaging that sells on shelves and screens." },
                },
                {
                    t: { id: "Editorial & Cetak", en: "Editorial & Print" },
                    d: { id: "Majalah, buku, dan materi cetak premium.", en: "Magazines, books, premium print collateral." },
                },
                {
                    t: { id: "Ilustrasi Komersial", en: "Commercial Illustration" },
                    d: { id: "Ilustrasi khusus untuk kampanye brand.", en: "Custom illustration for brand campaigns." },
                },
            ],
        },
        awards: {
            label: { id: "Penghargaan", en: "Awards & Recognition" },
            items: [
                { year: "2024", name: { id: "Desain Kemasan Terbaik", en: "Best Packaging Design" }, by: "Indonesia Design Awards" },
                { year: "2023", name: { id: "Emas — Poster Biennale", en: "Gold — Poster Biennale" }, by: "DGI Alliance" },
                { year: "2022", name: { id: "Shortlist Identitas Brand", en: "Brand Identity Shortlist" }, by: "Marks & Craft Society" },
            ],
        },
        testimonials: {
            label: { id: "Testimoni Klien", en: "Client Testimonials" },
            items: [
                {
                    q: {
                        id: "Sasha menerjemahkan kata 'hangat' menjadi identitas yang kami kenali di mana-mana.",
                        en: "Sasha translated the word 'warm' into an identity we recognize everywhere.",
                    },
                    who: "Larissa Ardi",
                    role: { id: "Founder Kopi Senja", en: "Founder, Kopi Senja" },
                },
                {
                    q: {
                        id: "Kerja rapi, cepat, dan selalu satu langkah lebih maju dari brief.",
                        en: "Neat, fast, and always one step ahead of the brief.",
                    },
                    who: "Michael T.",
                    role: { id: "Marketing Lead, Uleg&Co", en: "Marketing Lead, Uleg&Co" },
                },
            ],
        },
        contact: {
            label: { id: "Kontak", en: "Contact" },
            heading: { id: "Mulai Percakapan", en: "Start a Conversation" },
            email: "halo@lumina.studio",
            address: { id: "Yogyakarta, Indonesia — terbuka untuk proyek remote", en: "Yogyakarta, Indonesia — open to remote projects" },
        },
    },

    amplify: {
        profile: {
            name: "Bella Kusuma",
            role: { id: "Growth Marketing", en: "Growth Marketing" },
            quote: {
                id: "Data memberi arah, kreativitas memberi akselerasi — keduanya tidak boleh berjalan sendiri.",
                en: "Data gives direction, creativity gives acceleration — neither should run alone.",
            },
            img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=900&auto=format&fit=crop",
            stats: [
                { n: "3.2x", l: { id: "ROAS Rata-rata", en: "Avg. ROAS" } },
                { n: "40+", l: { id: "Kampanye", en: "Campaigns" } },
                { n: "8", l: { id: "Brand Dikelola", en: "Brands Managed" } },
            ],
        },
        principles: {
            label: { id: "Cara Bekerja", en: "How I Work" },
            items: [
                {
                    t: { id: "Mulai dari Angka", en: "Start with Numbers" },
                    d: { id: "Baseline jelas sebelum satu rupiah iklan dibakar.", en: "A clear baseline before a single ad rupiah is spent." },
                },
                {
                    t: { id: "Eksperimen Cepat", en: "Rapid Experiments" },
                    d: { id: "Hipotesis kecil, eksekusi mingguan, keputusan dari data.", en: "Small hypotheses, weekly execution, data-driven calls." },
                },
                {
                    t: { id: "Kreatif yang Menjual", en: "Creative That Sells" },
                    d: { id: "Konsep menang bila metrik naik, bukan bila keren saja.", en: "A concept wins when metrics rise, not when it merely looks cool." },
                },
            ],
        },
        works: {
            label: { id: "Studi Kasus", en: "Case Studies" },
            sub: { id: "Kampanye pilihan beserta hasil terukurnya.", en: "Selected campaigns with measurable results." },
            items: [
                {
                    title: { id: "Kampanye Ramadhan 2025", en: "Ramadhan Campaign 2025" },
                    meta: { id: "Jangkauan naik 3x", en: "Reach up 3x" },
                    year: "2025",
                    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1400&auto=format&fit=crop",
                },
                {
                    title: { id: "Peluncuran Skincare Lokal", en: "Local Skincare Launch" },
                    meta: { id: "Sold out 3 minggu", en: "Sold out in 3 weeks" },
                    year: "2024",
                    img: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1200&auto=format&fit=crop",
                },
                {
                    title: { id: "Konten Komunitas Kreatif", en: "Creative Community Content" },
                    meta: { id: "10rb pengikut baru", en: "10k new followers" },
                    year: "2024",
                    img: "https://images.pexels.com/photos/39205102/pexels-photo-39205102.jpeg?auto=compress&cs=tinysrgb&w=1200",
                },
            ],
        },
        services: {
            label: { id: "Layanan", en: "Services" },
            items: [
                { t: { id: "Performance Ads", en: "Performance Ads" }, d: { id: "Meta, Google, TikTok.", en: "Meta, Google, TikTok." } },
                { t: { id: "Strategi Social Media", en: "Social Media Strategy" }, d: { id: "Kalender konten & tone of voice.", en: "Content calendar & tone of voice." } },
                { t: { id: "Email & CRM", en: "Email & CRM" }, d: { id: "Retensi dan repeat order.", en: "Retention and repeat orders." } },
                { t: { id: "Analitik & Report", en: "Analytics & Reporting" }, d: { id: "Dashboard mingguan yang jujur.", en: "An honest weekly dashboard." } },
            ],
        },
        awards: {
            label: { id: "Pengakuan", en: "Recognition" },
            items: [
                { year: "2024", name: { id: "Kampanye Efisiensi Terbaik", en: "Best Efficiency Campaign" }, by: "Digital Marketing Forum" },
                { year: "2023", name: { id: "Growth Team of the Year", en: "Growth Team of the Year" }, by: "MarTech Indonesia" },
                { year: "2022", name: { id: "Finalis Social Media Awards", en: "Social Media Awards Finalist" }, by: "SMA Guild" },
            ],
        },
        testimonials: {
            label: { id: "Kata Klien", en: "Client Words" },
            items: [
                {
                    q: { id: "Bella mengubah iklan kami dari bocor tanpa arah menjadi mesin terukur.", en: "Bella turned our ads from a leaky guesswork into a measurable engine." },
                    who: "Rizal P.",
                    role: { id: "CEO, Skincare Lokal", en: "CEO, Local Skincare Brand" },
                },
                {
                    q: { id: "Report-nya detail, jujur, dan selalu ada rencana minggu depan.", en: "The reports are detailed, honest, and always come with a next-week plan." },
                    who: "Amanda S.",
                    role: { id: "Brand Manager", en: "Brand Manager" },
                },
            ],
        },
        contact: {
            label: { id: "Kontak", en: "Contact" },
            heading: { id: "Diskusikan Target Pertumbuhanmu", en: "Let's Talk Growth Targets" },
            email: "bella@amplify.co",
            address: { id: "Jakarta, Indonesia — remote friendly", en: "Jakarta, Indonesia — remote friendly" },
        },
    },

    blueprint: {
        profile: {
            name: "Aris Wicaksono",
            role: { id: "Insinyur Struktur & Perancang", en: "Structural Engineer & Designer" },
            quote: {
                id: "Struktur yang baik tidak meminta perhatian — ia bertahan, diam, dan melayani generasi.",
                en: "A good structure never asks for attention — it endures, silent, serving generations.",
            },
            img: "https://images.pexels.com/photos/8482551/pexels-photo-8482551.jpeg?auto=compress&cs=tinysrgb&w=900",
            stats: [
                { n: "12+", l: { id: "Penghargaan", en: "Awards" } },
                { n: "40+", l: { id: "Proyek", en: "Projects" } },
                { n: "15+", l: { id: "Tahun Pengalaman", en: "Years of Experience" } },
            ],
        },
        principles: {
            label: { id: "Filosofi Rancang", en: "Design Philosophy" },
            items: [
                {
                    t: { id: "Kejujuran Struktur", en: "Structural Honesty" },
                    d: { id: "Beban harus mengalir jujur; material tampil apa adanya.", en: "Loads must flow honestly; materials show as they are." },
                },
                {
                    t: { id: "Ketelitian Rinci", en: "Mindful Detail" },
                    d: { id: "Sambungan kecil dirancang sebesar bentang utamanya.", en: "The smallest joint is designed as carefully as the main span." },
                },
                {
                    t: { id: "Rasa Tempat", en: "Sense of Place" },
                    d: { id: "Struktur tunduk pada lanskap, bukan sebaliknya.", en: "The structure defers to the landscape, never the reverse." },
                },
            ],
        },
        works: {
            label: { id: "Proyek Utama", en: "Featured Projects" },
            sub: {
                id: "Karya terpilih dari praktik struktur di berbagai Indonesia.",
                en: "Selected work from structural practice across Indonesia.",
            },
            items: [
                {
                    title: { id: "Balai Harmoni Tropis", en: "Tropical Harmony Hall" },
                    meta: { id: "Struktur + Arsitektur", en: "Structure + Architecture" },
                    year: "2023",
                    img: "https://images.pexels.com/photos/8470842/pexels-photo-8470842.jpeg?auto=compress&cs=tinysrgb&w=1400",
                },
                {
                    title: { id: "Rumah Kayu Kalimantan", en: "Kalimantan Timber House" },
                    meta: { id: "Struktur Kayu", en: "Timber Structure" },
                    year: "2022",
                    img: "https://images.pexels.com/photos/8482551/pexels-photo-8482551.jpeg?auto=compress&cs=tinysrgb&w=1200",
                },
                {
                    title: { id: "Studi Jembatan Kali Progo", en: "Kali Progo Bridge Study" },
                    meta: { id: "Rekayasa Bentang", en: "Span Engineering" },
                    year: "2024",
                    img: "https://images.unsplash.com/photo-1768677903496-becc4be07258?q=80&w=1200&auto=format&fit=crop",
                },
            ],
        },
        services: {
            label: { id: "Layanan", en: "Services" },
            items: [
                { t: { id: "Perencanaan Struktur", en: "Structural Design" }, d: { id: "Beton, baja, dan kayu.", en: "Concrete, steel, and timber." } },
                { t: { id: "Supervisi Konstruksi", en: "Construction Supervision" }, d: { id: "Pengawalan kualitas di lapangan.", en: "On-site quality guardianship." } },
                { t: { id: "Audit Struktur", en: "Structural Audit" }, d: { id: "Investigasi & rekomendasi perkuatan.", en: "Investigation & strengthening advice." } },
                { t: { id: "Manajemen Proyek", en: "Project Management" }, d: { id: "Jadwal, biaya, dan mutu terkontrol.", en: "Schedule, cost, and quality in check." } },
            ],
        },
        awards: {
            label: { id: "Penghargaan", en: "Awards & Honors" },
            items: [
                { year: "2024", name: { id: "Excellence in Structural Engineering", en: "Excellence in Structural Engineering" }, by: "Indonesian Society of Engineers" },
                { year: "2022", name: { id: "Best Safety Practice", en: "Best Safety Practice" }, by: "Wijaya Karya Group" },
                { year: "2021", name: { id: "Sertifikasi Bangunan Hijau", en: "Green Building Certification" }, by: "GBC Indonesia" },
            ],
        },
        testimonials: {
            label: { id: "Testimoni Klien", en: "Client Testimonials" },
            items: [
                {
                    q: { id: "Aris menjaga struktur kami tetap tenang di atas gempa dan pasar yang bergejolak.", en: "Aris kept our structure calm through earthquakes and volatile markets alike." },
                    who: "Larissa Ardi",
                    role: { id: "Direktur Pengembang", en: "Director, Property Developer" },
                },
                {
                    q: { id: "Dokumen teknisnya rapi seperti karya tulis, presisi seperti jam.", en: "His technical documents read like prose and tick like a watch." },
                    who: "Maria S.",
                    role: { id: "Konsultan Utama", en: "Lead Consultant" },
                },
            ],
        },
        contact: {
            label: { id: "Kontak", en: "Contact" },
            heading: { id: "Mulai Sebuah Dialog", en: "Initiate a Dialogue" },
            email: "studio@arisw.studio",
            address: { id: "Yogyakarta, Indonesia — 08:12 WIB, 09° S", en: "Yogyakarta, Indonesia — 08:12 WIB, 09° S" },
        },
    },

    aperture: {
        profile: {
            name: "Danu Rahardjo",
            role: { id: "Fotografer", en: "Photographer" },
            quote: {
                id: "Saya tidak mengambil gambar — saya menunggu momen membiarkan dirinya direkam.",
                en: "I don't take pictures — I wait for the moment to allow itself to be recorded.",
            },
            img: "https://images.pexels.com/photos/16135635/pexels-photo-16135635.jpeg?auto=compress&cs=tinysrgb&w=900",
            stats: [
                { n: "10", l: { id: "Tahun di Balik Lensa", en: "Years Behind the Lens" } },
                { n: "300+", l: { id: "Sesi Foto", en: "Sessions" } },
                { n: "18", l: { id: "Publikasi", en: "Publications" } },
            ],
        },
        principles: {
            label: { id: "Pendekatan", en: "Approach" },
            items: [
                {
                    t: { id: "Cahaya Dulu", en: "Light First" },
                    d: { id: "Sebelum pose, sebelum konsep — cahaya yang jujur.", en: "Before pose, before concept — honest light." },
                },
                {
                    t: { id: "Ketika Tak Diganggu", en: "Uninterrupted" },
                    d: { id: "Momen terbaik datang saat subjek lupa ada kamera.", en: "The best moments arrive when subjects forget the camera." },
                },
                {
                    t: { id: "Hitam yang Tenang", en: "A Quiet Black" },
                    d: { id: "Kontras melayani suasana, bukan sekadar tajam.", en: "Contrast serves mood, not mere sharpness." },
                },
            ],
        },
        works: {
            label: { id: "Galeri Terpilih", en: "Selected Gallery" },
            sub: { id: "Potret, komersial, dan momen di antaranya.", en: "Portraits, commercial work, and the moments between." },
            items: [
                {
                    title: { id: "Seri Potret Studio", en: "Studio Portrait Series" },
                    meta: { id: "Potret", en: "Portrait" },
                    year: "2024",
                    img: "https://images.pexels.com/photos/16135635/pexels-photo-16135635.jpeg?auto=compress&cs=tinysrgb&w=1400",
                },
                {
                    title: { id: "Editorial Mode Pasar", en: "Market Fashion Editorial" },
                    meta: { id: "Editorial", en: "Editorial" },
                    year: "2023",
                    img: "https://images.unsplash.com/photo-1621024994278-e409544f4085?q=80&w=1200&auto=format&fit=crop",
                },
                {
                    title: { id: "Lampu Studi yang Ramah", en: "The Kind Studio Light" },
                    meta: { id: "Komersial", en: "Commercial" },
                    year: "2024",
                    img: "https://images.unsplash.com/photo-1648662199460-34b7597ba771?q=80&w=1200&auto=format&fit=crop",
                },
            ],
        },
        services: {
            label: { id: "Layanan", en: "Services" },
            items: [
                { t: { id: "Potret Editorial", en: "Editorial Portraits" }, d: { id: "Untuk majalah dan profil personal.", en: "For magazines and personal profiles." } },
                { t: { id: "Produk & Komersial", en: "Product & Commercial" }, d: { id: "Katalog dan kampanye brand.", en: "Catalogs and brand campaigns." } },
                { t: { id: "Dokumentasi Acara", en: "Event Documentation" }, d: { id: "Dari pernikahan hingga peluncuran.", en: "From weddings to launches." } },
                { t: { id: "Cetak Kolektor", en: "Collector Prints" }, d: { id: "Cetak terbatas, bernomor, ditandatangani.", en: "Limited, numbered, signed prints." } },
            ],
        },
        awards: {
            label: { id: "Penghargaan", en: "Awards" },
            items: [
                { year: "2024", name: { id: "Fotografer Potret Tahun Ini", en: "Portrait Photographer of the Year" }, by: "Lens Culture SEA" },
                { year: "2023", name: { id: "Emas — Kategori Komersial", en: "Gold — Commercial Category" }, by: "AdPhoto Awards" },
                { year: "2022", name: { id: "Pameran Solo 'Diam'", en: "'Silence' Solo Exhibition" }, by: "Galeri Cempaka" },
            ],
        },
        testimonials: {
            label: { id: "Testimoni", en: "Testimonials" },
            items: [
                {
                    q: { id: "Danu menangkap hal yang tidak kami minta — dan justru itu yang kami butuhkan.", en: "Danu captured what we never asked for — and it was exactly what we needed." },
                    who: "Larissa Ardi",
                    role: { id: "Editor Majalah", en: "Magazine Editor" },
                },
                {
                    q: { id: "Tenang, cepat, dan hasilnya membuat tim kami diam beberapa detik.", en: "Calm, quick, and the results made our team go quiet for a few seconds." },
                    who: "Michael T.",
                    role: { id: "Brand Director", en: "Brand Director" },
                },
            ],
        },
        contact: {
            label: { id: "Kontak", en: "Contact" },
            heading: { id: "Pesan Sesi", en: "Book a Session" },
            email: "studio@danurahardjo.com",
            address: { id: "Bali / Jakarta — siap terbang", en: "Bali / Jakarta — available to travel" },
        },
    },

    deploy: {
        profile: {
            name: "Rizky Ananda",
            role: { id: "Web Developer", en: "Web Developer" },
            quote: {
                id: "Kode yang baik seperti humor yang baik: tidak perlu dijelaskan.",
                en: "Good code is like good humor: it needs no explanation.",
            },
            img: "https://images.pexels.com/photos/6424583/pexels-photo-6424583.jpeg?auto=compress&cs=tinysrgb&w=900",
            stats: [
                { n: "24", l: { id: "Repo Publik", en: "Public Repos" } },
                { n: "9", l: { id: "Produk Diluncurkan", en: "Products Shipped" } },
                { n: "99.9%", l: { id: "Uptime Terjaga", en: "Uptime Maintained" } },
            ],
        },
        principles: {
            label: { id: "Prinsip", en: "Principles" },
            items: [
                {
                    t: { id: "Sederhana Dulu", en: "Simple First" },
                    d: { id: "Abstraksi hanya saat pengulangan benar-benar terjadi.", en: "Abstract only when repetition truly happens." },
                },
                {
                    t: { id: "Ukur, Jangan Duga", en: "Measure, Don't Guess" },
                    d: { id: "Profil sebelum optimasi; log sebelum kesimpulan.", en: "Profile before optimizing; log before concluding." },
                },
                {
                    t: { id: "Pengguna di Atas Sistem", en: "Users Above Systems" },
                    d: { id: "Arsitektur elegan yang lambat tetap gagal.", en: "Elegant architecture that is slow is still failure." },
                },
            ],
        },
        works: {
            label: { id: "Proyek Terpilih", en: "Featured Repos" },
            sub: { id: "Produk dan open source yang dirawat hidup.", en: "Products and open source, kept alive." },
            items: [
                {
                    title: { id: "Dashboard Analitik Real-time", en: "Real-time Analytics Dashboard" },
                    meta: { id: "React · WebSocket", en: "React · WebSocket" },
                    year: "2024",
                    img: "https://images.pexels.com/photos/6424583/pexels-photo-6424583.jpeg?auto=compress&cs=tinysrgb&w=1400",
                },
                {
                    title: { id: "E-commerce PWA", en: "E-commerce PWA" },
                    meta: { id: "Next.js · Stripe", en: "Next.js · Stripe" },
                    year: "2023",
                    img: "https://images.pexels.com/photos/14553730/pexels-photo-14553730.jpeg?auto=compress&cs=tinysrgb&w=1200",
                },
                {
                    title: { id: "API Kasir UMKM", en: "UMKM POS API" },
                    meta: { id: "FastAPI · Postgres", en: "FastAPI · Postgres" },
                    year: "2024",
                    img: "https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?q=80&w=1200&auto=format&fit=crop",
                },
            ],
        },
        services: {
            label: { id: "Layanan", en: "Services" },
            items: [
                { t: { id: "Pengembangan Frontend", en: "Frontend Development" }, d: { id: "React, aksesibilitas, performa.", en: "React, accessibility, performance." } },
                { t: { id: "Backend & API", en: "Backend & APIs" }, d: { id: "Desain endpoint yang jujur & cepat.", en: "Honest, fast endpoint design." } },
                { t: { id: "DevOps & Deployment", en: "DevOps & Deployment" }, d: { id: "CI/CD dan monitoring.", en: "CI/CD and monitoring." } },
                { t: { id: "Optimasi Performa", en: "Performance Optimization" }, d: { id: "Core Web Vitals hijau.", en: "Green Core Web Vitals." } },
            ],
        },
        awards: {
            label: { id: "Pengakuan", en: "Recognition" },
            items: [
                { year: "2024", name: { id: "Kontributor Open Source Terbaik", en: "Top Open Source Contributor" }, by: "GitHub Stars ID" },
                { year: "2023", name: { id: "Juara Hackathon Nasional", en: "National Hackathon Winner" }, by: "DevSummit" },
                { year: "2022", name: { id: "Sertifikasi Cloud Profesional", en: "Professional Cloud Certification" }, by: "Cloud Alliance" },
            ],
        },
        testimonials: {
            label: { id: "Testimoni", en: "Testimonials" },
            items: [
                {
                    q: { id: "Rizky merapikan warisan kode kami dalam hitungan minggu, bukan kuartal.", en: "Rizky untangled our legacy code in weeks, not quarters." },
                    who: "Larissa Ardi",
                    role: { id: "CTO, Startup Fintech", en: "CTO, Fintech Startup" },
                },
                {
                    q: { id: "Dokumentasinya membuat developer baru produktif di hari pertama.", en: "His docs made new developers productive on day one." },
                    who: "Michael T.",
                    role: { id: "Engineering Manager", en: "Engineering Manager" },
                },
            ],
        },
        contact: {
            label: { id: "Kontak", en: "Contact" },
            heading: { id: "$ kirim --pesan", en: "$ send --message" },
            email: "rizky@deploy.dev",
            address: { id: "Bandung, Indonesia — UTC+7", en: "Bandung, Indonesia — UTC+7" },
        },
    },

    etalase: {
        profile: {
            name: "Dapur Nusantara",
            role: { id: "Katering & Frozen Food", en: "Catering & Frozen Food" },
            quote: {
                id: "Setiap pesanan dimasak seperti untuk keluarga sendiri — karena pelanggan itu keluarga.",
                en: "Every order is cooked like it's for our own family — because customers are family.",
            },
            img: "https://images.pexels.com/photos/36982086/pexels-photo-36982086.jpeg?auto=compress&cs=tinysrgb&w=900",
            stats: [
                { n: "5", l: { id: "Tahun Berdiri", en: "Years Running" } },
                { n: "20+", l: { id: "Menu", en: "Menu Items" } },
                { n: "1.000+", l: { id: "Pesanan Selesai", en: "Orders Served" } },
            ],
        },
        principles: {
            label: { id: "Dapur Kami", en: "Our Kitchen" },
            items: [
                {
                    t: { id: "Bahan Segar Harian", en: "Fresh Daily Ingredients" },
                    d: { id: "Belanja pagi dari pasar tradisional terdekat.", en: "Sourced each morning from the nearest traditional market." },
                },
                {
                    t: { id: "Tanpa Pengawet", en: "No Preservatives" },
                    d: { id: "Rasa asli dijaga lewat proses, bukan bahan kimia.", en: "Real flavor kept through process, not chemicals." },
                },
                {
                    t: { id: "Antar Sepadan", en: "Same-Day Delivery" },
                    d: { id: "Pesanan sebelum jam 10 tiba hari itu juga.", en: "Orders before 10am arrive the same day." },
                },
            ],
        },
        works: {
            label: { id: "Menu Andalan", en: "Signature Menu" },
            sub: { id: "Palung paling sering dipesan pelanggan setia kami.", en: "The most-ordered favorites from our regulars." },
            items: [
                {
                    title: { id: "Gudeg Kendil 1 kg", en: "Gudeg Kendil 1 kg" },
                    meta: { id: "Rp85.000 · frozen", en: "Rp85.000 · frozen" },
                    year: "Best seller",
                    img: "https://images.pexels.com/photos/36982086/pexels-photo-36982086.jpeg?auto=compress&cs=tinysrgb&w=1400",
                },
                {
                    title: { id: "Sate Ayam Bakar 20 tusuk", en: "Grilled Chicken Satay x20" },
                    meta: { id: "Rp120.000 · fresh", en: "Rp120.000 · fresh" },
                    year: "Favorit",
                    img: "https://images.pexels.com/photos/30588841/pexels-photo-30588841.jpeg?auto=compress&cs=tinysrgb&w=1200",
                },
                {
                    title: { id: "Sambal Nusantara 5 botol", en: "Nusantara Sambal 5 jars" },
                    meta: { id: "Rp150.000 · paket", en: "Rp150.000 · bundle" },
                    year: "Oleh-oleh",
                    img: "https://images.unsplash.com/photo-1568622998407-0084ebf482b0?q=80&w=1200&auto=format&fit=crop",
                },
            ],
        },
        services: {
            label: { id: "Pelayanan", en: "What We Serve" },
            items: [
                { t: { id: "Katering Acara", en: "Event Catering" }, d: { id: "Dari syukuran sampai rapat besar.", en: "From thanksgiving feasts to big meetings." } },
                { t: { id: "Frozen Food", en: "Frozen Food" }, d: { id: "Tahan 1 bulan, tinggal kukus.", en: "Keeps 1 month, just re-steam." } },
                { t: { id: "Langganan Makan", en: "Meal Subscription" }, d: { id: "Paket mingguan untuk kantor & keluarga.", en: "Weekly plans for offices & families." } },
                { t: { id: "Hampers & Oleh-oleh", en: "Hampers & Gifts" }, d: { id: "Kemasan rapi, siap diberikan.", en: "Neat packaging, ready to gift." } },
            ],
        },
        awards: {
            label: { id: "Kepercayaan", en: "Trust & Recognition" },
            items: [
                { year: "2024", name: { id: "UMKM Kuliner Pilihan", en: "Chosen Culinary UMKM" }, by: "Dinas Koperasi Kota" },
                { year: "2023", name: { id: "Sertifikat Keamanan Pangan", en: "Food Safety Certificate" }, by: "BPOM Terdaftar" },
                { year: "2022", name: { id: "Rating 4,9 dari 1.000+ ulasan", en: "4.9 rating from 1,000+ reviews" }, by: "Google Maps" },
            ],
        },
        testimonials: {
            label: { id: "Kata Pelanggan", en: "Customer Words" },
            items: [
                {
                    q: { id: "Rasanya konsisten dari tahun ke tahun — kantor kami langganan tiap pekan.", en: "The taste stays consistent year after year — our office orders weekly." },
                    who: "Larissa Ardi",
                    role: { id: "Office Manager", en: "Office Manager" },
                },
                {
                    q: { id: "Frozen-nya praktis, anak-anak suka, harga masuk akal.", en: "The frozen packs are practical, the kids love them, prices are fair." },
                    who: "Maria S.",
                    role: { id: "Ibu Dua Anak", en: "Mother of Two" },
                },
            ],
        },
        contact: {
            label: { id: "Kontak", en: "Contact" },
            heading: { id: "Pesan Sekarang", en: "Order Now" },
            email: "pesanan@dapurnusantara.id",
            address: { id: "Jl. Kemerdekaan No. 12, Yogyakarta — Buka 08.00-20.00", en: "12 Kemerdekaan St., Yogyakarta — Open 08.00-20.00" },
        },
    },
};

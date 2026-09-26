export const BRAND = {
    name: "show.porto",
    tagline: "Don't just tell. Show it.",
    domain: "show.porto",
    waNumber: "085591197624",
    wa: "https://wa.me/6285591197624",
    email: "showporto49@gmail.com",
    repo: "https://github.com/show-porto/show-porto",
};

export const MARQUEE_ITEMS = [
    { id: "Desainer Grafis", en: "Graphic Designer" },
    { id: "Marketing", en: "Marketing" },
    { id: "Teknik Sipil", en: "Civil Engineering" },
    { id: "Fotografer", en: "Photographer" },
    { id: "Web Developer", en: "Web Developer" },
    { id: "MUA", en: "Makeup Artist" },
    { id: "Sewa Kebaya", en: "Kebaya Rental" },
    { id: "Toko Kain", en: "Fabric Store" },
    { id: "Kuliner", en: "Food Business" },
    { id: "Laundry", en: "Laundry" },
];

export const TEMPLATES = [
    {
        id: "lumina",
        name: "Lumina",
        domain: "lumina.show.porto",
        field: { id: "Desainer Grafis", en: "Graphic Designer" },
        styleName: { id: "Warm cream editorial", en: "Warm cream editorial" },
        desc: {
            id: "Editorial hangat bernuansa kertas krem: tipografi grotesque tegas, garis tipis, dan aksen merah bata.",
            en: "A warm cream-paper editorial: bold grotesque type, hairline rules, and a brick-red accent.",
        },
        img: "https://images.unsplash.com/photo-1611241893603-3c359704e0ee?q=80&w=1200&auto=format&fit=crop",
        tags: [
            { id: "Galeri Masonry", en: "Masonry Gallery" },
            { id: "Studi Kasus", en: "Case Studies" },
            { id: "Tipografi Besar", en: "Big Type" },
        ],
        theme: {
            bg: "#f2efe8",
            panel: "#e9e5da",
            text: "#161511",
            muted: "#75705f",
            accent: "#d5482b",
            line: "rgba(22,21,17,0.14)",
            display: "'Archivo', sans-serif",
            body: "'Archivo', sans-serif",
            displayWeight: 650,
            radius: "2px",
            case: "none",
            works: "grid",
        },
    },
    {
        id: "amplify",
        name: "Amplify",
        domain: "amplify.show.porto",
        field: { id: "Marketing", en: "Marketing" },
        styleName: { id: "Deep moss with lime voltage", en: "Deep moss with lime voltage" },
        desc: {
            id: "Gelap lumut hijau dengan aksen lime bertegangan tinggi: kartu bento membulat dan angka metrik besar.",
            en: "Deep moss green with high-voltage lime accents: rounded bento cards and big metric numbers.",
        },
        img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop",
        tags: [
            { id: "Case Study", en: "Case Studies" },
            { id: "Metrik", en: "Metrics" },
            { id: "Kartu Bento", en: "Bento Cards" },
        ],
        theme: {
            bg: "#101408",
            panel: "#1a2110",
            text: "#f0f5e4",
            muted: "#9aa383",
            accent: "#d8ff3e",
            line: "rgba(240,245,228,0.12)",
            display: "'Archivo', sans-serif",
            body: "'Archivo', sans-serif",
            displayWeight: 800,
            radius: "20px",
            case: "none",
            works: "bento",
        },
    },
    {
        id: "blueprint",
        name: "Blueprint",
        domain: "blueprint.show.porto",
        field: { id: "Teknik Sipil", en: "Civil Engineering" },
        styleName: { id: "Midnight atelier serif", en: "Midnight atelier serif" },
        desc: {
            id: "Kegelapan malam dengan serif elegan dan aksen kuningan: nomor bab, tabel penghargaan, nama raksasa di footer.",
            en: "Midnight dark with an elegant serif and brass accents: chapter numbers, awards table, giant footer name.",
        },
        img: "https://images.pexels.com/photos/8470842/pexels-photo-8470842.jpeg?auto=compress&cs=tinysrgb&w=1200",
        tags: [
            { id: "Dokumen Proyek", en: "Project Documents" },
            { id: "Sertifikasi", en: "Certifications" },
            { id: "Serif Elegan", en: "Elegant Serif" },
        ],
        theme: {
            bg: "#12171d",
            panel: "#1a222b",
            text: "#e9e4d6",
            muted: "#7e8893",
            accent: "#c8a469",
            line: "rgba(233,228,214,0.12)",
            display: "'Fraunces', serif",
            body: "'Archivo', sans-serif",
            displayWeight: 330,
            radius: "4px",
            case: "none",
            works: "grid",
        },
    },
    {
        id: "aperture",
        name: "Aperture",
        domain: "aperture.show.porto",
        field: { id: "Fotografer", en: "Photographer" },
        styleName: { id: "White gallery wall", en: "White gallery wall" },
        desc: {
            id: "Dinding galeri putih: ruang kosong luas, huruf tipis ber-tracking lebar, foto berjajar seperti pameran.",
            en: "A white gallery wall: generous whitespace, thin wide-tracked type, photos hung like an exhibition.",
        },
        img: "https://images.unsplash.com/photo-1621024994278-e409544f4085?q=80&w=1200&auto=format&fit=crop",
        tags: [
            { id: "Lightbox", en: "Lightbox" },
            { id: "Editorial", en: "Editorial" },
            { id: "Booking Sesi", en: "Session Booking" },
        ],
        theme: {
            bg: "#ffffff",
            panel: "#f4f4f2",
            text: "#0d0d0d",
            muted: "#8c8c8c",
            accent: "#0d0d0d",
            line: "rgba(0,0,0,0.12)",
            display: "'Archivo', sans-serif",
            body: "'Archivo', sans-serif",
            displayWeight: 250,
            radius: "0px",
            case: "upper",
            tracking: "0.01em",
            works: "stack",
        },
    },
    {
        id: "deploy",
        name: "Deploy",
        domain: "deploy.show.porto",
        field: { id: "Web Developer", en: "Web Developer" },
        styleName: { id: "Typeset terminal on black paper", en: "Typeset terminal on black paper" },
        desc: {
            id: "Terminal mono di atas kertas hitam: prompt hijau, komentar kode, dan commit log sebagai portofolio.",
            en: "A mono terminal on black paper: green prompts, code comments, and a commit log as portfolio.",
        },
        img: "https://images.pexels.com/photos/6424583/pexels-photo-6424583.jpeg?auto=compress&cs=tinysrgb&w=1200",
        tags: [
            { id: "Repo GitHub", en: "GitHub Repos" },
            { id: "Tech Stack", en: "Tech Stack" },
            { id: "Demo Langsung", en: "Live Demos" },
        ],
        theme: {
            bg: "#0a100c",
            panel: "#111a14",
            text: "#d9f6df",
            muted: "#6f9379",
            accent: "#55e67b",
            line: "rgba(85,230,123,0.18)",
            display: "'JetBrains Mono', monospace",
            body: "'JetBrains Mono', monospace",
            displayWeight: 500,
            radius: "0px",
            case: "none",
            works: "grid",
        },
    },
];

export const DEMO_PROFILE = {
    name: "Raka Pratama",
    role: {
        id: "Teknik Sipil · Yogyakarta",
        en: "Civil Engineering · Yogyakarta",
    },
};

export const DEMO_PROJECTS = [
    {
        id: 1,
        title: {
            id: "Identitas Visual Kopi Senja",
            en: "Kopi Senja Visual Identity",
        },
        type: "image",
        meta: { id: "Gambar · Branding", en: "Image · Branding" },
        desc: {
            id: "Logo, kemasan, dan sistem visual untuk kedai kopi lokal yang tumbuh dari 1 menjadi 4 cabang.",
            en: "Logo, packaging, and visual system for a local coffee shop that grew from 1 to 4 branches.",
        },
        img: "https://images.unsplash.com/photo-1611241893603-3c359704e0ee?q=80&w=1600&auto=format&fit=crop",
        links: [
            {
                label: { id: "Buka Gambar", en: "Open Image" },
                href: "https://images.unsplash.com/photo-1611241893603-3c359704e0ee?q=100&w=2000&auto=format&fit=crop",
            },
        ],
    },
    {
        id: 2,
        title: {
            id: "Laporan Struktur Jembatan Kali Progo",
            en: "Kali Progo Bridge Structure Report",
        },
        type: "pdf",
        meta: { id: "Dokumen · PDF", en: "Document · PDF" },
        desc: {
            id: "Perencanaan struktur dan analisis beban lengkap dengan gambar teknik, siap dibuka langsung dari kartu proyek.",
            en: "Structural planning and load analysis with technical drawings, openable straight from the project card.",
        },
        img: "https://images.pexels.com/photos/8470842/pexels-photo-8470842.jpeg?auto=compress&cs=tinysrgb&w=1600",
        links: [
            {
                label: { id: "Buka PDF", en: "Open PDF" },
                href: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
            },
        ],
    },
    {
        id: 3,
        title: {
            id: "Kampanye Digital Ramadhan 2025",
            en: "Ramadhan 2025 Digital Campaign",
        },
        type: "video",
        meta: { id: "Video · Marketing", en: "Video · Marketing" },
        desc: {
            id: "Video kampanye 30 detik dan breakdown metrik: jangkauan naik 3x dalam 4 minggu kampanye.",
            en: "A 30-second campaign video and metric breakdown: reach up 3x within 4 weeks.",
        },
        img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop",
        links: [
            {
                label: { id: "Tonton Video", en: "Watch Video" },
                href: "https://youtube.com",
            },
        ],
    },
    {
        id: 4,
        title: {
            id: "Aplikasi Kasir UMKM (Open Source)",
            en: "UMKM POS App (Open Source)",
        },
        type: "github",
        meta: { id: "Repo · GitHub", en: "Repo · GitHub" },
        desc: {
            id: "Aplikasi kasir ringan untuk UMKM, dibangun dengan React dan terdokumentasi rapi di GitHub.",
            en: "A lightweight POS app for small businesses, built with React and cleanly documented on GitHub.",
        },
        img: "https://images.pexels.com/photos/6424583/pexels-photo-6424583.jpeg?auto=compress&cs=tinysrgb&w=1600",
        links: [
            {
                label: { id: "Lihat GitHub", en: "View GitHub" },
                href: "https://github.com",
            },
        ],
    },
];

export const DEMO_EXPERIENCE = [
    {
        role: "Site Engineer",
        company: { id: "PT Wijaya Konstruksi", en: "PT Wijaya Konstruksi" },
        period: { id: "2022 — Sekarang", en: "2022 — Present" },
        note: {
            id: "Mengawasikan struktur gedung 8 lantai, koordinasi lapangan 40+ pekerja.",
            en: "Supervising an 8-story building structure, coordinating 40+ field workers.",
        },
    },
    {
        role: "Junior Engineer",
        company: { id: "Konsultan Sigma", en: "Sigma Consultants" },
        period: { id: "2020 — 2022", en: "2020 — 2022" },
        note: {
            id: "Perhitungan struktur RAB dan shop drawing untuk 12 proyek rumah sakit.",
            en: "Structural calculations, budgets, and shop drawings for 12 hospital projects.",
        },
    },
];

export const DEMO_EDUCATION = [
    {
        degree: { id: "S1 Teknik Sipil", en: "B.Eng Civil Engineering" },
        school: { id: "Universitas Gadjah Mada", en: "Gadjah Mada University" },
        period: "2016 — 2020",
        note: {
            id: "IPK 3,71 · Cum Laude",
            en: "GPA 3.71 · Cum Laude",
        },
    },
    {
        degree: { id: "SMA Negeri 3 Yogyakarta", en: "SMA Negeri 3 Yogyakarta" },
        school: { id: "MIPA", en: "Science Major" },
        period: "2013 — 2016",
        note: {
            id: "Juara 2 LKS Tingkat Provinsi",
            en: "2nd Winner, Provincial Vocational Olympics",
        },
    },
];

export const DEMO_STORE = {
    initials: "TJ",
    name: "Toko Kain Tenun Jaya",
    tag: { id: "Kain grosir & ecer", en: "Wholesale & retail fabric" },
    domain: "tenunjaya.show.porto",
};

export const DEMO_PRODUCTS = [
    {
        name: { id: "Katun Jepang Motif /m", en: "Japanese Printed Cotton /m" },
        price: "Rp45.000",
        img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop",
    },
    {
        name: { id: "Linen Look Polos /m", en: "Plain Linen Look /m" },
        price: "Rp38.000",
        img: "https://images.unsplash.com/photo-1528114039593-4366cc08227d?q=80&w=800&auto=format&fit=crop",
    },
    {
        name: { id: "Brokat Prancis Premium /m", en: "Premium French Brocade /m" },
        price: "Rp185.000",
        img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800&auto=format&fit=crop",
    },
    {
        name: { id: "Batik Cap Solo 2m", en: "Solo Stamped Batik 2m" },
        price: "Rp120.000",
        img: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=800&auto=format&fit=crop",
    },
];

export const FEATURES = [
    {
        icon: "Briefcase",
        title: {
            id: "Pengalaman & Pendidikan",
            en: "Experience & Education",
        },
        desc: {
            id: "Riwayat kerja & sekolah kepack rapi. Rekruter paham dalam 10 detik pertama, nggak perlu mikir.",
            en: "Work & education history, perfectly packed. Recruiters get it in the first 10 seconds.",
        },
    },
    {
        icon: "Layers",
        title: {
            id: "Galeri Proyek + Tombol Detail",
            en: "Project Gallery + Details Button",
        },
        desc: {
            id: "Card slider dengan thumbnail kece. Klik detail langsung buka gambar, PDF, PPT, video, atau GitHub — flexing di tempat.",
            en: "A slick card slider with thumbnails. The details button opens images, PDF, PPT, video, or GitHub — flex in place.",
        },
    },
    {
        icon: "ShoppingBag",
        title: { id: "Landing Page UMKM", en: "Small Business Landing Page" },
        desc: {
            id: "Hero, layanan/produk, galeri project, harga, testimoni, dan tombol pesan yang langsung nempel ke WhatsApp kamu.",
            en: "Hero, services/products, project gallery, pricing, testimonials, and an order button wired to your WhatsApp.",
        },
    },
    {
        icon: "Smartphone",
        title: { id: "Responsif Mobile-First", en: "Mobile-First Responsive" },
        desc: {
            id: "80% orang buka dari HP. Tenang, websitemu tetap cakep di layar sekecil apa pun.",
            en: "80% of people browse on phones. Relax, your site stays pretty on any screen.",
        },
    },
    {
        icon: "TrendingUp",
        title: { id: "SEO Dasar + Analytics", en: "Basic SEO + Analytics" },
        desc: {
            id: "Struktur yang Google suka + statistik pengunjung. Kamu tahu siapa aja yang lagi ngintip karyamu.",
            en: "Google-friendly structure + visitor stats. You'll know who's checking out your work.",
        },
    },
    {
        icon: "Globe",
        title: { id: "Web Jadi atau Source Code", en: "Ready Website or Source Code" },
        desc: {
            id: "Paket web jadi: hosting + subdomain show.porto sudah termasuk. Paket Source Code: kodenya kamu pegang, bebas hosting di mana aja.",
            en: "Ready-website plans: hosting + show.porto subdomain included. Source Code plans: you own the code, host it anywhere.",
        },
    },
];

export const STEPS = [
    {
        num: "01",
        title: { id: "Konsultasi & Brief", en: "Consultation & Brief" },
        desc: {
            id: "Cerita dulu: mau cari kerja, kejar klien, atau jualan? Kami susun rencana yang pas buatmu.",
            en: "Story time: job hunting, chasing clients, or selling? We build the right plan for you.",
        },
    },
    {
        num: "02",
        title: { id: "Pilih Template", en: "Pick a Template" },
        desc: {
            id: "Scroll koleksinya pelan-pelan, pilih yang paling 'ini dia'. Semua ada contoh live-nya.",
            en: "Scroll the collection slowly, pick the one that feels right. Every one has a live example.",
        },
    },
    {
        num: "03",
        title: { id: "Isi Konten", en: "Fill the Content" },
        desc: {
            id: "Kirim CV, foto, file proyek, atau daftar produk. Kalau berantakan, kami yang rapihin.",
            en: "Send your CV, photos, project files, or product list. Messy? We'll tidy it up.",
        },
    },
    {
        num: "04",
        title: { id: "Launch", en: "Launch" },
        desc: {
            id: "Website tayang & serah terima. Ambil paket Source Code? Kodenya plus manual book update mandiri ikut dikirim. Tinggal pamer, deh.",
            en: "Website goes live & handed over. On a Source Code plan? The code plus a self-update manual ship with it. Time to show off.",
        },
    },
];

export const PRICING_GROUPS = [
    {
        id: "porto",
        title: { id: "Portfolio Pencari Kerja", en: "Job Seeker Portfolio" },
        story: {
            id: "Buat kamu yang lagi apply dan capek CV-nya ditumpuk. Mulai dari Rp150rb udah punya web portfolio sendiri — pengalaman, pendidikan, proyek, tombol unduh CV, semua satu link.",
            en: "For you, mid-application and tired of your CV landing in a pile. From Rp150k you own a portfolio site — experience, education, projects, a CV button, all in one link.",
        },
        plans: [
            {
                id: "porto-web",
                name: "PORTO",
                price: "Rp150rb",
                badge: { id: "Web jadi", en: "Ready website" },
                desc: {
                    id: "Web-nya jadi, kamu tinggal share link-nya ke rekruter. Kami yang hosting.",
                    en: "The site is done, you just share the link with recruiters. We host it.",
                },
                features: [
                    { id: "1 halaman portofolio custom sesuai bidang", en: "1 custom portfolio page for your field" },
                    { id: "Section pengalaman, pendidikan & kursus", en: "Experience, education & course sections" },
                    { id: "Galeri proyek + tombol detail (gambar/PDF/video/GitHub)", en: "Project gallery + details button (image/PDF/video/GitHub)" },
                    { id: "Tombol unduh CV & form kontak", en: "CV download button & contact form" },
                    { id: "Hosting + subdomain show.porto", en: "Hosting + show.porto subdomain" },
                    { id: "Revisi 2x · selesai 3-5 hari", en: "2 revisions · done in 3-5 days" },
                ],
                highlight: false,
            },
            {
                id: "porto-source",
                name: "PORTO + Source Code",
                price: "Rp500rb",
                badge: { id: "Web + Source Code", en: "Web + Source Code" },
                desc: {
                    id: "Web-nya jadi DAN kodenya kamu pegang. Bebas hosting di mana aja, update sendiri pakai manual book.",
                    en: "The site is done AND you own the code. Host anywhere, update yourself with the manual book.",
                },
                features: [
                    { id: "Semua yang ada di PORTO", en: "Everything in PORTO" },
                    { id: "Full source code (React) milik kamu", en: "Full source code (React) is yours" },
                    { id: "Manual book update mandiri (PDF + video)", en: "Self-update manual book (PDF + video)" },
                    { id: "Bebas hosting: GitHub Pages / Vercel / hosting sendiri", en: "Host anywhere: GitHub Pages / Vercel / your own" },
                    { id: "Bantuan pasang domain sendiri", en: "Help setting up your own domain" },
                    { id: "Revisi 3x · prioritas antrean", en: "3 revisions · priority queue" },
                ],
                highlight: true,
            },
        ],
    },
    {
        id: "umkm",
        title: { id: "Landing Page UMKM", en: "Small Business Landing Page" },
        story: {
            id: "Buat usaha yang mau punya etalase online yang jualan 24/7 — dari MUA, sewa kebaya, fotografer, toko kain, kuliner, sampai laundry. Pelanggan klik pesan, langsung masuk WhatsApp kamu.",
            en: "For businesses that want a storefront selling 24/7 — from MUAs, kebaya rentals, photographers, fabric stores, food, to laundry. Customers tap order, it lands in your WhatsApp.",
        },
        plans: [
            {
                id: "umkm-web",
                name: "LANDING",
                price: "Rp600rb",
                badge: { id: "Web jadi", en: "Ready website" },
                desc: {
                    id: "Landing page usahamu tayang, siap dishare di bio Instagram & status WA. Kami yang hosting.",
                    en: "Your business landing page goes live, ready for your Instagram bio & WA status. We host it.",
                },
                features: [
                    { id: "Hero, layanan/produk, galeri project, harga, testimoni, kontak", en: "Hero, services/products, project gallery, pricing, testimonials, contact" },
                    { id: "Katalog maks. 20 produk/layanan dengan foto & harga", en: "Catalog up to 20 products/services with photos & prices" },
                    { id: "Tombol pesan WhatsApp per produk", en: "WhatsApp order button per product" },
                    { id: "Google Maps + jam operasional", en: "Google Maps + opening hours" },
                    { id: "Hosting + subdomain show.porto", en: "Hosting + show.porto subdomain" },
                    { id: "Revisi 3x · selesai 5-7 hari", en: "3 revisions · done in 5-7 days" },
                ],
                highlight: false,
            },
            {
                id: "umkm-source",
                name: "LANDING + Source Code",
                price: "Rp1,5jt",
                badge: { id: "Web + Source Code", en: "Web + Source Code" },
                desc: {
                    id: "Aset digital penuh milik usahamu: web jadi + kodenya + manual book. Ganti harga & foto produk kapan aja tanpa nunggu siapa pun.",
                    en: "A full digital asset for your business: live site + code + manual book. Change prices & photos anytime without waiting on anyone.",
                },
                features: [
                    { id: "Semua yang ada di LANDING", en: "Everything in LANDING" },
                    { id: "Full source code milik usahamu", en: "Full source code owned by your business" },
                    { id: "Manual book update mandiri: tambah produk, ganti harga & foto", en: "Self-update manual book: add products, change prices & photos" },
                    { id: "Bebas hosting + bantuan pasang domain sendiri", en: "Host anywhere + help with your own domain" },
                    { id: "SEO dasar + Google Analytics", en: "Basic SEO + Google Analytics" },
                    { id: "Revisi 5x · prioritas antrean", en: "5 revisions · priority queue" },
                ],
                highlight: true,
            },
        ],
    },
];

export const FAQS = [
    {
        q: { id: "Bedanya paket web jadi sama paket Source Code apa?", en: "What's the difference between a ready-website plan and a Source Code plan?" },
        a: {
            id: "Paket web jadi (PORTO Rp150rb / LANDING Rp600rb): website-mu tayang di subdomain show.porto, kami yang hosting, update konten lewat kami. Paket Source Code (Rp500rb / Rp1,5jt): kamu dapat web jadi PLUS seluruh kodenya dan manual book update mandiri — bebas hosting di GitHub Pages, Vercel, atau hosting sendiri.",
            en: "Ready-website plans (PORTO Rp150k / LANDING Rp600k): your site goes live on a show.porto subdomain, we host it, content updates go through us. Source Code plans (Rp500k / Rp1.5M): you get the live site PLUS the full code and a self-update manual book — host it on GitHub Pages, Vercel, or your own server.",
        },
    },
    {
        q: { id: "Berapa lama website-nya jadi?", en: "How long does it take?" },
        a: {
            id: "Portfolio 3-5 hari kerja, Landing Page UMKM 5-7 hari kerja. Hitungannya mulai pas materi kamu (CV, foto, daftar produk) lengkap kami terima.",
            en: "Portfolios take 3-5 working days, UMKM landing pages 5-7. The clock starts once your materials (CV, photos, product list) are complete.",
        },
    },
    {
        q: { id: "Manual book update mandiri itu isinya apa?", en: "What's in the self-update manual book?" },
        a: {
            id: "Panduan PDF + video singkat: cara ganti teks, tambah proyek/produk, ganti harga & foto, sampai cara deploy ulang ke hosting-mu. Khusus paket Source Code. Mager? Ping kami, kami yang update.",
            en: "A PDF guide + short videos: how to change text, add projects/products, swap prices & photos, and redeploy to your hosting. Source Code plans only. Feeling lazy? Ping us and we'll do it.",
        },
    },
    {
        q: { id: "Tombol detail proyek bisa buka format apa aja?", en: "What formats can the project details button open?" },
        a: {
            id: "Gambar (JPG/PNG), dokumen PDF, presentasi PowerPoint, video (YouTube/Vimeo), sampai link GitHub & Behance. Campur sesukamu per proyek.",
            en: "Images (JPG/PNG), PDF documents, PowerPoint slides, video (YouTube/Vimeo), even GitHub & Behance links. Mix and match per project.",
        },
    },
    {
        q: { id: "Pelanggan UMKM pesannya lewat mana?", en: "How do customers order on the UMKM page?" },
        a: {
            id: "Lewat tombol Pesan di tiap produk/layanan — langsung buka WhatsApp usahamu dengan pesan otomatis berisi nama produk. Tinggal send, order langsung masuk.",
            en: "Via the Order button on each product/service — it opens your business WhatsApp with a pre-filled message containing the product name. One tap, order received.",
        },
    },
    {
        q: { id: "Cara bayar dan konsultasinya gimana?", en: "How do payment and consultation work?" },
        a: {
            id: "Konsultasi gratis via WhatsApp 0855-9119-7624 atau email showporto49@gmail.com. Sekali bayar, nggak ada biaya bulanan tersembunyi. DP 50% saat mulai, sisanya saat website tayang.",
            en: "Free consultation via WhatsApp 0855-9119-7624 or email showporto49@gmail.com. Pay once, no hidden monthly fees. 50% deposit to start, the rest when the site goes live.",
        },
    },
];

export const INTENTS = [
    {
        value: "porto-web",
        label: { id: "Portfolio — PORTO (web jadi) Rp150rb", en: "Portfolio — PORTO (ready website) Rp150k" },
    },
    {
        value: "porto-source",
        label: { id: "Portfolio — PORTO + Source Code Rp500rb", en: "Portfolio — PORTO + Source Code Rp500k" },
    },
    {
        value: "umkm-web",
        label: { id: "Landing Page UMKM — LANDING (web jadi) Rp600rb", en: "UMKM Landing — LANDING (ready website) Rp600k" },
    },
    {
        value: "umkm-source",
        label: { id: "Landing Page UMKM — LANDING + Source Code Rp1,5jt", en: "UMKM Landing — LANDING + Source Code Rp1.5M" },
    },
    {
        value: "lainnya",
        label: { id: "Lainnya / belum pasti", en: "Other / not sure yet" },
    },
];

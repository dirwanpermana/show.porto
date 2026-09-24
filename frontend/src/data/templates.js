export const BRAND = {
    name: "Karyaloka",
    tagline: "Rumah karya digitalmu",
    domain: "karyaloka.id",
    wa: "https://wa.me/6281234567890",
};

export const MARQUEE_ITEMS = [
    { id: "Desainer Grafis", en: "Graphic Designer" },
    { id: "Marketing", en: "Marketing" },
    { id: "Teknik Sipil", en: "Civil Engineering" },
    { id: "Fotografer", en: "Photographer" },
    { id: "Web Developer", en: "Web Developer" },
    { id: "Ilustrator", en: "Illustrator" },
    { id: "UMKM Kuliner", en: "Food Business" },
    { id: "UMKM Fashion", en: "Fashion Business" },
];

export const TEMPLATES = [
    {
        id: "lumina",
        name: "Lumina",
        domain: "lumina.karyaloka.id",
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
        domain: "amplify.karyaloka.id",
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
        domain: "blueprint.karyaloka.id",
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
        domain: "aperture.karyaloka.id",
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
        domain: "deploy.karyaloka.id",
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
    {
        id: "etalase",
        name: "Etalase",
        domain: "etalase.karyaloka.id",
        field: { id: "UMKM Kuliner", en: "Food Business" },
        styleName: { id: "Warm parchment atelier", en: "Warm parchment atelier" },
        desc: {
            id: "Perkamen hangat dengan serif ramah dan aksen terakota: katalog terasa seperti buku resep keluarga.",
            en: "Warm parchment with a friendly serif and terracotta accent: a catalog that feels like a family recipe book.",
        },
        img: "https://images.pexels.com/photos/36982086/pexels-photo-36982086.jpeg?auto=compress&cs=tinysrgb&w=1200",
        tags: [
            { id: "Katalog Produk", en: "Product Catalog" },
            { id: "Pesan WhatsApp", en: "WhatsApp Order" },
            { id: "Promo", en: "Promotions" },
        ],
        theme: {
            bg: "#f6efe1",
            panel: "#efe5cf",
            text: "#34251a",
            muted: "#8d7a63",
            accent: "#b4552d",
            line: "rgba(52,37,26,0.16)",
            display: "'Fraunces', serif",
            body: "'Archivo', sans-serif",
            displayWeight: 500,
            radius: "14px",
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

export const DEMO_PRODUCTS = [
    {
        name: { id: "Gudeg Kendil 1 kg", en: "Gudeg Kendil 1 kg" },
        price: "Rp85.000",
        img: "https://images.pexels.com/photos/36982086/pexels-photo-36982086.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
        name: { id: "Sate Ayam Bakar 20 tusuk", en: "Grilled Chicken Satay x20" },
        price: "Rp120.000",
        img: "https://images.pexels.com/photos/30588841/pexels-photo-30588841.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
        name: { id: "Kopi Robusta Kemasan 250g", en: "Robusta Coffee 250g pack" },
        price: "Rp45.000",
        img: "https://images.unsplash.com/photo-1767678233475-da66a442d856?q=80&w=800&auto=format&fit=crop",
    },
    {
        name: { id: "Sambal Nusantara 5 botol", en: "Nusantara Sambal 5 jars" },
        price: "Rp150.000",
        img: "https://images.unsplash.com/photo-1568622998407-0084ebf482b0?q=80&w=800&auto=format&fit=crop",
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
            id: "Riwayat kerja dan pendidikan tampil terstruktur seperti CV premium, mudah dipindai rekruter.",
            en: "Work and education history presented like a premium CV, easy for recruiters to scan.",
        },
    },
    {
        icon: "Layers",
        title: {
            id: "Galeri Proyek + Tombol Detail",
            en: "Project Gallery + Details Button",
        },
        desc: {
            id: "Card slider dengan thumbnail. Tombol detail membuka gambar, PDF, PowerPoint, video, atau link GitHub.",
            en: "A card slider with thumbnails. The details button opens images, PDF, PowerPoint, video, or GitHub links.",
        },
    },
    {
        icon: "ShoppingBag",
        title: { id: "Katalog Produk UMKM", en: "Small Business Catalog" },
        desc: {
            id: "Daftar produk bergaya e-commerce dengan harga, foto, dan tombol pesan langsung ke WhatsApp.",
            en: "An e-commerce style product list with prices, photos, and an order button straight to WhatsApp.",
        },
    },
    {
        icon: "Smartphone",
        title: { id: "Responsif Mobile-First", en: "Mobile-First Responsive" },
        desc: {
            id: "Tampil sempurna di HP tempat 80% rekruter dan pelanggan membuka websitemu.",
            en: "Looks perfect on the phones where 80% of recruiters and customers open your website.",
        },
    },
    {
        icon: "TrendingUp",
        title: { id: "SEO Dasar + Analytics", en: "Basic SEO + Analytics" },
        desc: {
            id: "Struktur ramah Google dan statistik pengunjung supaya kamu tahu siapa yang melihat karyamu.",
            en: "Google-friendly structure and visitor stats so you know who is viewing your work.",
        },
    },
    {
        icon: "Globe",
        title: { id: "Domain & Hosting", en: "Domain & Hosting" },
        desc: {
            id: "Hosting termasuk, domain custom tersedia di paket PRO supaya nama brands makin melekat.",
            en: "Hosting included, custom domain available on the PRO plan so your name sticks.",
        },
    },
];

export const STEPS = [
    {
        num: "01",
        title: { id: "Konsultasi & Brief", en: "Consultation & Brief" },
        desc: {
            id: "Ceritakan targetmu — kerja, klien, atau jualan. Kami susun struktur halaman yang tepat.",
            en: "Tell us your goal — a job, clients, or sales. We structure the right page plan.",
        },
    },
    {
        num: "02",
        title: { id: "Pilih Template", en: "Pick a Template" },
        desc: {
            id: "Tentukan satu dari koleksi template sesuai bidangmu. Lihat langsung contoh live-nya.",
            en: "Choose one from the template collection matching your field. See live examples.",
        },
    },
    {
        num: "03",
        title: { id: "Isi Konten", en: "Fill the Content" },
        desc: {
            id: "Kirim CV, foto, dokumen proyek, atau daftar produk. Tim kami yang merapikan & mengisi.",
            en: "Send your CV, photos, project documents, or product list. Our team arranges everything.",
        },
    },
    {
        num: "04",
        title: { id: "Launch", en: "Launch" },
        desc: {
            id: "Website serah terima dalam hitungan hari, lengkap dengan panduan update mandiri.",
            en: "Your website is handed over in days, complete with a self-serve update guide.",
        },
    },
];

export const PRICING = [
    {
        id: "porto",
        name: "PORTO",
        price: "Rp499rb",
        desc: {
            id: "Portofolio satu halaman yang rapi dan cepat jadi.",
            en: "A tidy one-page portfolio, fast to launch.",
        },
        features: [
            { id: "1 halaman portofolio", en: "1 portfolio page" },
            {
                id: "Section pengalaman & pendidikan",
                en: "Experience & education sections",
            },
            {
                id: "Galeri 6 proyek + tombol detail",
                en: "6-project gallery + details button",
            },
            { id: "Subdomain karyaloka.id", en: "karyaloka.id subdomain" },
            { id: "Mobile responsive", en: "Mobile responsive" },
            { id: "Revisi 2x · selesai 5-7 hari", en: "2 revisions · done in 5-7 days" },
        ],
        highlight: false,
    },
    {
        id: "umkm",
        name: "UMKM",
        price: "Rp999rb",
        desc: {
            id: "Etalase digital untuk jualan lebih hari ini.",
            en: "A digital storefront to sell more today.",
        },
        features: [
            {
                id: "Landing page + katalog maks. 20 produk",
                en: "Landing page + catalog up to 20 products",
            },
            {
                id: "Tombol pesan WhatsApp per produk",
                en: "WhatsApp order button per product",
            },
            {
                id: "Banner promo & testimoni pelanggan",
                en: "Promo banner & customer testimonials",
            },
            {
                id: "Google Maps + jam operasional",
                en: "Google Maps + opening hours",
            },
            { id: "Subdomain karyaloka.id", en: "karyaloka.id subdomain" },
            { id: "Revisi 3x · selesai 7-10 hari", en: "3 revisions · done in 7-10 days" },
        ],
        highlight: false,
    },
    {
        id: "pro",
        name: "PRO",
        price: "Rp1,4jt",
        desc: {
            id: "Kredibilitas maksimal untuk karier & bisnis.",
            en: "Maximum credibility for career & business.",
        },
        features: [
            {
                id: "Semua fitur PORTO & UMKM",
                en: "All PORTO & UMKM features",
            },
            {
                id: "Proyek tanpa batas + detail image/PDF/PPT/video/GitHub",
                en: "Unlimited projects + image/PDF/PPT/video/GitHub details",
            },
            {
                id: "Domain custom (biaya domain terpisah)",
                en: "Custom domain (domain fee separate)",
            },
            {
                id: "SEO dasar + Google Analytics",
                en: "Basic SEO + Google Analytics",
            },
            { id: "Panduan update mandiri", en: "Self-serve update guide" },
            { id: "Revisi 5x · prioritas antrean", en: "5 revisions · priority queue" },
        ],
        highlight: true,
    },
];

export const FAQS = [
    {
        q: { id: "Berapa lama website jadi?", en: "How long does it take?" },
        a: {
            id: "Paket PORTO selesai 5-7 hari kerja, UMKM 7-10 hari, dan PRO menyesuaikan kelengkapan konten. Hitungan hari sejak materi konten lengkap kami terima.",
            en: "PORTO finishes in 5-7 working days, UMKM in 7-10, and PRO depends on content completeness — counted from when we receive complete materials.",
        },
    },
    {
        q: {
            id: "Apakah saya bisa update sendiri isinya?",
            en: "Can I update the content myself?",
        },
        a: {
            id: "Bisa. Konten seperti pengalaman, pendidikan, proyek, dan produk dikelola lewat panduan update mandiri yang kami serahkan saat serah terima. Kamu juga bisa minta kami update kapan pun.",
            en: "Yes. Content like experience, education, projects, and products is managed via the self-serve update guide we hand over at launch. You can also ask us to update anytime.",
        },
    },
    {
        q: {
            id: "Tombol detail proyek bisa membuka format apa saja?",
            en: "What formats can the project details button open?",
        },
        a: {
            id: "Gambar (JPG/PNG), dokumen PDF, presentasi PowerPoint, video (YouTube/Vimeo), dan link GitHub atau Behance. Setiap kartu proyek bisa memuat kombinasi link sesuai kebutuhanmu.",
            en: "Images (JPG/PNG), PDF documents, PowerPoint presentations, video (YouTube/Vimeo), and GitHub or Behance links. Each project card can hold any mix of links you need.",
        },
    },
    {
        q: {
            id: "Untuk UMKM, bagaimana pelanggan memesan?",
            en: "How do customers order on the UMKM site?",
        },
        a: {
            id: "Setiap produk di katalog punya tombol Pesan yang langsung membuka WhatsApp dengan pesan otomatis berisi nama produk. Pelanggan tinggal kirim, kamu langsung menerima order.",
            en: "Every product in the catalog has an Order button that opens WhatsApp with a pre-filled message containing the product name. Customers just hit send, and the order lands with you.",
        },
    },
    {
        q: {
            id: "Apakah harga sudah termasuk hosting & domain?",
            en: "Does the price include hosting & domain?",
        },
        a: {
            id: "Semua paket sudah termasuk hosting. Paket PORTO dan UMKM memakai subdomain karyaloka.id; domain custom tersedia di paket PRO dengan biaya domain terpisah sesuai harga resmi registrar.",
            en: "All plans include hosting. PORTO and UMKM use a karyaloka.id subdomain; a custom domain is available on PRO with the domain fee charged at the registrar's official price.",
        },
    },
];

export const INTENTS = [
    {
        value: "pencari-kerja",
        label: {
            id: "Saya pencari kerja (portfolio)",
            en: "I am a job seeker (portfolio)",
        },
    },
    {
        value: "umkm",
        label: { id: "Saya UMKM (katalog produk)", en: "I run a small business (catalog)" },
    },
    {
        value: "lainnya",
        label: { id: "Lainnya / belum pasti", en: "Other / not sure yet" },
    },
];

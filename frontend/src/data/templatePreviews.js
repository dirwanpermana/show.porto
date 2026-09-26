// Konten contoh per template (bilingual) — persona & karya realistis sesuai bidang.
// Setiap template punya alur section (flow), varian cover, dan layout proyek sendiri.
import { tplImg } from "@/data/img";

export const PREVIEWS = {
    lumina: {
        cv: true,
        cover: "editorial",
        projectLayout: "masonry",
        flow: ["about", "works", "edu", "exp", "trust", "contact"],
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
        education: {
            label: { id: "Pendidikan", en: "Education" },
            items: [
                {
                    degree: {
                        id: "S1 Desain Komunikasi Visual",
                        en: "B.A. Visual Communication Design",
                    },
                    school: { id: "Institut Seni Indonesia Yogyakarta", en: "Indonesia Institute of the Arts, Yogyakarta" },
                    period: "2015 — 2019",
                    note: { id: "Skripsi: sistem tipografi untuk UMKM", en: "Thesis: typography systems for small businesses" },
                },
                {
                    degree: { id: "SMA Negeri 5 Yogyakarta — IPS", en: "SMA Negeri 5 Yogyakarta — Social Sciences" },
                    school: { id: "Kelas peminatan ekonomi", en: "Economics track" },
                    period: "2012 — 2015",
                    note: { id: "Ketua Divisi Desain OSIS", en: "Head of Student Council Design Division" },
                },
            ],
        },
        courses: {
            label: { id: "Kursus & Sertifikasi", en: "Courses & Certificates" },
            items: [
                { name: { id: "Type Design Intensive", en: "Type Design Intensive" }, issuer: "Letterform Workshop", year: "2022" },
                { name: { id: "Advanced Packaging Design", en: "Advanced Packaging Design" }, issuer: "Packraft Academy", year: "2021" },
                { name: { id: "Design Systems Masterclass", en: "Design Systems Masterclass" }, issuer: "DesignUp Academy", year: "2020" },
            ],
        },
        experience: {
            label: { id: "Pengalaman Kerja", en: "Work Experience" },
            items: [
                {
                    role: { id: "Senior Graphic Designer", en: "Senior Graphic Designer" },
                    company: { id: "Studio Sayap, Yogyakarta", en: "Studio Sayap, Yogyakarta" },
                    period: { id: "2021 — Sekarang", en: "2021 — Present" },
                    desc: {
                        id: "Memimpin tim 4 desainer untuk 30+ brand F&B dan fashion; membangun sistem desain internal.",
                        en: "Leading a team of 4 designers for 30+ F&B and fashion brands; built the internal design system.",
                    },
                },
                {
                    role: { id: "Graphic Designer", en: "Graphic Designer" },
                    company: { id: "Kreavi Studio, Jakarta (remote)", en: "Kreavi Studio, Jakarta (remote)" },
                    period: "2019 — 2021",
                    desc: {
                        id: "Desain kemasan dan kampanye untuk 20+ UMKM yang naik kelas.",
                        en: "Packaging and campaigns for 20+ growing small businesses.",
                    },
                },
                {
                    role: { id: "Freelance Designer", en: "Freelance Designer" },
                    company: { id: "Mandiri", en: "Self-employed" },
                    period: "2017 — 2019",
                    desc: {
                        id: "Identitas visual untuk kedai kopi, buku, dan festival seni lokal.",
                        en: "Visual identities for local coffee shops, books, and art festivals.",
                    },
                },
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
                id: "Karya desain untuk brand F&B, retail, dan penerbit — dari riset hingga guideline.",
                en: "Design work for F&B, retail, and publishing brands — from research to guidelines.",
            },
            items: [
                {
                    title: { id: "Rebranding Kopi Senja", en: "Kopi Senja Rebranding" },
                    meta: { id: "Identitas Visual · 4 cabang", en: "Visual Identity · 4 branches" },
                    year: "2024",
                    img: tplImg("lumina_kopi"),
                },
                {
                    title: { id: "Poster Jazz Pasar Ngasem", en: "Pasar Ngasem Jazz Posters" },
                    meta: { id: "Seri Poster · 12 karya", en: "Poster Series · 12 pieces" },
                    year: "2023",
                    img: tplImg("lumina_poster"),
                },
                {
                    title: { id: "Kemasan Sambal Nusantara", en: "Nusantara Sambal Packaging" },
                    meta: { id: "Kemasan · 5 varian rasa", en: "Packaging · 5 flavor variants" },
                    year: "2024",
                    img: tplImg("lumina_sambal"),
                },
                {
                    title: { id: "Annual Report Bank Nusa", en: "Bank Nusa Annual Report" },
                    meta: { id: "Editorial · 64 halaman", en: "Editorial · 64 pages" },
                    year: "2023",
                    img: tplImg("lumina_report"),
                },
            ],
        },
        services: {
            label: { id: "Layanan", en: "Services" },
            items: [
                {
                    t: { id: "Identitas Visual", en: "Brand Identity" },
                    d: {
                        id: "Logo, sistem warna, tipografi, dan brand book 40 halaman.",
                        en: "Logo, color system, typography, and a 40-page brand book.",
                    },
                },
                {
                    t: { id: "Desain Kemasan", en: "Packaging" },
                    d: {
                        id: "Struktur label, ilustrasi, dan artwork siap cetak.",
                        en: "Label structure, illustration, and print-ready artwork.",
                    },
                },
                {
                    t: { id: "Editorial & Cetak", en: "Editorial & Print" },
                    d: { id: "Majalah, katalog, dan annual report.", en: "Magazines, catalogs, and annual reports." },
                },
                {
                    t: { id: "Ilustrasi Komersial", en: "Commercial Illustration" },
                    d: { id: "Karakter & spot ilustrasi untuk kampanye.", en: "Characters & spot illustrations for campaigns." },
                },
            ],
        },
        awards: {
            label: { id: "Penghargaan", en: "Awards & Recognition" },
            items: [
                {
                    year: "2024",
                    name: { id: "Desain Kemasan Terbaik", en: "Best Packaging Design" },
                    by: "Indonesia Design Awards",
                },
                {
                    year: "2023",
                    name: { id: "Emas — Seri Poster", en: "Gold — Poster Series" },
                    by: "DGI Poster Biennale",
                },
                {
                    year: "2022",
                    name: { id: "Featured — Graphic Design", en: "Featured — Graphic Design" },
                    by: "Behance Curated Galleries",
                },
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
                    role: { id: "Pendiri Kopi Senja", en: "Founder, Kopi Senja" },
                },
                {
                    q: {
                        id: "Kerja rapi, cepat, dan selalu satu langkah di depan brief.",
                        en: "Neat, fast, and always one step ahead of the brief.",
                    },
                    who: "Michael Tanaya",
                    role: { id: "Brand Manager, Uleg&Co", en: "Brand Manager, Uleg&Co" },
                },
            ],
        },
        contact: {
            label: { id: "Kontak", en: "Contact" },
            heading: { id: "Mulai Percakapan", en: "Start a Conversation" },
            email: "halo@lumina.studio",
            address: {
                id: "Yogyakarta, Indonesia — terbuka untuk proyek remote",
                en: "Yogyakarta, Indonesia — open to remote projects",
            },
        },
    },

    amplify: {
        cv: true,
        cover: "bento",
        projectLayout: "slider",
        flow: ["about", "works", "exp", "edu", "trust", "contact"],
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
                { n: "Rp8M+", l: { id: "Ad Spend Dikelola", en: "Ad Spend Managed" } },
            ],
        },
        education: {
            label: { id: "Pendidikan", en: "Education" },
            items: [
                {
                    degree: { id: "S1 Manajemen", en: "B.A. Management" },
                    school: { id: "Universitas Indonesia", en: "University of Indonesia" },
                    period: "2014 — 2018",
                    note: { id: "Minor psikologi konsumen", en: "Minor in consumer psychology" },
                },
                {
                    degree: { id: "SMA Negeri 3 Jakarta — IPS", en: "SMA Negeri 3 Jakarta — Social Sciences" },
                    school: { id: "Lulus dengan penghargaan", en: "Graduated with honors" },
                    period: "2011 — 2014",
                    note: { id: "Ketua OSIS, divisi acara", en: "Student council president, events division" },
                },
            ],
        },
        courses: {
            label: { id: "Kursus & Sertifikasi", en: "Courses & Certificates" },
            items: [
                { name: { id: "Google Ads Certification", en: "Google Ads Certification" }, issuer: "Google Skillshop", year: "2024" },
                { name: { id: "Meta Blueprint Certified", en: "Meta Blueprint Certified" }, issuer: "Meta", year: "2023" },
                { name: { id: "Data Analytics for Marketers", en: "Data Analytics for Marketers" }, issuer: "RevoU", year: "2022" },
            ],
        },
        experience: {
            label: { id: "Pengalaman Kerja", en: "Work Experience" },
            items: [
                {
                    role: { id: "Growth Lead", en: "Growth Lead" },
                    company: { id: "Glowlab (skincare)", en: "Glowlab (skincare)" },
                    period: { id: "2022 — Sekarang", en: "2022 — Present" },
                    desc: {
                        id: "Skala kanal dari 3 ke 7 kota; ROAS stabil di atas 3x dengan tim konten internal.",
                        en: "Scaled channels from 3 to 7 cities; ROAS steady above 3x with an in-house content team.",
                    },
                },
                {
                    role: { id: "Performance Marketing Specialist", en: "Performance Marketing Specialist" },
                    company: { id: "KirimAja (B2B logistics)", en: "KirimAja (B2B logistics)" },
                    period: "2020 — 2022",
                    desc: {
                        id: "Mengelola anggaran iklan Rp2M+/tahun dan funnel lead-to-signup B2B.",
                        en: "Managed Rp2B+/year ad budget and the B2B lead-to-signup funnel.",
                    },
                },
                {
                    role: { id: "Digital Marketing Executive", en: "Digital Marketing Executive" },
                    company: { id: "Hotel Sagara Group", en: "Hotel Sagara Group" },
                    period: "2018 — 2020",
                    desc: {
                        id: "Konten OTA, kampanye liburan, dan program loyalitas member.",
                        en: "OTA content, holiday campaigns, and the member loyalty program.",
                    },
                },
            ],
        },
        principles: {
            label: { id: "Cara Bekerja", en: "How I Work" },
            items: [
                {
                    t: { id: "Mulai dari Angka", en: "Start with Numbers" },
                    d: {
                        id: "Baseline jelas sebelum satu rupiah iklan dibakar.",
                        en: "A clear baseline before a single ad rupiah is spent.",
                    },
                },
                {
                    t: { id: "Eksperimen Cepat", en: "Rapid Experiments" },
                    d: {
                        id: "Hipotesis kecil, eksekusi mingguan, keputusan dari data.",
                        en: "Small hypotheses, weekly execution, data-driven calls.",
                    },
                },
                {
                    t: { id: "Kreatif yang Menjual", en: "Creative That Sells" },
                    d: {
                        id: "Konsep menang bila metrik naik, bukan bila keren saja.",
                        en: "A concept wins when metrics rise, not when it merely looks cool.",
                    },
                },
            ],
        },
        works: {
            label: { id: "Studi Kasus", en: "Case Studies" },
            sub: {
                id: "Geser kartu — kampanye pilihan beserta hasil terukurnya.",
                en: "Swipe the cards — selected campaigns with measurable results.",
            },
            items: [
                {
                    title: {
                        id: "Kampanye Ramadhan — Sejahtera Building Supply",
                        en: "Ramadhan Campaign — Sejahtera Building Supply",
                    },
                    meta: { id: "Jangkauan 3x · CTR 2,4%", en: "Reach 3x · CTR 2.4%" },
                    year: "2025",
                    img: tplImg("amplify_serum"),
                },
                {
                    title: { id: "Peluncuran Glowlab Serum", en: "Glowlab Serum Launch" },
                    meta: {
                        id: "Sold out 3 minggu · ROAS 4,1x",
                        en: "Sold out in 3 weeks · 4.1x ROAS",
                    },
                    year: "2024",
                    img: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1200&auto=format&fit=crop",
                },
                {
                    title: { id: "Restrukturisasi Funnel course.id", en: "course.id Funnel Overhaul" },
                    meta: { id: "Konversi +68%", en: "Conversions +68%" },
                    year: "2024",
                    img: "https://images.pexels.com/photos/39205102/pexels-photo-39205102.jpeg?auto=compress&cs=tinysrgb&w=1200",
                },
                {
                    title: { id: "Konten Komunitas Kreatif", en: "Creative Community Content" },
                    meta: { id: "10rb pengikut baru", en: "10k new followers" },
                    year: "2024",
                    img: "https://images.pexels.com/photos/15543037/pexels-photo-15543037.jpeg?auto=compress&cs=tinysrgb&w=1200",
                },
            ],
        },
        services: {
            label: { id: "Layanan", en: "Services" },
            items: [
                {
                    t: { id: "Performance Ads", en: "Performance Ads" },
                    d: { id: "Meta, Google, TikTok dengan struktur kampanye berlapis.", en: "Meta, Google, TikTok with layered campaign structure." },
                },
                {
                    t: { id: "Strategi Social Media", en: "Social Media Strategy" },
                    d: { id: "Kalender konten 90 hari & tone of voice.", en: "90-day content calendar & tone of voice." },
                },
                {
                    t: { id: "Email & CRM", en: "Email & CRM" },
                    d: { id: "Sequence retensi, winback, dan repeat order.", en: "Retention, winback, and repeat-order sequences." },
                },
                {
                    t: { id: "Analitik & Reporting", en: "Analytics & Reporting" },
                    d: { id: "Dashboard mingguan dengan atribusi yang jujur.", en: "Weekly dashboards with honest attribution." },
                },
            ],
        },
        awards: {
            label: { id: "Pengakuan", en: "Recognition" },
            items: [
                {
                    year: "2024",
                    name: { id: "Finalis — Best Use of Social", en: "Finalist — Best Use of Social" },
                    by: "Digital Awards Indonesia",
                },
                {
                    year: "2023",
                    name: { id: "Growth Team of the Year", en: "Growth Team of the Year" },
                    by: "MarTech Summit SEA",
                },
                {
                    year: "2022",
                    name: { id: "Top 10 Marketing Voices", en: "Top 10 Marketing Voices" },
                    by: "Komunitas MarketingKopi",
                },
            ],
        },
        testimonials: {
            label: { id: "Kata Klien", en: "Client Words" },
            items: [
                {
                    q: {
                        id: "Bella mengubah iklan kami dari tebakan mahal menjadi mesin terukur.",
                        en: "Bella turned our ads from an expensive guessing game into a measurable engine.",
                    },
                    who: "Rizal Pramudya",
                    role: { id: "CEO, Glowlab", en: "CEO, Glowlab" },
                },
                {
                    q: {
                        id: "Report-nya detail, jujur, dan selalu berisi rencana minggu depan.",
                        en: "Detailed, honest reports that always come with a next-week plan.",
                    },
                    who: "Amanda Salsabila",
                    role: { id: "Brand Manager, Sejahtera Group", en: "Brand Manager, Sejahtera Group" },
                },
            ],
        },
        contact: {
            label: { id: "Kontak", en: "Contact" },
            heading: { id: "Diskusikan Target Pertumbuhanmu", en: "Let's Talk Growth Targets" },
            email: "bella@amplify.co",
            address: {
                id: "Jakarta, Indonesia — remote friendly",
                en: "Jakarta, Indonesia — remote friendly",
            },
        },
    },

    blueprint: {
        cv: true,
        cover: "media",
        projectLayout: "grid",
        flow: ["about", "works", "exp", "edu", "trust", "contact"],
        profile: {
            name: "Aris Wicaksono",
            role: {
                id: "Insinyur Struktur & Perancang",
                en: "Structural Engineer & Designer",
            },
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
        education: {
            label: { id: "Pendidikan", en: "Education" },
            items: [
                {
                    degree: { id: "S1 Teknik Sipil", en: "B.Eng Civil Engineering" },
                    school: { id: "Universitas Gadjah Mada", en: "Gadjah Mada University" },
                    period: "2006 — 2010",
                    note: { id: "IPK 3,68 · Skripsi struktur kayu", en: "GPA 3.68 · Timber structure thesis" },
                },
                {
                    degree: { id: "SMK Negeri 2 Bangunan Yogyakarta", en: "SMK Negeri 2 Bangunan Yogyakarta" },
                    school: { id: "Teknik Konstruksi Bangunan", en: "Building Construction Engineering" },
                    period: "2003 — 2006",
                    note: { id: "Lulus terbaik angkatan", en: "Best graduate of the cohort" },
                },
            ],
        },
        courses: {
            label: { id: "Kursus & Sertifikasi", en: "Courses & Certificates" },
            items: [
                { name: { id: "Ahli K3 Konstruksi", en: "Construction Safety (K3) Expert" }, issuer: "BNSP", year: "2023" },
                { name: { id: "Pushover Analysis Workshop", en: "Pushover Analysis Workshop" }, issuer: "Persatuan Insinyur Indonesia", year: "2021" },
                { name: { id: "SAP2000 & ETABS Advanced", en: "SAP2000 & ETABS Advanced" }, issuer: "StrukLab Course", year: "2019" },
            ],
        },
        experience: {
            label: { id: "Pengalaman Kerja", en: "Work Experience" },
            items: [
                {
                    role: { id: "Principal Structural Engineer", en: "Principal Structural Engineer" },
                    company: { id: "Aris W Studio, Yogyakarta", en: "Aris W Studio, Yogyakarta" },
                    period: { id: "2018 — Sekarang", en: "2018 — Present" },
                    desc: {
                        id: "40+ proyek gedung, jembatan, dan retrofit bangunan warisan di Jawa & Bali.",
                        en: "40+ building, bridge, and heritage retrofit projects across Java & Bali.",
                    },
                },
                {
                    role: { id: "Senior Structural Engineer", en: "Senior Structural Engineer" },
                    company: { id: "PT Wijaya Konstruksi", en: "PT Wijaya Konstruksi" },
                    period: "2013 — 2018",
                    desc: {
                        id: "Perencanaan struktur gedung 8 lantai dan jembatan rangka baja.",
                        en: "Structural design for an 8-story building and steel truss bridges.",
                    },
                },
                {
                    role: { id: "Site Engineer", en: "Site Engineer" },
                    company: { id: "Konsultan Sigma", en: "Sigma Consultants" },
                    period: "2010 — 2013",
                    desc: {
                        id: "Supervisi lapangan 12 proyek rumah sakit dan sekolah.",
                        en: "Field supervision of 12 hospital and school projects.",
                    },
                },
            ],
        },
        principles: {
            label: { id: "Filosofi Rancang", en: "Design Philosophy" },
            items: [
                {
                    t: { id: "Kejuhuran Struktur", en: "Structural Honesty" },
                    d: {
                        id: "Beban harus mengalir jujur; material tampil apa adanya.",
                        en: "Loads must flow honestly; materials show as they are.",
                    },
                },
                {
                    t: { id: "Ketelitian Rinci", en: "Mindful Detail" },
                    d: {
                        id: "Sambungan kecil dirancang sebesar bentang utamanya.",
                        en: "The smallest joint is designed as carefully as the main span.",
                    },
                },
                {
                    t: { id: "Rasa Tempat", en: "Sense of Place" },
                    d: {
                        id: "Struktur tunduk pada lanskap, bukan sebaliknya.",
                        en: "The structure defers to the landscape, never the reverse.",
                    },
                },
            ],
        },
        works: {
            label: { id: "Proyek Utama", en: "Featured Projects" },
            sub: {
                id: "Praktik struktur untuk gedung, jembatan, dan bangunan warisan.",
                en: "Structural practice for buildings, bridges, and heritage assets.",
            },
            items: [
                {
                    title: { id: "Gedung Parkir TLC Semarang", en: "TLC Parking Building, Semarang" },
                    meta: { id: "Struktur Beton · 6 lantai", en: "Concrete Structure · 6 floors" },
                    year: "2023",
                    img: "https://images.pexels.com/photos/8470842/pexels-photo-8470842.jpeg?auto=compress&cs=tinysrgb&w=1400",
                },
                {
                    title: { id: "Jembatan Kelok Sewu", en: "Kelok Sewu Bridge" },
                    meta: { id: "Rangka Baja · Bentang 120 m", en: "Steel Truss · 120 m span" },
                    year: "2022",
                    img: "https://images.pexels.com/photos/8482551/pexels-photo-8482551.jpeg?auto=compress&cs=tinysrgb&w=1200",
                },
                {
                    title: { id: "Retrofit Gudang Lama Surabaya", en: "Old Warehouse Retrofit, Surabaya" },
                    meta: { id: "Perkuatan Struktur · Heritage", en: "Strengthening · Heritage" },
                    year: "2024",
                    img: "https://images.unsplash.com/photo-1768677903496-becc4be07258?q=80&w=1200&auto=format&fit=crop",
                },
            ],
        },
        services: {
            label: { id: "Layanan", en: "Services" },
            items: [
                {
                    t: { id: "Perencanaan Struktur", en: "Structural Design" },
                    d: { id: "Beton, baja, kayu — dari pondasi hingga atap.", en: "Concrete, steel, timber — from foundation to roof." },
                },
                {
                    t: { id: "Supervisi Konstruksi", en: "Construction Supervision" },
                    d: { id: "QC harian, uji material, koordinasi lapangan.", en: "Daily QC, material testing, field coordination." },
                },
                {
                    t: { id: "Audit & Retrofit", en: "Audit & Retrofit" },
                    d: { id: "Investigasi, pengujian, rekomendasi perkuatan.", en: "Investigation, testing, strengthening advice." },
                },
                {
                    t: { id: "Manajemen Proyek", en: "Project Management" },
                    d: { id: "Jadwal, biaya, dan mutu dalam satu kendali.", en: "Schedule, cost, and quality under one control." },
                },
            ],
        },
        awards: {
            label: { id: "Penghargaan", en: "Awards & Honors" },
            items: [
                {
                    year: "2024",
                    name: {
                        id: "Keunggulan Rekayasa Struktur",
                        en: "Excellence in Structural Engineering",
                    },
                    by: "Persatuan Insinyur Indonesia",
                },
                {
                    year: "2022",
                    name: { id: "Best Safety Practice", en: "Best Safety Practice" },
                    by: "SKK Konstruksi Awards",
                },
                {
                    year: "2021",
                    name: {
                        id: "Sertifikasi Bangunan Hijau — Emas",
                        en: "Green Building Certification — Gold",
                    },
                    by: "GBC Indonesia",
                },
            ],
        },
        testimonials: {
            label: { id: "Testimoni Klien", en: "Client Testimonials" },
            items: [
                {
                    q: {
                        id: "Aris menjaga struktur kami tetap tenang di atas gempa dan pasar yang bergejolak.",
                        en: "Aris kept our structure calm through earthquakes and volatile markets alike.",
                    },
                    who: "Ir. Larissa Ardiningtya",
                    role: {
                        id: "Direktur Operasional, TLC Property",
                        en: "Director of Operations, TLC Property",
                    },
                },
                {
                    q: {
                        id: "Dokumen teknisnya rapi seperti karya tulis, presisi seperti jam.",
                        en: "His technical documents read like prose and tick like a watch.",
                    },
                    who: "Maria Sasmita",
                    role: { id: "Konsultan Utama", en: "Lead Consultant" },
                },
            ],
        },
        contact: {
            label: { id: "Kontak", en: "Contact" },
            heading: { id: "Mulai Sebuah Dialog", en: "Initiate a Dialogue" },
            email: "studio@arisw.studio",
            address: {
                id: "Yogyakarta, Indonesia — 07°48' S, 110°22' E",
                en: "Yogyakarta, Indonesia — 07°48' S, 110°22' E",
            },
        },
    },

    aperture: {
        cv: true,
        cover: "gallery",
        projectLayout: "gallery",
        flow: ["works", "about", "exp", "trust", "contact"],
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
        education: {
            label: { id: "Pendidikan", en: "Education" },
            items: [
                {
                    degree: { id: "S1 Fotografi", en: "B.A. Photography" },
                    school: { id: "Institut Seni Indonesia Yogyakarta", en: "Indonesia Institute of the Arts, Yogyakarta" },
                    period: "2011 — 2015",
                    note: { id: "Pameran bersama tahunan sejak 2012", en: "Annual group exhibitions since 2012" },
                },
                {
                    degree: { id: "SMK Multimedia Negeri 2 Yogyakarta", en: "SMK Multimedia Negeri 2 Yogyakarta" },
                    school: { id: "Teknik audio-visual", en: "Audio-visual engineering" },
                    period: "2008 — 2011",
                    note: { id: "Juara 1 lomba foto pelajar DIY", en: "1st winner, regional student photo contest" },
                },
            ],
        },
        courses: {
            label: { id: "Kursus & Sertifikasi", en: "Courses & Certificates" },
            items: [
                { name: { id: "Documentary Photography Masterclass", en: "Documentary Photography Masterclass" }, issuer: "Pannaphan Workshop", year: "2023" },
                { name: { id: "Studio Lighting Advanced", en: "Studio Lighting Advanced" }, issuer: "Kelas Kamera ID", year: "2021" },
                { name: { id: "Color Grading for Photographers", en: "Color Grading for Photographers" }, issuer: "Ruang Rawat", year: "2020" },
            ],
        },
        experience: {
            label: { id: "Pengalaman Kerja", en: "Work Experience" },
            items: [
                {
                    role: { id: "Fotografer Lepas", en: "Freelance Photographer" },
                    company: { id: "Editorial & komersial", en: "Editorial & commercial" },
                    period: { id: "2018 — Sekarang", en: "2018 — Present" },
                    desc: {
                        id: "Klien: Jurnal Rupa, Hotel Anantara, dan 12 brand lokal lainnya.",
                        en: "Clients: Jurnal Rupa, Hotel Anantara, and 12 other local brands.",
                    },
                },
                {
                    role: { id: "Staff Photographer", en: "Staff Photographer" },
                    company: { id: "Jurnal Rupa", en: "Jurnal Rupa" },
                    period: "2015 — 2018",
                    desc: {
                        id: "18 edisi cover story; spesialis potret manusia dan kota.",
                        en: "18 cover stories; specialist in human and city portraits.",
                    },
                },
                {
                    role: { id: "Assistant Photographer", en: "Assistant Photographer" },
                    company: { id: "Studio Loka, Bali", en: "Studio Loka, Bali" },
                    period: "2014 — 2015",
                    desc: {
                        id: "Set katalog produk dan wedding destination.",
                        en: "Product catalog sets and destination weddings.",
                    },
                },
            ],
        },
        principles: {
            label: { id: "Pendekatan", en: "Approach" },
            items: [
                {
                    t: { id: "Cahaya Dulu", en: "Light First" },
                    d: {
                        id: "Sebelum pose, sebelum konsep — cahaya yang jujur.",
                        en: "Before pose, before concept — honest light.",
                    },
                },
                {
                    t: { id: "Ketika Tak Diganggu", en: "Uninterrupted" },
                    d: {
                        id: "Momen terbaik datang saat subjek lupa ada kamera.",
                        en: "The best moments arrive when subjects forget the camera.",
                    },
                },
                {
                    t: { id: "Hitam yang Tenang", en: "A Quiet Black" },
                    d: {
                        id: "Kontras melayani suasana, bukan sekadar tajam.",
                        en: "Contrast serves mood, not mere sharpness.",
                    },
                },
            ],
        },
        works: {
            label: { id: "Galeri Terpilih", en: "Selected Gallery" },
            sub: {
                id: "Arahkan kursor untuk melihat judul — potret, komersial, dan di antaranya.",
                en: "Hover to reveal titles — portraits, commercial work, and the moments between.",
            },
            items: [
                {
                    title: { id: "Serial 'Tukang Kayu'", en: "'The Woodworkers' Series" },
                    meta: { id: "Potret Dokumenter", en: "Documentary Portrait" },
                    year: "2024",
                    img: tplImg("aperture_tukang_kayu"),
                },
                {
                    title: { id: "Editorial 'Pasar Buku'", en: "'Book Market' Editorial" },
                    meta: { id: "Editorial", en: "Editorial" },
                    year: "2023",
                    img: tplImg("aperture_pasar_buku"),
                },
                {
                    title: { id: "Kampanye Hotel Anantara", en: "Anantara Hotel Campaign" },
                    meta: { id: "Komersial", en: "Commercial" },
                    year: "2024",
                    img: tplImg("aperture_hotel"),
                },
                {
                    title: { id: "Potret Studio — Seri Dua", en: "Studio Portraits — Series Two" },
                    meta: { id: "Potret", en: "Portrait" },
                    year: "2023",
                    img: tplImg("aperture_potret"),
                },
                {
                    title: { id: "Di Balik Panggung", en: "Behind the Stage" },
                    meta: { id: "Dokumenter", en: "Documentary" },
                    year: "2022",
                    img: tplImg("aperture_backstage"),
                },
            ],
        },
        services: {
            label: { id: "Layanan", en: "Services" },
            items: [
                {
                    t: { id: "Potret Editorial", en: "Editorial Portraits" },
                    d: { id: "Studio & lokasi, retouch natural.", en: "Studio & location, natural retouching." },
                },
                {
                    t: { id: "Produk & Komersial", en: "Product & Commercial" },
                    d: { id: "Katalog, packshot, kampanye 360°.", en: "Catalogs, packshots, 360° campaigns." },
                },
                {
                    t: { id: "Dokumentasi Acara", en: "Event Documentation" },
                    d: { id: "Pernikahan sampai peluncuran produk.", en: "Weddings to product launches." },
                },
                {
                    t: { id: "Cetak Kolektor", en: "Collector Prints" },
                    d: { id: "Edisi terbatas 10, bernomor & tanda tangan.", en: "Limited editions of 10, numbered & signed." },
                },
            ],
        },
        awards: {
            label: { id: "Penghargaan", en: "Awards" },
            items: [
                {
                    year: "2024",
                    name: { id: "Finalis — Portrait Awards", en: "Finalist — Portrait Awards" },
                    by: "Lens Culture",
                },
                {
                    year: "2023",
                    name: { id: "Emas — Kategori Komersial", en: "Gold — Commercial Category" },
                    by: "AdPhoto Awards",
                },
                {
                    year: "2022",
                    name: { id: "Pameran Solo 'Diam'", en: "'Silence' Solo Exhibition" },
                    by: "Galeri Cempaka",
                },
            ],
        },
        testimonials: {
            label: { id: "Testimoni", en: "Testimonials" },
            items: [
                {
                    q: {
                        id: "Danu menangkap hal yang tidak kami minta — dan justru itu yang kami butuhkan.",
                        en: "Danu captured what we never asked for — and it was exactly what we needed.",
                    },
                    who: "Larissa Ardi",
                    role: { id: "Editor, Jurnal Rupa", en: "Editor, Jurnal Rupa" },
                },
                {
                    q: {
                        id: "Tenang, cepat, hasilnya membuat tim kami terdiam beberapa detik.",
                        en: "Calm, quick, and the results made our team go quiet for a few seconds.",
                    },
                    who: "Michael Tanaya",
                    role: { id: "Brand Director, Anantara", en: "Brand Director, Anantara" },
                },
            ],
        },
        contact: {
            label: { id: "Kontak", en: "Contact" },
            heading: { id: "Pesan Sesi", en: "Book a Session" },
            email: "studio@danurahardjo.com",
            address: {
                id: "Bali / Jakarta — siap terbang",
                en: "Bali / Jakarta — available to travel",
            },
        },
    },

    deploy: {
        cv: true,
        cover: "terminal",
        projectLayout: "list",
        flow: ["exp", "works", "edu", "trust", "contact"],
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
                { n: "99,9%", l: { id: "Uptime Terjaga", en: "Uptime Maintained" } },
            ],
        },
        education: {
            label: { id: "Pendidikan", en: "Education" },
            items: [
                {
                    degree: { id: "S1 Informatika", en: "B.Sc. Informatics" },
                    school: { id: "Institut Teknologi Bandung", en: "Bandung Institute of Technology" },
                    period: "2015 — 2019",
                    note: { id: "Skripsi: sistem antrian real-time", en: "Thesis: real-time queueing systems" },
                },
                {
                    degree: { id: "SMA Negeri 1 Bandung — MIPA", en: "SMA Negeri 1 Bandung — Science Major" },
                    school: { id: "Kelas unggulan", en: "Accelerated class" },
                    period: "2012 — 2015",
                    note: { id: "Medali emas OSN Komputer", en: "Gold medal, national computer olympiad" },
                },
            ],
        },
        courses: {
            label: { id: "Kursus & Sertifikasi", en: "Courses & Certificates" },
            items: [
                { name: { id: "Certified Solutions Architect", en: "Certified Solutions Architect" }, issuer: "Amazon Web Services", year: "2022" },
                { name: { id: "Professional Scrum Master I", en: "Professional Scrum Master I" }, issuer: "Scrum.org", year: "2021" },
                { name: { id: "Advanced React Patterns", en: "Advanced React Patterns" }, issuer: "ReactMastery Bootcamp", year: "2020" },
            ],
        },
        experience: {
            label: { id: "Pengalaman Kerja", en: "Work Experience" },
            items: [
                {
                    role: { id: "Senior Frontend Engineer", en: "Senior Frontend Engineer" },
                    company: { id: "Fintech Cuan, Jakarta (hybrid)", en: "Fintech Cuan, Jakarta (hybrid)" },
                    period: { id: "2021 — Sekarang", en: "2021 — Present" },
                    desc: {
                        id: "Memimpin migrasi design system; bundle turun 41%, conversion naik 12%.",
                        en: "Led design system migration; bundle down 41%, conversion up 12%.",
                    },
                },
                {
                    role: { id: "Fullstack Developer", en: "Fullstack Developer" },
                    company: { id: "Agensi Pixel, Bandung", en: "Agensi Pixel, Bandung" },
                    period: "2019 — 2021",
                    desc: {
                        id: "Meluncurkan 6 situs klien dengan LCP di bawah 2 detik.",
                        en: "Shipped 6 client sites with LCP under 2 seconds.",
                    },
                },
                {
                    role: { id: "Software Engineer Intern", en: "Software Engineer Intern" },
                    company: { id: "Startup DataKita", en: "DataKita (startup)" },
                    period: "2019",
                    desc: {
                        id: "Pipeline ETL data terbuka untuk dashboard publik.",
                        en: "Open-data ETL pipeline for a public dashboard.",
                    },
                },
            ],
        },
        principles: {
            label: { id: "Prinsip", en: "Principles" },
            items: [
                {
                    t: { id: "Sederhana Dulu", en: "Simple First" },
                    d: {
                        id: "Abstraksi hanya saat pengulangan benar-benar terjadi.",
                        en: "Abstract only when repetition truly happens.",
                    },
                },
                {
                    t: { id: "Ukur, Jangan Duga", en: "Measure, Don't Guess" },
                    d: {
                        id: "Profil sebelum optimasi; log sebelum kesimpulan.",
                        en: "Profile before optimizing; log before concluding.",
                    },
                },
                {
                    t: { id: "Pengguna di Atas Sistem", en: "Users Above Systems" },
                    d: {
                        id: "Arsitektur elegan yang lambat tetap gagal.",
                        en: "Elegant architecture that is slow is still failure.",
                    },
                },
            ],
        },
        works: {
            label: { id: "Proyek Terpilih", en: "Featured Repos" },
            sub: {
                id: "Produk produksi dan open source yang masih saya rawat.",
                en: "Production products and open source I still maintain.",
            },
            items: [
                {
                    title: { id: "Dashboard Analitik Real-time", en: "Real-time Analytics Dashboard" },
                    meta: {
                        id: "React · WebSocket · 50rb event/menit",
                        en: "React · WebSocket · 50k events/min",
                    },
                    year: "2024",
                    img: "https://images.pexels.com/photos/6424583/pexels-photo-6424583.jpeg?auto=compress&cs=tinysrgb&w=1400",
                },
                {
                    title: { id: "PWA E-commerce Kiloan", en: "Kiloan E-commerce PWA" },
                    meta: {
                        id: "Next.js · LCP 1,2s · Konversi +34%",
                        en: "Next.js · 1.2s LCP · +34% conversions",
                    },
                    year: "2023",
                    img: "https://images.pexels.com/photos/14553730/pexels-photo-14553730.jpeg?auto=compress&cs=tinysrgb&w=1200",
                },
                {
                    title: { id: "API Kasir UMKM", en: "UMKM POS API" },
                    meta: { id: "FastAPI · 300+ toko", en: "FastAPI · 300+ stores" },
                    year: "2024",
                    img: "https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?q=80&w=1200&auto=format&fit=crop",
                },
                {
                    title: { id: "Bot Laporan Harian Telegram", en: "Telegram Daily Report Bot" },
                    meta: { id: "Node.js · Cron · 40 subs", en: "Node.js · Cron · 40 subs" },
                    year: "2022",
                    img: "https://images.unsplash.com/photo-1599837565318-67429bde7162?q=80&w=1200&auto=format&fit=crop",
                },
            ],
        },
        services: {
            label: { id: "Layanan", en: "Services" },
            items: [
                {
                    t: { id: "Pengembangan Frontend", en: "Frontend Development" },
                    d: { id: "React, aksesibilitas AA, bundle kecil.", en: "React, AA accessibility, small bundles." },
                },
                {
                    t: { id: "Backend & API", en: "Backend & APIs" },
                    d: { id: "Desain endpoint konsisten & cepat.", en: "Consistent, fast endpoint design." },
                },
                {
                    t: { id: "DevOps & Deployment", en: "DevOps & Deployment" },
                    d: { id: "CI/CD, monitoring, alerting.", en: "CI/CD, monitoring, alerting." },
                },
                {
                    t: { id: "Optimasi Performa", en: "Performance Optimization" },
                    d: { id: "Core Web Vitals hijau dijamin.", en: "Guaranteed green Core Web Vitals." },
                },
            ],
        },
        awards: {
            label: { id: "Pengakuan", en: "Recognition" },
            items: [
                {
                    year: "2024",
                    name: { id: "Kontributor Open Source Teratas", en: "Top Open Source Contributor" },
                    by: "GitHub Stars ID",
                },
                {
                    year: "2023",
                    name: { id: "Juara — Hackathon Nasional", en: "Winner — National Hackathon" },
                    by: "DevSummit",
                },
                {
                    year: "2022",
                    name: { id: "Certified Solutions Architect", en: "Certified Solutions Architect" },
                    by: "Amazon Web Services",
                },
            ],
        },
        testimonials: {
            label: { id: "Testimoni", en: "Testimonials" },
            items: [
                {
                    q: {
                        id: "Rizky merapikan warisan kode kami dalam hitungan minggu, bukan kuartal.",
                        en: "Rizky untangled our legacy code in weeks, not quarters.",
                    },
                    who: "Larissa Ardiningtya",
                    role: { id: "CTO, Startup Fintech", en: "CTO, Fintech Startup" },
                },
                {
                    q: {
                        id: "Dokumentasinya membuat engineer baru produktif di hari pertama.",
                        en: "His docs made new engineers productive on day one.",
                    },
                    who: "Michael Tanaya",
                    role: { id: "Engineering Manager", en: "Engineering Manager" },
                },
            ],
        },
        contact: {
            label: { id: "Kontak", en: "Contact" },
            heading: { id: "$ kirim --pesan", en: "$ send --message" },
            email: "rizky@deploy.dev",
            address: {
                id: "Bandung, Indonesia — UTC+7",
                en: "Bandung, Indonesia — UTC+7",
            },
        },
    },

    etalase: {
        cv: false,
        cover: "warm",
        projectLayout: "menu",
        flow: ["about", "works", "trust", "contact"],
        profile: {
            name: "Dapur Nusantara",
            role: {
                id: "Katering & Frozen Food · Ibu Sari Wulandari",
                en: "Catering & Frozen Food · Mrs. Sari Wulandari",
            },
            quote: {
                id: "Setiap pesanan dimasak seperti untuk keluarga sendiri — karena pelanggan itu keluarga.",
                en: "Every order is cooked like it's for our own family — because customers are family.",
            },
            img: tplImg("etalase_gudeg"),
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
                    d: {
                        id: "Belanja pagi dari pasar tradisional terdekat.",
                        en: "Sourced each morning from the nearest traditional market.",
                    },
                },
                {
                    t: { id: "Tanpa Pengawet", en: "No Preservatives" },
                    d: {
                        id: "Rasa asli dijaga lewat proses, bukan bahan kimia.",
                        en: "Real flavor kept through process, not chemicals.",
                    },
                },
                {
                    t: { id: "Antar Sepadan", en: "Same-Day Delivery" },
                    d: {
                        id: "Pesanan sebelum jam 10 tiba hari itu juga.",
                        en: "Orders before 10am arrive the same day.",
                    },
                },
            ],
        },
        works: {
            label: { id: "Menu Andalan", en: "Signature Menu" },
            sub: {
                id: "Yang paling sering dipesan pelanggan setia kami — pesan langsung dari sini.",
                en: "The most-ordered favorites from our regulars — order straight from here.",
            },
            items: [
                {
                    title: { id: "Gudeg Kendil 1 kg", en: "Gudeg Kendil 1 kg" },
                    meta: {
                        id: "Rp85.000 · Best seller",
                        en: "Rp85.000 · Best seller",
                    },
                    year: "Frozen",
                    img: tplImg("etalase_gudeg"),
                },
                {
                    title: { id: "Sate Ayam Bakar 20 tusuk", en: "Grilled Chicken Satay x20" },
                    meta: {
                        id: "Rp120.000 · Fresh",
                        en: "Rp120.000 · Fresh",
                    },
                    year: "Fresh",
                    img: tplImg("etalase_sate"),
                },
                {
                    title: { id: "Sambal Nusantara 5 botol", en: "Nusantara Sambal 5 jars" },
                    meta: { id: "Rp150.000 · Paket", en: "Rp150.000 · Bundle" },
                    year: "Hampers",
                    img: tplImg("etalase_sambal"),
                },
            ],
        },
        services: {
            label: { id: "Pelayanan", en: "What We Serve" },
            items: [
                {
                    t: { id: "Katering Acara", en: "Event Catering" },
                    d: { id: "Syukuran, rapat, resepsi — 50-1.000 pax.", en: "Celebrations, meetings, weddings — 50-1,000 pax." },
                },
                {
                    t: { id: "Frozen Food", en: "Frozen Food" },
                    d: { id: "Tahan 30 hari, tinggal kukus 15 menit.", en: "Keeps 30 days, just re-steam 15 minutes." },
                },
                {
                    t: { id: "Langganan Makan", en: "Meal Subscription" },
                    d: { id: "Paket mingguan untuk kantor & keluarga.", en: "Weekly plans for offices & families." },
                },
                {
                    t: { id: "Hampers & Oleh-oleh", en: "Hampers & Gifts" },
                    d: { id: "Kemasan rapi, kartu ucapan custom.", en: "Neat packaging, custom greeting cards." },
                },
            ],
        },
        awards: {
            label: { id: "Kepercayaan", en: "Trust & Recognition" },
            items: [
                {
                    year: "2024",
                    name: { id: "UMKM Unggulan Kuliner", en: "Outstanding Culinary UMKM" },
                    by: "Dinas Koperasi & UMKM",
                },
                {
                    year: "2023",
                    name: { id: "Sertifikat Layak Edar", en: "Food Distribution Permit" },
                    by: "BPOM",
                },
                {
                    year: "2022",
                    name: {
                        id: "Rating 4,9 dari 1.000+ ulasan",
                        en: "4.9 rating from 1,000+ reviews",
                    },
                    by: "Google Maps",
                },
            ],
        },
        testimonials: {
            label: { id: "Kata Pelanggan", en: "Customer Words" },
            items: [
                {
                    q: {
                        id: "Rasanya konsisten dari tahun ke tahun — kantor kami langganan tiap pekan.",
                        en: "The taste stays consistent year after year — our office orders weekly.",
                    },
                    who: "Larissa Ardi",
                    role: { id: "Manajer Kantor, PT Sinar Kreasi", en: "Office Manager, PT Sinar Kreasi" },
                },
                {
                    q: {
                        id: "Frozen-nya praktis, anak-anak suka, harga masuk akal.",
                        en: "The frozen packs are practical, the kids love them, prices are fair.",
                    },
                    who: "Maria Sasmita",
                    role: { id: "Pelanggan Setia", en: "Loyal Customer" },
                },
            ],
        },
        contact: {
            label: { id: "Kontak", en: "Contact" },
            heading: { id: "Pesan Sekarang", en: "Order Now" },
            email: "pesanan@dapurnusantara.id",
            address: {
                id: "Jl. Kemerdekaan No. 12, Yogyakarta — Buka 08.00-20.00",
                en: "12 Kemerdekaan St., Yogyakarta — Open 08.00-20.00",
            },
        },
    },
};

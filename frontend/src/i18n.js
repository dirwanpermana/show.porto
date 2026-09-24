import { createContext, useContext, useEffect, useState } from "react";

const LangCtx = createContext({ lang: "id", setLang: () => {} });

export const LangProvider = ({ children }) => {
    const [lang, setLang] = useState(() => {
        try {
            return localStorage.getItem("karyaloka-lang") || "id";
        } catch {
            return "id";
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem("karyaloka-lang", lang);
        } catch {}
        document.documentElement.lang = lang === "en" ? "en" : "id";
    }, [lang]);

    return (
        <LangCtx.Provider value={{ lang, setLang }}>
            {children}
        </LangCtx.Provider>
    );
};

export const useLang = () => useContext(LangCtx);

export const SITE = {
    nav: {
        template: { id: "Template", en: "Templates" },
        pratinjau: { id: "Pratinjau", en: "Live Demo" },
        fitur: { id: "Fitur", en: "Features" },
        proses: { id: "Proses", en: "Process" },
        harga: { id: "Harga", en: "Pricing" },
        faq: { id: "FAQ", en: "FAQ" },
        cta: { id: "Mulai Sekarang", en: "Get Started" },
    },
    hero: {
        badge: {
            id: "Jasa website portofolio & UMKM",
            en: "Portfolio & UMKM website studio",
        },
        l1: { id: "Biarkan karyamu", en: "Let your work" },
        l2: { id: "bicara.", en: "speak." },
        sub: {
            id: "Kami membangun website portofolio untuk pencari kerja dan landing page katalog untuk UMKM — pengalaman, pendidikan, proyek, sampai produk, tampil dalam satu halaman yang memukau.",
            en: "We build portfolio websites for job seekers and catalog landing pages for small businesses — experience, education, projects, and products, all in one stunning page.",
        },
        cta1: { id: "Mulai dari Rp499rb", en: "Start from Rp499k" },
        cta2: { id: "Lihat Template", en: "Browse Templates" },
        specs: {
            id: "100% Responsif · SEO dasar · Serah terima 5-10 hari",
            en: "100% Responsive · Basic SEO · Delivered in 5-10 days",
        },
        chip: {
            id: "Detail: PDF · Video · GitHub",
            en: "Details: PDF · Video · GitHub",
        },
    },
    aud: {
        tag: { id: "Dibuat untuk siapa", en: "Built for whom" },
        title: {
            id: "Dua masalah, satu rumah digital.",
            en: "Two problems, one digital home.",
        },
        jobT: { id: "Pencari Kerja", en: "Job Seekers" },
        jobD: {
            id: "Pengalaman kerja, riwayat pendidikan, dan proyek yang pernah dibangun — tersusun rapi, jauh lebih hidup daripada file CV.",
            en: "Work experience, education history, and the projects you have built — neatly arranged, far more alive than a CV file.",
        },
        jobCta: { id: "Lihat paket PORTO", en: "See the PORTO plan" },
        umkmT: { id: "UMKM", en: "Small Business" },
        umkmD: {
            id: "Daftar produk bergaya e-commerce: foto, harga, dan tombol pesan yang langsung menghubungkan pelanggan ke WhatsApp-mu.",
            en: "An e-commerce style product list: photos, prices, and an order button that connects customers straight to your WhatsApp.",
        },
        umkmCta: { id: "Lihat paket UMKM", en: "See the UMKM plan" },
        chips: [
            { id: "Pengalaman", en: "Experience" },
            { id: "Pendidikan", en: "Education" },
            { id: "Proyek", en: "Projects" },
        ],
        specs: [
            { id: "Mobile-first", en: "Mobile-first" },
            { id: "SEO dasar", en: "Basic SEO" },
            { id: "Serah terima cepat", en: "Fast delivery" },
            { id: "Panduan update mandiri", en: "Self-serve update guide" },
        ],
    },
    tpl: {
        tag: { id: "Koleksi template", en: "Template collection" },
        title: { id: "Satu untuk setiap bidang.", en: "One for every field." },
        sub: {
            id: "Setiap template punya gaya desainnya sendiri — dari editorial hangat sampai terminal mono. Klik detail untuk melihat hasil desain penuhnya.",
            en: "Each template carries its own design style — from warm editorial to mono terminal. Click details to view the full design result.",
        },
        detail: { id: "Lihat Detail", en: "View Details" },
        style: { id: "Gaya", en: "Style" },
        prev: { id: "Sebelumnya", en: "Previous" },
        next: { id: "Berikutnya", en: "Next" },
        choose: { id: "Pilih template", en: "Choose" },
        note: {
            id: "Pratinjau hasil desain — konten demo.",
            en: "Design result preview — demo content.",
        },
    },
    demo: {
        tag: { id: "Pratinjau langsung", en: "Live preview" },
        title: {
            id: "Beginilah nanti karyamu tampil.",
            en: "This is how your work will look.",
        },
        sub: {
            id: "Coba sendiri: pilih mode pencari kerja atau UMKM, buka detail proyek, klik tombol pesan. Konten demo.",
            en: "Try it yourself: pick the job seeker or small business mode, open project details, click order. Demo content.",
        },
        tabKerja: { id: "Pencari Kerja", en: "Job Seeker" },
        tabUmkm: { id: "UMKM", en: "Business" },
        exp: { id: "Pengalaman", en: "Experience" },
        edu: { id: "Pendidikan", en: "Education" },
        works: {
            id: "Proyek pilihan — card slider",
            en: "Featured projects — card slider",
        },
        worksNote: {
            id: "Tombol Detail membuka gambar, PDF, PowerPoint, video, atau link GitHub dari setiap proyek.",
            en: "The Details button opens images, PDF, PowerPoint, video, or GitHub links from each project.",
        },
        umkmNote: {
            id: "Katalog bergaya e-commerce dengan tombol pesan langsung ke WhatsApp.",
            en: "E-commerce style catalog with an order button straight to WhatsApp.",
        },
        order: { id: "Pesan", en: "Order" },
        ongkir: { id: "Gratis ongkir 10km", en: "Free delivery within 10km" },
        open: { id: "Buka 08.00-20.00", en: "Open 08.00-20.00" },
        detailBtn: { id: "Detail", en: "Details" },
    },
    feat: {
        tag: { id: "Fitur", en: "Features" },
        title: {
            id: "Semua yang dibutuhkan untuk tampil profesional.",
            en: "Everything you need to look professional.",
        },
        sub: {
            id: "Struktur teruji untuk CV hidup dan etalase digital — tanpa kamu perlu menyentuh kode.",
            en: "A proven structure for a living CV and digital storefront — no code needed on your side.",
        },
    },
    proc: {
        tag: { id: "Proses", en: "Process" },
        title: {
            id: "Empat langkah, website siap tayang.",
            en: "Four steps, a launch-ready website.",
        },
        sub: {
            id: "Kami yang mengerjakan teknisnya — kamu cukup bercerita dan menyetujui.",
            en: "We handle the technical work — you just tell your story and approve.",
        },
    },
    price: {
        tag: { id: "Harga", en: "Pricing" },
        title: {
            id: "Sekali bayar, karya tampil selamanya.",
            en: "Pay once, your work shines forever.",
        },
        sub: {
            id: "Tidak ada biaya bulanan tersembunyi. Pilih titik awal, upgrade kapan saja.",
            en: "No hidden monthly fees. Pick a starting point, upgrade anytime.",
        },
        period: { id: "sekali bayar", en: "one-time" },
        popular: { id: "Paling laris", en: "Most popular" },
        choose: { id: "Pilih", en: "Choose" },
        note: {
            id: "*Harga contoh yang bisa disesuaikan — konsultasikan kebutuhanmu untuk penawaran final.",
            en: "*Sample pricing, adjustable — discuss your needs for a final quote.",
        },
    },
    faq: {
        tag: { id: "FAQ", en: "FAQ" },
        title: {
            id: "Pertanyaan yang sering muncul.",
            en: "Frequently asked questions.",
        },
        sub: {
            id: "Tidak menemukan jawabanmu? Kirim pertanyaan lewat formulir di bawah.",
            en: "Didn't find your answer? Send it via the form below.",
        },
    },
    lead: {
        tag: { id: "Mulai sekarang", en: "Start now" },
        t1: { id: "Siap tampil", en: "Ready to stand" },
        grad: { id: "beda?", en: "out?" },
        sub: {
            id: "Konsultasi gratis, tanpa komitmen. Ceritakan karya atau usahamu — kami balas dengan rencana website yang konkret.",
            en: "Free consultation, no commitment. Tell us about your work or business — we reply with a concrete website plan.",
        },
        wa: { id: "Chat langsung via WhatsApp", en: "Chat directly via WhatsApp" },
        name: { id: "Nama", en: "Name" },
        namePh: { id: "Nama kamu", en: "Your name" },
        contact: { id: "Email / WhatsApp", en: "Email / WhatsApp" },
        contactPh: { id: "nama@email.com atau 08xx", en: "you@email.com or 08xx" },
        intent: { id: "Kebutuhan", en: "Your need" },
        message: { id: "Ceritakan singkat", en: "Tell us briefly" },
        messagePh: {
            id: "Contoh: Saya desainer grafis, punya 8 proyek yang ingin ditampilkan…",
            en: "Example: I am a graphic designer with 8 projects to showcase…",
        },
        submit: {
            id: "Kirim & Dapatkan Konsultasi Gratis",
            en: "Send & Get a Free Consultation",
        },
        sending: { id: "Mengirim…", en: "Sending…" },
        toastOk: { id: "Pesan terkirim!", en: "Message sent!" },
        toastOkDesc: {
            id: "Terima kasih! Tim Karyaloka akan menghubungimu maksimal 1x24 jam.",
            en: "Thank you! The Karyaloka team will reach out within 24 hours.",
        },
        toastErr: { id: "Gagal mengirim", en: "Failed to send" },
        toastErrDesc: {
            id: "Coba lagi atau hubungi kami via WhatsApp.",
            en: "Try again or reach us via WhatsApp.",
        },
    },
    footer: {
        tagline: {
            id: "Rumah karya digitalmu. Website portofolio untuk pencari kerja & etalase digital untuk UMKM Indonesia.",
            en: "Your digital home for work. Portfolio websites for job seekers & digital storefronts for Indonesian small businesses.",
        },
        services: { id: "Layanan", en: "Services" },
        info: { id: "Informasi", en: "Information" },
        rights: { id: "Seluruh hak cipta.", en: "All rights reserved." },
        made: {
            id: "Dibuat dengan presisi di Indonesia.",
            en: "Crafted with precision in Indonesia.",
        },
    },
};

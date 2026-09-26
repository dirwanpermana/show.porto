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
            id: "Don't just tell. Show it.",
            en: "Don't just tell. Show it.",
        },
        l1: { id: "Biarkan karyamu", en: "Let your work" },
        l2: { id: "bicara.", en: "speak." },
        sub: {
            id: "CV PDF itu udah gitu-gitu aja. Rekruter cuma scroll 7 detik, UMKM butuh etalase yang jualan 24/7. Di sini pengalaman, pendidikan, proyek, sampai produk kamu tampil full — auto dilirik, auto laku.",
            en: "PDF CVs are so last season. Recruiters scroll for 7 seconds, small businesses need a storefront that sells 24/7. Here, your experience, education, projects, and products get the spotlight — instant attention, instant sales.",
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
        tag: { id: "Buat siapa sih?", en: "Who's this for?" },
        title: {
            id: "CV datar, katalog sepi? Waktunya naik level.",
            en: "Flat CV, empty catalog? Time to level up.",
        },
        jobT: { id: "Pencari Kerja", en: "Job Seekers" },
        jobD: {
            id: "Masih andelin CV PDF yang isinya teks doang? Rekruter nggak bakal bacain semua. Di sini pengalaman kerja, pendidikan, dan proyekmu kepack dalam satu halaman yang bikin mereka berhenti scroll.",
            en: "Still leaning on a plain PDF CV? Recruiters won't read all that. Here, your experience, education, and projects hit different — one page that makes them stop scrolling.",
        },
        jobCta: { id: "Lihat paket PORTO", en: "See the PORTO plan" },
        umkmT: { id: "UMKM", en: "Small Business" },
        umkmD: {
            id: "Nggak perlu bikin aplikasi yang mahal. Katalog produk rapi + foto cakep + tombol pesan langsung nempel ke WhatsApp kamu. Pelanggan klik, kamu tinggal nonek. Beres.",
            en: "No need for an expensive app. A tidy catalog + pretty photos + an order button wired straight to your WhatsApp. Customers tap, you just pack and ship. Done.",
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
            { id: "Proses anti ribet", en: "Zero-hassle process" },
        ],
    },
    tpl: {
        tag: { id: "Koleksi template", en: "Template collection" },
        title: { id: "Satu untuk setiap bidang.", en: "One for every field." },
        sub: {
            id: "Enam template, enam gaya — masing-masing udah diracik sesuai bidangnya. Klik detail, terus scroll santai aja.",
            en: "Six templates, six vibes — each crafted for its own field. Click details, then scroll around.",
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
        cv: { id: "Unduh CV", en: "Download CV" },
        seeWorks: { id: "Lihat Proyek", en: "View Projects" },
        seeMenu: { id: "Lihat Menu", en: "View Menu" },
        pages: {
            cover: { id: "Cover", en: "Cover" },
            about: { id: "Tentang Saya", en: "About Me" },
            edu: { id: "Pendidikan & Kursus", en: "Education & Courses" },
            exp: { id: "Pengalaman Kerja", en: "Work Experience" },
            works: { id: "Proyek", en: "Projects" },
            awards: { id: "Penghargaan & Testimoni", en: "Awards & Testimonials" },
            trust: { id: "Layanan & Kepercayaan", en: "Services & Trust" },
            contact: { id: "Kontak", en: "Contact" },
        },
        form: {
            name: { id: "Nama", en: "Name" },
            email: { id: "Email", en: "Email" },
            msg: { id: "Pesan", en: "Message" },
            send: { id: "Kirim Pesan", en: "Send Message" },
            note: {
                id: "Pratinjau desain — tombol ini aktif di website jadimu nanti.",
                en: "Design preview — this button goes live on your future website.",
            },
        },
    },
    demo: {
        tag: { id: "Pratinjau langsung", en: "Live preview" },
        title: {
            id: "Jangan cuma dibaca — cobain sendiri.",
            en: "Don't just read it — try it yourself.",
        },
        sub: {
            id: "Ganti mode pencari kerja atau UMKM, buka detail proyek, klik tombol pesan. Santai, ini konten demo.",
            en: "Switch between job seeker or small business, open project details, hit the order button. Relax, it's demo content.",
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
        title: { id: "Fiturnya komplit, dramanya nol.", en: "Full features, zero drama." },
        sub: {
            id: "Semua yang bikin karyamu kelihatan mahal — tanpa kamu pegang kode sedetik pun.",
            en: "Everything that makes your work look premium — without touching a line of code.",
        },
    },
    proc: {
        tag: { id: "Proses", en: "Process" },
        title: { id: "Alurnya? Empat langkah, beres.", en: "The flow? Four steps, done." },
        sub: {
            id: "Nggak ada istilah teknis yang bikin mumet. Kamu cerita, kami yang kerjain.",
            en: "No jargon that makes your head spin. You tell the story, we do the work.",
        },
    },
    price: {
        tag: { id: "Harga", en: "Pricing" },
        title: { id: "Sekali bayar. Nggak ada biaya siluman.", en: "Pay once. No ghost fees." },
        sub: {
            id: "Harga jujur di depan. Mau mulai kecil dulu? Santai, upgrade bisa kapan aja.",
            en: "Honest pricing up front. Starting small? Chill, upgrade anytime.",
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
            id: "Yang biasanya ditanyakan.",
            en: "What people usually ask.",
        },
        sub: {
            id: "Masih ada yang ngetik di kepala? Tanya langsung lewat formulir di bawah.",
            en: "Still got questions floating in your head? Drop them in the form below.",
        },
    },
    lead: {
        tag: { id: "Mulai sekarang", en: "Start now" },
        t1: { id: "Siap tampil", en: "Ready to stand" },
        grad: { id: "beda?", en: "out?" },
        sub: {
            id: "Konsultasi gratis, nggak pake ribet, nggak pake jualan-tekanan. Ceritain mau jadi apa — kita balas dengan rencana yang jelas.",
            en: "Free consult, zero hassle, zero pushy sales. Tell us what you want to become — we reply with a clear plan.",
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
            id: "Kirim & Konsultasi Gratis",
            en: "Send & Chat for Free",
        },
        sending: { id: "Mengirim…", en: "Sending…" },
        toastOk: { id: "Pesan terkirim!", en: "Message sent!" },
        toastOkDesc: {
            id: "Mantap! Tim show.porto bales maksimal 1x24 jam. Siap-siap tampil beda.",
            en: "Awesome! The show.porto team replies within 24 hours. Get ready to stand out.",
        },
        toastErr: { id: "Gagal mengirim", en: "Failed to send" },
        toastErrDesc: {
            id: "Coba lagi atau hubungi kami via WhatsApp.",
            en: "Try again or reach us via WhatsApp.",
        },
    },
    footer: {
        tagline: {
            id: "Don't just tell. Show it. — Rumah buat karya & jualanmu tampil maksimal.",
            en: "Don't just tell. Show it. — Where your work and business get seen.",
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

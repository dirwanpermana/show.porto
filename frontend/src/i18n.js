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
        cta: { id: "Pesan Sekarang", en: "Order Now" },
        umkm: { id: "Landing UMKM", en: "UMKM Landing" },
        porto: { id: "Portfolio", en: "Portfolio" },
        home: { id: "Beranda", en: "Home" },
        kontak: { id: "Kontak", en: "Contact" },
    },
    hero: {
        badge: {
            id: "Don't just tell. Show it.",
            en: "Don't just tell. Show it.",
        },
        l1: { id: "Biarkan karyamu", en: "Let your work" },
        l2: { id: "bicara.", en: "speak." },
        sub: {
            id: "CV PDF itu udah gitu-gitu aja. Rekruter cuma scroll 7 detik, UMKM butuh landing page yang jualan 24/7. Di sini pengalaman, pendidikan, proyek, sampai produk kamu tampil full — auto dilirik, auto laku.",
            en: "PDF CVs are so last season. Recruiters scroll for 7 seconds, small businesses need a landing page that sells 24/7. Here, your experience, education, projects, and products get the spotlight — instant attention, instant sales.",
        },
        cta1: { id: "Mulai dari Rp150rb", en: "Start from Rp150k" },
        cta2: { id: "Lihat Template", en: "Browse Templates" },
        specs: {
            id: "100% Responsif · Web jadi atau Source Code · Serah terima 3-7 hari",
            en: "100% Responsive · Ready website or Source Code · Delivered in 3-7 days",
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
        jobCta: { id: "Lihat paket PORTO", en: "See the PORTO plans" },
        umkmT: { id: "Landing Page UMKM", en: "Small Business Landing Page" },
        umkmD: {
            id: "Nggak perlu bikin aplikasi yang mahal. Satu landing page: layanan, katalog produk rapi + foto cakep, testimoni, dan tombol pesan yang langsung nempel ke WhatsApp kamu. MUA, sewa kebaya, fotografer, toko kain, laundry — semua bisa.",
            en: "No need for an expensive app. One landing page: services, a tidy catalog + pretty photos, testimonials, and an order button wired straight to your WhatsApp. MUAs, kebaya rentals, photographers, fabric stores, laundries — all welcome.",
        },
        umkmCta: { id: "Lihat template Landing Page UMKM", en: "See UMKM landing templates" },
        chips: [
            { id: "Pengalaman", en: "Experience" },
            { id: "Pendidikan", en: "Education" },
            { id: "Proyek", en: "Projects" },
        ],
        specs: [
            { id: "Mobile-first", en: "Mobile-first" },
            { id: "Form chat", en: "Chat form" },
            { id: "Serah terima cepat", en: "Fast delivery" },
            { id: "Proses anti ribet", en: "Zero-hassle process" },
        ],
    },
    tpl: {
        tag: { id: "Koleksi template", en: "Template collection" },
        title: { id: "Satu untuk setiap bidang.", en: "One for every field." },
        sub: {
            id: "Lima template portfolio, lima gaya — masing-masing udah diracik sesuai bidangnya. Klik detail, terus scroll santai aja. Punya usaha? Template Landing Page UMKM ada di halaman sendiri.",
            en: "Five portfolio templates, five vibes — each crafted for its own field. Click details, then scroll around. Running a business? UMKM landing templates live on their own page.",
        },
        moreUmkmT: { id: "Punya usaha?", en: "Run a business?" },
        moreUmkmD: {
            id: "Lihat 6 template Landing Page UMKM — MUA, sewa kebaya, fotografer, toko kain, kuliner, laundry.",
            en: "See 6 UMKM landing templates — MUA, kebaya rental, photographer, fabric store, food, laundry.",
        },
        moreUmkmCta: { id: "Buka koleksi UMKM", en: "Open UMKM collection" },
        detail: { id: "Lihat Detail", en: "View Details" },
        custom: {
            id: "Semua template bisa di-custom suka-suka: warna, font, susunan section, sampai fitur tambahan — sesuai kebutuhanmu.",
            en: "Every template is fully customizable: colors, fonts, section order, even extra features — tailored to your needs.",
        },
        customTag: { id: "Bisa custom", en: "Customizable" },
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
        see: { id: "Lihat", en: "View" },
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
        tabUmkm: { id: "Landing Page UMKM", en: "UMKM Landing" },
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
            id: "Katalog produk toko kain dengan tombol pesan langsung ke WhatsApp pemilik usaha.",
            en: "A fabric store catalog with an order button straight to the owner's WhatsApp.",
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
        title: { id: "Dua jalur. Sekali bayar. Nggak ada biaya siluman.", en: "Two paths. Pay once. No ghost fees." },
        sub: {
            id: "Mau cepet punya web? Ambil paket web jadi — kami yang hosting. Mau pegang kodenya sendiri dan bebas hosting di mana aja? Ambil paket Source Code — lengkap dengan manual book update mandiri.",
            en: "Want a site fast? Take a ready-website plan — we host it. Want to own the code and host anywhere? Take a Source Code plan — complete with a self-update manual book.",
        },
        period: { id: "sekali bayar", en: "one-time" },
        popular: { id: "Paling worth it", en: "Best value" },
        choose: { id: "Pilih", en: "Choose" },
        manual: { id: "Manual book update mandiri termasuk", en: "Self-update manual book included" },
        note: {
            id: "Semua harga sekali bayar, tanpa biaya bulanan. Manual book update mandiri hanya termasuk di paket Source Code. Biaya domain sendiri (jika mau) mengikuti harga registrar.",
            en: "All prices are one-time, no monthly fees. The self-update manual book is included in Source Code plans only. Your own domain (optional) follows registrar pricing.",
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
        emailCta: { id: "Atau email ke", en: "Or email us at" },
        waPrefix: { id: "Halo show.porto! 👋", en: "Hi show.porto! 👋" },
        waName: { id: "Nama", en: "Name" },
        waContact: { id: "Kontak", en: "Contact" },
        waIntent: { id: "Kebutuhan", en: "Need" },
        waMsg: { id: "Cerita singkat", en: "Brief" },
        waClosing: { id: "Boleh dibantu konsultasi? Terima kasih!", en: "Could you help me with a consultation? Thanks!" },
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
            id: "Kirim via WhatsApp — Konsultasi Gratis",
            en: "Send via WhatsApp — Free Consult",
        },
        sending: { id: "Membuka WhatsApp…", en: "Opening WhatsApp…" },
        toastOk: { id: "WhatsApp dibuka!", en: "WhatsApp opened!" },
        toastOkDesc: {
            id: "Pesanmu udah tersusun rapi di WhatsApp — tinggal tekan kirim. Tim show.porto bales maksimal 1x24 jam.",
            en: "Your message is ready in WhatsApp — just hit send. The show.porto team replies within 24 hours.",
        },
        formNote: {
            id: "Tanpa akun, tanpa database. Form ini langsung membuka WhatsApp kami dengan pesanmu yang sudah tersusun.",
            en: "No account, no database. This form opens our WhatsApp with your message pre-filled.",
        },
    },
    umkm: {
        badge: { id: "Landing Page UMKM", en: "Small Business Landing Page" },
        l1: { id: "Etalase yang", en: "A storefront that" },
        l2: { id: "jualan sendiri.", en: "sells itself." },
        sub: {
            id: "Bio Instagram cuma muat satu link — bikin link itu kerja keras. Satu landing page: layanan, galeri project, harga, testimoni, dan tombol pesan yang langsung nyambung ke WhatsApp kamu. Dari MUA sampai laundry, semua ada template-nya.",
            en: "Your Instagram bio fits one link — make that link work hard. One landing page: services, project gallery, pricing, testimonials, and an order button wired to your WhatsApp. From MUAs to laundries, there's a template for it.",
        },
        cta1: { id: "Lihat Template UMKM", en: "Browse UMKM Templates" },
        cta2: { id: "Konsultasi via WhatsApp", en: "Consult via WhatsApp" },
        specs: {
            id: "Mulai Rp600rb · Tombol pesan WhatsApp · Serah terima 5-7 hari",
            en: "From Rp600k · WhatsApp order button · Delivered in 5-7 days",
        },
        tplTag: { id: "Koleksi Landing Page UMKM", en: "UMKM Landing Collection" },
        tplTitle: { id: "Dari MUA sampai laundry — semua ada tempatnya.", en: "From MUA to laundry — everyone has a place." },
        tplSub: {
            id: "Enam template, enam jenis usaha. Klik detail buat lihat landing page utuhnya: hero, layanan, galeri project, harga, testimoni, sampai tombol pesan.",
            en: "Six templates, six business types. Click details to see the full landing page: hero, services, project gallery, pricing, testimonials, and the order button.",
        },
        incTag: { id: "Yang kamu dapat", en: "What you get" },
        incTitle: { id: "Semua landing page UMKM udah termasuk ini.", en: "Every UMKM landing page comes with this." },
        includes: [
            { t: { id: "Hero yang jualan", en: "A hero that sells" }, d: { id: "Nama usaha, tagline, dan tombol pesan di layar pertama — nggak perlu scroll buat nemu cara order.", en: "Business name, tagline, and order button on the first screen — no scrolling to find how to order." } },
            { t: { id: "Katalog produk / layanan", en: "Product / service catalog" }, d: { id: "Foto, harga, deskripsi singkat, dan tombol pesan per item yang langsung buka WhatsApp dengan nama produk.", en: "Photos, prices, short descriptions, and an order button per item that opens WhatsApp with the product name." } },
            { t: { id: "Galeri project & testimoni", en: "Project gallery & testimonials" }, d: { id: "Hasil kerja nyata + kata pelanggan = kepercayaan sebelum mereka chat.", en: "Real work + customer words = trust before they even chat." } },
            { t: { id: "Lokasi & jam buka", en: "Location & opening hours" }, d: { id: "Google Maps, alamat, jam operasional, dan semua kanal kontak dalam satu section.", en: "Google Maps, address, opening hours, and every contact channel in one section." } },
        ],
        backHome: { id: "Cari portfolio pencari kerja?", en: "Looking for a job-seeker portfolio?" },
        backHomeCta: { id: "Ke halaman Portfolio", en: "Go to Portfolio page" },
    },
    footer: {
        tagline: {
            id: "Don't just tell. Show it. — Rumah buat karya & jualanmu tampil maksimal.",
            en: "Don't just tell. Show it. — Where your work and business get seen.",
        },
        services: { id: "Layanan", en: "Services" },
        info: { id: "Informasi", en: "Information" },
        contact: { id: "Kontak", en: "Contact" },
        tplPorto: { id: "Template Portfolio", en: "Portfolio Templates" },
        tplUmkm: { id: "Template Landing UMKM", en: "UMKM Landing Templates" },
    },
};

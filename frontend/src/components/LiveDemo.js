import { useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import {
    ArrowUpRight,
    Briefcase,
    GraduationCap,
    Lock,
    MessageCircle,
    X,
} from "lucide-react";
import { Reveal, SectionTag } from "@/components/Reveal";
import {
    DEMO_PROJECTS,
    DEMO_EXPERIENCE,
    DEMO_EDUCATION,
    DEMO_PRODUCTS,
} from "@/data/templates";

const MiniSlider = ({ onDetail }) => {
    const ref = useRef(null);
    const scroll = (dir) => {
        const el = ref.current;
        if (!el) return;
        el.scrollBy({ left: dir * (el.offsetWidth * 0.6), behavior: "smooth" });
    };
    return (
        <div className="relative">
            <div
                ref={ref}
                className="no-scrollbar flex gap-4 overflow-x-auto pb-1"
            >
                {DEMO_PROJECTS.map((p) => (
                    <div
                        key={p.id}
                        className="w-52 shrink-0 overflow-hidden rounded-lg border hairline bg-white/[0.03]"
                    >
                        <div className="relative">
                            <img
                                src={p.img}
                                alt={p.title}
                                loading="lazy"
                                className="h-28 w-full object-cover"
                            />
                            <span className="absolute bottom-2 left-2 rounded bg-void/70 px-2 py-0.5 text-[9px] uppercase tracking-wider text-mist backdrop-blur-sm">
                                {p.meta}
                            </span>
                        </div>
                        <div className="p-3">
                            <p className="truncate text-xs font-medium text-bone">
                                {p.title}
                            </p>
                            <button
                                onClick={() => onDetail(p)}
                                className="mt-2.5 inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-iris/90 px-3 py-1.5 text-[11px] font-medium text-white transition-colors hover:bg-iris"
                            >
                                Detail
                                <ArrowUpRight className="h-3 w-3" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-3 flex justify-end gap-2">
                <button
                    onClick={() => scroll(-1)}
                    aria-label="Geser kiri"
                    className="h-7 w-7 rounded-full border hairline text-xs text-mist transition-colors hover:text-bone"
                >
                    ‹
                </button>
                <button
                    onClick={() => scroll(1)}
                    aria-label="Geser kanan"
                    className="h-7 w-7 rounded-full border hairline text-xs text-mist transition-colors hover:text-bone"
                >
                    ›
                </button>
            </div>
        </div>
    );
};

const DemoBrowser = () => {
    const [tab, setTab] = useState("kerja");
    const [detail, setDetail] = useState(null);

    return (
        <>
        <div className="overflow-hidden rounded-2xl border hairline bg-ink shadow-[0_40px_100px_rgba(0,0,0,0.7)]">
            <div className="flex items-center justify-between border-b hairline bg-white/[0.04] px-5 py-3">
                <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                </div>
                <span className="hidden rounded-full bg-white/5 px-4 py-1 text-[11px] font-light text-ash sm:block">
                    rakapratama.karyaloka.id / dapurnusantara.karyaloka.id
                </span>
                <span className="flex items-center gap-1 text-[10px] font-light text-ash">
                    <Lock className="h-3 w-3" /> https
                </span>
            </div>

            <div className="flex gap-2 border-b hairline px-5 py-3">
                {[
                    { id: "kerja", label: "Pencari Kerja" },
                    { id: "umkm", label: "UMKM" },
                ].map((t) => (
                    <button
                        key={t.id}
                        data-testid={`demo-tab-${t.id}`}
                        onClick={() => setTab(t.id)}
                        className={`rounded-full px-4 py-2 text-xs font-medium transition-all duration-300 ${
                            tab === t.id
                                ? "bg-iris text-white"
                                : "border hairline text-ash hover:text-bone"
                        }`}
                    >
                        {t.label}
                    </button>
                ))}
            </div>

            <div className="p-6 md:p-8" data-testid="demo-content">
                {tab === "kerja" ? (
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
                        <div className="lg:col-span-2">
                            <div className="flex items-center gap-4">
                                <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-iris to-[#4b2aa6] font-display text-lg font-medium text-white">
                                    RP
                                </span>
                                <div>
                                    <p className="font-display text-xl font-light text-bone">
                                        Raka Pratama
                                    </p>
                                    <p className="text-xs font-light text-ash">
                                        Teknik Sipil · Yogyakarta
                                    </p>
                                </div>
                            </div>
                            <div className="mt-6">
                                <p className="mb-3 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-mist">
                                    <Briefcase className="h-3.5 w-3.5 text-iris" />
                                    Pengalaman
                                </p>
                                <div className="space-y-4 border-l border-white/10 pl-4">
                                    {DEMO_EXPERIENCE.map((e) => (
                                        <div key={e.role} className="relative">
                                            <span className="absolute -left-[21px] top-1.5 h-2 w-2 rounded-full bg-iris" />
                                            <p className="text-sm font-medium text-bone">
                                                {e.role} ·{" "}
                                                <span className="font-light text-ash">
                                                    {e.company}
                                                </span>
                                            </p>
                                            <p className="text-[11px] font-light text-iris">
                                                {e.period}
                                            </p>
                                            <p className="mt-1 text-xs font-light leading-relaxed text-ash">
                                                {e.note}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="mt-6">
                                <p className="mb-3 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-mist">
                                    <GraduationCap className="h-3.5 w-3.5 text-saffron" />
                                    Pendidikan
                                </p>
                                <div className="space-y-3">
                                    {DEMO_EDUCATION.map((d) => (
                                        <div
                                            key={d.degree}
                                            className="rounded-lg border hairline bg-white/[0.03] px-4 py-3"
                                        >
                                            <p className="text-sm font-medium text-bone">
                                                {d.degree}
                                            </p>
                                            <p className="text-xs font-light text-ash">
                                                {d.school} · {d.period}
                                            </p>
                                            <p className="mt-0.5 text-[11px] font-light text-verdant">
                                                {d.note}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-3">
                            <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.18em] text-mist">
                                Proyek pilihan — card slider
                            </p>
                            <MiniSlider onDetail={setDetail} />
                            <p className="mt-4 text-[11px] font-light leading-relaxed text-ash">
                                Tombol Detail membuka gambar, PDF, PowerPoint,
                                video, atau link GitHub dari setiap proyek.
                            </p>
                        </div>
                    </div>
                ) : (
                    <div>
                        <div className="mb-5 flex items-center justify-between">
                            <div>
                                <p className="font-display text-xl font-light text-bone">
                                    Dapur Nusantara
                                </p>
                                <p className="text-xs font-light text-ash">
                                    Katering & frozen food · Buka 08.00-20.00
                                </p>
                            </div>
                            <span className="rounded-full bg-verdant/20 px-3 py-1.5 text-[11px] font-medium text-[#3fbfa4]">
                                Gratis ongkir 10km
                            </span>
                        </div>
                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                            {DEMO_PRODUCTS.map((p) => (
                                <div
                                    key={p.name}
                                    className="overflow-hidden rounded-lg border hairline bg-white/[0.03]"
                                >
                                    <img
                                        src={p.img}
                                        alt={p.name}
                                        loading="lazy"
                                        className="h-24 w-full object-cover sm:h-28"
                                    />
                                    <div className="p-3">
                                        <p className="truncate text-xs font-medium text-bone">
                                            {p.name}
                                        </p>
                                        <p className="mt-0.5 text-sm font-medium text-saffron">
                                            {p.price}
                                        </p>
                                        <a
                                            href="https://wa.me/6281234567890"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            data-testid={`demo-order-button-${p.name.split(" ")[0].toLowerCase()}`}
                                            className="mt-2.5 inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-verdant px-3 py-1.5 text-[11px] font-medium text-white transition-colors hover:bg-[#1aa48a]"
                                        >
                                            <MessageCircle className="h-3 w-3" />
                                            Pesan
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p className="mt-4 text-[11px] font-light text-ash">
                            Katalog bergaya e-commerce dengan tombol pesan
                            langsung ke WhatsApp.
                        </p>
                    </div>
                )}
            </div>
        </div>

        <AnimatePresence>
            {detail && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[70] flex items-center justify-center bg-void/85 p-4 backdrop-blur-sm"
                    data-testid="project-detail-modal"
                    onClick={() => setDetail(null)}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 28, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.97 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        onClick={(e) => e.stopPropagation()}
                        className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl border hairline bg-ink"
                    >
                        <div className="relative">
                            <img
                                src={detail.img}
                                alt={detail.title}
                                className="aspect-[16/9] w-full object-cover"
                            />
                            <button
                                data-testid="project-detail-close"
                                onClick={() => setDetail(null)}
                                aria-label="Tutup"
                                className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-void/70 text-bone backdrop-blur-md transition-colors hover:bg-iris"
                            >
                                <X className="h-4 w-4" />
                            </button>
                        </div>
                        <div className="p-7">
                            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-iris">
                                {detail.meta}
                            </span>
                            <h4 className="mt-2 font-display text-2xl font-light text-bone">
                                {detail.title}
                            </h4>
                            <p className="mt-2 text-sm font-light leading-relaxed text-ash">
                                {detail.desc}
                            </p>
                            <div className="mt-5 flex flex-wrap gap-3">
                                {detail.links.map((l) => (
                                    <a
                                        key={l.label}
                                        href={l.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        data-testid={`project-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                                        className="inline-flex items-center gap-1.5 rounded-full border hairline px-4 py-2 text-xs font-medium text-bone transition-all duration-300 hover:border-iris hover:bg-iris/10"
                                    >
                                        {l.label}
                                        <ArrowUpRight className="h-3.5 w-3.5" />
                                    </a>
                                ))}
                            </div>
                            <p className="mt-5 text-[11px] font-light text-ash">
                                Konten demo — begitulah nanti kartu proyekmu
                                bekerja.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
        </>
    );
};

const LiveDemo = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "start 0.3"],
    });
    const rotateX = useTransform(scrollYProgress, [0, 1], [14, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [0.96, 1]);

    return (
        <section
            id="pratinjau"
            ref={ref}
            className="scroll-mt-24 border-t hairline py-24 md:py-32"
            style={{ perspective: 1400 }}
        >
            <div className="mx-auto max-w-[1280px] px-6">
                <div className="text-center">
                    <Reveal className="inline-block">
                        <SectionTag>Pratinjau langsung</SectionTag>
                    </Reveal>
                    <Reveal delay={0.08}>
                        <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-light leading-[1.05] tracking-tight text-bone md:text-5xl">
                            Beginilah nanti karyamu tampil.
                        </h2>
                    </Reveal>
                    <Reveal delay={0.16}>
                        <p className="mx-auto mt-4 max-w-xl text-base font-light text-ash md:text-lg">
                            Coba sendiri: pilih mode pencari kerja atau UMKM,
                            buka detail proyek, klik tombol pesan. Konten demo.
                        </p>
                    </Reveal>
                </div>
                <Reveal delay={0.2}>
                    <motion.div
                        style={{ rotateX, scale, transformStyle: "preserve-3d" }}
                        className="mt-14"
                    >
                        <DemoBrowser />
                    </motion.div>
                </Reveal>
            </div>
        </section>
    );
};

export default LiveDemo;

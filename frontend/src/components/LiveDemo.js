import { useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import {
    ArrowUpRight,
    Briefcase,
    GraduationCap,
    Lock,
    MessageCircle,
    Sparkles,
    Star,
    X,
} from "lucide-react";
import { Reveal, SectionTag } from "@/components/Reveal";
import { useLang, SITE } from "@/i18n";
import {
    DEMO_PROJECTS,
    DEMO_EXPERIENCE,
    DEMO_EDUCATION,
    DEMO_PRODUCTS,
    DEMO_PROFILE,
} from "@/data/templates";

const MiniSlider = ({ onDetail }) => {
    const { lang } = useLang();
    const S = SITE.demo;
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
                data-lenis-prevent
                className="no-scrollbar flex gap-4 overflow-x-auto pb-1"
            >
                {DEMO_PROJECTS.map((p, i) => (
                    <div
                        key={p.id}
                        className="group w-52 shrink-0 overflow-hidden rounded-xl border hairline bg-white/[0.03] transition-all duration-500 hover:border-iris/50 hover:bg-white/[0.05]"
                    >
                        <div className="relative overflow-hidden">
                            <img
                                src={p.img}
                                alt={p.title[lang]}
                                loading="lazy"
                                className="h-28 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-void/60 via-transparent to-transparent" />
                            <span className="absolute bottom-2 left-2 rounded-full bg-void/70 px-2.5 py-1 text-[9px] font-medium uppercase tracking-wider text-mist backdrop-blur-sm">
                                {p.meta[lang]}
                            </span>
                            <span className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-iris/90 text-[10px] font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                {String(i + 1).padStart(2, "0")}
                            </span>
                        </div>
                        <div className="p-3">
                            <p className="truncate text-xs font-medium text-bone">
                                {p.title[lang]}
                            </p>
                            <button
                                onClick={() => onDetail(p)}
                                data-testid={`demo-detail-button-${p.id}`}
                                className="group/btn mt-2.5 inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-iris/90 px-3 py-2 text-[11px] font-medium text-white transition-all duration-300 hover:bg-iris"
                            >
                                {S.detailBtn[lang]}
                                <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-3 flex justify-end gap-2">
                <button
                    onClick={() => scroll(-1)}
                    aria-label="Geser kiri"
                    className="inline-flex h-7 w-7 items-center justify-center rounded-full border hairline text-xs text-mist transition-colors hover:border-iris hover:text-bone"
                >
                    ‹
                </button>
                <button
                    onClick={() => scroll(1)}
                    aria-label="Geser kanan"
                    className="inline-flex h-7 w-7 items-center justify-center rounded-full border hairline text-xs text-mist transition-colors hover:border-iris hover:text-bone"
                >
                    ›
                </button>
            </div>
        </div>
    );
};

const DemoBrowser = () => {
    const { lang } = useLang();
    const S = SITE.demo;
    const [tab, setTab] = useState("kerja");
    const [detail, setDetail] = useState(null);

    return (
        <>
            <div className="overflow-hidden rounded-2xl border hairline bg-[#0b0b0d] shadow-[0_40px_100px_rgba(0,0,0,0.7),0_0_80px_rgba(128,82,255,0.08)] ring-1 ring-white/[0.06]">
                <div className="flex items-center justify-between border-b hairline bg-white/[0.04] px-5 py-3">
                    <div className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                    </div>
                    <span className="hidden rounded-full bg-white/5 px-4 py-1 text-[11px] font-light text-ash sm:block">
                        rakapratama.show.porto.id / dapurnusantara.show.porto.id
                    </span>
                    <span className="flex items-center gap-1 text-[10px] font-light text-ash">
                        <Lock className="h-3 w-3" /> https
                    </span>
                </div>

                <div className="flex items-center gap-2 border-b hairline bg-white/[0.02] px-5 py-3">
                    {[
                        { id: "kerja", label: S.tabKerja },
                        { id: "umkm", label: S.tabUmkm },
                    ].map((t) => (
                        <button
                            key={t.id}
                            data-testid={`demo-tab-${t.id}`}
                            onClick={() => setTab(t.id)}
                            className={`relative rounded-full px-4 py-2 text-xs font-medium transition-all duration-300 ${
                                tab === t.id
                                    ? "bg-iris text-white shadow-[0_0_20px_rgba(128,82,255,0.4)]"
                                    : "border hairline text-ash hover:text-bone"
                            }`}
                        >
                            {t.label[lang]}
                        </button>
                    ))}
                    <span className="ml-auto hidden items-center gap-1.5 text-[10px] font-light text-ash sm:flex">
                        <Sparkles className="h-3 w-3 text-saffron" />
                        {lang === "id" ? "Konten demo" : "Demo content"}
                    </span>
                </div>

                <div className="p-6 md:p-8" data-testid="demo-content">
                    {tab === "kerja" ? (
                        <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
                            <div className="lg:col-span-2">
                                <div className="rounded-xl border hairline bg-white/[0.03] p-5">
                                    <div className="flex items-center gap-4">
                                        <span className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-iris to-[#4b2aa6] font-display text-lg font-medium text-white ring-2 ring-iris/30">
                                            RP
                                            <span className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-[#0b0b0d] bg-verdant" />
                                        </span>
                                        <div>
                                            <p className="font-display text-xl font-light text-bone">
                                                {DEMO_PROFILE.name}
                                            </p>
                                            <p className="text-xs font-light text-ash">
                                                {DEMO_PROFILE.role[lang]}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-4 flex flex-wrap gap-1.5">
                                        {["AutoCAD", "ETABS", "MS Project"].map((s) => (
                                            <span
                                                key={s}
                                                className="rounded-full border hairline bg-white/[0.03] px-2.5 py-1 text-[10px] font-light text-mist"
                                            >
                                                {s}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-5 rounded-xl border hairline bg-white/[0.03] p-5">
                                    <p className="mb-4 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-mist">
                                        <Briefcase className="h-3.5 w-3.5 text-iris" />
                                        {S.exp[lang]}
                                    </p>
                                    <div className="space-y-5 border-l border-white/10 pl-4">
                                        {DEMO_EXPERIENCE.map((e) => (
                                            <div key={e.role} className="relative">
                                                <span className="absolute -left-[21px] top-1.5 h-2 w-2 rounded-full bg-iris shadow-[0_0_10px_rgba(128,82,255,0.7)]" />
                                                <p className="text-sm font-medium text-bone">
                                                    {e.role}
                                                </p>
                                                <p className="text-xs font-light text-ash">
                                                    {e.company[lang]} ·{" "}
                                                    <span className="text-iris">
                                                        {e.period[lang]}
                                                    </span>
                                                </p>
                                                <p className="mt-1 text-xs font-light leading-relaxed text-ash">
                                                    {e.note[lang]}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="lg:col-span-3">
                                <div className="rounded-xl border hairline bg-white/[0.03] p-5">
                                    <p className="mb-4 flex items-center justify-between text-[11px] font-medium uppercase tracking-[0.18em] text-mist">
                                        <span className="flex items-center gap-2">
                                            <GraduationCap className="h-3.5 w-3.5 text-saffron" />
                                            {S.edu[lang]}
                                        </span>
                                        <span className="font-light normal-case tracking-normal text-ash">
                                            {S.works[lang]}
                                        </span>
                                    </p>
                                    <div className="mb-5 space-y-2.5">
                                        {DEMO_EDUCATION.map((d) => (
                                            <div
                                                key={d.degree.en}
                                                className="flex items-center justify-between rounded-lg border-l-2 border-saffron/60 bg-white/[0.03] px-4 py-3"
                                            >
                                                <div>
                                                    <p className="text-sm font-medium text-bone">
                                                        {d.degree[lang]}
                                                    </p>
                                                    <p className="text-xs font-light text-ash">
                                                        {d.school[lang]}
                                                    </p>
                                                </div>
                                                <span className="text-[11px] font-light text-ash">
                                                    {d.period}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                    <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.18em] text-mist">
                                        {S.works[lang]}
                                    </p>
                                    <MiniSlider onDetail={setDetail} />
                                    <p className="mt-4 text-[11px] font-light leading-relaxed text-ash">
                                        {S.worksNote[lang]}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <div className="relative mb-5 overflow-hidden rounded-xl border hairline bg-gradient-to-r from-verdant/15 via-white/[0.03] to-saffron/10 p-5">
                                <div className="flex items-center justify-between gap-4">
                                    <div className="flex items-center gap-4">
                                        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-verdant to-[#0e5a4b] font-display text-lg font-medium text-white">
                                            DN
                                        </span>
                                        <div>
                                            <p className="font-display text-xl font-light text-bone">
                                                Dapur Nusantara
                                            </p>
                                            <p className="text-xs font-light text-ash">
                                                {lang === "id"
                                                    ? "Katering & frozen food"
                                                    : "Catering & frozen food"}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="hidden items-center gap-2 sm:flex">
                                        <span className="flex items-center gap-1 rounded-full bg-white/[0.05] px-3 py-1.5 text-[11px] font-medium text-saffron">
                                            <Star className="h-3 w-3 fill-saffron" />
                                            4,9
                                            <span className="font-light text-ash">(1,2rb)</span>
                                        </span>
                                        <span className="rounded-full bg-verdant/20 px-3 py-1.5 text-[11px] font-medium text-[#3fbfa4]">
                                            {S.ongkir[lang]}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                                {DEMO_PRODUCTS.map((p, i) => (
                                    <div
                                        key={p.price}
                                        data-testid={`demo-product-card-${i}`}
                                        className="group overflow-hidden rounded-xl border hairline bg-white/[0.03] transition-all duration-500 hover:-translate-y-1 hover:border-verdant/40"
                                    >
                                        <div className="relative overflow-hidden">
                                            <img
                                                src={p.img}
                                                alt={p.name[lang]}
                                                loading="lazy"
                                                className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                            {i === 0 && (
                                                <span className="absolute left-2 top-2 rounded-full bg-saffron px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-void">
                                                    Best
                                                </span>
                                            )}
                                        </div>
                                        <div className="p-3">
                                            <p className="truncate text-xs font-medium text-bone">
                                                {p.name[lang]}
                                            </p>
                                            <p className="mt-0.5 text-sm font-medium text-saffron">
                                                {p.price}
                                            </p>
                                            <a
                                                href="https://wa.me/6281234567890"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                data-testid={`demo-order-button-${p.price.replace(/\D/g, "")}`}
                                                className="mt-2.5 inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-verdant px-3 py-2 text-[11px] font-medium text-white transition-all duration-300 hover:bg-[#1aa48a] hover:shadow-[0_0_16px_rgba(21,132,110,0.5)]"
                                            >
                                                <MessageCircle className="h-3 w-3" />
                                                {S.order[lang]}
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <p className="mt-4 text-[11px] font-light text-ash">
                                {S.umkmNote[lang]}
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
                            data-lenis-prevent
                            className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl border hairline bg-ink"
                        >
                            <div className="relative">
                                <img
                                    src={detail.img}
                                    alt={detail.title[lang]}
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
                                    {detail.meta[lang]}
                                </span>
                                <h4 className="mt-2 font-display text-2xl font-light text-bone">
                                    {detail.title[lang]}
                                </h4>
                                <p className="mt-2 text-sm font-light leading-relaxed text-ash">
                                    {detail.desc[lang]}
                                </p>
                                <div className="mt-5 flex flex-wrap gap-3">
                                    {detail.links.map((l) => (
                                        <a
                                            key={l.label.en}
                                            href={l.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            data-testid={`project-link-${l.label.en.toLowerCase().replace(/\s+/g, "-")}`}
                                            className="inline-flex items-center gap-1.5 rounded-full border hairline px-4 py-2 text-xs font-medium text-bone transition-all duration-300 hover:border-iris hover:bg-iris/10"
                                        >
                                            {l.label[lang]}
                                            <ArrowUpRight className="h-3.5 w-3.5" />
                                        </a>
                                    ))}
                                </div>
                                <p className="mt-5 text-[11px] font-light text-ash">
                                    {lang === "id"
                                        ? "Konten demo — begitulah nanti kartu proyekmu bekerja."
                                        : "Demo content — this is how your project cards will work."}
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
    const { lang } = useLang();
    const S = SITE.demo;
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
            className="relative scroll-mt-24 overflow-hidden border-t hairline py-24 md:py-32"
            style={{ perspective: 1400 }}
        >
            <div className="pointer-events-none absolute left-1/2 top-1/3 h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-iris/10 blur-[140px]" />
            <div className="relative mx-auto max-w-[1280px] px-6">
                <div className="text-center">
                    <Reveal className="inline-block">
                        <SectionTag>{S.tag[lang]}</SectionTag>
                    </Reveal>
                    <Reveal delay={0.08}>
                        <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-light leading-[1.05] tracking-tight text-bone md:text-5xl">
                            {S.title[lang]}
                        </h2>
                    </Reveal>
                    <Reveal delay={0.16}>
                        <p className="mx-auto mt-4 max-w-xl text-base font-light text-ash md:text-lg">
                            {S.sub[lang]}
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

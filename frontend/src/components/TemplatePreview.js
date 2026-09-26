import { motion } from "framer-motion";
import { toast } from "sonner";
import {
    ArrowDown,
    Download,
    MessageCircle,
    Send,
} from "lucide-react";
import { useLang, SITE } from "@/i18n";
import { PREVIEWS } from "@/data/templatePreviews";

/* Pratinjau desain template: satu halaman utuh seperti website sungguhan.
   Tiap template punya varian cover, alur section, dan layout proyek sendiri
   (masonry / slider / grid / galeri / list / menu) mengikuti referensi gaya. */

const EASE = [0.22, 1, 0.36, 1];

const PageReveal = ({ root, delay = 0, children, className = "" }) => (
    <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ root, once: true, amount: 0.08 }}
        transition={{ duration: 0.65, delay, ease: EASE }}
        className={className}
    >
        {children}
    </motion.div>
);

const Eyebrow = ({ label, th, center }) => (
    <p
        className={`mb-5 flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.28em] ${
            center ? "justify-center" : ""
        }`}
        style={{ color: th.muted }}
    >
        <span
            className="inline-block h-1.5 w-1.5"
            style={{ background: th.accent, transform: "rotate(45deg)" }}
        />
        <span>{label}</span>
    </p>
);

const heroTitle = (tpl, lang) => {
    switch (tpl.id) {
        case "lumina":
            return lang === "id"
                ? "Rupa yang Bicara Sebelum Kata."
                : "Visuals That Speak Before Words.";
        case "amplify":
            return lang === "id"
                ? "Pertumbuhan yang Terukur."
                : "Growth You Can Measure.";
        case "blueprint":
            return lang === "id"
                ? "Keheningan Struktural. Kanopi Tropis."
                : "Structural Silence. Tropical Canopy.";
        case "aperture":
            return lang === "id"
                ? "Cahaya, Kadr, dan Diam."
                : "Light, Frame, and Silence.";
        case "deploy":
            return lang === "id"
                ? "Kode Bersih, Produk Cepat."
                : "Clean Code, Fast Products.";
        default:
            return lang === "id"
                ? "Rasa Rumah, Siap Antar."
                : "Home Flavors, Delivered.";
    }
};

const CtaRow = ({ p, th, S, lang, note, scrollToPage, tpl, center }) => (
    <div
        className={`flex flex-wrap items-center gap-3 ${center ? "justify-center" : ""}`}
    >
        {p.cv ? (
            <button
                data-testid={`preview-cv-button-${tpl.id}`}
                onClick={note}
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-xs font-medium transition-transform duration-300 hover:-translate-y-0.5"
                style={{ background: th.accent, color: th.bg }}
            >
                <Download className="h-3.5 w-3.5" />
                {S.cv[lang]}
            </button>
        ) : (
            <button
                data-testid={`preview-order-button-${tpl.id}`}
                onClick={() => scrollToPage(`pv-contact-${tpl.id}`)}
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-xs font-medium transition-transform duration-300 hover:-translate-y-0.5"
                style={{ background: th.accent, color: th.bg }}
            >
                <MessageCircle className="h-3.5 w-3.5" />
                {p.contact.heading[lang]}
            </button>
        )}
        <button
            onClick={() => scrollToPage(`pv-works-${tpl.id}`)}
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-xs font-medium transition-all duration-300 hover:opacity-80"
            style={{ border: `1px solid ${th.line}`, color: th.text }}
        >
            {p.cv ? S.seeWorks[lang] : S.seeMenu[lang]}
            <ArrowDown className="h-3.5 w-3.5" />
        </button>
    </div>
);

const Cover = ({ tpl, p, th, S, lang, note, scrollToPage, scrollRef }) => {
    const variant = p.cover;
    const title = heroTitle(tpl, lang);

    if (variant === "media") {
        return (
            <div className="relative flex min-h-[420px] flex-col justify-end overflow-hidden">
                <motion.img
                    src={p.works.items[0].img}
                    alt=""
                    initial={{ scale: 1.12, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.55 }}
                    transition={{ duration: 1.6, ease: EASE }}
                    className="absolute inset-0 h-full w-full object-cover"
                />
                <div
                    className="absolute inset-0"
                    style={{
                        background: `linear-gradient(to top, ${th.bg} 8%, rgba(0,0,0,0.25) 55%, rgba(0,0,0,0.05))`,
                    }}
                />
                <div className="relative p-8 md:p-12">
                    <PageReveal root={scrollRef} delay={0.1}>
                        <Eyebrow label={p.profile.role[lang]} th={th} />
                    </PageReveal>
                    <PageReveal root={scrollRef} delay={0.22}>
                        <h1 style={{ ...styles.disp(th), fontSize: "clamp(2.2rem,6vw,4rem)" }}>
                            {title}
                        </h1>
                    </PageReveal>
                    <PageReveal root={scrollRef} delay={0.34}>
                        <div className="mt-7">
                            <CtaRow
                                p={p}
                                th={th}
                                S={S}
                                lang={lang}
                                note={note}
                                scrollToPage={scrollToPage}
                                tpl={tpl}
                            />
                        </div>
                    </PageReveal>
                </div>
            </div>
        );
    }

    if (variant === "editorial") {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 md:p-12">
                    <PageReveal root={scrollRef} delay={0.05}>
                        <Eyebrow label={p.profile.role[lang]} th={th} />
                    </PageReveal>
                    <PageReveal root={scrollRef} delay={0.15}>
                        <h1
                            style={{
                                ...styles.disp(th),
                                fontSize: "clamp(2.2rem,5vw,3.6rem)",
                            }}
                        >
                            {title}
                        </h1>
                    </PageReveal>
                    <PageReveal root={scrollRef} delay={0.25}>
                        <p
                            className="mt-5 max-w-sm text-sm leading-relaxed"
                            style={{ color: th.muted }}
                        >
                            {p.profile.quote[lang]}
                        </p>
                    </PageReveal>
                    <PageReveal root={scrollRef} delay={0.35}>
                        <div className="mt-8">
                            <CtaRow
                                p={p}
                                th={th}
                                S={S}
                                lang={lang}
                                note={note}
                                scrollToPage={scrollToPage}
                                tpl={tpl}
                            />
                        </div>
                    </PageReveal>
                    <PageReveal root={scrollRef} delay={0.45}>
                        <p
                            className="mt-10 border-t pt-4 text-xs tracking-wide"
                            style={{ borderColor: th.line, color: th.muted }}
                        >
                            {p.profile.name} — {p.contact.address[lang]}
                        </p>
                    </PageReveal>
                </div>
                <div className="relative min-h-[280px] overflow-hidden md:min-h-[420px]">
                    <motion.img
                        src={p.profile.img}
                        alt={p.profile.name}
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1.4, ease: EASE }}
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                </div>
            </div>
        );
    }

    if (variant === "bento") {
        return (
            <div className="p-8 md:p-12">
                <PageReveal root={scrollRef} delay={0.05}>
                    <Eyebrow label={p.profile.role[lang]} th={th} />
                </PageReveal>
                <PageReveal root={scrollRef} delay={0.15}>
                    <h1
                        style={{
                            ...styles.disp(th),
                            fontSize: "clamp(2.2rem,6vw,4rem)",
                            maxWidth: 620,
                        }}
                    >
                        {title}
                    </h1>
                </PageReveal>
                <PageReveal root={scrollRef} delay={0.25}>
                    <div className="mt-8 grid grid-cols-3 gap-3">
                        {p.profile.stats.map((s, i) => (
                            <div
                                key={i}
                                className="p-4 text-center"
                                style={{
                                    background: th.panel,
                                    borderRadius: th.radius,
                                    border: `1px solid ${th.line}`,
                                }}
                            >
                                <p style={{ ...styles.disp(th), fontSize: 24, color: th.accent }}>
                                    {s.n}
                                </p>
                                <p
                                    className="mt-1 text-[10px] uppercase tracking-wider"
                                    style={{ color: th.muted }}
                                >
                                    {s.l[lang]}
                                </p>
                            </div>
                        ))}
                    </div>
                </PageReveal>
                <PageReveal root={scrollRef} delay={0.35}>
                    <div className="mt-8">
                        <CtaRow
                            p={p}
                            th={th}
                            S={S}
                            lang={lang}
                            note={note}
                            scrollToPage={scrollToPage}
                            tpl={tpl}
                        />
                    </div>
                </PageReveal>
                <PageReveal root={scrollRef} delay={0.45}>
                    <div
                        className="mt-10 overflow-hidden"
                        style={{ borderRadius: th.radius }}
                    >
                        <img
                            src={p.works.items[0].img}
                            alt=""
                            loading="lazy"
                            className="h-44 w-full object-cover md:h-56"
                        />
                    </div>
                </PageReveal>
            </div>
        );
    }

    if (variant === "gallery") {
        return (
            <div className="pb-10 pt-14 text-center md:pt-20">
                <PageReveal root={scrollRef} delay={0.05}>
                    <Eyebrow label={p.profile.role[lang]} th={th} center />
                </PageReveal>
                <PageReveal root={scrollRef} delay={0.18}>
                    <h1
                        className="mx-auto px-6"
                        style={{
                            ...styles.disp(th),
                            fontSize: "clamp(2.4rem,7vw,4.6rem)",
                            textTransform: th.case === "upper" ? "uppercase" : "none",
                            letterSpacing: th.tracking || "0",
                        }}
                    >
                        {title}
                    </h1>
                </PageReveal>
                <PageReveal root={scrollRef} delay={0.3}>
                    <div className="mt-10 overflow-hidden">
                        <img
                            src={p.works.items[0].img}
                            alt=""
                            loading="lazy"
                            className="h-56 w-full object-cover md:h-72"
                        />
                    </div>
                </PageReveal>
                <PageReveal root={scrollRef} delay={0.4}>
                    <div className="mt-8">
                        <CtaRow
                            p={p}
                            th={th}
                            S={S}
                            lang={lang}
                            note={note}
                            scrollToPage={scrollToPage}
                            tpl={tpl}
                            center
                        />
                    </div>
                </PageReveal>
            </div>
        );
    }

    if (variant === "terminal") {
        return (
            <div className="p-8 md:p-12">
                <PageReveal root={scrollRef} delay={0.05}>
                    <Eyebrow label={p.profile.role[lang]} th={th} />
                </PageReveal>
                <PageReveal root={scrollRef} delay={0.15}>
                    <div
                        className="overflow-hidden"
                        style={{
                            background: th.panel,
                            border: `1px solid ${th.line}`,
                            borderRadius: th.radius,
                        }}
                    >
                        <div
                            className="flex items-center gap-1.5 px-4 py-2.5"
                            style={{ borderBottom: `1px solid ${th.line}` }}
                        >
                            <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
                            <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
                            <span className="h-2 w-2 rounded-full bg-[#28c840]" />
                            <span className="ml-2 text-[10px]" style={{ color: th.muted }}>
                                rizky@deploy — zsh
                            </span>
                        </div>
                        <div
                            className="space-y-2 p-5 text-[12px] leading-relaxed"
                            style={{ color: th.text }}
                        >
                            <p style={{ color: th.muted }}>
                                {"// Halo, saya Rizky — web developer yang obsesi performa."}
                            </p>
                            <p>
                                <span style={{ color: th.accent }}>$</span> siapa-saya --ringkas
                            </p>
                            <p style={{ color: th.muted }}>
                                &gt; 9 produk diluncurkan · 24 repo publik · uptime 99,9%
                            </p>
                            <p>
                                <span style={{ color: th.accent }}>$</span> buka --portofolio
                            </p>
                            <p style={{ color: th.accent }}>&gt; siap di bawah ↓</p>
                        </div>
                    </div>
                </PageReveal>
                <PageReveal root={scrollRef} delay={0.3}>
                    <div className="mt-8">
                        <CtaRow
                            p={p}
                            th={th}
                            S={S}
                            lang={lang}
                            note={note}
                            scrollToPage={scrollToPage}
                            tpl={tpl}
                        />
                    </div>
                </PageReveal>
            </div>
        );
    }

    // warm
    return (
        <div className="p-8 text-center md:p-14">
            <PageReveal root={scrollRef} delay={0.05}>
                <Eyebrow label={p.profile.role[lang]} th={th} center />
            </PageReveal>
            <PageReveal root={scrollRef} delay={0.15}>
                <h1
                    className="mx-auto"
                    style={{ ...styles.disp(th), fontSize: "clamp(2.2rem,6vw,4rem)" }}
                >
                    {title}
                </h1>
            </PageReveal>
            <PageReveal root={scrollRef} delay={0.25}>
                <p
                    className="mx-auto mt-4 max-w-md text-sm leading-relaxed"
                    style={{ color: th.muted }}
                >
                    {p.profile.quote[lang]}
                </p>
            </PageReveal>
            <PageReveal root={scrollRef} delay={0.35}>
                <div
                    className="mt-8 overflow-hidden"
                    style={{ borderRadius: th.radius }}
                >
                    <img
                        src={p.profile.img}
                        alt=""
                        loading="lazy"
                        className="h-52 w-full object-cover md:h-64"
                    />
                </div>
            </PageReveal>
            <PageReveal root={scrollRef} delay={0.45}>
                <div className="mt-8">
                    <CtaRow
                        p={p}
                        th={th}
                        S={S}
                        lang={lang}
                        note={note}
                        scrollToPage={scrollToPage}
                        tpl={tpl}
                        center
                    />
                </div>
            </PageReveal>
        </div>
    );
};

const styles = {
    disp: (th) => ({
        fontFamily: th.display,
        fontWeight: th.displayWeight,
        letterSpacing: th.tracking || "-0.01em",
        lineHeight: 1.05,
    }),
};

const WorksGrid = ({ data, layout, th, lang, note }) => {
    const L = (o) => o[lang];

    if (layout === "masonry") {
        return (
            <div className="columns-2 gap-4 [&>div]:mb-4">
                {data.items.map((w, i) => (
                    <div key={i} className="group break-inside-avoid">
                        <div className="overflow-hidden" style={{ borderRadius: th.radius }}>
                            <img
                                src={w.img}
                                alt={L(w.title)}
                                loading="lazy"
                                className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                                style={{ height: [260, 180, 210][i % 3] }}
                            />
                        </div>
                        <p className="mt-2 text-sm" style={{ color: th.text }}>
                            {L(w.title)}
                        </p>
                        <p className="text-[11px]" style={{ color: th.muted }}>
                            {L(w.meta)} · {w.year}
                        </p>
                    </div>
                ))}
            </div>
        );
    }

    if (layout === "slider") {
        return (
            <div
                data-lenis-prevent
                className="no-scrollbar -mx-2 flex gap-4 overflow-x-auto px-2 pb-2"
                style={{ scrollSnapType: "x mandatory" }}
            >
                {data.items.map((w, i) => (
                    <div
                        key={i}
                        className="group w-[230px] shrink-0 md:w-[260px]"
                        style={{ scrollSnapAlign: "start" }}
                    >
                        <div className="overflow-hidden" style={{ borderRadius: th.radius }}>
                            <img
                                src={w.img}
                                alt={L(w.title)}
                                loading="lazy"
                                className="h-36 w-full object-cover transition-transform duration-700 group-hover:scale-[1.05] md:h-40"
                            />
                        </div>
                        <p className="mt-3 text-sm font-medium" style={{ color: th.text }}>
                            {L(w.title)}
                        </p>
                        <p className="mt-0.5 text-[11px]" style={{ color: th.accent }}>
                            {L(w.meta)}
                        </p>
                        <p className="text-[11px]" style={{ color: th.muted }}>
                            {w.year}
                        </p>
                    </div>
                ))}
            </div>
        );
    }

    if (layout === "gallery") {
        return (
            <div className="grid grid-cols-2 gap-1 md:grid-cols-3">
                {data.items.map((w, i) => (
                    <div
                        key={i}
                        className="group relative aspect-square overflow-hidden"
                        style={{ borderRadius: th.radius }}
                    >
                        <img
                            src={w.img}
                            alt={L(w.title)}
                            loading="lazy"
                            className="h-full w-full object-cover transition-all duration-700 group-hover:scale-[1.06]"
                        />
                        <div
                            className="absolute inset-0 flex items-end opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                            style={{
                                background:
                                    "linear-gradient(to top, rgba(0,0,0,0.65), transparent 55%)",
                            }}
                        >
                            <p className="p-3 text-left text-xs font-medium text-white">
                                {L(w.title)}
                                <span className="block text-[10px] font-light text-white/70">
                                    {L(w.meta)} · {w.year}
                                </span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    if (layout === "list") {
        return (
            <div>
                {data.items.map((w, i) => (
                    <div
                        key={i}
                        className="group flex items-baseline gap-4 border-b py-4 transition-colors duration-300 hover:bg-white/[0.02] md:gap-6"
                        style={{ borderColor: th.line }}
                    >
                        <span
                            className="shrink-0 text-[11px]"
                            style={{ color: th.accent }}
                        >
                            {String(i + 1).padStart(2, "0")}
                        </span>
                        <div className="min-w-0 flex-1">
                            <p
                                className="truncate text-sm font-medium transition-colors"
                                style={{ color: th.text }}
                            >
                                {L(w.title)}
                            </p>
                            <p className="truncate text-[11px]" style={{ color: th.muted }}>
                                {L(w.meta)}
                            </p>
                        </div>
                        <span className="shrink-0 text-[11px]" style={{ color: th.muted }}>
                            {w.year}
                        </span>
                    </div>
                ))}
            </div>
        );
    }

    if (layout === "menu") {
        return (
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                {data.items.map((w, i) => (
                    <div
                        key={i}
                        className="group overflow-hidden"
                        style={{
                            borderRadius: th.radius,
                            background: th.panel,
                            border: `1px solid ${th.line}`,
                        }}
                    >
                        <div className="overflow-hidden">
                            <img
                                src={w.img}
                                alt={L(w.title)}
                                loading="lazy"
                                className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                            />
                        </div>
                        <div className="p-3">
                            <p className="truncate text-sm font-medium" style={{ color: th.text }}>
                                {L(w.title)}
                            </p>
                            <p className="mt-0.5 text-[11px]" style={{ color: th.muted }}>
                                {L(w.meta)}
                            </p>
                            <button
                                onClick={note}
                                className="mt-2.5 inline-flex w-full items-center justify-center gap-1.5 rounded-full px-3 py-2 text-[11px] font-medium transition-transform duration-300 hover:-translate-y-0.5"
                                style={{ background: th.accent, color: th.bg }}
                            >
                                <MessageCircle className="h-3 w-3" />
                                {SITE.demo.order[lang]}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    // grid (featured 2 kolom)
    return (
        <div className="grid grid-cols-2 gap-5">
            {data.items.map((w, i) => (
                <div key={i} className={`group ${i === 0 ? "col-span-2" : ""}`}>
                    <div className="overflow-hidden" style={{ borderRadius: th.radius }}>
                        <img
                            src={w.img}
                            alt={L(w.title)}
                            loading="lazy"
                            className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                            style={{ aspectRatio: i === 0 ? "16/7" : "4/3" }}
                        />
                    </div>
                    <div className="mt-3 flex items-baseline justify-between">
                        <p className="text-sm" style={{ color: th.text }}>
                            {L(w.title)}
                        </p>
                        <p className="text-[11px]" style={{ color: th.muted }}>
                            {L(w.meta)} · {w.year}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

const TemplatePreview = ({ tpl, scrollRef }) => {
    const { lang } = useLang();
    const S = SITE.tpl;
    const p = PREVIEWS[tpl.id];
    const th = tpl.theme;
    const L = (o) => o[lang];
    const isUmkm = tpl.id === "etalase";
    const note = () => toast.info(S.form.note[lang]);
    const scrollToPage = (id) => {
        const el = document.getElementById(id);
        if (!el) return;
        el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const miniNav = (
        <div
            className="flex items-center justify-between px-6 py-4 md:px-10"
            style={{ borderBottom: `1px solid ${th.line}` }}
        >
            <span style={{ ...styles.disp(th), fontSize: 15 }}>{p.profile.name}</span>
            <span
                className="hidden gap-5 text-[11px] uppercase tracking-[0.18em] md:flex"
                style={{ color: th.muted }}
            >
                {p.education ? <span>{p.education.label[lang]}</span> : null}
                {p.experience ? <span>{p.experience.label[lang]}</span> : null}
                <span>{p.works.label[lang]}</span>
                {p.cv ? null : <span>{p.services.label[lang]}</span>}
                <span>{p.contact.label[lang]}</span>
            </span>
            <span
                className="rounded-full px-4 py-1.5 text-[11px] font-medium"
                style={{ background: th.accent, color: th.bg }}
            >
                {p.profile.name.split(" ")[0]}
            </span>
        </div>
    );

    const aboutSec = (
        <div
            className="p-8 md:p-12"
            style={{ borderTop: `1px solid ${th.line}` }}
        >
            <PageReveal root={scrollRef}>
                <Eyebrow label={p.profile.name} th={th} />
            </PageReveal>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
                <PageReveal root={scrollRef} delay={0.1} className="md:col-span-2">
                    <img
                        src={p.profile.img}
                        alt={p.profile.name}
                        loading="lazy"
                        className="w-full object-cover"
                        style={{
                            borderRadius: th.radius,
                            aspectRatio: "4/5",
                            filter: tpl.id === "deploy" ? "grayscale(0.3)" : "none",
                        }}
                    />
                </PageReveal>
                <div className="md:col-span-3">
                    <PageReveal root={scrollRef} delay={0.18}>
                        <p style={{ ...styles.disp(th), fontSize: "clamp(1.2rem,2.6vw,1.7rem)" }}>
                            "{p.profile.quote[lang]}"
                        </p>
                    </PageReveal>
                    <PageReveal root={scrollRef} delay={0.26}>
                        <div className="mt-8 grid grid-cols-3 gap-4">
                            {p.profile.stats.map((s, i) => (
                                <div key={i}>
                                    <p style={{ ...styles.disp(th), fontSize: 26, color: th.accent }}>
                                        {s.n}
                                    </p>
                                    <p
                                        className="mt-1 text-[11px] uppercase tracking-wider"
                                        style={{ color: th.muted }}
                                    >
                                        {L(s.l)}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </PageReveal>
                    <PageReveal root={scrollRef} delay={0.34}>
                        <div
                            className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3"
                            style={{ color: th.muted }}
                        >
                            {p.principles.items.map((it, i) => (
                                <div key={i}>
                                    <p
                                        className="mb-2 text-[11px] uppercase tracking-[0.18em]"
                                        style={{ color: th.accent }}
                                    >
                                        {it.t[lang]}
                                    </p>
                                    <p className="text-xs leading-relaxed">{it.d[lang]}</p>
                                </div>
                            ))}
                        </div>
                    </PageReveal>
                </div>
            </div>
        </div>
    );

    const eduSec = p.education ? (
        <div className="p-8 md:p-12" style={{ borderTop: `1px solid ${th.line}` }}>
            <PageReveal root={scrollRef}>
                <Eyebrow label={S.pages.edu[lang]} th={th} />
            </PageReveal>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                <div>
                    {p.education.items.map((e, i) => (
                        <PageReveal key={i} root={scrollRef} delay={0.08 * i}>
                            <div
                                className="relative border-l py-4 pl-5"
                                style={{ borderColor: th.line }}
                            >
                                <span
                                    className="absolute -left-[4px] top-6 h-2 w-2 rounded-full"
                                    style={{ background: th.accent }}
                                />
                                <p className="text-sm font-medium" style={{ color: th.text }}>
                                    {L(e.degree)}
                                </p>
                                <p className="mt-0.5 text-xs" style={{ color: th.muted }}>
                                    {L(e.school)}
                                </p>
                                <p className="mt-1 text-[11px]" style={{ color: th.accent }}>
                                    {e.period}
                                </p>
                                <p
                                    className="mt-1.5 text-xs leading-relaxed"
                                    style={{ color: th.muted }}
                                >
                                    {L(e.note)}
                                </p>
                            </div>
                        </PageReveal>
                    ))}
                </div>
                <div>
                    {p.courses.items.map((c, i) => (
                        <PageReveal key={i} root={scrollRef} delay={0.08 * i}>
                            <div
                                className="mb-3 flex items-center justify-between px-4 py-3.5"
                                style={{ background: th.panel, borderRadius: th.radius }}
                            >
                                <div>
                                    <p className="text-sm font-medium" style={{ color: th.text }}>
                                        {L(c.name)}
                                    </p>
                                    <p className="mt-0.5 text-[11px]" style={{ color: th.muted }}>
                                        {c.issuer}
                                    </p>
                                </div>
                                <span
                                    className="text-[11px] font-medium"
                                    style={{ color: th.accent }}
                                >
                                    {c.year}
                                </span>
                            </div>
                        </PageReveal>
                    ))}
                </div>
            </div>
        </div>
    ) : null;

    const expSec = p.experience ? (
        <div className="p-8 md:p-12" style={{ borderTop: `1px solid ${th.line}` }}>
            <PageReveal root={scrollRef}>
                <Eyebrow label={S.pages.exp[lang]} th={th} />
            </PageReveal>
            <div>
                {p.experience.items.map((e, i) => (
                    <PageReveal key={i} root={scrollRef} delay={0.08 * i}>
                        <div
                            className="flex flex-col gap-1 border-b py-5 md:flex-row md:items-baseline md:gap-6"
                            style={{ borderColor: th.line }}
                        >
                            <span className="w-8 shrink-0 text-[11px]" style={{ color: th.accent }}>
                                {String(i + 1).padStart(2, "0")}
                            </span>
                            <div className="flex-1">
                                <p className="text-sm font-medium" style={{ color: th.text }}>
                                    {L(e.role)}
                                </p>
                                <p className="text-xs" style={{ color: th.muted }}>
                                    {L(e.company)} · {L(e.period)}
                                </p>
                                <p
                                    className="mt-1.5 text-xs leading-relaxed"
                                    style={{ color: th.muted }}
                                >
                                    {L(e.desc)}
                                </p>
                            </div>
                        </div>
                    </PageReveal>
                ))}
            </div>
        </div>
    ) : null;

    const worksSec = (
        <div id={`pv-works-${tpl.id}`} className="scroll-mt-4 p-8 md:p-12" style={{ borderTop: `1px solid ${th.line}` }}>
            <PageReveal root={scrollRef}>
                <Eyebrow label={p.works.label[lang]} th={th} />
            </PageReveal>
            <PageReveal root={scrollRef} delay={0.08}>
                <p className="mb-8 max-w-md text-sm" style={{ color: th.muted }}>
                    {p.works.sub[lang]}
                </p>
            </PageReveal>
            <PageReveal root={scrollRef} delay={0.15}>
                <WorksGrid data={p.works} layout={p.projectLayout} th={th} lang={lang} note={note} />
            </PageReveal>
        </div>
    );

    const trustSec = (
        <div className="p-8 md:p-12" style={{ borderTop: `1px solid ${th.line}` }}>
            <PageReveal root={scrollRef}>
                <Eyebrow label={p.services.label[lang]} th={th} />
            </PageReveal>
            <PageReveal root={scrollRef} delay={0.08}>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
                    {p.services.items.map((s, i) => (
                        <div key={i}>
                            <p
                                className="mb-2 text-[11px] uppercase tracking-[0.2em]"
                                style={{ color: th.accent }}
                            >
                                {String(i + 1).padStart(2, "0")}
                            </p>
                            <p className="text-sm font-medium" style={{ color: th.text }}>
                                {L(s.t)}
                            </p>
                            <p className="mt-1.5 text-xs leading-relaxed" style={{ color: th.muted }}>
                                {L(s.d)}
                            </p>
                        </div>
                    ))}
                </div>
            </PageReveal>
            <PageReveal root={scrollRef} delay={0.15}>
                <div className="mt-12">
                    {p.awards.items.map((a, i) => (
                        <div
                            key={i}
                            className="flex flex-wrap items-baseline justify-between gap-2 border-b py-4"
                            style={{ borderColor: th.line }}
                        >
                            <span className="text-xs" style={{ color: th.muted }}>
                                {a.year}
                            </span>
                            <span className="flex-1 px-4 text-sm" style={{ color: th.text }}>
                                {L(a.name)}
                            </span>
                            <span className="text-xs" style={{ color: th.muted }}>
                                {a.by}
                            </span>
                        </div>
                    ))}
                </div>
            </PageReveal>
            <PageReveal root={scrollRef} delay={0.2}>
                <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
                    {p.testimonials.items.map((t, i) => (
                        <div key={i}>
                            <p
                                style={{
                                    ...styles.disp(th),
                                    fontSize: 17,
                                    fontStyle: th.display.includes("Fraunces") ? "italic" : "normal",
                                }}
                            >
                                "{t.q[lang]}"
                            </p>
                            <p className="mt-4 text-xs font-medium" style={{ color: th.text }}>
                                {t.who}
                                <span className="ml-2 font-normal" style={{ color: th.muted }}>
                                    {t.role[lang]}
                                </span>
                            </p>
                        </div>
                    ))}
                </div>
            </PageReveal>
        </div>
    );

    const contactSec = (
        <div
            id={`pv-contact-${tpl.id}`}
            className="scroll-mt-4 p-8 md:p-12"
            style={{ borderTop: `1px solid ${th.line}` }}
        >
            <PageReveal root={scrollRef}>
                <Eyebrow label={p.contact.label[lang]} th={th} />
            </PageReveal>
            <PageReveal root={scrollRef} delay={0.08}>
                <p style={{ ...styles.disp(th), fontSize: "clamp(1.6rem,4vw,2.6rem)" }}>
                    {p.contact.heading[lang]}
                </p>
            </PageReveal>
            <PageReveal root={scrollRef} delay={0.14}>
                <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-2 text-sm">
                    <a href={`mailto:${p.contact.email}`} style={{ color: th.accent }}>
                        {p.contact.email}
                    </a>
                    <span className="text-xs" style={{ color: th.muted }}>
                        {p.contact.address[lang]}
                    </span>
                </div>
            </PageReveal>
            <PageReveal root={scrollRef} delay={0.2}>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        note();
                    }}
                    className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2"
                    data-testid="preview-contact-form"
                >
                    <input
                        required
                        placeholder={S.form.name[lang]}
                        className="px-4 py-3 text-xs outline-none transition-colors"
                        style={{
                            background: th.panel,
                            border: `1px solid ${th.line}`,
                            borderRadius: th.radius,
                            color: th.text,
                        }}
                    />
                    <input
                        required
                        type="email"
                        placeholder={S.form.email[lang]}
                        className="px-4 py-3 text-xs outline-none transition-colors"
                        style={{
                            background: th.panel,
                            border: `1px solid ${th.line}`,
                            borderRadius: th.radius,
                            color: th.text,
                        }}
                    />
                    <textarea
                        required
                        rows={3}
                        placeholder={S.form.msg[lang]}
                        className="resize-none px-4 py-3 text-xs outline-none sm:col-span-2"
                        style={{
                            background: th.panel,
                            border: `1px solid ${th.line}`,
                            borderRadius: th.radius,
                            color: th.text,
                        }}
                    />
                    <button
                        type="submit"
                        className="inline-flex w-fit items-center gap-2 rounded-full px-6 py-3 text-xs font-medium transition-transform duration-300 hover:-translate-y-0.5"
                        style={{ background: th.accent, color: th.bg }}
                    >
                        <Send className="h-3.5 w-3.5" />
                        {S.form.send[lang]}
                    </button>
                </form>
            </PageReveal>
            <div className="mt-14 overflow-hidden" style={{ maxHeight: 120 }}>
                <PageReveal root={scrollRef} delay={0.1}>
                    <p
                        className="whitespace-nowrap text-center uppercase"
                        style={{
                            ...styles.disp(th),
                            fontSize: "clamp(3rem,9vw,6rem)",
                            color: th.text,
                            opacity: 0.22,
                            transform: "translateY(24%)",
                        }}
                    >
                        {p.profile.name}
                    </p>
                </PageReveal>
            </div>
        </div>
    );

    const sections = { about: aboutSec, edu: eduSec, exp: expSec, works: worksSec, trust: trustSec, contact: contactSec };

    return (
        <div style={{ background: th.bg, color: th.text, fontFamily: th.body }}>
            {miniNav}
            <Cover
                tpl={tpl}
                p={p}
                th={th}
                S={S}
                lang={lang}
                note={note}
                scrollToPage={scrollToPage}
                scrollRef={scrollRef}
            />
            {p.flow.map((key) => (
                <div key={key}>{sections[key]}</div>
            ))}
        </div>
    );
};

export default TemplatePreview;

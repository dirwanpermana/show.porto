import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight, Maximize2, Minimize2, X } from "lucide-react";
import { Reveal, SectionTag } from "@/components/Reveal";
import TemplatePreview from "@/components/TemplatePreview";
import { useLang, SITE } from "@/i18n";
import { scrollToSection } from "@/lib/scroll";
import { TEMPLATES } from "@/data/templates";
import { ROUTES, useGo } from "@/lib/nav";

const UmkmTeaser = ({ lang, S }) => {
    const go = useGo();
    return (
        <article
            data-card="true"
            data-testid="template-card-umkm-teaser"
            className="group flex w-[300px] shrink-0 flex-col justify-between overflow-hidden rounded-2xl border border-verdant/30 bg-gradient-to-b from-verdant/[0.12] to-ink p-6 transition-all duration-500 hover:border-verdant/60 md:w-[400px]"
            style={{ scrollSnapAlign: "start" }}
        >
            <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-verdant">
                    Landing Page UMKM
                </p>
                <h3 className="mt-3 font-display text-3xl font-light text-bone">
                    {S.moreUmkmT[lang]}
                </h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-ash">
                    {S.moreUmkmD[lang]}
                </p>
            </div>
            <button
                data-testid="template-umkm-teaser-cta"
                onClick={() => go({ id: "template", path: ROUTES.umkm })}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-verdant px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-[#1aa48a]"
            >
                {S.moreUmkmCta[lang]}
                <ArrowUpRight className="h-4 w-4" />
            </button>
        </article>
    );
};

const TemplateSlider = ({ templates = TEMPLATES, copy, testPrefix = "template", teaser = !copy }) => {
    const { lang } = useLang();
    const S = SITE.tpl;
    const head = copy || { tag: S.tag[lang], title: S.title[lang], sub: S.sub[lang] };
    const trackRef = useRef(null);
    const scrollRef = useRef(null);
    const [active, setActive] = useState(null);
    const [full, setFull] = useState(false);

    const scrollBy = (dir) => {
        const el = trackRef.current;
        if (!el) return;
        const card = el.querySelector("[data-card]");
        const step = card ? card.offsetWidth + 24 : 400;
        el.scrollBy({ left: dir * step, behavior: "smooth" });
    };

    useEffect(() => {
        if (active) {
            window.__lenis?.stop();
            scrollRef.current?.scrollTo({ top: 0 });
        } else {
            window.__lenis?.start();
            setFull(false);
        }
        return () => window.__lenis?.start();
    }, [active]);

    return (
        <section
            id="template"
            className="scroll-mt-24 border-t hairline py-24 md:py-32"
        >
            <div className="mx-auto max-w-[1280px] px-6">
                <div className="flex flex-wrap items-end justify-between gap-6">
                    <div className="mb-0">
                        <Reveal>
                            <SectionTag>{head.tag}</SectionTag>
                        </Reveal>
                        <Reveal delay={0.08}>
                            <h2 className="mt-4 font-display text-4xl font-light leading-[1.05] tracking-tight text-bone md:text-5xl">
                                {head.title}
                            </h2>
                        </Reveal>
                        <Reveal delay={0.16}>
                            <p className="mt-4 max-w-xl text-base font-light text-ash md:text-lg">
                                {head.sub}
                            </p>
                        </Reveal>
                    </div>
                    <Reveal delay={0.2}>
                        <div className="flex gap-3">
                            <button
                                data-testid="template-prev-button"
                                onClick={() => scrollBy(-1)}
                                aria-label={S.prev[lang]}
                                className="inline-flex h-11 w-11 items-center justify-center rounded-full border hairline text-bone transition-all duration-300 hover:border-iris hover:bg-iris/10"
                            >
                                <ChevronLeft className="h-5 w-5" />
                            </button>
                            <button
                                data-testid="template-next-button"
                                onClick={() => scrollBy(1)}
                                aria-label={S.next[lang]}
                                className="inline-flex h-11 w-11 items-center justify-center rounded-full border hairline text-bone transition-all duration-300 hover:border-iris hover:bg-iris/10"
                            >
                                <ChevronRight className="h-5 w-5" />
                            </button>
                        </div>
                    </Reveal>
                </div>
            </div>

            <Reveal delay={0.1}>
                <div
                    ref={trackRef}
                    data-testid="template-slider-track"
                    data-lenis-prevent
                    className="no-scrollbar mt-12 flex gap-6 overflow-x-auto scroll-smooth px-6 pb-4 md:px-[max(1.5rem,calc((100vw-1280px)/2+1.5rem))]"
                    style={{ scrollSnapType: "x mandatory" }}
                >
                    {templates.map((t) => (
                        <article
                            key={t.id}
                            data-card="true"
                            data-testid={`${testPrefix}-card-${t.id}`}
                            className="group w-[300px] shrink-0 overflow-hidden rounded-2xl border hairline bg-ink transition-all duration-500 hover:border-iris/50 hover:shadow-[0_20px_50px_rgba(128,82,255,0.15)] md:w-[400px]"
                            style={{ scrollSnapAlign: "start" }}
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={t.img}
                                    alt={`Template ${t.name}`}
                                    loading="lazy"
                                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <span className="absolute left-4 top-4 rounded-full bg-void/70 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.16em] text-bone backdrop-blur-md">
                                    {t.field[lang]}
                                </span>
                            </div>
                            <div className="p-6">
                                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-iris">
                                    {S.style[lang]} · {t.styleName[lang]}
                                </p>
                                <h3 className="mt-2 font-display text-2xl font-light text-bone">
                                    {t.name}
                                </h3>
                                <p className="mt-2 min-h-[64px] text-sm font-light leading-relaxed text-ash">
                                    {t.desc[lang]}
                                </p>
                                <button
                                    data-testid={`${testPrefix}-detail-button-${t.id}`}
                                    onClick={() => setActive(t)}
                                    className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full border hairline px-5 py-3 text-sm font-medium text-bone transition-all duration-300 hover:bg-iris hover:border-iris"
                                >
                                    {S.detail[lang]}
                                    <ArrowUpRight className="h-4 w-4" />
                                </button>
                            </div>
                        </article>
                    ))}
                    {teaser && <UmkmTeaser lang={lang} S={S} />}
                </div>
            </Reveal>

            <AnimatePresence>
                {active && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className={`fixed inset-0 z-[70] flex items-center justify-center bg-void/85 backdrop-blur-sm ${
                            full ? "p-0" : "p-3 md:p-8"
                        }`}
                        data-testid="template-detail-modal"
                        onClick={() => setActive(null)}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 32, scale: 0.97 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 24, scale: 0.97 }}
                            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                            onClick={(e) => e.stopPropagation()}
                            className={`relative flex flex-col overflow-hidden bg-ink ${
                                full
                                    ? "h-full w-full max-w-none max-h-none rounded-none"
                                    : "max-h-[92vh] w-full max-w-4xl rounded-2xl border hairline"
                            }`}
                        >
                            <div className="flex items-center justify-between gap-3 border-b hairline bg-white/[0.04] px-5 py-3">
                                <div className="flex min-w-0 items-center gap-3">
                                    <div className="flex shrink-0 items-center gap-1.5">
                                        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                                        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                                        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                                    </div>
                                    <span className="truncate text-[11px] font-light text-ash">
                                        {active.domain} — {active.name} · {active.styleName[lang]}
                                    </span>
                                </div>
                                <div className="flex shrink-0 items-center gap-2">
                                    <button
                                        data-testid="template-modal-fullscreen"
                                        onClick={() => setFull(!full)}
                                        aria-label={full ? "Keluar layar penuh" : "Layar penuh"}
                                        className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-bone transition-colors hover:bg-iris"
                                    >
                                        {full ? (
                                            <Minimize2 className="h-4 w-4" />
                                        ) : (
                                            <Maximize2 className="h-4 w-4" />
                                        )}
                                    </button>
                                    <button
                                        data-testid="template-modal-close"
                                        onClick={() => setActive(null)}
                                        aria-label="Tutup"
                                        className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-bone transition-colors hover:bg-iris"
                                    >
                                        <X className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>

                            <div
                                ref={scrollRef}
                                data-lenis-prevent
                                className="flex-1 overflow-y-auto"
                                data-testid="template-preview"
                            >
                                <TemplatePreview tpl={active} scrollRef={scrollRef} />
                            </div>

                            <div className="border-t hairline bg-ink px-5 py-4">
                                <button
                                    data-testid="template-modal-choose"
                                    onClick={() => {
                                        setActive(null);
                                        setTimeout(() => scrollToSection("kontak"), 60);
                                    }}
                                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-iris px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-[#9069ff] hover:shadow-[0_0_32px_rgba(128,82,255,0.45)] sm:w-auto"
                                >
                                    {S.choose[lang]} {active.name}
                                    <ArrowUpRight className="h-4 w-4" />
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default TemplateSlider;

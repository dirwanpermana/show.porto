import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight, Check, X } from "lucide-react";
import { Reveal, SectionTag } from "@/components/Reveal";
import { scrollToSection } from "@/lib/scroll";
import { TEMPLATES } from "@/data/templates";

const TemplateSlider = () => {
    const trackRef = useRef(null);
    const [active, setActive] = useState(null);

    const scrollBy = (dir) => {
        const el = trackRef.current;
        if (!el) return;
        const card = el.querySelector("[data-card]");
        const step = card ? card.offsetWidth + 24 : 400;
        el.scrollBy({ left: dir * step, behavior: "smooth" });
    };

    return (
        <section
            id="template"
            className="scroll-mt-24 border-t hairline py-24 md:py-32"
        >
            <div className="mx-auto max-w-[1280px] px-6">
                <div className="flex flex-wrap items-end justify-between gap-6">
                    <div className="mb-0">
                        <Reveal>
                            <SectionTag>Koleksi template</SectionTag>
                        </Reveal>
                        <Reveal delay={0.08}>
                            <h2 className="mt-4 font-display text-4xl font-light leading-[1.05] tracking-tight text-bone md:text-5xl">
                                Satu untuk setiap bidang.
                            </h2>
                        </Reveal>
                        <Reveal delay={0.16}>
                            <p className="mt-4 max-w-xl text-base font-light text-ash md:text-lg">
                                Desainer, marketing, teknik sipil, sampai
                                etalase UMKM. Klik detail untuk melihat
                                kelebihan tiap template.
                            </p>
                        </Reveal>
                    </div>
                    <Reveal delay={0.2}>
                        <div className="flex gap-3">
                            <button
                                data-testid="template-prev-button"
                                onClick={() => scrollBy(-1)}
                                aria-label="Sebelumnya"
                                className="inline-flex h-11 w-11 items-center justify-center rounded-full border hairline text-bone transition-all duration-300 hover:border-iris hover:bg-iris/10"
                            >
                                <ChevronLeft className="h-5 w-5" />
                            </button>
                            <button
                                data-testid="template-next-button"
                                onClick={() => scrollBy(1)}
                                aria-label="Berikutnya"
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
                    className="no-scrollbar mt-12 flex gap-6 overflow-x-auto scroll-smooth px-6 pb-4 md:px-[max(1.5rem,calc((100vw-1280px)/2+1.5rem))]"
                    style={{ scrollSnapType: "x mandatory" }}
                >
                    {TEMPLATES.map((t) => (
                        <article
                            key={t.id}
                            data-card="true"
                            data-testid={`template-card-${t.id}`}
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
                                    {t.field}
                                </span>
                            </div>
                            <div className="p-6">
                                <h3 className="font-display text-2xl font-light text-bone">
                                    {t.name}
                                </h3>
                                <p className="mt-2 min-h-[48px] text-sm font-light leading-relaxed text-ash">
                                    {t.desc}
                                </p>
                                <button
                                    data-testid={`template-detail-button-${t.id}`}
                                    onClick={() => setActive(t)}
                                    className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full border hairline px-5 py-3 text-sm font-medium text-bone transition-all duration-300 hover:bg-iris hover:border-iris"
                                >
                                    Lihat Detail
                                    <ArrowUpRight className="h-4 w-4" />
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            </Reveal>

            <AnimatePresence>
                {active && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[70] flex items-center justify-center bg-void/80 p-4 backdrop-blur-sm md:p-8"
                        data-testid="template-detail-modal"
                        onClick={() => setActive(null)}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 32, scale: 0.97 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 24, scale: 0.97 }}
                            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                            onClick={(e) => e.stopPropagation()}
                            className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border hairline bg-ink"
                        >
                            <div className="relative">
                                <img
                                    src={active.img}
                                    alt={`Template ${active.name}`}
                                    className="aspect-[16/9] w-full object-cover"
                                />
                                <button
                                    data-testid="template-modal-close"
                                    onClick={() => setActive(null)}
                                    aria-label="Tutup"
                                    className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-void/70 text-bone backdrop-blur-md transition-colors hover:bg-iris"
                                >
                                    <X className="h-4 w-4" />
                                </button>
                            </div>
                            <div className="p-8 md:p-10">
                                <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-iris">
                                    {active.field}
                                </span>
                                <h3 className="mt-2 font-display text-3xl font-light text-bone md:text-4xl">
                                    Template {active.name}
                                </h3>
                                <p className="mt-3 text-sm font-light leading-relaxed text-ash md:text-base">
                                    {active.desc}
                                </p>
                                <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                                    {active.tags.map((tag) => (
                                        <li
                                            key={tag}
                                            className="flex items-center gap-2 rounded-lg border hairline bg-white/[0.03] px-4 py-3 text-sm font-light text-mist"
                                        >
                                            <Check className="h-4 w-4 shrink-0 text-verdant" />
                                            {tag}
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    data-testid="template-modal-choose"
                                    onClick={() => {
                                        setActive(null);
                                        setTimeout(
                                            () => scrollToSection("kontak"),
                                            60
                                        );
                                    }}
                                    className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-iris px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-[#9069ff] hover:shadow-[0_0_32px_rgba(128,82,255,0.45)] sm:w-auto"
                                >
                                    Pilih template {active.name}
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

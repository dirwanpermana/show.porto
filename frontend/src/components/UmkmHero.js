import { motion } from "framer-motion";
import { ArrowDown, MessageCircle } from "lucide-react";
import ParticleField from "@/components/ParticleField";
import { useLang, SITE } from "@/i18n";
import { scrollToSection } from "@/lib/scroll";
import { BRAND } from "@/data/templates";
import { UMKM_TEMPLATES } from "@/data/umkmTemplates";

const EASE = [0.22, 1, 0.36, 1];

const Line = ({ children, delay }) => (
    <span className="block overflow-hidden pb-1">
        <motion.span
            initial={{ y: "112%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.95, delay, ease: EASE }}
            className="block"
        >
            {children}
        </motion.span>
    </span>
);

const UmkmHero = () => {
    const { lang } = useLang();
    const S = SITE.umkm;
    const strip = UMKM_TEMPLATES.slice(0, 6);

    return (
        <section id="beranda" className="relative overflow-hidden pb-16 pt-32 lg:pt-40">
            <div className="absolute inset-0">
                <ParticleField className="h-full w-full" />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#000_92%)]" />

            <div className="relative z-10 mx-auto max-w-[1280px] px-6">
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
                    className="mb-6 inline-flex items-center gap-2.5 rounded-full border hairline px-4 py-2 text-[11px] font-medium uppercase tracking-[0.22em] text-mist glass"
                    data-testid="umkm-hero-badge"
                >
                    <span className="h-1.5 w-1.5 rounded-full bg-verdant" />
                    {S.badge[lang]}
                </motion.p>

                <h1 className="max-w-4xl font-display text-[13vw] font-light leading-[0.92] tracking-[-0.02em] text-bone sm:text-7xl lg:text-[6rem]">
                    <Line delay={0.2}>{S.l1[lang]}</Line>
                    <Line delay={0.32}>
                        <span className="text-gradient-iris">{S.l2[lang]}</span>
                    </Line>
                </h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.65, ease: EASE }}
                    className="mt-7 max-w-2xl text-base font-light leading-relaxed text-ash md:text-lg"
                >
                    {S.sub[lang]}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8, ease: EASE }}
                    className="mt-10 flex flex-wrap items-center gap-4"
                >
                    <button
                        data-testid="umkm-hero-cta-primary"
                        onClick={() => scrollToSection("template")}
                        className="group inline-flex items-center gap-2 rounded-full bg-iris px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-[#9069ff] hover:shadow-[0_0_36px_rgba(128,82,255,0.5)]"
                    >
                        {S.cta1[lang]}
                        <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                    </button>
                    <a
                        href={BRAND.wa}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid="umkm-hero-cta-wa"
                        className="inline-flex items-center gap-2 rounded-full border border-verdant/50 bg-verdant/10 px-7 py-3.5 text-sm font-medium text-[#3fbfa4] transition-all duration-300 hover:bg-verdant hover:text-white"
                    >
                        <MessageCircle className="h-4 w-4" />
                        {S.cta2[lang]}
                    </a>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.05 }}
                    className="mt-10 text-xs font-light tracking-wide text-ash"
                >
                    {S.specs[lang]}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.1, ease: EASE }}
                    className="mt-16 grid grid-cols-3 gap-3 md:grid-cols-6"
                    data-testid="umkm-hero-strip"
                >
                    {strip.map((t, i) => (
                        <button
                            key={t.id}
                            onClick={() => scrollToSection("template")}
                            className="group relative aspect-[3/4] overflow-hidden rounded-xl border hairline"
                            style={{ transform: `translateY(${i % 2 ? 14 : 0}px)` }}
                        >
                            <img
                                src={t.img}
                                alt={t.field[lang]}
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                loading="eager"
                            />
                            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-void/90 to-transparent px-3 pb-3 pt-8 text-left text-[10px] font-medium uppercase tracking-[0.14em] text-bone">
                                {t.field[lang]}
                            </span>
                        </button>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default UmkmHero;

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import ParticleField from "@/components/ParticleField";
import { scrollToSection } from "@/lib/scroll";
import { TEMPLATES } from "@/data/templates";

const EASE = [0.22, 1, 0.36, 1];

const HeroLine = ({ children, delay }) => (
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

const FloatCard = ({ img, label, className, tilt, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 40, rotate: tilt }}
        animate={{ opacity: 1, y: 0, rotate: tilt }}
        transition={{ duration: 1, delay, ease: EASE }}
        className={`absolute ${className}`}
    >
        <div
            className="animate-floaty overflow-hidden rounded-xl border hairline bg-ink shadow-[0_24px_60px_rgba(0,0,0,0.6)]"
            style={{ "--tilt": "0deg", animationDelay: `${delay}s` }}
        >
            <div className="flex items-center gap-1.5 border-b hairline bg-white/5 px-3 py-2">
                <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
                <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
                <span className="h-2 w-2 rounded-full bg-[#28c840]" />
                <span className="ml-2 text-[10px] font-light text-ash">
                    {label}
                </span>
            </div>
            <img
                src={img}
                alt={label}
                className="h-36 w-64 object-cover md:h-40 md:w-72"
                loading="eager"
            />
        </div>
    </motion.div>
);

const Hero = () => (
    <section
        id="beranda"
        className="relative flex min-h-screen items-center overflow-hidden"
    >
        <div className="absolute inset-0" data-testid="hero-particle-field">
            <ParticleField className="h-full w-full" />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#000_92%)]" />

        <div className="relative z-10 mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-10 px-6 pb-24 pt-32 lg:grid-cols-12 lg:pb-32 lg:pt-24">
            <div className="lg:col-span-8">
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
                    className="mb-6 inline-flex items-center gap-2.5 rounded-full border hairline px-4 py-2 text-[11px] font-medium uppercase tracking-[0.22em] text-mist glass"
                >
                    <span className="h-1.5 w-1.5 rounded-full bg-saffron" />
                    Jasa website portofolio & UMKM
                </motion.p>

                <h1 className="font-display text-[13vw] font-light leading-[0.92] tracking-[-0.02em] text-bone sm:text-7xl lg:text-[6.5rem]">
                    <HeroLine delay={0.2}>Biarkan karyamu</HeroLine>
                    <HeroLine delay={0.32}>
                        <span className="text-gradient-iris">bicara.</span>
                    </HeroLine>
                </h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.65, ease: EASE }}
                    className="mt-7 max-w-xl text-base font-light leading-relaxed text-ash md:text-lg"
                >
                    Kami membangun website portofolio untuk pencari kerja dan
                    landing page katalog untuk UMKM — pengalaman, pendidikan,
                    proyek, sampai produk, tampil dalam satu halaman yang
                    memukau.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8, ease: EASE }}
                    className="mt-10 flex flex-wrap items-center gap-4"
                >
                    <button
                        data-testid="hero-cta-primary"
                        onClick={() => scrollToSection("kontak")}
                        className="group inline-flex items-center gap-2 rounded-full bg-iris px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-[#9069ff] hover:shadow-[0_0_36px_rgba(128,82,255,0.5)]"
                    >
                        Mulai dari Rp499rb
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                    <button
                        data-testid="hero-cta-secondary"
                        onClick={() => scrollToSection("template")}
                        className="group inline-flex items-center gap-2 rounded-full border hairline px-7 py-3.5 text-sm font-light text-bone transition-all duration-300 hover:border-white/30 hover:bg-white/5"
                    >
                        Lihat Template
                        <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                    </button>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.05 }}
                    className="mt-12 text-xs font-light tracking-wide text-ash"
                >
                    100% Responsif · SEO dasar · Serah terima 5-10 hari
                </motion.p>
            </div>

            <div className="relative hidden h-[420px] lg:col-span-4 lg:block">
                <FloatCard
                    img={TEMPLATES[0].img}
                    label="lumina.karyaloka.id"
                    className="right-0 top-2 z-10"
                    tilt={4}
                    delay={0.9}
                />
                <FloatCard
                    img={TEMPLATES[5].img}
                    label="etalase.karyaloka.id"
                    className="left-0 top-44"
                    tilt={-3}
                    delay={1.15}
                />
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 1.35, ease: EASE }}
                    className="absolute bottom-2 right-8 rounded-full bg-saffron px-4 py-2 text-xs font-medium text-void"
                >
                    Detail: PDF · Video · GitHub
                </motion.div>
            </div>
        </div>

        <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            onClick={() => scrollToSection("untuk")}
            data-testid="hero-scroll-cue"
            className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-ash transition-colors hover:text-bone"
            aria-label="Gulir ke bawah"
        >
            <ArrowDown className="h-5 w-5 animate-scroll-cue" />
        </motion.button>
    </section>
);

export default Hero;

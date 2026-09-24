import { motion } from "framer-motion";
import { ArrowUpRight, Briefcase, Store } from "lucide-react";
import { Reveal, SectionTag } from "@/components/Reveal";
import { scrollToSection } from "@/lib/scroll";
import { TEMPLATES, DEMO_PROJECTS, DEMO_PRODUCTS } from "@/data/templates";

const SpecChip = ({ children }) => (
    <span className="rounded-full border hairline px-3.5 py-1.5 text-[11px] font-light uppercase tracking-[0.14em] text-mist">
        {children}
    </span>
);

const Audiences = () => (
    <section id="untuk" className="mx-auto max-w-[1280px] scroll-mt-24 px-6 py-24 md:py-32">
        <div className="mb-12 md:mb-16">
            <Reveal>
                <SectionTag>Dibuat untuk siapa</SectionTag>
            </Reveal>
            <Reveal delay={0.08}>
                <h2 className="mt-4 max-w-3xl font-display text-4xl font-light leading-[1.05] tracking-tight text-bone md:text-5xl">
                    Dua masalah, satu rumah digital.
                </h2>
            </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            <Reveal>
                <div
                    data-testid="audience-jobseeker-card"
                    className="group relative flex h-full flex-col overflow-hidden rounded-2xl border hairline bg-ink p-8 transition-colors duration-500 hover:border-iris/40 md:p-10"
                >
                    <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-iris/20 blur-[90px] transition-opacity duration-500 group-hover:opacity-100 md:opacity-60" />
                    <Briefcase className="h-9 w-9 text-iris" />
                    <h3 className="mt-6 font-display text-3xl font-light text-bone">
                        Pencari Kerja
                    </h3>
                    <p className="mt-3 max-w-md text-sm font-light leading-relaxed text-ash md:text-base">
                        Pengalaman kerja, riwayat pendidikan, dan proyek yang
                        pernah dibangun — tersusun rapi, jauh lebih hidup
                        daripada file CV.
                    </p>
                    <div className="mt-8 grid grid-cols-3 gap-3">
                        {["Pengalaman", "Pendidikan", "Proyek"].map((s, i) => (
                            <div
                                key={s}
                                className="rounded-lg border hairline bg-white/[0.03] p-3"
                            >
                                <div className="flex gap-1">
                                    {[0, 1, 2].map((d) => (
                                        <motion.span
                                            key={d}
                                            className="h-1.5 w-1.5 rounded-full bg-iris"
                                            animate={{ opacity: [0.3, 1, 0.3] }}
                                            transition={{
                                                duration: 1.8,
                                                repeat: Infinity,
                                                delay: i * 0.3 + d * 0.2,
                                            }}
                                        />
                                    ))}
                                </div>
                                <p className="mt-2.5 text-[11px] font-light uppercase tracking-wider text-mist">
                                    {s}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 flex gap-2 overflow-hidden rounded-lg border hairline">
                        <img
                            src={DEMO_PROJECTS[1].img}
                            alt="Contoh proyek"
                            className="h-20 w-1/3 object-cover"
                            loading="lazy"
                        />
                        <img
                            src={DEMO_PROJECTS[0].img}
                            alt="Contoh proyek"
                            className="h-20 w-1/3 object-cover"
                            loading="lazy"
                        />
                        <img
                            src={DEMO_PROJECTS[3].img}
                            alt="Contoh proyek"
                            className="h-20 w-1/3 object-cover"
                            loading="lazy"
                        />
                    </div>
                    <button
                        data-testid="audience-jobseeker-cta"
                        onClick={() => scrollToSection("harga")}
                        className="mt-8 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-bone transition-colors group-hover:text-iris"
                    >
                        Lihat paket PORTO
                        <ArrowUpRight className="h-4 w-4" />
                    </button>
                </div>
            </Reveal>

            <Reveal delay={0.1}>
                <div
                    data-testid="audience-umkm-card"
                    className="group relative flex h-full flex-col overflow-hidden rounded-2xl border hairline bg-ink p-8 transition-colors duration-500 hover:border-verdant/50 md:p-10"
                >
                    <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-verdant/25 blur-[90px] md:opacity-60" />
                    <Store className="h-9 w-9 text-verdant" />
                    <h3 className="mt-6 font-display text-3xl font-light text-bone">
                        UMKM
                    </h3>
                    <p className="mt-3 max-w-md text-sm font-light leading-relaxed text-ash md:text-base">
                        Daftar produk bergaya e-commerce: foto, harga, dan
                        tombol pesan yang langsung menghubungkan pelanggan ke
                        WhatsApp-mu.
                    </p>
                    <div className="mt-8 grid grid-cols-3 gap-3">
                        {DEMO_PRODUCTS.slice(0, 3).map((p) => (
                            <div
                                key={p.name}
                                className="overflow-hidden rounded-lg border hairline bg-white/[0.03]"
                            >
                                <img
                                    src={p.img}
                                    alt={p.name}
                                    className="h-20 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    loading="lazy"
                                />
                                <div className="flex items-center justify-between px-2.5 py-2">
                                    <span className="w-full truncate text-[10px] font-light text-mist">
                                        {p.name}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button
                        data-testid="audience-umkm-cta"
                        onClick={() => scrollToSection("harga")}
                        className="mt-8 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-bone transition-colors group-hover:text-verdant"
                    >
                        Lihat paket UMKM
                        <ArrowUpRight className="h-4 w-4" />
                    </button>
                </div>
            </Reveal>
        </div>

        <Reveal delay={0.15}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                <SpecChip>Mobile-first</SpecChip>
                <SpecChip>SEO dasar</SpecChip>
                <SpecChip>Serah terima cepat</SpecChip>
                <SpecChip>Panduan update mandiri</SpecChip>
            </div>
        </Reveal>
    </section>
);

export default Audiences;

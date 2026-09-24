import { ArrowUpRight, Check } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { scrollToSection } from "@/lib/scroll";
import { PRICING } from "@/data/templates";

const Pricing = () => (
    <section
        id="harga"
        className="scroll-mt-24 border-t hairline bg-ink/40 py-24 md:py-32"
    >
        <div className="mx-auto max-w-[1280px] px-6">
            <SectionHeading
                tag="Harga"
                title="Sekali bayar, karya tampil selamanya."
                sub="Tidak ada biaya bulanan tersembunyi. Pilih titik awal, upgrade kapan saja."
            />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {PRICING.map((p, i) => (
                    <Reveal key={p.id} delay={0.08 * i}>
                        <div
                            data-testid={`pricing-card-${p.id}`}
                            className={`relative flex h-full flex-col rounded-2xl border p-8 transition-all duration-500 ${
                                p.highlight
                                    ? "border-iris bg-gradient-to-b from-iris/[0.14] to-ink shadow-[0_0_60px_rgba(128,82,255,0.18)]"
                                    : "hairline bg-ink hover:border-white/20"
                            }`}
                        >
                            {p.highlight && (
                                <span
                                    data-testid="pricing-popular-badge"
                                    className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-saffron px-4 py-1.5 text-[11px] font-medium uppercase tracking-wider text-void"
                                >
                                    Paling laris
                                </span>
                            )}
                            <h3 className="font-display text-lg font-medium uppercase tracking-[0.14em] text-mist">
                                {p.name}
                            </h3>
                            <div className="mt-4 flex items-baseline gap-2">
                                <span className="font-display text-4xl font-light text-bone md:text-5xl">
                                    {p.price}
                                </span>
                                <span className="text-xs font-light text-ash">
                                    / {p.period}
                                </span>
                            </div>
                            <p className="mt-3 text-sm font-light text-ash">
                                {p.desc}
                            </p>
                            <ul className="mt-7 flex-1 space-y-3">
                                {p.features.map((f) => (
                                    <li
                                        key={f}
                                        className="flex items-start gap-2.5 text-sm font-light text-mist"
                                    >
                                        <Check
                                            className={`mt-0.5 h-4 w-4 shrink-0 ${
                                                p.highlight
                                                    ? "text-saffron"
                                                    : "text-verdant"
                                            }`}
                                        />
                                        {f}
                                    </li>
                                ))}
                            </ul>
                            <button
                                data-testid={`pricing-cta-${p.id}`}
                                onClick={() => scrollToSection("kontak")}
                                className={`group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium transition-all duration-300 ${
                                    p.highlight
                                        ? "bg-iris text-white hover:bg-[#9069ff] hover:shadow-[0_0_32px_rgba(128,82,255,0.45)]"
                                        : "border hairline text-bone hover:border-iris hover:bg-iris/10"
                                }`}
                            >
                                {p.cta}
                                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </button>
                        </div>
                    </Reveal>
                ))}
            </div>
            <Reveal delay={0.2}>
                <p className="mt-8 text-center text-xs font-light text-ash">
                    *Harga contoh yang bisa disesuaikan — konsultasikan
                    kebutuhanmu untuk penawaran final.
                </p>
            </Reveal>
        </div>
    </section>
);

export default Pricing;

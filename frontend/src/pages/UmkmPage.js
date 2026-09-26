import { ArrowUpRight } from "lucide-react";
import Nav from "@/components/Nav";
import UmkmHero from "@/components/UmkmHero";
import TemplateSlider from "@/components/TemplateSlider";
import Pricing from "@/components/Pricing";
import LeadSection from "@/components/LeadSection";
import Footer from "@/components/Footer";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { useLang, SITE } from "@/i18n";
import { UMKM_TEMPLATES } from "@/data/umkmTemplates";
import { PRICING_GROUPS } from "@/data/templates";
import { ROUTES, useGo } from "@/lib/nav";

const LINKS = [
    { id: "template", path: ROUTES.home, label: SITE.nav.porto },
    { id: "template", label: SITE.nav.umkm },
    { id: "termasuk", label: SITE.nav.fitur },
    { id: "harga", label: SITE.nav.harga },
    { id: "faq", path: ROUTES.home, label: SITE.nav.faq },
];

const Includes = () => {
    const { lang } = useLang();
    const S = SITE.umkm;
    return (
        <section id="termasuk" className="scroll-mt-24 border-t hairline py-24 md:py-32">
            <div className="mx-auto max-w-[1280px] px-6">
                <SectionHeading tag={S.incTag[lang]} title={S.incTitle[lang]} />
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    {S.includes.map((it, i) => (
                        <Reveal key={it.t.en} delay={0.08 * i}>
                            <div
                                data-testid={`umkm-include-${i}`}
                                className="group flex h-full gap-5 rounded-2xl border hairline bg-ink p-7 transition-colors duration-500 hover:border-verdant/50"
                            >
                                <span className="font-display text-3xl font-light text-verdant">
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                <div>
                                    <h3 className="font-display text-xl font-light text-bone">
                                        {it.t[lang]}
                                    </h3>
                                    <p className="mt-2 text-sm font-light leading-relaxed text-ash">
                                        {it.d[lang]}
                                    </p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

const BackHome = () => {
    const { lang } = useLang();
    const go = useGo();
    const S = SITE.umkm;
    return (
        <div className="mx-auto max-w-[1280px] px-6 pb-8">
            <Reveal>
                <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border hairline bg-ink/60 px-7 py-6">
                    <p className="text-sm font-light text-ash">{S.backHome[lang]}</p>
                    <button
                        data-testid="umkm-back-home"
                        onClick={() => go({ id: "template", path: ROUTES.home })}
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-bone transition-colors hover:text-iris"
                    >
                        {S.backHomeCta[lang]}
                        <ArrowUpRight className="h-4 w-4" />
                    </button>
                </div>
            </Reveal>
        </div>
    );
};

const UmkmPage = () => {
    const { lang } = useLang();
    const S = SITE.umkm;
    return (
        <div className="bg-void text-bone" data-testid="page-umkm">
            <Nav links={LINKS} />
            <main>
                <UmkmHero />
                <TemplateSlider
                    templates={UMKM_TEMPLATES}
                    copy={{ tag: S.tplTag[lang], title: S.tplTitle[lang], sub: S.tplSub[lang] }}
                    testPrefix="umkm-template"
                />
                <Includes />
                <Pricing groups={PRICING_GROUPS.filter((g) => g.id === "umkm")} />
                <LeadSection defaultIntent="umkm-web" />
                <BackHome />
            </main>
            <Footer />
        </div>
    );
};

export default UmkmPage;

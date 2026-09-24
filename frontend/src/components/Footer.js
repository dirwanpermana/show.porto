import Logo from "@/components/Logo";
import LangToggle from "@/components/LangToggle";
import { useLang, SITE } from "@/i18n";
import { BRAND } from "@/data/templates";
import { scrollToSection } from "@/lib/scroll";

const Footer = () => {
    const { lang } = useLang();
    const S = SITE.footer;
    const COLS = [
        {
            title: S.services,
            links: [
                { id: "template", label: SITE.nav.template },
                { id: "pratinjau", label: SITE.nav.pratinjau },
                { id: "harga", label: SITE.nav.harga },
            ],
        },
        {
            title: S.info,
            links: [
                { id: "fitur", label: SITE.nav.fitur },
                { id: "proses", label: SITE.nav.proses },
                { id: "faq", label: SITE.nav.faq },
            ],
        },
    ];

    return (
        <footer className="border-t hairline bg-ink/60">
            <div className="mx-auto max-w-[1280px] px-6 py-16">
                <div className="flex flex-col justify-between gap-12 md:flex-row">
                    <div className="max-w-sm">
                        <Logo />
                        <p className="mt-4 text-sm font-light leading-relaxed text-ash">
                            {S.tagline[lang]}
                        </p>
                        <LangToggle className="mt-5" />
                    </div>
                    <div className="flex gap-16">
                        {COLS.map((c) => (
                            <div key={c.title.en}>
                                <p className="text-xs font-medium uppercase tracking-[0.18em] text-mist">
                                    {c.title[lang]}
                                </p>
                                <ul className="mt-4 space-y-3">
                                    {c.links.map((l) => (
                                        <li key={l.id}>
                                            <a
                                                href={`#${l.id}`}
                                                data-testid={`footer-link-${l.id}`}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    scrollToSection(l.id);
                                                }}
                                                className="text-sm font-light text-ash transition-colors duration-300 hover:text-bone"
                                            >
                                                {l.label[lang]}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t hairline pt-8 text-xs font-light text-ash sm:flex-row sm:items-center">
                    <p>
                        © {new Date().getFullYear()} {BRAND.name}. {S.rights[lang]}
                    </p>
                    <p>{S.made[lang]}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

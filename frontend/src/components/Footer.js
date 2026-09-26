import { Mail, MessageCircle } from "lucide-react";
import Logo from "@/components/Logo";
import { useLang, SITE } from "@/i18n";
import { BRAND } from "@/data/templates";
import { ROUTES, useGo } from "@/lib/nav";

const Footer = () => {
    const { lang } = useLang();
    const go = useGo();
    const S = SITE.footer;
    const COLS = [
        {
            title: S.services,
            links: [
                { id: "template", path: ROUTES.home, label: S.tplPorto },
                { id: "template", path: ROUTES.umkm, label: S.tplUmkm },
                { id: "pratinjau", path: ROUTES.home, label: SITE.nav.pratinjau },
                { id: "harga", path: ROUTES.home, label: SITE.nav.harga },
            ],
        },
        {
            title: S.info,
            links: [
                { id: "fitur", path: ROUTES.home, label: SITE.nav.fitur },
                { id: "proses", path: ROUTES.home, label: SITE.nav.proses },
                { id: "faq", path: ROUTES.home, label: SITE.nav.faq },
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
                    </div>
                    <div className="flex flex-wrap gap-12 md:gap-16">
                        {COLS.map((c) => (
                            <div key={c.title.en}>
                                <p className="text-xs font-medium uppercase tracking-[0.18em] text-mist">
                                    {c.title[lang]}
                                </p>
                                <ul className="mt-4 space-y-3">
                                    {c.links.map((l) => (
                                        <li key={`${l.path}-${l.id}-${l.label.en}`}>
                                            <a
                                                href={`#${l.id}`}
                                                data-testid={`footer-link-${l.path.replace("/", "") || "home"}-${l.id}`}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    go(l);
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
                        <div>
                            <p className="text-xs font-medium uppercase tracking-[0.18em] text-mist">
                                {S.contact[lang]}
                            </p>
                            <ul className="mt-4 space-y-3">
                                <li>
                                    <a
                                        href={BRAND.wa}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        data-testid="footer-whatsapp"
                                        className="inline-flex items-center gap-2 text-sm font-light text-ash transition-colors duration-300 hover:text-[#3fbfa4]"
                                    >
                                        <MessageCircle className="h-4 w-4" />
                                        {BRAND.waNumber}
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href={`mailto:${BRAND.email}`}
                                        data-testid="footer-email"
                                        className="inline-flex items-center gap-2 text-sm font-light text-ash transition-colors duration-300 hover:text-bone"
                                    >
                                        <Mail className="h-4 w-4" />
                                        {BRAND.email}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

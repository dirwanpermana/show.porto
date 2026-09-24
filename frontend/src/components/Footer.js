import Logo from "@/components/Logo";
import { BRAND } from "@/data/templates";
import { scrollToSection } from "@/lib/scroll";

const COLS = [
    {
        title: "Layanan",
        links: [
            { id: "template", label: "Template" },
            { id: "pratinjau", label: "Pratinjau" },
            { id: "harga", label: "Harga" },
        ],
    },
    {
        title: "Informasi",
        links: [
            { id: "fitur", label: "Fitur" },
            { id: "proses", label: "Proses" },
            { id: "faq", label: "FAQ" },
        ],
    },
];

const Footer = () => (
    <footer className="border-t hairline bg-ink/60">
        <div className="mx-auto max-w-[1280px] px-6 py-16">
            <div className="flex flex-col justify-between gap-12 md:flex-row">
                <div className="max-w-sm">
                    <Logo />
                    <p className="mt-4 text-sm font-light leading-relaxed text-ash">
                        {BRAND.tagline}. Website portofolio untuk pencari kerja
                        & etalase digital untuk UMKM Indonesia.
                    </p>
                </div>
                <div className="flex gap-16">
                    {COLS.map((c) => (
                        <div key={c.title}>
                            <p className="text-xs font-medium uppercase tracking-[0.18em] text-mist">
                                {c.title}
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
                                            {l.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t hairline pt-8 text-xs font-light text-ash sm:flex-row sm:items-center">
                <p>© {new Date().getFullYear()} {BRAND.name}. Seluruh hak cipta.</p>
                <p>Dibuat dengan presisi di Indonesia.</p>
            </div>
        </div>
    </footer>
);

export default Footer;

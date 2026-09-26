import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Logo from "@/components/Logo";
import LangToggle from "@/components/LangToggle";
import { useLang, SITE } from "@/i18n";
import { useLocation } from "react-router-dom";
import { useGo } from "@/lib/nav";

const Nav = ({ links = [] }) => {
    const { lang } = useLang();
    const go = useGo();
    const { pathname } = useLocation();
    const S = SITE.nav;
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const jump = (link) => {
        setOpen(false);
        go(link, open ? 80 : 0);
    };

    const key = (l) => `${l.path || "home"}-${l.id}`;
    const tid = (l) => {
        const p = l.path && l.path !== "/" ? l.path.replace(/\//g, "") : pathname !== "/" && !l.path ? "" : l.path ? "home" : "";
        return `nav-link-${p ? p + "-" : ""}${l.id}`;
    };

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
                scrolled
                    ? "border-b hairline bg-void/70 backdrop-blur-xl"
                    : "bg-transparent"
            }`}
        >
            <nav className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between px-6">
                <a
                    href="#/"
                    data-testid="nav-logo-link"
                    onClick={(e) => {
                        e.preventDefault();
                        jump({ id: null, path: "/" });
                    }}
                >
                    <Logo />
                </a>

                <ul className="hidden items-center gap-8 lg:flex">
                    {links.map((l) => (
                        <li key={key(l)}>
                            <a
                                href={`#${l.id}`}
                                data-testid={tid(l)}
                                onClick={(e) => {
                                    e.preventDefault();
                                    jump(l);
                                }}
                                className="text-sm font-light text-ash transition-colors duration-300 hover:text-bone"
                            >
                                {l.label[lang]}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-3">
                    <LangToggle />
                    <button
                        data-testid="nav-cta-button"
                        onClick={() => jump({ id: "kontak", path: pathname })}
                        className="hidden items-center gap-1.5 rounded-full bg-iris px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-[#9069ff] hover:shadow-[0_0_28px_rgba(128,82,255,0.45)] sm:inline-flex"
                    >
                        {S.cta[lang]}
                        <ArrowUpRight className="h-4 w-4" />
                    </button>
                    <button
                        data-testid="nav-mobile-toggle"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border hairline text-bone lg:hidden"
                        onClick={() => setOpen(!open)}
                        aria-label="Buka menu"
                    >
                        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </nav>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.25 }}
                        className="border-b hairline bg-void/95 px-6 pb-8 pt-2 backdrop-blur-xl lg:hidden"
                        data-testid="nav-mobile-menu"
                    >
                        <ul className="flex flex-col gap-5">
                            {links.map((l) => (
                                <li key={key(l)}>
                                    <a
                                        href={`#${l.id}`}
                                        data-testid={`mobile-${tid(l)}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            jump(l);
                                        }}
                                        className="font-display text-2xl font-light text-bone"
                                    >
                                        {l.label[lang]}
                                    </a>
                                </li>
                            ))}
                            <li>
                                <button
                                    data-testid="nav-mobile-cta"
                                    onClick={() => jump({ id: "kontak", path: pathname })}
                                    className="mt-2 w-full rounded-full bg-iris px-6 py-3.5 text-sm font-medium text-white"
                                >
                                    {S.cta[lang]}
                                </button>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Nav;

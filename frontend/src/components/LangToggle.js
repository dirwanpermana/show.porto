import { useLang } from "@/i18n";

const LangToggle = ({ className = "" }) => {
    const { lang, setLang } = useLang();
    return (
        <div
            className={`inline-flex items-center rounded-full border hairline p-0.5 ${className}`}
            data-testid="lang-toggle"
        >
            {["id", "en"].map((l) => (
                <button
                    key={l}
                    data-testid={`lang-toggle-${l}`}
                    onClick={() => setLang(l)}
                    className={`rounded-full px-3 py-1.5 text-[11px] font-medium uppercase tracking-wider transition-all duration-300 ${
                        lang === l
                            ? "bg-iris text-white"
                            : "text-ash hover:text-bone"
                    }`}
                >
                    {l}
                </button>
            ))}
        </div>
    );
};

export default LangToggle;

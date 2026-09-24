import { useLang } from "@/i18n";
import { MARQUEE_ITEMS } from "@/data/templates";

const Diamond = () => (
    <svg viewBox="0 0 10 10" className="h-3 w-3 shrink-0" aria-hidden="true">
        <rect
            x="2"
            y="2"
            width="6"
            height="6"
            fill="#8052ff"
            transform="rotate(45 5 5)"
        />
    </svg>
);

const Strip = ({ items }) => (
    <div className="flex shrink-0 items-center">
        {items.map((item) => (
            <span key={item} className="flex items-center">
                <span className="whitespace-nowrap px-8 font-display text-2xl font-light uppercase tracking-wide text-mist md:text-4xl">
                    {item}
                </span>
                <Diamond />
            </span>
        ))}
    </div>
);

const Marquee = () => {
    const { lang } = useLang();
    const items = MARQUEE_ITEMS.map((m) => m[lang]);
    return (
        <section
            aria-label="Bidang yang kami layani"
            className="marquee-paused overflow-hidden border-y hairline bg-ink/60 py-7"
            data-testid="marquee-fields"
        >
            <div className="animate-marquee flex w-max">
                <Strip items={items} />
                <Strip items={items} />
            </div>
        </section>
    );
};

export default Marquee;

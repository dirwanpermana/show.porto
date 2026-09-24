import { useLang } from "@/i18n";
import { PREVIEWS } from "@/data/templatePreviews";

/* Mini full-page design preview per template — setiap template punya
   tema visual sendiri (warna, font, layout) mengikuti referensi gaya. */

const Eyebrow = ({ n, label, th }) => (
    <p
        className="mb-6 flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.28em]"
        style={{ color: th.muted }}
    >
        <span style={{ color: th.accent }}>{n}</span>
        <span style={{ opacity: 0.5 }}>/</span>
        <span>{label}</span>
    </p>
);

const WorksGrid = ({ data, th }) => {
    const { lang } = useLang();
    const L = (o) => o[lang];
    if (th.works === "stack") {
        return (
            <div className="space-y-10">
                {data.items.map((w, i) => (
                    <div key={i}>
                        <img
                            src={w.img}
                            alt={w.title[lang]}
                            loading="lazy"
                            className="w-full object-cover"
                            style={{ aspectRatio: "16/7" }}
                        />
                        <div
                            className="mt-3 flex items-baseline justify-between border-b pb-3"
                            style={{ borderColor: th.line }}
                        >
                            <p className="text-lg" style={{ color: th.text }}>
                                {L(w.title)}
                            </p>
                            <p className="text-xs" style={{ color: th.muted }}>
                                {L(w.meta)} · {w.year}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
    if (th.works === "bento") {
        return (
            <div className="grid grid-cols-2 gap-4">
                {data.items.map((w, i) => (
                    <div
                        key={i}
                        className={`overflow-hidden ${i === 0 ? "col-span-2" : ""}`}
                        style={{ borderRadius: th.radius, background: th.panel }}
                    >
                        <img
                            src={w.img}
                            alt={w.title[lang]}
                            loading="lazy"
                            className="w-full object-cover"
                            style={{ aspectRatio: i === 0 ? "16/7" : "16/9" }}
                        />
                        <div className="flex items-baseline justify-between px-4 py-3">
                            <p className="text-sm" style={{ color: th.text }}>
                                {L(w.title)}
                            </p>
                            <p className="text-[11px]" style={{ color: th.accent }}>
                                {L(w.meta)}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
    return (
        <div className="grid grid-cols-2 gap-5">
            {data.items.map((w, i) => (
                <div key={i} className={i === 0 ? "col-span-2" : ""}>
                    <div className="overflow-hidden" style={{ borderRadius: th.radius }}>
                        <img
                            src={w.img}
                            alt={w.title[lang]}
                            loading="lazy"
                            className="w-full object-cover"
                            style={{ aspectRatio: i === 0 ? "16/7" : "4/3" }}
                        />
                    </div>
                    <div className="mt-3 flex items-baseline justify-between">
                        <p className="text-sm" style={{ color: th.text }}>
                            {L(w.title)}
                        </p>
                        <p className="text-[11px]" style={{ color: th.muted }}>
                            {L(w.meta)} · {w.year}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

const TemplatePreview = ({ tpl }) => {
    const { lang } = useLang();
    const p = PREVIEWS[tpl.id];
    const th = tpl.theme;
    const disp = {
        fontFamily: th.display,
        fontWeight: th.displayWeight,
        letterSpacing: th.tracking || "-0.01em",
        lineHeight: 1.05,
    };

    return (
        <div style={{ background: th.bg, color: th.text, fontFamily: th.body }}>
            {/* mini nav */}
            <div
                className="flex items-center justify-between px-6 py-4 md:px-10"
                style={{ borderBottom: `1px solid ${th.line}` }}
            >
                <span style={{ ...disp, fontSize: 15 }}>{p.profile.name}</span>
                <span
                    className="hidden gap-5 text-[11px] uppercase tracking-[0.18em] md:flex"
                    style={{ color: th.muted }}
                >
                    <span>{p.works.label[lang]}</span>
                    <span>{p.services.label[lang]}</span>
                    <span>{p.contact.label[lang]}</span>
                </span>
                <span
                    className="rounded-full px-4 py-1.5 text-[11px] font-medium"
                    style={{ background: th.accent, color: th.bg }}
                >
                    {p.contact.heading[lang].split(" ")[0]}
                </span>
            </div>

            {/* hero */}
            {tpl.id === "blueprint" ? (
                <div className="relative flex min-h-[340px] items-end overflow-hidden">
                    <img
                        src={p.works.items[0].img}
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover"
                        style={{ opacity: 0.55 }}
                    />
                    <div
                        className="absolute inset-0"
                        style={{
                            background: `linear-gradient(to top, ${th.bg} 12%, transparent 85%)`,
                        }}
                    />
                    <div className="relative w-full px-6 pb-10 md:px-10">
                        <Eyebrow n="01" label={p.profile.role[lang]} th={th} />
                        <h1 style={{ ...disp, fontSize: "clamp(2rem,5vw,3.6rem)" }}>
                            {lang === "id"
                                ? "Keheningan Struktural. Kanopi Tropis."
                                : "Structural Silence. Tropical Canopy."}
                        </h1>
                    </div>
                </div>
            ) : (
                <div className="px-6 pt-14 pb-12 md:px-10">
                    <Eyebrow n="01" label={p.profile.role[lang]} th={th} />
                    <h1
                        style={{
                            ...disp,
                            fontSize: "clamp(2rem,5vw,3.6rem)",
                            textTransform: th.case === "upper" ? "uppercase" : "none",
                            maxWidth: 640,
                        }}
                    >
                        {tpl.id === "deploy" && (
                            <span style={{ color: th.accent }}>$&nbsp;</span>
                        )}
                        {tpl.id === "lumina" &&
                            (lang === "id"
                                ? "Rupa yang Bicara Sebelum Kata."
                                : "Visuals That Speak Before Words.")}
                        {tpl.id === "amplify" &&
                            (lang === "id"
                                ? "Pertumbuhan yang Terukur."
                                : "Growth You Can Measure.")}
                        {tpl.id === "aperture" &&
                            (lang === "id"
                                ? "Cahaya, Kadr, dan Diam."
                                : "Light, Frame, and Silence.")}
                        {tpl.id === "deploy" &&
                            (lang === "id" ? "Kode Bersih, Produk Cepat." : "Clean Code, Fast Products.")}
                        {tpl.id === "etalase" &&
                            (lang === "id" ? "Rasa Rumah, Siap Antar." : "Home Flavors, Delivered.")}
                    </h1>
                    <p
                        className="mt-5 max-w-md text-sm leading-relaxed"
                        style={{ color: th.muted }}
                    >
                        {p.profile.quote[lang]}
                    </p>
                    <span
                        className="mt-7 inline-block rounded-full px-6 py-3 text-xs font-medium"
                        style={{ background: th.accent, color: th.bg }}
                    >
                        {p.contact.heading[lang]}
                    </span>
                </div>
            )}

            {/* profile */}
            <div
                className="px-6 py-14 md:px-10"
                style={{ borderTop: `1px solid ${th.line}` }}
            >
                <Eyebrow n="02" label={p.profile.name} th={th} />
                <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
                    <div className="md:col-span-2">
                        <img
                            src={p.profile.img}
                            alt={p.profile.name}
                            loading="lazy"
                            className="w-full object-cover"
                            style={{
                                borderRadius: th.radius,
                                aspectRatio: "4/5",
                                filter: tpl.id === "deploy" ? "grayscale(0.3)" : "none",
                            }}
                        />
                    </div>
                    <div className="md:col-span-3">
                        <p style={{ ...disp, fontSize: "clamp(1.2rem,2.6vw,1.7rem)" }}>
                            "{p.profile.quote[lang]}"
                        </p>
                        <div className="mt-8 grid grid-cols-3 gap-4">
                            {p.profile.stats.map((s, i) => (
                                <div key={i}>
                                    <p style={{ ...disp, fontSize: 26, color: th.accent }}>
                                        {s.n}
                                    </p>
                                    <p
                                        className="mt-1 text-[11px] uppercase tracking-wider"
                                        style={{ color: th.muted }}
                                    >
                                        {s.l[lang]}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* principles */}
            <div
                className="px-6 py-14 md:px-10"
                style={{ borderTop: `1px solid ${th.line}` }}
            >
                <Eyebrow n="03" label={p.principles.label[lang]} th={th} />
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {p.principles.items.map((it, i) => (
                        <div key={i}>
                            <p
                                className="mb-3 text-[11px] uppercase tracking-[0.2em]"
                                style={{ color: th.accent }}
                            >
                                {String(i + 1).padStart(2, "0")} / {it.t[lang]}
                            </p>
                            <p className="text-sm leading-relaxed" style={{ color: th.muted }}>
                                {it.d[lang]}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* works */}
            <div
                className="px-6 py-14 md:px-10"
                style={{ borderTop: `1px solid ${th.line}` }}
            >
                <Eyebrow n="04" label={p.works.label[lang]} th={th} />
                <p className="mb-8 max-w-md text-sm" style={{ color: th.muted }}>
                    {p.works.sub[lang]}
                </p>
                <WorksGrid data={p.works} th={th} />
            </div>

            {/* services */}
            <div
                className="px-6 py-14 md:px-10"
                style={{ borderTop: `1px solid ${th.line}` }}
            >
                <Eyebrow n="05" label={p.services.label[lang]} th={th} />
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
                    {p.services.items.map((s, i) => (
                        <div key={i}>
                            <p
                                className="mb-2 text-[11px] uppercase tracking-[0.2em]"
                                style={{ color: th.accent }}
                            >
                                {String(i + 1).padStart(2, "0")}
                            </p>
                            <p className="text-sm font-medium" style={{ color: th.text }}>
                                {s.t[lang]}
                            </p>
                            <p className="mt-1.5 text-xs leading-relaxed" style={{ color: th.muted }}>
                                {s.d[lang]}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* awards */}
            <div
                className="px-6 py-14 md:px-10"
                style={{ borderTop: `1px solid ${th.line}` }}
            >
                <Eyebrow n="06" label={p.awards.label[lang]} th={th} />
                <div>
                    {p.awards.items.map((a, i) => (
                        <div
                            key={i}
                            className="flex flex-wrap items-baseline justify-between gap-2 border-b py-4"
                            style={{ borderColor: th.line }}
                        >
                            <span className="text-xs" style={{ color: th.muted }}>
                                {a.year}
                            </span>
                            <span className="flex-1 px-4 text-sm" style={{ color: th.text }}>
                                {a.name[lang]}
                            </span>
                            <span className="text-xs" style={{ color: th.muted }}>
                                {a.by}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* testimonials */}
            <div
                className="px-6 py-14 md:px-10"
                style={{ borderTop: `1px solid ${th.line}` }}
            >
                <Eyebrow n="07" label={p.testimonials.label[lang]} th={th} />
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {p.testimonials.items.map((t, i) => (
                        <div key={i}>
                            <p
                                style={{
                                    ...disp,
                                    fontSize: 17,
                                    fontStyle: th.display.includes("Fraunces") ? "italic" : "normal",
                                }}
                            >
                                "{t.q[lang]}"
                            </p>
                            <p className="mt-4 text-xs font-medium" style={{ color: th.text }}>
                                {t.who}
                                <span className="ml-2 font-normal" style={{ color: th.muted }}>
                                    {t.role[lang]}
                                </span>
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* contact + giant footer */}
            <div
                className="px-6 py-14 md:px-10"
                style={{ borderTop: `1px solid ${th.line}` }}
            >
                <Eyebrow n="08" label={p.contact.label[lang]} th={th} />
                <p style={{ ...disp, fontSize: "clamp(1.6rem,4vw,2.6rem)" }}>
                    {p.contact.heading[lang]}
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-2 text-sm">
                    <a href={`mailto:${p.contact.email}`} style={{ color: th.accent }}>
                        {p.contact.email}
                    </a>
                    <span className="text-xs" style={{ color: th.muted }}>
                        {p.contact.address[lang]}
                    </span>
                </div>
                <div className="mt-12 overflow-hidden" style={{ maxHeight: 110 }}>
                    <p
                        className="whitespace-nowrap text-center uppercase"
                        style={{
                            ...disp,
                            fontSize: "clamp(3rem,9vw,6rem)",
                            color: th.text,
                            opacity: 0.22,
                            transform: "translateY(24%)",
                        }}
                    >
                        {p.profile.name}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TemplatePreview;

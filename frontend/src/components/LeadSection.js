import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { ArrowUpRight, Loader2, Mail, MessageCircle } from "lucide-react";
import { Reveal, SectionTag } from "@/components/Reveal";
import { useLang, SITE } from "@/i18n";
import { BRAND, INTENTS } from "@/data/templates";

export const buildWaUrl = (form, lang) => {
    const S = SITE.lead;
    const intent = INTENTS.find((i) => i.value === form.intent);
    const lines = [
        S.waPrefix[lang],
        "",
        `${S.waName[lang]}: ${form.name}`,
        `${S.waContact[lang]}: ${form.contact}`,
        `${S.waIntent[lang]}: ${intent ? intent.label[lang] : form.intent}`,
    ];
    if (form.message.trim()) lines.push(`${S.waMsg[lang]}: ${form.message.trim()}`);
    lines.push("", S.waClosing[lang]);
    return `${BRAND.wa}?text=${encodeURIComponent(lines.join("\n"))}`;
};

const LeadSection = ({ defaultIntent = "porto-web" }) => {
    const { lang } = useLang();
    const S = SITE.lead;
    const empty = { name: "", contact: "", intent: defaultIntent, message: "" };
    const [form, setForm] = useState(empty);
    const [sending, setSending] = useState(false);

    const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

    const submit = (e) => {
        e.preventDefault();
        setSending(true);
        window.open(buildWaUrl(form, lang), "_blank", "noopener,noreferrer");
        toast.success(S.toastOk[lang], { description: S.toastOkDesc[lang] });
        setForm(empty);
        setTimeout(() => setSending(false), 600);
    };

    const inputCls =
        "w-full rounded-xl border hairline bg-white/[0.04] px-4 py-3.5 text-sm font-light text-bone placeholder:text-ash/60 outline-none transition-all duration-300 focus:border-iris focus:ring-2 focus:ring-iris/30";

    return (
        <section
            id="kontak"
            className="relative scroll-mt-24 overflow-hidden border-t hairline py-24 md:py-32"
        >
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-iris/15 blur-[140px]" />
            <div className="relative mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2">
                <div>
                    <Reveal>
                        <SectionTag>{S.tag[lang]}</SectionTag>
                    </Reveal>
                    <Reveal delay={0.08}>
                        <h2 className="mt-4 font-display text-5xl font-light leading-[0.95] tracking-tight text-bone md:text-6xl lg:text-7xl">
                            {S.t1[lang]}{" "}
                            <span className="text-gradient-iris">{S.grad[lang]}</span>
                        </h2>
                    </Reveal>
                    <Reveal delay={0.16}>
                        <p className="mt-5 max-w-md text-base font-light leading-relaxed text-ash md:text-lg">
                            {S.sub[lang]}
                        </p>
                    </Reveal>
                    <Reveal delay={0.22}>
                        <div className="mt-8 flex flex-wrap items-center gap-4">
                            <a
                                href={BRAND.wa}
                                target="_blank"
                                rel="noopener noreferrer"
                                data-testid="lead-whatsapp-link"
                                className="inline-flex items-center gap-2 rounded-full border border-verdant/50 bg-verdant/10 px-6 py-3 text-sm font-medium text-[#3fbfa4] transition-all duration-300 hover:bg-verdant hover:text-white"
                            >
                                <MessageCircle className="h-4 w-4" />
                                {S.wa[lang]} · {BRAND.waNumber}
                            </a>
                        </div>
                        <p className="mt-4 text-sm font-light text-ash">
                            {S.emailCta[lang]}{" "}
                            <a
                                href={`mailto:${BRAND.email}`}
                                data-testid="lead-email-link"
                                className="inline-flex items-center gap-1.5 text-bone underline decoration-iris/60 underline-offset-4 transition-colors hover:text-iris"
                            >
                                <Mail className="h-3.5 w-3.5" />
                                {BRAND.email}
                            </a>
                        </p>
                    </Reveal>
                </div>

                <Reveal delay={0.1}>
                    <form onSubmit={submit} data-testid="lead-form" className="glass rounded-2xl p-7 md:p-9">
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="lead-name" className="mb-2 block text-xs font-medium uppercase tracking-[0.16em] text-mist">
                                    {S.name[lang]}
                                </label>
                                <input
                                    id="lead-name"
                                    data-testid="lead-input-name"
                                    required
                                    value={form.name}
                                    onChange={set("name")}
                                    placeholder={S.namePh[lang]}
                                    className={inputCls}
                                />
                            </div>
                            <div>
                                <label htmlFor="lead-contact" className="mb-2 block text-xs font-medium uppercase tracking-[0.16em] text-mist">
                                    {S.contact[lang]}
                                </label>
                                <input
                                    id="lead-contact"
                                    data-testid="lead-input-contact"
                                    required
                                    value={form.contact}
                                    onChange={set("contact")}
                                    placeholder={S.contactPh[lang]}
                                    className={inputCls}
                                />
                            </div>
                            <div>
                                <label htmlFor="lead-intent" className="mb-2 block text-xs font-medium uppercase tracking-[0.16em] text-mist">
                                    {S.intent[lang]}
                                </label>
                                <select
                                    id="lead-intent"
                                    data-testid="lead-select-intent"
                                    value={form.intent}
                                    onChange={set("intent")}
                                    className={`${inputCls} appearance-none [&>option]:bg-ink`}
                                >
                                    {INTENTS.map((o) => (
                                        <option key={o.value} value={o.value}>
                                            {o.label[lang]}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label htmlFor="lead-message" className="mb-2 block text-xs font-medium uppercase tracking-[0.16em] text-mist">
                                    {S.message[lang]}
                                </label>
                                <textarea
                                    id="lead-message"
                                    data-testid="lead-input-message"
                                    rows={3}
                                    value={form.message}
                                    onChange={set("message")}
                                    placeholder={S.messagePh[lang]}
                                    className={`${inputCls} resize-none`}
                                />
                            </div>
                            <motion.button
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                disabled={sending}
                                data-testid="lead-submit-button"
                                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-iris px-6 py-4 text-sm font-medium text-white transition-all duration-300 hover:bg-[#9069ff] hover:shadow-[0_0_36px_rgba(128,82,255,0.5)] disabled:opacity-60"
                            >
                                {sending ? (
                                    <Loader2 className="h-4 w-4 animate-spin" />
                                ) : (
                                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                )}
                                {sending ? S.sending[lang] : S.submit[lang]}
                            </motion.button>
                            <p data-testid="lead-form-note" className="text-center text-[11px] font-light text-ash">
                                {S.formNote[lang]}
                            </p>
                        </div>
                    </form>
                </Reveal>
            </div>
        </section>
    );
};

export default LeadSection;

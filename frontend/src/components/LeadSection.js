import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "sonner";
import { ArrowUpRight, Loader2, MessageCircle } from "lucide-react";
import { Reveal, SectionTag } from "@/components/Reveal";
import { BRAND, INTENTS } from "@/data/templates";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const LeadSection = () => {
    const [form, setForm] = useState({
        name: "",
        contact: "",
        intent: "pencari-kerja",
        message: "",
    });
    const [sending, setSending] = useState(false);

    const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

    const submit = async (e) => {
        e.preventDefault();
        setSending(true);
        try {
            await axios.post(`${API}/leads`, form);
            toast.success("Pesan terkirim!", {
                description:
                    "Terima kasih! Tim Karyaloka akan menghubungimu maksimal 1x24 jam.",
            });
            setForm({ name: "", contact: "", intent: "pencari-kerja", message: "" });
        } catch (err) {
            toast.error("Gagal mengirim", {
                description: "Coba lagi atau hubungi kami via WhatsApp.",
            });
        } finally {
            setSending(false);
        }
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
                        <SectionTag>Mulai sekarang</SectionTag>
                    </Reveal>
                    <Reveal delay={0.08}>
                        <h2 className="mt-4 font-display text-5xl font-light leading-[0.95] tracking-tight text-bone md:text-6xl lg:text-7xl">
                            Siap tampil{" "}
                            <span className="text-gradient-iris">beda?</span>
                        </h2>
                    </Reveal>
                    <Reveal delay={0.16}>
                        <p className="mt-5 max-w-md text-base font-light leading-relaxed text-ash md:text-lg">
            Konsultasi gratis, tanpa komitmen. Ceritakan karya atau
            usahamu — kami balas dengan rencana website yang konkret.
                        </p>
                    </Reveal>
                    <Reveal delay={0.22}>
                        <a
                            href={BRAND.wa}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="lead-whatsapp-link"
                            className="mt-8 inline-flex items-center gap-2 rounded-full border border-verdant/50 bg-verdant/10 px-6 py-3 text-sm font-medium text-[#3fbfa4] transition-all duration-300 hover:bg-verdant hover:text-white"
                        >
                            <MessageCircle className="h-4 w-4" />
                            Chat langsung via WhatsApp
                        </a>
                    </Reveal>
                </div>

                <Reveal delay={0.1}>
                    <form
                        onSubmit={submit}
                        data-testid="lead-form"
                        className="glass rounded-2xl p-7 md:p-9"
                    >
                        <div className="space-y-4">
                            <div>
                                <label
                                    htmlFor="lead-name"
                                    className="mb-2 block text-xs font-medium uppercase tracking-[0.16em] text-mist"
                                >
                                    Nama
                                </label>
                                <input
                                    id="lead-name"
                                    data-testid="lead-input-name"
                                    required
                                    value={form.name}
                                    onChange={set("name")}
                                    placeholder="Nama kamu"
                                    className={inputCls}
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="lead-contact"
                                    className="mb-2 block text-xs font-medium uppercase tracking-[0.16em] text-mist"
                                >
                                    Email / WhatsApp
                                </label>
                                <input
                                    id="lead-contact"
                                    data-testid="lead-input-contact"
                                    required
                                    value={form.contact}
                                    onChange={set("contact")}
                                    placeholder="nama@email.com atau 08xx"
                                    className={inputCls}
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="lead-intent"
                                    className="mb-2 block text-xs font-medium uppercase tracking-[0.16em] text-mist"
                                >
                                    Kebutuhan
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
                                            {o.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label
                                    htmlFor="lead-message"
                                    className="mb-2 block text-xs font-medium uppercase tracking-[0.16em] text-mist"
                                >
                                    Ceritakan singkat
                                </label>
                                <textarea
                                    id="lead-message"
                                    data-testid="lead-input-message"
                                    rows={3}
                                    value={form.message}
                                    onChange={set("message")}
                                    placeholder="Contoh: Saya desainer grafis, punya 8 proyek yang ingin ditampilkan…"
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
                                {sending ? "Mengirim…" : "Kirim & Dapatkan Konsultasi Gratis"}
                            </motion.button>
                        </div>
                    </form>
                </Reveal>
            </div>
        </section>
    );
};

export default LeadSection;

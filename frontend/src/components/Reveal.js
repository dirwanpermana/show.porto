import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

export const Reveal = ({
    children,
    delay = 0,
    y = 28,
    className = "",
    ...rest
}) => (
    <motion.div
        initial={{ opacity: 0, y }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, delay, ease: EASE }}
        className={className}
        {...rest}
    >
        {children}
    </motion.div>
);

export const SectionTag = ({ children }) => (
    <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-ash">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-iris" />
        {children}
    </span>
);

export const SectionHeading = ({ tag, title, sub, id }) => (
    <div id={id} className="mb-12 scroll-mt-28 md:mb-16">
        <Reveal>
            <SectionTag>{tag}</SectionTag>
        </Reveal>
        <Reveal delay={0.08}>
            <h2 className="mt-4 font-display text-4xl font-light leading-[1.05] tracking-tight text-bone md:text-5xl">
                {title}
            </h2>
        </Reveal>
        {sub && (
            <Reveal delay={0.16}>
                <p className="mt-4 max-w-xl text-base font-light text-ash md:text-lg">
                    {sub}
                </p>
            </Reveal>
        )}
    </div>
);

export { EASE };

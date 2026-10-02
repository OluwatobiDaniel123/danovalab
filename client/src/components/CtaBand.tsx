import type {ReactNode} from "react";
import {motion} from "framer-motion";
import {ButtonLink} from "./Button";
import {useReducedMotion} from "../hooks/useReducedMotion";

interface CtaBandProps {
    title?: ReactNode;
    description?: ReactNode;
    primaryLabel?: string;
    primaryTo?: string;
    secondaryLabel?: string;
    secondaryTo?: string;
}

export function CtaBand({
    title = "Let's Build Something That Matters.",
    description = "Tell us what you're trying to build, improve, or solve. We'll help turn the idea into a practical digital solution.",
    primaryLabel = "Start a Project",
    primaryTo = "/contact",
    secondaryLabel = "Explore Our Work",
    secondaryTo = "/work",
}: CtaBandProps) {
    const reduce = useReducedMotion();
    return (
        <section className="container-page pb-4">
            <motion.div
                initial={reduce ? false : {opacity: 0, y: 20}}
                whileInView={reduce ? undefined : {opacity: 1, y: 0}}
                viewport={{once: true, margin: "-80px"}}
                transition={{duration: 0.6}}
                className="relative overflow-hidden rounded-[2rem] border border-ink-200/70 bg-white px-6 py-8 shadow-[0_30px_100px_rgba(15,23,42,0.08)] sm:px-12 lg:py-24"
            >
                {/* Background grid */}
                <div className="absolute inset-0 bg-grid opacity-[0.35]" aria-hidden />

                {/* Atmospheric glow */}
                <div
                    className="absolute -top-40 left-1/2 h-80 w-[42rem] -translate-x-1/2 rounded-full bg-brand-200/40 blur-3xl"
                    aria-hidden
                />

                <div
                    className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-blue-100/60 blur-3xl"
                    aria-hidden
                />

                <div
                    className="absolute -bottom-40 -right-20 h-80 w-80 rounded-full bg-cyan-100/50 blur-3xl"
                    aria-hidden
                />

                {/* Decorative orbital rings */}
                {!reduce && (
                    <>
                        <motion.div
                            animate={{rotate: 360}}
                            transition={{
                                duration: 28,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-200/40"
                            aria-hidden
                        />

                        <motion.div
                            animate={{rotate: -360}}
                            transition={{
                                duration: 38,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-100/60"
                            aria-hidden
                        />
                    </>
                )}

                {/* Content */}
                <div className="relative mx-auto max-w-3xl text-center">
                    {/* Eyebrow */}
                    <motion.div
                        initial={reduce ? false : {opacity: 0, y: 10}}
                        whileInView={reduce ? undefined : {opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.5}}
                        className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-2 py-1 text-xs font-semibold tracking-wide text-brand-700"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-60" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
                        </span>
                        LET'S BUILD SOMETHING
                    </motion.div>

                    <h2 className="text-display-md font-bold tracking-tight text-ink-950">{title}</h2>

                    <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-600 text-pretty sm:text-lg">
                        {description}
                    </p>

                    {/* CTA buttons */}
                    <div className="mt-9 flex items-center justify-center gap-3 ">
                        <ButtonLink to={primaryTo} size="sm" iconRight="arrow">
                            {primaryLabel}
                        </ButtonLink>

                        <ButtonLink to={secondaryTo} size="sm" variant="secondary">
                            {secondaryLabel}
                        </ButtonLink>
                    </div>

                    {/* Trust / capability line */}
                    <div className="mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-bold text-muted-500">
                        <span>Strategy</span>
                        <span className="h-1 w-1 rounded-full bg-brand-400" />
                        <span>Design</span>
                        <span className="h-1 w-1 rounded-full bg-brand-400" />
                        <span>Development</span>
                        <span className="h-1 w-1 rounded-full bg-brand-400" />
                        <span>Deployment</span>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

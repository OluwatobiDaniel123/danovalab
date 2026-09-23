import type {ReactNode} from "react";
import {motion} from "framer-motion";
import {useReducedMotion} from "../hooks/useReducedMotion";

interface SectionHeaderProps {
    eyebrow?: string;
    title: ReactNode;
    description?: ReactNode;
    align?: "left" | "center";
    dark?: boolean;
    className?: string;
}

export function SectionHeader({
    eyebrow,
    title,
    description,
    align = "left",
    dark = false,
    className = "",
}: SectionHeaderProps) {
    const reduce = useReducedMotion();
    const alignCls = align === "center" ? "mx-auto text-center items-center" : "text-left items-start";
    const maxCls = align === "center" ? "max-w-2xl" : "max-w-3xl";

    return (
        <motion.div
            initial={reduce ? false : {opacity: 0, y: 16}}
            whileInView={reduce ? undefined : {opacity: 1, y: 0}}
            viewport={{once: true, margin: "-80px"}}
            transition={{duration: 0.6, ease: [0.22, 1, 0.36, 1]}}
            className={`flex flex-col gap-4 ${alignCls} ${maxCls} ${className}`}
        >
            {eyebrow && (
                <span className={`eyebrow ${dark ? "text-brand-300" : "text-brand-600"}`}>
                    <span className="h-px w-6 bg-current opacity-60" />
                    {eyebrow}
                </span>
            )}
            <h2
                className={`text-display-md capitalize font-bold tracking-tight text-balance ${
                    dark ? "text-white" : "text-ink-900"
                }`}
            >
                {title}
            </h2>
            {description && (
                <p className={`text-lg leading-relaxed text-pretty ${dark ? "text-brand-100" : "text-muted-600"}`}>
                    {description}
                </p>
            )}
        </motion.div>
    );
}

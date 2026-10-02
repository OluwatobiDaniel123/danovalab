import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import {Icon} from "../components/Icon";
import {Reveal} from "../components/Reveal";
import {SectionHeader} from "../components/SectionHeader";
import {useReducedMotion} from "../hooks/useReducedMotion";
import {projects, processSteps, whyDanovaLab, industries, testimonials, insights} from "../data/content";
import type {Project} from "../data/types";

function ProjectImage({project, className = ""}: {project: Project; className?: string}) {
    // return (
    //     <div className={`relative overflow-hidden ${className}`}>
    //         <div
    //             className="absolute inset-0 opacity-90"
    //             style={{background: `radial-gradient(120% 80% at 50% 0%, ${project.accent}22, transparent 60%)`}}
    //             aria-hidden
    //         />
    //         <div className="absolute inset-0 bg-grid opacity-20" aria-hidden />
    //         <div className="relative flex h-full min-h-full items-center justify-center">
    //             <div className="w-full max-w-sm rounded-xl border border-ink-200 bg-white p-4 shadow-card">
    //                 <div className="flex items-center gap-1.5 border-b border-ink-200 pb-2.5">
    //                     <span className="h-2 w-2 rounded-full bg-red-400/60" />
    //                     <span className="h-2 w-2 rounded-full bg-yellow-400/60" />
    //                     <span className="h-2 w-2 rounded-full bg-green-400/60" />
    //                     <span className="ml-2 font-mono text-[10px] text-muted-500">{project.slug}.danovalab</span>
    //                 </div>
    //                 <div className="mt-3 space-y-2">
    //                     <div className="h-2 w-2/3 rounded-full bg-ink-200" />
    //                     <div className="h-2 w-1/2 rounded-full bg-ink-200" />
    //                     <div className="mt-3 grid grid-cols-3 gap-2">
    //                         <div className="h-10 rounded-lg" style={{background: `${project.accent}22`}} />
    //                         <div className="h-10 rounded-lg bg-ink-100" />
    //                         <div className="h-10 rounded-lg bg-ink-100" />
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // );
    return (
        <div className={`relative overflow-hidden ${className}`}>
            {project.image ? (
                <div className="relative h-44 min-h-44 w-full">
                    <img src={project.image} alt={project.title} className="h-full min-h-full w-full object-cover" />

                    <div
                        className="absolute inset-0"
                        style={{
                            background: `linear-gradient(to bottom, ${project.accent}18, transparent 55%)`,
                        }}
                        aria-hidden
                    />
                </div>
            ) : (
                <>
                    <div
                        className="absolute inset-0 opacity-90"
                        style={{
                            background: `radial-gradient(120% 80% at 50% 0%, ${project.accent}22, transparent 60%)`,
                        }}
                        aria-hidden
                    />

                    <div className="absolute inset-0 bg-grid opacity-20" aria-hidden />

                    <div className="relative flex h-full min-h-full items-center justify-center">
                        <div className="w-full max-w-sm rounded-xl border border-ink-200 bg-white p-4 shadow-card">
                            <div className="flex items-center gap-1.5 border-b border-ink-200 pb-2.5">
                                <span className="h-2 w-2 rounded-full bg-red-400/60" />
                                <span className="h-2 w-2 rounded-full bg-yellow-400/60" />
                                <span className="h-2 w-2 rounded-full bg-green-400/60" />

                                <span className="ml-2 font-mono text-[10px] text-muted-500">
                                    {project.slug}.danovalab
                                </span>
                            </div>

                            <div className="mt-3 space-y-2">
                                <div className="h-2 w-2/3 rounded-full bg-ink-200" />
                                <div className="h-2 w-1/2 rounded-full bg-ink-200" />

                                <div className="mt-3 grid grid-cols-3 gap-2">
                                    <div
                                        className="h-10 rounded-lg"
                                        style={{
                                            background: `${project.accent}22`,
                                        }}
                                    />
                                    <div className="h-10 rounded-lg bg-ink-100" />
                                    <div className="h-10 rounded-lg bg-ink-100" />
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
export function WorkPreview() {
    return (
        <section className="container-page py-20 lg:py-28">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                <SectionHeader
                    eyebrow="Selected Work"
                    title="Products built to solve real problems."
                    description="A selection of projects where technology met a clear business need."
                />
                <Reveal delay={0.1}>
                    <Link to="/work" className="link-underline text-sm font-semibold text-brand-600">
                        View all work →
                    </Link>
                </Reveal>
            </div>
            <div className="mt-12 grid gap-5 lg:grid-cols-3">
                {projects.slice(0, 4).map((p, i) => (
                    <Reveal key={p.slug} delay={i * 0.05}>
                        <Link
                            to={`/work/${p.slug}`}
                            className="group block overflow-hidden rounded-3xl border border-ink-200 bg-white shadow-card transition-all duration-500 hover:-translate-y-1 hover:border-brand-300 hover:shadow-glow"
                        >
                            <ProjectImage project={p} className="h-full" />
                            <div className="p-3">
                                <div className="flex items-center gap-3 text-xs">
                                    <span className="rounded-full bg-brand-50 px-2.5 py-0.5 font-semibold text-brand-600">
                                        {p.industry}
                                    </span>
                                    <span className="text-muted-500">{p.client}</span>
                                </div>
                                <h3 className="mt-2 font-display text-lg font-bold text-ink-900">{p.title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-muted-600">{p.summary}</p>
                                <div className="mt-3 flex flex-wrap gap-2">
                                    {p.stack.slice(0, 3).map((t) => (
                                        <span
                                            key={t}
                                            className="rounded-md border border-ink-200 px-2 py-0.5 font-bold text-[11px] text-muted-600"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600">
                                    View Case Study
                                    <Icon
                                        name="arrow"
                                        className="h-4 w-4 transition-transform group-hover:translate-x-1"
                                    />
                                </span>
                            </div>
                        </Link>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}

export function ProcessSection() {
    const reduce = useReducedMotion();
    return (
        <section className="relative overflow-hidden border-y border-ink-200 bg-ink-100 py-20 lg:py-28">
            <div className="absolute inset-0 bg-grid opacity-20" aria-hidden />
            <div className="container-page relative">
                <SectionHeader
                    eyebrow="Process"
                    title="From Idea to Launch"
                    description="A clear, transparent process that keeps clients informed at every stage."
                    align="center"
                />
                <div className="mt-16 grid gap-4 md:grid-cols-5">
                    {processSteps.map((step, i) => (
                        <motion.div
                            key={step.number}
                            initial={reduce ? false : {opacity: 0, y: 24}}
                            whileInView={reduce ? undefined : {opacity: 1, y: 0}}
                            viewport={{once: true, margin: "-60px"}}
                            transition={{duration: 0.5, delay: i * 0.08}}
                            className="group relative rounded-2xl border border-ink-200 bg-white p-6 shadow-card transition-colors duration-300 hover:border-brand-300"
                        >
                            <span className="font-display text-3xl font-bold text-ink-200 transition-colors group-hover:text-brand-400">
                                {step.number}
                            </span>
                            <span className="mt-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                                <Icon name={step.icon} className="h-5 w-5" />
                            </span>
                            <h3 className="mt-4 font-display text-base font-semibold text-ink-900">{step.title}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-muted-600">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function WhySection() {
    return (
        <section className="container-page py-20 lg:py-28">
            <SectionHeader
                eyebrow="Why DanovaLab"
                title="Why Businesses Choose DanovaLab"
                description="We bring engineering discipline, design thinking, and business understanding to every engagement."
            />
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {whyDanovaLab.map((w, i) => (
                    <Reveal key={w.title} delay={i * 0.05}>
                        <div className="group h-full rounded-2xl border border-ink-200 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-glow">
                            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-transform duration-300 group-hover:scale-110">
                                <Icon name={w.icon} className="h-5 w-5" />
                            </span>
                            <h3 className="mt-5 font-display text-base font-semibold text-ink-900">{w.title}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-muted-600">{w.description}</p>
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}

export function IndustriesSection() {
    return (
        <section className="relative overflow-hidden border-y border-ink-200 bg-ink-100 py-20 lg:py-28">
            <div className="container-page relative">
                <SectionHeader
                    eyebrow="Industries"
                    title="Technology Across Industries"
                    description="We adapt our engineering approach to the realities of each sector we serve."
                />
                <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {industries.map((ind, i) => (
                        <Reveal key={ind.name} delay={i * 0.04}>
                            <div className="group h-full rounded-2xl border border-ink-200 bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-glow">
                                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent-50 text-accent-600 transition-transform group-hover:scale-110">
                                    <Icon name={ind.icon} className="h-5 w-5" />
                                </span>
                                <h3 className="mt-4 font-display text-sm font-semibold text-ink-900">{ind.name}</h3>
                                <p className="mt-1.5 text-xs leading-relaxed text-muted-600">{ind.description}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function TestimonialsSection() {
    return (
        <section className="container-page py-20 lg:py-28">
            <SectionHeader
                eyebrow="Testimonials"
                title="What clients say about working with us."
                description="The quotes below are placeholders — replace them with real client testimonials as they become available."
            />
            <div className="mt-12 grid gap-5 lg:grid-cols-3">
                {testimonials.map((t, i) => (
                    <Reveal key={i} delay={i * 0.06}>
                        <figure className="flex h-full flex-col rounded-2xl border border-ink-200 bg-white p-6 shadow-card">
                            <Icon name="quote" className="h-8 w-8 text-brand-400" />
                            <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink-700">
                                {t.quote}
                            </blockquote>
                            <figcaption className="mt-6 flex items-center gap-3 border-t border-ink-200 pt-5">
                                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 font-display text-sm font-bold text-white">
                                    {t.initials}
                                </span>
                                <div>
                                    <p className="text-sm font-semibold text-ink-900">{t.name}</p>
                                    <p className="text-xs text-muted-500">
                                        {t.role}, {t.company}
                                    </p>
                                </div>
                            </figcaption>
                        </figure>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}

export function InsightsPreview() {
    return (
        <section className="container-page py-20 lg:py-28">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                <SectionHeader
                    eyebrow="Insights"
                    title="Ideas, Technology & Digital Growth"
                    description="Practical thinking on building software that serves the business."
                />
                <Reveal delay={0.1}>
                    <Link to="/insights" className="link-underline text-sm font-semibold text-brand-600">
                        Read all insights →
                    </Link>
                </Reveal>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
                {insights.slice(0, 3).map((a, i) => (
                    <Reveal key={a.slug} delay={i * 0.06}>
                        <Link
                            to={`/insights/${a.slug}`}
                            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink-200 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-glow"
                        >
                            <div className="relative h-40 overflow-hidden border-b border-ink-200 bg-gradient-to-br from-ink-100 to-ink-200">
                                <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />
                                <div className="absolute inset-0 flex items-center justify-center p-6">
                                    <span className="font-display text-2xl font-bold text-ink-800">{a.category}</span>
                                </div>
                            </div>
                            <div className="flex flex-1 flex-col p-6">
                                <div className="flex items-center gap-2 text-xs text-muted-500">
                                    <span className="rounded-full bg-brand-50 px-2.5 py-1 font-semibold text-brand-600">
                                        {a.category}
                                    </span>
                                    <span>·</span>
                                    <span>{a.readTime}</span>
                                </div>
                                <h3 className="mt-4 font-display text-lg font-bold leading-snug text-ink-900 text-balance">
                                    {a.title}
                                </h3>
                                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-600">{a.excerpt}</p>
                                <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600">
                                    Read article{" "}
                                    <Icon
                                        name="arrow"
                                        className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                                    />
                                </span>
                            </div>
                        </Link>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}

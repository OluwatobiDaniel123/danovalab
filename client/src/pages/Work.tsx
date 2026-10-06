import {useState} from "react";
import {Link} from "react-router-dom";
import {Seo} from "../components/Seo";
import {Reveal} from "../components/Reveal";
import {Icon} from "../components/Icon";
import {CtaBand} from "../components/CtaBand";
import {projects} from "../data/content";
import type {Project} from "../data/types";

function ProjectImage({project, className = ""}: {project: Project; className?: string}) {
    return (
        <div className={`relative overflow-hidden ${className}`}>
            <div
                className="absolute inset-0 opacity-90"
                style={{background: `radial-gradient(120% 80% at 50% 0%, ${project.accent}22, transparent 60%)`}}
                aria-hidden
            />
            <div className="absolute inset-0 bg-grid opacity-20" aria-hidden />
            <div className="relative flex h-full min-h-full items-center justify-center">
                <div className="w-full max-w-sm rounded-xl border border-ink-200 bg-white p-4 shadow-card">
                    <div className="flex items-center gap-1.5 border-b border-ink-200 pb-2.5">
                        <span className="h-2 w-2 rounded-full bg-red-400/60" />
                        <span className="h-2 w-2 rounded-full bg-yellow-400/60" />
                        <span className="h-2 w-2 rounded-full bg-green-400/60" />
                        <span className="ml-2 font-mono text-[10px] text-muted-500">{project.slug}.danovalab</span>
                    </div>
                    <div className="mt-3 space-y-2">
                        <div className="h-2 w-2/3 rounded-full bg-ink-200" />
                        <div className="h-2 w-1/2 rounded-full bg-ink-200" />
                        <div className="mt-3 grid grid-cols-3 gap-2">
                            <div className="h-10 rounded-lg" style={{background: `${project.accent}22`}} />
                            <div className="h-10 rounded-lg bg-ink-100" />
                            <div className="h-10 rounded-lg bg-ink-100" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function Work() {
    const [filter, setFilter] = useState<string>("All");
    const industries = ["All", ...Array.from(new Set(projects.map((p) => p.industry)))];
    const filtered = filter === "All" ? projects : projects.filter((p) => p.industry === filter);

    return (
        <>
            <Seo
                title="Selected Work"
                description="Explore DanovaLab's selected client work — case studies across education, e-commerce, business management, nonprofit, sports, and SaaS."
                path="/work"
            />

            <section className="relative overflow-hidden pt-32 pb-12 lg:pt-44 lg:pb-16">
                <div className="absolute inset-0 bg-grid opacity-30 mask-fade-b" aria-hidden />
                <div
                    className="absolute -top-40 left-1/2 h-96 w-[60rem] -translate-x-1/2 rounded-full bg-brand-100 blur-3xl"
                    aria-hidden
                />
                <div className="container-page relative">
                    <Reveal>
                        <span className="eyebrow">
                            <span className="h-px w-6 bg-current opacity-60" />
                            Selected Work
                        </span>

                        <h1 className="mt-6 max-w-4xl text-display-md font-bold text-ink-900 text-balance">
                            Products built to solve real problems.
                        </h1>
                        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-600 text-pretty">
                            A selection of projects where technology met a clear business need. Each case study outlines
                            the challenge, the solution, and the measurable outcome.
                        </p>
                    </Reveal>
                </div>
            </section>

            <section className="container-page pb-20 lg:pb-28">
                <div className="flex flex-wrap gap-2">
                    {industries.map((ind) => (
                        <button
                            key={ind}
                            onClick={() => setFilter(ind)}
                            className={`rounded-full border px-4 py-0.7 text-sm font-medium transition-all duration-200 ${
                                filter === ind
                                    ? "border-brand-300 bg-brand-50 text-brand-700"
                                    : "border-ink-200 text-muted-600 hover:border-ink-300 hover:text-ink-900"
                            }`}
                        >
                            {ind}
                        </button>
                    ))}
                </div>

                <div className="mt-10 grid gap-5 lg:grid-cols-3">
                    {filtered.map((p, i) => (
                        <Reveal key={p.slug} delay={(i % 2) * 0.06}>
                            <Link
                                to={`/work/${p.slug}`}
                                className="group block overflow-hidden rounded-3xl border border-ink-200 bg-white shadow-card transition-all duration-500 hover:-translate-y-1 hover:border-brand-300 hover:shadow-glow"
                            >
                                <ProjectImage project={p} className="h-full" />
                                <div className="p-4">
                                    <div className="flex items-center gap-3 text-xs">
                                        <span className="rounded-full bg-brand-50 px-2.5 py-0.5 font-bold text-brand-600">
                                            {p.industry}
                                        </span>
                                        <span className="text-muted-500">{p.client}</span>
                                    </div>
                                    <h3 className="mt-4 font-display text-lg font-bold text-ink-900">{p.title}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-muted-600">{p.summary}</p>
                                    <div className="mt-5 flex flex-wrap gap-2">
                                        {p.stack.slice(0, 4).map((t) => (
                                            <span
                                                key={t}
                                                className="rounded-md border border-ink-200 px-2 py-0.5 font-bold font-mono text-[11px] text-muted-600"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
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

            <CtaBand />
        </>
    );
}

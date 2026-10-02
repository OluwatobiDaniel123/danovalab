import {Link, useParams} from "react-router-dom";
import {Seo} from "../components/Seo";
import {Reveal} from "../components/Reveal";
import {Icon} from "../components/Icon";
import {ButtonLink} from "../components/Button";
import {CtaBand} from "../components/CtaBand";
import {projects} from "../data/content";
import type {Project} from "../data/types";

function ProjectMockup({project, label}: {project: Project; label: string}) {
    return (
        <div className="relative overflow-hidden rounded-2xl border border-ink-200 bg-gradient-to-br from-ink-100 to-ink-200 shadow-card">
            <div
                className="absolute inset-0 opacity-80"
                style={{background: `radial-gradient(120% 80% at 50% 0%, ${project.accent}22, transparent 60%)`}}
                aria-hidden
            />
            <div className="absolute inset-0 bg-grid opacity-20" aria-hidden />
            <div className="relative p-6">
                <div className="flex items-center gap-1.5 border-b border-ink-200 pb-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400/60" />
                    <span className="ml-3 font-mono text-[11px] text-muted-500">{label}</span>
                </div>
                <div className="mt-5 grid grid-cols-12 gap-3">
                    <div className="col-span-4 space-y-2">
                        <div className="h-2.5 w-2/3 rounded-full bg-ink-200" />
                        <div className="h-2.5 w-1/2 rounded-full bg-ink-200" />
                        <div className="h-2.5 w-3/4 rounded-full bg-ink-200" />
                        <div className="mt-3 space-y-2">
                            {[1, 2, 3].map((n) => (
                                <div key={n} className="h-10 rounded-lg bg-white/60" />
                            ))}
                        </div>
                    </div>
                    <div className="col-span-8 space-y-3">
                        <div className="grid grid-cols-3 gap-3">
                            {[1, 2, 3].map((n) => (
                                <div key={n} className="rounded-xl border border-ink-200 bg-white p-3">
                                    <div className="h-2 w-1/2 rounded-full bg-ink-200" />
                                    <div
                                        className="mt-2 h-4 w-2/3 rounded-full"
                                        style={{background: `${project.accent}44`}}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="rounded-xl border border-ink-200 bg-white p-4">
                            <div className="flex items-end gap-1.5 h-20">
                                {[40, 65, 50, 80, 55, 90, 70, 60, 85, 45, 75, 95].map((h, i) => (
                                    <div
                                        key={i}
                                        className="flex-1 rounded-sm"
                                        style={{height: `${h}%`, background: `${project.accent}66`}}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function CaseStudy() {
    const {slug} = useParams();
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return (
            <div className="container-page flex min-h-[60vh] flex-col items-center justify-center pt-32 text-center">
                <Seo title="Case Study Not Found" description="The requested case study could not be found." />
                <h1 className="text-display-md font-bold text-ink-900">Case study not found.</h1>
                <p className="mt-4 text-muted-600">This project may have been moved or removed.</p>
                <ButtonLink to="/work" className="mt-8" iconLeft="arrow">
                    Back to all work
                </ButtonLink>
            </div>
        );
    }

    const sections = [
        {label: "Overview", body: project.overview},
        {label: "The Challenge", body: project.challenge},
        {label: "The Solution", body: project.solution},
        {label: "Development", body: project.development},
    ];

    return (
        <>
            <Seo
                title={`${project.title} — Case Study`}
                description={project.summary}
                path={`/work/${project.slug}`}
                type="article"
            />

            <section className="relative overflow-hidden pt-32 pb-12 lg:pt-40 lg:pb-16">
                <div className="absolute inset-0 bg-grid opacity-30 mask-fade-b" aria-hidden />
                <div
                    className="absolute -top-40 left-1/2 h-96 w-[60rem] -translate-x-1/2 rounded-full blur-3xl"
                    style={{background: `${project.accent}15`}}
                    aria-hidden
                />
                <div className="container-page relative">
                    <Reveal>
                        <Link
                            to="/work"
                            className="inline-flex items-center gap-2 text-sm text-muted-600 transition-colors hover:text-ink-900"
                        >
                            <Icon name="arrow" className="h-4 w-4 rotate-180" />
                            All work
                        </Link>
                        <div className="mt-6 flex items-center gap-3 text-xs">
                            <span className="rounded-full bg-brand-50 px-2.5 py-1 font-semibold text-brand-600">
                                {project.industry}
                            </span>
                            <span className="text-muted-500">{project.client}</span>
                        </div>
                        <h1 className="mt-5 max-w-4xl text-2xl font-bold text-ink-900">{project.title}</h1>
                        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-600 text-pretty">
                            {project.summary}
                        </p>
                    </Reveal>
                </div>
            </section>

            <section className="container-page pb-16">
                <Reveal>
                    <ProjectMockup project={project} label={`${project.slug}.danovalab.com`} />
                </Reveal>
            </section>

            {/* <section className="container-page pb-16">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {project.results.map((r, i) => (
                        <Reveal key={r.label} delay={i * 0.05}>
                            <div className="rounded-2xl border border-ink-200 bg-white p-6 text-center shadow-card">
                                <p className="font-display text-3xl font-bold text-ink-900">{r.value}</p>
                                <p className="mt-1 text-xs text-muted-500">{r.label}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section> */}

            <section className="container-page pb-20 lg:pb-28">
                <div className="grid gap-12 lg:grid-cols-12">
                    <div className="lg:col-span-4">
                        <div className="lg:sticky lg:top-28">
                            <span className="eyebrow">
                                <span className="h-px w-6 bg-current opacity-60" />
                                Case Study
                            </span>
                            {/* <h2 className="mt-4 font-display text-xl font-bold text-ink-900">{project.title}</h2> */}
                            <div className="mt-6 space-y-5">
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-500">
                                        Services
                                    </p>
                                    <ul className="mt-2 space-y-1.5">
                                        {project.services.map((s) => (
                                            <li key={s} className="text-sm text-ink-700">
                                                {s}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-500">
                                        Technologies
                                    </p>
                                    <div className="mt-2 flex flex-wrap gap-2">
                                        {project.stack.map((t) => (
                                            <span
                                                key={t}
                                                className="rounded-md border border-ink-200 px-2 py-1 font-mono text-[11px] text-ink-700"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-8">
                        <div className="space-y-12">
                            {sections.map((s, i) => (
                                <Reveal key={s.label} delay={i * 0.04}>
                                    <div>
                                        <h3 className="font-display text-xl font-bold text-ink-900">{s.label}</h3>
                                        <p className="mt-4 text-base leading-relaxed text-muted-600 text-pretty">
                                            {s.body}
                                        </p>
                                    </div>
                                </Reveal>
                            ))}
                            <Reveal>
                                <div>
                                    <h3 className="font-display text-xl font-bold text-ink-900">Results</h3>
                                    <p className="mt-4 text-base leading-relaxed text-muted-600">
                                        The engagement delivered measurable improvements across the metrics that matter
                                        to the business:
                                    </p>
                                    <ul className="mt-5 space-y-3">
                                        {project.results.map((r) => (
                                            <li
                                                key={r.label}
                                                className="flex items-center gap-3 rounded-xl border border-ink-200 bg-white px-4 py-3 shadow-card"
                                            >
                                                <span className="font-display text-lg font-bold text-brand-600">
                                                    {r.value}
                                                </span>
                                                <span className="text-sm text-ink-700">{r.label}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container-page pb-20 lg:pb-28">
                <div className="grid gap-5 md:grid-cols-3">
                    {project.gallery.map((g, i) => (
                        <Reveal key={i} delay={i * 0.06}>
                            <ProjectMockup project={project} label={g} />
                        </Reveal>
                    ))}
                </div>
            </section>

            <CtaBand
                title="Have a similar project? Let's talk."
                description="Tell us what you're trying to build. We'll help shape it into a practical digital solution."
                primaryLabel="Start a Project"
                secondaryLabel="Back to All Work"
                secondaryTo="/work"
            />
        </>
    );
}

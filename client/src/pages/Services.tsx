import {motion} from "framer-motion";
import {Seo} from "../components/Seo";
import {SectionHeader} from "../components/SectionHeader";
import {Reveal} from "../components/Reveal";
import {Icon} from "../components/Icon";
import {CtaBand} from "../components/CtaBand";
import {useReducedMotion} from "../hooks/useReducedMotion";
import {services, solutions, processSteps, whyDanovaLab} from "../data/content";

export function Services() {
    const reduce = useReducedMotion();
    return (
        <>
            <Seo
                title="Services"
                description="DanovaLab provides web development, web applications, business software, UI/UX design, e-commerce, custom software, API integration, and ongoing maintenance and support."
                path="/services"
            />

            {/* Hero */}
            <section className="relative overflow-hidden pt-32 lg:pt-44">
                <div className="absolute inset-0 bg-grid opacity-30 mask-fade-b" aria-hidden />
                <div
                    className="absolute -top-40 left-1/2 h-96 w-[60rem] -translate-x-1/2 rounded-full bg-brand-100 blur-3xl"
                    aria-hidden
                />
                <div className="container-page relative">
                    <Reveal>
                        <span className="eyebrow">
                            <span className="h-px w-6 bg-current opacity-60" />
                            Services
                        </span>
                        <h1 className="mt-6 max-w-4xl text-display-md font-bold text-ink-900 text-balance">
                            What We Build
                        </h1>
                        <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-600 text-pretty">
                            From corporate websites to custom business platforms, DanovaLab covers the full spectrum of
                            modern digital product development — designed, engineered, and maintained to a professional
                            standard.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* Services grid */}
            <section className="container-page py-16 lg:py-24">
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {services.map((s, i) => (
                        <Reveal key={s.slug} delay={(i % 4) * 0.05}>
                            <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink-200 bg-white shadow-card transition-all duration-300 hover:-translate-y-1  hover:shadow-glow">
                                <div className="relative h-36 overflow-hidden">
                                    <img
                                        src={s.image}
                                        alt={s.title}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                                </div>

                                <div className="flex flex-1 flex-col p-3">
                                    <h3 className="font-display text-base font-semibold text-ink-900">{s.title}</h3>

                                    <p className="flex-1 text-sm leading-relaxed text-muted-600">{s.short}</p>

                                    <ul className="mt-2 space-y-2">
                                        {s.features.slice(0, 3).map((f) => (
                                            <li key={f} className="flex items-center gap-2 text-xs text-muted-500">
                                                <Icon name="check" className="h-3.5 w-3.5 text-accent-600" />
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* Solutions section */}
            {/* <section className="relative overflow-hidden border-y border-ink-200 bg-ink-100 py-20 lg:py-28">
                <div className="container-page relative">
                    <SectionHeader
                        eyebrow="Solutions"
                        title="Digital Solutions for Real Business Challenges"
                        description="We don't just deliver technology. We solve the operational problems that hold organizations back."
                    />
                    <div className="mt-12 grid gap-5 lg:grid-cols-2">
                        {solutions.map((s, i) => (
                            <Reveal key={s.slug} delay={(i % 2) * 0.08}>
                                <div className="group h-full rounded-3xl border border-ink-200 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-glow">
                                    <div className="flex items-start gap-5">
                                        <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-transform duration-300 group-hover:scale-110">
                                            <Icon name={s.icon} className="h-6 w-6" />
                                        </span>
                                        <div>
                                            <h3 className="font-display text-lg font-bold text-ink-900">{s.title}</h3>
                                            <p className="mt-2 text-sm leading-relaxed text-muted-600">
                                                {s.description}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-6 grid grid-cols-2 gap-3">
                                        {s.outcomes.map((o) => (
                                            <div
                                                key={o}
                                                className="flex items-center gap-2.5 rounded-xl border border-ink-200 bg-ink-50 px-3 py-2.5 text-xs text-ink-700"
                                            >
                                                <Icon name="check" className="h-3.5 w-3.5 shrink-0 text-accent-600" />
                                                {o}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section> */}

            {/* Process section */}
            <section className="container-page py-10 lg:py-28">
                <SectionHeader
                    eyebrow="How we work"
                    title="From Idea to Launch"
                    description="A clear, transparent process that keeps clients informed at every stage."
                />
                <div className="relative mt-12">
                    <div
                        className="absolute left-[27px] top-2 bottom-2 hidden w-px bg-gradient-to-b from-brand-400 via-ink-200 to-transparent sm:block"
                        aria-hidden
                    />
                    <div className="space-y-6">
                        {processSteps.map((step, i) => (
                            <motion.div
                                key={step.number}
                                initial={reduce ? false : {opacity: 0, x: -20}}
                                whileInView={reduce ? undefined : {opacity: 1, x: 0}}
                                viewport={{once: true, margin: "-80px"}}
                                transition={{duration: 0.6, delay: i * 0.05}}
                                className="relative grid gap-5 sm:grid-cols-[56px_1fr] sm:gap-8"
                            >
                                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl border border-brand-300 bg-white text-brand-600 shadow-glow">
                                    <Icon name={step.icon} className="h-6 w-6" />
                                </div>
                                <div className="rounded-3xl border border-ink-200 bg-white p-6 shadow-card lg:p-8">
                                    <div className="flex flex-wrap items-center gap-3">
                                        <span className="font-display text-2xl font-bold text-ink-200">
                                            {step.number}
                                        </span>
                                        <h2 className="font-display text-lg font-bold text-ink-900">{step.title}</h2>
                                    </div>
                                    <p className="mt-4 text-sm leading-relaxed text-muted-600 text-pretty">
                                        {step.description}
                                    </p>
                                    <div className="mt-3 grid gap-3 sm:grid-cols-2">
                                        {step.activities.map((a) => (
                                            <div
                                                key={a}
                                                className="flex items-center gap-2.5 rounded-xl border border-ink-200 bg-ink-50 px-4 py-2 text-sm text-ink-700"
                                            >
                                                <Icon name="check" className="h-4 w-4 shrink-0 text-accent-600" />
                                                {a}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why DanovaLab */}
            {/* <section className="relative overflow-hidden border-y border-ink-200 bg-ink-100 py-20 lg:py-28">
                <div className="container-page relative">
                    <SectionHeader eyebrow="Why DanovaLab" title="A process built on partnership." />
                    <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {whyDanovaLab.map((w, i) => (
                            <Reveal key={w.title} delay={i * 0.05}>
                                <div className="h-full rounded-2xl border border-ink-200 bg-white p-6 shadow-card">
                                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                                        <Icon name={w.icon} className="h-5 w-5" />
                                    </span>
                                    <h3 className="mt-5 font-display text-base font-semibold text-ink-900">
                                        {w.title}
                                    </h3>
                                    <p className="mt-2 text-sm leading-relaxed text-muted-600">{w.description}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section> */}

            <CtaBand />
        </>
    );
}

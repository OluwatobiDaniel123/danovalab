import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import {ButtonLink} from "../components/Button";
import {Icon} from "../components/Icon";
import {HeroVisual} from "../components/HeroVisual";
import {Reveal} from "../components/Reveal";
import {useReducedMotion} from "../hooks/useReducedMotion";
import {trustStrip} from "../data/content";

function Hero() {
    const reduce = useReducedMotion();
    return (
        <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24">
            <div className="absolute inset-0 bg-grid opacity-40 mask-fade-b" aria-hidden />
            <div
                className="absolute -top-40 left-1/2 h-[36rem] w-[64rem] -translate-x-1/2 rounded-full bg-brand-100 blur-3xl"
                aria-hidden
            />
            <div className="absolute top-1/3 right-0 h-80 w-80 rounded-full bg-accent-50 blur-3xl" aria-hidden />

            <div className="container-page relative">
                <div className="grid items-center max-[769px]:pt-8 gap-12 lg:grid-cols-12 lg:gap-10">
                    <div className="lg:col-span-6 ">
                        <motion.div
                            initial={reduce ? false : {opacity: 0, y: 16}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.6}}
                            className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white px-2.5 py-0.5 text-xs font-medium text-ink-700 shadow-sm"
                        >
                            <span className="h-1.5 w-1.5 rounded-full bg-accent-500 animate-pulse-soft" />
                            IT & Software Technology · Digital solutions
                        </motion.div>

                        <motion.h1
                            initial={reduce ? false : {opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.7, delay: 0.05}}
                            className="mt-6 text-display-md font-bold text-ink-900 text-balance"
                        >
                            We Build Digital Products That Move Businesses Forward.
                        </motion.h1>

                        <motion.p
                            initial={reduce ? false : {opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.7, delay: 0.12}}
                            className="mt-6 max-w-xl text-md font-semibold leading-relaxed text-muted-600 text-pretty"
                        >
                            DanovaLab is IT & Software Technology company building modern websites, web applications,
                            business software, and digital solutions that help businesses operate, grow, and compete.
                        </motion.p>

                        <motion.div
                            initial={reduce ? false : {opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.7, delay: 0.18}}
                            className="mt-9 flex gap-3 sm:flex-row"
                        >
                            <ButtonLink to="/contact" size="sm" iconRight="arrow">
                                Start a Project
                            </ButtonLink>
                            <ButtonLink to="/work" size="sm" variant="outline">
                                Explore Our Work
                            </ButtonLink>
                        </motion.div>

                        <motion.div
                            initial={reduce ? false : {opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: 0.8, delay: 0.3}}
                            className="mt-12 grid max-w-md grid-cols-3 gap-8"
                        >
                            {[
                                {v: "20+", l: "Projects delivered"},
                                {v: "15+", l: "Businesses supported"},
                                {v: "5+", l: "Industries served"},
                            ].map((s) => (
                                <div key={s.l}>
                                    <p className="font-display text-3xl font-bold text-ink-900">{s.v}</p>
                                    <p className="mt-1 text-sm font-bold text-muted-500">{s.l}</p>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    <div className="lg:col-span-6">
                        <HeroVisual />
                    </div>
                </div>
            </div>
        </section>
    );
}

function TrustStrip() {
    return (
        <section className="border-y border-ink-200 bg-ink-100 py-6">
            <div className="container-page">
                <div className="mask-fade-x overflow-hidden">
                    <div className="flex w-max animate-marquee items-center gap-10">
                        {[...trustStrip, ...trustStrip, ...trustStrip].map((item, i) => (
                            <div key={i} className="flex items-center gap-10">
                                <span className="whitespace-nowrap font-display text-sm font-bold uppercase tracking-[0.18em] text-muted-500">
                                    {item}
                                </span>
                                <span className="h-1 w-1 rounded-full bg-brand-500/50" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function ServicesPreview() {
    const items = [
        {
            t: "Web Development",
            d: "Corporate websites, landing pages and business websites.",
            icon: "web",
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
        },
        {
            t: "Business Applications",
            d: "Custom platforms built around business operations.",
            icon: "app",
            image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=80",
        },
        {
            t: "Admin & CRM Systems",
            d: "Dashboards, customer management and internal tools.",
            icon: "software",
            image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80",
        },
        {
            t: "E-Commerce Solutions",
            d: "Online stores, product management and payment integration.",
            icon: "ecommerce",
            image: "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=1200&q=80",
        },
    ] as const;
    return (
        <section className="container-page py-16 lg:py-14">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                <Reveal>
                    <span className="eyebrow">
                        <span className="h-px w-6 bg-current opacity-60" />
                        What We Build
                    </span>
                    <h2 className="mt-4 text-display-md capitalize font-bold text-ink-900 text-balance">
                        A complete technology partner.
                    </h2>
                </Reveal>
                <Reveal delay={0.1}>
                    <Link to="/services" className="link-underline text-sm font-semibold text-brand-600">
                        View all services →
                    </Link>
                </Reveal>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {items.map((s, i) => (
                    <Reveal key={s.t} delay={i * 0.06}>
                        <Link
                            to="/services"
                            className="group relative block h-full overflow-hidden rounded-2xl border border-ink-200 bg-black p-4 pb-3 shadow-card transition-all duration-300 hover:-translate-y-1"
                        >
                            <img
                                src={s.image}
                                alt=""
                                className="absolute inset-0 h-full w-full object-cover opacity-45 transition-opacity duration-500 group-hover:opacity-70"
                            />
                            <div className="relative z-10">
                                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                                    <Icon name={s.icon} className="h-5 w-5" />
                                </span>

                                <h3 className="mt-5 font-display text-base font-semibold text-white">{s.t}</h3>

                                <p className="mt-2 text-sm font-semibold text-white">{s.d}</p>

                                <span className="mt-2 inline-flex items-center gap-1.5 text-xs font-extrabold text-brand-600 ">
                                    Learn more <Icon name="arrow" className="h-3.5 w-3.5" />
                                </span>
                            </div>
                        </Link>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}

export function HomeSections() {
    return (
        <>
            <Hero />
            <TrustStrip />
            <ServicesPreview />
        </>
    );
}

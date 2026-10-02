import {Link} from "react-router-dom";
import {Icon} from "./Icon";
import type {IconName} from "../data/types";

const services = [
    {label: "Web Development", to: "/services"},
    {label: "Web Applications", to: "/services"},
    {label: "Business Software", to: "/services"},
    {label: "UI/UX Design", to: "/services"},
    {label: "E-Commerce", to: "/services"},
    {label: "Custom Software", to: "/services"},
];

const nav = [
    {label: "Services", to: "/services"},
    {label: "Work", to: "/work"},
    {label: "About", to: "/about"},
    {label: "Insights", to: "/insights"},
    {label: "Contact", to: "/contact"},
];

const socials: {label: string; icon: IconName; href: string}[] = [
    {label: "LinkedIn", icon: "linkedin", href: "www.linkedin.com/in/oluwatobi-daniel-069623310"},
    {label: "GitHub", icon: "github", href: "https://github.com/OluwatobiDaniel123"},
    {label: "Instagram", icon: "instagram", href: "https://www.instagram.com/danovalab1/"},
    {label: "X", icon: "x", href: "https://x.com/danovalab"},
];

export function Footer() {
    return (
        <footer className="relative overflow-hidden border-t border-ink-200 bg-ink-50">
            <div className="absolute inset-0 bg-grid opacity-50 mask-fade-b" aria-hidden />
            <div
                className="absolute -top-40 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-brand-500/5 blur-3xl"
                aria-hidden
            />

            <div className="container-page relative py-6 lg:py-20">
                <div className="grid gap-10 lg:grid-cols-12">
                    <div className="lg:col-span-4">
                        <Link to="/" className="flex items-center gap-2.5">
                            <span className="font-display text-lg font-bold text-ink-900">
                                Danova<span className="text-brand-600">Lab</span>
                            </span>
                        </Link>
                        <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-600">
                            Technology solutions for businesses ready to build, improve, and grow.
                        </p>
                        <div className="mt-6 flex gap-3">
                            {socials.map((s) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={s.label}
                                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-ink-200 bg-white text-muted-800 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-600 hover:shadow-card"
                                >
                                    <Icon name={s.icon} className="h-5 w-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-2">
                        <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-500">Navigation</h3>
                        <ul className="mt-5 space-y-3">
                            {nav.map((n) => (
                                <li key={n.label}>
                                    <Link
                                        to={n.to}
                                        className="text-sm text-muted-600 transition-colors hover:text-ink-900"
                                    >
                                        {n.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-3">
                        <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-500">Services</h3>
                        <ul className="mt-5 space-y-3">
                            {services.map((s) => (
                                <li key={s.label}>
                                    <Link
                                        to={s.to}
                                        className="text-sm text-muted-600 transition-colors hover:text-ink-900"
                                    >
                                        {s.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-3">
                        <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-500">Contact</h3>
                        <ul className="mt-5 space-y-4">
                            <li>
                                <a
                                    href="mailto:danieloluwatobi@danovalab.com?subject=Project%20Inquiry&body=Hello%20DanovaLab,%0A%0AI%20would%20like%20to%20discuss%20a%20project%20with%20you.%20Please%20get%20back%20to%20me%20at%20your%20earliest%20convenience.%0A%0AName:%20%0ACompany:%20%0APhone:%20%0AProject%20Details:%20%0A%0AThank%20you."
                                    className="group flex items-center gap-3 text-sm text-muted-600 transition-colors hover:text-ink-900"
                                >
                                    <Icon name="mail" className="h-4 w-4 text-brand-600" />
                                    danieloluwatobi@danovalab.com
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://wa.me/+2348109830746"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-3 text-sm text-muted-600 transition-colors hover:text-ink-900"
                                >
                                    <Icon name="whatsapp" className="h-4 w-4 text-accent-600" />
                                    WhatsApp
                                </a>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-muted-600">
                                <Icon name="location" className="h-4 w-4 text-muted-500" />
                                <span>Available worldwide — remote-first</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-7 flex flex-col gap-4 border-t border-ink-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-sm text-muted-500">© 2026 DanovaLab. All rights reserved.</p>
                    <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-500">
                        <Link to="/privacy" className="transition-colors hover:text-ink-900">
                            Privacy Policy
                        </Link>
                        <Link to="/terms" className="transition-colors hover:text-ink-900">
                            Terms of Service
                        </Link>
                        <Link to="/cookies" className="transition-colors hover:text-ink-900">
                            Cookie Policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

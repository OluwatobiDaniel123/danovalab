import {useState} from "react";
import {Seo} from "../components/Seo";
import {Reveal} from "../components/Reveal";
import {Icon} from "../components/Icon";
import {Button} from "../components/Button";
import {useReducedMotion} from "../hooks/useReducedMotion";
import {motion} from "framer-motion";
import axios from "axios";
import {BASE_URL} from "../BASE_URL";

interface FormState {
    fullName: string;
    email: string;
    phone: string;
    projectType: string;
    budgetRange: string;
    description: string;
}

const initial: FormState = {
    fullName: "",
    email: "",
    phone: "",
    projectType: "",
    budgetRange: "",
    description: "",
};

const projectTypes = [
    "Website",
    "Web Application",
    "Business Software",
    "E-Commerce",
    "UI/UX Design",
    "Custom Software",
    "API / Integration",
    "Maintenance & Support",
    "Not sure yet",
];

const budgets = ["Under $5,000", "$5,000 – $15,000", "$15,000 – $40,000", "$40,000+", "Let's discuss"];

export function Contact() {
    const [values, setValues] = useState<FormState>(initial);
    const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
    const reduce = useReducedMotion();

    const update = (key: keyof FormState, val: string) => {
        setValues((prev) => ({
            ...prev,
            [key]: val,
        }));
    };

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setStatus("submitting");

        const templateParams = {
            fullName: values.fullName,
            email: values.email,
            whatsapp: values.phone,
            helpWith: values.projectType,
            comments: values.description,
            budget: values.budgetRange,
        };

        console.log("BASE_URL:", BASE_URL);
        console.log("Request URL:", `${BASE_URL}/send-quote-mail`);
        console.log("Sending data:", templateParams);

        try {
            const result = await axios.post(`${BASE_URL}/send-quote-mail`, templateParams);

            console.log("Quote sent successfully:", result.data);

            setStatus("success");
        } catch (error) {
            setStatus("idle");

            if (axios.isAxiosError(error)) {
                console.error("Axios error:", error);
                console.error("Status:", error.response?.status);
                console.error("Response:", error.response?.data);
                console.error("Request:", error.request);
                console.error("Message:", error.message);
            } else {
                console.error("Unknown error:", error);
            }

            // alert("Failed to send your inquiry. Please check the browser console.");
        }
    };
    const reset = () => {
        setValues(initial);
        setStatus("idle");
    };

    return (
        <>
            <Seo
                title="Start a Project"
                description="Tell DanovaLab what you're trying to build, improve, or solve. We'll help turn the idea into a practical digital solution."
                path="/contact"
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
                            Contact
                        </span>

                        <h1 className="mt-6 max-w-4xl text-display-md font-bold text-ink-900 text-balance">
                            Have a Project in Mind? Let's Build It.
                        </h1>

                        <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted-600 text-pretty">
                            Tell us what you're trying to build, improve, or solve. We'll help turn the idea into a
                            practical digital solution.
                        </p>
                    </Reveal>
                </div>
            </section>

            <section className="container-page pb-20 lg:pb-28">
                <div className="grid gap-8 lg:grid-cols-12">
                    <div className="lg:col-span-5">
                        <Reveal>
                            <div className="space-y-4">
                                <a
                                    href="mailto:danieloluwatobi@danovalab.com?subject=Project%20Inquiry&body=Hello%20DanovaLab,%0A%0AI%20would%20like%20to%20discuss%20a%20project%20with%20you.%20Please%20get%20back%20to%20me%20at%20your%20earliest%20convenience.%0A%0AName:%20%0ACompany:%20%0APhone:%20%0AProject%20Details:%20%0A%0AThank%20you."
                                    className="group flex items-center gap-4 rounded-2xl border border-ink-200 bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-300"
                                >
                                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                                        <Icon name="mail" className="h-5 w-5" />
                                    </span>

                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-500">
                                            Email
                                        </p>

                                        <p className="mt-0.5 text-sm font-medium text-ink-900">
                                            danieloluwatobi@danovalab.com
                                        </p>
                                    </div>
                                </a>

                                <a
                                    href="https://wa.me/+2348109830746"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-4 rounded-2xl border border-ink-200 bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-300"
                                >
                                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-50 text-accent-600">
                                        <Icon name="whatsapp" className="h-5 w-5" />
                                    </span>

                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-500">
                                            WhatsApp
                                        </p>

                                        <p className="mt-0.5 text-sm font-medium text-ink-900">Chat with us</p>
                                    </div>
                                </a>

                                <div className="flex items-center gap-4 rounded-2xl border border-ink-200 bg-white p-5 shadow-card">
                                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-ink-100 text-ink-600">
                                        <Icon name="location" className="h-5 w-5" />
                                    </span>

                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-500">
                                            Location
                                        </p>

                                        <p className="mt-0.5 text-sm font-medium text-ink-900">
                                            Remote-first · Available worldwide
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 rounded-2xl border border-ink-200 bg-gradient-to-br from-brand-600 to-brand-800 p-6">
                                <p className="font-display text-base font-semibold text-white">What happens next?</p>

                                <ol className="mt-4 space-y-3">
                                    {[
                                        "We review your inquiry within one business day.",
                                        "We schedule a short call to understand the project.",
                                        "You receive a clear proposal with scope and timeline.",
                                    ].map((s, i) => (
                                        <li key={i} className="flex gap-3 text-sm text-brand-100">
                                            <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/15 font-mono text-xs font-bold text-white">
                                                {i + 1}
                                            </span>

                                            {s}
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        </Reveal>
                    </div>

                    <div className="lg:col-span-7">
                        <Reveal delay={0.1}>
                            <div className="rounded-3xl border border-ink-200 bg-white p-6 shadow-card lg:p-8">
                                {status === "success" ? (
                                    <motion.div
                                        initial={
                                            reduce
                                                ? false
                                                : {
                                                      opacity: 0,
                                                      scale: 0.96,
                                                  }
                                        }
                                        animate={{
                                            opacity: 1,
                                            scale: 1,
                                        }}
                                        transition={{duration: 0.5}}
                                        className="flex flex-col items-center justify-center py-16 text-center"
                                    >
                                        <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-accent-50 text-accent-600">
                                            <Icon name="check" className="h-8 w-8" />
                                        </span>

                                        <h2 className="mt-6 font-display text-2xl font-bold text-ink-900">
                                            Inquiry received.
                                        </h2>

                                        <p className="mt-3 max-w-md text-muted-600">
                                            Thank you, {values.fullName.split(" ")[0] || "there"}. We'll review your
                                            project and respond within one business day.
                                        </p>

                                        <Button variant="outline" className="mt-8" onClick={reset}>
                                            Send another inquiry
                                        </Button>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={onSubmit} className="space-y-5">
                                        <div className="grid gap-5 sm:grid-cols-2">
                                            <div>
                                                <label className="mb-2 block text-sm font-medium text-ink-700">
                                                    Full Name <span className="text-brand-500">*</span>
                                                </label>

                                                <input
                                                    type="text"
                                                    value={values.fullName}
                                                    onChange={(e) => update("fullName", e.target.value)}
                                                    className="w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-muted-400 transition-colors duration-200 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-400/60"
                                                    placeholder="Jane Doe"
                                                    required
                                                />
                                            </div>

                                            <div>
                                                <label className="mb-2 block text-sm font-medium text-ink-700">
                                                    Email <span className="text-brand-500">*</span>
                                                </label>

                                                <input
                                                    type="email"
                                                    value={values.email}
                                                    onChange={(e) => update("email", e.target.value)}
                                                    className="w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-muted-400 transition-colors duration-200 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-400/60"
                                                    placeholder="jane@acme.com"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="grid gap-5 sm:grid-cols-3">
                                            <div>
                                                <label className="mb-2 block text-sm font-medium text-ink-700">
                                                    Phone
                                                </label>

                                                <input
                                                    type="tel"
                                                    value={values.phone}
                                                    onChange={(e) => update("phone", e.target.value)}
                                                    className="w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-muted-400 transition-colors duration-200 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-400/60"
                                                    placeholder="+234 800 000 0000"
                                                />
                                            </div>

                                            <div>
                                                <label className="mb-2 block text-sm font-medium text-ink-700">
                                                    Project Type <span className="text-brand-500">*</span>
                                                </label>

                                                <select
                                                    value={values.projectType}
                                                    onChange={(e) => update("projectType", e.target.value)}
                                                    className="w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 transition-colors duration-200 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-400/60"
                                                    required
                                                >
                                                    <option value="">Select…</option>

                                                    {projectTypes.map((t) => (
                                                        <option key={t} value={t}>
                                                            {t}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>

                                            <div>
                                                <label className="mb-2 block text-sm font-medium text-ink-700">
                                                    Budget Range <span className="text-brand-500">*</span>
                                                </label>

                                                <select
                                                    value={values.budgetRange}
                                                    onChange={(e) => update("budgetRange", e.target.value)}
                                                    className="w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 transition-colors duration-200 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-400/60"
                                                    required
                                                >
                                                    <option value="">Select…</option>

                                                    {budgets.map((b) => (
                                                        <option key={b} value={b}>
                                                            {b}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="mb-2 block text-sm font-medium text-ink-700">
                                                Project Description <span className="text-brand-500">*</span>
                                            </label>

                                            <textarea
                                                value={values.description}
                                                onChange={(e) => update("description", e.target.value)}
                                                rows={5}
                                                className="w-full resize-none rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-muted-400 transition-colors duration-200 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-400/60"
                                                placeholder="Tell us what you're trying to build, the problem you're solving, and any context that would help."
                                                required
                                            />
                                        </div>

                                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                            <p className="text-xs text-muted-500">
                                                Fields marked <span className="text-brand-500">*</span> are required.
                                            </p>

                                            <Button
                                                type="submit"
                                                size="md"
                                                disabled={status === "submitting"}
                                                iconRight="arrow"
                                            >
                                                {status === "submitting" ? "Sending…" : "Send Project Inquiry"}
                                            </Button>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>
        </>
    );
}

import { Seo } from "../components/Seo";
import { SectionHeader } from "../components/SectionHeader";
import { Reveal } from "../components/Reveal";
import { Icon } from "../components/Icon";
import { ButtonLink } from "../components/Button";
import { CtaBand } from "../components/CtaBand";
import { techGroups, whyDanovaLab } from "../data/content";

export function About() {
  return (
    <>
      <Seo
        title="About DanovaLab"
        description="DanovaLab is a technology company that designs, develops, and delivers modern digital products, websites, and software solutions for businesses, organizations, and startups."
        path="/about"
      />

      <section className="relative overflow-hidden pt-32 pb-16 lg:pt-44 lg:pb-24">
        <div className="absolute inset-0 bg-grid opacity-30 mask-fade-b" aria-hidden />
        <div className="absolute -top-40 left-1/2 h-96 w-[60rem] -translate-x-1/2 rounded-full bg-brand-100 blur-3xl" aria-hidden />
        <div className="container-page relative">
          <Reveal>
            <span className="eyebrow">
              <span className="h-px w-6 bg-current opacity-60" />
              About DanovaLab
            </span>
            <h1 className="mt-6 max-w-4xl text-display-xl font-bold text-ink-900 text-balance">
              Technology Built Around Your Business.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-600 text-pretty">
              DanovaLab is an independent technology company that designs, develops, and delivers modern digital
              products, websites, web applications, business software, and custom technology solutions. We help
              organizations turn ideas, business challenges, and opportunities into reliable software.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-page py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <Reveal>
              <h2 className="text-display-md font-bold text-ink-900 text-balance">A company, not a freelancer.</h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-600">
                DanovaLab exists to be a legitimate technology partner for organizations that need more than a
                one-off website. We bring business understanding, engineering discipline, and design thinking
                together — so the software we build serves the organization for years, not weeks.
              </p>
              <p className="mt-5 leading-relaxed text-muted-600">
                We work with startups, small and medium businesses, established organizations, and institutions
                across industries. Whether the need is a marketing website, an internal management platform, or a
                custom product built from scratch, the approach is the same: understand the business first, then
                build the right technology around it.
              </p>
              <div className="mt-8">
                <ButtonLink to="/contact" iconRight="arrow">Start a Project</ButtonLink>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-6">
            <Reveal delay={0.1}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { v: "40+", l: "Products shipped" },
                  { v: "8", l: "Industries served" },
                  { v: "99.9%", l: "Uptime delivered" },
                  { v: "100%", l: "Client-owned code" },
                ].map((s) => (
                  <div key={s.l} className="rounded-2xl border border-ink-200 bg-white p-6 shadow-card">
                    <p className="font-display text-3xl font-bold text-ink-900">{s.v}</p>
                    <p className="mt-1 text-sm text-muted-500">{s.l}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-ink-200 bg-ink-100 py-20 lg:py-28">
        <div className="container-page relative">
          <SectionHeader
            eyebrow="What we stand for"
            title="Principles that guide every project."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyDanovaLab.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-ink-200 bg-white p-6 shadow-card">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <Icon name={w.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-base font-semibold text-ink-900">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-600">{w.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20 lg:py-28">
        <SectionHeader
          eyebrow="Engineering"
          title="Built With Modern Technology"
          description="We choose proven, maintainable technologies that scale with the business."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {techGroups.map((g, i) => (
            <Reveal key={g.label} delay={i * 0.05}>
              <div className="h-full rounded-2xl border border-ink-200 bg-white p-6 shadow-card">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-600">{g.label}</p>
                <ul className="mt-5 space-y-3">
                  {g.items.map((it) => (
                    <li key={it} className="flex items-center gap-2.5 text-sm text-ink-700">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent-500/60" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand
        title="Let's Build Something That Matters."
        primaryLabel="Start a Project"
        secondaryLabel="See Our Work"
        secondaryTo="/work"
      />
    </>
  );
}

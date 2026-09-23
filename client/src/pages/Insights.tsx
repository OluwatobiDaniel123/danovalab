import { useState } from "react";
import { Link } from "react-router-dom";
import { Seo } from "../components/Seo";
import { Reveal } from "../components/Reveal";
import { Icon } from "../components/Icon";
import { CtaBand } from "../components/CtaBand";
import { insights } from "../data/content";

export function Insights() {
  const [filter, setFilter] = useState<string>("All");
  const categories = ["All", ...Array.from(new Set(insights.map((a) => a.category)))];
  const filtered = filter === "All" ? insights : insights.filter((a) => a.category === filter);
  const [featured, ...rest] = filtered;

  return (
    <>
      <Seo
        title="Insights"
        description="Ideas, technology, and digital growth — practical articles from DanovaLab on building software that serves the business."
        path="/insights"
      />

      <section className="relative overflow-hidden pt-32 pb-12 lg:pt-44 lg:pb-16">
        <div className="absolute inset-0 bg-grid opacity-30 mask-fade-b" aria-hidden />
        <div className="absolute -top-40 left-1/2 h-96 w-[60rem] -translate-x-1/2 rounded-full bg-brand-100 blur-3xl" aria-hidden />
        <div className="container-page relative">
          <Reveal>
            <span className="eyebrow">
              <span className="h-px w-6 bg-current opacity-60" />
              Insights
            </span>
            <h1 className="mt-6 max-w-4xl text-display-xl font-bold text-ink-900 text-balance">
              Ideas, Technology & Digital Growth
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-600 text-pretty">
              Practical thinking on building software, improving digital products, and using technology to move a
              business forward.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-page pb-20 lg:pb-28">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 ${
                filter === c
                  ? "border-brand-300 bg-brand-50 text-brand-700"
                  : "border-ink-200 text-muted-600 hover:border-ink-300 hover:text-ink-900"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {featured && (
          <Reveal className="mt-10">
            <Link
              to={`/insights/${featured.slug}`}
              className="group grid overflow-hidden rounded-3xl border border-ink-200 bg-white shadow-card transition-all duration-300 hover:border-brand-300 hover:shadow-glow lg:grid-cols-2"
            >
              <div className="relative min-h-[240px] overflow-hidden border-b border-ink-200 bg-gradient-to-br from-ink-100 to-ink-200 lg:border-b-0 lg:border-r">
                <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />
                <div className="relative flex h-full min-h-[240px] items-center justify-center p-8">
                  <span className="font-display text-3xl font-bold text-ink-800">{featured.category}</span>
                </div>
              </div>
              <div className="flex flex-col justify-center p-8 lg:p-12">
                <div className="flex items-center gap-2 text-xs text-muted-500">
                  <span className="rounded-full bg-brand-50 px-2.5 py-1 font-semibold text-brand-600">{featured.category}</span>
                  <span>·</span>
                  <span>{featured.readTime}</span>
                </div>
                <h2 className="mt-5 font-display text-2xl font-bold leading-snug text-ink-900 text-balance">{featured.title}</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-600">{featured.excerpt}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                  Read article <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </Reveal>
        )}

        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((a, i) => (
            <Reveal key={a.slug} delay={(i % 3) * 0.05}>
              <Link
                to={`/insights/${a.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink-200 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-glow"
              >
                <div className="relative h-36 overflow-hidden border-b border-ink-200 bg-gradient-to-br from-ink-100 to-ink-200">
                  <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <span className="font-display text-xl font-bold text-ink-800">{a.category}</span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-2 text-xs text-muted-500">
                    <span className="rounded-full bg-brand-50 px-2.5 py-1 font-semibold text-brand-600">{a.category}</span>
                    <span>·</span>
                    <span>{a.readTime}</span>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold leading-snug text-ink-900 text-balance">{a.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-600">{a.excerpt}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600">
                    Read article <Icon name="arrow" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
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

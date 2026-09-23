import { Seo } from "../components/Seo";
import { Reveal } from "../components/Reveal";

export function Legal({ title }: { title: string }) {
  return (
    <>
      <Seo title={title} description={`${title} — DanovaLab`} path={`/${title.toLowerCase().replace(" ", "-")}`} />
      <section className="relative overflow-hidden pt-32 pb-12 lg:pt-44 lg:pb-16">
        <div className="absolute inset-0 bg-grid opacity-30 mask-fade-b" aria-hidden />
        <div className="container-page relative">
          <Reveal>
            <span className="eyebrow">
              <span className="h-px w-6 bg-current opacity-60" />
              Legal
            </span>
            <h1 className="mt-6 text-display-lg font-bold text-ink-900">{title}</h1>
          </Reveal>
        </div>
      </section>
      <section className="container-page pb-20 lg:pb-28">
        <div className="mx-auto max-w-3xl">
          <div className="space-y-6 rounded-3xl border border-ink-200 bg-white p-8 lg:p-10 shadow-card">
            <p className="text-sm text-muted-500">Last updated: August 2026</p>
            <p className="text-base leading-relaxed text-ink-700">
              This is a placeholder {title.toLowerCase()} for DanovaLab. Replace this content with the final legal
              text reviewed by appropriate counsel before publishing. This document is provided here to demonstrate
              the structure and ensure the navigation links resolve to real pages.
            </p>
            <div className="space-y-4">
              {[1, 2, 3].map((n) => (
                <div key={n}>
                  <h2 className="font-display text-lg font-bold text-ink-900">Section {n}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-600">
                    Placeholder content for section {n}. The final version of this {title.toLowerCase()} will outline
                    the relevant terms, definitions, rights, responsibilities, and limitations that apply to the use
                    of DanovaLab's website and services.
                  </p>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-500">
              For questions about this document, contact{" "}
              <a href="mailto:hello@danovalab.com" className="text-brand-600 hover:text-brand-700">
                hello@danovalab.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

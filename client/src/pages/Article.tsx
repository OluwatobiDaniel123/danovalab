import {Link, useParams} from "react-router-dom";
import {Seo} from "../components/Seo";
import {Reveal} from "../components/Reveal";
import {Icon} from "../components/Icon";
import {ButtonLink} from "../components/Button";
import {CtaBand} from "../components/CtaBand";
import {insights} from "../data/content";

export function Article() {
    const {slug} = useParams();
    const article = insights.find((a) => a.slug === slug);

    if (!article) {
        return (
            <div className="container-page flex min-h-[60vh] flex-col items-center justify-center pt-32 text-center">
                <Seo title="Article Not Found" description="The requested article could not be found." />
                <h1 className="text-display-md font-bold text-ink-900">Article not found.</h1>
                <ButtonLink to="/insights" className="mt-8" iconLeft="arrow">
                    Back to Insights
                </ButtonLink>
            </div>
        );
    }

    const related = insights.filter((a) => a.slug !== article.slug).slice(0, 2);

    return (
        <>
            <Seo
                title={`${article.title}`}
                description={article.excerpt}
                path={`/insights/${article.slug}`}
                type="article"
            />

            <article className="relative overflow-hidden pt-32 pb-12 lg:pt-40 lg:pb-16">
                <div className="absolute inset-0 bg-grid opacity-30 mask-fade-b" aria-hidden />
                <div
                    className="absolute -top-40 left-1/2 h-96 w-[60rem] -translate-x-1/2 rounded-full bg-brand-100 blur-3xl"
                    aria-hidden
                />
                <div className="container-page relative">
                    <div className="mx-auto max-w-3xl">
                        <Reveal>
                            <Link
                                to="/insights"
                                className="inline-flex items-center gap-2 text-sm text-muted-600 transition-colors hover:text-ink-900"
                            >
                                <Icon name="arrow" className="h-4 w-4 rotate-180" />
                                All insights
                            </Link>
                            <div className="mt-6 flex items-center gap-3 text-xs text-muted-500">
                                <span className="rounded-full bg-brand-50 px-2.5 py-1 font-semibold text-brand-600">
                                    {article.category}
                                </span>
                                <span>·</span>
                                <span>{article.readTime}</span>
                                <span>·</span>
                                <time>
                                    {new Date(article.date).toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    })}
                                </time>
                            </div>
                            <h1 className="mt-5 text-display-md font-bold text-ink-900 text-balance">
                                {article.title}
                            </h1>
                            <p className="mt-3 text-base leading-relaxed text-muted-600 text-pretty">
                                {article.excerpt}
                            </p>
                        </Reveal>
                    </div>
                </div>
            </article>

            <section className="container-page pb-16">
                <div className="mx-auto max-w-3xl">
                    <Reveal>
                        <div className="relative h-64 overflow-hidden rounded-3xl border border-ink-200 bg-gradient-to-br from-ink-100 to-ink-200 shadow-card">
                            <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />
                            <div className="absolute inset-0 flex items-center justify-center p-8">
                                <span className="font-display text-3xl font-bold text-ink-700">{article.category}</span>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            <section className="container-page pb-10 lg:pb-10">
                <div className="mx-auto max-w-3xl">
                    <div className="space-y-10">
                        {article.content.map((section, i) => (
                            <Reveal key={i} delay={i * 0.03}>
                                <div>
                                    <h2 className="font-display text-lg font-bold text-ink-900 text-balance">
                                        {section.heading}
                                    </h2>
                                    <p className="mt-2 text-base leading-relaxed text-muted-600 text-pretty">
                                        {section.body}
                                    </p>
                                </div>
                            </Reveal>
                        ))}
                    </div>

                    <div className="mt-8 rounded-2xl border border-ink-200 bg-white p-4 shadow-card">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-500">Written by</p>
                        <p className="mt-2 font-display text-base font-bold text-ink-900">{article.author}</p>
                        <p className="mt-1 text-xs text-muted-600">DanovaLab — Technology company</p>
                    </div>
                </div>
            </section>

            {related.length > 0 && (
                <section className="container-page pb-20 lg:pb-28">
                    <div className="mx-auto max-w-3xl">
                        <h2 className="font-display text-lg font-bold text-ink-900">Keep reading</h2>
                        <div className="mt-6 grid gap-5 sm:grid-cols-2">
                            {related.map((a) => (
                                <Link
                                    key={a.slug}
                                    to={`/insights/${a.slug}`}
                                    className="group flex flex-col rounded-2xl border border-ink-200 bg-white p-4 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-glow"
                                >
                                    <span className="rounded-full bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-600 self-start">
                                        {a.category}
                                    </span>
                                    <h3 className="mt-2 font-display text-sm font-bold leading-snug text-ink-900 text-balance">
                                        {a.title}
                                    </h3>
                                    <span className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600">
                                        Read article{" "}
                                        <Icon
                                            name="arrow"
                                            className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                                        />
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <CtaBand
                title="Let's Build Something That Matters."
                secondaryLabel="Back to Insights"
                secondaryTo="/insights"
            />
        </>
    );
}

import {motion} from "framer-motion";
import {useReducedMotion} from "../hooks/useReducedMotion";

const technologies = ["React", "TypeScript", "Node.js", "Cloud"];

export function HeroVisual() {
    const reduce = useReducedMotion();

    const float = (delay = 0) =>
        reduce
            ? {}
            : {
                  animate: {y: [0, -7, 0]},
                  transition: {
                      duration: 4.5,
                      delay,
                      repeat: Infinity,
                      ease: "easeInOut" as const,
                  },
              };

    return (
        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            {/* =========================================================
          AMBIENT LIGHT
      ========================================================= */}
            <div
                className="absolute -inset-12 rounded-[4rem] bg-gradient-to-br from-brand-500/15 via-brand-400/5 to-accent-500/10 blur-3xl"
                aria-hidden
            />

            <motion.div
                initial={reduce ? false : {opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1}}
                className="pointer-events-none absolute inset-0"
                aria-hidden
            >
                <div className="absolute left-[10%] top-[18%] h-32 w-32 rounded-full bg-brand-500/10 blur-3xl" />
                <div className="absolute bottom-[10%] right-[8%] h-36 w-36 rounded-full bg-accent-500/10 blur-3xl" />
            </motion.div>

            {/* =========================================================
          ORBITAL DECORATION
      ========================================================= */}
            <motion.div
                animate={
                    reduce
                        ? undefined
                        : {
                              rotate: 360,
                          }
                }
                transition={{
                    duration: 28,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="pointer-events-none absolute -inset-8 hidden rounded-[3rem] border border-brand-500/[0.07] sm:block"
                aria-hidden
            >
                <span className="absolute left-[14%] top-[-3px] h-2 w-2 rounded-full bg-brand-500/50 shadow-[0_0_14px_rgba(59,107,255,0.45)]" />
            </motion.div>

            {/* =========================================================
          MAIN BUILD ENVIRONMENT
      ========================================================= */}
            <motion.div
                initial={reduce ? false : {opacity: 0, scale: 0.94, y: 18}}
                animate={{opacity: 1, scale: 1, y: 0}}
                transition={{
                    duration: 0.9,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="relative"
            >
                <div className="relative overflow-hidden rounded-[1.75rem] border border-ink-200/80 bg-white/90 shadow-[0_30px_80px_rgba(15,23,42,0.10)] backdrop-blur-xl">
                    {/* =====================================================
              WINDOW HEADER
          ===================================================== */}
                    <div className="flex h-12 items-center justify-between border-b border-ink-200/80 px-4">
                        <div className="flex items-center gap-2">
                            <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                            <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />

                            <div className="ml-3 hidden items-center gap-2 sm:flex">
                                <span className="font-mono text-[10px] text-muted-500">Danovalab</span>
                                <span className="text-muted-300">/</span>
                                <span className="font-mono text-[10px] text-muted-500">Digital-workspace</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 rounded-full border border-accent-200/80 bg-accent-50/70 px-2.5 py-1">
                            <motion.span
                                animate={
                                    reduce
                                        ? undefined
                                        : {
                                              opacity: [0.4, 1, 0.4],
                                          }
                                }
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                }}
                                className="h-1.5 w-1.5 rounded-full bg-accent-500"
                            />

                            <span className="font-mono text-[8px] font-medium tracking-wider text-accent-600">
                                BUILDING
                            </span>
                        </div>
                    </div>

                    {/* =====================================================
              CANVAS
          ===================================================== */}
                    <div className="relative min-h-[390px] overflow-hidden py-3 sm:p-6">
                        {/* Grid */}
                        <div
                            className="pointer-events-none absolute inset-0 opacity-[0.035]"
                            style={{
                                backgroundImage:
                                    "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
                                backgroundSize: "28px 28px",
                            }}
                            aria-hidden
                        />

                        {/* Radial center glow */}
                        <div
                            className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/[0.045] blur-3xl"
                            aria-hidden
                        />

                        {/* =================================================
                TITLE
            ================================================= */}
                        <div className="relative z-20 text-center">
                            <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-500">
                                Digital product
                            </p>

                            <h3 className="mt-1 capitalize font-display text-xl font-bold tracking-tight text-ink-900 sm:text-2xl">
                                From idea to launch.
                            </h3>
                        </div>

                        {/* =================================================
                CONNECTION SVG
            ================================================= */}
                        <svg
                            className="pointer-events-none absolute inset-0 z-10 h-full w-full"
                            viewBox="0 0 600 390"
                            preserveAspectRatio="none"
                            fill="none"
                            aria-hidden
                        >
                            <defs>
                                <linearGradient id="lineBlue" x1="0" y1="0" x2="1" y2="0">
                                    <stop offset="0%" stopColor="#3b6bff" stopOpacity="0" />
                                    <stop offset="50%" stopColor="#3b6bff" stopOpacity="0.45" />
                                    <stop offset="100%" stopColor="#3b6bff" stopOpacity="0" />
                                </linearGradient>

                                <linearGradient id="lineGreen" x1="0" y1="0" x2="1" y2="0">
                                    <stop offset="0%" stopColor="#22c55e" stopOpacity="0" />
                                    <stop offset="50%" stopColor="#22c55e" stopOpacity="0.4" />
                                    <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
                                </linearGradient>
                            </defs>

                            <motion.path
                                d="M55 210 C130 210 145 175 205 175"
                                stroke="url(#lineBlue)"
                                strokeWidth="1.2"
                                strokeDasharray="4 7"
                                animate={
                                    reduce
                                        ? undefined
                                        : {
                                              strokeDashoffset: [0, -40],
                                          }
                                }
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                            />

                            <motion.path
                                d="M395 175 C455 175 470 210 545 210"
                                stroke="url(#lineGreen)"
                                strokeWidth="1.2"
                                strokeDasharray="4 7"
                                animate={
                                    reduce
                                        ? undefined
                                        : {
                                              strokeDashoffset: [0, -40],
                                          }
                                }
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                            />
                        </svg>

                        {/* =================================================
                MAIN WEBSITE PREVIEW
            ================================================= */}
                        <motion.div
                            initial={reduce ? false : {opacity: 0, y: 12}}
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: 0.25, duration: 0.7}}
                            className="relative z-20 mx-auto mt-7 w-[82%] max-w-md"
                        >
                            <div className="overflow-hidden rounded-xl border border-ink-200 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.10)]">
                                {/* Browser bar */}
                                <div className="flex items-center justify-between border-b border-ink-100 px-3 py-2">
                                    <div className="flex items-center gap-1.5">
                                        <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                                        <span className="h-1.5 w-10 rounded-full bg-ink-100" />
                                    </div>

                                    <div className="h-1.5 w-20 rounded-full bg-ink-100" />
                                </div>

                                {/* Website */}
                                <div className="p-4">
                                    <div className="flex items-center justify-between">
                                        <div className="h-2.5 w-16 rounded-full bg-ink-900/80" />

                                        <div className="flex items-center gap-2">
                                            <span className="h-1.5 w-7 rounded-full bg-ink-100" />
                                            <span className="h-1.5 w-7 rounded-full bg-ink-100" />
                                            <span className="h-1.5 w-7 rounded-full bg-ink-100" />
                                        </div>
                                    </div>

                                    <div className="mt-5 grid grid-cols-5 gap-4">
                                        <div className="col-span-3">
                                            <div className="h-4 w-32 rounded-full bg-ink-900/85" />
                                            <div className="mt-2 h-2 w-40 rounded-full bg-ink-100" />
                                            <div className="mt-1.5 h-2 w-28 rounded-full bg-ink-100" />

                                            <div className="mt-4 flex gap-2">
                                                <div className="h-7 w-20 rounded-md bg-brand-500" />
                                                <div className="h-7 w-16 rounded-md border border-ink-200 bg-white" />
                                            </div>
                                        </div>

                                        <div className="col-span-2">
                                            <div className="h-24 rounded-xl bg-gradient-to-br from-brand-500/15 via-brand-500/5 to-accent-500/10" />
                                        </div>
                                    </div>

                                    <div className="mt-5 grid grid-cols-3 gap-2">
                                        <div className="h-11 rounded-lg bg-ink-50" />
                                        <div className="h-11 rounded-lg bg-brand-500/[0.06]" />
                                        <div className="h-11 rounded-lg bg-accent-500/[0.06]" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* =================================================
                LEFT FLOATING CARD — API
            ================================================= */}
                        <motion.div
                            {...float(0)}
                            className="absolute left-3 top-[47%] z-30 -translate-y-1/2 rounded-xl border border-ink-200 bg-white/95 px-3 py-2.5 shadow-[0_12px_30px_rgba(15,23,42,0.10)] backdrop-blur-md sm:block"
                        >
                            <div className="flex items-center gap-2.5">
                                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                                    <svg
                                        viewBox="0 0 24 24"
                                        className="h-3.5 w-3.5"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                    >
                                        <path d="M4 7h16M4 12h11M4 17h16" />
                                    </svg>
                                </span>

                                <div>
                                    <p className="font-mono text-[8px] uppercase tracking-widest text-muted-500">API</p>
                                    <p className="text-[10px] font-semibold text-ink-900">Connected</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* =================================================
                RIGHT FLOATING CARD — CLOUD
            ================================================= */}
                        <motion.div
                            {...float(1)}
                            className="absolute right-3 top-[47%] z-30 -translate-y-1/2 rounded-xl border border-ink-200 bg-white/95 px-3 py-2.5 shadow-[0_12px_30px_rgba(15,23,42,0.10)] backdrop-blur-md sm:block"
                        >
                            <div className="flex items-center gap-2.5">
                                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent-50 text-accent-600">
                                    <svg
                                        viewBox="0 0 24 24"
                                        className="h-3.5 w-3.5"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                    >
                                        <path d="M6 17h12M8 13h8M10 9h4M12 5v4" />
                                    </svg>
                                </span>

                                <div>
                                    <p className="font-mono text-[8px] uppercase tracking-widest text-muted-500">
                                        Cloud
                                    </p>
                                    <p className="text-[10px] font-semibold text-ink-900">Ready</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* =================================================
                TOP FLOATING CARD — CODE
            ================================================= */}
                        <motion.div
                            {...float(0.5)}
                            className="absolute right-[9%] top-[19%] z-30 rounded-xl border border-ink-200 bg-white/95 px-3 py-2 shadow-[0_12px_30px_rgba(15,23,42,0.08)] backdrop-blur-md sm:block"
                        >
                            <div className="flex items-center gap-2">
                                <span className="font-mono text-[9px] text-brand-600">{"</>"}</span>

                                <span className="font-mono text-[9px] text-ink-700">clean code</span>
                            </div>
                        </motion.div>

                        {/* =================================================
                BOTTOM STATUS
            ================================================= */}
                        <motion.div
                            initial={reduce ? false : {opacity: 0, y: 8}}
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: 0.65, duration: 0.5}}
                            className="relative z-20 mx-auto mt-3 flex w-fit items-center gap-2 rounded-full border border-ink-200 bg-white px-3 py-1.5 shadow-sm"
                        >
                            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-accent-50 text-accent-600">
                                <svg
                                    viewBox="0 0 24 24"
                                    className="h-2.5 w-2.5"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                >
                                    <path d="M5 12l5 5L20 7" />
                                </svg>
                            </span>

                            <span className="font-bold text-[10px] capitalize text-muted-500">production ready</span>
                        </motion.div>
                    </div>

                    {/* ==============1=======================================
              TECHNOLOGY STRIP
          ===================================================== */}
                    <div className="border-t border-ink-200/80 px-4 py-3">
                        <div className="flex items-center justify-center gap-1.5 sm:gap-2">
                            {technologies.map((tech, index) => (
                                <motion.div
                                    key={tech}
                                    initial={
                                        reduce
                                            ? false
                                            : {
                                                  opacity: 0,
                                                  y: 5,
                                              }
                                    }
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    transition={{
                                        delay: 0.45 + index * 0.08,
                                        duration: 0.4,
                                    }}
                                    className="rounded-full border border-ink-200 bg-ink-50/70 px-2.5 py-1.5 font-mono text-[8px] text-ink-700 sm:px-3 sm:text-[9px]"
                                >
                                    {tech}
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* =====================================================
              PIPELINE
          ===================================================== */}
                    <div className="border-t border-ink-200/80 px-4 py-3.5">
                        <div className="flex items-center justify-center gap-2 font-mono text-[8px] tracking-wider sm:gap-3 sm:text-[9px]">
                            <span className="text-muted-500">IDEA</span>
                            <span className="text-muted-300">→</span>
                            <span className="text-brand-600">DESIGN</span>
                            <span className="text-muted-300">→</span>
                            <span className="font-semibold text-ink-900">BUILD</span>
                            <span className="text-muted-300">→</span>
                            <span className="text-accent-600">LAUNCH</span>
                        </div>
                    </div>
                </div>

                {/* =======================================================
            BOTTOM LEFT — DANOVALAB SIGNATURE
        ======================================================= */}
                <motion.div
                    initial={reduce ? false : {opacity: 0, y: 12}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: 0.8, duration: 0.6}}
                    className="absolute -bottom-5 -left-4 rounded-xl border border-ink-200 bg-white/95 px-3.5 py-3 shadow-[0_14px_35px_rgba(15,23,42,0.10)] backdrop-blur-md sm:block"
                >
                    <div className="flex items-center gap-2.5">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink-900 text-white">
                            <span className="font-display text-xs font-bold">D</span>
                        </div>

                        <div>
                            <p className="font-mono text-[8px] uppercase tracking-widest text-muted-500">Built by</p>
                            <p className="text-xs font-semibold text-ink-900">DanovaLab</p>
                        </div>
                    </div>
                </motion.div>

                {/* =======================================================
            BOTTOM RIGHT — DEPLOYMENT
        ======================================================= */}
                <motion.div
                    initial={reduce ? false : {opacity: 0, y: 12}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: 0.95, duration: 0.6}}
                    className="absolute -bottom-5 -right-4 rounded-xl border border-ink-200 bg-white/95 px-3.5 py-3 shadow-[0_14px_35px_rgba(15,23,42,0.10)] backdrop-blur-md sm:block"
                >
                    <div className="flex items-center gap-2.5">
                        <span className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-accent-50 text-accent-600">
                            <span className="absolute h-2 w-2 rounded-full bg-accent-500 animate-ping opacity-30" />
                            <span className="relative h-1.5 w-1.5 rounded-full bg-accent-500" />
                        </span>

                        <div>
                            <p className="font-mono text-[8px] uppercase tracking-widest text-muted-500">Deployment</p>
                            <p className="text-xs font-semibold text-ink-900">Ready for launch</p>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}

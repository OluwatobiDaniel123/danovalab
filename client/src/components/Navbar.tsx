import {useEffect, useState} from "react";
import {Link, NavLink, useLocation} from "react-router-dom";
import {AnimatePresence, motion} from "framer-motion";
import {Icon} from "./Icon";
import {ButtonLink} from "./Button";
import {useReducedMotion} from "../hooks/useReducedMotion";
import logo from "../assets/logos/danovalabLogo.png";

const nav = [
    {label: "Home", to: "/"},
    {label: "Services", to: "/services"},
    {label: "Work", to: "/work"},
    {label: "Contact", to: "/contact"},
    {label: "Insight", to: "/insights"},
];

function Logo() {
    return (
        <Link to="/" className="flex items-center gap-2.5 group" aria-label="DanovaLab home">
            <img
                src={logo}
                alt="DANOVALAB"
                className="h-7 w-auto transition-transform duration-300 group-hover:scale-105"
            />
        </Link>
    );
}

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const location = useLocation();
    const reduce = useReducedMotion();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        onScroll();
        window.addEventListener("scroll", onScroll, {passive: true});
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        setOpen(false);
    }, [location.pathname]);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    const solid = scrolled || open;

    return (
        <>
            <header
                className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
                    solid
                        ? "bg-white/85 backdrop-blur-xl border-b border-ink-200 shadow-sm"
                        : "bg-transparent border-b border-transparent"
                }`}
            >
                <nav className="container-page flex h-16 items-center justify-between gap-4 lg:h-20">
                    <Logo />

                    <div className="hidden lg:flex items-center gap-1">
                        {nav.map((item) => (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                end={item.to === "/"}
                                className={({isActive}) =>
                                    `relative px-3.5 py-2 text-md font-bold transition-colors duration-200 ${
                                        isActive ? "text-brand-600" : "text-muted-600 hover:text-ink-900"
                                    }`
                                }
                            >
                                {({isActive}) => (
                                    <>
                                        {item.label}
                                        {isActive && (
                                            <motion.span
                                                layoutId="nav-active"
                                                className="absolute inset-x-3 -bottom-px h-0.5 bg-brand-500"
                                                transition={
                                                    reduce
                                                        ? {duration: 0}
                                                        : {type: "spring", stiffness: 380, damping: 30}
                                                }
                                            />
                                        )}
                                    </>
                                )}
                            </NavLink>
                        ))}
                    </div>

                    <div className="hidden lg:block">
                        <ButtonLink to="/contact" size="sm" iconRight="arrow">
                            Start a Project
                        </ButtonLink>
                    </div>

                    <button
                        className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg text-ink-800 hover:bg-ink-100 transition"
                        onClick={() => setOpen((v) => !v)}
                        aria-label={open ? "Close menu" : "Open menu"}
                        aria-expanded={open}
                    >
                        <Icon name={open ? "close" : "menu"} className="h-6 w-6" />
                    </button>
                </nav>
            </header>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        transition={{duration: 0.25}}
                        className="fixed inset-0 z-40 lg:hidden bg-white"
                    >
                        <div className="flex h-full flex-col px-6 pt-24 pb-10">
                            <div className="flex flex-col gap-1">
                                {nav.map((item, i) => (
                                    <motion.div
                                        key={item.to}
                                        initial={reduce ? false : {opacity: 0, x: -20}}
                                        animate={reduce ? undefined : {opacity: 1, x: 0}}
                                        transition={{delay: 0.05 + i * 0.04}}
                                    >
                                        <NavLink
                                            to={item.to}
                                            end={item.to === "/"}
                                            className={({isActive}) =>
                                                `flex items-center justify-between border-b border-ink-200 py-4 font-display text-base font-semibold transition-colors ${
                                                    isActive ? "text-brand-600" : "text-ink-900"
                                                }`
                                            }
                                        >
                                            {item.label}
                                            <Icon name="arrow" className="h-5 w-5 opacity-40" />
                                        </NavLink>
                                    </motion.div>
                                ))}
                            </div>
                            <div className="mt-auto">
                                <ButtonLink to="/contact" size="md" className="w-full" iconRight="arrow">
                                    Start a Project
                                </ButtonLink>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

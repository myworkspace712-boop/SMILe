import { useEffect, useState } from "react";
import { WHY_SMILE, ADVANTAGES, FAQS } from "../../Data/Solutions/personalCourier";
import { Link } from "react-router-dom";
import { MdArrowForward } from "react-icons/md";


// ── Sub-components ───────────────────────────────────────────────────────────
function FAQItem({ q, a }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="border-b border-blue-100 dark:border-zinc-700 py-4 hover:cursor-pointer">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex justify-between items-center text-left gap-4 group hover:cursor-pointer"
            >
                <span className="font-semibold text-blue-900 dark:text-zinc-300 text-sm md:text-base">
                    {q}
                </span>
                <span
                    className="text-orange-400 dark:text-orange-300 text-xl font-light flex shrink-0 transition-transform duration-300"
                    style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
                >
                    +
                </span>
            </button>
            {open && (
                <p className="mt-3 text-blue-700/70 dark:text-zinc-400 text-sm leading-relaxed pr-8">
                    {a}
                </p>
            )}
        </div>
    );
}


export function AdvantagesCarousel({ items }) {
    const [current, setCurrent] = useState(0);
    const [hovered, setHovered] = useState(false);
    const [isChanging, setIsChanging] = useState(false);

    const maxIndex = items.length - 1;

    useEffect(() => {
        setIsChanging(true);
        const timer = setTimeout(() => setIsChanging(false), 500);
        return () => clearTimeout(timer);
    }, [current]);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((c) => (c >= maxIndex ? 0 : c + 1));
        }, 5000);
        return () => clearInterval(timer);
    }, [maxIndex]);


    return (
        <div
            className="relative max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* Cards */}
            <div className="relative overflow-hidden rounded-2xl">
                <div
                    className="flex transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    style={{ transform: `translateX(-${current * 100}%)` }}
                >
                    {items.map(({ icon: Icon, title, desc }) => (
                        <div
                            key={title}
                            className="w-full shrink-0 px-2 flex"
                        >
                            <div className="w-full group rounded-2xl border border-blue-300/65 dark:border-zinc-500/80
                                 hover:border-blue-300 dark:hover:border-orange-300/55 p-6 sm:p-8 lg:p-10
                                 bg-blue-100 dark:bg-zinc-800 transition-all duration-300 flex flex-col justify-between"
                            >
                                <div>
                                    <div className="w-12 h-12 rounded-xl bg-blue-50/80 dark:bg-zinc-700 border border-blue-300/65 group-hover:border-blue-300
                                      dark:border-orange-300/45 dark:group-hover:border-orange-300/55 flex items-center justify-center mb-5">
                                        <Icon className="text-blue-900 dark:text-orange-300 w-6 h-6" />
                                    </div>
                                    <h3 className="font-display font-bold text-blue-800 dark:text-zinc-300 mb-2 text-base sm:text-lg lg:text-xl">
                                        {title}
                                    </h3>
                                    <p className="text-blue-600/80 dark:text-zinc-400 text-sm leading-relaxed">{desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            {/* Dots */}
            <div className="flex justify-center gap-2 mt-5 hover:cursor-pointer">
                {Array.from({ length: maxIndex + 1 }).map((_, i) => {
                    const isActive = i === current;
                    return (
                        <button
                            key={i}
                            onClick={() => setCurrent(i)}
                            className={`rounded-full transition-all duration-300 hover:cursor-pointer
                           ${isActive
                                    ? (isChanging ? "w-6 h-2 bg-blue-300 dark:bg-zinc-400" : "w-2 h-2 bg-blue-300 dark:bg-zinc-400")
                                    : "w-2 h-2 bg-blue-200 dark:bg-zinc-500"
                                }`}
                        />
                    );
                })}
            </div>
        </div>
    );
}


// ── Page ─────────────────────────────────────────────────────────────────────
export default function PersonalCourier() {

    return (
        <div className="dark:bg-zinc-950 text-zinc-800 dark:text-zinc-200">

            {/* ── Hero ── */}
            <section className="relative overflow-hidden dark:bg-zinc-950 mt-16 pt-35 pb-0"

                style={{
                    backgroundImage: "url('/Solutions/PerCou/heropc.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >

                {/* gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-blue-950/60 via-blue-200/60 to-transparent dark:from-zinc-900/70 dark:via-zinc-600/70 pointer-events-none" />

                <div className="grid grid-cols-1">

                    {/* Left */}
                    <div className="relative z-10 w-full mx-auto px-4 sm:px-6 py-20 flex">

                        {/* Left */}
                        <div className="">
                            <span className="text-orange-400 dark:text-orange-300 font-semibold text-sm tracking-widest uppercase mb-4 font-display">
                                Personal Courier
                            </span>
                            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 dark:text-zinc-300 leading-tight mb-6">
                                Send Personal Packages With Ease <span className="text-orange-400 dark:text-orange-300 flex gap-4">Through <img src="/Logos/SMILe_Logo.png" alt="" className="h-16 w-22 sm:h-17 sm:w-24 md:h-19 md:w-29" /></span>

                            </h1>
                            <span className="text-blue-50 dark:text-zinc-300/70 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
                                With SMILe, you can ship personal packages of up to 10 kgs across Bharat with confidence. Whether it's documents, gifts, or essentials, SMILe provides a seamless shipping experience
                                with tracking, reliability and secure delivery to any location.
                            </span>
                            <br />
                            <Link
                                to="/ebookings/"
                                className="group mt-5 inline-flex items-center gap-2 bg-orange-400 dark:bg-zinc-800 active:bg-orange-500 dark:active:bg-zinc-700 text-white/95 dark:text-zinc-300/90 border border-white/45 dark:border-zinc-600/70 font-bold px-4 py-3 rounded-full transition-all duration-300 hover:shadow-lg"
                            >
                                Ship Personal Courier
                                <span className="group-hover:translate-x-1 transition-all duration-200"><MdArrowForward /></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Why SMILe ── */}
            <section className="py-20 dark:bg-zinc-950">
                <div className="max-w-[1220px] mx-auto px-6">
                    <div className="mb-12 text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 border border-blue-300/90 dark:bg-zinc-700/60 text-blue-800 dark:text-zinc-300/90 dark:border-zinc-500/70 text-xs font-bold tracking-widest mb-4">
                            WHY SMILe
                        </span>
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-blue-900 dark:text-white mt-2">
                            Why Choose <span className="text-orange-400 dark:text-orange-300">SMILe</span> For <span className="text-orange-400 dark:text-orange-300">Personal</span> Shipping
                        </h2>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {WHY_SMILE.map(({ icon: Icon, img, title, desc }) => (
                            <div
                                key={title}
                                className="flex flex-col"
                            >
                                <div className="group bg-white flex flex-col flex-1 dark:bg-zinc-800 border border-blue-200 dark:border-zinc-600 hover:border-blue-300 dark:hover:border-orange-300/60 rounded-2xl overflow-hidden mb-6 hover:shadow-lg transition-all hover:-translate-y-1 duration-300">

                                    <div className="flex justify-center p-6 h-48 bg-blue-50/60 dark:bg-zinc-400 w-full">
                                        <img
                                            src={img}
                                            alt={title}
                                            className="object-contain"
                                            onError={(e) => e.currentTarget.style.display = "none"}
                                        />
                                    </div>

                                    <div className="p-6 flex flex-col gap-4 bg-blue-100/90 dark:bg-zinc-800 border-t border-blue-200 dark:border-zinc-600 dark:group-hover:border-orange-300/70 hover:border-blue-300 flex-1">
                                        <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-zinc-700 border border-blue-300/70 dark:border-orange-300/50 group-hover:border-blue-300 dark:group-hover:border-orange-300/60 flex items-center justify-center mb-4">
                                            <Icon className="text-blue-800 dark:text-orange-300 w-6 h-6" />
                                        </div>
                                        <h3 className="font-display font-bold text-blue-800 dark:text-zinc-300 mb-2 text-base">
                                            {title}
                                        </h3>
                                        <p className="text-blue-600/70 dark:text-zinc-400 text-sm leading-relaxed">{desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <br />

                    <Link
                        to="/personal-ebookings/"
                        className="group inline-flex items-center gap-2 bg-orange-400 dark:bg-zinc-800 active:bg-orange-500 dark:active:bg-zinc-700 text-white dark:text-zinc-300/90 border border-white/45 dark:border-zinc-600/80 font-bold px-4 py-3 rounded-full transition-all duration-300 active:scale-90"
                    >
                        Personal Shipping
                        <span className="group-hover:translate-x-1 transition-all duration-200"><MdArrowForward /></span>
                    </Link>
                </div>
            </section>

            {/* ── Advantages ── */}
            <section className="py-20 bg-blue-50 dark:bg-zinc-900">
                <div>
                    <div className="text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 border border-blue-300/90 dark:bg-zinc-700/60 text-blue-800 dark:text-zinc-300/90 dark:border-zinc-500/70 text-xs font-bold tracking-widest uppercase mb-4">
                            ADVANTAGES
                        </span>
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-blue-900 dark:text-zinc-300 mt-2 mb-10">
                            Experience <span className="text-orange-400 dark:text-orange-300">Unmatched</span> Ease With <span className="text-orange-400 dark:text-orange-300">SMILe</span>
                        </h2>
                    </div>

                    <AdvantagesCarousel items={ADVANTAGES} />

                </div>
            </section>

            {/* ── FAQ ── */}
            <section className="py-20 dark:bg-zinc-950">
                <div className="max-w-[1220px] mx-auto px-4 sm:px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-start">
                        {/* Left */}
                        <div className="lg:sticky lg:top-28 text-left">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100/80 dark:bg-zinc-700/60 text-blue-800 dark:text-zinc-300/90 border border-blue-300/90 dark:border-zinc-600 text-xs font-bold tracking-widest uppercase mb-4">
                                FAQ
                            </span>
                            <h2 className="font-display font-extrabold text-blue-900 dark:text-zinc-300 text-2xl sm:text-4xl xl:text-5xl leading-tight mb-4">
                                Questions<span className="text-orange-400 dark:text-orange-300">?</span>
                            </h2>
                            <p className="text-blue-600/90 dark:text-zinc-400 text-sm sm:text-base leading-relaxed mb-6">
                                We're glad you asked.
                            </p>
                        </div>

                        {/* Right */}
                        <div className="flex flex-col gap-3 hover:cursor-pointer">
                            {FAQS.map((item) => (
                                <FAQItem key={item.q} {...item} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
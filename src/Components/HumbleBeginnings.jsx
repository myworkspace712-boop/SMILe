import { STATS } from "../Data/siteData.js";
import { useEffect, useRef, useState } from "react";


function useCountUp(target, duration = 2000) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) return;
                observer.disconnect();
                const numeric = parseInt(target.replace(/\D/g, ""));
                const steps = 60;
                const increment = numeric / steps;
                let current = 0;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= numeric) {
                        setCount(numeric);
                        clearInterval(timer);
                    } else {
                        setCount(Math.floor(current));
                    }
                }, duration / steps);
            },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [target, duration]);

    return { count, ref };
}


function StatCard({ num, suffix, label, index, total }) {
    const { count, ref } = useCountUp(num);

    return (
        <div
            ref={ref}
            className={`flex flex-col items-center justify-center gap-2 py-10 sm:py-14
                  transition-all duration-300
                  ${index !== total - 1
                    ? "border-r border-blue-300 dark:border-orange-300/50"
                    : ""}`}
        >
            <span className="font-display font-extrabold text-3xl sm:text-4xl xl:text-5xl
                       text-blue-900 dark:text-zinc-300 leading-none">
                {count}<span className="text-orange-400 dark:text-orange-300">{suffix}</span>
            </span>
            <span className="text-gray-600 dark:text-zinc-400 text-xs sm:text-sm text-center px-2">
                {label}
            </span>
        </div>
    );
}


export default function HumbleBeginnings() {
    return (
        <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900">
            <div className="max-w-[1220px] mx-auto px-4 sm:px-6">

                {/* Heading */}
                <div className="mb-10 sm:mb-14">
                    <h2 className="font-display font-extrabold text-blue-900 dark:text-zinc-300
                         text-3xl sm:text-5xl xl:text-6xl leading-tight mb-4 max-w-2xl">
                        From Humble Beginnings to{" "}
                        <span className="text-orange-400 dark:text-orange-300">Global Excellence</span>
                    </h2>
                    <p className="text-gray-600 dark:text-zinc-400 text-sm sm:text-base max-w-xl leading-relaxed">
                        SMILe has been built keeping our users in mind. Our dedication to attention to
                        detail ensures hassle-free logistics at all times.
                    </p>
                </div>


                {/* Stats grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4
                        border border-blue-300 dark:border-orange-300/50 rounded-2xl overflow-hidden">
                    {STATS.map(({ num, suffix, label }, i) => (
                        <StatCard
                            key={label}
                            num={num}
                            suffix={suffix}
                            label={label}
                            index={i}
                            total={STATS.length}
                        >
                        </StatCard>

                    ))}

                </div>

            </div>
        </section >
    );
}
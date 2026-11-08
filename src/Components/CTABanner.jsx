import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const CTA_IMAGES = [
  "/News/ET_Auto_Copy.jpg",
  "/News/FirstIndia_Copy.jpg",
  "/News/ForbesID_Copy.jpg",
  "/News/FirstIndia2_Copy.jpg",
  "/News/The_Economic_Times_Copy.jpg",
  "/News/Indian_Transport_Logistics_Copy.jpg",
];


export default function CTABanner() {


  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setCurrent((p) => (p + 1) % CTA_IMAGES.length);
    }, 3500);
    return () => clearInterval(t);
  }, []);


  return (
    <section className="relative py-16 sm:py-20 overflow-hidden
                        bg-linear-to-r from-blue-200/90 to-blue-400/90 dark:from-zinc-700 dark:to-zinc-800">

      <div className="absolute -left-24 -top-24 w-80 h-80 rounded-full bg-white/13 dark:bg-white/8 pointer-events-none" />
      <div className="absolute -right-12 -bottom-20 w-64 h-64 rounded-full bg-black/8 dark:bg-black/15 pointer-events-none" />

      <div className="relative z-10 max-w-[1220px] mx-auto px-4 sm:px-6
                      flex flex-col sm:flex-row items-start md:items-center justify-between gap-8">
        <div className="max-w-xl">
          <h2 className="font-display font-extrabold text-blue-800 dark:text-zinc-300 text-2xl sm:text-3xl lg:text-4xl
                         leading-tight mb-3">
            Join the <span className="text-orange-400 dark:text-orange-300">Movement! </span>
            <span className="block sm:inline">Let's <span className="text-orange-400 dark:text-orange-300">Grow</span> Together</span>
          </h2>
          <p className="text-blue-900 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
            Our network of 68,000 partners form the backbone and brain of SMILe across Bharat. They have helped us build a strong SMILe family over four decades.
            Fill out the form today and become a part of our family.
          </p>
          <br />
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link
              to=""
              className="inline-flex items-center gap-1.5 hover:gap-2.5 px-5 sm:px-6 py-3 rounded-full
                         bg-white/90 dark:bg-neutral-600/80 border border-orange-400/40 dark:border-orange-300/40 text-orange-400 dark:text-orange-300 text-sm font-bold shadow-md
                         hover:bg-orange-50 active:scale-90 transition-all duration-300 no-underline"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Right — carousel */}
        <div className="hidden xl:block shrink-0 -mr-16 self-stretch">
          <div className="relative h-full min-h-[280px] w-[515px] rounded-2xl overflow-hidden shadow-xl group">
            {CTA_IMAGES.map((img, i) => (
              <img
                key={i}
                src={img}
                alt=""
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700
                            ${i === current ? "opacity-100" : "opacity-0"}`}
                onError={(e) => e.currentTarget.style.display = "none"}
              />
            ))}

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-r from-black/10 dark:from-black/10 to-black/15" />

            {/* Dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
              {CTA_IMAGES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-300
                              ${i === current
                      ? "w-5 h-1.5 bg-blue-200 dark:bg-orange-300"
                      : "w-1.5 h-1.5 bg-blue-50 dark:bg-orange-100 hover:bg-blue-200 dark:hover:bg-orange-300"}`}
                />
              ))}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
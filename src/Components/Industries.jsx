import { useEffect, useRef, useState } from "react";
import { INDUSTRIES } from "../Data/siteData.js";


// Real industry images from shreemaruti.com
const INDUSTRY_IMAGES = {
  "Ecommerce": "/SMILe_Mango_Banner.jpg",
  "Gems & Jewelry": "https://shreemaruti.com/wp-content/uploads/2023/08/industry-gems.webp",
  "Automobiles": "https://shreemaruti.com/wp-content/uploads/2023/08/industry-auto.webp",
  "Agriculture": "https://shreemaruti.com/wp-content/uploads/2023/08/industry-agriculture.webp",
  "Manufacturing": "https://shreemaruti.com/wp-content/uploads/2023/08/industry-manufacturing.webp",
  "Food & Beverages": "https://shreemaruti.com/wp-content/uploads/2023/08/industry-food.webp",
  "Fashion & Apparel": "https://shreemaruti.com/wp-content/uploads/2023/08/industry-fashion.webp",
  "Electronics": "https://shreemaruti.com/wp-content/uploads/2023/08/industry-electronics.webp",
};


export function IndustryCarousel() {
  
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [dragging, setDragging] = useState(false);
  const dragStartX = useRef(0);
  
  const holdRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      if (paused) return;
      setCurrent((prev) => (prev + 1) % INDUSTRIES.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [paused]);

  return (
    <div className="relative overflow-hidden rounded-2xl"
      // {/* // On the outer container div, replace/add these: */ }
      onMouseDown={(e) => {
        holdRef.current = setTimeout(() => {
          setPaused(true);
          setDragging(true);
          dragStartX.current = e.clientX;
        }, 300); // hold for 300ms to activate
      }}
      onMouseUp={(e) => {
        clearTimeout(holdRef.current);
        if (!dragging) return;
        setDragging(false);
        setPaused(false);
        const diff = dragStartX.current - e.clientX;
        if (diff > 50) setCurrent((prev) => (prev + 1) % INDUSTRIES.length);
        if (diff < -50) setCurrent((prev) => (prev - 1 + INDUSTRIES.length) % INDUSTRIES.length);
      }}
      onMouseMove={(e) => {
        if (!dragging) return;
        const diff = dragStartX.current - e.clientX;
        if (diff > 50) { setCurrent((prev) => (prev + 1) % INDUSTRIES.length); dragStartX.current = e.clientX; }
        if (diff < -50) { setCurrent((prev) => (prev - 1 + INDUSTRIES.length) % INDUSTRIES.length); dragStartX.current = e.clientX; }
      }}
      onMouseLeave={() => {
        clearTimeout(holdRef.current);
        setDragging(false);
        setPaused(false);
      }}
      onTouchStart={(e) => {
        dragStartX.current = e.touches[0].clientX;
        holdRef.current = setTimeout(() => {
          setPaused(true);
          setDragging(true);
        }, 300);
      }}
      onTouchMove={(e) => {
        if (!dragging) return;
        const diff = dragStartX.current - e.touches[0].clientX;
        if (diff > 50) { setCurrent((prev) => (prev + 1) % INDUSTRIES.length); dragStartX.current = e.touches[0].clientX; }
        if (diff < -50) { setCurrent((prev) => (prev - 1 + INDUSTRIES.length) % INDUSTRIES.length); dragStartX.current = e.touches[0].clientX; }
      }}
      onTouchEnd={() => {
        clearTimeout(holdRef.current);
        setDragging(false);
        setPaused(false);
      }}
      onTouchCancel={() => {
        clearTimeout(holdRef.current);
        setDragging(false);
        setPaused(false);
      }}
    >
      <div
        className={`flex transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] select-none ${dragging ? "cursor-grabbing" : paused ? "cursor-grab" : "cursor-default"}`}
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {INDUSTRIES.map(({ name, desc }) => (
          <div
            key={name}
            className="shrink-0 w-full relative h-[260px] sm:h-[320px] md:h-[380px] lg:h-[440px]"
          >
            <img
              src={INDUSTRY_IMAGES[name]}
              alt={name}
              className="w-full h-full object-cover opacity-70"
              onError={(e) => e.currentTarget.style.display = "none"}
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/45 via-black/25 to-black/5 dark:from-white/40 dark:via-white/25 dark:to-white/5 " />
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 z-10">
              <h4 className="font-display font-bold text-white/90 dark:text-zinc-200 text-lg sm:text-xl mb-1">{name}</h4>
              <p className="text-white/70 dark:text-zinc-300 text-sm leading-relaxed line-clamp-2">{desc}</p>
            </div>
          </div>
        ))}
      </div>


      {/* Dots */}
      <div className="absolute bottom-3 right-5 z-20 flex gap-1.5">
        {INDUSTRIES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all duration-300
                        ${i === current
                ? "w-5 h-1.5 bg-white"
                : "w-1.5 h-1.5 bg-white/50 hover:bg-white/80"
              }`}
          />
        ))}
      </div>
    </div>
  );
}


export default function Industries() {
  return (
    <section className="py-16 sm:py-24 dark:bg-zinc-900">
      <div className="max-w-[1220px] mx-auto px-4 sm:px-6">

        <div className="text-center mb-10 sm:mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-300/80 dark:border-zinc-500 backdrop-blur-md dark:bg-zinc-700/70 dark:text-zinc-300/90 text-blue-800
                           text-xs font-bold tracking-widest uppercase mb-4">
            Industries Served
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl xl:text-5xl text-blue-800 dark:text-zinc-300
                         leading-tight mb-4">
            Powering Every <p className="text-orange-400 dark:text-orange-300">Sector</p>
          </h2>
          <p className="text-gray-700/90 dark:text-zinc-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Regardless of your industry, commodity or key markets, SMILe offers global
            and local logistics solutions that enable small and large businesses to grow.
          </p>
        </div>

        <IndustryCarousel />

      </div>
    </section>
  );
}
import { useEffect, useState } from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { MdArrowForward, MdLocationOn } from "react-icons/md";


const SLIDES = [
  { img: "SMILe_Mango_Banner.jpg", path: "" },
  { img: "/images/slide2.jpg", path: "" },
  { img: "/images/slide3.jpg", path: "" },
  { img: "/images/slide4.jpg", path: "" },
  { img: "/images/slide5.jpg", path: "" },
  { img: "/images/slide6.jpg", path: null }, // no link
];


export default function Hero() {

  const [awb, setAwb] = useState("");
  const [error, setError] = useState("");

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const handleTrack = (e) => {
    e.preventDefault();
    if (!awb.trim()) { setError("Please enter a valid AWB number."); return; }
    setError("");
  };

  return (

    <section className="relative overflow-hidden bg-white dark:bg-linear-to-br dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 min-h-screen">


      {/* Dark overlay so content is readable */}
      <div className="absolute inset-0 dark:bg-zinc-900" />

      {/* ── Content overlay ── */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 min-h-screen items-stretch">

        {/* ── Left: headline + cards ── */}
        <div className="flex flex-col gap-5 justify-center
                        text-center lg:text-left py-12 lg:py-16 lg:pr-10 order-2 lg:order-1 max-w-2xl mx-auto lg:mx-0 w-full">

          {/* Badge */}
          <div className="flex justify-center mb-9 xl:ml-20">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full w-fit
                             bg-blue-50 dark:bg-zinc-700/70 border border-blue-300/80 dark:border-zinc-500/80
                             text-blue-800 dark:text-orange-300/90 text-xs font-bold tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-orange-300 animate-pulse" />
              India's Fastest Logistics Network
            </span>
          </div>

          {/* Mobile */}
          <div className="text-center mb-9 -mt-8 xl:ml-20">
            <h1 className="font-display font-extrabold text-blue-900 dark:text-zinc-300 text-2xl sm:text-3xl leading-tight mb-2">
              Gladly Made in India,
              <span className="text-orange-400 dark:text-orange-300"> Delivered to the World</span>
            </h1>
            <p className="text-blue-700/80 dark:text-zinc-400 text-sm leading-relaxed">
              40+ years of trusted logistics across Bharat and beyond.
            </p>
          </div>

          {/* ── Right: full-height carousel ── */}
          <div className="hidden lg:block lg:absolute lg:right-0 lg:top-0 lg:bottom-0 lg:w-1/2 overflow-hidden group">

            {SLIDES.map((s, i) => (
              <img
                key={i}
                src={s.img}
                alt={`Slide ${i + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700
                            ${i === current ? "opacity-100" : "opacity-0"}`}
              />
            ))}

            <div className="absolute inset-0 bg-black/10" />

            {/* Prev */}
            <button
              onClick={() => setCurrent((p) => (p - 1 + SLIDES.length) % SLIDES.length)}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full
                         bg-white/40 hover:cursor-pointer backdrop-blur-md border border-white/50
                         flex items-center justify-center text-white text-xl font-bold
                         transition-all duration-200 opacity-0 group-hover:opacity-100"
            >‹</button>

            {/* Next */}
            <button
              onClick={() => setCurrent((p) => (p + 1) % SLIDES.length)}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full
            bg-white/40 hover:cursor-pointer backdrop-blur-md border border-white/30
            flex items-center justify-center text-white text-xl font-bold
            transition-all duration-200 opacity-0 group-hover:opacity-100"
            >›</button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-300
                  ${i === current ? "w-5 h-1.5 bg-white" : "w-1.5 h-1.5 bg-white/50 hover:bg-white/80"}`}
                />
              ))}
            </div>
          </div>

          {/* Track card */}
          <div className="flex flex-col gap-5 items-center">
            <div className="bg-blue-900 dark:bg-zinc-800 backdrop-blur-xl border dark:border-white/18 rounded-3xl p-5 sm:p-6 shadow-xl w-110 sm:w-140 md:w-120 xl:w-150 md:ml-7 xl:ml-20">
              <h3 className="font-display text-center font-bold text-white/88 dark:text-zinc-300 text-lg sm:text-xl mb-1">
                Track Your Order
              </h3>
              <p className="text-white/65 dark:text-zinc-400 text-sm mb-5 text-center">
                Enter your AWB number to get live shipment updates.
              </p>
              <form onSubmit={handleTrack} className="flex flex-col gap-3">
                <div className="flex items-center gap-0 rounded-full overflow-hidden
                                border border-white/30 dark:border-white/15 bg-white/10 backdrop-blur-md">
                  <div className="flex items-center gap-2 px-4 py-3 flex-1 min-w-0">
                    <TbTruckDelivery className="w-4 h-4 text-white/70 shrink-0" />
                    <input
                      value={awb}
                      onChange={(e) => { setAwb(e.target.value); setError(""); }}
                      placeholder="Enter AWB Number"
                      className="bg-transparent border-none outline-none text-xs placeholder:text-white/50 w-full min-w-0"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-orange-400 dark:bg-orange-300 active:bg-orange-600 dark:active:bg-orange-400
                    transition-colors duration-200 text-white dark:text-neutral-700 text-sm font-bold
                    px-5 sm:px-6 py-3 cursor-pointer shrink-0"
                  >
                    Track
                  </button>
                </div>
                {error && <p className="text-red-400 text-xs px-1">{error}</p>}
              </form>
            </div>

            {/* Branch locator card */}
            <div className="bg-blue-900 dark:bg-zinc-800 backdrop-blur-lg border dark:border-white/18
                      rounded-3xl p-4 sm:p-5 lg:p-6 w-110 sm:w-140 md:w-120 xl:w-150 md:ml-7 xl:ml-20 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 min-w-0">
                <MdLocationOn className="w-7 h-7 text-orange-400 dark:text-orange-300" />
                <div>
                  <h4 className="font-display font-bold text-left text-white/88 dark:text-zinc-300 text-sm sm:text-base">Branch Locator</h4>
                  <p className="text-white/65 dark:text-zinc-400 text-xs">Find your nearest SMILe outlet.</p>
                </div>
              </div>

              <a
                href=""
                className="shrink-0 inline-flex items-center gap-1.5 px-3 sm:px-4 py-2.5
                rounded-full bg-white/12 dark:bg-neutral-700/80 active:bg-white/45 border border-white/25
                dark:border-neutral-500 text-white dark:text-zinc-300 text-xs font-semibold transition-all duration-300
                hover:scale-105 active:scale-95 no-underline whitespace-nowrap"
              >
                Find Locator <MdArrowForward className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
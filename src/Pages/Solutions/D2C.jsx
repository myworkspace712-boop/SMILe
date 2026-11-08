import { MdArrowForward } from "react-icons/md";
import { ADVANTAGES, SOLUTIONS, FOR_WHOM } from "../../Data/Solutions/d2c";
import { Link } from "react-router-dom";


// ── Components ─────────────────────────────────────────────────────────────────
export function ForWhomCard({ img, label, tall }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className={`w-full rounded-2xl overflow-hidden bg-blue-50 dark:bg-zinc-800 border border-blue-100 dark:border-zinc-700 ${tall ? "h-64 sm:h-80" : "h-44 sm:h-52"}`}>
        <img
          src={img}
          alt={label}
          className="w-full h-full object-cover"
          onError={(e) => e.currentTarget.style.display = "none"}
        />
      </div>
      <span className="font-display font-bold text-blue-950 dark:text-white text-sm text-center">{label}</span>
    </div>
  );
}


// ── Main Page ─────────────────────────────────────────────────────────────────
export default function D2C() {

  return (

    <div className="bg-white dark:bg-zinc-950">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden dark:bg-zinc-950 mt-17 pt-35 pb-0"

        style={{
          backgroundImage: "url('https://shreemaruti.com/wp-content/uploads/2024/11/Frame-2087327255.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        {/* gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-blue-950/60 via-blue-200/60 to-transparent dark:from-zinc-900/70 dark:via-zinc-600/70 pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Left */}
          <div className="relative z-10 max-w-[1220px] mx-auto px-4 sm:px-6 py-20 flex flex-col gap-6">

            {/* <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-orange-500/20 text-blue-800 dark:text-orange-300 text-xs font-bold tracking-widest uppercase w-fit">
                D2C Solutions
              </span> */}

            <h1 className="font-display font-extrabold text-blue-800 dark:text-zinc-300 text-3xl sm:text-4xl xl:text-5xl leading-tight">
              Empowering D2C Brands{" "}
              <span className="text-orange-400 dark:text-orange-300">With SMILe</span>
            </h1>

            <p className="text-blue-600/70 dark:text-zinc-300/70 text-base leading-relaxed max-w-lg">
              End-to-end logistics tailored for D2C brands. SMILe makes it simple to reach customers across Bharat and beyond with reliable, tech-powered fulfillment.
            </p>

            <div>
              <Link
                to="/contact-us"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/42 dark:border-zinc-500/76
                             bg-orange-400 dark:bg-zinc-800 active:bg-orange-600 active:dark:bg-zinc-700 text-white/88 dark:text-zinc-300/90 text-sm font-bold
                             shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 no-underline"
              >
                Get Started with SMILe <MdArrowForward className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Solutions ── */}
      <section className="py-16 sm:py-24 bg-blue-50 dark:bg-zinc-900">

        <div className="max-w-[1220px] mx-auto px-4 sm:px-6">

          <div className="mb-10 sm:mb-14 text-center">

            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 border border-blue-300/90 dark:bg-zinc-700/60 text-blue-800 dark:text-zinc-300/90 dark:border-zinc-500/80 text-xs font-bold tracking-widest uppercase mb-4">
              Our Solutions
            </span>
            <h2 className="font-display font-extrabold text-blue-800 dark:text-zinc-300 text-2xl sm:text-4xl xl:text-5xl leading-tight">
              Our Solutions For{" "}
              <span className="text-orange-400 dark:text-orange-300">Seamless Fulfilment</span>
            </h2>
          </div>

          {/* Warehousing — full-width feature row */}
          <div className="bg-white dark:bg-zinc-800 border border-blue-200 dark:border-zinc-600 hover:border-blue-300 dark:hover:border-zinc-500/80 rounded-2xl overflow-hidden mb-6 hover:shadow-lg transition-all hover:-translate-y-1 duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-0">
              <div className="flex justify-center p-6 bg-blue-50/50 dark:bg-zinc-700/30">
                <img
                  src="https://shreemaruti.com/wp-content/uploads/2024/11/Frame-427321346.png"
                  alt="Warehousing"
                  className="w-52 sm:w-64 object-contain"
                  onError={(e) => e.currentTarget.style.display = "none"}
                />
              </div>
              <div className="p-8 lg:p-10 flex flex-col gap-4 bg-blue-100/90 dark:bg-zinc-800 border-t border-blue-200 dark:border-zinc-600 dark:hover:border-zinc-500/80 hover:border-blue-300">
                <h3 className="font-display font-bold text-blue-800 dark:text-zinc-300 text-lg sm:text-xl">
                  Warehousing & Inventory Management
                </h3>
                <ul className="flex flex-col gap-2">
                  {["Nationwide network for faster deliveries", "Intelligent stock placement to cut transit times"].map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-blue-700/80 dark:text-zinc-400 text-sm leading-relaxed">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-400 dark:bg-orange-300 shrink-0" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Other 4 solutions — 2x2 grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">
            {SOLUTIONS.slice(1).map(({ img, title, points }) => (
              <div
                key={title}
                className="bg-white dark:bg-neutral-800 border border-blue-200 dark:border-zinc-600 hover:border-blue-300 dark:hover:border-zinc-500/80
                           rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="h-44 overflow-hidden">
                  <img
                    src={img}
                    alt={title}
                    className="w-full h-full object-cover"
                    onError={(e) => e.currentTarget.style.display = "none"}
                  />
                </div>
                <div className="p-6 flex flex-col gap-3 bg-blue-100/90 dark:bg-zinc-800 border-t border-blue-200 hover:border-blue-300 dark:border-zinc-600 dark:hover:border-zinc-500/80">
                  <h3 className="font-display font-bold text-blue-800 dark:text-zinc-300 text-base">{title}</h3>
                  <ul className="flex flex-col gap-1.5">
                    {points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2 text-blue-700/70 dark:text-zinc-400 text-sm leading-relaxed">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-400 dark:bg-orange-300 shrink-0" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── For Whom ── */}
      <section className="py-16 sm:py-24 bg-white dark:bg-zinc-950">
        <div className="max-w-[1220px] mx-auto px-4 sm:px-6">

          <div className="mb-10 sm:mb-14 text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 dark:bg-zinc-700/60 text-blue-800 dark:text-zinc-300/90 border border-blue-300/80 dark:border-zinc-600 text-xs font-bold tracking-widest uppercase mb-4">
              For Whom
            </span>
            <h2 className="font-display font-extrabold text-blue-800 dark:text-zinc-300 text-2xl sm:text-4xl xl:text-5xl leading-tight">
              Ship With SMILe, No Matter{" "}
              <span className="text-orange-400 dark:text-orange-300">Your Scale Or Business Type</span>
            </h2>
          </div>

          {/* Masonry-style: Social Sellers tall on left, 2×2 on right */}
          <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
            {FOR_WHOM.map(({ img, label, tall }) => (
              <div
                key={label}
                className="group relative break-inside-avoid rounded-2xl overflow-hidden border border-transparent hover:border-blue-300 dark:hover:border-zinc-500/80 transition-all duration-300"
              >
                <img
                  src={img}
                  alt={label}
                  className={`w-full object-cover transition-transform duration-500
                  ${tall ? "h-64 sm:h-72" : "h-40 sm:h-48"}`}
                  onError={(e) => e.currentTarget.style.display = "none"}
                />

                {/* gradient + label */}
                <div className="absolute inset-0 bg-linear-to-t from-blue-950/90 via-blue-950/20 dark:from-zinc-950/90 dark:via-zinc-800/40 to-transparent" />
                <p className="absolute bottom-3 left-3 text-white/90 text-xs font-semibold tracking-wide">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Advantages ── */}
      <section className="py-16 sm:py-24 bg-blue-50 dark:bg-zinc-900">
        <div className="max-w-[1220px] mx-auto px-4 sm:px-6">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-12 text-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 border border-blue-300/80 dark:bg-zinc-700/60 text-blue-800 dark:text-zinc-300/90 dark:border-zinc-500/60 text-xs font-bold tracking-widest uppercase mb-4">
                Advantages
              </span>
              <h2 className="font-display font-extrabold text-blue-800 dark:text-zinc-300 text-2xl sm:text-4xl xl:text-5xl leading-tight">
                Power Your Business With{" "}
                <span className="text-orange-400 dark:text-orange-300">SMILe Technology</span>
              </h2>
            </div>
            <div className="hidden lg:flex justify-end items-start pt-2">
              <img
                src="https://shreemaruti.com/wp-content/uploads/2024/11/SMILe_S-1.png"
                alt="SMILe"
                className="w-28 object-contain opacity-60"
                onError={(e) => e.currentTarget.style.display = "none"}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {ADVANTAGES.map(({ img, title, desc }) => (
              <div
                key={title}
                className="group bg-blue-100/75 dark:bg-zinc-800 border border-blue-200 dark:border-zinc-700
                           rounded-2xl p-6 flex flex-col gap-4 hover:border-blue-300 dark:hover:border-zinc-500/70
                           hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-white dark:bg-zinc-700/80 border border-blue-300/70 group-hover:border-blue-300 group-hover:dark:border-zinc-500/78 dark:border-zinc-600 flex items-center justify-center">
                  <img
                    src={img}
                    alt={title}
                    className="w-9 h-9 object-contain"
                    onError={(e) => e.currentTarget.style.display = "none"}
                  />
                </div>
                <h3 className="font-display font-bold text-blue-800 dark:text-zinc-300 text-base leading-snug">{title}</h3>
                <p className="text-blue-600/70 dark:text-zinc-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
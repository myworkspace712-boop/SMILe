import { useState } from "react";
import { MdArrowForward } from "react-icons/md";
import { ADVANTAGES, FAQS, STATS, TESTIMONIALS } from "../../Data/Products/international";
import { Link } from "react-router-dom";


// ── Sub-components ────────────────────────────────────────────────────────────
function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-blue-100 dark:border-zinc-700 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left
                   text-blue-900 dark:text-zinc-300/90 font-semibold text-sm
                   hover:bg-blue-50 dark:hover:bg-zinc-800 transition-colors duration-200"
      >
        <span>{q}</span>
        <span className={`text-orange-400 dark:text-orange-300 text-xl font-bold transition-transform duration-200 shrink-0 ml-4 ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      {open && (
        <div className="px-5 pb-4 text-blue-700/80 dark:text-zinc-400 text-sm leading-relaxed border-t border-blue-100 dark:border-zinc-700 pt-3">
          {a}
        </div>
      )}
    </div>
  );
}


function AdvantageCard({ img, icon: Icon, title, desc }) {

  return (
    <div className="group bg-blue-50/40 dark:bg-zinc-800 border border-blue-200 dark:border-zinc-600
                    rounded-2xl overflow-hidden hover:shadow-md hover:border-blue-300 hover:dark:border-zinc-500
                    hover:-translate-y-1 transition-all duration-300">
      <div className="h-44 overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => e.currentTarget.style.display = "none"}
        />
      </div>
      <div className="p-5 flex items-start gap-3">
        <div className="w-9 h-9 rounded-xl bg-blue-100 dark:bg-neutral-700 border border-blue-300 dark:border-zinc-500/60 flex items-center justify-center shrink-0">
          <Icon className="w-5 h-5 text-blue-700 dark:text-orange-300" />
        </div>
        <div>
          <h4 className="font-display font-bold text-blue-800 dark:text-zinc-300 text-sm mb-1">{title}</h4>
          <p className="text-blue-600/70 dark:text-zinc-400 text-xs leading-relaxed">{desc}</p>
        </div>
      </div>
    </div>
  );
}


// ── Main page ─────────────────────────────────────────────────────────────────
export default function International() {

  return (
    <div className="bg-white dark:bg-zinc-950">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden mt-17 pt-35 pb-0 min-h-[420px]"
        style={{
          backgroundImage: "url('https://shreemaruti.com/wp-content/uploads/2024/11/Frame-2087327256-1-1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center right",
        }}
      >

        {/* gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-blue-950/70 via-blue-200/60 to-transparent dark:from-zinc-800/70 dark:via-zinc-600 pointer-events-none" />

        {/* Left */}
        <div className="relative z-10 max-w-[1220px] mx-auto px-4 sm:px-6 py-20 flex flex-col gap-6">

          <h1 className="font-display font-extrabold text-blue-800 dark:text-zinc-300 text-3xl sm:text-4xl xl:text-5xl leading-tight">
            From Bharat To Beyond:{" "}
            <span className="text-orange-400 dark:text-orange-300">Reliable Air And Sea Cargo Solutions</span>
          </h1>
          <p className="text-blue-50 dark:text-zinc-300 text-base leading-relaxed max-w-lg">
            Simplifying international shipping. Opening global doors.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact-us"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/45 dark:border-neutral-500/80
                             bg-orange-400 dark:bg-neutral-800 active:bg-orange-500 text-white/90 dark:text-zinc-300/90 text-sm font-bold
                             shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 no-underline"
            >
              Book Your Shipment Now <MdArrowForward className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Advantages ── */}
      <section className="py-16 sm:py-24 bg-blue-50 dark:bg-zinc-900">
        <div className="max-w-[1220px] mx-auto px-4 sm:px-6">
          <div className="mb-10 sm:mb-14 text-center">
            <span className="inline-block px-4 py-1.5 rounded-full border border-blue-300/70 dark:border-zinc-500/80 bg-blue-100 dark:bg-zinc-700/70 text-blue-800 dark:text-zinc-300/90 text-xs font-bold tracking-widest uppercase mb-4">
              Advantages
            </span>
            <h2 className="font-display font-extrabold text-blue-800 dark:text-zinc-300 text-2xl sm:text-4xl xl:text-5xl leading-tight mb-4">
              Ship Beyond Boundaries{" "}
              <span className="text-orange-400 dark:text-orange-300">With SMILe</span>
            </h2>
            <p className="text-blue-600/80 dark:text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              With SMILe's international shipping services, you can now send your goods and cargo anywhere in the world.
            </p>
          </div>

          {ADVANTAGES.map(({ category, subtitle, items }) => (
            <div key={category} className="mb-12 last:mb-0">
              <div className="mb-6 text-center">
                <h3 className="font-display font-bold text-blue-900 dark:text-zinc-300 text-xl sm:text-2xl mb-1">
                  {category}
                </h3>
                <p className="text-blue-700/80 dark:text-zinc-400 text-sm">{subtitle}</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {items.map((item) => (
                  <AdvantageCard key={item.title} {...item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-14 sm:py-20 dark:bg-zinc-950">
        <div className="max-w-[1220px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-blue-200 dark:bg-zinc-600 rounded-2xl overflow-hidden border border-blue-200 dark:border-zinc-600">
            {STATS.map(({ value, label }, ) => ( // i
              <div
                key={label}
                className="bg-white dark:bg-zinc-900 px-8 py-10 text-center transition-colors duration-300"
              >
                <p className="font-display font-bold text-3xl sm:text-4xl text-orange-400 dark:text-orange-300 mb-2">{value}</p>
                <p className="text-blue-700 dark:text-zinc-300 text-sm font-medium">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-16 sm:py-24 bg-blue-50/40 dark:bg-zinc-900">
        <div className="max-w-[1220px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="font-display font-extrabold text-blue-800 dark:text-zinc-300 text-2xl sm:text-4xl xl:text-5xl leading-tight mb-3">
              Real Customers,{" "}
              <span className="text-orange-400 dark:text-orange-300">Real Stories</span>
            </h2>
            <p className="text-blue-600/70 dark:text-zinc-400 text-sm sm:text-base">
              Thousands of happy customers and even happier supply chains.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {TESTIMONIALS.map(({ text }, i) => (
              <div
                key={i}
                className="group bg-white dark:bg-zinc-800 border border-blue-200/86 hover:border-blue-300/86 dark:border-zinc-600
                           hover:dark:border-zinc-500/84 rounded-2xl p-6 relative"
              >
                <span className="absolute top-4 right-5 font-display group-hover:text-blue-300/86 group-hover:dark:text-zinc-400/84 text-5xl text-blue-200/80 dark:text-zinc-500 leading-none select-none">"</span>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, s) => (
                    <span key={s} className="text-orange-400 dark:text-orange-300/85 text-sm">★</span>
                  ))}
                </div>
                <p className="text-blue-800 dark:text-zinc-300 text-sm leading-relaxed relative z-10">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 sm:py-24 bg-white dark:bg-zinc-950">
        <div className="max-w-[1220px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

            <div className="lg:sticky lg:top-28 text-left">
              <span className="inline-block px-4 py-1.5 rounded-full border border-blue-100 dark:border-zinc-600 bg-blue-100 dark:bg-zinc-700/60 text-blue-800 dark:text-zinc-300/80 text-xs font-bold tracking-widest uppercase mb-4">
                FAQs
              </span>
              <h2 className="font-display font-extrabold text-blue-800 dark:text-zinc-300 text-2xl sm:text-4xl xl:text-5xl leading-tight mb-4">
                Questions?{" "}
                <span className="text-orange-400 dark:text-orange-300">We're glad you asked.</span>
              </h2>
              <p className="text-blue-600/70 dark:text-zinc-400 text-sm sm:text-base leading-relaxed mb-6">
                Everything you need to know about SMILe International Shipping.
              </p>
              <Link
                to="/contact-us"
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full
                           border border-blue-200 dark:border-zinc-600 text-blue-700 dark:text-zinc-300/90
                           text-sm font-semibold hover:bg-blue-50 active:scale-95 dark:hover:bg-zinc-800
                           transition-all duration-200 no-underline"
              >
                Contact us<MdArrowForward className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="flex flex-col gap-3">
              {FAQS.map(({ q, a }) => (
                <FAQItem key={q} q={q} a={a} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
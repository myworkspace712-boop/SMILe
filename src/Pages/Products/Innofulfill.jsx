import { useState } from "react";
import { MdArrowForward, MdEmail } from "react-icons/md";

import { Link } from "react-router-dom";
import { SOLUTIONS, PLATFORM_FEATURES, FOR_WHOM, FAQS, TESTIMONIALS } from "../../Data/Products/innofulfill";


// ── Sub-components ────────────────────────────────────────────────────────────
function FAQItem({ q, a }) {

  const [open, setOpen] = useState(false);

  return (
    <div className="border border-blue-200 dark:border-zinc-600 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left
                   text-blue-800 dark:text-zinc-300 font-semibold text-sm
                   hover:bg-blue-50 dark:hover:bg-zinc-700/60 transition-colors duration-200"
      >
        <span>{q}</span>
        <span className={`text-orange-400 dark:text-orange-300 text-xl font-bold transition-transform duration-200 shrink-0 ml-4 ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      {open && (
        <div className="px-5 pb-4 text-blue-700/80 dark:text-zinc-300/70 text-sm leading-relaxed border-t border-blue-100 dark:border-zinc-600 pt-3">
          {a}
        </div>
      )}
    </div>
  );
}


// ── Main page ─────────────────────────────────────────────────────────────────
export default function Innofulfill() {

  return (

    <div className="">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden mt-17 pt-35 pb-0 min-h-[420px]"

        style={{

          backgroundImage: "url('https://shreemaruti.com/wp-content/uploads/2024/11/Frame-2087327221-1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",

        }}
      >

        {/* dark overlay for text readability */}
        <div className="absolute inset-0 bg-linear-to-t from-blue-950/70 via-blue-200/60 to-transparent dark:from-zinc-800/70 dark:via-zinc-600 pointer-events-none" />

        {/* Content — single column, full width, above background */}
        <div className="relative z-10 max-w-[1220px] mx-auto px-4 sm:px-6 py-20 flex flex-col gap-6">

          <img
            src="/Logos/Innofulfill_Logo.png"
            alt=""
            className="w-auto h-12 object-contain self-start"
            onError={(e) => (e.currentTarget.style.display = "none")}
          />

          <h1 className="font-display font-extrabold text-blue-800 dark:text-zinc-300 text-3xl sm:text-4xl xl:text-5xl leading-tight">
            From Precision To Perfection:{" "}
            <span className="text-orange-400 dark:text-orange-300">Redefining Logistics Efficiency</span>
          </h1>

          <p className="text-blue-50 dark:text-zinc-300 text-base leading-relaxed max-w-lg">
            Accurate and efficient mass delivery system at our fingertips.
          </p>

          <div>

            <Link
              to="/contact-us"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/42 dark:border-neutral-500/76
                   bg-orange-400 active:bg-orange-500 active:dark:bg-neutral-700 dark:bg-neutral-800 text-white dark:text-zinc-300/90 text-sm font-bold
                   shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
            >

              Enquire Now
              <MdArrowForward className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>

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
            <h2 className="font-display font-extrabold text-blue-800 dark:text-zinc-300 text-2xl sm:text-4xl xl:text-5xl leading-tight mb-4 max-w-3xl mx-auto">
              One Interface,{" "}
              <span className="text-orange-400 dark:text-orange-300">Multiple Logistics Solutions</span>
            </h2>
            <p className="text-blue-700/80 dark:text-zinc-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              An integrated, modern platform for easier mass delivery management. From receiving orders through multiple eCommerce platforms to automating processes such as order assignment, route generation, and more — consistent excellence in consumer experience has become a hallmark of InnoFulfill.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {SOLUTIONS.map(({ img, title, desc }) => (
              <div
                key={title}
                className="bg-white dark:bg-zinc-800 border border-blue-200 dark:border-zinc-600
                           rounded-2xl overflow-hidden shadow-sm hover:shadow-lg
                           hover:-translate-y-1 hover:border-blue-400/80 hover:dark:border-zinc-500/90 transition-all duration-300"
              >
                <img
                  src={img}
                  alt={title}
                  className="w-full h-48 object-cover"
                  onError={(e) => e.currentTarget.style.display = "none"}
                />

                <div className="p-5">
                  <h4 className="font-display font-bold text-blue-800 dark:text-zinc-300 text-base mb-1">{title}</h4>
                  <p className="text-blue-600/70 dark:text-zinc-400 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Unified Tech Stack ── */}
      <section className="py-16 sm:py-24 dark:bg-zinc-950">
        <div className="max-w-[1220px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="font-display font-extrabold text-blue-800 dark:text-zinc-300 text-2xl sm:text-4xl xl:text-5xl leading-tight mb-4">
              An Unified Tech-Stack For All Your{" "}
              <span className="text-orange-400 dark:text-orange-300">eCommerce Logistics</span>
            </h2>
            <p className="text-blue-600/80 dark:text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Streamline your eCommerce management and fulfilment with InnoFulfill's integrated platform that unifies your operations and management.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {PLATFORM_FEATURES.map(({ icon: Icon, title, desc }) => (

              <div
                key={title}
                className="group bg-blue-50/70 dark:bg-zinc-800 border border-blue-200 dark:border-zinc-600
                           rounded-2xl p-5 hover:shadow-md hover:-translate-y-0.5
                           hover:border-blue-300 dark:hover:border-zinc-500
                           transition-all duration-300"
              >

                <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-700 border border-blue-100 dark:border-zinc-500/75
                                flex items-center justify-center mb-3 shadow-sm
                                transition-colors duration-300">
                  <Icon className="w-5 h-5 text-blue-700 dark:text-orange-300" />
                </div>
                <h5 className="font-display font-bold text-blue-950 dark:text-zinc-300 text-sm mb-1">{title}</h5>
                <p className="text-blue-600/70 dark:text-zinc-400 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── For Whom ── */}
      <section className="py-16 sm:py-24 bg-blue-50 dark:bg-zinc-900">
        <div className="max-w-[1220px] mx-auto px-4 sm:px-6">
          <div className="mb-10 sm:mb-14 text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 border border-blue-300/80 dark:bg-zinc-700/60 text-blue-800 dark:text-zinc-300/90 dark:border-zinc-500/80 text-xs font-bold tracking-widest uppercase mb-4">
              Who Is It For?
            </span>
            <h2 className="font-display font-extrabold text-blue-800 dark:text-zinc-300 text-2xl sm:text-4xl xl:text-5xl leading-tight mb-4">
              All For One and{" "}
              <span className="text-orange-400 dark:text-orange-300">One For All</span>
            </h2>
            <p className="text-blue-600/80 dark:text-zinc-400 text-sm sm:text-base max-w-xl leading-relaxed mx-auto">
              Enjoy efficient mass delivery services and usher in the Bharat of tomorrow.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {FOR_WHOM.map(({ img, icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group bg-white dark:bg-zinc-800 border border-blue-200 hover:border-blue-300 dark:border-zinc-600 hover:dark:border-zinc-500
                           rounded-2xl overflow-hidden shadow-sm hover:shadow-lg
                           hover:-translate-y-1 transition-all duration-300"
              >

                <div className="relative h-44 overflow-hidden bg-blue-50 dark:bg-zinc-700 border border-blue-300 dark:border-zinc-600 hover:border-blue-400 hover:dark:border-zinc-500">
                  <img
                    src={img}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => e.currentTarget.style.display = "none"}
                  />

                </div>
                <div className="p-5 flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl border border-blue-300 dark:border-zinc-500/60 bg-blue-100 dark:bg-neutral-700 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-blue-700 dark:text-orange-300" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-blue-800 dark:text-zinc-300 text-base mb-1">{title}</h4>
                    <p className="text-blue-500 dark:text-zinc-400 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-16 sm:py-24 dark:bg-zinc-950">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {TESTIMONIALS.map(({ text, name }) => (
              <div
                key={name}
                className="bg-blue-50 dark:bg-zinc-800 group border border-blue-200/80 hover:border-blue-300/80 dark:border-zinc-600/90 hover:dark:border-zinc-600
                           rounded-2xl p-6 relative"
              >
                <span className="absolute top-4 right-5 font-display text-5xl text-blue-200/80 group-hover:text-blue-300/80 group-hover:dark:text-zinc-400 dark:text-zinc-600 leading-none select-none">"</span>
                <p className="text-blue-800 dark:text-zinc-300/80 text-sm leading-relaxed mb-4 relative z-10">{text}</p>
                <p className="text-orange-400 dark:text-orange-300 text-xs font-semibold">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── FAQ ── */}
      <section className="py-16 sm:py-24 bg-blue-50 dark:bg-zinc-900">
        <div className="max-w-[1220px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

            {/* Left — heading */}
            <div className="lg:sticky lg:top-28 text-left">
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100/80 dark:bg-zinc-700/60 text-blue-800 dark:text-zinc-300/90 border border-blue-300/90 dark:border-zinc-600 text-xs font-bold tracking-widest uppercase mb-4">
                FAQ
              </span>
              <h2 className="font-display font-extrabold text-blue-800 dark:text-zinc-300 text-2xl sm:text-4xl xl:text-5xl leading-tight mb-4">
                Questions?
                <span className="text-orange-400 dark:text-orange-300"> We're glad you asked.</span>
              </h2>
              <p className="text-blue-600/90 dark:text-zinc-400 text-sm sm:text-base leading-relaxed mb-6">
                Everything you need to know about getting started with InnoFulfill.
              </p>
              <a
                href="mailto:sales@innofulfill.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-100 dark:bg-neutral-700/60
                           border border-blue-300/80 active:bg-blue-400/70 dark:active:bg-neutral-600 dark:border-zinc-500/75 text-blue-700 dark:text-zinc-300/90
                           text-sm font-semibold transition-all duration-200 no-underline"
              >
                <MdEmail className="w-4 h-4" /> sales@innofulfill.com
              </a>
            </div>

            {/* Right — accordion */}
            <div className="flex flex-col gap-3">
              {FAQS.map(({ q, a }) => (
                <FAQItem key={q} q={q} a={a} />
              ))}
            </div>
          </div>
        </div>
      </section>

    </div >
  );
}
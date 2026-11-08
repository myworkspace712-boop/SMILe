import { useState } from "react";
import { MdArrowForward } from "react-icons/md";
import { SOLUTIONS, WHY_PALLETIT, PLATFORM_FEATURES, TESTIMONIALS, FAQS, BLOGS } from "../../Data/Products/palletit";
import { Link } from "react-router-dom";


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
export default function PalletIt() {

  return (
    <div className="bg-white dark:bg-zinc-950">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden dark:bg-zinc-950 mt-17 pt-35 pb-0"

        style={{
          backgroundImage: "url('https://shreemaruti.com/wp-content/uploads/2024/11/Palletit-2-1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center right",
        }}
      >

        {/* gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-blue-950/60 via-blue-200/60 to-transparent dark:from-zinc-800/70 dark:via-zinc-600/70 pointer-events-none" />

        {/* Left */}
        <div className="relative z-10 max-w-[1220px] mx-auto px-4 sm:px-6 py-20 flex flex-col gap-6">

          <img
            src="/Logos/Palletit_Logo.png"
            alt="PALLETit"
            className="h-12 w-auto object-contain self-start"
            onError={(e) => e.currentTarget.style.display = "none"}
          />

          <h1 className="font-display font-extrabold text-blue-800 dark:text-zinc-300 text-3xl sm:text-4xl xl:text-5xl leading-tight">
            From Storage to Delivery, the only
            <span className="text-orange-400 dark:text-orange-300"> 3PL Partner</span> you need
          </h1>
          <p className="text-blue-100 dark:text-zinc-300 text-base leading-relaxed max-w-lg">
            Seamless 3PL Warehousing and Fulfilment across Bharat & beyond.
          </p>
          <div>
            <Link
              to="/contact-us"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/42 dark:border-neutral-500/76
                         bg-orange-400 active:bg-orange-500 dark:active:bg-neutral-700 dark:bg-neutral-800 dark:text-zinc-300/90 text-white/80 text-sm font-bold
                         shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 no-underline"
            >
              Book a Demo <MdArrowForward className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>


      {/* ── Our Solutions ── */}
      <section className="py-16 sm:py-24 bg-blue-50 dark:bg-zinc-900">
        <div className="max-w-[1220px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-zinc-700/60 text-blue-800 dark:text-zinc-300/90 border border-blue-300/85 dark:border-zinc-500/80 text-xs font-bold tracking-widest uppercase mb-4">
              Our Solutions
            </span>
            <h2 className="font-display font-extrabold text-blue-800 dark:text-zinc-300 text-2xl sm:text-4xl xl:text-5xl leading-tight">
              Store, Pack, and{" "}
              <span className="text-orange-400 dark:text-orange-300">Ship With Ease</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {SOLUTIONS.map(({ img, title, desc }) => (
              <div
                key={title}
                className="bg-blue-50 dark:bg-zinc-800 border border-blue-200 hover:border-blue-300 dark:border-zinc-600 hover:dark:border-zinc-500
                           rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <img
                  src={img}
                  alt={title}
                  className="w-full h-48 object-cover"
                  onError={(e) => e.currentTarget.style.display = "none"}
                />

                <div className="p-5">
                  <h4 className="font-display font-bold text-blue-900 dark:text-zinc-300 text-base mb-1">{title}</h4>
                  <p className="text-blue-600/70 dark:text-zinc-400 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why PALLETit ── */}
      < section className="py-16 sm:py-24 dark:bg-zinc-950">
        <div className="max-w-[1220px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-12">
            <div className="text-center">
              <span className="inline-block px-4 py-1.5 mx-auto rounded-full bg-blue-50 dark:bg-zinc-700/60 text-blue-800 dark:text-zinc-300/90 border border-blue-300/80 dark:border-zinc-600 text-xs font-bold tracking-widest uppercase mb-4">
                Why PALLET It?
              </span>
              <h2 className="font-display font-extrabold text-blue-800 dark:text-zinc-300 text-2xl sm:text-4xl xl:text-5xl leading-tight mx-auto mb-4">
                Shaping A Better Tomorrow,{" "}
                <span className="text-orange-400 dark:text-orange-300">One Delivery At A Time</span>
              </h2>
              <p className="text-blue-600/70 mx-auto dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
                Competitive, advanced, and easy logistics for the modern Indian entrepreneur.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY_PALLETIT.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group bg-blue-50/40 dark:bg-zinc-800/60 border border-blue-200/90 dark:border-zinc-600/80
                           rounded-2xl p-5 hover:shadow-md hover:-translate-y-0.5
                           hover:border-blue-300/90 dark:hover:border-zinc-500
                           transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-700/70 border border-blue-200 dark:border-zinc-500/75
                                flex items-center justify-center mb-3 shadow-sm
                                transition-colors duration-300">
                  <Icon className="w-5 h-5 text-blue-700 dark:text-orange-300" />
                </div>
                <h5 className="font-display font-bold text-blue-800 dark:text-zinc-300 text-sm mb-1">{title}</h5>
                <p className="text-blue-600/70 dark:text-zinc-400 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── One Platform ── */}
      < section className="py-16 sm:py-24 bg-blue-50/40 dark:bg-zinc-900" >
        <div className="max-w-[1220px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="font-display font-extrabold text-blue-950 dark:text-zinc-300 text-2xl sm:text-4xl xl:text-5xl leading-tight mb-4">
              One Platform For All Your{" "}
              <span className="text-orange-400 dark:text-orange-300">Warehousing, Fulfillment & Logistics</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {PLATFORM_FEATURES.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group bg-white dark:bg-zinc-800 border border-blue-200 hover:border-blue-300 dark:border-zinc-600 hover:dark:border-zinc-500
                           rounded-2xl p-5 hover:shadow-md hover:-translate-y-0.5
                           transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-neutral-700 border border-blue-100 dark:border-zinc-500/60
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

      {/* ── Testimonials ── */}
      < section className="py-16 sm:py-24 bg-white dark:bg-zinc-950" >
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

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {TESTIMONIALS.map(({ text, name, logo }) => (
              <div
                key={name + text.slice(0, 20)}
                className="group bg-blue-50 dark:bg-zinc-800 border border-blue-200/80 hover:border-blue-300/80 dark:border-zinc-600 hover:dark:border-zinc-500
                           rounded-2xl p-6 flex flex-col gap-4"
              >
                <span className="text-4xl text-blue-200/80 group-hover:text-blue-300/80 group-hover:dark:text-zinc-400/80 dark:text-zinc-500 font-display leading-none select-none">"</span>
                <p className="text-blue-800/90 dark:text-zinc-300/80 text-sm leading-relaxed flex-1">{text}</p>
                <img
                  src={logo}
                  alt={name}
                  className="h-8 w-auto object-contain opacity-100 dark:brightness-200"
                  onError={(e) => e.currentTarget.style.display = "none"}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 sm:py-24 bg-blue-50/40 dark:bg-zinc-900" >
        <div className="max-w-[1220px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div className="lg:sticky lg:top-28">
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100/80 dark:bg-zinc-700/60 text-blue-800 dark:text-zinc-300/90 border border-blue-300/90 dark:border-zinc-600 text-xs font-bold tracking-widest uppercase mb-4">
                FAQs
              </span>
              <h2 className="font-display font-extrabold text-blue-800 dark:text-zinc-300 text-2xl sm:text-4xl xl:text-5xl leading-tight mb-4">
                Questions?{" "}
                <span className="text-orange-400 dark:text-orange-300">We're glad you asked.</span>
              </h2>
              <p className="text-blue-600/70 dark:text-zinc-400 text-sm sm:text-base leading-relaxed mb-6">
                Everything you need to know about getting started with PALLETit.
              </p>
              <a
                href="https://shreemaruti.com/contact-us/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-100 dark:bg-neutral-700/65
                           border border-blue-300/80 active:bg-blue-400/70 dark:active:bg-neutral-600 dark:border-zinc-500/75 text-blue-700 dark:text-zinc-300/90
                           text-sm font-semibold active:scale-95 hover:scale-105
                           transition-all duration-200 no-underline"
              >
                Get in touch<MdArrowForward className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </div>

            <div className="flex flex-col gap-3">
              {FAQS.map(({ q, a }) => (
                <FAQItem key={q} q={q} a={a} />
              ))}
            </div>
          </div>
        </div>
      </section >

      {/* ── Industry Insights ── */}
      < section className="py-16 sm:py-24 bg-white dark:bg-zinc-950" >
        <div className="max-w-[1220px] mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <h2 className="font-display font-extrabold text-blue-950 dark:text-white text-2xl sm:text-4xl xl:text-5xl leading-tight mb-3">
              Industry{" "}
              <span className="text-orange-500">Insights</span>
            </h2>
            <p className="text-blue-600/70 dark:text-zinc-400 text-sm sm:text-base">
              Stay updated on the latest supply chain trends, articles, and research to guide your strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {BLOGS.map(({ img, title, href }) => (
              <a
                key={title}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white dark:bg-zinc-800 border border-blue-100 dark:border-zinc-700
                           rounded-2xl overflow-hidden shadow-sm hover:shadow-lg
                           hover:-translate-y-1 transition-all duration-300 no-underline"
              >
                <div className="h-40 overflow-hidden">
                  <img
                    src={img}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => e.currentTarget.style.display = "none"}
                  />
                </div>
                <div className="p-4">
                  <h5 className="font-display font-bold text-blue-900 dark:text-white text-xs sm:text-sm leading-snug line-clamp-3 group-hover:text-blue-700 dark:group-hover:text-zinc-200 transition-colors duration-200">
                    {title}
                  </h5>
                  <span className="inline-flex items-center gap-1 mt-3 text-xs font-bold text-orange-500 group-hover:gap-2 transition-all duration-300">
                    Read more <MdArrowForward className="w-3 h-3" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
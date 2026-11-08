import { TbTrendingUp, TbTruckDelivery } from "react-icons/tb";
import { PARTNER_LOGOS, OPERATION_STATS, TECH_STATS } from "../../Data/AboutUs/ourbrandStory";


// ── Page ─────────────────────────────────────────────────────────────────────
export default function OurBrandStory() {
  return (
    <div className="bg-white dark:bg-zinc-950 text-zinc-800 dark:text-zinc-200">

      {/* ── Hero ── */}
      <section className="relative min-h-[88vh] flex flex-col justify-end overflow-hidden bg-gradient-to-br from-zinc-950 via-blue-950 to-blue-900">
        {/* decorative blobs */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-orange-400 blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-blue-500 blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-[1220px] mx-auto px-6 pb-16 pt-32 w-full">
          {/* Partner logos row */}
          <div className="flex flex-wrap gap-6 mb-16">
            {PARTNER_LOGOS.map(({ name, url }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-white text-sm font-semibold hover:bg-white/20 transition-all duration-200"
              >
                {name}
              </a>
            ))}
          </div>

          {/* Headline */}
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              Built by Grit.<br />Grown on Trust.<br />
              <span className="text-orange-400">Powered by Purpose.</span>
            </h1>
            <p className="text-blue-200 text-lg md:text-xl">Where Innovation Meets Possibilities</p>
          </div>
        </div>
      </section>

      {/* ── Vision ── */}
      <section className="py-16 bg-zinc-50 dark:bg-zinc-900">
        <div className="max-w-[1220px] mx-auto px-6">
          <span className="text-orange-400 font-semibold text-sm tracking-widest uppercase font-display">
            VISION
          </span>
          <p className="mt-3 text-xl md:text-2xl font-display font-semibold text-blue-950 dark:text-white leading-relaxed max-w-4xl">
            To build the world's leading technology-driven supply chain ecosystem that puts customer first and reflects India's drive to shape the future.
          </p>
        </div>
      </section>

      {/* ── Brand Story + Financial Stats ── */}
      <section className="py-20 bg-white dark:bg-zinc-950">
        <div className="max-w-[1220px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — story text */}
          <div>
            <span className="text-orange-400 font-semibold text-sm tracking-widest uppercase font-display">
              OUR STORY
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-blue-950 dark:text-white mt-2 mb-6">
              Our Brand Story
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-base">
              For over four decades, Shree Maruti Integrated Logistics has powered India's supply chain backbone — long before "Make in India" became a national movement. What began as a logistics partner for India's early manufacturing boom has today evolved into one of the country's most agile, tech-enabled logistics ecosystems. With digital-first infrastructure, data-led intelligence, and people at the core, we continue to simplify complex logistics — helping businesses scale faster and deliver smarter.
            </p>
          </div>

          {/* Right — financial highlights */}
          <div className="flex flex-col gap-4">
            <span className="text-orange-400 font-semibold text-sm tracking-widest uppercase font-display">
              GROWTH HIGHLIGHTS
            </span>

            {[
              { icon: TbTrendingUp, value: "17%", label: "YoY Profit Growth · 20% revenue growth · 40.3% EBITDA surge (FY 2023)" },
              { icon: TbTruckDelivery, value: "3.6 Mn+", label: "Shipments moved per month in 2024" },
            ].map(({ icon: Icon, value, label }) => (
              <div
                key={value}
                className="flex items-start gap-5 p-5 rounded-2xl border border-blue-100 dark:border-zinc-700 bg-white dark:bg-zinc-900 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center flex-shrink-0">
                  <Icon className="text-orange-500 w-6 h-6" />
                </div>
                <div>
                  <p className="font-display font-bold text-2xl text-blue-950 dark:text-white">{value}</p>
                  <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-0.5 leading-relaxed">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats — Operations & Technology ── */}
      <section className="py-20 bg-gradient-to-br from-blue-950 to-blue-900">
        <div className="max-w-[1220px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* Operations */}
            <div>
              <span className="text-orange-400 font-semibold text-sm tracking-widest uppercase font-display">
                OPERATIONS
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-white mt-2 mb-8">
                Operation Capabilities
              </h2>
              <div className="flex flex-col gap-4">
                {OPERATION_STATS.map(({ icon: Icon, value, label }) => (
                  <div
                    key={value + label}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/15 transition-all duration-200"
                  >
                    <div className="w-10 h-10 rounded-lg bg-orange-400/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="text-orange-400 w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-display font-bold text-xl text-white">{value}</p>
                      <p className="text-blue-200 text-sm mt-0.5 leading-relaxed">{label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technology */}
            <div>
              <span className="text-orange-400 font-semibold text-sm tracking-widest uppercase font-display">
                TECHNOLOGY
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-white mt-2 mb-8">
                Technology Capabilities
              </h2>
              <div className="flex flex-col gap-4">
                {TECH_STATS.map(({ icon: Icon, value, label }) => (
                  <div
                    key={value}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/15 transition-all duration-200"
                  >
                    <div className="w-10 h-10 rounded-lg bg-orange-400/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="text-orange-400 w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-display font-bold text-xl text-white">{value}</p>
                      <p className="text-blue-200 text-sm mt-0.5 leading-relaxed">{label}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* decorative quote card */}
              <div className="mt-8 p-6 rounded-2xl border border-orange-400/30 bg-orange-400/10">
                <p className="text-orange-300 font-display font-semibold text-lg leading-snug">
                  "Four decades of trust, now powered by technology."
                </p>
                <p className="text-blue-200 text-sm mt-2">Shree Maruti Integrated Logistics</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
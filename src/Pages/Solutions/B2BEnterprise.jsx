import {
  ADVANTAGE_STATS,
  WHY_SMILE,
  REACH_STATS,
} from "../../Data/Solutions/b2bEnterprise";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const COLLAGE_IMAGES = [
  "/Solutions/PerCou/codemap.png",
  "/Solutions/PerCou/conpup.png",
  "/Solutions/PerCou/heropc.png",
  "/Solutions/PerCou/realtimetr.png",
  "/Solutions/PerCou/secfastdel.png",

  "/Solutions/PerCou/codemap.png",
  "/Solutions/PerCou/conpup.png",
  "/Solutions/PerCou/heropc.png",
  "/Solutions/PerCou/realtimetr.png",
  "/Solutions/PerCou/secfastdel.png",
];

export function FlipImageCard({ src, alt, className }) {
 
  if (!src) return null;

  return (
    <div
      className={`relative overflow-hidden rounded-3xl border border-white/80 dark:border-zinc-700 shadow-xl bg-white dark:bg-zinc-800 perspective-distant ${className}`}
    >
      <div
        key={src}
        className="w-full h-full origin-top animate-calendar-flip-up"
      >
        <img
          src={src}
          alt={alt}
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export function ImageCollage() {
  const TILE_COUNT = 5;

  const [tileIndexes, setTileIndexes] = useState(
    Array.from({ length: TILE_COUNT }, (_, i) => i),
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTileIndexes((prev) =>
        prev.map((index, tilePosition) => {
          return (
            (index + TILE_COUNT + tilePosition + 1) % COLLAGE_IMAGES.length
          );
        }),
      );
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-[520px] w-full overflow-hidden rounded-3xl bg-blue-100 dark:bg-zinc-900 border border-blue-200 dark:border-zinc-700 p-5">
      <div className="absolute inset-0 bg-linear-to-br from-blue-200/70 via-white/20 to-orange-200/50 dark:from-zinc-800 dark:via-zinc-900 dark:to-orange-400/10" />

      <div className="relative z-10 grid grid-cols-6 grid-rows-6 gap-4 min-h-[520px]">
        <FlipImageCard
          src={COLLAGE_IMAGES[tileIndexes[0]]}
          alt="B2B logistics"
          className="col-span-4 row-span-3"
        />

        <FlipImageCard
          src={COLLAGE_IMAGES[tileIndexes[1]]}
          alt="Warehouse logistics"
          className="col-span-2 row-span-2"
        />

        <FlipImageCard
          src={COLLAGE_IMAGES[tileIndexes[2]]}
          alt="Delivery network"
          className="col-span-2 row-span-2"
        />

        <FlipImageCard
          src={COLLAGE_IMAGES[tileIndexes[3]]}
          alt="Supply chain"
          className="col-span-3 row-span-3"
        />

        <FlipImageCard
          src={COLLAGE_IMAGES[tileIndexes[4]]}
          alt="Fulfilment"
          className="col-span-3 row-span-3"
        />
      </div>
    </div>
  );
}

export default function B2BEnterprise() {
  return (
    <div className="dark:bg-zinc-950 text-zinc-800 dark:text-zinc-200">
      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden dark:bg-zinc-950 mt-17 pt-35 pb-0"
        style={{
          backgroundImage: "url('/Solutions/B2BEnt/herob2b.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-blue-950/60 via-blue-200/60 to-transparent dark:from-zinc-900/70 dark:via-zinc-600/70 pointer-events-none" />

        <div className="grid grid-cols-1">
          <div className="relative z-10 w-full mx-auto px-4 sm:px-6 py-20 flex">
            {/* Left */}
            <div className="">
              <span className="inline-block text-orange-400 dark:text-orange-300 font-semibold tracking-widest text-sm uppercase mb-4 font-display">
                B2B
              </span>
              <h1 className="font-display text-4xl lg:text-6xl font-bold text-blue-900 dark:text-zinc-300 leading-tight mb-6">
                Our Solution For{" "}
                <span className="text-orange-400 dark:text-orange-300">
                  B2B Enterprises
                </span>
              </h1>
              <p className="text-blue-50 dark:text-zinc-300/70 text-lg leading-relaxed mb-10 max-w-xl">
                Optimized Logistics for Businesses of all scales. SMILe delivers
                tailored, end-to-end logistics for B2B enterprises across
                Bharat, from warehousing to swift distribution, enhancing
                efficiency as you scale.
              </p>

              <Link
                to="/contact-us"
                className="group mt-5 inline-flex items-center gap-2 bg-orange-400 dark:bg-zinc-800 active:bg-orange-500 dark:active:bg-zinc-700 text-white/95 dark:text-zinc-300/90 border border-white/45 dark:border-zinc-600/70 font-bold px-4 py-3 rounded-full transition-all duration-300 active:duration-100 hover:scale-103 active:scale-95 hover:shadow-md"
              >
                Connect with SMILe Today
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SMILE ADVANTAGE ── */}
      <section className="py-20 lg:py-28 bg-blue-50 dark:bg-zinc-900">
        <div className="max-w-[1220px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 text-center">
            {/* Left */}
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 border border-blue-300/90 dark:bg-zinc-700/60 text-blue-800 dark:text-zinc-300/90 dark:border-zinc-500/70 text-xs font-bold tracking-widest mb-4">
                Advantage
              </span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-blue-900 dark:text-zinc-300 mt-3 mb-5 leading-tight">
                Efficient And Scalable <br className="hidden lg:block" />
                <span className="text-orange-400 dark:text-orange-300">
                  Logistics Solutions
                </span>
              </h2>
              <p className="text-blue-600/80 dark:text-zinc-400 leading-relaxed mb-4">
                Our warehousing network spans India, offering seamless
                integration with SMILe's parcel and freight services.
              </p>
              <p className="text-blue-600/80 dark:text-zinc-400 leading-relaxed mb-10">
                Powered by our state-of-the-art technology platform, SMILe
                ensures automated, system-driven operations with full visibility
                at every stage — from order placement to final delivery.
              </p>

              <div className="space-y-6">
                {ADVANTAGE_STATS.map((s, i) => (
                  <div
                    key={i}
                    className="border-l-4 border-orange-400 dark:border-orange-300 pl-5"
                  >
                    <p className="font-display text-3xl font-bold text-blue-800 dark:text-zinc-300">
                      {s.value}
                    </p>

                    <p className="text-blue-500/80 dark:text-zinc-400 text-sm mt-1">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <ImageCollage />
          </div>
        </div>
      </section>

      {/* ── WHY SMILE ── */}
      <section className="py-20 lg:py-28 dark:bg-zinc-950">
        <div className="max-w-[1220px] mx-auto px-6 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 border border-blue-300/90 dark:bg-zinc-700/60 text-blue-800 dark:text-zinc-300/90 dark:border-zinc-500/70 text-xs font-bold tracking-widest mb-4">
            Why Us
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-blue-900 dark:text-zinc-300 mt-3 mb-12 leading-tight">
            Why Partner With{" "}
            <span className="text-orange-400 dark:text-orange-300">SMILe</span>{" "}
            For <br />
            <span className="text-orange-400 dark:text-orange-300">
              B2B Logistics
            </span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_SMILE.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex flex-col">
                  <div className="group bg-white flex flex-col flex-1 dark:bg-zinc-800 border border-blue-200 dark:border-zinc-600 hover:border-blue-300 dark:hover:border-orange-300/60 rounded-2xl overflow-hidden mb-6 hover:shadow-lg transition-all hover:-translate-y-1 duration-300">
                    <div className="flex justify-center p-6 h-60 bg-blue-50/60 dark:bg-zinc-400 w-full">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="object-contain"
                        onError={(e) =>
                          (e.currentTarget.style.display = "none")
                        }
                      />
                    </div>
                    <div className="p-6 flex flex-col gap-2 bg-blue-100/90 dark:bg-zinc-800 border-t border-blue-200 dark:border-zinc-600 dark:group-hover:border-orange-300/70 hover:border-blue-300 text-left">
                      <div className="w-12 h-12 mt-1 rounded-xl bg-blue-50 dark:bg-zinc-700/90 border border-blue-300/70 dark:border-zinc-500/80 group-hover:border-blue-300 dark:group-hover:border-orange-300/60 flex items-center justify-center mb-4">
                        {Icon && (
                          <Icon className="text-blue-800 dark:text-orange-300 w-6 h-6" />
                        )}
                      </div>
                      <h3 className="font-display font-bold text-blue-800 dark:text-zinc-300 mb-2 text-lg">
                        {item.title}
                      </h3>
                      <p className="text-blue-600/65 dark:text-zinc-400 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── REACH & SCALE ── */}
      <section className="py-20 lg:py-28 bg-blue-50 dark:bg-zinc-900">
        <div className="max-w-[1220px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-blue-900 dark:text-zinc-300 mb-4">
              SMILe's Unmatched{" "}
              <span className="text-orange-400 dark:text-orange-300">
                Reach
              </span>{" "}
              and{" "}
              <span className="text-orange-400 dark:text-orange-300">
                Scale
              </span>
            </h2>
            <p className="text-blue-600/80 dark:text-zinc-400 leading-relaxed mb-10 max-w-xl mx-auto">
              With us, your business benefits from an expansive network,
              ensuring efficient, reliable delivery across Bharat and beyond.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {REACH_STATS.map((s, i) => (
              <div
                key={i}
                className="group bg-blue-200/60 dark:bg-zinc-700/80 border border-blue-300/60 dark:border-zinc-500/80 rounded-2xl p-6 text-center hover:border-blue-300 dark:hover:border-orange-300/70 transition-colors duration-300"
              >
                <div className="bg-blue-100 dark:bg-zinc-600 border border-blue-300/60 dark:border-zinc-500/80 dark:group-hover:border-orange-300/70 group-hover:border-blue-300 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <s.icon
                    className="text-blue-800 dark:text-orange-300"
                    size={24}
                  />
                </div>
                <p className="font-display text-2xl font-bold text-orange-400 dark:text-zinc-300 mb-1">
                  {s.value}
                </p>
                <p className="text-blue-500/70 dark:text-zinc-300/65 text-sm leading-snug">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

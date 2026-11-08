import { useEffect, useRef } from "react";
import { TbExternalLink } from "react-icons/tb";
// import CTABanner from "../../Components/CTABanner";
import {FEATURED_NEWS, INDUSTRY_NEWS} from "../../Data/AboutUs/mediaFeatures";


// ── Sub-components ────────────────────────────────────────────────────────────
function NewsCard({ title, image, href, source, size = "normal" }) {
  const isFeatured = size === "featured";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-orange-400/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-950/30"
    >
      {/* Image */}
      <div className={`relative overflow-hidden ${isFeatured ? "h-52" : "h-44"}`}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            e.target.src =
              "https://shreemaruti.com/wp-content/uploads/2024/11/23792-maruti-courier.png";
          }}
        />
        {/* source badge */}
        <span className="absolute top-3 left-3 bg-blue-950/80 backdrop-blur-sm text-orange-400 text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border border-orange-400/20">
          {source}
        </span>
      </div>

      {/* Text */}
      <div className="p-4 flex items-start gap-3">
        <p
          className={`text-white/85 font-medium leading-snug flex-1 group-hover:text-white transition-colors duration-200 ${
            isFeatured ? "text-base" : "text-sm"
          }`}
        >
          {title}
        </p>
        <TbExternalLink
          size={16}
          className="text-orange-400/60 group-hover:text-orange-400 shrink-0 mt-0.5 transition-colors duration-200"
        />
      </div>
    </a>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────

export default function MediaFeatures() {
  const heroRef = useRef(null);
  const featuredRef = useRef(null);
  const industryRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-8");
          }
        });
      },
      { threshold: 0.1 }
    );

    [heroRef, featuredRef, industryRef].forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-blue-950">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 pt-28 pb-20">
        {/* decorative blobs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div
          ref={heroRef}
          className="relative max-w-[1220px] mx-auto px-6 text-center opacity-0 translate-y-8 transition-all duration-700"
        >
          {/* pill */}
          <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-400/20 text-orange-400 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            Media & Press
          </span>

          <h1 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
            Latest Headlines From{" "}
            <span className="text-orange-400">Bharat &amp; Beyond</span>
          </h1>

          <p className="text-blue-200/80 text-lg max-w-2xl mx-auto">
            Explore the Journey of SMILe – Milestones, Innovations, and Success Stories!
          </p>
        </div>
      </section>

      {/* ── Featured News ─────────────────────────────────────────────────── */}
      <section className="max-w-[1220px] mx-auto px-6 py-16">
        <div
          ref={featuredRef}
          className="opacity-0 translate-y-8 transition-all duration-700 delay-100"
        >
          {/* section label */}
          <div className="flex items-center gap-3 mb-8">
            <span className="w-1 h-8 bg-orange-400 rounded-full" />
            <h2 className="text-white font-display text-2xl font-bold">
              Featured Stories
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FEATURED_NEWS.map((item) => (
              <NewsCard key={item.id} size="featured" {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* divider */}
      <div className="max-w-[1220px] mx-auto px-6">
        <div className="border-t border-white/10" />
      </div>

      {/* ── Industry News ─────────────────────────────────────────────────── */}
      <section className="max-w-[1220px] mx-auto px-6 py-16">
        <div
          ref={industryRef}
          className="opacity-0 translate-y-8 transition-all duration-700 delay-150"
        >
          {/* section label + subtext */}
          <div className="flex items-center gap-3 mb-3">
            <span className="w-1 h-8 bg-orange-400 rounded-full" />
            <h2 className="text-white font-display text-2xl font-bold">
              Industry Highlights
            </h2>
          </div>
          <p className="text-blue-200/70 text-sm mb-8 pl-4">
            Learn about and access the latest trends from the logistics and supply chain sectors.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {INDUSTRY_NEWS.map((item) => (
              <NewsCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────────────────── */}
      {/* <CTABanner /> */}
    </div>
  );
}
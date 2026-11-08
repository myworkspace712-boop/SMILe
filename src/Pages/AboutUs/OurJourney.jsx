import { useEffect, useRef } from "react";
// import CTABanner from "../Components/CTABanner";
import { TIMELINE } from "../../Data/AboutUs/ourJourney";


/* ─── Dot node on the spine ─────────────────────────────────────── */
function SpineDot() {
  return (
    <div className="flex flex-col items-center">
      <div
        className="w-4 h-4 rounded-full border-4 mt-1 flex-shrink-0"
        style={{ borderColor: "#334BBB", backgroundColor: "#0f172a" }}
      />
    </div>
  );
}

/* ─── Single timeline row ────────────────────────────────────────── */
function TimelineRow({ item, index }) {
  const rowRef = useRef(null);

  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("opacity-100", "translate-y-0");
          el.classList.remove("opacity-0", "translate-y-8");
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={rowRef}
      className="grid grid-cols-[1fr_48px_1fr] gap-x-6 items-start opacity-0 translate-y-8 transition-all duration-700"
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      {/* ── Left column: text on even rows, image on odd ── */}
      <div className="flex justify-end pt-1">
        {index % 2 === 0 ? (
          <TextBlock item={item} align="right" />
        ) : (
          <ImageBlock item={item} />
        )}
      </div>

      {/* ── Centre spine + dot ── */}
      <div className="flex flex-col items-center">
        <SpineDot />
        <div
          className="w-px flex-1 mt-2"
          style={{ backgroundColor: "#334BBB", minHeight: "100%" }}
        />
      </div>

      {/* ── Right column ── */}
      <div className="pt-1">
        {index % 2 === 0 ? (
          <ImageBlock item={item} />
        ) : (
          <TextBlock item={item} align="left" />
        )}
      </div>
    </div>
  );
}


function TextBlock({ item, align }) {
  return (
    <div className={`max-w-md pb-10 ${align === "right" ? "text-right" : "text-left"}`}>
      <p className="font-display text-4xl font-bold text-blue-800 mb-1">
        {item.year}
      </p>
      <p className="font-semibold text-gray-800 mb-3 text-base">{item.title}</p>
      <ul
        className={`space-y-1.5 text-sm text-gray-600 ${
          align === "right" ? "list-none" : "list-disc list-inside"
        }`}
      >
        {item.points.map((pt, i) => (
          <li key={i}>
            {align === "right" && (
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-orange-400 mr-2 mb-0.5 align-middle" />
            )}
            {pt}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ImageBlock({ item }) {
  return (
    <div className="pb-10 max-w-md">
      <div className="rounded-2xl overflow-hidden shadow-md">
        <img
          src={item.img}
          alt={item.title}
          className="w-full h-52 object-cover"
          onError={(e) => {
            e.target.style.display = "none";
            e.target.parentElement.classList.add(
              "bg-blue-950",
              "h-52",
              "flex",
              "items-center",
              "justify-center"
            );
          }}
        />
      </div>
    </div>
  );
}

/* ─── Mobile timeline (single column) ───────────────────────────── */
function MobileTimelineRow({ item, index }) {
  const rowRef = useRef(null);

  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("opacity-100", "translate-y-0");
          el.classList.remove("opacity-0", "translate-y-8");
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={rowRef}
      className="flex gap-4 opacity-0 translate-y-8 transition-all duration-700"
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      {/* Spine */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div
          className="w-3.5 h-3.5 rounded-full border-4 mt-1"
          style={{ borderColor: "#334BBB", backgroundColor: "#0f172a" }}
        />
        <div className="w-px flex-1 mt-2" style={{ backgroundColor: "#334BBB" }} />
      </div>

      {/* Content */}
      <div className="pb-10 flex-1">
        <p className="font-display text-3xl font-bold text-blue-800 mb-1">
          {item.year}
        </p>
        <p className="font-semibold text-gray-800 mb-2 text-sm">{item.title}</p>
        <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 mb-4">
          {item.points.map((pt, i) => (
            <li key={i}>{pt}</li>
          ))}
        </ul>
        <div className="rounded-2xl overflow-hidden shadow-md">
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-44 object-cover"
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
        </div>
      </div>
    </div>
  );
}

/* ─── Page ───────────────────────────────────────────────────────── */
export default function OurJourney() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <img
          src="https://shreemaruti.com/wp-content/uploads/2025/09/Div-careers-hero__background-1.png"
          alt="Our Journey"
          className="absolute inset-0 w-full h-full object-cover object-[0%_35%]"
          onError={(e) => {
            e.target.parentElement.classList.add("bg-blue-950");
            e.target.remove();
          }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-blue-950/60" />
        <div className="relative z-10 max-w-[1220px] mx-auto px-6 w-full pt-24 pb-16">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white leading-tight max-w-2xl">
            Built by Grit. Grown on Trust. Powered by Purpose.
          </h1>
          <p className="mt-4 text-white/80 text-lg">
            Where Innovation Meets Possibilities
          </p>
        </div>
      </section>

      {/* ── Our Journey Intro ── */}
      <section className="bg-[#171717] py-8">
        <div className="max-w-[1220px] mx-auto px-6">
          <h5 className="text-white/50 uppercase tracking-widest text-xs font-semibold mb-3">
            Our Journey
          </h5>
          <p className="text-white text-sm md:text-base leading-relaxed max-w-4xl">
            SMILe is driven by the commitment to solving real-world challenges through impactful
            solutions, all while offering seamless tech-driven customer experience. What began as a
            single-office operation in Porbandar, Gujarat, in 1985, has quietly evolved into one of
            India's top five logistics companies. We didn't follow the path of rapid scale-ups or
            billion-dollar valuations — instead, we built a brand on the strength of reliability.
            Technology has powered our growth; scaling operations and expanding reach, steering the
            graph upward through every disruption.
          </p>
        </div>
      </section>

      {/* ── Desktop Timeline ── */}
      <section className="hidden md:block max-w-[1220px] mx-auto px-6 pt-16 pb-24">
        <div className="relative">
          {TIMELINE.map((item, i) => (
            <TimelineRow key={i} item={item} index={i} />
          ))}
        </div>
      </section>

      {/* ── Mobile Timeline ── */}
      <section className="md:hidden max-w-[1220px] mx-auto px-6 pt-12 pb-20">
        {TIMELINE.map((item, i) => (
          <MobileTimelineRow key={i} item={item} index={i} />
        ))}
      </section>

      {/* ── CTA ── */}
      {/* <CTABanner /> */}
    </div>
  );
}
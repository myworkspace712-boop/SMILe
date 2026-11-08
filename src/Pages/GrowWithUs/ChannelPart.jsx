import { useEffect, useRef, useState } from "react";
import { TbArrowRight, TbPlus } from "react-icons/tb";
import { WHY_JOIN, PREREQS, FAQS } from "../../Data/GrowWithUs/channelPart.js";


export default function ChannelPart() {
  const heroRef = useRef(null);
  const whyRef = useRef(null);
  const prereqRef = useRef(null);
  const togetherRef = useRef(null);
  const faqRef = useRef(null);

  const [openFaq, setOpenFaq] = useState(null);

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
    [heroRef, whyRef, prereqRef, togetherRef, faqRef].forEach((r) => {
      if (r.current) observer.observe(r.current);
    });
    return () => observer.disconnect();
  }, []);


  return (
    
    <div className="min-h-screen bg-blue-950">

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden min-h-[90vh] flex items-end"
        style={{
          backgroundImage:
            "url('https://shreemaruti.com/wp-content/uploads/2025/01/Frame-2087327255-1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* dark overlay — same as VendorOB */}
        <div className="absolute inset-0 bg-linear-to-r from-blue-950/90 via-blue-950/60 to-transparent pointer-events-none" />

        <div
          ref={heroRef}
          className="relative max-w-[1220px] mx-auto px-6 pb-20 pt-48 opacity-0 translate-y-8 transition-all duration-700"
        >
          <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-400/20 text-orange-400 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            Grow With Us
          </span>

          <h1 className="font-display text-5xl md:text-6xl font-bold text-white leading-tight mb-5 max-w-2xl">
            Limitless Growth:{" "}
            <span className="text-orange-400">Become a Channel Partner</span>
          </h1>

          <p className="text-blue-200/80 text-lg max-w-md mb-10">
            Step into a world of endless possibilities as a valued franchise partner of India's fastest-growing logistics network.
          </p>

          <a
            href="/channel-partner-form"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-orange-500/30"
          >
            Sign Up Today <TbArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* ── Why Join Us ───────────────────────────────────────────────────── */}
      <section className="max-w-[1220px] mx-auto px-6 py-20">
        <div
          ref={whyRef}
          className="opacity-0 translate-y-8 transition-all duration-700"
        >
          {/* split: text left, image right */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-400/20 text-orange-400 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
                Why Join Us?
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                Partner With Us And{" "}
                <span className="text-orange-400">Spread The SMILe.</span>
              </h2>
              <p className="text-blue-200/60 text-base leading-relaxed max-w-md">
                Reimagining and reengineering Indian logistics for a prosperous tomorrow.
              </p>
            </div>

            <div className="flex justify-center lg:justify-end">
              <img
                src="https://shreemaruti.com/wp-content/uploads/2025/01/Frame-2087327224-1.png"
                alt="Channel Partner"
                className="w-64 lg:w-72 rounded-2xl object-cover shadow-2xl"
                onError={(e) => { e.currentTarget.style.display = "none"; }}
              />
            </div>
          </div>

          {/* stats bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-white/10 border border-white/10 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm mb-16">
            {[
              { num: "3551", suffix: "+", label: "Active Franchisees" },
              { num: "5000", suffix: "+", label: "Active Pincodes" },
              { num: "40", suffix: "+", label: "Years of Legacy" },
              { num: "Pan", suffix: "", label: "India Network" },
            ].map(({ num, suffix, label }) => (
              <div key={label} className="px-6 py-6 flex flex-col gap-1 hover:bg-white/8 transition-all duration-200 text-center sm:text-left">
                <span className="font-display font-extrabold text-4xl text-white leading-none">
                  {num}<span className="text-orange-400">{suffix}</span>
                </span>
                <span className="text-sm text-white/50">{label}</span>
              </div>
            ))}
          </div>

          {/* why join cards — 3-col same as VendorOB WHY_PARTNER */}
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-400/20 text-orange-400 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
              Partnership Benefits
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
              Why Partner with <span className="text-orange-400">SMILe?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY_JOIN.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className="group flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-400/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-950/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-400/20 flex items-center justify-center shrink-0 group-hover:bg-orange-500/20 transition-colors duration-200">
                    <Icon size={22} className="text-orange-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-1.5 group-hover:text-orange-300 transition-colors duration-200">
                      {item.label}
                    </p>
                    <p className="text-blue-200/60 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* divider */}
      <div className="max-w-[1220px] mx-auto px-6">
        <div className="border-t border-white/10" />
      </div>

      {/* ── Pre-requisites ─────────────────────────────────────────────────── */}
      <section className="max-w-[1220px] mx-auto px-6 py-20">
        <div
          ref={prereqRef}
          className="opacity-0 translate-y-8 transition-all duration-700"
        >
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-400/20 text-orange-400 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
              Pre-requisite
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
              Scale Up With <span className="text-orange-400">SMILe</span>
            </h2>
            <p className="text-blue-200/60 mt-3 max-w-xl mx-auto">
              Partner with SMILe to digitise your supply chain for faster, safer, and more efficient movement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {PREREQS.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group flex flex-col gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-400/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-950/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-400/20 flex items-center justify-center shrink-0 group-hover:bg-orange-500/20 transition-colors duration-200">
                    <Icon size={22} className="text-orange-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-1.5 group-hover:text-orange-300 transition-colors duration-200">
                      {item.title}
                    </p>
                    <p className="text-blue-200/60 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* divider */}
      <div className="max-w-[1220px] mx-auto px-6">
        <div className="border-t border-white/10" />
      </div>

      {/* ── Let's SMILe Together ───────────────────────────────────────────── */}
      <section className="max-w-[1220px] mx-auto px-6 py-20">
        <div
          ref={togetherRef}
          className="opacity-0 translate-y-8 transition-all duration-700 delay-100"
        >
          <div className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center gap-10 p-10 lg:p-16">
              <div className="flex-1">
                <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-400/20 text-orange-400 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                  Join The Network
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
                  Let's SMILe Together
                </h2>
                <p className="text-blue-200/60 text-base leading-relaxed mb-8 max-w-lg">
                  Join us to grow, build, and spread SMILe — let's break boundaries and redefine success together!
                </p>
                <a
                  href="/contact-us"
                  className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-orange-500/30"
                >
                  Join Us <TbArrowRight size={18} />
                </a>
              </div>

              <div className="w-56 lg:w-64 shrink-0">
                <img
                  src="https://shreemaruti.com/wp-content/uploads/2024/11/Image-1-3.png"
                  alt="SMILe Together"
                  className="w-full object-contain drop-shadow-2xl"
                  onError={(e) => { e.currentTarget.style.display = "none"; }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* divider */}
      <div className="max-w-[1220px] mx-auto px-6">
        <div className="border-t border-white/10" />
      </div>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="max-w-[1220px] mx-auto px-6 py-20">
        <div
          ref={faqRef}
          className="opacity-0 translate-y-8 transition-all duration-700 delay-150"
        >
          <div className="grid lg:grid-cols-[340px_1fr] gap-16 items-start">

            {/* sticky left */}
            <div className="lg:sticky lg:top-32">
              <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-400/20 text-orange-400 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
                FAQ
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                Questions?
              </h2>
              <p className="text-blue-200/60 text-base leading-relaxed">
                We're glad you asked.
              </p>
            </div>

            {/* accordion */}
            <div className="space-y-3">
              {FAQS.map((item, i) => {
                const isOpen = openFaq === i;
                return (
                  <div
                    key={i}
                    className={`rounded-2xl border overflow-hidden transition-colors duration-200
                                ${isOpen
                        ? "bg-orange-500/10 border-orange-400/30"
                        : "bg-white/5 border-white/10 hover:border-white/20"}`}
                  >
                    <button
                      className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                    >
                      <span className="text-white font-medium text-sm leading-snug">
                        {item.q}
                      </span>
                      <TbPlus
                        size={18}
                        className={`text-orange-400 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-45" : "rotate-0"}`}
                      />
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 pb-5" : "max-h-0"}`}>
                      <p className="text-blue-200/60 text-sm leading-relaxed px-6">
                        {item.a}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
import { useEffect, useRef } from "react";
import { TbFileText, TbDownload } from "react-icons/tb";
import { INVESTOR_DOCS, OTHER_DISCLOSURES } from "../../Data/AboutUs/otherDisclosures";


// ── PDF Download Card ─────────────────────────────────────────────────────────
function PDFCard({ doc }) {
  return (
    <a
      href={doc.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-400/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-950/30 transition-all duration-300"
    >
      <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-400/20 flex items-center justify-center shrink-0 group-hover:bg-orange-500/20 transition-colors duration-200">
        <TbFileText size={22} className="text-orange-400" />
      </div>
      <div className="flex-1">
        <p className="text-white font-semibold text-base leading-snug mb-1 group-hover:text-orange-300 transition-colors duration-200">
          {doc.label}
        </p>
        <p className="text-blue-200/60 text-xs">{doc.description}</p>
      </div>
      <div className="flex items-center gap-1.5 text-orange-400/60 group-hover:text-orange-400 transition-colors duration-200">
        <TbDownload size={14} />
        <span className="text-xs font-medium">Download PDF</span>
      </div>
    </a>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────
export default function InvestorRelations() {
  const heroRef = useRef(null);
  const cardsRef = useRef(null);
  const disclosuresRef = useRef(null);

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
    [heroRef, cardsRef, disclosuresRef].forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-blue-950">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 pt-28 pb-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div
          ref={heroRef}
          className="relative max-w-[1220px] mx-auto px-6 text-center opacity-0 translate-y-8 transition-all duration-700"
        >
          <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-400/20 text-orange-400 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            Investor Relations
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
            Transparency &{" "}
            <span className="text-orange-400">Disclosures</span>
          </h1>
          <p className="text-blue-200/80 text-lg max-w-2xl mx-auto">
            Access Shree Maruti Integrated Logistics' statutory filings, governance policies, and corporate disclosures.
          </p>
        </div>
      </section>

      {/* ── Investor Relations ───────────────────────────────────────────── */}
      <section className="max-w-[1220px] mx-auto px-6 py-16">
        <div
          ref={cardsRef}
          className="opacity-0 translate-y-8 transition-all duration-700 delay-100"
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="w-1 h-8 bg-orange-400 rounded-full" />
            <h2 className="text-white font-display text-2xl font-bold">
              Investor Relations
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {INVESTOR_DOCS.map((doc) => (
              <PDFCard key={doc.id} doc={doc} />
            ))}
          </div>
        </div>
      </section>

      {/* divider */}
      <div className="max-w-[1220px] mx-auto px-6">
        <div className="border-t border-white/10" />
      </div>

      {/* ── Other Disclosures ────────────────────────────────────────────── */}
      <section className="max-w-[1220px] mx-auto px-6 py-16">
        <div
          ref={disclosuresRef}
          className="opacity-0 translate-y-8 transition-all duration-700 delay-150"
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="w-1 h-8 bg-orange-400 rounded-full" />
            <h2 className="text-white font-display text-2xl font-bold">
              Other Disclosures
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {OTHER_DISCLOSURES.map((doc) => (
              <PDFCard key={doc.id} doc={doc} />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
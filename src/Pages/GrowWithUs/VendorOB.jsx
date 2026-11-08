import { useEffect, useRef, useState } from "react";
import {
  TbMail,
  TbPhone,
  TbArrowRight,
  TbCheck,
} from "react-icons/tb";
import { WHY_PARTNER, FORM_FIELDS } from "../../Data/GrowWithUs/vendorOB.js";


// ── Main Component ────────────────────────────────────────────────────────────
export default function VendorOB() {
  const heroRef = useRef(null);
  const whyRef = useRef(null);
  const formRef = useRef(null);
  const supportRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", industry: "",
    businessType: "", city: "", state: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

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
    [heroRef, whyRef, formRef, supportRef].forEach((r) => {
      if (r.current) observer.observe(r.current);
    });
    return () => observer.disconnect();
  }, []);

  function handleChange(e) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1200);
  }

  function scrollToForm() {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="min-h-screen bg-blue-950">

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden min-h-[90vh] flex items-end"
        style={{
          backgroundImage:
            "url('https://shreemaruti.com/wp-content/uploads/2025/04/Div-careers-hero__background-1.png')",
          backgroundSize: "cover",
          backgroundPosition: "25% center",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-blue-950/80 via-blue-950/50 to-transparent pointer-events-none" />

        <div
          ref={heroRef}
          className="relative max-w-[1220px] mx-auto px-6 pb-20 pt-48 opacity-0 translate-y-8 transition-all duration-700"
        >
          <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-400/20 text-orange-400 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            Grow with SMILe
          </span>

          <h1 className="font-display text-5xl md:text-6xl font-bold text-white leading-tight mb-5 max-w-xl">
            Let's Grow{" "}
            <span className="text-orange-400">Together</span>
          </h1>

          <p className="text-blue-200/80 text-lg max-w-md mb-10">
            Join us as a Partner (Vendor) and become part of one of India's fastest-growing integrated logistics networks.
          </p>

          <button
            onClick={scrollToForm}
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-orange-500/30"
          >
            Sign Up <TbArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* ── Why Partner ───────────────────────────────────────────────────── */}
      <section className="max-w-[1220px] mx-auto px-6 py-20">
        <div
          ref={whyRef}
          className="opacity-0 translate-y-8 transition-all duration-700"
        >
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-400/20 text-orange-400 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
              Partnership Benefits
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
              Why Partner with <span className="text-orange-400">SMILe?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY_PARTNER.map((item) => {
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

      {/* ── Vendor Form ───────────────────────────────────────────────────── */}
      <section className="max-w-[1220px] mx-auto px-6 py-20">
        <div
          ref={formRef}
          className="opacity-0 translate-y-8 transition-all duration-700 delay-100"
        >
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-400/20 text-orange-400 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
              Get Started
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
              Join Us as a <span className="text-orange-400">Vendor</span>
            </h2>
            <p className="text-blue-200/60 mt-3 max-w-md mx-auto">
              Basic details about you and your business. Our team will reach out within 2 working days.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {submitted ? (
              /* Success state */
              <div className="flex flex-col items-center gap-5 py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-orange-500/10 border border-orange-400/20 flex items-center justify-center">
                  <TbCheck size={30} className="text-orange-400" />
                </div>
                <h3 className="text-white font-display text-2xl font-bold">Application Submitted!</h3>
                <p className="text-blue-200/70 max-w-sm">
                  Thank you for your interest. Our partnership team will reach out to you within 2 working days.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setFormData({ name:"",email:"",phone:"",industry:"",businessType:"",city:"",state:"" }); }}
                  className="text-orange-400 text-sm font-medium hover:text-orange-300 transition-colors duration-200 underline underline-offset-4"
                >
                  Submit another application
                </button>
              </div>
            ) : (
              <div className="rounded-2xl bg-white/5 border border-white/10 p-8 md:p-10">
                <h3 className="text-white font-semibold text-lg mb-1">Personal Details</h3>
                <p className="text-blue-200/60 text-sm mb-8">All fields are required</p>

                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                    {FORM_FIELDS.map((field) => (
                      <div key={field.name} className={field.name === "state" ? "md:col-span-1" : ""}>
                        <label className="block text-blue-200/80 text-sm font-medium mb-2">
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          name={field.name}
                          value={formData[field.name]}
                          onChange={handleChange}
                          placeholder={field.placeholder}
                          required
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-blue-200/30 text-sm focus:outline-none focus:border-orange-400/50 focus:bg-white/8 transition-all duration-200"
                        />
                      </div>
                    ))}
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-400 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-orange-500/30"
                  >
                    {submitting ? "Submitting…" : "Submit Application"}
                    {!submitting && <TbArrowRight size={18} />}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* divider */}
      <div className="max-w-[1220px] mx-auto px-6">
        <div className="border-t border-white/10" />
      </div>

      {/* ── Support Section ───────────────────────────────────────────────── */}
      <section className="max-w-[1220px] mx-auto px-6 py-20">
        <div
          ref={supportRef}
          className="opacity-0 translate-y-8 transition-all duration-700 delay-150"
        >
          <div className="flex flex-col lg:flex-row items-start gap-12">
            {/* Left */}
            <div className="flex-1">
              <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-400/20 text-orange-400 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                Support
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                Have a <span className="text-orange-400">question?</span>
              </h2>
              <p className="text-blue-200/60 text-lg">We would love to help you out.</p>
            </div>

            {/* Right — contact cards */}
            <div className="flex-1 flex flex-col sm:flex-row gap-5 w-full">
              {/* Email */}
              <div className="flex-1 flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-400/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-950/30 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-400/20 flex items-center justify-center shrink-0 group-hover:bg-orange-500/20 transition-colors duration-200">
                  <TbMail size={22} className="text-orange-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1.5">Email</h3>
                  <p className="text-blue-200/60 text-sm mb-3 leading-relaxed">
                    Get in touch and we'll reply within 2 working days.
                  </p>
                  <a
                    href="mailto:info@shreemaruti.com"
                    className="text-orange-400 text-sm font-medium hover:text-orange-300 transition-colors duration-200"
                  >
                    info@shreemaruti.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex-1 flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-400/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-950/30 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-400/20 flex items-center justify-center shrink-0 group-hover:bg-orange-500/20 transition-colors duration-200">
                  <TbPhone size={22} className="text-orange-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1.5">Phone</h3>
                  <p className="text-blue-200/60 text-sm mb-3 leading-relaxed">
                    Available Monday–Friday, 9:30 AM – 6:30 PM.
                  </p>
                  <a
                    href="tel:+919712666666"
                    className="text-orange-400 text-sm font-medium hover:text-orange-300 transition-colors duration-200"
                  >
                    +91 9712 666 666
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
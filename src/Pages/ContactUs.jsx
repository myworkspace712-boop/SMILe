import { useEffect, useRef, useState } from "react";
import { TbArrowRight, TbCheck, TbSearch } from "react-icons/tb";
import { CONTACT_CARDS, INQUIRY_OPTIONS, SHIPMENT_OPTIONS } from "../Data/contactUs";


export default function ContactUs() {
  const s1 = useRef(null), s2 = useRef(null), s3 = useRef(null), s4 = useRef(null);
  const [activeTab, setActiveTab] = useState(0);
  const [biSubmitted, setBiSubmitted] = useState(false);
  const [csSubmitted, setCsSubmitted] = useState(false);
  const [biTerms, setBiTerms] = useState(false);
  const [citySearch, setCitySearch] = useState("");
  const [pinSearch, setPinSearch] = useState("");

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("opacity-100", "translate-y-0");
          e.target.classList.remove("opacity-0", "translate-y-8");
        }
      }),
      { threshold: 0.1 }
    );
    [s1, s2, s3, s4].forEach(r => r.current && obs.observe(r.current));
    return () => obs.disconnect();
  }, []);

  const inp = "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-blue-200/30 text-sm focus:outline-none focus:border-orange-400/50 transition-all duration-200";
  const sel = "w-full bg-blue-950 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-orange-400/50 transition-all duration-200 appearance-none";
  const pill = "inline-flex items-center gap-2 bg-orange-500/10 border border-orange-400/20 text-orange-400 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-5";

  return (
    <div className="min-h-screen bg-blue-950">

      {/* ── PAGE TITLE ───────────────────────────────────────────────────── */}
      <section className="pt-24 pb-12 text-center max-w-[1220px] mx-auto px-6">
        <div ref={s1} className="opacity-0 translate-y-8 transition-all duration-700">
          <span className={pill}>Contact</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Contact <span className="text-orange-400">Us</span>
          </h1>
          <p className="text-blue-200/60 text-lg">Let's shape a solution that fits your business perfectly.</p>
        </div>
      </section>

      <div className="max-w-[1220px] mx-auto px-6">
        <div className="border-t border-white/10" />
      </div>

      {/* ── TABS — Business Inquiry / Customer Support ───────────────────── */}
      <section className="max-w-[1220px] mx-auto px-6 py-16">
        <div ref={s2} className="opacity-0 translate-y-8 transition-all duration-700">

          {/* Tab switcher */}
          <div className="flex gap-3 border-b border-white/10 mb-12">
            {["Business Inquiry", "Customer Support"].map((t, i) => (
              <button key={i} onClick={() => setActiveTab(i)}
                className={`pb-4 px-1 text-sm font-semibold border-b-2 transition-all duration-200 whitespace-nowrap
                  ${activeTab === i ? "border-orange-400 text-orange-400" : "border-transparent text-blue-200/50 hover:text-blue-200/80"}`}>
                {t}
              </button>
            ))}
          </div>

          {/* ── Business Inquiry ── */}
          {activeTab === 0 && (
            <div className="grid lg:grid-cols-[1fr_340px] gap-10 items-start">
              {/* Form */}
              <div className="rounded-2xl bg-white/5 border border-white/10 p-8 md:p-10">
                {biSubmitted ? (
                  <div className="flex flex-col items-center gap-5 py-10 text-center">
                    <div className="w-16 h-16 rounded-full bg-orange-500/10 border border-orange-400/20 flex items-center justify-center">
                      <TbCheck size={30} className="text-orange-400" />
                    </div>
                    <h3 className="text-white font-display text-2xl font-bold">Inquiry Submitted!</h3>
                    <p className="text-blue-200/60 max-w-sm">Thank you! Our team will reach out within 2 working days.</p>
                    <button onClick={() => setBiSubmitted(false)}
                      className="text-orange-400 text-sm font-medium hover:text-orange-300 underline underline-offset-4">
                      Submit another inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={e => { e.preventDefault(); if (biTerms) setBiSubmitted(true); }}>
                    <h3 className="text-white font-semibold text-lg mb-1">Business Inquiry</h3>
                    <p className="text-blue-200/60 text-sm mb-8">Fields marked * are required</p>

                    <div className="grid md:grid-cols-2 gap-5 mb-5">
                      {[
                        { name: "full_name", label: "Name *", type: "text" },
                        { name: "company_name", label: "Organisation *", type: "text" },
                        { name: "email", label: "Your E-mail *", type: "email" },
                        { name: "website", label: "Website", type: "text" },
                        { name: "phone", label: "Contact No. *", type: "tel" },
                        { name: "city", label: "City or Pincode *", type: "text" },
                      ].map(f => (
                        <div key={f.name}>
                          <label className="block text-blue-200/80 text-sm font-medium mb-2">{f.label}</label>
                          <input type={f.type} name={f.name} required={f.label.includes("*")} placeholder={f.label.replace(" *", "")} className={inp} />
                        </div>
                      ))}
                    </div>

                    {/* Three-col row */}
                    <div className="grid md:grid-cols-3 gap-5 mb-5">
                      <div>
                        <label className="block text-blue-200/80 text-sm font-medium mb-2">Inquiring for *</label>
                        <div className="relative">
                          <select name="inquring" required className={sel}>
                            <option value="">Please Select</option>
                            {INQUIRY_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
                          </select>
                          <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-blue-200/40">▾</div>
                        </div>
                      </div>
                      <div>
                        <label className="block text-blue-200/80 text-sm font-medium mb-2">Frequently Shipped Routes *</label>
                        <input type="text" name="current_courier" placeholder="e.g. Mumbai–Delhi" className={inp} />
                      </div>
                      <div>
                        <label className="block text-blue-200/80 text-sm font-medium mb-2">Number of Shipments *</label>
                        <div className="relative">
                          <select name="num_shipments" required className={sel}>
                            <option value="">Please Select</option>
                            {SHIPMENT_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
                          </select>
                          <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-blue-200/40">▾</div>
                        </div>
                      </div>
                    </div>

                    <div className="mb-8">
                      <label className="block text-blue-200/80 text-sm font-medium mb-2">Inquiry in detail *</label>
                      <textarea name="inquiry_detail" rows={4} required placeholder="Tell us more about your requirements…"
                        className={`${inp} resize-none`} />
                    </div>

                    {/* Terms */}
                    <div className="flex items-start gap-3 mb-8">
                      <input type="checkbox" id="bi-terms" checked={biTerms} onChange={e => setBiTerms(e.target.checked)}
                        className="mt-1 w-4 h-4 rounded border-white/20 accent-orange-500 shrink-0" />
                      <label htmlFor="bi-terms" className="text-blue-200/60 text-sm">
                        I agree to the{" "}
                        <a href="/privacy-policy" className="text-orange-400 hover:text-orange-300 underline underline-offset-4">
                          terms and conditions
                        </a>
                      </label>
                    </div>

                    <button type="submit" disabled={!biTerms}
                      className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-orange-500/30">
                      Submit <TbArrowRight size={18} />
                    </button>
                  </form>
                )}
              </div>

              {/* Side image */}
              <div className="hidden lg:block">
                <img
                  src="https://shreemaruti.com/wp-content/uploads/2025/10/Contact-Us-SMILe-website-02-2.jpg"
                  alt="Business Inquiry"
                  className="w-full rounded-2xl object-cover shadow-2xl"
                  onError={e => { e.currentTarget.style.display = "none"; }}
                />
              </div>
            </div>
          )}

          {/* ── Customer Support ── */}
          {activeTab === 1 && (
            <div className="grid lg:grid-cols-[1fr_340px] gap-10 items-start">
              <div className="rounded-2xl bg-white/5 border border-white/10 p-8 md:p-10">
                {csSubmitted ? (
                  <div className="flex flex-col items-center gap-5 py-10 text-center">
                    <div className="w-16 h-16 rounded-full bg-orange-500/10 border border-orange-400/20 flex items-center justify-center">
                      <TbCheck size={30} className="text-orange-400" />
                    </div>
                    <h3 className="text-white font-display text-2xl font-bold">Request Submitted!</h3>
                    <p className="text-blue-200/60 max-w-sm">Thank you! We will get back to you shortly.</p>
                    <button onClick={() => setCsSubmitted(false)}
                      className="text-orange-400 text-sm font-medium hover:text-orange-300 underline underline-offset-4">
                      Submit another request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={e => { e.preventDefault(); setCsSubmitted(true); }}>
                    <h3 className="text-white font-semibold text-lg mb-1">Customer Support</h3>
                    <p className="text-blue-200/60 text-sm mb-8">All fields marked * are required</p>

                    <div className="space-y-5 mb-8">
                      {[
                        { name: "awb", label: "AWB *", type: "text", placeholder: "Enter AWB number" },
                        { name: "name", label: "Name *", type: "text", placeholder: "Your name" },
                        { name: "email", label: "Email *", type: "email", placeholder: "your@email.com" },
                        { name: "mobile", label: "Mobile *", type: "tel", placeholder: "+91 XXXXX XXXXX" },
                      ].map(f => (
                        <div key={f.name}>
                          <label className="block text-blue-200/80 text-sm font-medium mb-2">{f.label}</label>
                          <input type={f.type} name={f.name} required placeholder={f.placeholder} className={inp} />
                        </div>
                      ))}

                      <div>
                        <label className="block text-blue-200/80 text-sm font-medium mb-2">I'm *</label>
                        <div className="relative">
                          <select name="im" required className={sel}>
                            <option value="">Please Select</option>
                            <option value="customer">A Customer</option>
                            <option value="enterprise_client">An Enterprise Client</option>
                          </select>
                          <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-blue-200/40">▾</div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-blue-200/80 text-sm font-medium mb-2">I need help with *</label>
                        <div className="relative">
                          <select name="help" required className={sel}>
                            <option value="">Please Select</option>
                            <option value="reschedule_delivery">Reschedule Delivery</option>
                            <option value="self_collect_parcel">Self collect parcel</option>
                            <option value="tracking_parcel_status">Tracking parcel status</option>
                            <option value="booking_pickup_concern">Booking / pickup / drop off concern</option>
                            <option value="delivery_person_behaviour">Delivery person behaviour</option>
                          </select>
                          <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-blue-200/40">▾</div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-blue-200/80 text-sm font-medium mb-2">Tell us more</label>
                        <textarea name="details" rows={4} placeholder="Any additional details…" className={`${inp} resize-none`} />
                      </div>
                    </div>

                    <button type="submit"
                      className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-orange-500/30">
                      Submit <TbArrowRight size={18} />
                    </button>
                  </form>
                )}
              </div>

              <div className="hidden lg:block">
                <img
                  src="https://shreemaruti.com/wp-content/uploads/2025/11/Contact-Us-SMILe-website-Customer-Care-04-2.jpg"
                  alt="Customer Support"
                  className="w-full rounded-2xl object-cover shadow-2xl"
                  onError={e => { e.currentTarget.style.display = "none"; }}
                />
              </div>
            </div>
          )}
        </div>
      </section>

      <div className="max-w-[1220px] mx-auto px-6">
        <div className="border-t border-white/10" />
      </div>

      {/* ── CONTACT CARDS ────────────────────────────────────────────────── */}
      <section className="max-w-[1220px] mx-auto px-6 py-20">
        <div ref={s3} className="opacity-0 translate-y-8 transition-all duration-700">
          <div className="text-center mb-14">
            <span className={pill}>Reach Us</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
              Contact <span className="text-orange-400">Us</span>
            </h2>
            <p className="text-blue-200/60 mt-3">We would love to hear from you.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CONTACT_CARDS.map(c => {
              const Icon = c.icon;
              return (
                <div key={c.title}
                  className="group flex flex-col gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-400/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-950/30 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-400/20 flex items-center justify-center shrink-0 group-hover:bg-orange-500/20 transition-colors duration-200">
                    <Icon size={22} className="text-orange-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-1 group-hover:text-orange-300 transition-colors duration-200">{c.title}</p>
                    <p className="text-blue-200/50 text-xs mb-3">{c.sub}</p>
                    <a href={c.link} target="_blank" rel="noopener noreferrer"
                      className="text-orange-400 text-sm font-medium hover:text-orange-300 transition-colors duration-200 leading-relaxed">
                      {c.linkText}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="max-w-[1220px] mx-auto px-6">
        <div className="border-t border-white/10" />
      </div>

      {/* ── STORE LOCATOR ────────────────────────────────────────────────── */}
      <section className="max-w-[1220px] mx-auto px-6 py-20" id="store-locator">
        <div ref={s4} className="opacity-0 translate-y-8 transition-all duration-700 delay-100">
          <div className="text-center mb-12">
            <span className={pill}>Store Locator</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Find a <span className="text-orange-400">Branch</span>
            </h2>
            <p className="text-blue-200/60 max-w-xl mx-auto">
              Shree Maruti Integrated Logistics is serving customers across 2,646+ locations all over India. Find your nearest branch below.
            </p>
          </div>

          <div className="max-w-2xl mx-auto rounded-2xl bg-white/5 border border-white/10 p-8 md:p-10">
            <div className="grid md:grid-cols-2 gap-5 mb-6">
              <div>
                <label className="block text-blue-200/80 text-sm font-medium mb-2">Search by City</label>
                <div className="relative">
                  <input
                    type="text"
                    value={citySearch}
                    onChange={e => setCitySearch(e.target.value)}
                    placeholder="Enter City Name"
                    className={`${inp} pr-10`}
                  />
                  <TbSearch size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-blue-200/40" />
                </div>
              </div>
              <div>
                <label className="block text-blue-200/80 text-sm font-medium mb-2">Search by Pincode</label>
                <div className="relative">
                  <input
                    type="text"
                    value={pinSearch}
                    onChange={e => setPinSearch(e.target.value)}
                    placeholder="Enter Centre Pincode"
                    className={`${inp} pr-10`}
                  />
                  <TbSearch size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-blue-200/40" />
                </div>
              </div>
            </div>

            <button className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-orange-500/30">
              Search Branch <TbArrowRight size={18} />
            </button>

            {/* Result placeholder */}
            {(citySearch || pinSearch) && (
              <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10 text-blue-200/60 text-sm">
                Searching for branches near <span className="text-orange-400 font-medium">{citySearch || pinSearch}</span>…
              </div>
            )}
          </div>
        </div>
      </section>

    </div>
  );
}
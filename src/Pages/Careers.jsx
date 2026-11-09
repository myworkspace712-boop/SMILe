import { useEffect, useRef, useState } from "react";
import { TbArrowRight, TbCheck } from "react-icons/tb";
import { AI_CARDS, EARLY, PRO, WELLBEING, TESTIMONIALS } from "../Data/careers.js";


export default function Careers() {
  const heroRef = useRef(null);
  const s1 = useRef(null), s2 = useRef(null), s3 = useRef(null);
  const s4 = useRef(null), s5 = useRef(null), s6 = useRef(null);

  const [careerTab, setCareerTab] = useState(0);
  const [wellTab,   setWellTab]   = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [submitting,setSubmitting]= useState(false);
  const [form, setForm] = useState({ firstName:"", lastName:"", email:"", phone:"", country:"", city:"" });

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("opacity-100","translate-y-0");
          e.target.classList.remove("opacity-0","translate-y-8");
        }
      }),
      { threshold: 0.1 }
    );
    [heroRef, s1, s2, s3, s4, s5, s6].forEach(r => r.current && obs.observe(r.current));
    return () => obs.disconnect();
  }, []);

  const pill = "inline-flex items-center gap-2 bg-orange-500/10 border border-orange-400/20 text-orange-400 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-5";
  const card = "group flex flex-col gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-400/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-950/30 transition-all duration-300";
  const input = "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-blue-200/30 text-sm focus:outline-none focus:border-orange-400/50 transition-all duration-200";

  return (
    <div className="min-h-screen bg-blue-950">

      {/* HERO */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-end"
        style={{ backgroundImage:"url('https://shreemaruti.com/wp-content/uploads/2025/04/Hero.jpg')", backgroundSize:"cover", backgroundPosition:"90% center" }}>
        <div className="absolute inset-0 bg-linear-to-r from-blue-950/85 via-blue-950/50 to-transparent pointer-events-none" />
        <div ref={heroRef} className="relative max-w-[1220px] mx-auto px-6 pb-20 pt-48 opacity-0 translate-y-8 transition-all duration-700">
          <span className={pill}>Careers</span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white leading-tight mb-4 max-w-xl">
            Careers with <span className="text-orange-400">SMILe</span>
          </h1>
          <p className="text-blue-200/80 text-lg max-w-md mb-10">Where Innovation Meets Possibilities</p>
          <button onClick={() => s3.current?.scrollIntoView({ behavior:"smooth" })}
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-orange-500/30">
            See Openings <TbArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* LEGACY */}
      <section className="max-w-[1220px] mx-auto px-6 py-20">
        <div ref={s1} className="opacity-0 translate-y-8 transition-all duration-700 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className={pill}>Our Story</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-5">From Legacy to <span className="text-orange-400">Agility</span></h2>
            <p className="text-blue-200/60 leading-relaxed">From humble beginnings to supply chain pioneers, our journey is powered by people. We're driven by talent, technology, and a deep focus on customer-centric solutions.</p>
          </div>
          <div>
            <h3 className="font-display text-2xl font-bold text-white mb-3">The Beacon of Trust</h3>
            <p className="text-blue-200/60 leading-relaxed">For four decades, SMILe has been synonymous with trust and reliability. The world has evolved into a digital-first ecosystem — and so have we.</p>
          </div>
        </div>
      </section>

      <div className="max-w-[1220px] mx-auto px-6"><div className="border-t border-white/10" /></div>

      {/* AI LAB */}
      <section className="py-20 bg-white/3">
        <div ref={s2} className="max-w-[1220px] mx-auto px-6 opacity-0 translate-y-8 transition-all duration-700">
          <div className="text-center mb-14">
            <span className={pill}>SMILe Digital & AI Lab</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">A Leap Towards The <span className="text-orange-400">Future</span></h2>
            <p className="text-blue-200/60 max-w-2xl mx-auto leading-relaxed">SMILe Digital & AI Lab has been instrumental in our transformation — bringing unprecedented efficiency, accuracy and scale to our operations.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {AI_CARDS.map(c => (
              <div key={c.title} className={card}>
                <img src={c.img} alt={c.title} className="w-full rounded-xl object-cover" onError={e => e.currentTarget.style.display="none"} />
                <p className="text-white font-semibold group-hover:text-orange-300 transition-colors duration-200">{c.title}</p>
                <p className="text-blue-200/60 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-[1220px] mx-auto px-6"><div className="border-t border-white/10" /></div>

      {/* CAREER OPENINGS */}
      <section className="max-w-[1220px] mx-auto px-6 py-20" id="open">
        <div ref={s3} className="opacity-0 translate-y-8 transition-all duration-700">
          <div className="flex gap-3 border-b border-white/10 mb-12">
            {["Early Career Opportunities", "Professional Career Opportunities"].map((t, i) => (
              <button key={i} onClick={() => setCareerTab(i)}
                className={`pb-4 px-1 text-sm font-semibold border-b-2 transition-all duration-200 ${careerTab===i ? "border-orange-400 text-orange-400" : "border-transparent text-blue-200/50 hover:text-blue-200/80"}`}>
                {t}
              </button>
            ))}
          </div>

          {careerTab === 0 ? (
            <>
              <span className={pill}>Campus Hiring & Internships</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">Kickstart Your Career with <span className="text-orange-400">SMILe!</span></h2>
              <p className="text-blue-200/60 leading-relaxed mb-10 max-w-2xl">Ready to grow, learn, and make an impact? At SMILe, students and graduates find the perfect environment to evolve and create meaning.</p>
              <div className="flex flex-wrap gap-3">
                {EARLY.map(l => (
                  <button key={l} className="inline-flex items-center gap-2 bg-white/5 border border-white/15 text-white/80 text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-orange-500/10 hover:border-orange-400/30 hover:text-orange-400 transition-all duration-200">
                    {l} <TbArrowRight size={15} />
                  </button>
                ))}
              </div>
            </>
          ) : (
            <>
              <span className={pill}>Full-time Career Opportunities</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">Elevate Your Career with <span className="text-orange-400">SMILe!</span></h2>
              <p className="text-blue-200/60 leading-relaxed mb-10 max-w-2xl">Join our team of innovators. Explore our open roles and find the right fit for you.</p>
              <div className="flex flex-wrap gap-3">
                {PRO.map(l => (
                  <button key={l} className="inline-flex items-center gap-2 bg-white/5 border border-white/15 text-white/80 text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-orange-500/10 hover:border-orange-400/30 hover:text-orange-400 transition-all duration-200">
                    {l} <TbArrowRight size={15} />
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <div className="max-w-[1220px] mx-auto px-6"><div className="border-t border-white/10" /></div>

      {/* WELL-BEING */}
      <section className="py-20 bg-white/3">
        <div ref={s4} className="max-w-[1220px] mx-auto px-6 opacity-0 translate-y-8 transition-all duration-700">
          <p className="text-white/40 text-xs font-bold uppercase tracking-widest text-center mb-8">Well-being & Beyond</p>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {WELLBEING.map((t, i) => (
              <button key={i} onClick={() => setWellTab(i)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold border transition-all duration-200 ${wellTab===i ? "bg-orange-500 border-orange-500 text-white" : "bg-white/5 border-white/10 text-white/60 hover:text-white/90"}`}>
                {t.label}
              </button>
            ))}
          </div>
          <div className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden grid md:grid-cols-2">
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">{WELLBEING[wellTab].heading}</h2>
              <p className="text-blue-200/60 leading-relaxed">{WELLBEING[wellTab].body}</p>
            </div>
            <img src={WELLBEING[wellTab].img} alt="" className="w-full h-full object-cover min-h-[240px]" onError={e => e.currentTarget.style.display="none"} />
          </div>
        </div>
      </section>

      <div className="max-w-[1220px] mx-auto px-6"><div className="border-t border-white/10" /></div>

      {/* TESTIMONIALS */}
      <section className="max-w-[1220px] mx-auto px-6 py-20">
        <div ref={s5} className="opacity-0 translate-y-8 transition-all duration-700">
          <span className={pill}>Voices of Success</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-10">What our people say</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-400/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-950/30 transition-all duration-300">
                <p className="text-blue-200/70 text-sm leading-relaxed mb-6 italic">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover border border-white/10" onError={e => e.currentTarget.style.display="none"} />
                  <div>
                    <p className="text-white text-xs font-bold">{t.name}</p>
                    <p className="text-blue-200/50 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-[1220px] mx-auto px-6"><div className="border-t border-white/10" /></div>

      {/* CONTACT FORM */}
      <section className="max-w-[1220px] mx-auto px-6 py-20">
        <div ref={s6} className="opacity-0 translate-y-8 transition-all duration-700 delay-100">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className={pill}>Get in Touch</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">Have a <span className="text-orange-400">question?</span></h2>
              <p className="text-blue-200/60 text-lg">Drop us a message!</p>
            </div>

            <div className="rounded-2xl bg-white/5 border border-white/10 p-8 md:p-10">
              {submitted ? (
                <div className="flex flex-col items-center gap-5 py-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-orange-500/10 border border-orange-400/20 flex items-center justify-center">
                    <TbCheck size={30} className="text-orange-400" />
                  </div>
                  <h3 className="text-white font-display text-2xl font-bold">Application Submitted!</h3>
                  <p className="text-blue-200/70 max-w-sm">Thank you! We will get back to you soon.</p>
                  <button onClick={() => { setSubmitted(false); setForm({ firstName:"",lastName:"",email:"",phone:"",country:"",city:"" }); }}
                    className="text-orange-400 text-sm font-medium hover:text-orange-300 underline underline-offset-4">
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={e => { e.preventDefault(); setSubmitting(true); setTimeout(() => { setSubmitting(false); setSubmitted(true); }, 1200); }}>
                  <h3 className="text-white font-semibold text-lg mb-1">Fill out the form</h3>
                  <p className="text-blue-200/60 text-sm mb-8">All fields are required</p>
                  <div className="grid md:grid-cols-2 gap-5 mb-5">
                    {["firstName","lastName","email","phone","country","city"].map(k => (
                      <div key={k}>
                        <label className="block text-blue-200/80 text-sm font-medium mb-2 capitalize">{k.replace(/([A-Z])/g," $1")}</label>
                        <input type={k==="email"?"email":k==="phone"?"tel":"text"} name={k} value={form[k]}
                          onChange={e => setForm(p => ({...p,[k]:e.target.value}))}
                          placeholder={k.replace(/([A-Z])/g," $1")} required className={input} />
                      </div>
                    ))}
                  </div>
                  <div className="mb-5">
                    <label className="block text-blue-200/80 text-sm font-medium mb-2">Additional Information</label>
                    <input type="text" placeholder="Would you like to share more information..." className={input} />
                  </div>
                  <div className="mb-8">
                    <label className="block text-blue-200/80 text-sm font-medium mb-2">Upload CV</label>
                    <input type="file" accept=".pdf,.doc,.docx,image/*"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-blue-200/60 text-sm focus:outline-none focus:border-orange-400/50 transition-all duration-200 file:mr-4 file:py-1 file:px-3 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-orange-500/20 file:text-orange-400" />
                  </div>
                  <button type="submit" disabled={submitting}
                    className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-400 disabled:opacity-60 text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-orange-500/30">
                    {submitting ? "Submitting…" : <> Apply Now <TbArrowRight size={18} /> </>}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
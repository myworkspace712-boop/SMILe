import { useEffect, useRef } from "react";
// import CTABanner from "../Components/CTABanner";


const VALUES = [
  {
    title: "Values",
    desc: "The vision statement is deeply aligned with the firm's core values.",
    img: "https://shreemaruti.com/wp-content/uploads/2025/09/user-group-02-2.png",
  },
  {
    title: "Innovation",
    desc: "We challenge conventions and build bold, future-ready solutions that redefine how supply chains move.",
    img: "https://shreemaruti.com/wp-content/uploads/2025/09/ai-innovation-02.png",
  },
  {
    title: "Customer Centricity",
    desc: "We design everything around our customers by solving real problems, reducing friction, and creating lasting value.",
    img: "https://shreemaruti.com/wp-content/uploads/2025/09/customer-service-02.png",
  },
  {
    title: "Integrity",
    desc: "We uphold the highest standards through honesty, transparency, and accountability.",
    img: "https://shreemaruti.com/wp-content/uploads/2025/09/blend.png",
  },
  {
    title: "Trust",
    desc: "We earn it through reliability, consistency, and long-term thinking in every product, promise, and partnership.",
    img: "https://shreemaruti.com/wp-content/uploads/2025/09/safe.png",
  },
  {
    title: "People",
    desc: "We grow with those around us. Every user, partner, and teammate shapes our journey. Their success defines ours.",
    img: "https://shreemaruti.com/wp-content/uploads/2025/09/user-multiple.png",
  },
  {
    title: "Technology",
    desc: "We use technology as a force multiplier, making systems smarter, faster, and radically simpler.",
    img: "https://shreemaruti.com/wp-content/uploads/2025/09/nano-technology.png",
  },
  {
    title: "National Spirit",
    desc: "Driven by the spirit of Atmanirbhar Bharat, we innovate with Indian ingenuity to shape systems that serve the world.",
    img: "https://shreemaruti.com/wp-content/uploads/2025/09/india-gate.png",
  },
];

const VISIONARIES = [
  {
    name: "Ram Mokariya",
    role: "Founder, Shree Maruti Integrated Logistics Ltd",
    img: "https://shreemaruti.com/wp-content/uploads/2025/09/RamMokariya.png",
    bio: "Ram Mokariya, Founder of Shree Maruti Integrated Logistics Ltd started from modest beginnings in Saurashtra, he envisioned a logistics network that redefines speed, reliability and service excellence across the nation. He is recognized as a pioneer who transformed the traditional courier landscape by introducing a franchise model long before it became an industry norm. His vision replaced the age old 'Angadiya' model of business with a framework-driven, tech-orchestrated one, setting new benchmarks for service delivery. Under his leadership, Shree Maruti became synonymous with trust in banking and business sectors. His values are deeply routed in uplifting society, through SMILe, he created employment opportunities for hundreds of youth, offering them professional training and a risk free path to entrepreneurship.",
    imgMain: true,
  },
  {
    name: "Ajay Mokariya",
    role: "MD SMILe",
    img: "https://shreemaruti.com/wp-content/uploads/2026/02/AjayMokariyaN1.png",
    bio: "Ajay Mokariya's journey is a study in grounded leadership. Starting his career as a delivery boy in 2003. He learned the business from the ground up—guided by the core lessons from the pioneer, Ram Mokariya: commit less, deliver more; rent first, then scale; and never compromise on customer trust. He championed operational stability over reckless speed, quietly growing the company's handling capacity to 2.5 lakh parcels daily. His philosophy is simple: let integrity, consistency, and agility drive the business. A second-generation entrepreneur with a first-principles mindset, he remains committed to building a logistics brand for the long haul that's reliable, tech-forward, and deeply Indian.",
    imgMain: false,
  },
  {
    name: "Maulik Mokariya",
    role: "Chairman",
    img: "https://shreemaruti.com/wp-content/uploads/2025/09/MaulikMokariya.png",
    bio: "Maulik Mokariya brings deep operational and strategic expertise to his role as Chairman at Shree Maruti Integrated Logistics. With a foundation in finance and management from Middlesex University, Maulik has been instrumental in driving the company's growth across diverse logistics verticals. Over the years, he has led key initiatives in business expansion, large-scale project execution, and process streamlining—enhancing Shree Maruti's responsiveness in a rapidly evolving supply chain ecosystem. His hands-on problem solving with long-term strategic thinking, plays a critical role in partnerships that enable Shree Maruti to scale sustainably.",
    imgMain: false,
  },
  {
    name: "Ganesh Iyer",
    role: "Non-Executive Director",
    img: "https://shreemaruti.com/wp-content/uploads/2025/09/GaneshIyer.png",
    bio: "Ganesh Iyer is a seasoned technology leader with 30+ years of professional experience in building scalable systems for enterprises like Walmart, Future Group and Tesco. Combining sharp business acumen with analytical rigour and storytelling, Ganesh drives tech-driven strategies that deliver measurable value. With a Bachelor's in Electronics, a PGD from MIT, and a visionary mindset, he fuels innovation to ensure sustained business success.",
    imgMain: false,
  },
  {
    name: "H. M Odedra",
    role: "Mentor",
    img: "https://shreemaruti.com/wp-content/uploads/2025/09/HM.png",
    bio: "H. M Odedra combines deep expertise in channel business with a sharp understanding of logistics operations, bringing both strategic foresight and operational discipline to Shree Maruti Integrated Logistics. A hands-on leader, he has been central to building the company's robust pan-India network, enabling scale, consistency, and resilience across diverse markets.",
    imgMain: false,
  },
];

const TEAM = [
  { name: "Priyank Patel", role: "CEO Coldverse", img: "https://shreemaruti.com/wp-content/uploads/2025/09/Priyank.png" },
  { name: "Utsav Dongre", role: "CEO, Cargodham", img: "https://shreemaruti.com/wp-content/uploads/2025/09/Utsav.png" },
  { name: "Sarang Bondre", role: "Head of Engineering", img: "https://shreemaruti.com/wp-content/uploads/2025/09/Sarang.png" },
  { name: "Pratik Joshi", role: "CGOO", img: "https://shreemaruti.com/wp-content/uploads/2025/09/Pratik.png" },
  { name: "Abhinov Prakash", role: "Group – CHRO", img: "https://shreemaruti.com/wp-content/uploads/2025/09/Abhinav.png" },
  { name: "Pooja Balwatkar", role: "CHRO – Parcel Delivery", img: "https://shreemaruti.com/wp-content/uploads/2025/09/Pooja.png" },
  { name: "Neha Manisha", role: "CLO", img: "https://shreemaruti.com/wp-content/uploads/2025/09/Neha.png" },
];

/* ─── Scroll-in hook ─────────────────────────────────────────────── */
function useFadeIn(delay = 0) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = `${delay}ms`;
          el.classList.add("opacity-100", "translate-y-0");
          el.classList.remove("opacity-0", "translate-y-6");
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

/* ─── Value card ─────────────────────────────────────────────────── */
function ValueCard({ v, index }) {
  const ref = useFadeIn(index * 60);
  return (
    <div
      ref={ref}
      className="opacity-0 translate-y-6 transition-all duration-600 bg-white rounded-2xl p-5 flex flex-col gap-3 hover:-translate-y-1 hover:shadow-lg"
      style={{ transition: "opacity 0.6s, transform 0.6s" }}
    >
      <img
        src={v.img}
        alt={v.title}
        className="w-10 h-10 object-contain"
        onError={(e) => (e.target.style.display = "none")}
      />
      <h3 className="font-display text-lg font-bold text-blue-950">{v.title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{v.desc}</p>
    </div>
  );
}

/* ─── Visionary row ──────────────────────────────────────────────── */
function VisionaryRow({ v, index }) {
  const ref = useFadeIn(0);
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`opacity-0 translate-y-6 transition-all duration-700 grid md:grid-cols-2 gap-10 items-start mb-16`}
      style={{ transition: "opacity 0.7s, transform 0.7s" }}
    >
      {isEven ? (
        <>
          <ImgBlock v={v} />
          <TextBlock v={v} />
        </>
      ) : (
        <>
          <TextBlock v={v} />
          <ImgBlock v={v} />
        </>
      )}
    </div>
  );
}

function ImgBlock({ v }) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-md">
      <img
        src={v.img}
        alt={v.name}
        className="w-full object-cover"
        style={{ maxHeight: "420px", objectPosition: "top" }}
        onError={(e) => {
          e.target.parentElement.classList.add("bg-blue-950", "h-64");
          e.target.remove();
        }}
      />
    </div>
  );
}

function TextBlock({ v }) {
  return (
    <div className="flex flex-col justify-center">
      <p className="text-sm text-gray-600 leading-relaxed mb-4">{v.bio}</p>
      <h4 className="font-display text-xl font-bold text-blue-950">{v.name}</h4>
      <p className="text-sm text-orange-500 font-medium">{v.role}</p>
    </div>
  );
}

/* ─── Team card ──────────────────────────────────────────────────── */
function TeamCard({ member, index }) {
  const ref = useFadeIn(index * 60);
  return (
    <div
      ref={ref}
      className="opacity-0 translate-y-6 transition-all duration-600 relative rounded-2xl overflow-hidden group"
      style={{ transition: "opacity 0.6s, transform 0.6s" }}
    >
      <img
        src={member.img}
        alt={member.name}
        className="w-full object-cover object-top"
        style={{ height: "320px" }}
        onError={(e) => {
          e.target.parentElement.classList.add("bg-blue-900");
          e.target.remove();
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-950/20 to-transparent" />
      <div className="absolute bottom-0 left-0 p-4">
        <h4 className="font-display font-bold text-white text-base">{member.name}</h4>
        <p className="text-orange-400 text-xs font-medium">{member.role}</p>
      </div>
    </div>
  );
}

/* ─── Page ───────────────────────────────────────────────────────── */
export default function PeoplePurposeCulture() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section className="relative min-h-[90vh] flex items-end overflow-hidden">
        <img
          src="https://shreemaruti.com/wp-content/uploads/2025/09/Team-picture-1.png"
          alt="People Purpose Culture"
          className="absolute inset-0 w-full h-full object-cover object-[0%_35%]"
          onError={(e) => {
            e.target.parentElement.classList.add("bg-blue-950");
            e.target.remove();
          }}
        />
        <div className="absolute inset-0 bg-blue-950/50" />
        <div className="relative z-10 max-w-[1220px] mx-auto px-6 w-full pb-20 pt-40">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white leading-tight max-w-xl">
            People, Purpose &amp; Culture
          </h1>
        </div>
      </section>

      {/* ── Values & Culture ── */}
      <section className="max-w-[1220px] mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image cluster */}
          <div className="rounded-2xl overflow-hidden shadow-md">
            <img
              src="https://shreemaruti.com/wp-content/uploads/2025/09/Div-careers-photo-cluster-1.png"
              alt="Team cluster"
              className="w-full object-cover"
              onError={(e) => {
                e.target.parentElement.classList.add("bg-blue-100", "h-80");
                e.target.remove();
              }}
            />
          </div>
          {/* Text */}
          <div>
            <h2 className="font-display text-3xl font-bold text-blue-950 mb-5">
              Values and culture
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Our people are the reason every promise is kept. From the frontline Maruti Marshals to
              the experts in Tech and the core leadership, every member of our team believes in doing
              right by the customer. We foster a culture where learning, ownership, and trust
              flourish. That culture comes from decades of delivering on our word, through thick and
              thin. Success does not mean flashy growth metrics, but how our people grow with us, how
              many customers return, and how many communities we uplift. At Shree Maruti, purpose is
              not a campaign, it's how we operate.
            </p>
          </div>
        </div>
      </section>

      {/* ── Core Values Grid ── */}
      <section className="bg-[#171717] py-12">
        <div className="max-w-[1220px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {VALUES.map((v, i) => (
              <ValueCard key={i} v={v} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Visionaries Behind the Brand ── */}
      <section className="max-w-[1220px] mx-auto px-6 py-20">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-blue-950 text-center mb-16">
          Visionaries Behind the Brand
        </h2>
        {VISIONARIES.map((v, i) => (
          <VisionaryRow key={i} v={v} index={i} />
        ))}
      </section>

      {/* ── Strategy & Stewardship ── */}
      <section className="bg-[#171717] py-12">
        <div className="max-w-[1220px] mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl font-bold text-white mb-2">
              Strategy &amp; Stewardship
            </h2>
            <p className="text-white/60 text-sm">Built by specialists. Backed by experience.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {TEAM.map((member, i) => (
              <TeamCard key={i} member={member} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      {/* <CTABanner /> */}
    </div>
  );
}
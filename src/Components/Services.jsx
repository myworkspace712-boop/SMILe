import { useEffect, useRef, useState } from "react";
import { SERVICES_ENTERPRISE, SERVICES_INDIVIDUAL } from "../Data/siteData.js";

import {
  MdLocalShipping, MdAssignmentReturn, MdShoppingCart, MdWarehouse,
  MdInventory, MdAcUnit, MdFlightTakeoff, MdHeadsetMic,
} from "react-icons/md";

import {
  MdMailOutline, MdPublic, MdBusinessCenter, MdBolt
} from "react-icons/md";

import { GiSuitcase } from "react-icons/gi";

const ICON_MAP = {
  bulk: MdLocalShipping,
  return: MdAssignmentReturn,
  ecommerce: MdShoppingCart,
  warehouse: MdWarehouse,
  inventory: MdInventory,
  coldchain: MdAcUnit,
  intlcargo: MdFlightTakeoff,
  postpurchase: MdHeadsetMic,
  domestic: MdMailOutline,
  intlcourier: MdPublic,
  valueplus: MdBusinessCenter,
  fasttrack: MdBolt,
  travel: GiSuitcase,
};

const SERVICE_IMAGES = {
  "E-commerce Shipping": "/E-Commerce_Shipping.jpg",
  "Warehousing & Fulfilment": "",
  "Inventory Management": "",
  "Cold Chain Solutions": "",
  "Bulk Shipping": "",
  "Return Management": "",
  "International Cargo": "",
  "Post Purchase Solutions": "",
  "Domestic Courier": "",
  "International Courier": "",
  "Value Plus": "",
  "Fast Track Domestic": "",
  "Travel Free": "",
};


export function ServiceCollage({ items, spans, roundings }) {
  const [visible, setVisible] = useState(false);
  const [animKey, setAnimKey] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(false);
          setTimeout(() => setVisible(true), 50);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Re-trigger float animation on tab switch
  useEffect(() => {
    setVisible(false);
    const t = setTimeout(() => setVisible(true), 50);
    setAnimKey((k) => k + 1);
    return () => clearTimeout(t);
  }, [items]);

  // Different shapes per card index
  const shapes = [
    "rounded-2xl",
    "rounded-3xl",
    "rounded-xl",
    "rounded-2xl",
    "rounded-3xl",
    "rounded-xl",
    "rounded-2xl",
    "rounded-3xl",
  ];

  // Different sizes per card index
  const sizes = [
    "col-span-2 row-span-2",
    "col-span-2 row-span-4",
    "col-span-2 row-span-3",
    "col-span-4 row-span-1",
    "col-span-2 row-span-3",
    "col-span-2 row-span-4",
    "col-span-2 row-span-6",
    "col-span-2 row-span-1",
  ];

  // Float animation delays
  const floatDelays = [
    "0s", "0.4s", "0.8s", "0.2s",
    "0.6s", "1.0s", "0.3s", "0.7s",
  ];


  return (
    <div
      ref={ref}
      className={`grid grid-cols-4 gap-1 [grid-auto-flow:dense] transition-all duration-700
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
      style={{ gridAutoRows: "200px" }}>
      {items.slice(0, 8).map(({ iconKey, title, desc }, i) => (
          
          <div
            key={`${animKey}-${title}`}
            className={`relative rounded-2xl overflow-hidden cursor-pointer group
                      w-full h-full border border-white/20 hover:border-blue-300 hover:dark:border-orange-500/45
                      shadow-md hover:shadow-xl transition-all duration-500
                      ${shapes[i % shapes.length]}
                      ${sizes[i % sizes.length]}
                      ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
                      ${roundings[i % roundings.length]}`}
            style={{
              transitionDelay: `${i * 120}ms`,
              ...spans[i % spans.length],
              animation: visible
                ? `stickerFloat 4s ease-in-out ${floatDelays[i % floatDelays.length]} infinite`
                : "none",
            }}
          >
            {/* Background image */}
            {SERVICE_IMAGES[title] && (
              <img
                src={SERVICE_IMAGES[title]}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover opacity-90
              transition-all duration-500"
                onError={(e) => e.currentTarget.style.display = "none"}
              />
            )}

            {/* Top edge highlight */}
            <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r
                          from-transparent via-white/20 to-transparent" />

            {/* Dark gradient overlay so text is readable */}
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent z-10" />

            {/* Float animation on hover */}
            <div className="relative z-20 p-5 sm:p-6 flex flex-col justify-end h-full
                transition-transform duration-300">
              {iconKey && (
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl self-start
                              bg-white/60 dark:bg-white/70 backdrop-blur-md flex items-center justify-center text-xl sm:text-2xl mb-2 sm:mb-3
                              dark:border-transparent transition-all duration-300">
                  {(() => { const Icon = ICON_MAP[iconKey]; console.log("iconKey:", iconKey, "Icon:", Icon); return Icon ? <Icon className="w-6 h-6" /> : null; })()}
                </div>
                )}

              <h4 className="font-display font-bold text-sm sm:text-base mb-1.5
                             text-white/70 dark:text-zinc-400 transition-colors duration-300">
                {title}
              </h4>

              <p className="hidden xl:block text-white/70 dark:text-zinc-400 text-xs sm:text-[13px] leading-relaxed line-clamp-3
               transition-colors duration-300">{desc}</p>
              {/* <span className="inline-flex items-center gap-1 mt-auto text-xs font-bold
                 text-orange-500 group-hover:text-orange-400 group-hover:gap-2 transition-all duration-300">
              Learn more <MdArrowForward className="w-3 h-3" />
            </span> */}
            </div>

            {/* Corner accent */}
            {/* <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full
                          bg-orange-500/40 group-hover:bg-orange-400/80
                          transition-all duration-300 z-20" /> */}

            {/* Hover glass overlay */}
            <div className="absolute inset-0 bg-linear-to-br from-white/4 via-transparent to-transparent
              opacity-0 group-hover:opacity-100 transition-opacity duration-300
              pointer-events-none z-30" />
          </div>
        ))
      }
    </div>
  );
}


export default function Services() {
  const [tab, setTab] = useState("enterprise");
  const items = tab === "enterprise" ? SERVICES_ENTERPRISE : SERVICES_INDIVIDUAL;

  const spansEnterprise = [
    { gridColumn: "span 4", gridRow: "span 2" },
    { gridColumn: "span 2", gridRow: "span 1" },
    { gridColumn: "span 2", gridRow: "span 2" },
    { gridColumn: "span 4", gridRow: "span 2" },
    { gridColumn: "span 2", gridRow: "span 1" },
    { gridColumn: "span 2", gridRow: "span 3" },
    { gridColumn: "span 2", gridRow: "span 1" },
    { gridColumn: "span 2", gridRow: "span 2" },
  ];

  const spansIndividual = [
    { gridColumn: "span 2", gridRow: "span 1" },
    { gridColumn: "span 2", gridRow: "span 2" },
    { gridColumn: "span 2", gridRow: "span 2" },
    { gridColumn: "span 2", gridRow: "span 1" },
    { gridColumn: "span 4", gridRow: "span 2" },
  ];

  const roundingsEnterprise = [
    "rounded-3xl", "rounded-3xl", "rounded-3xl", "rounded-3xl", "rounded-3xl", "rounded-3xl"
  ];

  const roundingsIndividual = [
    "rounded-3xl", "rounded-3xl"
  ];


  return (
    <section className="py-16 sm:py-24 dark:bg-zinc-900">
      <div className="max-w-[1220px] mx-auto px-4 sm:px-6">

        <div className="text-center mb-10 sm:mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 dark:text-zinc-300/80 dark:border-zinc-500 border border-blue-300/80 dark:bg-zinc-700/70 text-blue-900
                           text-xs font-bold tracking-widest uppercase mb-5">
            Bharat in Motion
          </span>
          <p className="text-gray-700/90 dark:text-zinc-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed -mb-5">
            SMILe ensures that every piece of software, people, and service providers work
            towards fulfilling their delivery promises, so that the brands can focus on what they do best,
            building great products and curating superlative customer experiences.
          </p>
        </div>

        <h2 className="font-display font-extrabold text-blue-900 dark:text-zinc-300 text-2xl sm:text-4xl xl:text-5xl
                       text-center leading-tight mb-4">
          What We <span className="text-orange-400 dark:text-orange-300">Deliver</span>
        </h2>

        {/* Tab switcher */}
        <div className="flex justify-center mb-8 sm:mb-10">
          <div className="flex gap-1.5 bg-blue-100 dark:bg-zinc-700/70 border border-blue-300/70 dark:border-zinc-600 rounded-full p-1.5">
            {[
              { key: "enterprise", label: "For Enterprises" },
              { key: "individual", label: "For Individuals" },
            ].map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setTab(key)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold
                          transition-all duration-300 cursor-pointer
                          ${tab === key
                    ? "bg-white backdrop-blur-md text-blue-950 dark:text-mauve-800 shadow-md"
                    : "text-blue-700 hover:text-blue-900 hover:dark:text-orange-400 dark:text-orange-300"
                  }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <ServiceCollage items={items} spans={tab === "enterprise" ? spansEnterprise : spansIndividual}
          roundings={tab === "enterprise" ? roundingsEnterprise : roundingsIndividual} />

      </div>
    </section >

  );
}
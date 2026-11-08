import { MdArrowForward, MdArrowOutward } from "react-icons/md";
import { PRODUCTS } from "./Data/siteData.js";
import { useEffect, useState } from "react";

// Real product logo images from shreemaruti.com
const PRODUCT_LOGOS = {
  "Innodel": "/Innodel_Logo.png",
  "Innofulfill": "/Innofulfill_Logo.png",
  "Coldverse": "/Coldverse_Logo.webp",
  "PALLET it": "/Pallet_it_Logo.png",
  "International": null,
  "CargoDham": ["/Cargodham_Logo_2.svg", "/Cargodham_Logo.svg"],
  "Pinified": "/Pinified_Logo.svg",
  // "Travel Free": "https://shreemaruti.com/wp-content/uploads/2023/08/travelfree-logo.png",
};

// const PRODUCT_IMAGES = {
//   "Innodel": "/E-Commerce_Shipping.jpg",
//   "Innofulfill": null,
//   "Coldverse": null,
//   "PALLET it": null,
//   "International": null,
//   "CargoDham": null,
//   "Pinified": null,
//   // "Travel Free": "",
// };

const PRODUCT_CAROUSEL = {
  "Innodel": ["/E-Commerce_Shipping.jpg", "/SMILe_Mango_Banner.jpg", null, null],
  "Innofulfill": ["/E-Commerce_Shipping.jpg", "/SMILe_Mango_Banner.jpg", null, null],
  "Coldverse": ["/E-Commerce_Shipping.jpg", "/SMILe_Mango_Banner.jpg", null, null],
  "PALLET it": ["/E-Commerce_Shipping.jpg", "/SMILe_Mango_Banner.jpg", null, null],
  "International": ["/E-Commerce_Shipping.jpg", "/SMILe_Mango_Banner.jpg", null, null],
  "CargoDham": ["/E-Commerce_Shipping.jpg", "/SMILe_Mango_Banner.jpg", null, null],
  "Pinified": ["/E-Commerce_Shipping.jpg", "/SMILe_Mango_Banner.jpg", null, null],
};

export function CardCarousel({ images }) {
  const [current, setCurrent] = useState(0);
  const valid = Array.isArray(images) ? images.filter(Boolean) : [];
  if (valid.length === 0) return null;

  useEffect(() => {
    if (valid.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % valid.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [valid.length]);

  return (
    <>
      {valid.map((src, i) => (
        <img
          key={i}
          src={src}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700
                     ${i === current ? "opacity-70" : "opacity-0"}`}
          onError={(e) => e.currentTarget.style.display = "none"}
        />
      ))}

      {/* Dot indicators — only if more than 1 image */}
      {valid.length > 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-40 flex gap-1.5">
          {valid.map((_, i) => (
            <button
              key={i}
              onClick={(e) => { e.preventDefault(); setCurrent(i); }}
              className={`rounded-full transition-all duration-300
                          ${i === current
                  ? "w-4 h-1.5 bg-white"
                  : "w-1.5 h-1.5 bg-white/50 hover:bg-white/80"
                }`}
            />
          ))}
        </div>
      )}
    </>
  );
}


export default function Products() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-100 to-white">
      <div className="max-w-[1220px] mx-auto px-4 sm:px-6">


        <div className="text-center mb-10 sm:mb-12 flex flex-col items-center text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-50 text-orange-600
                           text-xs font-bold tracking-widest uppercase mb-4">
            Our Products
          </span>

          {/* Heading */}
          <h2 className="font-display font-extrabold bg-linear-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent text-3xl sm:text-4xl xl:text-5xl leading-tight mb-4">
            Gladly Made in India,<br />
            <span className="bg-linear-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">Delivered to the World</span>
          </h2>

          {/* Subtext */}
          <p className="text-black text-center text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mb-8">
            The SMILe platform orchestrates real-time order, inventory, and logistics
            management through a tech-driven and scalable software; empowering brands
            to redefine fulfillment.
          </p>
          {/* <h2 className="font-display font-extrabold text-blue-950 text-2xl sm:text-4xl xl:text-5xl
                         leading-tight mb-4">
            From Humble Beginnings to{" "}
            <span className="text-orange-500">Global Excellence</span>
          </h2> */}
          {/* <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            SMILe has been built keeping users in mind. Our dedication to attention to
            detail ensures hassle-free logistics at all times.
          </p> */}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {PRODUCTS.map(({ name, desc }) => ( // tag,
            <a
              key={name}
              href=""
              className="group relative bg-gradient-to-b from-[#1a2368]/80 to-[#0f1540]/60
            border border-white/20 rounded-2xl p-5 sm:p-6 hover:border-orange-500/30 shadow-md hover:shadow-xl lg:hover:scale-105 hover:-translate-y-2
            transition-all duration-300 overflow-hidden flex flex-col h-full min-h-[240px] no-underline"
            >

              {/* Background carousel */}
              <CardCarousel images={PRODUCT_CAROUSEL[name] ?? []} />

              {/* Background image */}
              {/* {PRODUCT_IMAGES[name] && (
                <img
                  src={PRODUCT_IMAGES[name]}
                  alt={name}
                  className="absolute inset-0 w-full h-full object-cover opacity-70
                 group-hover:opacity-60 sm:group-hover:scale-105 md:group-hover:scale-107 lg:group-hover:scale-110 group-hover:scale-103 transition-all duration-500"
                  onError={(e) => e.currentTarget.style.display = "none"}
                />
              )} */}

              {/* Lighter gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500/30 via-blue-400/20 to-transparent z-10" />

              {/* Content */}
              <div className="relative z-20 p-5 sm:p-6 flex flex-col justify-between h-full flex-1">

                {/* Product logo with tag fallback */}
                <div className="h-9 mb-8 flex items-center">
                  {Array.isArray(PRODUCT_LOGOS[name]) ? (
                    PRODUCT_LOGOS[name].map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        alt={`${name} logo ${i + 1}`}
                        className="h-full w-auto object-contain opacity-80
                       group-hover:opacity-100 transition-opacity duration-300"
                        onError={(e) => e.currentTarget.style.display = "none"}
                      />
                    ))
                  ) : (
                    <img
                      src={PRODUCT_LOGOS[name]}
                      alt={name}
                      className="h-full w-auto object-contain opacity-80
                             group-hover:opacity-100 transition-opacity duration-300"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        e.currentTarget.nextElementSibling.style.display = "inline-block";
                      }}
                    />
                  )}
                </div>
                {/* <span
                    className="hidden px-3 py-1 rounded-full text-[10px] font-bold
                    uppercase tracking-widest bg-orange-50 text-orange-500"
                    >
                    {tag}
                    </span> */}

                {/* <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold
                      uppercase tracking-widest bg-orange-50 text-orange-500 mb-3">
                      {tag}
                      </span> */}

                <h4 className="font-display font-bold text-blue-400 text-sm sm:text-base mb-1.5
                      group-hover:text-blue-500 transition-colors duration-300">
                  {name}
                </h4>
                <p className="text-blue-100 text-[12.5px] leading-relaxed line-clamp-3 mb-2">{desc}</p>
                <span className="inline-flex mt-3 items-center gap-1 text-xs font-bold text-orange-400
                     group-hover:gap-2 group-hover:gap-2 group-hover:text-orange-500 transition-all duration-300">
                  Explore <MdArrowOutward className="w-3 h-3" />
                </span>
              </div>
              {/* Hover glass overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300
                  pointer-events-none z-30" />
            </a>
          ))}
        </div>
      </div>
    </section >
  );
}
import { MdArrowForward } from "react-icons/md";

export default function ContactUs() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br backdrop-blur-lg from-green-950/75 via-green-700/90 to-green-800/90 py-16 sm:py-24">

      {/* Glow blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[-5%] top-[10%] w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute right-[5%] bottom-[10%] w-56 sm:w-72 h-56 sm:h-72 rounded-full bg-blue-600/20 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-[1220px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center text-center">

          {/* Heading
          <h2 className="font-display font-extrabold bg-linear-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent text-3xl sm:text-4xl xl:text-5xl leading-tight mb-4">
            Gladly Made in India,<br />
            <span className="bg-linear-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">Delivered to the World</span>
          </h2> */}

          {/* Subtext
          <p className="text-white/68 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mb-8">
            The SMILe platform orchestrates real-time order, inventory, and logistics
            management through a tech-driven and scalable software; empowering brands
            to redefine fulfillment.
          </p> */}


          {/* CTA
           <a href=""
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full
                       bg-orange-400 hover:bg-orange-400/87 hover:shadow-md text-white text-sm font-bold
                       shadow-md transition-all duration-300 hover:scale-108 active:scale-95
                       no-underline mb-12"
          >
            Get in Touch <MdArrowForward className="w-4 h-4" />
          </a> */}

          {/* Map GIF */}
          <div className="w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <img
              src="https://shreemaruti.com/wp-content/uploads/2025/09/Map-GIF.gif"
              alt="Shree Maruti delivery network map"
              className="w-full h-auto object-cover"
              onError={(e) => e.currentTarget.style.display = "none"}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
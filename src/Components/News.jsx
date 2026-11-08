import { MdArrowOutward } from "react-icons/md";
import { NEWS } from "../Data/siteData.js";


// Real press logos from shreemaruti.com media section
const PRESS_LOGOS = {
  "Business Standard": "/News/FirstIndia_Copy.jpg",
  "Forbes India": "/News/ForbesID_Copy.jpg",
  "First India": "/News/FirstIndia2_Copy.jpg",
  "ET Auto": "/News/ET_Auto_Copy.jpg",
  "Economic Times": "/News/The_Economic_Times_Copy.jpg",
  "ITLN": "/News/Indian_Transport_Logistics_Copy.jpg",
};


export default function News() {
  return (
    <section className="py-16 sm:py-24 bg dark:bg-zinc-900">
      <div className="max-w-[1220px] mx-auto px-4 sm:px-6">

        <div className="text-center mb-10 sm:mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 dark:bg-zinc-700/70 text-blue-800 dark:text-zinc-300/80 shadow-sm
                           text-xs font-bold tracking-widest uppercase mb-4 border border-blue-300/70 dark:border-zinc-500">
            In The Press
          </span>
          <h2 className="font-display font-extrabold text-blue-900 dark:text-zinc-300 text-2xl sm:text-4xl xl:text-5xl
                         leading-tight mb-4">
            Latest <span className="text-orange-400 dark:text-orange-300">News</span>
          </h2>
          <p className="text-gray-600 dark:text-zinc-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Press releases, case studies and expert opinion from experts at Shree Maruti.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {NEWS.map(({ source, title }) => (
            <a
              key={title}
              href=""
              className="group bg-white border border-blue-200 dark:border-neutral-600 rounded-2xl overflow-hidden
                         hover:shadow-xl hover:-translate-y-1.5 hover:border-blue-300 dark:hover:border-zinc-500
                         transition-all duration-300 no-underline block"
            >
              {/* Thumbnail */}
              <div className="h-36 sm:h-40 flex items-center justify-center text-4xl sm:text-5xl
                              relative overflow-hidden">

                {/* Press logo — white inverted over thumbnail */}
                <div className="">
                  <img
                    src={PRESS_LOGOS[source]}
                    alt={source}
                    className="absolute inset-0 h-full w-full"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      e.currentTarget.nextElementSibling.style.display = "inline-block";
                    }}
                  />
                  <span className="hidden px-3 py-1 rounded-full bg-white/15 backdrop-blur-md
                                   border border-white/25 text-white text-[10px] font-bold tracking-wide">
                    {source}
                  </span>
                </div>
              </div>
              {/* selected text */}
              <div className="p-4 sm:p-5 bg-blue-100 dark:bg-neutral-800">
                <h5 className="font-display font-bold text-blue-900 dark:text-zinc-300/80 text-sm leading-snug
                               group-hover:text-blue-600 dark:group-hover:text-zinc-200 transition-colors duration-300 mb-3">
                  {title}
                </h5>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold
                                 text-orange-400 dark:text-orange-300/90 group-hover:gap-2 transition-all duration-300">
                  Read more <MdArrowOutward className="w-3 h-3" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
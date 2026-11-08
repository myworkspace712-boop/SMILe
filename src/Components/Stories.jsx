import { STORIES } from "../Data/siteData.js";


// images link in siteData.js
export default function Stories() {
  return (
    <section className="py-16 sm:py-24 dark:bg-zinc-900">
      <div className="max-w-[1220px] mx-auto px-4 sm:px-6">

        <div className="text-center mb-10 sm:mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full border border-blue-300/80 bg-blue-50 dark:border-zinc-500 dark:bg-zinc-700/70 dark:text-zinc-300/80 text-blue-800
                           text-xs font-bold tracking-widest uppercase mb-4">
            Customer Stories
          </span>
          <h2 className="font-display font-extrabold text-blue-900 dark:text-zinc-300 text-2xl sm:text-4xl xl:text-5xl
                         leading-tight mb-4">
            Stories That Make Us{" "}
            <span className="text-orange-400 dark:text-orange-300">Smile</span>
          </h2>
          <p className="text-gray-700/90 dark:text-zinc-300/80 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Real shipments. Real emotions. Real connections — from every corner of India to every corner of the world.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {STORIES.map(({ from, to, story, initials, name, sub, img }) => (
            <div
              key={name}
              className="group relative bg-linear-to-r from-blue-100/70 to-blue-50/70 dark:from-zinc-800 dark:to-zinc-700 border border-transparent rounded-2xl p-5 sm:p-6 shadow-md
                         hover:border-blue-300/80 hover:dark:border-zinc-300/40 backdrop-blur-md transition-all duration-300"
            >
              <span className="absolute top-4 right-5 font-display text-5xl sm:text-6xl text-blue-200/80 dark:text-zinc-400/80
                               leading-none select-none group-hover:text-blue-300/80 group-hover:dark:text-zinc-300/80
                               transition-colors duration-300">"</span>

              <div className="flex items-center gap-2 mb-4 relative z-10 flex-wrap">
                <span className="px-3 py-1 rounded-full bg-blue-900 dark:bg-blue-100 text-white dark:text-zinc-800 text-xs">
                  {from}
                </span>
                <span className="text-blue-950 font-bold dark:text-orange-400 text-sm">→</span>
                <span className="px-3 py-1 rounded-full bg-orange-500 dark:bg-orange-200 text-white dark:text-zinc-800 text-xs">
                  {to}
                </span>
              </div>

              <p className="text-gray-700 dark:text-zinc-300/90 text-xs leading-relaxed mb-5 relative z-10">{story}</p>

              <div className="flex items-center gap-2.5 relative z-10">
                <div className="w-10 h-10 rounded-full overflow-hidden shrink-0
                bg-linear-to-br from-blue-800 to-orange-500">
                  <img
                    src={img}
                    alt={name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      e.currentTarget.nextElementSibling.style.display = "flex";
                    }}
                  />
                  <div className="hidden w-full h-full items-center justify-center
                  text-white text-sm font-bold font-display">
                    {initials}
                  </div>
                </div>
                <div>
                  <p className="text-blue-900 dark:text-zinc-300 text-sm font-semibold">{name}</p>
                  <p className="text-gray-600 dark:text-zinc-400 text-xs">{sub}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
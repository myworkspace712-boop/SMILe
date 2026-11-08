import { FOOTER_LINKS, SOCIAL_LINKS } from "../Data/siteData.js";


// siteData.js
// Real social icon images from shreemaruti.com
const SOCIAL_ICON_IMGS = {
  f: "/Social_Media_Icons/Facebook1.png",
  in: "/Social_Media_Icons/Instagram.png",
  li: "/Social_Media_Icons/Linkedin.png",
  x: "/Social_Media_Icons/Twitter.png",
  yt: "/Social_Media_Icons/Youtube.png",
};


const SOCIAL_URLS = {
  f: "https://www.facebook.com/shreemarutiintegratedlogistics",
  in: "https://www.instagram.com/shreemarutiintegratedlogistics",
  li: "https://in.linkedin.com/company/shree-maruti-integrated-logistics-limited",
  x: "https://x.com/shreemaruti_ind?s=11&t=NHILDMegLbSBMHPu9v6l5g",
  yt: "https://m.youtube.com/@SMILEIndia23",
};

// Real app store badge images
const APP_BADGES = {
  "Google Play": "/Social_Media_Icons/Playstore.png",
  "App Store": "/Social_Media_Icons/Appstore.png",
};

const APP_URLS = {
  "Google Play": "https://play.google.com/store/apps/details?id=com.maruticourier.android&pcampaignid=web_share",
  "App Store": "https://apps.apple.com/in/app/shree-maruti-courier/id658296993",
};


export default function Footer() {
  return (
    <footer className="bg-blue-950 dark:bg-zinc-800">
      <div className="max-w-[1220px] mx-auto px-4 sm:px-6 pt-14 sm:pt-16 pb-8">

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 mb-10 sm:mb-12">

          {/* Brand — 2 cols on lg */}
          <div className="sm:col-span-2 lg:col-span-2 bg-linear-to-r from-white/25 via-white/35 to-white/25 dark:from-white/25 dark:via-white/35 dark:to-white/25 rounded-2xl py-5 gap-1 flex flex-col items-center">
            <a href="" className="flex items-center gap-2.5 mb-4 no-underline">
              <img
                src="/Logos/SMILe_Logo.png"
                alt=""
                className="h-20 w-30"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.nextElementSibling.style.display = "flex";
                }}
              />

            </a>
            <p className="text-[13.5px] text-white/85 dark:text-zinc-200 leading-relaxed mb-5 max-w-xs">
              India's fastest express delivery, supply chain and logistics provider.
              Gladly Made in India, delivered to the World.
            </p>


            {/* Social icons */}
            <div className="flex gap-2 flex-wrap">
              {SOCIAL_LINKS.map(({ icon, label }) => (
                <a
                  key={label}
                  href={SOCIAL_URLS[icon]}
                  // aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-3xl flex items-center justify-center transition-all duration-300 no-underline group"
                >
                  <img
                    src={SOCIAL_ICON_IMGS[icon]}
                    alt={label}
                    className="group-hover:opacity-100 transition-opacity duration-200"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      e.currentTarget.nextElementSibling.style.display = "block";
                    }}
                  />
                  <span className="hidden text-[11px] font-bold text-white/70">
                    {/* {SOCIAL_FALLBACK[icon]} */}
                  </span>
                </a>
              ))}
            </div>


            {/* App store badges */}
            <div className="flex gap-2 mt-4 flex-wrap">
              {["Google Play", "App Store"].map((name) => (
                <a
                  key={name}
                  href={APP_URLS[name]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  <img
                    src={APP_BADGES[name]}
                    alt={name}
                    className="h-[45px] w-[130px] rounded-full hover:opacity-100 transition-opacity duration-300"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      e.currentTarget.nextElementSibling.style.display = "flex";
                    }}
                  />
                  <div className="hidden items-center gap-2 px-3 py-2 rounded-xl bg-white/8 border border-white/10">
                    <span className="text-[11px] font-semibold text-white">{name}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>


          {/* Link columns — 3 cols within remaining 3 lg slots */}
          <div className="sm:col-span-2 lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
            {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
              <div key={heading}>
                <h4 className="font-display font-bold text-white/83 dark:text-zinc-300 text-[11px] tracking-widest uppercase mb-4">
                  {heading}
                </h4>
                <ul className="flex flex-col gap-2">
                  {links.map(({ label, badge }) => (
                    <li key={label}>
                      <a
                        href=""
                        className="text-[13px] text-white/60 dark:text-zinc-400 hover:dark:text-zinc-300 hover:text-white/90
                                   transition-colors duration-200 no-underline
                                   inline-flex items-center gap-2"
                      >
                        {label}
                        {badge && (
                          <span className="text-[9px] font-bold bg-orange-400/87 dark:bg-orange-300 dark:text-zinc-700 text-white/90 px-1.5 py-0.5 rounded-full">
                            {badge}
                          </span>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}


            {/* Contact */}
            <div>
              <h4 className="font-display font-bold text-white/83 dark:text-zinc-300 text-[11px] tracking-widest uppercase mb-4">
                Contact Us
              </h4>
              <ul className="flex flex-col gap-3 text-[13px] text-white/60 dark:text-zinc-400">
                <li>
                  <a href="mailto:info@shreemaruti.com"
                    className="hover:text-white/90 dark:hover:text-zinc-300 transition-colors duration-200 no-underline">
                    info@shreemaruti.com
                  </a>
                </li>
                <li>
                  <a href="tel:+919712666666"
                    className="hover:text-white/90 dark:hover:text-zinc-300 transition-colors duration-200 no-underline">
                    +91 9712 666 666
                  </a>
                </li>
                <li className="text-white/48 dark:text-zinc-400/68 text-[11px] leading-relaxed">
                  52/A, 5th Floor "Titanium", Nr. Prahaladnagar Garden,<br />
                  Corporate Road, Ahmedabad - 380015
                </li>
              </ul>
            </div>
          </div>
        </div>


        {/* Bottom bar */}
        <div className="border-t border-white/20 dark:border-orange-300/78 pt-6 flex flex-col sm:flex-row
                        items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-[12px] text-white/45 dark:text-zinc-500">
            © {new Date().getFullYear()} Shree Maruti. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
import { useState, useRef, useEffect } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { TbTruckDelivery } from "react-icons/tb";
// import {
//   MdOutlineAccountCircle, MdOutlineShoppingCart,
//   MdOutlineNotifications, MdOutlinePhone,
//   MdOutlinePeopleAlt, MdOutlineSettings, MdRefresh
// } from "react-icons/md";
import { MdArrowDropDown } from "react-icons/md";
// import { createPortal } from "react-dom";
import { NAV_ITEMS, TICKER_ITEMS } from "./Data/siteData.js";
import Sidebar from "./Sidebar";


export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [setProfileOpen] = useState(false); // profileOpen
  // const [walletSpin, setWalletSpin] = useState(false);
  const [awb, setAwb] = useState("");
  const [openDropdown, setOpenDropdown] = useState(null);

  const profileRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target))
        setProfileOpen(false);
      if (dropdownRef.current && !dropdownRef.current.contains(e.target))
        setOpenDropdown(null);
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  const handleTrack = (e) => { e.preventDefault(); };

  return (
    <div className="w-full font-sans">

      {/* ── Announcement ticker ─────────────────────── */}
      <div className="bg-blue-950 overflow-hidden py-1.5">
        <div className="animate-ticker flex w-max">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex items-center gap-15 pr-16">
              {TICKER_ITEMS.map((t, i) => (
                <span key={i} className="inline-flex items-center gap-2 text-xs text-white/70 whitespace-nowrap">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                  {t}
                </span>
              ))}
            </div>
          ))}
        </div>


      {/* ── Main navbar ─────────────────────────────── */}
      <nav className="sticky top-0 z-50 bg-blue-200/70 backdrop-blur-md border-b border-white/35 shadow-md">
        <div className="px-4 sm:px-6 h-[68px] flex items-center justify-between gap-3">

          {/* Logo */}
          {/* <a href="" className="flex items-center gap-2 shrink-0"> */}
            <img
              src="SMILe_Logo.png"
              alt="Shree Maruti Integrated Logistics"
              className="h-13 w-20 sm:h-14 sm:w-22"
              onError={(e) => { e.currentTarget.style.display = "none"; e.currentTarget.nextElementSibling.style.display = "flex"; }}
            />
            {/* <div className="h-10 w-10 rounded-xl bg-blue-800 items-center justify-center hidden">
              <span className="text-white font-display font-black text-base tracking-tighter">SM</span>
            </div> */}
            {/* <div className="hidden sm:block leading-tight">
              <p className="font-display font-bold text-sm text-blue-950">Shree Maruti</p>
              <p className="text-[10px] text-blue-700 font-medium">Integrated Logistics</p>
            </div> */}
          {/* </a> */}

          {/* Desktop nav links */}
          <div ref={dropdownRef} className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <div key={item.key} className="relative">
                {item.children ? (
                  <>
                    <button
                      onClick={(e) => { e.stopPropagation(); setOpenDropdown(openDropdown === item.key ? null : item.key); }}
                      className="flex items-center gap-0.5 px-3 py-2 rounded-full text-sm font-medium
                                 text-blue-950 hover:bg-white/50 hover:backdrop-blur-md
                                 transition-all duration-300 cursor-pointer"
                    >
                      {item.label}
                      <MdArrowDropDown
                        className={`w-4 h-4 transition-transform duration-300 ease-out
                                    ${openDropdown === item.key ? "rotate-180" : ""}`}
                      />
                    </button>

                    {openDropdown === item.key && (
                      <div
                        className="absolute top-full left-0 mt-2 z-50 min-w-[220px]
                                   bg-white/80 backdrop-blur-xl border border-white/60
                                   rounded-2xl shadow-xl py-2 animate-fade-in-up"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {item.children.map((child) => (
                          <a
                            key={child.label}
                            href=""
                            onClick={() => setOpenDropdown(null)}
                            className="flex flex-col px-4 py-2.5 mx-2 my-0.5 rounded-xl
                                       hover:bg-blue-50/70 hover:backdrop-blur-md
                                       transition-all duration-200 group"
                          >
                            <span className="text-sm font-semibold text-blue-950 group-hover:text-blue-800
                                             transition-colors duration-200">
                              {child.label}
                            </span>
                            {child.desc && (
                              <span className="text-[11px] text-gray-500 mt-0.5">{child.desc}</span>
                            )}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href=""
                    className="px-3 py-2 rounded-full text-sm font-medium text-blue-950
                               hover:bg-white/50 hover:backdrop-blur-md transition-all duration-300"
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2 shrink-0">

            {/* AWB quick track */}
            <form
              onSubmit={handleTrack}
              className="flex items-center gap-0 rounded-full overflow-hidden
                         border border-white/40 bg-blue-800/30 backdrop-blur-md shadow-md"
            >
              <div className="flex items-center gap-1.5 px-3 py-2">
                <TbTruckDelivery className="w-4 h-4 text-white/80 shrink-0" />
                <input
                  value={awb}
                  onChange={(e) => setAwb(e.target.value)}
                  placeholder="Enter the AWB Number"
                  className="bg-transparent border-none outline-none text-white text-xs
                             placeholder:text-white/50 w-28 lg:w-36"
                />
              </div>
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 active:bg-orange-700
                           transition-colors duration-200 text-white text-xs font-semibold
                           px-4 py-2 cursor-pointer"
              >
                Track
              </button>
            </form>

            {/* Ship Now CTA */}
            <a
              href=""
              className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-full
                         bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold
                         shadow-md hover:shadow-orange-400/40 transition-all duration-300
                         hover:scale-105 active:scale-95"
            >
              Ship Now
            </a>

            {/* Hamburger */}
            <button
              onClick={(e) => { e.stopPropagation(); setDrawerOpen((p) => !p); setProfileOpen(false); }}
              className="w-9 h-9 flex items-center justify-center rounded-full
                         bg-blue-800 text-white shadow-md border border-transparent
                         hover:bg-blue-800/70 hover:border-white/30 hover:scale-105
                         active:scale-95 transition-all duration-300 cursor-pointer"
              aria-label="Toggle menu"
            >
              <CiMenuBurger className="w-4 h-4" />
            </button>
          </div>
        </div>
      </nav>

      {/* ── Sidebar ──────────────────────────────────── */}
      <Sidebar drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />

      </div>
    </div >
  );
}
import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { MdArrowDropDown } from "react-icons/md";
import { NAV_ITEMS, SHIP_NOW, TICKER_ITEMS } from "../Data/siteData.js";
import Sidebar from "./Sidebar";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useTheme } from "../Components/ThemeContext";


export default function Navbar() {

  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const { dark, setDark } = useTheme();
  const dropdownRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [tickerHeight, setTickerHeight] = useState(32);
  const tickerRef = useRef(null);
  const shipDropdownRef = useRef(null);


  useEffect(() => {
    if (tickerRef.current) {
      setTickerHeight(tickerRef.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const ticker = tickerRef.current;
      if (!ticker) return;
      const tickerBottom = ticker.getBoundingClientRect().bottom;
      setTickerHeight(Math.max(0, tickerBottom));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const outsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target) &&
        shipDropdownRef.current && !shipDropdownRef.current.contains(e.target))
        setOpenDropdown(null);
    };

    document.addEventListener("click", outsideClick);
    return () => document.removeEventListener("click", outsideClick);
  }, []);


  return (

    <div className="w-full font-sans">

      {/* ── Announcement ticker ─────────────────────── */}
      <div ref={tickerRef} className="bg-blue-950 dark:bg-zinc-900 overflow-hidden py-1.5">
        <div className="animate-ticker flex w-max">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex items-center gap-15 pr-16">
              {TICKER_ITEMS.map((t, i) => (
                <span key={i} className="inline-flex items-center gap-2 text-xs text-white/90 whitespace-nowrap">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0" />
                  {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>


      {/* ── Main navbar ─────────────────────────────── */}
      <nav style={{ top: `${tickerHeight}px`, transition: "top 0.08s linear" }} className={`fixed top-0 left-0 right-0 z-50 bg-zinc-100 border-b dark:border-orange-400/50 border-blue-400 shadow-md transition-all duration-300  ease-[cubic-bezier(0.22,1,0.36,1)
        `}>

        <div className={`px-4 sm:px-6 h-[68px] bg-zinc-100 dark:bg-zinc-800 flex items-center justify-between gap-3
                       `}>

          {/* Logo */}
          <img
            src="/Logos/SMILe_Logo.png"
            alt="Shree Maruti Integrated Logistics"
            className="h-13 w-20 sm:h-14 sm:w-22"
            onError={(e) => { e.currentTarget.style.display = "none"; e.currentTarget.nextElementSibling.style.display = "flex"; }}
          />


          {/* Desktop nav links */}
          <div ref={dropdownRef} className="hidden xl:flex items-center gap-3">
            {NAV_ITEMS.map((item) => {
              const isActive = item.path === "/"
                ? location.pathname === "/"
                : location.pathname.startsWith(item.path);
              const isExpanded = openDropdown === item.key;
              return (
                <div key={item.key} className="relative">
                  {item.children ? (
                    <>
                      <button
                        onClick={(e) => { e.stopPropagation(); setOpenDropdown(openDropdown === item.key ? null : item.key); }}
                        className={`flex items-center gap-1 px-3 py-2 pb-4.5 mt-4 text-sm font-medium after:absolute after:bottom-0 after:left-0 after:border-b-2 after:bg:orange-400
                                  after:transition-all after:duration-300 transition-all duration-200 cursor-pointer hover:scale-107
                                   ${isActive || isExpanded ? "text-blue-900 scale-107 after:w-full after:border-blue-900 dark:text-zinc-300/90 dark:after:border-orange-400" : "text-blue-900 after:w-0 hover:after:w-full hover:after:border-blue-900 hover:dark:after:border-orange-400 dark:text-zinc-300/90"}`}
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
                                     bg-white/80 dark:bg-neutral-800 backdrop-blur-lg border border-transparent
                                     rounded-2xl shadow-lg py-2 animate-fade-in-down"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {item.children.map((child) => {
                            const isChildActive = location.pathname === child.path;
                            return (
                              <Link
                                key={child.label}
                                to={child.path}
                                onClick={() => setOpenDropdown(null)}
                                className={`flex flex-col px-4 py-3 mx-2 my-0.5 hover:dark:bg-neutral-700/80 hover:dark:border-neutral-500/80 border border-transparent transition-all duration-200 ease-in-out group hover:bg-blue-100/60 hover:border-blue-200 hover:rounded-2xl hover:shadow-md
                                           ${isChildActive ? "" : ""}`}>

                                <span className={`text-sm transition-colors duration-200
                                                 ${isChildActive ? "text-blue-900/85 dark:text-zinc-300/82" : "text-blue-800/90 dark:text-zinc-300/95"}`}>
                                  {child.label}
                                </span>
                                {child.desc && (
                                  <span className={`text-[11px] mt-0.5
                                                   ${isChildActive ? "text-blue-800/85 dark:text-zinc-300/75" : "text-blue-700 dark:text-zinc-200/85"}`}>
                                    {child.desc}
                                  </span>
                                )}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      className={`inline-block px-3 py-2 pb-4.5 mt-4 text-sm hover:scale-107 after:absolute after:bottom-0 after:left-0 after:border-b-2 after:bg:orange-400
                                  after:transition-all after:duration-300 transition-all duration-200
                                   ${isActive ? "text-blue-900 scale-107 border-b-2 after:border-blue-90 dark:border-orange-400 dark:text-zinc-300/90 dark:after:border-orange-400"
                          : "text-blue-900 after:w-0 hover:after:w-full hover:after:border-blue-900 hover:dark:after:border-orange-400 dark:text-zinc-300/90"}`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2 shrink-0">

            {/* Ship Now CTA */}
            <div className="relative" ref={shipDropdownRef}>

              <button
                onClick={(e) => { e.stopPropagation(); setOpenDropdown(openDropdown === "ship" ? null : "ship"); }}
                className={`relative top-0 left-0 mt-2 gap-1 py-2 px-4 flex items-center rounded-full
                bg-orange-400 dark:bg-orange-300 active:bg-orange-500 dark:active:bg-orange-400
                text-white/90 dark:text-zinc-700 text-xs font-bold
                shadow-md transition-all duration-200 hover:scale-108 cursor-pointer
              ${openDropdown === "ship" ? "" : ""}`}
              >

                Let's Get Shipping!<MdArrowDropDown className={`w-4 h-4 transition-transform duration-300 ease-out ${openDropdown === "ship" ? "rotate-180" : ""}`} />

              </button>

              {openDropdown === "ship" && (

                <div
                  className="absolute top-full left-0 mt-2 z-50 min-w-[220px]
                       bg-white/80 dark:bg-neutral-800 backdrop-blur-lg
                       rounded-2xl shadow-lg py-2 animate-fade-in-down"
                  onClick={(e) => e.stopPropagation()}
                >

                  {SHIP_NOW.map((child) => {
                    const isChildActive = location.pathname === child.path;

                    return (
                      <Link
                        key={child.label}
                        to={child.path}
                        onClick={() => setOpenDropdown(null)}
                        className={`flex flex-col px-4 py-3 mx-2 my-0.5 hover:dark:bg-neutral-700/80 hover:dark:border-neutral-500/80 border border-transparent transition-all duration-200 ease-in-out group hover:bg-blue-100/60 hover:border-blue-200 hover:rounded-2xl hover:shadow-md
                      ${isChildActive ? "" : ""}`}
                      >

                        <span className={`text-sm transition-colors duration-200
                       ${isChildActive ? "text-blue-900/85 dark:text-zinc-300/82" : "text-blue-800/90 dark:text-zinc-300/95"}`}>
                          {child.label}
                        </span>

                        {child.desc && (
                          <span className={`text-[11px] mt-0.5
                          ${isChildActive ? "text-blue-800/85 dark:text-zinc-300/75" : "text-blue-700 dark:text-zinc-200/85"}`}>
                            {child.desc}
                          </span>
                        )}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            <button
              onClick={() => setDark(!dark)}
              className="w-9 h-9 flex items-center justify-center rounded-full
             bg-blue-900 dark:bg-white/25 hover:backdrop-blur-md hover:border-white/30 text-white shadow-md hover:scale-108
             transition-all duration-200 cursor-pointer"
              aria-label="Toggle theme"
            >
              {dark ? <MdLightMode className="w-4 h-4 text-orange-300" /> : <MdDarkMode className="w-4 h-4 text-white" />}
            </button>

            {/* Hamburger */}
            <button
              onClick={(e) => { e.stopPropagation(); setDrawerOpen((p) => !p); }} // setProfileOpen(false);
              className="w-9 h-9 flex items-center justify-center rounded-full xl:hidden
                         bg-blue-900 text-white shadow-md border border-transparent
                         dark:bg-white/25 hover:backdrop-blur-md hover:border-white/30 hover:scale-108
                         transition-all duration-200 cursor-pointer"
              aria-label="Toggle menu"
            >
              <CiMenuBurger className="w-4 h-4 text-white dark:text-orange-300" />
            </button>
          </div>
        </div>
      </nav >


      {/* ── Sidebar ──────────────────────────────────── */}
      < Sidebar drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />

    </div >
  );
}
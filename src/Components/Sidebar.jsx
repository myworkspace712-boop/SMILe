import { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MdArrowDropDown } from "react-icons/md";
import { NAV_ITEMS } from "../Data/siteData.js";


export default function Sidebar({ drawerOpen, setDrawerOpen }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(null);
  const drawerRef = useRef(null);


  useEffect(() => {
    const outsideHandler = (e) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target))
        setDrawerOpen(false);
    };

    document.addEventListener("click", outsideHandler);
    return () => document.removeEventListener("click", outsideHandler);
  }, [drawerOpen, setDrawerOpen]);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  if (!drawerOpen) return null;


  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-black/25 backdrop-blur-sm animate-backdrop-fade"
        onClick={() => setDrawerOpen(false)}
      />

      {/* Drawer panel */}
      <aside
        ref={drawerRef}
        className="fixed top-0 left-0 z-50 flex flex-col w-72 sm:w-80 md:w-96 h-screen
           bg-white/70 dark:bg-zinc-900/70 backdrop-blur-2xl
           border-r border-blue-100 dark:border-zinc-700
           shadow-2xl animate-slide-in-left"
      >


        {/* Nav items */}
        <div className="flex flex-col gap-5 sm:gap-5 md:gap-5 py-7 mt-5 px-2 sm:px-3 md:px-4 sm:py-8 md:py-9 flex-1 overflow-y-auto transition-all duration-300">
          {NAV_ITEMS.map(({ key, label, path, children }) => {
            const hasChildren = children && children.length > 0;
            const isExpanded = expanded === key;
            const isSelected = path === "/"
              ? location.pathname === "/"
              : location.pathname.startsWith(path);


            return (
              <div key={key}>
                <button
                  onClick={() => {
                    if (hasChildren) {
                      setExpanded((prev) => (prev === key ? null : key));
                    } else {
                      navigate(path);
                      setDrawerOpen(false);
                    }
                  }}
                  className={`flex items-center gap-2.5 w-full px-4 py-2.5 text-sm rounded-2xl
                            transition-all duration-300 cursor-pointer text-left
                            ${isExpanded || isSelected
                      ? "bg-blue-100/80 dark:bg-zinc-700/40 text-blue-950 dark:text-orange-300 border border-blue-300/70 dark:border-zinc-600"
                      : "text-blue-900 dark:text-zinc-400 border border-transparent hover:border-blue-200 hover:bg-blue-100/70 dark:hover:bg-zinc-700/50 dark:hover:border-zinc-700"
                    }`}>

                  <span className="flex-1">{label}</span>
                  {hasChildren && (
                    <MdArrowDropDown
                      className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-all duration-200 ease-in-out
                            ${isExpanded ? "rotate-180 text-blue-950 dark:text-orange-300" : "text-blue-900 dark:text-zinc-400"}
                            ${isSelected ? "text-blue-950" : "text-blue-900"}`}
                    />
                  )}
                </button>

                {/* Sub-items */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-out
                        ${isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                >

                  <div className="mt-1 mb-1 ml-3 sm:ml-4 md:ml-6 flex flex-col border-l-2 border-blue-100 dark:border-zinc-700 gap-0.5 sm:gap-1 transition-all duration-300">
                    {children?.map((child) => {
                      const isChildSelected = location.pathname === child.path;
                      return (
                        <button
                          key={child.label}
                          onClick={() => {
                            navigate(child.path);
                            setDrawerOpen(false);
                            setExpanded(null);
                          }}
                          className={`w-full text-left px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5
                                rounded-2xl text-[11px] sm:text-xs md:text-sm
                                transition-all duration-200 cursor-pointer
                                border border-transparent hover:shadow-md
                                hover:backdrop-blur-md
                                ${isChildSelected
                              ? "text-blue-950 dark:text-orange-400 dark:bg-zinc-700/40"
                              : "text-blue-900 dark:text-zinc-300/85 hover:bg-blue-100/68 dark:hover:bg-zinc-700/50"}`}
                        >

                          {child.label}
                          {child.desc && (
                            <span className={`block text-[9px] sm:text-[10px] md:text-[11px] mt-0.5 transition-all duration-300
                                            ${isChildSelected ? "text-blue-800 dark:text-orange-300" : "text-blue-700 dark:text-orange-400"}`}>
                              {child.desc}
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="px-5 py-4 border-t border-blue-50 dark:border-zinc-700/80">
          <p className="text-[10px] text-blue-500 dark:text-zinc-500 text-center">
            © Shree Maruti. All rights reserved
          </p>
        </div>
      </aside>
    </>
  );
}
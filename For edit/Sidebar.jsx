import { useState, useRef, useEffect } from "react";
import { MdArrowDropDown } from "react-icons/md";
// import { TbTruckDelivery } from "react-icons/tb";
import { NAV_ITEMS } from "./Data/siteData.js";

export default function Sidebar({ drawerOpen, setDrawerOpen }) {
  const [expanded, setExpanded] = useState(null);
  const [selected, setSelected] = useState(null);
  // const [clicked, setClicked] = useState(null);
  const drawerRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target))
        setDrawerOpen(false);
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, [drawerOpen, setDrawerOpen]);

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
        className="fixed top-0 left-0 z-50 flex flex-col w-[280px] sm:w-80 h-screen
                   bg-white/75 backdrop-blur-xl shadow-2xl text-blue-950
                   animate-slide-in-left"
      >
        {/* Logo header */}
        <div className="flex items-center justify-between px-5 pt-5 pb-4 border-b border-white/40">
          {/* <a href="" className="flex items-center gap-3"> */}
          <img
            src="Shree-Maruti_Logo.png"
            alt="Shree Maruti"
            className="h-16 w-42"
            onError={(e) => { e.currentTarget.style.display = "none"; e.currentTarget.nextElementSibling.style.display = "flex"; }}
          />
          {/* <div className="hidden w-10 h-10 rounded-xl bg-blue-800 items-center justify-center">
              <span className="text-white font-display font-black text-base tracking-tighter">SM</span>
            </div>
            <div className="leading-tight">
              <p className="font-display font-bold text-sm text-blue-950">Shree Maruti</p>
              <p className="text-[10px] text-blue-700 font-medium">Integrated Logistics</p>
            </div> */}
          {/* </a> */}
          <button
            onClick={() => setDrawerOpen(false)}
            className="w-8 h-8 rounded-full flex items-center justify-center
                       hover:bg-blue-100/60 text-blue-800 text-lg font-bold
                       transition-all duration-200 cursor-pointer mr-1.5"
          >
            ×
          </button>
        </div>

        {/* Nav items */}
        <div className="flex flex-col gap-1.5 px-3 py-4 flex-1 overflow-y-auto">
          {NAV_ITEMS.map(({ key, label, children }) => {
            const hasChildren = children && children.length > 0;
            const isExpanded = expanded === key;
            const isSelected = selected === key;

            return (
              <div key={key}>
                <button
                  onClick={() => {
                    setSelected(key);
                    if (hasChildren) {
                      setExpanded((prev) => (prev === key ? null : key));
                    } else {
                      setDrawerOpen(false);
                    }
                  }}
                  className={`flex items-center gap-3 w-full px-4 py-2.5 text-sm font-semibold
                              rounded-full transition-all duration-300 cursor-pointer text-left
                              border border-transparent
                              hover:border-white/30 hover:bg-white/50 hover:shadow-md
                              hover:backdrop-blur-md
                              ${isExpanded
                      ? "bg-white/65 shadow-md text-blue-950 font-bold"
                      : "text-blue-900"
                    } ${isSelected ? "text-blue-950 font-bold" : "text-blue-900"}`}
                >
                  <span className="flex-1">{label}</span>
                  {hasChildren && (
                    <MdArrowDropDown
                      className={`w-5 h-5 text-blue-900 transition-transform duration-300 ease-out
                                  ${isExpanded ? "rotate-180 text-blue-950" : ""}
                                  ${isSelected ? "text-blue-950 font-bold" : "text-blue-900"}`}
                    />
                  )}
                </button>

                {/* Sub-items */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-out
                    ${isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <div className="mt-1 mb-1 ml-3 sm:ml-4 md:ml-5 flex flex-col gap-0.5 sm:gap-1">
                    {children?.map((child) => {
                      const isSelected = selected === child.label;
                      return (
                        <button
                          key={child.label}
                          onClick={() => {
                            setSelected(child.label);
                            // setClicked(child.label);
                            setDrawerOpen(false);
                            setExpanded(null);
                          }}
                          className={`w-full text-left px-3 sm:px-4 py-1.5 sm:py-2 md:py-2.5
                      rounded-full text-xs sm:text-sm font-semibold
                      transition-all duration-200 cursor-pointer
                      border border-transparent
                      hover:border-white/30 hover:bg-white/50 hover:shadow-md
                      hover:backdrop-blur-md hover:scale-[1.02]
                      ${isSelected
                              ? "text-blue-950 font-semibold bg-white/60 shadow-md"
                              : "text-blue-900"
                            }`}
                        >
                          {child.label}
                          {child.desc && (
                            <span className={`block text-[10px] font-normal mt-0.5
                             ${isSelected ? "text-blue-800" : "text-blue-700"}
                             `}>
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

        <p className="text-center text-[10px] text-blue-500 py-3">
          © Shree Maruti. All rights reserved.
        </p>
      </aside>
      {/* {new Date().getFullYear()} */}
    </>
  );
}

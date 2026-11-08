// Navbar:

{/* <div className="h-10 w-10 rounded-xl bg-blue-800 items-center justify-center hidden">
              <span className="text-white font-display font-black text-base tracking-tighter">SM</span>
            </div> */}
{/* <div className="hidden sm:block leading-tight">
              <p className="font-display font-bold text-sm text-blue-950">Shree Maruti</p>
              <p className="text-[10px] text-blue-700 font-medium">Integrated Logistics</p>
            </div> */}
{/* </a> */ }

{/* <a href="" className="flex items-center gap-2 shrink-0"> */ }

{/* Profile avatar */ }
<div
  ref={profileRef}
  onClick={(e) => { e.stopPropagation(); setProfileOpen((p) => !p); }}
  className="w-9 h-9 rounded-full bg-orange-400/80 flex items-center justify-center
                         text-white font-bold text-sm shadow-md border border-transparent
                         hover:scale-105 active:scale-95 hover:border-white/30
                         hover:bg-orange-400/60 hover:backdrop-blur-md cursor-pointer
                         transition-all duration-300"
>
  A
</div>

{/* ── Profile dropdown portal ──────────────────── */ }
{
  profileOpen &&
    createPortal(
      <div
        onClick={(e) => e.stopPropagation()}
        className="fixed top-20 right-2 sm:right-4 z-200
                       w-[calc(100vw-16px)] max-w-[224px]
                       bg-white/70 backdrop-blur-xl shadow-xl
                       rounded-2xl py-2 border border-white/50
                       animate-fade-in-up"
      >
        <p className="text-center text-sm font-semibold text-blue-950 py-1 px-4">
          Demo for Testing (ADMIN)
        </p>

        <div className="border-b border-zinc-200 mx-3 mb-1 pb-1">
          <div className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium text-blue-950">
            <MdOutlineAccountCircle className="w-4 h-4 text-blue-900 shrink-0" />
            <span className="flex-1">Wallet</span>
            <span className="text-xs font-semibold text-zinc-600">₹ 24,500.00</span>
            <button
              onClick={(e) => { e.stopPropagation(); setWalletSpin(true); setTimeout(() => setWalletSpin(false), 700); }}
              className="text-orange-400 hover:text-orange-500 transition-colors cursor-pointer"
            >
              <MdRefresh className={`w-4 h-4 ${walletSpin ? "animate-spin-once" : ""}`} />
            </button>
          </div>
        </div>

        {[
          { Icon: MdOutlineShoppingCart, label: "Cart" },
          { Icon: MdOutlineNotifications, label: "Notifications", dot: true },
          { Icon: MdOutlinePhone, label: "Phone" },
        ].map(({ Icon, label, dot }) => (
          <div
            key={label}
            className="flex items-center gap-3 px-3 py-2.5 mx-2 my-0.5 text-sm font-medium
                           text-blue-950 hover:bg-white/60 hover:backdrop-blur-xl hover:shadow-md
                           hover:scale-[1.02] cursor-pointer transition-all duration-200 rounded-xl"
          >
            <Icon className="w-4 h-4 text-blue-900 shrink-0" />
            <span className="flex-1">{label}</span>
            {dot && <span className="w-2 h-2 rounded-full bg-red-400 shrink-0" />}
          </div>
        ))}

        <div className="border-t border-zinc-200 mt-1 pt-1">
          {[
            { Icon: MdOutlinePeopleAlt, label: "My Profile" },
            { Icon: MdOutlineSettings, label: "Settings" },
            { Icon: MdOutlinePhone, label: "Help & Support" },
          ].map(({ Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-3 px-3 py-2.5 mx-2 my-0.5 text-sm font-medium
                             text-blue-950 hover:bg-white/60 hover:backdrop-blur-xl hover:shadow-md
                             hover:scale-[1.02] cursor-pointer transition-all duration-200 rounded-xl"
            >
              <Icon className="w-4 h-4 text-blue-900 shrink-0" />
              <span>{label}</span>
            </div>
          ))}
        </div>

        <div className="border-t border-zinc-200 mt-1 pt-1">
          <div className="flex items-center gap-3 px-3 py-2.5 mx-2 my-0.5 text-sm font-medium
                             text-orange-600 hover:bg-orange-100/70 hover:shadow-md
                             hover:scale-[1.02] cursor-pointer transition-all duration-200 rounded-xl">
            <MdOutlineSettings className="w-4 h-4 text-orange-500 shrink-0" />
            <span>Sign Out</span>
          </div>
        </div>
      </div>,
      document.body
    )
}


// Sidebar:

{/* Bottom CTA */ }
<div className="px-4 py-4 border-t border-white/40 flex flex-col gap-2">
  <form
    onSubmit={(e) => e.preventDefault()}
    className="flex items-center gap-0 rounded-full overflow-hidden
                       border border-white/40 bg-blue-800/20 backdrop-blur-md"
  >
    <div className="flex items-center gap-1.5 px-3 py-2 flex-1">
      <TbTruckDelivery className="w-4 h-4 text-blue-800 shrink-0" />
      <input
        name="awb"
        placeholder="Track your shipment"
        className="bg-transparent border-none outline-none text-blue-950 text-xs
                           placeholder:text-blue-400 w-full"
      />
    </div>
    <button
      type="submit"
      className="bg-orange-500 text-white text-xs font-bold px-4 py-2
                         hover:bg-orange-600 active:bg-orange-700
                         transition-colors duration-200 cursor-pointer"
    >
      Go
    </button>
  </form>

  <a
    href=""
    onClick={() => setDrawerOpen(false)}
    className="w-full text-center py-2.5 rounded-full bg-orange-500 text-white
                       text-sm font-bold hover:bg-orange-600 transition-all duration-300
                       hover:scale-[1.02] active:scale-[0.98] shadow-md no-underline block"
  >
    Ship Now
  </a>
</div>

{/* <a href="" className="flex items-center gap-3"> */ }

{/* <div className="hidden w-10 h-10 rounded-xl bg-blue-800 items-center justify-center">
              <span className="text-white font-display font-black text-base tracking-tighter">SM</span>
            </div>
            <div className="leading-tight">
              <p className="font-display font-bold text-sm text-blue-950">Shree Maruti</p>
              <p className="text-[10px] text-blue-700 font-medium">Integrated Logistics</p>
            </div> */}
{/* </a> */ }


// Services:

{/* <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-blue-800 to-blue-600
                        flex items-center justify-center text-xl sm:text-2xl mb-4 shadow-md
                        group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div> */}

{/* <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 to-transparent
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300
                              rounded-2xl pointer-events-none" />

              <div className="relative z-10">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-blue-800 to-blue-600
                                flex items-center justify-center text-xl sm:text-2xl mb-4 shadow-md
                                group-hover:scale-110 transition-transform duration-300">
                  {icon}
                </div> */}

{/* <h4 className="font-display font-bold text-blue-950 text-sm sm:text-base mb-2">{title}</h4> */ }

{/* <span className="inline-flex items-center gap-1 mt-4 text-xs font-bold
                                 text-blue-800 hover:text-blue-950 group-hover:gap-2 transition-all duration-300"> */}
{/* Learn more <MdArrowForward className="w-3 h-3" /> */ }
{/* </span> */ }

// Services:

{/* Cards
              <div className={`grid gap-4 sm:gap-5
                         ${tab === "enterprise"
                  ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
                  : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                }`}>
                {items.map(({ icon, title, desc }) => (
                  <div
                    key={title}
                    className="group relative bg-linear-to-b from-[#0f1540] to-[#0b0e2d] border border-white/10
                         hover:border-orange-500/30 shadow-md hover:shadow-xl sm:hover:scale-105
                         transition-all duration-300 cursor-pointer overflow-hidden
                         flex flex-col h-full min-h-[260px] rounded-2xl"
                  >
                    {/* Background Image if available */}
{/* {SERVICE_IMAGES[title] && (
                      <img
                        src={SERVICE_IMAGES[title]}
                        alt={title}
                        className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-75 group-hover:scale-105
                             transition-all duration-500"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    )} */}

{/* Dark gradient overlay so text is readable */ }
{/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-[#0f1540]/30 to-transparent z-10" /> */ }

{/* Text overlaid on card */ }
{/* <div className="relative z-20 p-5 sm:p-6 flex flex-col justify-end h-full flex-1">
                  {icon && (
                    <div className="w-10 h-10 rounded-xl bg-orange-500/30 border border-orange-400/50
                                  flex items-center justify-center text-xl mb-3.5 shadow-sm
                                  group-hover:scale-110 transition-transform duration-300">
                      {icon}
                    </div> */}
{/* )} */ }


// Industries:

{/* 1-col xs → 2-col sm → 4-col lg */ }
{/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {INDUSTRIES.map(({ name, desc }) => ( // icon,
              <div
                key={name}
                className="group bg-white/7 border border-white/12 rounded-2xl overflow-hidden
                         hover:bg-white/14 hover:-translate-y-1.5 hover:border-white/25
                         transition-all duration-300 cursor-pointer"
              > */}
{/* Industry image — fades in on hover */ }
{/* <img
                src={INDUSTRY_IMAGES[name]}
                alt={name}
                className="w-full h-28 sm:h-32 object-cover opacity-40
                           group-hover:opacity-60 transition-opacity duration-300"
                onError={(e) => e.currentTarget.style.display = "none"}
              /> */}

{/* Image — fills most of the card */ }
{/* <div className="relative flex-1 overflow-hidden">
                  <img
                    src={INDUSTRY_IMAGES[name]}
                    alt={name}
                    className="w-full h-full object-cover opacity-60
                     group-hover:opacity-80 group-hover:scale-105
                     transition-all duration-500"
                    onError={(e) => e.currentTarget.style.display = "none"}
                  /> */}
{/* Gradient fade into name area */ }
{/* <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>

                <div className="relative z-10 p-3 sm:p-4 bg-black/40 backdrop-blur-sm
                      border-t border-white/10">
                  <h4 className="font-display font-bold text-white text-xs sm:text-sm leading-tight mb-0.5
                       group-hover:text-orange-300 transition-colors duration-300">
                    {name}
                  </h4>
                  <p className="text-white/50 text-xs leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div> */}

{/* <button
        onClick={() => setCurrent((prev) => (prev - 1 + INDUSTRIES.length) % INDUSTRIES.length)}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full
                   bg-white/20 hover:bg-white/40 backdrop-blur-sm border border-white/30
                   flex items-center justify-center text-white text-lg transition-all duration-200"
      >
        ‹
      </button>
      <button
        onClick={() => setCurrent((prev) => (prev + 1) % INDUSTRIES.length)}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full
                   bg-white/20 hover:bg-white/40 backdrop-blur-sm border border-white/30
                   flex items-center justify-center text-white text-lg transition-all duration-200"
      >
        ›
      </button> */}
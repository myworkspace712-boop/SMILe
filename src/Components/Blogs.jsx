import { useState, useEffect } from "react";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";
import { MdArrowForward } from "react-icons/md";
import { Link } from "react-router-dom";


const BLOGS = [
    {
        title: "Best Fulfilment Model for D2C Ecommerce Brands in India",
        excerpt: "Running a D2C brand in India today is equal parts exciting and exhausting, and without",
        img: "https://shreemaruti.com/wp-content/uploads/2026/04/WebsiteBlogBanners.jpg",
        slug: "fulfilmentModel",
    },
    {
        title: "Reduce RTO Rates for D2C Brands in India: A Complete Guide",
        excerpt: "",
        img: "https://shreemaruti.com/wp-content/uploads/2026/05/Blog_RTO_.jpg",
        slug: "rtoRates",
    },
    {
        title: "Shipping Cost Reduction for Indian D2C Brands: A Playbook for 100+ Daily Shipments",
        excerpt: "",
        img: "https://shreemaruti.com/wp-content/uploads/2026/04/WebsiteBlogBanners-1.jpg",
        slug: "shippingCost",
    },
    {
        title: "Full Truck Load Services India: Boost Your Growth with Cargodham (2026)",
        excerpt: "",
        img: "https://shreemaruti.com/wp-content/uploads/2026/03/CargoDham-advertisement-featuring-colorful-trucks-lined-up-laden-with-goods-under-a-clear-blue-sky.-Bold-text-reads-FTL-Truck-Load-Services-in-India-Boost-Your-Growth-with-CargoDham.jpg",
        slug: "truckServices",
    },
    {
        title: "Courier Franchise in India: Investment, Profit & Growth Guide 2026",
        excerpt: "",
        img: "https://shreemaruti.com/wp-content/uploads/2025/12/Courier-Franchise-India.jpg",
        slug: "courierFranchise",
    },
    {
        title: "International Shipping Stronger: Suez Canal Comeback",
        excerpt: "",
        img: "https://shreemaruti.com/wp-content/uploads/2025/11/Your-paragraph-text-1-1.jpg",
        slug: "stronger_Int_Ship",
    },
    {
        title: "Business Financing in India: The Rise of Digital Lending",
        excerpt: "",
        img: "https://shreemaruti.com/wp-content/uploads/2025/11/White-Blue-And-Orange-Modern-Business-Funding-Presentation.jpg",
        slug: "businessFinancing",
    },
    {
        title: "Beyond Delivery: Why Integrated Logistics Matters.",
        excerpt: "",
        img: "https://shreemaruti.com/wp-content/uploads/2025/10/1.png",
        slug: "integratedLogistics",
    },
];


export default function Blogs() {
    const [current, setCurrent] = useState(0);

    {/* Mobile — carousel */ }
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        if (hovered) return;
        const t = setInterval(() => {
            setCurrent((p) => (p + 1) % BLOGS.length);
        }, 4000);
        return () => clearInterval(t);
    }, [hovered]);


    return (
        <section className="py-16 sm:py-24 dark:bg-zinc-900">
            <div className="max-w-[1220px] mx-auto px-4 sm:px-6">

                {/* Heading */}
                <div className="mb-10 sm:mb-12 text-center">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 dark:bg-zinc-700/70 text-blue-800 dark:text-zinc-300/80 border border-blue-300/70 dark:border-zinc-500 text-xs font-bold tracking-widest uppercase mb-4">
                        Industry Insights
                    </span>
                    <h2 className="font-display font-extrabold text-blue-900 dark:text-zinc-300 text-2xl sm:text-4xl xl:text-5xl
                         leading-tight mb-3">
                        Stay <span className="text-orange-400 dark:text-orange-300">Updated</span>
                    </h2>
                    <p className="text-gray-600 dark:text-zinc-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                        Stay updated on the latest supply chain trends, articles, and research to
                        guide your strategy.
                    </p>
                </div>

                {/* Desktop — featured left, stacked right */}
                <div className="hidden lg:grid grid-cols-2 gap-5 items-start">

                    {/* Featured large card */}
                    <Link
                        to={`/blogs/${BLOGS[0].slug}`}
                        className="group relative rounded-2xl overflow-hidden block no-underline
                        shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                        <div className="relative h-72 lg:h-96 overflow-hidden">
                            <img
                                src={BLOGS[current].img}
                                alt={BLOGS[current].title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                onError={(e) => e.currentTarget.style.display = "none"}
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 z-10">
                            <h3 className="font-display font-bold text-white/86 text-base sm:text-xl leading-snug mb-2 group-hover:text-blue-100 transition-colors duration-300">
                                {BLOGS[current].title}
                            </h3>

                            <span className="inline-flex items-center gap-1 mt-3 text-xs font-bold text-orange-400 group-hover:gap-2 transition-all duration-300">
                                Read more <MdArrowForward className="w-3 h-3" />
                            </span>
                        </div>
                    </Link>

                    {/* Stacked small cards */}
                    <div className="flex flex-col gap-4">
                        {BLOGS.map((blog, i) => (
                            <Link
                                key={i}
                                to={`/blogs/${blog.slug}`}
                                className={`group flex gap-4 rounded-2xl overflow-hidden dark:bg-neutral-800 border shadow-sm transition-all duration-300 hover:-translate-y-0.5 no-underline
                                        ${current === i
                                        ? "border-blue-400 dark:border-orange-300 shadow-md"
                                        : "border-blue-100 dark:border-neutral-500/90 hover:border-blue-300 hover:dark:border-zinc-200 hover:shadow-lg"
                                    }`}
                            >
                                <div className="relative w-32 h-24 shrink-0 overflow-hidden">
                                    <img
                                        src={blog.img}
                                        alt={blog.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        onError={(e) => e.currentTarget.style.display = "none"}
                                    />
                                </div>
                                <div className="flex flex-col justify-center py-3 pr-4">
                                    <h5 className="font-display font-bold text-blue-800 dark:text-zinc-300/90 text-xs sm:text-sm leading-snug group-hover:text-blue-700 group-hover:dark:text-zinc-200 transition-colors duration-300 line-clamp-2">
                                        {blog.title}
                                    </h5>
                                    <span className="inline-flex items-center gap-1 group-hover:gap-2 mt-2 text-xs font-bold text-orange-400 dark:text-orange-300/90 transition-all duration-300">
                                        Read more <MdArrowForward className="w-3 h-3" />
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Mobile — carousel */}
                <div className="lg:hidden relative mt-8"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}>

                    <div className="w-full overflow-hidden rounded-2xl bg-linear-to-t from-black/45 via-black/25 to-black/5 dark:from-white/40 dark:via-white/25 dark:to-white/5">
                        <div
                            className="flex w-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                            style={{ transform: `translateX(-${current * 100}%)` }}
                        >
                            {BLOGS.map((blog, i) => (
                                <Link
                                    key={i}
                                    to={`/blogs/${blog.slug}`}
                                    className="shrink-0 w-full group no-underline block duration-200"
                                    style={{ pointerEvents: i === current ? "auto" : "none" }}
                                >
                                    <div className="relative h-56 overflow-hidden rounded-2xl">
                                        <img
                                            src={blog.img}
                                            alt={blog.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            onError={(e) => e.currentTarget.style.display = "none"}
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
                                        <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                                            <h5 className="font-display font-bold text-white/85 dark:text-zinc-300 text-sm leading-snug line-clamp-2 mb-2">
                                                {blog.title}
                                            </h5>
                                            <span className={`inline-flex items-center text-xs font-bold text-orange-400 dark:text-orange-400/87 transition-all duration-300 ${hovered ? "gap-2" : "gap-1"}`}>
                                                Read more <MdArrowForward className="w-3 h-3" />
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={() => setCurrent((p) => (p - 1 + BLOGS.length) % BLOGS.length)}
                        style={{ opacity: hovered ? 1 : 0 }}
                        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center transition-all duration-200 cursor-pointer drop-shadow-md text-white/80 hover:text-white active:scale-90"
                    >
                        <IoIosArrowDropleftCircle className="w-10 h-10" />
                    </button>

                    <button
                        onClick={() => setCurrent((p) => (p + 1) % BLOGS.length)}
                        style={{ opacity: hovered ? 1 : 0 }}
                        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center transition-all duration-200 cursor-pointer drop-shadow-md text-white/80 hover:text-white active:scale-90"
                    >
                        <IoIosArrowDroprightCircle className="w-10 h-10" />
                    </button>

                    <div className="flex justify-center gap-1.5 mt-4">
                        {BLOGS.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrent(i)}
                                className={`rounded-full transition-all duration-300 ${i === current
                                    ? "w-5 h-1.5 bg-blue-800 dark:bg-orange-400/86"
                                    : "w-1.5 h-1.5 bg-blue-300 dark:bg-orange-200/80 hover:bg-blue-500 dark:hover:bg-orange-400/90"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
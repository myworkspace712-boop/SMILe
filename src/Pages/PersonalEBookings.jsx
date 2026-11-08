import { useEffect, useRef, useState } from "react";
import {
  TbSearch,
  TbFileDownload,
  TbEye,
  TbCalendar,
  TbBarcode,
  TbCheck,
} from "react-icons/tb";
import { MdArrowForward } from "react-icons/md";
import {
  MOCK_BOOKING,
  MOCK_DELIVERY,
  MOCK_TRAVEL,
} from "../Data/Solutions/personalEbook";
import { DayPicker } from "react-day-picker";

// ── Sub-components ────────────────────────────────────────────────────────────
function StatusBadge({ status }) {
  const isDelivered = status === "DELIVERED";
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold
                     ${
                       isDelivered
                         ? "bg-green-500/10 text-green-400 border border-green-500/20"
                         : "bg-orange-500/10 text-orange-400 border border-orange-500/20"
                     }`}
    >
      {isDelivered && <TbCheck className="w-3 h-3" />}
      {status}
    </span>
  );
}

function SectionCard({ title, children }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden mb-8">
      <div className="px-6 py-4 border-b border-white/10 flex items-center gap-3">
        <div className="w-1.5 h-5 rounded-full bg-orange-400" />
        <h3 className="font-display font-bold text-white text-base">{title}</h3>
      </div>
      <div className="p-6">{children}</div>
    </div>
  );
}

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function CustomCalendar({ selected, onSelect }) {
  const [month, setMonth] = useState(new Date());
  const [view, setView] = useState("days");

  const currentYear = new Date().getFullYear();

  return (
    <div className="w-[360px] mt-2 rounded-2xl border shadow-2xl overflow-hidden backdrop-blur-md bg-blue-100 border-blue-200 text-blue-900 dark:bg-zinc-900 dark:border-zinc-700 dark:text-zinc-300">
      <div className="flex items-center justify-between gap-3 mb-5">
        <button
          onClick={() => setView("months")}
          className={`flex-1 py-3 mx-4 mt-4 rounded-full text-sm font-bold transition-all cursor-pointer ${
            view === "months"
              ? "bg-blue-200 dark:bg-zinc-700/80 border border-blue-300 dark:border-zinc-500/75 hover:border-blue-400 dark:hover:border-zinc-500"
              : "bg-blue-200 dark:bg-zinc-700/80 border border-blue-300 dark:border-zinc-500/75 hover:border-blue-400 dark:hover:border-zinc-500"
          }`}
        >
          Month
        </button>

        <button
          onClick={() => setView("years")}
          className={`flex-1 py-3 mx-4 mt-4 rounded-full text-sm font-bold transition-all cursor-pointer ${
            view === "years"
              ? "bg-blue-200 dark:bg-zinc-700/80 border border-blue-300 dark:border-zinc-500/70 hover:border-blue-400 dark:hover:border-zinc-400"
              : "bg-blue-200 dark:bg-zinc-700/80 border border-blue-300 dark:border-zinc-500/70 hover:border-blue-400 dark:hover:border-zinc-400/70"
          }`}
        >
          Year
        </button>
      </div>

      {view === "days" && (
        <DayPicker
          mode="single"
          selected={selected}
          onSelect={onSelect}
          month={month}
          onMonthChange={setMonth}
          hideNavigation
          showOutsideDays
          classNames={{
            months: "w-full px-4 pb-4",
            month: "w-full",
            caption: "hidden",
            month_caption: "hidden",
            nav: "hidden",

            table: "w-full border-collapse",
            weekdays: "grid grid-cols-7 mb-2",
            weekday:
              "text-center text-[11px] uppercase tracking-wider font-bold text-orange-400 dark:text-orange-300",

            week: "grid grid-cols-7 gap-1 mb-1",

            day: "h-10 w-10 mx-auto rounded-full text-sm transition-all duration-200 cursor-pointer text-blue-900 dark:text-zinc-300 hover:bg-blue-200 dark:hover:bg-zinc-700",

            day_button:
              "h-10 w-10 rounded-full flex items-center justify-center cursor-pointer",

            selected:
              "bg-blue-800 dark:bg-orange-300 text-white dark:text-zinc-800 font-black rounded-full hover:bg-blue-800 hover:dark:bg-orange-300",

            today:
              "border border-blue-800 dark:border-orange-300 dark:text-orange-300 text-blue-900 rounded-full hover:bg-blue-200 dark:hover:bg-zinc-700",

            outside: "text-gray-400 dark:text-zinc-400/90",

            disabled: "text-blue-200 dark:text-zinc-700",
          }}
        />
      )}

      {view === "months" && (
        <div className="mx-2 grid grid-cols-3 gap-3 min-h-[280px]">
          {MONTHS.map((m, index) => (
            <button
              key={m}
              onClick={() => {
                const next = new Date(month);
                next.setMonth(index);
                setMonth(next);
                setView("days");
              }}
              className={`mx-1 rounded-2xl font-bold text-sm transition-all cursor-pointer ${
                month.getMonth() === index
                  ? "bg-blue-800 text-white dark:bg-orange-300"
                  : "bg-blue-300 hover:bg-blue-400 text-white dark:bg-zinc-700/70 dark:hover:bg-zinc-600 dark:text-zinc-300"
              }`}
            >
              {m}
            </button>
          ))}
        </div>
      )}

      {view === "years" && (
        <div className="mx-2 grid grid-cols-3 gap-3 max-h-[280px] overflow-y-auto pr-1">
          {Array.from({ length: 31 }, (_, i) => currentYear - 15 + i).map(
            (year) => (
              <button
                key={year}
                onClick={() => {
                  const next = new Date(month);
                  next.setFullYear(year);
                  setMonth(next);
                  setView("months");
                }}
                className={`py-4 rounded-2xl font-bold text-sm transition-all ${
                  month.getFullYear() === year
                    ? "bg-blue-800 text-white dark:bg-orange-300"
                    : "bg-blue-300 hover:bg-blue-400 text-white dark:bg-zinc-700/70 dark:hover:bg-zinc-600 dark:text-zinc-300"
                }`}
              >
                {year}
              </button>
            ),
          )}
        </div>
      )}

      <div className="mt-5 flex items-center justify-between text-xs text-blue-200/50">
        {/* <span>
          {MONTHS[month.getMonth()]} {month.getFullYear()}
        </span> */}

        {view !== "days" && (
          <div className="mt-5 ml-3 mb-3 flex items-center justify-center text-xs">
            <button
              type="button"
              onClick={() => setView("days")}
              className="px-5 py-2 rounded-full bg-orange-400 dark:bg-orange-300 text-white dark:text-zinc-800 font-bold hover:bg-orange-500 dark:hover:bg-orange-200 cursor-pointer"
            >
              Back to dates
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function PersonalEBookings() {
  const [tab, setTab] = useState("date"); // "date" | "awb"
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [awb, setAwb] = useState("");
  const [results, setResults] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);

  const handleProceed = () => {
    // if (tab === "date" && (!startDate || !endDate)) return;
    if (tab === "awb" && !awb) return;
    setResults(true);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!name || !email) return;
    setSent(true);
  };

  useEffect(() => {
    const outsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target))
        setOpenDropdown(null);
    };

    document.addEventListener("click", outsideClick);
    return () => document.removeEventListener("click", outsideClick);
  }, []);

  // const [fromDate, setFromDate] = useState();
  // "days" | "months" | "years"

  return (
    <div className="min-h-screen bg-blue-50 dark:bg-zinc-950">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden pt-32 pb-16">
        <div className="absolute inset-0 pointer-events-none" />
        {/* <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-orange-500/40 pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-48 h-48 rounded-full bg-blue-900/40 pointer-events-none" /> */}

        <div className="relative z-10 max-w-[1220px] mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 border border-blue-300 dark:bg-zinc-700/60 text-blue-800 dark:text-zinc-300/90 dark:border-zinc-500/70 text-xs font-bold tracking-widest uppercase mb-4">
            Client Portal
          </span>
          <h1 className="font-display font-extrabold text-blue-900 dark:text-zinc-300 text-3xl sm:text-4xl xl:text-5xl leading-tight mb-4">
            Track Your{" "}
            <span className="text-orange-400 dark:text-orange-300">
              Shipments
            </span>
          </h1>
          <p className="text-blue-600 dark:text-zinc-400 text-base max-w-xl mx-auto">
            Search by date range or AWB number to view booking details, travel
            history and delivery status.
          </p>
        </div>
      </section>

      {/* ── Booking Form ── */}
      <section className="pb-16">
        <div className="max-w-[720px] mx-auto px-4 sm:px-6">
          <div className="bg-linear-to-r from-blue-900 to-blue-950 dark:from-zinc-800 dark:to-zinc-900 rounded-2xl overflow-hidden">
            {/* Tabs */}
            <div className="flex border-b border-white/30 dark:border-zinc-600">
              <button
                onClick={() => setTab("date")}
                className={`flex-1 flex items-center justify-center gap-2 px-6 py-4 text-sm font-bold transition-colors duration-200 cursor-pointer
                           ${tab === "date" ? "text-orange-400/90 dark:text-orange-300/88 border-b-2 border-orange-400 dark:border-orange-300" : "text-blue-100/70 hover:text-blue-100"}`}
              >
                <TbCalendar className="w-4 h-4" /> Date Range
              </button>

              <button
                onClick={() => setTab("awb")}
                className={`flex-1 flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold transition-colors duration-200 cursor-pointer
                           ${tab === "awb" ? "text-orange-400/90 dark:text-orange-300/88 border-b-2 border-orange-400 dark:border-orange-300" : "text-blue-100/70 hover:text-blue-100"}`}
              >
                <TbBarcode className="w-4 h-4" /> AWB Number
              </button>
            </div>

            <div ref={dropdownRef} className="relative">
              <div className="p-6 flex flex-col gap-5">
                <div className={tab === "date" ? "block" : "hidden"}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 overflow-visible">
                    {/* Start Date */}
                    <div className="relative flex flex-col gap-2 overflow-visible">
                      <label className="text-blue-200/80 dark:text-zinc-300/80 text-xs font-semibold uppercase tracking-wider">
                        Start Date
                      </label>

                      <button
                        type="button"
                        onClick={() =>
                          setOpenDropdown(
                            openDropdown === "start" ? null : "start",
                          )
                        }
                        className="w-full bg-white/8 border border-white/15 rounded-xl px-4 py-3 text-left text-sm
          text-white hover:border-orange-400/30 cursor-pointer transition-all duration-200
          focus:outline-none focus:border-orange-400/50 flex items-center justify-between"
                      >
                        <span
                          className={
                            startDate ? "text-white" : "text-blue-200/45 dark:text-zinc-500"
                          }
                        >
                          {startDate
                            ? startDate.toLocaleDateString("en-GB", {
                                day: "2-digit",
                                month: "2-digit",
                                year: "numeric",
                              })
                            : "DD / MM / YYYY"}
                        </span>

                        <TbCalendar className="w-4 h-4 text-white/80 dark:text-orange-300" />
                      </button>

                      {openDropdown === "start" && (
                        <div className="fixed top-[336px] z-[9999]">
                          <CustomCalendar
                            selected={startDate}
                            onSelect={(date) => {
                              setStartDate(date);
                              setOpenDropdown(null);
                              // setShowStart(false);
                            }}
                          />
                        </div>
                      )}
                    </div>

                    {/* End Date */}
                    <div className="relative flex flex-col gap-2 overflow-visible">
                      <label className="text-blue-200/80 dark:text-zinc-300/80 text-xs font-semibold uppercase tracking-wider">
                        End Date
                      </label>

                      <button
                        type="button"
                        onClick={() =>
                          setOpenDropdown(openDropdown === "end" ? null : "end")
                        }
                        className="w-full bg-white/8 border border-white/15 rounded-xl px-4 py-3 text-left text-sm
          text-white hover:border-orange-400/30 cursor-pointer transition-all duration-200
          focus:outline-none focus:border-orange-400/50 flex items-center justify-between"
                      >
                        <span
                          className={
                            endDate ? "text-white" : "text-blue-200/45 dark:text-zinc-500"
                          }
                        >
                          {endDate
                            ? endDate.toLocaleDateString("en-GB", {
                                day: "2-digit",
                                month: "2-digit",
                                year: "numeric",
                              })
                            : "DD / MM / YYYY"}
                        </span>

                        <TbCalendar className="w-4 h-4 text-white/80 dark:text-orange-300" />
                      </button>

                      {openDropdown === "end" && (
                        <div className="fixed top-[336px] z-[9999]">
                          <CustomCalendar
                            selected={endDate}
                            onSelect={(date) => {
                              setEndDate(date);
                              setOpenDropdown(null);
                            }}
                          />
                        </div>
                      )}
                    </div>

                    {/* // your docket / tracking tab code here
                // null */}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2 max-w-md ml-6">
                <label className="text-blue-200/80 dark:text-zinc-300/80 text-xs font-semibold uppercase tracking-wider">
                  AWB Number
                </label>
                <input
                  type="text"
                  value={awb}
                  onChange={(e) => setAwb(e.target.value)}
                  placeholder="Enter AWB number"
                  className="bg-white/8 border border-white/15 rounded-xl px-4 py-3 text-white text-sm
                               placeholder:text-blue-200/45 dark:placeholder:text-zinc-500 focus:outline-none focus:border-orange-400/50
                               transition-colors duration-200"
                />
              </div>
            </div>

            <button
              onClick={handleProceed}
              className="group mt-8 mb-6 ml-4 inline-flex items-center justify-center gap-2 dark:bg-orange-300 bg-orange-400 active:bg-orange-500 dark:active:bg-orange-200
          text-white font-semibold px-6 py-3 rounded-full transition-all duration-300
          active:scale-95 cursor-pointer self-start">
              Search
              <MdArrowForward className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

      {/* ── Results ── */}
      {results && (
        <section className="pb-24 bg-blue-950">
          <div className="max-w-[1220px] mx-auto px-4 sm:px-6">
            {/* Booking Info */}
            <SectionCard title="Booking Information">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10">
                      {[
                        "Document No",
                        "Booking Date",
                        "Booking Center",
                        "To Center",
                        "Type",
                        "Status Date",
                        "Status",
                      ].map((h) => (
                        <th
                          key={h}
                          className="text-left text-blue-200/50 text-xs font-semibold uppercase tracking-wider pb-3 pr-6"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="pt-4 pr-6 text-orange-400 font-mono font-semibold">
                        {MOCK_BOOKING.docNo}
                      </td>
                      <td className="pt-4 pr-6 text-blue-200/80">
                        {MOCK_BOOKING.bookingDate}
                      </td>
                      <td className="pt-4 pr-6 text-blue-200/80">
                        {MOCK_BOOKING.bookingCenter}
                      </td>
                      <td className="pt-4 pr-6 text-blue-200/80">
                        {MOCK_BOOKING.toCenter}
                      </td>
                      <td className="pt-4 pr-6 text-blue-200/80">
                        {MOCK_BOOKING.type}
                      </td>
                      <td className="pt-4 pr-6 text-blue-200/80">
                        {MOCK_BOOKING.statusDate}
                      </td>
                      <td className="pt-4">
                        <StatusBadge status={MOCK_BOOKING.status} />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </SectionCard>

            {/* Travel Info */}
            <SectionCard title="Travel Information">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10">
                      {["Date", "Inscan / Outscan", "Traveling"].map((h) => (
                        <th
                          key={h}
                          className="text-left text-blue-200/50 text-xs font-semibold uppercase tracking-wider pb-3 pr-6"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {MOCK_TRAVEL.map((row, i) => (
                      <tr key={i}>
                        <td className="py-3 pr-6 text-blue-200/80 font-mono text-xs">
                          {row.date}
                        </td>
                        <td className="py-3 pr-6">
                          <span
                            className={`px-2 py-0.5 rounded-full text-xs font-semibold
                                           ${
                                             row.type === "Inscan"
                                               ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                                               : "bg-orange-500/10 text-orange-400 border border-orange-500/20"
                                           }`}
                          >
                            {row.type}
                          </span>
                        </td>
                        <td className="py-3 text-blue-200/70 text-xs leading-relaxed">
                          {row.info}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </SectionCard>

            {/* Delivery Info */}
            <SectionCard title="Delivery Information">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10">
                      {[
                        "Delivery Date",
                        "Document No",
                        "From Center",
                        "To Center",
                        "Receiver",
                        "Reason",
                        "Status",
                        "POD",
                      ].map((h) => (
                        <th
                          key={h}
                          className="text-left text-blue-200/50 text-xs font-semibold uppercase tracking-wider pb-3 pr-4"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="pt-4 pr-4 text-blue-200/80">
                        {MOCK_DELIVERY.deliveryDate}
                      </td>
                      <td className="pt-4 pr-4 text-orange-400 font-mono font-semibold text-xs">
                        {MOCK_DELIVERY.docNo}
                      </td>
                      <td className="pt-4 pr-4 text-blue-200/80 text-xs">
                        {MOCK_DELIVERY.fromCenter}
                      </td>
                      <td className="pt-4 pr-4 text-blue-200/80 text-xs">
                        {MOCK_DELIVERY.toCenter}
                      </td>
                      <td className="pt-4 pr-4 text-blue-200/80 text-xs">
                        {MOCK_DELIVERY.receiver}
                      </td>
                      <td className="pt-4 pr-4 text-blue-200/50">
                        {MOCK_DELIVERY.reason}
                      </td>
                      <td className="pt-4 pr-4">
                        <StatusBadge status={MOCK_DELIVERY.status} />
                      </td>
                      <td className="pt-4">
                        <button
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5
                                           border border-white/10 hover:border-orange-400/40 text-blue-200/80
                                           hover:text-white text-xs font-medium transition-all duration-200 cursor-pointer"
                        >
                          <TbEye className="w-3.5 h-3.5" /> View File
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </SectionCard>

            {/* Send as Attachment */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 max-w-lg">
              <h3 className="font-display font-bold text-white text-base mb-1">
                Send As Attachment
              </h3>
              <p className="text-blue-200/50 text-sm mb-5">
                Receive booking details and POD directly in your inbox.
              </p>

              {sent ? (
                <div className="flex items-center gap-3 text-green-400">
                  <TbCheck className="w-5 h-5" />
                  <span className="text-sm font-semibold">
                    Sent successfully!
                  </span>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm
                               placeholder:text-blue-200/30 focus:outline-none focus:border-orange-400/50
                               transition-colors duration-200"
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email address"
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm
                               placeholder:text-blue-200/30 focus:outline-none focus:border-orange-400/50
                               transition-colors duration-200"
                  />
                  <button
                    onClick={handleSend}
                    className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400
                               text-white font-semibold px-6 py-3 rounded-full transition-all duration-300
                               hover:scale-105 active:scale-95 cursor-pointer self-start text-sm"
                  >
                    <TbFileDownload className="w-4 h-4" /> Send & Download POD
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
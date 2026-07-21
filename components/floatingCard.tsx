"use client";
import { motion } from "framer-motion";

const barHeights = [
  14, 16, 18, 20, 22, 24, 27, 30, 33, 37, 41, 46, 51, 57, 63, 69, 76, 82, 88,
  92, 96, 91, 85, 79, 73, 68, 63, 59, 55, 51,
];
export default function FloatingCard() {
  return (
    <div className="relative z-20 flex justify-center mt-32 sm:-mt-40">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-4xl rounded-4xl border-2 border-gray-900 bg-white shadow-2xl p-4 sm:p-8"
      >
        <div className="mb-4 sm:mb-6">
          <h2 className="text-lg sm:text-2xl font-medium text-gray-900">
            Good Morning, Acme
          </h2>
          <h2 className="text-sm sm:text-lg font-medium text-gray-500">
            Your daily impact metrics are ready to review.
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-2 sm:mb-4">
          {/* card1 */}
          <div className="rounded-xl bg-gray-50 p-2 sm:p-4 flex flex-col justify-between h-24 sm:h-36">
            <p className="text-[8px] sm:text-xs font-mono text-gray-500">
              192,000 <sub>2</sub>e
            </p>
            <div className="flex items-end justify-between gap-1">
              <span className="text-lg sm:text-3xl font-bold text-gray-900">
                56<sup className="text-[10px] sm:text-base">%</sup>
              </span>
              <div className="h-8 sm:h-16 w-8 sm:w-16 rounded-md bg-yellow-300" />
            </div>
          </div>

          {/* card2 */}
          <div className="rounded-xl bg-gray-50 p-2 sm:p-4 flex flex-col justify-between h-24 sm:h-36">
            <div className="flex items-start justify-between">
              <p className="text-[8px] sm:text-xs text-gray-500">
                Energy Consumption
              </p>
              <svg
                className="h-3 w-3 sm:h-5 sm:w-5 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8" />
              </svg>
            </div>
            <div className="flex items-end justify-between">
              <span className="text-lg sm:text-3xl font-bold text-gray-900">
                343.2{" "}
                <span className="text-[8px] sm:text-xs font-normal text-gray-400">
                  MWh
                </span>
              </span>
              <span className="text-[9px] sm:text-sm text-blue-500 font-medium">
                ↓12.4%
              </span>
            </div>
          </div>

          {/* Card3 */}
          <div className="rounded-xl bg-gray-50 p-2 sm:p-4 flex flex-col justify-between h-24 sm:h-36">
            <div className="flex items-start justify-between">
              <div className="h-6 w-6 sm:h-10 sm:w-10 rounded-md bg-linear-to-br from-green-700 to-green-900" />
              <span className="text-[7px] sm:text-xs bg-yellow-300 rounded-full px-1.5 sm:px-2 py-0.5 font-medium">
                Forecast
              </span>
            </div>
            <p className="text-[9px] sm:text-sm font-semibold text-gray-900 leading-relaxed">
              You're 16% off your 2027 emissions goal
            </p>
          </div>
        </div>

        {/* charts */}
        <div className="rounded-xl bg-gray-50 p-3 sm:p-6 mt-2 sm:mt-4 ">
          <p className="text-[9px] sm:text-xs font-mono text-gray-500 mb-3 sm:mb-6">
            Carbon Emissions Trend
          </p>
          <div className="flex items-end gap-0.5 sm:gap-1 h-24 sm:h-48 relative">
            {barHeights.map((h, i) => (
              <div key={i} className="flex-1 relative h-full flex items-end">
                {i === 20 && (
                  <span className="absolute -top-4 sm:-top-6 text-[7px] sm:text-[11px] bg-yellow-300 rounded-full px-1.5 py-0.5 font-medium">
                    220
                  </span>
                )}
                <div
                  style={{ height: `${h}%` }}
                  className="w-3 bg-gray-900 rounded-t-sm"
                />
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-[7px] sm:text-[11px] text-gray-400 font-mono">
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
            <span>Jun</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const capabilities = [
  {
    n: "001",
    title: "Track",
    body: "Emissions, energy, and waste across your value chain.",
  },
  {
    n: "002",
    title: "Model",
    body: "Forecast performance and goal alignment.",
  },
  {
    n: "003",
    title: "Report",
    body: "Generate ESG disclosures, automate frameworks.",
  },
  {
    n: "004",
    title: "Act",
    body: "Surface insights and operational next steps.",
  },
];

export default function FeatureSection() {
  const [active, setActive] = useState(0);
  const easeOut = [0.16, 1, 0.3, 1] as const;
  return (
    <section className="bg-white px-6 py-24 md:py-32">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 max-w-lg mb-16 text-center mx-auto"
        >
          Everything you need to measure, model, and act on sustainability
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div className="relative aspect-4/3  overflow-hidden bg-linear-to-br from-orange-200 via-amber-50 to-sky-300 border border-gray-900/10">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4, ease: easeOut }}
                className="absolute inset-0 flex items-center justify-center p-8"
              >
                <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-xs">
                  <p className="font-mono text-xs text-gray-400 mb-2">
                    Energy Consumption
                  </p>
                  <div className="flex items-end justify-between mt-16">
                    <span>
                      <span className="text-xl md:text-3xl font-bold">
                        343.2
                      </span>
                      <span className="text-gray-500 text-sm">MWh</span>
                    </span>
                    <span className="text-[9px] sm:text-sm text-blue-500 font-medium">
                      ↓12.4%
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div>
            <ul>
              {capabilities.map((c, i) => (
                <li
                  key={c.n}
                  onMouseEnter={() => setActive(i)}
                  className={`border-b border-gray-300 py-6 cursor-default transition-opacity ${
                    active === i ? "opacity-100" : "opacity-40"
                  }`}
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-xs text-gray-400">
                      {c.n}
                    </span>
                    <span className="text-xl font-semibold text-gray-900">
                      {c.title}
                    </span>
                  </div>
                  <AnimatePresence>
                    {active === i && (
                      <motion.p
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: easeOut }}
                        className="text-gray-500 text-sm mt-2 pl-9 overflow-hidden"
                      >
                        {c.body}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </li>
              ))}
            </ul>
            <div className="flex justify-end mt-4 ">
              <button className="mt-4 right-4 text-sm font-medium bg-gray-900 px-6 py-3 text-white hover:bg-gray-800 transition-colors rounded-sm inline-flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
                </span>
                Explore features
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

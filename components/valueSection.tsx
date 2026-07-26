"use client";

import { motion } from "framer-motion";
import { Fraunces, Lora } from "next/font/google";

const fraunces = Fraunces({ subsets: ["latin"], weight: ["400", "700"] });
const lora = Lora({ subsets: ["latin"], weight: ["400", "600"] });

const values = [
  {
    title: "Clarity drives action",
    body: "We believe better decisions start with better data—measured, visible, and trusted.",
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3v9l6 -1.5" />
      </svg>
    ),
  },
  {
    title: "Sustainability is a systems problem",
    body: "We build tools that help teams connect the dots between operations, impact, and accountability.",
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      >
        <circle cx="12" cy="12" r="9" />
        <ellipse cx="12" cy="12" rx="4" ry="9" />
        <path d="M3 12h18" />
      </svg>
    ),
  },
  {
    title: "Progress over perfection",
    body: "We support real-world momentum—helping organizations move from ambition to measurable change.",
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M9 15l6 -6M9 9h6v6" />
      </svg>
    ),
  },
];

export default function ValueSection() {
  const easeOut = [0.16, 1, 0.3, 1] as const;
  return (
    <section className="relative px-6 py-24 md:py-32 marble-halftone overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="mb-16"
        >
          <span
            className={`${fraunces.className} block text-4xl md:text-6xl font-normal text-gray-900 leading-tight`}
          >
            Built for clarity
          </span>
          <span
            className={`${fraunces.className} block text-4xl md:text-6xl font-semibold text-gray-900 leading-tight`}
          >
            Designed for action
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-5 text-left">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: easeOut }}
              className="bg-white rounded-3xl p-8"
            >
              <div className="text-gray-900 mb-6">{v.icon}</div>
              <h3
                className={`${lora.className} text-lg font-semibold text-gray-900 mb-2`}
              >
                {v.title}
              </h3>
              <p className={`${lora.className} text-gray-600 leading-relaxed`}>
                {v.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

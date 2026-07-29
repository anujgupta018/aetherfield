"use client";
import { motion } from "framer-motion";

export default function JournalStamp() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, rotate: -30 }}
      whileInView={{ opacity: 1, scale: 1, rotate: -18 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="hidden md:block absolute left-6 -top-2 w-105 pointer-events-none select-none"
    >
      <svg viewBox="0 0 420 220" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon
          points="10,110 210,10 410,90 210,210"
          stroke="#3B6FE0"
          strokeWidth="2"
          fill="none"
        />
        <text
          x="150"
          y="55"
          transform="rotate(-26.6 150 65)"
          textAnchor="middle"
          fontFamily="Georgia, serif"
          fontStyle="italic"
          fontSize="15"
          fill="#3B6FE0"
        >
          earth
        </text>
        <text
          x="300"
          y="65"
          transform="rotate(21.8 300 65)"
          textAnchor="middle"
          fontFamily="Georgia, serif"
          fontStyle="italic"
          fontSize="15"
          fill="#3B6FE0"
        >
          data
        </text>
        <text
          x="140"
          y="169"
          transform="rotate(26.6 140 150)"
          textAnchor="middle"
          fontFamily="Georgia, serif"
          fontStyle="italic"
          fontSize="15"
          fill="#3B6FE0"
        >
          tech
        </text>

        <text
          x="251"
          y="170"
          textAnchor="middle"
          dominantBaseline="central"
          fontFamily="Arial, sans-serif"
          fontSize="11"
          fill="#3B6FE0"
        >
          ®
        </text>
        <circle
          cx="251"
          cy="170"
          r="9"
          stroke="#3B6FE0"
          strokeWidth="1.2"
          fill="none"
        />
        <circle
          cx="251"
          cy="170"
          r="9"
          stroke="#3B6FE0"
          strokeWidth="1.2"
          fill="none"
        />
        <text
          x="200"
          y="110"
          textAnchor="middle"
          fontFamily="Arial, sans-serif"
          fontWeight="700"
          fontSize="30"
          fill="#3B6FE0"
        >
          Aetherfield
        </text>
        <text
          x="200"
          y="140"
          textAnchor="middle"
          fontFamily="Arial, sans-serif"
          fontWeight="700"
          fontSize="30"
          fill="#3B6FE0"
        >
          Journal
        </text>
      </svg>
    </motion.div>
  );
}

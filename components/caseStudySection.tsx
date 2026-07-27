"use client";
import { motion } from "framer-motion";
import caseImg from "../public/casee.jpg";
import Image from "next/image";

const easeOut = [0.16, 1, 0.3, 1] as const;

export default function CaseStudySection() {
  return (
    <section className="bg-white px-6 py-24 md:py-32">
      <motion.div className="bg-gray-100 p-4 rounded-xl max-w-5xl mx-auto items-center grid md:grid-cols-2 gap-12 md:gap-16">
        <motion.div
          initial={{ opacity: 0, scale: 1.03 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: easeOut }}
          className="relative aspect-4/3 rounded-3xl overflow-hidden"
        >
          <Image
            src={caseImg}
            alt="Image"
            fill
            className="object-cover grayscale contrast-[1.1]"
          />
          <div className="absolute inset-0 mix-blend-multiply bg-[#5d82cc]" />
          <div className="absolute inset-0 mix-blend-screen bg-[#8aa6c8] opacity-70" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: easeOut }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 mb-5">
            Why Acme Inc choose Aetherfield
          </h2>
          <p className="text-gray-500 leading-relaxed mb-8 max-w-md">
            With fragmented data and growing reporting pressure, Acme turned to
            Aetherfield to streamline their ESG workflows. The result? Faster
            decisions, fewer spreadsheets, and 34% more coverage.
          </p>
          <button className="bg-black text-white px-4 py-2 rounded-md">
            Read Case Study
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}

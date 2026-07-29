"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const easeOut = [0.16, 1, 0.3, 1] as const;

export default function TestimonialSection() {
  return (
    <section className="bg-white overflow-hidden">
      <div className="grid md:grid-cols-2 min-h-175">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easeOut }}
          className="bg-sky-200"
          style={{
            clipPath:
              "polygon(0 0, 85% 0, 100% 12%, 100% 45%, 92% 55%, 100% 68%, 100% 100%, 0 100%)",
          }}
        />
        <div className="flex items-center px-8 md:px-20 py:20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: easeOut }}
            className="max-w-xl"
          >
            <span className="block text-6xl font-serif text-gray-300 leading-none mb-4">
              "
            </span>
            <p className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 leading-tight mb-10">
              {" "}
              We finally moved past spreadsheets and guesswork. Now we have real
              data to guide real decisions.
            </p>
            <p className="text-lg font-semibold text-gray-900">
              Ichigo Kurosaki
            </p>
            <p className="font-serif italic text-gray-400 mt-1">
              Head of Sustainability, Flux Materials
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

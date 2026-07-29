"use client";
import { motion } from "framer-motion";
import JournalStamp from "./journalStamp";

const easeOut = [0.16, 1, 0.3, 1] as const;

const posts = [
  {
    tag: "Insights",
    time: "4 min",
    title: "What a climate-ready data stack actually requires",
  },
  {
    tag: "Strategy",
    time: "7 min",
    title: "Sustainability isn't a side project — it's operational",
  },
  {
    tag: "Insights",
    time: "5 min",
    title: "Inside the model: turning raw data into a next action",
  },
];

export default function JournalSection() {
  return (
    <section className="relative bg-white px-6 py-24 md:py-32 overflow-hidden mt-8">
      <JournalStamp />
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="text-center text-2xl md:text-4xl font-semibold tracking-tighter text-gray-900 mb-14"
        >
          From the Journal
        </motion.h2>

        <div className="border-t border-gray-200">
          {posts.map((post, i) => (
            <motion.a
              key={post.title}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: easeOut }}
              className="group flex items-center gap-6 py-8 border-b border-gray-200"
            >
              <div className="relative w-40 h-28 sm:w-48 sm:h-32 shrink-0 rounded-2xl overflow-hidden">
                <div
                  className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                  style={{
                    background: `linear-gradient(160deg, #4A6FA5 0%, #2A4066 55%, #16233D 100%)`,
                  }}
                />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 leading-snug group-hover:opacity-60 transition-opacity mb-2">
                  {post.title}
                </h3>
                <p className="font-mono text-xs uppercase tracking-wide text-gray-400">
                  {post.tag} · {post.time}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
      <div className="mt-14 text-sm font-medium flex justify-center items-center">
        <button className="bg-black px-4 py-3 text-white tracking-wider">
          View all articles
        </button>
      </div>
    </section>
  );
}

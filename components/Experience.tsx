"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <motion.section
      className="section"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55 }}
    >
      <div className="section-heading">
        <p className="kicker">Experience</p>
        <h2 className="title">Building outcomes, not just features</h2>
      </div>

      <div className="space-y-5">
        {experiences.map((item, index) => (
          <motion.article
            key={`${item.company}-${item.duration}`}
            className="card p-6 sm:p-8"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.07 }}
            whileHover={{ y: -5 }}
          >
            <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="font-mono text-xl text-white">{item.role}</h3>
                <p className="text-zinc-300">
                  {item.company}, {item.location}
                </p>
              </div>
              <p className="font-mono text-xs uppercase tracking-wider text-cyan-300">
                {item.duration}
              </p>
            </div>
            <ul className="space-y-2 text-zinc-200">
              {item.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-2">
                  <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}

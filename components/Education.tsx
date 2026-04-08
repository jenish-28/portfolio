"use client";

import { motion } from "framer-motion";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <motion.section
      className="section"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55 }}
    >
      <div className="section-heading">
        <p className="kicker">Education</p>
        <h2 className="title">Foundations in software and systems</h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {education.map((item, index) => (
          <motion.article
            key={item.degree}
            className="card p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            whileHover={{ y: -5 }}
          >
            <h3 className="font-mono text-lg text-white">{item.degree}</h3>
            <p className="mt-2 text-zinc-300">
              {item.institution}, {item.location}
            </p>
            <p className="mt-4 font-mono text-xs uppercase tracking-wider text-cyan-300">
              {item.duration}
            </p>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}

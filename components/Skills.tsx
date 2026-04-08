"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <motion.section
      className="section"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55 }}
    >
      <div className="section-heading">
        <p className="kicker">Skills</p>
        <h2 className="title">Tooling for execution at scale</h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {Object.entries(skills).map(([group, values], index) => (
          <motion.article
            key={group}
            className="card p-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            whileHover={{ y: -4 }}
          >
            <h3 className="font-mono text-base text-white">{group}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {values.map((item) => (
                <span key={item} className="badge">
                  {item}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}

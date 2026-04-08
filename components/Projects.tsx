"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <motion.section
      className="section"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55 }}
    >
      <div className="section-heading">
        <p className="kicker">Projects</p>
        <h2 className="title">High-impact systems and interfaces</h2>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.name}
            className="card flex h-full flex-col p-6"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: index * 0.09 }}
            whileHover={{ y: -6 }}
          >
            <h3 className="font-mono text-xl text-white">{project.name}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-300">{project.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="badge">
                  {tag}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}

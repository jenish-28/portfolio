"use client";

import { motion } from "framer-motion";
import { CalendarDays, MapPin } from "lucide-react";
import { personalData } from "@/lib/data";

const languageDefaults: Record<string, number> = {
  "English (B2)": 82,
  "German (A2)": 42,
};

export default function About() {
  return (
    <motion.section
      className="section"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55 }}
    >
      <div className="section-heading">
        <p className="kicker">About</p>
        <h2 className="title">Engineer mindset. Product empathy.</h2>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.25fr_1fr]">
        <div className="card p-6 sm:p-8">
          <p className="text-zinc-200">
            I design and build robust web systems with a clean architecture approach, blending
            developer experience with user-centered execution. My work spans resilient backends,
            responsive frontends, and secure integrations.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="font-mono text-xs uppercase tracking-widest text-cyan-300">
                Current Base
              </p>
              <p className="mt-2 flex items-center gap-2 text-zinc-100">
                <MapPin size={15} className="text-cyan-300" />
                {personalData.location}
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="font-mono text-xs uppercase tracking-widest text-cyan-300">
                Birth Date
              </p>
              <p className="mt-2 flex items-center gap-2 text-zinc-100">
                <CalendarDays size={15} className="text-cyan-300" />
                {personalData.birthDate}
              </p>
            </div>
          </div>
        </div>

        <div className="card p-6 sm:p-8">
          <h3 className="font-mono text-lg text-white">Languages</h3>
          <div className="mt-5 space-y-4">
            {personalData.languages.map((language) => {
              const level =
                "level" in language && typeof language.level === "number"
                  ? language.level
                  : (languageDefaults[language.name] ?? 60);

              return (
              <div key={language.name}>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm text-zinc-200">{language.name}</span>
                  <span className="font-mono text-xs text-cyan-300">{level}%</span>
                </div>
                <div className="h-2 rounded-full bg-white/10">
                  <motion.div
                    className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-teal-300"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                  />
                </div>
              </div>
            )})}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

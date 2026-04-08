"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Download } from "lucide-react";
import { personalData } from "@/lib/data";

export default function Hero() {
  const [lineIndex, setLineIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentLine = personalData.taglines[lineIndex];
    const speed = deleting ? 38 : 74;

    const timeout = window.setTimeout(() => {
      if (!deleting && typedText.length < currentLine.length) {
        setTypedText(currentLine.slice(0, typedText.length + 1));
        return;
      }
      if (!deleting && typedText.length === currentLine.length) {
        setDeleting(true);
        return;
      }
      if (deleting && typedText.length > 0) {
        setTypedText(currentLine.slice(0, typedText.length - 1));
        return;
      }
      setDeleting(false);
      setLineIndex((prev) => (prev + 1) % personalData.taglines.length);
    }, typedText === currentLine && !deleting ? 1100 : speed);

    return () => window.clearTimeout(timeout);
  }, [deleting, lineIndex, typedText]);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center px-6 pb-20 pt-32 md:px-8"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="blob blob-cyan left-[-12%] top-[-5%]" />
        <div className="blob blob-purple right-[-8%] top-[20%]" />
        <div className="blob blob-cyan left-[30%] bottom-[-22%]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative mx-auto flex w-full max-w-6xl flex-col gap-8"
      >
        <p className="font-mono text-sm uppercase tracking-[0.24em] text-cyan-300/90">
          {personalData.location}
        </p>
        <h1 className="max-w-4xl font-mono text-4xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
          <span className="hero-glow">{personalData.name}</span>
        </h1>
        <p className="font-mono text-lg text-zinc-200 sm:text-2xl">
          <span className="text-cyan-300">$</span> {typedText}
          <span className="typing-caret" aria-hidden>
            |
          </span>
        </p>
        <p className="max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
          {personalData.title} focused on secure APIs, resilient architecture, and polished user
          experiences that scale from startup velocity to enterprise reliability.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="#projects" className="btn btn-primary">
            View My Work
          </a>
          <a href="#contact" className="btn btn-ghost">
            Contact Me
          </a>
          <a href={personalData.resumeUrl} className="btn btn-ghost" download>
            <Download size={16} />
            Download CV
          </a>
        </div>
      </motion.div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce rounded-full border border-white/20 p-2 text-zinc-300 transition hover:text-cyan-300"
        aria-label="Scroll to About section"
      >
        <ChevronDown size={18} />
      </a>
    </section>
  );
}

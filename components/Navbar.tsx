"use client";

import { useEffect, useMemo, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { navItems } from "@/lib/data";

const sectionIds = navItems.map((item) => item.id);

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("about");
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80; // navbar height
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0,
      },
    );

    sectionIds.forEach((id) => {
      const node = document.getElementById(id);
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, []);

  const links = useMemo(() => navItems, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0a0a0f]/75 backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 md:px-8">
        <a
          href="#hero"
          className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-3 py-1.5 transition hover:border-cyan-300/45 hover:bg-cyan-300/[0.08]"
        >
          {/* <span className="grid h-7 w-7 place-items-center rounded-full border border-cyan-300/40 bg-cyan-300/15 text-cyan-200">
            <CodeXml size={14} />
          </span> */}
          <span className="font-mono text-xs tracking-[0.14em] text-zinc-100 transition group-hover:text-cyan-100">
            Jenishkumar Patel
          </span>
        </a>

        <button
          type="button"
          className="rounded-md border border-white/15 p-2 text-white md:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>

        <ul className="hidden items-center gap-7 md:flex">
          {links.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => scrollToSection(item.id)}
                className={`relative text-sm transition ${
                  activeSection === item.id ? "text-cyan-300" : "text-zinc-300 hover:text-white"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.span
                    layoutId="active-nav"
                    className="absolute -bottom-2 left-0 h-0.5 w-full bg-cyan-300"
                  />
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {isOpen && (
        <div className="border-t border-white/10 bg-[#0a0a0f]/95 px-6 py-4 md:hidden">
          <ul className="space-y-3">
            {links.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => {
                    scrollToSection(item.id);
                    setIsOpen(false);
                  }}
                  className={`block text-sm ${
                    activeSection === item.id ? "text-cyan-300" : "text-zinc-300"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

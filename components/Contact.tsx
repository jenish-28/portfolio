"use client";

import { FormEvent, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link as Linkedin2, Mail, Phone } from "lucide-react";
import { personalData } from "@/lib/data";

type ToastState = {
  type: "success" | "error";
  message: string;
} | null;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<ToastState>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      message: String(formData.get("message") || ""),
    };

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(data?.error || "Request failed");
      }

      form.reset();
      setToast({ type: "success", message: "Message sent successfully!" });
    } catch (error) {
      const message = error instanceof Error ? error.message : "Failed to send. Please try again.";
      setToast({
        type: "error",
        message,
      });
    } finally {
      setIsSubmitting(false);
      window.setTimeout(() => setToast(null), 3000);
    }
  };

  return (
    <motion.section
      className="section pb-24"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55 }}
    >
      <div className="section-heading">
        <p className="kicker">Contact</p>
        <h2 className="title">Let&apos;s build something meaningful</h2>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-4">
          <a href={`mailto:${personalData.email}`} className="card flex items-center gap-3 p-5">
            <Mail size={18} className="text-cyan-300" />
            <span className="text-zinc-100">{personalData.email}</span>
          </a>
          <a href={`tel:${personalData.phone}`} className="card flex items-center gap-3 p-5">
            <Phone size={18} className="text-cyan-300" />
            <span className="text-zinc-100">{personalData.phone}</span>
          </a>
          <a href={personalData.linkedIn} target="_blank" rel="noreferrer" className="card flex items-center gap-3 p-5">
            <Linkedin2 size={18} className="text-cyan-300" />
            <span className="text-zinc-100">{personalData.linkedInLabel}</span>
          </a>
        </div>

        <form onSubmit={handleSubmit} className="card relative z-10 space-y-4 p-6 sm:p-7">
          <div>
            <label htmlFor="name" className="mb-2 block font-mono text-xs uppercase tracking-wider text-cyan-300">
              Name
            </label>
            <input
              id="name"
              name="name"
              required
              className="input-field relative z-20 pointer-events-auto"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block font-mono text-xs uppercase tracking-wider text-cyan-300">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="input-field relative z-20 pointer-events-auto"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-2 block font-mono text-xs uppercase tracking-wider text-cyan-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="input-field relative z-20 pointer-events-auto resize-none"
              placeholder="Tell me about your project..."
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary w-full justify-center disabled:cursor-not-allowed disabled:opacity-70"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-cyan-100 border-t-transparent" />
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      </div>

      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            style={{ pointerEvents: "auto" }}
            className={`fixed bottom-6 right-6 z-50 rounded-lg border px-4 py-3 text-sm shadow-[0_0_40px_rgba(0,229,255,0.25)] ${
              toast.type === "success"
                ? "border-emerald-300/40 bg-[#0f1b16] text-emerald-200"
                : "border-rose-300/35 bg-[#1a1114] text-rose-200"
            }`}
          >
            {toast.message}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}

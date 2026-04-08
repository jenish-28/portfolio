import { personalData } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-3 px-6 text-sm text-zinc-400 md:flex-row md:items-center md:px-8">
        <p>
          © {new Date().getFullYear()} {personalData.name}. All rights reserved.
        </p>
        <p className="font-mono text-xs tracking-widest text-zinc-500">Built with Next.js and Tailwind CSS.</p>
      </div>
    </footer>
  );
}

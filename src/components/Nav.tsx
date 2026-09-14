"use client";

import { motion, useReducedMotion } from "framer-motion";

const links = [
  { href: "#studio", label: "Studio" },
  { href: "#riffle", label: "Riffle" },
  { href: "#hosts", label: "For hosts" },
];

export function Nav() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-void/70 backdrop-blur-md"
      initial={reduceMotion ? false : { y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
        aria-label="Main"
      >
        <a
          href="#"
          className="group flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-[0.2em] text-white"
        >
          <span
            className="flex h-8 w-8 items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-xs text-gold transition group-hover:border-gold group-hover:bg-gold/20"
            aria-hidden="true"
          >
            GC
          </span>
          Galaxy Class
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-white/70 transition hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#riffle"
          className="rounded-full border border-gold/50 bg-gold/10 px-4 py-2 text-sm font-medium text-gold transition hover:bg-gold/20"
        >
          Meet Riffle
        </a>
      </nav>
    </motion.header>
  );
}

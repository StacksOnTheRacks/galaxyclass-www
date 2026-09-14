"use client";

import { motion, useReducedMotion } from "framer-motion";
import { PlayingCard } from "./PlayingCard";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="relative flex min-h-screen flex-col justify-center px-6 pb-24 pt-32"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
        <div>
          <motion.p
            className="mb-4 font-display text-xs font-semibold uppercase tracking-[0.35em] text-stellar"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            Galaxy Class Gaming
          </motion.p>

          <motion.h1
            id="hero-heading"
            className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Games worth
            <span className="block text-gradient-gold">sitting down for.</span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-lg text-lg leading-relaxed text-white/65"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
          >
            We build cinematic, craft-first social games — the kind you open with
            friends, not the kind that opens your wallet. Our first table is{" "}
            <strong className="font-medium text-riffle">Riffle</strong>: real
            no-limit Hold&apos;em, play chips only.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap gap-4"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.5 }}
          >
            <a
              href="#riffle"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-void transition hover:bg-gold/90"
            >
              Explore Riffle
              <span aria-hidden="true">→</span>
            </a>
            <a
              href="https://github.com/StacksOnTheRacks/riffle-poker"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white/80 transition hover:border-white/40 hover:text-white"
            >
              View on GitHub
              <span className="sr-only"> (opens in new tab)</span>
            </a>
          </motion.div>
        </div>

        <motion.div
          className="relative mx-auto flex h-80 w-full max-w-md items-center justify-center lg:h-96"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          aria-hidden="true"
        >
          <PlayingCard
            rank="A"
            suit="spade"
            className="absolute -rotate-12 -translate-x-16 translate-y-4 animate-float"
          />
          <PlayingCard
            rank="K"
            suit="heart"
            className="absolute z-10 rotate-3 shadow-[0_0_60px_rgba(232,197,71,0.15)]"
          />
          <PlayingCard
            rank="?"
            suit="club"
            faceDown
            className="absolute rotate-12 translate-x-16 translate-y-6"
          />

          <div className="absolute -bottom-4 left-1/2 w-48 -translate-x-1/2 rounded-full bg-gold/20 blur-2xl" />
        </motion.div>
      </div>

      <motion.div
        className="mx-auto mt-20 flex max-w-6xl flex-wrap gap-8 border-t border-white/10 pt-8 text-sm text-white/45"
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <span>Play chips only — no real money</span>
        <span className="hidden sm:inline" aria-hidden="true">
          ·
        </span>
        <span>Standalone app or embed in your room</span>
        <span className="hidden sm:inline" aria-hidden="true">
          ·
        </span>
        <span>Design-led from the felt up</span>
      </motion.div>
    </section>
  );
}

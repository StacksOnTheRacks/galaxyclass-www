"use client";

import { motion, useReducedMotion } from "framer-motion";

const pillars = [
  {
    title: "Cinematic craft",
    body: "Every surface — typography, motion, table felt — is treated like a title screen. Atmosphere serves clarity, never the other way around.",
  },
  {
    title: "Social by design",
    body: "Our games are built for rooms: watch parties, lobbies, late-night group chats. The table is the third character in the conversation.",
  },
  {
    title: "Honest economics",
    body: "Play chips, no rake, no cashier. Galaxy Class builds games people play for fun — not products that monetize anxiety.",
  },
];

export function StudioSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="studio"
      className="relative px-6 py-32"
      aria-labelledby="studio-heading"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="max-w-2xl"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-display text-xs font-semibold uppercase tracking-[0.35em] text-gold/80">
            The studio
          </p>
          <h2
            id="studio-heading"
            className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl"
          >
            Galaxy Class Gaming
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/60">
            We&apos;re a design-forward game studio building the next generation
            of social table experiences. We&apos;re not a casino, not a
            platform — we make the games that platforms and players actually
            want at the table.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <motion.article
              key={pillar.title}
              className="glass group rounded-2xl p-8 transition hover:border-gold/20 hover:bg-white/[0.06]"
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div
                className="mb-4 h-px w-12 bg-gradient-to-r from-gold to-transparent"
                aria-hidden="true"
              />
              <h3 className="font-display text-xl font-semibold">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/55">
                {pillar.body}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

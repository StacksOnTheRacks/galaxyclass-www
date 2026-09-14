"use client";

import { motion, useReducedMotion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Your room, your vibe",
    body: "Keep chat, presence, and media on your platform. RiffSync is the first host we built for — more coming.",
  },
  {
    step: "02",
    title: "Drop in Riffle",
    body: "Load the shared play iframe. Riffle handles seats, turns, hole cards, and the move log.",
  },
  {
    step: "03",
    title: "Players sit & play",
    body: "Friends join the table inside your room. One hand completes — they stay in your ecosystem.",
  },
];

export function HostEmbedSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="hosts"
      className="relative px-6 py-32"
      aria-labelledby="hosts-heading"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="text-center"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-display text-xs font-semibold uppercase tracking-[0.35em] text-stellar">
            For hosts & platforms
          </p>
          <h2
            id="hosts-heading"
            className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl"
          >
            Embed-mode, explained.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/55">
            You don&apos;t need to own poker rules or WebSocket match state.
            Riffle is the authority — you&apos;re the room.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {steps.map((item, i) => (
            <motion.article
              key={item.step}
              className="glass relative rounded-2xl p-8"
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <span
                className="font-display text-3xl font-bold text-white/10"
                aria-hidden="true"
              >
                {item.step}
              </span>
              <h3 className="mt-2 font-display text-xl font-semibold">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/55">
                {item.body}
              </p>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={reduceMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href="https://github.com/StacksOnTheRacks/riffsync"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-stellar/40 bg-stellar/10 px-6 py-3 text-sm font-medium text-stellar transition hover:bg-stellar/20"
          >
            RiffSync — first embed host
            <span className="sr-only"> (opens in new tab)</span>
            <span aria-hidden="true">↗</span>
          </a>
          <span className="text-sm text-white/40">
            Partnership inquiries: hello@galaxyclass.gg
          </span>
        </motion.div>
      </div>
    </section>
  );
}

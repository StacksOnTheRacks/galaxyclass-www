"use client";

import { motion, useReducedMotion } from "framer-motion";

const features = [
  {
    label: "Real rules",
    detail: "Full no-limit Texas Hold'em — streets, side pots, showdown. Not a toy.",
  },
  {
    label: "Play chips",
    detail: "Zero real money. Sign in or play anonymously. No KYC, no cashier.",
  },
  {
    label: "Hidden hole cards",
    detail: "Seat-scoped secrets. The board is public; your hand stays yours.",
  },
  {
    label: "Embed anywhere",
    detail: "Load Riffle in an iframe inside your room. You keep chat and media.",
  },
];

export function RiffleFeature() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="riffle"
      className="relative px-6 py-32"
      aria-labelledby="riffle-heading"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-riffle/30 to-transparent" />

      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
        <motion.div
          className="relative order-2 lg:order-1"
          initial={reduceMotion ? false : { opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="glass relative overflow-hidden rounded-3xl p-1">
            <div className="relative rounded-[22px] bg-gradient-to-br from-nebula-900 to-void p-8">
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 30% 20%, rgba(62,232,165,0.15), transparent 50%)",
                }}
                aria-hidden="true"
              />

              <div className="relative">
                <div className="mb-6 flex items-center justify-between">
                  <span className="font-display text-xs uppercase tracking-[0.25em] text-riffle">
                    Featured product
                  </span>
                  <span className="rounded-full border border-riffle/30 bg-riffle/10 px-3 py-1 text-xs text-riffle">
                    NLHE · Play chips
                  </span>
                </div>

                <h3 className="font-display text-4xl font-bold">Riffle</h3>
                <p className="mt-2 text-white/50">
                  No-limit Hold&apos;em — standalone or embedded
                </p>

                <div
                  className="mt-8 flex justify-center gap-3"
                  aria-hidden="true"
                >
                  {["♠", "♥", "♦", "♣"].map((suit, i) => (
                    <div
                      key={suit}
                      className="flex h-16 w-12 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-xl"
                      style={{ transform: `rotate(${(i - 1.5) * 8}deg)` }}
                    >
                      {suit}
                    </div>
                  ))}
                </div>

                <div className="mt-8 grid grid-cols-3 gap-3 text-center text-xs">
                  <div className="rounded-lg border border-white/10 bg-white/5 py-3">
                    <div className="font-display text-lg font-bold text-white">
                      2–9
                    </div>
                    <div className="text-white/40">Seats</div>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/5 py-3">
                    <div className="font-display text-lg font-bold text-white">
                      WS
                    </div>
                    <div className="text-white/40">Live hands</div>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/5 py-3">
                    <div className="font-display text-lg font-bold text-white">
                      0$
                    </div>
                    <div className="text-white/40">Real money</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="order-1 lg:order-2"
          initial={reduceMotion ? false : { opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-display text-xs font-semibold uppercase tracking-[0.35em] text-riffle">
            First product
          </p>
          <h2
            id="riffle-heading"
            className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl"
          >
            Riffle is the table.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/60">
            Riffle owns the rules, the match state, and the felt. Play standalone
            with an account or anonymously — or drop the same surface into a host
            room via embed-mode. Chat, presence, and media stay on the host.
          </p>

          <ul className="mt-10 space-y-5">
            {features.map((f) => (
              <li key={f.label} className="flex gap-4">
                <span
                  className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-riffle/40 bg-riffle/10 text-xs text-riffle"
                  aria-hidden="true"
                >
                  ✓
                </span>
                <div>
                  <span className="font-medium text-white">{f.label}</span>
                  <span className="text-white/40"> — </span>
                  <span className="text-white/55">{f.detail}</span>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://github.com/StacksOnTheRacks/riffle-poker"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-riffle px-6 py-3 text-sm font-semibold text-void transition hover:bg-riffle/90"
            >
              Riffle on GitHub
              <span className="sr-only"> (opens in new tab)</span>
              <span aria-hidden="true">↗</span>
            </a>
            <p className="self-center text-xs text-white/40">
              Play surface ships from the Riffle repo — not embedded here.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

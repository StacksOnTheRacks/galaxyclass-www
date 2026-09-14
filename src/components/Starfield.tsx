"use client";

import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";

type Star = {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  delay: number;
};

function makeStars(count: number): Star[] {
  return Array.from({ length: count }, (_, id) => ({
    id,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 0.5,
    opacity: Math.random() * 0.6 + 0.2,
    delay: Math.random() * 4,
  }));
}

export function Starfield() {
  const reduceMotion = useReducedMotion();
  const stars = useMemo(() => makeStars(120), []);

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-hero-glow" />
      <div className="absolute inset-0 noise opacity-40" />

      {!reduceMotion &&
        stars.map((star) => (
          <motion.span
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: star.size,
              height: star.size,
              opacity: star.opacity,
            }}
            animate={{ opacity: [star.opacity, star.opacity * 0.3, star.opacity] }}
            transition={{
              duration: 3 + star.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

      <div className="absolute -left-1/4 top-1/4 h-[600px] w-[600px] rounded-full bg-nebula-800/40 blur-[120px]" />
      <div className="absolute -right-1/4 bottom-0 h-[500px] w-[500px] rounded-full bg-stellar/5 blur-[100px]" />
    </div>
  );
}

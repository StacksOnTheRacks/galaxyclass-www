import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        void: "#030308",
        nebula: {
          950: "#0a0618",
          900: "#120a24",
          800: "#1a1035",
        },
        gold: {
          DEFAULT: "#e8c547",
          dim: "#b8942e",
        },
        stellar: "#64d2ff",
        riffle: "#3ee8a5",
      },
      fontFamily: {
        display: ["var(--font-syne)", "system-ui", "sans-serif"],
        body: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(100,210,255,0.15), transparent 60%), radial-gradient(ellipse 60% 50% at 80% 50%, rgba(232,197,71,0.08), transparent 50%), radial-gradient(ellipse 50% 40% at 10% 80%, rgba(62,232,165,0.06), transparent 50%)",
      },
      animation: {
        "pulse-slow": "pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 8s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(-2deg)" },
          "50%": { transform: "translateY(-12px) rotate(2deg)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

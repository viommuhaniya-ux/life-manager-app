import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#020204",
        foreground: "#f8fbff",
        glass: "rgba(255,255,255,0.06)",
        borderGlass: "rgba(255,255,255,0.15)",
        neonPurple: "#a855f7",
        neonBlue: "#3b82f6",
        neonCyan: "#06b6d4"
      },
      fontFamily: {
        heading: ["'Instrument Serif'", "serif"],
        body: ["'Barlow'", "sans-serif"]
      },
      boxShadow: {
        neon: "0 0 40px rgba(59,130,246,.30), 0 0 100px rgba(168,85,247,.20)",
        glass: "0 8px 40px rgba(0, 0, 0, 0.45)"
      },
      backdropBlur: {
        xs: "2px"
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at 20% 20%, rgba(168,85,247,.25), transparent 35%), radial-gradient(circle at 80% 10%, rgba(6,182,212,.2), transparent 40%), radial-gradient(circle at 50% 90%, rgba(59,130,246,.22), transparent 50%)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" }
        }
      },
      animation: {
        float: "float 7s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;

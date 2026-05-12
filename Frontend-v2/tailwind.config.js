/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "var(--color-ink)",
        surface: {
          0: "var(--surface-0)",
          1: "var(--surface-1)",
          2: "var(--surface-2)",
          card: "var(--surface-card)",
          DEFAULT: "var(--color-surface)",
        },
        accent: "var(--color-accent)",
        sage: "var(--color-sage)",
        gold: "var(--color-gold)",
        slate: "var(--color-slate)",
        success: "var(--color-success)",
        warning: "var(--color-warning)",
        error: "var(--color-error)",
        info: "var(--color-info)",
      },
      borderColor: {
        "surface-border": "var(--border-color)",
        "surface-light": "var(--border-light)",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        heading: ["var(--font-heading)"],
        body: ["var(--font-body)"],
        ui: ["var(--font-ui)", "monospace"],
        label: ["var(--font-label)", "sans-serif"],
        number: ["var(--font-number)", "sans-serif"],
      },
      borderRadius: {
        card: "var(--radius-card)",
        btn: "var(--radius-btn)",
        input: "var(--radius-input)",
      },
    },
  },
  plugins: [],
}

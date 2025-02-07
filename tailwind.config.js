import daisyUI from 'daisyui'

const frenchRevolution = {
  themes: [
    {
      frenchRevolution: { /* Theme name: frenchRevolution or citizenWebTheme */
        primary: "#2e5cb8",         /* Strong, dignified blue */
        "primary-content": "#ffffff",
        "primary-focus": "#254d9a",
        secondary: "#b8322e",       /* Muted, 'republican' red */
        "secondary-content": "#ffffff",
        "secondary-focus": "#9a2b28",
        accent: "#facc15",          /* Subtle gold/amber */
        "accent-content": "#000000",
        "accent-focus": "#e0b412",
        neutral: "#e5e7eb",          /* Light gray/off-white */
        "neutral-content": "#374151",
        "base-100": "#ffffff",        /* Pure white background */
        "base-200": "#f9fafb",        /* Very light gray background */
        "base-300": "#edf0f2",        /* Slightly darker light gray */
        "base-content": "#1f2937",    /* Very dark gray text on base backgrounds */
        info: "#3ab7bf",           /* DaisyUI default (adjust saturation if needed) */
        success: "#36d399",          /* DaisyUI default (adjust saturation if needed) */
        warning: "#fbbd23",          /* DaisyUI default (adjust saturation if needed) */
        error: "#f87272",            /* DaisyUI default (adjust saturation if needed) */
      },
    },
    "dark", // Optionally include default DaisyUI dark theme as well
    "light", // Include default light theme as well
  ],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./layers/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./nuxt.config.ts",
      "./app.vue",
    ],  theme: {
    extend: {},
  },
  plugins: [daisyUI],
  daisyui: {
      themes: [frenchRevolution, "dark", "light"],
    },
}

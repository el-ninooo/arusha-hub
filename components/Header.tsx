@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --brand-50: #f1f8f5;
  --brand-100: #dfeee6;
  --brand-200: #bddfc9;
  --brand-300: #8ec7a4;
  --brand-400: #5bab7b;
  --brand-500: #3d8c60;
  --brand-600: #2d6f49;
  --brand-700: #25593d;
  --brand-800: #1d4733;
  --brand-900: #173e2b;
  --sand: #f8f5f1;
  --ink: #1a1d1a;
  --accent: #f5be4e;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: #ffffff;
  color: var(--ink);
  font-family: Arial, Helvetica, sans-serif;
}

img {
  max-width: 100%;
  display: block;
}

label {
  display: block;
}

input,
select,
textarea,
button {
  font: inherit;
}

.container-shell {
  @apply mx-auto max-w-7xl px-4 md:px-6 lg:px-8;
}

.card-surface {
  @apply overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft;
}

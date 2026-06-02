import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

export default defineConfig([
  ...nextVitals,
  globalIgnores([
    ".next/**",
    "_site/**",
    "OldWebsite/**",
    "assets/**",
    "hovercss/**",
    "node_modules/**",
    "out/**",
    "vendor/**",
  ]),
]);

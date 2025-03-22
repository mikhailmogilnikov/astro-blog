// @ts-check
import { defineConfig } from "astro/config";
import { loadEnv } from "vite";

import preact from "@astrojs/preact";

const { PUBLIC_BASE_URL } = loadEnv(
  process.env.NODE_ENV || "production",
  process.cwd(),
  ""
);

// https://astro.build/config
export default defineConfig({
  site: PUBLIC_BASE_URL,
  integrations: [preact()],
});
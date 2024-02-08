import { defineConfig } from "vite";
import preact from "@preact/preset-vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  server: {
    host: "0.0.0.0",
    // host: true, Tested with both options
    port: 5173,
  },
});

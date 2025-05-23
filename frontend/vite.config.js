import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 5050,
    strictPort: true,
    proxy: {
      "/api": {
        target: "http://127.0.0.1:8080/"
      }
    },
    allowedHosts: ["server.dev", "domain.local", "test.domain.local"]
  }
});

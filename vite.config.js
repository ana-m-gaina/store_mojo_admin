import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          reactDom: ["react-dom"],
          xDataGridComponents: ["@mui/x-data-grid/components"],
          xDataGridHooks: ["@mui/x-data-grid/hooks"],
        },
      },
    },
  },
});

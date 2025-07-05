import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";


export default ({ mode }) => {
  // eslint-disable-next-line no-undef
  const env = loadEnv(mode, process.cwd());

  return defineConfig({
    plugins: [react(), tailwindcss()],
    server: {
      proxy: {
        "/suggestion": {
          target: `${env.VITE_SUGGESTION_URL}`,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/suggestion/, ""),
        },
        "/recommendation": {
          target: `${env.VITE_RECOMMENDATION_URL}`,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/recommendation/, ""),
        },
        "/search": {
          target: `${env.VITE_SEARCH_URL}`,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/search/, ""),
        },
      },
    },
  });
};

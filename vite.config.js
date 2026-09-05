import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig(({ mode }) => ({
  plugins: [react(), tailwindcss(), cloudflare()],
  define: {
    // Inject the API base URL at build time.
    // In production: the live Render backend.
    // In development: fall back to the .env value or localhost.
    'import.meta.env.VITE_API_BASE_URL': mode === 'production'
      ? JSON.stringify('https://leip-backend.onrender.com/api/v1')
      : JSON.stringify(process.env.VITE_API_BASE_URL || 'http://localhost:5000/api/v1'),
  },
}));

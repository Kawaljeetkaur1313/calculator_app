import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
            tailwindcss(),
  ],
  // Base path for GitHub Pages deployment
  // Change 'nft_dev' to your actual repository name when deploying
  base: "/calculator_app/",
  server: {
    host: "0.0.0.0",
    port: 5173,
  },
})

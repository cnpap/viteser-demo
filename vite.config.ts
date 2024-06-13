import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteserPlugin } from 'viteser'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteserPlugin({
      vitePort: 5173,
      serverPort: 12000
    })],
})

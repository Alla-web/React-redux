import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'assets': path.resolve(__dirname, 'src/assets'),
      'components': path.resolve(__dirname, 'src/components'),
      'homeworks': path.resolve(__dirname, 'src/homeworks'),
      'lessons': path.resolve(__dirname, 'src/lessons'),
      'pages': path.resolve(__dirname, 'src/pages'),
      'consultations': path.resolve(__dirname, 'src/consultations'),
      'styles': path.resolve(__dirname, 'src/styles'),
      'store': path.resolve(__dirname, 'src/store')
    }
  },
  server: {
    open: true,
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "src/setupTests",
    mockReset: true,
  },
})

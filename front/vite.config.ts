/// <reference types="vitest" />
/// <reference types="Vite/client" />
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/dist/config.js'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
  }
  
})

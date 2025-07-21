import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: ['e8c43ecf-69f4-41e7-b077-4c8454a95b7b-00-yraezj9n0ab3.pike.replit.dev', 'all'], // Add your Replit host here
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true
      }
    }
  }
})
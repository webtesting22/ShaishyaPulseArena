import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    allowedHosts: [
      'aeb4-2401-4900-1f3f-a92e-9c9c-d42e-afbe-eb54.ngrok-free.app'
    ]
  },
  plugins: [react()],
})

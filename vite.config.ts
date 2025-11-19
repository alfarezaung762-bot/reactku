import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// ⚠️ Tambahkan import tailwindcss di sini
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // ⚠️ Tambahkan plugin tailwindcss di sini
    tailwindcss(), 
  ],
})
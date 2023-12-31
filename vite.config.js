import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    //allows a .env file to be used to keep secrets secret
    'process.env.VITE_SERVICE_ID': JSON.stringify(process.env.VITE_SERVICE_ID),
    'process.env.VITE_TEMPLATE_ID': JSON.stringify(process.env.VITE_TEMPLATE_ID),
    'process.env.VITE_USER_ID': JSON.stringify(process.env.VITE_USER_ID),
  },
  base:"/"
});
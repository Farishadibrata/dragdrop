import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    dynamicImportVarsOptions: {
      exclude : []
    }
  },
  plugins: [react()]

})

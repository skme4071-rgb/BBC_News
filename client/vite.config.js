import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: 'client', // client ফোল্ডারকে root হিসেবে দেখানো
  plugins: [react()],
  build: {
    outDir: '../dist', // server বা public ফোল্ডারে output
  },
})

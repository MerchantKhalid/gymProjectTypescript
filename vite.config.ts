import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// this path comes from @types/node dev dependencies
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000,
        proxy: {
            '/api': `http://localhost:${process.env.API_PORT || 5050}`
        }
    },
    build: {
        // server.js serves client/build in production
        outDir: 'build'
    },
    test: {
        environment: 'jsdom',
        globals: true,
        setupFiles: './src/test/setup.js'
    }
});

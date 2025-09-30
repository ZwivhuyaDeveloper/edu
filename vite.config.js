/* eslint-disable no-undef */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
    plugins: [
        react(),
        tailwindcss()
    ],
    alias: {
        "@": path.resolve(__dirname, "./src"),
    },
    base: '/edu/',
    server: {
        host: true, // listen on all network interfaces
        port: 5173, // optional, your dev port

    }
});

import {defineConfig, version} from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    base: '/staff-board/',
    define: {
        __BUILD_DATE__: JSON.stringify(new Date().toISOString()),
        __VERSION__: JSON.stringify(version),
    },
});
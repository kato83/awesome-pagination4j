import {defineConfig} from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
    root: 'src',
    publicDir: '../public',
    define: {
        __BUILD_DATE__: new Date().getTime()
    },
    build: {
        outDir: '../dist',
    }
})

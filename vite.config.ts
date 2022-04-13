import path from 'path'
import { defineConfig } from 'vite'
import pkg from './package.json'
import dts from 'vite-dts'

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            formats: ['es'],
            name: pkg.name,
            fileName: format => `${pkg.name}.${format}.js`,
        },
        rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    react: 'React',
                },
            },
        },
    },
    plugins: [dts()],
})

import analyze from 'rollup-plugin-analyzer'
import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import external from 'rollup-plugin-peer-deps-external'
import pkg from './package.json'

const extensions = ['.ts', '.tsx']

export default {
    input: './src/index.ts',
    plugins: [
        external(),
        // Allows node_modules resolution
        resolve({ extensions }),

        // Compile TypeScript/JavaScript files
        babel({ extensions, include: ['src/**/*'] }),
        analyze({ limit: 0 }),
    ],

    output: [
        // only exporting es modules
        {
            file: pkg.module,
            format: 'es',
        },
    ],
}

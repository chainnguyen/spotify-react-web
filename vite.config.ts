import react from '@vitejs/plugin-react'
import moment from 'moment'
import path from 'path'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'

// @ts-ignore
import packageJson from './package.json'

const { dependencies, devDependencies, name, version, author } = packageJson
const __APP_INFO__ = {
  pkg: { dependencies, devDependencies, name, version, author },
  lastBuildTime: moment().format('YYYY-MM-DD HH:mm:ss'),
}

export default defineConfig({
  server: {
    host: 'localhost',
    port: 8080,
    open: true,
    https: false,
  },
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  base: '/',
  plugins: [react(), tsconfigPaths(), svgr()],
  define: {
    __APP_INFO__: JSON.stringify(__APP_INFO__),
  },
  build: {
    target: 'es2015',
    cssTarget: 'chrome80',
    outDir: 'dist',
    chunkSizeWarningLimit: 2000,
  },
  esbuild: {
    pure: ['console.log', 'debugger'],
  },
})

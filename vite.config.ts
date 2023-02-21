import react from '@vitejs/plugin-react'
import path from 'path'
import type { UserConfig } from 'vite'
import svgr from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'

export default (): UserConfig => {
  return {
    server: {
      host: 'localhost',
      port: 8080,
      open: true,
      https: false,
    },
    plugins: [react(), tsconfigPaths(), svgr()],
    resolve: {
      alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
    },
  }
}

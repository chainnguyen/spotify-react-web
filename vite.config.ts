// Core
import react from '@vitejs/plugin-react'
import * as path from 'path'
import type { UserConfig } from 'vite'

export default (): UserConfig => {
  return {
    server: {
      host: 'localhost',
      port: 8080,
      open: true,
      https: false,
    },
    plugins: [react()],
    resolve: {
      alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
    },
  }
}

// Core
import type { UserConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default (): UserConfig => {
  return {
    server: {
      host: 'localhost',
      port: 8080,
      open: true,
      https: false,
    },
    plugins: [react()],
  }
}

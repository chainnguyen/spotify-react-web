import '@/assets/scss/layouts/auth.scss'

import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import { CLoading } from '@/shared/components'

function AuthLayout() {
  return (
    <main>
      <div>
        <Suspense fallback={<CLoading />}>
          <Outlet />
        </Suspense>
      </div>
    </main>
  )
}

export default AuthLayout

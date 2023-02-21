import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import { Header, Loading, Sidebar } from '@/share/components'

function DefaultLayout() {
  return (
    <>
      <Header />
      <Sidebar />
      <main>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  )
}

export default DefaultLayout

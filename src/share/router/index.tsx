import type { ReactNode } from 'react'
import { Route, Routes } from 'react-router-dom'

import { Home, Library, NotFound, Search } from '@/pages'

type PropsRoute = {
  path: string
  layout: ReactNode
}

function RouteList({ path, layout }: PropsRoute) {
  return (
    <Routes>
      <Route
        path={path}
        element={layout}>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/search"
          element={<Search />}
        />
        <Route
          path="/library"
          element={<Library />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Route>
    </Routes>
  )
}

export default RouteList

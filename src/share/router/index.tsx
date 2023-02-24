import type { ReactNode } from 'react'
import { useRoutes } from 'react-router-dom'

import { Home, Library, NotFound, Playlist, Search, Section } from '@/pages'

type PropsRoute = {
  path: string
  layout: ReactNode
}

function RouteList({ path, layout }: PropsRoute) {
  return useRoutes([
    {
      path: path,
      element: layout,
      children: [
        { path: '/', element: <Home /> },
        { path: 'search', element: <Search /> },
        { path: 'library', element: <Library /> },
        {
          path: 'section',
          element: <Section />,
          children: [{ path: ':sectionId', element: <Section /> }],
        },
        {
          path: 'playlist',
          element: <Playlist />,
          children: [{ path: ':playlistId', element: <Playlist /> }],
        },
        { path: '*', element: <NotFound /> },
      ],
    },
  ])
}

export default RouteList

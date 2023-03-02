import type { ReactNode } from 'react'
import { useRoutes } from 'react-router-dom'

import {
  Home,
  Library,
  NotAuthenticated,
  NotFound,
  Playlist,
  Search,
  Section,
  ServerError,
} from '@/pages'

interface IPropsRoute {
  path: string
  layout: ReactNode
}

function RouteList({ path, layout }: IPropsRoute) {
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
        { path: '/not-found', element: <NotFound /> },
        { path: '/not-authenticated', element: <NotAuthenticated /> },
        { path: '/server-error', element: <ServerError /> },
      ],
    },
  ])
}

export default RouteList

import type { ReactNode } from 'react'
import { useRoutes } from 'react-router-dom'

import { Home } from '@/pages'
import { WrapperResolveGuard } from '@/router/guards'
// Modules
import AuthRoute from '@/router/modules/auth'
import ExceptionsRoute from '@/router/modules/exceptions'
import LibraryRoute from '@/router/modules/library'
import PlaylistRoute from '@/router/modules/playlist'
import SearchRoute from '@/router/modules/search'
import SectionRoute from '@/router/modules/section'

interface IPropsRoute {
  path: string
  layout: ReactNode
}

function RenderRoutes({ path, layout }: IPropsRoute) {
  return useRoutes([
    {
      path: path,
      element: layout,
      children: [
        {
          path: '/',
          element: (
            <WrapperResolveGuard
              isPublic
              guard="auth">
              <Home />
            </WrapperResolveGuard>
          ),
        },
        ...AuthRoute,
        ...SearchRoute,
        ...LibraryRoute,
        ...SectionRoute,
        ...PlaylistRoute,
        ...ExceptionsRoute,
      ],
    },
  ])
}

export default RenderRoutes

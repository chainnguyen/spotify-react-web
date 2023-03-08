import { NotAuthenticated, NotFound, ServerError } from '@/pages'

export default [
  {
    path: '*',
    element: <NotFound />,
  },
  {
    path: 'not-found',
    element: <NotFound />,
  },
  {
    path: 'not-authenticated',
    element: <NotAuthenticated />,
  },
  {
    path: 'server-error',
    element: <ServerError />,
  },
]

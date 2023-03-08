import { Search } from '@/pages'
import { WrapperResolveGuard } from '@/router/guards'

export default [
  {
    path: 'search',
    element: (
      <WrapperResolveGuard isPublic>
        <Search />
      </WrapperResolveGuard>
    ),
    children: [],
    meta: { role: [] },
  },
]

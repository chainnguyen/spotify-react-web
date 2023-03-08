import { Library } from '@/pages'
import { WrapperResolveGuard } from '@/router/guards'

export default [
  {
    path: 'library',
    element: (
      <WrapperResolveGuard>
        <Library />
      </WrapperResolveGuard>
    ),
    children: [],
    meta: { role: [] },
  },
]

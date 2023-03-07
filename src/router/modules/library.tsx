import { Library } from '@/pages'
import { WrapperResolveGuard } from '@/router/guards'

export default [
  {
    path: 'library',
    element: (
      <WrapperResolveGuard guard="auth">
        <Library />
      </WrapperResolveGuard>
    ),
    children: [],
    meta: { role: [] },
  },
]

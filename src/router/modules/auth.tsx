import { Login, Signup } from '@/pages'
import { WrapperResolveGuard } from '@/router/guards'

export default [
  {
    path: 'auth/login',
    element: (
      <WrapperResolveGuard guard="login">
        <Login />
      </WrapperResolveGuard>
    ),
  },
  {
    path: 'auth/signup',
    element: (
      <WrapperResolveGuard guard="login">
        <Signup />
      </WrapperResolveGuard>
    ),
  },
]

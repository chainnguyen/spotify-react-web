import type { RouteProps } from 'react-router-dom'

import type { GuardTypes } from '@/@types/global'
import { AuthGuard, LoginGuard } from '@/router/guards'

export type WrapperRouteProps = RouteProps & {
  // Public route without login
  isPublic?: boolean
  // Component need to guard
  guard?: GuardTypes
}

function WrapperResolveGuard(props: WrapperRouteProps) {
  const { guard } = props

  const protector = {
    login: <LoginGuard {...props} />,
    auth: <AuthGuard {...props} />,
  }

  return guard ? protector[guard as keyof typeof protector] : protector['auth']
}

export default WrapperResolveGuard

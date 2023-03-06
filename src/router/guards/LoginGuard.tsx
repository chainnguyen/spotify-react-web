import type { ReactElement } from 'react'
import { useSelector } from 'react-redux'
import type { RouteProps } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

import { AUTH_GETTER } from '@/shared/store/modules/auth'

function LoginGuard(props: RouteProps) {
  const $logged = useSelector(AUTH_GETTER.token)

  return $logged ? (props.element as ReactElement) : <Navigate to="/" />
}

export default LoginGuard

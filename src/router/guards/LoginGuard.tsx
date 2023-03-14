import type { ReactElement } from 'react'
import { useLayoutEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

import type { WrapperRouteProps } from '@/router/guards/WrapperResolveGuard'
import type { AppDispatch } from '@/shared/store'
import { SET_LAYOUT } from '@/shared/store/common'
import { AUTH_GETTER } from '@/shared/store/modules/auth'

function LoginGuard(props: WrapperRouteProps) {
  const dispatch = useDispatch<AppDispatch>()

  const $logged = useSelector(AUTH_GETTER.token)

  useLayoutEffect(() => {
    dispatch(SET_LAYOUT('auth'))
  }, [])

  if ($logged) return <Navigate to={import.meta.env.VITE_ROUTER_BASE as string} />

  return props.children as ReactElement
}

export default LoginGuard

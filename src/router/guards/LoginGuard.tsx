import type { ReactElement } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

import type { WrapperRouteProps } from '@/router/guards/WrapperResolveGuard'
import type { AppDispatch } from '@/shared/store'
import { SET_LAYOUT } from '@/shared/store/common'
import { AUTH_GETTER } from '@/shared/store/modules/auth'

function LoginGuard(props: WrapperRouteProps) {
  const dispatch = useDispatch<AppDispatch>()

  const $logged = useSelector(AUTH_GETTER.token)

  useEffect(() => {
    dispatch(SET_LAYOUT('auth'))
  }, [])

  if ($logged) return <Navigate to="/" />

  return props.children as ReactElement
}

export default LoginGuard

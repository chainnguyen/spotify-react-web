import type { ReactElement } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { RouteProps } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

import type { AppDispatch } from '@/shared/store'
import { SET_LAYOUT } from '@/shared/store/common'
import { AUTH_GETTER } from '@/shared/store/modules/auth'

function LoginGuard(props: RouteProps) {
  const dispatch = useDispatch<AppDispatch>()

  const $logged = useSelector(AUTH_GETTER.token)

  if ($logged) {
    dispatch(SET_LAYOUT('default'))
    return <Navigate to="/" />
  } else {
    dispatch(SET_LAYOUT('auth'))
    return props.children as ReactElement
  }
}

export default LoginGuard

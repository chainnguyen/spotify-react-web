import type { ReactElement } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

import type { WrapperRouteProps } from '@/router/guards/WrapperResolveGuard'
import { AuthService } from '@/services/auth.service'
import type { AppDispatch } from '@/shared/store'
import { SET_LAYOUT } from '@/shared/store/common'
import { AUTH_GETTER, SET_PROFILE } from '@/shared/store/modules/auth'

function AuthGuard(props: WrapperRouteProps) {
  const dispatch = useDispatch<AppDispatch>()

  const $logged = useSelector(AUTH_GETTER.token)
  const $profile = useSelector(AUTH_GETTER.profile)

  useEffect(() => {
    dispatch(SET_LAYOUT('default'))
    if (!$logged) return
    // Check information user is empty
    if (!$profile || !Object.keys($profile).length) {
      fetchProfile().then((r) => r)
    }
  }, [])

  const fetchProfile = async () => {
    try {
      await AuthService.profile().then((res) => {
        dispatch(SET_PROFILE(res.data))
      })
    } catch (err) {
      throw err
    }
  }

  if (!$logged && !props?.isPublic) return <Navigate to="/auth/login" />

  return props.children as ReactElement
}

export default AuthGuard

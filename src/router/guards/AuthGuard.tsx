import type { ReactElement } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { RouteProps } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

import { AuthService } from '@/services/auth.service'
import type { AppDispatch } from '@/shared/store'
import { SET_LAYOUT } from '@/shared/store/common'
import { AUTH_GETTER, SET_PROFILE } from '@/shared/store/modules/auth'

function AuthGuard(props: RouteProps) {
  const dispatch = useDispatch<AppDispatch>()

  const $logged = useSelector(AUTH_GETTER.token)
  const $profile = useSelector(AUTH_GETTER.profile)

  useEffect(() => {
    if (!$logged) return
    // Check information user is empty
    if (!$profile || !Object.keys($profile).length) {
      fetchProfile().then((r) => r)
    }
  }, [])

  const fetchProfile = async () => {
    try {
      await AuthService.profile().then((res) => {
        dispatch(SET_PROFILE(res))
      })
    } catch (err) {
      throw err
    }
  }

  if (!$logged) {
    dispatch(SET_LAYOUT('auth'))
    return <Navigate to="/auth/login" />
  } else {
    dispatch(SET_LAYOUT('default'))
    return props.children as ReactElement
  }
}

export default AuthGuard

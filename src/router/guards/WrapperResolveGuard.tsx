import type { ReactElement } from 'react'
import { useTranslation } from 'react-i18next'
import type { RouteProps } from 'react-router-dom'

import { AuthGuard, LoginGuard } from '@/router/guards'

export type WrapperRouteProps = RouteProps & {
  // Document page title
  title?: string
  // Set authenticated
  auth?: boolean
  // Component need to guard
  guard?: string
}

function WrapperResolveGuard(props: WrapperRouteProps) {
  const { t } = useTranslation()

  const { title, auth, guard } = props

  const component = {
    login: <LoginGuard {...props} />,
    auth: <AuthGuard {...props} />,
  }

  if (title) {
    document.title = t(title)
  }

  return auth ? component[guard as keyof typeof component] : (props.element as ReactElement)
}

export default WrapperResolveGuard

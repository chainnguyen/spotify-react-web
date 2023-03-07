import type { BaseSyntheticEvent } from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import type { IFreeObject } from '@/@types/global'
import AuthLayout from '@/layouts/Auth'
import DefaultLayout from '@/layouts/Default'
import RenderRoutes from '@/router'
import type { AppDispatch } from '@/shared/store'
import { COMMON_GETTER } from '@/shared/store/common'
import { LOCALES_GETTER, SET_LANGUAGE } from '@/shared/store/modules/locales'

function App() {
  const dispatch = useDispatch<AppDispatch>()

  const $currentLocale = useSelector(LOCALES_GETTER.currentLocale)
  const $globalLayout = useSelector(COMMON_GETTER.layout)

  const [attributeInspect, setAttributeInspect] = useState<IFreeObject>({})

  const displayLayout = {
    auth: <AuthLayout />,
    default: <DefaultLayout />,
  }

  useEffect(() => {
    // Set default app title
    document.title = import.meta.env.VITE_DEFAULT_TITLE
    // Set language saved from localStorage
    $currentLocale && dispatch(SET_LANGUAGE($currentLocale))

    if (['production', 'staging'].includes(import.meta.env.MODE)) {
      setAttributeInspect({
        onKeyDown: (e: BaseSyntheticEvent) => preventInspectElement(e),
        onClick: (e: BaseSyntheticEvent) => preventInspectElement(e),
        onContextMenu: (e: BaseSyntheticEvent) => preventInspectElement(e),
      })
    }
  }, [])

  const preventInspectElement = (evt: BaseSyntheticEvent): void => {
    // Block the user to perform: Right-Click, F12
    // @ts-ignore
    if (evt.keyCode === 123 || evt.type === 'contextmenu' || evt.nativeEvent?.button === 2) {
      evt.preventDefault()
    }
  }

  return (
    <div
      className="Root"
      {...attributeInspect}>
      <RenderRoutes
        path={import.meta.env.VITE_ROUTER_BASE as string}
        layout={$globalLayout ? displayLayout[$globalLayout] : displayLayout['default']}
      />
    </div>
  )
}

export default App

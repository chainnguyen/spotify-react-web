import type { BaseSyntheticEvent } from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import type { IFreeObject } from '@/@types/global'
import DefaultLayout from '@/layouts/Default'
import RouteList from '@/router'
import type { AppDispatch } from '@/shared/store'
import { LOCALES_GETTER, SET_LANGUAGE } from '@/shared/store/modules/locales'

function App() {
  const dispatch = useDispatch<AppDispatch>()

  const [attributeInspect, setAttributeInspect] = useState<IFreeObject>({})

  const $currentLocale = useSelector(LOCALES_GETTER.currentLocale)

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
      <Router>
        <RouteList
          path={import.meta.env.VITE_ROUTER_BASE as string}
          layout={<DefaultLayout />}
        />
      </Router>
    </div>
  )
}

export default App

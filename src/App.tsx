import type { BaseSyntheticEvent } from 'react'
import { useEffect, useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import DefaultLayout from '@/layouts/Default'
import RouteList from '@/share/router'
import type { IFreeObject } from '@/types/global'

function App() {
  const [attributeInspect, setAttributeInspect] = useState<IFreeObject>({})

  useEffect(() => {
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

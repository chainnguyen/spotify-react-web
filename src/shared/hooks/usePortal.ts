import type { ReactNode } from 'react'
import { useCallback, useEffect, useState } from 'react'
import { createPortal, unmountComponentAtNode } from 'react-dom'

function usePortal(el: Element | DocumentFragment) {
  const [portal, setPortal] = useState({
    render: () => null,
    remove: () => null,
  })

  const renderPortal = useCallback((el: Element | DocumentFragment) => {
    const Portal = ({ children }: { children: ReactNode }) => createPortal(children, el)
    const remove = () => unmountComponentAtNode(el)
    return { render: Portal, remove }
  }, [])

  useEffect(() => {
    if (el) portal.remove()
    const newPortal: any = renderPortal(el)
    setPortal(newPortal)
    return () => newPortal.remove(el)
  }, [el])

  return portal.render
}

export default usePortal

import { lazy } from 'react'

type ArgumentType = {
  path: string
  namedExport?: string
}

function useLazyLoad({ path, namedExport }: ArgumentType): any {
  return lazy(() => {
    const promise = import(`@/${path}`)
    if (!namedExport) {
      return promise
    } else {
      return promise.then((module) => ({ default: module[namedExport] }))
    }
  })
}

export default useLazyLoad

import { useEffect, useState } from 'react'

import type { IFreeObject } from '@/types/global'

function useFetch<T>(url: string, options: IFreeObject) {
  const [response, setResponse] = useState<T | null>(null)
  const [error, setError] = useState<any>(null)
  const [abort, setAbort] = useState<any>(() => {})

  useEffect(() => {
    const fetchData = async () => {
      try {
        const abortController = new AbortController()
        const signal = abortController.signal
        setAbort(abortController.abort)
        const res = await fetch(url, { ...options, signal })
        const json = await res.json()

        setResponse(json)
      } catch (error) {
        setError(error)
      }
    }
    fetchData()

    return () => {
      abort()
    }
  }, [])

  return { response, error, abort }
}

export default useFetch

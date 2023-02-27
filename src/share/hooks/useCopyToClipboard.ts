import { useCallback, useEffect, useState } from 'react'

function useCopyToClipboard(text: string) {
  const [copied, setCopied] = useState<boolean>(false)

  const copy = useCallback(() => {
    if (!copied) setCopied(copyToClipboard(text))
  }, [text])

  useEffect(() => () => setCopied(false), [text])

  const copyToClipboard = (str: string) => {
    const el: HTMLTextAreaElement = document.createElement('textarea')
    const selection = document.getSelection()
    if (!selection) return false

    el.value = str
    el.setAttribute('readonly', '')
    el.style.position = 'absolute'
    el.style.left = '-9999px'
    document.body.appendChild(el)

    const selected: boolean | Range = selection.rangeCount > 0 ? selection.getRangeAt(0) : false
    el.select()
    const success = document.execCommand('copy')
    document.body.removeChild(el)

    if (selected) {
      selection.removeAllRanges()
      selection.addRange(selected)
    }
    return success
  }

  return [copied, copy]
}

export default useCopyToClipboard

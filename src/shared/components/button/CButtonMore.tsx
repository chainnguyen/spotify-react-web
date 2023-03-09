import '@/assets/scss/components/_button.scss'

import type { MouseEvent } from 'react'

interface IProps {
  width: string | number
  height: string | number
  classButton?: string
  ariaLabel?: string
  tabIndex?: number
  onClick?: (event: MouseEvent<HTMLElement>) => void
}

function CButtonMore({ width, height, classButton, ariaLabel, tabIndex, onClick }: IProps) {
  return (
    <button
      type="button"
      aria-haspopup="menu"
      aria-expanded="false"
      aria-label={ariaLabel}
      tabIndex={tabIndex || undefined}
      className={`T0anrkk_QA4IAQL29get ${classButton || ''}`}
      onClick={onClick}>
      <svg
        role="img"
        width={width}
        height={height}
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="Svg-sc-ytk21e-0 uPxdw">
        <path d="M4.5 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm15 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm-7.5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path>
      </svg>
    </button>
  )
}

export default CButtonMore

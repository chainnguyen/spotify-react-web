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

function CButtonSaveToLibrary({
  width,
  height,
  classButton,
  ariaLabel,
  tabIndex,
  onClick,
}: IProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked="false"
      aria-expanded="false"
      aria-label={ariaLabel || 'Save to Your Library'}
      tabIndex={tabIndex || undefined}
      className={`Fm7C3gdh5Lsc9qSXrQwO ${classButton || ''}`}
      onClick={onClick}>
      <svg
        role="img"
        width={width}
        height={height}
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="Svg-sc-ytk21e-0 uPxdw">
        <path d="M5.21 1.57a6.757 6.757 0 0 1 6.708 1.545.124.124 0 0 0 .165 0 6.741 6.741 0 0 1 5.715-1.78l.004.001a6.802 6.802 0 0 1 5.571 5.376v.003a6.689 6.689 0 0 1-1.49 5.655l-7.954 9.48a2.518 2.518 0 0 1-3.857 0L2.12 12.37A6.683 6.683 0 0 1 .627 6.714 6.757 6.757 0 0 1 5.21 1.57zm3.12 1.803a4.757 4.757 0 0 0-5.74 3.725l-.001.002a4.684 4.684 0 0 0 1.049 3.969l.009.01 7.958 9.485a.518.518 0 0 0 .79 0l7.968-9.495a4.688 4.688 0 0 0 1.049-3.965 4.803 4.803 0 0 0-3.931-3.794 4.74 4.74 0 0 0-4.023 1.256l-.008.008a2.123 2.123 0 0 1-2.9 0l-.007-.007a4.757 4.757 0 0 0-2.214-1.194z"></path>
      </svg>
    </button>
  )
}

export default CButtonSaveToLibrary

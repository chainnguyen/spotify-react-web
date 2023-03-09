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

function CButtonPlay({ width, height, classButton, ariaLabel, tabIndex, onClick }: IProps) {
  return (
    <button
      aria-label={ariaLabel}
      tabIndex={tabIndex || undefined}
      className={`Button-sc-qlcn5g-0 futnNt ${classButton || ''}`}
      onClick={onClick}>
      <span className="ButtonInner-sc-14ud5tc-0 dpREpp encore-bright-accent-set">
        <span
          aria-hidden="true"
          className="IconWrapper__Wrapper-sc-1hf1hjl-0 fSnHJ">
          <svg
            role="img"
            width={width}
            height={height}
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="Svg-sc-ytk21e-0 uPxdw">
            <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
          </svg>
        </span>
      </span>
    </button>
  )
}

export default CButtonPlay

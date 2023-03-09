import type { ReactNode } from 'react'

interface IProps {
  children: ReactNode
  onClose?: () => void
  className?: string
}

function CModalCurtain({ children, onClose, className }: IProps) {
  return (
    <div
      role="presentation"
      className={`dialog ftlV6Ixmq4wkKMg7hJ1v ${className || ''}`}>
      <div
        className="overlay"
        onClick={onClose}
      />
      {children}
    </div>
  )
}

export default CModalCurtain

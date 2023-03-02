import type { ReactNode } from 'react'

interface IProps {
  children: ReactNode
  onClose?: () => void
}

function CModalCurtain({ children, onClose }: IProps) {
  return (
    <div
      role="presentation"
      className="dialog ftlV6Ixmq4wkKMg7hJ1v">
      <div
        className="overlay"
        onClick={onClose}
      />
      {children}
    </div>
  )
}

export default CModalCurtain

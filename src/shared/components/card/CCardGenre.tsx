import '@/assets/scss/components/_genre-card.scss'

import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'

import type { GenreItem } from '@/@types/genre'

interface IProps {
  data: GenreItem
}

function CCardGenre({ data }: IProps) {
  return (
    <Link
      to={data.is_concerts ? '/concerts' : `/genre/${data.id}`}
      draggable="false"
      className="Em2LrSSfvrgXQoajs6cm"
      style={{ backgroundColor: data.card_color } as CSSProperties}>
      <div>
        <img
          aria-hidden="false"
          draggable="false"
          loading="lazy"
          src={data.thumbnail_image}
          alt={data.title}
          className="mMx2LUixlnN_Fu45JpFB tV9cjMpTPaykKsn2OVsw Yn2Ei5QZn19gria6LjZj"
        />
        <span className="Type__TypeElement-sc-goli3j-0 dXoLvE i2yp6pOoZpYZLd5QWguN">
          {data.title}
        </span>
      </div>
    </Link>
  )
}

export default CCardGenre

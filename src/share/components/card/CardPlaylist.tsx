import type { CSSProperties } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import type { Card } from '@/types/playlist'

interface IProps {
  data: Card
}

function CardPlaylist({ data }: IProps) {
  const navigate = useNavigate()
  const redirectPlaylist = (id: string): void => {
    navigate(`/playlist/${id}`)
  }

  return (
    <div className="LunqxlFIupJw_Dkx6mNx">
      <div
        draggable="true"
        className="XiVwj5uoqqSFpS4cYOC6">
        <div className="xBV4XgMq0gC5lQICFWY_">
          <div
            className="g4PZpjkqEh5g7xDpCr2K"
            style={{ '--card-color': data.backup_color.thumbnail_color } as CSSProperties}>
            <div>
              <img
                aria-hidden="false"
                draggable="false"
                loading="lazy"
                src={data.thumbnail}
                alt={data.description}
                className="mMx2LUixlnN_Fu45JpFB SKJSok3LfyedjZjujmFt Yn2Ei5QZn19gria6LjZj"
              />
            </div>
          </div>

          <div className="woJQ5t2YiaJhjTv_KE7p">
            <div className="PFgcCoJSWC3KjhZxHDYH">
              <button
                aria-label={`Play ${data.title}`}
                className="Button-sc-qlcn5g-0 iPtRzt">
                <span className="ButtonInner-sc-14ud5tc-0 kWONUS encore-bright-accent-set">
                  <span
                    aria-hidden="true"
                    className="IconWrapper__Wrapper-sc-1hf1hjl-0 kTWyUj">
                    <svg
                      role="img"
                      height="24"
                      width="24"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="Svg-sc-ytk21e-0 uPxdw">
                      <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                    </svg>
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="E1N1ByPFWo4AJLHovIBQ">
          <Link
            to={`/playlist/${data.id}`}
            draggable="false"
            title={data.title}
            className="Nqa6Cw3RkDMV8QnYreTr"
            dir="auto">
            <div className="Type__TypeElement-sc-goli3j-0 izoFkw ellipsis-one-line">
              {data.title}
            </div>
          </Link>

          <div className="Type__TypeElement-sc-goli3j-0 dvSMET Za_uNH8nTZ0qCuIqbPLZ">
            {data.description}
          </div>
        </div>

        <div
          className="tsv7E_RBBw6v0XTQlcRo"
          onClick={() => redirectPlaylist(data.id)}
        />
      </div>
    </div>
  )
}

export default CardPlaylist

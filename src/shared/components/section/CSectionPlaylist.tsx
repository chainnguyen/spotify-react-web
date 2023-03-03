import '@/assets/scss/components/_section.scss'

import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import type { Card, Playlist } from '@/@types/playlist'
import { CCardPlaylist } from '@/shared/components'

interface IProps {
  data: Playlist
  defaultDisplay?: number
  hiddenTitle?: boolean
}

function CSectionPlaylist({ data, defaultDisplay, hiddenTitle }: IProps) {
  const { t } = useTranslation()

  const [limitCard, setLimitCard] = useState<Card[]>([])

  useEffect(() => {
    // Set default value if defaultDisplay prop isn't specified
    setLimitCard(data.card_data)
  }, [])

  useEffect(() => {
    if (!Object.keys(data).length || !defaultDisplay) return

    if (data.card_data.length) {
      setLimitCard(data.card_data.slice(0, defaultDisplay))
    }
    // Cleanup
    return () => {
      setLimitCard([])
    }
  }, [defaultDisplay])

  return (
    <section
      className="QyANtc_r7ff_tqrf5Bvc Shelf"
      aria-label={`${data.title} section`}>
      <div className="q8AZzDc_1BumBHZg0tZb">
        <div className="OMuRYOdpUbGif12_lRJl">
          <div className="onVWL7MW4PW9FyVajBAc">
            <h2
              tabIndex={hiddenTitle ? -1 : undefined}
              className="Type__TypeElement-sc-goli3j-0 fEBgUb">
              {!hiddenTitle ? (
                <Link
                  to={`/section/${data.id}`}
                  draggable="false"
                  className="MfVrtIzQJ7iZXfRWg6eM">
                  {data.title}
                </Link>
              ) : (
                ''
              )}
            </h2>
          </div>
          {!hiddenTitle ? (
            <Link
              to={`/section/${data.id}`}
              draggable="false"
              className="a7lvtXATo3HALtrsOHtO HOgue4Eg4UdBR58M0633">
              <span className="Type__TypeElement-sc-goli3j-0 jdSGNV">{t('show_all')}</span>
            </Link>
          ) : (
            ''
          )}
        </div>
      </div>

      <div
        className={`iKwGKEfAfW7Rkx2_Ba4E Z4InHgCs2uhk0MU93y_a ${
          !defaultDisplay ? 'BtbiwMynlB4flsYu_hA2' : ''
        }`}>
        {limitCard.length &&
          limitCard.map((card) => (
            <CCardPlaylist
              key={card.id}
              data={card}
            />
          ))}
      </div>
    </section>
  )
}

export default CSectionPlaylist

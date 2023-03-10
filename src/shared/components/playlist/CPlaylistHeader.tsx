import type { CSSProperties } from 'react'
import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import type { Card, TrackList } from '@/@types/views/playlist'
import { useTrackStatistics } from '@/shared/hooks'

interface IProps {
  data: Card
  childrenData: TrackList | null
}

function CPlaylistHeader({ data, childrenData }: IProps) {
  const { t } = useTranslation()

  const { totalTrackLike, totalTrackTime } = useTrackStatistics(childrenData)

  const renderTotalTrackTime = useCallback(
    () =>
      (totalTrackTime.hour > 0
        ? `${totalTrackTime.hour + ' ' + t('relative_time.symbol.hour')} `
        : '') +
      ' ' +
      (totalTrackTime.minute > 0
        ? `${totalTrackTime.minute + ' ' + t('relative_time.symbol.minute')} `
        : ''),
    [JSON.stringify(totalTrackTime)]
  )

  return (
    <div className="contentSpacing NXiYChVp4Oydfxd7rT5r RMDSGDMFrx8eXHpFphqG">
      <div
        className="gHImFiUWOg93pvTefeAD"
        style={{ backgroundColor: data.backup.background_color } as CSSProperties}
      />
      <div className="gHImFiUWOg93pvTefeAD xYgjMpAjE5XT05aRIezb" />
      <div></div>

      <div className="oq1ci28WPaRsWkvRiB_J">
        <div
          className="Ws8Ec3GREpT5PAUesr9b"
          draggable="true">
          <div
            className="CmkY1Ag0tJDfnFXbGgju"
            draggable="false">
            <img
              aria-hidden="false"
              draggable="false"
              loading="eager"
              src={data.backup.thumbnail}
              alt={data.title}
              className="mMx2LUixlnN_Fu45JpFB CmkY1Ag0tJDfnFXbGgju _EShSNaBK1wUIaZQFJJQ Yn2Ei5QZn19gria6LjZj"
              sizes="(min-width: 1280px) 232px, 192px"
            />
          </div>
        </div>
      </div>

      <div className="RP2rRchy4i8TIp1CTmb7">
        <h2 className="gSx70PISJg6PSRafbOXd D5X2O0j5dhTZJIkgH8mz uppercase !font-[700]">
          Playlist
        </h2>

        <span
          dir="auto"
          className="rEN7ncpaUeSGL9z0NGQR"
          draggable="true">
          <h1
            dir="auto"
            className="Type__TypeElement-sc-goli3j-0 fhrvNw">
            {data.title}
          </h1>
        </span>

        <h2 className="gSx70PISJg6PSRafbOXd PUIUCdIR_h05BC2EDgIP">
          <div className="xgmjVLxjqfcXK5BV_XyN">{data.description}</div>
        </h2>

        <div className="Fb61sprjhh75aOITDnsJ">
          <div className="RANLXG3qKB61Bh33I0r2 NO_VO3MRVl9z3z56d8Lg">
            <figure
              title="Spotify"
              className="tp8rO9vtqBGPLOhwcdYv"
              style={{ width: '24px', height: '24px' }}>
              <div style={{ width: '24px', height: '24px', insetInlineStart: 0 }}>
                <img
                  aria-hidden="false"
                  draggable="false"
                  loading="eager"
                  src="https://i.scdn.co/image/ab67757000003b8255c25988a6ac314394d3fbf5"
                  alt="Spotify"
                  className="mMx2LUixlnN_Fu45JpFB Xz3tlahv16UpqKBW5HdK Yn2Ei5QZn19gria6LjZj"
                />
              </div>
            </figure>

            <span className="Type__TypeElement-sc-goli3j-0 jdSGNV">
              <Link
                to="/user/spotify"
                draggable="false">
                Spotify
              </Link>
            </span>
          </div>

          <span className="Type__TypeElement-sc-goli3j-0 hGXzYa RANLXG3qKB61Bh33I0r2">
            {totalTrackLike + ' ' + t('quantity_liked')}
          </span>

          <span className="Type__TypeElement-sc-goli3j-0 hGXzYa RANLXG3qKB61Bh33I0r2">
            {childrenData &&
              childrenData.data.length +
                ' ' +
                t(childrenData.data.length <= 1 ? 'song.single' : 'song.multiple')}
            ,{' '}
            <span className="poz9gZKE7xqFwgk231J4">
              {t('about') + ' ' + renderTotalTrackTime()}
            </span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default CPlaylistHeader

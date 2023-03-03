import '@/assets/scss/components/_track-list.scss'

import type { CSSProperties } from 'react'
import { useTranslation } from 'react-i18next'

import type { ITrack, TrackList } from '@/@types/playlist'
import { PAGINATION } from '@/enums/pagination.enum'
import { CLoading, CTrackCard } from '@/shared/components'

interface IProps {
  data: TrackList
}

function CTrackList({ data }: IProps) {
  const { t } = useTranslation()

  return (
    <>
      {!data.data.length ? (
        <CLoading />
      ) : (
        <div
          role="grid"
          aria-rowcount={data.data.length}
          aria-colcount={5}
          aria-label={data.parent_name}
          tabIndex={0}
          className="ShMHCGsT93epRGdxJp2w Ss6hr6HYpN4wjHJ9GHmi">
          <div
            role="presentation"
            className="koyeY6AgGRPmyPITi7yO"
            style={{ top: '64px' } as CSSProperties}>
            <div
              className="dZPmmYYhskhqHJCAruvI wTUruPetkKdWAR1dd6w4"
              role="row"
              aria-rowindex={1}>
              <div
                className="NZAU7CsuZsMeMQB8zYUu"
                role="columnheader"
                aria-colindex={1}
                aria-sort="none"
                tabIndex={-1}>
                #
              </div>

              <div
                className="gvLrgQXBFVW6m9MscfFA"
                role="columnheader"
                aria-colindex={2}
                aria-sort="none"
                tabIndex={-1}>
                <div className="ASYv4mEu1lXEHVa04HqY">
                  <span className="Type__TypeElement-sc-goli3j-0 hGXzYa standalone-ellipsis-one-line">
                    {t('playlist.table_list.title')}
                  </span>
                </div>
              </div>

              <div
                className="bfQ2S9bMXr_kJjqEfcwA"
                role="columnheader"
                aria-colindex={3}
                aria-sort="none"
                tabIndex={-1}>
                <div className="ASYv4mEu1lXEHVa04HqY">
                  <span className="Type__TypeElement-sc-goli3j-0 hGXzYa standalone-ellipsis-one-line">
                    {t('playlist.table_list.album')}
                  </span>
                </div>
              </div>

              <div
                className="bfQ2S9bMXr_kJjqEfcwA"
                role="columnheader"
                aria-colindex={4}
                aria-sort="none"
                tabIndex={-1}>
                <div className="ASYv4mEu1lXEHVa04HqY">
                  <span className="Type__TypeElement-sc-goli3j-0 hGXzYa standalone-ellipsis-one-line">
                    {t('playlist.table_list.date_added')}
                  </span>
                </div>
              </div>

              <div
                className="HcMOFLaukKJdK5LfdHh0"
                role="columnheader"
                aria-colindex={5}
                aria-sort="none"
                tabIndex={-1}>
                <div
                  aria-label="Duration"
                  className="ASYv4mEu1lXEHVa04HqY AgiCqnZUliKs_dafpdyi">
                  <svg
                    role="img"
                    height="16"
                    width="16"
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    className="Svg-sc-ytk21e-0 uPxdw">
                    <path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"></path>
                    <path d="M8 3.25a.75.75 0 0 1 .75.75v3.25H11a.75.75 0 0 1 0 1.5H7.25V4A.75.75 0 0 1 8 3.25z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div
            role="presentation"
            className="JUa6JJNj7R_Y3i4P8YUX"
            style={
              { height: `${56 * data.data.length}px`, '--row-height': '56px' } as CSSProperties
            }>
            <div
              role="presentation"
              className="lyVkg68L7ycnwyOcO3vj"
              style={{ height: `${56 * PAGINATION.TRACK_LIST}px` } as CSSProperties}>
              <div
                className="wTUruPetkKdWAR1dd6w4"
                style={{ height: `calc(100% - ${56 * PAGINATION.TRACK_LIST}px)` } as CSSProperties}>
                <div className="Iy7vi9cVsy6pS6wF8Dud NZAU7CsuZsMeMQB8zYUu cF8vKdBGYRZs_SpaG0Yz" />
                <div className="Iy7vi9cVsy6pS6wF8Dud gvLrgQXBFVW6m9MscfFA BciIfT5b6BSIPIr6feK4" />
                <div className="Iy7vi9cVsy6pS6wF8Dud bfQ2S9bMXr_kJjqEfcwA noANc1fQSmaQNKYVDEDQ" />
                <div className="Iy7vi9cVsy6pS6wF8Dud bfQ2S9bMXr_kJjqEfcwA noANc1fQSmaQNKYVDEDQ" />
                <div className="Iy7vi9cVsy6pS6wF8Dud bfQ2S9bMXr_kJjqEfcwA noANc1fQSmaQNKYVDEDQ" />
                <div className="Iy7vi9cVsy6pS6wF8Dud bfQ2S9bMXr_kJjqEfcwA noANc1fQSmaQNKYVDEDQ" />
                <div className="Iy7vi9cVsy6pS6wF8Dud HcMOFLaukKJdK5LfdHh0 Dj9_CzXA7IbUFIz4wOsA" />
              </div>

              <div
                role="presentation"
                style={{ height: `${56 * PAGINATION.TRACK_LIST}px` } as CSSProperties}
              />
            </div>

            <div
              role="presentation"
              style={{ transform: 'translateY(0px)' } as CSSProperties}>
              {data.data.map((track: ITrack, index: number) => (
                <CTrackCard
                  key={track.id}
                  data={track}
                  order={index + 1}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default CTrackList

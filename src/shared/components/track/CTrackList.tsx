import '@/assets/scss/components/_track-list.scss'

import { CSSProperties } from 'react'

import { CLoading, CTrackCard } from '@/shared/components'
import type { TrackList } from '@/types/playlist'

interface IProps {
  data: TrackList
}

function CTrackList({ data }: IProps) {
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
            className="koyeY6AgGRPmyPITi7yO"
            role="presentation"
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
                  <span
                    className="Type__TypeElement-sc-goli3j-0 hGXzYa standalone-ellipsis-one-line"
                    data-encore-id="type">
                    Title
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
                  <span
                    className="Type__TypeElement-sc-goli3j-0 hGXzYa standalone-ellipsis-one-line"
                    data-encore-id="type">
                    Album
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
                  <span
                    className="Type__TypeElement-sc-goli3j-0 hGXzYa standalone-ellipsis-one-line"
                    data-encore-id="type">
                    Date added
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
                    data-encore-id="icon"
                    className="Svg-sc-ytk21e-0 uPxdw">
                    <path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"></path>
                    <path d="M8 3.25a.75.75 0 0 1 .75.75v3.25H11a.75.75 0 0 1 0 1.5H7.25V4A.75.75 0 0 1 8 3.25z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {data.data.map((track) => (
            <CTrackCard
              key={track.id}
              data={track}
            />
          ))}
        </div>
      )}
    </>
  )
}

export default CTrackList

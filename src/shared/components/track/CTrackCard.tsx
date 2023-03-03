import { Link } from 'react-router-dom'

import type { ITrack } from '@/@types/playlist'
import { CButtonMore, CButtonSaveToLibrary } from '@/shared/components'
import { useTrackController } from '@/shared/hooks'
import { getRelativeTimeString } from '@/shared/utils/helper'

interface IProps {
  data: ITrack
  order: number
}

function CTrackCard({ data, order }: IProps) {
  const { enforceTrack } = useTrackController()

  return (
    <div
      role="row"
      aria-rowindex={order + 1}
      aria-selected="false">
      <div
        className="h4HgbO_Uu1JYg5UGANeQ wTUruPetkKdWAR1dd6w4"
        draggable="true"
        role="presentation">
        <div
          className="NZAU7CsuZsMeMQB8zYUu"
          role="gridcell"
          aria-colindex={1}
          tabIndex={-1}>
          <div className="VpYFchIiPg3tPhBGyynT">
            <span className="Type__TypeElement-sc-goli3j-0 eRYMpa VrRwdIZO0sRX1lsWxJBe">
              {order}
            </span>

            <button
              className="RfidWIoz8FON2WhFoItU"
              aria-label={`Play ${data.title} by ${data.artist.name}`}
              tabIndex={0}
              aria-expanded="false"
              onClick={() => enforceTrack(data)}>
              <svg
                role="img"
                height="24"
                width="24"
                aria-hidden="true"
                className="Svg-sc-ytk21e-0 uPxdw UIBT7E6ZYMcSDl1KL62g"
                viewBox="0 0 24 24">
                <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
              </svg>
            </button>
          </div>
        </div>

        <div
          className="gvLrgQXBFVW6m9MscfFA"
          role="gridcell"
          aria-colindex={2}
          tabIndex={-1}>
          <img
            aria-hidden="false"
            draggable="false"
            loading="eager"
            src={data.backup.thumbnail}
            alt=""
            className="mMx2LUixlnN_Fu45JpFB rkw8BWQi3miXqtlJhKg0 Yn2Ei5QZn19gria6LjZj"
            width="40"
            height="40"
          />

          <div className="iCQtmPqY0QvkumAOuCjr">
            <Link
              to={`/track/${data.id}`}
              tabIndex={-1}
              draggable="false"
              className="t_yrXoUO3qGsJS4Y6iXX">
              <div
                dir="auto"
                className="Type__TypeElement-sc-goli3j-0 kHHFyx t_yrXoUO3qGsJS4Y6iXX standalone-ellipsis-one-line"
                aria-expanded="false">
                {data.title}
              </div>
            </Link>

            <span className="Type__TypeElement-sc-goli3j-0 dvSMET rq2VQ5mb9SDAFWbBIUIn standalone-ellipsis-one-line">
              <Link
                to={`/artist/${data.artist.id}`}
                draggable="true"
                dir="auto"
                tabIndex={-1}>
                {data.artist.name}
              </Link>
            </span>
          </div>
        </div>

        <div
          className="bfQ2S9bMXr_kJjqEfcwA"
          role="gridcell"
          aria-colindex={3}
          tabIndex={-1}>
          <span className="Type__TypeElement-sc-goli3j-0 hGXzYa">
            <Link
              to={`/album/${data.album.id}`}
              draggable="true"
              className="standalone-ellipsis-one-line"
              dir="auto"
              tabIndex={-1}>
              {data.album.name}
            </Link>
          </span>
        </div>

        <div
          className="bfQ2S9bMXr_kJjqEfcwA"
          role="gridcell"
          aria-colindex={4}
          tabIndex={-1}>
          <span className="Type__TypeElement-sc-goli3j-0 dvSMET">
            {getRelativeTimeString(new Date(data.release_date))}
          </span>
        </div>

        <div
          className="HcMOFLaukKJdK5LfdHh0"
          role="gridcell"
          aria-colindex={5}
          tabIndex={-1}>
          <CButtonSaveToLibrary
            width={16}
            height={16}
            classButton={'tGKwoPuvNBNK3TzCS5OH'}
          />

          <div className="Type__TypeElement-sc-goli3j-0 dvSMET Btg2qHSuepFGBG6X0yEN">
            {data.track_duration}
          </div>

          <CButtonMore
            width={16}
            height={16}
            tabIndex={-1}
            classButton={'mYN_ST1TsDdC6q1k1_xs'}
            ariaLabel={`More options for ${data.title} by ${data.artist.name}`}
          />
        </div>
      </div>
    </div>
  )
}

export default CTrackCard

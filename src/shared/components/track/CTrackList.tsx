import { CTrackCard } from '@/shared/components'
import type { TrackList } from '@/types/playlist'

interface IProps {
  data: TrackList
}

function CTrackList({ data }: IProps) {
  return (
    <>
      {!data.data.length ? (
        ''
      ) : (
        <div
          role="grid"
          aria-rowcount={data.data.length}
          aria-colcount={5}
          aria-label="Deep Focus"
          tabIndex={0}
          className="ShMHCGsT93epRGdxJp2w Ss6hr6HYpN4wjHJ9GHmi">
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

import { TrackCard } from '@/share/components'
import type { TrackDetail } from '@/types/playlist'

interface IProps {
  data: TrackDetail
}

function TrackList({ data }: IProps) {
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
            <TrackCard
              key={track.id}
              data={track}
            />
          ))}
        </div>
      )}
    </>
  )
}

export default TrackList

import type { ITrack } from '@/types/playlist'

interface IProps {
  data: ITrack
}

function CTrackCard({ data }: IProps) {
  return <h2>{data.name}</h2>
}

export default CTrackCard

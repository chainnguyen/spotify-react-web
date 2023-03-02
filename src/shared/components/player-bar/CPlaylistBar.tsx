import '@/assets/scss/components/_playlist-bar.scss'

import { CButtonMore, CButtonPlay, CButtonSaveToLibrary } from '@/shared/components'
import { useTrackController } from '@/shared/hooks'
import type { Card } from '@/types/playlist'

interface IProps {
  data: Card
}

function CPlaylistBar({ data }: IProps) {
  const { enforcePlayList } = useTrackController()

  return (
    <div className="E4q8ogfdWtye7YgotBlN contentSpacing">
      <div className="eSg4ntPU2KQLfpLGXAww">
        <div className="PFgcCoJSWC3KjhZxHDYH">
          <CButtonPlay
            width={28}
            height={28}
            onClick={() => enforcePlayList(data)}
          />
        </div>

        <CButtonSaveToLibrary
          width={32}
          height={32}
        />

        <CButtonMore
          width={32}
          height={32}
          ariaLabel={`More options for ${data.title}`}
        />
      </div>
    </div>
  )
}

export default CPlaylistBar

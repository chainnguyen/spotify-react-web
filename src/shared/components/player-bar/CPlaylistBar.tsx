import '@/assets/scss/components/_playlist-bar.scss'

import { CButtonMore, CButtonPlay, CButtonSaveToLibrary } from '@/shared/components'

function CPlaylistBar() {
  return (
    <div className="E4q8ogfdWtye7YgotBlN contentSpacing">
      <div className="eSg4ntPU2KQLfpLGXAww">
        <div className="PFgcCoJSWC3KjhZxHDYH">
          <CButtonPlay
            width={28}
            height={28}
          />
        </div>

        <CButtonSaveToLibrary
          width={32}
          height={32}
        />

        <CButtonMore
          width={32}
          height={32}
          ariaLabel={`More options for`}
        />
      </div>
    </div>
  )
}

export default CPlaylistBar

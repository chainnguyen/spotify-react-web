import '@/assets/scss/components/_playlist-bar.scss'

import { CButtonMore, CButtonPlay, CButtonSaveToLibrary } from '@/shared/components'

function CPlaylistBar() {
  return (
    <div className="E4q8ogfdWtye7YgotBlN contentSpacing">
      <div className="eSg4ntPU2KQLfpLGXAww">
        <div className="PFgcCoJSWC3KjhZxHDYH">
          <CButtonPlay />
        </div>

        <CButtonSaveToLibrary />

        <CButtonMore />
      </div>
    </div>
  )
}

export default CPlaylistBar

import '@/assets/scss/pages/_home.scss'

import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { PLAYLIST_DATA } from '@/enums/dummy-data.enum'
import { SectionFooter, SectionPlaylist } from '@/share/components'
import type { Playlist } from '@/types/global'

function Section() {
  const { id: sectionId } = useParams()
  const [sectionData, setSectionData] = useState<Playlist | null>(null)

  useEffect(() => {
    getPlaylistById(sectionId)
    // Cleanup
    return () => {
      setSectionData(null)
    }
  }, [sectionId])

  const getPlaylistById = (id: string | undefined) => {
    const playlist: Playlist | undefined = PLAYLIST_DATA.find((list: Playlist) => list.id === id)
    if (playlist && Object.keys(playlist).length) {
      setSectionData(playlist)
    }
  }

  return (
    <>
      <section aria-label="Section Page">
        <div className="uIJTvxFOg2izOY7aRRiU">
          <div className="I3EivnXTjYMpSbPUiYEg contentSpacing">
            {sectionData ? (
              <SectionPlaylist
                data={sectionData}
                hiddenTitle={true}
              />
            ) : (
              ''
            )}
          </div>
        </div>
      </section>

      <SectionFooter />
    </>
  )
}

export default Section

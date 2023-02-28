import '@/assets/scss/pages/home.scss'

import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { PlaylistService } from '@/services/playlist.service'
import { CLoading, CSectionFooter, CSectionPlaylist } from '@/shared/components'
import type { Playlist } from '@/types/playlist'

function Section() {
  const { sectionId } = useParams()
  const [sectionData, setSectionData] = useState<Playlist | null>(null)

  useEffect(() => {
    fetchSectionById(sectionId).then((r) => r)
    // Cleanup
    return () => {
      setSectionData(null)
    }
  }, [sectionId])

  const fetchSectionById = async (id: string | undefined) => {
    try {
      const data = await PlaylistService.getSectionDetail(id)
      setSectionData(data)
    } catch (err) {
      return err
    }
  }

  return (
    <>
      {!sectionData ? (
        <CLoading />
      ) : (
        <main
          tabIndex={-1}
          aria-label={`Spotify – ${sectionData ? sectionData.title : 'Web Player'}`}>
          <section aria-label="Section Page">
            <div className="uIJTvxFOg2izOY7aRRiU">
              <div className="I3EivnXTjYMpSbPUiYEg contentSpacing">
                <CSectionPlaylist
                  data={sectionData}
                  hiddenTitle={true}
                />
              </div>
            </div>
          </section>

          <CSectionFooter />
        </main>
      )}
    </>
  )
}

export default Section

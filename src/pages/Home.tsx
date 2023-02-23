import '@/assets/scss/pages/_home.scss'

import { useEffect, useState } from 'react'

import { PLAYLIST_DATA } from '@/enums/dummy-data.enum'
import { SectionFooter, SectionPlaylist } from '@/share/components'
import type { Playlist } from '@/types/global'

function HomePage() {
  const [focusData, setFocusData] = useState<Playlist | null>(null)
  const [suggestData, setSuggestData] = useState<Playlist | null>(null)

  useEffect(() => {
    setFocusData(PLAYLIST_DATA[0])
    setSuggestData(PLAYLIST_DATA[1])
    // Cleanup
    return () => {
      setFocusData(null)
      setSuggestData(null)
    }
  }, [])

  return (
    <>
      <section aria-label="Home Page">
        <div className="uIJTvxFOg2izOY7aRRiU">
          <div className="I3EivnXTjYMpSbPUiYEg contentSpacing">
            {focusData ? (
              <SectionPlaylist
                data={focusData}
                defaultDisplay={5}
              />
            ) : (
              ''
            )}
            {suggestData ? (
              <SectionPlaylist
                data={suggestData}
                defaultDisplay={5}
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

export default HomePage

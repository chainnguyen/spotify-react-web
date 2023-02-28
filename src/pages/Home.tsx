import '@/assets/scss/pages/home.scss'

import { useEffect, useState } from 'react'

import { PlaylistService } from '@/services/playlist.service'
import { CSectionFooter, CSectionPlaylist } from '@/shared/components'
import type { Playlist } from '@/types/playlist'

function HomePage() {
  const [focusData, setFocusData] = useState<Playlist | null>(null)
  const [suggestData, setSuggestData] = useState<Playlist | null>(null)

  useEffect(() => {
    fetchPlaylist().then((r) => r)
    // Cleanup
    return () => {
      setFocusData(null)
      setSuggestData(null)
    }
  }, [])

  const fetchPlaylist = async () => {
    try {
      const data = await PlaylistService.getList()
      setFocusData(data[0])
      setSuggestData(data[1])
    } catch (err) {
      return err
    }
  }

  return (
    <main
      tabIndex={-1}
      aria-label="Spotify – Web Player">
      <div className="HsbczDqu9qjcYr7EIdHR" />

      <section aria-label="Home Page">
        <div className="uIJTvxFOg2izOY7aRRiU">
          <div className="I3EivnXTjYMpSbPUiYEg contentSpacing">
            {focusData ? (
              <CSectionPlaylist
                data={focusData}
                defaultDisplay={5}
              />
            ) : (
              ''
            )}
            {suggestData ? (
              <CSectionPlaylist
                data={suggestData}
                defaultDisplay={5}
              />
            ) : (
              ''
            )}
          </div>
        </div>
      </section>

      <CSectionFooter />
    </main>
  )
}

export default HomePage

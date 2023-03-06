import '@/assets/scss/pages/home.scss'

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import type { Playlist } from '@/@types/playlist'
import { PlaylistService } from '@/services/playlist.service'
import { CLoading, CSectionFooter, CSectionPlaylist } from '@/shared/components'
import type { AppDispatch } from '@/shared/store'
import { PLAYLIST_GETTER, SET_PLAYLIST_LIST } from '@/shared/store/modules/pages/playlist'

function HomePage() {
  const dispatch = useDispatch<AppDispatch>()

  const [focusData, setFocusData] = useState<Playlist | null>(null)
  const [suggestData, setSuggestData] = useState<Playlist | null>(null)

  const $listOfPlaylist = useSelector(PLAYLIST_GETTER.list)

  useEffect(() => {
    fetchPlaylist().then((r) => r)
    // Cleanup
    return () => {
      setFocusData(null)
      setSuggestData(null)
      dispatch(SET_PLAYLIST_LIST(null))
    }
  }, [])

  useEffect(() => {
    if (!$listOfPlaylist) return
    setFocusData($listOfPlaylist[0])
    setSuggestData($listOfPlaylist[1])
  }, [$listOfPlaylist])

  const fetchPlaylist = async () => {
    try {
      await PlaylistService.getList().then((res) => {
        dispatch(SET_PLAYLIST_LIST(res))
      })
    } catch (err) {
      // handle err
    }
  }

  return (
    <>
      {!focusData && !suggestData ? (
        <CLoading />
      ) : (
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
      )}
    </>
  )
}

export default HomePage

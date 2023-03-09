import '@/assets/scss/pages/home.scss'

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import type { Playlist } from '@/@types/views/playlist'
import { PlaylistService } from '@/services/playlist.service'
import { CLoading, CSectionFooter, CSectionPlaylist } from '@/shared/components'
import type { AppDispatch } from '@/shared/store'
import { PLAYLIST_GETTER, SET_PLAYLIST_LIST } from '@/shared/store/modules/pages/playlist'

function HomePage() {
  const dispatch = useDispatch<AppDispatch>()

  const $listOfPlaylist = useSelector(PLAYLIST_GETTER.list)

  const [sectionPlayListData, setSectionPlayListData] = useState<Playlist[] | null>(null)

  useEffect(() => {
    fetchPlaylist().then((r) => r)
    // Cleanup
    return () => {
      setSectionPlayListData(null)
      dispatch(SET_PLAYLIST_LIST(null))
    }
  }, [])

  useEffect(() => {
    $listOfPlaylist && setSectionPlayListData($listOfPlaylist)
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
      {!sectionPlayListData ? (
        <CLoading />
      ) : (
        <main
          tabIndex={-1}
          aria-label="Spotify – Web Player">
          <div className="HsbczDqu9qjcYr7EIdHR" />

          <section aria-label="Home Page">
            <div className="uIJTvxFOg2izOY7aRRiU">
              <div className="I3EivnXTjYMpSbPUiYEg contentSpacing">
                {sectionPlayListData.map((item) => (
                  <CSectionPlaylist
                    key={item.id}
                    data={item}
                    defaultDisplay={5}
                  />
                ))}
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

import '@/assets/scss/pages/home.scss'

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import type { Playlist } from '@/@types/playlist'
import { PlaylistService } from '@/services/playlist.service'
import { CLoading, CSectionFooter, CSectionPlaylist } from '@/shared/components'
import type { AppDispatch, RootState } from '@/shared/store'
import { SET_PLAYLIST_DETAIL } from '@/shared/store/modules/pages/playlist'

function Section() {
  const { sectionId } = useParams()
  const dispatch = useDispatch<AppDispatch>()

  const [sectionData, setSectionData] = useState<Playlist | null>(null)

  const $detailSection = useSelector((state: RootState) => state['playlist'].detail)

  useEffect(() => {
    fetchSectionById(sectionId).then((r) => r)
    // Cleanup
    return () => {
      setSectionData(null)
      dispatch(SET_PLAYLIST_DETAIL(null))
    }
  }, [sectionId])

  useEffect(() => {
    $detailSection && setSectionData($detailSection)
  }, [$detailSection])

  const fetchSectionById = async (id: string | undefined) => {
    try {
      await PlaylistService.getSectionDetail(id).then((res) => {
        dispatch(SET_PLAYLIST_DETAIL(res))
      })
    } catch (err) {
      // handle err
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
                  hiddenTitle
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

import '@/assets/scss/pages/home.scss'

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import type { Playlist } from '@/@types/views/playlist'
import { PlaylistService } from '@/services/playlist.service'
import { CLoading, CSectionFooter, CSectionPlaylist } from '@/shared/components'
import type { AppDispatch } from '@/shared/store'
import { PLAYLIST_GETTER, SET_SECTION_DETAIL } from '@/shared/store/modules/pages/playlist'

function Section() {
  const { sectionId } = useParams()
  const dispatch = useDispatch<AppDispatch>()

  const $detailSection = useSelector(PLAYLIST_GETTER.section_detail)

  const [sectionData, setSectionData] = useState<Playlist | null>(null)

  const MemoizedCSectionPlaylist = React.memo(CSectionPlaylist)

  useEffect(() => {
    fetchSectionById(sectionId).then((r) => r)
    // Cleanup
    return () => {
      setSectionData(null)
      dispatch(SET_SECTION_DETAIL(null))
    }
  }, [sectionId])

  useEffect(() => {
    $detailSection && setSectionData($detailSection)
  }, [JSON.stringify($detailSection)])

  const fetchSectionById = async (id: string | undefined) => {
    try {
      await PlaylistService.getSectionDetail(id).then((res) => {
        dispatch(SET_SECTION_DETAIL(res))
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
                <MemoizedCSectionPlaylist
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

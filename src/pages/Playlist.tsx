import '@/assets/scss/pages/playlist.scss'

import type { CSSProperties } from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import type { Card, TrackList } from '@/@types/playlist'
import { PlaylistService } from '@/services/playlist.service'
import { TrackService } from '@/services/track.service'
import {
  CLoading,
  CPlaylistBar,
  CPlaylistHeader,
  CSectionFooter,
  CTrackList,
} from '@/shared/components'

function Playlist() {
  const { playlistId } = useParams()
  const [playlistData, setPlaylistData] = useState<Card | null>(null)
  const [trackListData, setTrackListData] = useState<TrackList | null>(null)

  useEffect(() => {
    fetchPlaylistDetail(playlistId).then((r) => r)
    // Cleanup
    return () => {
      setPlaylistData(null)
      setTrackListData(null)
    }
  }, [playlistId])

  useEffect(() => {
    // Set page title reply on name playlist
    if (playlistData && Object.keys(playlistData).length) {
      document.title = `Spotify - ${playlistData.title}`
    }
    // Cleanup
    return () => {
      document.title = import.meta.env.VITE_DEFAULT_TITLE
    }
  }, [playlistData])

  const fetchPlaylistDetail = async (id: string | undefined) => {
    try {
      const res = await Promise.all([PlaylistService.getPlaylistDetail(id), TrackService.getList()])
      setPlaylistData(res[0] ? res[0] : null)
      setTrackListData(res[1])
    } catch (err) {
      return err
    }
  }

  return (
    <>
      {!playlistData ? (
        <CLoading />
      ) : (
        <main
          tabIndex={-1}
          aria-label={`Spotify – ${playlistData ? playlistData.title : 'Web Player'}`}>
          <div className="GlueDropTarget GlueDropTarget--tracks GlueDropTarget--local-tracks GlueDropTarget--episodes GlueDropTarget--albums">
            <section
              role="presentation"
              className="dZ3U5sTGUTdanNamXe1z">
              <CPlaylistHeader
                data={playlistData}
                childrenData={trackListData}
              />

              <div className="rezqw3Q4OEPB1m4rmwfw">
                <div
                  className="CoLO4pdSl8LGWyVZA00t"
                  style={
                    {
                      backgroundColor: playlistData.backup.background_color,
                    } as CSSProperties
                  }
                />

                <CPlaylistBar data={playlistData} />

                <div className="contentSpacing">
                  {trackListData && <CTrackList data={trackListData} />}
                </div>
              </div>
            </section>
          </div>

          <CSectionFooter />
        </main>
      )}
    </>
  )
}

export default Playlist

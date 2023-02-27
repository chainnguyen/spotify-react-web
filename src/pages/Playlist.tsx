import '@/assets/scss/pages/playlist.scss'

import type { CSSProperties } from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { PLAYLIST } from '@/enums/dummy-data.enum'
import { PlaylistHeader, TrackList } from '@/share/components'
import type { Card } from '@/types/playlist'

function Playlist() {
  const { playlistId } = useParams()
  const [playlistData, setPlaylistData] = useState<Card | null>(null)

  useEffect(() => {
    getPlaylistById(playlistId)
    // Cleanup
    return () => {
      setPlaylistData(null)
    }
  }, [playlistId])

  const getPlaylistById = (id: string | undefined) => {
    for (let i = 0; i < PLAYLIST.length; i++) {
      const playlist: Card | undefined = PLAYLIST[i].card_data.find((i: Card) => i.id === id)
      if (playlist && Object.keys(playlist).length) {
        setPlaylistData(playlist)
        break
      }
    }
  }
  return (
    <>
      <div className="GlueDropTarget GlueDropTarget--tracks GlueDropTarget--local-tracks GlueDropTarget--episodes GlueDropTarget--albums">
        <section
          role="presentation"
          className="dZ3U5sTGUTdanNamXe1z">
          {playlistData ? <PlaylistHeader data={playlistData} /> : ''}

          <div className="rezqw3Q4OEPB1m4rmwfw">
            <div
              className="CoLO4pdSl8LGWyVZA00t"
              style={{ 'background-color': 'rgb(64, 64, 56)' } as CSSProperties}
            />

            <div className="contentSpacing">
              <TrackList />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Playlist

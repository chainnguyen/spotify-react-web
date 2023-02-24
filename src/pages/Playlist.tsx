import { useParams } from 'react-router-dom'

function Playlist() {
  const { playlistId } = useParams()

  return (
    <section>
      <h1>Playlist page</h1>
      <h2>{playlistId}</h2>
    </section>
  )
}

export default Playlist

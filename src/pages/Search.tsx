import { CardGenre } from '@/share/components'

function SearchPage() {
  return (
    <main
      tabIndex={-1}
      aria-label="Spotify – Web Player">
      <section aria-label="Search Page">
        <h1>Search Page</h1>
        <CardGenre />
      </section>
    </main>
  )
}

export default SearchPage

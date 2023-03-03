import '@/assets/scss/components/_section.scss'
import '@/assets/scss/pages/search.scss'

import { useEffect, useState } from 'react'

import type { GenreItem } from '@/@types/genre'
import { GenreService } from '@/services/genre.service'
import { CCardGenre, CLoading, CSectionFooter } from '@/shared/components'

function SearchPage() {
  const [genreData, setGenreData] = useState<GenreItem[] | null>(null)

  useEffect(() => {
    fetchList().then((r) => r)
    // Cleanup
    return () => {
      setGenreData(null)
    }
  }, [])

  const fetchList = async () => {
    try {
      const data = await GenreService.getList()
      setGenreData(data)
    } catch (err) {
      return err
    }
  }

  return (
    <>
      {!genreData?.length ? (
        <CLoading />
      ) : (
        <main
          tabIndex={-1}
          aria-label="Spotify – Web Player">
          <div className="contentSpacing">
            <div className="iKwGKEfAfW7Rkx2_Ba4E khkfPsJuVBQyL_5cLT7y">
              <div className="CCi1L2OQvgdZvxkRHeKE">
                <div className="rvvoAdb7aaUPYRasW7sK">
                  <div className="UdXTcsz1eiiInKThkfYp">
                    <section
                      className="QyANtc_r7ff_tqrf5Bvc Shelf"
                      aria-label="Browse all">
                      <div className="q8AZzDc_1BumBHZg0tZb">
                        <div className="OMuRYOdpUbGif12_lRJl">
                          <div className="onVWL7MW4PW9FyVajBAc">
                            <h2
                              className="Type__TypeElement-sc-goli3j-0 fEBgUb MfVrtIzQJ7iZXfRWg6eM"
                              tabIndex={-1}>
                              Browse all
                            </h2>
                          </div>
                        </div>
                      </div>

                      <div className="iKwGKEfAfW7Rkx2_Ba4E Z4InHgCs2uhk0MU93y_a BtbiwMynlB4flsYu_hA2">
                        {genreData.map((genre: GenreItem) => (
                          <CCardGenre
                            key={genre.id}
                            data={genre}
                          />
                        ))}
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <CSectionFooter />
        </main>
      )}
    </>
  )
}

export default SearchPage

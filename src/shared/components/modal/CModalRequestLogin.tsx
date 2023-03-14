import '@/assets/scss/components/modal/modal-request-login.scss'

import type { CSSProperties } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import type { Card, ITrack } from '@/@types/views/playlist'
import { CModalCurtain } from '@/shared/components'
import type { AppDispatch } from '@/shared/store'
import { SET_DATA_MODAL_REQUEST_LOGIN, SET_MODAL_REQUEST_LOGIN } from '@/shared/store/modules/auth'

interface IProps {
  isOpen: boolean
  data: Card | ITrack | null
}

function CModalRequestLogin({ isOpen, data }: IProps) {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const dispatch = useDispatch<AppDispatch>()

  const redirectAuthentication = (page: 'signup' | 'login') => {
    navigate(`/auth/${page}`)
    closeModal()
  }

  const closeModal = () => {
    dispatch(SET_MODAL_REQUEST_LOGIN(false))
    dispatch(SET_DATA_MODAL_REQUEST_LOGIN(null))
  }

  return (
    <>
      {!isOpen ? (
        ''
      ) : (
        <CModalCurtain onClose={closeModal}>
          <div
            className="anllJYN1jeYGGE1iAJUJ"
            style={
              {
                backgroundColor: data ? data.backup.background_color : '#282828',
              } as CSSProperties
            }>
            <div className="SVnAziPF2z_cgAGrp6He UmY163JiUcgJt2MKNyGW">
              {!data ? (
                ''
              ) : (
                <div className="VdyeU78LKQdX8Dclnfxr">
                  <img
                    aria-hidden="false"
                    draggable="false"
                    loading="lazy"
                    src={data.backup.thumbnail_large}
                    alt={data.title}
                    className="mMx2LUixlnN_Fu45JpFB Yn2Ei5QZn19gria6LjZj"
                  />
                </div>
              )}

              <div className="miG_SXrw265mkozdEHrJ">
                <h2 className="RWLySPhsOTyK2EsAGUgx">{t('start_listen_with_a_free_account')}</h2>
                <button className="Button-sc-qlcn5g-0 iPtRzt">
                  <span
                    className="ButtonInner-sc-14ud5tc-0 cJdEzG encore-bright-accent-set"
                    onClick={() => redirectAuthentication('signup')}>
                    {t('signup_free')}
                  </span>
                </button>

                <div className="SYKOtPBDhPSs6zGwbk6A">
                  <a
                    draggable="false"
                    href="https://www.spotify.com/vn-vi/download/mac/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="Button-sc-y0gtbx-0 hNxTPt">
                    {t('download_app')}
                  </a>
                </div>

                <p
                  className="CMgJZD0JMx_Yz1tlE7hd"
                  role="presentation">
                  <span className="Type__TypeElement-sc-goli3j-0 hGXzYa">
                    {t('already_have_an_account')}
                  </span>

                  <button
                    className="Type__TypeElement-sc-goli3j-0 gkqrGP ml-1"
                    onClick={() => redirectAuthentication('login')}>
                    {t('login')}
                  </button>
                </p>
              </div>
            </div>

            <div className="YQRQdqiQ_iT0eo0owsJL">
              <button
                className="Button-sc-1dqy6lx-0 dZYxEP"
                onClick={closeModal}>
                {t('close')}
              </button>
            </div>
          </div>
        </CModalCurtain>
      )}
    </>
  )
}

export default CModalRequestLogin

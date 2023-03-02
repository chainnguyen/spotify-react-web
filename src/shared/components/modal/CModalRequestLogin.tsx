import '@/assets/scss/components/modal/modal-request-login.scss'

import type { CSSProperties } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import { CModalCurtain } from '@/shared/components'
import type { AppDispatch } from '@/shared/store'
import { SET_MODAL_REQUEST_LOGIN } from '@/shared/store/modules/auth'
import type { Card } from '@/types/playlist'

interface IProps {
  isOpen: boolean
  data: Card | null
}

function CModalRequestLogin({ isOpen, data }: IProps) {
  const navigate = useNavigate()
  const dispatch: AppDispatch = useDispatch()

  const redirectSignup = () => {
    navigate('/auth/signup')
    closeModal()
  }

  const closeModal = () => {
    dispatch(SET_MODAL_REQUEST_LOGIN(false))
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
                backgroundColor: data ? data.backup_color.background_color : '#282828',
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
                    src={data.thumbnail}
                    alt={data.title}
                    className="mMx2LUixlnN_Fu45JpFB Yn2Ei5QZn19gria6LjZj"
                  />
                </div>
              )}

              <div className="miG_SXrw265mkozdEHrJ">
                <h2 className="RWLySPhsOTyK2EsAGUgx">
                  Start listening with a free Spotify account
                </h2>
                <button className="Button-sc-qlcn5g-0 iPtRzt">
                  <span
                    className="ButtonInner-sc-14ud5tc-0 cJdEzG encore-bright-accent-set"
                    onClick={redirectSignup}>
                    Sign up free
                  </span>
                </button>

                <div className="SYKOtPBDhPSs6zGwbk6A">
                  <button className="Button-sc-y0gtbx-0 hNxTPt">Download app</button>
                </div>

                <p
                  className="CMgJZD0JMx_Yz1tlE7hd"
                  role="presentation">
                  <span className="Type__TypeElement-sc-goli3j-0 hGXzYa">
                    Already have an account?
                  </span>
                  <Link
                    to="/auth/login"
                    className="Type__TypeElement-sc-goli3j-0 gkqrGP">
                    Log in
                  </Link>
                </p>
              </div>
            </div>

            <div className="YQRQdqiQ_iT0eo0owsJL">
              <button
                className="Button-sc-1dqy6lx-0 dZYxEP"
                onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        </CModalCurtain>
      )}
    </>
  )
}

export default CModalRequestLogin

import '@/assets/scss/layouts/playing-bar.scss'
import '@/assets/scss/components/_button.scss'
import '@/assets/scss/components/_progress-player.scss'

import type { CSSProperties } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { AUTH_GETTER } from '@/shared/store/modules/auth'

function CPlayingBar() {
  const navigate = useNavigate()
  const { t } = useTranslation()

  const $token = useSelector(AUTH_GETTER.token)

  const redirectSignup = () => {
    navigate('/auth/signup')
  }

  return (
    <>
      {$token ? (
        ''
      ) : (
        <div
          className="Root__now-playing-bar"
          onClick={redirectSignup}>
          <footer className="GD2gbRtcs5dOjMGAM_Y4">
            <div className="dz_h98rH9nZCwfPdnKgr">
              <div className="rAfV2jB_HMM9Xtr0Rqvn">
                <p className="Type__TypeElement-sc-goli3j-0 dIXVLA">{t('preview_of_spotify')}</p>
                <p className="Type__TypeElement-sc-goli3j-0 eRYMpa">
                  {t('des_preview_of_spotify')}
                </p>
              </div>

              <button className="Button-sc-qlcn5g-0 jsmWVV">
                <span className="ButtonInner-sc-14ud5tc-0 kuwYvr encore-inverted-light-set XkXPpDRWozMF6G8_GlLQ">
                  {t('signup_free')}
                </span>
              </button>
            </div>
          </footer>
        </div>
      )}
    </>
  )
}

export default CPlayingBar

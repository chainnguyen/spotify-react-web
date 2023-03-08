import '@/assets/scss/layouts/header.scss'
import '@/assets/scss/components/_button.scss'

import type { CSSProperties, ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { AuthService } from '@/services/auth.service'
import type { AppDispatch } from '@/shared/store'
import { AUTH_GETTER, SET_LOGOUT } from '@/shared/store/modules/auth'
import { PLAYLIST_GETTER } from '@/shared/store/modules/pages/playlist'

function CHeader() {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const dispatch = useDispatch<AppDispatch>()
  const { state: currentRoute, length: historyLength } = window.history

  const $token = useSelector(AUTH_GETTER.token)
  const $profile = useSelector(AUTH_GETTER.profile)
  const $detailSection = useSelector(PLAYLIST_GETTER.detail)

  const redirectAuthentication = (page: 'signup' | 'login') => {
    navigate(`/auth/${page}`)
  }

  const handleLogout = async () => {
    try {
      await AuthService.logout().then(() => {
        dispatch(SET_LOGOUT())
      })
    } catch (err) {
      // handle err
    }
  }

  const transferRouteHistory = (command: 'back' | 'forward'): any =>
    navigate(command === 'back' ? -1 : 1)

  const renderPersonalButton = (): ReactNode => {
    return !$profile || !Object.keys($profile).length ? (
      ''
    ) : (
      <button
        className="odcjv30UQnjaTv4sylc0 RfdRTSGwulyQdDepLUTT"
        type="button"
        aria-expanded="false"
        onClick={handleLogout}>
        <figure
          className="tp8rO9vtqBGPLOhwcdYv"
          title={$profile.name}>
          <div
            className="w-fit h-fit"
            style={{ insetInlineStart: '0px' } as CSSProperties}>
            <img
              aria-hidden="false"
              draggable="false"
              loading="eager"
              src={$profile.avatar}
              alt={$profile.name}
              className="mMx2LUixlnN_Fu45JpFB Xz3tlahv16UpqKBW5HdK Yn2Ei5QZn19gria6LjZj"
            />
          </div>
        </figure>

        <span
          dir="auto"
          className="Type__TypeElement-sc-goli3j-0 jdSGNV EeWTFG_vxLI5QJc1TH4F">
          {$profile.name}
        </span>
        <svg
          role="img"
          height="16"
          width="16"
          aria-hidden="true"
          className="Svg-sc-ytk21e-0 uPxdw eAXFT6yvz37fvS1lmt6k"
          viewBox="0 0 16 16">
          <path d="m14 6-6 6-6-6h12z"></path>
        </svg>
      </button>
    )
  }

  return (
    <div className="Root__top-bar">
      <header
        aria-label="Top bar and user menu"
        className="facDIsOQo9q7kiWc4jSg qxbaGYC8rgMLfyOuYRCM">
        <div
          className="T1xI1RTSFU7Wu94UuvE6"
          style={
            {
              // @ts-ignore
              backgroundColor: $detailSection?.backup?.background_color,
              opacity: 0,
            } as CSSProperties
          }>
          <div className="EvIR4O7jOSbNmxtMdIQ0" />
        </div>

        <div className="VgSbatGBB9XwTH2_dsxg">
          <button
            aria-label="Go back"
            className="ql0zZd7giPXSnPg75NR0"
            aria-expanded="false"
            disabled={currentRoute.idx < 1}
            onClick={() => transferRouteHistory('back')}>
            <svg
              role="img"
              height="16"
              width="16"
              aria-hidden="true"
              className="Svg-sc-ytk21e-0 kcBZLg IYDlXmBmmUKHveMzIPCF"
              viewBox="0 0 16 16">
              <path d="M11.03.47a.75.75 0 0 1 0 1.06L4.56 8l6.47 6.47a.75.75 0 1 1-1.06 1.06L2.44 8 9.97.47a.75.75 0 0 1 1.06 0z"></path>
            </svg>
          </button>

          <button
            aria-label="Go forward"
            className="ql0zZd7giPXSnPg75NR0 pfMoD1MbelMuF1m8QeMc"
            disabled={currentRoute.idx + 1 >= historyLength}
            onClick={() => transferRouteHistory('forward')}>
            <svg
              role="img"
              height="16"
              width="16"
              aria-hidden="true"
              className="Svg-sc-ytk21e-0 kcBZLg IYDlXmBmmUKHveMzIPCF"
              viewBox="0 0 16 16">
              <path d="M4.97.47a.75.75 0 0 0 0 1.06L11.44 8l-6.47 6.47a.75.75 0 1 0 1.06 1.06L13.56 8 6.03.47a.75.75 0 0 0-1.06 0z"></path>
            </svg>
          </button>
        </div>

        <div className="rovbQsmAS_mwvpKHaVhQ" />
        <div className="GTAFfOA_w5vh_bDaGJAG" />

        {$token ? (
          renderPersonalButton()
        ) : (
          <div className="LKFFk88SIRC9QKKUWR5u">
            <button
              className="Button-sc-1dqy6lx-0 dZYxEP sibxBMlr_oxWTfBrEz2G"
              onClick={() => redirectAuthentication('signup')}>
              {t('signup')}
            </button>

            <button
              className="Button-sc-qlcn5g-0 jsmWVV"
              onClick={() => redirectAuthentication('login')}>
              <span className="ButtonInner-sc-14ud5tc-0 kuwYvr encore-inverted-light-set">
                {t('login')}
              </span>
            </button>
          </div>
        )}
      </header>
    </div>
  )
}

export default CHeader

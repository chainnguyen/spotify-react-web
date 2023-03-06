import '@/assets/scss/layouts/main.scss'

import { Suspense } from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'

import {
  CGlobalSidebar,
  CHeader,
  CLoading,
  CModalLanguageSelection,
  CModalRequestLogin,
  CPlayingBar,
} from '@/shared/components'
import type { RootState } from '@/shared/store'

function DefaultLayout() {
  const $isRequestLogin = useSelector((state: RootState) => state['auth'].isRequestLogin)
  const $isLanguageSelection = useSelector(
    (state: RootState) => state['locales'].isLanguageSelection
  )
  const $dataRequestLogin = useSelector((state: RootState) => state['auth'].dataRequestLogin)

  return (
    <>
      <div className="Root__top-container">
        <CHeader />
        <CGlobalSidebar />
        <CPlayingBar />

        <div className="Root__main-view">
          <div className="main-view-container">
            <div className="under-main-view"></div>

            <div className="os-host os-host-foreign os-theme-spotify os-host-resize-disabled os-host-scrollbar-horizontal-hidden main-view-container__scroll-node os-host-transition os-host-scrollbar-vertical-hidden">
              <div className="os-resize-observer-host observed">
                <div className="os-resize-observer" />
              </div>

              <div className="os-padding">
                <div className="os-viewport os-viewport-native-scrollbars-invisible">
                  <div className="os-content">
                    <div className="main-view-container__scroll-node-child-spacer"></div>
                    <div className="main-view-container__scroll-node-child">
                      <Suspense fallback={<CLoading />}>
                        <Outlet />
                      </Suspense>
                    </div>
                  </div>
                </div>
              </div>

              <div className="os-scrollbar os-scrollbar-horizontal os-scrollbar-unusable">
                <div className="os-scrollbar-track">
                  <div className="os-scrollbar-handle" />
                </div>
              </div>

              <div className="os-scrollbar os-scrollbar-vertical os-scrollbar-unusable">
                <div className="os-scrollbar-track">
                  <div className="os-scrollbar-handle" />
                </div>
              </div>

              <div className="os-scrollbar-corner" />
            </div>
          </div>

          <div className="Root__modal-slot" />
        </div>
      </div>

      <CModalRequestLogin
        isOpen={$isRequestLogin}
        data={$dataRequestLogin}
      />

      <CModalLanguageSelection isOpen={$isLanguageSelection} />
    </>
  )
}

export default DefaultLayout

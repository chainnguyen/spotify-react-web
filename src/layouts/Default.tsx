import '@/assets/scss/layouts/_main.scss'

import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import { CGlobalSidebar, CHeader, CLoading, CPlayingBar } from '@/shared/components'

function DefaultLayout() {
  return (
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
  )
}

export default DefaultLayout

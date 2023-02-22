import '@/assets/scss/layouts/_sidebar.scss'

import { Link, useLocation } from 'react-router-dom'

import { SIDEBAR } from '@/enums/sidebar.enum'
import { CustomizeIcon } from '@/share/components'

function GlobalSidebar() {
  const location = useLocation()

  return (
    <nav
      aria-label="Main"
      className="Root__nav-bar">
      <div className="tUwyjggD2n5KvEtP5z1B">
        <div
          className="NyIynkmMpZXSoaE3XGhA"
          role="banner">
          <Link
            to="/"
            draggable="false"
            className="liKqY2CEkAKTwX2SfNCu WJsKJXEbycxxq8OcGHM1 active"
            aria-current="page">
            <svg
              viewBox="0 0 1134 340"
              className="fwTMCeAaUoWDj9WcQbgy">
              <title>Spotify</title>
              <path
                fill="currentColor"
                d="M8 171c0 92 76 168 168 168s168-76 168-168S268 4 176 4 8 79 8 171zm230 78c-39-24-89-30-147-17-14 2-16-18-4-20 64-15 118-8 162 19 11 7 0 24-11 18zm17-45c-45-28-114-36-167-20-17 5-23-21-7-25 61-18 136-9 188 23 14 9 0 31-14 22zM80 133c-17 6-28-23-9-30 59-18 159-15 221 22 17 9 1 37-17 27-54-32-144-35-195-19zm379 91c-17 0-33-6-47-20-1 0-1 1-1 1l-16 19c-1 1-1 2 0 3 18 16 40 24 64 24 34 0 55-19 55-47 0-24-15-37-50-46-29-7-34-12-34-22s10-16 23-16 25 5 39 15c0 0 1 1 2 1s1-1 1-1l14-20c1-1 1-1 0-2-16-13-35-20-56-20-31 0-53 19-53 46 0 29 20 38 52 46 28 6 32 12 32 22 0 11-10 17-25 17zm95-77v-13c0-1-1-2-2-2h-26c-1 0-2 1-2 2v147c0 1 1 2 2 2h26c1 0 2-1 2-2v-46c10 11 21 16 36 16 27 0 54-21 54-61s-27-60-54-60c-15 0-26 5-36 17zm30 78c-18 0-31-15-31-35s13-34 31-34 30 14 30 34-12 35-30 35zm68-34c0 34 27 60 62 60s62-27 62-61-26-60-61-60-63 27-63 61zm30-1c0-20 13-34 32-34s33 15 33 35-13 34-32 34-33-15-33-35zm140-58v-29c0-1 0-2-1-2h-26c-1 0-2 1-2 2v29h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v58c0 23 11 35 34 35 9 0 18-2 25-6 1 0 1-1 1-2v-21c0-1 0-2-1-2h-2c-5 3-11 4-16 4-8 0-12-4-12-12v-54h30c1 0 2-1 2-2v-22c0-1-1-2-2-2h-30zm129-3c0-11 4-15 13-15 5 0 10 0 15 2h1s1-1 1-2V93c0-1 0-2-1-2-5-2-12-3-22-3-24 0-36 14-36 39v5h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v89c0 1 1 2 2 2h26c1 0 1-1 1-2v-89h25l37 89c-4 9-8 11-14 11-5 0-10-1-15-4h-1l-1 1-9 19c0 1 0 3 1 3 9 5 17 7 27 7 19 0 30-9 39-33l45-116v-2c0-1-1-1-2-1h-27c-1 0-1 1-1 2l-28 78-30-78c0-1-1-2-2-2h-44v-3zm-83 3c-1 0-2 1-2 2v113c0 1 1 2 2 2h26c1 0 1-1 1-2V134c0-1 0-2-1-2h-26zm-6-33c0 10 9 19 19 19s18-9 18-19-8-18-18-18-19 8-19 18zm245 69c10 0 19-8 19-18s-9-18-19-18-18 8-18 18 8 18 18 18zm0-34c9 0 17 7 17 16s-8 16-17 16-16-7-16-16 7-16 16-16zm4 18c3-1 5-3 5-6 0-4-4-6-8-6h-8v19h4v-6h4l4 6h5zm-3-9c2 0 4 1 4 3s-2 3-4 3h-4v-6h4z"></path>
            </svg>
          </Link>
        </div>

        <ul className="RSg3qFREWrqWCuUvDpJR">
          {SIDEBAR.length &&
            SIDEBAR.map((item) => (
              <li
                key={item.id}
                className="eNs6P3JYpf2LScgTDHc6">
                <Link
                  to={item.routePath}
                  draggable="false"
                  aria-current={location.pathname === item.routePath ? 'page' : undefined}
                  className={
                    'link-subtle ATUzFKub89lzvkmvhpyE ' +
                    (location.pathname === item.routePath ? 'moDRd9td0KtitPDzR7OJ' : '')
                  }>
                  <CustomizeIcon type={item.icon} />
                  <span className="Type__TypeElement-sc-goli3j-0 jdSGNV ellipsis-one-line">
                    {item.content}
                  </span>
                </Link>
              </li>
            ))}
        </ul>
        <div className="LKgm9fCDTO7wqig_5U1q">
          <div className="EY6S7vlkxB7SF_OjjF_Y">
            <div className="GlueDropTarget GlueDropTarget--albums GlueDropTarget--tracks GlueDropTarget--local-tracks GlueDropTarget--episodes">
              <button
                type="button"
                className="IPVjkkhh06nan7aZK7Bx">
                <div className="Bwc9jlVb7HWs8JJupnBB">
                  <div className="q3ABXYJT9JZIzXOOtVuO">
                    <svg
                      role="img"
                      height="12"
                      width="12"
                      aria-hidden="true"
                      viewBox="0 0 16 16"
                      className="Svg-sc-ytk21e-0 uPxdw">
                      <path d="M15.25 8a.75.75 0 0 1-.75.75H8.75v5.75a.75.75 0 0 1-1.5 0V8.75H1.5a.75.75 0 0 1 0-1.5h5.75V1.5a.75.75 0 0 1 1.5 0v5.75h5.75a.75.75 0 0 1 .75.75z"></path>
                    </svg>
                  </div>
                </div>
                <span className="Type__TypeElement-sc-goli3j-0 jdSGNV J4xXuqyaJnnwS6s2p3ZB standalone-ellipsis-one-line">
                  Create Playlist
                </span>
              </button>
            </div>
            <div className="GlueDropTarget GlueDropTarget--tracks">
              <a
                draggable="false"
                className="r9YzlaAPnM2LGK97GSfa"
                href="/collection/tracks">
                <div className="bFQ9NOIn1bDs8tTH0ebQ">
                  <div className="Nd_DeCpszONzyaLe5Wd1">
                    <svg
                      role="img"
                      height="12"
                      width="12"
                      aria-hidden="true"
                      viewBox="0 0 16 16"
                      className="Svg-sc-ytk21e-0 uPxdw">
                      <path d="M15.724 4.22A4.313 4.313 0 0 0 12.192.814a4.269 4.269 0 0 0-3.622 1.13.837.837 0 0 1-1.14 0 4.272 4.272 0 0 0-6.21 5.855l5.916 7.05a1.128 1.128 0 0 0 1.727 0l5.916-7.05a4.228 4.228 0 0 0 .945-3.577z"></path>
                    </svg>
                  </div>
                </div>
                <span className="Type__TypeElement-sc-goli3j-0 jdSGNV standalone-ellipsis-one-line ot6VAZq1Xfbw2Vh8Qt_A">
                  Liked Songs
                </span>
                <div className="gtuJjD43VjwtP8ii3H3P"></div>
              </a>
            </div>
          </div>
        </div>
        <div className="Foyk_HJx16yh22JYmQ56">
          <div className="iYuun6jjV82lsYbccJVS">
            <a
              draggable="false"
              href="https://www.spotify.com/legal/cookies-policy/"
              target="_blank"
              rel="noopener noreferrer"
              className="T84lhzqb5VCzhao2XHa0">
              <span className="Type__TypeElement-sc-goli3j-0 fvwaKF">Cookies</span>
            </a>
          </div>
          <div className="Ka2HOvFsfXcLu7He0nTD">
            <button className="Button-sc-y0gtbx-0 eeRweB">
              <span
                aria-hidden="true"
                className="IconWrapper__Wrapper-sc-ihacte-0 jrJfVw">
                <svg
                  role="img"
                  height="16"
                  width="16"
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  className="Svg-sc-ytk21e-0 uPxdw">
                  <path d="M8.152 16H8a8 8 0 1 1 .152 0zm-.41-14.202c-.226.273-.463.713-.677 1.323-.369 1.055-.626 2.496-.687 4.129h3.547c-.06-1.633-.318-3.074-.687-4.129-.213-.61-.45-1.05-.676-1.323-.194-.235-.326-.285-.385-.296h-.044c-.055.007-.19.052-.391.296zM4.877 7.25c.062-1.771.34-3.386.773-4.624.099-.284.208-.554.329-.806a6.507 6.507 0 0 0-4.436 5.43h3.334zm-3.334 1.5a6.507 6.507 0 0 0 4.436 5.43 7.974 7.974 0 0 1-.33-.806c-.433-1.238-.71-2.853-.772-4.624H1.543zm4.835 0c.061 1.633.318 3.074.687 4.129.214.61.451 1.05.677 1.323.202.244.336.29.391.297l.044-.001c.06-.01.19-.061.385-.296.226-.273.463-.713.676-1.323.37-1.055.626-2.496.687-4.129H6.378zm5.048 0c-.061 1.771-.339 3.386-.772 4.624-.082.235-.171.46-.268.674a6.506 6.506 0 0 0 4.071-5.298h-3.03zm3.031-1.5a6.507 6.507 0 0 0-4.071-5.298c.097.214.186.44.268.674.433 1.238.711 2.853.772 4.624h3.031z"></path>
                </svg>
              </span>
              English
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default GlobalSidebar

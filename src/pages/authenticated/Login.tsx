import '@/assets/scss/layouts/auth.scss'

import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import type { ICredentials } from '@/@types/views/auth'
import { AuthService } from '@/services/auth.service'
import type { AppDispatch } from '@/shared/store'
import { SET_LOGIN } from '@/shared/store/modules/auth'

function Login() {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const dispatch = useDispatch<AppDispatch>()

  const [formLogin, setFormLogin] = useState<ICredentials>({
    email: '',
    password: '',
  })

  const handleSubmit = async () => {
    try {
      await AuthService.login(formLogin).then((res) => {
        dispatch(SET_LOGIN({ token: res.data.bearer_token }))
        navigate('/')
      })
    } catch (err) {
      // handle err
    }
  }

  return (
    <div className="sc-gswNZR wKwWn">
      <div>
        <div className="Group-sc-u9bcx5-0 kWRxyd sc-fEXmlR gaqGa-D">
          <div className="LabelGroup-sc-1ibddrg-0 duTSXm">
            <label
              htmlFor="login-username"
              className="Label-sc-1c0cv3r-0 cwWhaQ">
              <span className="LabelInner-sc-19pye2k-0 LnTCl">Email address or username</span>
            </label>
          </div>

          <input
            aria-invalid="false"
            type="text"
            placeholder="Email address or username"
            autoCapitalize="off"
            autoComplete="username"
            spellCheck="false"
            autoCorrect="off"
            aria-describedby="username-error"
            className="Input-sc-1gbx9xe-0 fOpTaL"
          />
        </div>

        <div className="Group-sc-u9bcx5-0 kWRxyd sc-fEXmlR gaqGa-D">
          <div className="LabelGroup-sc-1ibddrg-0 duTSXm">
            <label
              htmlFor="login-password"
              className="Label-sc-1c0cv3r-0 cwWhaQ">
              <span className="LabelInner-sc-19pye2k-0 LnTCl">Password</span>
            </label>
          </div>

          <input
            aria-invalid="false"
            type="password"
            placeholder="Password"
            autoComplete="current-password"
            spellCheck="false"
            autoCorrect="off"
            aria-describedby="password-error"
            className="Input-sc-1gbx9xe-0 fOpTaL"
          />
        </div>

        <button className="Link-sc-k8gsk-0 cIqjxr">{t('auth.forgot_your_password')}</button>

        <div className="sc-idXgbr iSayOZ">
          <div className="Group-sc-u9bcx5-0 kWRxyd sc-fEXmlR gaqGa-D">
            <div className="Checkbox-sc-svpvf6-0 ktsNkz">
              <input
                type="checkbox"
                id="login-remember"
                name="remember"
                className="VisuallyHidden__VisuallyHiddenElement-sc-17bibe8-0 eUaqVT"
                checked
              />
              <label
                htmlFor="login-remember"
                className="Label-sc-cpoq-0 bbKAxy">
                <span className="Indicator-sc-1airx73-0 bpcByA"></span>
                <span className="TextForLabel-sc-1jqya9m-0 hGXvoZ">
                  <p className="Type__TypeElement-sc-goli3j-0 gkqrGP sc-csuSiG gshWbo">
                    {t('auth.remember_me')}
                  </p>
                </span>
              </label>
            </div>
          </div>

          <div className="sc-hHTYSt hqfSfC">
            <button
              className="Button-sc-qlcn5g-0 otMlU"
              onClick={handleSubmit}>
              <span className="ButtonInner-sc-14ud5tc-0 cJdEzG encore-bright-accent-set">
                <span className="Type__TypeElement-sc-goli3j-0 kwLSIj sc-eDvSVe itlAHd">
                  {t('login')}
                </span>
              </span>
              <span className="ButtonFocus-sc-2hq6ey-0 csWrjt"></span>
            </button>
          </div>
        </div>
      </div>

      <hr
        role="presentation"
        className="sc-jSUZER VNbQX"
      />

      <div data-testid="signup-section">
        <h2 className="Type__TypeElement-sc-goli3j-0 eiDqql sc-kDvujY text-center">
          {t('auth.dont_have_an_account')}
        </h2>

        <Link
          to="/auth/signup"
          className="Button-sc-y0gtbx-0 jJyUnh">
          <span className="Type__TypeElement-sc-goli3j-0 dswDUK sc-eDvSVe itlAHd">
            {t('auth.signup_for_spotify')}
          </span>
        </Link>
      </div>
    </div>
  )
}

export default Login

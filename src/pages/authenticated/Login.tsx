import '@/assets/scss/layouts/auth.scss'

import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import * as yup from 'yup'

import type { ICredentials } from '@/@types/views/auth'
import { AuthService } from '@/services/auth.service'
import { CInputText } from '@/shared/components'
import { useFormHandler } from '@/shared/hooks'
import type { AppDispatch } from '@/shared/store'
import { SET_LOGIN } from '@/shared/store/modules/auth'

function Login() {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const dispatch = useDispatch<AppDispatch>()

  const defaultValues = {
    email: 'ntrungtn@gmail.com',
    password: '123456',
  }

  const validScheme = yup.object().shape({
    email: yup.string().label('auth.email_address_or_username').email().max(100).required(),
    password: yup.string().label('auth.password').min(6).max(100).required(),
  })

  const { registerField, handleSubmit } = useFormHandler<ICredentials>({
    defaultValues,
    validScheme,
  })

  const onSubmit = async (form: ICredentials) => {
    try {
      await AuthService.login(form).then((res) => {
        dispatch(SET_LOGIN({ token: res.data.bearer_token }))
        navigate('/')
        // Remove process login api in network tab
        window.location.reload()
      })
    } catch (err) {
      alert('Username or password incorrect')
    }
  }

  return (
    <div className="sc-gswNZR wKwWn">
      <form onSubmit={handleSubmit(onSubmit)}>
        <CInputText
          reid="email"
          field="email"
          {...registerField}
          label={t('auth.email_address_or_username')}
          placeholder={t('auth.email_address_or_username')}
        />

        <CInputText
          reid="password"
          field="password"
          type="password"
          {...registerField}
          label={t('auth.password')}
          placeholder={t('auth.password')}
        />

        <div className="sc-idXgbr iSayOZ">
          <div className="sc-hHTYSt hqfSfC">
            <button
              type="submit"
              className="Button-sc-qlcn5g-0 otMlU">
              <span className="ButtonInner-sc-14ud5tc-0 cJdEzG encore-bright-accent-set">
                <span className="Type__TypeElement-sc-goli3j-0 kwLSIj sc-eDvSVe itlAHd">
                  {t('login')}
                </span>
              </span>
              <span className="ButtonFocus-sc-2hq6ey-0 csWrjt"></span>
            </button>
          </div>
        </div>
      </form>

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

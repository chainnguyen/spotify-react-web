import '@/assets/scss/components/modal/modal-language-selection.scss'

import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'

import { LOCALES } from '@/enums/locales.enum'
import { CModalCurtain } from '@/shared/components'
import type { AppDispatch } from '@/shared/store'
import { SET_LANGUAGE, SET_LANGUAGE_SELECTION } from '@/shared/store/modules/locales'

interface IProps {
  isOpen: boolean
}

function CModalLanguageSelection({ isOpen }: IProps) {
  const { t } = useTranslation()
  const dispatch = useDispatch<AppDispatch>()

  const closeModal = () => {
    dispatch(SET_LANGUAGE_SELECTION(false))
  }

  const onSelectLanguage = (langCode: string) => {
    dispatch(SET_LANGUAGE(langCode))
    closeModal()
  }

  return (
    <>
      {!isOpen ? (
        ''
      ) : (
        <CModalCurtain
          onClose={closeModal}
          className={'zR8QNf_xkSN8l2nrr7qn'}>
          <div
            className="VdanMHKK5Onw77cpKNJo"
            role="dialog"
            aria-modal="true"
            aria-labelledby="language-selection-title"
            aria-describedby="language-selection-subtitle">
            <div className="biCYmK3d8L8l7A_xC_Ge">
              <div className="uzrPPSY_Qq9u4Yos40TQ">
                <h1
                  id="language-selection-title"
                  className="Type__TypeElement-sc-goli3j-0 cZAxWV">
                  {t('choose_language')}
                </h1>

                <p
                  id="language-selection-subtitle"
                  className="Type__TypeElement-sc-goli3j-0 iHGtYM">
                  This updates what you read on {window.location.host}
                </p>
              </div>

              <button
                className="VtOVn196CnZ8321SwK5W"
                onClick={closeModal}>
                <svg
                  role="img"
                  height="16"
                  width="16"
                  aria-hidden="true"
                  aria-label="Close"
                  viewBox="0 0 16 16"
                  data-encore-id="icon"
                  className="Svg-sc-ytk21e-0 uPxdw">
                  <path d="M1.47 1.47a.75.75 0 0 1 1.06 0L8 6.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L9.06 8l5.47 5.47a.75.75 0 1 1-1.06 1.06L8 9.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L6.94 8 1.47 2.53a.75.75 0 0 1 0-1.06z"></path>
                </svg>
              </button>
            </div>

            <div className="QN6q7D8yep8_vpem9h9t">
              {LOCALES.map((lang) => (
                <button
                  key={lang.id}
                  className="Gf_hXbIvfUvlnE_jnkw8"
                  onClick={() => onSelectLanguage(lang.code)}>
                  <span className="Type__TypeElement-sc-goli3j-0 dBuVac">{lang.content}</span>
                  <span className="Type__TypeElement-sc-goli3j-0 gkqrGP">{lang.name}</span>
                </button>
              ))}
            </div>
          </div>
        </CModalCurtain>
      )}
    </>
  )
}

export default CModalLanguageSelection

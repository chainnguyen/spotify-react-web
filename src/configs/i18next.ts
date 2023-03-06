import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

import { DEFAULT_LANGUAGE } from '@/enums/locales.enum'
import english from '@/locales/en'
import vietnamese from '@/locales/vi'

const resources = {
  en: {
    translation: english,
  },
  vi: {
    translation: vietnamese,
  },
}

i18next.use(initReactI18next).init({
  lng: DEFAULT_LANGUAGE, // default language
  resources,
  interpolation: {
    escapeValue: false,
  },
})

export default i18next

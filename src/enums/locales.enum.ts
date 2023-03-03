// https://lingohub.com/developers/supported-locales/language-designators-with-regions
export interface ILocales {
  id: string
  code: string
  name: string
  content: string
}

export const LANG_STORAGE_KEY = '__spotify_react_lang'
export const DEFAULT_LANGUAGE = 'en'

export const LOCALES: ILocales[] = [
  {
    id: 'en',
    code: 'en',
    name: 'English',
    content: 'English',
  },
  {
    id: 'vi',
    code: 'vi',
    name: 'Vietnamese',
    content: 'Tiếng Việt',
  },
  {
    id: 'jp',
    code: 'en',
    name: 'Japanese',
    content: '日本語',
  },
  {
    id: 'de',
    code: 'vi',
    name: 'German',
    content: 'Deutsch',
  },
  {
    id: 'fr',
    code: 'en',
    name: 'French',
    content: 'Français',
  },
  {
    id: 'pt-PT',
    code: 'vi',
    name: 'European Portuguese',
    content: 'Português',
  },
  {
    id: 'en_2',
    code: 'en',
    name: 'English',
    content: 'English',
  },
  {
    id: 'vi_2',
    code: 'vi',
    name: 'Vietnamese',
    content: 'Tiếng Việt',
  },
  {
    id: 'th',
    code: 'vi',
    name: 'Thai',
    content: 'ภาษาไทย',
  },
  {
    id: 'af',
    code: 'en',
    name: 'Afrikaans',
    content: 'Afrikaans',
  },
  {
    id: 'en_3',
    code: 'en',
    name: 'English',
    content: 'English',
  },
  {
    id: 'am',
    code: 'en',
    name: 'Amharic',
    content: 'አማርኛ',
  },
  {
    id: 'en_4',
    code: 'en',
    name: 'English',
    content: 'English',
  },
  {
    id: 'ar',
    code: 'vi',
    name: 'Arabic',
    content: 'العَرَبِيَّة',
  },
  {
    id: 'it',
    code: 'en',
    name: 'Italian',
    content: 'Italiano',
  },
  {
    id: 'vi_3',
    code: 'vi',
    name: 'Vietnamese',
    content: 'Tiếng Việt',
  },
  {
    id: 'en_5',
    code: 'en',
    name: 'English',
    content: 'English',
  },
  {
    id: 'ms',
    code: 'vi',
    name: 'Malay',
    content: 'Melayu',
  },
  {
    id: 'vi_4',
    code: 'vi',
    name: 'Vietnamese',
    content: 'Tiếng Việt',
  },
]

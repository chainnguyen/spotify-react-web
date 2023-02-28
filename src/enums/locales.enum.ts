// https://lingohub.com/developers/supported-locales/language-designators-with-regions
interface ILocales {
  code: string
  name: string
  content: string
}

export const LOCALES: ILocales[] = [
  {
    code: 'en',
    name: 'English',
    content: 'English',
  },
  {
    code: 'vi',
    name: 'Vietnamese',
    content: 'Tiếng Việt',
  },
  {
    code: 'jp',
    name: 'Japanese',
    content: '日本語',
  },
]

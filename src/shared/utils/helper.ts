/* Docs - Locale of countries: https://www.localeplanet.com/icu/ */
import i18next from 'i18next'

/**
 * Convert a date to a relative time string, such as
 * "a minute ago", "in 2 hours", "yesterday", "3 months ago", etc.
 * using Intl.RelativeTimeFormat
 */
export function getRelativeTimeString(
  date: Date | number,
  lang = i18next?.language || navigator.language
): string {
  // Allow dates or times to be passed
  const timeMs = typeof date === 'number' ? date : date.getTime()

  // Get the amount of seconds between the given date and now
  const deltaSeconds: number = Math.round((timeMs - Date.now()) / 1000)

  // Array representing one minute, hour, day, week, month, etc in seconds
  const cutoffs: number[] = [60, 3600, 86400, 86400 * 7, 86400 * 30, 86400 * 365, Infinity]

  // Array equivalent to the above but in the string representation of the units
  const units: Intl.RelativeTimeFormatUnit[] = [
    'second',
    'minute',
    'hour',
    'day',
    'week',
    'month',
    'year',
  ]

  // Grab the ideal cutoff unit
  const unitIndex = cutoffs.findIndex((cutoff) => cutoff > Math.abs(deltaSeconds))

  // Get the divisor to divide from the seconds. E.g. if our unit is "day" our divisor
  // is one day in seconds, so we can divide our seconds by this to get the # of days
  const divisor: number = unitIndex ? cutoffs[unitIndex - 1] : 1

  // Intl.RelativeTimeFormat do its magic
  const rtf = new Intl.RelativeTimeFormat(lang, { numeric: 'auto' })
  return rtf.format(Math.floor(deltaSeconds / divisor), units[unitIndex])
}

/**
 * Convert a number to a decimal string, such as
 * "1,234,556", "1,334", "123", etc.
 */
export function formatNumberDecimal(number: number, format: string): string | number {
  // Don't run if it's negative number
  if (['0', '-', '.'].includes(number.toString().charAt(0))) return number

  number = Number(number.toString().replaceAll(format, ''))
  // REGEX: detect number decimal and add dot every 3 digits
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, format)
}

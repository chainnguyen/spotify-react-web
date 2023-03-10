import type { BaseSyntheticEvent, KeyboardEvent } from 'react'

import type { ICommonFieldProps } from '@/@types/global'
import { CErrorMessage } from '@/shared/components'

interface IInputTextProps extends Partial<ICommonFieldProps> {
  reid: string
  field: string
  errors: any
  register: any
  maxLength?: string | number
}

function CInputText(props: IInputTextProps) {
  const {
    reid,
    field,
    errors,
    register,
    label,
    type,
    hiddenAsterisk,
    disabled,
    readOnly,
    autofill,
    className,
    classContainer,
    maxLength,
    placeholder,
  } = props

  const renderClassInput = (): string => {
    const hasError = errors[field]
      ? 'border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500'
      : ''
    const hasDisabled = disabled ? 'cursor-not-allowed' : ''
    const hasReadOnly = readOnly ? 'cursor-not-allowed' : ''
    return [hasError, hasDisabled, hasReadOnly, className || ''].join(' ')
  }

  const preventE = ($event: KeyboardEvent<HTMLInputElement>) => {
    if ($event.which !== 8 && $event.which !== 0 && ($event.which < 48 || $event.which > 57)) {
      $event.preventDefault()
    }
  }

  const handleFocus = ($event: BaseSyntheticEvent) => {
    if (!autofill) {
      $event.target.removeAttribute('readonly')
    }
  }

  return (
    <div className={`${classContainer || ''} mb-2`}>
      {/*-- Label --*/}
      {label && (
        <label
          htmlFor={reid}
          className={`block mb-2 text-sm font-medium cursor-pointer ${
            errors[field] && 'text-red-600 dark:text-red-500'
          }`}>
          {label}
          {!hiddenAsterisk && <span className="text-red-600 ml-1">*</span>}
        </label>
      )}

      {/*-- Field --*/}
      <input
        id={reid}
        {...register(field)}
        type={type ? type : 'text'}
        aria-label={(disabled ? `${reid} disabled` : '') || (readOnly ? `${reid} readOnly` : '')}
        aria-describedby={`${reid}-error`}
        autoCapitalize="off"
        spellCheck="false"
        autoCorrect="off"
        autoComplete={reid}
        disabled={disabled}
        readOnly={!autofill || readOnly}
        placeholder={placeholder || undefined}
        maxLength={maxLength ? +maxLength : undefined}
        className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${renderClassInput()}`}
        onFocus={handleFocus}
        onKeyPress={($event) => (type === 'number' ? preventE($event) : '')}
      />

      {/*-- Error message --*/}
      <CErrorMessage errors={errors[field]?.message} />
    </div>
  )
}

export default CInputText

import { useTranslation } from 'react-i18next'

import type { IValidationError } from '@/@types/views/validation'

interface IErrorMessageProps {
  errors: IValidationError | string
}

function CErrorMessage({ errors }: IErrorMessageProps) {
  const { t } = useTranslation()

  if (!errors) return null
  if (typeof errors === 'string') {
    return <p className="mt-1 text-sm text-red-600 dark:text-red-500">{errors}</p>
  } else {
    const { key, values } = errors
    return (
      <p className="mt-1 text-sm text-red-600 dark:text-red-500">
        {t(key, { field: t(values?.label), ...values })}
      </p>
    )
  }
}

export default CErrorMessage

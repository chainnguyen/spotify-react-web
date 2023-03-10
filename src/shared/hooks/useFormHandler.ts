import { yupResolver } from '@hookform/resolvers/yup'
import type { DefaultValues, FieldValues, Mode } from 'react-hook-form'
import { useForm } from 'react-hook-form'

type FormHandlerArgument<T> = {
  mode?: Mode // onChange | onBlur | onSubmit | onTouched | all
  defaultValues?: DefaultValues<T> | undefined
  reValidateMode?: any // onChange | onBlur | onSubmit
  validScheme?: any
}

function useFormHandler<TFormType extends FieldValues>({
  mode = 'all',
  defaultValues,
  reValidateMode = 'onChange',
  validScheme,
}: FormHandlerArgument<TFormType>) {
  const {
    register,
    control,
    reset,
    resetField,
    getValues,
    getFieldState,
    watch,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    clearErrors,
  } = useForm<TFormType>({
    mode,
    resolver: yupResolver(validScheme),
    defaultValues,
    reValidateMode,
  })

  const registerField = { register, errors, isDirty, isValid }
  return {
    registerField,
    control,
    reset,
    resetField,
    getValues,
    getFieldState,
    watch,
    handleSubmit,
    clearErrors,
  }
}

export default useFormHandler

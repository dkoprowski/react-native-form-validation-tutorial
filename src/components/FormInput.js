import React from 'react'
import { useController, useFormContext } from 'react-hook-form'

import { Input } from './Input'

export const FormInput = (props) => {
  const { name, rules, defaultValue = '', ...inputProps } = props

  const formContext = useFormContext()
  const { control } = formContext

  const { field, fieldState } = useController({
    name,
    control,
    rules,
    defaultValue,
  })

  return (
    <Input
      {...inputProps}
      error={fieldState.error?.message}
      onChangeText={field.onChange}
      onBlur={field.onBlur}
      value={field.value}
    />
  )
}

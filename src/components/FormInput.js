import PropTypes from 'prop-types'
import React from 'react'
import { useController, useFormContext } from 'react-hook-form'

import { Input } from './Input'

const ControlledInput = (props) => {
  const { name, rules, defaultValue = '', ...inputProps } = props

  const formContext = useFormContext()
  const { control, errors } = formContext

  const { field } = useController({ name, control, rules, defaultValue })

  return (
    <Input
      {...inputProps}
      error={errors[name]?.message}
      onChangeText={field.onChange}
      onBlur={field.onBlur}
      value={field.value}
    />
  )
}

export const FormInput = (props) => {
  const { name, ...inputProps } = props
  const formContext = useFormContext()

  if (!formContext || !name) {
    const errorMessage = !name
      ? 'Form field must have a "name" prop!'
      : 'Form field must be a descendant of `FormProvider` as it uses `useFormContext`!'
    return <Input {...inputProps} error={errorMessage} editable={false} />
  }

  return <ControlledInput {...props} />
}

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  rules: PropTypes.object,
  defaultValue: PropTypes.any,
}

ControlledInput.propTypes = FormInput.propTypes

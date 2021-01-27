import React, { useCallback, useRef } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Button } from 'react-native'
import styled from 'styled-components/native'

import { FormInput } from './FormInput'

const Wrapper = styled.View`
  padding: 5px;
`

const LOGIN_FIELDS = {
  username: 'username',
  password: 'password',
}

const Login = () => {
  const formMethods = useForm()
  const passwordRef = useRef()

  const onSubmit = (form) => {
    console.log(form)
  }

  const onErrors = (errors) => {
    console.warn(errors)
  }

  const focusPassword = useCallback(() => passwordRef?.current?.focus(), [
    passwordRef,
  ])

  return (
    <Wrapper>
      <FormProvider {...formMethods}>
        <FormInput
          name={LOGIN_FIELDS.username}
          label='Username'
          rules={{ required: 'Username is required!' }}
          onSubmitEditing={focusPassword}
          returnKeyType='next'
        />
        <FormInput
          name={LOGIN_FIELDS.password}
          label='Password'
          rules={{
            required: 'Password is required!',
            minLength: {
              message: 'Use at least 10 characters.',
              value: 10,
            },
          }}
          ref={passwordRef}
        />
      </FormProvider>
      <Button
        title='Login'
        onPress={formMethods.handleSubmit(onSubmit, onErrors)}
      />
    </Wrapper>
  )
}

export default Login

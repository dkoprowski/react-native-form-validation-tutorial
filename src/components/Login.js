import React from 'react'
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

  return (
    <Wrapper>
      <FormProvider {...formMethods}>
        <FormInput name={LOGIN_FIELDS.username} label='Username' />
        <FormInput name={LOGIN_FIELDS.password} label='Password' />
      </FormProvider>
      <Button title='Login' />
    </Wrapper>
  )
}

export default Login

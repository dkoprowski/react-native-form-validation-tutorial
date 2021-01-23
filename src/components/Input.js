import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components/native'

import { COLORS } from '../consts/colors'

const Wrapper = styled.View`
  margin-bottom: 15px;
`

const StyledInput = styled.TextInput`
  border-color: ${(props) => (props.isError ? COLORS.red : COLORS.gray)};
  border-width: 1;
`

const Label = styled.Text`
  color: ${COLORS.gray};
  font-size: 10px;
  letter-spacing: 2px;
`

const Error = styled.Text`
  color: ${COLORS.red};
`

export const Input = ({ label, error }) => {
  const isError = Boolean(error)

  return (
    <Wrapper>
      {Boolean(label) && <Label>{label}</Label>}
      <StyledInput isError={isError} />
      {isError && <Error>{error}</Error>}
    </Wrapper>
  )
}

Input.propTypes = {
  label: PropTypes.string,
  error: PropTypes.string,
}

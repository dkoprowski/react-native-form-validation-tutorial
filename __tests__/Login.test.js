import React from 'react'
import { fireEvent, render, waitFor } from '@testing-library/react-native'

import Login from '../src/components/Login'

describe('Login form', () => {
  it('renders both fields without crashing', () => {
    const { getByText } = render(<Login />)

    expect(getByText('Username')).toBeTruthy()
    expect(getByText('Password')).toBeTruthy()
  })

  it('shows validation errors when submitting an empty form', async () => {
    const { getByText } = render(<Login />)

    fireEvent.press(getByText('Login'))

    await waitFor(() => {
      expect(getByText('Username is required!')).toBeTruthy()
      expect(getByText('Password is required!')).toBeTruthy()
    })
  })

  it('clears a field error once a valid value is entered', async () => {
    const { getByText, queryByText, getAllByDisplayValue } = render(<Login />)

    fireEvent.press(getByText('Login'))
    await waitFor(() => expect(getByText('Username is required!')).toBeTruthy())

    const [username] = getAllByDisplayValue('')
    fireEvent.changeText(username, 'daniel')

    await waitFor(() => expect(queryByText('Username is required!')).toBeNull())
  })
})

import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import 'jest-styled-components'

import { Input } from './index';

describe('<Input />', () => {
  it('renders component correctily', () => {
    const { container } = render(<Input value="default value" />)

    const input = screen.getByDisplayValue('default value')
    expect(input).toBeInTheDocument()

    expect(container).toMatchSnapshot()
  })

  it('renders placeholder corretly', () => {
    render(<Input placeholder="default placeholder"/>)

    const input = screen.getByPlaceholderText('default placeholder')
    expect(input).toBeInTheDocument()
  })

  it('changes the data', () => {
    render(<Input placeholder="default placeholder"/>)

    const input = screen.getByPlaceholderText('default placeholder') as HTMLInputElement
    fireEvent.change(input, { target: { value: 'study react' } })
    expect(input.value).toBe('study react')
  })

});
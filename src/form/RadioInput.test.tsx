import { cleanup, render } from '@testing-library/react'
import React from 'react'
import { RadioInput } from './RadioInput'

afterEach(cleanup)

test('Render RadioInput', () => {
    const { container } = render(<RadioInput name="one" />)
    expect(container).toMatchSnapshot()
})

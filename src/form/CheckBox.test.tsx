import { cleanup, render } from '@testing-library/react'
import React from 'react'
import { CheckBox } from './CheckBox'

afterEach(cleanup)

test('Render CheckBox', () => {
    const { container } = render(<CheckBox label="no" />)
    expect(container).toMatchSnapshot()
})

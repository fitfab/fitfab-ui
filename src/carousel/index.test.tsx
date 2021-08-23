import React from 'react'
import { cleanup, render } from '@testing-library/react'
import { Button } from './partials'

afterEach(cleanup)

test('Render Carousel', () => {
    const { container } = render(<Button>hello</Button>)

    expect(container.firstChild).toMatchSnapshot()
})

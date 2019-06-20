import { cleanup, render } from '@testing-library/react'
import React from 'react'
import { FitfabLogo } from './FitfabLogo'
afterEach(cleanup)

test('Render Fitfab logo with default props', () => {
    const { container } = render(<FitfabLogo />)
    // Snapshot demo
    expect(container.firstChild).toMatchSnapshot()
    expect(container.firstChild!.nodeName).toBe('svg')
})

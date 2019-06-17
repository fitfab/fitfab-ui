import { cleanup, fireEvent, render, waitForDomChange } from '@testing-library/react'
import React from 'react'
import { CheckBox } from './CheckBox'

afterEach(cleanup)

test('Render CheckBox and toggle behavior', () => {
    const { container } = render(<CheckBox />)
    // Snapshot demo
    expect(container.firstChild).toMatchSnapshot()
})

test('Toggle CheckBox ', () => {
    const { container } = render(<CheckBox />)
    const input = container.firstChild

    expect(input!.textContent).toContain('no')

    fireEvent.click(input!.nextSibling!.nextSibling as Element)
    waitForDomChange({ container })

    expect(input!.textContent).toContain('yes')
})

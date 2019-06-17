import { cleanup, fireEvent, render, waitForDomChange } from '@testing-library/react'
import React from 'react'
import { CheckBox } from './CheckBox'

afterEach(cleanup)

test('Render CheckBox', () => {
    const { container } = render(<CheckBox />)
    expect(container).toMatchSnapshot()
})

test('Toggle CheckBox ', () => {
    const { container } = render(<CheckBox />)
    const label = container.firstChild
    expect(label!.textContent).toContain('no')

    fireEvent.click(label!.nextSibling!.nextSibling as Element)
    waitForDomChange({ container })
    expect(label!.textContent).toContain('yes')
})

import { shallow } from 'enzyme'
import React from 'react'
import { FitfabLogo } from './FitfabLogo'

test('Render Fitfab logo with default props', () => {
    const logo = shallow(<FitfabLogo />)

    // Snapshot demo
    expect(logo).toMatchSnapshot()
})

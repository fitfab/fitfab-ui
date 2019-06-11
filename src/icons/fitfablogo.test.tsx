import { shallow } from 'enzyme'
import React from 'react'
import { FitfabLogo } from './FitfabLogo'

test('this should test the custom hook', () => {
    const logo = shallow(<FitfabLogo />)
    expect(logo).toMatchSnapshot()
})

import React from 'react'
import { storiesOf } from '@storybook/react'

import { FitfabLogo } from '../lib/index'

storiesOf('Fitfab UI', module).add('FitfabLogo', () => {
    return (
        <FitfabLogo
            className="js_triggerFitfab"
            aria-label="Fitfab"
            brandColor='#FF4158'
            height='43px'
            width='159px'
        />
    )
})

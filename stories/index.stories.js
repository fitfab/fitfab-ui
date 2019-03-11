import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withKnobs, text, boolean, number, object } from '@storybook/addon-knobs'

import { prettyDate, FitfabLogo } from '../lib/index'

storiesOf('Fitfab UI', module).add('FitfabLogo', () => {
    return (
        <FitfabLogo
            className="js_triggerFitfab"
            aria-label="Fitfab"
            brandColor={text('brandColor', '#FF4158')}
            height={text('height', '43px')}
            width={text('width', '159px')}
        />
    )
})

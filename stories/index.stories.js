import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withKnobs, text, boolean, number, object } from '@storybook/addon-knobs'

import { prettyDate, FitfabLogo } from '../lib/index'

storiesOf('Fitfab UI', module)
    .add('logo', () => {
        return (
            <FitfabLogo
                aria-label="Fitfab"
                brandColor={text('brandColor', '#FF4158')}
                height={number('height', 43)}
                width={number('width', 159)}
            />
        )
    })
    .add('prettyDate', () => (
        <p>
            {text('Label', 'Hello Storybook')} {prettyDate('08/02/1966')}
        </p>
    ))

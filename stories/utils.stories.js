import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withKnobs, text, boolean, number, object } from '@storybook/addon-knobs'

import { prettyDate } from '../lib/index'

storiesOf('Utils', module)
    .add('Date: 08/02/1966', () => (
        <p>
            {text('custom', '08/02/1966')} - {prettyDate('08/02/1966')}
        </p>
    ))
    .add('Date: today', () => (
        <p>
            {text('default', 'today')} - {prettyDate()}
        </p>
    ))

import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withKnobs, text, boolean, number, object } from '@storybook/addon-knobs'

import { prettyDate } from '../lib/index'

storiesOf('Fitfab Utils', module).add('prettyDate', () => (
    <p>
        {text('Label', 'Pretty Date?')} {prettyDate('08/02/1966')}
    </p>
))

import React from 'react'
import { storiesOf } from '@storybook/react'
import { prettyDate } from '../lib/index'

storiesOf('Fitfab Utils', module).add('prettyDate', () => (
    <p>
       {prettyDate('08/02/1966')}
    </p>
))

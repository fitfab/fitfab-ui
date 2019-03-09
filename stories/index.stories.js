import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import { prettyDate, FitfabLogo } from '../lib/index'

storiesOf('Fitfab UI', module)
    .add('logo', () => <FitfabLogo />)
    .add('prettyDate', () => <p>{prettyDate('08/02/1966')}</p>)

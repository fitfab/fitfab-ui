import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withKnobs, text, boolean, number, object } from '@storybook/addon-knobs'

import { CheckBox } from '../lib/index'

storiesOf('Form', module).add('Form', () => {
    return <CheckBox className="js_triggerFitfab" aria-label="cheked" />
})

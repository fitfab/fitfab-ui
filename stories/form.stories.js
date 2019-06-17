import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withKnobs, text, boolean, number, object } from '@storybook/addon-knobs'

import { CheckBox, RadioInput } from '../lib/index'

storiesOf('Form', module)
    .add('CheckBox', () => {
        return (
            <div>
                <CheckBox
                    id="yes"
                    className="js_triggerCheckbox"
                    aria-label="cheked"
                    name="openTrigger"
                    value="yes"
                    label="yes"
                />
                <CheckBox
                    id="no"
                    className="js_triggerCheckbox"
                    aria-label="cheked"
                    name="openTrigger"
                    value="no"
                    label="no"
                />
            </div>
        )
    })
    .add('Radio', () => {
        return (
            <div>
                <RadioInput
                    className="js_triggerRadio"
                    aria-label="radio"
                    name="yesLikeCode"
                    id="yes"
                    value="yes?"
                    selected={true}
                />
                <RadioInput className="js_triggerRadio" aria-label="radio" name="yesLikeCode" id="no" value="no?" />
            </div>
        )
    })

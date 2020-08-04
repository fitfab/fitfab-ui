import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withKnobs, text, boolean, number, object } from '@storybook/addon-knobs'

import { CheckBox, RadioInput, TextInput } from '../lib/index'

storiesOf('Form', module)
.add('Text Input', () => {
    return (
        <div>
            <TextInput
                className="js_inputName"
                name="firstname"
                value=""
                label="First Name"
                required
                autocomplete
            />
        </div>
    )
})
    .add('CheckBox', () => {
        return (
            <div>
                <CheckBox
                    id="yes"
                    className="js_triggerCheckbox"
                    aria-label="cheked"
                    name="openTrigger"
                    value="yes"
                    label="yes, blue is my color"
                />
                <CheckBox
                    id="no"
                    className="js_triggerCheckbox"
                    aria-label="cheked"
                    name="openTrigger"
                    value="no"
                    label="no, I do not like blue"
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
                    value="React virtual DOM"
                    selected={true}
                />
                <RadioInput
                    className="js_triggerRadio"
                    aria-label="radio"
                    name="yesLikeCode"
                    id="no"
                    value="Svelte compiler"
                />
            </div>
        )
    })

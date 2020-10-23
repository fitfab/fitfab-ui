/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react'
import { CheckBox, RadioInput, TextInput, SelectInput } from '../lib/index'

export default { title: 'Form/inputs' }

export const textInput = () => (
    <TextInput className="js_inputName" name="firstname" value="" label="First Name" required />
)

export const CheckboxInput = () => (
    <div>
        <CheckBox
            id="color-blue"
            className="js_triggerCheckbox"
            aria-label="cheked"
            name="colors"
            value="blue"
            label="yes, blue please"
        />
        <CheckBox
            id="color-red"
            className="js_triggerCheckbox"
            aria-label="cheked"
            name="colors"
            value="red"
            label="yes, red as well"
        />
    </div>
)

export const radioInput = () => (
    <div>
        <RadioInput
            className="js_triggerRadio"
            aria-label="radio"
            name="yesLikeCode"
            id="yes"
            value="yes"
            selected={true}
        />
        <RadioInput className="js_triggerRadio" aria-label="radio" name="yesLikeCode" id="no" value="no" />
    </div>
)

export const selectInput = () => (
    <div>
        <SelectInput
            className="js_triggerRadio"
            aria-label="radio"
            name="yesLikeCode"
            id="yes"
            value="React virtual DOM"
            selected={true}
        >
            <option>hello</option>
            <option>more</option>
            <option>less</option>
        </SelectInput>
    </div>
)

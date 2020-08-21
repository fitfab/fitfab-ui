import React from 'react'
import { CheckBox, RadioInput, TextInput, SelectInput } from '../lib/index'

export default { title: 'Form/inputs' };

export const textInput = ()=> (
    <TextInput
        className="js_inputName"
        name="firstname"
        value=""
        label="First Name"
        required
        autocomplete
    />
)

export const CheckboxInput = ()=> (
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

export const radioInput = ()=> (
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

export const selectInput = ()=> (
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
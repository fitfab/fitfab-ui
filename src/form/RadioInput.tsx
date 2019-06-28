import React from 'react'
import styled from 'styled-components'

const RadioInputView = styled.input`
    &[type='radio'] {
        display: none;
    }

    & + label {
        box-sizing: border-box;
        display: inline-block;
        height: 24px;
        line-height: 24px;
        min-width: auto;
        margin: 0 12px 0 40px;
        cursor: pointer;
        position: relative;
    }
    & + label:before {
        border: 1px solid #999;
        border-radius: 24px;
        display: block;
        content: '';
        height: 24px;
        width: 24px;
        line-height: 1.7;
        text-align: center;
        position: absolute;
        left: -40px;
    }
    &:checked + label:before {
        box-shadow: inset 0px 0px 1px 1px green;
        border-color: green;
    }
    &:checked + label:after {
        background: green;
        display: block;
        content: '';
        border-radius: 12px;
        color: green;
        height: 12px;
        width: 12px;

        position: absolute;
        left: -33px;
        top: 7px;
    }
`

export interface RadioInputProps {
    name?: string
    id?: string
    value?: string
    selected?: boolean
}

export const RadioInput: React.FC<RadioInputProps> = (props: RadioInputProps) => {
    const { name, id, value } = props
    return (
        <React.Fragment>
            <RadioInputView name={name} id={id} type="radio" value={value} />
            <label htmlFor={id}>{value}</label>
        </React.Fragment>
    )
}

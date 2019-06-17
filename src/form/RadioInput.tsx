import React from 'react'
import styled from 'styled-components'
import { useToggle } from '../utils/use-toggle'

const RadioInputView = styled.input`
    &[type='radio'] {
        display: none;
    }

    & + label {
        display: inline-block;
        height: 24px;
        line-height: 2;
        min-width: auto;
        margin: 0 0 0 40px;
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
    &:checked + label:after {
        display: block;
        content: '';
        border-left: 2px solid green;
        border-bottom: 2px solid green;
        color: green;
        height: 4px;
        width: 12px;
        transform: rotate(-45deg);
        position: absolute;
        left: -34px;
        top: 8px;
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

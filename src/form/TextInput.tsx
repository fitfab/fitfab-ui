import React from 'react'
import styled from 'styled-components'

const InputView = styled.div`
    position: relative;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    max-width: 320px;
    height: 40px;
    width: 100%;

    & > * {
        box-sizing: border-box;
        color: #666;
        font-size: 16px;
    }

    & > input[type='text'] {
        height: 100%;
        width: 100%;
        padding: 16px 0 0 0;
        border: 0;
        border-bottom: 1px solid #ccc;
        outline: none;
    }

    & > label {
        color: #000;
        transition: all 300ms ease-in-out;
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
        pointer-events: none;
        height: 100%;
        width: 100%;
        padding: 16px 0 0 0;
    }

    /* When the input is focus or filled in move the label up */
    & > input:valid + label,
    & > input:focus + label {
        transform: translate(-30px, -20px) scale(0.8, 0.8);
    }
    & > input:valid,
    & > input:focus {
        border-bottom: 2px solid green;
    }

    /* Firefox: removes box-shadow */
    input:invalid {
        box-shadow: none;
    }
`

export interface TextInputProps {
    name?: string
    id?: string
    value?: string
    label?: string
    autoComplete?: boolean
    type?: string
}

export const TextInput: React.FC<TextInputProps> = ({ name, id, value, label, autoComplete, type = 'text' }) => {
    return (
        <InputView>
            <input name={name} id={name} type={type} autoComplete={autoComplete ? 'auto' : 'off'} required />
            <label htmlFor={name}>{label}</label>
        </InputView>
    )
}

import React from 'react'
import styled from 'styled-components'

const InputView = styled.div`
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    position: relative;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    height: 40px;

    & > * {
        box-sizing: border-box;
        font-size: 16px;
    }

    & > input[type='text'] {
        border-radius: 4px;
        color: #222;
        height: 100%;
        width: 100%;
        letter-spacing: 1px;
        padding: 16px 0 0 0;
        border: 0;
        outline: none;
        text-indent: 9px;
    }

    & > label {
        color: #333;
        transition: all 300ms ease-in-out;
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
        pointer-events: none;
        padding: 0 0 0 0;
        transform: translate(8px, -8px);
    }

    /* When the input is focus or filled in move the label up */
    & > input:valid + label,
    & > input:focus + label {
        transform: translate(0, -18px) scale(0.8, 0.8);
    }
    & > input:valid,
    & > input:focus {
        background: rgba(223, 223, 223, 0.2);
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

export const TextInput: React.FC<TextInputProps> = ({
    name,
    id,
    value,
    label,
    autoComplete,
    type = 'text',
    ...rest
}) => {
    return (
        <InputView>
            <input
                name={name}
                id={id}
                type={type}
                autoComplete={autoComplete ? 'auto' : 'off'}
                defaultValue={value}
                required
                {...rest}
            />
            <label htmlFor={name}>{label}</label>
        </InputView>
    )
}

import React, { ReactChildren } from 'react'
import styled from 'styled-components'

// inspired by https://www.youtube.com/watch?v=bB14uo0Tu5A
// https://animista.net/play/basic/rotate-90/rotate-90-right-cw

const SelectView = styled.div`
    background: lime;
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

    & > select {
        height: 100%;
        width: 100%;
        padding: 20px 0 0 8px;
        border: 0;
        border-bottom: 1px solid #ccc;
        outline: none;
    }
`

export interface SelectInputProps {
    name?: string
    id?: string
    value?: string
    label?: string
    autoComplete?: boolean
    type?: string
    children?: ReactChildren
}

export const SelectInput: React.FC<SelectInputProps> = ({ children, ...rest }) => {
    return (
        <SelectView>
            <select {...rest}>{children}</select>
        </SelectView>
    )
}

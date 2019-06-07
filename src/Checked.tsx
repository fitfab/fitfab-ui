import React from 'react'
import styled from 'styled-components'
import { useToggle } from './utils/use-toggle'

export interface ViewProps {
    active: boolean
}
const View = styled.div<ViewProps>`
    cursor: pointer;
    background: ${({ active }) => (active ? '#46c703' : '#ADBBC5')};
    border-radius: 100%;
    width: 48px;
    height: 48px;
    text-align: center;
    line-height: 44px;
    font-family: sans-serif;
    font-size: 24px;
    color: #fff;
`

export const Checked = () => {
    const [open, toggle] = useToggle(false)
    const handleClick = () => {
        toggle(open)
    }
    return (
        <View onClick={handleClick} active={open}>
            {open ? 'x' : '+'}
        </View>
    )
}

import React, { ReactChildren } from 'react'
import styled from 'styled-components'

export interface FlexibleProps {
    children?: ReactChildren
    width?: string
}

const View = styled.div<FlexibleProps>`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin: auto;
    width: ${p => p.width};
    height: 100vh;

    & > * {
        border: 1px solid #ccc;
        flex-basis: 320px;
        flex-grow: 1;
        padding: 16px;
    }
`

export const Flexible = ({ children, width = '40%' }: FlexibleProps) => {
    return <View width={width}>{children}</View>
}

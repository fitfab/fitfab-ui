import React, { ReactChildren } from 'react'
import styled from 'styled-components'

export interface FlexibleProps {
    children?: ReactChildren
    width?: string
}

const View = styled.div<FlexibleProps>`

  background:
      /* linear-gradient(45deg, rgba(150,0,0,.8), rgba(255,0,0,0) 70.71%), */
    linear-gradient(177deg, rgba(255,76,144,0.7) 0%, rgba(233,148,233,0.3) 70.71%),
    linear-gradient(-45deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),
    linear-gradient(90deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%);

    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin: auto;
    width: ${p => p.width};
    height: 100vh;

    & > * {
        border: 1px solid #ccc;
        flex-basis:320px;
        flex-grow: 1;
        padding: 16px;
 
    }
`

export const Flexible = ({children, width='40%'}: FlexibleProps)=> {
    return <View width={width}>{children}</View>
}
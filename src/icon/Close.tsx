import React from 'react'

import styled from 'styled-components'

export interface CloseProps {
    brandColor?: string
    defaultColor?: string
    width?: string
    height?: string
}
const SVG: React.SFC<CloseProps> = props => {
    const {
        brandColor = '#FF4158', // default brand color
        defaultColor = '#ADBBC5', // default color
        height = 43,
        width = 159,
        ...rest
    } = props
    return (
        <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
            <path d="M1 1L17 17" stroke={defaultColor} />
            <path d="M17 1L1 17" stroke={defaultColor} />
        </svg>
    )
}

export const CloseIcon = styled(SVG)`
    height: ${p => p.height};
    width: ${p => p.width};
`

CloseIcon.displayName = 'CloseIcon'

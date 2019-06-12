import React from 'react'

import styled from 'styled-components'

export interface FitfabProps {
    brandColor?: string
    defaultColor?: string
    width?: string
    height?: string
}
const SVG: React.SFC<FitfabProps> = props => {
    const {
        brandColor = '#FF4158', // default brand color
        defaultColor = '#ADBBC5', // default color
        height = 43,
        width = 159,
        ...rest
    } = props
    return (
        <svg viewBox="0 0 159 43" {...rest}>
            <g fill="none" fillRule="evenodd">
                <path fill={defaultColor} d="M34 .05h39.719v10.606H60.184V43H46.912V10H34z" />
                <path
                    d="M100.486.05H75.643c-4.141 0-7.32 1.026-9.537 3.077-2.216 2.05-3.325 4.59-3.325 7.617 0 2.54.791 4.717 2.373 6.533 1.055 1.211 2.598 2.168 4.63 2.871-3.087.743-5.357 2.017-6.812 3.824-1.455 1.806-2.183 4.077-2.183 6.811 0 2.227.518 4.229 1.553 6.006a11.435 11.435 0 0 0 4.248 4.219c1.113.644 2.793 1.113 5.039 1.406 2.988.39 4.97.586 5.947.586h22.91V.05zM87.098 16.897h-5.772c-2.07 0-3.51-.356-4.321-1.069-.81-.713-1.216-1.743-1.216-3.09 0-1.25.405-2.227 1.216-2.93.81-.703 2.222-1.055 4.233-1.055h5.86v8.144zm0 16.875H80.33c-2.285 0-3.896-.405-4.834-1.215-.937-.81-1.406-1.9-1.406-3.267 0-1.27.464-2.29 1.391-3.061.928-.772 2.554-1.158 4.878-1.158h6.739v8.701zM30.4 17h11.924v26H30.4z"
                    fill={defaultColor}
                />
                <path
                    fill={brandColor}
                    d="M.453.05H34V10H13.783v7h16.64v8.451h-16.64V43H.453zM158.266.05h-32.813V10h19.483v7h-16.641v8.451h16.64V43h13.33z"
                />
                <path
                    d="M126.516 35.91h-15.118l-2.08 7.09H95.754L111.896.05h14.473L142.512 43h-13.887l-2.11-7.09zm-2.784-9.287l-4.746-15.44-4.716 15.44h9.462z"
                    fill={defaultColor}
                />
            </g>
        </svg>
    )
}

export const FitfabLogo = styled(SVG)`
    height: ${p => p.height};
    width: ${p => p.width};
`

FitfabLogo.displayName = 'FitfabLogo'

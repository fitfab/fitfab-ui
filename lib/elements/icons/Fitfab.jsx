import React from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'
import colors from '../../styles/colors'

function Icon({ fill, stroke, height, width }) {
    console.log(fill, stroke, height, width)
    return (
        <svg
            height={height || '24'}
            viewBox='0 0 24 24'
            width={width || '24'}
            xmlns='http://www.w3.org/2000/svg'
        >
            <g
                fill={colors[fill]}
                fillRule='evenodd'
                id='ff-icon'
            >
                <polygon
                    id='f1'
                    points='1.77635684e-15 0 0 20 4 20 4 12 11 12 11 8 4 8 4 4 13 4 13 0'
                />
                <polygon
                    id='f2'
                    points='11 4 11 24 15 24 15 16 22 16 22 12 15 12 15 8 24 8 24 4'
                    transform='rotate(180 17.5 14)'
                />
            </g>
        </svg>
    )
}

Icon.propTypes = {
    fill: string,
    height: string,
    stroke:string,
    width: string
}

Icon.defaultProps = {
    fill: 'mediumGray'
}

export const Fitfab = styled(Icon)`
    color: ${({ color }) => colors[color]};
    display: inline-block;
    margin: 5px;
`



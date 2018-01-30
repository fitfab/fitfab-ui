import React from 'react'
import { String } from 'prop-types'
import styled from 'styled-components'
import colors from '../../styles/colors'

function Icon({ className, fChar, otherChar, height, width }) {
    console.log(height, width)
    return (
        <svg
            className={className}
            viewBox="0 0 158 45"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g fill="none" fillRule="evenodd" id="Page-1">
                <polygon
                    fill={colors[fChar]}
                    id="f"
                    points="0 0 30 0 30 10 13 10 13 16 27 16 27 26 13 26 13 44 0 44"
                />
                <polygon
                    fill={colors[fChar]}
                    id="f2"
                    points="124 0 158 0 154 10 137 10 137 16 152 16 151 26 137 26 137 44 124 44"
                    transform="matrix(-1 0 0 1 282 0)"
                />
                <polygon
                    fill={colors[otherChar]}
                    id="t"
                    points="30 7.10542736e-15 30 10 44 10 44 44 57 44 57 10 61 10 61 0"
                />
                <polygon
                    fill={colors[otherChar]}
                    id="i"
                    points="27 16 39 16 39 44 27 44"
                />
                <path
                    d="M98,-7.10542736e-15 L98,44.0950248 C79.3575846,43.9981463 69.7041799,43.9981463 69.0397858,44.0950248 C61.0344238,43.2241211 51.1218262,26.5742187 68.0905762,20.0234375 C60.9528809,17.8494466 58.6008301,11.1749674 61.0344238,-7.10542736e-15 L98,-7.10542736e-15 Z M86.1748047,8.00292969 C82.1069337,8.00292969 79.089003,8.00292969 77.1210126,8.00292969 C73.2001953,10.4238281 73.5595703,14.5888672 77.1210126,17.0712891 C78.8544651,17.0712891 81.8723958,17.0712891 86.1748047,17.0712891 L86.1748047,8.00292969 Z M86.1748047,25.0029297 C80.7629991,25.0029297 76.9092738,25.0029297 74.6136287,25.0029297 C70.7507324,27.5683594 71.4306641,32.4628906 74.6136287,34.0712891 C76.9446145,34.0712891 80.7983398,34.0712891 86.1748047,34.0712891 L86.1748047,25.0029297 Z"
                    fill={colors[otherChar]}
                    id="Combined-B"
                />
                <path
                    d="M141.077881,44 L128.07666,44 L125.060547,36.8886719 L110.067139,36.8886719 L108.041504,44 L98,44 L98,33.0515137 L110.393311,0 L124.543701,0 L141.077881,44 Z M118.070557,12.0009766 L117.229492,12.0009766 L112.157227,27.9831543 L123.200684,27.9831543 L118.070557,12.0009766 Z"
                    fill={colors[otherChar]}
                    id="Combined-A"
                />
            </g>
        </svg>
    )
}

Icon.propTypes = {
    className: String,
    fChar: String,
    height: String,
    otherChar: String,
    width: String,
}

Icon.defaultProps = {
    width: '158px',
    height: '48px',
    fChar: 'gray',
    otherChar: 'mediumGray',
}

export const FitfabLogo = styled(Icon)`
    height: ${({ height }) => height};
    width: ${({ width }) => width};
`

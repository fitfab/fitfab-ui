import styled from 'styled-components'
import * as colors from '../../styles/colors'

export const H1 = styled.h1`
    color: ${props => props.reverse ? colors['white'] : colors['dark']};
    font-family: Arial, Helvetica, sans-serif;
    font-size: 24px;
    font-weight: 100;
    margin: 0;
    letter-spacing: 2px;
`

export const H2 = H1.withComponent('h2').extend`
    font-size: 20px;
`
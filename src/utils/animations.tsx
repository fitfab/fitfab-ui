import { keyframes } from 'styled-components'

export const ScaleUP = keyframes`
0% {
    transform: scale(0.8) translate(-65%, -65%);
    opacity: 0.7;
}

100% {
    transform: scale(1) translate(-50%, -50%);
    opacity: 1;
}
`

import { keyframes } from 'styled-components'

export const ScaleUP = keyframes`
0% {
    transform: scale(0.75) translate(-65%, -65%);
    opacity: 0.5;
}

100% {
    transform: scale(1) translate(-50%, -50%);
    opacity: 1;
}
`

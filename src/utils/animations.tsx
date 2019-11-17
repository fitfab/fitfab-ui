import { keyframes } from 'styled-components'

export const ScaleUP = keyframes`
0% {
    transform: scale(0.75) translate(-65%, -65%);
    opacity: 0.7;
}

100% {
    transform: scale(1) translate(-50%, -50%);
    opacity: 1;
}
`

export const Expand = keyframes`
0% {
    transform: scale(0.3) rotate(-45deg) ;
    opacity: 0.7;
}

100% {
    transform: scale(1.1) rotate(-45deg);
    opacity: 1;
}
`

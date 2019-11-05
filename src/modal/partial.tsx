import styled from 'styled-components'

export const ModalView = styled.div`
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50vw;
    height: 50vh;
    padding: 24px;
`

export const CloseButton = styled.button`
    border: none;
    display: block;
    position: absolute;
    top: 16px;
    right: 16px;
    padding: 0;
    margin: 0;
`

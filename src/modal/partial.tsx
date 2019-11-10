import styled from 'styled-components'
import { ScaleUP } from '../utils/animations'

export interface BackdropProps {
    open?: boolean
}
export const BackDrop = styled.div<BackdropProps>`
    background: ${p => (p.open ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0)')};
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 0;
`
export interface ModalViewProps {
    height?: string
    width?: string
}
export const ModalView = styled.div<ModalViewProps>`
    animation: ${ScaleUP} 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    background: #fff;
    box-shadow: 0px 0px 7px 1px rgba(0, 0, 0, 0.3);
    border-radius: 4px;
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 50%;
    width: ${p => p.width || '50vw'};
    height: ${p => p.height || '50vh'};
    padding: 16px;
`
export const Content = styled.div`
    overflow-y: auto;
    overflow-x: hidden;
    position: absolute;
    top: 48px;
    right: 16px;
    bottom: 24px;
    left: 16px;
`
export const Title = styled.h2`
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 100;
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

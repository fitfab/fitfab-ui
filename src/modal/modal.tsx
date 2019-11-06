import React from 'react'
import { CloseIcon } from '../icon/Close'
import { useClickOutside } from '../utils/useClickOutside'
import { CloseButton, Content, ModalView, Title } from './partial'

export interface ModalProps {
    open: boolean
    toggleOpen: () => void
    width?: string
    height?: string
    title?: string
}

export const Modal: React.FC<ModalProps> = ({ open, toggleOpen, children, title }) => {
    const ref = React.useRef<HTMLDivElement>(null)
    const handleClick = (e: React.SyntheticEvent<HTMLElement>) => {
        e.preventDefault()
        toggleOpen()
    }

    useClickOutside(ref, toggleOpen, open)
    return (
        open && (
            <ModalView ref={ref}>
                {title && <Title>{title}</Title>}
                <CloseButton onClick={handleClick}>
                    <CloseIcon height="16px" width="16px;" />
                </CloseButton>
                <Content>{children}</Content>
            </ModalView>
        )
    )
}

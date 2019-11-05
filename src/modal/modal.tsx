import React from 'react'
import { CloseIcon } from '../icon/Close'
import { useClickOutside } from '../utils/useClickOutside'
import { CloseButton, ModalView } from './partial'

export interface ModalProps {
    open: boolean
    toggleOpen: () => {}
    width?: string
    height?: string
}

export const Modal: React.FC<ModalProps> = ({ open, toggleOpen, children }) => {
    const ref = React.useRef<HTMLDivElement>(null)
    const handleClick = (e: React.SyntheticEvent<HTMLElement>) => {
        e.preventDefault()
        toggleOpen()
    }

    useClickOutside(ref, toggleOpen)
    return (
        open && (
            <ModalView ref={ref}>
                <CloseButton onClick={handleClick}>
                    <CloseIcon height="16px" width="16px;" />
                </CloseButton>
                {children}
            </ModalView>
        )
    )
}

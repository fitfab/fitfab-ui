import React from 'react'
import { CloseIcon } from '../icon/Close'
import { useClickOutside } from '../utils/useClickOutside'
import { useLockBodyScroll } from '../utils/use-lock-body-scroll'

import { BackDrop, CloseButton, Content, ModalView, Title } from './partial'

export interface ModalProps {
    open: boolean
    toggleOpen: () => void
    width?: string
    height?: string
    title?: string
    children?: React.ReactNode
}

export function Modal({ open, toggleOpen, children, title, width, height }: ModalProps): React.ReactNode {
    const ref = React.useRef<HTMLDivElement>(null)
    useLockBodyScroll(open)
    useClickOutside(ref, toggleOpen, open)
    const handleClick = (e: React.SyntheticEvent<HTMLElement>) => {
        e.preventDefault()
        toggleOpen()
    }

    return (
        open && (
            <BackDrop open={open}>
                <ModalView ref={ref} width={width} height={height}>
                    {title && <Title>{title}</Title>}
                    <CloseButton onClick={handleClick}>
                        <CloseIcon height="16px" width="16px;" />
                    </CloseButton>
                    <Content>{children}</Content>
                </ModalView>
            </BackDrop>
        )
    )
}

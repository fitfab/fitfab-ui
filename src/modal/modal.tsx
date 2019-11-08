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

export function Modal({ open, toggleOpen, children, title }: ModalProps) {
    const ref = React.useRef<HTMLDivElement>(null)
    const handleClick = (e: React.SyntheticEvent<HTMLElement>) => {
        e.preventDefault()
        toggleOpen()
    }

    useLockBodyScroll(open)
    useClickOutside(ref, toggleOpen, open)
    return (
        open && (
            <>
                <BackDrop />
                <ModalView ref={ref}>
                    {title && <Title>{title}</Title>}
                    <CloseButton onClick={handleClick}>
                        <CloseIcon height="16px" width="16px;" />
                    </CloseButton>
                    <Content>{children}</Content>
                </ModalView>
            </>
        )
    )
}

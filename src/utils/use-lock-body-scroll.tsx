import React from 'react'
export function useLockBodyScroll(active: boolean) {
    React.useLayoutEffect(() => {
        // Get original body overflow
        const originalStyle = window.getComputedStyle(document.body).overflow
        if (active) {
            // Prevent scrolling on mount
            document.body.style.overflow = 'hidden'
        }

        return () => {
            // Reset to original body overflow
            document.body.style.overflow = originalStyle
        }
    }, [active])
}

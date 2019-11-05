import React from 'react'

export function useClickOutside(ref: React.RefObject<HTMLDivElement>, handler: () => {}) {
    React.useEffect(() => {
        const listener = (event: any) => {
            // Do nothing if clicking ref's element or descendent elements
            if (!ref.current || ref.current.contains(event.target)) {
                return
            }

            handler()
        }

        document.addEventListener('mousedown', listener)
        document.addEventListener('touchstart', listener)

        return () => {
            document.removeEventListener('mousedown', listener)
            document.removeEventListener('touchstart', listener)
        }
    }, []) // Empty array ensures that effect is only run on mount and unmount
}

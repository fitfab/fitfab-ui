import React from 'react'

export function useClickOutside(ref: React.RefObject<HTMLDivElement>, cb: () => void, active: boolean) {
    React.useEffect(() => {
        const listener = (event: Event) => {
            if (active) {
                // Do nothing if clicking ref's element or descendent elements
                if (!ref.current || ref.current.contains(event.target as Element)) {
                    return
                }

                cb()
            }
        }

        document.addEventListener('mousedown', listener)
        document.addEventListener('touchstart', listener)

        return () => {
            document.removeEventListener('mousedown', listener)
            document.removeEventListener('touchstart', listener)
        }
    }, [ref, cb, active]) // Empty array ensures that effect is only run on mount and unmount
}

import React from 'react'
export interface UseOnViewProps {
    ref: React.RefObject<HTMLDivElement>
    options: {
        rootMargin?: string
    }
}
export function useOnView({ ref, options }: UseOnViewProps) {
    // State and setter for storing whether element is visible
    const [isIntersecting, setIntersecting] = React.useState(false)

    React.useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            // Update our state when observer callback fires
            setIntersecting(entry.isIntersecting)
        }, options)
        if (ref.current) {
            observer.observe(ref.current)
        }
        return () => {
            observer.unobserve(ref.current!)
        }
    }, []) // Empty array ensures that effect is only run on mount and unmount

    return isIntersecting
}

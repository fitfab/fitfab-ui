import React from 'react'
import { Button, CarouselView, ViewPort } from './partials'

export interface CarouselProps {
    width?: string
    height?: string
}

export const Carousel: React.FC<CarouselProps> = ({ children, width = '100%', height = '320px' }) => {
    const carouselViewRef = React.useRef<HTMLDivElement>(null)
    const scrollby = React.useRef(0)
    const [postion, setPosition] = React.useState({ x: 0 })

    React.useEffect(() => {
        scrollby.current = (carouselViewRef.current?.parentNode?.clientWidth * 65) / 100
        carouselViewRef!.current!.scrollBy!({
            behavior: 'smooth',
            left: postion.x,
        })
    }, [postion])

    const direction = (clientX: number) => {
        return window.innerWidth / 2 > clientX ? -scrollby.current : scrollby.current
    }

    const moveBy = (e: React.MouseEvent<HTMLElement>) => {
        e.persist()
        setPosition({
            x: direction(e.clientX),
        })
    }
    return (
        <ViewPort className="viewport" width={width} height={height}>
            <CarouselView ref={carouselViewRef}>{children}</CarouselView>
            <Button onClick={moveBy} aria-label="previous"></Button>
            <Button onClick={moveBy} aria-label="next"></Button>
        </ViewPort>
    )
}

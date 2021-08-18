import React from 'react'
import { Button, CarouselView, ViewPort } from './partials'

export interface CarouselProps {
    width?: string
    height?: string
}

export const Carousel: React.FC<CarouselProps> = ({ children, width = '100%', height = '320px' }) => {
    const carouselViewRef = React.useRef<HTMLDivElement>(null)
    const scrollby = React.useRef(caculateScroll(width))
    const [postion, setPosition] = React.useState({ x: 0 })

    React.useEffect(() => {
        carouselViewRef!.current!.scrollBy!({
            behavior: 'smooth',
            left: postion.x,
        })
    }, [postion])

    function caculateScroll(carouselWidth: string) {
        // Grabs the digits and parses into integer
        let scrollAmount = parseInt(carouselWidth.match(/(\d+)/)![0]!, 10)
        // if width is less than 100 we assume it's percentage base
        if (scrollAmount <= 100) {
            scrollAmount = window.innerWidth
        }
        return (scrollAmount * 60) / 100
    }

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

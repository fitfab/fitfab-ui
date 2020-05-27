import React from 'react'
import { CssCarouselProps, Button, CarouselView, ViewPort } from './partials'

export const Carousel: React.FC<CssCarouselProps> = ({
    children,
    width = '780px',
    height = '320px',
}) => {
    const ref = React.useRef<HTMLDivElement>(null)
    const scrollby = React.useRef(caculateScroll(width))
    const [state, setState] = React.useState({ x: 0 })

    React.useEffect(() => {
        ref.current!.scrollBy({
            behavior: 'smooth',
            left: state.x,
        })
    }, [state])

    function caculateScroll(val: string) {
        let carouselWidth = parseInt(val.match(/(\d+)/)![0]!, 10)
        // if width is less than 100 we assume it's percentage base
        if (carouselWidth <= 100) {
            carouselWidth = window.innerWidth
        }
        return (carouselWidth * 50) / 100
    }

    const direction = (clientX: number) => {
        return window.innerWidth / 2 > clientX
            ? -scrollby.current
            : scrollby.current
    }

    const moveBy = (e: React.MouseEvent<HTMLElement>) => {
        e.persist()
        setState({
            x: direction(e.clientX),
        })
    }
    return (
        <ViewPort className="viewport" width={width} height={height}>
            <CarouselView ref={ref}>{children}</CarouselView>
            <Button onClick={moveBy} aria-label="previous"></Button>
            <Button onClick={moveBy} aria-label="next"></Button>
        </ViewPort>
    )
}

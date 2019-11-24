import React from 'react'
import { CssCarouselProps, Button, Carousel, ViewPort } from './partials'

export const CssCarousel: React.FC<CssCarouselProps> = ({ children, width = '780px', height = '320px' }) => {
    const ref = React.useRef<HTMLDivElement>(null)
    const scrollby = React.useRef(caculateScroll(width))
    const [state, setState] = React.useState({ x: scrollby.current })

    React.useEffect(() => {
        ref.current!.scrollBy({
            behavior: 'smooth',
            left: state.x,
        })
    }, [state])

    function caculateScroll(val: string) {
        // \d+: Match one or more numbers
        const out = parseInt(val.match(/(\d+)/)![0]!, 10)

        if (out <= 100) {
            //   return ref.current.offsetWidth / 2;
            let x = (window.innerWidth * 25) / 100
            console.log('x: ', x)

            return x
        }
        console.log('out / 2')
        return out / 2
    }

    const direction = (clientX: number) => {
        const out = window.innerWidth / 2 > clientX ? -scrollby.current : scrollby.current
        return out
    }

    const moveBy = (e: React.MouseEvent<HTMLElement>) => {
        e.persist()
        setState({
            x: direction(e.clientX),
        })
    }

    return (
        <ViewPort className="viewport" width={width} height={height}>
            <Carousel ref={ref}>{children}</Carousel>
            <Button onClick={moveBy} aria-label="previous"></Button>
            <Button onClick={moveBy} aria-label="next"></Button>
        </ViewPort>
    )
}

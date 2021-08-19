/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react'
import styled from 'styled-components'
import { Carousel } from '../lib/index'
import images from './data/slides'

const list = [
    { width: '480px', height: 'auto', color: 'red' },
    { width: '480px', height: 'auto', color: 'purple' },
    { width: '280px', height: 'auto', color: 'pink' },
    { width: '680px', height: 'auto', color: 'lightblue' },
    { width: '780px', height: 'auto', color: 'orange' },
]

const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${p => p.width};
    background-color: ${p => p.color};
    color: #fff;
    font-size: 4rem;
`

export default { title: 'Carousel', component: Carousel }

export const carouselWide = () => (
    <Carousel>
        {images.map((slide, index) => (
            <img key={index} src={slide.src} alt={slide.alt} width={slide.width} />
        ))}
    </Carousel>
)

export const carouselFixed = () => (
    <Carousel width="780px">
        {list.map((slide, index) => (
            <Box key={index} width={slide.width} color={slide.color}>
                {slide.width}{' '}
            </Box>
        ))}
    </Carousel>
)

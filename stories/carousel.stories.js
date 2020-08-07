import React from 'react'
import { storiesOf } from '@storybook/react'

import { Carousel } from '../lib/index'
import images from './data/slides'

export default { title: 'Carousel/sizes' };

export const carouselWide = ()=> (
<Carousel width="100%">
            {images.map((slide, index) => (
                <img key={index} src={slide.src} alt={slide.alt} width={slide.width} />
            ))}
        </Carousel>
)

export const carouselFixed = ()=> (
    <Carousel width="780px">
                {images.map((slide, index) => (
                    <img key={index} src={slide.src} alt={slide.alt} width={slide.width} />
                ))}
            </Carousel>
    )



import React from 'react'
import { storiesOf } from '@storybook/react'

import { Carousel } from '../lib/index'
import images from './data/slides'

const CarouselStory = () => {
    console.log(images)
    return (
        <Carousel width="100%">
            {images.map((slide, index) => (
                <img key={index} src={slide.src} alt={slide.alt} width={slide.width} />
            ))}
        </Carousel>
    )
}

storiesOf('Carousel', module).add('default', () => {
    return (
        <div>
            <h2>Carousel</h2>
            <CarouselStory />
        </div>
    )
})

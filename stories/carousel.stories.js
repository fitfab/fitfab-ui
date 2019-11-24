import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withKnobs, text, boolean, number, object } from '@storybook/addon-knobs'

import { CssCarousel } from '../lib/index'
import images from './data/slides'

const CarouselStory = () => {
    console.log(images)
    return (
        <>
            <p>hello</p>
            <CssCarousel width="65%">
                {images.map((slide, index) => (
                    <img key={index} src={slide.src} alt={slide.alt} width={slide.width} />
                ))}
            </CssCarousel>
        </>
    )
}

storiesOf('Carousel', module).add('default', () => {
    return (
        <div>
            <CarouselStory />
        </div>
    )
})

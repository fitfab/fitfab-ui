import React from 'react'

import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react'
//import { linkTo } from "@storybook/addon-links";

import { H1, H2 } from '../build/index';

const stories = storiesOf('Headings', module);
// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
stories.addDecorator(withKnobs);

const css = {
    background: '#212121',
    padding: '20px'
}

stories
    .add('H1', () => (
        <div style={{ padding: '20px' }}>
            <H1>{text('Label', 'H1 Heading')}</H1>
        </div>

    ))
    .add('H1 reverse', () => {

        const reverse = boolean('reverse', true)
        return (
            <div style={css}>
                <H1 reverse={reverse}>
                    {text('Label', 'H1 Heading')}
                </H1>
            </div>
        )
    })
    .add('H2', () => {
        return (
            <div style={{ padding: '20px' }}>
                <H2>
                    {text('Label', 'H2 Heading')}
                </H2>
            </div>
        )
    })

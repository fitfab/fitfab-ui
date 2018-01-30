import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs/react'
import { withDocs } from 'storybook-readme'

import { Fitfab, FitfabLogo } from '../build/index'
import Readme from '../lib/elements/icons/README.md'

const stories = storiesOf('SVG Icons', module)
// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
stories.addDecorator(withKnobs)

const css = {
    background: '#212121',
    padding: '20px',
}

stories
    .add(
        'Default',
        withDocs(Readme, () => (
            <div style={{ padding: '20px' }}>
                <Fitfab />
            </div>
        ))
    )
    .add(
        'with fill',
        withDocs(Readme, () => {
            return (
                <div style={css}>
                    <Fitfab fill="brand" />
                </div>
            )
        })
    )
    .add(
        'Fitfab Logo',
        withDocs(Readme, () => {
            return (
                <div>
                    <FitfabLogo height="24px" />
                </div>
            )
        })
    )
    .add(
        'Fitfab Logo with custom color',
        withDocs(Readme, () => {
            return (
                <div>
                    <FitfabLogo
                        fChar="brand"
                        height="48px"
                        otherChar="lightGray"
                    />
                </div>
            )
        })
    )

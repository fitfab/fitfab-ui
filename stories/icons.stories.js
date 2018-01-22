import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react'
import { withDocs } from 'storybook-readme';

import { Fitfab } from '../build/index';
import ButtonReadme from '../lib/elements/buttons/README.md'

const stories = storiesOf('Icons', module);
// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
stories.addDecorator(withKnobs);

const css = {
    background: '#212121',
    padding: '20px'
}

stories
    .add('Default', withDocs(ButtonReadme, () => (
        <div style={{ padding: '20px' }}>
            <Fitfab />
        </div>

    )))
    .add('with fill', withDocs(ButtonReadme, () => {
        return (
            <div style={css}>
                <Fitfab fill="orange" />
            </div>
        )
    }))
    .add('outlined', withDocs(ButtonReadme, () => {
        return (
            <div style={css}>
                <Fitfab
                    fill="#666"
                    height="60"
                    stroke="#fff"
                    width="60"
                />
            </div>
        )
    }))

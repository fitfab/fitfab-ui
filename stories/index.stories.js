import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react'
import { withReadme, withDocs } from 'storybook-readme';

import { Button } from '../build/index';
import ButtonReadme from '../lib/elements/buttons/README.md'

const stories = storiesOf('Buttons', module);
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
            <Button onClick={action('clicked')}>{text('Label', 'get started')}</Button>

        </div>

    )))
    .add('reverse', withDocs(ButtonReadme, () => {

        const reverse = boolean('reverse', true)
        return (
            <div style={css}>
                <Button reverse={reverse} onClick={action('clicked')}>
                    {text('Label', 'get started')}
                </Button>
            </div>
        )
    }))
    .add('outlined', withDocs(ButtonReadme, () => {
        const outlined = boolean('outlined', true)
        return (
            <div style={css}>
                <Button outlined={outlined} onClick={action('clicked')}>
                    {text('Label', 'get started')}
                </Button>
            </div>
        )
    }))

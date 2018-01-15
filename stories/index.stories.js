import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
//import { linkTo } from "@storybook/addon-links";

import { Button } from '../build/index';

const css = {
    background: '#212121',
    padding: '20px'
}

storiesOf('Button', module)
    .add('Default', () => (
        <div style={{ padding: '20px' }}>
            <Button onClick={action('clicked')}>get started</Button>
        </div>
    ))
    .add('reverse', () => (
        <div style={css}>
            <Button reverse onClick={action('clicked')}>
                get started
            </Button>
        </div>
    ))
    .add('reverse outlined', () => (
        <div style={css}>
            <Button outlined onClick={action('clicked')}>
                get started
        </Button>
        </div>
    ))

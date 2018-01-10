import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
//import { linkTo } from "@storybook/addon-links";

import { Button } from '../build/index'

storiesOf('Button', module)
    .add('Default', () => (
        <Button onClick={action('clicked')}>get started</Button>
    ))
    .add('reverse', () => (
        <Button reverse onClick={action('clicked')}>
            get started
        </Button>
    ))
    .add('reverse outlined', () => (
        <Button reverse outlined onClick={action('clicked')}>
            get started
        </Button>
    ))

import { configure, addParameters } from '@storybook/react'
import { FitfabTheme } from './fitfabtheme'

addParameters({
    options: {
        theme: {
            brandTitle: 'fitfab-UI',
            brandUrl: 'https://github.com/fitfab/fitfab-ui',
            brandImage: 'http://fitfab.com/images/fitfab-logo.png',
        },
    },
})

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/)
function loadStories() {
    req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)

import { create } from '@storybook/theming'

export default create({
    base: 'light',

    colorPrimary: '#eee',
    colorSecondary: 'deepskyblue',

    // UI
    // appBg: 'white',
    // appContentBg: 'white',
    // appBorderColor: 'grey',
    // appBorderRadius: 20,

    // Typography
    fontBase: '"Open Sans", sans-serif',
    fontCode: 'monospace',

    // Text colors
    textColor: 'black',
    textInverseColor: 'rgba(255,255,255,0.9)',

    // Toolbar default and active colors
    barTextColor: 'silver',
    barSelectedColor: 'black',
    barBg: 'white',

    // Form colors
    inputBg: 'white',
    inputBorder: 'silver',
    inputTextColor: 'black',
    inputBorderRadius: 4,

    brandTitle: 'fitfab-UI',
    brandUrl: 'http://fitfab.com',
    brandImage: 'https://placehold.it/350x150',
})

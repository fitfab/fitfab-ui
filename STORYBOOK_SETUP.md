## Storybook 5 for React

1. install

    - npm install @storybook/react --save-dev

2. install dependencies

    - npm install react react-dom --save
    - npm install babel-loader @babel/core --save-dev

3. Configuration (simple) -- this file lives on `.storybook` folder

    - add a `config.js` file.

    ```js
    import { configure, addParameters, addDecorator } from '@storybook/react'
    import { withKnobs } from '@storybook/addon-knobs'
    // globally setup for addons -- `knobs`
    addDecorator(withKnobs())

    // automatically import all files ending in *.stories.js
    const req = require.context('../stories', true, /.stories.js$/)
    function loadStories() {
        req.keys().forEach(filename => req(filename))
    }

    configure(loadStories, module)
    ```

4. Add the stories to a `stories` folder

    ```js
    import React from 'react'

    import { storiesOf } from '@storybook/react'
    import { action } from '@storybook/addon-actions'
    import { linkTo } from '@storybook/addon-links'
    import { withKnobs, text, boolean, number, object } from '@storybook/addon-knobs'

    import { prettyDate, FitfabLogo } from '../lib/index'

    storiesOf('Fitfab UI', module).add('FitfabLogo', () => {
        return (
            <FitfabLogo
                className="js_triggerFitfab"
                aria-label="Fitfab"
                brandColor={text('brandColor', '#FF4158')}
                height={text('height', '43px')}
                width={text('width', '159px')}
            />
        )
    })
    ```

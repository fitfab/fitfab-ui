# Fitfab-UI Component (Rollup, TypeScript, Babel, React styled-components)

With this release, I target ES6 JavaScript. ES6 is much closer to TypeScript and produces less code, which means faster loading times.

-   This Library is meant to be used in modern browsers -- It doesn't support IE11.
-   Other decisions: [read more here](./DECISIONS.md)

_peerDependencies_:

-   `react@`_^16.8.4_
-   `react-dom@`_^16.8.4_
-   `styled-components@`_^4.1.3_

install

`yarn add fitfab-ui`

usage

```js
import { prettyDate } from 'fitfab-ui'
const pretty = prettyDate('8/2/2019')
// pretty should be: 'August 2 2019'
```

See the [Storybook setup](./STORYBOOK_SETUP.md)

## Using local copy of fitfab-ui

_NPM LINK_

-   from the root of 'fitfab-ui' run: `npm link`
-   from the root of your app run: `npm link fitfab-ui`

Then start using as normal:

`import { Button } from 'fitfab-ui'`

---

## Script CMD explained.

_NPM CMD:_ [read about npm scripts](https://docs.npmjs.com/misc/scripts)

`"prepare" : "npm run build"`

-   Run both BEFORE the package is packed and published, and on local npm install -- So here I build library

`"prepublishOnly": "npm test && npm run lint"`

-   This run BEFORE the package is prepared and packed, ONLY on npm publish.

-   A good place to verify that linting rules and tests are passing.

`"preversion": "npm run lint"`

-   Run BEFORE bumping the package version.

-   Ensure that the new version DOES NOT have bad code.

`"version": "npm run format && git add -A src"`

-   Run AFTER bumping the package version, but BEFORE commit.

-   Again ensuring that code still good when increasing the version.
-   CMD: `npm version <patch | minor | major>`

`"postversion": "git push && git push --tags"`

-   Run AFTER bumping the package version, and AFTER commit.

-   So here I push the commit and tags

## Rollup TypeScript & Babel setup

-   [Microsoft TypeScript Babel Setup](https://github.com/microsoft/TypeScript-Babel-Starter)

-   Styled-components: [babel-plugin-styled-components](https://www.styled-components.com/docs/tooling#usage)

## Jest & Enzyme setup

NOTE: make sure that jsx is set to react `{ "jsx": "react" }` within the **tsconfig.json** file.

-   Reference: [React TS Jest Enzyme Setup](https://github.com/cedrickchee/react-typescript-jest-enzyme-testing)

## Jest & React testing library setup

-   create the file `rtl.setup.ts`

```ts
// See https://github.com/kentcdodds/react-testing-library#global-config
import '@testing-library/react/cleanup-after-each'
import 'jest-dom/extend-expect'
```

-   Then add it to jest.config.js -- on this project I have a `/config` folder where the rtl.setup.ts lives.

```ts
    /***
     * Setup React-testing-library
     */
    setupFilesAfterEnv: ['<rootDir>/config/rtl.setup.ts'],
```

-   Reference: [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro)
-   CheatSheet: [@testing-library/react](https://testing-library.com/docs/react-testing-library/cheatsheet)

### Three-Shaking Gotcha

if you were to use `export default` , the bundle would not be three shaken.

```js
// src/utils.js
export default {
    alert: msg => {
        console.log(msg)
    },
    sum: (x, y) => x + y,
}

// src/main.js
import utils from './utils'

const total = utils.sum(7, 4)
console.log(`This is the total: ${total}`)
```

The code will include `alert` eventhough it was NOT use in the main.js file.

## Migrate from TSLint to ESLint

reference: 
- https://code.visualstudio.com/api/advanced-topics/tslint-eslint-migration
- https://www.robertcooper.me/using-eslint-and-prettier-in-a-typescript-project
- https://medium.com/@okonetchnikov/make-linting-great-again-f3890e1ad6b8#.8qepn2b5l


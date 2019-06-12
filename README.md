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

## Rollup TypeScript & Babel setup :surfer:

-   [Microsoft TypeScript Babel Setup](https://github.com/microsoft/TypeScript-Babel-Starter)

-   Styled-components: [babel-plugin-styled-components](https://www.styled-components.com/docs/tooling#usage)

## Jest & Enzyme setup

NOTE: make sure that jsx is set to react `{ "jsx": "react" }` within the **tsconfig.json** file.

-   Reference: [React TS Jest Enzyme Setup](https://github.com/cedrickchee/react-typescript-jest-enzyme-testing)

### Fitfab-UI Component with styled-component

With this release, I target ES6 JavaScript. ES6 is much closer to TypeScript and produces less code, which means faster loading times.

This Library is meant to be used in modern browsers -- I don't support IE11. I want to move forward.

_Bundle Dependencies_:

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

### using local copy of fitfab-ui

_NPM LINK_

-   from the root of 'fitfab-ui' run: `npm link`
-   from the root of your app run: `npm link fitfab-ui`

Then start using as normal:

`import { Button } from 'fitfab-ui'`

---

**Note:** Also add this to the `package.json` for `storybook` to work -- storybook has a dependency on `babel-core`

```json
"resolutions": {
  "babel-core": "^7.0.0-bridge.0"
}
```

---

### Typescript Version

_NPM CMD:_ [read about npm scripts](https://docs.npmjs.com/misc/scripts)

`"prepare" : "npm run build"` --
run both BEFORE the package is packed and published, and on local npm install.

So here I build library

`"prepublishOnly": "npm test && npm run lint"` -- this run BEFORE the package is prepared and packed, ONLY on npm publish.

A good place to verify that tests & linting rules are passing.

`"preversion": "npm run lint"` -- run BEFORE bumping the package version.

Ensure that the new version DOES NOT have bad code.

`"version": "npm run format && git add -A src"` -- run AFTER bumping the package version, but BEFORE commit.

Again ensuring that code still good when increasing the version via the CMD: `npm version <patch | minor | major>`

`"postversion": "git push && git push --tags"` -- run AFTER bumping the package version, and AFTER commit.

So here I push the commit and tags

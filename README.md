### UI Component with styled-component

install

`yarn add fitfab-ui`

usesage

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

### Publishing to NPM

a) Make sure repo is clean -- ready to be pushed.

b) Update package version (major | minor | patch | prerelease | preminor | premajor)

`npm version patch -m "Version %s - relevant comments"`

c) Update remote repo and tag

`git push && git push --tags`

d) Finally publish to NPM

`npm publish`

---

### Babel 7 upgrade

[reference article](http://artsy.github.io/blog/2017/11/27/Babel-7-and-TypeScript/)

[sample repo](https://github.com/damassi/babel-7-typescript-example)

```json
"devDependencies": {
    "@babel/cli": "^7.0.0-beta.39",
    "@babel/core": "^7.0.0-beta.39",
    "@babel/preset-env": "^7.0.0-beta.39",
    "@babel/preset-react": "^7.0.0-beta.39",
    "@babel/preset-stage-3": "^7.0.0-beta.39",
    "@babel/preset-typescript": "^7.0.0-beta.39",
}
```

**Note:** Also add this to the `package.json` for `storybook` to work -- storybook has a dependency on `babel-core`

```json
"resolutions": {
  "babel-core": "^7.0.0-bridge.0"
}
```

---

### Typescript Version

*NPM CMD:*  [read about npm scripts](https://docs.npmjs.com/misc/scripts)

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
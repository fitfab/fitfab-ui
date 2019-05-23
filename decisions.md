## Decissions

**Why there is no `.npmignore`?**

> Because we are using `package.json` to to indicate what files to deploy to NPM

```js
"files": [
    "lib/**/*"
  ],
```

> Also we are excluding any unit test from being build by excluding these files in `tsconfig.json`

```js
"exclude": ["node_modules", "**/__tests__/*", "**/*.test.ts", "**/*.test.tsx"]
```

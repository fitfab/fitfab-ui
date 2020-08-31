// {
//   "semi": false,
//   "singleQuote": true,
//   "printWidth": 80,
//   "trailingComma": "all",
//   "tabWidth": 4,
//   "useTabs": false,
//   "bracketSpacing": true,
//   "overrides": [
//     {
//       "files": ["*.json", ".prettierrc", ".stylelintrc", ".eslintrc"],
//       "options": {
//         "tabWidth": 2
//       }
//     }
//   ]
// }

module.exports = {
  semi: false,
  trailingComma: "all",
  singleQuote: true,
  printWidth: 120,
  tabWidth: 4,
  useTabs: false,
  bracketSpacing: true,
  overrides: [
    {
      files: ["*.json", ".prettierrc", ".stylelintrc", ".eslintrc"],
      options: {
        tabWidth: 2
      }
    }
  ]
};
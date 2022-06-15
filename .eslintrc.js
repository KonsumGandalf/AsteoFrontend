module.exports = {
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  env: {
    es6: true,
    browser: true,
  },
  plugins: [
    'prettier',
    'svelte3',
  ],
  extends: [
    "airbnb-base",
  ],
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3',
    },
  ],
  rules: {
    "import/extensions": "off",
    indent: "off",
    quotes: "off",
    "import/extension": "off",
    "import/prefer-default-export": "off",
    "object-shorthand": "off",
    "no-underscore-dangle": "off",
    "no-console": "off",
    "linebreak-style": "off",
    "no-param-reassign": "off",
    "import/no-unresolved": "off",
    "no-return-await": "off",
    "function-paren-newline": "off",
    "no-shadow": 1,
    "max-len": ["error", { code: 120 }],
},
  settings: {
    // ...
  },
};

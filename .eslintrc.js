/**
 * @todo Put this in ./config if you can get that working with eslint-prettier.
 * @type {{parserOptions: {ecmaVersion: number, sourceType: string, ecmaFeatures: {impliedStrict: boolean, jsx: boolean}}, extends: *[], parser: string, plugins: [string, string, string], globals: {SharedArrayBuffer: string, Atomics: string}, env: {node: boolean, browser: boolean}}}
 */
module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  parser: `babel-eslint`,
  parserOptions: {
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: `module`,
  },
  settings: {
    react: {
      version: `detect`,
    },
  },

  /**
   * Keep the `prettier` ones in order, after everything else.
   *
   * @see https://github.com/standard/eslint-config-standard
   * @see https://github.com/standard/eslint-config-standard-react
   * @see https://github.com/benmosher/eslint-plugin-import
   * @see https://github.com/evcohen/eslint-plugin-jsx-a11y
   * @type {string[]}
   */
  extends: [
    `standard`,
    `standard-react`,
    `plugin:import/errors`,
    `plugin:import/warnings`,
    `plugin:jsx-a11y/recommended`,
  ],

  /**
   * @see https://github.com/evcohen/eslint-plugin-jsx-a11y
   * @see https://github.com/yannickcr/eslint-plugin-react
   * @see https://github.com/standard/eslint-plugin-standard
   * @type {string[]}
   */
  plugins: [`jsx-a11y`, `react`],
  rules: {
    'comma-dangle': [`error`, `always-multiline`],
    quotes: [`error`, `backtick`],
  },
}

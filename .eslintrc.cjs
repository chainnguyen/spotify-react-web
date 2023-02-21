// Docs: // https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    "eslint:recommended",
  ],
  plugins: ['prettier'],
  rules: {
    // Override/add rules settings here
    "camelcase": "off",
    "generator-star-spacing": "off",
    "no-unused-vars": "off",
    "no-useless-catch": "off"
  }
}

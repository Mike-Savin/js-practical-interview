module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
    node: true,
    mocha: true
  },
  "globals": {
    "expect": true
  },
  extends: [
    'plugin:vue/recommended',
    'standard'
  ],
  plugins: [
    'vue'
  ],
  rules: {
    'semi': [2, "always"],
    'generator-star-spacing': 'off',
    "vue/require-v-for-keys": "off",
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
};

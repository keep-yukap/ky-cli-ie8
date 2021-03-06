module.exports = {
  "extends": ["airbnb", "plugin:jest/recommended"],
  "parser": "babel-eslint",
  "plugins": [
    "react",
    "jest"
  ],
  "env": {
    "browser": true,
    "node": true,
    "jest/globals": true
  },
  "rules": {
    "import/no-extraneous-dependencies": "off",
    "react/no-unused-prop-types": "off",
    "jsx-a11y/label-has-for": "off",
    "react/prefer-stateless-function": "off",
    "react/jsx-filename-extension": "off",
    "react/no-multi-comp": "off",
    "no-restricted-syntax": "off",
    "react/forbid-prop-types": "off"
  }
};

module.exports = {
  env: { node: true },
  extends: ["prettier", "plugin:@typescript-eslint/recommended"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": ["error"],
  },
};

export default {
  "*.{json,html}": ["prettier --write", "cspell --no-must-find-files"],
  "*.{ts,tsx}": [
    "eslint --fix --max-warnings 0",
    "cspell --no-must-find-files",
  ],
};

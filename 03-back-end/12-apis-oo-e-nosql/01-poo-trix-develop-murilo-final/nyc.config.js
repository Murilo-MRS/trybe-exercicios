module.exports = {
  "extends": "@istanbuljs/nyc-config-typescript",
  "extension": [
    ".ts",
    ".tsx"
  ],
  "exclude": [
    "**/*.d.ts"
  ],
  "include": [
    "src/Models",
    "src/Services",
    "src/Controllers",
  ],
  "reporter": [
    "text",
    "text-summary",
    "json-summary",
    "html",
    "lcov",
  ],
  "all": true,
}

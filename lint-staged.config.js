/**
 * @filename: lint-staged.config.js
 * @type {import('lint-staged').Configuration}
 */
const config = {
  "apps/web/**/*.{ts,tsx,js,jsx}": () => "bun run lint:web:fix",

  "apps/docs/**/*.{ts,tsx,js,jsx}": () => "bun run lint:docs:fix",

  // Format JSON and YAML files
  "**/*": "prettier --write --ignore-unknown",
};

export default config;

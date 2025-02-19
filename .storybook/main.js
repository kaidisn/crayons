module.exports = {
  presets: [
    '@storybook/preset-typescript',
    '@storybook/addon-docs/preset'
  ],
  addons: [
    '@storybook/addon-actions/register',
    '@storybook/addon-jest/register',
    '@storybook/addon-viewport/register',
    '@storybook/addon-a11y/register'
  ],
  stories: [
    '../src/**/*.stories.(js|mdx)',
  ]
};
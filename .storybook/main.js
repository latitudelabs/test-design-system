/** @type { import('@storybook/svelte-vite').StorybookConfig } */
const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|ts|svelte)'],
  addons: ['@storybook/addon-docs'],
  framework: '@storybook/svelte-vite',
};
export default config;

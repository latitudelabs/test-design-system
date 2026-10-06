import { fn } from 'storybook/test';
import Button from './Button.svelte';

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary'] },
    size: { control: 'select', options: ['sm', 'md'] },
  },
  args: { label: 'Button', variant: 'primary', size: 'md', disabled: false, onclick: fn() },
};

export const Primary = {};
export const Secondary = { args: { variant: 'secondary' } };
export const Small = { args: { size: 'sm' } };
export const Disabled = { args: { disabled: true } };

import { fn } from 'storybook/test';
import Input from './Input.svelte';

export default {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  args: { placeholder: 'What are we analysing today..?', value: '', onsubmit: fn() },
};

export const Default = {};
export const WithValue = { args: { value: 'Q3 churn by region' } };

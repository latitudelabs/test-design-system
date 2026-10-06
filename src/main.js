import { mount } from 'svelte';
import './lib/tokens/tokens.css';
import App from './App.svelte';

const app = mount(App, { target: document.getElementById('app') });

export default app;

<script>
  /** @type {'primary' | 'secondary'} */
  export let variant = 'primary';
  /** @type {'sm' | 'md'} */
  export let size = 'md';
  export let label = 'Button';
  export let disabled = false;
</script>

<button
  type="button"
  class="btn btn--{variant} btn--{size}"
  {disabled}
  on:click
>
  {label}
</button>

<style>
  .btn {
    font-family: var(--font-family-base);
    border-radius: var(--radius-md);
    border: 1px solid transparent;
    cursor: pointer;
    font-weight: 600;
  }
  .btn:disabled { opacity: 0.5; cursor: not-allowed; }

  .btn--sm { font-size: var(--font-size-sm); padding: var(--space-1) var(--space-3); }
  .btn--md { font-size: var(--font-size-md); padding: var(--space-2) var(--space-4); }

  .btn--primary { background: var(--color-primary-500); color: var(--color-neutral-0); }
  .btn--primary:hover:not(:disabled) { background: var(--color-primary-600); }

  .btn--secondary {
    background: var(--color-neutral-100);
    color: var(--color-neutral-900);
    border-color: var(--color-neutral-100);
  }
</style>

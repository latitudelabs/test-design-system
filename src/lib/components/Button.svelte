<script>
  /**
   * @typedef {Object} Props
   * @property {'primary' | 'secondary'} [variant]
   * @property {'sm' | 'md'} [size]
   * @property {string} [label]
   * @property {boolean} [disabled]
   * @property {(e: MouseEvent) => void} [onclick]
   */

  /** @type {Props} */
  let { variant = 'primary', size = 'md', label = 'Button', disabled = false, onclick } = $props();
</script>

<button type="button" class="btn btn--{variant} btn--{size}" {disabled} {onclick}>
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

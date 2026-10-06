<script>
  import Button from '$lib/components/Button.svelte';
</script>

<main>
  <h1>codeconnect playground</h1>
  <Button label="Primary" />
  <Button label="Secondary" variant="secondary" />
</main>

<style>
  main {
    font-family: var(--font-family-base);
    padding: var(--space-6);
    display: flex;
    gap: var(--space-3);
    align-items: center;
    flex-wrap: wrap;
  }
  h1 { width: 100%; }
</style>

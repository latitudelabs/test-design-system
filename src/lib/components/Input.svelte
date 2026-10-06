<script>
  /**
   * Values are copied as-is from Figma (codeconnect playground → Input page, node 2:7)
   * and intentionally NOT tokenized.
   *
   * The error state is code-only: it does not exist in Figma yet.
   *
   * @typedef {Object} Props
   * @property {string} [value]
   * @property {string} [placeholder]
   * @property {string} [error] Error message; when set, the input renders in its error state.
   * @property {(value: string) => void} [onsubmit]
   */

  /** @type {Props} */
  let { value = $bindable(''), placeholder = 'What are we analysing today..?', error = '', onsubmit } = $props();

  const errorId = $props.id();

  /** @param {SubmitEvent} e */
  function handleSubmit(e) {
    e.preventDefault();
    onsubmit?.(value);
  }
</script>

<div class="input-wrap">
  <form class="input" class:input--error={error} onsubmit={handleSubmit}>
    <input
      class="input__field"
      type="text"
      bind:value
      {placeholder}
      aria-invalid={error ? 'true' : undefined}
      aria-describedby={error ? errorId : undefined}
    />
    <button class="input__btn" type="submit" aria-label="Submit">↑</button>
  </form>
  {#if error}
    <p class="input__error" id={errorId} role="alert">{error}</p>
  {/if}
</div>

<style>
  .input-wrap {
    width: 430px;
  }

  .input {
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 430px;
    height: 48px;
    padding: 4px 4px 4px 20px;
    border-radius: 16px;
    background: #e8e8e8;
  }

  /* Inset ring instead of a border so the error state doesn't shift layout. */
  .input--error {
    background: #fdecec;
    box-shadow: inset 0 0 0 1px #d92d20;
  }
  .input--error .input__btn { background: #fbdcdc; color: #d92d20; }

  .input__field {
    flex: 1;
    min-width: 0;
    border: none;
    outline: none;
    background: transparent;
    padding: 0;
    font-family: Inter, sans-serif;
    font-weight: 500;
    font-size: 16px;
  }
  .input__field::placeholder { color: #7a7a7a; }

  .input__btn {
    box-sizing: border-box;
    width: 64px;
    height: 100%;
    padding: 6px 8px;
    border: none;
    border-radius: 12px;
    background: #f1f1f1;
    color: #979797;
    font-family: Inter, sans-serif;
    font-weight: 400;
    font-size: 16px;
    cursor: pointer;
  }

  .input__error {
    margin: 6px 0 0;
    padding-left: 20px;
    color: #b42318;
    font-family: Inter, sans-serif;
    font-weight: 500;
    font-size: 14px;
  }
</style>

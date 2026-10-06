<script>
  /**
   * Values are copied as-is from Figma (codeconnect playground → Input page, node 2:7)
   * and intentionally NOT tokenized.
   *
   * @typedef {Object} Props
   * @property {string} [value]
   * @property {string} [placeholder]
   * @property {(value: string) => void} [onsubmit]
   */

  /** @type {Props} */
  let { value = $bindable(''), placeholder = 'What are we analysing today..?', onsubmit } = $props();

  /** @param {SubmitEvent} e */
  function handleSubmit(e) {
    e.preventDefault();
    onsubmit?.(value);
  }
</script>

<form class="input" onsubmit={handleSubmit}>
  <input class="input__field" type="text" bind:value {placeholder} />
  <button class="input__btn" type="submit" aria-label="Submit">↑</button>
</form>

<style>
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
</style>

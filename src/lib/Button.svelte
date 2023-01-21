<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  function click() {
    dispatch('click', null);
  }
</script>
<button on:click={click}>
  <slot></slot>
</button>

<style>
  button {
    --button-background: var(--clr-neon-green);
    --button-text-color: var(--clr-dark-gray);
    --button-border-color: var(--clr-neon-green);
    background-color: var(--button-background);
    color: var(--button-text-color);
    border: 1px solid var(--button-border-color);
    text-transform: uppercase;
    padding-block: 21px;
    width: 100%;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    cursor: pointer;
  }
  button:hover {
    --button-background: transparent;
    --button-text-color:var(--clr-neon-green);
  }
</style>

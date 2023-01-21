<script lang="ts">
    import IconCheck from "./IconCheck.svelte";

    export let checked: boolean;
</script>

<label class="container">
  <input class="hidden" type=checkbox bind:checked>
  <span class="icon">
    <span class="icon-wrapper">
      <IconCheck />
    </span>
  </span>
  <span class="label">
    <slot></slot>
  </span>
</label>

<style>
  .container {
    display: flex;
    cursor: pointer;
  }
  .label {
    margin-inline-start: var(--gap, 1.5rem);
  }
  input {
    display: none;
  }
  .icon-wrapper {
    display: none;
  }
  .icon {
    --_size: 20px;
    box-sizing: border-box;
    border: 3px solid white;
    width: var(--_size);
    height: var(--_size);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  input:checked + .icon {
    color: var(--clr-very-dark-gray);
    background-color: var(--clr-neon-green);
    border: 0;
  }
  input:checked + .icon > .icon-wrapper {
    display: block;
    margin-block-start: 2px;
  }
</style>

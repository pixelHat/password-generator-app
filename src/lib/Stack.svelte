<script lang="ts">
  export let flow: string;
</script>

<div>
  <article class="stack" style="--flow:{flow}rem">
    <slot></slot>
  </article>
</div>

<style>
  .stack {
    display: flex;
    flex-direction: column;
  }
  .stack > :global(*) {
    margin-block-end: var(--flow, 2rem);
  }
  .stack > :global(*):last-child {
    margin-block-end: 0;
  }
</style>

<script lang="ts">
  export let bars: number;
  const qtyOfBars = new Array(4);
  $: className = `bars-${bars}`;
</script>

<article class={className}>
  {#each qtyOfBars as _, idx}
    <div class:fill={idx < bars}></div>
  {/each}
</article>

<style>
  article {
    display: flex;
  }
  article > div + div {
    margin-inline-start: 10px;
  }
  div {
    --background-color: transparent;
    --border-color: var(--clr-almost-white);
    border: 2px solid var(--border-color);
    background-color: var(--background-color);
    height: 22px;
    width: 10px;
  }
  div.fill {
    --background-color: var(--color);
    --border-color: var(--color);
  }
  .bars-1 {
    --color: var(--clr-red);
  }
  .bars-2 {
    --color: var(--clr-orange);
  }
  .bars-3 {
    --color: var(--clr-yellow);
  }
  .bars-4 {
    --color: var(--clr-neon-green);
  }
</style>

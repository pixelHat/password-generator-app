<script lang="ts">
  export let min: number = 1;
  export let max: number = 20;
  export let value: number;

  const step = Math.round(100 / max);

  function normalize(val: number, min: number, max: number) {
    if (val == 1) return 0;
    return val * step;
  }

  $: progress = `${normalize(value, min, max)}%`;
</script>

<input type="range" bind:value={value} {min} {max} style="--progress:{progress}" />

<style>
  input[type="range"] {
    --_size: 28px;
    appearance: none;
    height: 10px;
    background-color: var(--clr-very-dark-gray);
    background-image: linear-gradient(var(--clr-neon-green), var(--clr-neon-green));
    background-size: var(--progress) 100%;
    background-repeat: no-repeat;
    cursor: pointer;
  }
  input[type="range"]::-moz-range-thumb {
    --slider-background: var(--clr-almost-white);
    --slider-border-color: var(--clr-almost-white);
    appearance: none;
    height: var(--_size);
    width: var(--_size);
    border-radius: 50%;
    background-color: var(--slider-background);
    border: 1px solid var(--slider-border-color);
    cursor: pointer;
    transition: background .3s ease-in-out;
    margin: 0;
    padding: 0;
    position: 50%;
    left: 0;
    margin-inline-start: 1px;
  }
  input[type="range"]::-moz-range-thumb:hover {
    --slider-background: var(--clr-very-dark-gray);
    --slider-border-color: var(--clr-neon-green);
  }
  input[type="range"]::-moz-range-track {
    appearance: none;
    box-shadow: none;
    border: none;
    background: transparent;
  }
  input[type="range"]::-webkit-slider-thumb {
    --slider-background: var(--clr-almost-white);
    --slider-border-color: var(--clr-almost-white);
    appearance: none;
    height: var(--_size);
    width: var(--_size);
    border-radius: 50%;
    background-color: var(--slider-background);
    border: 1px solid var(--slider-border-color);
    cursor: pointer;
    transition: background .3s ease-in-out;
    margin: 0;
    padding: 0;
    position: 50%;
    left: 0;
    margin-inline-start: 1px;
  }

  input[type="range"]::-webkit-slider-thumb:hover {
    --slider-background: var(--clr-very-dark-gray);
    --slider-border-color: var(--clr-neon-green);
  }
  input[type="range"]::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    box-shadow: none;
    border: none;
    background: transparent;
  }
</style>

<script lang="ts">
  import type { StrengthEnum } from "../services/PasswordStrength";
  import Bar from "./Bar.svelte";

  export let strength: StrengthEnum;
  $: text = ['too weak!', 'weak', 'medium', 'strong'][strength];
  $: bars = strength + 1;
</script>

<article>
  <h1 class="heading-medium">Strength</h1>
  <div>
    <span>{text}</span>
    <Bar {bars} />
  </div>
</article>

<style>
  article {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--clr-very-dark-gray);
    padding: 1.3125rem 2rem 1.375rem 2rem;
  }
  div {
    display: flex;
    align-items: center;
  }
  h1 {
    color: hsla(252, 9%, 53%, 1);
    text-transform: uppercase;
  }
  span {
    color: var(--clr-almost-white);
    text-transform: uppercase;
    margin-inline-end: 1rem;
    line-height: 0;
  }
</style>

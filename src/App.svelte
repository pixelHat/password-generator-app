<script lang="ts">
  import { onMount } from 'svelte';
  import Checkbox from './lib/Checkbox.svelte'
  import Strength from './lib/Strength.svelte'
  import Stack from './lib/Stack.svelte'
  import ClipboardIcon from './lib/ClipboardIcon.svelte';
  import { GeneratePasswordBuilder } from './services/GeneratePassword';
  import { PasswordStrength } from './services/PasswordStrength';
  import { Clipboard } from './services/Clipboard';
  import Slider from './lib/Slider.svelte';
  import Button from './lib/Button.svelte';
  import IconRightArrow from './lib/IconRightArrow.svelte';

  let useUppercaseLetters = true;
  let useLowercaseLetters = true;
  let useNumbers = true;
  let useSymbols = true;
  let qtyOfChars = 10;
  let is_password_valid = false;
  let password = null;
  let strength = null;

  onMount(() => {
    generate_password();
  });

  function generate_password() {
    const new_password = new GeneratePasswordBuilder(qtyOfChars)
      .withNumbers(useNumbers)
      .withSymbols(useSymbols)
      .withLowercaseLetters(useLowercaseLetters)
      .withUppercaseLetters(useUppercaseLetters)
      .build()
      .generate();
    if (new_password == null) {
      is_password_valid = false;
    } else {
      is_password_valid = true;
      password = new_password;
    }
    strength = PasswordStrength.calculateStrength(password);
  }

  async function copyToClipboard() {
    const clipboard = new Clipboard(window.navigator);
    clipboard.set(password);
  }
</script>

<main>
  <h1 class="heading-medium">Password Generator</h1>
  <Stack flow="1.5">
    <article class="surface box">
      <h1 class="heading-large" class:disabled={!is_password_valid}>{password}</h1>
      <ClipboardIcon on:click={copyToClipboard} />
    </article>
    <article class="surface">
      <Stack flow="2.25">
        <section class="box">
          <span class="title">Character Length</span>
          <span class="chars heading-large">{qtyOfChars}</span>
        </section>
        <Slider min={0} max={20} bind:value={qtyOfChars} />
        <Stack flow="1.25">
          <Checkbox bind:checked={useUppercaseLetters}>
            Include Uppercase Letters
          </Checkbox>
          <Checkbox bind:checked={useLowercaseLetters}>
            Include Lowercase Letters
          </Checkbox>
          <Checkbox bind:checked={useNumbers}>
            Include Numbers
          </Checkbox>
          <Checkbox bind:checked={useSymbols}>
            Include Symbols
          </Checkbox>
        </Stack>
        <Strength {strength} />
        <Button on:click={generate_password}>Generate <IconRightArrow /></Button>
      </Stack>
    </article>
  </Stack>
</main>

<style>
  .heading-medium {
    margin-block-end: 2rem;
    color: var(--clr-gray);
  }
  h1.disabled {
    opacity: .25;
  }
  .box {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .box > .chars {
    color: var(--clr-neon-green);
  }
</style>

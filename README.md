# Frontend Mentor - Password generator app solution

This is a solution to the [Password generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/password-generator-app-Mr8CLycqjh). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Generate a password based on the selected inclusion options
- Copy the generated password to the computer's clipboard
- See a strength rating for their generated password
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Links

- Solution URL: [https://github.com/pixelHat/password-generator-app](https://github.com/pixelHat/password-generator-app)
- Live Site URL: [https://pixelhat.github.io/password-generator-app/](https://pixelhat.github.io/password-generator-app/)

## My process

### Built with

This project was made to learn [Svelte.js](https://svelte.dev/). So, Svelte is the only tool used alongside CSS and HTML, of course.

### What I learned

Svelte is a pretty fun tecnology. We can create reactivity properties using the `$` prefix, which reminds the way we code in Angular using RxJS.

```js
$password = // some code
```

We can pass custom properties to a component, but Svelte will add another div during compilation.
This feature is awesome, but adding a div breaks the utility in some cases like when we want to
style the children.

```html
<Stack>
  <Element --my-custom-property="10em" />
</Stack>
```

In these scenarios, we can pass a component property and bind it to the html.

```html
<script lang="ts">
  export let flow: string;
</script>

<div>
  <article class="stack" style="--flow:{flow}rem">
    <slot></slot>
  </article>
</div>
```

And, if we want to style the children, we should use the `:global(selector)`.

For some reason, I could not use a `,` to share the range input css between Chrome and Firefox.

```
input[type="range"]::-moz-range-thumb, input[type="range"]::-webkit-slider-thumb {
   /* Doesn't work on Chrome :( */
}
```

### Useful resources

- [Styling Cross-Browser Compatible Range Inputs with CSS](https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/) - A good tutorial about how to style a slider.
- [Wrapper to bypass the custom property div issue](https://stackoverflow.com/questions/67408851/adding-css-custom-properties-dynamically-to-svelte-components-3-38-0) - A good example showing
how to use the Svelte reactivity to bypass the issue with a new div when passing a custom property.

## Author

- Github - [pixelHat](https://github.com/pixelHat)
- Frontend Mentor - [@pixelHat](https://www.frontendmentor.io/profile/pixelHat)

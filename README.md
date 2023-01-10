# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [https://www.frontendmentor.io/solutions/interactive-card-details-form-gwy9iF1q8p](https://www.frontendmentor.io/solutions/interactive-card-details-form-gwy9iF1q8p)
- Live Site URL: [https://interactive-card-details-form-blue.vercel.app/](https://interactive-card-details-form-blue.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- SCSS
- Flexbox
- CSS Grid
- Mobile-first workflow
- React

### What I learned

I learned to format code using an index.js file in important directories.

```js
import { formatCardNumber, onChangeInputHandler, setErrorState } from "./js";
```

### Continued development

I think I want to start using Typescript in my projects. Also I want to organize my code better.

### Useful resources

- [clip-path](https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path) - I tried something different for the background image, works pretty well.
- [\<input type="number"\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number#using_number_inputs) - I used the attribute inputemode the CVC validation.
- [How to use index.js file(Properly)](https://dev.to/fahadaminshovon/-how-to-use-indexjs-fileproperly-302f) - I refactor the images directory and js files, it looks cleaner.

## Author

- Frontend Mentor - [@miguelzaga](https://www.frontendmentor.io/profile/miguelzaga)


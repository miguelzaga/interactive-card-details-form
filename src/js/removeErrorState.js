import { getErrorClass } from './getErrorClass.js'

export function removeErrorState(event) {
  const inputElement = event.currentTarget;
  const labelElement = inputElement.parentElement;
  inputElement.classList.remove(getErrorClass(inputElement));
  labelElement.classList.remove(getErrorClass(labelElement));
}

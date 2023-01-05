import { getErrorClass } from './getErrorClass.js'

export function addErrorState(event) {
  const inputElement = event.currentTarget;
  const labelElement = inputElement.parentElement;
  inputElement.classList.add(getErrorClass(inputElement));
  labelElement.classList.add(getErrorClass(labelElement));
}

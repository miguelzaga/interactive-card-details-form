export function setErrorState(inputElement) {
  var labelElement = getParentLabelElement(inputElement);
  var alertElement = labelElement.querySelector(".alert-js");

  if (labelElement && alertElement) {
    if (inputElement.checkValidity()) {
      removeErrorState();
    } else {
      addErrorState();
    }
  }

  function addErrorState() {
    alertElement.innerText = getErrorMsg(inputElement);
    inputElement.classList.add(getErrorClass(inputElement));
    labelElement.classList.add(getErrorClass(labelElement));
  }

  function removeErrorState() {
    inputElement.classList.remove(getErrorClass(inputElement));
    labelElement.classList.remove(getErrorClass(labelElement));
  }

  function getParentLabelElement(element) {
    var parent = element.parentElement;
    if (parent.tagName == "LABEL" || !parent) {
      return parent;
    } else {
      return getParentLabelElement(parent);
    }
  }

  function getErrorMsg(element) {
    if (element.validity.valueMissing) {
      return "Can't be blank";
    }
    if (element.validity.patternMismatch) {
      return "Wrong format";
    }

    return element.validationMessage;
  }

  function getErrorClass(element) {
    return element.classList[0] + "--error";
  }
}

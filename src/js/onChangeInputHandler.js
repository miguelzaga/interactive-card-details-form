export function onChangeInputHandler(setState, defaultValue) {
  return function updateState(event) {
    let value = event.currentTarget.value;
    value ? setState(value) : setState(defaultValue);
  };
}

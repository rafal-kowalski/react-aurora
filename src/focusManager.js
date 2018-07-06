const focusStack = [];

export function markForFocus() {
  focusStack.push(document.activeElement);
}

export function returnFocus() {
  if (focusStack.length !== 0) {
    let toFocus = focusStack.pop();
    toFocus.focus();
  }
}

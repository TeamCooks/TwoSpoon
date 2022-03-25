const focusableSelector = `
  a[href], 
  area[href], 
  button, 
  input, 
  select, 
  textarea, 
  iframe, 
  summary, 
  details, 
  video[controls], 
  audio[controls], 
  [contenteditable=""], 
  [contenteditable="true"], 
  [tabindex]
`
  .replace(/\n\s+/g, '')
  .trim();

export const isFocusable = (elementNode: HTMLElement): boolean => {
  const current = document.activeElement;
  if (current === elementNode) return true;

  const protectEvent = (e) => e.stopImmediatePropagation();
  elementNode.addEventListener('focus', protectEvent, true);
  elementNode.addEventListener('blur', protectEvent, true);
  elementNode.focus({ preventScroll: true });

  const result = document.activeElement === elementNode;
  elementNode.blur();

  if (current) current.focus({ preventScroll: true });
  elementNode.removeEventListener('focus', protectEvent, true);
  elementNode.removeEventListener('blur', protectEvent, true);

  return result;
};

export const getFocusableElements = (node: HTMLElement): HTMLElement[] => getElements(node, true);

/* -------------------------------------------------------------------------- */
/* TABBABLE (tabindex="-1" 제외)                                               */
/* -------------------------------------------------------------------------- */

const tabbableSelector = focusableSelector.replace(/\[tabindex\]/, '[tabindex]:not([tabindex^="-"])');

export const isTabbable = (elementNode: HTMLElement) =>
  isFocusable(elementNode) && Number(elementNode.getAttribute('tabindex')) >= 0;

export const getTabbableElements = (node: HTMLElement) => getElements(node);

/* -------------------------------------------------------------------------- */
/* GET ELEMENTS                                                               */
/* -------------------------------------------------------------------------- */

const getElements = (node: HTMLElement, isFocusable = false): HTMLElement[] =>
  Array.from(node.querySelectorAll(isFocusable ? focusableSelector : tabbableSelector));

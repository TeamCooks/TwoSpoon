export const $ = <T extends HTMLElement>(selector: string) => {
  const element = document.querySelector(selector);
  return element as T;
};

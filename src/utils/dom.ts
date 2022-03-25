export const $ = <T extends HTMLElement>(selector: string) => {
  if (typeof window === 'undefined') {
    const element = document.querySelector(selector);
    return element as T;
  }
};

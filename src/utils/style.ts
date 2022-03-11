export const pxToRem = (px: number, base = 16): string => {
  return `${px / base}rem`;
};

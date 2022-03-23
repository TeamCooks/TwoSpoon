export const pxToRem = (px: number, base = 16): string => {
  return `${px / base}rem`;
};

export const media = {
  mobile: '@media(max-width:767px)',
};

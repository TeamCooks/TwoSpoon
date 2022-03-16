import { Theme } from '@emotion/react';
import { pxToRem } from 'utils';

export const theme: Theme = {
  color: {
    primaryGreen: '#529715',
    primaryOrange: '#e56a18',
    badgePink: '#d51754',
    badgePurple: '#910087',
    badgeGreen: '#349a2c',
    badgeNavy: '#4b5aab',
    heartPink: '#ff9d9d',
    black: '#000000',
    white: '#ffffff',

    backgroundGray: '#fafafa',
    searchGray: '#ebebeb',
    menuBg: '#252525',

    gray100: '#d8d8d8',
    gray200: '#b0b0b0',
    gray300: '#898989',
    gray400: '#616161',
    gray500: '#3a3a3a',
    gray600: '#2e2e2e',
    gray700: '#232323',
    gray800: '#171717',
    gray900: '#0c0c0c',
  },

  fontSize: {
    xs: pxToRem(12),
    s: pxToRem(14),
    m: pxToRem(15),
    l: pxToRem(16),
    xl: pxToRem(18),
    xxl: pxToRem(24),
  },
};

import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      primaryGreen: string;
      primaryOrange: string;
      badgePink: string;
      badgePurple: string;
      badgeGreen: string;
      badgeNavy: string;
      heartPink: string;
      black: string;
      white: string;

      backgroundGray: string;
      searchGray: string;
      menuBg: string;

      gray100: string;
      gray200: string;
      gray300: string;
      gray400: string;
      gray500: string;
      gray600: string;
      gray700: string;
      gray800: string;
      gray900: string;
    };

    fontSize: {
      xs: string;
      s: string;
      m: string;
      l: string;
      xl: string;
      xxl: string;
    };
  }
}

type Type = 'button' | 'submit';
type Variant = 'transparent' | 'outlined' | 'filled';
type Color = 'primaryGreen' | 'primaryOrange' | 'white' | 'black';
type IconType = 'search' | 'user' | 'heart' | 'close' | 'cart' | 'link' | 'bookmark' | 'bookmarkFill' | 'up';
type Size = 'small' | 'large';

export interface StyledButtonProps {
  type: Type;
  round?: boolean;
  color: Color;
  style?: React.CSSProperties;
  className?: string;
}

export interface ButtonProps extends StyledButtonProps {
  variant: Variant;
  children: React.ReactNode;
}

export interface StyledIconButtonProps {
  type: Type;
  ariaLabel: string;
  circle: boolean;
  color: Color;
  size: Size;
}

export interface IconButtonProps extends StyledIconButtonProps {
  iconType: IconType;
  variant: Variant;
}

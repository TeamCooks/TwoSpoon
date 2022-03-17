type Type = 'button' | 'submit';
type Variant = 'transparent' | 'outlined' | 'filled';
type Color = 'primaryGreen' | 'primaryOrange' | 'white';
type Icon = 'search' | 'user' | 'heart' | 'close' | 'cart' | 'link' | 'bookmark' | 'bookmarkFill' | 'up';
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

export interface IconButtonProps {
  type: Type;
  ariaLabel: string;
  icon: Icon;
  circle: boolean;
  variant: Variant;
  color: Color;
  size: Size;
}
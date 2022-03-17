type Type = 'button' | 'submit';
type Variant = 'transparent' | 'outlined' | 'filled';
type Color = 'primaryGreen' | 'primaryOrange' | 'white';

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

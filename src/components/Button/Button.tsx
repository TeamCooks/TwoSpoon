import { ButtonProps, StyledButtonProps } from './Button.types';
import { StyledButton, StyledOutlineButton, StyledFillButton } from './Button.styled';

const renderButton = ({ type, round = false, color, style, variant, children, ...restProps }: ButtonProps) => {
  const props: StyledButtonProps = { type, round, color, style };

  switch (variant) {
    case 'transparent':
      return (
        <StyledButton {...props} {...restProps}>
          {children}
        </StyledButton>
      );
    case 'outlined':
      return (
        <StyledOutlineButton {...props} {...restProps}>
          {children}
        </StyledOutlineButton>
      );
    case 'filled':
      return (
        <StyledFillButton {...props} {...restProps}>
          {children}
        </StyledFillButton>
      );
    default:
      return null;
  }
};

export const Button = (props: ButtonProps) => {
  return renderButton(props);
};

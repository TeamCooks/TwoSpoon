import { FiSearch } from 'react-icons/fi';
import { FaArrowUp } from 'react-icons/fa';
import { BsPersonCircle, BsCartCheckFill, BsLink45Deg, BsBookmark, BsFillBookmarkFill } from 'react-icons/bs';
import { HiHeart } from 'react-icons/hi';
import { MdClose } from 'react-icons/md';
import { StyledButton, StyledOutlineButton, StyledFillButton } from './IconButton.styled';
import { IconButtonProps, StyledIconButtonProps } from './Button.types';

const renderIcon = (iconType: IconButtonProps['iconType']) => {
  switch (iconType) {
    case 'search':
      return <FiSearch />;
    case 'user':
      return <BsPersonCircle />;
    case 'heart':
      return <HiHeart />;
    case 'close':
      return <MdClose />;
    case 'cart':
      return <BsCartCheckFill />;
    case 'link':
      return <BsLink45Deg />;
    case 'bookmarkFill':
      return <BsFillBookmarkFill />;
    case 'bookmark':
      return <BsBookmark />;
    case 'up':
      return <FaArrowUp />;
    default:
      return null;
  }
};

const renderButton = ({
  type,
  ariaLabel,
  iconType,
  circle = false,
  variant,
  color,
  size,
  ...restProps
}: IconButtonProps) => {
  const props: StyledIconButtonProps = { type, ariaLabel, circle, color, size };

  switch (variant) {
    case 'transparent':
      return (
        <StyledButton aria-label={ariaLabel} {...props} {...restProps}>
          {renderIcon(iconType)}
        </StyledButton>
      );
    case 'outlined':
      return (
        <StyledOutlineButton aria-label={ariaLabel} {...props} {...restProps}>
          {renderIcon(iconType)}
        </StyledOutlineButton>
      );
    case 'filled':
      return (
        <StyledFillButton aria-label={ariaLabel} {...props} {...restProps}>
          {renderIcon(iconType)}
        </StyledFillButton>
      );
    default:
      return null;
  }
};

export const IconButton = (props: IconButtonProps) => {
  return renderButton(props);
};

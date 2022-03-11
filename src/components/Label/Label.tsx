import { BsBookmarkHeartFill } from 'react-icons/bs';
import { RiTimerFill } from 'react-icons/ri';
import { LabelProps } from './Label.types';
import { StyledLabel, StyledStrong } from './Label.styled';

export default function Label({ type, value }: LabelProps): JSX.Element {
  const iconStyle = {
    marginRight: '20px',
    fontSize: '26px',
    verticalAlign: 'bottom',
  };

  const renderByType = (type: string) => {
    switch (type) {
      case 'time':
        return (
          <>
            <RiTimerFill style={iconStyle} />
            Ready in <StyledStrong>{value} minutes </StyledStrong>
          </>
        );
      case 'bookmark':
        return (
          <>
            <BsBookmarkHeartFill style={iconStyle} />
            <StyledStrong>{value}</StyledStrong> saved
          </>
        );
      default:
        return null;
    }
  };
  return <StyledLabel>{renderByType(type)}</StyledLabel>;
}

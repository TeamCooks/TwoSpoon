import { CookingInfoProps } from './CookingInfo.types';
import { StyledBookmark, StyledDD, StyledDL, StyledDiv, StyledTimer } from './CookingInfo.styled';

export const CookingInfo = ({ time = 0, count = 0 }: CookingInfoProps): JSX.Element => {
  return (
    <StyledDL>
      <StyledDiv>
        <dt>
          <StyledTimer title="time" />
          Cooking Time
        </dt>
        <StyledDD>{time} minutes</StyledDD>
      </StyledDiv>
      <StyledDiv>
        <dt>
          <StyledBookmark title="bookmark" />
          Bookmark
        </dt>
        <StyledDD>{count} counts</StyledDD>
      </StyledDiv>
    </StyledDL>
  );
};

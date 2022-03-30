import styled from '@emotion/styled';
import { BsBookmarkHeartFill } from 'react-icons/bs';
import { RiTimerFill } from 'react-icons/ri';
import { pxToRem } from 'utils';
 
export const StyledDL = styled.dl`
  color: ${({ theme }) => theme.color.gray500};
  font-size: ${pxToRem(24)};
  padding: ${pxToRem(10)} 0;
  width: 100%;
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding: ${pxToRem(5)};
`;

export const StyledTimer = styled(RiTimerFill)`
  margin-right: 10px;
  font-size: 26px;
  vertical-align: middle;
`;

export const StyledBookmark = styled(BsBookmarkHeartFill)`
  margin-right: 10px;
  font-size: 26px;
  vertical-align: middle;
`;

export const StyledDD = styled.dd`
  font-weight: bold;
`;

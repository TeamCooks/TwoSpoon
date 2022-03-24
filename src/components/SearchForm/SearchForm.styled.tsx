import styled from '@emotion/styled';
import { media } from 'utils';
import { IconButton } from 'components';

export const StyledForm = styled.form`
  position: relative;
  width: fit-content;
`;

export const StyledInput = styled.input`
  width: 40vw;
  background: ${({ theme }) => theme.color.searchGray};
  border: none;
  border-radius: 30px;
  padding: 10px 38px 10px 18px;
  line-height: 1;

  ${media.mobile} {
    width: 50vw;
  }
`;

export const StyledIconButton = styled(IconButton)`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
`;

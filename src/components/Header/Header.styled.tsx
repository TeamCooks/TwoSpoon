import styled from '@emotion/styled';
import { IconButton } from 'components';

const headerHeight = 70;

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0 4px 10px rgba(0 0 0 / 10%);
  padding: 0 10px 0 20px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transition: top 0.2s ease-in-out;
  z-index: 10;

  &.hide {
    top: ${-1 * headerHeight}px;
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1500px;
  margin: 0 auto;
  height: ${headerHeight}px;
`;

export const StyledIconButton = styled(IconButton)`
  position: fixed;
  right: 20px;
  bottom: 20px;
  cursor: pointer;
  box-shadow: 1px 4px 9px rgb(0 0 0 / 30%);
`;

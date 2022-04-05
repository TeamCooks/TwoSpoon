import styled from '@emotion/styled';
import { IconButton } from 'components';
import { media } from 'utils';

export const StyledArticle = styled.article`
  ${media.desktop} {
    display: flex;
    gap: 3%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 20px 50px 25px 50px;
  }
  ${media.mobile} {
    padding: 20px 30px 25px 30px;
  }
`;

export const StyledHeader = styled.header`
  width: 100%;
  margin-bottom: 10px;
`;

export const StyledUl = styled.ul`
  display: flex;
  gap: 5px;
  margin: 5px 0 0 0;
`;

export const StyledIconButton = styled(IconButton)`
  &:hover {
    background: ${({ theme }) => theme.color.hoverGray};
  }
`;

export const StyledDiv = styled.div`
  ${media.desktop} {
    width: 45%;
  }
`;

export const StyledFigure = styled.figure`
  margin: 0 0 30px;
  position: relative;
`;

export const StyledImg = styled.img`
  width: 100%;
  height: 40vh;
  object-fit: cover;
`;

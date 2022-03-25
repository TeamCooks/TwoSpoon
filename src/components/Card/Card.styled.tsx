import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { media, pxToRem } from 'utils';
import { CardContainerProps, CardFigcaptionProps, CardFigureImgProps } from './Card.types';

const inlineBlock = css`
  text-align: center;
  width: 100%;
  ${media.desktop} {
    display: inline-block;
  }
`;

const typeCss = {
  wide: css`
    width: 100%;
    height: 50vw;
    object-fit: cover;

    ${media.desktop} {
      width: 100%;
      height: 250px;
    }
  `,
  square: css`
    width: 100%;

    ${media.mobile} {
      height: 50vw;
    }
    ${media.desktop} {
      height: rem(200px);
      @media (max-width: 1547px) {
        height: 20vw;
      }

      @media (max-width: 1100px) {
        height: 25vw;
      }
    }
    object-fit: cover;
  `,

  smallSquare: css`
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    ${media.mobile} {
      aspect-ratio: 16 / 9;
    }

    @media (max-width: 1056px) {
      aspect-ratio: 16 / 9;
    }
  `,
};

const headingPositionCss = {
  bottomLeft: css`
    font-size: ${pxToRem(20)};
    left: 0;
  `,
  bottomCenter: css`
    font-size: ${pxToRem(20)};
    text-align: center;
  `,
  topLeft: css`
    font-size: ${pxToRem(24)};
    color: orange;
    order: -1;
  `,
};

// const wide = css`
//   width: 100%;
//   height: 50vw;
//   object-fit: cover;

//   ${media.desktop} {
//     width: 100%;
//     height: 250px;
//   }
// `;

// const square = css`
//   width: 100%;

//   ${media.mobile} {
//     height: 50vw;
//   }
//   ${media.desktop} {
//     height: rem(200px);
//     // 2행
//     @media (max-width: 1547px) {
//       height: 20vw;
//     }

//     @media (max-width: 1100px) {
//       height: 25vw;
//     }
//   }
//   object-fit: cover;
// `;

// const smallSquare = css`
//   width: 100%;
//   aspect-ratio: 1 / 1;
//   object-fit: cover;
//   ${media.mobile} {
//     aspect-ratio: 16 / 9;
//   }

//   @media (max-width: 1056px) {
//     aspect-ratio: 16 / 9;
//   }
// `;

// const bottomLeft = css`
//   font-size: ${pxToRem(20)};
//   left: 0;
// `;

// const bottomCenter = css`
//   font-size: ${pxToRem(20)};
//   text-align: center;
// `;
// const topLeft = css`
//   font-size: ${pxToRem(24)};
//   color: orange;
//   order: -1;
// `;

export const CardLink = styled.a`
  width: 100%;
  border: none;
  background-color: transparent;
  text-align: left;
  ${media.mobile} {
    width: 100%;
  }
`;

export const CardContainer = styled.div<CardContainerProps>`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: ${pxToRem(16)};
  position: relative;
  cursor: pointer;

  background: ${({ $background }) => ($background === 'white' ? 'white' : 'none')};
  box-shadow: ${({ $background }) => $background === 'white' && '0px 4px 4px rgba(0, 0, 0, 0.25);'};

  ${({ $type }) => $type === 'square' && inlineBlock}
`;

export const CardFigureImgContainer = styled.div<CardFigureImgProps>`
  ${({ $type }) => typeCss[$type]}
`;

export const CardFigcaption = styled.figcaption<CardFigcaptionProps>`
  font-size: ${pxToRem(18)};
  font-weight: bold;
  padding: ${pxToRem(16)} 0;
  width: 100%;

  ${({ $headingPosition }) => headingPositionCss[$headingPosition]}
`;

export const CardSummary = styled.div`
  line-height: ${pxToRem(24)};
  ${media.desktop} {
    display: -webkit-box;
    word-wrap: break-word;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    &:after {
      content: '';
      color: black;
      position: absolute;
      display: block;
      width: 100%;
      height: 30%;
      bottom: 0;
      left: 0;
      background: linear-gradient(to top, #fff 50%, transparent);
    }
  }
  ${media.mobile} {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    word-wrap: break-word;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const CardSummaryText = styled.p`
  margin-top: 0;
  margin-bottom: ${pxToRem(8)};
`;

export const CardButton = styled.button`
  ${media.mobile} {
    display: none;
  }

  padding: ${pxToRem(8)} 0;
  font-size: ${pxToRem(24)};
  z-index: 1;
  margin: 0;

  display: flex;
  gap: 10px;
  border: none;
  background: none;
  justify-content: center;
`;

import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';
import {
  SkeletonSummaryProps,
  SkeletonTitleProps,
  SkeletonTypeProps,
  SkeletonWrapperProps,
} from './SkeletonCard.types';
import { media, pxToRem } from 'utils';

const skeleton = keyframes`
    0% {
      background-color: rgba(165, 165, 165, 0.1);
    }
  
    50% {
      background-color: rgba(165, 165, 165, 0.3);
    }
  
    100% {
      background-color: rgba(165, 165, 165, 0.1);
    }
`;

const inlineBlock = css`
  display: flex;
  justify-content: center;
`;

const typeCss = {
  square: css`
    width: ${pxToRem(200)};
    height: ${pxToRem(200)};
    background: gray;
  `,
  wide: css`
    width: 100%;
    height: 50vw;
    background: gray;

    ${media.desktop} {
      width: 100%;
      height: 250px;
    }
  `,
};

const hasSummaryTrue = css`
  display: block;
  width: 100%;
  height: ${pxToRem(20)};
  background: gray;
  position: relative;
  overflow: hidden;

  -webkit-animation: ${skeleton} 1.8s infinite ease-in-out;
  animation: ${skeleton} 1.8s infinite ease-in-out;
`;

const hasSummaryFalse = css`
  display: none;
`;

const headingPositionCss = {
  bottomLeft: css`
    background: gray;
    left: 0;
  `,
  bottomCenter: css`
    background: gray;
    align-self: center;
  `,
  topLeft: css`
    background: gray;
    order: -1;
  `,
};

export const SkeletonContainer = styled.div<SkeletonTypeProps>`
  ${(props) => props.$type === 'square' && inlineBlock}
`;

export const SkeletonCardWrapper = styled.div<SkeletonWrapperProps>`
  ${(props) => props.$type === 'square' && inlineBlock};

  display: flex;
  flex-direction: column;
  padding: ${pxToRem(16)};
  position: relative;

  background: ${(props) => (props.$background === 'white' ? 'white' : 'none')};
  box-shadow: ${(props) => props.$background === 'white' && '0px 4px 4px rgba(0, 0, 0, 0.25);'};
`;

export const SkeletonImage = styled.div<SkeletonTypeProps>`
  ${({ $type }) => typeCss[$type]}

  overflow: hidden;
  position: relative;

  -webkit-animation: ${skeleton} 1.8s infinite ease-in-out;
  animation: ${skeleton} 1.8s infinite ease-in-out;
`;

export const SkeletonTitle = styled.div<SkeletonTitleProps>`
  ${({ $headingPosition }) => headingPositionCss[$headingPosition]}

  margin: ${pxToRem(16)} 0 !important;
  width: 70%;
  max-width: 100%;
  height: ${pxToRem(20)};
  background: gray;
  display: block;
  overflow: hidden;
  position: relative;

  -webkit-animation: ${skeleton} 1.8s infinite ease-in-out;
  animation: ${skeleton} 1.8s infinite ease-in-out;
`;

export const SkeletonSummary = styled.div<SkeletonSummaryProps>`
  ${({ $hasSummary }) => ($hasSummary ? hasSummaryTrue : hasSummaryFalse)}
`;

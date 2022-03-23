import styled from '@emotion/styled';
import { pxToRem } from 'utils';
import { CardContainerProps } from './Card.types';

export const CardContainer = styled.div<CardContainerProps>`
  ${(props) => props.$background === 'white'}

  height: 100%;
  display: flex;
  flex-direction: column;
  padding: ${pxToRem(16)};
  position: relative;
  cursor: pointer;
`;

// .wide {
//     width: 100%;
//     height: 50vw;
//     object-fit: cover;

//     @include desktop {
//       width: 100%;
//       height: 250px;
//     }
//   }

//   .square {
//     width: 100%;

//     @include mobile {
//       height: 50vw;
//     }
//     @include desktop {
//       height: rem(200px);
//       // 2행
//       @media (max-width: 1547px) {
//         height: 20vw;
//       }

//       @media (max-width: 1100px) {
//         height: 25vw;
//       }
//     }
//     object-fit: cover;
//   }

//   .smallSquare {
//     width: 100%;
//     aspect-ratio: 1 / 1;
//     object-fit: cover;
//     @include mobile {
//       aspect-ratio: 16 / 9;
//     }

//     @media (max-width: 1056px) {
//       aspect-ratio: 16 / 9;
//     }
//   }

//   .cardButton {
//     width: 100%;
//     border: none;
//     background-color: transparent;
//     text-align: left;
//     @include mobile {
//       width: 100%;
//     }
//   }

//   .inlineBlock {
//     text-align: center;
//     width: 100%;
//     @include desktop {
//       display: inline-block;
//     }
//   }

//   .white {
//     background: white;
//     box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
//   }

//   .none {
//     background: none;
//   }

//   .title {
//     font-size: rem(18px);
//     font-weight: bold;
//     padding: rem(16px) 0;
//     width: 100%;
//   }

//   // hasSummary
//   .summary {
//     line-height: rem(24px);
//     @include desktop {
//       display: -webkit-box;
//       word-wrap: break-word;
//       -webkit-box-orient: vertical;
//       overflow: hidden;
//       text-overflow: ellipsis;
//       &:after {
//         content: '';
//         color: black;
//         position: absolute;
//         display: block;
//         width: 100%;
//         height: 30%;
//         bottom: 0;
//         left: 0;
//         background: linear-gradient(to top, #fff 50%, transparent);
//       }
//     }
//     @include mobile {
//       display: -webkit-box;
//       -webkit-line-clamp: 1; /* 라인수 */
//       word-wrap: break-word;
//       -webkit-box-orient: vertical;
//       overflow: hidden;
//       text-overflow: ellipsis;
//     }
//   }

//   // headingPosition
//   .bottom {
//     font-size: rem(20px);
//     &Left {
//       left: 0;
//     }
//     &Center {
//       text-align: center;
//     }
//   }

//   .topLeft {
//     font-size: rem(24px);
//     color: orange;
//     order: -1;
//   }

//   .more {
//     @include mobile {
//       display: none;
//     }
//     // border: 1px solid linear-gradient(to right, gray, $primary_green);
//     // background: linear-gradient(to right, #d4fc79, #96e6a1);
//     padding: rem(8px) 0;
//     // text-align: center;
//     font-size: rem(24px);
//     z-index: 1;
//     margin: 0;

//     display: flex;
//     gap: 10px;
//     border: none;
//     background: none;
//     justify-content: center;
//   }

//   .text {
//     margin-top: 0;
//     margin-bottom: rem(8px);
//   }

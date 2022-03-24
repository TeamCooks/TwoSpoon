import { css, Global } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';

export const GlobalStyle = () => (
  <Global
    styles={css`
      ${emotionNormalize}
      /* 시맨틱 태그 iE 맞춤 */
    header,
    footer,
    main,
    section,
    article,
    aside,
    nav,
    figure,
    figcaption {
        display: block;
      }

      /* 기본 스타일 */
      /* 기본 박스 사이징 설정 */

      body,
      body::before,
      body::after,
      body *,
      body *::before,
      body *::after {
        box-sizing: border-box;
      }

      /* 본문 기본 폰트, 글자 크기, 굵기, 배경 색상 지정 */
      /* @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap'); */

      @font-face {
        font-family: 'Montserrat';
        font-weight: normal;
        font-style: normal;
        src: url('/fonts/Montserrat-Regular.woff2') format('woff2'), url('/fonts/Montserrat-Bold.woff2') format('woff2');
        font-display: block;
        unicode-range: U+000-5FF;
      }

      body {
        font-family: 'Montserrat', 'Roboto', sans-serif;
        font-size: inherit;
        position: relative;
      }

      /* 제목 글자 크기 및 굵기 재지정 */
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-size: 100%;
        font-weight: inherit;
        margin: 0;
      }

      /* 목록 안쪽 여백 및 불릿 제거 */
      ul,
      ol {
        padding-left: 0;
        list-style: none;
      }

      /* 이미지에 발생하는 갭 제거 */
      img {
        vertical-align: middle;
      }

      /* 링크 요소의 밑줄 및 글자 색상 재 정의 */
      a {
        color: inherit;
        text-decoration: none;
      }

      /* 주소 및 강조 요소 스타일 재 정의 */
      address,
      em {
        font-style: normal;
      }

      /* fieldset 요소의 테두리 및 여백 제거 */
      fieldset {
        border: 0;
        padding: 0;
        margin: 0;
      }

      /* 버튼 마우스 스타일 설정 */
      button {
        cursor: pointer;
        color: inherit;
        font-size: inherit;
      }

      /* form 요소 스타일 설정 */
      input::-ms-clear,
      input::-ms-reveal {
        display: none;
      }
      input::-webkit-search-decoration,
      input::-webkit-search-cancel-button,
      input::-webkit-search-results-button,
      input::-webkit-search-results-decoration {
        display: none;
      }

      input,
      button,
      textarea {
        appearance: none;
        -webkit-appearance: none;
      }

      /* figure 기본 스타일 제거 */
      figure {
        margin: 0;
      }

      /* 접근성 관련 css */
      .a11yHidden {
        overflow: hidden;
        position: absolute !important;
        clip: rect(0, 0, 0, 0);
        clip-path: inset(50%);
        width: 1px;
        height: 1px;
        margin: -1px;
      }
    `}
  />
);

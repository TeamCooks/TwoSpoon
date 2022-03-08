import React from 'react';
import PropTypes from 'prop-types';

import { Header } from '../header/header';
import './page.css';

export const Page = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <article>
    <Header user={user} onLogin={onLogin} onLogout={onLogout} onCreateAccount={onCreateAccount} />

    <section>
      <h2>Storybook 페이지</h2>
      <p>
        아토믹(atomic) 컴포넌트로 시작하여 페이지(page)로 끝나는{' '}
        <a href="https://componentdriven.org" target="_blank" rel="noopener noreferrer">
          <strong>컴포넌트 주도 개발(CDD)</strong>
        </a>{' '}
        프로세스로 사용자 인터페이스를 빌딩하는 것을 권장합니다.
      </p>
      <p>
        모의(mock) 데이터를 사용해 페이지 컴포넌트를 렌더링합니다. 
        이렇게 하면 앱을 직접 구동하지 않고도, 특정 페이지를 쉽게 빌드하고 검토할 수 있습니다. 
        다음은 Storybook에서 페이지 데이터를 관리하기 위한 몇 가지 유용한 패턴입니다.
      </p>
      <ul style={{ paddingLeft: '1em' }}>
        <li>
          하위 컴포넌트 스토리의 <code>args</code>를 가져와 상위 컴포넌트 스토리 데이터를 구성할 수 있습니다.
        </li>
        <li>
          서비스(service)를 사용해 페이지 컴포넌트에 데이터를 공급할 수 있습니다.
        </li>
      </ul>
      <p>
        Storybook을 사용해 컴포넌트 주도 개발(CDD)하는 방법은{' '}
        <a href="https://storybook.js.org/tutorials/" target="_blank" rel="noopener noreferrer">
          Storybook 튜토리얼
        </a>
        을 참고합니다. 
        보다 자세한 사용법은 <a href="https://storybook.js.org/docs" target="_blank" rel="noopener noreferrer">문서</a>를 참고하세요.
      </p>
      <div className="tip-wrapper">
        <span className="tip">팁(Tip)</span> 
        <span>
          툴바 뷰포트 애드온({' '} 
            <svg width="10" height="10" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fillRule="evenodd">
                <path
                  d="M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z"
                  id="a"
                  fill="#999"
                />
              </g>
            </svg>
          )을 사용해 캔버스(canvas) 너비를 조정할 수 있습니다.
        </span>
      </div>
    </section>
  </article>
);

Page.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Page.defaultProps = {
  user: null,
};

import './button.css';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * UI 인터랙션을 위한 기본 UI 컴포넌트
 */
export const Button = ({ primary, backgroundColor, size, label, ...props }) => {
  
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';

  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  /**
   * 프라이머리 버튼 설정
   */
  primary: PropTypes.bool,
  /**
   * 배경 색상 설정
   */
  backgroundColor: PropTypes.string,
  /**
   * 버튼 크기 설정
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * 버튼 콘텐츠
   */
  label: PropTypes.string.isRequired,
  /**
   * 클릭 이벤트 핸들러 (옵션)
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};

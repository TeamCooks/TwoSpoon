import React from 'react';
import { Button } from './button';

// 기본 내보내기 참고: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  
  // decorators 참고: https://storybook.js.org/docs/react/writing-stories/decorators#component-decorators
  // decorators: [(story) => <div style={{ margin: 30 }}>{story()}</div>],

  // argTypes 참고: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// 컴포넌트 템플릿 참고: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// args 참고: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: '프라이머리',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: '세컨더리',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: '라지',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: '스몰',
};

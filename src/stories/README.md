# CRA + Storybook

## Storybook 초기화

```sh
npx sb@latest init
```

## 스타일 설정

**src/.storybook/preview.js**

```js
import '../src/styles/global.css';
```

## Storybook 절대 경로 설정

**src/.storybook/webpack.config.js**

```js
const path = require('path');

module.exports = ({config}) => {
  config.resolve.alias = {
    ...config.resolve.alias,
    '@': path.resolve(process.cwd(), 'src'),
  };
  return config;
}
```
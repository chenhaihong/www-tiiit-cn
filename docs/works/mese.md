---
order: 2000
nav:
  title: 作品
  order: 9
---

# mese

一个简陋的 React SSR 框架。

- 使用文档：[https://mese.tiiit.cn/](https://mese.tiiit.cn/)
- 代码仓库：[https://github.com/chenhaihong/mese](https://github.com/chenhaihong/mese)

## 使用示例

```javascript
import React from 'react';
export function createPage({ path, query, preloadedStateString }) {
  const { helloworld } = JSON.parse(preloadedStateString);
  return (
    <div className="app">
      <h1 className="title">mese</h1>
      <p className="description">{helloworld}</p>
    </div>
  );
}

export async function getPreloadedStateString({ path, query, fetch }) {
  const { type } = query;
  return await fetch(`http://localhost:3000/get/json?type=${type}`, {
    method: 'GET',
  }).then(res => res.text());
}

export async function getPageConfig({ path, query, fetch }) {
  return {
    onMemoryCache: false,
    onSSR: true,
    onCSR: false,
    head: {
      beforePageCSS: '',
      afterPageCSS: '',
    },
    body: {
      beforePageJs: '',
      afterPageJs: '',
    },
  };
}
```

---
title: 首页 | 陈海宏
hero:
  title: 陈海宏
  desc: Web FE at Guangzhou
  actions:
    - text: 作品
      link: /works

# features:
#   - title: smash-cli
#     desc: A tiny task manager for JavaScript projects
#   - title: mese
#     desc: 一个简易的 react ssr 框架
#   - title: 地图lite
#     desc: 一个地图小程序
#   - title: VS Code Lite
#     desc: 一个 Chrome 扩展，提供阅读代码、编辑代码等功能。

footer:
  本网站属于个人技术分享网站，使用 [dumi](https://d.umijs.org) 工具构建生成，是一个纯静态网站<br />
  [粤ICP备18035177号-1](http://www.beian.miit.gov.cn/) |
  [粤公网安备 44011302002141号](http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44011302002141)
---

<br/>
<br/>

```js
import React, { Component } from 'react';
import { Time } from 'Time';
import { withChinaIsGettingBetter } from 'ChinaHook';
import { withIAmGettingBetter } from 'IHook';

export default function TimeIsGoing() {
  const { chinaProps } = withChinaIsGettingBetter();
  const { iProps } = withIAmGettingBetter();

  return <Time {...chinaProps} {...iProps} />;
}
```

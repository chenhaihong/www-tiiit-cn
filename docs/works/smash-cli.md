---
order: 1000
nav:
  title: 作品
  order: 9
---

# smash-cli

一个小巧的任务管理工具，可以用来快速配置开发任务，

- 文档：[https://smash.tiiit.cn/](https://smash.tiiit.cn/)
- 代码仓库：[https://github.com/chenhaihong/smash-cli](https://github.com/chenhaihong/smash-cli)

## 使用示例

```yaml
install:
  - name: smash-middleware-shell
    commands:
      - npm i -g yarn yrm nrm --registry=https://registry.npm.taobao.org
      - nrm use taobao
      - yrm use taobao
      - yarn install

dev:
  - name: smash-middleware-copy
    files:
      - src/assets/images -> /dist/images
  - name: smash-middleware-webpack-v4
    type: dev-server

build:
  - name: smash-middleware-clean
    remove: true
    dirs:
      - ./dist
  - name: smash-middleware-copy
    files:
      - src/assets/images -> /dist/images
  - name: smash-middleware-webpack-v4
    type: build
```

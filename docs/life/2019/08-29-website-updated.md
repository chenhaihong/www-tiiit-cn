---
order: 90000000
nav:
  title: 生活随记
  order: 10
group:
  title: 2019
---

# 08-29 更新啦！！

个人网站用 docusaurus 工具来生成，很方便。

## 初始化

执行下面命令生成基础文件：

```bash
$ npm install --global docusaurus-init
$ docusaurus-init
```

## 开发

```bash
# 安装依赖
$ npm i -g smash-cli
$ smash run install

# 本地开发
# A browser window will open up at http://localhost:3000
$ smash run start
```

## 构建

push 到 github 仓库后，actions 会自动开启构建。构建成功后，会访问 webhook api 通知 web 服
务器更新代码。

主动构建，

```bash
# 生成静态文件
$ smash run build

# 构建，并提交到gh-pages分支，所有更改会通过webhooks自动更新到站点的web服务器上
$ smash run gh-pages
```

## Links

docusaurus 构建文档：
<a href="https://docusaurus.io/docs/en/commands#docusaurus-build" target="_blank" rel="nofollow">https://docusaurus.io/docs/en/commands#docusaurus-build</a>

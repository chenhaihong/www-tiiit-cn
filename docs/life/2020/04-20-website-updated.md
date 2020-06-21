---
order: 90000000
group:
  order: 10000000
  title: 2020
---

# 04-20 换成 `dumi` 了

换用 `dumi` 了，相比 `docusaurus`，使用很简单，开发体验好，构建速度非常快。

~~不过，暂时只有 `CSR`。~~ 新版本已经支持预渲染、ssr 了。

因为这里用的是 `CSR` 和 `SPA`，所以 `nginx` 做个 `fallback` 配置， `fallback` 到入口页面。

```nginx
server {
    listen 443 ssl;
    server_name www.tiiit.cn;

    location / {
        index index.html;
        try_files $uri $uri/ /index.html;
    }
}
```

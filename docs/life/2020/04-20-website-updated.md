---
order: 90000000
group:
  order: 10000000
  title: 2020
---

# 04-20 换成 `dumi` 了

换用 `dumi` 了，相比 `docusaurus`，使用很简单，开发体验好，构建速度非常快。

不过，暂时只有 `CSR`。

因为是 `SPA`，所以 `nginx` 配置要做个 fallback。

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

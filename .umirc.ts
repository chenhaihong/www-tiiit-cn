import { defineConfig } from 'dumi';

export default defineConfig({
  title: '陈海宏',
  mode: 'site',
  logo: 'logo',
  locales: [['zh-CN', '中文']],
  // 单语言配置方式如下
  navs: [
    null, // null 值代表保留约定式生成的导航，只做增量配置
    {
      title: 'GitHub',
      path: 'https://github.com/chenhaihong',
    },
    {
      title: '语雀',
      path: 'https://www.yuque.com/erye',
    },
  ],
  // more config: https://d.umijs.org/config
});

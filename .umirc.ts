import { defineConfig } from 'dumi';

export default defineConfig({
  base: '/',
  title: '读书笔记--我心爱的树华',
  description: '读书笔记--我心爱的树华',
  favicon: '/images/favicon.ico',
  logo: '/images/logo.png',
  mode: 'site',
  navs: [
    null, // null 值代表保留约定式生成的导航，只做增量配置
    {
      title: 'GitHub',
      path: 'https://github.com/crystalsis/md',
    },
  ],
  ssr: {},
  exportStatic: {},
  // more config: https://d.umijs.org/config
});

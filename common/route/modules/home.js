/**
 * 模块——首页
 */

const VafAuthLevel = 0; // 匿名能访问

export default [
  {
    path: "/home",
    meta: {
      // 把path当做id就行了,
      // 当与左侧菜单的id匹配上, 就会高亮左侧菜单.
      VafId: "/home",
      VafAuthLevel,
      title: "首页",
    },
    component: () => import("@pages/Home/Home.vue"),
  },
];

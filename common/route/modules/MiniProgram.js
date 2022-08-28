/**
 * 模块——小程序
 */

const VafAuthLevel = 0; // 匿名能访问

export default [
  {
    path: "/mini-program/map-lite",
    meta: {
      VafId: "/mini-program/map-lite",
      VafAuthLevel,
      title: "地图lite",
    },
    component: () => import("@pages/MiniProgram/MapLite.vue"),
  },
  {
    path: "/mini-program/route-lite",
    meta: {
      VafId: "/mini-program/route-lite",
      VafAuthLevel,
      title: "公交lite",
    },
    component: () => import("@pages/MiniProgram/RouteLite.vue"),
  },
];

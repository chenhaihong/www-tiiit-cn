const VafAuthLevel = 0; // 匿名能访问

export default [
  {
    path: "/site/dwz",
    meta: {
      VafId: "/site/dwz",
      VafAuthLevel,
      title: "短网址",
    },
    component: () => import("@pages/site/Dwz.vue"),
  },
];

const VafAuthLevel = 0; // 匿名能访问

export default [
  {
    path: "/erye-vaf/intro",
    meta: {
      VafId: "/erye-vaf/intro",
      VafAuthLevel,
      title: "关于@erye/vaf",
    },
    component: () => import("@pages/EryeVaf/Intro.vue"),
  },
  {
    path: "/erye-vaf/doc",
    meta: {
      VafId: "/erye-vaf/doc",
      VafAuthLevel,
      title: "相关文档",
    },
    component: () => import("@pages/EryeVaf/Doc.vue"),
  },
  {
    path: "/erye-vaf/vaf-pro-form",
    meta: {
      VafId: "/erye-vaf/vaf-pro-form",
      VafAuthLevel,
      title: "vaf-pro-form",
    },
    component: () => import("@pages/EryeVaf/VafProForm.vue"),
  },
  {
    path: "/erye-vaf/vaf-pro-table",
    meta: {
      VafId: "/erye-vaf/vaf-pro-table",
      VafAuthLevel,
      title: "vaf-pro-table",
    },
    component: () => import("@pages/EryeVaf/VafProTable.vue"),
  },
];

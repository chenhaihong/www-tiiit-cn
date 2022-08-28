export default {
  logo: "/images/deer.png", // 侧边栏上的logo的地址
  menus: [
    {
      type: "router-link",
      id: "/module--home",
      path: "/home",
      title: "首页",
      icon: "House",
      authLevel: 0,
      children: [
        {
          type: "router-link",
          id: "/home",
          path: "/home",
          title: "首页",
          authLevel: 0,
        },
      ],
    },
    {
      type: "router-link",
      id: "/my-work",
      path: "/mini-program/map-lite",
      title: "我的作品",
      authLevel: 0,
      children: [
        {
          type: "router-link",
          id: "/mini-program",
          path: "/mini-program/map-lite",
          title: "小程序",
          authLevel: 0,
          children: [
            {
              type: "router-link",
              id: "/mini-program/map-lite",
              path: "/mini-program/map-lite",
              title: "地图lite",
              authLevel: 0,
            },
            {
              type: "router-link",
              id: "/mini-program/route-lite",
              path: "/mini-program/route-lite",
              title: "公交lite",
              authLevel: 0,
            },
          ],
        },
        {
          type: "router-link",
          id: "/site",
          path: "/site/dwz",
          title: "站点",
          authLevel: 0,
          children: [
            {
              type: "router-link",
              id: "/site/dwz",
              path: "/site/dwz",
              title: "短网址",
              authLevel: 0,
            },
          ],
        },
        {
          type: "router-link",
          id: "/erye-vaf",
          path: "/erye-vaf/intro",
          title: "@erye/vaf",
          authLevel: 0,
          children: [
            {
              type: "router-link",
              id: "/erye-vaf/intro",
              path: "/erye-vaf/intro",
              title: "介绍",
              authLevel: 0,
            },
            {
              type: "router-link",
              id: "/erye-vaf/doc",
              path: "/erye-vaf/doc",
              title: "相关文档",
              authLevel: 0,
            },
            {
              type: "router-link",
              id: "/erye-vaf/vaf-pro-form",
              path: "/erye-vaf/vaf-pro-form",
              title: "Pro表单",
              authLevel: 0,
            },
            {
              type: "router-link",
              id: "/erye-vaf/vaf-pro-table",
              path: "/erye-vaf/vaf-pro-table",
              title: "Pro表格",
              authLevel: 0,
            },
          ],
        },
      ],
    },
  ],
};

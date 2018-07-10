// 菜单配置
// headerMenuConfig：头部导航配置

const headerMenuConfig = [
  // {
  //   name: '首页',
  //   path: '/',
  //   icon: 'home',
  // },
  // {
  //   name: '反馈',
  //   path: 'https://github.com/alibaba/ice',
  //   external: true,
  //   newWindow: true,
  //   icon: 'message',
  // },
  // {
  //   name: '帮助',
  //   path: 'https://alibaba.github.io/ice',
  //   external: true,
  //   newWindow: true,
  //   icon: 'bangzhu',
  // },
];

// asideMenuConfig：侧边导航配置

const getAsideMenuConfig = () => {
  let asideMenuConfig = [
    {
      name: '员工',
      path: '/shop/wxshop1',
      icon: 'home',
    },
    {
      name: '账单',
      path: '/shop/wxshop2',
      icon: 'home',
    },
    {
      name: '会员',
      path: '/member',
      icon: 'home',
    },
    {
      name: '粉丝',
      path: '/shop/wxshop3',
      icon: 'home',
    },
    {
      name: '卡券',
      path: '/shop/wxshop4',
      icon: 'home',
    },
    {
      name: '营销',
      path: '/shop/wxshop5',
      icon: 'home',
    },
    {
      name: '统计',
      path: '/shop/wxshop6',
      icon: 'home',
    },
    {
      name: '设置',
      path: '/shop/wxshop7',
      icon: 'home',
    },
    {
      name: '数据中心',
      path: '/shop/wxshop8',
      icon: 'home',
    },
  ];

  return asideMenuConfig;
};

export { headerMenuConfig, getAsideMenuConfig };

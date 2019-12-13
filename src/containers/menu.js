const menu = [
  {
    key: '/index',
    title: '首页',
    icon: 'home',
    auth: [1]
  },
  {
    title: '矿工管理',
    key: '/miner-manage',
    icon: 'team',
    auth: [1],
    subs: [{ title: '添加矿工', key: '/miner-manage/add-miner', icon: '' }, { title: '移除矿工', key: '/miner-manage/remove-miner', icon: '' }]
  },
  {
    title: '矿机管理',
    key: '/device-manage',
    icon: 'desktop',
    auth: [1],
    subs: [{ title: '在线', key: '/device-manage/online', icon: '' }, { title: '离线', key: '/device-manage/offline', icon: '' }]
  },
  {
    title: '挖矿记录',
    key: '/mine-record',
    icon: 'account-book',
    auth: [1],
    subs: [{ title: 'POLAR', key: '/mine-record/polar', icon: '' }, { title: 'FILECOIN', key: '/mine-record/filecoin', icon: '' }]
  },
  {
    title: '交易记录',
    key: '/transactions',
    icon: 'transaction',
    auth: [1],
    subs: [{ title: 'OTC', key: '/transactions/otc', icon: '' }, { title: '提取', key: '/transactions/withdraw', icon: '' }]
  },
  {
    title: '权限管理',
    key: '/authority-manage',
    icon: 'cluster',
    auth: [1],
    subs: [{ title: '添加管理员', key: '/public/button', icon: '' }, { title: '图标', key: '/public/icon', icon: '' }]
  },
  {
    title: '关于',
    key: '/about',
    icon: 'user',
    auth: [1]
  }

  /*
   * {
   *   title: '其它',
   *   key: '/others',
   *   icon: 'paper-clip',
   *   auth: [1],
   *   subs: [
   *     { title: '进度条', key: '/others/progress', icon: '' },
   *     { title: '动画', key: '/others/animation', icon: '' },
   *     { title: '上传', key: '/others/upload', icon: '' },
   *     { title: '富文本', key: '/others/editor', icon: '' },
   *     { title: '404', key: '/404', icon: '' },
   *     { title: '500', key: '/500', icon: '' }
   *   ]
   * },
   * {
   *   title: '多级导航',
   *   key: '/one',
   *   icon: 'bars',
   *   subs: [
   *     {
   *       title: '二级',
   *       key: '/one/two',
   *       icon: '',
   *       subs: [{ title: '三级', key: '/one/two/three', icon: '' }]
   *     }
   *   ]
   * },
   */

]

export default menu

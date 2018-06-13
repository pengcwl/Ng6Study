export const PAGES_MENU = [
  {
    path: 'home',
    children: [
      {
        path: 'user',
        menu: {
          title: '用户管理',
          icon: 'menu-archive',
          selected: false
        },
        children: [
          {
            path: 'userInfo',
            menu: {
              title: '用户信息管理',
              icon: null,
              selected: false
            }
          }
        ]
      },
      {
        path: 'student',
        menu: {
          title: '学生信息管理',
          icon: null,
          selected: true
        },
        children: [
          {
            path: 'studentinfo',
            menu: {
              title: '学生信息',
              icon: null,
              selected: false
            }
        }]
      }
    ]
  }
];

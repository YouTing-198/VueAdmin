import Layout from '../../layout'
export default {
  path: '/sys',
  name: 'sys:menus:list',
  redirect: '/sys/menus',
  meta: {
    title: '系统管理',
    icon: 'avatar'
  },
  component: Layout,
  children: [
    {
      path: '/sys/menus',
      component: () => import('../../views/menus'),
      meta: {
        title: '菜单管理',
        icon: 'el-icon-s-custom'
      }
    }
  ]
}

import Layout from '../../layout'
export default {
  path: '/sys',
  name: 'sys:roles:list',
  redirect: '/sys/roles',
  meta: {
    title: '系统管理',
    icon: 'avatar'
  },
  component: Layout,
  children: [
    {
      path: '/sys/roles',
      component: () => import('../../views/roles'),
      meta: {
        title: '角色管理',
        icon: 'el-icon-s-custom'
      }
    }
  ]
}

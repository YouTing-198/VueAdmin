import Layout from '../../layout'
export default {
  path: '/tool',
  name: 'sys:dicts:list',
  redirect: '/tool/dicts',
  meta: {
    title: '系统工具',
    icon: 'avatar'
  },
  component: Layout,
  children: [
    {
      path: '/tool/dicts',
      component: () => import('../../views/dicts'),
      meta: {
        title: '数字字典',
        icon: 'el-icon-s-custom'
      }
    }
  ]
}

import router from '@/router'
import store from '@/store'

router.beforeEach(async (to, from, next) => {
  const token = store.getters.token
  if (token) {
    if (to.path === '/login') {
      next(from.path)
    } else {
      const userInfo = store.getters.userInfo
      const navData = store.getters.nav
      if (userInfo && navData) {
        next()
      } else {
        const response = await store.dispatch('user/getUserInfo')
        const { authoritys } = await store.dispatch('user/getNav')
        if (response && authoritys) {
          const routes = await store.dispatch(
            'permission/filterRoutes',
            authoritys
          )
          if (routes) {
            routes.forEach((item) => {
              router.addRoute(item)
            })
            return next(to.path)
          }
        } else {
          next('/login')
        }
      }
    }
  } else {
    if (to.path === '/login') {
      next()
    } else {
      next('/login')
    }
  }
})

/**
 * 1. 定义私有路由表
 * 2. 在权限拦截器 获取 当前用户所拥有的私有路由权限数据
 * 3. 通过后台返回私有路由权限数据 匹配出该用户所拥有的私有表
 * 4. 动态的添加到 路由表中
 * 5. 动态添加完路由表之后 进入对应路由是要通过next指定要进入的路由  return next(to.path)
 */

import request from '@/utils/request'
/**
 * 验证码接口
 */
export const getCaptcha = () => {
  return request({ url: '/captcha', method: 'GET' })
}
/**
 * 登录接口
 */
export const getLogin = (data) => {
  return request({
    url: `/login?username=${data.username}&password=${data.password}&code=${data.code}&token=${data.token}`,
    method: 'POST'
  })
}
/**
 * 获取用户信息接口
 */
export const getUserInfo = () => {
  return request({ url: '/sys/userInfo', method: 'GET' })
}
/**
 * 获取权限信息
 */
export const getNav = () => {
  return request({ url: '/sys/menu/nav', method: 'GET' })
}
/**
 * 退出登录接口
 */
export const logout = () => {
  return request({ url: '/logout', method: 'POST' })
}

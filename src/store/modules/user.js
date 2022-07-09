import { getLogin, getUserInfo, getNav, logout } from '@/api/user'
import { setItem, getItem } from '@/utils/storage'
const TOKEN_KEY = 'token'
export default {
  namespaced: true,
  state: {
    token: getItem(TOKEN_KEY) || '',
    userInfo: '',
    nav: ''
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token
      setItem(TOKEN_KEY, token)
    },
    SET_USER_INFO(state, userInfo) {
      state.userInfo = userInfo
    },
    SET_NAV(state, nav) {
      state.nav = nav
    }
  },
  actions: {
    async login({ commit }, payload) {
      const response = await getLogin(payload)
      return response
    },
    async getUserInfo({ commit }) {
      const response = await getUserInfo()
      commit('SET_USER_INFO', response)
      console.log('user', response)
      return response
    },
    async getNav({ commit }) {
      const response = await getNav()
      commit('SET_NAV', response)
      console.log('nav', response)
      return response
    },
    async logout({ commit }) {
      const response = await logout()
      commit('SET_TOKEN', '')
      commit('SET_USER_INFO', '')
      commit('SET_NAV')
      console.log(response)
    }
  }
}

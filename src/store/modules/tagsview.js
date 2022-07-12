import { getItem, setItem } from '@/utils/storage'

export default {
  namespaced: true,
  state: {
    tags: getItem('tags') || []
  },
  mutations: {
    addTag(state, tag) {
      const data = state.tags.find((item) => item.path === tag.path)
      if (!data) {
        state.tags.push(tag)
        setItem('tags', state.tags)
      }
    },
    delTag(state, tag) {
      state.tags.splice(tag, 1)
    }
  },
  actions: {
    addTag({ commit }, tag) {
      commit('addTag', tag)
    },
    delTag({ commit }, tag) {
      commit('delTag', tag)
    }
  }
}

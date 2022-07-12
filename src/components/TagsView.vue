<template>
  <div class="tags-view-container">
    <ul>
      <li
        :class="{ active: item.path === $route.path }"
        @click="handleToTarget(item.path)"
        v-for="(item, index) in tags"
        :key="item"
      >
        <span>{{ item.title }}</span>
        <i
          @click.stop="handleDeleteTag(index, item.path)"
          v-if="item.path === $route.path"
          class="close"
          >x</i
        >
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed, watch } from 'vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()
const route = useRoute()
const tags = computed(() => {
  return store.getters.tagsview
})
const handleToTarget = (path) => {
  if (path) {
    router.push(path)
  }
}
watch(
  () => router.currentRoute.value.path,
  (toPath) => {
    if (route.meta && route.meta.title && route.path) {
      const obj = {
        title: route.meta.title,
        path: route.path
      }
      console.log(obj)
      store.dispatch('tagsview/addTag', obj)
    }
  },
  {
    immediate: true,
    deep: true
  }
)
const handleDeleteTag = (index, routePath) => {
  if (routePath === '/index') {
    return
  }
  let path = ''
  if (index === tags.value.length - 1) {
    if (index !== 0) {
      path = tags.value[index - 1].path
        ? tags.value[index - 1].path
        : tags.value[index].path
    } else {
      path = tags.value[index].path
      return
    }
  } else if (tags.value.length !== 1) {
    path = tags.value[index + 1].path
  }
  router.push(path)
  store.dispatch('tagsview/delTag', index)
}
</script>

<style scoped lang="scss">
.tags-view-container {
  ul {
    border-bottom: 1px solid #eee;
    display: flex;
    list-style: none;
    li {
      border-right: 1px solid #eee;
      padding: 10px 20px;
      font-size: 12px;
      cursor: pointer;
      position: relative;

      a {
        color: #333;
        text-decoration: none;
      }

      .close {
        display: inline-block;
        width: 20px;
        height: 20px;
        margin-left: 5px;
        border-radius: 50%;
        text-align: center;
        line-height: 20px;
      }

      .close:hover {
        background-color: red;
        color: #fff;
      }
    }

    .active:after {
      content: '';
      display: block;
      width: 100%;
      border: 1px solid blue;
      position: absolute;
      bottom: -1px;
      left: 0;
    }
  }
}
</style>

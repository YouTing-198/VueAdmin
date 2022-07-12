<template>
  <div class="header">
    <b class="center">VueAdmin后台管理系统</b>
    <el-dropdown @command="handleCommand" class="right">
      <span class="el-dropdown-link">
        <el-avatar :size="36" :src="$store.getters.userInfo.avatar" />
        {{ $store.getters.userInfo.username || '' }}
        <el-icon class="el-icon--right"><arrow-down /></el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="profile">个人中心</el-dropdown-item>
          <el-dropdown-item command="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>
<script setup>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
const router = useRouter()
const store = useStore()
const handleCommand = (command) => {
  switch (command) {
    case 'profile':
      handleToProfile()
      break
    case 'logout':
      handleLogout()
      break
  }
}
const handleToProfile = () => {
  console.log('profile')
}
const handleLogout = async () => {
  await store.dispatch('user/logout')
  router.push('/login')
}
</script>
<style lang="scss" scoped>
.header {
  position: relative;
  .center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%);
  }
  .right {
    position: absolute;
    right: 20px;
  }
}
</style>

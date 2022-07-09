<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#545c64"
    default-active="/index"
    text-color="#fff"
    router
  >
    <el-menu-item index="/index">
      <span>首页</span>
    </el-menu-item>
    <el-sub-menu index="2">
      <template #title>
        <span>系统管理</span>
      </template>
      <el-menu-item index="/sys/users"> 用户管理 </el-menu-item>
      <el-menu-item index="/sys/roles"> 角色管理 </el-menu-item>
      <el-menu-item index="/sys/menus"> 菜单管理 </el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="3">
      <template #title>
        <span>系统工具</span>
      </template>
      <el-menu-item index="/sys/dicts"> 数字字典 </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>
<script setup></script>
<style lang="scss" scoped>
.el-menu {
  width: 100%;
  height: 100%;
  border-right: 0;
}
</style>

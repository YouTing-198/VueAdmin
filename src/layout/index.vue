<template>
  <el-container class="layout">
    <el-aside width="200px" class="left"><Aside></Aside></el-aside>
    <el-container>
      <el-header height="55px" class="right-top">
        <Header></Header>
      </el-header>
      <TagsView></TagsView>
      <el-main class="right-bottom">
        <Main></Main>
      </el-main>
    </el-container>
  </el-container>
</template>
<script setup>
import Aside from './Aside'
import Header from './Header'
import Main from './Main'
import TagsView from '@/components/TagsView'
</script>
<style lang="scss" scoped>
.layout {
  width: 100%;
  height: 100%;
  .left {
    background-color: #545c64;
  }
  .right-top {
    background-color: #17b3a3;
  }
}
</style>

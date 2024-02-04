<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <Menu></Menu>
      </el-aside>
      <el-container class="whole-box">
        <el-header>欢迎你{{ userStore.getUsername() }}</el-header>
        <el-main class="whole-box__main-box">
          <router-view></router-view>
        </el-main>
        <el-footer>footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import Menu from './Menu.vue';
import { useCounterStore } from '@/stores/user';

const userStore = useCounterStore()

</script>

<style scoped lang="sass">

.whole-box
  height: 100vh
  display: flex
  flex-direction: column
  justify-content: space-between
  &__main-box
    padding: 0 20px
    overflow: auto
    background-color: #f2f2f2
    flex: 1
    display: flex
    flex-direction: column
    justify-content: space-between
    align-items: center
    & > *
      margin-top: 20px
      width: 100%
      max-width: 800px
      &:first-child
        margin-top: 0

</style>
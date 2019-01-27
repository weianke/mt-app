<template>
  <el-container class="layout-default">
    <el-header height="197px">
      <my-header />
    </el-header>
    <el-main>
      <nuxt/>
    </el-main>
    <el-footer height="100%">
      footer
    </el-footer>
  </el-container>
</template>

<script  type='text/ecmascript-6'>
import MyHeader from '@/components/public/header/index.vue'
export default {
  components: {
    MyHeader
  }
}
</script>

<style>
</style>
 
<template>
  <el-row 
        :gutter="0" 
        class="m-header">
    <el-col :span="6">
      <geo />
    </el-col>
    <el-col :span="4">
      <user />
    </el-col>
    <el-col :span="14">
      <navbar />
    </el-col>
  </el-row>
</template>

<script  type='text/ecmascript-6'>
import Geo from './geo'
import User from './user'
import Navbar from './nav'
export default {
  components: {
    Geo,
    User,
    Navbar
  }
}
</script>

<style lang="scss">
  @import "@/assets/css/public/header/index.scss";
</style>

<template>
  <el-row 
        :gutter="0" 
        class="m-header">
    <el-col :span="5">
      <geo />
    </el-col>
    <el-col :span="5">
      <user />
    </el-col>
    <el-col :span="14">

    </el-col>
  </el-row>
</template>

<script  type='text/ecmascript-6'>
import Geo from './geo'
import User from './user'
export default {
  components: {
    Geo,
    User
  }
}
</script>

<style lang="scss">
  @import "@/assets/css/public/header/index.scss";
</style>

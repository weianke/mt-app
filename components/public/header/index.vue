<template>
  <div class="m-header">
    <el-row>
      <el-col>
        <topBar />
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <searchBar />
      </el-col>
    </el-row>
  </div>
</template>

<script  type='text/ecmascript-6'>
import topBar from './topbar'
import searchBar from './searchbar'
export default {
  components: {
    topBar,
    searchBar
  }
}
</script>

<style lang="scss">
 @import "@/assets/css/public/layout.scss";
 @import "@/assets/css/public/header/index.scss";
</style>
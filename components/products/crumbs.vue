<template>
  <div class="m-crumbs">
    <el-breadcrumb separator=">">
      <el-breadcrumb-item :to="{ path: '/' }">{{ $store.state.geo.position.city.length ?$store.state.geo.position.city.replace('市',''): '北京' }}美团</el-breadcrumb-item>
      <el-breadcrumb-item>
        <a href="/">{{ $store.state.geo.position.city.length ?$store.state.geo.position.city.replace('市',''): '北京'}}{{ decodeURIComponent(keyword) }}</a>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  props: {
    keyword: {
      type: String,
      default: ''
    }
  }
}
</script>

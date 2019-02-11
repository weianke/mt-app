<template>
  <el-row class="page-product">
    <el-col :span="19">
      <Crumbs :keyword="keyword" />
      <Categroy :types="types"
                :areas="areas" />
      <List :list="list" />
    </el-col>
    <el-col :span="5">
      <Amap v-if="point.length"
            :width="230"
            :height="290"
            :point="point" />
    </el-col>
  </el-row>
</template>Ï

<script  type='text/ecmascript-6'>
import Crumbs from '@/components/products/crumbs'
import Categroy from '@/components/products/categroy'
import List from '@/components/products/list'
import Amap from '@/components/public/map'
export default {
  components: {
    Crumbs,
    Categroy,
    List,
    Amap
  },
  data () {
    return {
      list: [],
      types: [],
      areas: [],
      keyword: ''
    }
  },
  async asyncData (ctx) {
    let keyword = encodeURIComponent(ctx.query.keyword)
    let city = ctx.store.state.geo.position.city.length ? encodeURIComponent(ctx.store.state.geo.position.city) : '北京'
    let {status, data: {count, pois}} = await ctx.$axios.get('/search/resultsByKeywords', {
      params: {
        keyword,
        city
      }
    })
  }
}
</script>

<style scoped lang='scss'>
  @import "@/assets/css/products/index.scss";
</style>

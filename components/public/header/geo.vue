<template>
  <div class="m-geo">
    <i class="el-icon-location" />{{city}}
    <nuxt-link class="changeCity"
               to='/changeCity'>切换城市</nuxt-link>
    [香河 廊坊 上海]
  </div>
</template>

<script  type='text/ecmascript-6'>
export default {
  computed: {
    city () {
      return this.$store.state.geo.position.city ? this.$store.state.geo.position.city : '开封市'
    }
  }``
}
</script>

<style scoped>
</style>
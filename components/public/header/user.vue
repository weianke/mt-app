<template>
  <div class="m-user">
    <!-- 因为不是控制元素，需要显示模块，所以需要使用temPlate -->
    <template v-if="user">
      欢迎您，
      <span class="username">{{ user }}</span>
      [<nuxt-link to="/exit">退出</nuxt-link>]
    </template>
    <template v-else>
      <nuxt-link to="/login"
                 class="login">立即登录</nuxt-link>
      <nuxt-link class="register"
                 to="/register">注册</nuxt-link>
    </template>
  </div>
</template>

<script  type='text/ecmascript-6'>
export default {
  data () {
    return {
      user: ''
    }
  }
}
</script>

<style scoped>
</style>
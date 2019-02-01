import Vue from 'vue'
import Vuex from 'vuex'
import geo from './modules/geo'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  modules: {
    geo
  },
  actions: {
    async nuxtServerInit({
      commit
    }, {req, app}) {
      const {
        status,
        data: {
          province,
          city,
          ip
        }
      } = await app.$axios.get('/geo/getPosition')
      console.log(ip)
      commit('geo/setPosition', status === 200 ? {
        city,
        province,
        ip
      } : {
        city: '',
        province: '',
        ip: ''
      })
    }
  }
})

export default store
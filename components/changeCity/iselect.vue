<template>
  <div class="m-iselect">
    <span class="name">按省份选择:</span>
    <el-select v-model="pvalue"
               placeholder="省份">
      <el-option v-for="item in province"
                 :key="item.value"
                 :label="item.label"
                 :value="item.value">
      </el-option>
    </el-select>
    <el-select v-model="cvalue"
               :disabled="!city.length"
               placeholder="城市">
      <el-option v-for="item in city"
                 :key="item.value"
                 :label="item.label"
                 :value="item.value">
      </el-option>
    </el-select>
    <h4 class="name">直接搜索:</h4>
    <el-autocomplete v-model="input"
                     :fetch-suggestions="querySearchAsync"
                     placeholder="请输入城市中文或拼音"
                     @select="handleSelect"></el-autocomplete>
  </div>
</template>

<script  type='text/ecmascript-6'>
import _ from 'lodash'
import {mapActions} from 'vuex'
export default {
  data () {
    return {
      province: [],
      pvalue: '',
      city: [],
      cvalue: '',
      input: '',
      cities: []
    }
  },
  watch: {
    async pvalue (newPvalue) {
      let self = this
      let { status, data: { city } } = await self.$axios.get(`/geo/province/${newPvalue}`)
      if (status === 200) {
        self.city = city.map(item => {
          return {
            value: item.id,
            label: item.name
          }
        })
        self.cvalue = ''
      }
    }
  },
  async mounted () {
    let { status, data: { province } } = await this.$axios.get('/geo/province')
    if (status == 200) {
      this.province = province.map(item => {
        return {
          value: item.id,
          label: item.name
        }
      })
    }
  },
  methods: {
    querySearchAsync: _.debounce (async function(query, cb) {
      let self = this
      if (self.cities.length) {
        cb(self.cities.filter(item => item.value.indexOf(query)>-1))
      } else {
        let {status, data: {city}} = await self.$axios.get('/geo/city')
        if (status === 200) {
          self.cities = city.map(item => {
            return {
              value: item.name
            }
          })
          cb(self.cities.filter(item => item.value.indexOf(query)>-1))
        } else {
          cb([])
        }
      }
    }, 200),
    handleSelect (item) {
      this.changeCity({
        province: '',
        city: item.value
      })
      window.location = '/'
    },
    ...mapActions({
      changeCity: 'geo/setPosition'
    })
  }
}
</script>

<style lang='scss'>
@import '@/assets/css/changeCity/iselect.scss';

.m-iselect {
  .name {
    margin-right: 10px;
  }
  h4 {
    margin-left: 40px;
    margin-right: 10px;
    display: inline-block;
    font-size: 16px;
    color: #333;
    font-weight: 500;
  }
}
</style>

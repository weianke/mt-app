<template>
  <el-table :data="cartData"
            style="width: 980px">
    <el-table-column label="项目"
                     prop="name"
                     width="532" />
    <el-table-column label="单价"
                     prop="price"
                     width="132" />
    <el-table-column label="数量"
                     width="212">
      <template slot-scope="scope">
        <el-input-number v-model="scope.row.count"
                         :min="0"></el-input-number>
      </template>
    </el-table-column>
    <el-table-column label="总价">
       <template slot-scope="scope">
         <div class="">
           {{scope.row.price * scope.row.count}}
         </div>
      </template>
    </el-table-column>
  </el-table>
</template>

<script  type='text/ecmascript-6'>
export default {
  props: {
    cartData: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style lang='scss'>
</style>

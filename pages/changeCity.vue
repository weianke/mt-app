<template>
  <div class="page-changeCity">
   <el-row>
     <el-col :span="24">
       <iSelect />
     </el-col>
   </el-row>
   <el-row>
     <el-col :span="24">2</el-col>
   </el-row>
   <el-row>
     <el-col :span="24">3</el-col>
   </el-row>
  </div>
</template>

<script  type='text/ecmascript-6'>
import iSelect from '@/components/changeCity/iselect'
export default {
  components: {
    iSelect
  }
}
</script>

<style scoped lang='scss'>

</style>

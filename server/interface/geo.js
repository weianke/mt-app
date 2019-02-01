import Router from 'koa-router'
import axios from './utils/axios'
import Config from '../dbs/config'

let router = new Router({
  prefix: '/geo'
})

const sign = 'a3c9fe0782107295ee9f1709edd15218'

router.get('/getPosition', async (ctx) => {
  let {
    status,
    data: {
      province,
      city,
      ip
    }
  } = await axios.get(`http://cp-tools.cn/geo/getPosition?sign=${sign}`)
  
  if (status === 200) {
    ctx.body = {
      province,
      city,
      ip
    } 
  } else {
    ctx.body = {
      province: '',
      city: '',
      ip: ''
    }
  }
})

export default router

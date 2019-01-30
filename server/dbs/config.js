export default {
  dbs: 'mongodb://127.0.0.1:27017/student',
  redis: {
    get host(){
      return '127.0.0.1'
    },
    get port(){
      return 6379
    }
  },
  smtp: {
    get host(){
      return 'smtp.qq.com'
    },
    get user(){
      return '245783065@qq.com2'
    }
  }
}
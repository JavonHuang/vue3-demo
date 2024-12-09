import { request } from '@/service';
import * as Mock from "mockjs"
export default {
  login(data: { name: string, passworld: string }) {
    return request({
      url: '/api/vue/login',
      type: 'post',
      data
    })
  },
  menu(data={}) {
    return request({
      url: '/api/vue/menu',
      type: 'post',
      data
    })
  },
  table(_data={}) {
    return new Promise((resolve, _reject)=>{
      resolve(Mock.mock({
        "data|1-10": [
          {
            name:Mock.mock('@name'),
            age:Mock.mock('@integer(20, 40)'),
          }
        ]
      }))
    })
    // return request({
    //   url: '/api/vue/table',
    //   type: 'post',
    //   data
    // })
  }
}
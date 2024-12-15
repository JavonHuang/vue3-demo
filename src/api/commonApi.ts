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
      let dataList=Mock.mock({
        "data|10-10": [
          {
            id:()=>Mock.mock('@integer(1, 40)'),
            name:Mock.mock('@name'),
            year:()=>Mock.mock('@datetime()'),
            month:()=>Mock.mock('@datetime()'),
            date:()=>Mock.mock('@datetime()'),
            dateTime:()=>Mock.mock('@datetime()'),
            time:()=>Mock.mock('@datetime()'),
            number:()=>Mock.mock('@integer(90, 10000)'),
            thousands:()=>Mock.mock('@integer(90, 10000)'),
            age:()=>Mock.mock('@integer(90, 10000)'),
            bathderay:()=>Mock.mock('@datetime()'),
          }
        ]
      }).data;
      resolve({
        code:200,
        data:dataList,
        total:200,
      })
    })
    // return request({
    //   url: '/api/vue/table',
    //   type: 'post',
    //   data
    // })
  }
}
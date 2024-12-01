import { request } from '@/service';

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
  }
}
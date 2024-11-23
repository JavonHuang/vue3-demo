import { request } from '@/service';

export default {
  login(data: { name: string, passworld: string }) {
    return request({
      url: '/api/vue/menu',
      type: 'post',
      data
    })
  }
}
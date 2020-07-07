import {axios,newaxios} from './axios'

export const BANNER = 'banner'
export const RECOMMEND = 'recommend'

export function getHomeMultidata() {
  return axios({
    url: '/home/multidata'
  })
}

export function getHomeData(type, page) {
  return newaxios({
    url: '/api/n3/home/data',
    params: {
      type,
      page
    }
  })
}

import {axios,newaxios} from './axios'


export function getCategory() {
  return newaxios({
    url: 'api/n3/category'
  })
}

export function getSubcategory(maitKey) {
  return newaxios({
    url: 'api/n3/subcategory',
    params: {
      maitKey
    }
  })
}

export function getCategoryDetail(miniWallkey, type) {
  return axios({
    url: '/subcategory/detail',
    params: {
      miniWallkey,
      type
    }
  })
}

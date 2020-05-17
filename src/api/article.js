import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/topics',
    method: 'get',
    params: query
  })
}

export function fetchArticle(id) {
  return request({
    url: `/topics/${id}`,
    method: 'get',
    params: { include: 'user' }
  })
}

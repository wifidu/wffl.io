import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/authorizations',
    method: 'post',
    headers: { 'Access-Control-Allow-Origin': '*' },
    data
  })
}

export function getInfo({ token }) {
  return request({
    url: `/user`,
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}

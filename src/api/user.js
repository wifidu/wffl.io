import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/authorizations',
    method: 'post',
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

export function fetchList() {
  return request({
    url: 'users',
    method: 'get'
  })
}

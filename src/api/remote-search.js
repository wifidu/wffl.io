import request from '@/utils/request'

export function searchUser(name) {
  return request({
    url: `/users`,
    method: 'get',
    params: { name }
  })
}


import request from '@/utils/request'

export function loginByUsername(username, password) {
  const data = {
    username,
    password
  }
  return request({
    url: '/api/admin/user/login',
    method: 'post',
    data
  })
}

export function logout() {
  return request({
    url: '/api/admin/user/logout',
    method: 'post'
  })
}

export function getUserInfo(token) {
  return request({
    url: '/api/admin/user/info',
    method: 'get',
    params: { token }
  })
}


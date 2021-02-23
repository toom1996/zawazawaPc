import { post } from '@/utils/request'

// 获取github授权信息
export function getGithubAOuthInfo (data) { return post('/api/v1/user/auth/github', data) }

// 短信验证码登陆接口
export function register (data) { return post('/api/v1/user/register', data) }

// 发送短信验证码接口
export function smsSend (data) { return post('/api/v1/user/sms-send', data) }

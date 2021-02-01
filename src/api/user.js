import { post } from '@/utils/request'

// 获取github授权信息
export function getGithubAOuthInfo (data) { return post('/api/v1/user/auth/github', data) }

import { post } from '@/utils/request'

// 发布一条文章
export function publishPost (data) { return post('/api/v1/post/publish-post', data) }
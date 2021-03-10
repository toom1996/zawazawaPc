const HttpCode = {
  // 请求成功
  Success: 0,

  // ---------- 验证器 ----------

  // 验证器错误
  ValidatorErrVerifyFailed: 11000,

  // ---------- 用户 ----------

  // 用户token 过期
  UserErrTokenExpired: 12000,

  // token不合法
  UserErrBadToken: 12001,

  // 获取用户信息失败
  UserErrGetInfoError: 12002

}

export default HttpCode

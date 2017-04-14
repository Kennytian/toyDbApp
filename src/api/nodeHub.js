// 公共
const ICommon = {
  getStars: '/search/repositories'
};

// 用户
const IUser = {
  // 登录
  login: 'user/login.do'
};

// 密码
const IPwd = {
  // 修改密码
  loginPwdUpdate: 'pwd/loginPwdUpdate.do'
};

// 短信
const ISms = {
  // 获取短信验证码
  sendSMS: 'sms/sendSMS.do',

  // 校验验证码
  validate: 'sms/validate.do'
};

// 订单
const IOrder = {
  // 订单列表
  orderList: 'order/orderList.do',

  // 取消订单
  cancelOrder: 'order/cancelOrder.do'
};

// 为了避免重名，所以用 I 表示 interface
export {
  ICommon,
  IUser,
  IPwd,
  ISms,
  IOrder
};
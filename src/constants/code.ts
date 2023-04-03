// 请求状态码
/* 成功状态码 */
export const SUCCESS = 10000 // "成功"

/* 参数相关：20001-29999 */
export const PARAM_IS_INVALID = 20001 // "参数无效"
export const PARAM_IS_BLANK = 20002 // "参数为空"
export const PARAM_TYPE_ERROR = 20003 // "参数类型错误"
export const PARAM_NOT_COMPLETE = 20004 // "参数缺失"

/* 账号相关：30001-39999*/
export const USER_NOT_LOGGED_IN = 30001 // "用户未登录"
export const USER_LOGIN_ERROR = 30002 // "账号或密码错误"
export const USER_ACCOUNT_LOCKED = 30003 // "账号已被锁定"
export const USER_NOT_EXIST = 30004 // "用户不存在"
export const PHONE_HAS_USED = 30005 // "该手机号已被注册"
export const SMS_CODE_EXPIRE = 30006 // "短信验证码已失效"
export const SMS_CODE_ERROR = 30007 // "短信验证码错误"

/* 权限错误：40001-49999 */
export const PERMISSION_NO_ACCESS = 40001 // "您没有权限访问"

/* 接口错误：60001-69999 */
export const INTERFACE_INNER_INVOKE_ERROR = 60001 // "内部系统接口调用异常"
export const INTERFACE_OUTTER_INVOKE_ERROR = 60002 // "外部系统接口调用异常"
export const INTERFACE_FORBID_VISIT = 60003 // "该接口禁止访问"
export const INTERFACE_ADDRESS_INVALID = 60004 // "接口地址无效"
export const INTERFACE_REQUEST_TIMEOUT = 60005 // "接口请求超时"
export const INTERFACE_EXCEED_LOAD = 60006 // "接口负载过高"
export const INTERFACE_TALKWORK_ERROR = 60007 // "话术变量替换失败"
export const INTERFACE_SMSID_ERROR = 60008 // "短信发送失败"
export const INTERFACE_PROVIDER_ERROR = 60009 // "服务提供方接口内部异常"

/* 系统错误：90001-99999 */
export const SYSTEM_INNER_BUSY = 90001 // "系统繁忙，请稍后重试"
export const SYSTEM_INNER_ERROR = 99999 // "系统内部异常"

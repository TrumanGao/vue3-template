// 环境变量
export const VITE_MODE = process.env.VITE_MODE as 'PRODUCTION' | 'TESTING' | 'DEVELOPMENT'

export enum LOCATION_HOST_MAP {
  DEVELOPMENT = 'local.yuanfudao.biz:3000',
  TESTING = 'contest-test.ybccode.com',
  PRODUCTION = 'contest.ybccode.com'
}
export const LOCATION_HOST = LOCATION_HOST_MAP[VITE_MODE]

export enum LOCATION_PATHNAME_MAP {
  PRODUCTION = '/',
  TESTING = '/',
  DEVELOPMENT = '/'
}
export const LOCATION_PATHNAME = LOCATION_PATHNAME_MAP[VITE_MODE]

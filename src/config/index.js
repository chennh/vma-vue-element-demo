import {
  cipher
} from '@/utils'

const env = cipher.decodeJSON(process.config)
const IS_DEV = env.NODE_ENV === 'dev' || env.NODE_ENV === 'development'
const IS_PROD = env.NODE_ENV === 'prod' || env.NODE_ENV === 'production'

export const nodeEnv = env.NODE_ENV
export const isDev = IS_DEV
export const isProd = IS_PROD
export const appNamespace = `${nodeEnv}/${env.app}`
export const imgDomain = ''
export const api = env.api
export const getQiniuTokenUrl = type => `${api}/V1.0/common/qiniu/${type}/qiniu_token`

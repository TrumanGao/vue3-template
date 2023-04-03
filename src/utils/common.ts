import type { CACHE } from '@/constants/cache'

/**
 * 根据键名读取本地存储
 */
export function getStorage(
  storageType: 'sessionStorage' | 'localStorage',
  storageKey: keyof typeof CACHE
) {
  const storage = window[storageType].getItem(storageKey)
  if (storage) {
    try {
      return JSON.parse(storage)
    } catch (error) {
      return storage
    }
  } else {
    return ''
  }
}

/**
 * 根据键名写入本地存储
 */
export function setStorage(
  storageType: 'sessionStorage' | 'localStorage',
  storageKey: keyof typeof CACHE,
  storageData: unknown
) {
  if (storageType !== 'localStorage' && storageType !== 'sessionStorage') {
    throw Error('本地存储类型错误：' + storageType)
  }

  if (typeof storageData === 'string') {
    window[storageType].setItem(storageKey, storageData)
  } else {
    window[storageType].setItem(storageKey, JSON.stringify(storageData))
  }
}

/**
 * 精准判断数据类型，返回类型字符串
 */
export function getDataType(
  data: unknown
):
  | 'String'
  | 'Number'
  | 'Boolean'
  | 'Null'
  | 'Undefined'
  | 'Object'
  | 'Array'
  | 'Function'
  | 'Error'
  | 'Blob'
  | 'Math'
  | 'Date'
  | 'Set'
  | 'Map' {
  const typeStr = Object.prototype.toString.call(data)
  return typeStr.slice(8, typeStr.length - 1)
}

/**
 * 获取URL的参数
 */
export function url2obj(url: string = window.location.search) {
  const obj: { [key: string]: string } = {}
  const queryStr = url.split('?')[1]

  queryStr?.split('&').map((qstr) => {
    const [key, val] = qstr.split('=')
    obj[key] = decodeURIComponent(val)
  })
  return obj
}

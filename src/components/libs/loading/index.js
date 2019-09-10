import {
  Loading
} from 'element-ui'

let instance = null
let options = {
  fullscreen: true,
  lock: true,
  text: '拼命加载中...'
}

let getInstance = () => {
  // 有可能会出现多实例情况？
  let mask = document.querySelector('.el-loading-mask')
  if (mask && mask.parentNode) {
    mask.parentNode.removeChild(mask)
  }
  instance = Loading.service(options)
  return instance
}

export default {
  show() {
    getInstance()
  },
  hide() {
    if (instance) {
      instance.close()
      instance = null
    }
  }
}

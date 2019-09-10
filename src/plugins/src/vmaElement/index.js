import vmaElement from 'vma-vue-element'
import 'vma-vue-element/dist/static/css/vmaElement.css'
import {
  getQiniuTokenUrl
} from '@/config'

export default {
  install(Vue, opts) {
    // document
    // https://coding.net/s/3fdbe511-0836-467d-9eff-90afbf97011d
    Vue.use(vmaElement, {
      components: {
        upload: {
          qiniu: {
            getQiniuTokenUrl
          }
        }
      }
    })
  }
}

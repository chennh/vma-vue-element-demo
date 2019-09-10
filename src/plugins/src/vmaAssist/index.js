import vmaAssist, {
  utils
} from 'vma-vue-assist'
import Loader from './src/loader'
import handleError from './src/handleError'

export default {
  install(Vue, opts = {}) {
    // document
    // https://coding.net/s/ffeab740-54c4-4d30-a231-3902175af22c
    Vue.use(vmaAssist, {
      plugins: {
        axios: {
          interceptor: {
            errorHandle: {
              handleError(error) {
                handleError(error)
                return Promise.reject(error)
              }
            },
            loading: {
              showLoader() {
                Loader.show()
              },
              hideLoader() {
                Loader.hide()
              }
            },
            authorization: {
              getMacKey() {
                return 'login_124_3aea7697-de63-4fee-acf8-d9f6a7d39caf'
              }
            },
            returnResponseData: true
          }
        }
      }
    })
    Vue.prototype.fmt = utils.fmt
  }
}

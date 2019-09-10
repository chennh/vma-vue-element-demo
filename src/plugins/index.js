import vmaAssistPlugin from './src/vmaAssist'
import vmaElementPlugin from './src/vmaElement'

export default {
  install(Vue) {
    Vue.use(vmaAssistPlugin)
    Vue.use(vmaElementPlugin)
  }
}

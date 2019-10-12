import vmaAssistPlugin from './src/vmaAssist'
import vmaElementPlugin from './src/vmaElement'
import vmaDesignScrmPlugin from './src/vmaDesignScrm'
import elementUIPlugin from './src/elementUI'

export default {
  install(Vue) {
    Vue.use(vmaAssistPlugin)
    Vue.use(vmaElementPlugin)
    Vue.use(vmaDesignScrmPlugin)
    Vue.use(elementUIPlugin)
  }
}

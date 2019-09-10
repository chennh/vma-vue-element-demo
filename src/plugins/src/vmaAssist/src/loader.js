import loading from '@/components/libs/loading'

let requestCount = 0
let timer

export default {
  show() {
    requestCount++
    loading.show()
  },
  hide(time = 500) {
    if (--requestCount <= 0) {
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        loading.hide()
      }, time)
    }
  }
}

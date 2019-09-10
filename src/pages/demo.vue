<template>
  <div>
    <vma-image-upload v-model="urlList"
                  :limit="3"
                  multiple />
    <p>=============</p>
    <vma-image-upload v-model="url"
                  :limit="3" />
    <img src="http://wawaji.h5h5h5.cn/FtUSzVJ8HFO5ZQVfAk394gUYjrB2"
         width="200"
         v-image-view />
  </div>
</template>

<script>
// import { demoApi } from '@/api'
import { demoLocal, demoSession } from '@/storage'

export default {
  data() {
    return {
      urlList: ['http://wawaji.h5h5h5.cn/FtUSzVJ8HFO5ZQVfAk394gUYjrB2'],
      url: ''
    }
  },
  created() {
    console.log(demoLocal.get())
    console.log(demoSession.get())
    demoLocal.set('demoLocal-value')
    demoSession.set('demoSession-value')

    // demoApi.list().then(data => {
    //   this.success('success')
    // }, err => {
    //   this.error('error')
    //   Promise.reject(err)
    // })
  }
}
</script>

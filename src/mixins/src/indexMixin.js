import {
  clearSearch,
  downloadFile
} from '@/utils'

export default {
  data() {
    return {
      params: {
        current: 1,
        size: 10
      },
      page: {
        total: 0
      },
      table: {
        columns: [],
        list: []
      },
      form: {
        show: false,
        entity: {
          id: ''
        }
      },
      detail: {
        show: false,
        entity: null
      }
    }
  },
  mounted() {
    // 初始化服务端数据完成后再执行ready
    new Promise(new Proxy(this.initData, this)).then(() => {
      this.init()
    })
  },
  methods: {
    /**
     * 初始化服务端数据
     * @param {any} resolve Promise.resolve
     * @param {any} reject Promise.reject
     */
    initData(resolve, reject) {
      resolve()
    },
    /**
     * 初始化构造
     */
    init() {
      this.initValidate()
      this.initReady()
      this.search()
    },
    /**
     * 初始化表单验证
     */
    initValidate() {},
    /**
     * 初始化完成ready
     */
    initReady() {},
    /**
     * 提供service
     */
    getApi() {
      throw new Error('请重写getApi提供api')
    },
    /**
     * 查询前执行，可更改查看参数
     * @param {any} params
     */
    beforeList(params) {},
    /**
     * 查询成功后执行，可更改list
     * @param {any} list
     */
    afterList(list) {},
    /**
     * 删除成功后执行
     */
    afterDel() {
      this.success('删除成功')
      this.list()
    },
    /**
     * 更新数据成功后执行
     * @param {any} data
     * @param {any} label
     */
    afterUpdateData(data, label) {
      this.list()
    },
    getParams() {
      return Object.assign({}, this.params)
    },
    getListApi(params) {
      return this.getApi().list(params)
    },
    /**
     * 查询列表数据
     * @param {any} current
     * @param {any} size
     */
    list(current, size) {
      this.setPageNumSize(current, size)
      let params = this.getParams()
      if (this.beforeList(params) !== false) {
        return this.getListApi(params).then(async (page) => {
          // 总数据不为0，当前页数据为0，跳第一页
          if (page.totals > 0 && page.records.length === 0 && page.current > 1) {
            return this.list(1, size)
          } else {
            await this.afterList(page.records)
            this.setTableList(page.records)
            this.setPagination(page)
            return page
          }
        })
      } else {
        return Promise.resolve()
      }
    },
    /**
     * 重载列表的当前页
     * @param {any} index ,数组下标
     */
    listAndDetail(index) {
      this.list().then(page => {
        if (page.total === 0) {
          // 总数据为0
          this.detail.entity = null
        } else if (typeof index === 'number') {
          // 选择特定位置
          if (this.table.list[index]) {
            this.showDetail(this.table.list[index].id, index)
          }
        } else {
          if (this.detail.entity && this.detail.entity.id) {
            // 判断之前选中的是否还存在于该页面
            let res = this.table.list.some((v, idx) => {
              if (v.id === this.detail.entity.id) {
                this.showDetail(this.detail.entity.id, idx)
              }
              return v.id === this.detail.entity.id
            })
            if (!res) {
              this.showDetail(this.table.list[0].id, 0)
            }
          }
        }
      })
    },
    setPageNumSize(current, size) {
      if (!isNaN(+current)) {
        this.params.current = +current
      }
      if (!isNaN(+size)) {
        this.params.size = +size
      }
    },
    /**
     * 设置列表数据
     * @param {any} list
     */
    setTableList(list) {
      this.table.list = list
    },
    /**
     * 设置分页
     * @param {any} page
     */
    setPagination(page) {
      this.page.total = page.total
    },
    /**
     * 获取table组件的引用
     */
    getTableRef() {
      return this.$refs.table || this.$refs.multipleTable
    },
    /**
     * 查询列表第一页
     */
    search() {
      this.clearSelection()
      this.list(1)
    },
    /**
     * 延迟查询
     */
    delaySearch() {
      setTimeout(() => {
        this.search()
      }, 0)
    },
    /**
     * 清除所有选中
     */
    clearSelection() {
      let table = this.getTableRef()
      if (table) {
        table.clearSelection()
      }
    },
    afterClearSearch(params) {},
    /**
     * 清空查询条件
     */
    clearSearch() {
      let params = clearSearch(this.params)
      this.afterClearSearch(params)
      this.params = Object.assign(this.params, params)
      this.search()
    },
    /**
     * 显示新增/编辑
     * @param {any} entity
     */
    showForm(entityOrId) {
      if (!entityOrId || typeof entityOrId === 'object') {
        this.form.entity = entityOrId || {}
        this.form.show = true
      } else {
        this.getApi().get(entityOrId).then(data => {
          this.showForm(data)
        })
      }
    },
    hideForm() {
      this.form.show = false
    },
    submitForm() {},
    /**
     * 新增/编辑成功后执行
     * @param {any} entity
     */
    afterSubmitForm(data, entity) {
      this.form.show = false
      this.list()
      this.success(`${entity.id ? '编辑' : '新增'}成功`)
    },
    /**
     * 取消新增/编辑
     */
    cancelForm() {
      this.form.show = false
    },
    /**
     * 显示详情
     * @param {any} entity
     */
    showDetail(entityOrId) {
      if (typeof entityOrId !== 'object') {
        this.getApi().get(entityOrId).then(data => {
          this.detail.entity = data
          this.detail.show = true
        })
      } else {
        this.detail.entity = entityOrId
        this.detail.show = true
      }
    },
    /**
     * 显示删除
     * @param {any} id
     * @param {string} [content='删除操作不可恢复，确认继续删除?']
     */
    showDel(id, content = '删除操作不可恢复，确认继续删除?') {
      this.$confirm(content, '确认删除?', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.getApi().del(id).then(() => {
          this.afterDel()
        })
      })
    },
    /**
     * 更新数据
     * @param {any} data
     * @param {any} label
     */
    updateData(data, label) {
      this.getApi().update(data).then(() => {
        this.success(`${label}成功`)
        this.afterUpdateData(data, label)
      })
    },
    /**
     * 获取表格选中列的id数组
     * @returns
     */
    getTableSelection() {
      let table = this.getTableRef()
      if (table) {
        return table.selection.map(v => v.id)
      }
      return []
    },
    /**
     * 批量删除
     */
    showBatchDel() {
      let ids = this.getTableSelection()
      if (ids.length) {
        this.showDel(ids, `确定删除已选择的[${ids.length}]条数据?`)
      } else {
        this.info('请先选择数据')
      }
    },
    /**
     * 下载/导出
     *
     * @param {*} promiseOrBlob
     * @param {*} fileName
     */
    downloadFile(promiseOrBlob, fileName) {
      if (promiseOrBlob.then) {
        promiseOrBlob.then(blob => {
          downloadFile(blob, fileName)
        })
      } else {
        downloadFile(promiseOrBlob, fileName)
      }
    }
  }
}

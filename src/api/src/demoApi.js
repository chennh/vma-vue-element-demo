import axios from 'axios'
import {
  apiVersion
} from '@/config'

const API_MODULE = `${apiVersion}/demo/`

export default {
  /**
   * 分页列表
   * @param {*} params
   */
  list(params) {
    return axios({
      url: `${API_MODULE}`,
      method: 'GET',
      removeEmpty: true,
      responseType: 'json'
    })
  },
  /**
   * 详情
   * @param {*} id
   */
  get(id) {
    return axios({
      url: `${API_MODULE}/${id}`,
      method: 'GET',
      responseType: 'json'
    })
  },
  /**
   * 新增
   * @param {*} data
   */
  save(data) {
    return axios({
      url: `${API_MODULE}`,
      method: 'POST',
      data
    })
  },
  /**
   * 更新
   * @param {*} data
   */
  update(data) {
    return axios({
      url: `${API_MODULE}`,
      method: 'PUT',
      data
    })
  },
  /**
   * 删除
   * @param {*} id
   */
  del(id) {
    return axios({
      url: `${API_MODULE}/${id}`,
      method: 'DELETE'
    })
  }
}

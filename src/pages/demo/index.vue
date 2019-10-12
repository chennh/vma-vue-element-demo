<template>
  <div class="flex flex-column">
    <scrm-block flatBottom>
      <el-form size="mini"
               inline>
        <el-form-item label="审批人">
          <el-input v-model="form.entity.user"
                    placeholder="审批人"></el-input>
        </el-form-item>
        <el-form-item label="活动区域">
          <el-select v-model="form.entity.region"
                     placeholder="活动区域">
            <el-option label="区域一"
                       value="shanghai"></el-option>
            <el-option label="区域二"
                       value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary"
                     @click="search">查询</el-button>
          <vma-search-more v-model="drawer.show">
            <el-form size="mini"
                     inline>
              <el-form-item label="审批人">
                <el-input v-model="form.entity.user"
                          placeholder="审批人"></el-input>
              </el-form-item>
              <el-form-item label="活动区域">
                <el-select v-model="form.entity.region"
                           placeholder="活动区域">
                  <el-option label="区域一"
                             value="shanghai"></el-option>
                  <el-option label="区域二"
                             value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item>
                <el-button type="primary"
                           @click="search">确定</el-button>
                <el-button @click="hideSearchMore">取消</el-button>
              </el-form-item>
            </el-form>
          </vma-search-more>
        </el-form-item>
      </el-form>
    </scrm-block>
    <scrm-block class="flex-1">
      <div class="flex flex-column">
        <scrm-table-tools title="数据列表">
          <el-button size="mini"
                     type="primary"
                     @click="showForm">表单窗口</el-button>
          <el-button size="mini"
                     type="info">按钮2</el-button>
          <el-dropdown>
            <el-button size="mini"
                       type="primary">
              更多菜单<i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>黄金糕</el-dropdown-item>
              <el-dropdown-item>狮子头</el-dropdown-item>
              <el-dropdown-item>螺蛳粉</el-dropdown-item>
              <el-dropdown-item>双皮奶</el-dropdown-item>
              <el-dropdown-item>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </scrm-table-tools>
        <el-table :data="table.list"
                  style="width: 100%"
                  height="100%"
                  class="scrm-table flex-1">
          <el-table-column prop="date"
                           label="日期"
                           width="180">
          </el-table-column>
          <el-table-column prop="name"
                           label="姓名"
                           width="180">
          </el-table-column>
          <el-table-column prop="address"
                           label="地址">
          </el-table-column>
        </el-table>
        <scrm-table-footer>
          <div slot="btns">
            <el-button size="mini"
                       type="primary">按钮1</el-button>
            <el-button size="mini"
                       type="info">按钮2</el-button>
          </div>
          <el-pagination background
                         layout="prev, pager, next"
                         :total="1000">
          </el-pagination>
        </scrm-table-footer>
      </div>
    </scrm-block>

    <!-- 表单窗口 -->
    <scrm-panel v-model="form.show"
                title="新增xxx">
      <div>xxxxx</div>

      <!-- 可选，未设置则不显示底部 -->
      <div slot="footer">
        <el-button size="mini"
                   type="info"
                   @click="hideForm">取消</el-button>
        <el-button size="mini"
                   type="primary"
                   @click="submitForm">确定</el-button>
      </div>
    </scrm-panel>
  </div>
</template>

<script>
import { indexMixin } from '@/mixins'

export default {
  mixins: [indexMixin],
  data() {
    return {
      table: {
        list: Array(20)
          .fill(1)
          .map(v => {
            return {
              id: v,
              date: '2016-05-02',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }
          })
      },
      drawer: {
        show: false
      }
    }
  },
  methods: {
    search() {
      this.hideSearchMore()
    },
    hideSearchMore() {
      this.drawer.show = false
    }
  }
}
</script>

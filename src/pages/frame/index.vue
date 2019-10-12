<template>
  <scrm-frame>
    <scrm-frame-header slot="header"
                       :logo="logo">

      <!-- header中间的导航 -->
      <scrm-frame-nav slot="nav"
                      :list="navList"
                      v-model="activeNavId" />

      <!-- 右侧，头像、操作 -->
      <ul slot="right">
        <li>文字</li>
        <li><a href="javascript: void(0);">按钮</a></li>
        <li>
          <el-dropdown class="scrm-frame-header-admin">
            <span class="el-dropdown-link">
              用户名<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>修改密码</el-dropdown-item>
              <el-dropdown-item>个人中心</el-dropdown-item>
              <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </li>
      </ul>
    </scrm-frame-header>

    <!-- 菜单栏 -->
    <scrm-frame-menu slot="menu"
                     :list="menuList"
                     v-model="activeMenuId" />

    <!-- 主要内容区域 -->
    <router-view />

  </scrm-frame>
</template>
<script>
import logo from '@/assets/images/logo.png'

export default {
  data() {
    return {
      logo,
      navList: [
        {
          title: '首页'
        }
      ].concat(
        Array(20)
          .fill(1)
          .map((v, i) => {
            return {
              id: i,
              title: `页面${i}`
            }
          })
      ),
      activeNavId: '',
      activeMenuId: 6,
      menuList: [
        {
          id: 1,
          icon: 'el-icon-platform-eleme',
          title: '微信管理',
          children: [
            {
              id: 2,
              icon: '',
              title: '个人号管理',
              children: []
            },
            {
              id: 3,
              icon: '',
              title: '个人号管理',
              children: []
            },
            {
              id: 4,
              icon: '',
              title: '个人号管理',
              children: []
            },
            {
              id: 5,
              icon: '',
              title: '个人号管理',
              children: []
            },
            {
              id: 6,
              icon: '',
              title: '个人号管理',
              children: []
            },
            {
              id: 7,
              icon: '',
              title: '个人号管理',
              children: []
            },
            {
              id: 8,
              icon: '',
              title: '个人号管理',
              children: []
            }
          ]
        },
        {
          id: 9,
          icon: 'el-icon-user-solid',
          title: '智能管理',
          children: [
            {
              id: 10,
              icon: '',
              title: '自动通过',
              children: []
            }
          ]
        }
      ]
    }
  }
}
</script>

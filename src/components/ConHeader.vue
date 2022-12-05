<!--
 * @Author: Han
 * @Date: 2022-05-12 15:55:21
 * @LastEditors: Han
 * @LastEditTime: 2022-05-17 13:58:25
 * @FilePath: \newAdmin\src\components\ConHeader.vue
-->
<template>
  <div class="vvhan-header">
    <span class="el-icon-s-unfold" @click="navToggle"></span>
    <div class="vvhan-header-nav">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item v-if="$route.name != 'MAIN'">{{ $route.meta.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="vvhan-header-con">
      <div class="log-out">
        <el-button size="mini" @click="logoutFn">Logout<i class="el-icon-switch-button el-icon--right"></i></el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    navToggle({ target: e }) {
      const spanArr = document.querySelectorAll(".el-menu-item");
      // 解决侧边栏卡顿问题
      spanArr.forEach((itm) => {
        itm.querySelector("span") && (itm.querySelector("span").style.display = "none");
      });
      // 按钮点击动效
      this.$emit("navToggle", e);
    },
    logoutFn() {
      this.$notify({ title: "Success", message: "退出登录成功！", type: "success", offset: 66, duration: 888 });
      setTimeout(() => {
        this.$router.go(0);
      }, 888);
    },
  },
};
</script>
<style>
.vvhan-header .el-breadcrumb .el-breadcrumb__item {
  font-size: 14px !important;
}
</style>
<style lang="scss" scoped>
.vvhan-header {
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: #fff;
  border-bottom: 1px solid #e6e6e6;

  & > span {
    padding: 8px;
    color: #909399;
    font-size: 28px;
    cursor: pointer;
    transition: all 0.3s;
  }
  .vvhan-header-nav {
    margin-left: 16px;
  }
  .vvhan-header-con {
    flex: 1;
    box-sizing: border-box;
    padding: 0 16px;
    .log-out {
      float: right;
      text-align: right;
    }
  }
}
</style>

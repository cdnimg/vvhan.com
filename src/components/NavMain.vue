<!--
 * @Author: Han
 * @Date: 2022-05-12 11:34:27
 * @LastEditors: Han
 * @LastEditTime: 2022-05-17 15:58:32
 * @FilePath: \newAdmin\src\components\NavMain.vue
-->
<template>
  <div class="vvhan-navcon">
    <el-menu router background-color="#304156" text-color="#ffffff" :default-active="$route.path" class="el-menu-vertical-demo" :collapse="navStatus.statusKey">
      <div class="vvhan-navcon-title" v-if="navStatus.titleText">{{ navStatus.titleText }}</div>
      <el-menu-item v-for="itm in routerArr" :key="itm.name" :index="itm.path">
        <i :class="itm.meta.class"></i>
        <span slot="title">{{ itm.meta.name }}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    navStatus: {
      type: Object,
      required: true,
    },
    routerArr: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
/* .vvhan-navcon .el-menu {
  color: #42b983;
  background-color: rgb(105, 89, 205) !important;
}

.vvhan-navcon .el-menu-item-group {
  background-color: #7171c6 !important;
}

.vvhan-navcon .el-submenu__title i {
  color: #fff;
}

.vvhan-navcon .el-menu-item i {
  color: #fff;
}
.vvhan-navcon .el-menu-item.is-active {
  color: #42b983 !important;
}

.vvhan-navcon .el-menu-item:focus,
.vvhan-navcon .el-menu-item:hover,
.vvhan-navcon .el-submenu__title:hover {
  color: #42b983 !important;
  background-color: #473c8b !important;
}

.vvhan-navcon .el-menu-item {
  color: #fff;
} */

.vvhan-navcon .el-menu--collapse {
  min-height: 100vh !important;
}
.vvhan-navcon .el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 100vh !important;
}
</style>

<style lang="scss" scoped>
.vvhan-navcon {
  .vvhan-navcon-title {
    overflow: hidden;
    color: #fff;
    font-weight: 600;
    font-size: 20px;
    line-height: 56px;
    white-space: nowrap;
    text-align: center;
    transition: all 0.3s;
  }
}
</style>

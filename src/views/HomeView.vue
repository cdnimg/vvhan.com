<!--
 * @Author: Han
 * @Date: 2022-05-12 16:27:55
 * @LastEditors: Han
 * @LastEditTime: 2022-05-17 15:58:40
 * @FilePath: \newAdmin\src\views\HomeView.vue
-->
<template>
  <div class="vvhan">
    <NavMain :nav-status="navStatus" :router-arr="routerArr" />
    <div class="vvhan-content">
      <ConHeader @navToggle="navToggle" />
      <div class="vvhan-router">
        <transition name="el-fade-in-linear" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    NavMain: () => import("@/components/NavMain"),
    ConHeader: () => import("@/components/ConHeader"),
  },
  data() {
    return {
      routerArr: [],
      navStatus: {
        statusKey: false,
        titleText: "Han",
      },
    };
  },
  created() {
    const _router = this.$router.options.routes;
    this.routerArr = _router.find((itm) => {
      return itm.name == "HOMEMAIN";
    }).children;
  },
  methods: {
    navToggle(e) {
      e.style.transform = `rotate(${this.navStatus.statusKey ? 180 : 0}deg)`;
      this.navStatus.statusKey = !this.navStatus.statusKey;
    },
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  overflow: hidden;
}

::-webkit-scrollbar {
  width: 10px;
  height: 8px;
}
::-webkit-scrollbar-thumb,
::-webkit-scrollbar-thumb:hover {
  background-color: #abcdff;
  border-radius: 10px;
}
</style>

<style lang="scss" scoped>
.vvhan {
  display: flex;
  overflow: hidden;
  .vvhan-content {
    flex: 1;
    width: 100%;
    height: 100vh;
    overflow: hidden;

    .vvhan-router {
      box-sizing: border-box;
      width: 100%;
      height: 300px;
      padding: 16px;
    }
  }
}
</style>

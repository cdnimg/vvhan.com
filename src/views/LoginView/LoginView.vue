<!--
 * @Author: Han
 * @Date: 2022-05-12 16:22:56
 * @LastEditors: Han
 * @LastEditTime: 2022-05-17 14:03:30
 * @FilePath: \newAdmin\src\views\LoginView\LoginView.vue
-->
<template>
  <div class="vvhan-login">
    <div class="vvhan-login-left">
      <span class="bing-text">Get Inspired and Create. </span>
      <span class="copy-text">Copyright © 2022 </span>
    </div>
    <div class="vvhan-login-right">
      <div class="right-con">
        <h1 class="right-title"><span class="el-icon-s-promotion"></span>HanApi ADMIN</h1>
        <h2 class="right-welcome">欢迎来到 HanApi ADMIN</h2>
        <span class="right-tips" style="color: #fff">请登录 Please</span>
        <!-- <div class="right-input">
          <el-input v-model="vusername" placeholder="UserName" clearable size="large"></el-input>
          <el-input v-model="vpassword" placeholder="PassWord" show-password size="large"></el-input>
          <el-button type="primary" plain @click="vloginFn">登 陆</el-button>
        </div> -->
        <div class="right-img">
          <img :src="loginDataRes.qrImgData" alt="qr" />
          <!-- <el-button type="primary" plain @click="vloginFn">登 陆</el-button> -->
          <el-button type="primary" plain :loading="orUpadte" @click="getNewQr">获取/更新</el-button>
        </div>
        <div class="right-msg">
          <p>没有绝世神功 —— Frederick Brooks</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getLogin } from "@/plugins/http";
export default {
  data() {
    return {
      // vusername: "",
      // vpassword: "",
      orUpadte: false,
      loginDataRes: {
        qrImgData:
          "data:image/jpeg;base64,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",
        keyCode: null,
      },
      heartSetvel: null,
    };
  },
  methods: {
    // 输入框登陆
    // async vloginFn() {
    //   if ((this.vusername ?? "") == "" || (this.vpassword ?? "") == "")
    //     return this.$notify({
    //       title: "提示",
    //       message: "请输入完整",
    //       type: "warning",
    //     });
    //   if (this.loginStatus) return;
    //   this.loginStatus = true;
    //   const _res = await getList({
    //     type: "vLogin",
    //     username: this.vusername,
    //     password: this.vpassword,
    //   });
    //   if (_res.success && _res.token != "") {
    //     setTimeout(() => {
    //       this.$router.go(0);
    //     }, 888);
    //   }
    //   this.loginStatus = false;
    // },
    // 扫码登录
    async getNewQr() {
      this.orUpadte = true;
      const _res = await getLogin({ action: "get" });
      if (_res.success) {
        this.orUpadte = false;
        this.loginDataRes.qrImgData = _res.qrUrl;
        this.loginDataRes.keyCode = _res.keyCode;
        clearInterval(this.heartSetvel);
        this.heartSetvel = setInterval(async () => {
          await this.getLoginInfoFn(this.loginDataRes.keyCode);
        }, 2666);
      }
    },
    // 心跳检测
    async getLoginInfoFn(key) {
      const _res = await getLogin({ action: "heart", key });
      if (_res.success !== 200) {
        clearInterval(this.heartSetvel);
        _res.avatar && (this.loginDataRes.qrImgData = _res.avatar);
        _res.sysmessage && this.$notify({ title: "Error", message: _res.sysmessage, type: "error", offset: 66, duration: 0 });
        if (_res.success && _res.token != "") {
          setTimeout(() => {
            this.$router.go(0);
          }, 888);
        }
      }
    },
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  user-select: none;
}
.vvhan-login .el-input--suffix .el-input__inner {
  margin: 12px 0;
  font-weight: bolder;
  font-size: 18px;
}
</style>

<style lang="scss" scoped>
.vvhan-login {
  display: flex;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  .vvhan-login-left {
    position: relative;
    width: 66%;
    height: 100vh;
    background: url("@/assets/images/background.jpg") center no-repeat;
    background-size: cover;
    &::after {
      display: block;
      width: 100%;
      height: 100vh;
      background-color: rgba(0, 0, 0, 0.4);
      content: "";
    }
    span {
      position: absolute;
      padding-left: 40px;
      color: #fff;
      font-weight: bolder;

      &.bing-text {
        bottom: 110px;
        font-size: 26px;
      }
      &.copy-text {
        bottom: 60px;
        color: #d0cfcf;
        font-weight: bolder;
        font-size: 16px;
      }
    }
  }
  .vvhan-login-right {
    .right-con {
      width: 100%;
    }
    display: flex;
    flex: 1;
    align-items: center;
    box-sizing: border-box;
    height: 100vh;
    padding: 65px;
    .right-title {
      font-weight: 700;
      font-size: 20px;
    }
    .right-welcome {
      font-weight: 700;
      font-size: 24px;
    }
    .right-tips {
      color: #6c757d;
      font-weight: 600;
      font-size: 16px;
    }
    .right-input {
      padding: 22px 0;
      button {
        margin-top: 12px;
        font-weight: bolder;
      }
    }
    .right-img {
      text-align: center;
      img {
        width: 226px;
        height: 226px;
      }
      button {
        width: 100%;
        margin-top: 12px;
        font-weight: bolder;
      }
    }
    .right-msg {
      padding-top: 86px;
      color: #6c757d;
      font-weight: bold;
      font-size: 14px;
      text-align: right;
    }
  }
}
</style>

<!--
 * @Author: Han
 * @Date: 2022-05-13 11:28:52
 * @LastEditors: Han
 * @LastEditTime: 2022-05-13 18:12:47
 * @FilePath: \newAdmin\src\components\EditApiData.vue
-->
<template>
  <el-drawer :title="editTitle" :visible.sync="editstatus" direction="rtl" size="66vw" :before-close="closeFn">
    <el-form ref="elForm" :model="formData" :rules="formRules" size="small" label-width="100px">
      <el-form-item v-if="orEdit" label="Url" prop="url">
        <el-input v-model="formData.url" placeholder="请输入URL" clearable :style="{ width: '100%' }"> </el-input>
      </el-form-item>
      <el-form-item label="Title" prop="title">
        <el-input v-model="formData.title" placeholder="请输入Title" clearable :style="{ width: '100%' }"> </el-input>
      </el-form-item>
      <el-form-item label="Content" prop="content">
        <el-input v-model="formData.content" placeholder="请输入Content" clearable :style="{ width: '100%' }"> </el-input>
      </el-form-item>
      <el-form-item label="Head" prop="head">
        <el-input v-model="formData.head" type="textarea" placeholder="请输入Head" :autosize="{ minRows: 4, maxRows: 16 }" :style="{ width: '100%' }"></el-input>
      </el-form-item>
      <el-form-item label="Get" prop="get">
        <el-input v-model="formData.get" type="textarea" placeholder="请输入Get" :autosize="{ minRows: 4, maxRows: 16 }" :style="{ width: '100%' }"></el-input>
      </el-form-item>
      <el-form-item label="Return" prop="return">
        <el-input v-model="formData.return" type="textarea" placeholder="请输入Return" :autosize="{ minRows: 4, maxRows: 16 }" :style="{ width: '100%' }"></el-input>
      </el-form-item>
      <el-form-item label="Diaoyong" prop="diaoyong">
        <el-input v-model="formData.diaoyong" placeholder="请输入Diaoyong" clearable :style="{ width: '100%' }"> </el-input>
      </el-form-item>
      <el-form-item label="Demo" prop="demo">
        <el-input v-model="formData.demo" type="textarea" placeholder="请输入Demo" :autosize="{ minRows: 4, maxRows: 16 }" :style="{ width: '100%' }"></el-input>
      </el-form-item>
      <el-form-item size="small">
        <el-button type="primary" @click="submitForm">提交</el-button>
      </el-form-item>
    </el-form>
  </el-drawer>
</template>

<script>
import { getList } from "@/plugins/http";
export default {
  data() {
    return {
      orEdit: false,
      editUrl: "",
      editstatus: false,
      editTitle: "",
      formData: {
        url: "",
        title: "",
        content: "",
        head: "",
        get: "",
        return: "",
        demo: "",
        diaoyong: "",
      },
      formRules: {
        url: [
          {
            required: true,
            message: "请输入URL",
            trigger: "blur",
          },
        ],
        title: [
          {
            required: true,
            message: "请输入Title",
            trigger: "blur",
          },
        ],
        content: [
          {
            required: true,
            message: "请输入Content",
            trigger: "blur",
          },
        ],
        head: [
          {
            required: true,
            message: "请输入Head",
            trigger: "blur",
          },
        ],
        get: [
          {
            required: true,
            message: "请输入Get",
            trigger: "blur",
          },
        ],
        return: [
          {
            required: true,
            message: "请输入Return",
            trigger: "blur",
          },
        ],
        diaoyong: [
          {
            required: true,
            message: "请输入Diaoyong",
            trigger: "blur",
          },
        ],
        demo: [
          {
            required: true,
            message: "请输入Demo",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    // 打开并传递参数到编辑栏
    async openFn(e) {
      this.editstatus = true;
      (this.formData.url ?? "") != "" && this.$refs["elForm"].resetFields();
      if (e === false) {
        this.formData.url = "";
        this.editTitle = "New一个新的接口";
        this.orEdit = true;
        return 0;
      }
      this.orEdit = false;
      this.editTitle = e.title;
      this.editUrl = e.url;
      const _res = await getList({
        type: "getApiInfo",
        id: e.url,
      });
      _res.success && (this.formData = _res.data);
    },
    // 关闭Drawer编辑栏
    closeFn(e) {
      e();
    },
    // 提交Form
    submitForm() {
      this.$refs["elForm"].validate(async (valid) => {
        if (!valid) return;
        const _res = await getList({
          type: this.orEdit ? "addApiInfo" : "setApiInfo",
          id: this.editUrl,
          form: this.formData,
        });
        if (_res.success) {
          this.editstatus = false;
          this.$emit("refData");
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.edit-con {
  box-sizing: border-box;
  padding: 0 23px;
}
</style>

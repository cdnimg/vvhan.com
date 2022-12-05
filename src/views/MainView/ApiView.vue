<!--
 * @Author: Han
 * @Date: 2022-05-12 11:34:27
 * @LastEditors: Han
 * @LastEditTime: 2022-05-17 16:03:00
 * @FilePath: \newAdmin\src\views\MainView\ApiView.vue
-->
<template>
  <div class="api-view">
    <div class="apiview-add">
      <el-button type="primary" size="small" @click="showItemInfo(false)">New一个新接口</el-button>
    </div>
    <div class="apiInfo-list">
      <el-table :data="listData" style="width: 100%">
        <el-table-column fixed type="index" label="INDEX" align="center" width="96"> </el-table-column>
        <el-table-column prop="title" label="NAME" width="260"> </el-table-column>
        <el-table-column prop="url" label="KEY" width="140"> </el-table-column>
        <el-table-column prop="content" label="CONTENT"> </el-table-column>
        <el-table-column fixed="right" label="操作" align="center" width="85">
          <template slot-scope="scope">
            <el-button style="margin-right: 4px" type="text" size="small" @click="showItemInfo(scope.row)">编辑</el-button>
            <el-popconfirm title="确定要删除接口吗？" style="margin-left: 4px" @confirm="delApiInfo(scope.row)">
              <el-button slot="reference" type="text" size="small">删除</el-button>
            </el-popconfirm>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 编辑Drawer -->
    <EditApiData ref="editApi" @refData="getList" />
  </div>
</template>

<script>
import { getList } from "@/plugins/http";
export default {
  components: {
    EditApiData: () => import("@/components/EditApiData"),
  },
  data() {
    return {
      // 节流
      delKey: true,
      listData: [],
      editStatus: false,
    };
  },
  created() {
    // Vuex中是否存在ListData，不存在则请求
    const _list = this.$store.state.listTableData;
    Array.isArray(_list) && _list.length > 0 ? (this.listData = _list) : this.getList();
  },
  methods: {
    // 获取TabelList
    async getList() {
      const _res = await getList({
        type: "getList",
      });
      if (_res.success) {
        this.listData = _res.data;
        this.$store.commit("setListTableData", _res.data);
        this.delKey = true;
      }
    },
    // 删除List的Item
    async delApiInfo({ url }) {
      if (!this.delKey) return;
      this.delKey = false;
      await getList({
        type: "delApiInfo",
        id: url,
      });
      this.getList();
    },
    // 打开编辑框
    showItemInfo(e) {
      this.$refs.editApi.openFn(e);
    },
  },
};
</script>

<style lang="scss" scoped>
.api-view {
  width: 100%;
  // overflow: hidden;
  .apiInfo-list {
    width: 100%;
    height: calc(100vh - 126px);
    overflow-x: hidden;
    overflow-y: scroll;
  }
  .apiview-add {
    margin: 0 0 8px 0;
    text-align: right;
  }
}
</style>

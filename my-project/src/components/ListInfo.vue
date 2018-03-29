<template>
  <el-container>
    <el-header style="text-align: left; background-color: rgb(238,242,246);">
      <el-dropdown>
        <i class="el-icon-setting"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item><router-link to="/web/list/add">新增</router-link></el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>SUB HEADER</span>
    </el-header>
    <el-main>
      <el-table :data="tableData">
        <el-table-column prop="date" label="日期" ></el-table-column>
        <el-table-column prop="name" label="姓名" ></el-table-column>
        <el-table-column prop="address" label="地址" ></el-table-column>
      </el-table>
    </el-main>
  </el-container>
</template>

<script>

export default {
  name       : 'ListInfo',
  data() {
    const item = {
      date: '2016-05-02',
      name: '张三',
      address: '上海市'
    };
    return {
      tableData: Array(5).fill(item)
    }
  }


}
</script>

<style>


</style>

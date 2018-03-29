<template>
  <el-container>
    <el-header >
      <span>Add</span>
    </el-header>
    <div class="addForm">
      <el-form label-position="right" label-width="85px">
        <el-row>
          <el-col :span="8">
            <el-form-item label="姓名:">
              <el-input v-model="name" placeholder="请输入内容"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="年龄:">
              <el-input v-model="age" placeholder="请输入内容"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="8">
            <el-form-item label="日期:">
              <el-date-picker type="date" v-model="date"  placeholder="请输入内容" format="yyyy-MM-dd" value-format="yyyy-MM-dd"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="角色:">
              <el-select v-model="role" multiple  placeholder="请输入内容">
                <el-option
                  v-for="item in options"
                  :key="item.rId"
                  :label="item.label"
                  :value="item.rId">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </el-container>
</template>

<script>

export default {
  name       : 'AddInfo',
  data() {
      return {
        options: [{
            rId: '1',
            label: '学生'
        },{
          rId: '2',
          label: '老师'
        },{
          rId: '3',
          label: '医生'
        }],
        name: '',
        age: '',
        date: '',
        role: '',
      }
  }
}

</script>

<style>
  .el-header {
    background-color: #D3DCE6;
    color: #333;
    line-height: 50px;
  }
  .addForm{
    padding: 30px 30px;
  }
  .el-input,.el-date-editor,.el-select{
    width: 240px!important;
  }


</style>

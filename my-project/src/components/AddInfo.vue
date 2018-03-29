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

        <el-row>
          <el-col :span="8">
            <el-form-item label="即时配送">
              <el-switch v-model="delivery"></el-switch>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="24">
            <el-form-item label="活动性质">
              <el-checkbox-group v-model="type">
                <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                <el-checkbox label="地推活动" name="type"></el-checkbox>
                <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="8">
            <el-form-item label="特殊资源">
              <el-radio-group v-model="resource">
                <el-radio label="线上品牌商赞助"></el-radio>
                <el-radio label="线下场地免费"></el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="8">
            <el-form-item label="活动形式">
              <el-input type="textarea" v-model="desc"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="8" :offset="3">
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
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
        delivery: false,
        type: '',
        resource: '',
        desc: '',
      }
  },
  methods: {
    onSubmit() {
        console.log('submit!')
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

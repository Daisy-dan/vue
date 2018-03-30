<template>
  <el-container>
    <el-header >
      <span>Render</span>
    </el-header>
    <div class="con">
      <div>
        <h2>插值</h2>
        <div>
          <span>(文本)</span>
          <span v-once>(文本)name: {{ name }}</span>
          <span>name: {{ name }}</span>
          <el-button type="primary" @click="change">v-once 指令</el-button>
        </div>
        <div>
          <span>(原始 HTML)</span>
          <span>html: <i v-html="html"></i></span>
        </div>

        <div>
          <span>(v-bind)</span>
          <span v-bind:id="dynamicId"></span>
          <button v-bind:disabled="isButtonDisabled">Button</button>
        </div>
      </div>
      <div>
        <span>(JavaScript 表达式)</span>
        <span>{{ number + 1 }}</span>
        <span>{{ isButtonDisabled ? 'YES' : 'NO' }}</span>
      </div>

      <div>
        <h2>指令</h2>
        <span>(v-if)</span>
        <span v-if="isIf">now you see me</span>

      </div>
      <div>
        <span>(参数v-bind:href  ////v-on)</span>
        <a v-bind:href="url">www.baidu.com</a>
        <a :href="url">www.baidu.com</a>
        <span v-bind:class="{ active: isIf }"></span>

        <a v-on:click="change">click</a>
        <a @click="change">click</a>
      </div>
      <div>
        <h1>v-if</h1>
        <h2 v-if="isIf">Yes</h2>
        <h2 v-else>No</h2>
        <div v-if="type === 'A'">
          A
        </div>
        <div v-else-if="type === 'B'">
          B
        </div>
        <div v-else-if="type === 'C'">
          C
        </div>
        <div v-else>
          Not A/B/C
        </div>
        <ul>
          <li v-for="todo in todos" v-if="todo.isShow" :key="todo.id">
            {{ todo.id }}
          </li>
        </ul>
        <ul>
          <li v-for="n in evenNumbers">{{ n }}</li>
        </ul>
        <ul>
          <li v-for="n in even(numbers)">{{ n }}</li>
        </ul>
      </div>
    </div>
  </el-container>
</template>

<script>

export default {
  name       : 'Render',
  data() {
      return {
        name: 'Tom',
        html: 'hello',
        dynamicId: '2',
        isButtonDisabled: false,
        number: 3,
        isIf: true,
        url: 'www.baidu.com',
        type: 'O',
        todos: [
          {
              id: 1,
              isShow:true
          },
          {
            id: 2,
            isShow:false
          },
          {
            id: 3,
            isShow:true
          }
        ],
        numbers: [ 1, 2, 3, 4, 5 ]
      }
  },
  computed: {
    evenNumbers: function () {
      return this.numbers.filter(function (number) {
        return number % 2 === 0
      })
    }
  },
  methods: {
    change() {
        this.name = 'Lucy';
        console.log(this.name)
    },
    even: function (numbers) {
      return numbers.filter(function (number) {
        return number % 2 === 0
      })
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

  .con{
    padding: 30px;
  }
  span{
    padding: 30px;
  }

</style>

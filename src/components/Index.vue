<template>

    <div id="home">
        home
        <mt-button type="default">default</mt-button>
        <mt-button type="primary">primary</mt-button>
        <Life v-if="flag" :title="'父组件传的值'" :run="run" :home="this" ref="life"/>

        <button @click="flag=!flag">挂载及卸载</button>

        <br/>
        <button @click="getDate()">测试vue-resource</button>
        <br/>
         <br/>
        <button @click="getSonDate()">主动获取子组件的数据和方法</button>
        
        <BrotherComponent/>
        <BrotherComponent2/>

    </div>
</template>
<script>
    /**
     * vue-router
     * axios
     * 父子组件传值
     */
    // 引入组件
    import HelloWorld from './HelloWorld.vue'
    import TodoList2 from './TodoList2.vue'
    import TodoList from './TodoList.vue'
    import Life from './Life.vue'
    import BrotherComponent from './BrotherComponent.vue'
    import BrotherComponent2 from './BrotherComponent2.vue'

    //哪里用哪里引入npm install axios --save
    import Axios from 'axios'

    
    //挂载组件
    export default {
        components: {
            HelloWorld,
            TodoList2,
            TodoList,
            Life,
            BrotherComponent,
            BrotherComponent2
        },
        data() {
            return {
                flag:true,
                dataA:'aaa'
            }
        },
        methods: {
            getDate(){

                //安装vue-resource模块 在main.js引入调用
               this.$http.get('/').then(response => {
                   this.dataA = response.body;
               },response => {
                   //error

               });
            },
            getDate2(){

                //安装vue-resource模块 在main.js引入调用
               Axios.get('/').then((response) => {
                   console.log(response);
               }).catch((error) => {
                   console.log(error);
               });
            },
            run(){
                alert("父组件方法")
            },
            getSonDate(){
                alert(this.$refs.life.son)
                this.$refs.life.sonRun();
            },
            parRun(){
                alert("父组件方法parRun")
            }
        },
        mounted(){
            this.getDate();
        }
    }

</script>
<style lang="scss">
</style>
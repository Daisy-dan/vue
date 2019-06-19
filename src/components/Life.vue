<template >
    <div id="life">
        <div>{{msg}}</div>
        <button @click="changeMsg()">改变msg</button> 
        <div>------{{title}}</div> 
        <button @click="run()">执行父组件传过来的方法</button>

        <div>+++++++++{{home.flag}}</div> 

        <button @click="getParDate()">主动获取父组件的方法</button>
    </div>
</template>

<script>
/**
 * 生命周期
 * 父子组件传值子组件props
 */
import { all } from 'q';
export default {
    data(){
        return{
            msg: "生命周期",
            son: "子组件信息" 
        }
    },
    methods:{
        changeMsg(){
            this.msg = "改变后数据"
        },
        sonRun(){
            alert("子组件方法")
        },
        getParDate(){
            alert(this.$parent.flag)
            this.$parent.parRun();
        }
    },
    props:['title','run','home'], //父组件传到子组件的值
    // props: {
    //     "title": String
    // },
    beforeCreate() {
        console.log("创建前");
    },
    created(){
        console.log("创建完成");
    },
    beforeMount(){
        console.log("模板编译前");
    },
    mounted(){
        console.log("模板编译完成");
    },
    beforeUpdate(){
        console.log("数据更新前");
    },
    updated(){
        console.log("数据更新完成");
    },
    beforeDestroy(){
        console.log("实例销毁前");
    },
    destroyed(){
        console.log("实例销毁完成");
    }
}
</script>
<style lang="scss">
    #life{
        margin: 50px 0;
    }
</style>

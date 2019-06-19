<template>
    <div>
        <div>兄弟组件间传值</div>
        <div>{{msg}}</div>
        <button @click="televise()">给组件二广播数据</button>
    </div>
</template>
<script>
/**
 * VueEvent 非父子组件间传值
 */
//非父子组件间传值 
//新建 VueEvent.js
//引入实例Vue
//广播数据$emit  接收数据$on
import VueEvent from '../model/vueEvent.js'

export default {
    data(){
        return{
            msg:'组件一'
        }
    },
    methods: {
        televise(){
            VueEvent.$emit('compon1',this.msg)
        }
    },
    mounted(){
        VueEvent.$on('compon2',function(data){console.log(data)})
    }
}
</script>

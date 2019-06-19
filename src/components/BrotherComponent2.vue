<template>
    <div>
         <div>{{msg}}</div>
          <button @click="televise2()">给组件一广播数据</button>
    </div>
</template>
<script>
/**
 * VueEvent 非父子组件间传值
 */

//引入实例Vue
import VueEvent from '../model/vueEvent.js'
export default {
    data(){
        return{
            msg:'组件二'
        }
    },
    methods: {
        televise2(){
            VueEvent.$emit('compon2',this.msg)
        }
    },
    mounted(){
        VueEvent.$on('compon1',function(data){console.log(data)})
    }
}
</script>

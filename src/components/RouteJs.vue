<template>
    <div>
        <h2>路由编程式导航</h2>
        <ul>
            <li v-for="item in list" :data-gid="item.gid" @click="goDetail(item.gid)">{{item.title}}</li>
        </ul>
        <h2>路由嵌套</h2>
        <div>
            <router-view></router-view>
        </div>

    </div>
</template>
<script>
/**
 * js路由跳转
 *  mode: 'history',  //hash模式改完history
 * 路由嵌套
 */
export default {
    data(){
        return{
            list: [
                {
                    title: "aaa",
                    gid  : "01"
                },
                {
                    title: "bbb",
                    gid  : "02"
                },
                {
                    title: "ccc",
                    gid  : "03"
                }
            ]
        }
    },
    methods: {
        goDetail(gid){
            
            this.$router.push({path: '/routejs/detail?gid=' + gid})

            // {path: '/todoList2/detail/:aid', component: Detail, name: 'detail'}, 命名路由

            //this.$router.push({name: 'detail', params: {aid: gid}})
        }
    }
}
</script>
<style>

</style>


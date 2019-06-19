<template>
    <div>
        <input type="text" v-model="msg" @keydown="doAdd($event)"/>
        <button @click="addItem()" >添加</button>
        <div>
            <span>进行中------------</span>
            <ul>
                
                <li v-for="(item,key) in list" v-if="!item.checked">
                    <input type="checkbox" v-model="item.checked" @change="saveDate()">
                    <!-- 路由传值 -->
                    <router-link :to="'/todoList2/detail/'+ key" >{{item.title}}</router-link>
                    <!-- get传值 -->
                    <router-link :to="'/todoList2/detail?aid='+ key" >{{item.title}}</router-link>
                    <button  @click="deleteItem(key)">删除</button>
                    </li>
            </ul>
            <span>已完成------------</span>
            <ul>
                
                <li v-for="(item,key) in list" v-if="item.checked">
                    <input type="checkbox" v-model="item.checked" @change="saveDate()">
                    <!-- 路由传值 -->
                    <router-link :to="'/todoList2/detail/'+ key" >{{item.title}}</router-link>
                    <button  @click="deleteItem(key)">删除</button>
                    </li>
            </ul>
        </div>

        <button @click="getList()">获取list</button>

        
    </div>
</template>

<script>
/**
 * 添加，删除，改变状态  list
 * list 缓存数据
 * 路由传值  get传值
 */
import { constants } from 'crypto';
import storage from '../model/storage.js';
console.log(storage);
// import { all } from 'q';
export default {
    name: 'TodoList2',
    data() {
        return{
            msg: "",
            list:[]
        }
        
    },
    methods:{
        addItem(e){
            if(this.msg != ""){
                // var a={};
                // a.title = this.msg;
                // a.checked = false;
                // this.list.push(a);
                this.list.push({
                    title: this.msg,
                    checked: false
                })
            }else{
                alert("空");
            }
            this.msg = '';
            
            storage.set("list", this.list);
        },
        doAdd(e){         
            if(e.keyCode == 13){
                console.log(e.keyCode);
                this.addItem();
            }
        },
        deleteItem(k,e){
            this.list.splice(k,1);
             storage.set("list", this.list);
        },
        getList(){
            console.log(this.list);
        },
        saveDate(){
            storage.set("list", this.list);
        }
    },
    mounted(){
        var list = storage.get("list");
        if(list){
            this.list = list;
        }
       // console.log(this.list)
    }
}
</script>

<style scoped>

</style>




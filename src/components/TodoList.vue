<template>
    <div>
        <span ref="edit">请输入</span>
        <input type="text" v-model="msg" ref="info"/>
        <button @click="addItem($event)" data-aid="123">添加</button>
        <div>
            <ul>
                <li v-for="(item,key) in list" :data-lid="item">{{item}}<button :data-bid="item"  @click="deleteItem(key,$event)">删除</button></li>
            </ul>
        </div>


        <div>store里的值{{this.$store.state.count}}</div>
        <br/>
        <button @click="incCount()">增加store里的值的数量</button>
        
    </div>
</template>

<script>
/**
 * 添加删除list
 * ref   --value  --textContent
 * data-aid  --e.srcElement.dataset.aid  获取dom属性
 */
// import { all } from 'q';

import store from '../vuex/store.js'
export default {
    name: 'TodoList',
    data() {
        return{
            msg: "",
            list:[]
        }
        
    },
     store,
    methods:{
        addItem(e){
            if(this.msg != ""){
                this.list.push(this.msg);
            }else{
                alert("空");
            }
            this.msg = '';
            //alert(this.$refs.info.value);
            this.$refs.edit.textContent = "已添加";
            //e.srcElement
            console.log(e.srcElement)
            console.log(e.srcElement.dataset.aid)
            
        },
        deleteItem(k,e){
            this.list.splice(k,1)
            alert(e.srcElement.dataset.bid)
        },
        incCount(){
                this.$store.commit('incCount'); //触发store里的数据
            }
    }
}
</script>

<style scoped>

</style>




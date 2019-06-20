import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//vuex 1数据共享，多个组件共用数据，其中一个组件对数据进行改变，其他组件数据显示相应变化
//vuex 2数据持久化
// state  存储数据
var state = {
    count: 1
}

//放方法，主要用于改变state的数据
var mutations = {
    incCount(){
        ++state.count;
    }
}

//类似计算属性，改变state里面的count数据的时候回触发getters里面的方面，获取新的值
var getters = {
    computedCount: (state) => {
        return state.count *5
    }
}

//执行mutations的操作，可异步
var actions = {
    inMutationsCount(context) {
        context.commit('incCount'); //执行mutations的方法
    }
}

//实例化store
const store = new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})

export default store;
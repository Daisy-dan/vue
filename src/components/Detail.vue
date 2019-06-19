<template>
    <div>
        <div>详情页{{msg}}</div>
    </div>
</template>
<script>
import { all } from 'q';
/**
 * 获取route参数
 */
export default {
    data(){
        return {
            msg: ''
        }
    },
    mounted(){
        this.msg = this.$route.params.aid;
        this.msg = this.$route.query;
    }
}
</script>   

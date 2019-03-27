<template>
  <div id="searchContainer">
    <div class="search">
      <input @confirm="handleConfirm" v-model="searchContent" type="text" confirm-type="搜索" placeholder="书中自有黄金屋" placeholder-class="placeholder">
    </div>
    <!--列表组件-->

  </div>
</template>

<script>
  import axios from 'axios'
  import request from '../../utils/request'
  export default {
    data(){
      return {
        searchContent: '',
        booksList: []
      }
    },
    methods: {
      async handleConfirm(){
        let req = this.searchContent
        this.booksList = await request('/searchBooks', {req});
        console.log(result);
//        axios.get('http://localhost:3000/searchBooks')
//          .then(function (response) {
//            console.log(response);
//            // 修改promise实例的状态成功
//          })
//          .catch(function (error) {
//            console.log(error);
//          });
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #searchContainer
    .search
      width 80%
      height 80rpx
      margin 0 auto
      border-bottom 1rpx solid #02a774
      input
        width 100%
        height 80rpx
        .placeholder
          color #02a774
          font-size 28rpx
          text-align center


</style>
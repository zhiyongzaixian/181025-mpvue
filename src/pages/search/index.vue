<template>
  <div id="searchContainer">
    <div class="search">
      <input @confirm="handleConfirm" v-model="searchContent" type="text" confirm-type="搜索" placeholder="书中自有黄金屋" placeholder-class="placeholder">
    </div>
    <!--列表组件-->
    <div v-if="booksList.length">
      <BookList :booksList="booksList"/>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import request from '../../utils/request'
  import BookList from '../list/index.vue'
  export default {
    components: {
      BookList
    },
    data(){
      return {
        searchContent: '',
        booksList: []
      }
    },
    methods: {
      async handleConfirm(){
        let req = this.searchContent
        let result = await request('/searchBooks', {req});
        console.log(typeof result.data, result.data);
        this.booksList = result.data;
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
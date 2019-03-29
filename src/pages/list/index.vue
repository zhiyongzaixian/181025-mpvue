<template>
  <ul id="listContainer">
    <li class="bookItem" v-for="(item, index) in booksList" :key="index">
      <img :src="item.image" alt="">
      <div class="info">
        <p>{{item.title}}</p>
        <p>作者： {{item.author}}</p>
        <p>出版社: {{item.publisher}}</p>
      </div>
      <p class="price">{{item.price}}</p>
    </li>
  </ul>
</template>

<script>
  export default {
    props:  {
      booksList: Array
    },
    data(){
      return {
        booksList: []
      }
    },
    mounted(){
      if(this.$mp){
        this.booksList = JSON.parse(this.$mp.query.booksList)
      }
      console.log(this.booksList, typeof this.booksList, 'xxx');
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #listContainer
    height 100%
    .bookItem
      display flex
      padding 10rpx
      border-bottom 1rpx solid #eee
      img
        width 140rpx
        height 140rpx
        margin-right 10rpx
      .info
        width 70%
        font-size 30rpx
        line-height 50rpx
      .price
        font-size 36rpx
        font-weight bold
        color red
</style>
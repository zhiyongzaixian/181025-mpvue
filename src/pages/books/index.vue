<template>
  <div id="booksContainer">
    <swiper indicator-dots>
      <swiper-item v-for="(item, index) in carousel" :key="index">
        <img :src="item.image" alt="">
      </swiper-item>
    </swiper>
    <div class="booksList">
      <div class="nav">
        <span>全部商品</span>
        <span class="more"> > </span>
      </div>
      <ul class="list">
        <li @click="toDetail(item)" v-for="(item, index) in booksList" :key="index">
          <img :src="item.image" alt="">
          <p>《{{item.title}}》</p>
          <p>{{item.author}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import booksList from './datas/data.json'
  export default {
    data(){
      return {
        booksList: []
      }
    },
    mounted(){
      this.booksList = booksList
    },
    computed: {
      carousel(){
        return [...this.booksList].splice(0, 4)
      }
    },
    methods: {
      toDetail(bookItem){
        wx.navigateTo({
          url: '/pages/detail/main?bookItem=' + JSON.stringify(bookItem)
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #booksContainer
    swiper
      width 100%
      height 400rpx;
      img
        width 100%
        height 400rpx;
    .booksList
      .nav
        padding 10rpx
        .more
          float right
          width 60rpx
          text-align center

      .list
        display flex
        flex-wrap wrap
        li
          width 50%
          text-align center
          border-bottom 1rpx solid #eee
          &:nth-child(2n + 1)
            border-right 1rpx solid #eee
          box-sizing border-box
          img
            width 200rpx
            height 200rpx
            margin 10rpx 0
          p
            font-size 28rpx
            line-height 50rpx
</style>
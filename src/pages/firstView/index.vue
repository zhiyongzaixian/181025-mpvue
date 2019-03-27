<template>
  <div id="firstViewContainer" >
    <swiper :indicator-dots="index!==3" @change="handleChange">
      <swiper-item>
        <img src="/static/imgs/firstView/1.jpg" alt="">
      </swiper-item>
      <swiper-item>
        <img src="/static/imgs/firstView/2.jpg" alt="">
      </swiper-item>
      <swiper-item>
        <img src="/static/imgs/firstView/3.jpg" alt="">
      </swiper-item>
      <swiper-item>
        <img src="/static/imgs/firstView/nvsheng.jpg" alt="">
      </swiper-item>
    </swiper>
    <button @click="toBooks" v-if="index===3" class="btn">开始体验</button>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        index: 0
      }
    },
    methods: {
      handleChange(event){
        this.index = event.mp.detail.current
      },
      toBooks(){
        wx.navigateTo({
          url: '/pages/books/main'
        })
      }
    }
  }
</script>

<style lang="stylus"  rel="stylesheet/stylus">

  #firstViewContainer
    width 100%
    height 100%
    swiper
      width 100%
      height 100%
      img
        width 100%
        height 100%
    .btn
      position absolute
      bottom 20rpx
      left 50%
      margin-left -140rpx
      width 280rpx
      height 80rpx
      background rgba(255,255,255,.7)
      line-height 80rpx
</style>
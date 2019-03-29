<template>
  <div id="personalContainer">
    <div class="head">
      <img :src="userInfo.avatarUrl?userInfo.avatarUrl:'/static/imgs/personal/personal.png'" alt="">
      <button open-type="getUserInfo" @getuserinfo="handleGetUserInfo">{{userInfo.nickName?userInfo.nickName:'登录'}}</button>
    </div>
    <div class="cardList">
      <div class="card">
        <span>我的收藏</span>
        <span class="more">more ></span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        userInfo: {}
      }
    },
    mounted(){
      // 用户授权以后可以自动获取用户登录信息
      wx.getUserInfo({
        success: (res) => {
          this.userInfo = res.userInfo
        },
        fail: () => {
          console.log('获取失败');
        }
      })
    },
    methods: {
      handleGetUserInfo(res){
        console.log(res);
        // 判断用户是否电机的是允许
        if(res.mp.detail.userInfo){
          this.userInfo = res.mp.detail.userInfo
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #personalContainer
    .head
      background #02a774
      padding 40rpx 20rpx
      img
        width 100rpx
        height 100rpx
        margin 0 20rpx
        vertical-align middle
        border-radius 50rpx
      button
        display inline-block
        height 60rpx
        line-height 60rpx
        text-align center
        background rgba(255,255,255,.7)
        vertical-align middle
    .cardList
      .card
        width 90%
        height 80rpx
        line-height 80rpx
        padding 0 10rpx
        margin 10rpx auto
        border 1rpx solid #eee
        font-size 30rpx
        .more
          float right
</style>
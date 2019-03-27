<template>
  <div id="detailContainer">
    <h1>{{bookItem.title}}</h1>
    <img class="detailImg" :src="bookItem.image" alt="">
    <div class="info">
      <p>作者: {{bookItem.author}}</p>
      <p>出版社: {{bookItem.publisher}}</p>
    </div>
    <div class="btn">
      <button>收藏该文章</button>
      <button>分享该文章</button>
    </div>
    <section>
      <h2>作者简介</h2>
      <article>
        {{bookItem.author_intro}}
      </article>
    </section>
    <section>
      <h2>文章简介</h2>
      <article>
        {{bookItem.summary}}
      </article>
    </section>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        bookItem: {}
      }
    },
    mounted(){
      this.bookItem = JSON.parse(this.$mp.query.bookItem)
      wx.setNavigationBarTitle({
        title: this.bookItem.title
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #detailContainer
    h1
      font-size 46rpx
      font-weight bold
      text-align center
      line-height 100rpx
    .detailImg
      width 70%
      height 700rpx
      margin-left 15%
    .info
      padding 0 15%
      font-size 32rpx
    .btn
      padding 15%
      button
        display inline-block
        width 240rpx
        height 60rpx
        line-height 60rpx
        font-size 28rpx
        margin-right 10rpx
    section
      text-align center
      h2
        font-size 40rpx
        font-weight bold
        color #02a774
      article
        font-size 28rpx
        color #666
        padding 0 15%
</style>
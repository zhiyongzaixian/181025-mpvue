
<script>
  import request from './utils/request'
  export default {
    mounted(){
      wx.login({
        success: async (res) => {
          // 获取用户登录的临时凭证
          let code = res.code
          let result = await request('/getOpenId', {code})
          let openId = result.data
          // 缓存到storage
          wx.setStorage({
            key: 'openId',
            data: openId,
            success: () => {
              console.log('缓存成功');
            }
          })
        }
      })
    }
  }
</script>

<style lang="stylus"  type="text/stylus">
  page
    width 100%
    height 100%
</style>
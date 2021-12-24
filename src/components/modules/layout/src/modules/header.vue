<template>
  <div class="sm-header bcf">
    <template v-if="$slots.content">
      <slot name="content"></slot>
    </template>
    <template v-else>
      <div class="rf userName">
        Admin
        <ul class="operating">
          <li>修改密码</li>
          <li @click="logOut">退出登录</li>
        </ul>
      </div>
      <img class="rf tou-xiang" src="@img/tou-xiang.png" alt="">

      <i class="rf cen-ge" />
      <i class="rf gennlife_Show_Bell" />
      <i class="rf gennlife_Show_Help" />
      <i @click="onOverload" class="rf gennlife_Act_Refresh" />
    </template>
    <div class="cb"></div>
  </div>
</template>

<script>
import $state from '@state'
export default {
  name: 'smHeader',
  data () {
    return {
    }
  },
  mounted () { },
  methods: {
    logOut () {
      localStorage.clear()
      this.$router.push({ path: '/login' })
    },
    onOverload () {
      $state.overload = false
      setTimeout(() => {
        $state.overload = true
      }, 200)
    }
  }
}
</script>

<style scoped lang='stylus'>
.bigData{
  margin-left 20px
  padding 8px 18px
  border-radius 5px
  &:hover{
    background-color rgba(200,215,230,0.9)
  }
}
.icon-chexiao{
  color: rgba(0,0,0,0.4)
}
.sm-header{
  position relative
  height $headerHeight
  line-height $headerHeight
  box-shadow 2px 1px 5px #ccc
  i[class*=gennlife_]{
    color rgba(0,0,0,.4)
    font-size $headerIconSize
    display inline-block
    cursor pointer
    width "%s" % ($headerHeight - $headerIconSize)
    height $headerHeight
    text-align center
    line-height $headerHeight
  }
  .icon-bangzhu,
  .icon-tongzhi{
    color rgba(0,0,0,.4)
  }
  .operating{
    display none
    background-color #fff
    position absolute
    z-index 3
    right $headerTouXiang
    top $headerHeight
    padding 3px 0
    box-shadow 1px 2px 5px #ccc
    border-radius 3px
    li{
      width 136px
      height: 32px
      line-height 32px
      text-indent 2em
      color rgba(0, 0, 0, 0.85)
      cursor pointer
    }
    li:hover{
      background-color rgba(0, 135, 255, 0.1)
    }
  }
  div.userName{
    padding 0 24px 0  8px
    cursor pointer
    &:hover .operating{
      display inline-block
    }
  }
  i.cen-ge{
    width 1px
    height $headerTouXiang
    background-color #ccc
    position relative
    top 50%
    margin-top "-%s" % ($headerTouXiang / 2)
    margin-left $headerIconSize
    margin-right "%s" % ($headerTouXiang + 6)
  }
  img.tou-xiang{
    width $headerTouXiang
    height $headerTouXiang
    position relative
    top 50%
    margin-top "-%s" % ($headerTouXiang / 2)
  }
}
</style>

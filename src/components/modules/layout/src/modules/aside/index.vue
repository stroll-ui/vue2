<template>
  <div :class="`sm-aside-box bcf ${isCollapse && 'sm-aside-min'}`">
    <div class="sm-aside-switch" @mouseenter="mouseenter" @mouseleave="mouseleave" @click="collapseSwitch">
      <img :src="isCollapse ? iconZhankai : iconShouqi" />
    </div>
    <component :is="componentIs" :menuList="menuList"></component>
    <router-link to="/home"><img class="logo" :src="isCollapse ? logoShou : logo" ></router-link>
    <div class="upper-arc"><div></div></div>
    <div class="lower-arc"><div></div></div>
  </div>
</template>

<script>
import iconShouqi from '@img/icon-shouqi.png'
import iconZhankai from '@img/icon-zhankai.png'
import iconShouqiHover from '@img/icon-shouqi_hover.png'
import iconZhankaiHover from '@img/icon-zhankai_hover.png'
import logoShou from '@img/logo_shou.png'
import logo from '@img/logo.png'
import smMenu from './modules/menu.vue'
import smMinMenu from './modules/minMenu.vue'
import $state from '@state'
export default {
  name: 'smAside',
  components: { smMenu, smMinMenu },
  props: {
    menuList: { type: Array, default: () => ([]) }
  },
  computed: {
    isCollapse () {
      return $state.isCollapse
    },
    componentIs: () => {
      if ($state.isCollapse) {
        return 'smMinMenu'
      } else {
        return 'smMenu'
      }
    }
  },
  data () {
    return {
      iconShouqi,
      iconZhankai,
      iconShouqiHover,
      iconZhankaiHover,
      logoShou,
      logo
    }
  },
  methods: {
    collapseSwitch () {
      $state.isCollapse = !$state.isCollapse
    },
    mouseenter (e) {
      e.target.getElementsByTagName('img')[0].src = this.isCollapse ? this.iconZhankaiHover : this.iconShouqiHover
      e.currentTarget.className = 'sm-aside-switch sm-aside-switch-hover'
    },
    mouseleave (e) {
      e.target.getElementsByTagName('img')[0].src = this.isCollapse ? this.iconZhankai : this.iconShouqi
      e.currentTarget.className = 'sm-aside-switch'
    }
  }
}
</script>

<style lang="stylus">

</style>
<style scoped lang='stylus'>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: $asideMaxWidth;
}
.sm-aside-box {
  position absolute
  z-index 5
  top 0px
  left 0px
  width: $asideMaxWidth;
  height: 100vh;
  background-color #07174C
  background-image url('~@img/left_bg_zhankai.png')
  background-position-y bottom
  background-size "%s auto"  % ($asideMaxWidth + 108px)
  background-repeat no-repeat
}
.el-menu{
  margin-top 60px
  height calc(100vh - 60px)
  overflow-y auto
}
.logo{
  height 32px
  padding 14px
  position absolute
  top 0
  left 0
}
.sm-aside-switch{
  position absolute
  z-index 3
  top $asideSwitchTop
  right -12px
  img{
    cursor pointer
    width 24px
  }
}
.sm-aside-switch-hover{
  top $asideSwitchTop
}
.sm-aside-min{
  width $asideMinWidth
  background-image url('~@img/left_bg_shouqi.png')
  background-position-y bottom
  background-size "%s auto"  % ($asideMinWidth + 60px)
}
.upper-arc, .lower-arc{
  position absolute
  width 16px
  height 16px
  div{
    width 16px
    height 16px
  }
}
.upper-arc{
  top 0px
  right -16px
  background-color #0A2D88
  div{
    background-color #fff
    border-top-left-radius 20px
  }
}
.lower-arc{
  bottom 0px
  right -16px
  background-color #041566
  div{
    background-color #F4F8FB
    border-bottom-left-radius 20px
  }
}
/deep/ .el-menu{
  background-color rgba(0,0,0,0)
  border-right: 0
}
</style>

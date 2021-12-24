<template>
  <div class="sm-container">
    <smAside :menuList="menuList" />
    <div :class="{
      'sm-container-content':true,
      'sm-container-min': !isCollapse,
      'sm-container-max': isCollapse
    }">
      <smHeader >
        <template v-slot:content>
          <slot name="header"></slot>
        </template>
      </smHeader>
      <div class="sm-main" v-loading="!Overload">
        <div v-if="Overload">
          <template v-if="$slots.main">
            <slot name="main"></slot>
          </template>
          <template v-else>
            <div class="bcf">
              <router-view />
            </div>
          </template>
        </div>
      </div>
    </div>
    <div class="cb"></div>
  </div>
</template>

<script>
import STYL from '@styl'
import smHeader from './modules/header.vue'
import smAside from './modules/aside/index.vue'
import $state from '@state'
import { Loading } from 'element-ui'
import Vue from 'vue'
Vue.use(Loading)
Vue.use(Loading.directive)
export default {
  name: 'smLayout',
  title: '布局',
  components: { smHeader, smAside },
  props: {
    menuList: { type: Array, default: () => ([]) }
  },
  data () {
    return {}
  },
  computed: {
    StylProps: () => STYL,
    Overload: () => {
      return $state.overload
    },
    isCollapse () {
      return $state.isCollapse
    }
  },
  created () {
    window.addEventListener('resize', this.MenusStyle)
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.MenusStyle()
    },
    MenusStyle () {
      const width = window.innerWidth
      if (width < 1200) {
        $state.isCollapse = true
      } else {
        $state.isCollapse = false
      }
    }
  }
}
</script>

<style scoped lang='stylus'>
@import url('~@theme/loading.css')
.sm-container{
  position fixed
  width 100vw
  height 100vh
  top 0px
  left 0px
}

.sm-container-content{
  position absolute
  top 0px
  right 0px
}

.sm-container-min{
  width: "calc(100vw - %s)" % ($asideMaxWidth)
}

.sm-container-max{
  width: "calc(100vw - %s)" % ($asideMinWidth)
}

.sm-main{
  // padding $mainPadding
  overflow-y auto
  width calc(100% - 40)
  height "calc(100vh - %s)" % ($headerHeight)
  &>div.bcf{
    padding $mainPadding
    border-radius 5px
  }
}
</style>

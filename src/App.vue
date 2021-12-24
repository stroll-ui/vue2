<template>
  <div id="app" class="au-theme-background-color--base-11">
    <smLayout :menuList="routesList" >
      <!-- <template v-slot:header>
        <h1>header</h1>
      </template> -->
      <template v-slot:main>
        <div class="mian-box">
          <router-view></router-view>
        </div>
      </template>
    </smLayout>
  </div>
</template>

<script>
import { routesList } from './router'

export default {
  name: 'app',
  data () {
    return {
      routesList,
      scrollTop: 0
    }
  },
  mounted () { },
  methods: {
    go (item) {
      if (item.url) {
        this.$router.push({
          path: item.url
        })
        this.scrollTop = 0
      }
    },
    handleScroll (v) {
      this.scrollTop = v.scrollTop
    }
  }
}
</script>

<style lang="stylus" scoped>
  #app {
    height: 100%;
    .banner {
      font-size: 30px;
      padding: 10px 20px;
    }
    .menu {
      width: 210px;
    }
  }
  .mian-box{
    padding $mainPadding $mainPadding 10px $mainPadding
  }
</style>

<script>
import smMenuItemGroup from './menuItemGroup'
import './style/minMenu.styl'
export default {
  name: 'smMinMenu',
  components: { smMenuItemGroup },
  render (h) {
    const path = `${this.$route.path}${this.$route.hash}`
    const routes = this.$attrs.menuList
    const el = []
    routes.forEach((item) => {
      if (item.children && item.children.length) {
        el.push(h('a', [h('div', { class: 'sm-menu-item-group' }, [
          h('div', {
            class: `${path.includes(`${item.path}`) ? 'currentMenuRoute' : ''} sm-min-menu-item ${item.icon || 'gennlife_Menu_Quality1'} sm-menu-item-icon`
          }),
          h('div', { class: 'sm-min-menu-item-bridge' }),
          h('smMenuItemGroup', {
            class: 'sm-menu-item-group-box sm-menu-item-group-first-level',
            props: { routes: item.children, Level: 0 }
          })
        ])]))
      } else {
        el.push(h('router-link', {
          props: { to: { path: `${item.path}` } }
        }, [h('div', {
          class: `${path.includes(`${item.path}`) && 'currentMenuRoute'} sm-min-menu-item ${item.icon || 'gennlife_Menu_Quality1'} sm-menu-item-icon`
        })]))
      }
    })
    return h('div', {
      class: 'sm-min-menu'
    }, el)
  }
}
</script>

<style lang="stylus" scoped>
a{
  display block
  overflow hidden
}
.sm-min-menu{
  overflow-y auto
}
.currentMenuRoute {
  span.sm-menu-submenu-title {
    color: #fff !important;
  }

  background-color: #0D6DFF !important;
}

/deep/ .sm-menu-item-group-first-level {
  right: -150px !important;
}
div[class*=gennlife_] {
  color #fff
}
</style>

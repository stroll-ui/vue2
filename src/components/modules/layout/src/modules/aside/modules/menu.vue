<script>
import smSubmenu from './submenu'
import './style/menu.styl'
export default {
  name: 'smMenu',
  components: { smSubmenu },
  render (h) {
    const path = `${this.$route.path}${this.$route.hash}`
    const routes = this.$attrs.menuList
    const el = []

    routes.forEach((item) => {
      if (item.children && item.children.length) {
        el.push(h('smSubmenu', { class: 'sm-menu-item', props: { route: item, Level: 0 } }))
      } else {
        el.push(h('router-link', {
          props: { to: { path: `${item.path}` } }
        }, [h('div', {
          class: {
            'sm-menu-item': true,
            'relationMinMenuRoute': path.includes(`${item.path}`),
            'currentMinMenuRoute': path === `${item.path}`
          }
        }, [
          h('i', { class: `iconfont ${item.icon} sm-menu-item-icon` }),
          h('span', { class: 'sm-menu-item-title' }, item.title),
          h('div', { class: 'cb' })
        ])]))
      }
    })
    return h('div', {
      class: 'sm-menu'
    }, el)
  }
}
</script>

<style lang="stylus" scoped>
.relationMinMenuRoute {
  color: rgba(0, 135, 255, 1) !important;
}

.currentMinMenuRoute {
  border-right: 2px solid rgba(0, 135, 255, 1) !important;
}
</style>

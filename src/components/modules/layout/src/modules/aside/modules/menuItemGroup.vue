<script>
import smMenuItemGroup from './menuItemGroup'
import './style/menuItemGroup.styl'
export default {
  name: 'smMenuItemGroup',
  components: { smMenuItemGroup },
  props: {
    routes: { type: Array },
    isSubmenu: { type: Boolean },
    Level: { type: Number }
  },
  data () {
    return {
      isExpand: true
    }
  },
  render (h) {
    const path = `${this.$route.path}${this.$route.hash}`
    const submenuEl = []
    this.routes.forEach((item) => {
      const el = []
      if (item.children && item.children.length) {
        el.push(h('a', [h('div', {
          class: 'sm-menu-item-group'
        }, [
          h('div', {
            class: {
              'sm-menu-item-group-title': true,
              'relationMinMenuRoute': path.includes(`${item.path}`),
              'currentMinMenuRoute': path === `${item.path}`
            }
          }, item.title),
          h('i', { class: 'el-icon-arrow-down' }),
          h('smMenuItemGroup', {
            class: 'sm-menu-item-group-box',
            props: { routes: item.children, isSubmenu: true, Level: this.Level + 1 }
          }),
          h('div', { class: 'cb' })
        ])]))
      } else {
        el.push(h(
          'router-link',
          { props: { to: { path: `${item.path}` } } },
          [h('div', {
            class: {
              'sm-menu-item-group-title': true,
              'relationMinMenuRoute': path.includes(`${item.path}`),
              'currentMinMenuRoute': path === `${item.path}`
            }
          }, item.title)]
        ))
      }
      submenuEl.push(el)
    })

    return h('div', {
      class: {
        'sm-menu-item-group': true,
        'sm-item-group-isExpand': this.isExpand
      }
    }, [
      h('div', { class: 'sm-menu-item-group-bridge' }),
      ...submenuEl
    ])
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

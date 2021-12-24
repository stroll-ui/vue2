<script>
import smSubmenu from './submenu'
import './style/submenu.styl'
export default {
  name: 'smSubmenu',
  components: { smSubmenu },
  props: {
    route: { type: Object },
    isSubmenu: { type: Boolean },
    Level: { type: Number }
  },
  data () {
    return {
      isExpand: false
    }
  },
  render (h) {
    const path = `${this.$route.path}${this.$route.hash}`
    const submenuEl = []
    this.route.children && this.route.children.forEach((item) => {
      if (item.children && item.children.length) {
        submenuEl.push(h('smSubmenu', {
          props: { route: item, isSubmenu: true, Level: this.Level + 1 }
        }))
      } else {
        submenuEl.push(h(
          'router-link',
          { props: { to: { path: `${item.path}` } } },
          [
            h('div', {
              class: {
                'relationMenuRoute': path.includes(`${item.path}`),
                'currentMenuRoute': path === `${item.path}`
              }
            }, [
              h('span', {
                class: 'sm-menu-submenu-title',
                style: `padding-left: ${30 * (this.Level + 1)}px`
              }, item.title)])
          ]
        ))
      }
    })
    const title = [
      h('span', {
        class: 'sm-menu-submenu-title',
        style: `padding-left: ${30 * this.Level}px`
      }, this.route.title),
      h('i', {
        class: {
          rf: true,
          'sm-submenu-arrow': true,
          'el-icon-arrow-down': !this.isExpand,
          'el-icon-arrow-up': this.isExpand
        }
      }),
      h('div', { class: 'cb' })
    ]
    if (!this.isSubmenu) {
      title.unshift(h('i', {
        class: `iconfont ${this.route.icon} sm-submenu-item-icon`
      }))
    }
    return h('div', { class: 'sm-submenu' }, [
      h('a', {
        class: {
          'sm-submenu-item': true,
          'relationMenuRoute': path.includes(`${this.route.path}`),
          'currentMenuRoute': path === `${this.route.path}`
        },
        on: {
          click: () => {
            this.isExpand = !this.isExpand
          }
        }
      }, [h('div', title)]),
      h('div', {
        class: {
          'sm-submenu-box': true,
          'sm-submenu-isExpand': this.isExpand
        }
      }, submenuEl)
    ])
  }
}
</script>

<style lang="stylus" scoped>
.currentMenuRoute {
  span.sm-menu-submenu-title {
    color: #fff !important;
  }

  background-color: #0D6DFF !important;
}

.relationMenuRoute {
  color: rgba(0, 135, 255, 1) !important;

  i.sm-menu-item-icon, span.sm-menu-item-title, i.iconfont, i.sm-submenu-arrow, span.sm-menu-submenu-title {
    color: rgba(0, 135, 255, 1);
  }
}
</style>

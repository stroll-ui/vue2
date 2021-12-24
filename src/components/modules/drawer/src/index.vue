<script>
import { Drawer } from 'element-ui'
export default {
  name: 'smDrawer',
  title: '抽屉',
  components: { Drawer },
  render (h, _) {
    const { props, class: vnodeCalss, style: vnodeStyle } = this.$vnode.data
    const { beforeClose } = this.$attrs
    const slotsKeys = Object.keys(this.$slots)
    let classStr = 'sm-drawer'
    let styleStr = ''
    const el = []
    if (slotsKeys && slotsKeys.length) {
      slotsKeys.forEach(key => {
        el.push(h('template', { slot: key }, this.$slots[key]))
      })
    }
    return h(
      'Drawer',
      {
        class: `${vnodeCalss} ${classStr}`,
        style: `${vnodeStyle}; ${styleStr}`,
        props: { ...props, ...this.$attrs, modal: false },
        attrs: { ...props, ...this.$attrs, modal: false },
        on: {
          ...this.$listeners,
          beforeClose (done) {
            beforeClose && beforeClose(done)
          }
        }
      },
      el
    )
  }
}
</script>

<style scoped lang='stylus'>
@import url('~@theme/drawer.css')
</style>

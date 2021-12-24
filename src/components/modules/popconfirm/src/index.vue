<script>
import { Popconfirm } from 'element-ui'
export default {
  name: 'smPopconfirm',
  title: '弹出框确认',
  components: { Popconfirm },
  render (h, _) {
    const { props, class: vnodeCalss, style: vnodeStyle } = this.$vnode.data
    const slotsKeys = Object.keys(this.$slots)
    let classStr = 'sm-popconfirm'
    let styleStr = ''
    const el = []
    if (slotsKeys && slotsKeys.length) {
      slotsKeys.forEach(key => {
        el.push(h('template', { slot: key }, this.$slots[key]))
      })
    }
    return h(
      'Popconfirm',
      {
        class: `${vnodeCalss} ${classStr}`,
        style: `${vnodeStyle}; ${styleStr}`,
        props: { ...props, ...this.$attrs },
        attrs: { ...props, ...this.$attrs },
        on: { ...this.$listeners }
      },
      el
    )
  }
}
</script>

<style scoped lang='stylus'>
@import url('~@theme/popconfirm.css')
</style>

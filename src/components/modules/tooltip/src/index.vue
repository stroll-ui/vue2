<script>
import { Tooltip } from 'element-ui'
export default {
  name: 'smTooltip',
  components: { Tooltip },
  title: '文字提示',
  render (h, _) {
    const { props, class: vnodeCalss, style: vnodeStyle } = this.$vnode.data
    const { default: defaultSlot, content: contentSlot } = this.$slots
    let classStr = 'sm-switch'
    let styleStr = ''
    const el = []
    if (contentSlot) el.push(h('template', { slot: 'content' }, contentSlot))
    if (defaultSlot) el.push(defaultSlot)
    return h(
      'Tooltip',
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
@import url('~@theme/tooltip.css')
</style>

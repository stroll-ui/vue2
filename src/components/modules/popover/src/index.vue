<script>
import { Popover } from 'element-ui'
export default {
  name: 'smPopover',
  title: '弹出框提示',
  components: { Popover },
  render (h, _) {
    const styleStr = ''
    const classStr = ''
    const el = []
    const { props: vnodeProps, style: vnodeStyle, class: vnodeClass } = this.$vnode.data
    const props = { ...vnodeProps, ...this.$attrs }
    const on = { ...this.$listeners }
    const { default: defaultSlot, reference: referenceSlot } = this.$slots
    if (defaultSlot) {
      el.push(h('div', defaultSlot))
    }
    if (referenceSlot) {
      // eslint-disable-next-line no-unused-vars
      const { componentOptions, data: referenceData } = referenceSlot[0] || {}
      const { listeners = {} } = componentOptions || {}
      el.push(h('span', {
        props: { ...referenceData.attrs },
        on: { ...listeners },
        slot: 'reference'
      }, referenceSlot))
    }

    return h('Popover', {
      style: `${styleStr}; ${vnodeStyle}`,
      class: `${classStr} ${vnodeClass}`,
      props,
      on
    }, el)
  }
}
</script>

<style scoped lang='stylus'>
@import url('~@theme/popover.css')
</style>

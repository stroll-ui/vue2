<script>
// import { Timeline } from 'element-ui'
export default {
  name: 'smTimeline',
  title: '时间线',
  // components: { Timeline },
  render (h, _) {
    return h('div')
    // const { props, class: vnodeCalss, style: vnodeStyle } = this.$vnode.data
    // const slotsKeys = Object.keys(this.$slots)
    // let classStr = 'sm-timeline'
    // let styleStr = ''
    // const el = []
    // if (slotsKeys && slotsKeys.length) {
    //   slotsKeys.forEach(key => {
    //     el.push(h('template', { slot: key }, this.$slots[key]))
    //   })
    // }
    // return h(
    //   'Timeline',
    //   {
    //     class: `${vnodeCalss} ${classStr}`,
    //     style: `${vnodeStyle}; ${styleStr}`,
    //     props: { ...props, ...this.$attrs, modal: false },
    //     attrs: { ...props, ...this.$attrs, modal: false },
    //     on: {
    //       ...this.$listeners
    //     }
    //   },
    //   el
    // )
  }
}
</script>

<style scoped lang='stylus'>
// @import url('~@theme/timeline.css')
</style>

<script>
// import { TabPane } from 'element-ui'
export default {
  name: 'smTabPane',
  title: '标签页',
  // components: { TabPane },
  render (h, _) {
    return h('div')
    // const { props, class: vnodeCalss, style: vnodeStyle } = this.$vnode.data
    // const { default: defaultSlots } = this.$slots
    // let classStr = 'sm-tab-pane'
    // let styleStr = ''
    // return h(
    //   'TabPane',
    //   {
    //     class: `${vnodeCalss} ${classStr}`,
    //     style: `${vnodeStyle}; ${styleStr}`,
    //     props: { ...props, ...this.$attrs },
    //     attrs: { ...props, ...this.$attrs },
    //     on: {
    //       ...this.$listeners
    //     }
    //   },
    //   defaultSlots
    // )
  }
}
</script>

<style scoped lang='stylus'>
// @import url('~@theme/tab-pane.css')
</style>

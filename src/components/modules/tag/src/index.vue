<script>
import { Tag } from 'element-ui'
export default {
  name: 'smTag',
  title: '标记',
  components: { Tag },
  render (h, _) {
    const { props, class: vnodeCalss, style: vnodeStyle } = this.$vnode.data
    const slotsKeys = Object.keys(this.$slots)
    let classStr = 'sm-tag'
    let styleStr = ''
    const el = []
    if (slotsKeys && slotsKeys.length) {
      slotsKeys.forEach(key => {
        el.push(h('template', { slot: key }, this.$slots[key]))
      })
    }
    return h(
      'Tag',
      {
        class: `${vnodeCalss} ${classStr}`,
        style: `${vnodeStyle}; ${styleStr}`,
        props: { ...props, ...this.$attrs },
        attrs: { ...props, ...this.$attrs },
        on: {
          ...this.$listeners
        }
      },
      el
    )
  }
}
</script>

<style scoped lang='stylus'>
@import url('~@theme/badge.css')
</style>

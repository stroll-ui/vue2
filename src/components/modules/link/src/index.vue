<script>
import { Link } from 'element-ui'
export default {
  name: 'smLink',
  title: '布局',
  components: { Link },
  render (h) {
    const defaultSlot = this.$slots.default
    const { props = {}, style: vnodeStyle, class: vnodeClass } = this.$vnode.data
    let classStr = ''
    let styleStr = ''
    return h('Link', {
      style: `${styleStr}; ${vnodeStyle}`,
      class: `${classStr} ${vnodeClass} sm-link`,
      props: { type: 'primary', ...props, ...this.$attrs },
      on: { ...this.$listeners }
    }, defaultSlot)
  }
}
</script>

<style scoped lang='stylus'>
@import url('~@theme/link.css')
.sm-link + .sm-link{
  margin-left 8px
}
</style>

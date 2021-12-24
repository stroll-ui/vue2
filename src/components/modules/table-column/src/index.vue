<script>
import { TableColumn } from 'element-ui'
export default {
  name: 'smTableColumn',
  title: '表格',
  components: { TableColumn },
  render (h, _) {
    const styleStr = ''
    const classStr = ''
    const scopedSlots = this.$slots
    const { props, style: vnodeStyle, class: vnodeClass } = this.$vnode.data
    return h(
      'TableColumn',
      {
        style: `${styleStr}; ${vnodeStyle}`,
        class: `${classStr} ${vnodeClass}`,
        scopedSlots,
        props: { ...props, ...this.$attrs },
        on: { ...this.$listeners }
      }
    )
  }
}
</script>

<style scoped lang='stylus'>
@import url('~@theme/table-column.css')
</style>

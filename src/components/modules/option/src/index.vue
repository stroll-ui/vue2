<script>
import { Option } from 'element-ui'
export default {
  name: 'smOption',
  title: '选项',
  components: { Option },
  render (h, _) {
    let styleStr = ``
    let classStr = ``
    const { default: defaultSlots } = this.$slots
    return h('Option', {
      style: `${styleStr}`,
      class: `sm-select ${classStr}`,
      attrs: { ...this.$attrs },
      props: { ...this.$attrs },
      domProps: { ...this.$attrs },
      on: { ...this.$listeners }
    }, defaultSlots)
  }
}
</script>

<style scoped lang='stylus'>
@import url('~@theme/option.css')
.el-select-dropdown.is-multiple{
  .el-select-dropdown__item.selected{
    /deep/ span{
      color $primary
      font-weight 500
    }
    color rgba(225,225,225,0)
    background-color rgba(0, 135, 255, 0.1)
  }
}

.el-select-dropdown__item.selected {
  @extend .activeBackColor
}
</style>

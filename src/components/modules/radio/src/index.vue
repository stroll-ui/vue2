<script>
import { Radio } from 'element-ui'
export default {
  name: 'smRadio',
  title: '单选框',
  hide: true,
  components: { Radio },
  data () {
    return {
    }
  },
  render (h, _) {
    let styleStr = ``
    let classStr = ``
    const { default: defaultSlots } = this.$slots
    return h('Radio', {
      style: `${styleStr}`,
      class: `sm-input ${classStr}`,
      attrs: { ...this.$attrs },
      props: { ...this.$attrs },
      on: { ...this.$listeners }
    }, defaultSlots)
  }
}
</script>

<style scoped lang='stylus'>
@import url('~@theme/radio.css')
/deep/ .el-radio__input.is-checked{
  .el-radio__inner{
    border-color $primary
    background-color #fff
  }
  .el-radio__inner::after{
    width 6px
    height 6px
    background-color $primary
  }
}
</style>

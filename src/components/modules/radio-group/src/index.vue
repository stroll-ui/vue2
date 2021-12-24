<script>
import { RadioGroup, RadioButton, Radio } from 'element-ui'
export default {
  name: 'smRadioGroup',
  title: '单选框',
  hide: true,
  components: { RadioGroup, RadioButton, Radio },
  data () {
    return {
    }
  },
  render (h, _) {
    let styleStr = ``
    let classStr = ``
    const el = []
    const { default: defaultSlots } = this.$slots
    const { type, radioList } = this.$attrs
    const attrs = this.$attrs
    const { style: vnodeStyle, class: vnodeClass } = this.$vnode.data
    if (radioList && radioList.length) {
      radioList.forEach(item => {
        const { label, value } = item
        if (type === 'button') {
          el.push(h('RadioButton', { props: { label } }, value))
        } else {
          el.push(h('Radio', { props: { label } }, value))
        }
      })
    }
    return h('RadioGroup', {
      style: `${styleStr}; ${vnodeStyle}`,
      class: `sm-input ${classStr} ${vnodeClass}`,
      attrs,
      props: attrs,
      on: { ...this.$listeners }
    }, defaultSlots || el)
  }
}
</script>

<style scoped lang='stylus'>
@import url('~@theme/radio.css')
@import url('~@theme/radio-button.css')
@import url('~@theme/radio-group.css')
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

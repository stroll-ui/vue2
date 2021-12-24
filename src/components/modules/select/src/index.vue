<script>
import { Select, Option } from 'element-ui'
export default {
  name: 'smSelect',
  title: '选择框',
  components: { Select, Option },
  render (h, _) {
    let styleStr = ``
    let classStr = ``
    let el = []
    // const attrsKeys = Object.keys(this.$attrs)
    const { optionList = [] } = this.$attrs
    const { style: vnodeStyle, class: vnodeClass } = this.$vnode.data
    const slotsKeys = Object.keys(this.$slots)
    if (slotsKeys && slotsKeys.length) {
      slotsKeys.forEach(key => {
        const VNode = this.$slots[key]
        el.push(h('template', { slot: key }, VNode))
      })
    } else {
      optionList.forEach((item, index) => {
        const { value, key, label, val } = item
        el.push(h('Option', {
          props: {
            ...item,
            value: value || key,
            label: label || val,
            key: index
          }
        }))
      })
    }
    return h('Select', {
      ref: 'smSelect',
      style: `${styleStr}; ${vnodeStyle}`,
      class: `sm-select ${classStr} ${vnodeClass}`,
      attrs: { ...this.$attrs },
      props: { ...this.$attrs },
      on: { ...this.$listeners }
    }, el)
  },
  methods: {
    blur () {
      this.$refs.smSelect.blur()
    },
    focus () {
      this.$refs.smSelect.focus()
    }
  }
}
</script>

<style scoped lang='stylus'>
@import url('~@theme/select.css')
@import url('~@theme/option.css')
.sm-select{
  min-width 108px
}

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

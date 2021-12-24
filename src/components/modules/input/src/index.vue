
<script>
import { Input } from 'element-ui'
export default {
  name: 'smInput',
  title: '输入框',
  components: { Input },
  data () {
    return {
      types: {}
    }
  },
  render (h, _) {
    let styleStr = ``
    let classStr = ``
    let el = []
    const { render } = this.$attrs
    const { props = {}, style: vnodeStyle, class: vnodeClass } = this.$vnode.data
    const onRender = render || props.render
    Object.keys(this.$slots).forEach(key => {
      const VNode = this.$slots[key]
      el.push(h('template', { slot: key }, VNode))
    })
    if (onRender) {
      el.push(onRender(h, _))
    }
    return h('Input', {
      style: `${styleStr}; ${vnodeStyle}`,
      class: `sm-input ${classStr} ${vnodeClass}`,
      attrs: { ...this.$attrs },
      props: { ...props, ...this.$attrs },
      on: { ...this.$listeners }
    }, el)
  }
}
</script>

<style scoped lang='stylus'>
@import url('~@theme/input.css')
.sm-input{
  position relative
  &:hover /deep/ input,&:hover /deep/ textarea{
    border-color $primary
  }
  /deep/ input, /deep/ textarea{
    &:focus {
      @extend .focusBorder
    }
  }
  // /deep/ .el-icon-circle-close{
  //   position relative
  //   margin-top -8px
  //   margin-right 16px
  //   top 50%
  //   font-size 16px
  //   line-height 16px
  //   border-radius 16px
  //   width 16px
  //   height 16px
  //   background-color rgba(0, 0, 0, 0.45)
  //   color #fff
  // }
}
</style>

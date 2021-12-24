<script>
import { Button } from 'element-ui'
export default {
  title: '按钮',
  name: 'smButton',
  components: { Button },
  render (h, _) {
    const defaultSlot = this.$slots.default
    const { icon: attrsIcon } = this.$attrs || {}
    const { props = {}, style: vnodeStyle, class: vnodeClass } = this.$vnode.data
    const icon = attrsIcon || props.icon || null
    let classStr = ''
    let styleStr = ''
    return h('Button', {
      style: `${styleStr}; ${vnodeStyle}`,
      class: `${classStr} ${vnodeClass} ${
        defaultSlot && icon ? 'iconSapn' : ''
      } ${
        !defaultSlot && icon ? 'icon' : ''
      } smButton`,
      props: { size: 'small', ...props, ...this.$attrs },
      on: { ...this.$listeners }
    }, defaultSlot)
  }
}
</script>

<style lang="stylus" scoped>
@import url('~@theme/button.css')
.sm-button + .sm-button{
  margin-left 8px
}
</style>

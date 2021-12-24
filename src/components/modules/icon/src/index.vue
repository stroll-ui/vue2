<script>
import STYLUS from '@styl'
export default {
  title: '图标',
  name: 'smIcon',
  render (h, _) {
    const sizeType = {
      small: {
        iconClass: 'sm-icon-small-on-text-icon',
        iconStyle: ''
      },
      medium: {
        iconClass: 'sm-icon-medium-no-text-icon',
        iconStyle: ''
      }
    }
    const typeParams = {
      default: ``,
      primary: `color: ${STYLUS.primaryColor}`,
      success: `color: ${STYLUS.successColor}`,
      info: `color: ${STYLUS.infoColor}`,
      warning: `color: ${STYLUS.warningColor}`,
      danger: `color: ${STYLUS.dangerColor}`
    }
    const sizeTypeKeys = Object.keys(sizeType)
    const { size, type } = this.$attrs
    const { style: vnodeStyle, class: vnodeClass } = this.$vnode.data
    let classStr = 'sm-icon-default-no-text-icon'
    let styleStr = ''
    if (sizeTypeKeys.includes(size)) {
      classStr = sizeType[size].iconClass
      styleStr = sizeType[size].iconStyle
    }
    styleStr = typeParams[type || 'default']
    return h('button', {
      style: `${styleStr}; ${vnodeStyle}`,
      class: `ctd sm-icon ${classStr} ${vnodeClass}`,
      props: { ...this.$attrs },
      on: { ...this.$listeners }
    })
  }
}
</script>

<style lang="stylus" scoped>
@import url('~@theme/button.css')
.sm-icon + .sm-icon{
  margin-left 8px
}
button{
  display inline-block
  &:hover{
    opacity 0.7
  }
  &:active{
    opacity 0.9
  }
  &:focus{
    opacity 0.5
  }
}
.el-button--danger.is-plain:hover{

}
.sm-icon-small-on-text-icon{
  font-size 12px
}
.sm-icon-medium-no-text-icon{
  font-size 16px
}
.sm-icon-default-no-text-icon{
  font-size 24px
}
</style>

<script>
import { Dialog } from 'element-ui'
export default {
  name: 'smDialog',
  components: { Dialog },
  title: '对话框',
  render (h, _) {
    const v = this.$createElement
    const { type } = this.$attrs
    const list = {
      primary: v('smIcon', {
        class: 'title_icon gennlife_Show_Help'
      }),
      warning: v('smIcon', {
        class: 'title_icon gennlife_Show_Details'
      }),
      error: v('smIcon', {
        class: 'title_icon el-icon-circle-close'
      })
    }
    let idom = []
    let el = []
    Object.keys(this.$slots).forEach(key => {
      const VNode = this.$slots[key]
      if (key === 'title') {
        idom.push(h('template', { slot: key }, [list[type], VNode]))
      } else {
        el.push(h('template', { slot: key }, VNode))
      }
    })
    return h('Dialog', {
      class: type,
      props: {
        ...this.$attrs,
        width: '400px'
      },
      attrs: { ...this.$attrs },
      on: { ...this.$listeners }
    }, [
      h('span', this.$attrs.desc),
      el,
      idom
    ])
  }
}
</script>

<style lang="stylus" scoped>
@import url('~@theme/dialog.css')
html body
  .el-dialog__wrapper
    ::v-deep.el-dialog
      .el-dialog__header
        .dialog-title
          line-height 24px
          font-size 16px
  .title_icon
    display inline-block
    width 24px
    height 24px
    line-height 24px
    margin-right 8px
    border-radius 50%
  .primary
    ::v-deep.el-dialog
      .el-dialog__header
        .title_icon
          color #fff
          background-color #0087FF
        .dialog-title
          line-height 24px
          font-size 16px
          vertical-align middle
  .warning
    ::v-deep.el-dialog
      .el-dialog__header
        .title_icon
          color #fff
          background-color #FFAC3E
        .dialog-title
          line-height 24px
          font-size 16px
          vertical-align middle
  .error
    ::v-deep.el-dialog
      .el-dialog__header
        .title_icon
          color #fff
          background-color #FF393C
        .dialog-title
          line-height 24px
          font-size 16px
          vertical-align middle

</style>

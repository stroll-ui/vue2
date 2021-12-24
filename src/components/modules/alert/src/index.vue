<script>
import { Alert } from 'element-ui'
export default {
  name: 'smAlert',
  components: { Alert },
  title: '警告',
  render (h, _) {
    return h('Alert', {
      class: 'sm-alert',
      props: { ...this.$attrs },
      on: { ...this.$listeners }
    })
  }
}
</script>

<style lang="stylus" scoped>
@import url('~@theme/alert.css')
::v-deep.sm-alert
  width 600px !important
  border 1px solid #909399 !important
  color rgba(0, 0, 0, 0.65) !important
  .el-alert__closebtn
    color #0075DD !important
  p
    color rgba(0, 0, 0, 0.65) !important
::v-deep.sm-alert.el-alert--info.is-light
  background-color rgba(0, 135, 255, 0.05) !important
  color rgba(0, 0, 0, 0.65) !important
  border-color #0087FF !important
  .el-alert__icon
    color #0087FF
::v-deep.sm-alert.el-alert--success.is-light
  border-color #52C41B !important
  .el-alert__icon
    color #52C41B
::v-deep.sm-alert.el-alert--warning.is-light
  border-color #FFAC3E !important
  .el-alert__icon
    color #FFAC3E
::v-deep.sm-alert.el-alert--error.is-light
  border-color #FF393C !important
  .el-alert__icon
    color #FF393C
</style>

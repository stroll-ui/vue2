<script>
import { Switch } from 'element-ui'
export default {
  name: 'smSwitch',
  title: '开关',
  components: { ElSwitch: Switch },
  render (h, _) {
    const { props, class: vnodeCalss, style: vnodeStyle } = this.$vnode.data
    let classStr = 'sm-switch'
    let styleStr = ''
    return h(
      'ElSwitch',
      {
        class: `${vnodeCalss} ${classStr}`,
        style: `${vnodeStyle}; ${styleStr}`,
        props: { ...props, ...this.$attrs },
        attrs: { ...props, ...this.$attrs },
        on: { ...this.$listeners }
      }
    )
  }
}
</script>

<style scoped lang='stylus'>
@import url('~@theme/switch.css')
</style>

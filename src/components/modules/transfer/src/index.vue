<script>
import { Transfer } from 'element-ui'
export default {
  name: 'smTransfer',
  components: { Transfer },
  title: '穿梭框',
  render (h, _) {
    return h('Transfer', {
      props: { ...this.$attrs },
      attrs: { ...this.$attrs },
      on: { ...this.$listeners }
    })
  }
}
</script>

<style scoped lang='stylus'>
@import url('~@theme/transfer.css')

</style>

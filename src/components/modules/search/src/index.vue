<script>
import smInput from '@modules/input/src/index.vue'
export default {
  name: 'smSearch',
  title: '检索',
  components: { smInput },
  render (h, _) {
    const styleStr = ``
    const classStr = ``
    const inputStyleStr = `inputDefaultH`
    const inputClassStr = `inputDefaultH`

    const _this = this
    let el = [h(
      'smInput',
      {
        style: `${inputStyleStr}`,
        class: `${inputClassStr}`,
        props: { size: 'small' },
        on: {
          click () {
            _this.$listeners.search && _this.$listeners.search('sss')
          }
        }
      }
    )]
    // const attrsKeys = Object.keys(this.$attrs)
    // const slotsKeys = Object.keys(this.$slots)
    const { searchParams: { params, btn } = {} } = this.$attrs
    console.log('searchParams', params, btn)
    const { style: vnodeStyle, class: vnodeClass } = this.$vnode.data
    return h('div', {
      style: `${styleStr}; ${vnodeStyle}`,
      class: `sm-search bcf bor-rad4 mb8 ${classStr} ${vnodeClass}`,
      props: { ...this.$attrs },
      on: { ...this.$listeners }
    }, el)
  }
}
</script>

<style scoped lang='stylus'>
.sm-search{
  padding $smallPaddingH 8px
}
.inputDefaultH {
  width 300px
}
</style>

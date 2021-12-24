<script>
export default {
  name: 'smTitle',
  title: '标题',
  data () {
    return {
      isFullScreen: false
    }
  },
  render (h, _) {
    const { titleName, render, full } = this.$attrs
    const { fullScreen } = this.$listeners
    const {
      props: { full: vnodeFull, titleName: vnodeTitleName, render: vnodeRender } = {}
    } = this.$vnode.data
    const name = titleName || vnodeTitleName || ''
    const defaultEl = render ? render(h) : vnodeRender ? vnodeRender(h) : undefined
    const isfullEl = full || vnodeFull
    const el = []
    const _this = this
    if (!defaultEl && !name) {
      return h('div')
    }
    if (name) {
      el.push(h('i', { class: 'sm-title-mark lf' }))
      el.push(h('span', { class: 'sm-title-name lf' }, name))
    }
    if (isfullEl) {
      el.push(h('a', {
        class: `ml8 mr8 rf sm-full-screen`,
        props: { size: 'mini' },
        attrs: { title: _this.isFullScreen ? '全屏' : '退出' },
        on: {
          async click () {
            await fullScreen()
          }
        }
      }, _this.isFullScreen ? '退出' : '全屏'))
    }
    if (defaultEl) {
      el.push(h('div', { class: 'sm-title-button rf' }, [defaultEl || '']))
    }
    return h('div', { class: 'pb10 sm-title' }, [
      ...el,
      h('div', { class: 'cb' })
    ])
  },
  mounted () {
    window.addEventListener('resize', this.isFull)
  },
  methods: {
    async isFull () {
      this.isFullScreen = await this.$isFullScreen()
    }
  },
  beforeMount () {
    window.removeEventListener('resize', this.isFull)
  }
}
</script>

<style scoped lang='stylus'>
.sm-title-mark {
  position relative
  top 2px
  margin-right: 8px
  display inline-block
  height 14px
  width 4px
  background-color #FFA43F
}
.sm-title-name{
  color rgba(0, 0, 0, 0.85)
  display inline-block
  font-size $fontSizeBase
}
.sm-title-button{
  display inline-block
}
.sm-full-screen{
  position relative
  margin-top 4px
}
.sm-title {
  position relative
  // min-height 35px
}
</style>

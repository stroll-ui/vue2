<script>
import { Tree } from 'element-ui'
import smInput from '@modules/input'
export default {
  name: 'smTree',
  title: '树',
  components: { Tree, smInput },
  data () {
    return {
      value: ''
    }
  },
  render (h, _) {
    let styleStr = ``
    let classStr = ``
    const _this = this
    // const defaultSlot = this.$slots.default
    const attrsKeys = Object.keys(this.$attrs)
    const { width = 0, height = 0, inputListeners, operate } = this.$attrs
    const { width: vnodeWidth = 0, height: vnodeHeight = 0, style: vnodeStyle, class: vnodeClass } = this.$vnode.data
    const { onOperate } = this.$listeners
    const labelWidth = width || vnodeWidth || 300
    const el = []
    if (attrsKeys.includes('isFilter')) {
      this.$attrs['filter-node-method'] = _this.filterNode
      el.unshift(h(
        'smInput', {
          attrs: { value: _this.value, placeholder: '输入关键字进行过滤' },
          on: {
            input (val) {
              _this.value = val
              _this.$refs.smTree.filter(val)
            },
            ...inputListeners
          }
        }
      ))
    }
    if (labelWidth) {
      styleStr = `width: ${labelWidth}px;`
    }
    if (height || vnodeHeight) {
      styleStr = `${styleStr}; height: ${height || vnodeHeight}px;`
    }
    const operateType = {
      add: { type: 'add', val: '添加', icon: 'gennlife_Act_Plus' },
      edit: { type: 'edit', val: '编辑', icon: 'gennlife_Act_Edit' },
      delete: { type: 'delete', val: '删除', icon: 'gennlife_Act_Delet' }
    }
    el.push(h(
      'Tree', {
        ref: 'smTree',
        style: `${styleStr}; ${vnodeStyle}`,
        class: `sm-tree ${classStr} ${vnodeClass}`,
        attrs: { ...this.$attrs },
        props: { 'expand-on-click-node': false, ...this.$attrs },
        on: { ...this.$listeners },
        scopedSlots: {
          default: ({ data }) => {
            const { id, label, value, key } = data
            const elOperate = [h(
              'span',
              {
                class: {
                  'sm-tree-label': true
                },
                style: `width: ${labelWidth - (81 * 2)}px`,
                attrs: {
                  title: label
                }
              },
              label
            )]
            if (operate && operate.length) {
              const iEl = []
              operate.forEach((type, index) => {
                const typeData = operateType[type]
                if (typeData) {
                  iEl.push(h(
                    'i',
                    {
                      class: `${typeData.icon} mr10 ${index ? '' : 'sm-tree-operate'}`,
                      attrs: {
                        title: typeData.val
                      },
                      on: {
                        click () {
                          if (!onOperate) {
                            console.log('缺少 onOperate 回调事件')
                            return void 0
                          }
                          onOperate({ value: key || value || id, data: typeData })
                        }
                      }
                    }
                  ))
                }
              })
              elOperate.push(h('span', { class: 'sm-operate-box' }, iEl))
            }
            return h('span', elOperate)
          }
        }
      }
    ))

    return h('div', {}, el)
  },
  methods: {
    filterNode (value, data) {
      if (!value) return true
      return data.label.indexOf(value) !== -1
    }
  }
}
</script>

<style scoped lang='stylus'>
@import url('~@theme/option.css')

.el-tree{
  overflow auto
}
.el-tree-node__content{
  position relative
  span.sm-operate-box{
    position absolute
    right: 0
    display none
  }
  &:hover {
    span.sm-operate-box{
      display inline-block
    }
  }
}
/deep/ .el-tree__drop-indicator{
  height 0px
  background-color #fff
  border-bottom 2px #0087FF dashed
  border-radius 10px
}
.sm-tree-label{
  display inline-block
  @extend .ell
}
/deep/ .is-current>.el-tree-node__content{
  background rgba(0, 135, 255, 0.1) !important
  color #0087FF !important
}
</style>

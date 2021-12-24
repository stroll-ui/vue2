<script>
import { Tree } from 'element-ui'
import smSelect from '@modules/select'
import smOption from '@modules/option'
export default {
  name: 'smSelectTree',
  title: '属性选择框',
  components: { Tree, smSelect, smOption },
  data () {
    return {
      value: '',
      temporary: []
    }
  },
  render (h, _) {
    const _this = this
    let styleStr = ``
    let classStr = ``
    // const attrsKeys = Object.keys(this.$attrs)
    const { treeProps = {}, treeListeners = {} } = this.$attrs
    const { style: vnodeStyle, class: vnodeClass } = this.$vnode.data
    return h('smSelect', {
      style: `${styleStr}; ${vnodeStyle}`,
      class: `sm-select ${classStr} ${vnodeClass}`,
      attrs: { ...this.$attrs, value: _this.value },
      props: { ...this.$attrs },
      on: {
        input (val) {
          console.log(val)
        },
        ...this.$listeners
      }
    }, [h('smOption', {
      props: { value: '1', label: '2' },
      attrs: { value: '1' },
      class: 'sm-select-tree-options'
    }, [h('Tree', {
      props: { ...treeProps },
      attrs: { ...treeProps },
      on: {
        'check-change': _this.checkChange,
        'current-change': _this.currentChange,
        ...treeListeners
      }
    })])])
  },
  methods: {
    checkChange (data, node) {
      // const attrsKeys = Object.keys(this.$attrs)
      // if (attrsKeys.includes('multiple')) {
      //   if ({}.toString.call(this.value) !== '[object Array]') {
      //     this.value = []
      //   }
      //   console.log('data, node, ', this.$attrs.value, {}.toString.call(value) !== '[object Array]')
      //   this.Recursion(data, node)
      // }
    },
    Recursion (data, node) {
      let { value } = this.$attrs
      if ({}.toString.call(value) !== '[object Array]') {
        value = []
      }
      const { label, value: v, key, val, children } = data

      if (node) {
        value.push(v || key)
        this.value.push(label || val)
      } else {
        value.delete(v || key)
        this.value.delete(label || val)
      }
      if (children && children.length) {
        children.forEach(item => {
          this.checkChange(item, node)
        })
      }
    },
    currentChange (data, node) {
      const attrsKeys = Object.keys(this.$attrs)
      if (!attrsKeys.includes('multiple')) {
        this.$attrs.value = data.value || data.key
        this.value = data.label || data.val
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import url('~@theme/tree.css')

.el-scrollbar {
  .el-scrollbar__view{
    .el-select-dropdown__item {
      height auto
      max-height 274px
      padding 0
      overflow hidden
      overflow-y auto
    }
  }
}

.el-select-dropdown__item.selected,
.el-tree-node__label {
  font-weight normal
}

.el-tree {
  .is-current{
    .el-tree-node__children {
      .el-tree-node__label {
        color #606266
        font-weight normal
      }
    }
  }

}
/deep/ .is-current>.el-tree-node__content{
  background rgba(0, 135, 255, 0.1)
  color #0087ff
}
</style>

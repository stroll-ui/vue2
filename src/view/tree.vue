<template>
  <div class=" sm-main-box">
    <span>
      <p class="mb20">树</p>
      <smTree
        :data="data"
        node-key="id"
        width="300"
        height="300"
        default-expand-all
        @node-drag-start="handleDragStart"
        @node-drag-enter="handleDragEnter"
        @node-drag-leave="handleDragLeave"
        @node-drag-over="handleDragOver"
        @node-drag-end="handleDragEnd"
        @node-drop="handleDrop"
        draggable
        :allow-drop="allowDrop"
        :allow-drag="allowDrag"
      ></smTree>
    </span>

    <span>
      <p class="mb20">多选</p>
      <smTree
        :data="data"
        node-key="id"
        width="300"
        height="300"
        show-checkbox
        default-expand-all
        @node-drag-start="handleDragStart"
        @node-drag-enter="handleDragEnter"
        @node-drag-leave="handleDragLeave"
        @node-drag-over="handleDragOver"
        @node-drag-end="handleDragEnd"
        @node-drop="handleDrop"
        draggable
        :allow-drop="allowDrop"
        :allow-drag="allowDrag"
      ></smTree>
    </span>

    <span>
      <p class="mb20">过滤</p>
      <smTree
        :data="data"
        node-key="id"
        width="300"
        height="300"
        show-checkbox
        isFilter
        default-expand-all
        @node-drag-start="handleDragStart"
        @node-drag-enter="handleDragEnter"
        @node-drag-leave="handleDragLeave"
        @node-drag-over="handleDragOver"
        @node-drag-end="handleDragEnd"
        @node-drop="handleDrop"
        draggable
        :allow-drop="allowDrop"
        :allow-drag="allowDrag"
      >
      </smTree>
    </span>

    <span>
      <p class="mb20">增 删 改</p>
      <smTree
        :data="data"
        node-key="id"
        width="300"
        height="300"
        show-checkbox
        isFilter
        default-expand-all
        :operate="['add', 'edit', 'delete']"
        @onOperate="onOperate"
        @node-drag-start="handleDragStart"
        @node-drag-enter="handleDragEnter"
        @node-drag-leave="handleDragLeave"
        @node-drag-over="handleDragOver"
        @node-drag-end="handleDragEnd"
        @node-drop="handleDrop"
        draggable
        :allow-drop="allowDrop"
        :allow-drag="allowDrag"
      >
      </smTree>
    </span>
  </div>
</template>

<script>
export default {
  name: 'treeShow',
  title: '树',
  hide: false,
  data () {
    return {
      data: [{
        id: 1,
        label: '一级 1一级 1一级 1一级 1一级 1一级 1一级 1一级 1一级 1',
        children: [{
          id: 4,
          label: '二级 1-1',
          children: [{
            id: 9,
            label: '三级 1-1-1'
          }, {
            id: 10,
            label: '三级 1-1-2'
          }]
        }]
      }, {
        id: 2,
        label: '一级 2',
        children: [{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 6,
          label: '二级 2-2二级 2-2二级 2-2二级 2-2二级 2-2二级 2-2二级 2-2'
        }]
      }, {
        id: 3,
        label: '一级 3',
        children: [{
          id: 7,
          label: '二级 3-1'
        }, {
          id: 8,
          label: '二级 3-2',
          children: [{
            id: 11,
            label: '三级 3-2-1三级 3-2-1三级 3-2-1三级 3-2-1三级 3-2-1三级 3-2-1三级 3-2-1三级 3-2-1'
          }, {
            id: 12,
            label: '三级 3-2-2'
          }, {
            id: 13,
            label: '三级 3-2-3'
          }]
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  methods: {
    onOperate (data) {
      console.log(data)
    },
    handleDragStart (node, ev) {
      console.log('拖动开始', node)
    },
    handleDragEnter (draggingNode, dropNode, ev) {
      console.log('树拖入: ', dropNode.label)
    },
    handleDragLeave (draggingNode, dropNode, ev) {
      console.log('树拖出: ', dropNode.label)
    },
    handleDragOver (draggingNode, dropNode, ev) {
      console.log('树拖过去: ', dropNode.label)
    },
    handleDragEnd (draggingNode, dropNode, dropType, ev) {
      console.log('树拖尾: ', dropNode && dropNode.label, dropType)
    },
    handleDrop (draggingNode, dropNode, dropType, ev) {
      console.log('落树: ', dropNode.label, dropType)
    },
    allowDrop (draggingNode, dropNode, type) {
      if (dropNode.data.label === '二级 3-1') {
        return type !== 'inner'
      } else {
        return true
      }
    },
    allowDrag (draggingNode) {
      return draggingNode.data.label.indexOf('三级 3-2-2') === -1
    }
  }
}
</script>

<style scoped lang='stylus'>
span{
  display inline-block
  margin-right 30px
  border-right 1px #ccc solid
  padding-right 20px
}
</style>

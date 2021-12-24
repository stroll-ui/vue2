<template>
  <div v-if="operatingData && operatingData.length">
    <smLink
      @click="onClick(item)"
      v-show="isIconBtn || index < showIndex"
      v-for="(item, index) in operatingData" :key="index"
      v-text="item.icon ? '' : item.name"
      :title="item.icon ? item.name : ''"
      :class="item.icon"
    />
    <smLink
      v-if="!isIconBtn && operatingData.length > 3"
      @click="onExpand"
      :class="expand ? '' : 'gennlife_Dir_Up'"
      :title="expand ? '展开' : '收起'"
    >{{expand ? '...' : ''}}</smLink>
  </div>
</template>

<script>
export default {
  name: 'smTableOperating',
  title: '表格操作',
  props: {
    operatingData: { type: Array, default: () => ([]) }
  },
  data () {
    return {
      showIndex: 3
    }
  },
  computed: {
    expand () {
      return this.showIndex < this.operatingData.length
    },
    isIconBtn () {
      return this.operatingData.some(item => item.icon)
    }
  },
  methods: {
    onClick (item) {
      this.$emit('onClick', item)
    },
    onExpand () {
      if (this.showIndex < this.operatingData.length) {
        this.showIndex = this.operatingData.length
      } else {
        this.showIndex = 3
      }
    }
  }
}
</script>

<style scoped lang='stylus'>

</style>

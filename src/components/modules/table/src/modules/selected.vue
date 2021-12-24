<template>
  <p
    class="sm-table-selected"
    v-show="selectionLen"
    >
    <span class="ml16">已选择 {{selectionLen}} 条数据</span>
    <smLink
      class='rf mt4'
      style='margin-right: 16px;font-size: 14px;'
      @click="toggleSelection"
    >取消选择</smLink>
    <span class='cb' ></span>
  </p>
</template>
<script>
import smLink from '@modules/link/src/index.vue'
export default {
  name: 'smTableSelected',
  props: { sessionKey: { type: String } },
  components: { smLink },
  data () {
    return {
      selectionLen: 0
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.getSelection()
    },
    change (row) {
      this.getSelection(row)
    },
    getSelection (row) {
      if (row && row.length) {
        this.selectionLen = row.length
        return
      }
      const sessionStr = sessionStorage.getItem(this.sessionKey)
      this.selectionLen = sessionStr ? JSON.parse(sessionStr).length : 0
    },
    toggleSelection () {
      sessionStorage.removeItem(this.sessionKey)
      this.$emit('toggleSelection')
    }
  }
}
</script>

<style scoped lang='stylus'>
.sm-table-selected{
  height $mediumHeight
  line-height $mediumHeight
  font-size $fontSizeBase
  border 1px solid $primary
  border-radius 4px
  margin-bottom 4px
  @extend .activeBackColor
  span{
    color rgba(0, 0, 0, 0.65)
  }
}
</style>

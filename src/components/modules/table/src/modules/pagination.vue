<template>
  <div class='rt mt8' v-if="page">
    <smPagination
      background
      :page-sizes="[10, 20, 50]"
      layout='total, prev, pager, next, sizes, jumper'
      :current-page="currentPage"
      :current-size="pageSize"
      :total="total"
      @size-change="sizeChange"
      @current-change="currentChange"
    />
  </div>
</template>

<script>
import smPagination from '@modules/pagination/src/index.vue'
export default {
  name: '',
  components: { smPagination },
  props: {
    currentPage: { type: Number, default: 1 },
    pageSize: { type: Number, default: 10 },
    page: { type: Object },
    total: { type: Number, default: 0 }
  },
  data () {
    return {
    }
  },
  methods: {
    sizeChange (pageSize) {
      this.$listeners.sizeChange && this.$listeners.sizeChange(pageSize)
    },
    currentChange (pageNum) {
      this.$listeners.currentChange && this.$listeners.currentChange(pageNum)
    }
  }
}
</script>

<style scoped lang='stylus'>

</style>

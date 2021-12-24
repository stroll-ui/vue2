<template>
  <div class=" sm-main-box">
    <smPagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, prev, pager, next, sizes, jumper"
      :total="1000"
    />
  </div>
</template>

<script>
export default {
  name: 'paginationShow',
  title: '分页',
  hide: false,
  data () {
    return {
      currentPage: 3
    }
  },
  methods: {
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>

<style scoped lang='stylus'></style>

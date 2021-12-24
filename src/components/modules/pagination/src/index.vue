<script>
import { Pagination } from 'element-ui'
export default {
  name: 'smPagination',
  title: '分页',
  components: { Pagination },
  render (h, _) {
    const styleStr = ''
    const classStr = ''
    const { props: vnodeProps } = this.$vnode.data
    const props = { ...vnodeProps, ...this.$attrs }
    const on = { ...this.$listeners }
    return h('Pagination', {
      style: `${styleStr}`,
      class: `${classStr}`,
      props,
      on: {
        ...on,
        'size-change' (pageSize) {
          on['size-change'] && on['size-change'](pageSize)
        },
        'current-change' (pageNum) {
          on['current-change'] && on['current-change'](pageNum)
        }
      }
    })
  }
}
</script>

<style scoped lang='stylus'>
@import url('~@theme/pagination.css')
.default{
  background-color rgba(225,225,225,0)
  border-radius 4px
  border 1px solid #D9D9D9
  margin 0 3px
  &:hover {
    color $primary
    border-color $primary
  }
}
.el-pagination {
  /deep/ button[disabled=disabled] {
    color #C3C3C3
    border-color #C3C3C3
    background-color #F5F5F5
  }
}
/deep/ .btn-prev, /deep/ .btn-next {
  @extend .default
}
/deep/ .el-pager {
  .number{
    @extend .default
  }
  .active{
    background-color $primary !important
    color #fff !important
  }
}
/deep/ .el-pagination__jump{
  margin-left 0 !important
}
</style>

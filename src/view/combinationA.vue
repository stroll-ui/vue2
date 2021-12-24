<template>
  <smTable
    tag="table"
    number
    offset="0"
    :tables="selectionTables"
    :searchParams="searchParams"
    :options="options"
    :pageParams="pageParams"
    :titleParams="titleParams"
    :rules="rules"
    :itemWidth="300"
    @selection-change="handleSelectionChange"
    @filter-change="filterChange"
    @search-change="searchChange"
    @sort-change="sortChange"
    @from-search="onSearch"
  />
</template>

<script>
export default {
  name: 'combinationShowA',
  title: '组合-1',
  hide: false,
  data () {
    const tableDataList = [
      // { id: 1, date: '1.2.3', name: '111' },
      // { id: 2, date: '1.2.3', name: '111' },
      // { id: 3, date: '1.2.3', name: '111' },
      // { id: 4, date: '1.2.3', name: '111' },
      // { id: 5, date: '1.2.3', name: '111' },
      // { id: 6, date: '1.2.3', name: '111' },
      // { id: 7, date: '1.2.3', name: '111' },
      // { id: 8, date: '1.2.3', name: '111' },
      // { id: 9, date: '1.2.3', name: '111' },
      { id: 10, date: '1', name: '1112' },
      { id: 11, date: '2', name: '2221' },
      { id: 13, date: '3', name: '33312' }
    ]
    return {
      options: {},
      rules: {
        // categoryName: [{ required: true, message: '请输入类目名称', trigger: 'blur' }]
      },
      searchParams: {
        params: [
          {
            props: {},
            name: '类目名称',
            key: 'categoryName',
            val: '',
            type: 'input'
          },
          {
            props: {},
            name: '类目名称',
            key: 'categoryName1',
            val: '',
            type: 'input'
          }
        ]
        // button: [
        //   {
        //     name: '重 置',
        //     style: 'float: right;',
        //     fn: this.onSearch
        //   },
        //   {
        //     name: '查 询',
        //     style: 'float: right; margin-right: 10px',
        //     type: 'primary',
        //     fn: this.onSearch
        //   }
        // ]
      },
      pageParams: {
        total: 1000,
        page: {
          pageNum: 1,
          pageSize: 10
        }
      },
      titleParams: {
        name: '标题',
        full: true,
        render: (h, _) => {
          return h('smButton', { props: { type: 'primary', size: 'small' } }, 'render')
        }
      },
      selectionTables: {
        data: tableDataList,
        cols: [
          { type: 'selection', minWidth: 120 },
          { label: 'id', prop: 'id', minWidth: 120 },
          {
            label: '名字',
            prop: 'approvalStatus',
            minWidth: 120,
            sortable: true,
            search: true,
            columnKey: 'approvalStatus',
            filters: [{ text: '2016-05-01', value: '2016-05-01' }, { text: '2016-05-02', value: '2016-05-02' }, { text: '2016-05-03', value: '2016-05-03' }, { text: '2016-05-04', value: '2016-05-04' }],
            render: (h, { row }) => {
              return h('span', {}, row.name)
            }
          },
          {
            label: '数据',
            prop: 'date',
            minWidth: 140
          },
          { label: '操作',
            fixed: 'right',
            prop: '@',
            minWidth: 180,
            render: (h, { $index, row }) => {
              return h('a', {
                props: { size: 'mini' },
                on: {
                  click: () => {
                    this.handleDelete($index, row)
                  }
                }
              }, '删除')
            }
          }
        ]
      }
    }
  },
  methods: {
    handleSelectionChange (val, selected) {
      console.log('multipleSelection', val, selected)
    },
    handleDelete (index, row) {
      console.log(index, row)
      this.selectionTables.data.splice(index, 1)
    },
    triggerOperating (row, type) {
      console.log(row, type)
    },
    filterChange (row) {
      console.log('filterChange', row)
    },
    searchChange (row) {
      console.log('searchChange', row)
    },
    sortChange ({ column, prop, order }) {
      console.log(column, prop, order)
    },
    onSearch (row) {
      console.log(row)
    },
    getList () {
      console.log('getList')
    }
  }
}
</script>

<style scoped lang='stylus'>

</style>

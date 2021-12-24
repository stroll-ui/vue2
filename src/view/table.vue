<template>
  <div class="">
    <smTable
      class="mb20"
      :tables="operatingTables"
      :operating="operating"
      :titleParams="titleParams"
      @selection-change="handleSelectionChange"
      @operating="triggerOperating"
      @filter-change="filterChange"
      @search-change="searchChange"
      @sort-change="sortChange"
    />

    <smTable
      class="mb20"
      tag="table"
      number
      offset="10"
      :tables="selectionTables"
      :pageParams="pageParams"
      @selection-change="handleSelectionChange"
      @filter-change="filterChange"
      @search-change="searchChange"
      @sort-change="sortChange"
      @search="onSearch"
    />

    <smTable
      class="mb20"
      :tables="operatingTables"
      :operating="operating2"
      @operating="triggerOperating"
      @search-change="searchChange"
      @sort-change="sortChange"
    />

    <smTable
      class="mb20"
      :tables="tables"
    />

    <smTable
      class="mb20"
      number
      :tables="tables"
    />

    <smTable class="mb20" :data="tableData">
      <smTableColumn prop="date" label="日期" width="180" />
      <smTableColumn prop="name" label="姓名" width="180" />
      <smTableColumn prop="address" label="地址" />
    </smTable>

  </div>
</template>

<script>
export default {
  name: 'tableShow',
  title: '表格',
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
      titleParams: {
        render: (h, _) => {
          return h(
            'smButton',
            {
              props: { type: 'primary', size: 'small' },
              on: {
                click: () => {
                  this.operatingTables.data.unshift({
                    ...this.operatingTables.addInfo,
                    isAdd: true
                  })
                }
              }
            }, '添加')
        }
      },
      operating: [
        { name: '查看', type: 'detail', icon: 'gennlife_Act_Copy' },
        { name: '编辑', type: 'edit', icon: 'gennlife_Act_Edit' },
        { name: '删除', type: 'delete', icon: 'gennlife_Act_Delet' }
      ],
      operating2: [
        { name: '查看', type: 'detail' },
        { name: '编辑', type: 'edit' },
        { name: '删除', type: 'delete' },
        { name: '查看', type: 'detail' },
        { name: '编辑', type: 'edit' },
        { name: '删除', type: 'delete' }
      ],
      pageParams: {
        total: tableDataList.length,
        page: {
          pageNum: 1,
          pageSize: 10
        }
      },
      selectionTables: {
        data: tableDataList,
        cols: [
          { type: 'selection', fixed: 'left', minWidth: 120 },
          { label: 'id', prop: 'id', fixed: 'left', minWidth: 120 },
          {
            label: '名字',
            prop: 'approvalStatus',
            minWidth: 120,
            sortable: true,
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
          {
            label: '数据',
            prop: 'date',
            minWidth: 140
          },
          {
            label: '数据',
            prop: 'date',
            minWidth: 140
          },
          {
            label: '数据',
            prop: 'date',
            minWidth: 140
          },
          {
            label: '数据',
            prop: 'date',
            minWidth: 140
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
      },
      operatingTables: {
        operatingMinWidth: 100,
        editInfo: { name: '' },
        addInfo: { date: '', name: '' },
        data: [
          { id: 0, date: '1.2.3', name: '111' },
          { id: 1, date: '1.2.3', name: '111' }
        ],
        cols: [
          {
            label: 'name',
            search: true,
            prop: 'name',
            minWidth: 120,
            render: (h, { row }) => {
              let displayKeys = []
              const text = row.name
              const _this = this
              if (row.isAdd) {
                displayKeys = Object.keys(_this.operatingTables.addInfo)
              } else if (row.isEdit) {
                displayKeys = Object.keys(_this.operatingTables.editInfo)
              }
              return h('div', {}, [
                h('span', { style: `display: ${displayKeys && displayKeys.includes('name') ? 'none' : 'block'}` }, text),
                h('smInput', {
                  style: `display: ${displayKeys && displayKeys.includes('name') ? 'block' : 'none'}`,
                  props: {
                    value: row.isEdit ? _this.operatingTables.editInfo.name : row.name
                  },
                  on: {
                    input: (val) => {
                      if (row.isEdit) {
                        _this.$set(_this.operatingTables.editInfo, 'name', val)
                        return
                      }
                      row.name = val
                    }
                  }
                })
              ])
            }
          },
          {
            prop: 'approvalStatus',
            minWidth: 120,
            sortable: true,
            search: true,
            columnKey: 'approvalStatus',
            filters: [{ text: '2016-05-01', value: '2016-05-01' }, { text: '2016-05-02', value: '2016-05-02' }, { text: '2016-05-03', value: '2016-05-03' }, { text: '2016-05-04', value: '2016-05-04' }],
            header: (h, ctx) => {
              return h('span', {}, '日期')
            },
            render: (h, { row }) => {
              let displayKeys = []
              const text = row.date
              const _this = this
              if (row.isAdd) {
                displayKeys = Object.keys(_this.operatingTables.addInfo)
              } else if (row.isEdit) {
                displayKeys = Object.keys(_this.operatingTables.editInfo)
              }
              console.log('displayKeys-date', displayKeys)
              return h('div', {}, [
                h('span', { style: `display: ${displayKeys && displayKeys.includes('date') ? 'none' : 'block'}` }, text),
                h('smInput', {
                  style: `display: ${displayKeys && displayKeys.includes('date') ? 'block' : 'none'}`,
                  props: {
                    value: row.isEdit ? _this.operatingTables.editInfo.date : row.date
                  },
                  on: {
                    input: (val) => {
                      if (row.isEdit) {
                        _this.$set(_this.operatingTables.editInfo, 'date', val)
                        return
                      }
                      row.date = val
                    }
                  }
                })
              ])
            }
          },
          {
            label: 'asdas',
            prop: 'approvalStatus',
            minWidth: 120
          },
          {
            label: 'asdas',
            prop: 'approvalStatus',
            minWidth: 120
          },
          {
            label: 'asdas',
            prop: 'approvalStatus',
            minWidth: 120
          },
          {
            label: 'asdas',
            prop: 'approvalStatus',
            minWidth: 120
          },
          {
            label: 'asdas',
            prop: 'approvalStatus',
            minWidth: 120
          },
          {
            label: 'asdas',
            prop: 'approvalStatus',
            minWidth: 120
          }
        ]
      },
      tables: {
        data: [{ id: 1, date: '1.2.3', name: '111' }, { id: 2, date: '1.2.3', name: '111' }],
        cols: [
          { label: 'name', prop: 'name', minWidth: 120 },
          {
            label: '名字',
            prop: 'approvalStatus',
            minWidth: 120,
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
            render: (h, ctx) => {
              return h('smButton', {
                props: { size: 'mini' },
                on: {
                  click: () => {
                    console.log(ctx)
                  }
                }
              }, 'render')
            }
          }
        ]
      },
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ]
    }
  },
  methods: {
    handleSelectionChange (val, selected) {
      console.log('multipleSelection', val, selected)
    },
    handleDelete (index, row) {
      this.selectionTables.data.splice(index, 1)
    },
    triggerOperating ({ row, $index }, { type }) {
      const tableEditKeys = Object.keys(this.operatingTables.editInfo)
      if (type === 'edit') {
        this.operatingTables.data.forEach(item => {
          this.$set(item, 'isEdit', false)
        })
        row.isEdit = true
        tableEditKeys.forEach(key => {
          if (row[key]) {
            this.$set(this.operatingTables.editInfo, 'name', row[key])
          }
        })
      } else if (['cancelEdit', 'affirmEdit'].includes(type)) {
        type === 'affirmEdit' && tableEditKeys.forEach(key => {
          if (row[key]) {
            row[key] = this.operatingTables.editInfo[key]
          }
        })
        row.isEdit = false
      } else if (type === 'delete') {
        this.operatingTables.data.splice($index, 1)
      } else if (type === 'add') {
        console.log(row)
      } else if (type === 'cancelAdd') {
        console.log(row, type)
      } else if (type === 'affirmAdd') {
        this.operatingTables.data.forEach(item => {
          item.isAdd = false
        })
        console.log(row, type)
      }
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
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>

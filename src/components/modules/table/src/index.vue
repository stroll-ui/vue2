<script>
import { Table, TableColumn } from 'element-ui'
import smTableSelected from './modules/selected.vue'
import smPagination from './modules/pagination.vue'
import smTableOperating from './modules/operating.vue'
import smTablePopover from './modules/popover.vue'
import smLink from '@modules/link/src/index.vue'
import smButton from '@modules/button/src/index.vue'
import smForm from '@modules/form/src/index.vue'
import smTitle from '@modules/title/src/index.vue'
export default {
  name: 'smTable',
  title: '表格',
  components: {
    smLink,
    smButton,
    smForm,
    smTitle,
    Table,
    TableColumn,
    smTableOperating,
    smTableSelected,
    smPagination,
    smTablePopover
  },
  data () {
    return {
      tag: '',
      offset: 0,
      offsetKeep: 0,
      tableHeight: '300',
      isPage: false,
      isSearch: false,
      isTitle: false,
      selectionData: [],
      data: []
    }
  },
  computed: {
    isAddList () {
      if (this.data && this.data.length) {
        return this.data.filter(item => item.isAdd)
      }
      return []
    }
  },
  render (h, _) {
    const styleStr = ''
    const classStr = ''
    const el = []
    const { pathname, hash } = location
    const hashPath = hash.split('?')
    const { default: defaultSlot } = this.$slots
    const { style: vnodeStyle, class: vnodeClass } = this.$vnode.data
    const { searchParams, options, rules, pageParams, titleParams, tables, tag, operating, offset = 0 } = this.$attrs
    const { name: titleName, render: titleRender, full } = titleParams || {}
    const attrsKeys = Object.keys(this.$attrs)
    const { operatingWidth, operatingMinWidth, cols, data: tablesData } = tables || {}
    const props = { data: tablesData, border: true, height: `${this.tableHeight}`, ...this.$attrs }
    const on = { ...this.$listeners }
    const sessionKey = `${tag}-${pathname}${hashPath[0]}`
    const _this = this
    this.tag = tag
    this.offset = offset
    this.isPage = !!pageParams
    this.isSearch = !!searchParams
    this.isTitle = !!titleParams
    this.data = tablesData
    const selectionProps = { isSelection: false, selectionLen: 0 }
    if (cols && cols.length) {
      cols.forEach((item, index) => {
        if (item.type === 'selection') {
          selectionProps.isSelection = true
        }
        const params = {
          props: item,
          key: item.columnkey || `${+new Date()}${index}`,
          scopedSlots: {
            default: item.render ? (props) => {
              return item.render(h, props)
            } : undefined,
            header: (props) => {
              const { column } = props
              const itemKeys = Object.keys(item)
              const headerEl = []
              if (item.header) {
                headerEl.push(item.header(h, props))
              } else {
                headerEl.push(h(
                  'span',
                  column.label
                ))
              }
              if (itemKeys.includes('search')) {
                headerEl.push(h(
                  'smTablePopover',
                  {
                    on: {
                      searchChange (value) {
                        on['search-change'] && on['search-change']({ row: item, value })
                      }
                    }
                  }
                ))
              }
              return h('span', headerEl)
            }
          }
        }
        el.push(h(
          'TableColumn',
          params
        ))
      })
      if (attrsKeys.includes('number')) {
        const numberEl = h(
          'TableColumn',
          {
            type: 'index',
            props: { label: '序号', fixed: cols[0].fixed },
            scopedSlots: {
              default: (props) => {
                const { page: { pageNum = 1, pageSize = 10 } } = pageParams || { page: {} }
                return h(
                  'span',
                  props.$index + 1 + ((pageNum - 1) * pageSize))
              }
            }
          }
        )
        if (el[0].data.props.type === 'selection') {
          el.splice(1, 0, numberEl)
        } else {
          el.unshift(numberEl)
        }
      }
    }

    if (operating && operating.length) {
      el.push(h(
        'TableColumn',
        {
          props: {
            fixed: 'right',
            width: `${typeof operatingWidth === 'number' ? `${operatingWidth}px` : operatingWidth}`,
            minWidth: `${typeof operatingMinWidth === 'number' ? `${operatingMinWidth}px` : operatingMinWidth}`
          },
          scopedSlots: {
            default: (props) => {
              const { row } = props
              const { icon } = operating[0]
              const smTableOperating = h('smTableOperating', {
                style: `display: ${row.isEdit || row.isAdd ? 'none' : 'block'}`,
                props: {
                  operatingData: operating
                },
                on: {
                  onClick: (item) => {
                    if (on.operating) {
                      on.operating(props, item)
                    } else {
                      console.log('缺少操作回调')
                    }
                  }
                }
              })
              return h('div', {
                // style: `display: ${row.isAdd ? 'none' : 'block'}`
              }, [
                smTableOperating,
                h(
                  'div',
                  { style: `display: ${row.isEdit ? 'block' : 'none'}` },
                  [
                    h(
                      'smLink',
                      {
                        class: icon ? 'gennlife_Act_ReduceSquare' : '',
                        props: { size: 'mini' },
                        attrs: { title: icon ? '取消' : '' },
                        on: {
                          click: () => {
                            if (on.operating) {
                              on.operating(props, { icon: 'gennlife_Act_ReduceSquare', type: 'cancelEdit', name: '取消' })
                            } else {
                              console.log('缺少操作回调')
                            }
                          }
                        }
                      },
                      icon ? '' : '取消'
                    ),
                    h(
                      'smLink',
                      {
                        class: icon ? 'gennlife_Act_Save' : '',
                        props: { size: 'mini' },
                        attrs: { title: icon ? '保存' : '' },
                        on: {
                          click: () => {
                            if (on.operating) {
                              on.operating(props, { icon: 'gennlife_Act_Save', type: 'affirmEdit', name: '确认' })
                            } else {
                              console.log('缺少操作回调')
                            }
                          }
                        }
                      },
                      icon ? '' : '保存'
                    )
                  ]
                ),
                h(
                  'div',
                  { style: `display: ${row.isAdd && _this.isAddList && _this.isAddList.length < 2 ? 'block' : 'none'}` },
                  [
                    h(
                      'smLink',
                      {
                        class: icon ? 'gennlife_Act_ReduceSquare' : '',
                        props: { size: 'mini' },
                        attrs: { title: icon ? '取消' : '' },
                        on: {
                          click: () => {
                            if (on.operating) {
                              on.operating(props, { icon: 'gennlife_Act_ReduceSquare', type: 'cancelAdd', name: '取消' })
                            } else {
                              console.log('缺少操作回调')
                            }
                          }
                        }
                      },
                      icon ? '' : '取消'
                    ),
                    h(
                      'smLink',
                      {
                        class: icon ? 'gennlife_Act_Save' : '',
                        props: { size: 'mini' },
                        attrs: { title: icon ? '保存' : '' },
                        on: {
                          click: () => {
                            if (on.operating) {
                              on.operating(props, { icon: 'gennlife_Act_Save', type: 'affirmAdd', name: '确认' })
                            } else {
                              console.log('缺少操作回调')
                            }
                          }
                        }
                      },
                      icon ? '' : '保存'
                    )
                  ]
                )
              ])
            },
            header: (_) => {
              return h('div', '操作')
            }
          }
        }
      ))
    }
    return h('div', { ref: 'smTableBox' }, [
      h(
        'smForm',
        {
          props: { formInfo: searchParams, rules, options },
          on: {
            search (searchList) {
              on['from-search'] && on['from-search'](searchList)
            }
          }
        }
      ),
      h('div', { class: 'bcf bor-rad4 pl20 pr20 pt20 pb20' }, [
        h(
          'smTitle',
          {
            props: { titleName, render: titleRender, full },
            on: { fullScreen: _this.onFullScreen }
          }
        ),
        h(
          'smTableSelected',
          {
            ref: 'smTableSelected',
            props: { selectionProps, sessionKey },
            on: { toggleSelection: _this.toggleSelection }
          }
        ),
        h(
          'Table',
          {
            ref: 'smTable',
            style: `${styleStr}; ${vnodeStyle}`,
            class: `${classStr} ${vnodeClass}`,
            props,
            on: {
              ...on,
              select (selection, row) {
                const selectionStr = JSON.stringify(selection)
                const rowStr = JSON.stringify(row)
                const sessionData = sessionStorage.getItem(sessionKey)
                _this.selectionData = sessionData ? JSON.parse(sessionData) : []
                if (selectionStr.includes(rowStr)) {
                  _this.selectionData.push(row)
                } else {
                  _this.selectionData = _this.selectionData.filter(val => {
                    return JSON.stringify(val) !== JSON.stringify(row)
                  })
                }

                sessionStorage.setItem(sessionKey, JSON.stringify(_this.selectionData))
                on['select'] && on['select'](_this.selectionData, row)
              },
              'select-all' (selection) {
                const sessionData = JSON.stringify(_this.selectionData) || ''
                if (selection && selection.length) {
                  selection.forEach(row => {
                    const rowStr = JSON.stringify(row)
                    if (!sessionData.includes(rowStr)) {
                      _this.selectionData.push(row)
                    }
                  })
                  sessionStorage.setItem(sessionKey, JSON.stringify(_this.selectionData))
                } else {
                  _this.selectionData = []
                  sessionStorage.removeItem(sessionKey)
                }
                on['select-all'] && on['select-all'](_this.selectionData)
                _this.toggleSelection(_this.selectionData)
                _this.selectionChange(_this.selectionData)
              },
              'selection-change' (selection) {
                on['selection-change'] && on['selection-change'](selection)
                _this.selectionChange(_this.selectionData)
                setTimeout(() => {
                  _this.setSmTableHeight()
                }, 20)
              },
              'filter-change' (filters) {
                on['filter-change'] && on['filter-change'](filters)
              }
            }
          },
          defaultSlot || el
        ),
        h('smPagination',
          {
            props: {
              currentPage: pageParams && pageParams.page ? pageParams.page.pageNum || 1 : 1,
              pageSize: pageParams && pageParams.page ? pageParams.page.pageSize || 10 : 10,
              page: pageParams,
              total: pageParams ? pageParams.total : 0
            },
            on: {
              'sizeChange' (pageSize) {
                pageParams.page.pageSize = pageSize
                on['size-change'] && on['size-change'](pageSize)
                _this.onParent(_this.$parent, 'getList')
              },
              'currentChange' (pageNum) {
                pageParams.page.pageNum = pageNum
                on['size-change'] && on['size-change'](pageNum)
                _this.onParent(_this.$parent, 'getList')
              }
            }
          }
        ),
        h(
          'div',
          {
            style: `display: ${_this.isAddList && _this.isAddList.length > 1 ? 'block' : 'none'}`,
            class: 'sm-table-addBtn'
          },
          [
            h(
              'smButton',
              {
                props: { size: 'small' },
                on: {
                  click: () => {
                    if (on.operating) {
                      tables.data = tables.data.filter(item => !item.isAdd)
                      on.operating({ row: tables.data }, { type: 'cancelAdd', name: '取消' })
                    } else {
                      console.log('缺少操作回调')
                    }
                  }
                }
              },
              '取消'
            ),
            h(
              'smButton',
              {
                props: { type: 'primary', size: 'small' },
                on: {
                  click: () => {
                    if (on.operating) {
                      const addData = []
                      tables.data.forEach(item => {
                        if (item.isAdd) {
                          addData.push({ ...item })
                        }
                      })
                      tables.data.forEach(item => {
                        item.isAdd = false
                      })
                      on.operating({ row: addData }, { type: 'affirmAdd', name: '确认' })
                    } else {
                      console.log('缺少操作回调')
                    }
                  }
                }
              },
              '确认'
            )
          ]
        )
      ])
    ])
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      const { pathname, hash } = location
      const hashPath = hash.split('?')
      const session = sessionStorage.getItem(`${this.tag}-${pathname}${hashPath[0]}`)
      this.selectionData = session ? JSON.parse(session) : []
      this.toggleSelection(this.selectionData)
      window.addEventListener('resize', this.setSmTableHeight)
      this.$nextTick(() => {
        this.setSmTableHeight()
      })
    },
    onParent ($parent, key) {
      if ($parent[key]) {
        $parent[key] && $parent[key]()
      } else if ($parent.$parent) {
        this.onParent($parent.$parent, key)
      }
    },
    toggleSelection (val) {
      if (val && val.length) {
        val.forEach(row => {
          this.data.forEach(item => {
            if (JSON.stringify(item) === JSON.stringify(row)) {
              this.$refs.smTable.toggleRowSelection(item, true)
            }
          })
        })
      }
      this.selectionChange(val)
    },
    selectionChange (row) {
      if (row && row.length) {
        this.$refs.smTableSelected && this.$refs.smTableSelected.change(row.length)
      } else {
        this.$refs.smTable && this.$refs.smTable.clearSelection()
        this.$refs.smTableSelected && this.$refs.smTableSelected.change(0)
      }
    },
    async onFullScreen () {
      const el = this.$refs.smTableBox
      const isFullScreen = await this.$isFullScreen()
      if (isFullScreen) {
        this.offsetKeep = 0
        await this.$exitFullScreen()
      } else {
        this.offsetKeep = this.offset - 80
        await this.$fullScreen(el)
      }
    },
    setSmTableHeight (adjustment) {
      const type = {}.toString.call(adjustment)
      const typeList = ['[object String]', '[object Number]']
      const ignoreType = ['[object Event]', '[object Undefined]', '[object Null]']
      if (!typeList.includes(type) && !ignoreType.includes(type)) {
        console.error(`setSmTableHeight 传入类型 ${type} 错误，请传入 Number 类型`)
      } else if (type === '[object Event]') { adjustment = 0 }
      const offset = parseInt(this.offsetKeep || this.offset) + parseInt(adjustment || 0) + 120
      const windowHeight = window.innerHeight
      const smTableSelectedHeight = this.$refs.smTableSelected ? this.$refs.smTableSelected.$el.offsetHeight : 0
      const smSearchHeight = this.isSearch ? 56 : -10
      const smPagingHeight = this.isPage ? 60 : 20
      const smTitleHeight = this.isTitle ? 35 : 0
      const searchAndPaging = parseInt(smSearchHeight) + parseInt(smPagingHeight) + smTableSelectedHeight + smTitleHeight
      this.tableHeight = parseInt(windowHeight) - searchAndPaging - offset
    }
  },
  beforeUpdate () {
    this.$nextTick(() => {
      this.$refs['smTable'].doLayout()
    })
  },
  beforeMount () {
    window.removeEventListener('resize', this.setSmTableHeight)
  }
}
</script>

<style scoped lang='stylus'>
@import url('~@theme/table.css');

.el-table {
  width: 99.9%;
}

/deep/ .el-table__body tr.hover-row td, /deep/ .el-table__body tr.el-table__row:hover td {
  background-color: rgba(0, 135, 255, 0.1) !important;
}

/deep/ .el-table__column-filter-trigger {
  margin-left: 2px;

  .el-icon-arrow-down {
    font-size: 16px;
    font-family: 'iconfont' !important;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    position: relative;
    top: 1px;

    &:before {
      content: '\e6c4';
    }
  }
}
/deep/ .highlight{
  &>span{
    &>span{
      color #909399
    }
  }
  .el-table__column-filter-trigger {
    .el-icon-arrow-down {
      &:before {
        color: #0087FF
      }
    }
  }
}

/deep/ .caret-wrapper {
  margin-left: 2px;
}

.sm-table-addBtn{
  position fixed
  bottom 36px
  right 49px
  z-index 9
}
</style>

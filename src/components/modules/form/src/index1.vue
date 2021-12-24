<script>
import { Form, FormItem } from 'element-ui'
import smInput from '@modules/input/src/index.vue'
import smButton from '@modules/button/src/index.vue'
export default {
  name: 'smForm',
  title: '表单',
  components: { Form, FormItem, smInput, smButton },
  data () {
    return {
      formParams: {}
    }
  },
  render (h, _) {
    const { formInfo, itemWidth } = this.$attrs // options
    const { search } = this.$listeners // options
    const { props: vnodeProps = {}, style: vnodeStyle, class: vnodeClass } = this.$vnode.data
    const { button, params } = formInfo || vnodeProps.formInfo || {}
    if (!formInfo && !vnodeProps.formInfo) { return h('div') }
    this.formParams = params
    const _this = this
    let el = []
    const itemType = {
      input: (item) => {
        return [h(
          'smInput',
          {
            style: `${item.style}`,
            class: `${item.class}`,
            props: { size: 'small', ...item.props, value: item.val },
            on: {
              click () {
                _this.$listeners.change && _this.$listeners.change(params)
              },
              input (val) {
                item.val = val
              }
            }
          },
          item.render ? item.render(h, item) : undefined
        )]
      }
    }
    if (params && params.length) {
      params.forEach(item => {
        el.push(h(
          'FormItem',
          {
            class: 'item-default',
            style: `width: ${_this.getItemWidth(itemWidth, item)}`,
            ref: item.ref || item.key,
            props: { label: item.name, prop: item.key, width: item.itemWidth }
          },
          itemType[item.type](item)
        ))
      })
    }
    if (button && button.length) {
      const buttonEl = []
      button.forEach(item => {
        buttonEl.push(h(
          'smButton',
          {
            props: {
              type: item.type || '',
              size: item.size || 'medium'
            },
            on: {
              click () {
                item.fn && item.fn(params)
              }
            }
          },
          item.name
        ))
      })
      el.push(h(
        'div',
        { class: 'btnBox' },
        buttonEl
      ))
    } else {
      el.push(h(
        'div',
        { class: 'btnBox' },
        [
          h(
            'smButton',
            {
              props: { type: '', size: 'medium' },
              on: {
                click () {
                  _this.onReset()
                }
              }
            },
            '重 置'
          ),
          h(
            'smButton',
            {
              props: { type: 'primary', size: 'medium' },
              on: {
                click () {
                  _this.validate((val) => {
                    console.log(val)
                  })
                  search && search(params)
                }
              }
            },
            '查 询'
          )
        ]
      ))
    }
    el.push(h('div', { class: 'cb' }))
    return h('div', {
      class: `sm-form bcf bor-rad4 mb8`
    }, [h(
      'Form',
      {
        ref: 'sm-form',
        style: `${vnodeStyle}`,
        class: `${vnodeClass}`,
        props: { 'labelWidth': '108px', size: 'small', ...vnodeProps, ...this.$attrs },
        on: { ...this.$listeners }
      },
      el
    )])
  },
  methods: {
    getItemWidth (itemWidth, item) {
      if (item.width) {
        return this.nbrOrStr(item.width)
      }
      return this.nbrOrStr(itemWidth)
    },
    nbrOrStr (val) {
      if (typeof val === 'number') {
        return `${val}px`
      }
      return val
    },
    validate (fn) {
      if (fn) {
        return
      }
      // eslint-disable-next-line promise/param-names
      return new Promise(res => {
        res(true)
      })
    },
    validateField (props, fn) {
      this.$refs['sm-form'].resetFields(props, fn)
    },
    resetFields () {
      // eslint-disable-next-line promise/param-names
      return new Promise((res, rej) => {
        try {
          const props = this.formParams.map(item => {
            item.val = ''
            return item.key
          })
          this.clearValidate(props)
          res(true)
        } catch (error) {
          rej(error)
        }
      })
    },
    resetField (ref) {
      this.$refs[ref].resetField()
    },
    clearValidate (props) {
      this.$refs['sm-form'].clearValidate(props)
    },
    async onReset () {
      await this.resetFields()
      this.$emit('getList')
    }
  }
}
</script>

<style scoped lang='stylus'>
@import url('~@theme/form.css')
@import url('~@theme/form-item.css')
.el-form {
  padding-bottom 12px
}
.el-form-item--small.el-form-item {
  margin-top 12px
  margin-bottom 0px
}
.btnBox{
  display inline-block
  margin-top 12px
  padding-right 12px
  float right
}
.item-default {
  width 300px
  float left
}
</style>

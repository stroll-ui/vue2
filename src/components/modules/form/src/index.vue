<template>
<div v-if="formInfo.params && formInfo.params.length" class="sm-form bcf bor-rad4 mb8">
  <Form
    ref="smForm"
    :label-position="formInfo.labelPosition || 'right'"
    :model="params"
    :rules="rules"
    @submit.native.prevent
  >
    <template v-for="(item, index) in formInfo.params">
      <FormItem
        class="item-default"
        v-if="!item.disblock"
        v-show="!item.isHide"
        :label-width="formInfo.labelWidth || '108px'"
        :key="index"
        :label="!item.labelShow ? `${item.name}:` : ''"
        :prop="item.key"
        :ref="item.key"
        :style="formItemStyle(item)"
        :required="item.required"
      >
        <template v-if="['password', 'input', 'text'].includes(item.type)">
          <smInput
            :type="item.type"
            :size="item.size || 'small'"
            v-model.trim="params[item.key]"
            @keyup.native.enter="submitForm"
            :render="item.render"
            :clearable="!item.clearable"
            :disabled="!!item.disabled"
            :maxlength="item.maxlength || 150"
            :placeholder="item.placeholder || `输入${item.name || ''}`"
          />
        </template>
        <template v-else>
          <span>无此类型</span>
        </template>
      </FormItem>
    </template>
    <div class="btnBox" v-if="formInfo.button && formInfo.button.length">
      <smButton
        v-for="(item, index) in formInfo.button" :key="index"
        :type="item.type || ''" :size="item.size || 'medium'" @click="item.fn(params)">{{item.name}}</smButton>
    </div>
    <div v-else class="btnBox">
      <smButton size="medium" @click="resetFields('reset')">
        {{defaultButton[type] ? defaultButton[type].reset : defaultButton.default.reset}}
      </smButton>
      <smButton type="primary" size="medium" @click="submitForm('submit')">
        {{defaultButton[type] ? defaultButton[type].submit : defaultButton.default.submit}}
      </smButton>
    </div>
    <div class="cb"></div>
  </Form>
</div>
</template>

<script>
import { Form, FormItem } from 'element-ui'
import smInput from '@modules/input/src/index.vue'
import smButton from '@modules/button/src/index.vue'
export default {
  name: 'smForm',
  components: { Form, FormItem, smInput, smButton },
  props: {
    type: {
      type: String,
      default: 'default'
    },
    itemWidth: {
      type: [String, Number],
      default: 300
    },
    options: {
      type: Object,
      default: () => ({})
    },
    formInfo: {
      type: Object,
      default: () => ({
        itemWidth: null,
        params: [],
        button: []
      })
    },
    rules: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      params: {},
      defaultButton: {
        default: {
          reset: '重 置',
          submit: '查 询'
        },
        edit: {
          reset: '取 消',
          submit: '确 认'
        }
      }
    }
  },
  created () {
    this.getParams()
  },
  mounted () {
    // this.init()
  },
  methods: {
    init () {},
    submitForm (type) {
      this.$refs.smForm.validate((valid) => {
        if (valid) {
          const params = Object.assign({}, this.params)
          this.$listeners.search && this.$listeners.search(params, type)
          if (this.type !== 'default') {
            this.resetFields()
          }
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    validateField (props, fn) {
      return this.$refs.smForm.validateField(props, fn)
    },
    resetFields () {
      this.$refs.smForm.resetFields()
    },
    resetField (ref) {
      this.$refs[ref].resetField()
    },
    clearValidate (props) {
      this.$refs.smForm.clearValidate(props)
    },
    getParams () {
      const rulesKey = Object.keys(this.rules)
      this.formInfo.params.forEach(item => {
        if (item.key) {
          let val = item.val
          if (rulesKey.includes(item.key) && this.options[item.key]) {
            if (!val) {
              val = this.options[this.options][0][item.optionsKey || 'key']
            }
          }
          this.$set(this.params, item.key, val)
        }
      })
    },
    formItemStyle (item) {
      if (item.width) {
        return `width: ${this.nbrOrStr(item.width)}`
      }
      return `width: ${this.nbrOrStr(this.itemWidth || 0)}`
    },
    nbrOrStr (val) {
      if (typeof val === 'number') {
        return `${val}px`
      }
      return val
    }
  }
}
</script>

<style scoped lang="stylus">
@import url('~@theme/form.css')
@import url('~@theme/form-item.css')
.el-form {
  padding-bottom 12px
}
.el-form-item {
  margin-top 12px
  margin-bottom 0px
}
.btnBox{
  display inline-block
  margin-top 16px
  padding-right 12px
  float right
}
.item-default {
  width 300px
  float left
}
/deep/ .el-form-item__error{
  top 95%
  padding-top: 0
}
</style>

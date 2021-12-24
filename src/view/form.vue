<template>
  <div class="pl20 pr20 bcf bor-rad4">
    <smForm
      @search="formChange"
      labelWidth="81px"
      itemWidth="100%"
      :formInfo="formInfo"
      :rules="rules"
      type="edit"
    />
  </div>
</template>

<script>
export default {
  name: 'formShow',
  title: '表单',
  hide: false,
  data () {
    return {
      rules: {
        categoryName: [{ required: true, message: '请输入类目名称', trigger: 'blur' }],
        categoryName1: [{ required: true, message: '请输入类目名称', trigger: 'blur' }]
      },
      options: {},
      formInfo: {
        params: [
          {
            name: '类目名称',
            key: 'categoryName',
            val: '',
            type: 'input'
          },
          {
            props: {},
            render (h, _) {
              return [
                h('i', { slot: 'prepend', class: 'gennlife_Act_Search' }),
                h('i', { slot: 'append', class: 'gennlife_Show_Calendar' })
              ]
            },
            name: '类目名称',
            key: 'categoryName1',
            val: '',
            type: 'input'
          },
          {
            props: {},
            // render (h, _) {
            //   return [
            //     h('i', { slot: 'prepend', class: 'gennlife_Act_Search' }),
            //     h('i', { slot: 'append', class: 'gennlife_Show_Calendar' })
            //   ]
            // },
            name: '类目名称',
            key: 'categoryName2',
            val: '',
            type: 'input'
          }
        ]
        // button: [
        //   {
        //     name: '取 消',
        //     fn: this.onCancel
        //   },
        //   {
        //     name: '新 建',
        //     type: 'primary',
        //     fn: this.onSubmit
        //   }
        // ]
      }
    }
  },
  methods: {
    formChange (row) {
      console.log(row)
    },
    onSubmit (row) {
      console.log('onSubmit', row)
    },
    onCancel (row) {
      console.log('onCancel', row)
    }
  }
}
</script>

<style scoped lang='stylus'>

</style>

<template>
  <smBox>
    <p>
      <smButton plain @click="open1"> 可自动关闭 </smButton>
      <smButton plain @click="open2"> 不会自动关闭 </smButton>
    </p>
    <p>
      <smButton plain @click="open3"> 成功 </smButton>
      <smButton plain @click="open4"> 警告 </smButton>
      <smButton plain @click="open5"> 消息 </smButton>
      <smButton plain @click="open6"> 错误 </smButton>
    </p>
    <p>
      <smButton plain @click="open7"> 右上角 </smButton>
      <smButton plain @click="open8"> 右下角 </smButton>
      <smButton plain @click="open9"> 左下角 </smButton>
      <smButton plain @click="open10"> 左上角 </smButton>
    </p>
    <p>
      <smButton plain @click="open"> 偏移的消息 </smButton>
      <smButton plain @click="open0"> 隐藏关闭按钮 </smButton>
    </p>
  </smBox>
</template>

<script>
export default {
  name: 'notificationShow',
  title: '通知提示',
  hide: false,
  data () {
    return {
    }
  },
  mounted () {
    console.log(this)
  },
  methods: {
    open1 () {
      const h = this.$createElement

      this.$notify({
        title: '标题名称',
        message: h('i', { style: 'color: teal' }, '这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案')
      })
    },

    open2 () {
      this.$notify({
        title: '提示',
        message: '这是一条不会自动关闭的消息',
        duration: 0
      })
    },
    open3 () {
      this.$notify({
        title: '成功',
        message: '这是一条成功的提示消息',
        type: 'success'
      })
    },

    open4 () {
      this.$notify({
        title: '警告',
        message: '这是一条警告的提示消息',
        type: 'warning'
      })
    },

    open5 () {
      this.$notify.info({
        title: '消息',
        message: '这是一条消息的提示消息'
      })
    },

    open6 () {
      this.$notify.error({
        title: '错误',
        message: '这是一条错误的提示消息'
      })
    },
    open7 () {
      this.$notify({
        title: '自定义位置',
        message: '右上角弹出的消息'
      })
    },

    open8 () {
      this.$notify({
        title: '自定义位置',
        message: '右下角弹出的消息',
        position: 'bottom-right'
      })
    },

    open9 () {
      this.$notify({
        title: '自定义位置',
        message: '左下角弹出的消息',
        position: 'bottom-left'
      })
    },

    open10 () {
      this.$notify({
        title: '自定义位置',
        message: '左上角弹出的消息',
        position: 'top-left'
      })
    },

    open0 () {
      this.$notify.success({
        title: 'Info',
        message: '这是一条没有关闭按钮的消息',
        showClose: false
      })
    },

    open () {
      this.$notify({
        title: 'HTML 片段',
        dangerouslyUseHTMLString: true,
        message: '<strong>这是 <i>HTML</i> 片段</strong>'
      })
    }
  }
}
</script>

<style scoped lang='stylus'>
p{
  margin-bottom: 20px
}
</style>

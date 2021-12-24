<template>
  <div class=" sm-main-box">
    <smPopover placement="top-start" title="标题" width="200" trigger="hover">
      <div @change="() => {}" b="aa">
        这是一段内容,这是一段内容,这是一段内容,这是一段内容。
      </div>
      <smButton a="dd" @click="() => {}" slot="reference">hover 激活</smButton>
    </smPopover>
    <smPopover
      class="ml20"
      placement="bottom"
      title="标题"
      width="200"
      trigger="click"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
    >
      <smButton slot="reference"><div @click="onClick">click 激活</div></smButton>
    </smPopover>
  </div>
</template>

<script>
export default {
  name: 'popoverShow',
  title: '弹出框提示',
  hide: false,
  data () {
    return {
      visible: false
    }
  },
  methods: {
    onClick () {
      console.log(1)
    }
  }
}
</script>

<style scoped lang='stylus'></style>

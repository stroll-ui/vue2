<template>
  <smBox>
    <ul>
      <li>
        <smPopconfirm
          title="这是一段内容确定删除吗？"
          class="mr30"
        >
          <smButton slot="reference">删除</smButton>
        </smPopconfirm>
        <smPopconfirm
          confirm-button-text='好的'
          cancel-button-text='不用了'
          icon="el-icon-info"
          icon-color="red"
          title="这是一段内容确定删除吗？"
        >
          <smButton slot="reference">删除</smButton>
        </smPopconfirm>
      </li>
    </ul>
  </smBox>
</template>

<script>
export default {
  name: 'popconfirmShow',
  title: '弹出框确认',
  hide: false,
  data () {
    return {
    }
  },
  methods: {}
}
</script>

<style scoped lang='stylus'>

</style>

<template>
  <smBox class="bcf" offset="-46" >
    <smTags v-model="activeName" @tab-click="handleClick">
      <smTabPane label="用户管理" name="first">用户管理</smTabPane>
      <smTabPane label="配置管理" name="second">配置管理</smTabPane>
      <smTabPane label="角色管理" name="third">角色管理</smTabPane>
      <smTabPane label="定时任务补偿" name="fourth">定时任务补偿</smTabPane>
    </smTags>
  </smBox>
</template>

<script>
export default {
  name: 'tagsShow',
  title: '标签页',
  hide: false,
  data () {
    return {
      activeName: 'second'
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style scoped lang='stylus'>

</style>

<template>
  <div class="transferBox sm-main-box">
    <h4 class="mb20">Transfer 穿梭框</h4>
    <ul class="list">
      <li class="mb30 item">
        <p class="mb10">基础穿梭框</p>
        <smTransfer v-model="value" :data="list" :titles="['源列表', '目标列表']"></smTransfer>
      </li>

      <li class="mb30 item">
        <p class="mb10">带搜索的穿梭框</p>
        <smTransfer
          v-model="value"
          :data="list"
          filterable
          filter-placeholder="请输入关键字搜索" :titles="['源列表', '目标列表']">
        </smTransfer>
      </li>

      <li class="mb30 item">
        <p class="mb10">表格穿梭框 - 表格组件完成后完善</p>
        <smTransfer v-model="value" :data="list" :titles="['源列表', '目标列表']"></smTransfer>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'transferShow',
  title: '穿梭框',
  hide: false,
  data () {
    return {
      list: [
        { key: 1, label: `备选项 1`, disabled: false },
        { key: 2, label: `备选项 2`, disabled: true },
        { key: 3, label: `备选项 3`, disabled: false },
        { key: 4, label: `备选项 4`, disabled: false },
        { key: 5, label: `备选项 5`, disabled: false },
        { key: 6, label: `备选项 6`, disabled: false }
      ],
      value: [1, 4]
    }
  },
  methods: {}
}
</script>

<style scoped lang='stylus'>
</style>

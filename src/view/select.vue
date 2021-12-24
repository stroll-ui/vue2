<template>
  <ul class=" sm-main-box">
    <li class="mb20">
      <smButton type="primary" @click="$onClick">测试</smButton>
    </li>
    <li>
      <smSelect
        class="mr10"
        @change="change"
        v-model="value"
        :optionList="optionList"
      ></smSelect>
      <smSelect
        class="mr10"
        @change="change"
        disabled
        v-model="value"
        :optionList="optionList"
      ></smSelect>
    </li>
    <li class="mt10">
      <smSelect
        class="mr10"
        @change="change"
        multiple
        v-model="value1"
        :optionList="optionList"
      ></smSelect>
      <smSelect
        class="mr10"
        @change="change"
        multiple
        collapse-tags
        v-model="value1"
        :optionList="optionList"
      ></smSelect>
    </li>
    <li class="mt10">
      <smSelect class="mr10" v-model="value3" placeholder="请选择">
        <smOption
          v-for="item in cities"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
          <span style="float: left">{{ item.label }}</span>
          <span style="float: right; color: #8492a6; font-size: 13px">{{
            item.value
          }}</span>
        </smOption>
      </smSelect>
      <smSelectTree
        class="mr10"
        :value="treeValue"
        :treeProps="{ data: treeData }"
      ></smSelectTree>
      <!-- <smSelectTree
        class="mr10"
        :value="treeValue1"
        multiple
        :treeProps="{ data: treeData, showCheckbox: true }"
      ></smSelectTree> -->
    </li>
    <li class="mt10">
      <smSelect
        class="mr10"
        size="medium"
        @change="change"
        v-model="value"
        :optionList="optionList"
      ></smSelect>
    </li>
    <li class="mt10">
      <smSelect
        class="mr10"
        size="small"
        @change="change"
        v-model="value"
        :optionList="optionList"
      ></smSelect>
    </li>
    <li class="mt10">
      <smSelect
        class="mr10"
        size="mini"
        @change="change"
        v-model="value"
        :optionList="optionList"
      ></smSelect>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'selectShow',
  title: '选择框',
  hide: false,
  data () {
    return {
      value: '1',
      value1: [],
      value3: '',
      treeValue: '',
      treeValue1: [],
      treeData: [
        {
          value: 1,
          label: 'text1',
          children: [
            { value: 5, label: 'text5' },
            { value: 6, label: 'text6' }
          ]
        },
        { value: 2, label: 'text2' },
        { value: 3, label: 'text3' },
        { value: 4, label: 'text5' }
      ],
      cities: [{
        value: 'Beijing',
        label: '北京'
      }, {
        value: 'Shanghai',
        label: '上海'
      }, {
        value: 'Nanjing',
        label: '南京'
      }, {
        value: 'Chengdu',
        label: '成都'
      }, {
        value: 'Shenzhen',
        label: '深圳'
      }, {
        value: 'Guangzhou',
        label: '广州'
      }],
      optionList: [
        { val: '11111', key: '1' },
        { val: '22222', key: '2' },
        { val: '33333', key: '3' }
      ]
    }
  },
  methods: {
    selectTreeInput (val) {
      console.log(val)
    },
    $onClick () {
      console.log(this.value, this.value1, this.value3, this.treeValue, this.treeValue1)
    },
    change (val) {
      // console.log(val)
    }
  }
}
</script>

<style scoped lang='stylus'></style>

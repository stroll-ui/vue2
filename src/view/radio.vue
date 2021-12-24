<template>
  <ul class=" sm-main-box">
    <li>
      <smRadio v-model="radio" label="1" >单选</smRadio>
      <smRadio v-model="radio" label="2" >单选</smRadio>
      <smRadio v-model="radio" disabled label="3" >单选</smRadio>
      <smRadio v-model="radio" label="4" border >单选</smRadio>
      <smRadio v-model="radio" label="5" size="medium" border >单选</smRadio>
      <smRadio v-model="radio" label="6" size="small" border >单选</smRadio>
      <smRadio v-model="radio" label="7" size="mini" border >单选</smRadio>
    </li>
    <li class="mt10">
      <smRadioGroup v-model="radio1" :radioList="radioList" ></smRadioGroup>
    </li>
    <li class="mt10">
      <smRadioGroup v-model="radio2" :radioList="radioList" type="button" ></smRadioGroup>
    </li>
    <li class="mt10">
      <smRadioGroup v-model="radio3" >
        <smRadio label="6" >单选</smRadio>
        <smRadio label="7" >单选</smRadio>
      </smRadioGroup>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'radioShow',
  title: '单选框',
  hide: false,
  data () {
    return {
      radio: '1',
      radio1: '1',
      radio2: '1',
      radio3: '1',
      radioList: [
        { label: '1', value: '单选' },
        { label: '2', value: '单选' },
        { label: '3', value: '单选' }
      ]
    }
  },
  methods: {}
}
</script>

<style scoped lang='stylus'>

</style>

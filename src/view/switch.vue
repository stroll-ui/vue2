<template>
  <smBox>
    <ul>
      <li>
        <smSwitch
          v-model="value"
          active-color="#13ce66"
          inactive-color="#ff4949"
        />
      </li>
      <li>
        <smSwitch
          v-model="value1"
          active-text="按月付费"
          inactive-text="按年付费"
        />
        <smSwitch
          v-model="value2"
          active-color="#13ce66"
          inactive-color="#ff4949"
          active-text="按月付费"
          inactive-text="按年付费"
        />
      </li>
      <li>
        <smSwitch
          v-model="value3"
          active-text="按月付费"
          inactive-text="按年付费"
          disabled
        />
        <smSwitch
          v-model="value3"
          active-color="#13ce66"
          inactive-color="#ff4949"
          active-text="按月付费"
          inactive-text="按年付费"
          disabled
        />
      </li>
      <li>
        <smTooltip :content="'Switch value: ' + value4" placement="top">
          <smSwitch
            v-model="value4"
            active-color="#13ce66"
            inactive-color="#ff4949"
            active-value="100"
            inactive-value="0"
          />
        </smTooltip>
      </li>
      <li>
        <smTooltip placement="top">
          <div slot="content">多行信息<br/>第二行信息</div>
          <smSwitch
            v-model="value5"
            active-color="#13ce66"
            inactive-color="#ff4949"
            active-value="100"
            inactive-value="0"
          />
        </smTooltip>
      </li>
    </ul>
  </smBox>
</template>

<script>
export default {
  name: 'switchShow',
  title: '开关',
  hide: false,
  data () {
    return {
      value: '',
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      value5: ''
    }
  },
  methods: {}
}
</script>

<style scoped lang='stylus'>
.sm-switch {
  margin-right: 20px
  margin-bottom: 30px
}
</style>
